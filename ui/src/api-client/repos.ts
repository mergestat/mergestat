import axios from 'axios'
import { API } from 'src/constants/axios'

export const getRepos = async () => {
  const { data } = await axios.get(`${API}/repos`)
  return data
}
