import { CloseEyeIcon } from '@/shared/icons/CloseEyeIcon'
import { OpenEyeIcon } from '@/shared/icons/OpenEyeIcon'
import clsx from 'clsx'
import { forwardRef, useState, type InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface IPasswordInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: FieldError
}

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInput>(
  ({ label, id, className, error, ...props }, ref) => {
    const [passwordHidden, setIsPasswordHidden] = useState(true)

    const handleSwitchPasswordHidden = () => {
      setIsPasswordHidden(prev => !prev)
    }

    const inputStyles = clsx(
      'placeholder:text-muted rounded-md border w-full bg-input px-4 h-12 border-border text-md',
      { 'border-red': !!error },
    )

    return (
      <div className='flex flex-col gap-0.5'>
        <div className='flex flex-col gap-3'>
          {label && (
            <label className='text-muted text-md font-medium' htmlFor={id}>
              {label}
            </label>
          )}
          <div className='relative'>
            <input
              ref={ref}
              id={id}
              type={passwordHidden ? 'password' : 'text'}
              className={twMerge(inputStyles, className)}
              {...props}
            />
            <button
              className='absolute top-[50%] right-3.5 translate-y-[-50%]'
              onClick={handleSwitchPasswordHidden}
              type='button'
            >
              {passwordHidden ? (
                <CloseEyeIcon className='text-muted size-5' />
              ) : (
                <OpenEyeIcon className='text-muted size-5' />
              )}
            </button>
          </div>
        </div>
        {!!error && <span className='text-red text-xs'>{error.message}</span>}
      </div>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
