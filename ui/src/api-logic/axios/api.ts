import axios from 'axios'
import { API } from 'src/utils/constants'

/**
 * Method to try to login against Github to validate token
 * @param pat Token to validate
 * @returns true if token is right, otherwise return false
 */
export const validateGtihubToken = async (pat: string) => {
  try {
    const response = await axios.post(API.GITHUB_GRAPHQL,
      { query: 'query { viewer { login }}' },
      { headers: { Authorization: `Bearer ${pat}` } }
    )
    return response.status === 200
  } catch (error) {
    return false
  }
}
