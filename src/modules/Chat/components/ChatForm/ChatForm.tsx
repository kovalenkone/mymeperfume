import { Button } from '@/shared/ui/Button'

const ChatForm = () => {
  return (
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
  )
}

export { ChatForm }
