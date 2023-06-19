import { api } from '../../config/axios'
import { GithubIssue, GithubProfile, ListGithubIssue } from '../../types/github'

export async function getMyGithubProfile(): Promise<GithubProfile> {
  const response = await api.get('/users/cesarneo')

  return response.data
}

export const getMyRepositoryIssue = async (
  issueNumber: number,
): Promise<GithubIssue> => {
  const response = await api.get(
    `/repos/cesarneo/github-blog/issues/${issueNumber}`,
  )

  return response.data
}

export const listMyRepositoryIssues = async (
  searchIssue?: string,
): Promise<ListGithubIssue> => {
  const response = await api.get('/search/issues', {
    params: {
      q: `repo:cesarneo/github-blog ${searchIssue}`,
    },
  })

  return response.data
}
