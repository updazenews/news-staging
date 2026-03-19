export default function CreateArticlePage() {
  return (
    <section className="max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold">Create Article</h1>
      <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <input placeholder="Title" />
        <input placeholder="Category" />
        <textarea placeholder="Content" rows={8} />
        <button className="bg-blue-600 text-white hover:bg-blue-500" type="button">
          Save Article
        </button>
      </form>
    </section>
  );
}
