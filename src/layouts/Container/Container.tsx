import type { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[1920px] flex-col px-2.5 py-2.5 sm:px-5 sm:py-5 2xl:px-[60px]'>
      {children}
    </div>
  )
}

export { Container }
