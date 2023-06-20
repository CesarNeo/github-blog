import { FunctionComponent } from 'react'
import { GithubIssue } from '../types/github'
import dayjs from 'dayjs'

type Props = {
  issue: GithubIssue
}

const regexRemoveSpecialCharacters = /[!@#$%^&*()":{}|<>]/g

export const PostCard: FunctionComponent<Props> = ({ issue }) => {
  const issueBodyExcerpt = issue.body
    .replace(regexRemoveSpecialCharacters, '')
    .substring(0, 145)
    .concat('...')
  const timePublishedFromNow = dayjs(issue.updated_at).fromNow()

  return (
    <a
      href={`/issues/${issue.number}`}
      className="rounded-xl border-2 border-transparent bg-base-post p-8 transition-all hover:border-base-label"
    >
      <div className="flex items-start justify-between">
        <strong className="max-w-[17.6875rem] text-xl text-base-title">
          {issue.title}
        </strong>
        <span className="mt-1 whitespace-nowrap">{timePublishedFromNow}</span>
      </div>

      <p className="mt-5">{issueBodyExcerpt}</p>
    </a>
  )
}
