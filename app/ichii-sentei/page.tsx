import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/ichii-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const RINYA = "https://www.rinya.maff.go.jp/hokkaido/komagatake_fc/guide/06_itii.html";

export const metadata: Metadata = {
  title: {
    absolute: "イチイ（オンコ）の剪定｜骨格を整えるのは6〜7月上旬、10月は軽く整える程度に｜お庭のミカタ",
  },
  description:
    "イチイ（オンコ・アララギ）の剪定時期を、熊本市の公共施設樹木の維持管理ガイドラインの剪定時期表と、北海道森林管理局の樹木図鑑をもとに整理しました。6〜7月上旬の骨格剪定、10月の軽剪定、赤い実の種の毒についてまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "イチイ（オンコ）の剪定",
    description:
      "熊本市のガイドラインの剪定時期表では、イチイの骨格剪定は6月〜7月上旬、軽剪定は10月です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "分類", note: "針葉樹（主要樹木の剪定の時期の表で、針葉樹の欄の最初に掲載）" },
  { src: "熊本市", item: "骨格剪定", note: "6月〜7月上旬（表の色分けを当サイトで読み取り）" },
  { src: "熊本市", item: "軽剪定", note: "10月（同上）" },
  { src: "熊本市", item: "常緑樹の剪定の考え方", note: "春の新芽が伸びて成長が休止する5〜6月と、土用芽や徒長枝が伸びて再び成長が休止する9〜10月が剪定に適する。秋の強剪定は避けた方がよい" },
  { src: "北海道森林管理局", item: "分類・別名", note: "イチイ科イチイ属の常緑高木。オンコ、アララギとも呼ぶ" },
  { src: "北海道森林管理局", item: "葉・幹", note: "葉は短い線のような形で扁平、先がとがるが痛くない。幹の皮は赤褐色で浅く縦に裂ける" },
  { src: "北海道森林管理局", item: "果実", note: "赤い実は食べられるが、中の種には毒がある" },
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
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（「主要樹木の剪定の時期（針葉樹・常緑樹）」の表と「落葉樹と常緑樹の剪定時期と内容」）と、北海道森林管理局 駒ヶ岳・大沼森林ふれあい推進センターの樹木図鑑（イチイの項）を開き、当サイトで項目ごとに整理しました。熊本市の剪定時期の表は月ごとの色分けで示されており、月の区切りは当サイトが表を読み取ったものです。時期は熊本平野部の公共施設の樹木を前提にした目安で、寒い地域では芽が動く時期がずれます。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "ichii-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "イチイ（オンコ）の剪定｜骨格を整えるのは6〜7月上旬、10月は軽く整える程度に",
  breadcrumbLabel: "イチイの剪定",
  tagChips: ["イチイ", "オンコ", "針葉樹", "剪定時期", "生垣"],
  ldHeadline: "イチイ（オンコ）の剪定｜骨格を整えるのは6〜7月上旬、10月は軽く整える程度に",
  ldDescription:
    "イチイの剪定時期を、熊本市の樹木管理ガイドラインの剪定時期表と北海道森林管理局の樹木図鑑をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        イチイの剪定は、<Hl>枝ぶりを整える剪定を6月〜7月上旬に、伸びた分を軽く整える剪定を10月に</Hl>行うのが目安です。熊本市のガイドラインの「主要樹木の剪定の時期（針葉樹・常緑樹）」の表では、イチイの骨格剪定が6月〜7月上旬、軽剪定が10月に示されています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        イチイは北海道や東北では「オンコ」とも呼ばれる常緑高木です。北海道森林管理局の樹木図鑑は、<Hl>赤い実は食べられるが、中の種には毒がある</Hl>としています（出典：<a href={RINYA} className={A} target="_blank" rel="noopener noreferrer">北海道森林管理局 樹木図鑑「イチイ（オンコ、アララギ）」</a>、同日確認）。剪定の際に落ちた実は、小さな子どもやペットが口にしないよう片付けてください。
      </p>
    </>
  ),
  conclusionTitle: "イチイは、初夏（6月〜7月上旬）に枝の骨格を整え、秋（10月）は伸びた枝先を軽くそろえる程度にとどめます。",
  conclusionBody: (
    <>
      <p>2つの資料の記載をまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市は、常緑樹は剪定後に寒風を受けると残した葉が枯れることがあるため、秋の強剪定は避けた方がよいとしています。イチイの10月が「軽剪定」とされているのも、この考え方に沿ったものと読めます（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "イチイを剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "常緑の針葉樹",
      desc: "北海道森林管理局は、イチイをイチイ科イチイ属の常緑高木としています。熊本市の剪定時期表でも針葉樹の欄に載っています。",
    },
    {
      title: "骨格剪定は6月〜7月上旬",
      desc: "熊本市の表では、枝を整えて樹形の骨格をつくる骨格剪定の時期が6月〜7月上旬です。",
    },
    {
      title: "10月は軽剪定",
      desc: "熊本市の表では、10月が軽剪定の時期です。熊本市は軽剪定を、樹冠の乱れや大きくなりすぎるのを防止する程度の軽い剪定としています。",
    },
    {
      title: "種には毒がある",
      desc: "北海道森林管理局は、赤い実は食べられるが中の種には毒があるとしています。",
    },
  ],
  stepsHeading: "イチイの剪定4つの手順",
  stepsIntro: <p>熊本市・北海道森林管理局の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "6月〜7月上旬に骨格を整える",
      desc: "熊本市の表の骨格剪定の時期です。込み合った枝や、全体の形から大きくはみ出した枝を整理します。",
    },
    {
      title: "10月に伸びた枝先をそろえる",
      desc: "熊本市の表の軽剪定の時期です。夏以降に伸びた枝先を軽く切りそろえる程度にとどめます。",
    },
    {
      title: "秋に強く切り込まない",
      desc: "熊本市は、常緑樹は剪定後に寒風を受けると残した葉が枯れることがあるため、秋の強剪定は避けた方がよいとしています。",
    },
    {
      title: "落ちた実を片付ける",
      desc: "北海道森林管理局は、赤い実の中の種には毒があるとしています。実がついている時期に作業したときは、落ちた実を集めて処分します。",
    },
  ],
  ngHeading: "イチイの剪定で避けたいこと",
  ngs: [
    {
      title: "秋から冬に大きく切り詰めることは避けます",
      desc: "熊本市は、常緑樹は剪定後に寒風を受けると残した葉が枯れることがあるため、秋の強剪定は避けた方がよいとしています。",
    },
    {
      title: "子どもやペットが種を口にする状態は避けます",
      desc: "北海道森林管理局は、イチイの実の中の種には毒があるとしています。",
    },
    {
      title: "寒い地域で暖かい地域の暦をそのまま当てはめることは避けます",
      desc: "熊本市の時期は熊本平野部の公共施設の樹木を前提にした目安です。熊本市は、常緑樹の剪定は春の新芽が伸びて成長が休止する時期が適するとしており、芽の動きが遅い地域では、その木の新芽が伸び終わったのを確かめてから作業します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>背が高くなって脚立での作業が必要なとき、仕立物や生垣の形を保ちたいとき</Hl>は、剪定業者に相談してください。「骨格を整えるのは初夏に、秋は軽くそろえる程度で」と伝えると、時期の考え方を共有しやすくなります。
    </p>,
    <p key="2">
      常緑樹と落葉樹の剪定時期の違いは<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、針葉樹の手入れは<Link href="/conifer-teire/" className={A}>コニファーの剪定・手入れ</Link>、生垣の刈り込みは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込みの基礎知識</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "イチイの剪定を業者に相談する",
  ctaText: "高くなったイチイの剪定や、生垣・仕立物の形を整える作業は、業者に任せると安心です。",
  faqHeading: "イチイの剪定でよくある質問",
  faqs: [
    {
      q: "イチイの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインの剪定時期表では、イチイの骨格剪定は6月〜7月上旬、軽剪定は10月です（月の区切りは当サイトが表の色分けを読み取ったもの）。",
    },
    {
      q: "オンコとイチイは同じ木ですか？",
      a: "北海道森林管理局の樹木図鑑は、イチイの別名としてオンコ、アララギを挙げています。",
    },
    {
      q: "イチイの赤い実は食べても大丈夫ですか？",
      a: "北海道森林管理局の樹木図鑑は、赤い実は食べられるが、中の種には毒があるとしています。",
    },
    {
      q: "秋にイチイを強く切ってもよいですか？",
      a: "熊本市は、常緑樹は剪定後に寒風を受けると残した葉が枯れることがあるため、秋の強剪定は避けた方がよいとしています。イチイの10月は軽剪定の時期です。",
    },
  ],
  related: [
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹と落葉樹の時期の違い" },
    { href: "/conifer-teire/", label: "コニファーの剪定・手入れ", desc: "針葉樹の手入れ" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込みの基礎知識", desc: "刈り込みの時期と頻度" },
    { href: "/nezumimochi-sentei/", label: "ネズミモチの剪定", desc: "同じ表に載る常緑樹" },
  ],
};

export default function IchiiSenteiPage() {
  return <KnowArticle data={data} />;
}
