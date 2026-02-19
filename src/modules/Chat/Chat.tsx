import { ChevronDownIcon } from '@/shared/icons/ChevronDownIcon'
import { MessageIcon } from '@/shared/icons/MessageIcon'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import { Popover } from 'radix-ui'

const Chat = () => {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          'bg-primary group hover:bg-primary-muted shadow-chat-trigger fixed right-20 bottom-[100px] flex size-[58px] items-center justify-center rounded-full transition',
          'data-[state=open]:bg-background-secondary data-[state=open]:border data-[state=open]:border-[#ADB5BD]!',
        )}
      >
        <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition group-data-[state=closed]:opacity-100 group-data-[state=open]:opacity-0'>
          <MessageIcon />
        </span>
        <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100'>
          <ChevronDownIcon />
        </span>
      </Popover.Trigger>
      <Popover.PopoverPortal>
        <Popover.Content align='end' sideOffset={16}>
          <div className='shadow-chat bg-background-secondary w-[300px] rounded-xl p-6'>
            <h3 className='mb-5 text-center text-lg font-bold uppercase'>
              Contact manager
            </h3>
            <textarea
              name='message'
              className='bg-input border-border mb-7 min-h-[110px] w-full resize-none rounded-md border p-[15px_10px_15px_16px] focus:outline-0'
            ></textarea>
            <Button stretch>Send message</Button>
          </div>
        </Popover.Content>
      </Popover.PopoverPortal>
    </Popover.Root>
  )
}

export { Chat }
