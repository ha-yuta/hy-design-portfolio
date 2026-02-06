// 外部リンク
export const LINE_URL = "https://line.me/R/ti/p/%40882vsrmg";

// Formspree
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdajrdr";

// ナビゲーションリンク
export const NAV_LINKS = {
  desktop: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
  ],
  mobile: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/contact", label: "Contact" },
  ],
  footer: {
    pages: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/service", label: "Service" },
      { href: "/contact", label: "Contact" },
    ],
    services: [
      { href: "/service#hp", label: "ホームページ制作" },
      { href: "/service#lp", label: "LP制作" },
      { href: "/service#wordpress", label: "WordPress構築" },
      { href: "/service#maintenance", label: "保守・運用" },
    ],
  },
};

// 料金プラン
export const PRICING_PLANS = [
  {
    name: "Light",
    nameJa: "ライトプラン",
    price: "150,000",
    description: "初めてホームページを作る方に",
    features: [
      "1〜3ページ",
      "レスポンシブ対応",
      "お問い合わせフォーム",
      "基本SEO設定",
      "納期：2〜3週間",
    ],
    recommended: false,
  },
  {
    name: "Standard",
    nameJa: "スタンダードプラン",
    price: "300,000",
    description: "本格的なサイトを作りたい方に",
    features: [
      "5〜7ページ",
      "WordPress構築",
      "レスポンシブ対応",
      "SEO対策・解析設定",
      "お問い合わせフォーム",
      "SNS連携",
      "納期：1〜1.5ヶ月",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    nameJa: "プレミアムプラン",
    price: "500,000",
    description: "高機能なサイトをお求めの方に",
    features: [
      "10ページ以上",
      "WordPress or フルスクラッチ",
      "オリジナルデザイン",
      "高度なSEO対策",
      "予約・EC機能対応",
      "納期：2〜3ヶ月",
    ],
    recommended: false,
  },
];

// お問い合わせ種別
export const CONTACT_TYPES = [
  "ホームページ制作",
  "LP制作",
  "WordPress構築",
  "ECサイト制作",
  "保守・運用",
  "その他",
];
