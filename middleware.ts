import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Role } from '@/lib/types';
import { canAccessPath } from '@/lib/rbac';

const authPaths = ['/login', '/reset-password'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const isAuthPage = authPaths.includes(pathname);
  const auth = request.cookies.get('admin_auth')?.value;
  const role = request.cookies.get('admin_role')?.value as Role | undefined;

  if (!auth && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (auth && role && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (auth && role && !isAuthPage) {
    if (!canAccessPath(role, pathname)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
