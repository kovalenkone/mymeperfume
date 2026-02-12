import { ChevronRightIcon } from '@/shared/icons/ChevronRightIcon'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input/Input'
import { PasswordInput } from '@/shared/ui/Input/PasswordInput'

const AuthForm = () => {
  return (
    <form className='w-full'>
      <div className='flex flex-col items-center gap-8'>
        <div className='flex w-full flex-col gap-6'>
          <Input
            label='Email/Phone number'
            id='email'
            placeholder='Enter email or phone number'
          />
          <PasswordInput
            label='Password'
            id='password'
            placeholder='Enter password'
          />
        </div>
        <Button type='submit'>
          Send code to Email
          <ChevronRightIcon className='size-4' />
        </Button>
      </div>
    </form>
  )
}

export { AuthForm }
