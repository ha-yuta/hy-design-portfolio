"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Heart,
  Briefcase,
  ArrowRight,
  Code,
  Palette,
  BarChart3,
  Database,
} from "lucide-react";

const career = [
  {
    year: "2021",
    title: "Web制作・ディレクション領域へ本格シフト",
    description:
      "WordPress/Shopifyを中心に、ディレクション〜デザイン・実装まで幅広く対応開始。HYデザインとして活動をスタート。",
  },
  {
    year: "2021-2022",
    title: "新規事業「タイヤ交換出張サービス」を立ち上げ",
    description:
      "サービス設計から、WordPressでのサイト制作、SEO前提の設計〜改善運用まで一気通貫で担当。公開後に反響を獲得。",
  },
  {
    year: "2022-2023",
    title: "横浜観光サイトリニューアル（ディレクション/UIUX）",
    description:
      "構成・企画を含めたディレクションを担当。ユーザーが情報を取得しやすい導線・UI設計を推進。",
  },
  {
    year: "2023-2024",
    title: "広告用LP制作・アパレルECサイト制作",
    description:
      "LP刷新案件でCVを落とさないデザインを実現。ShopifyでのECサイト制作ではLiquidカスタマイズにも対応。",
  },
  {
    year: "2025",
    title: "「のーどさぽーと」を立ち上げ",
    description:
      "サービス設計からWordPressでのサイト制作、SNS集客、オンライン中心のサポートまで一貫して担当。",
  },
];

const skills = [
  {
    icon: Palette,
    category: "デザイン",
    items: ["Figma", "Photoshop", "Illustrator", "XD"],
  },
  {
    icon: Code,
    category: "フロントエンド",
    items: ["HTML / CSS", "JavaScript", "React / Next.js"],
  },
  {
    icon: Database,
    category: "CMS / EC",
    items: ["WordPress", "Shopify"],
  },
  {
    icon: BarChart3,
    category: "マーケティング",
    items: ["SEO対策", "Google Analytics", "SNS運用", "MEO対策"],
  },
];

export default function AboutPage() {
  const profileRef = useRef(null);
  const careerRef = useRef(null);
  const visionRef = useRef(null);
  const areaRef = useRef(null);
  const ctaRef = useRef(null);

  const profileInView = useInView(profileRef, { once: true, margin: "-100px" });
  const careerInView = useInView(careerRef, { once: true, margin: "-100px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const areaInView = useInView(areaRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#f0f9ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-[#0891b2] tracking-wider uppercase">
              About
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f]">
              HYデザインについて
            </h1>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              湘南・茅ヶ崎を拠点に活動するフリーランスWebデザイナーです
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white" ref={profileRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={profileInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Image
              src="/images/HY_logo.svg"
              alt="HYデザイン"
              width={120}
              height={120}
              className="mx-auto mb-6"
            />
            <p className="text-[#64748b] leading-relaxed max-w-2xl mx-auto">
              「お客様の想いをカタチにする」をモットーに、中小企業・個人事業主の方々に寄り添ったWeb制作を行っています。
              見た目のデザインだけでなく、集客や売上につながる成果起点のサイト設計を大切にしています。
              大手制作会社にはない、フリーランスならではの柔軟さとスピード感で対応いたします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career & Skills Section */}
      <section
        className="py-20 bg-gradient-to-b from-white to-[#f0f9ff]"
        ref={careerRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Career Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={careerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-lg flex items-center justify-center text-white">
                  <Briefcase size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[#1e3a5f]">経歴</h2>
              </div>

              <div className="relative pl-8 border-l-2 border-[#bae6fd] space-y-10">
                {career.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={careerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[25px] top-1 w-4 h-4 bg-[#0891b2] rounded-full border-4 border-white shadow-sm" />

                    <div className="text-sm font-semibold text-[#0891b2] mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={careerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-lg flex items-center justify-center text-white">
                  <Code size={20} />
                </div>
                <h2 className="text-2xl font-bold text-[#1e3a5f]">スキル</h2>
              </div>

              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={careerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-[#bae6fd]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-lg flex items-center justify-center text-white">
                        <skill.icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-[#1e3a5f]">
                        {skill.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-sm text-[#0891b2] bg-[#f0f9ff] border border-[#bae6fd] rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#f0f9ff]" ref={visionRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-[#0891b2] tracking-wider uppercase">
              Vision
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
              大切にしていること
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#bae6fd] relative"
          >
            <div className="absolute top-6 left-8 text-6xl text-[#0891b2]/10 font-serif leading-none">
              &ldquo;
            </div>
            <div className="relative z-10 space-y-6 text-[#64748b] leading-relaxed">
              <p>
                フリーランスとして独立したのは、お客様と同じ目線で、同じ熱量で、一緒にWebサイトを育てていきたいと思ったからです。
              </p>
              <p>
                「作って終わり」ではなく、公開してからがスタート。お客様のビジネスが成長していく過程に伴走できるパートナーでありたいと考えています。
              </p>
              <p>
                対話を重ねながら、本当に必要なWebサイトをご一緒に作り上げていきます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Area Section */}
      <section className="py-20 bg-white" ref={areaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={areaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0891b2] to-[#0e7490] rounded-2xl p-8 sm:p-10 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={28} />
              <h2 className="text-2xl font-bold">活動拠点</h2>
            </div>
            <p className="text-white/90 leading-relaxed mb-4">
              神奈川県茅ヶ崎市を拠点に、湘南エリア（藤沢・平塚・鎌倉など）を中心に活動しています。
              対面でのお打ち合わせはもちろん、オンライン対応も可能ですので、全国からのご依頼もお受けしております。
            </p>
            <ul className="text-white/80 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full" />
                湘南・茅ヶ崎エリア：対面打ち合わせ可能
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full" />
                都内近郊：訪問対応可能
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full" />
                全国：オンライン対応
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f0f9ff]" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Heart size={24} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-4">
              お気軽にご相談ください
            </h2>
            <p className="text-[#64748b] mb-8 max-w-xl mx-auto">
              ホームページ制作に関するご相談・お見積りは無料です。
              まずはお話をお聞かせください。
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#0891b2] rounded-full hover:bg-[#0e7490] transition-all hover:shadow-xl hover:shadow-[#0891b2]/25 hover:-translate-y-0.5"
            >
              お問い合わせはこちら
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
