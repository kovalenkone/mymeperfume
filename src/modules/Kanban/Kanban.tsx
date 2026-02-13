import { KanbanBoard } from './components/KanbanBoard'
import { KANBAN_BOARDS } from './constants/kanban-boards.constant'

const Kanban = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
      {KANBAN_BOARDS.map(board => (
        <KanbanBoard key={board.title} board={board} />
      ))}
    </div>
  )
}

export { Kanban }
