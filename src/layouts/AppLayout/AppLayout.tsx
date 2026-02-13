import { Sidebar } from '@/modules/Sidebar'
import { Topbar } from '@/modules/Topbar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex flex-1 flex-col'>
        <Topbar />
        <main className='flex-1 overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export { AppLayout }
