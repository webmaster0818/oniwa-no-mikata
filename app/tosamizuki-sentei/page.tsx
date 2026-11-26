import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/tosamizuki-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "トサミズキの剪定｜花後の5〜6月に、自然樹形を生かした枝抜き程度で｜お庭のミカタ",
  },
  description:
    "トサミズキの剪定を、熊本市の公共施設樹木の維持管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理しました。剪定時期は5〜6月、自然樹形を生かした枝抜き程度、花は3月下旬に咲く株立ちの落葉低木であることをまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "トサミズキの剪定",
    description:
      "熊本市のガイドラインでは、トサミズキの剪定時期は5〜6月。自然樹形を生かして枝抜き程度でよいとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kumamoto: string; setagaya: string }[] = [
  { item: "分類・樹形", kumamoto: "落葉樹・株立ち", setagaya: "マンサク科の落葉低木。株立ちとなる" },
  { item: "剪定・手入れの時期", kumamoto: "5〜6月", setagaya: "手入時期 5〜6月中旬、11〜12月" },
  { item: "剪定の方法", kumamoto: "自然樹形を生かして枝抜き程度でよい", setagaya: "記載なし" },
  { item: "剪定時期の表の色分け", kumamoto: "落葉樹の剪定時期の表で、トサミズキの欄は軽剪定の色のみ", setagaya: "記載なし" },
  { item: "花", kumamoto: "記載なし", setagaya: "花3月下旬。花は黄緑色で早春に咲く" },
  { item: "移植", kumamoto: "記載なし", setagaya: "2月中旬〜3月中旬、11〜12月上旬。移植がしやすく活着がよい（◎）" },
  { item: "日照・乾湿・土壌", kumamoto: "記載なし", setagaya: "日照を好む（◎）、乾湿は中間（○）、壌土" },
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
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（「熊本平野部の主要樹種の特徴」の表と「主要樹木の剪定の時期（落葉樹）」の表のトサミズキの行、「花木の剪定時期」の説明）と、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（トサミズキの行）を開き、当サイトで項目ごとに照合しました。色分けは当サイトが表を目視で読み取ったものです。◎などの記号の意味は世田谷区の樹木一覧の凡例によります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "tosamizuki-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "トサミズキの剪定｜花後の5〜6月に、自然樹形を生かした枝抜き程度で",
  breadcrumbLabel: "トサミズキの剪定",
  tagChips: ["トサミズキ", "マンサク科", "落葉低木", "剪定時期", "花木"],
  ldHeadline: "トサミズキの剪定｜花後の5〜6月に、自然樹形を生かした枝抜き程度で",
  ldDescription:
    "トサミズキの剪定時期と方法を、熊本市の樹木管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        トサミズキの剪定は、<Hl>花が終わった後の5〜6月に、自然樹形を生かして枝を間引く程度</Hl>にとどめるのが目安です。熊本市のガイドラインの「熊本平野部の主要樹種の特徴」の表は、トサミズキの剪定時期を5〜6月とし、「自然樹形を生かして枝抜き程度でよい」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        世田谷区の植栽ガイドブックの樹木一覧では、トサミズキはマンサク科の落葉低木で、<Hl>花は3月下旬、黄緑色で早春に咲く</Hl>株立ちの木です（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "トサミズキは、春の花が終わった5〜6月に、込み合った枝を間引く軽い剪定にとどめます。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を当サイトで項目ごとに並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市は、花木の剪定時期は花後から花芽分化が行われる前の時期でなければならず、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。<Hl>早春に咲くトサミズキでは、花の直後にあたる5〜6月が剪定時期として示されている</Hl>と当サイトでは読んでいます。世田谷区の樹木一覧は11〜12月も手入れの時期に挙げていますが、作業の内容は書いていません。
      </p>
    </>
  ),
  basicsHeading: "トサミズキを剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "株立ちの落葉低木",
      desc: "世田谷区はトサミズキをマンサク科の落葉低木とし、株立ちとなるとしています。熊本市の表でも樹形は株立ちです。",
    },
    {
      title: "剪定は5〜6月",
      desc: "熊本市の表では、トサミズキの剪定時期は5〜6月です。世田谷区の手入時期にも5〜6月中旬が含まれます。",
    },
    {
      title: "枝抜き程度でよい",
      desc: "熊本市は、自然樹形を生かして枝抜き程度でよいとしています。落葉樹の剪定時期の表でも、トサミズキの欄は軽剪定の色だけで塗られています（当サイトの読み取り）。",
    },
    {
      title: "花は早春（3月下旬）",
      desc: "世田谷区の樹木一覧では、トサミズキの花は3月下旬、黄緑色で早春に咲くとしています。",
    },
  ],
  stepsHeading: "トサミズキの剪定4つの手順",
  stepsIntro: <p>熊本市・世田谷区の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "3月下旬の花を見届ける",
      desc: "世田谷区の樹木一覧の鑑賞時期です。花の前に枝を切ると、その年の花が減ります。",
    },
    {
      title: "5〜6月に込み合った枝を見つける",
      desc: "熊本市の表の剪定時期です。株立ちの株元から、込み合っている枝や内側に向かう枝を確かめます。",
    },
    {
      title: "枝抜きで間引く",
      desc: "熊本市は、自然樹形を生かして枝抜き程度でよいとしています。枝先を一律に刈り込むのではなく、不要な枝を付け根から抜きます。",
    },
    {
      title: "夏以降は大きく切らない",
      desc: "熊本市は、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。",
    },
  ],
  ngHeading: "トサミズキの剪定で避けたいこと",
  ngs: [
    {
      title: "全体を強く刈り込むことは避けます",
      desc: "熊本市は、トサミズキは自然樹形を生かして枝抜き程度でよいとしています。",
    },
    {
      title: "花の前の冬から早春に大きく切ることは避けます",
      desc: "世田谷区の樹木一覧では、トサミズキの花は3月下旬です。熊本市は、花芽分化後の剪定は翌年の花芽を切り落とすとしています。",
    },
    {
      title: "暖かい地域の時期をそのまま当てはめることは避けます",
      desc: "熊本市の時期は熊本平野部の公共施設の樹木を前提にした目安です。花が終わった時期を確かめてから作業します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなって枝の整理が難しいとき、ほかの庭木とまとめて手入れしたいとき</Hl>は、剪定業者に相談してください。「花の後に枝抜き中心で」と伝えると、自然な樹形を残しやすくなります。
    </p>,
    <p key="2">
      花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、樹種ごとの時期の目安は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、切ってよい枝の種類は<Link href="/imieda/" className={A}>忌み枝とは</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "トサミズキの剪定を業者に相談する",
  ctaText: "大きくなったトサミズキの枝の整理や、花木の手入れは、業者に任せると安心です。",
  faqHeading: "トサミズキの剪定でよくある質問",
  faqs: [
    {
      q: "トサミズキの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインの表では、トサミズキの剪定時期は5〜6月です。世田谷区の樹木一覧では、手入時期を5〜6月中旬、11〜12月としています。",
    },
    {
      q: "トサミズキはどのくらい切ればよいですか？",
      a: "熊本市は、自然樹形を生かして枝抜き程度でよいとしています。",
    },
    {
      q: "トサミズキの花はいつ咲きますか？",
      a: "世田谷区の植栽ガイドブックの樹木一覧では、トサミズキの花は3月下旬、黄緑色で早春に咲くとしています。",
    },
    {
      q: "トサミズキの植え替えはいつがよいですか？",
      a: "世田谷区の樹木一覧では、トサミズキの移植時期は2月中旬〜3月中旬と11〜12月上旬で、移植がしやすく活着がよい樹種（◎）とされています。",
    },
  ],
  related: [
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/imieda/", label: "忌み枝とは", desc: "枝抜きで切る枝の見分け方" },
    { href: "/hagi-sentei/", label: "萩の剪定", desc: "同じ表に載る株立ちの花木" },
  ],
};

export default function TosamizukiSenteiPage() {
  return <KnowArticle data={data} />;
}
