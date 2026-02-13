import type { TKanbanColor } from '@/shared/types/kanban-colors.type'

export interface IKAnbanBoard {
  title: string
  color: TKanbanColor
}

export const KANBAN_BOARDS: IKAnbanBoard[] = [
  {
    title: 'In preparation',
    color: 'blue',
  },
  {
    title: 'In production',
    color: 'turquoise',
  },
  {
    title: 'Ready',
    color: 'green',
  },
  {
    title: 'Shipped',
    color: 'orange',
  },
]
