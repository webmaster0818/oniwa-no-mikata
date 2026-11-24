import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/nemunoki-sodatekata/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const NODA = "https://www.city.noda.chiba.jp/_res/projects/default_project/_page_/001/033/299/normal.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ねむの木（ネムノキ）の育て方｜高さ10m近くになる日なたの木。剪定は11〜3月に徒長枝を切る程度｜お庭のミカタ",
  },
  description:
    "ネムノキを庭で育てるときの植える場所・剪定時期・移植の注意を、熊本市の樹木管理ガイドライン、芦屋市の街路樹等維持管理基本書、野田市の植物カードの記載をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ねむの木（ネムノキ）の育て方",
    description:
      "ネムノキは高さ10mほどになる落葉高木です。日当たりのよい広い場所に植え、剪定は落葉期に徒長枝を切る程度にとどめます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "野田市", item: "大きさ・性質", note: "林の縁や河原などに生える、高さ10mほどの落葉高木。伐採などで植生がまっさらになった場所にいち早く育つパイオニア植物" },
  { src: "野田市", item: "花・葉", note: "花期は6〜7月ごろ、花は夕方から開きはじめる。葉は夜になると閉じる（睡眠運動）。果実は豆で、1つのさやに10〜18個のタネ" },
  { src: "芦屋市", item: "主な高木一覧", note: "マメ科・落葉・広葉。樹高5〜10m。剪定の適否は○、移植容易度は×、日当たりは陽" },
  { src: "熊本市", item: "主要樹種の特徴の表", note: "落葉高木。樹形は不整形。剪定時期は11〜3月。萌芽力が弱いので、徒長枝を切る程度にし、切り口は接ぎロウを塗って保護する" },
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
      2026年11月25日に、野田市の植物カード（ネムノキ）、芦屋市の街路樹等維持管理基本書（参考資料：主な高木一覧）、熊本市の公共施設樹木の維持管理ガイドライン（巻末資料「熊本平野部の主要樹種の特徴」）を開き、ネムノキに関する記載を当サイトで並べました。芦屋市・熊本市の記載は街路樹・公共施設の樹木向けです。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "nemunoki-sodatekata",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "ねむの木（ネムノキ）の育て方｜高さ10m近くになる日なたの木。剪定は11〜3月に徒長枝を切る程度",
  breadcrumbLabel: "ねむの木の育て方",
  tagChips: ["ネムノキ", "落葉高木", "シンボルツリー", "剪定時期", "植える場所"],
  ldHeadline: "ねむの木（ネムノキ）の育て方｜高さ10m近くになる日なたの木。剪定は11〜3月に徒長枝を切る程度",
  ldDescription:
    "ネムノキを庭で育てるときの植える場所・剪定時期・移植の注意を、熊本市・芦屋市・野田市の公的な資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ねむの木（ネムノキ）は、<Hl>高さ10mほどになる日なた向きの落葉高木</Hl>です。野田市の植物カードは「高さ10mほどの落葉高木」とし、花期を6〜7月ごろとしています（出典：<a href={NODA} className={A} target="_blank" rel="noopener noreferrer">野田市 植物カード「ネムノキ（合歓の木）」（PDF）</a>、2026年11月25日確認）。芦屋市の主な高木一覧も、樹高5〜10m・日当たりは「陽」としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>、同日確認）。
      </p>
      <p>
        剪定について、熊本市のガイドラインは時期を11〜3月とし、<Hl>「萌芽力が弱いので、徒長枝を切る程度にし、切り口は接ぎロウを塗って保護する」</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ネムノキは、大きくなることを前提に日当たりのよい広い場所へ植え、剪定は落葉期に伸びすぎた枝を切る程度にとどめます。",
  conclusionBody: (
    <>
      <p>
        3つの資料の記載を並べると、ネムノキは「大きくなる」「日なたを好む」「強く切るのに向かない」「植え替えに向かない」木であることが分かります。
      </p>
      {table}
      <p className="mt-4">
        芦屋市の表では移植容易度が「×」です。一度植えると移すのが難しい木として、植える場所は最初に慎重に決めるのが無難です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "ねむの木を育てるときの4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "高さ10m近くになる",
      desc: "野田市は高さ10mほど、芦屋市は樹高5〜10mとしています。狭い庭では大きさを抑えにくい木です。",
    },
    {
      title: "日当たりのよい場所に植える",
      desc: "芦屋市は日当たりを「陽」としています。野田市は、伐採跡などにいち早く育つパイオニア植物の性質も持つとしています。",
    },
    {
      title: "剪定は落葉期に軽く",
      desc: "熊本市は剪定時期を11〜3月とし、萌芽力が弱いので徒長枝を切る程度にするとしています。",
    },
    {
      title: "花は6〜7月の夕方から",
      desc: "野田市は、花期を6〜7月ごろとし、花は夕方から開きはじめる、葉は夜になると閉じるとしています。",
    },
  ],
  stepsHeading: "ねむの木を植えて育てる4つの手順",
  stepsIntro: <p>3つの資料の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "大きくなったときの広さを確かめる",
      desc: "高さ10mほどになることを前提に、建物・電線・隣地との距離を確かめます。芦屋市は住宅に隣接する場合、隣地境界から植栽高木の幹芯まで1.5m以上の間隔をとるようにするとしています（街路樹の基準）。",
    },
    {
      title: "日当たりのよい場所を選ぶ",
      desc: "芦屋市の表は日当たりを「陽」としています。建物の陰になる場所は避けます。",
    },
    {
      title: "冬に伸びすぎた枝だけを切る",
      desc: "熊本市の剪定時期は11〜3月です。萌芽力が弱いため、徒長枝を切る程度にとどめます。",
    },
    {
      title: "太めの切り口は保護する",
      desc: "熊本市は、切り口は接ぎロウを塗って保護するとしています。切り口の処置は癒合剤のページも参考にしてください。",
    },
  ],
  ngHeading: "ねむの木を育てるときに避けたいこと",
  ngs: [
    {
      title: "大きさを抑えるために強く切ることは避けます",
      desc: "熊本市は、萌芽力が弱いので徒長枝を切る程度にするとしています。強く切って小さく保つ育て方には向きません。",
    },
    {
      title: "育ってから別の場所へ移すことは避けます",
      desc: "芦屋市の表は移植容易度を「×」としています。植える場所は最初に決めます。",
    },
    {
      title: "日陰に植えることは避けます",
      desc: "芦屋市は日当たりを「陽」としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>大きくなって脚立では届かないとき、電線や屋根に枝がかかるとき</Hl>は、剪定業者に相談してください。「萌芽力が弱い木なので、伸びすぎた枝を切る程度に」と伝えると、強く切られることを避けやすくなります。
    </p>,
    <p key="2">
      高い木の作業の危険は<Link href="/takagi-sentei-kiken/" className={A}>高木の剪定の危険</Link>、切り口の処置は<Link href="/sentei-kirikuchi-yugozai/" className={A}>剪定の切り口と癒合剤</Link>、庭の主木の選び方は<Link href="/symboltree-teire/" className={A}>シンボルツリーの手入れ</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ねむの木の剪定を業者に相談する",
  ctaText: "大きくなったネムノキの枝の整理や、電線・屋根にかかる枝の処理は、業者に任せると安心です。",
  faqHeading: "ねむの木の育て方でよくある質問",
  faqs: [
    {
      q: "ねむの木はどのくらいの大きさになりますか？",
      a: "野田市の植物カードは高さ10mほどの落葉高木、芦屋市の主な高木一覧は樹高5〜10mとしています。",
    },
    {
      q: "剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは剪定時期を11〜3月とし、萌芽力が弱いので徒長枝を切る程度にし、切り口は接ぎロウを塗って保護するとしています。",
    },
    {
      q: "花はいつ咲きますか？",
      a: "野田市の植物カードは、花期を6〜7月ごろとし、花は夕方から開きはじめるとしています。",
    },
    {
      q: "夜に葉が閉じるのは病気ですか？",
      a: "病気ではありません。野田市の植物カードは、ネムノキは夜になると葉を閉じ、周囲の明るさ・暗さに反応して葉を開閉させる睡眠運動だとしています。名前の「ネム」もそこから来ているとしています。",
    },
  ],
  related: [
    { href: "/symboltree-teire/", label: "シンボルツリーの手入れ", desc: "庭の主木の管理" },
    { href: "/sentei-kirikuchi-yugozai/", label: "剪定の切り口と癒合剤", desc: "切り口の保護" },
    { href: "/niwaki-hikuku-suru/", label: "庭木を低くする", desc: "大きくなった木の高さ" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹と落葉樹の違い" },
  ],
};

export default function NemunokiSodatekataPage() {
  return <KnowArticle data={data} />;
}
