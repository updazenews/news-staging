'use client';

import Link from 'next/link';
import { AuthForm } from '@/components/AuthForm';
import { resetPassword } from '@/lib/auth';

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen px-4 py-10">
      <AuthForm
        title="Reset password"
        submitText="Send reset link"
        includePassword={false}
        onSubmit={async ({ email }) => {
          await resetPassword(email);
        }}
      />
      <p className="mt-4 text-center text-sm">
        <Link className="text-blue-600 hover:underline" href="/login">
          Back to login
        </Link>
      </p>
    </main>
  );
}
