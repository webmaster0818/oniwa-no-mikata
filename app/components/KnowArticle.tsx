import Link from "next/link";
import type { ReactNode } from "react";

// Know系記事の共通テンプレート。
// 構成: 結論先出しボックス → 本文解説 → 自力対処ステップ → NG行動 → 業者に頼む判断 → CTA → FAQ → 関連記事

export const SITE = "https://oniwa-no-mikata.com";
export const KNOW_PUBLISHED = "2026-08-12";
export const KNOW_UPDATED_LABEL = "2026年8月12日";

export interface KnowCard {
  title: string;
  desc: string;
}

export interface KnowFaq {
  q: string;
  a: string;
}

export interface KnowRelated {
  href: string;
  label: string;
  desc: string;
}

export interface KnowArticleData {
  slug: string;
  h1: string;
  breadcrumbLabel: string;
  tagChips: string[];
  ldHeadline: string;
  ldDescription: string;
  lead: ReactNode;
  conclusionTitle: string;
  conclusionBody: ReactNode;
  basicsHeading: string;
  basicsIntro?: ReactNode;
  basicsLabel: string;
  basics: KnowCard[];
  stepsHeading: string;
  stepsIntro?: ReactNode;
  steps: KnowCard[];
  ngHeading: string;
  ngs: KnowCard[];
  proHeading: string;
  proParas: ReactNode[];
  ctaHeading: string;
  ctaText: string;
  faqHeading: string;
  faqs: KnowFaq[];
  related: KnowRelated[];
}

// 強調ハイライト（オレンジの下線マーカー・既存ページ踏襲）
export function Hl({ children }: { children: ReactNode }) {
  return (
    <strong className="font-bold bg-[linear-gradient(transparent_65%,rgba(255,140,0,0.28)_65%)]">
      {children}
    </strong>
  );
}

// h2（オレンジの左ボーダー・既存ページ踏襲）
function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="scroll-mt-20 mt-14 mb-6 text-xl md:text-2xl font-bold border-l-4 border-[#FF8C00] pl-4 leading-snug text-[#33402f]">
      {children}
    </h2>
  );
}

