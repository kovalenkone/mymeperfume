import clsx from 'clsx'
import { forwardRef, type InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  required?: boolean
  hSize?: 'sm' | 'md'
  variant?: 'primary' | 'blue'
  error?: FieldError
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required,
      hSize = 'md',
      variant = 'primary',
      placeholder,
      id,
      type,
      name,
      value,
      onChange,
      error,
      className,
      ...props
    },
    ref,
  ) => {
    const inputStyles = clsx(
      'placeholder:text-black-25 placeholder:tracking-tightest rounded-sm border tracking-tightest w-full bg-white',
      {
        'px-2 h-10': hSize === 'sm',
        'px-3 h-12': hSize === 'md',
        'border-blue bg-white': variant === 'blue',
        'border-border': variant === 'primary',
        'border-red bg-red-muted text-red': !!error,
      },
    )

    return (
      <div className='relative flex w-full flex-col gap-1.5'>
        {label && (
          <label className='text-black-50 text-sm' htmlFor={id}>
            {label} {required && <span className='text-red'>*</span>}
          </label>
        )}
        <input
          ref={ref}
          value={value}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          className={twMerge(inputStyles, className)}
          {...props}
        />
        {!!error && <span className='text-red text-sm'>{error.message}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
