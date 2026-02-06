"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Globe,
  FileText,
  Database,
  ShoppingCart,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "ホームページ制作",
    description: "企業・店舗の顔となるコーポレートサイトを制作します。",
    color: "from-[#0891b2] to-[#22d3ee]",
  },
  {
    icon: FileText,
    title: "LP制作",
    description: "集客・販売に特化したランディングページを制作します。",
    color: "from-[#0369a1] to-[#38bdf8]",
  },
  {
    icon: Database,
    title: "WordPress構築",
    description: "更新しやすいWordPressサイトを構築します。",
    color: "from-[#0e7490] to-[#06b6d4]",
  },
  {
    icon: ShoppingCart,
    title: "ECサイト制作",
    description: "Shopifyを使ったネットショップを構築します。",
    color: "from-[#0284c7] to-[#38bdf8]",
  },
  {
    icon: Settings,
    title: "保守・運用",
    description: "公開後の更新・修正・セキュリティ対策を行います。",
    color: "from-[#f97316] to-[#fb923c]",
  },
];

const Services = () => {
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
          <span className="text-sm font-semibold text-[#0891b2] tracking-wider uppercase">
            Service
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1e3a5f]">
            サービス紹介
          </h2>
          <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
            お客様のニーズに合わせた幅広いサービスをご提供します
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-[#bae6fd] hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm p-[1px] from-[#0891b2] to-[#22d3ee]" />

              <div
                className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/service"
            className="group inline-flex items-center gap-2 text-[#0891b2] font-medium hover:text-[#0e7490] transition-colors"
          >
            サービス詳細を見る
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
