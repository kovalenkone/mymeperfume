import type { ComponentPropsWithoutRef } from 'react'

const PlusIcon = ({ className, ...props }: ComponentPropsWithoutRef<'svg'>) => {
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
        d='M12 20V12M12 12V4M12 12H20M12 12H4'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='square'
      />
    </svg>
  )
}

export { PlusIcon }
