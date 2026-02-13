import type { IKAnbanBoard } from '../../constants/kanban-boards.constant'
import { KanbanTask } from '../KanbanTask'

interface IKanbanBoardProps {
  board: IKAnbanBoard
}

const KanbanBoard = ({ board }: IKanbanBoardProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <div
        className={`border-status-${board.color} flex h-11 items-center gap-2 border-b-4`}
      >
        <p className={`text-status-${board.color} text-lg font-bold uppercase`}>
          {board.title}
        </p>
        <span className='text-muted text-xs'>(640)</span>
      </div>
      <div className='flex flex-col gap-3.5'>
        <KanbanTask color={board.color} />
        <KanbanTask color={board.color} />
        <KanbanTask color={board.color} />
      </div>
    </div>
  )
}

export { KanbanBoard }
