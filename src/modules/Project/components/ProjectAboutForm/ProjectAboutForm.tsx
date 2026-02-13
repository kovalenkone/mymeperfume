import { StatusPicker } from '@/components/StatusPicker'
import { Input } from '@/shared/ui/Input/Input'
import { ProjectField } from '../ProjectField'

const ProjectAboutForm = () => {
  return (
    <div className='flex max-w-[996px] flex-col gap-6'>
      <ProjectField label='Project Stage'>
        <StatusPicker />
      </ProjectField>
      <div className='grid grid-cols-2 gap-x-[50px] gap-y-6'>
        <ProjectField label='User First name'>
          <Input placeholder='First name' />
        </ProjectField>
        <ProjectField label='User Last name'>
          <Input placeholder='Last name' />
        </ProjectField>
        <ProjectField label='Responsible manager'>
          <Input placeholder='Manager' />
        </ProjectField>
        <ProjectField label='Filling start date'>
          <Input placeholder='Date' />
        </ProjectField>
        <ProjectField label='Filling end date'>
          <Input placeholder='Date' />
        </ProjectField>
        <ProjectField label='Shipping date'>
          <Input placeholder='Date' />
        </ProjectField>
        <ProjectField label='Shipping company'>
          <Input placeholder='Date' />
        </ProjectField>
      </div>
    </div>
  )
}

export { ProjectAboutForm }
