"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

// アニメーションの総時間（秒）
const CYCLE_DURATION = 40;

// 固定の星の位置（Hydrationエラー回避）
const STAR_POSITIONS = [
  { left: 5, top: 8 }, { left: 12, top: 15 }, { left: 18, top: 5 },
  { left: 25, top: 22 }, { left: 32, top: 10 }, { left: 38, top: 28 },
  { left: 45, top: 6 }, { left: 52, top: 18 }, { left: 58, top: 12 },
  { left: 65, top: 25 }, { left: 72, top: 8 }, { left: 78, top: 20 },
  { left: 85, top: 14 }, { left: 92, top: 5 }, { left: 8, top: 35 },
  { left: 15, top: 42 }, { left: 22, top: 38 }, { left: 28, top: 48 },
  { left: 35, top: 32 }, { left: 42, top: 45 }, { left: 48, top: 36 },
  { left: 55, top: 50 }, { left: 62, top: 40 }, { left: 68, top: 52 },
  { left: 75, top: 35 }, { left: 82, top: 46 }, { left: 88, top: 38 },
  { left: 95, top: 28 }, { left: 3, top: 55 }, { left: 10, top: 48 },
  { left: 17, top: 58 }, { left: 24, top: 52 }, { left: 30, top: 56 },
  { left: 37, top: 48 }, { left: 44, top: 55 }, { left: 50, top: 42 },
  { left: 57, top: 58 }, { left: 63, top: 45 }, { left: 70, top: 55 },
  { left: 77, top: 48 }, { left: 83, top: 58 }, { left: 90, top: 52 },
  { left: 96, top: 45 }, { left: 20, top: 3 }, { left: 40, top: 2 },
  { left: 60, top: 4 }, { left: 80, top: 3 }, { left: 33, top: 55 },
  { left: 67, top: 32 },
];

