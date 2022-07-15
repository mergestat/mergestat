import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { getApolloClient } from 'src/graphql/apolloClient/client'
import LayoutWrapper from 'src/layouts/LayoutWrapper'
import '../styles/globals.css'

const client = getApolloClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ApolloProvider>
  )
}

export default MyApp
