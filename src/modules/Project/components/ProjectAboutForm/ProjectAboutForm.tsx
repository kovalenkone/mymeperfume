import { StatusBar } from '@/components/StatusBar'
import { TASK_STATUSES } from '@/shared/constants/task-statuses.constant'
import { DatePicker } from '@/shared/ui/DatePicker'
import { Field } from '@/shared/ui/Field'
import { Input } from '@/shared/ui/Input/Input'
import { useState } from 'react'

const ProjectAboutForm = () => {
  const [status, setStatus] = useState('preparation')

  return (
    <div className='flex max-w-[996px] flex-col gap-6'>
      <Field label='Project Stage'>
        <StatusBar
          value={status}
          onChange={setStatus}
          statuses={TASK_STATUSES}
        />
      </Field>
      <div className='grid grid-cols-2 gap-x-[50px] gap-y-6'>
        <Field label='User First name'>
          <Input placeholder='First name' />
        </Field>
        <Field label='User Last name'>
          <Input placeholder='Last name' />
        </Field>
        <Field label='Responsible manager'>
          <Input placeholder='Manager' />
        </Field>
        <Field label='Filling start date'>
          <DatePicker />
        </Field>
        <Field label='Filling end date'>
          <Input placeholder='Date' />
        </Field>
        <Field label='Shipping date'>
          <Input placeholder='Date' />
        </Field>
        <Field label='Shipping company'>
          <Input placeholder='Date' />
        </Field>
      </div>
    </div>
  )
}

export { ProjectAboutForm }
