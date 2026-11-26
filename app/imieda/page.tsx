import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/imieda/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_5.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "忌み枝とは｜徒長枝・からみ枝・さかさ枝など剪定で取り除く「不要枝」9種類と別名の一覧｜お庭のミカタ",
  },
  description:
    "剪定で「忌み枝」と呼ばれる枝を、熊本市・芦屋市・世田谷区の資料にある「不要枝」「剪定すべき枝」の説明をもとに整理しました。徒長枝・土用枝・ひこばえ・胴吹き枝・からみ枝・さかさ枝・ふところ枝・平行枝・立枝の意味と別名、切る順番をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "忌み枝とは",
    description:
      "忌み枝は、樹形を乱す枝や生育上不要な枝のことです。熊本市のガイドラインは「不要枝」として、生理面と形態面から9種類を挙げています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { name: string; kind: string; kumamoto: string; alias: string }[] = [
  { name: "徒長枝（とちょうし）", kind: "生理面", kumamoto: "本年生枝・前年生枝の中で、ほかの普通の枝より異常に長く伸びる枝。組織的に軟弱なものが多い", alias: "とび枝（芦屋市）" },
  { name: "土用枝（どようえだ）", kind: "生理面", kumamoto: "夏以降に伸びた枝。徒長枝になりやすい", alias: "—（芦屋市は夏芽・土用芽の枝を徒長枝の類としている）" },
  { name: "ひこばえ", kind: "生理面", kumamoto: "根元または地中の根元に近い根から発生する小枝", alias: "やご（芦屋市）" },
  { name: "胴吹き枝（どうふきえだ）", kind: "生理面", kumamoto: "樹木の衰弱が原因で、幹から発生する小枝", alias: "胴ぶき・幹ぶき（芦屋市・世田谷区）" },
  { name: "からみ枝", kind: "形態面", kumamoto: "1本の枝がほかの主な枝に絡みついたような形になって発生する枝", alias: "交差枝（芦屋市）" },
  { name: "さかさ枝", kind: "形態面", kumamoto: "樹木固有の性質に逆らって、下方や樹冠の内側に伸びる枝", alias: "下り枝（芦屋市）・逆さ枝（世田谷区）" },
  { name: "ふところ枝", kind: "形態面", kumamoto: "主な枝の比較的内側にある弱小な枝", alias: "こみ枝（芦屋市）" },
  { name: "平行枝（へいこうし）", kind: "形態面", kumamoto: "同じ方向に伸びる上下2つの枝", alias: "—" },
  { name: "立枝（たちえだ）", kind: "形態面", kumamoto: "幹に並行して立ち上がって上に伸びる枝", alias: "—" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">枝の名前</th>
          <th className="border px-2 py-2 text-left">分類（熊本市）</th>
          <th className="border px-2 py-2 text-left">熊本市の説明</th>
          <th className="border px-2 py-2 text-left">ほかの資料での呼び方</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.name}>
            <td className="border px-2 py-2">{r.name}</td>
            <td className="border px-2 py-2">{r.kind}</td>
            <td className="border px-2 py-2">{r.kumamoto}</td>
            <td className="border px-2 py-2">{r.alias}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（「2.3.4 剪定の対象となる枝」。表は「街路樹剪定ハンドブック」をもとにし、徒長枝・土用枝は同ガイドラインで追記と記載）、芦屋市の街路樹等維持管理基本書（「おもな剪定すべき枝の名称」）、世田谷区の植栽ガイドブック（「剪定の方法」）を開き、枝の名前ごとに当サイトで対応させました。「忌み枝」という語は3つの資料には出てこないため、各資料の「不要枝」「剪定すべき枝」「不要な枝」を同じものとして扱っています。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "imieda",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "忌み枝とは｜徒長枝・からみ枝・さかさ枝など剪定で取り除く「不要枝」9種類と別名の一覧",
  breadcrumbLabel: "忌み枝とは",
  tagChips: ["忌み枝", "不要枝", "徒長枝", "剪定", "枝抜き"],
  ldHeadline: "忌み枝とは｜徒長枝・からみ枝・さかさ枝など剪定で取り除く「不要枝」9種類と別名の一覧",
  ldDescription:
    "剪定で取り除く忌み枝（不要枝）の種類と別名を、熊本市・芦屋市・世田谷区の資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        忌み枝とは、<Hl>樹形を乱す枝や、木の生育にとって不要な枝</Hl>のことで、剪定で優先して取り除く対象です。熊本市のガイドラインはこれを「不要枝」と呼び、生理面から徒長枝・土用枝・ひこばえ・胴吹き枝、形態面からからみ枝・さかさ枝・ふところ枝・平行枝・立枝の<Hl>9種類</Hl>を挙げています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        同じ枝でも資料によって呼び方が異なります。芦屋市の基本書は、ふところ枝を「こみ枝」、さかさ枝を「下り枝」、徒長枝を「とび枝」、からみ枝を「交差枝」とも呼んでいます（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "剪定では、まず枯れ枝・折れ枝・病気の枝を取り、次に徒長枝やからみ枝などの忌み枝を付け根から抜きます。そのうえで、高く伸びすぎた枝や道路・隣地の妨げになる枝を整理します。",
  conclusionBody: (
    <>
      <p>熊本市の9種類に、芦屋市・世田谷区の資料での呼び方を対応させると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市のガイドラインは、不要枝のほかに、枯れ枝、枯れた場合に危険をきたすおそれのある枝、病気の枝、通風・採光・架線などの障害となる枝、成長の止まった弱小の枝も「剪定すべき枝」としています。芦屋市も、支障枝・弱小枝・枯枝・病虫害枝・危険枝を挙げています。
      </p>
    </>
  ),
  basicsHeading: "忌み枝について押さえておきたい4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "生理面と形態面の2つに分かれる",
      desc: "熊本市は、不要枝を生理面（徒長枝・土用枝・ひこばえ・胴吹き枝）と形態面（からみ枝・さかさ枝・ふところ枝・平行枝・立枝）の2つに分類しています。",
    },
    {
      title: "徒長枝は軟弱で樹形を乱す",
      desc: "芦屋市は、徒長枝は長大ではあるが組織的に軟弱で、将来樹形を乱したり養分を取りすぎたりするため、通常の場合切り取る必要があるとしています。",
    },
    {
      title: "ひこばえ・胴吹き枝は木が弱っている合図のことがある",
      desc: "熊本市は胴吹き枝を樹木の衰弱が原因で幹から発生する小枝とし、芦屋市はひこばえ（やご）について、樹木が衰弱すると多く発生する場合もあるとしています。",
    },
    {
      title: "ふところ枝は風通しを悪くする",
      desc: "芦屋市は、ふところ枝（こみ枝）は樹枝の内部にある弱小の枝で、日当たりや風通しを悪くするほか、生長の見込みがないものが多く、整理を必要とするとしています。",
    },
  ],
  stepsHeading: "忌み枝を整理する4つの手順",
  stepsIntro: <p>世田谷区の植栽ガイドブックの「剪定の方法」の順番にもとづく流れです（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区 植栽ガイドブック（PDF）</a>、2026年11月26日確認）。</p>,
  steps: [
    {
      title: "枯れ枝・折れ枝・病気の枝を取る",
      desc: "世田谷区は、まず最初に除去する枝を枯れ枝・折れ枝・病気の枝とし、特に高木の枯れ枝はいつ折れて落ちてくるか分からず危険なため、早めに取り除くよう案内しています。",
    },
    {
      title: "株元と幹のひこばえ・胴吹き枝を取る",
      desc: "芦屋市は、ひこばえ（やご）を放置すると養分が取られ樹勢が衰弱するため、早く切り取った方がよいとしています。",
    },
    {
      title: "徒長枝・からみ枝・さかさ枝などを抜く",
      desc: "世田谷区は、樹形を乱す枝や生育上不要な枝（徒長枝、平行枝、逆さ枝、からみ枝、ふところ枝、幹ぶき、ひこばえなど）は剪定するとしています。",
    },
    {
      title: "伸びすぎた枝と、道路・隣地の妨げになる枝を確かめる",
      desc: "世田谷区は、高く伸びすぎた枝や、道路や隣地に支障となっている枝の有無を確認し、あれば切り取るよう案内しています。",
    },
  ],
  ngHeading: "忌み枝の整理で避けたいこと",
  ngs: [
    {
      title: "花木の花芽まで一緒に切ることは避けます",
      desc: "世田谷区は、花木では剪定時に花芽を切ってしまうと開花に支障が出ることがあるとし、花が終わった直後を剪定の目安にするよう案内しています。",
    },
    {
      title: "胴吹き枝が急に増えた木を、切るだけで済ませることは避けます",
      desc: "熊本市は胴吹き枝を樹木の衰弱が原因で発生する小枝としています。根元や幹の傷み、土の状態もあわせて確かめます。",
    },
    {
      title: "株の外側だけを刈り込んで、内側のふところ枝を残すことは避けます",
      desc: "芦屋市は、ふところ枝（こみ枝）は日当たりや風通しを悪くするほか、生長の見込みがないものが多く、整理を必要とするとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>高い位置の枝、太い枝、電線や道路に近い枝</Hl>は、剪定業者に相談してください。「忌み枝の整理（枝抜き）を中心に」と伝えると、樹形を大きく変えずに風通しを良くする作業を頼みやすくなります。
    </p>,
    <p key="2">
      剪定の種類（透かし・切り詰め・切り返し）は<Link href="/sentei-towa/" className={A}>剪定とは</Link>、ひこばえと胴吹き枝の詳しい切り方は<Link href="/hikobae-dobukieda/" className={A}>胴吹き枝・ひこばえとは</Link>、季節ごとの時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "忌み枝の整理を業者に相談する",
  ctaText: "込み合った庭木の枝抜きや、高い位置の不要枝の整理は、業者に任せると安心です。",
  faqHeading: "忌み枝でよくある質問",
  faqs: [
    {
      q: "忌み枝とは何ですか？",
      a: "樹形を乱す枝や生育上不要な枝のことです。熊本市のガイドラインは「不要枝」と呼び、徒長枝・土用枝・ひこばえ・胴吹き枝・からみ枝・さかさ枝・ふところ枝・平行枝・立枝の9種類を挙げています。",
    },
    {
      q: "平行枝はどちらを切ればよいですか？",
      a: "熊本市は平行枝を同じ方向に伸びる上下2つの枝としています。どちらを残すかは、本日確認した3つの資料には記載がありません。迷う場合は、剪定を依頼する業者に残す枝を確認してください。",
    },
    {
      q: "さかさ枝と下り枝は同じですか？",
      a: "芦屋市の基本書は、さかさ枝を「下り枝」とも呼び、枝が樹種固有の性質に逆らって逆の方向に伸びた枝で、一般に下向きに生えたものが多いとしています。",
    },
    {
      q: "忌み枝以外に切る枝はありますか？",
      a: "熊本市は、枯れ枝、枯れた場合に危険をきたすおそれのある枝、病気の枝、通風・採光・架線などの障害となる枝、成長の止まった弱小の枝も剪定すべき枝としています。",
    },
  ],
  related: [
    { href: "/sentei-towa/", label: "剪定とは", desc: "透かし・切り詰め・切り返しの違い" },
    { href: "/hikobae-dobukieda/", label: "胴吹き枝・ひこばえとは", desc: "出る理由と切り方" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "季節ごとの考え方" },
    { href: "/shishoboku/", label: "支障木とは", desc: "道路や電線の妨げになる木" },
    { href: "/edaoroshi/", label: "枝下ろしとは", desc: "太い枝を付け根から切る剪定" },
    { href: "/tochoushi-sentei/", label: "徒長枝の剪定", desc: "長く伸びた枝は付け根から" },
  ],
};

export default function ImiedaPage() {
  return <KnowArticle data={data} />;
}
