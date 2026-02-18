import { BoxIcon } from '../icons/BoxIcon'
import { CheckIcon } from '../icons/CheckIcon'
import { ClockIcon } from '../icons/ClockIcon'
import { DotsIcon } from '../icons/DotsIcon'
import type { ITaskStatus } from '../types/task-status.type'

export const TASK_STATUSES: ITaskStatus[] = [
  {
    icon: DotsIcon,
    label: 'In preparation',
    value: 'preparation',
    color: 'blue',
  },
  {
    icon: ClockIcon,
    label: 'In production',
    value: 'production',
    color: 'blue',
  },
  {
    icon: CheckIcon,
    label: 'Ready',
    value: 'ready',
    color: 'blue',
  },
  {
    icon: BoxIcon,
    label: 'Shipping',
    value: 'shipping',
    color: 'green',
  },
]
