import type { ComponentPropsWithoutRef } from 'react'

const CheckIcon = ({
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
        d='M4 12L10 18L20 6'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export { CheckIcon }
