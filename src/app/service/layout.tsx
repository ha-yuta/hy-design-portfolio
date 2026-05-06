import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス・料金｜湘南・茅ヶ崎のホームページ制作 HYデザイン",
  description:
    "ホームページ制作・LP制作・WordPress構築・ECサイト制作・保守運用の料金プランをご紹介。要件定義から運用まで一貫して支援する、湘南・茅ヶ崎の地域密着Web制作です。",
  openGraph: {
    title: "サービス・料金｜湘南・茅ヶ崎のホームページ制作 HYデザイン | HYデザイン",
    description:
      "ホームページ制作・LP制作・WordPress構築・ECサイト制作・保守運用の料金プランをご紹介。要件定義から運用まで一貫して支援する、湘南・茅ヶ崎の地域密着Web制作です。",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
