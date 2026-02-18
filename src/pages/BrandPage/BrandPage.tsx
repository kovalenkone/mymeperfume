import { Container } from '@/components/Container'
import { ArchiveIcon } from '@/shared/icons/ArchiveIcon'
import { Button } from '@/shared/ui/Button'
import { Link } from 'react-router-dom'

import image from '@/assets/images/brand.jpg'
import { AppPath } from '@/shared/constants/routes.constant'

const BrandPage = () => {
  return (
    <Container>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold uppercase'>
          <span className='text-muted'>HEADSPACE:</span> AETHER
        </h1>
        <Button size='md' variant='outline'>
          <ArchiveIcon className='size-5' />
          Archived projects
        </Button>
      </div>
      <div className='grid grid-cols-4'>
        <Link
          to={AppPath.Project('1')}
          className='group relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg'
        >
          <img
            className='absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-105'
            src={image}
            alt='brand'
          />
          <span className='relative z-10 flex h-[120px] items-end bg-[image:var(--color-brand-gradient)] p-6'>
            <h3 className='text-foreground-secondary after:bg-background-secondary after:abolute relative text-lg font-medium uppercase after:top-[calc()100%+2px] after:block after:h-px after:w-full after:opacity-0 after:transition after:content-[""] group-hover:after:opacity-100'>
              FLORÆ
            </h3>
          </span>
        </Link>
      </div>
    </Container>
  )
}

export { BrandPage }
