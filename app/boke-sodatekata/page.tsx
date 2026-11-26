import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/boke-sodatekata/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ボケの育て方｜花は3〜4月、剪定は花後の5〜7月。赤星病を防ぐにはビャクシン類を近くに植えない｜お庭のミカタ",
  },
  description:
    "ボケ（木瓜）の育て方を、熊本市の樹木管理ガイドラインと福岡県の花木の病害虫資料をもとに整理しました。花芽ができる時期と剪定の時期、徒長枝の切り詰め、赤星病とモンクロシャチホコへの備えをまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ボケの育て方",
    description:
      "ボケは3月下旬〜4月下旬に咲く株立ちの低木です。剪定は花後の5〜7月、花芽は8月下旬〜9月上旬にできます。近くにビャクシン類があると赤星病が出やすくなります。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "開花時期", note: "3月下旬〜4月下旬" },
  { src: "熊本市", item: "花芽分化期・花芽の位置", note: "8月下旬〜9月上旬。花芽の位置は側芽" },
  { src: "熊本市", item: "剪定時期", note: "5〜7月" },
  { src: "熊本市", item: "樹形・特記事項", note: "株立ち。徒長枝がよく伸びるので夏頃切り詰めると良い" },
  { src: "福岡県", item: "赤星病（ビャクシンのさび病）", note: "ビャクシン類はナシ・ボケ・カリン・カイドウ・リンゴなどの赤星病の中間寄主。3〜4月の雨天時に胞子を飛散し、ボケなどに感染する。防除法は中間寄主を近くに植えない" },
  { src: "福岡県", item: "モンクロシャチホコ", note: "幼虫がバラ科の葉を食害し、加害樹種にボケを含む。成虫は7〜8月頃に現れ、孵化幼虫が8〜9月に加害する。集合幼虫を枝ごと除去する" },
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
      2026年11月25日に、熊本市の公共施設樹木の維持管理ガイドライン（「花芽分化と剪定の時期」の表と巻末資料「熊本平野部の主要樹種の特徴」）と、福岡県【花き花木】病害虫・雑草の発生生態と防除（ビャクシンのさび病、モンクロシャチホコの項）を開き、ボケに関する記載を当サイトで並べました。熊本市の時期は熊本平野部の公共施設の樹木を前提にした目安で、地域によって前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "boke-sodatekata",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "ボケの育て方｜花は3〜4月、剪定は花後の5〜7月。赤星病を防ぐにはビャクシン類を近くに植えない",
  breadcrumbLabel: "ボケの育て方",
  tagChips: ["ボケ", "花木", "落葉低木", "剪定時期", "赤星病"],
  ldHeadline: "ボケの育て方｜花は3〜4月、剪定は花後の5〜7月。赤星病を防ぐにはビャクシン類を近くに植えない",
  ldDescription:
    "ボケ（木瓜）の育て方を、熊本市の樹木管理ガイドラインと福岡県の花木の病害虫資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ボケ（木瓜）は、<Hl>3月下旬〜4月下旬に花が咲き、剪定は花の後の5〜7月</Hl>が目安の株立ちの低木です。熊本市のガイドラインは、花芽分化期を8月下旬〜9月上旬、剪定時期を5〜7月とし、「徒長枝がよく伸びるので夏頃切り詰めると良い」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月25日確認）。
      </p>
      <p>
        病気で気をつけたいのは<Hl>赤星病</Hl>です。福岡県の資料は、ビャクシン類がナシ・ボケなどの赤星病の中間寄主で、3〜4月の雨天時に胞子を飛ばしてボケなどに感染するとし、防除法として中間寄主を近くに植えないことを挙げています（出典：<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県【花き花木】病害虫・雑草の発生生態と防除（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ボケは花が終わったら夏までに剪定を済ませ、伸びた徒長枝を切り詰めます。9月以降は花芽を落とさないよう強く切らず、カイヅカイブキなどのビャクシン類の近くには植えないようにします。",
  conclusionBody: (
    <>
      <p>
        2つの資料の記載を並べると、次のとおりです。
      </p>
      {table}
      <p className="mt-4">
        花芽ができるのが8月下旬〜9月上旬なので、それ以降に枝先を切ると翌春の花芽を落とすおそれがあります。熊本市が剪定時期を5〜7月としているのは、この花芽の時期より前に切るためと読めます（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "ボケを育てるときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "春に咲く株立ちの低木",
      desc: "熊本市は、ボケを低木類に分類し、樹形を株立ち、開花時期を3月下旬〜4月下旬としています。",
    },
    {
      title: "花芽は夏の終わりにできる",
      desc: "熊本市の表では、花芽分化期が8月下旬〜9月上旬、花芽の位置は側芽です。",
    },
    {
      title: "徒長枝がよく伸びる",
      desc: "熊本市は、徒長枝がよく伸びるので夏頃切り詰めると良いとしています。",
    },
    {
      title: "ビャクシン類の近くは赤星病が出やすい",
      desc: "福岡県は、ビャクシン類をボケなどの赤星病の中間寄主とし、近くに植えないことを防除法に挙げています。",
    },
  ],
  stepsHeading: "ボケの1年の手入れ4つの手順",
  stepsIntro: <p>熊本市の時期の記載と、福岡県の病害虫の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "植える場所を選ぶ",
      desc: "カイヅカイブキなどのビャクシン類が近くにない場所を選びます。福岡県は、中間寄主を近くに植えないことを赤星病の防除法としています。",
    },
    {
      title: "3〜4月の花を楽しみ、雨の多い時期は葉を見る",
      desc: "福岡県は、ビャクシン類から3〜4月の雨天時に胞子が飛ぶとしています。近くにビャクシン類がある場合は、この時期以降の葉の斑点に気をつけます。",
    },
    {
      title: "花後〜7月に剪定し、徒長枝を切り詰める",
      desc: "熊本市の剪定時期は5〜7月です。勢いよく伸びた徒長枝を切り詰め、込み合った枝を株元から整理します。",
    },
    {
      title: "8〜9月は毛虫を見回る",
      desc: "福岡県は、モンクロシャチホコの孵化幼虫が8〜9月にボケなどバラ科の葉を食害するとし、集まっている幼虫を枝ごと除去する方法を挙げています。",
    },
  ],
  ngHeading: "ボケの手入れで避けたいこと",
  ngs: [
    {
      title: "秋から冬に枝先を切り詰めることは避けます",
      desc: "熊本市の表では花芽分化期が8月下旬〜9月上旬です。その後に切り詰めると、翌春の花が減るおそれがあります。",
    },
    {
      title: "ビャクシン類と並べて植えることは避けます",
      desc: "福岡県は、ビャクシン類をボケなどの赤星病の中間寄主としています。",
    },
    {
      title: "集まった毛虫を放っておくことは避けます",
      desc: "福岡県は、モンクロシャチホコの幼虫は集合傾向が強いとし、集合幼虫を枝ごと除去する方法を挙げています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなって古い枝の整理が必要なとき、毛虫が広がっているとき</Hl>は、剪定業者に相談してください。「花を残したいので夏までに剪定したい」と時期を伝えると、翌春の花を残しやすくなります。
    </p>,
    <p key="2">
      花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、ビャクシン類の性質は<Link href="/conifer-teire/" className={A}>コニファーの手入れ</Link>、毛虫への注意は<Link href="/kemushi-chui/" className={A}>毛虫に触れたときの注意と予防</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ボケの剪定を業者に相談する",
  ctaText: "大きくなったボケの株の整理や、ほかの庭木とまとめた剪定は、業者に任せると安心です。",
  faqHeading: "ボケの育て方でよくある質問",
  faqs: [
    {
      q: "ボケの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは、ボケの剪定時期を5〜7月とし、徒長枝がよく伸びるので夏頃切り詰めると良いとしています。",
    },
    {
      q: "ボケの花が咲きません。",
      a: "熊本市の表では、ボケの花芽分化期は8月下旬〜9月上旬です。秋以降に枝先を切っていないか振り返ってください。",
    },
    {
      q: "ボケの赤星病はどこから広がりますか？",
      a: "福岡県の資料は、ビャクシン類がボケなどに発生する赤星病の中間寄主で、3〜4月の雨天時に胞子を飛散するとしています。ビャクシン類ではこの時期にオレンジ色の寒天状のものが膨れて胞子を飛ばします。防除法は中間寄主を近くに植えないことです。",
    },
    {
      q: "ボケにつく毛虫は何ですか？",
      a: "福岡県の資料は、モンクロシャチホコの加害樹種にボケを挙げ、孵化幼虫が8〜9月に加害するとしています。幼虫は集合傾向が強いため、集まった幼虫を枝ごと除去します。",
    },
  ],
  related: [
    { href: "/hanazuo-sentei/", label: "ハナズオウの剪定", desc: "春の花木の剪定時期" },
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/conifer-teire/", label: "コニファーの手入れ", desc: "ビャクシン類と赤星病" },
    { href: "/ume-sentei/", label: "梅の剪定", desc: "春の花木" },
    { href: "/kemushi-chui/", label: "毛虫に触れたときの注意と予防", desc: "夏から秋の毛虫" },
    { href: "/kaido-sentei/", label: "カイドウの剪定", desc: "同じバラ科の花木" },
  ],
};

export default function BokeSodatekataPage() {
  return <KnowArticle data={data} />;
}
