"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import LineIcon from "@/components/ui/LineIcon";
import { LINE_URL, NAV_LINKS } from "@/lib/constants";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const DrawerMenu = ({ isOpen, onClose, pathname }: DrawerMenuProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="md:hidden"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9998,
            }}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="md:hidden"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80%",
              maxWidth: "320px",
              backgroundColor: "#ffffff",
              boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.15)",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              <Link href="/" onClick={onClose}>
                <Image
                  src="/images/HY_logo.svg"
                  alt="HYデザイン"
                  width={70}
                  height={66}
                  style={{ height: "40px", width: "auto" }}
                />
              </Link>
              <button
                onClick={onClose}
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  color: "#64748b",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label="メニューを閉じる"
              >
                <X size={24} />
              </button>
            </div>

            <nav style={{ flex: 1, padding: "24px 20px", overflowY: "auto" }}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {NAV_LINKS.mobile.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                    style={{ marginBottom: "4px" }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      style={{
                        display: "block",
                        padding: "12px 16px",
                        fontSize: "18px",
                        fontWeight: 500,
                        borderRadius: "12px",
                        textDecoration: "none",
                        color: pathname === link.href ? "#0891b2" : "#1e3a5f",
                        backgroundColor:
                          pathname === link.href ? "#f0f9ff" : "transparent",
                        transition: "background-color 0.2s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div
              style={{
                padding: "20px",
                borderTop: "1px solid #f1f5f9",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.35 }}
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: "12px 24px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#ffffff",
                    backgroundColor: "#0891b2",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    transition: "background-color 0.2s",
                  }}
                >
                  無料相談
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    padding: "12px 24px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#ffffff",
                    backgroundColor: "#06C755",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    transition: "background-color 0.2s",
                  }}
                >
                  <LineIcon size={20} />
                  LINEで相談
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/HY_logo.svg"
                alt="HYデザイン"
                width={90}
                height={85}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.desktop.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-[#0891b2] ${
                    isScrolled || !isHomePage ? "text-[#1e293b]" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#0891b2] rounded-full hover:bg-[#0e7490] transition-all hover:shadow-lg hover:shadow-[#0891b2]/25 hover:-translate-y-0.5"
              >
                無料相談
              </Link>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#06C755] rounded-full hover:bg-[#05b04c] transition-all hover:shadow-lg hover:shadow-[#06C755]/25 hover:-translate-y-0.5"
              >
                <LineIcon className="w-5 h-5" />
                LINE
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled || !isHomePage
                  ? "text-[#0f172a] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="メニューを開く"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      <DrawerMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
};

export default Header;
