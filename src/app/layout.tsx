import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GA_MEASUREMENT_ID = "G-6HF7RSTXFX";

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
    default: "湘南・茅ヶ崎のホームページ制作｜企画から運用まで HYデザイン",
    template: "%s | HYデザイン",
  },
  description:
    "湘南・茅ヶ崎エリアの事業者様向けに、企画・設計から制作・運用までワンストップで伴走するホームページ制作。要件定義から保守まで、長く付き合える地域密着のWebパートナーです。",
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
    title: "湘南・茅ヶ崎のホームページ制作｜企画から運用まで HYデザイン",
    description:
      "湘南・茅ヶ崎エリアの事業者様向けに、企画・設計から制作・運用までワンストップで伴走するホームページ制作。要件定義から保守まで、長く付き合える地域密着のWebパートナーです。",
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
    title: "湘南・茅ヶ崎のホームページ制作｜企画から運用まで HYデザイン",
    description:
      "湘南・茅ヶ崎エリアの事業者様向けに、企画・設計から制作・運用までワンストップで伴走するホームページ制作。要件定義から保守まで、長く付き合える地域密着のWebパートナーです。",
    images: ["/images/ogp.svg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HYデザイン",
  alternateName: "HY Design",
  description:
    "湘南・茅ヶ崎エリアの事業者向けWeb制作。企画・設計から制作・運用まで一貫支援。",
  url: "https://hy-webservice.com",
  image: "https://hy-webservice.com/images/ogp.svg",
  areaServed: [
    { "@type": "City", name: "茅ヶ崎市" },
    { "@type": "City", name: "藤沢市" },
    { "@type": "City", name: "鎌倉市" },
    { "@type": "City", name: "平塚市" },
    { "@type": "City", name: "寒川町" },
    { "@type": "AdministrativeArea", name: "神奈川県" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "神奈川県",
    addressLocality: "茅ヶ崎市",
    addressCountry: "JP",
  },
  priceRange: "¥¥",
  serviceType: [
    "ホームページ制作",
    "LP制作",
    "WordPress構築",
    "ECサイト制作",
    "Web保守・運用",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
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
