import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ROUTES = [
    "/admin/auth/login",
];

export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const accessToken = request.cookies.get('accessToken')?.value;

    const isPublicRoute = PUBLIC_ROUTES.some(route => pathname.startsWith(route));

    // Redirect unauthenticated users to login
    if (!accessToken && !isPublicRoute) {
        return NextResponse.redirect(
            new URL(`/admin/auth/login?next=${pathname}`, request.url)
        );
    }

    // Redirect authenticated users away from auth pages
    if (accessToken && isPublicRoute) {
        return NextResponse.redirect(new URL('/admin/jobs', request.url));
    }

    // Redirect /admin root to /admin/jobs (only if authenticated, handled above)
    if (pathname === '/admin') {
        return NextResponse.redirect(new URL('/admin/jobs', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};