'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { canAccessPath } from '@/lib/rbac';
import type { Role } from '@/lib/types';

function getCookie(name: string) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

export function ProtectedRoute({ role, path, children }: { role: Role; path: string; children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const auth = getCookie('admin_auth');
    const currentRole = getCookie('admin_role') as Role | undefined;

    if (!auth || !currentRole || !canAccessPath(currentRole, path)) {
      router.replace('/login');
    }
  }, [path, router]);

  return <>{children}</>;
}
