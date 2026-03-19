'use client';

import { useState } from 'react';
import { BrandBadge } from '@/components/BrandBadge';

export function AuthForm({
  title,
  onSubmit,
  submitText,
  includePassword = true
}: {
  title: string;
  submitText: string;
  includePassword?: boolean;
  onSubmit: (values: { email: string; password?: string }) => Promise<void>;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await onSubmit({ email, password: includePassword ? password : undefined });
      setMessage('Success.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto mt-16 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
      <div className="mb-6">
        <BrandBadge />
      </div>
      <h1 className="mb-6 text-2xl font-bold text-brand-ink">{title}</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1 block text-sm font-medium text-brand-slate">Email</label>
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        {includePassword && (
          <div>
            <label className="mb-1 block text-sm font-medium text-brand-slate">Password</label>
            <input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
        )}
        <button className="w-full bg-brand-blue text-white hover:bg-brand-ink" disabled={loading} type="submit">
          {loading ? 'Please wait...' : submitText}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-brand-slate">{message}</p>}
    </section>
  );
}
