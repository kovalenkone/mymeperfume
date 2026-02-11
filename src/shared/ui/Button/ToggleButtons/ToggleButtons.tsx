import type { IOption } from '@/shared/types/option.type'
import clsx from 'clsx'

interface IToggleButtonsProps<T extends string> {
  options: IOption<T>[]
  value: T
  onChange: (value: T) => void
}

const ToggleButtons = <T extends string>({
  options,
  value,
  onChange,
}: IToggleButtonsProps<T>) => {
  return (
    <div className='inline-flex'>
      {options.map((option, index) => {
        const buttonStyles = clsx(
          'text-md tracking-tightest flex h-[26px] items-center border px-2.5',
          {
            'rounded-l-xs': index === 0,
            'rounded-r-xs': index === options.length - 1,
            'border-blue text-blue': value === option.value,
            'border-border text-border': value !== option.value,
          },
        )

        return (
          <button
            className={buttonStyles}
            key={option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export { ToggleButtons }
