import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { concatPagination } from '@apollo/client/utilities'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { NextRouter, useRouter } from 'next/router'
import { useMemo } from 'react'
import { showErrorAlert } from 'src/utils/alerts'

let apolloClient: ApolloClient<NormalizedCacheObject>

const httpLink = new HttpLink({
  uri: '/api/graphql',
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
})

const logoutLink = (router: NextRouter) => onError(({ graphQLErrors }: any) => {
  if (graphQLErrors != null) {
    for (const err of graphQLErrors) {
      if (err.message.includes('jwt expired')) {
        router.push({ pathname: '/login', query: { lostSession: true } })
      } else {
        const message = err.message.includes('duplicate key value violates unique constraint')
        if (!message) showErrorAlert(err.message)
        return
      }
    }
  }
})

function createApolloClient(router: NextRouter) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: logoutLink(router).concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  })
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null, router: NextRouter) {
  const _apolloClient = apolloClient ?? createApolloClient(router)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState != null) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject) {
  const router = useRouter()
  const store = useMemo(() => initializeApollo(initialState, router), [initialState, router])
  return store
}
