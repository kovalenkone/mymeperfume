import { CheckedIcon } from '@/assets/icons/CheckedIcon'
import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: 'sm' | 'md'
  label?: string
  checked?: boolean
}

const Checkbox = ({
  label,
  checked,
  onChange,
  className,
  size = 'md',
  name,
  id,
  ...props
}: CheckboxProps) => {
  const checkboxStyles = clsx(
    'border-border-muted flex items-center justify-center rounded-xs border',
    {
      'border-border-muted': !checked,
      'border-border-blue bg-blue': checked,
      'h-[16px] w-[16px]': size === 'sm',
      'h-[22px] w-[22px]': size === 'md',
    },
    className,
  )

  return (
    <label className='flex cursor-pointer items-center gap-2'>
      <input
        checked={checked}
        type='checkbox'
        name={name}
        id={id}
        className='peer hidden'
        onChange={onChange}
        {...props}
      />
      <span className={checkboxStyles}>{checked && <CheckedIcon />}</span>
      {label && <span className='tracking-tightest select-none'>{label}</span>}
    </label>
  )
}

Checkbox.displayName = 'Checkbox'

export { Checkbox }
