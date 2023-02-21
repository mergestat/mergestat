import { gql } from '@apollo/client'

const ADD_GIT_SOURCE = gql`
  mutation addGitSource($name: String!, $settings: JSON!, $vendor: String!) {
    createProvider(
      input: {provider: {name: $name, vendor: $vendor, settings: $settings}}
    ) {
      provider {
        id
        name
      }
    }
  }
`

export { ADD_GIT_SOURCE }
