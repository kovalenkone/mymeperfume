import { ChevronDownIcon } from '@/shared/icons/ChevronDownIcon'
import { MessageIcon } from '@/shared/icons/MessageIcon'
import clsx from 'clsx'

const ChatTrigger = () => {
  return (
    <button
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
    </button>
  )
}

export { ChatTrigger }
