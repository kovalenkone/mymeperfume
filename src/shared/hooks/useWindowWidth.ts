import { useEffect, useState } from 'react'

interface IUseWindowWidthReturn {
  windowWidth: number
  isMobile: boolean
}

export const useWindowWidth = (delay: number = 100): IUseWindowWidthReturn => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1024)

  useEffect(() => {
    let timeoutId: null | number = null

    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth <= 1024)
        setWindowWidth(window.innerWidth)
      }, delay)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [delay])

  return { windowWidth, isMobile }
}
