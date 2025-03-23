import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith('/api/proxy')) {
    url.href = 'https://sikondang.serangkota.go.id/api/data_kominfo';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}