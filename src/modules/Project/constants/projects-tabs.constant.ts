import type { JSX } from 'react'
import { ProjectAboutForm } from '../components/ProjectAboutForm'
import { ProjectCollection } from '../components/ProjectCollection'

interface IProjectTabs {
  label: string
  value: string
  component: () => JSX.Element
}

export const PROJECTS_TABS: IProjectTabs[] = [
  {
    label: 'About project',
    value: 'about',
    component: ProjectAboutForm,
  },
  {
    label: 'Regulatory Data collection',
    value: 'collection',
    component: ProjectCollection,
  },
  {
    label: 'Packaging docs',
    value: 'docs',
    component: ProjectAboutForm,
  },
  {
    label: 'Regulatory Test',
    value: 'test',
    component: ProjectAboutForm,
  },
  {
    label: 'Labeling information',
    value: 'labeling',
    component: ProjectAboutForm,
  },
  {
    label: 'Message list',
    value: 'message',
    component: ProjectAboutForm,
  },
]
