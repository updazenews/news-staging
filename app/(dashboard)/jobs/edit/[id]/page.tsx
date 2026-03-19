export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <section className="max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold">Edit Job #{id}</h1>
      <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <input defaultValue="Sample job title" />
        <input defaultValue="Sample company" />
        <textarea defaultValue="Sample description" rows={8} />
        <button className="bg-blue-600 text-white hover:bg-blue-500" type="button">
          Update Job
        </button>
      </form>
    </section>
  );
}
