import type { ComponentPropsWithoutRef } from 'react'

const DotsIcon = ({ className, ...props }: ComponentPropsWithoutRef<'svg'>) => {
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
        d='M12 14C13.1471 14 14.0769 13.1046 14.0769 12C14.0769 10.8954 13.1471 10 12 10C10.8529 10 9.92308 10.8954 9.92308 12C9.92308 13.1046 10.8529 14 12 14Z'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M19.2692 13.6667C20.2251 13.6667 21 12.9205 21 12C21 11.0795 20.2251 10.3333 19.2692 10.3333C18.3134 10.3333 17.5385 11.0795 17.5385 12C17.5385 12.9205 18.3134 13.6667 19.2692 13.6667Z'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4.73077 13.6667C5.68665 13.6667 6.46154 12.9205 6.46154 12C6.46154 11.0795 5.68665 10.3333 4.73077 10.3333C3.77489 10.3333 3 11.0795 3 12C3 12.9205 3.77489 13.6667 4.73077 13.6667Z'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export { DotsIcon }
