import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/hagi-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "萩（ハギ）の剪定｜冬（11〜3月）に根際まで刈り込み、刈り残しをつくらない｜お庭のミカタ",
  },
  description:
    "萩（ハギ）の剪定を、熊本市の公共施設樹木の維持管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理しました。冬季に根際まで刈り込む理由、花と実の時期、2つの資料で手入れ時期の書き方が異なる点をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "萩（ハギ）の剪定",
    description:
      "熊本市のガイドラインでは、ハギ類の剪定時期は11月〜3月。冬季に根際まで刈り込み、刈り残すと枯れた枝が残り樹勢も弱るとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kumamoto: string; setagaya: string }[] = [
  { item: "分類・樹形", kumamoto: "低木類・株立ち", setagaya: "マメ科の落葉低木" },
  { item: "剪定・手入れの時期", kumamoto: "11月〜3月", setagaya: "手入時期 6〜7月" },
  { item: "剪定の方法", kumamoto: "冬季に根際まで刈り込む。刈り残すと枯れた枝が残り、見苦しいだけでなく樹勢も弱る", setagaya: "記載なし" },
  { item: "鑑賞時期", kumamoto: "記載なし", setagaya: "花8〜9月、実11月" },
  { item: "移植", kumamoto: "記載なし", setagaya: "11〜3月。移植がしやすく活着がよい（◎）" },
  { item: "日照・乾湿・土壌", kumamoto: "記載なし", setagaya: "日照を好む（◎）、耐乾性あり（◎）、砂壌土" },
  { item: "参考事項", kumamoto: "記載なし", setagaya: "シロバナハギ、ミヤギノハギ、ケハギ" },
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
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（「熊本平野部の主要樹種の特徴」の表のハギ類の行）と、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（ハギの行）を開き、当サイトで項目ごとに照合しました。◎などの記号の意味は世田谷区の樹木一覧の凡例によります。「記載なし」はその資料に書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "hagi-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "萩（ハギ）の剪定｜冬（11〜3月）に根際まで刈り込み、刈り残しをつくらない",
  breadcrumbLabel: "萩の剪定",
  tagChips: ["萩", "ハギ", "落葉低木", "剪定時期", "株立ち"],
  ldHeadline: "萩（ハギ）の剪定｜冬（11〜3月）に根際まで刈り込み、刈り残しをつくらない",
  ldDescription:
    "萩（ハギ）の剪定時期と刈り込み方を、熊本市の樹木管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        萩（ハギ）の剪定は、<Hl>落葉している11月〜3月に、根際まで刈り込む</Hl>のが目安です。熊本市のガイドラインの「熊本平野部の主要樹種の特徴」の表は、ハギ類の剪定時期を11月〜3月とし、「冬季に根際まで刈り込む、刈り残すと枯れた枝が残り見苦しいだけでなく樹勢も弱る」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        世田谷区の植栽ガイドブックの樹木一覧では、ハギはマメ科の落葉低木で、<Hl>花は8〜9月、実は11月</Hl>です（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、同日確認）。秋の花が終わり、葉が落ちてから刈り込む流れになります。
      </p>
    </>
  ),
  conclusionTitle: "萩は、葉が落ちた冬に地際まで刈り込み、春に出る新しい枝で花を咲かせます。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を当サイトで項目ごとに並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        剪定・手入れの時期は、熊本市が11月〜3月、世田谷区が6〜7月と、2つの資料で書き方が異なります。世田谷区の樹木一覧は手入れの内容までは書いていません。<Hl>根際まで刈り込む方法と時期を具体的に示しているのは熊本市の記載</Hl>のため、当サイトでは冬の刈り込みを基本として整理しています。
      </p>
    </>
  ),
  basicsHeading: "萩を剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "株立ちの落葉低木",
      desc: "熊本市はハギ類を低木類の株立ちに、世田谷区はハギをマメ科の落葉低木に分類しています。",
    },
    {
      title: "剪定は11月〜3月",
      desc: "熊本市の表では、ハギ類の剪定時期は11月〜3月です。",
    },
    {
      title: "根際まで刈り込む",
      desc: "熊本市は、冬季に根際まで刈り込むとしています。刈り残すと枯れた枝が残り、見苦しいだけでなく樹勢も弱るとしています。",
    },
    {
      title: "花は8〜9月",
      desc: "世田谷区の樹木一覧では、ハギの鑑賞時期は花8〜9月、実11月です。",
    },
  ],
  stepsHeading: "萩の剪定4つの手順",
  stepsIntro: <p>熊本市・世田谷区の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "花（8〜9月）と実（11月）の時期は残す",
      desc: "世田谷区の樹木一覧の鑑賞時期です。花や実を楽しむ時期は、刈り込みを控えます。",
    },
    {
      title: "葉が落ちたら刈り込みの準備をする",
      desc: "熊本市の表の剪定時期は11月〜3月です。株元の様子が見えやすくなってから作業します。",
    },
    {
      title: "根際まで刈り込む",
      desc: "熊本市は、冬季に根際まで刈り込むとしています。株全体の枝を地際で切りそろえます。",
    },
    {
      title: "刈り残しや枯れ枝を残さない",
      desc: "熊本市は、刈り残すと枯れた枝が残り、見苦しいだけでなく樹勢も弱るとしています。切った枝は片付けます。",
    },
  ],
  ngHeading: "萩の剪定で避けたいこと",
  ngs: [
    {
      title: "冬に枝を中途半端に残すことは避けます",
      desc: "熊本市は、刈り残すと枯れた枝が残り、見苦しいだけでなく樹勢も弱るとしています。",
    },
    {
      title: "花の時期（8〜9月）の前後に大きく刈ることは避けます",
      desc: "世田谷区の樹木一覧では、ハギの花は8〜9月です。熊本市のガイドラインは、花木の剪定は花芽分化の後に行うと翌年の花芽を切り落とすため留意が必要としています。",
    },
    {
      title: "日陰に植えたまま花が少ないと悩み続けることは避けます",
      desc: "世田谷区の樹木一覧では、ハギは日照を好む（◎）樹種です。花つきが悪い場合は、日当たりも確かめます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなって刈り込みや片付けの量が多いとき、ほかの庭木とまとめて冬の手入れを頼みたいとき</Hl>は、剪定業者に相談してください。「萩は冬に根際まで刈り込みたい」と伝えると、作業の内容を共有しやすくなります。
    </p>,
    <p key="2">
      花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、樹種ごとの時期の目安は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、切った枝の出し方は<Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "萩の剪定を業者に相談する",
  ctaText: "大きくなった萩の刈り込みや、冬の庭木の手入れは、業者に任せると安心です。",
  faqHeading: "萩の剪定でよくある質問",
  faqs: [
    {
      q: "萩の剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインの表では、ハギ類の剪定時期は11月〜3月です。冬季に根際まで刈り込むとしています。",
    },
    {
      q: "萩は根元まで切ってしまってよいのですか？",
      a: "熊本市は、ハギ類は冬季に根際まで刈り込むとし、刈り残すと枯れた枝が残り、見苦しいだけでなく樹勢も弱るとしています。",
    },
    {
      q: "萩の花はいつ咲きますか？",
      a: "世田谷区の植栽ガイドブックの樹木一覧では、ハギの鑑賞時期は花8〜9月、実11月です。",
    },
    {
      q: "萩の植え替えはいつがよいですか？",
      a: "世田谷区の樹木一覧では、ハギの移植時期は11〜3月で、移植がしやすく活着がよい樹種（◎）とされています。",
    },
  ],
  related: [
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/shimotsuke-sentei/", label: "シモツケの剪定", desc: "同じ低木類の花木" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "刈り込んだ枝の出し方" },
  ],
};

export default function HagiSenteiPage() {
  return <KnowArticle data={data} />;
}
