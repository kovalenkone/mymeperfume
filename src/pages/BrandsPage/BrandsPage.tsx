import { Container } from '@/components/Container'
import { AppPath } from '@/shared/constants/routes.constant'
import { Link } from 'react-router-dom'

const BrandsPage = () => {
  return (
    <Container>
      <h1 className='text-xl font-bold uppercase'>Brands</h1>
      <div className='grid grid-cols-6 gap-x-8 gap-y-10'>
        <Link
          to={AppPath.Brand('1')}
          className='group flex flex-col items-center gap-3.5'
        >
          <span className='bg-background-secondary shadow-brand group-hover:shadow-brand-hover aspect-3/2 w-full rounded-lg transition'></span>
          <span className='text-md after:bg-primary after:abolute relative font-medium after:top-[calc()100%+2px] after:block after:h-px after:w-full after:opacity-0 after:transition after:content-[""] group-hover:after:opacity-100'>
            Aether
          </span>
        </Link>
        <Link
          to={AppPath.Brand('1')}
          className='group flex flex-col items-center gap-3.5'
        >
          <span className='bg-background-secondary shadow-brand group-hover:shadow-brand-hover aspect-3/2 w-full rounded-lg transition'></span>
          <span className='text-md after:bg-primary after:abolute relative font-medium after:top-[calc()100%+2px] after:block after:h-px after:w-full after:opacity-0 after:transition after:content-[""] group-hover:after:opacity-100'>
            Aether
          </span>
        </Link>
        <Link
          to={AppPath.Brand('1')}
          className='group flex flex-col items-center gap-3.5'
        >
          <span className='bg-background-secondary shadow-brand group-hover:shadow-brand-hover aspect-3/2 w-full rounded-lg transition'></span>
          <span className='text-md after:bg-primary after:abolute relative font-medium after:top-[calc()100%+2px] after:block after:h-px after:w-full after:opacity-0 after:transition after:content-[""] group-hover:after:opacity-100'>
            Aether
          </span>
        </Link>
        <Link
          to={AppPath.Brand('1')}
          className='group flex flex-col items-center gap-3.5'
        >
          <span className='bg-background-secondary shadow-brand group-hover:shadow-brand-hover aspect-3/2 w-full rounded-lg transition'></span>
          <span className='text-md after:bg-primary after:abolute relative font-medium after:top-[calc()100%+2px] after:block after:h-px after:w-full after:opacity-0 after:transition after:content-[""] group-hover:after:opacity-100'>
            Aether
          </span>
        </Link>
        <Link
          to={AppPath.Brand('1')}
          className='group flex flex-col items-center gap-3.5'
        >
          <span className='bg-background-secondary shadow-brand group-hover:shadow-brand-hover aspect-3/2 w-full rounded-lg transition'></span>
          <span className='text-md after:bg-primary after:abolute relative font-medium after:top-[calc()100%+2px] after:block after:h-px after:w-full after:opacity-0 after:transition after:content-[""] group-hover:after:opacity-100'>
            Aether
          </span>
        </Link>
        <Link
          to={AppPath.Brand('1')}
          className='group flex flex-col items-center gap-3.5'
        >
          <span className='bg-background-secondary shadow-brand group-hover:shadow-brand-hover aspect-3/2 w-full rounded-lg transition'></span>
          <span className='text-md after:bg-primary after:abolute relative font-medium after:top-[calc()100%+2px] after:block after:h-px after:w-full after:opacity-0 after:transition after:content-[""] group-hover:after:opacity-100'>
            Aether
          </span>
        </Link>
        <Link
          to={AppPath.Brand('1')}
          className='group flex flex-col items-center gap-3.5'
        >
          <span className='bg-background-secondary shadow-brand group-hover:shadow-brand-hover aspect-3/2 w-full rounded-lg transition'></span>
          <span className='text-md after:bg-primary after:abolute relative font-medium after:top-[calc()100%+2px] after:block after:h-px after:w-full after:opacity-0 after:transition after:content-[""] group-hover:after:opacity-100'>
            Aether
          </span>
        </Link>
      </div>
    </Container>
  )
}

export { BrandsPage }
