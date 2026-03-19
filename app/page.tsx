import { ArticleCard } from '@/components/ArticleCard';
import { Header } from '@/components/Header';
import { articles } from '@/data/articles';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <section aria-labelledby="top-headlines" className="space-y-6">
          <h2 id="top-headlines" className="text-3xl font-bold tracking-tight text-slate-900">
            Top Headlines
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