const Hero = () => {
  const stars = useMemo(() => STAR_POSITIONS, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sky Gradient Background - Day/Night Cycle */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            // 朝（0%）
            "linear-gradient(to bottom, #7dd3fc, #bae6fd, #e0f2fe)",
            // 昼（25%）
            "linear-gradient(to bottom, #38bdf8, #7dd3fc, #bae6fd)",
            // 夕焼け（50%）
            "linear-gradient(to bottom, #f97316, #fb923c, #fde68a)",
            // 夜（75%）
            "linear-gradient(to bottom, #0f172a, #1e3a5f, #334155)",
            // 朝に戻る（100%）
            "linear-gradient(to bottom, #7dd3fc, #bae6fd, #e0f2fe)",
          ],
        }}
        transition={{
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.12, 0.25, 0.38, 1],
        }}
      />

      {/* Stars - Only visible at night */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={{
          opacity: [0, 0, 0, 1, 0],
        }}
        transition={{
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.35, 0.45, 0.95],
        }}
      >
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </motion.div>

      {/* Sun - 円弧を描いて移動 */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        animate={{
          // 右から左へ円弧を描いて移動
          x: ["0vw", "-15vw", "-35vw", "-35vw", "0vw"],
          y: ["0vh", "10vh", "45vh", "60vh", "0vh"],
          opacity: [0.9, 0.95, 1, 0, 0.9],
          scale: [1, 1.05, 1.1, 1.1, 1],
          background: [
            "linear-gradient(to bottom right, #fde047, #fbbf24)",
            "linear-gradient(to bottom right, #fde047, #fbbf24)",
            "linear-gradient(to bottom right, #f97316, #dc2626)",
            "linear-gradient(to bottom right, #f97316, #dc2626)",
            "linear-gradient(to bottom right, #fde047, #fbbf24)",
          ],
          boxShadow: [
            "0 0 60px rgba(253, 224, 71, 0.5)",
            "0 0 60px rgba(253, 224, 71, 0.5)",
            "0 0 100px rgba(249, 115, 22, 0.7)",
            "0 0 0px rgba(249, 115, 22, 0)",
            "0 0 60px rgba(253, 224, 71, 0.5)",
          ],
        }}
        style={{
          right: "10%",
          top: "10%",
        }}
        transition={{
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.12, 0.25, 0.35, 1],
        }}
      />

      {/* Moon - 左から右へ円弧を描いて移動 */}
      <motion.div
        className="absolute w-24 h-24 rounded-full"
        style={{
          background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)",
          boxShadow: "0 0 40px rgba(241, 245, 249, 0.6), inset -6px -6px 12px rgba(0,0,0,0.15)",
        }}
        animate={{
          // 左下から右上へ円弧を描いて移動
          x: ["0vw", "10vw", "25vw", "25vw"],
          y: ["30vh", "0vh", "-15vh", "30vh"],
          opacity: [0, 0, 1, 0],
          scale: [0.8, 1, 1, 0.8],
        }}
        initial={{
          left: "5%",
          top: "60%",
        }}
        transition={{
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.6, 0.95],
        }}
      />

      {/* Clouds */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          opacity: [0.9, 0.9, 0.7, 0.3, 0.9],
        }}
        transition={{
          x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          opacity: {
            duration: CYCLE_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.12, 0.25, 0.38, 1],
          },
        }}
        className="absolute top-32 left-[10%] w-48 h-16 bg-white rounded-full shadow-md"
      />
      <motion.div
        animate={{
          x: [0, -15, 0],
          opacity: [0.85, 0.85, 0.6, 0.2, 0.85],
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          opacity: {
            duration: CYCLE_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.12, 0.25, 0.38, 1],
          },
        }}
        className="absolute top-48 right-[20%] w-64 h-20 bg-white rounded-full shadow-md"
      />
      <motion.div
        animate={{
          x: [0, 10, 0],
          opacity: [0.8, 0.8, 0.5, 0.2, 0.8],
        }}
        transition={{
          x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          opacity: {
            duration: CYCLE_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.12, 0.25, 0.38, 1],
          },
        }}
        className="absolute top-24 left-[40%] w-40 h-14 bg-white rounded-full shadow-md"
      />

      {/* Sea - Color changes with time */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[35%]"
        animate={{
          background: [
            "linear-gradient(to bottom, #0891b2, #06b6d4, #22d3ee)",
            "linear-gradient(to bottom, #0891b2, #06b6d4, #22d3ee)",
            "linear-gradient(to bottom, #c2410c, #ea580c, #f97316)",
            "linear-gradient(to bottom, #0f172a, #1e3a5f, #334155)",
            "linear-gradient(to bottom, #0891b2, #06b6d4, #22d3ee)",
          ],
        }}
        transition={{
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.12, 0.25, 0.38, 1],
        }}
      />

      {/* Surfer - サーフィン中のシルエット（昼〜夕方のみ） */}
      <motion.div
        className="absolute bottom-[37%] right-[22%] z-[5]"
        animate={{
          y: [0, -10, 2, -8, 0],
          x: [0, 15, 25, 35, 0],
          rotate: [0, -5, 0, 5, 0],
          opacity: [1, 1, 0, 0, 1],
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: {
            duration: CYCLE_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.35, 0.95, 1],
          },
        }}
      >
        <svg
          width="70"
          height="55"
          viewBox="0 0 70 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* サーフボード（斜め・波に乗っている角度） */}
          <motion.path
            d="M5 42 Q35 35 65 42 Q35 50 5 42"
            animate={{
              fill: [
                "#0e7490",
                "#0e7490",
                "#7c2d12",
                "#0e7490",
              ],
            }}
            transition={{
              duration: CYCLE_DURATION,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.12, 0.25, 1],
            }}
          />
          {/* サーファーのシルエット（サーフィン姿勢：膝を曲げてバランス） */}
          <motion.g
            animate={{
              fill: [
                "#065f73",
                "#065f73",
                "#5c1d0a",
                "#065f73",
              ],
            }}
            transition={{
              duration: CYCLE_DURATION,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.12, 0.25, 1],
            }}
          >
            {/* 頭 */}
            <circle cx="38" cy="8" r="5" />
            {/* 体（前傾姿勢） */}
            <path d="M35 13 Q32 22 30 32 L40 30 Q42 20 40 13 Z" />
            {/* 左腕（前に伸ばしてバランス） */}
            <path d="M32 18 Q22 14 18 10 L20 8 Q26 12 34 16 Z" />
            {/* 右腕（後ろでバランス） */}
            <path d="M42 18 Q50 20 55 18 L54 15 Q48 17 40 16 Z" />
            {/* 前足（曲げている） */}
            <path d="M28 30 Q22 34 20 40 L24 42 Q26 36 32 32 Z" />
            {/* 後足（伸ばしている） */}
            <path d="M38 30 Q44 36 50 40 L52 37 Q46 34 40 28 Z" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Wave SVG */}
      <div className="absolute bottom-[33%] left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z"
            animate={{
              d: [
                "M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z",
                "M0,80 C360,20 720,100 1080,40 C1260,60 1380,80 1440,60 L1440,120 L0,120 Z",
                "M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z",
              ],
              fill: [
                "#0891b2",
                "#0891b2",
                "#c2410c",
                "#0f172a",
                "#0891b2",
              ],
            }}
            transition={{
              d: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              fill: {
                duration: CYCLE_DURATION,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.15, 0.28, 0.38, 1],
              },
            }}
          />
        </svg>
      </div>

      {/* Sand Beach */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16"
        animate={{
          background: [
            "linear-gradient(to top, #fef3c7, #fde68a)",
            "linear-gradient(to top, #fef3c7, #fde68a)",
            "linear-gradient(to top, #d97706, #f59e0b)",
            "linear-gradient(to top, #1e293b, #334155)",
            "linear-gradient(to top, #fef3c7, #fde68a)",
          ],
        }}
        transition={{
          duration: CYCLE_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.12, 0.25, 0.38, 1],
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-sm text-[#0891b2] font-medium mb-8"
        >
          <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
          湘南・茅ヶ崎でホームページ制作なら
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a5f] leading-tight tracking-tight drop-shadow-sm"
        >
          想いをカタチにする
          <br />
          <span className="bg-gradient-to-r from-[#0891b2] to-[#0369a1] bg-clip-text text-transparent">
            Webパートナー
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[#1e3a5f]/80 max-w-2xl mx-auto leading-relaxed"
        >
          中小企業・個人事業主に特化した成果起点のWeb設計。
          <br className="hidden sm:block" />
          制作から運用まで、伴走型でサポートします。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#1e3a5f] rounded-full hover:bg-[#0f172a] transition-all hover:shadow-xl hover:shadow-[#1e3a5f]/30 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            無料で相談する
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/service"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#0891b2] bg-white/90 backdrop-blur-sm border-2 border-[#0891b2]/30 rounded-full hover:bg-white hover:border-[#0891b2] transition-all w-full sm:w-auto"
          >
            サービスを見る
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "湘南", label: "地域密着" },
            { value: "98%", label: "満足度" },
            { value: "5年", label: "経験年数" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl py-4 px-2 shadow-md"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#0891b2]">
                {stat.value}
              </div>
              <div className="text-sm text-[#64748b] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
