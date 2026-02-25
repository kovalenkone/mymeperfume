import { CloudIcon } from '@/shared/icons/CloudIcon'
import { Button } from '../Button'

interface TActionButton {
  file?: string
  download?: {
    href: string
    name: string
  }
  placeholder?: string
  onChange?: () => void
}

const FileButton = ({
  file,
  download,
  placeholder = 'No file uploaded',
  onChange,
}: TActionButton) => {
  if (download) {
    return (
      <div className='flex items-center gap-4'>
        <Button variant='outline' asChild>
          <a href={download.href} download={download.name}>
            <CloudIcon className='size-5' />
            Download file
          </a>
        </Button>
        <p className='text-muted text-sm leading-[143%]'>
          {file ? file : placeholder}
        </p>
      </div>
    )
  }

  return (
    <div className='flex items-center gap-4'>
      <label className='relative'>
        <Button variant='outline' asChild>
          <span role='button' className='cursor-pointer'>
            <CloudIcon className='size-5' />
            Loading file
          </span>
        </Button>
        <input
          type='file'
          className='absolute block h-0 w-0 cursor-pointer opacity-0'
          onChange={onChange}
        />
      </label>
      <p className='text-muted text-sm leading-[143%]'>
        {file ? file : 'No file uploaded'}
      </p>
    </div>
  )
}

export { FileButton }
