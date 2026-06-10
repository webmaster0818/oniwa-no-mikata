import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { agents, getAgent } from "../agentsData";

const SITE = "https://oniwa-no-mikata.com";
const UPDATED = "2026年6月10日";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAgent(slug);
  if (!a) return {};
  const url = `${SITE}/agents/${slug}/`;
  return {
    title: { absolute: a.metaTitle },
    description: a.metaDesc,
    alternates: { canonical: url },
    openGraph: { title: a.metaTitle, description: a.metaDesc, url, type: "article", images: [a.image] },
  };
}

export default async function AgentPage({ params }: Props) {
  const { slug } = await params;
  const a = getAgent(slug);
  if (!a) {
    return <div className="max-w-4xl mx-auto px-4 py-20 text-center">業者が見つかりません。</div>;
  }

  const toc: [string, string][] = [
    ["about", `${a.name}とはどんなサービスか`],
    ["service", "対応している作業の種類"],
    ["price", `${a.name}の料金体系と相場`],
    ["reviews", "利用者のリアルな口コミ・評判"],
    ["merit", "メリットと注意点"],
    ["recommend", `${a.name}がおすすめな人`],
    ["compare", "他社と比較するときのチェックポイント"],
    ["faq", "よくある質問"],
    ["summary", "まとめ"],
  ];

  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: `${a.name}の口コミ・評判・料金を徹底調査`, description: a.metaDesc,
    image: `${SITE}${a.image}`,
    datePublished: "2026-06-10T00:00:00+09:00", dateModified: "2026-06-10T00:00:00+09:00",
    author: { "@type": "Organization", name: "お庭のミカタ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "お庭のミカタ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/agents/${slug}/` },
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: a.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "お庭のミカタ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "業者レビュー", item: `${SITE}/agents/` },
      { "@type": "ListItem", position: 3, name: `${a.name}の口コミ・評判`, item: `${SITE}/agents/${slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white text-[#33402f]">
        <nav aria-label="パンくず" className="max-w-4xl mx-auto px-4 pt-4 text-xs text-[#6b7563]">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline">お庭のミカタ</Link></li>
            <li>/</li>
            <li><Link href="/agents/" className="hover:underline">業者レビュー</Link></li>
            <li>/</li>
            <li className="text-[#33402f]">{a.name}の口コミ・評判</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden bg-gradient-to-br from-[#1f5e2e] to-[#2D7F3E] text-white mt-4">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <p className="text-sm tracking-widest text-[#FFB347] mb-3">庭・剪定業者レビュー</p>
            <h1 className="font-bold text-2xl md:text-4xl leading-relaxed mb-4">
              {a.name}の口コミ・評判は？
              <br className="hidden md:block" />
              料金・対応・メリットを徹底調査
            </h1>
            <p className="text-green-50 leading-relaxed max-w-2xl">{a.heroLead}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {a.badges.map((b) => (
                <span key={b} className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">{b}</span>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image src={a.image} alt={`${a.name}の剪定・庭木サービス`} width={1024} height={1024} className="w-full h-56 md:h-72 object-cover" priority />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <p className="text-sm text-[#6b7563] mb-8">最終更新日：{UPDATED}　／　お庭のミカタ編集部</p>

          <nav aria-label="目次" className="mb-12 rounded-2xl border border-[#d6e4d0] bg-[#f4f9f1] p-6">
            <p className="font-bold text-[#33402f] mb-4">この記事の目次</p>
            <ol className="space-y-2 text-sm md:text-base">
              {toc.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-[#2D7F3E] hover:text-[#1f5e2e] hover:underline">
                    <span className="font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>{label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="about" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">{a.name}とはどんなサービスか</h2>
            {a.about.map((p, i) => (<p key={i} className="leading-loose mb-4 text-[#4a5443]">{p}</p>))}
            {a.featureImage && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-[#d6e4d0]">
                <Image src={a.featureImage} alt={`${a.name}の特徴`} width={1200} height={500} className="w-full h-auto" />
              </div>
            )}
          </section>

          <section id="service" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">対応している作業の種類</h2>
            <p className="leading-loose mb-5 text-[#4a5443]">剪定だけでなく、庭木に関わる幅広い作業に対応しています。まとめて相談しやすいのが利点です。</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {a.serviceTags.map((s) => (
                <div key={s} className="rounded-xl border border-[#d6e4d0] p-4 text-center font-medium text-[#4a5443]">{s}</div>
              ))}
            </div>
          </section>

          <section id="price" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">{a.name}の料金体系と相場</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-[#d6e4d0] rounded-lg overflow-hidden">
                <thead><tr className="bg-[#eef6ea] text-[#33402f]"><th className="text-left px-4 py-3">項目</th><th className="text-left px-4 py-3">料金の目安</th><th className="text-left px-4 py-3">備考</th></tr></thead>
                <tbody>
                  {a.priceRows.map((r, i) => (
                    <tr key={i} className="border-t border-[#e3eede]">
                      <td className="px-4 py-3 font-medium">{r.item}</td>
                      <td className="px-4 py-3 font-bold text-[#c2620a]">{r.price}</td>
                      <td className="px-4 py-3 text-[#6b7563]">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#6b7563] mt-3">{a.priceNote ?? "※ 料金は変動する場合があります。正確な金額は無料の見積もりでご確認ください。"}</p>
          </section>

          <section id="reviews" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">利用者のリアルな口コミ・評判</h2>
            <div className="rounded-2xl bg-[#fff6e9] border border-[#ffe0b3] p-6 mb-6">
              <p className="text-[#4a5443] text-sm leading-relaxed">{a.reviewsSummary}</p>
            </div>
            <h3 className="font-bold text-lg mb-3 text-[#2D7F3E]">良い口コミ</h3>
            <div className="space-y-4 mb-8">
              {a.goodReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-[#d6e4d0] p-5">
                  <p className="font-bold mb-1">{r.title}</p>
                  <p className="text-sm leading-relaxed mb-2 text-[#4a5443]">{r.body}</p>
                  <p className="text-xs text-[#9aa394]">{r.meta}</p>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-lg mb-3 text-[#c2620a]">気になる口コミ・注意点</h3>
            <div className="space-y-4">
              {a.badReviews.map((r, i) => (
                <div key={i} className="rounded-xl border border-[#d6e4d0] bg-[#faf8f4] p-5">
                  <p className="font-bold mb-1">{r.title}</p>
                  <p className="text-sm leading-relaxed mb-2 text-[#4a5443]">{r.body}</p>
                  <p className="text-xs text-[#9aa394]">{r.meta}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9aa394] mt-4">※ 口コミは各種口コミサイト・Googleのクチコミ等で見られる利用者の声をもとに、編集部が傾向を要約したものです。感じ方には個人差があります。</p>
          </section>

          <section id="merit" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">メリットと注意点</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border-2 border-[#bfe0b8] bg-[#f1f9ee] p-6">
                <h3 className="font-bold text-[#2D7F3E] mb-3">メリット</h3>
                <ul className="space-y-2 text-sm text-[#4a5443]">{a.merits.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
              <div className="rounded-2xl border-2 border-[#f3d2a6] bg-[#fff7ee] p-6">
                <h3 className="font-bold text-[#c2620a] mb-3">注意点</h3>
                <ul className="space-y-2 text-sm text-[#4a5443]">{a.demerits.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
            </div>
          </section>

          <section id="recommend" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">{a.name}がおすすめな人</h2>
            <ul className="space-y-3 text-[#4a5443]">
              {a.recommend.map((r, i) => (
                <li key={i} className="flex gap-3"><span className="text-[#FF8C00] font-bold">●</span>{r}</li>
              ))}
            </ul>
          </section>

          <section id="compare" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">他社と比較するときのチェックポイント</h2>
            <p className="leading-loose mb-4 text-[#4a5443]">庭・剪定業者は料金の安さだけでなく、出張費を含めた総額や仕上がり、対応範囲を含めて比較することが大切です。{a.name}を他社と比べる際は、次の点を確認すると判断しやすくなります。</p>
            <ol className="space-y-3 text-[#4a5443]">
              {a.comparePoints.map((c, i) => (
                <li key={i} className="flex gap-3"><span className="font-bold text-[#FF8C00]">{i + 1}.</span>{c}</li>
              ))}
            </ol>
            <p className="leading-loose mt-4 text-[#4a5443]">料金や対応は地域・庭の状況で変わるため、{a.name}を含めて<Link href="/agents/" className="text-[#2D7F3E] underline">複数の業者を比較</Link>し、無料見積もりを取ったうえで選ぶのがおすすめです。</p>
          </section>

          <section id="faq" className="scroll-mt-20 mb-14">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">よくある質問</h2>
            <div className="space-y-3">
              {a.faqs.map((f, i) => (
                <details key={i} className="rounded-xl border border-[#d6e4d0] bg-white p-5" open={i === 0}>
                  <summary className="font-bold cursor-pointer">{f.q}</summary>
                  <p className="text-sm leading-relaxed text-[#4a5443] mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="summary" className="scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 mb-5">まとめ</h2>
            {a.summary.map((p, i) => (<p key={i} className="leading-loose mb-4 text-[#4a5443]">{p}</p>))}
            <div className="rounded-2xl bg-[#2D7F3E] text-white p-6 text-center mt-2">
              <p className="font-bold text-lg mb-2">お庭のお手入れでお困りの方へ</p>
              <p className="text-green-50 text-sm mb-4">地域・庭の状況に合った業者を比較して、無料見積もりを取りましょう。</p>
              <Link href="/agents/" className="inline-block rounded-lg bg-[#FF8C00] hover:bg-[#e67e00] px-6 py-3 font-bold text-white">業者を比較して探す</Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
