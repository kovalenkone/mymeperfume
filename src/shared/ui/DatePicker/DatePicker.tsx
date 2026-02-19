import { CalendarIcon } from '@/shared/icons/CalendarIcon'
import { useMask } from '@react-input/mask'
import dayjs from 'dayjs'
import { Popover } from 'radix-ui'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { Input } from '../Input/Input'

const DatePicker = () => {
  const inputRef = useMask({
    mask: '__.__.____',
    replacement: { _: /\d/ },
    showMask: true,
    separate: true,
  })

  const [inputValue, setInputValue] = useState('')

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue('')
    } else {
      setInputValue(dayjs(date).format('MM.DD.YYYY'))
    }
  }

  return (
    <Popover.Root>
      <div className='relative'>
        <Input ref={inputRef} placeholder='MM.DD.YYYY' value={inputValue} />
        <Popover.Trigger className='absolute top-[50%] right-2.5 -translate-y-[50%]'>
          <CalendarIcon className='text-muted size-5' />
        </Popover.Trigger>
      </div>
      <Popover.Content className='z-10'>
        <DayPicker mode='single' onSelect={handleDayPickerSelect} />
      </Popover.Content>
    </Popover.Root>
  )
}

export { DatePicker }
