import { api } from '../../config/axios'
import { GithubProfile } from '../../types/github'

export async function getMyGithubProfile(): Promise<GithubProfile> {
  const response = await api.get('/users/cesarneo')

  return response.data
}
