import { Popover } from 'radix-ui'
import { ChatForm } from './components/ChatForm'
import { ChatTrigger } from './components/ChatTrigger'

const Chat = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ChatTrigger />
      </Popover.Trigger>
      <Popover.PopoverPortal>
        <Popover.Content align='end' sideOffset={16}>
          <ChatForm />
        </Popover.Content>
      </Popover.PopoverPortal>
    </Popover.Root>
  )
}

export { Chat }
