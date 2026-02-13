import type { ComponentPropsWithoutRef } from 'react'

const ChevronRightIcon = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M9 4L17 12L9 20'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export { ChevronRightIcon }
