"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Check, Star } from "lucide-react";

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

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-[#f0f9ff] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.recommended
                  ? "bg-gradient-to-br from-[#0891b2] to-[#0e7490] text-white shadow-2xl scale-105 z-10"
                  : "bg-white border border-[#bae6fd] shadow-sm"
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full shadow-lg">
                    <Star size={14} className="fill-current" />
                    おすすめ
                  </span>
                </div>
              )}

              {/* Plan Name */}
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

              {/* Price */}
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

              {/* Features */}
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

              {/* CTA Button */}
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

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
  );
};

export default Pricing;
