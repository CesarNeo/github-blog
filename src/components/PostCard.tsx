export const PostCard = () => {
  return (
    <a
      href="/issues/1"
      className="rounded-xl border-2 border-transparent bg-base-post p-8 transition-all hover:border-base-label"
    >
      <div className="flex items-start justify-between">
        <strong className="max-w-[17.6875rem] text-xl text-base-title">
          JavaScript data types and data structures
        </strong>
        <span className="mt-1 whitespace-nowrap">Há 1 dia</span>
      </div>

      <p className="mt-5">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </a>
  )
}
