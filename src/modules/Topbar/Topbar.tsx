import { ExitIcon } from '@/shared/icons/ExitIcon'
import { UserIcon } from '@/shared/icons/UserIcon'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <header className='bg-background-secondary border-border h-[72px] border-b'>
      <div className='flex h-full items-center px-10'>
        <div className='ml-auto flex items-center gap-2'>
          <div className='flex items-center gap-3'>
            <div className='border-border flex size-10 items-center justify-center rounded-full border'>
              <UserIcon />
            </div>
            <div className='flex min-w-[170px] flex-col gap-1'>
              <p className='text-lg'>Samuel Dupont</p>
              <p className='text-muted text-sm'>Manager</p>
            </div>
          </div>
          <Link to={''}>
            <ExitIcon />
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Topbar }
