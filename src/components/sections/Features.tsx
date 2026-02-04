"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Building2,
  MapPin,
  Handshake,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "成果起点のWeb設計",
    description:
      "見た目だけでなく、集客・売上につながるサイト設計。お客様のビジネス目標を達成するための戦略的なアプローチを行います。",
  },
  {
    icon: Building2,
    title: "中小企業・個人事業主特化",
    description:
      "大手にはない、小規模ビジネスに寄り添った提案。予算や規模に合わせた最適なソリューションをご提供します。",
  },
  {
    icon: MapPin,
    title: "地域密着・柔軟対応",
    description:
      "湘南・茅ヶ崎エリアで直接お会いして打ち合わせ可能。細かいご要望にも柔軟に対応いたします。",
  },
  {
    icon: Handshake,
    title: "伴走型サポート",
    description:
      "制作して終わりではありません。公開後も一緒にサイトを育てていくパートナーとしてサポートし続けます。",
  },
  {
    icon: Wrench,
    title: "ワンストップ対応",
    description:
      "企画・デザイン・制作・運用・保守まで一括でお任せいただけます。複数の業者に依頼する手間がありません。",
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f0f9ff]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#0891b2] tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
            HYデザインが選ばれる理由
          </h2>
          <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
            お客様のビジネスを成功に導くための5つの強み
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-[#bae6fd] hover:shadow-xl hover:border-[#0891b2]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-[#bae6fd] hover:shadow-xl hover:border-[#0891b2]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
