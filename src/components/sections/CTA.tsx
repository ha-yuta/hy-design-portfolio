"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background - Sunset over the sea */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#fbbf24]" />

      {/* Wave Pattern at Top */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,40 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-sm">
            ホームページ制作、
            <br />
            まずは無料でご相談ください
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
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
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#f97316] bg-white rounded-full hover:bg-[#fef3c7] transition-all hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <MessageCircle size={20} />
            無料で相談する
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

export default CTA;
