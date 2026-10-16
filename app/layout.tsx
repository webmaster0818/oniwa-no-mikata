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
  twitter: {
    card: "summary_large_image",
  },
  title: "お庭のミカタ｜剪定・草刈り・伐採の業者比較【2026年最新】",
  description:
    "剪定・草刈り・伐採・造園の業者のうち、全国に対応する7社を、公式サイトの情報にもとづいて比較する専門ガイドです。料金・口コミ・サービス内容を掲載しています。各社とも見積もりは無料です。",
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
      "剪定・草刈り・伐採・造園の業者のうち、全国に対応する7社を、公式サイトの情報にもとづいて比較する専門ガイドです。",
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
          dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"お庭のミカタ\",\"url\":\"https://oniwa-no-mikata.com/\",\"logo\":\"https://oniwa-no-mikata.com/favicon.ico\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"株式会社MediaX\",\"url\":\"https://mediax.biz\"},\"sameAs\":[\"https://oniwa-no-mikata.com/about/\"]}" }}
        />
        
      </body>
    </html>
  );
}
