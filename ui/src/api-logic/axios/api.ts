import axios, { AxiosError } from 'axios'
import { showErrorAlert } from 'src/utils/alerts'
import { API } from 'src/utils/constants'

/**
 * Method to handle Axios error
 * @param error Thrown error
 * @returns false
 */
const handleAxiosError = (error: AxiosError) => {
  showErrorAlert(error.message)
  return false
}

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
    return handleAxiosError(error as AxiosError)
  }
}

/**
 * Method to login to Postgraphile
 * @param user Database user
 * @param password Database password
 * @returns true if it is logged in, otherwise returns false
 */
export const auth = async (user: string, password: string) => {
  try {
    const response = await axios.post('/api/admin-auth', { user, password })
    return response.status === 200
  } catch (error) {
    return handleAxiosError(error as AxiosError)
  }
}

/**
 * Method to logout to Postgraphile
 * @returns true if it is logged out, otherwise returns false
 */
export const logout = async () => {
  try {
    const response = await axios.post('/api/logout')
    return response.status === 200
  } catch (error) {
    return handleAxiosError(error as AxiosError)
  }
}
