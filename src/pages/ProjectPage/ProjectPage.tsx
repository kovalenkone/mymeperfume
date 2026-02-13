import { Container } from '@/components/Container'
import { Project } from '@/modules/Project'
import { ArchiveIcon } from '@/shared/icons/ArchiveIcon'
import { CheckIcon } from '@/shared/icons/CheckIcon'
import { PencilIcon } from '@/shared/icons/PencilIcon'
import { Button } from '@/shared/ui/Button'

const ProjectPage = () => {
  return (
    <Container>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-bold uppercase'>Projects</h1>
            <button className='group'>
              <PencilIcon className='text-muted group-hover:text-primary size-5 transition' />
            </button>
          </div>
        </div>
        <div className='flex gap-3'>
          <Button size='md' variant='accent'>
            <CheckIcon className='size-5' />
            Save changes
          </Button>
          <Button size='md' variant='outline'>
            <ArchiveIcon className='size-5' />
            Archived project
          </Button>
        </div>
      </div>
      <Project />
    </Container>
  )
}

export { ProjectPage }
