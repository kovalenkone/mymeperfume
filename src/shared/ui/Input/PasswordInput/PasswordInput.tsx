import { CloseEyeIcon } from '@/assets/icons/CloseEyeIcon'
import { OpenEyeIcon } from '@/assets/icons/OpenEyeIcon'
import { TooltipIcon } from '@/assets/icons/TooltipIcon'
import clsx from 'clsx'
import { forwardRef, useState, type InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

interface IPasswordInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  required?: boolean
  requirements?: boolean
  error?: FieldError
}

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInput>(
  (
    {
      label,
      placeholder,
      id,
      name,
      onChange,
      required = false,
      requirements = false,
      className,
      error,
      ...props
    },
    ref,
  ) => {
    const [passwordHidden, setIsPasswordHidden] = useState(true)

    const handleSwitchPasswordHidden = () => {
      setIsPasswordHidden(prev => !prev)
    }

    const inputStyles = clsx(
      'border-border placeholder:text-black-25 h-12 w-full rounded-sm border px-3',
      {
        'border-red bg-red-muted text-red placeholder:text-red': !!error,
      },
      className,
    )

    return (
      <div className='relative flex flex-col gap-1'>
        <div className='flex justify-between pr-2'>
          <label className='text-black-50 text-sm' htmlFor={id}>
            {label} {required && <span className='text-red'>*</span>}
          </label>
          {requirements && <span>{<TooltipIcon />}</span>}
        </div>
        <div className='relative'>
          <input
            ref={ref}
            type={passwordHidden ? 'password' : 'text'}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            className={inputStyles}
            {...props}
          />
          <button
            className='absolute top-[50%] right-4 translate-y-[-50%]'
            onClick={handleSwitchPasswordHidden}
            type='button'
          >
            {passwordHidden ? <CloseEyeIcon /> : <OpenEyeIcon />}
          </button>
        </div>
        {!!error && <span className='text-red text-sm'>{error.message}</span>}
      </div>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
