import { getApolloClient } from './client'

const client = getApolloClient()

const query = async (query: any, variables?: Array<any>) => {
  try {
    const result = await client.query({
      query,
      variables,
    })
    return result
  } catch (err) {
    console.log(err)
  }
}

const mutate = async (mutation: any, variables?: Array<any>) => {
  try {
    const result = await client.mutate({
      mutation,
      variables,
    })
    return result
  } catch (err) {
    console.log(err)
  }
}

export { query, mutate }
