import type { TStatusColor } from '../types/status-color.type'

interface IStatusOption {
  text: string
  border: string
  bg: string
}

export const STATUS_COLORS: Record<TStatusColor, IStatusOption> = {
  grey: {
    text: 'text-status-grey',
    border: 'border-status-grey',
    bg: 'bg-status-grey',
  },
  blue: {
    text: 'text-status-blue',
    border: 'border-status-blue',
    bg: 'bg-status-blue',
  },
  turquoise: {
    text: 'text-status-turquoise',
    border: 'border-status-turquoise',
    bg: 'bg-status-turquoise',
  },
  green: {
    text: 'text-status-green',
    border: 'border-status-green',
    bg: 'bg-status-green',
  },
  orange: {
    text: 'text-status-orange',
    border: 'border-status-orange',
    bg: 'bg-status-orange',
  },
} as const
