import { AppPath } from '@/shared/constants/routes.constant'
import { ArchiveIcon } from '@/shared/icons/ArchiveIcon'
import { ProjectsIcon } from '@/shared/icons/ProjectsIcon'
import { UserIcon } from '@/shared/icons/UserIcon'
import { UsersIcon } from '@/shared/icons/UsersIcon'
import type { ComponentType, SVGProps } from 'react'

interface ISidebarNavigation {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  href: string
}

export const SIDEBAR_NAVIGATION: ISidebarNavigation[] = [
  {
    icon: UsersIcon,
    label: 'Users',
    href: AppPath.Users,
  },
  {
    icon: ProjectsIcon,
    label: 'Projects',
    href: AppPath.Projects,
  },
  {
    icon: ArchiveIcon,
    label: 'Archived projects',
    href: AppPath.Archive,
  },
  {
    icon: UsersIcon,
    label: 'Staff',
    href: AppPath.Staff,
  },
  {
    icon: UserIcon,
    label: 'Profile',
    href: AppPath.Profile,
  },
]
