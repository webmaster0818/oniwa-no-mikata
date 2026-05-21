import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oniwa-no-mikata.com"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
  title: "お庭のミカタ｜剪定・草刈り・伐採の業者比較【2026年最新】",
  description:
    "剪定・草刈り・伐採・造園の優良業者を徹底比較。全国対応の7社を厳選し、料金・口コミ・サービス内容をわかりやすく紹介。無料見積もりで最適な庭木の手入れ業者が見つかります。",
  keywords: [
    "剪定",
    "草刈り",
    "伐採",
    "造園",
    "庭木",
    "業者比較",
    "庭の手入れ",
    "植木屋",
  ],
  openGraph: {
    title: "お庭のミカタ｜剪定・草刈り・伐採の業者比較【2026年最新】",
    description:
      "剪定・草刈り・伐採・造園の優良業者を徹底比較。全国対応の7社を厳選。",
    type: "website",
    locale: "ja_JP",
    siteName: "お庭のミカタ",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"お庭の味方\",\"url\":\"https://oniwa-no-mikata-deploy.pages.dev/\",\"logo\":\"https://oniwa-no-mikata-deploy.pages.dev/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://oniwa-no-mikata-deploy.pages.dev/about/\"]}" }}
        />
        
      </body>
    </html>
  );
}
