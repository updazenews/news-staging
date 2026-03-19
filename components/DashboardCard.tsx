export function DashboardCard({ title, value }: { title: string; value: string | number }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
      <p className="text-sm text-brand-slate">{title}</p>
      <h3 className="mt-2 text-3xl font-bold text-brand-ink">{value}</h3>
    </article>
  );
}
