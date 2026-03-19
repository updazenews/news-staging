import Link from 'next/link';
import type { Article } from '@/data/articles';

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</p>
      <h2 className="mb-2 text-xl font-semibold text-slate-900">{article.title}</h2>
      <p className="mb-4 text-sm text-slate-500">{article.date}</p>
      <p className="mb-5 text-sm leading-6 text-slate-700">{article.excerpt}</p>
      <Link
        href={`/news/${article.slug}`}
        className="inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Read article
      </Link>
    </article>
  );
}
