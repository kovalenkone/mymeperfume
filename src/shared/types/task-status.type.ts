import type { ComponentType, SVGProps } from 'react'

export interface ITaskStatus {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  color: 'grey' | 'blue' | 'green'
}
