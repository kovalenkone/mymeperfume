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
        'border-border-muted table-auto border-separate border-spacing-0 overflow-hidden rounded-lg border',
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
  return <thead {...props}>{children}</thead>
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
        'border-border-muted border-t p-2 text-left align-top text-sm not-last:border-e sm:p-2.5',
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
        'border-border-muted bg-grey h-9 px-2 text-left text-sm font-bold not-last:border-e sm:h-11 sm:px-2.5',
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
