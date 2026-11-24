import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/rengyo-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const NARO = "https://www.naro.go.jp/org/tarc/to-noken/DB/DATA/021/021-265.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "レンギョウの剪定｜花が終わったらすぐ（4〜6月）。翌春の花芽は7〜8月にでき始める｜お庭のミカタ",
  },
  description:
    "レンギョウの剪定は花が終わった直後に行います。熊本市の樹木管理ガイドラインの花芽分化期と剪定時期、宮城県園芸試験場の花芽の観察結果をもとに、切る時期と避けたい時期をまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "レンギョウの剪定",
    description:
      "レンギョウは夏に翌春の花芽をつくり始めます。花後すぐに剪定し、夏以降の強い剪定は避けるのが基本です。公的資料の記載を整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "開花時期", note: "3月〜4月" },
  { src: "熊本市", item: "花芽分化期", note: "7月〜8月（花芽の位置は頂部側芽）" },
  { src: "熊本市", item: "剪定時期（花芽分化と剪定の時期の表）", note: "花後と12月" },
  { src: "熊本市", item: "剪定時期（低木の樹種別の表）", note: "4〜6月。樹形は株立ち。樹高はあまり高くならないが、枝が長く下垂するので上幅を広くとる必要がある" },
  { src: "宮城県園芸試験場（東北農業研究）", item: "花芽の観察", note: "8月20日に花弁の分化が認められ、翌年の4月上旬に開花を始めた" },
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
      2026年11月25日に熊本市の公共施設樹木の維持管理ガイドライン（「花芽分化と剪定の時期」の表と低木の樹種別の表）と、農研機構のサイトに掲載されている東北農業研究第21号の論文（宮城県園芸試験場の試験）を開き、レンギョウに関する記載を当サイトで並べました。熊本市の記載は公共施設の樹木向け、宮城県の試験は宮城県内で育てた株の観察結果で、地域や年によって時期はずれます。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "rengyo-sentei",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "レンギョウの剪定｜花が終わったらすぐ（4〜6月）。翌春の花芽は7〜8月にでき始める",
  breadcrumbLabel: "レンギョウの剪定",
  tagChips: ["レンギョウ", "花木", "落葉低木", "剪定時期", "花芽"],
  ldHeadline: "レンギョウの剪定｜花が終わったらすぐ（4〜6月）。翌春の花芽は7〜8月にでき始める",
  ldDescription:
    "レンギョウの剪定時期と、夏以降に強く切ると翌春の花が減る理由を、熊本市のガイドラインと宮城県園芸試験場の試験結果をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        レンギョウの剪定は、<Hl>3〜4月の花が終わったらすぐ、遅くとも6月ごろまでに済ませる</Hl>のが基本です。熊本市のガイドラインは、レンギョウの花芽分化期を7月〜8月、剪定時期を「花後と12月」としています。花木全般については「花芽分化後剪定すると、翌年の花芽を切り落とすため、翌年開花しない」と注意しています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月25日確認）。
      </p>
      <p>
        宮城県園芸試験場の試験でも、レンギョウは<Hl>8月20日には翌春の花の花弁ができ始めていた</Hl>と報告されています（出典：<a href={NARO} className={A} target="_blank" rel="noopener noreferrer">「レンギョウ、ユキヤナギ、コデマリ、リンショウバイの促成技術に関する研究」東北農業研究21（農研機構 掲載PDF）</a>、同日確認）。夏から秋に枝を短く切ると、その花芽ごと落とすことになります。
      </p>
    </>
  ),
  conclusionTitle: "レンギョウは花が終わった直後に切ります。夏以降は花芽ができているので、枝を短く詰める剪定は避けます。",
  conclusionBody: (
    <>
      <p>
        熊本市のガイドラインには、レンギョウの剪定時期が2つの表に載っています。「花芽分化と剪定の時期」の表では「花後と12月」、低木の樹種別の表では「4〜6月」です。2つの資料の記載を並べると、次のとおりです。
      </p>
      {table}
      <p className="mt-4">
        12月の剪定について、ガイドラインに具体的な切り方の記載はありません。花芽はすでにできているため、12月に切るなら、枯れ枝や込み合った枝を間引く程度にとどめると、翌春の花を残しやすくなります（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "レンギョウの剪定に関する4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "花は3〜4月、剪定は花の直後",
      desc: "熊本市のガイドラインは、開花時期を3月〜4月、剪定時期を花後（樹種別の表では4〜6月）としています。",
    },
    {
      title: "翌春の花芽は夏にできる",
      desc: "熊本市は花芽分化期を7月〜8月としています。宮城県園芸試験場の試験では、8月20日に花弁の分化が確かめられています。",
    },
    {
      title: "花芽は枝先側の芽につく",
      desc: "熊本市の表は、レンギョウの花芽の位置を「頂部側芽」としています。枝先を短く切り詰めるほど、花芽を落とす量が増えます。",
    },
    {
      title: "枝が長く垂れる株立ちの木",
      desc: "熊本市は、レンギョウの樹形を株立ちとし、樹高はあまり高くならないが枝が長く下垂するので上幅を広くとる必要がある、としています。",
    },
  ],
  stepsHeading: "レンギョウを剪定する4つの手順",
  stepsIntro: <p>熊本市・宮城県の資料の時期の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "花が散り始めたら作業日を決める",
      desc: "熊本市の樹種別の表では4〜6月です。花芽分化期の7月に入る前に終えるようにします。",
    },
    {
      title: "古い幹・枯れ枝を根元から間引く",
      desc: "株立ちの木なので、込み合った部分は根元から間引くと、株の中に光と風が入ります。",
    },
    {
      title: "垂れて通路にかかる枝を整える",
      desc: "熊本市は、枝が長く下垂するため上幅を広くとる必要があるとしています。植える場所の幅に合わせて、はみ出した枝を切ります。",
    },
    {
      title: "夏以降は枯れ枝の整理だけにする",
      desc: "7月以降は花芽ができ始めているため、枝を短く詰める剪定はしません。12月に行う場合も間引き程度にとどめます。",
    },
  ],
  ngHeading: "レンギョウの剪定で避けたいこと",
  ngs: [
    {
      title: "夏から秋に枝先を切り詰めることは避けます",
      desc: "熊本市は、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しない、と注意しています。",
    },
    {
      title: "全体を丸く刈り込むことは避けます",
      desc: "花芽は枝先側の芽（頂部側芽）につくため、全体を刈り込むと花の数が減りやすくなります。",
    },
    {
      title: "狭い場所に植えたまま枝を詰め続けることは避けます",
      desc: "熊本市は、上幅を広くとる必要がある樹種としています。毎年大きく切り詰めないと収まらない場所なら、植える場所の見直しも検討します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなりすぎて古い幹の整理が必要なとき、ほかの庭木の剪定とまとめて頼みたいとき</Hl>は、剪定業者に相談してください。「花を残したい」と伝え、作業時期を花の直後にしてもらうと、翌春の花を残しやすくなります。
    </p>,
    <p key="2">
      同じ春の花木のユキヤナギは<Link href="/yukiyanagi-sentei/" className={A}>ユキヤナギの剪定</Link>、花芽の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、樹種ごとの剪定時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "レンギョウの剪定を業者に相談する",
  ctaText: "大きくなったレンギョウの株の整理や、ほかの庭木とまとめた剪定は、業者に任せると安心です。",
  faqHeading: "レンギョウの剪定でよくある質問",
  faqs: [
    {
      q: "レンギョウの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは、剪定時期を「花後と12月」（樹種別の表では4〜6月）としています。花が終わった直後に行うのが基本です。",
    },
    {
      q: "秋に剪定したら春に花が咲きませんでした。",
      a: "熊本市はレンギョウの花芽分化期を7月〜8月とし、花芽分化後に剪定すると翌年の花芽を切り落とすと注意しています。宮城県園芸試験場の試験でも8月20日に花弁の分化が確かめられています。秋に切り詰めた枝の花芽が落ちた可能性があります。",
    },
    {
      q: "冬（12月）に剪定してもよいですか？",
      a: "熊本市の表には剪定時期として12月も挙がっています。ただしその時期は花芽ができているため、枝を短く詰めると花が減ります。枯れ枝や込み合った枝を間引く程度にとどめるのが無難です。",
    },
    {
      q: "レンギョウはどのくらいの幅が必要ですか？",
      a: "熊本市は、樹高はあまり高くならないが枝が長く下垂するので上幅を広くとる必要がある、としています。具体的な幅の数値は記載されていません。",
    },
  ],
  related: [
    { href: "/yukiyanagi-sentei/", label: "ユキヤナギの剪定", desc: "同じ春の花木" },
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹と落葉樹の違い" },
    { href: "/shimotsuke-sentei/", label: "シモツケの剪定", desc: "株立ちの花木" },
  ],
};

export default function RengyoSenteiPage() {
  return <KnowArticle data={data} />;
}
