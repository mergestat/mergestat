import { gql } from '@apollo/client'

const EXPLORE = gql`
  mutation exploreUI($params: JSON!) {
    exploreUi(input: {params: $params}) {
      json
    }
  }
`

export { EXPLORE }
