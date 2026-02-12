import { Kanban } from '@/modules/Kanban'
import { PlusIcon } from '@/shared/icons/PlusIcon'
import { Button } from '@/shared/ui/Button'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <h1 className='text-xl font-bold uppercase'>Projects</h1>
        </div>
        <Button asChild size='md' variant='accent'>
          <Link to={''}>
            <PlusIcon className='size-5' />
            Create project
          </Link>
        </Button>
      </div>
      <Kanban />
    </div>
  )
}

export { ProjectsPage }