export default function KnowArticle({ data }: { data: KnowArticleData }) {
  const path = `/${data.slug}/`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.ldHeadline,
    description: data.ldDescription,
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: `${KNOW_PUBLISHED}T00:00:00+09:00`,
    dateModified: `${KNOW_PUBLISHED}T00:00:00+09:00`,
    author: { "@type": "Organization", name: "お庭のミカタ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "お庭のミカタ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${path}` },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "お庭のミカタ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: data.breadcrumbLabel, item: `${SITE}${path}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className="bg-white text-[#33402f]">
        <div className="mx-auto max-w-4xl px-4 pt-4 pb-12 md:pb-16">
          {/* パンくず */}
          <nav aria-label="パンくず" className="text-xs text-[#6b7563] mb-4">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link href="/" className="hover:underline">
                  お庭のミカタ
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#33402f]">{data.breadcrumbLabel}</li>
            </ol>
          </nav>

          {/* h1・更新日・タグ */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[30px] font-bold leading-normal tracking-wide text-[#33402f]">
              {data.h1}
            </h1>
            <div>
              <span className="inline-block rounded-full bg-[#2D7F3E] px-3 py-1 text-xs font-bold tracking-wide text-white">
                お庭の基礎知識
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-wide text-[#6b7563]">
              <span>
                更新日：<time dateTime={KNOW_PUBLISHED}>{KNOW_UPDATED_LABEL}</time>
              </span>
              <span>
                ※本記事にはアフィリエイト広告（PR）を含む場合があります。詳しくは
                <Link href="/content-policy/" className="underline hover:text-[#2D7F3E]">
                  コンテンツ制作ポリシー
                </Link>
                をご覧ください。
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {data.tagChips.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[#d6e4d0] bg-white px-3 py-1.5 text-xs md:text-sm font-bold tracking-wide text-[#33402f] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </header>

          {/* 導入文 */}
          <div className="mt-6 leading-loose text-[#4a5443]">{data.lead}</div>

          {/* 結論先出しボックス */}
          <div className="mt-8 rounded-2xl border border-[#bfe0b8] bg-[#f1f9ee] p-5 md:p-6">
            <p className="font-bold text-[#2D7F3E] mb-2 leading-snug">結論：{data.conclusionTitle}</p>
            <div className="text-sm md:text-base leading-loose text-[#4a5443]">{data.conclusionBody}</div>
          </div>

          {/* 本文解説 */}
          <H2>{data.basicsHeading}</H2>
          {data.basicsIntro && (
            <div className="leading-loose mb-4 text-[#4a5443]">{data.basicsIntro}</div>
          )}
          <div className="space-y-3 mb-4">
            {data.basics.map((b, i) => (
              <div key={b.title} className="rounded-2xl border border-[#d6e4d0] bg-white p-4 md:p-5">
                <p className="font-bold text-[#2D7F3E] text-sm md:text-base mb-1.5">
                  <span className="inline-block rounded bg-[#EFF7EC] px-2 py-0.5 text-xs font-bold text-[#33402f] mr-2">
                    {data.basicsLabel}
                    {i + 1}
                  </span>
                  {b.title}
                </p>
                <p className="text-sm leading-loose text-[#4a5443]">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* 自力対処ステップ */}
          <H2>{data.stepsHeading}</H2>
          {data.stepsIntro && (
            <div className="leading-loose mb-4 text-[#4a5443]">{data.stepsIntro}</div>
          )}
          <ol className="space-y-3 mb-4">
            {data.steps.map((s, i) => (
              <li key={s.title} className="flex gap-3 rounded-2xl border border-[#d6e4d0] bg-white p-4 md:p-5">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#2D7F3E] text-white font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-[#33402f] text-sm md:text-base mb-1">{s.title}</p>
                  <p className="text-sm leading-loose text-[#4a5443]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* NG行動 */}
          <H2>{data.ngHeading}</H2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {data.ngs.map((n) => (
              <div key={n.title} className="rounded-2xl border border-red-200 bg-white p-5">
                <h3 className="font-bold text-red-700 mb-1.5 text-sm">NG：{n.title}</h3>
                <p className="text-sm leading-loose text-[#4a5443]">{n.desc}</p>
              </div>
            ))}
          </div>

          {/* 業者に頼む判断 */}
          <H2>{data.proHeading}</H2>
          {data.proParas.map((p, i) => (
            <div key={i} className="leading-loose mb-4 text-sm md:text-base text-[#4a5443]">
              {p}
            </div>
          ))}

          {/* CTA */}
          <div className="mt-10 mb-4 rounded-2xl bg-[#2D7F3E] text-white p-6 text-center">
            <p className="font-bold text-lg mb-2">{data.ctaHeading}</p>
            <p className="text-green-50 text-sm mb-4 leading-relaxed">{data.ctaText}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/agents/"
                className="inline-block rounded-lg bg-[#FF8C00] hover:bg-[#e67e00] transition-colors px-6 py-3 font-bold text-white"
              >
                庭業者の一覧・比較を見る
              </Link>
              <Link
                href="/area/tokyo/"
                className="inline-block rounded-lg border-2 border-white/60 hover:bg-white/10 transition-colors px-6 py-3 font-bold text-white"
              >
                東京の庭業者まとめを見る
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <H2>{data.faqHeading}</H2>
          <div className="space-y-4 mb-4">
            {data.faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#d6e4d0] overflow-hidden">
                <p className="flex gap-3 px-5 py-4 font-bold text-[#33402f] bg-[#f1f9ee]">
                  <span className="text-[#2D7F3E] shrink-0">Q.</span>
                  {f.q}
                </p>
                <p className="flex gap-3 px-5 py-4 text-sm leading-loose text-[#4a5443]">
                  <span className="text-[#FF8C00] font-bold shrink-0">A.</span>
                  <span>{f.a}</span>
                </p>
              </div>
            ))}
          </div>

          {/* 関連記事 */}
          <H2>関連記事</H2>
          <ul className="grid gap-3 md:grid-cols-2">
            {data.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="block rounded-xl border border-[#d6e4d0] bg-white px-4 py-3 hover:bg-[#f4f9f1] transition-colors"
                >
                  <span className="block text-sm font-bold text-[#2D7F3E] mb-0.5">{r.label}</span>
                  <span className="block text-xs text-[#6b7563] leading-relaxed">{r.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
