import { FileField } from '@/components/FileField'
import { CloudIcon } from '@/shared/icons/CloudIcon'
import { DownloadIcon } from '@/shared/icons/DownloadIcon'
import { TrashIcon } from '@/shared/icons/TrashIcon'
import { Button } from '@/shared/ui/Button'
import { useState } from 'react'

const FilesBlock = () => {
  const [status, setStatus] = useState('waiting')
  const [file, setFile] = useState<File | null>(null)

  return (
    <div className='flex flex-col'>
      <div className='border-border border-b p-8'>
        <div className='flex flex-col gap-4'>
          <FileField status={status} onStatusChange={setStatus} file={file} />
        </div>
      </div>
      <div className='grid grid-cols-[2fr_1fr]'>
        <div className='border-border border-r p-8 pt-6'>
          <h3 className='mb-4 text-xl font-bold'>Comments from the manager</h3>
          <div className='flex flex-col gap-2.5'>
            <div className='bg-accent-light flex flex-col gap-2.5 rounded-lg p-4'>
              <div className='flex items-center justify-between'>
                <p className='text-md font-semibold'>Samuel Dupont</p>
                <span className='text-muted text-sm'>12.11.25 12:00</span>
              </div>
              <p className='text-md'>
                Please, load remaining files we were talking about.
              </p>
            </div>
          </div>
        </div>
        <div className='p-8 pt-6'>
          <h3 className='mb-4 text-xl font-bold'>Documents</h3>
          <div className='mb-6 flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <span className='text-muted text-lg'>
                document_1.pdf (125 кб)
              </span>
              <div className='flex items-center gap-4'>
                <a
                  href=''
                  download
                  className='text-muted flex size-6 items-center justify-center transition hover:text-[#ADB5BD]'
                >
                  <DownloadIcon className='size-5' />
                </a>
                <button className='text-muted flex size-6 items-center justify-center transition hover:text-[#ADB5BD]'>
                  <TrashIcon className='size-5' />
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-muted text-lg'>
                document_1.pdf (125 кб)
              </span>
              <div className='flex items-center gap-4'>
                <a
                  href=''
                  download
                  className='text-muted flex size-6 items-center justify-center transition hover:text-[#ADB5BD]'
                >
                  <DownloadIcon className='size-5' />
                </a>
                <button className='text-muted flex size-6 items-center justify-center transition hover:text-[#ADB5BD]'>
                  <TrashIcon className='size-5' />
                </button>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Button variant='outline'>
              <CloudIcon className='size-5' />
              Loading file
            </Button>
            <p className='text-muted text-sm leading-[143%]'>
              Acceptable file formats: .pdf, .docx <br /> Maximum file size: 1
              MB
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { FilesBlock }
