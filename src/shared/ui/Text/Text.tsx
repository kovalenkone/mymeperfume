import clsx from 'clsx'
import type { ElementType, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface ITextProps extends PropsWithChildren {
  as?: 'span' | 'p'
  color?: 'primary' | 'secondary' | 'muted'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

const Text = ({
  as = 'p',
  color = 'primary',
  size = 'md',
  weight = 'regular',
  className,
  children,
}: ITextProps) => {
  const Component: ElementType = as

  const textStyles = clsx(`text-${color} text-${size} font-${weight}`)

  return (
    <Component className={twMerge(textStyles, className)}>{children}</Component>
  )
}

Text.displayName = 'Text'

export { Text }
