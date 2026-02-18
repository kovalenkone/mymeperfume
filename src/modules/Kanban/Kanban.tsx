import type { ITask } from '@/shared/types/task.type'
import { move } from '@dnd-kit/helpers'
import { DragDropProvider } from '@dnd-kit/react'
import { useState } from 'react'
import { KanbanColumn } from './components/KanbanColumn'
import { KanbanTask } from './components/KanbanTask'
import { KANBAN_COLUMNS } from './constants/kanban-columns.constant'

const TASKS: Record<string, ITask> = {
  t1: {
    id: 't1',
    title: 'Summer breeze',
    customer: 'Jhon Jhonson',
    manager: 'Samuel Dupont',
    startDate: '02.02.26',
    endDate: '06.03.26',
  },
  t2: {
    id: 't2',
    title: 'Summer breeze',
    customer: 'Jhon Jhonson',
    manager: 'Samuel Dupont',
    startDate: '02.02.26',
    endDate: '06.03.26',
  },
  t3: {
    id: 't3',
    title: 'Summer breeze',
    customer: 'Jhon Jhonson',
    manager: 'Samuel Dupont',
    startDate: '02.02.26',
    endDate: '06.03.26',
  },
  t4: {
    id: 't4',
    title: 'Summer breeze',
    customer: 'Jhon Jhonson',
    manager: 'Samuel Dupont',
    startDate: '02.02.26',
    endDate: '06.03.26',
  },
}

const Kanban = () => {
  const [items, setItems] = useState({
    st1: ['t1', 't2'],
    st2: ['t3', 't4'],
    st3: [],
    st4: [],
  })

  return (
    <DragDropProvider
      onDragOver={event => {
        setItems(items => move(items, event))
      }}
    >
      <div className='grid grid-cols-4 gap-5'>
        {Object.entries(items).map(([column, tasks]) => {
          const currentColumn = KANBAN_COLUMNS.find(k => k.id === column)

          if (!currentColumn) return

          return (
            <KanbanColumn
              key={column}
              board={currentColumn}
              total={tasks.length}
            >
              {tasks.map((t, index) => {
                return (
                  <KanbanTask
                    key={t}
                    task={TASKS[t]}
                    index={index}
                    column={column}
                    color={currentColumn.color}
                  />
                )
              })}
            </KanbanColumn>
          )
        })}
      </div>
    </DragDropProvider>
  )
}

export { Kanban }
