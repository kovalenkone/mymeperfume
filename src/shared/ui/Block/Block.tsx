import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface BlockProps extends PropsWithChildren {
  bgImage?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

const Block = ({ children, bgImage, size = 'md', className }: BlockProps) => {
  const blockStyles = clsx(
    'sm:rounded-xl rounded-lg bg-white border border-border bg-center',
    {
      'bg-cover': !!bgImage,
      'py-[10px] sm:px-[20px] px-2.5': size === 'xs',
      'p-[20px]': size === 'sm',
      'sm:p-[40px] p-5': size === 'md',
      '2xl:p-[60px] sm:p-[40px] p-5': size === 'lg',
    },
  )

  return (
    <div
      className={twMerge(blockStyles, className)}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  )
}

export { Block }
