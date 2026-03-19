import { DashboardCard } from '@/components/DashboardCard';
import { mockArticles, mockJobs, mockUsers, recentActivity } from '@/data/mock';

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-brand-ink">Overview</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title="Total Articles" value={mockArticles.length} />
        <DashboardCard title="Total Jobs" value={mockJobs.length} />
        <DashboardCard title="Total Users" value={mockUsers.length} />
        <DashboardCard title="Recent Activity" value={recentActivity.length} />
      </div>
      <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="mb-3 text-lg font-semibold text-brand-ink">Recent Activity</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm text-brand-slate">
          {recentActivity.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
