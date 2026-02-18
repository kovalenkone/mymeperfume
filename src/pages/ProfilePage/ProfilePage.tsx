import { Container } from '@/components/Container'
import { CheckIcon } from '@/shared/icons/CheckIcon'
import { ExitIcon } from '@/shared/icons/ExitIcon'
import { Button } from '@/shared/ui/Button'
import { Field } from '@/shared/ui/Field'
import { Input } from '@/shared/ui/Input/Input'
import { PasswordInput } from '@/shared/ui/Input/PasswordInput'

const ProfilePage = () => {
  return (
    <Container>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold uppercase'>Profile</h1>
        <div className='flex gap-2'>
          <Button size='md' variant='accent'>
            <CheckIcon className='size-5' />
            Save changes
          </Button>
          <Button size='md' variant='danger'>
            <ExitIcon className='size-5' />
            Log out
          </Button>
        </div>
      </div>
      <div className='bg-background-secondary rounded-2xl'>
        <div className='border-border border-b p-8'>
          <div className='flex max-w-[478px] flex-col gap-5'>
            <Field label='First name'>
              <Input placeholder='Enter' />
            </Field>
            <Field label='Last name'>
              <Input placeholder='Enter' />
            </Field>
            <Field label='Phone number'>
              <Input placeholder='Enter' />
            </Field>
            <Field label='Email'>
              <Input placeholder='Enter' />
            </Field>
            <Field label='Company name'>
              <Input placeholder='Enter' />
            </Field>
          </div>
        </div>
        <div className='border-border border-b p-8 pt-6'>
          <h3 className='mb-6 text-xl font-bold'>Change password</h3>
          <div className='flex max-w-[478px] flex-col gap-5'>
            <Field label='Current password'>
              <PasswordInput placeholder='•••••••••' />
            </Field>
            <Field label='New password'>
              <PasswordInput placeholder='•••••••••' />
            </Field>
            <Field label='Repeat new password'>
              <PasswordInput placeholder='•••••••••' />
            </Field>
          </div>
        </div>
      </div>
    </Container>
  )
}

export { ProfilePage }
