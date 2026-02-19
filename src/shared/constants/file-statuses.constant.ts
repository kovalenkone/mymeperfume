import { CheckIcon } from '../icons/CheckIcon'
import { ClockIcon } from '../icons/ClockIcon'
import { DotsIcon } from '../icons/DotsIcon'
import type { ITaskStatus } from '../types/task-status.type'

export const FILE_STATUSES: ITaskStatus[] = [
  {
    icon: DotsIcon,
    label: 'Waiting',
    value: 'waiting',
    color: 'grey',
  },
  {
    icon: ClockIcon,
    label: 'In progress',
    value: 'in-progress',
    color: 'blue',
  },
  {
    icon: CheckIcon,
    label: 'Done',
    value: 'done',
    color: 'green',
  },
]
