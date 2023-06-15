import { useQuery } from '@tanstack/react-query'
import { getMyGithubProfile } from '../services/http/github'
import { ContainerStatus } from '../components/ContainerStatus'
import { Link } from '../components/Link'
import { PostCard } from '../components/PostCard'

export function Home() {
  const { data: githubProfile, isLoading } = useQuery({
    queryKey: ['github-profile'],
    queryFn: getMyGithubProfile,
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="grid grid-cols-[auto,1fr] gap-8 rounded-xl bg-base-profile px-10 py-8 shadow-base-card">
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

            <Link
              href={githubProfile?.html_url}
              icon="square-out"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <p className="mt-2 leading-relaxed text-base-text">
            {githubProfile?.bio}
          </p>

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

      <div className="mt-20 flex w-full items-center justify-between">
        <h2 className="text-lg font-bold text-base-subtitle">Publicações</h2>
        <p className="text-sm text-base-span">6 publicações</p>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-base-border bg-base-input px-4 py-3 focus-within:border-blue">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="bg- w-full bg-base-input text-base-text outline-none placeholder:text-base-label"
        />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  )
}
