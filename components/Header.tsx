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
        <p className="text-xs uppercase tracking-wider text-brand-slate">Signed in as</p>
        <p className="font-semibold capitalize text-brand-ink">{role}</p>
      </div>
      <button className="bg-brand-ink text-white hover:bg-brand-blue" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}
