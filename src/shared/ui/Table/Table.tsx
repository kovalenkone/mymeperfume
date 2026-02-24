import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type PropsWithChildren,
  type TableHTMLAttributes,
} from 'react'
import { twMerge } from 'tailwind-merge'

const Table = ({
  children,
  className,
  ...props
}: PropsWithChildren & TableHTMLAttributes<HTMLTableElement>) => {
  return (
    <table
      {...props}
      className={twMerge(
        'w-full table-fixed border-separate border-spacing-x-0 overflow-hidden',
        className,
      )}
    >
      {children}
    </table>
  )
}

const TableHead = ({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<'thead'>>) => {
  return (
    <thead
      {...props}
      className='overflow-hidden rounded-md border-b-16 after:block after:h-4 after:content-[""]'
    >
      {children}
    </thead>
  )
}

const TableBody = ({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<'tbody'>>) => {
  return (
    <tbody className='[&>tr]:cursor-pointer' {...props}>
      {children}
    </tbody>
  )
}

const TableRow = forwardRef<HTMLTableRowElement, PropsWithChildren>(
  ({ children, ...props }, ref) => {
    return (
      <tr className='group' {...props} ref={ref}>
        {children}
      </tr>
    )
  },
)

const TableCell = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<'td'>>) => {
  return (
    <td
      {...props}
      className={twMerge(
        'bg-background-secondary group-hover:bg-background border-border border-b px-5 py-4 text-lg transition not-last:border-r',
        'group-first:first:rounded-tl-lg group-last:first:rounded-bl-lg group-first:last:rounded-tr-lg group-last:last:rounded-br-lg',
        className,
      )}
    >
      {children}
    </td>
  )
}

const TableCellHead = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<'th'>>) => {
  return (
    <th
      {...props}
      className={twMerge(
        'border-background bg-primary-muted text-foreground-secondary font-primary h-[52px] px-5 text-left text-lg font-medium not-last:border-e first:rounded-l-[10px] last:rounded-r-[10px]',
        className,
      )}
    >
      {children}
    </th>
  )
}

Table.Head = TableHead
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell
Table.CellHead = TableCellHead

export { Table }
