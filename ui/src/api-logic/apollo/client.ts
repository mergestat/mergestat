import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

let instance: any = null

const getApolloClient = () => {
  if (!instance) {
    instance = new ApolloClient({
      link: new HttpLink({ uri: process.env.POSTGRAPHILE_API, fetch }),
      cache: new InMemoryCache(),
    })
  }
  return instance
}

export { getApolloClient }
