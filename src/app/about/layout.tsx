import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYデザインについて",
  description:
    "HYデザインの自己紹介、経歴、スキルをご紹介します。湘南・茅ヶ崎を拠点に活動するフリーランスWebデザイナーです。",
  openGraph: {
    title: "HYデザインについて | HYデザイン",
    description:
      "HYデザインの自己紹介、経歴、スキルをご紹介します。湘南・茅ヶ崎を拠点に活動するフリーランスWebデザイナーです。",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
