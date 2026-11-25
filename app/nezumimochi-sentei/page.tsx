import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/nezumimochi-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ネズミモチの剪定｜枝を整えるのは6〜7月上旬、3〜4月は軽く整える程度に｜お庭のミカタ",
  },
  description:
    "ネズミモチの剪定時期を、熊本市の公共施設樹木の維持管理ガイドライン・芦屋市の街路樹等維持管理基本書・福岡県の花木の病害虫資料をもとに整理しました。6〜7月上旬の骨格剪定、3〜4月の軽剪定、イボタガなどの害虫をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ネズミモチの剪定",
    description:
      "熊本市のガイドラインの剪定時期表では、ネズミモチの骨格剪定は6月〜7月上旬、軽剪定は3〜4月です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "骨格剪定", note: "6月〜7月上旬（主要樹木の剪定の時期の表・常緑樹の欄。色分けを当サイトで読み取り）" },
  { src: "熊本市", item: "軽剪定", note: "3〜4月（同上）" },
  { src: "熊本市", item: "基本樹形", note: "卵・球・楕円形のグループに掲載" },
  { src: "芦屋市", item: "基本特性", note: "モクセイ科の常緑広葉樹。樹高3〜4m" },
  { src: "芦屋市", item: "管理のポイント", note: "剪定の適否は○。日当たりは「陰」" },
  { src: "福岡県", item: "イボタガ", note: "イボタ・モクセイ・ネズミモチ・ヒイラギなどモクセイ科の葉を食害する。幼虫は黄緑色の大型イモムシで4〜5月に見られる。防除法は幼虫の捕殺" },
  { src: "福岡県", item: "オリーブアナアキゾウムシ", note: "幼虫がイボタ・ネズミモチ・オリーブの材部を食害し、被害が激しいと枯死する。産卵は地際部の樹皮下に多い" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.item}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（「主要樹木の剪定の時期（針葉樹・常緑樹）」の表と「公共施設の樹木などの基本樹形」）、芦屋市の街路樹等維持管理基本書（参考資料「主な高木一覧」）、福岡県【花き花木】病害虫・雑草の発生生態と防除（イボタガ・オリーブアナアキゾウムシの項）を開き、ネズミモチに関する記載を当サイトで項目ごとに整理しました。熊本市の剪定時期の表は月ごとの色分けで示されており、月の区切りは当サイトが表を読み取ったものです。熊本市の時期は熊本平野部の公共施設の樹木を前提にした目安です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "nezumimochi-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "ネズミモチの剪定｜枝を整えるのは6〜7月上旬、3〜4月は軽く整える程度に",
  breadcrumbLabel: "ネズミモチの剪定",
  tagChips: ["ネズミモチ", "常緑樹", "生垣", "剪定時期", "イボタガ"],
  ldHeadline: "ネズミモチの剪定｜枝を整えるのは6〜7月上旬、3〜4月は軽く整える程度に",
  ldDescription:
    "ネズミモチの剪定時期を、熊本市の樹木管理ガイドライン・芦屋市の街路樹等維持管理基本書・福岡県の病害虫資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ネズミモチの剪定は、<Hl>枝ぶりを整える剪定を6月〜7月上旬に、伸びた分を軽く整える剪定を3〜4月に</Hl>行うのが目安です。熊本市のガイドラインの「主要樹木の剪定の時期（針葉樹・常緑樹）」の表では、ネズミモチの骨格剪定が6月〜7月上旬、軽剪定が3〜4月に示されています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        芦屋市の街路樹等維持管理基本書は、ネズミモチをモクセイ科の常緑広葉樹、樹高3〜4mとし、<Hl>剪定の適否を○</Hl>としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ネズミモチは、初夏（6月〜7月上旬）に枝を整理し、春先（3〜4月）は伸びた枝先を軽くそろえる程度にとどめます。",
  conclusionBody: (
    <>
      <p>3つの資料の記載をまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市は、常緑樹は春の新芽が伸びて成長が休止する5〜6月と、土用芽や徒長枝が伸びて再び成長が休止する9〜10月が剪定に適するとし、秋の強剪定は避けた方がよいとしています。ネズミモチの骨格剪定が6月〜7月上旬に置かれているのは、この考え方に沿ったものと読めます（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "ネズミモチを剪定するときの4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "モクセイ科の常緑樹",
      desc: "芦屋市は、ネズミモチをモクセイ科の常緑広葉樹、樹高3〜4mとしています。",
    },
    {
      title: "骨格剪定は6月〜7月上旬",
      desc: "熊本市の表では、枝を整えて樹形の骨格をつくる骨格剪定の時期が6月〜7月上旬です。",
    },
    {
      title: "3〜4月は軽剪定",
      desc: "熊本市の表では、3〜4月が軽剪定の時期です。熊本市は軽剪定を、樹冠の乱れや大きくなりすぎるのを防止する程度の軽い剪定としています。",
    },
    {
      title: "剪定に向く樹種",
      desc: "芦屋市は、ネズミモチの剪定の適否を○としています。熊本市は、ネズミモチを卵・球・楕円形の基本樹形のグループに入れています。",
    },
  ],
  stepsHeading: "ネズミモチの剪定4つの手順",
  stepsIntro: <p>熊本市・芦屋市・福岡県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "3〜4月に伸びた枝先をそろえる",
      desc: "熊本市の表の軽剪定の時期です。形から飛び出した枝先を軽く切りそろえます。",
    },
    {
      title: "4〜5月は葉を食べる幼虫に気を付ける",
      desc: "福岡県は、イボタガの幼虫は黄緑色の大型イモムシで4〜5月に見られ、モクセイ科の葉を食害するとしています。防除法は幼虫の捕殺です。",
    },
    {
      title: "6月〜7月上旬に枝を整理する",
      desc: "熊本市の表の骨格剪定の時期です。込み合った枝や内側に向かう枝を整理し、卵形・楕円形の樹形に整えます。",
    },
    {
      title: "株元の樹皮も見ておく",
      desc: "福岡県は、オリーブアナアキゾウムシの幼虫がネズミモチの材部を食害し、被害が激しいと枯死するとし、産卵は地際部の樹皮下に多いとしています。剪定のついでに株元を確かめます。",
    },
  ],
  ngHeading: "ネズミモチの剪定で避けたいこと",
  ngs: [
    {
      title: "秋から冬に大きく切り詰めることは避けます",
      desc: "熊本市は、常緑樹は剪定後に寒風を受けると残した葉が枯れることがあるため、秋の強剪定は避けた方がよいとしています。",
    },
    {
      title: "春の葉の食害を放っておくことは避けます",
      desc: "福岡県は、イボタガの幼虫が4〜5月に見られるとし、防除法として幼虫の捕殺を挙げています。",
    },
    {
      title: "株元の木くずや穴を見過ごすことは避けます",
      desc: "福岡県は、オリーブアナアキゾウムシの被害が激しいと枯死するとしています。株元に異変があるときは、早めに業者に相談します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣として長く続いているとき、木が3〜4mを超えて脚立での作業が必要なとき、株元に虫の被害が疑われるとき</Hl>は、剪定業者に相談してください。「枝の整理は初夏に、春は軽く」と伝えると、時期の考え方を共有しやすくなります。
    </p>,
    <p key="2">
      常緑樹の剪定時期の考え方は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、生垣の刈り込みは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込みの基礎知識</Link>、庭木の病害虫の見分け方は<Link href="/niwaki-byogaichu/" className={A}>庭木の病害虫</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ネズミモチの剪定を業者に相談する",
  ctaText: "大きくなったネズミモチの枝の整理や、生垣の刈り込みは、業者に任せると安心です。",
  faqHeading: "ネズミモチの剪定でよくある質問",
  faqs: [
    {
      q: "ネズミモチの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインの剪定時期表では、ネズミモチの骨格剪定は6月〜7月上旬、軽剪定は3〜4月です（月の区切りは当サイトが表の色分けを読み取ったもの）。",
    },
    {
      q: "ネズミモチはどのくらいの高さになりますか？",
      a: "芦屋市の街路樹等維持管理基本書は、ネズミモチの樹高を3〜4mとしています。",
    },
    {
      q: "ネズミモチの葉が虫に食べられています。",
      a: "福岡県の資料は、イボタガの幼虫（黄緑色の大型イモムシ）が4〜5月にネズミモチなどモクセイ科の葉を食害するとし、防除法として幼虫の捕殺を挙げています。",
    },
    {
      q: "ネズミモチの株元に穴があいています。",
      a: "福岡県の資料は、オリーブアナアキゾウムシの幼虫がネズミモチの材部を食害し、被害が激しいと枯死するとしています。早めに業者に相談してください。",
    },
  ],
  related: [
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹の剪定時期の考え方" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込みの基礎知識", desc: "刈り込みの時期と頻度" },
    { href: "/niwaki-byogaichu/", label: "庭木の病害虫", desc: "葉の食害の見分け方" },
    { href: "/ichii-sentei/", label: "イチイの剪定", desc: "同じ表に載る針葉樹" },
  ],
};

export default function NezumimochiSenteiPage() {
  return <KnowArticle data={data} />;
}
