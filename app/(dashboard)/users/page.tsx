import { DataTable } from '@/components/DataTable';
import { mockUsers } from '@/data/mock';

export default function UsersPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-brand-ink">User Management</h1>
      <DataTable
        columns={['Email', 'Role', 'Actions']}
        rows={mockUsers.map((user) => [user.email, user.role, 'Edit / Delete'])}
      />
    </section>
  );
}
