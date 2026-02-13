import type { PropsWithChildren } from 'react'

interface IProjectFieldProps {
  label: string
}

const ProjectField = ({
  label,
  children,
}: PropsWithChildren<IProjectFieldProps>) => {
  return (
    <div className='flex items-center gap-5'>
      <p className='text-muted w-[120px] shrink-0 text-sm'>{label}</p>
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export { ProjectField }
