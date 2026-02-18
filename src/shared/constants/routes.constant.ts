export const AppPath = {
  Auth: '/auth',
  Brands: '/brands',
  Brand: (slug: string) => `/brands/${slug}`,
  Project: (id: string) => `/project/${id}`,
  Users: '/users',
  Projects: '/projects',
  Archive: '/archive',
  Staff: '/staff',
  Profile: '/profile',
}
