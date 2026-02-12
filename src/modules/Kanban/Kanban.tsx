import { KanbanBoard } from './components/KanbanBoard'

const Kanban = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
      <KanbanBoard />
      <KanbanBoard />
      <KanbanBoard />
      <KanbanBoard />
    </div>
  )
}

export { Kanban }
