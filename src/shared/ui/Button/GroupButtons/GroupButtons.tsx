interface IGroupBtn {
  label: string
  value: string
}

interface IGroupButtonsProps {
  leftBtn: IGroupBtn
  rightBtn: IGroupBtn
  value: string
  onChange: (value: string) => void
}

const GroupButtons = ({
  leftBtn,
  rightBtn,
  value,
  onChange,
}: IGroupButtonsProps) => {
  return (
    <div className='flex'>
      <button
        className='text-md flex h-[26px] items-center rounded-l-xs border border-r-0 px-2.5'
        onClick={() => onChange(leftBtn.value)}
      >
        {leftBtn.label}
      </button>
      <button
        className='text-md flex h-[26px] items-center rounded-r-xs border px-2.5'
        onClick={() => onChange(rightBtn.value)}
      >
        {rightBtn.label}
      </button>
    </div>
  )
}

export { GroupButtons }
