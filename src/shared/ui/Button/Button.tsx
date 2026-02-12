import clsx from 'clsx'
import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {
  asChild?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'accent' | 'outline' | 'danger'
  stretch?: boolean
}

const Button = ({
  asChild = false,
  size = 'lg',
  variant = 'primary',
  stretch = false,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot.Root : 'button'

  const buttonStyles = clsx(
    'rounded-md font-medium text-md flex items-center gap-2 transition',
    {
      'bg-primary text-foreground-secondary hover:bg-primary-muted':
        variant === 'primary',
      'bg-accent text-foreground-secondary hover:bg-accent-muted active:bg-accent-dark':
        variant === 'accent',
      'bg-accent text-accent hover:bg-accent-muted active:bg-accent-dark':
        variant === 'outline',
      'bg-red text-red': variant === 'danger',
      'px-3 h-10 text-sm': size === 'sm',
      'px-6 h-11 text-sm': size === 'md',
      'px-6 h-12 text-md': size === 'lg',
      'w-full': stretch,
    },
  )

  return <Comp className={twMerge(buttonStyles, className)} {...props} />
}

export { Button }
