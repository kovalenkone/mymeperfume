import type { ITaskStatus } from '@/shared/types/task-status.type'

interface IStatusBarProps {
  statuses: ITaskStatus[]
}

const StatusBar = ({ statuses }: IStatusBarProps) => {
  return (
    <div className='bg-background flex h-10 w-max overflow-hidden rounded-[20px]'>
      {statuses.map(status => (
        <button className='text-md text-muted flex h-full items-center justify-center gap-1.5 rounded-[20px] px-5 font-medium'>
          <status.icon className='size-4' />
          {status.label}
        </button>
      ))}
    </div>
  )
}

export { StatusBar }
