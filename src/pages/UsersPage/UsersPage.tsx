import { PlusIcon } from '@/shared/icons/PlusIcon'
import { Button } from '@/shared/ui/Button'
import { Table } from '@/shared/ui/Table'
import { Link } from 'react-router-dom'

const UsersPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-10'>
          <h1 className='text-xl font-bold uppercase'>Users</h1>
        </div>
        <Button asChild size='md' variant='accent'>
          <Link to={''}>
            <PlusIcon className='size-5' />
            Add User
          </Link>
        </Button>
      </div>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.CellHead>Email</Table.CellHead>
            <Table.CellHead>First Name</Table.CellHead>
            <Table.CellHead>Last Name</Table.CellHead>
            <Table.CellHead>Current projects</Table.CellHead>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>email@iasmos.fr</Table.Cell>
            <Table.Cell>Jhon</Table.Cell>
            <Table.Cell>Jhonson</Table.Cell>
            <Table.Cell>Summer breeze</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export { UsersPage }
