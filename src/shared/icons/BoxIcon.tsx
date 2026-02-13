import type { ComponentPropsWithoutRef } from 'react'

const BoxIcon = ({ className, ...props }: ComponentPropsWithoutRef<'svg'>) => {
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
        d='M12 3V8.53846M14.0769 17.5385H17.5385M3 8.53846H21M3 8.53846V19.6154C3 19.9826 3.14588 20.3348 3.40554 20.5945C3.66521 20.8541 4.01739 21 4.38462 21H19.6154C19.9826 21 20.3348 20.8541 20.5945 20.5945C20.8541 20.3348 21 19.9826 21 19.6154V8.53846M3 8.53846L5.07692 4.53692C5.30083 4.08591 5.64346 3.70449 6.06797 3.43368C6.49248 3.16288 6.98279 3.01294 7.48615 3H16.5138C17.029 3.00027 17.5339 3.14426 17.9718 3.41577C18.4096 3.68728 18.763 4.07555 18.9923 4.53692L21 8.53846'
        stroke='black'
        stroke-width='1.5'
        stroke-linecap='square'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export { BoxIcon }
