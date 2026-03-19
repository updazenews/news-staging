'use client';

import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import type { Role } from '@/lib/types';

const ROLE_KEY = 'admin_role';

export function resolveRoleFromEmail(email: string): Role {
  if (email.includes('admin')) return 'superadmin';
  if (email.includes('publisher')) return 'publisher';
  return 'recruiter';
}

export async function login(email: string, password: string): Promise<Role> {
  await signInWithEmailAndPassword(auth, email, password);
  const role = resolveRoleFromEmail(email);
  document.cookie = `admin_auth=1; path=/`;
  document.cookie = `${ROLE_KEY}=${role}; path=/`;
  return role;
}

export async function logout() {
  await signOut(auth);
  document.cookie = 'admin_auth=; Max-Age=0; path=/';
  document.cookie = `${ROLE_KEY}=; Max-Age=0; path=/`;
}

export async function resetPassword(email: string) {
  await sendPasswordResetEmail(auth, email);
}
