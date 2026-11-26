import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/yatsude-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ヤツデの剪定｜2〜3月に、込み過ぎた小さい幹や葉を取り除く程度に｜お庭のミカタ",
  },
  description:
    "ヤツデの剪定を、熊本市の公共施設樹木の維持管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理しました。剪定時期は2〜3月、込み過ぎた小さい幹や葉を取り除く程度でよいこと、日陰を好む株立ちの常緑低木であることをまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ヤツデの剪定",
    description:
      "熊本市のガイドラインでは、ヤツデの剪定時期は2〜3月。混み過ぎた小さい幹や葉を取り除く程度でよいとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kumamoto: string; setagaya: string }[] = [
  { item: "分類・樹形", kumamoto: "常緑の低木・株立ち", setagaya: "ウコギ科の常緑低木。株立ちとなる" },
  { item: "剪定・手入れの時期", kumamoto: "2〜3月", setagaya: "手入時期 6〜7月" },
  { item: "剪定の方法", kumamoto: "混み過ぎた小さい幹や葉を取り除く程度でよい", setagaya: "記載なし" },
  { item: "葉・花・実", kumamoto: "記載なし", setagaya: "葉は大形の掌状葉を束生する。花11〜12月。実は黒色" },
  { item: "移植", kumamoto: "記載なし", setagaya: "4〜6月。移植時期や方法に注意が必要（○）" },
  { item: "日照・乾湿・土壌", kumamoto: "記載なし", setagaya: "日影を好む（△）、耐湿性あり（△）、壌土" },
  { item: "都市への適応性", kumamoto: "記載なし", setagaya: "適応性強（◎）" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">熊本市 ガイドライン</th>
          <th className="border px-2 py-2 text-left">世田谷区 樹木一覧</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.kumamoto}</td>
            <td className="border px-2 py-2">{r.setagaya}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（「熊本平野部の主要樹種の特徴」の表のヤツデの行）と、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（ヤツデの行）を開き、当サイトで項目ごとに照合しました。◎・○・△の記号の意味は世田谷区の樹木一覧の凡例によります。「記載なし」はその資料に書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "yatsude-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "ヤツデの剪定｜2〜3月に、込み過ぎた小さい幹や葉を取り除く程度に",
  breadcrumbLabel: "ヤツデの剪定",
  tagChips: ["ヤツデ", "常緑低木", "日陰の庭", "剪定時期", "株立ち"],
  ldHeadline: "ヤツデの剪定｜2〜3月に、込み過ぎた小さい幹や葉を取り除く程度に",
  ldDescription:
    "ヤツデの剪定時期と方法を、熊本市の樹木管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ヤツデの剪定は、<Hl>2〜3月に、込み過ぎた小さい幹や葉を取り除く程度</Hl>にとどめるのが目安です。熊本市のガイドラインの「熊本平野部の主要樹種の特徴」の表は、ヤツデの剪定時期を2〜3月とし、「混み過ぎた小さい幹や葉を取り除く程度でよい」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        世田谷区の植栽ガイドブックの樹木一覧では、ヤツデはウコギ科の常緑低木で、<Hl>株立ちとなり、大形の掌状の葉を束生する</Hl>木です。日照の欄は「日影を好む」（△）で、花は11〜12月です（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ヤツデは、冬の終わり（2〜3月）に、株元の細い幹や重なった葉を間引く程度の剪定で整います。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を当サイトで項目ごとに並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        剪定・手入れの時期は、熊本市が2〜3月、世田谷区が6〜7月と、2つの資料で書き方が異なります。世田谷区の樹木一覧は手入れの内容までは書いていません。<Hl>剪定の方法まで示しているのは熊本市の記載</Hl>のため、当サイトでは2〜3月の間引きを基本として整理しています。
      </p>
    </>
  ),
  basicsHeading: "ヤツデを剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "株立ちの常緑低木",
      desc: "世田谷区はヤツデをウコギ科の常緑低木とし、株立ちとなるとしています。熊本市の表でも常緑の低木・株立ちに分類されています。",
    },
    {
      title: "剪定は2〜3月",
      desc: "熊本市の表では、ヤツデの剪定時期は2〜3月です。",
    },
    {
      title: "取り除く程度でよい",
      desc: "熊本市は、混み過ぎた小さい幹や葉を取り除く程度でよいとしています。",
    },
    {
      title: "日陰を好む",
      desc: "世田谷区の樹木一覧では、日照の欄は△（日影を好む）、乾湿の欄は△（耐湿性あり）です。",
    },
  ],
  stepsHeading: "ヤツデの剪定4つの手順",
  stepsIntro: <p>熊本市・世田谷区の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "11〜12月の花の時期は見送る",
      desc: "世田谷区の樹木一覧では、ヤツデの花は11〜12月です。",
    },
    {
      title: "2〜3月に株の込み具合を見る",
      desc: "熊本市の表の剪定時期です。株元から立ち上がる幹の数と、葉の重なり具合を確かめます。",
    },
    {
      title: "小さい幹を株元から抜く",
      desc: "熊本市は、混み過ぎた小さい幹を取り除く程度でよいとしています。細い幹を株元で切り、残す幹を決めます。",
    },
    {
      title: "重なった葉を取り除く",
      desc: "同じく熊本市の記載にもとづき、重なり合った葉や傷んだ葉を付け根から取り除きます。",
    },
  ],
  ngHeading: "ヤツデの剪定で避けたいこと",
  ngs: [
    {
      title: "全体を強く切り詰めることは避けます",
      desc: "熊本市は、ヤツデは混み過ぎた小さい幹や葉を取り除く程度でよいとしています。",
    },
    {
      title: "強い日差しの場所に移すことは避けます",
      desc: "世田谷区の樹木一覧では、ヤツデは日影を好む（△）樹種です。",
    },
    {
      title: "移植の時期を外すことは避けます",
      desc: "世田谷区の樹木一覧では、ヤツデの移植時期は4〜6月で、移植時期や方法に注意が必要（○）とされています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きく広がって通路や窓をふさいでいるとき、ほかの庭木とまとめて手入れしたいとき</Hl>は、剪定業者に相談してください。「株元の細い幹と重なった葉を間引く程度で」と伝えると、作業の範囲を共有しやすくなります。
    </p>,
    <p key="2">
      日陰の庭に向く植物の選び方は<Link href="/hikage-niwa-shokusai/" className={A}>日陰の庭の植栽</Link>、同じく日陰に強い常緑低木は<Link href="/asebi-sentei/" className={A}>アセビの剪定</Link>、樹種ごとの時期の目安は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ヤツデの剪定を業者に相談する",
  ctaText: "大きく広がったヤツデの間引きや、日陰の庭木の手入れは、業者に任せると安心です。",
  faqHeading: "ヤツデの剪定でよくある質問",
  faqs: [
    {
      q: "ヤツデの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインの表では、ヤツデの剪定時期は2〜3月です。世田谷区の樹木一覧では、手入時期を6〜7月としています。",
    },
    {
      q: "ヤツデはどのくらい切ればよいですか？",
      a: "熊本市は、混み過ぎた小さい幹や葉を取り除く程度でよいとしています。",
    },
    {
      q: "ヤツデは日陰でも育ちますか？",
      a: "世田谷区の植栽ガイドブックの樹木一覧では、ヤツデの日照の欄は△（日影を好む）です。",
    },
    {
      q: "ヤツデの花はいつ咲きますか？",
      a: "世田谷区の樹木一覧では、ヤツデの花は11〜12月、実は黒色としています。",
    },
  ],
  related: [
    { href: "/hikage-niwa-shokusai/", label: "日陰の庭の植栽", desc: "日陰に向く植物の選び方" },
    { href: "/asebi-sentei/", label: "アセビの剪定", desc: "日陰に強い常緑低木" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹と落葉樹の時期の違い" },
    { href: "/mokuren-sentei/", label: "木蓮の剪定", desc: "同じガイドラインの表に載る庭木" },
  ],
};

export default function YatsudeSenteiPage() {
  return <KnowArticle data={data} />;
}
