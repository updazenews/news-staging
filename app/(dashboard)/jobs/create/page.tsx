export default function CreateJobPage() {
  return (
    <section className="max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold">Create Job</h1>
      <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <input placeholder="Job title" />
        <input placeholder="Company" />
        <textarea placeholder="Description" rows={8} />
        <button className="bg-blue-600 text-white hover:bg-blue-500" type="button">
          Save Job
        </button>
      </form>
    </section>
  );
}
