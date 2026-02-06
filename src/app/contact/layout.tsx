import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "HYデザインへのお問い合わせはこちらから。ホームページ制作に関するご相談・お見積りは無料です。",
  openGraph: {
    title: "お問い合わせ | HYデザイン",
    description:
      "HYデザインへのお問い合わせはこちらから。ホームページ制作に関するご相談・お見積りは無料です。",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
