export type GithubProfile = {
  login: string
  id: number
  name: string
  avatar_url: string
  html_url: string
  company: string
  bio: string
  followers: number
}

export type GithubIssue = {
  number: number
  html_url: string
  title: string
  body: string
  updated_at: Date
  created_at: Date
  user: {
    login: string
  }
  comments: number
}
