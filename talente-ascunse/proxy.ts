import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();

  const cookie = request.cookies.get("admin_auth");
  if (cookie?.value === process.env.ADMIN_PASSWORD) return NextResponse.next();

  if (pathname === "/admin/login") return NextResponse.next();

  return NextResponse.redirect(new URL("/admin/login", request.url));
}

export const config = {
  matcher: ["/admin/:path*"],
};
