import clsx from 'clsx'
import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'red' | 'black' | 'blue'
  size?: 'sm' | 'md'
  className?: string
}

const Anchor = ({
  href,
  variant = 'black',
  size = 'sm',
  className,
  children,
  ...props
}: IAnchorProps) => {
  const anchorStyles = clsx('py-1 flex items-center gap-2', {
    'text-red font-bold': variant === 'red',
    'text-blue': variant === 'blue',
    'text-black-85': variant === 'black',
    'text-sm py-1': size === 'sm',
    'text-md py-2.5': size === 'md',
  })

  return (
    <Link to={href} className={twMerge(anchorStyles, className)} {...props}>
      {children}
    </Link>
  )
}

export { Anchor }
