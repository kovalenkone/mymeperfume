import { FILE_STATUSES } from '@/shared/constants/file-statuses.constant'
import { Input } from '@/shared/ui/Input/Input'

import { FileButton } from '@/shared/ui/FileButton'
import { StatusBar } from '../StatusBar'

interface IFileFieldProps {
  status: string
  file: File | null
  onStatusChange: (status: string) => void
}

const FileField = ({ status, onStatusChange }: IFileFieldProps) => {
  return (
    <div className='flex items-center gap-6'>
      <div className='w-[300px]'>
        <Input defaultValue={'MSDS'} readOnly />
      </div>
      <StatusBar
        statuses={FILE_STATUSES}
        value={status}
        onChange={onStatusChange}
      />
      <FileButton file={File.name} />
    </div>
  )
}

export { FileField }
