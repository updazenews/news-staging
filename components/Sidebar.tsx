'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Role } from '@/lib/types';
import { BrandBadge } from '@/components/BrandBadge';
import { sebenzaPortalUrl } from '@/lib/firebase';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/news', label: 'News' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/users', label: 'Users', role: 'superadmin' }
] as const;

export function Sidebar({ role }: { role: Role }) {
  const pathname = usePathname();

  return (
    <aside className="w-full border-r border-slate-200 bg-white p-4 md:w-72">
      <div className="mb-8">
        <BrandBadge />
      </div>
      <nav className="space-y-2">
        {links
          .filter((link) => !link.role || link.role === role)
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? 'bg-brand-blue text-white shadow-soft'
                  : 'text-brand-slate hover:bg-brand-surface hover:text-brand-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
      </nav>

      <div className="mt-8 border-t border-slate-200 pt-4">
        <a
          className="block rounded-lg bg-brand-orange px-3 py-2 text-center text-sm font-semibold text-white hover:bg-brand-ink"
          href={sebenzaPortalUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open Sebenza Portal
        </a>
      </div>
    </aside>
  );
}
