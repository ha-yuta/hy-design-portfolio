"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Send, MessageCircle } from "lucide-react";
import LineIcon from "@/components/ui/LineIcon";
import { LINE_URL, CONTACT_TYPES, FORMSPREE_ENDPOINT } from "@/lib/constants";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          type: formData.type,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", type: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "送信に失敗しました");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "送信中にエラーが発生しました。時間をおいて再度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
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
                    送信完了しました
                  </h3>
                  <p className="text-[#64748b] mb-8">
                    お問い合わせありがとうございます。
                    <br />
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
                        {CONTACT_TYPES.map((type) => (
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

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    {/* Submit */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-medium text-white bg-[#0891b2] rounded-full hover:bg-[#0e7490] transition-all hover:shadow-xl hover:shadow-[#0891b2]/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            送信中...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            送信する
                          </>
                        )}
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
                  <LineIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  LINEでもお気軽に
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4">
                  LINEからもお問い合わせいただけます。お気軽にご相談ください。
                </p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-medium text-[#06C755] bg-white rounded-full hover:bg-gray-50 transition-all"
                >
                  <LineIcon className="w-5 h-5" />
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
