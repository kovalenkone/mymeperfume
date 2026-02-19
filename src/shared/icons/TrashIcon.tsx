import type { ComponentPropsWithoutRef } from 'react'

const TrashIcon = ({
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
        d='M2.22021 6H22.2202M10.2202 11V16M14.2202 11V16M4.22021 6H20.2202L18.6402 20.22C18.5861 20.7094 18.3533 21.1616 17.9865 21.49C17.6197 21.8184 17.1446 22 16.6522 22H7.78821C7.29585 22 6.82078 21.8184 6.45396 21.49C6.08715 21.1616 5.85437 20.7094 5.80021 20.22L4.22021 6ZM7.56521 3.147C7.72697 2.80397 7.98292 2.514 8.30322 2.31091C8.62352 2.10782 8.99496 2 9.37422 2H15.0662C15.4456 1.99981 15.8173 2.10755 16.1378 2.31064C16.4583 2.51374 16.7144 2.80381 16.8762 3.147L18.2202 6H6.22021L7.56521 3.147Z'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='square'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export { TrashIcon }
