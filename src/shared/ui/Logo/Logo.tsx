import logo from '@/assets/images/logo.svg'
import { AppRoutes } from '@/shared/constants/routes.constant'
import clsx from 'clsx'

interface LogoProps {
  size?: 'sm' | 'base'
  textHidden?: boolean
}

const isHome = true

const Logo = ({ size = 'base', textHidden = false }: LogoProps) => {
  const logoIconStyles = clsx({
    'sm:h-[72px] sm:w-[132px] w-[66px] h-[36px]': size === 'base',
    'sm:h-[55px] sm:w-[100px] w-[66px] h-[36px]': size === 'sm',
  })

  return (
    <a
      href={isHome ? '#' : AppRoutes.Home}
      className='text-black-25 flex shrink-0 items-center gap-5 font-semibold select-none'
    >
      <img src={logo} alt='ti-store logotype' className={logoIconStyles} />
      {!textHidden && (
        <span className='text-[10px] leading-[130%] italic sm:text-sm'>
          Ваш надежный поставщик
          <br />
          электронных компонентов
        </span>
      )}
    </a>
  )
}

Logo.displayName = 'Logo'

export { Logo }
