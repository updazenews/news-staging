import Link from 'next/link';
import { DataTable } from '@/components/DataTable';
import { mockJobs } from '@/data/mock';

export default function JobsPage() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-ink">Jobs (Sebenza)</h1>
        <Link className="bg-brand-orange text-white hover:bg-brand-ink" href="/jobs/create">
          Create Job
        </Link>
      </div>
      <DataTable
        columns={['Title', 'Company', 'Created At', 'Action']}
        rows={mockJobs.map((job) => [job.title, job.company, job.createdAt, `Edit: /jobs/edit/${job.id}`])}
      />
    </section>
  );
}
