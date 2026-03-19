import Link from 'next/link';
import { DataTable } from '@/components/DataTable';
import { mockArticles } from '@/data/mock';

export default function NewsPage() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-ink">News Articles</h1>
        <Link className="bg-brand-blue text-white hover:bg-brand-ink" href="/news/create">
          Create Article
        </Link>
      </div>
      <DataTable
        columns={['Title', 'Category', 'Created At', 'Action']}
        rows={mockArticles.map((article) => [
          article.title,
          article.category,
          article.createdAt,
          `Edit: /news/edit/${article.id}`
        ])}
      />
    </section>
  );
}
