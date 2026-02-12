import logo from '@/assets/images/logo.svg'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import { SIDEBAR_NAVIGATION } from './constants/sidebar-navigation.constant'

const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <aside className='bg-primary flex w-60 flex-col gap-6'>
      <div className='flex justify-center py-[15px]'>
        <img src={logo} alt='logotype' />
      </div>
      <nav className='px-1.5'>
        <ul className='flex flex-col gap-1.5'>
          {SIDEBAR_NAVIGATION.map(nav => {
            const isActiveLink = nav.href === pathname

            const navLinkStyles = clsx(
              'bg-background-muted text-foreground-secondary relative flex h-14 items-center gap-2.5 rounded-md px-4 text-lg hover:bg-background-accent! transition',
              {
                'before:bg-background-secondary before:absolute before:right-full before:h-full before:w-1.5 before:content-[""] bg-background-accent! rounded-l-none':
                  isActiveLink,
              },
            )

            return (
              <li key={nav.href}>
                <Link to={nav.href} className={navLinkStyles}>
                  <nav.icon className='size-5' />
                  {nav.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export { Sidebar }
