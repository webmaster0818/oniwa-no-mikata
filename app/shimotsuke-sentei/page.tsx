import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shimotsuke-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "シモツケの剪定｜落葉期（11〜3月）に混み過ぎた枝を抜く程度。深く刈り込むと花芽を落とす｜お庭のミカタ",
  },
  description:
    "シモツケの剪定の時期と切り方を、世田谷区の植栽ガイドブックと熊本市の樹木管理ガイドラインをもとにまとめました。花の時期、深く刈り込まない理由、株立ちの整え方を整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "シモツケの剪定",
    description:
      "シモツケは落葉期に、混み過ぎた部分の枝を抜く程度に剪定します。深く刈り込むと花芽を切り落とします。世田谷区・熊本市の資料から整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; setagaya: string; kumamoto: string }[] = [
  { item: "分類・樹形", setagaya: "バラ科・落葉低木。株立ち", kumamoto: "落葉低木。樹形は株立ち" },
  { item: "花", setagaya: "鑑賞時期 花6〜7月。花色は白・淡紅・紅色、咲き分け種がある", kumamoto: "（記載なし）" },
  { item: "剪定・手入れの時期", setagaya: "手入時期 11〜3月", kumamoto: "剪定時期 7〜3月" },
  { item: "切り方の注意", setagaya: "生育良い", kumamoto: "深く刈込むと花芽を切り落とすので、混み過ぎた部分の枝抜き程度でよい" },
  { item: "移植", setagaya: "移植時期 2〜3月・11〜12月。移植難易は◎", kumamoto: "（記載なし）" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">世田谷区 植栽ガイドブック</th>
          <th className="border px-2 py-2 text-left">熊本市 樹木管理ガイドライン</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.setagaya}</td>
            <td className="border px-2 py-2">{r.kumamoto}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月24日に世田谷区の植栽ガイドブック（掲載樹種特性表）と、熊本市の公共施設樹木の維持管理ガイドライン（熊本平野部の主要樹種の特徴）を開き、シモツケの行を当サイトで項目ごとに並べました。2つの資料は地域も対象（庭・公共施設）も異なるため、時期には幅があります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shimotsuke-sentei",
  published: "2026-11-24",
  updatedLabel: "2026年11月24日",
  h1: "シモツケの剪定｜落葉期（11〜3月）に混み過ぎた枝を抜く程度。深く刈り込むと花芽を落とす",
  breadcrumbLabel: "シモツケの剪定",
  tagChips: ["シモツケ", "落葉低木", "株立ち", "花木", "花芽"],
  ldHeadline: "シモツケの剪定｜落葉期（11〜3月）に混み過ぎた枝を抜く程度。深く刈り込むと花芽を落とす",
  ldDescription:
    "シモツケの剪定の時期と方法を、世田谷区と熊本市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        シモツケの剪定は、<Hl>葉が落ちた11〜3月に、混み過ぎた部分の枝を抜く程度</Hl>にとどめるのが基本です。熊本市のガイドラインは、シモツケについて「深く刈込むと花芽を切り落とすので混み過ぎた部分の枝抜き程度でよい」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」（PDF）</a>、2026年11月24日確認）。
      </p>
      <p>
        世田谷区の植栽ガイドブックでは、シモツケの手入時期を11〜3月、花の鑑賞時期を6〜7月としています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「植栽ガイドブック」掲載樹種特性表（PDF）</a>、同日確認）。本記事では、庭のシモツケを剪定するときの時期と切り方を、2つの自治体の資料から整理します。
      </p>
    </>
  ),
  conclusionTitle: "シモツケは落葉期に、込み合った枝を株元近くから間引いて整えます。株全体を低く刈り込むと、翌年の花が減ります。",
  conclusionBody: (
    <>
      <p>
        2つの資料はどちらもシモツケを株立ちの落葉低木としており、剪定時期は世田谷区が11〜3月、熊本市が7〜3月です。重なるのは<Hl>落葉期の11〜3月</Hl>です。資料ごとの記載を並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "シモツケの剪定に関する4つの基本",
  basicsIntro: <p>以下は、世田谷区と熊本市の資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は落葉期（11〜3月）が中心",
      desc: "世田谷区は手入時期を11〜3月、熊本市は剪定時期を7〜3月としています。両方に共通するのは、葉が落ちて枝の込み具合が見やすい11〜3月です。",
    },
    {
      title: "深く刈り込まない",
      desc: "熊本市のガイドラインは、深く刈り込むと花芽を切り落とすとしています。株全体を一律に低くする刈り込みは避けます。",
    },
    {
      title: "混み過ぎた部分の枝を抜く",
      desc: "熊本市は、混み過ぎた部分の枝抜き程度でよいとしています。込み合った枝を間引くと、株の内側まで光と風が通ります。",
    },
    {
      title: "株立ちで、生育はよい",
      desc: "世田谷区のガイドブックは、シモツケを株立ち・生育良いとし、花色は白・淡紅・紅色で、咲き分ける品種もあるとしています。",
    },
  ],
  stepsHeading: "シモツケを剪定する4つの手順",
  stepsIntro: <p>世田谷区・熊本市の資料の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "葉が落ちた11〜3月に作業日を決める",
      desc: "世田谷区の手入時期（11〜3月）と、熊本市の剪定時期（7〜3月）が重なる落葉期に行います。",
    },
    {
      title: "株元を見て、込み合った枝を選ぶ",
      desc: "株立ちのシモツケは、根元から何本もの枝が立ちます。内側に向かう枝、重なり合う枝、枯れた枝を探します。",
    },
    {
      title: "選んだ枝を付け根から間引く",
      desc: "熊本市のガイドラインのとおり、混み過ぎた部分の枝を抜く程度にとどめます。残す枝の先端は切りそろえません。",
    },
    {
      title: "株が大きすぎるときは数年に分けて整える",
      desc: "深く刈り込むと花芽を落とすため、一度に小さくせず、毎年少しずつ枝を抜いて大きさを保ちます。",
    },
  ],
  ngHeading: "シモツケの剪定で避けたいこと",
  ngs: [
    {
      title: "株全体を低く刈り込むことは避けます",
      desc: "熊本市のガイドラインは、深く刈り込むと花芽を切り落とすとしています。",
    },
    {
      title: "花の時期（6〜7月）の前に枝先を切りそろえることは避けます",
      desc: "世田谷区のガイドブックは、シモツケの花の鑑賞時期を6〜7月としています。春に枝先を切ると、その年の花が減ります。",
    },
    {
      title: "込み合ったまま何年も放置することは避けます",
      desc: "世田谷区のガイドブックは生育良いとしています。枝が増えるので、毎年の枝抜きで株の内側を整えます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなりすぎて間引く枝の見当がつかない場合、花木が多くて剪定時期が重なる場合</Hl>は、剪定業者に相談してください。依頼するときは、花を残したいこと、刈り込みではなく枝抜きで整えたいことを伝えます。
    </p>,
    <p key="2">
      花木の剪定時期の考え方は<Link href="/sentei-jiki/" className={A}>剪定の時期</Link>、花が咲かないときの原因は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花を良くする手入れ</Link>、落葉期にまとめて行う手入れは<Link href="/fuyu-niwa-checklist/" className={A}>冬の庭のチェックリスト</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "大きくなったシモツケの剪定を業者に相談する",
  ctaText:
    "シモツケは深く刈り込むと花芽を落とす木です。株が大きくなって整え方に迷う場合は、枝抜きで整えたいことを伝えて業者に任せると安心です。",
  faqHeading: "シモツケの剪定でよくある質問",
  faqs: [
    {
      q: "シモツケの剪定はいつ行えばよいですか？",
      a: "世田谷区の植栽ガイドブックは手入時期を11〜3月、熊本市のガイドラインは剪定時期を7〜3月としています。両方に共通する落葉期（11〜3月）が目安です。",
    },
    {
      q: "シモツケは短く刈り込んでもよいですか？",
      a: "熊本市のガイドラインは、深く刈り込むと花芽を切り落とすので、混み過ぎた部分の枝抜き程度でよいとしています。",
    },
    {
      q: "シモツケの花はいつ咲きますか？",
      a: "世田谷区の植栽ガイドブックでは、シモツケの花の鑑賞時期を6〜7月とし、花色は白・淡紅・紅色で、咲き分ける品種もあるとしています。",
    },
    {
      q: "シモツケは植え替えできますか？",
      a: "世田谷区の植栽ガイドブックでは、シモツケの移植時期を2〜3月・11〜12月とし、移植の難易を◎（易しい側）としています。",
    },
  ],
  related: [
    { href: "/tosamizuki-sentei/", label: "トサミズキの剪定", desc: "枝抜き程度で整える株立ちの花木" },
    {
      href: "/utsugi-sentei/",
      label: "ウツギの剪定",
      desc: "花の後と落葉期",
    },
    {
      href: "/sentei-jiki/",
      label: "剪定の時期",
      desc: "庭木ごとの考え方",
    },
    {
      href: "/kaboku-kaika-teire/",
      label: "花木の開花を良くする手入れ",
      desc: "剪定時期のずれなど",
    },
    {
      href: "/asebi-sentei/",
      label: "アセビの剪定",
      desc: "枝抜き程度にとどめる低木",
    },
    {
      href: "/fuyu-niwa-checklist/",
      label: "冬の庭のチェックリスト",
      desc: "落葉期の手入れ",
    },
  ],
};

export default function ShimotsukeSenteiPage() {
  return <KnowArticle data={data} />;
}
