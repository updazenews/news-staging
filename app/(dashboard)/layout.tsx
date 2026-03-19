'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import type { Role } from '@/lib/types';
import { canAccessPath } from '@/lib/rbac';

function getCookie(name: string) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [role, setRole] = useState<Role>('publisher');

  useEffect(() => {
    const auth = getCookie('admin_auth');
    const currentRole = (getCookie('admin_role') as Role | undefined) ?? 'publisher';

    if (!auth) {
      router.replace('/login');
      return;
    }

    if (!canAccessPath(currentRole, pathname)) {
      router.replace('/dashboard');
      return;
    }

    setRole(currentRole);
  }, [pathname, router]);

  return (
    <div className="min-h-screen md:flex">
      <Sidebar role={role} />
      <div className="flex-1">
        <Header role={role} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
