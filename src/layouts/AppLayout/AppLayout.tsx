import { Sidebar } from '@/modules/Sidebar'
import { Topbar } from '@/modules/Topbar'

const AppLayout = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex flex-1 flex-col'>
        <Topbar />
        <main className='flex-1 overflow-auto'></main>
      </div>
    </div>
  )
}

export { AppLayout }
