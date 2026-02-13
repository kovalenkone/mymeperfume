import { BoxIcon } from '@/shared/icons/BoxIcon'
import { CheckIcon } from '@/shared/icons/CheckIcon'
import { ClockIcon } from '@/shared/icons/ClockIcon'
import { DotsIcon } from '@/shared/icons/DotsIcon'

const StatusPicker = () => {
  return (
    <div className='bg-background flex h-10 w-max overflow-hidden rounded-[20px]'>
      <button className='bg-status-blue text-foreground-secondary text-md flex h-full items-center justify-center gap-1.5 rounded-[20px] px-5 font-medium'>
        <DotsIcon className='size-4' />
        In preparation
      </button>
      <button className='text-md text-muted flex h-full items-center justify-center gap-1.5 rounded-[20px] px-5 font-medium'>
        <ClockIcon className='size-4' />
        In production
      </button>
      <button className='text-md text-muted flex h-full items-center justify-center gap-1.5 rounded-[20px] px-5 font-medium'>
        <CheckIcon className='size-4' />
        Ready
      </button>
      <button className='text-md text-muted flex h-full items-center justify-center gap-1.5 rounded-[20px] px-5 font-medium'>
        <BoxIcon className='size-4' />
        Shipping
      </button>
    </div>
  )
}

export { StatusPicker }
