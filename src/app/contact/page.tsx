"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactTypes = [
  "ホームページ制作",
  "LP制作",
  "WordPress構築",
  "ECサイト制作",
  "保守・運用",
  "その他",
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", type: "", message: "" });
  };

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
              Contact
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f]">
              お問い合わせ
            </h1>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              ホームページ制作に関するご相談・お見積りは無料です。
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-12 shadow-sm border border-[#bae6fd] text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <Send size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                    送信ありがとうございます
                  </h3>
                  <p className="text-[#64748b] mb-8">
                    内容を確認の上、2営業日以内にご連絡いたします。
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#0891b2] rounded-full hover:bg-[#0e7490] transition-all hover:shadow-lg hover:shadow-[#0891b2]/25 hover:-translate-y-0.5"
                  >
                    新しいお問い合わせ
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[#bae6fd]"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.15 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#1e3a5f] mb-2"
                      >
                        お名前
                        <span className="ml-2 text-xs text-white bg-[#0891b2] rounded px-1.5 py-0.5">
                          必須
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="山田 太郎"
                        className="w-full px-4 py-3 rounded-xl border border-[#bae6fd] bg-white text-[#1e3a5f] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#1e3a5f] mb-2"
                      >
                        メールアドレス
                        <span className="ml-2 text-xs text-white bg-[#0891b2] rounded px-1.5 py-0.5">
                          必須
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#bae6fd] bg-white text-[#1e3a5f] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.25 }}
                    >
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#1e3a5f] mb-2"
                      >
                        電話番号
                        <span className="ml-2 text-xs text-[#64748b] bg-[#f1f5f9] rounded px-1.5 py-0.5">
                          任意
                        </span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="090-1234-5678"
                        className="w-full px-4 py-3 rounded-xl border border-[#bae6fd] bg-white text-[#1e3a5f] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all"
                      />
                    </motion.div>

                    {/* Type */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-[#1e3a5f] mb-2"
                      >
                        お問い合わせ種別
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#bae6fd] bg-white text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                      >
                        <option value="">選択してください</option>
                        {contactTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.35 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#1e3a5f] mb-2"
                      >
                        ご相談内容
                        <span className="ml-2 text-xs text-white bg-[#0891b2] rounded px-1.5 py-0.5">
                          必須
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="ご相談内容をご記入ください"
                        className="w-full px-4 py-3 rounded-xl border border-[#bae6fd] bg-white text-[#1e3a5f] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all resize-vertical"
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <button
                        type="submit"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-medium text-white bg-[#0891b2] rounded-full hover:bg-[#0e7490] transition-all hover:shadow-xl hover:shadow-[#0891b2]/25 hover:-translate-y-0.5"
                      >
                        <Send size={18} />
                        送信する
                      </button>
                    </motion.div>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Area Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#bae6fd]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-xl flex items-center justify-center text-white mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  対応エリア
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  神奈川県茅ヶ崎市を中心に、湘南エリア・都内近郊で対応しております。オンラインでのお打ち合わせも可能ですので、全国からのご相談を承ります。
                </p>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#bae6fd]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-xl flex items-center justify-center text-white mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  返信について
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  お問い合わせいただいた内容は、2営業日以内にご返信いたします。お急ぎの方はその旨をメッセージにご記入ください。
                </p>
              </div>

              {/* Flow Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#bae6fd]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0891b2] to-[#22d3ee] rounded-xl flex items-center justify-center text-white mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  ご相談の流れ
                </h3>
                <ul className="text-sm text-[#64748b] leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0891b2] font-bold mt-0.5">1.</span>
                    フォームからお問い合わせ
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0891b2] font-bold mt-0.5">2.</span>
                    ヒアリング（オンラインまたは対面）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0891b2] font-bold mt-0.5">3.</span>
                    お見積り・ご提案
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0891b2] font-bold mt-0.5">4.</span>
                    制作開始
                  </li>
                </ul>
              </div>

              {/* LINE Card */}
              <div className="bg-gradient-to-br from-[#06C755] to-[#05a34a] rounded-2xl p-6 shadow-sm text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  LINEでもお気軽に
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4">
                  LINEからもお問い合わせいただけます。お気軽にご相談ください。
                </p>
                <a
                  href="https://line.me/R/ti/p/%40882vsrmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-medium text-[#06C755] bg-white rounded-full hover:bg-gray-50 transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINEで相談する
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
