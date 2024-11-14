import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ROUTE } from "@/utils/constants";

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.has("isLoggedIn");
  const isLoginPage = request.nextUrl.pathname === ROUTE.LOGIN;
  const PROTECTED_ROUTES = [ROUTE.DASHBOARD, ROUTE.RECORDS];
  const isProtectedRoute = PROTECTED_ROUTES.includes(request.nextUrl.pathname);

  // If user is not logged in and tries to access protected route, redirect to login
  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL(ROUTE.LOGIN, request.url));
  }

  // If user is logged in and tries to access login page, redirect to home
  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL(ROUTE.HOME, request.url));
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [ROUTE.LOGIN, ROUTE.HOME, ROUTE.DASHBOARD, ROUTE.RECORDS]
}; 