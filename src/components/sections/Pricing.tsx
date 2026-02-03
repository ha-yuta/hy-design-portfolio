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
    price: "98,000",
    description: "初めてホームページを作る方に",
    features: [
      "5ページ以内",
      "レスポンシブ対応",
      "基本SEO対策",
      "お問い合わせフォーム",
      "公開後1ヶ月サポート",
    ],
    recommended: false,
  },
  {
    name: "Standard",
    nameJa: "スタンダードプラン",
    price: "198,000",
    description: "本格的なサイトを作りたい方に",
    features: [
      "10ページ以内",
      "WordPress構築",
      "SEO対策・解析設定",
      "お問い合わせフォーム",
      "SNS連携",
      "公開後3ヶ月サポート",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    nameJa: "プレミアムプラン",
    price: "398,000",
    description: "高機能なサイトをお求めの方に",
    features: [
      "20ページ以内",
      "WordPress構築",
      "フルカスタマイズ",
      "EC・予約機能対応",
      "高度なSEO対策",
      "公開後6ヶ月サポート",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#1a56db] tracking-wider uppercase">
            Price
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0f172a]">
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
                  ? "bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] text-white shadow-2xl scale-105 z-10"
                  : "bg-white border border-[#e2e8f0] shadow-sm"
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-[#1a56db] to-[#06b6d4] rounded-full shadow-lg">
                    <Star size={14} className="fill-current" />
                    おすすめ
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3
                  className={`text-sm font-semibold tracking-wider uppercase ${
                    plan.recommended ? "text-[#06b6d4]" : "text-[#1a56db]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-lg font-medium mt-1 ${
                    plan.recommended ? "text-white" : "text-[#0f172a]"
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
                      plan.recommended ? "text-gray-300" : "text-[#64748b]"
                    }`}
                  >
                    ¥
                  </span>
                  <span
                    className={`text-4xl font-bold ${
                      plan.recommended ? "text-white" : "text-[#0f172a]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.recommended ? "text-gray-300" : "text-[#64748b]"
                    }`}
                  >
                    〜
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    plan.recommended ? "text-gray-300" : "text-[#64748b]"
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
                          ? "bg-[#06b6d4]/20 text-[#06b6d4]"
                          : "bg-[#1a56db]/10 text-[#1a56db]"
                      }`}
                    >
                      <Check size={12} />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.recommended ? "text-gray-200" : "text-[#64748b]"
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
                    ? "bg-white text-[#0f172a] hover:bg-gray-100"
                    : "bg-[#1a56db] text-white hover:bg-[#1e40af]"
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
            まずはお気軽にご相談ください。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
