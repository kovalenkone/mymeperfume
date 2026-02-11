import { Footer } from '@/modules/Footer'
import { Header } from '@/modules/Header'
import { Outlet } from 'react-router-dom'
import { Container } from '../Container'

const AppLayout = () => {
  return (
    <Container>
      <div className='flex flex-col gap-1 sm:gap-2.5'>
        <Header />
        {/* <Breadcrumbs /> */}
      </div>
      <main className='flex-1 py-1 sm:py-2.5'>
        <Outlet />
      </main>
      <Footer />
    </Container>
  )
}

export { AppLayout }
