import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
        <h1 className="mb-3 text-2xl font-bold text-brand-ink">Updaze Admin Portal</h1>
        <p className="mb-6 text-sm text-brand-slate">This static build is deployed on GitHub Pages for QA testing.</p>
        <Link className="inline-block bg-brand-blue text-white hover:bg-brand-ink" href="/login">
          Go to Login
        </Link>
      </section>
    </main>
  );
}
