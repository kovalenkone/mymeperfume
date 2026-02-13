import { Tabs } from 'radix-ui'
import { PROJECTS_TABS } from './constants/projects-tabs.constant'

const Project = () => {
  return (
    <div className='bg-background-secondary rounded-2xl'>
      <Tabs.Root defaultValue='about'>
        <Tabs.List className='border-border border-b-2'>
          {PROJECTS_TABS.map(tab => (
            <Tabs.Trigger
              key={tab.value}
              className='text-md text-muted after:bg-primary data-[state="active"]:text-primary relative px-5 py-6 font-medium transition after:absolute after:top-full after:left-0 after:h-0.5 after:w-full after:opacity-0 after:transition after:content-[""] data-[state="active"]:after:opacity-100'
              value={tab.value}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {PROJECTS_TABS.map(tab => (
          <Tabs.Content key={tab.value} className='p-8' value={tab.value}>
            <tab.component />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}

export { Project }
