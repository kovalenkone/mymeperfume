import type { ComponentType, SVGProps } from 'react'
import type { TStatusColor } from './status-color.type'

export interface ITaskStatus {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  color: TStatusColor
}
