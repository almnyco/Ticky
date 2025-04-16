import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

  // const { pathname } = request.nextUrl

  const accessToken = request.cookies.get('accessToken')?.value
  const isAuthRoute = ['/signin', '/signup', 'forgot-password'].includes(request.nextUrl.pathname)


  // if (accessToken && isAuthRoute) {
  //   return Response.redirect(new URL('/home', request.url))
  // }

  // if (!accessToken && !isAuthRoute) {
  //   return Response.redirect(new URL('/signin', request.url))
  // }

  return NextResponse.next()
}

export const config = {
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
  matcher: ['/home/:path*', '/mytasks/:path*', '/sharedtasks/:path*', '/completedtasks/:path*', '/settings/:path*'],
}