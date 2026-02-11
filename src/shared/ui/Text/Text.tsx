import clsx from 'clsx'
import type { ElementType, PropsWithChildren } from 'react'

interface ITextProps extends PropsWithChildren {
  as?: 'span' | 'p'
  color?: 'black-85' | 'black-50' | 'black-25' | 'black-10' | 'black-05'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  mobSize?: 'xs' | 'sm' | 'md' | 'lg'
  tightest?: boolean
  className?: string
}

const Text = ({
  children,
  as = 'p',
  color = 'black-85',
  size = 'md',
  weight = 'regular',
  tightest = false,
  mobSize,
}: ITextProps) => {
  const Component: ElementType = as

  const textStyles = clsx(
    `text-${color} text-${size} leading-${size} font-${weight}`,
    {
      [`md:text-${mobSize} md:leading-${mobSize}`]: !!mobSize,
      'tracking-tightest': tightest,
    },
  )

  return <Component className={textStyles}>{children}</Component>
}

Text.displayName = 'Text'

export { Text }
