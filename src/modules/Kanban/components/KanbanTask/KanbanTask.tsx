const KanbanTask = () => {
  return (
    <div className='bg-background-secondary shadow-task rounded-lg border-l-4'>
      <div className='border-border flex flex-col gap-3 border-b py-4 pr-6 pl-5'>
        <p className='text-md font-semibold'>Summer breeze</p>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2.5'>
            <span className='text-muted text-sm'>Customer:</span>
            <span className='text-sm font-medium'>Jhon Jhonson</span>
          </div>
          <div className='flex items-center gap-2.5'>
            <span className='text-muted text-sm'>Manager:</span>
            <span className='text-sm font-medium'>Samuel Dupont</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between pt-3 pr-4 pb-3.5 pl-5'>
        <span className='text-muted text-sm'>Start date: 02.02.26</span>
        <span className='text-muted text-sm'>End date: 06.03.26</span>
      </div>
    </div>
  )
}

export { KanbanTask }
