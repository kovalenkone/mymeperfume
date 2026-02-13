import type { ComponentPropsWithoutRef } from 'react'

const PencilIcon = ({
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
        d='M4.33333 16.3333L17.6667 3L21 6.33333L7.66667 19.6667M4.33333 16.3333L3 21L7.66667 19.6667M4.33333 16.3333L7.66667 19.6667M15 5.66667L18.3333 9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export { PencilIcon }
