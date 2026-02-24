import { Container } from '@/components/Container'
import { Chat } from '@/modules/Chat'
import { Project } from '@/modules/Project'
import { useDisclosure } from '@/shared/hooks/useDisclosure'
import { ArchiveIcon } from '@/shared/icons/ArchiveIcon'
import { CheckIcon } from '@/shared/icons/CheckIcon'
import { PencilIcon } from '@/shared/icons/PencilIcon'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input/Input'
import { Modal } from '@/shared/ui/Modal'
import { Popover } from 'radix-ui'

const ProjectPage = () => {
  const [opened, { open, toggle }] = useDisclosure(false)

  return (
    <Container>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-2'>
            <Popover.Root>
              <Popover.Trigger asChild>
                <button className='group hover:text-primary-muted data-[state="open"]:text-primary-muted flex items-center gap-2 transition'>
                  <span className='text-xl font-bold uppercase'>
                    Summer breeze
                  </span>
                  <PencilIcon className='group-hover:text-primary-muted group-data-[state="open"]:text-primary-muted size-5 text-[#ADB5BD] transition' />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className='shadow-popover w-[421px] rounded-lg bg-white'>
                  <div className='flex gap-2 p-4'>
                    <Input
                      size='md'
                      defaultValue={'Summer breeze'}
                      placeholder='Enter project name'
                    />
                    <Button size='sm' variant='accent' className='px-6'>
                      Save
                    </Button>
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
            {/* <Popover.Root>
              <Popover.Trigger asChild>
                <button className='group'>
                  <PencilIcon className='text-muted group-hover:text-primary size-5 transition' />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className='shadow-popover w-[400px] rounded-lg bg-white'>
                  <div className='border-border flex flex-col gap-3 border-b p-4'>
                    <Checkbox.Root>
                      <Checkbox.Indicator />
                    </Checkbox.Root>
                  </div>
                  <div className='p-4'>
                    <Button size='md' variant='accent'>
                      Save
                    </Button>
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root> */}
          </div>
        </div>
        <div className='flex gap-3'>
          <Button size='md' variant='accent'>
            <CheckIcon className='size-5' />
            Save changes
          </Button>
          <Button size='md' variant='outline' onClick={open}>
            <ArchiveIcon className='size-5' />
            Archived project
          </Button>
        </div>
      </div>
      <Project />
      <Chat />
      <Modal
        opened={opened}
        onOpenedChange={toggle}
        title='Archive project'
        descr={`Are you sure you want to archive project? \n You can revert this later`}
        onConfirm={() => {}}
      />
    </Container>
  )
}

export { ProjectPage }
