import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface LinkButtonProps extends LinkProps, PropsWithChildren {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'blue' | 'outline' | 'orange' | 'ghost' | 'gray' | 'white'
  stretch?: boolean
  loading?: boolean
}

const LinkButton = ({
  children,
  size = 'md',
  variant = 'blue',
  stretch = false,
  className,
  to,
  ...props
}: LinkButtonProps) => {
  const buttonStyles = clsx(
    {
      'bg-blue text-white': variant === 'blue',
      'border text-black-85 border-border': variant === 'outline',
      'bg-orange text-white': variant === 'orange',
      'text-black-85': variant === 'ghost',
      'bg-white': variant === 'white',
      'bg-black-50 text-black-85 border border-border-muted':
        variant === 'gray',
      'px-3 h-10': size === 'sm',
      'px-3 sm:h-12 h-10': size === 'md',
      'px-2 h-[60px]': size === 'lg',
      'w-full': stretch,
    },
    'flex items-center justify-center rounded-sm font-medium sm:text-md text-sm leading-[100%]',
  )

  return (
    <Link to={to} className={twMerge(buttonStyles, className)} {...props}>
      {children}
    </Link>
  )
}

export { LinkButton }
