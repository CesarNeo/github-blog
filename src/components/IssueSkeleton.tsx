import { LineSkeleton } from './LineSkeleton'

export function IssueSkeleton() {
  return (
    <>
      <div className="rounded-xl bg-base-profile px-5 py-5 shadow-base-card md:px-10 md:py-8">
        <div className="animate-pulse">
          <div className="flex items-center justify-between">
            <LineSkeleton className="h-4 w-16" />

            <LineSkeleton className="h-4 w-16" />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-base-title">
            <LineSkeleton className="h-8 w-60" />
          </h1>

          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:mt-2 md:flex md:flex-row md:items-center md:gap-6">
            <LineSkeleton className="h-4 w-28" />
            <LineSkeleton className="h-4 w-28" />
            <LineSkeleton className="h-4 w-28" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-full animate-pulse px-8 py-10">
        <LineSkeleton className="h-8 w-60" />

        <div className="mt-5">
          <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-base-border" />
          <div className="mb-2.5 h-2 rounded-full bg-base-border" />
          <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-base-border" />
          <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-base-border" />
          <div className="h-2 max-w-[360px] rounded-full bg-base-border" />
        </div>
      </div>
    </>
  )
}
