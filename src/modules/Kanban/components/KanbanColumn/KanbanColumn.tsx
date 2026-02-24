import { STATUS_COLORS } from '@/shared/constants/status-colors.constant'
import { useDroppable } from '@dnd-kit/react'
import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import type { IKanbanColumn } from '../../constants/kanban-columns.constant'

interface IKanbanColumnProps {
  board: IKanbanColumn
  total: number
}

const KanbanColumn = ({
  board,
  total,
  children,
}: PropsWithChildren<IKanbanColumnProps>) => {
  const { ref } = useDroppable({
    id: board.id,
    type: 'column',
    accept: 'item',
    collisionPriority: 2,
  })

  return (
    <div className='flex flex-col gap-6' ref={ref}>
      <div
        className={clsx(
          `flex h-11 items-center gap-2 border-b-4`,
          STATUS_COLORS[board.color].border,
        )}
      >
        <p
          className={clsx(
            `text-lg font-bold uppercase`,
            STATUS_COLORS[board.color].text,
          )}
        >
          {board.title}
        </p>
        <span className='text-muted text-xs'>({total})</span>
      </div>
      <div className='flex flex-col gap-3.5'>{children}</div>
    </div>
  )
}

export { KanbanColumn }
