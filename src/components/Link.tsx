import { ArrowSquareOut, CaretLeft } from '@phosphor-icons/react'
import { AnchorHTMLAttributes, FunctionComponent } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: 'back' | 'square-out'
}

export const Link: FunctionComponent<Props> = ({ icon, children, ...rest }) => {
  return (
    <a
      {...rest}
      className="flex items-start gap-2 border-b border-transparent pb-[2px] text-xs font-bold uppercase leading-none text-blue transition-all hover:border-b-blue"
    >
      {icon === 'back' && (
        <CaretLeft size={12} className="h-3 w-3" weight="bold" />
      )}
      {children}
      {icon === 'square-out' && (
        <ArrowSquareOut size={12} className="h-3 w-3" weight="bold" />
      )}
    </a>
  )
}
