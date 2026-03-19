import type { Role } from '@/lib/types';

export const roleRoutes: Record<Role, string[]> = {
  superadmin: ['/dashboard', '/news', '/jobs', '/users'],
  publisher: ['/dashboard', '/news'],
  recruiter: ['/dashboard', '/jobs']
};

export function canAccessPath(role: Role, path: string) {
  return roleRoutes[role].some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

export function homeByRole(role: Role) {
  if (role === 'publisher') return '/news';
  if (role === 'recruiter') return '/jobs';
  return '/dashboard';
}
