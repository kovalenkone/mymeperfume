import type { TKanbanColor } from '@/shared/types/kanban-colors.type'

export interface IKanbanColumn {
  id: string
  title: string
  color: TKanbanColor
}

export const KANBAN_COLUMNS: IKanbanColumn[] = [
  {
    id: 'st1',
    title: 'In preparation',
    color: 'blue',
  },
  {
    id: 'st2',
    title: 'In production',
    color: 'turquoise',
  },
  {
    id: 'st3',
    title: 'Ready',
    color: 'green',
  },
  {
    id: 'st4',
    title: 'Shipped',
    color: 'orange',
  },
]
