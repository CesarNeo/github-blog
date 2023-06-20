import { Image as ImageIcon } from '@phosphor-icons/react'
import { PostCardSkeleton } from './PostCardSkeleton'
import { LineSkeleton } from './LineSkeleton'

export function HomeSkeleton() {
  return (
    <>
      <div className="rounded-xl bg-base-profile px-5 py-5 shadow-base-card md:px-10 md:py-8">
        <div className="flex animate-pulse flex-col items-center gap-8 md:grid md:grid-cols-[auto,1fr]">
          <div className="flex h-[4.625rem] w-[4.625rem]  items-center justify-center rounded-lg bg-base-border md:h-[9.25rem] md:w-[9.25rem]">
            <ImageIcon className="h-6 w-6 text-base-span" />
          </div>
          <div>
            <div className="flex flex-col items-center justify-between md:flex-row">
              <LineSkeleton className="h-8 w-60" />

              <LineSkeleton className="h-4 w-16" />
            </div>
            <LineSkeleton className="mt-2 h-4 w-full" />
            <LineSkeleton className="mt-2 h-4 w-1/2" />

            <div className="mt-6 grid grid-cols-2 gap-2 md:flex md:flex-row md:items-center md:gap-6">
              <LineSkeleton className="h-4 w-28" />
              <LineSkeleton className="h-4 w-28" />
              <LineSkeleton className="h-4 w-28" />
            </div>
          </div>
        </div>
      </div>

      <div className="animate-pulse">
        <div className="mt-20 flex w-full items-center justify-between">
          <LineSkeleton className="h-7 w-24" />
          <LineSkeleton className="h-4 w-20" />
        </div>

        <div className="mt-3 h-14 rounded-lg bg-base-border" />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    </>
  )
}
