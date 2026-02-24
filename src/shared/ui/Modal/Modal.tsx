import { CloseIcon } from '@/shared/icons/CloseIcon'
import { Dialog } from 'radix-ui'
import { Button } from '../Button'

interface IModalProps {
  title: string
  descr: string
  opened: boolean
  onOpenedChange: () => void
  onConfirm: () => void
}

const Modal = ({
  title,
  descr,
  opened,
  onOpenedChange,
  onConfirm,
}: IModalProps) => {
  return (
    <Dialog.Root open={opened} onOpenChange={onOpenedChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='animate-overlay-show fixed inset-0 z-40 bg-black/25' />
        <Dialog.Content className='animate-content-show fixed top-[50%] left-[50%] z-50 w-[428px] -translate-x-[50%] -translate-y-[50%] rounded-xl bg-white p-6'>
          <Dialog.Close asChild>
            <button className='absolute top-2 right-2 flex size-6 items-center justify-center-safe'>
              <CloseIcon className='size-5' />
            </button>
          </Dialog.Close>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-5'>
              <Dialog.Title className='text-center text-lg font-bold uppercase'>
                {title}
              </Dialog.Title>
              <Dialog.Description className='text-md text-center whitespace-pre'>
                {descr}
              </Dialog.Description>
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <Dialog.Close asChild>
                <Button variant='grey' stretch>
                  Cancel
                </Button>
              </Dialog.Close>
              <Button stretch onClick={onConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export { Modal }
