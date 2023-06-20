import { useQuery } from '@tanstack/react-query'
import { ContainerStatus } from '../components/ContainerStatus'
import { Link } from '../components/Link'
import { getMyRepositoryIssue } from '../services/http/github'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'
import { IssueSkeleton } from '../components/IssueSkeleton'

export function Issue() {
  const { issueNumber } = useParams<{ issueNumber: string }>()

  const { data: issue, isLoading } = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getMyRepositoryIssue(Number(issueNumber)),
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
    enabled: !!issueNumber,
  })

  if (isLoading) {
    return <IssueSkeleton />
  }

  const timePublishedFromNow = dayjs(issue?.updated_at).fromNow()

  return (
    <>
      <div className="rounded-xl bg-base-profile px-10 py-8 shadow-base-card">
        <div className="flex items-center justify-between">
          <Link href="/" icon="back">
            Voltar
          </Link>

          <Link href={issue?.html_url} icon="square-out" target="_blank">
            Ver no github
          </Link>
        </div>

        <h1 className="mt-5 text-2xl font-bold text-base-title">
          {issue!.title}
        </h1>

        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:mt-2 md:flex md:flex-row md:items-center md:gap-6">
          <ContainerStatus status={issue!.user.login} icon="github" />
          <ContainerStatus status={timePublishedFromNow} icon="published" />
          <ContainerStatus
            status={`${issue!.comments} ${
              issue!.comments > 1 ? 'comentários' : 'comentário'
            }`}
            icon="comments"
          />
        </div>
      </div>

      <ReactMarkdown className="prose w-full max-w-full px-8 py-10 md:prose-xl prose-headings:text-base-title prose-p:text-base-text prose-a:text-blue prose-strong:text-base-text">
        {issue!.body}
      </ReactMarkdown>
    </>
  )
}
