"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a56db] via-[#2563eb] to-[#06b6d4]" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            ホームページ制作、
            <br />
            まずは無料でご相談ください
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            お見積り・ご相談は無料です。
            <br className="hidden sm:block" />
            どんな小さなことでもお気軽にお問い合わせください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#1a56db] bg-white rounded-full hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <MessageCircle size={20} />
            無料で相談する
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80"
        >
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span className="text-sm">お電話でのお問い合わせも歓迎</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="text-sm">
            営業時間: 9:00 - 18:00（土日祝休み）
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
