'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Role } from '@/lib/types';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/news', label: 'News' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/users', label: 'Users', role: 'superadmin' }
] as const;

export function Sidebar({ role }: { role: Role }) {
  const pathname = usePathname();

  return (
    <aside className="w-full border-r border-slate-200 bg-white p-4 md:w-64">
      <h2 className="mb-6 text-xl font-bold">Admin Portal</h2>
      <nav className="space-y-2">
        {links
          .filter((link) => !link.role || link.role === role)
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-2 text-sm ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
      </nav>
    </aside>
  );
}
