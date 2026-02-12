import { KanbanTask } from '../KanbanTask'

const KanbanBoard = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='border-border flex h-11 items-center gap-2 border-b-4'>
        <p className='text-lg font-bold uppercase'>In preparation</p>
        <span className='text-'>(640)</span>
      </div>
      <div className='flex flex-col gap-3.5'>
        <KanbanTask />
      </div>
    </div>
  )
}

export { KanbanBoard }
