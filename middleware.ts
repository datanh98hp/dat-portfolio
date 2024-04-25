import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('Content-Type', 'application/json')
    // You can also set request headers in NextResponse.rewrite
    const response = NextResponse.next({
        request: {
            // New request headers
            headers: requestHeaders,
        },
    })
    // Set a new response header `x-hello-from-middleware2`
    return response;
   
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ],
}