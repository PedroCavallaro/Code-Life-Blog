import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/Posts/:id*",
};

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const urlTofetch = "http://localhost:3333/post/";
  const res = await fetch(`${urlTofetch + path.split("/")[2]}`);

  console.log(res.status);

  if (res.status !== 200) {
    return NextResponse.redirect(new URL("/NotFound", request.nextUrl));
  }
}
