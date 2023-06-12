import { useQuery } from '@tanstack/react-query'
import { getMyGithubProfile } from '../services/http/github'
import { ContainerStatus } from '../components/ContainerStatus'

export function Home() {
  const { data: githubProfile, isLoading } = useQuery({
    queryKey: ['github-profile'],
    queryFn: getMyGithubProfile,
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="grid grid-cols-[auto,1fr] gap-8 bg-base-profile px-10 py-8">
        <img
          src={githubProfile?.avatar_url}
          alt={githubProfile?.name}
          className="h-[9.25rem] w-[9.25rem] rounded-lg"
        />
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-base-title">
              {githubProfile?.name}
            </h1>
          </div>
          <p className="mt-2 text-base-text">{githubProfile?.bio}</p>

          <div className="mt-6 flex items-center gap-6">
            <ContainerStatus status={githubProfile!.login} icon="github" />
            <ContainerStatus status={githubProfile!.company} icon="company" />
            <ContainerStatus
              status={`${githubProfile!.followers} seguidores`}
              icon="followers"
            />
          </div>
        </div>
      </div>
    </>
  )
}
