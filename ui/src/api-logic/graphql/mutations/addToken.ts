
import { gql } from '@apollo/client'

const ADD_TOKEN = gql`
  mutation addToken($provider: UUID!, $token: String!, $type: String!) {
    addToken(provider: $provider, token: $token, type: $type)
  }
`

export { ADD_TOKEN }
