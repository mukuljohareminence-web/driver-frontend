import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { PUBLIC_PATHS } from './shared/config/routes';

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const auth_token = request.cookies.get('auth_token')?.value;
  const refresh_token = request.cookies.get('refresh_token')?.value;

  const isPublicPath = PUBLIC_PATHS.some((path): boolean =>
    pathname.startsWith(path),
  );
  const hasAuthTokens = Boolean(auth_token ?? refresh_token);

  if (isPublicPath) {
    console.log('isPublicPath');
    if (hasAuthTokens && pathname === '/login') {
      console.log('isPublicPath/login');
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  }

  if (!hasAuthTokens) {
    return NextResponse.redirect(new URL('/login?session=false', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
