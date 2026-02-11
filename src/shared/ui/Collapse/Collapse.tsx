import { useEffect, useRef, useState, type PropsWithChildren } from 'react'

interface ICollapseProps extends PropsWithChildren {
  collapsed: boolean
}

const Collapse = ({ collapsed, children }: ICollapseProps) => {
  const [height, setHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children])

  return (
    <div
      className='overflow-hidden transition-[max-height]'
      style={{ maxHeight: collapsed ? `${height}px` : '0px' }}
      ref={contentRef}
    >
      {children}
    </div>
  )
}

export { Collapse }
