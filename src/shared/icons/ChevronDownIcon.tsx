import type { ComponentPropsWithoutRef } from 'react'

const ChevronDownIcon = ({
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
        d='M20 9L12 17L4 9'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='square'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export { ChevronDownIcon }
