import { AuthLayout } from '@/layouts/AuthLayout'
import { AuthForm } from './components/AuthForm'

const AuthPage = () => {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  )
}

export { AuthPage }
