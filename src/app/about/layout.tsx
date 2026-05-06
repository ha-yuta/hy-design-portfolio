import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYデザインについて｜湘南・茅ヶ崎のWeb制作パートナー",
  description:
    "湘南・茅ヶ崎を拠点に活動するフリーランスのWeb制作パートナー。要件定義・サイト設計から制作・運用改善まで、事業課題に向き合うWeb制作のプロセスをご紹介します。",
  openGraph: {
    title: "HYデザインについて｜湘南・茅ヶ崎のWeb制作パートナー | HYデザイン",
    description:
      "湘南・茅ヶ崎を拠点に活動するフリーランスのWeb制作パートナー。要件定義・サイト設計から制作・運用改善まで、事業課題に向き合うWeb制作のプロセスをご紹介します。",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
