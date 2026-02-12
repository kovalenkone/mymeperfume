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
        'w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-2 overflow-hidden',
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
    <thead {...props} className='overflow-hidden rounded-md'>
      {children}
    </thead>
  )
}

const TableBody = ({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<'tbody'>>) => {
  return <tbody {...props}>{children}</tbody>
}

const TableRow = forwardRef<HTMLTableRowElement, PropsWithChildren>(
  ({ children, ...props }, ref) => {
    return (
      <tr {...props} ref={ref}>
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
        'bg-background-secondary border-border border-s border-t border-b px-5 py-4 first:rounded-l-lg last:rounded-r-lg last:border-e',
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
        'border-background bg-primary-muted text-foreground-secondary font-primary h-[52px] px-5 text-left text-lg font-medium not-last:border-e first:rounded-tl-lg last:rounded-tr-lg',
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
