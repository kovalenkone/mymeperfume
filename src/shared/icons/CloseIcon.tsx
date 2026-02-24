import type { ComponentPropsWithoutRef } from 'react'

const CloseIcon = ({
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
        d='M17.6568 17.6569L12 12M12 12L6.34313 6.34315M12 12L17.6568 6.34315M12 12L6.34313 17.6569'
        stroke='black'
        stroke-width='1.5'
        stroke-linecap='square'
      />
    </svg>
  )
}

export { CloseIcon }
