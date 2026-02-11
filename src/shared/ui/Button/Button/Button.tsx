import clsx from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'blue' | 'outline' | 'orange' | 'ghost' | 'gray' | 'white'
  stretch?: boolean
  loading?: boolean
}

const Button = ({
  children,
  size = 'md',
  disabled = false,
  variant = 'blue',
  stretch = false,
  loading = false,
  type = 'button',
  className,
  ...props
}: ButtonProps) => {
  const buttonStyles = clsx(
    {
      'bg-blue text-white': variant === 'blue',
      'border text-black-85 border-border': variant === 'outline',
      'bg-orange text-white': variant === 'orange',
      'text-black-85': variant === 'ghost',
      'bg-white': variant === 'white',
      'bg-black-50 text-black-85 border border-border-muted':
        variant === 'gray',
      'px-3 h-10 text-sm': size === 'sm',
      'px-3 sm:h-12 h-10 text-md': size === 'md',
      'px-2 h-[60px] text-md': size === 'lg',
      'w-full': stretch,
    },
    'rounded-sm font-medium leading-[100%]',
  )

  return (
    <button
      type={type}
      disabled={disabled}
      aria-busy={loading}
      className={twMerge(buttonStyles, className)}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
