import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ｜湘南・茅ヶ崎のホームページ制作 HYデザイン",
  description:
    "ホームページ制作・リニューアル・LP制作・保守運用のご相談はこちらから。湘南・茅ヶ崎エリアの事業者様からのお見積り・初回相談を無料で承っております。",
  openGraph: {
    title: "お問い合わせ｜湘南・茅ヶ崎のホームページ制作 HYデザイン | HYデザイン",
    description:
      "ホームページ制作・リニューアル・LP制作・保守運用のご相談はこちらから。湘南・茅ヶ崎エリアの事業者様からのお見積り・初回相談を無料で承っております。",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
