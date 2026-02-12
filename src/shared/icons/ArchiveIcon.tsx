import type { ComponentPropsWithoutRef } from 'react'

const ArchiveIcon = ({
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
        d='M3.85714 7.25V20H20.1429V7.25M9.28571 10.7917H14.7143M2.5 3V7.25H21.5V3H2.5Z'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='square'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export { ArchiveIcon }
