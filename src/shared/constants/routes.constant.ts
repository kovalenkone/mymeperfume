export const ClientPath = {
  Auth: '/auth',
  Brands: '/brands',
  Brand: (slug: string) => `/brands/${slug}`,
  Project: (id: string) => `/project/${id}`,

  // Admin
} as const

export const AdminPath = {
  Users: '/admin/users',
  Projects: '/admin/projects',
  Archive: '/admin/archive',
  Staff: '/admin/staff',
  Profile: '/admin/profile',
} as const
