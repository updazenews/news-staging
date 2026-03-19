import { mockArticles } from '@/data/mock';

export function generateStaticParams() {
  return mockArticles.map((article) => ({ id: article.id }));
}

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <section className="max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold">Edit Article #{id}</h1>
      <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <input defaultValue="Sample title" />
        <input defaultValue="Politics" />
        <textarea defaultValue="Sample content" rows={8} />
        <button className="bg-blue-600 text-white hover:bg-blue-500" type="button">
          Update Article
        </button>
      </form>
    </section>
  );
}
