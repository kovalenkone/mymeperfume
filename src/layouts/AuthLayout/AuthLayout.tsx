import banner from '@/assets/images/auth-banner.jpg'
import logo from '@/assets/images/auth-logo.png'
import type { PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex h-screen grid-cols-2'>
      <div className='flex flex-1 flex-col items-center gap-10 pt-[138px]'>
        <img src={logo} alt='ASMOS logotype' />
        <div className='bg-background-secondary shadow-auth w-[424px] rounded-xl p-8'>
          {children}
        </div>
      </div>
      <div className='h-full flex-1'>
        <img
          className='h-full w-full object-cover'
          src={banner}
          alt='authorization banner'
        />
      </div>
    </div>
  )
}

export { AuthLayout }
