import clsx from 'clsx'
import { forwardRef, type InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { Button } from '../../Button/Button'

interface ICodeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  required?: boolean
  hSize?: 'sm' | 'md'
  variant?: 'primary' | 'blue'
  disabled: boolean
  onSend: () => void
  repeatTime?: string
  error?: FieldError
}

const CodeInput = forwardRef<HTMLInputElement, ICodeInputProps>(
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
      onSend,
      repeatTime,
      disabled,
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
        <div className='relative'>
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
          <Button
            onClick={onSend}
            disabled={disabled}
            type='button'
            variant='ghost'
            className='text-blue disabled:text-black-25 absolute top-[50%] right-0 translate-y-[-50%]'
          >
            Отправить код
          </Button>
        </div>
        {!!error && <span className='text-red text-sm'>{error.message}</span>}
        {repeatTime && (
          <button className='text-blue ms-auto text-sm'>
            Отправить код повторно через 1:56
          </button>
        )}
      </div>
    )
  },
)

CodeInput.displayName = 'CodeInput'

export { CodeInput }
