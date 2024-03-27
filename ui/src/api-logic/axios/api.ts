import axios, { AxiosError } from 'axios'
import { showErrorAlert } from 'src/utils/alerts'
import { API } from 'src/utils/constants'

/**
 * Method to handle Axios error
 * @param error Thrown error
 * @returns false
 */
const handleAxiosError = (error: AxiosError) => {
  if (error.response?.status !== 401) {
    showErrorAlert(error.message)
  }
  return false
}

/**
 * Method to try to login against Github or Gitlab to validate token
 * @param pat Token to validate
 * @param isGithub Is Github or Gitlab
 * @param baseURL Is the base URL, used for GitLab
 * @returns true if token is right, otherwise return false
 */
export const validateToken = async (pat: string, isGithub: boolean, baseURL: string) => {
  try {
    const url = isGithub ? API.GITHUB_GRAPHQL : (baseURL.length > 0 ? new URL('/api/graphql', baseURL).href : API.GITLAB_GRAPHQL)
    const query = isGithub ? 'query { viewer { login }}' : 'query { currentUser { name }}'

    const response = await axios.post(url,
      { query },
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
