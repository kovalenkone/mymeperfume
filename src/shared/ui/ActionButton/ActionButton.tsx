import clsx from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface TActionButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  active?: boolean
}

const ActionButton = ({ children, active, ...props }: TActionButton) => {
  const actionButtonStyles = clsx(
    'border-border hover:text-blue hover:border-blue flex h-10 w-10 items-center justify-center rounded-sm border transition text-sm font-medium disabled:border-border-muted disabled:text-black-25',
    { 'text-blue border-border-blue': active },
  )

  return (
    <button className={actionButtonStyles} {...props}>
      {children}
    </button>
  )
}

export { ActionButton }
