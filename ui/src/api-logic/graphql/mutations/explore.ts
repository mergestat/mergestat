import { gql } from '@apollo/client'

const EXPLORE = gql`
  mutation explore($params: JSON!) {
    explore(input: {params: $params}) {
      json
    }
  }
`

export { EXPLORE }
