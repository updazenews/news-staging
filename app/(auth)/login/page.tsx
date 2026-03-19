'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthForm } from '@/components/AuthForm';
import { homeByRole } from '@/lib/rbac';
import { login } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-4 py-10">
      <AuthForm
        title="Login to Admin Portal"
        submitText="Login"
        onSubmit={async ({ email, password }) => {
          const role = await login(email, password ?? '');
          router.push(homeByRole(role));
        }}
      />
      <p className="mt-4 text-center text-sm">
        <Link className="text-brand-blue hover:text-brand-ink hover:underline" href="/reset-password">
          Forgot password?
        </Link>
      </p>
    </main>
  );
}
