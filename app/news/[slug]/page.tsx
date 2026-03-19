import Link from 'next/link';
import { Header } from '@/components/Header';
import { articles, getArticleBySlug } from '@/data/articles';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl px-6 py-10">
          <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Article not found</h2>
            <p className="mb-6 text-slate-700">The article you requested could not be located.</p>
            <Link className="text-accent hover:underline" href="/">
              Back to homepage
            </Link>
          </article>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-10">
        <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">{article.title}</h2>
          <p className="mb-6 text-sm text-slate-500">{article.date}</p>
          <p className="text-base leading-7 text-slate-800">{article.content}</p>
          <Link className="mt-8 inline-block text-accent hover:underline" href="/">
            ← Back to homepage
          </Link>
        </article>
      </main>
    </>
  );
}
