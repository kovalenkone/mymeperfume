import type { InputHTMLAttributes } from 'react'

export interface IField<T extends string = string>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: T
  label?: string
  required?: boolean
}
