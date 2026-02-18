import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // WordPress時代の古いクエリパラメータをトップページへ301リダイレクト
      {
        source: "/:path*",
        has: [{ type: "query", key: "cat" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "query", key: "p" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "query", key: "page_id" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "query", key: "feed" }],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
