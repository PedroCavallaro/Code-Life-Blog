import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: "/Posts/:id*",
};

export default async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const res = await fetch(`http://localhost:3333/post/${path.split("/")[2]}`);

    if (res.status !== 200) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
}
