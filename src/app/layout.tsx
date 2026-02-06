import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hy-webservice.com"),
  title: {
    default: "HYデザイン | 湘南・茅ヶ崎のホームページ制作",
    template: "%s | HYデザイン",
  },
  description:
    "湘南・茅ヶ崎を中心にホームページ制作で活動するフリーランス。中小企業・個人事業主に特化した成果起点のWeb設計で、あなたのビジネスをサポートします。",
  keywords: [
    "ホームページ制作",
    "Web制作",
    "湘南",
    "茅ヶ崎",
    "フリーランス",
    "中小企業",
    "個人事業主",
  ],
  authors: [{ name: "HYデザイン" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hy-webservice.com",
    siteName: "HYデザイン",
    title: "HYデザイン | 湘南・茅ヶ崎のホームページ制作",
    description:
      "湘南・茅ヶ崎を中心にホームページ制作で活動するフリーランス。中小企業・個人事業主に特化した成果起点のWeb設計。",
    images: [
      {
        url: "/images/ogp.svg",
        width: 1200,
        height: 630,
        alt: "HYデザイン - 湘南・茅ヶ崎のホームページ制作",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HYデザイン | 湘南・茅ヶ崎のホームページ制作",
    description:
      "湘南・茅ヶ崎を中心にホームページ制作で活動するフリーランス。中小企業・個人事業主に特化した成果起点のWeb設計。",
    images: ["/images/ogp.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${inter.variable} antialiased bg-white text-[#1e293b]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
