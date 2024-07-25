import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("middleware");
  if (req.nextUrl.pathname === "/auth/signin") {
    if (req.cookies.get("next-auth.session-token")) {
      return NextResponse.redirect(new URL("/calendar", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/auth/signin",
};
