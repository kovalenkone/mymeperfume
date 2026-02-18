import type { TKanbanColor } from '@/shared/types/kanban-colors.type'
import type { ITask } from '@/shared/types/task.type'
import { useSortable } from '@dnd-kit/react/sortable'
import clsx from 'clsx'

interface IKanbanTaskProps {
  task: ITask
  index: number
  column: string
  color: TKanbanColor
}

const KanbanTask = ({ task, index, column, color }: IKanbanTaskProps) => {
  const { ref, isDragging } = useSortable({
    id: task.id,
    index,
    type: 'item',
    accept: 'item',
    group: column,
  })

  return (
    <div
      ref={ref}
      className={clsx(
        `bg-background-secondary! hover:shadow-task cursor-pointer rounded-lg border-l-4! transition duration-300`,
        {
          'shadow-task': isDragging,
          'border-status-blue!': color === 'blue',
          'border-status-green!': color === 'green',
          'border-status-turquoise!': color === 'turquoise',
          'border-status-orange!': color === 'orange',
        },
      )}
    >
      <div className='border-border flex flex-col gap-3 border-b py-4 pr-6 pl-5'>
        <p className='text-md font-semibold'>
          {task.title} {task.id}
        </p>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2.5'>
            <span className='text-muted text-sm'>Customer:</span>
            <span className='text-sm font-medium'>{task.customer}</span>
          </div>
          <div className='flex items-center gap-2.5'>
            <span className='text-muted text-sm'>Manager:</span>
            <span className='text-sm font-medium'>{task.manager}</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between pt-3 pr-4 pb-3.5 pl-5'>
        <span className='text-muted text-sm'>Start date: {task.startDate}</span>
        <span className='text-muted text-sm'>End date: {task.endDate}</span>
      </div>
    </div>
  )
}

export { KanbanTask }
