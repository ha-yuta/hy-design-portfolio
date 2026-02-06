"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  FileText,
  Database,
  ShoppingCart,
  Settings,
  ArrowRight,
  MessageCircle,
  Users,
  ClipboardList,
  Code,
  CheckCircle,
  Rocket,
  Check,
  Star,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "hp",
    icon: Globe,
    title: "ホームページ制作",
    description:
      "企業・店舗の顔となるコーポレートサイトを制作します。ビジネスの信頼性を高め、集客につながるサイト設計を行います。",
    features: [
      "レスポンシブデザイン（スマホ対応）",
      "SEOを意識した構造設計",
      "お問い合わせフォーム設置",
      "Googleアナリティクス設定",
      "SNS連携",
    ],
    color: "from-[#0891b2] to-[#22d3ee]",
  },
  {
    id: "lp",
    icon: FileText,
    title: "LP制作",
    description:
      "集客・販売に特化したランディングページを制作します。広告運用との連携を考慮し、コンバージョンを最大化する設計を行います。",
    features: [
      "コンバージョン重視の構成",
      "A/Bテスト対応",
      "高速表示の最適化",
      "フォーム最適化",
      "広告連携サポート",
    ],
    color: "from-[#0369a1] to-[#38bdf8]",
  },
  {
    id: "wordpress",
    icon: Database,
    title: "WordPress構築",
    description:
      "更新しやすいWordPressサイトを構築します。ブログやお知らせの更新など、お客様ご自身で簡単に運用できるサイトを提供します。",
    features: [
      "オリジナルテーマ開発",
      "管理画面のカスタマイズ",
      "更新マニュアル作成",
      "プラグイン選定・設定",
      "セキュリティ対策",
    ],
    color: "from-[#0e7490] to-[#06b6d4]",
  },
  {
    id: "ec",
    icon: ShoppingCart,
    title: "ECサイト制作（Shopify）",
    description:
      "Shopifyを使ったネットショップを構築します。商品管理から決済まで、使いやすいECサイトを実現します。",
    features: [
      "Shopifyテーマカスタマイズ",
      "Liquidによる独自開発",
      "商品登録サポート",
      "決済設定",
      "配送設定",
    ],
    color: "from-[#0284c7] to-[#38bdf8]",
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "保守・運用",
    description:
      "公開後の更新・修正・セキュリティ対策を行います。サイトを安全に運用し続けるためのサポートを提供します。",
    features: [
      "コンテンツ更新代行",
      "セキュリティアップデート",
      "バックアップ管理",
      "アクセス解析レポート",
      "改善提案",
    ],
    color: "from-[#f97316] to-[#fb923c]",
  },
];

const process = [
  {
    icon: MessageCircle,
    title: "お問い合わせ",
    description: "フォームまたはメールでお気軽にご連絡ください。",
  },
  {
    icon: Users,
    title: "ヒアリング",
    description:
      "ご要望やお悩み、ターゲットなどを詳しくお伺いします。オンライン・対面どちらも対応可能です。",
  },
  {
    icon: ClipboardList,
    title: "ご提案・お見積り",
    description:
      "ヒアリング内容をもとに、最適なプランとお見積りをご提案します。",
  },
  {
    icon: Code,
    title: "制作開始",
    description:
      "ご契約後、デザイン・コーディングを進めます。進捗は随時共有いたします。",
  },
  {
    icon: CheckCircle,
    title: "確認・修正",
    description:
      "テスト環境でご確認いただき、修正点があれば対応します。",
  },
  {
    icon: Rocket,
    title: "公開・納品",
    description:
      "最終確認後、サイトを公開します。公開後のサポートもお任せください。",
  },
];

