'use client';

import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { newsAuth, newsDb } from '@/lib/firebase';
import type { Role } from '@/lib/types';

const ROLE_KEY = 'admin_role';

export function resolveRoleFromEmail(email: string): Role {
  if (email.includes('admin')) return 'superadmin';
  if (email.includes('publisher')) return 'publisher';
  return 'recruiter';
}

async function saveUserToNewsProject(id: string, email: string, role: Role) {
  await setDoc(
    doc(newsDb, 'users', id),
    {
      id,
      email,
      role,
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function login(email: string, password: string): Promise<Role> {
  const credential = await signInWithEmailAndPassword(newsAuth, email, password);
  const role = resolveRoleFromEmail(email);

  await saveUserToNewsProject(credential.user.uid, credential.user.email ?? email, role);

  document.cookie = `admin_auth=1; path=/`;
  document.cookie = `${ROLE_KEY}=${role}; path=/`;
  return role;
}

export async function logout() {
  await signOut(newsAuth);
  document.cookie = 'admin_auth=; Max-Age=0; path=/';
  document.cookie = `${ROLE_KEY}=; Max-Age=0; path=/`;
}

export async function resetPassword(email: string) {
  await sendPasswordResetEmail(newsAuth, email);
}
