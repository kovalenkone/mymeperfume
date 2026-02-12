import clsx from 'clsx'
import { forwardRef, type InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, className, ...props }, ref) => {
    const inputStyles = clsx(
      'placeholder:text-muted rounded-md border w-full bg-input px-4 h-12 border-border text-md',
      { 'border-red ': !!error },
    )

    return (
      <div className='flex flex-col gap-0.5'>
        <div className='relative flex w-full flex-col gap-3'>
          {label && (
            <label className='text-muted text-md font-medium' htmlFor={id}>
              {label}
            </label>
          )}
          <input
            ref={ref}
            id={id}
            className={twMerge(inputStyles, className)}
            {...props}
          />
        </div>
        {!!error && <span className='text-red text-xs'>{error.message}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
