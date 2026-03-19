import Link from 'next/link';
import { DataTable } from '@/components/DataTable';
import { mockArticles } from '@/data/mock';

export default function NewsPage() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">News Articles</h1>
        <Link className="bg-blue-600 text-white hover:bg-blue-500" href="/news/create">
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
