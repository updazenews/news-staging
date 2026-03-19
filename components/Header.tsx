'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth';
import type { Role } from '@/lib/types';

export function Header({ role }: { role: Role }) {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push('/login');
  }

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-500">Signed in as</p>
        <p className="font-semibold capitalize">{role}</p>
      </div>
      <button className="bg-slate-900 text-white hover:bg-slate-700" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}
