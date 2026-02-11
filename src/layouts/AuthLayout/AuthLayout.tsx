import { AuthBanner } from '@/shared/components/AuthBanner'
import type { IAuthBanner } from '@/shared/types/auth-banner.type'
import { Block } from '@/shared/ui/Block'
import type { PropsWithChildren } from 'react'

interface IAuthLayoutProps extends PropsWithChildren {
  banner: IAuthBanner
}

const AuthLayout = ({ children, banner }: IAuthLayoutProps) => {
  return (
    <div className='flex flex-col-reverse gap-1 sm:gap-2.5 lg:flex-row'>
      <div className='flex-1'>
        <AuthBanner banner={banner} />
      </div>
      <div className='flex-1'>
        <Block className='h-full pt-10 lg:min-h-[800px]'>
          <div className='flex h-full flex-col items-center justify-center gap-5 sm:gap-10'>
            {children}
          </div>
        </Block>
      </div>
    </div>
  )
}

export { AuthLayout }
