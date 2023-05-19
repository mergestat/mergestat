import { gql } from '@apollo/client'

const EXPLORE = gql`
  query exploreUI($params: JSON!) {
    exploreUi(params: $params)
  }
`

export { EXPLORE }
