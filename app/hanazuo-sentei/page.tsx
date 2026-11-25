import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/hanazuo-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ハナズオウの剪定｜花芽は7月上旬にでき、剪定は落葉期の10〜2月に枝抜き程度。ほうき状の樹形を生かす｜お庭のミカタ",
  },
  description:
    "ハナズオウ（花蘇芳）の剪定時期と切り方を、熊本市の樹木管理ガイドラインと大和市の園芸相談の事例をもとに整理しました。花芽ができる時期、落葉期の枝抜き、資料による時期の違い、葉を巻く虫への備えをまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ハナズオウの剪定",
    description:
      "ハナズオウは4月上旬〜5月下旬に咲き、花芽は7月上旬にできます。熊本市のガイドラインは剪定時期を10〜2月とし、自然にほうき状に育つので枝抜き程度で良いとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "開花時期", note: "4月上旬〜5月下旬" },
  { src: "熊本市", item: "花芽分化期・花芽の位置", note: "7月上旬。花芽の位置は側芽" },
  { src: "熊本市", item: "剪定時期", note: "10〜2月" },
  { src: "熊本市", item: "樹形・特記事項", note: "ほうき状。自然にほうき状に育つので、枝抜き程度で良い" },
  { src: "大和市", item: "剪定の時期（相談への回答）", note: "庭木の剪定は6月と10月。花の咲くものは、10月の剪定は軽く徒長枝を除くのみ" },
  { src: "大和市", item: "葉を閉じる虫（相談への回答）", note: "葉を閉じるのはハマキムシ。少なければ手でつぶす。多ければ薬剤を散布する" },
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
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（「花芽分化と剪定の時期」の表と巻末資料「熊本平野部の主要樹種の特徴」）と、大和市の園芸相談の事例《庭木》（ハナズオウの項）を開き、ハナズオウに関する記載を当サイトで項目ごとに整理しました。熊本市の時期は熊本平野部の公共施設の樹木を前提にした目安で、地域によって前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "hanazuo-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "ハナズオウの剪定｜花芽は7月上旬にでき、剪定は落葉期の10〜2月に枝抜き程度。ほうき状の樹形を生かす",
  breadcrumbLabel: "ハナズオウの剪定",
  tagChips: ["ハナズオウ", "花木", "落葉樹", "剪定時期", "枝抜き"],
  ldHeadline: "ハナズオウの剪定｜花芽は7月上旬にでき、剪定は落葉期の10〜2月に枝抜き程度。ほうき状の樹形を生かす",
  ldDescription:
    "ハナズオウの剪定時期と切り方を、熊本市の樹木管理ガイドラインと大和市の園芸相談の事例をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ハナズオウ（花蘇芳）の剪定は、<Hl>落葉期の10〜2月に、込み合った枝を抜く程度</Hl>が目安です。熊本市のガイドラインは、花芽分化期を7月上旬、花芽の位置を側芽、剪定時期を10〜2月とし、「自然にほうき状に育つので、枝抜き程度で良い」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        大和市の園芸相談の事例では、ハナズオウの剪定時期の質問に対し、庭木の剪定は6月と10月とし、<Hl>花の咲くものは10月の剪定は軽く徒長枝を除くのみ</Hl>と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ハナズオウは7月上旬に翌春の花芽ができるため、それ以降は枝先を切り詰めず、落葉期に枯れ枝・込み枝・徒長枝を付け根から抜く程度にとどめます。",
  conclusionBody: (
    <>
      <p>2つの資料の記載をまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        剪定の時期は資料によって書き方が異なります。熊本市は10〜2月、大和市は6月と10月（花木は10月は軽く）です。どちらも、花芽ができたあとの秋以降は強く切らない点で共通していると読めます（当サイトの整理）。花芽は側芽につくため、枝先を一律に切り詰めると花の数が減るおそれがあります。
      </p>
    </>
  ),
  basicsHeading: "ハナズオウを剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "春に咲く落葉の中木",
      desc: "熊本市は、ハナズオウを落葉樹の中木に分類し、開花時期を4月上旬〜5月下旬としています。",
    },
    {
      title: "花芽は7月上旬に側芽にできる",
      desc: "熊本市の表では、花芽分化期が7月上旬、花芽の位置は側芽です。",
    },
    {
      title: "自然にほうき状に育つ",
      desc: "熊本市は、樹形をほうき状とし、自然にほうき状に育つので枝抜き程度で良いとしています。",
    },
    {
      title: "秋の剪定は軽くする",
      desc: "大和市の事例では、花の咲くものは10月の剪定は軽く徒長枝を除くのみとしています。",
    },
  ],
  stepsHeading: "ハナズオウの剪定4つの手順",
  stepsIntro: <p>熊本市と大和市の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "葉が落ちてから枝の様子を見る",
      desc: "落葉期は枝の付き方が見やすくなります。熊本市の剪定時期は10〜2月です。",
    },
    {
      title: "枯れ枝と込み合った枝を付け根から抜く",
      desc: "熊本市は、ほうき状の自然な樹形を生かして枝抜き程度で良いとしています。株の内側で交差している枝や弱い枝を付け根から抜きます。",
    },
    {
      title: "勢いよく伸びた徒長枝を除く",
      desc: "大和市の事例は、花の咲くものは10月の剪定は軽く徒長枝を除くのみとしています。",
    },
    {
      title: "初夏は葉を巻く虫を見回る",
      desc: "大和市の事例は、ハナズオウの葉を閉じる虫をハマキムシとし、少なければ手でつぶし、多ければ薬剤を散布するとしています。薬剤は製品ラベルの適用を確認して使います。",
    },
  ],
  ngHeading: "ハナズオウの剪定で避けたいこと",
  ngs: [
    {
      title: "枝先を一律に切り詰めることは避けます",
      desc: "熊本市の表では、花芽は7月上旬に側芽にできます。秋から冬に枝先をそろえて切ると、翌春の花が減るおそれがあります。",
    },
    {
      title: "秋に強く切ることは避けます",
      desc: "大和市の事例は、花の咲くものは10月の剪定は軽く徒長枝を除くのみとしています。",
    },
    {
      title: "ほうき状の樹形を刈り込みで丸く整えることは避けます",
      desc: "熊本市は、自然にほうき状に育つので枝抜き程度で良いとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなって高い位置の枝を抜きたいとき、ほかの庭木とまとめて手入れしたいとき</Hl>は、剪定業者に相談してください。「春の花を残したいので枝抜き中心で」と伝えると、花芽を残しやすくなります。
    </p>,
    <p key="2">
      花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、樹種ごとの時期の目安は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、切ってよい枝の種類は<Link href="/imieda/" className={A}>忌み枝とは</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ハナズオウの剪定を業者に相談する",
  ctaText: "大きくなったハナズオウの枝抜きや、ほかの庭木とまとめた剪定は、業者に任せると安心です。",
  faqHeading: "ハナズオウの剪定でよくある質問",
  faqs: [
    {
      q: "ハナズオウの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは剪定時期を10〜2月としています。大和市の園芸相談の事例は、庭木の剪定は6月と10月とし、花の咲くものは10月の剪定は軽く徒長枝を除くのみとしています。",
    },
    {
      q: "ハナズオウの花芽はいつできますか？",
      a: "熊本市の表では、花芽分化期は7月上旬、花芽の位置は側芽です。開花時期は4月上旬〜5月下旬です。",
    },
    {
      q: "ハナズオウはどのように切ればよいですか？",
      a: "熊本市は、自然にほうき状に育つので枝抜き程度で良いとしています。枯れ枝や込み合った枝を付け根から抜き、枝先の切り詰めは控えます。",
    },
    {
      q: "ハナズオウの葉が巻かれています。",
      a: "大和市の園芸相談の事例では、ハナズオウの葉を閉じる虫をハマキムシとし、少なければ手でつぶし、多ければ薬剤を散布すると回答しています。",
    },
  ],
  related: [
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "季節ごとの考え方" },
    { href: "/imieda/", label: "忌み枝とは", desc: "切ってよい枝の種類" },
    { href: "/boke-sodatekata/", label: "ボケの育て方", desc: "春の花木の剪定時期" },
  ],
};

export default function HanazuoSenteiPage() {
  return <KnowArticle data={data} />;
}
