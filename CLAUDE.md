# CLAUDE.md - HYデザイン ポートフォリオサイト

## プロジェクト概要

HYデザイン（Web制作フリーランス）のポートフォリオサイト。
湘南・茅ヶ崎エリアを中心に活動するホームページ制作サービスの集客用Webサイト。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v3
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **フォント**: Google Fonts (Noto Sans JP + Inter)
- **デプロイ**: Vercel（想定）

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   ├── about/page.tsx      # Aboutページ
│   ├── service/page.tsx    # Serviceページ
│   ├── works/page.tsx      # Worksページ
│   └── contact/page.tsx    # Contactページ
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # ヘッダー・ナビゲーション
│   │   └── Footer.tsx      # フッター
│   ├── sections/           # トップページ用セクション
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── ServiceOverview.tsx
│   │   ├── WorksPreview.tsx
│   │   ├── Pricing.tsx
│   │   └── ContactCTA.tsx
│   └── ui/                 # 共通UIコンポーネント
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionTitle.tsx
└── lib/
    └── constants.ts        # サイト定数・データ
```

## コーディング規約

### 基本ルール
- コンポーネントは関数コンポーネント + アロー関数で統一
- `"use client"` は必要な場合のみ付与（アニメーション、イベントハンドラ使用時）
- CSS クラスは Tailwind のユーティリティクラスを使用
- カスタムCSSは原則使用しない

### 命名規則
- コンポーネント: PascalCase (`Hero.tsx`)
- ユーティリティ関数: camelCase (`formatDate.ts`)
- 定数: UPPER_SNAKE_CASE (`SITE_NAME`)
- CSS変数: kebab-case (`--color-primary`)

### カラーパレット
```
Primary:    #1a56db (ブルー) - 信頼感
Secondary:  #0f172a (ダークネイビー) - プロフェッショナル
Accent:     #06b6d4 (シアン) - アクセント
Background: #f8fafc (ライトグレー)
Text:       #1e293b (ダークグレー)
```

## コマンド

```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # 本番ビルド
npm run lint     # ESLint実行
```

## 注意事項

- 画像は `/public/images/` 配下に配置
- メタデータは各ページの `metadata` エクスポートで設定
- お問い合わせフォームは初期段階ではフロントエンドのみ（バックエンド連携は後日）
- レスポンシブ対応必須（モバイルファースト）
