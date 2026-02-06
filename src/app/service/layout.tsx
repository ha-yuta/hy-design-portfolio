import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス・料金",
  description:
    "ホームページ制作、LP制作、WordPress構築、ECサイト制作などのサービスと料金プランをご紹介します。",
  openGraph: {
    title: "サービス・料金 | HYデザイン",
    description:
      "ホームページ制作、LP制作、WordPress構築、ECサイト制作などのサービスと料金プランをご紹介します。",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
