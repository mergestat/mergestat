import { ApolloClient, InMemoryCache } from '@apollo/client'

let instance: any = null

const getApolloClient = () => {
  if (!instance) {
    instance = new ApolloClient({
      uri: process.env.POSTGRAPHILE_API,
      cache: new InMemoryCache(),
    })
  }
  return instance
}

export { getApolloClient }
