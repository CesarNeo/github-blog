import {
  Buildings,
  CalendarBlank,
  ChatCircle,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { FunctionComponent } from 'react'

type Props = {
  status: string
  icon: 'github' | 'company' | 'followers' | 'published' | 'comments'
}

const icons = {
  github: <GithubLogo className="h-[18px] w-[18px]" weight="fill" />,
  company: (
    <Buildings className="h-[18px] w-[18px] text-base-label" weight="fill" />
  ),
  followers: <Users className="h-[18px] w-[18px]" weight="fill" />,
  published: <CalendarBlank className="h-[18px] w-[18px]" weight="fill" />,
  comments: <ChatCircle className="h-[18px] w-[18px]" weight="fill" />,
}

export const ContainerStatus: FunctionComponent<Props> = ({ status, icon }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-base-label">{icons[icon]}</div>
      <span className="text-base-subtitle">{status}</span>
    </div>
  )
}
