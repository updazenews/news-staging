import { cookies } from 'next/headers';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import type { Role } from '@/lib/types';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const role = ((await cookies()).get('admin_role')?.value ?? 'publisher') as Role;

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
