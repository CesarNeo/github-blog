import { LineSkeleton } from './LineSkeleton'

export const PostCardSkeleton = () => {
  return (
    <div className="rounded-xl border-2 border-transparent bg-base-post p-8">
      <div className="animate-pulse">
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div className="flex w-full max-w-[17.6875rem] flex-col gap-2">
            <LineSkeleton className="h-6 w-full" />
            <LineSkeleton className="h-6 w-1/2" />
          </div>
          <LineSkeleton className="mt-1 h-5 w-14" />
        </div>

        <div className="mt-5">
          <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-base-border" />
          <div className="mb-2.5 h-2 rounded-full bg-base-border" />
          <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-base-border" />
          <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-base-border" />
          <div className="h-2 max-w-[360px] rounded-full bg-base-border" />
        </div>
      </div>
    </div>
  )
}
