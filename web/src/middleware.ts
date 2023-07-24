import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: "/Posts/:id*",
};

export default async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const urlTofetch = "https://code-life-server.vercel.app/posts/";
    const res = await fetch(`${urlTofetch + path.split("/")[2]}`);

    console.log(res.status);

    if (res.status !== 200) {
        return NextResponse.redirect(new URL("/NotFound", request.nextUrl));
    }
}
