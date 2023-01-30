import type { NextRequest, NextFetchEvent } from 'next/server';

import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=60, stale-if-error=60');
  return response;
}