const plans = [
  {
    name: "Light",
    nameJa: "ライトプラン",
    price: "150,000",
    description: "初めてホームページを作る方に",
    features: [
      "1〜3ページ",
      "レスポンシブ対応",
      "お問い合わせフォーム",
      "基本SEO設定",
      "納期：2〜3週間",
    ],
    recommended: false,
  },
  {
    name: "Standard",
    nameJa: "スタンダードプラン",
    price: "300,000",
    description: "本格的なサイトを作りたい方に",
    features: [
      "5〜7ページ",
      "WordPress構築",
      "レスポンシブ対応",
      "SEO対策・解析設定",
      "お問い合わせフォーム",
      "SNS連携",
      "納期：1〜1.5ヶ月",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    nameJa: "プレミアムプラン",
    price: "500,000",
    description: "高機能なサイトをお求めの方に",
    features: [
      "10ページ以上",
      "WordPress or フルスクラッチ",
      "オリジナルデザイン",
      "高度なSEO対策",
      "予約・EC機能対応",
      "納期：2〜3ヶ月",
    ],
    recommended: false,
  },
];

const faqs = [
  {
    question: "制作期間はどのくらいかかりますか？",
    answer:
      "サイトの規模や内容によりますが、シンプルなサイトで2〜3週間、WordPressサイトで1〜2ヶ月程度が目安です。お急ぎの場合はご相談ください。",
  },
  {
    question: "料金の支払いタイミングはいつですか？",
    answer:
      "基本的に、ご契約時に着手金として50%、納品時に残り50%をお支払いいただいております。分割払いなどもご相談可能です。",
  },
  {
    question: "自分で更新できるようにしてもらえますか？",
    answer:
      "はい、WordPressで構築すれば、ブログやお知らせなどはお客様ご自身で更新できます。操作マニュアルもお渡しします。",
  },
  {
    question: "写真や文章は用意する必要がありますか？",
    answer:
      "できる範囲でご用意いただけると助かりますが、素材選定やライティングのサポートも可能です。お気軽にご相談ください。",
  },
  {
    question: "公開後のサポートはありますか？",
    answer:
      "プランに応じてサポート期間を設けております。また、保守・運用プランをご契約いただければ、継続的なサポートが可能です。",
  },
  {
    question: "対面での打ち合わせは可能ですか？",
    answer:
      "はい、湘南・茅ヶ崎エリアであれば対面でのお打ち合わせが可能です。オンラインでの打ち合わせも対応しております。",
  },
];

export default function ServicePage() {
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Service
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f]">
              サービス紹介
            </h1>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              お客様のビジネスに最適なWeb制作サービスをご提供します
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-[#0891b2] tracking-wider uppercase">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
              サービス一覧
            </h2>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#bae6fd] hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white`}
                    >
                      <service.icon size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#64748b] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-[#64748b]"
                        >
                          <Check size={16} className="text-[#0891b2] flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f0f9ff]" ref={processRef}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-[#0891b2] tracking-wider uppercase">
              Process
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
              制作の流れ
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline Line & Badge */}
                <div className="flex flex-col items-center">
                  {/* Badge with number */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-full text-white font-bold text-lg shadow-lg shadow-[#0891b2]/30">
                    {index + 1}
                  </div>
                  {/* Vertical Line */}
                  {index < process.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#0891b2] to-[#bae6fd] mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-2">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#bae6fd] hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#f0f9ff] rounded-xl flex items-center justify-center text-[#0891b2]">
                        <step.icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-[#1e3a5f]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed pl-0 sm:pl-13">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#f0f9ff]" ref={pricingRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-[#0891b2] tracking-wider uppercase">
              Price
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
              料金プラン
            </h2>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              ご予算とご要望に合わせてお選びいただけます
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.recommended
                    ? "bg-gradient-to-br from-[#0891b2] to-[#0e7490] text-white shadow-2xl scale-105 z-10"
                    : "bg-white border border-[#bae6fd] shadow-sm"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full shadow-lg">
                      <Star size={14} className="fill-current" />
                      おすすめ
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className={`text-sm font-semibold tracking-wider uppercase ${
                      plan.recommended ? "text-[#fef3c7]" : "text-[#0891b2]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-lg font-medium mt-1 ${
                      plan.recommended ? "text-white" : "text-[#1e3a5f]"
                    }`}
                  >
                    {plan.nameJa}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={`text-sm ${
                        plan.recommended ? "text-white/70" : "text-[#64748b]"
                      }`}
                    >
                      ¥
                    </span>
                    <span
                      className={`text-4xl font-bold ${
                        plan.recommended ? "text-white" : "text-[#1e3a5f]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.recommended ? "text-white/70" : "text-[#64748b]"
                      }`}
                    >
                      〜
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-2 ${
                      plan.recommended ? "text-white/70" : "text-[#64748b]"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.recommended
                            ? "bg-white/20 text-white"
                            : "bg-[#0891b2]/10 text-[#0891b2]"
                        }`}
                      >
                        <Check size={12} />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.recommended ? "text-white/90" : "text-[#64748b]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 px-6 text-center font-medium rounded-full transition-all ${
                    plan.recommended
                      ? "bg-white text-[#0891b2] hover:bg-[#f0f9ff]"
                      : "bg-[#0891b2] text-white hover:bg-[#0e7490]"
                  }`}
                >
                  相談する
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-[#64748b]">
              ※ 料金はすべて税込です。内容により変動する場合がございます。
              <br />
              ※ 保守・運用サポートは別途オプションとしてご用意しております。
              <br />
              まずはお気軽にご相談ください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" ref={faqRef}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-[#0891b2] tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
              よくある質問
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="border border-[#bae6fd] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#f0f9ff] transition-colors"
                >
                  <span className="font-medium text-[#1e3a5f]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#0891b2] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-[#64748b] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-4">
              まずは無料でご相談ください
            </h2>
            <p className="text-[#64748b] mb-8 max-w-xl mx-auto">
              ホームページ制作に関するご相談・お見積りは無料です。
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <a
                href="https://line.me/R/ti/p/%40882vsrmg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#06C755] rounded-full hover:bg-[#05b04c] transition-all hover:shadow-xl hover:shadow-[#06C755]/25 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINEで相談する
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
