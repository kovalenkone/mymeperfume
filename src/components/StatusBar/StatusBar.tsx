import type { ITaskStatus } from '@/shared/types/task-status.type'
import clsx from 'clsx'
import { motion } from 'framer-motion'

interface IStatusBarProps {
  statuses: ITaskStatus[]
  value: string
  onChange: (value: string) => void
}

const StatusBar = ({ statuses, value, onChange }: IStatusBarProps) => {
  return (
    <div className='bg-background relative flex h-10 w-max overflow-hidden rounded-[20px]'>
      {statuses.map(status => {
        const isActive = status.value === value

        return (
          <button
            key={status.value}
            className='text-md text-muted relative h-full justify-center rounded-[20px] px-5 font-medium'
            onClick={() => onChange(status.value)}
          >
            {isActive && (
              <motion.span
                layoutId='floating-indicator'
                className={`absolute inset-0 rounded-[20px] bg-status-${status.color}`}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 40,
                }}
              />
            )}
            <span
              className={clsx('relative flex items-center gap-1.5 transition', {
                'text-white': isActive,
              })}
            >
              <status.icon className='size-4' />
              {status.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export { StatusBar }
