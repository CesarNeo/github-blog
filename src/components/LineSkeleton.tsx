import { FunctionComponent } from 'react'

type Props = {
  className?: string
}

export const LineSkeleton: FunctionComponent<Props> = ({ className }) => {
  return <div className={`rounded-md bg-base-border ${className}`} />
}
