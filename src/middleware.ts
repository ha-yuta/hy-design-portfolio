import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// WordPress時代の古いクエリパラメータをトップページへリダイレクト
const LEGACY_WP_PARAMS = ["cat", "p", "page_id", "feed"];

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // WordPressの古いクエリパラメータが含まれているかチェック
  const hasLegacyParam = LEGACY_WP_PARAMS.some((param) =>
    searchParams.has(param)
  );

  if (hasLegacyParam) {
    // クエリパラメータなしでトップページへ301リダイレクト
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  // 静的ファイルやAPIルートは除外
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
