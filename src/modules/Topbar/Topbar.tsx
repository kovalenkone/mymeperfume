import { ExitIcon } from '@/shared/icons/ExitIcon'
import { UserIcon } from '@/shared/icons/UserIcon'
import { Text } from '@/shared/ui/Text'
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
              <Text size='lg'>Samuel Dupont</Text>
              <Text size='sm' color='muted'>
                Manager
              </Text>
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
