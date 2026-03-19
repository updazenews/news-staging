'use client';

import { useState } from 'react';

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
    <section className="mx-auto mt-16 w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="mb-6 text-2xl font-bold">{title}</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        {includePassword && (
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
        )}
        <button className="w-full bg-blue-600 text-white hover:bg-blue-500" disabled={loading} type="submit">
          {loading ? 'Please wait...' : submitText}
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-slate-600">{message}</p>}
    </section>
  );
}
