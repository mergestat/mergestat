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

/**
 * Method to login to Postgrahile
 * @param user Database user
 * @param password Database password
 * @returns true if it is logged in, otherwise returns false
 */
export const auth = async (user: string, password: string) => {
  try {
    const response = await axios.post('/api/admin-auth', { user, password })
    return response.status === 200
  } catch (error) {
    return false
  }
}

/**
 * Method to logout to Postgrahile
 * @returns true if it is logged out, otherwise returns false
 */
export const logout = async () => {
  try {
    const response = await axios.post('/api/logout')
    return response.status === 200
  } catch (error) {
    return false
  }
}
