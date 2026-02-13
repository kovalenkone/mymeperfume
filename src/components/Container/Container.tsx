import type { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
  return <div className='flex flex-col gap-6 px-10 py-6'>{children}</div>
}

export { Container }
