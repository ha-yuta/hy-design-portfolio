import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import LineIcon from "@/components/ui/LineIcon";
import { LINE_URL, NAV_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/HY_logo.svg"
                alt="HYデザイン"
                width={90}
                height={85}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              湘南・茅ヶ崎を中心に
              <br />
              ホームページ制作で活動する
              <br />
              フリーランスです。
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={16} className="text-[#22d3ee]" />
                <span>神奈川県茅ヶ崎市</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#22d3ee] mb-4">
              Pages
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.footer.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#22d3ee] mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.footer.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#22d3ee] mb-4">
              Contact
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              お気軽にご相談ください。
              <br />
              お見積りは無料です。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#1e3a5f] bg-[#22d3ee] rounded-full hover:bg-[#06b6d4] transition-all hover:shadow-lg hover:shadow-[#22d3ee]/25"
              >
                無料で相談する
              </Link>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#06C755] rounded-full hover:bg-[#05b04c] transition-all hover:shadow-lg hover:shadow-[#06C755]/25"
              >
                <LineIcon className="w-5 h-5" />
                LINE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#0e7490]/30">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} HY DESIGN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
