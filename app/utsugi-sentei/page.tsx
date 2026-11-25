import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/utsugi-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ウツギの剪定｜花が終わった6〜7月と、落葉期の12〜2月。花が咲かない原因は切る時期と枝の込み過ぎ｜お庭のミカタ",
  },
  description:
    "ウツギの剪定時期と、花が咲かないときの見直し方を、熊本市の樹木管理ガイドライン、世田谷区の植栽ガイドブック、大和市の園芸相談の事例をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ウツギの剪定",
    description:
      "ウツギは5〜6月に花が咲く株立ちの落葉低木です。剪定は花の後と落葉期。花が咲かないときは前年の切る時期と枝の込み具合を見直します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "剪定時期（主要樹種の特徴の表・ウツギ類）", note: "6〜7月、12〜2月。樹形は株立ち。自然に樹形は整うが、個体差が大きく樹形が整わないので列植には適さない" },
  { src: "世田谷区", item: "鑑賞時期", note: "花5〜6月（花は白色、変種あり）" },
  { src: "世田谷区", item: "手入時期", note: "6月下旬〜7月中旬、11月〜3月" },
  { src: "世田谷区", item: "移植時期・性質", note: "2月中旬〜3月、11月〜12月上旬。移植難易は◎（移植がしやすく活着がよい）。株立ちとなる。刈り込みに耐える" },
  { src: "大和市", item: "園芸相談の事例（花が咲かない）", note: "前年の枝切りの時期が悪かったのと、かなり枝が込み過ぎているのが原因と思われる" },
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
      2026年11月25日に、熊本市の公共施設樹木の維持管理ガイドライン（巻末資料「熊本平野部の主要樹種の特徴」）、世田谷区の植栽ガイドブック（掲載樹種特性表）、大和市の園芸相談の事例《庭木》を開き、ウツギに関する記載を当サイトで並べました。熊本市の記載は「ウツギ類」としてまとめたもの、大和市の事例は鉢植えの相談への回答です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "utsugi-sentei",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "ウツギの剪定｜花が終わった6〜7月と、落葉期の12〜2月。花が咲かない原因は切る時期と枝の込み過ぎ",
  breadcrumbLabel: "ウツギの剪定",
  tagChips: ["ウツギ", "花木", "落葉低木", "株立ち", "剪定時期"],
  ldHeadline: "ウツギの剪定｜花が終わった6〜7月と、落葉期の12〜2月。花が咲かない原因は切る時期と枝の込み過ぎ",
  ldDescription:
    "ウツギの剪定時期と、花が咲かないときの見直し方を、熊本市・世田谷区・大和市の公的な資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ウツギの剪定は、<Hl>5〜6月の花が終わった直後（6〜7月）と、葉が落ちた冬（12〜2月）</Hl>の2回が目安です。熊本市のガイドラインはウツギ類の剪定時期を「6〜7月」「12〜2月」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月25日確認）。世田谷区の植栽ガイドブックも、手入時期を6月下旬〜7月中旬と11月〜3月としています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「植栽ガイドブック」掲載樹種特性表（PDF）</a>、同日確認）。
      </p>
      <p>
        花が咲かない相談に対して、大和市の園芸相談は「前年の枝切りの時期が悪かったのと、かなり枝が込み過ぎているのが原因と思われる」と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ウツギは花が終わったらすぐ切り、冬は込み合った枝を株元から間引きます。花が咲かないときは、前年に切った時期を振り返ります。",
  conclusionBody: (
    <>
      <p>
        熊本市と世田谷区の資料は、どちらも「花の後」と「冬」の2つの時期を挙げています。3つの資料の記載を並べると、次のとおりです。
      </p>
      {table}
      <p className="mt-4">
        資料には、夏の終わりから秋に切ると花が減るという直接の記載はありません。ただし、大和市の事例が花の咲かない原因として前年の枝切りの時期を挙げているため、花の後と冬以外の時期に枝先を切り詰めるのは控えるのが無難です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "ウツギの剪定に関する4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "花は5〜6月、剪定はその後",
      desc: "世田谷区は鑑賞時期を花の5〜6月、手入時期の一つを6月下旬〜7月中旬としています。熊本市も6〜7月を挙げています。",
    },
    {
      title: "冬は落葉期の手入れ",
      desc: "熊本市は12〜2月、世田谷区は11〜3月を、もう一つの剪定・手入れの時期としています。",
    },
    {
      title: "株立ちで刈り込みに耐える",
      desc: "世田谷区は、株立ちとなり刈り込みに耐えるとしています。熊本市も樹形を株立ちとしています。",
    },
    {
      title: "植え替えしやすい木",
      desc: "世田谷区の表は移植難易を◎（移植がしやすく活着がよい）とし、移植時期を2月中旬〜3月と11月〜12月上旬としています。",
    },
  ],
  stepsHeading: "ウツギを剪定する4つの手順",
  stepsIntro: <p>熊本市・世田谷区の時期の記載と、大和市の事例にもとづく流れです。</p>,
  steps: [
    {
      title: "花が終わったら作業日を決める",
      desc: "花が散ったら、7月中旬ごろまでに済ませます（熊本市6〜7月・世田谷区6月下旬〜7月中旬）。",
    },
    {
      title: "古い幹・枯れた幹を株元から抜く",
      desc: "株立ちの木なので、込み合った部分は株元から間引くと、株の中に光と風が入ります。大和市の事例は、枝の込み過ぎを花が咲かない原因の一つに挙げています。",
    },
    {
      title: "伸びすぎた枝を整える",
      desc: "刈り込みに耐える木なので、はみ出した枝は花の後に切って大きさをそろえます。",
    },
    {
      title: "冬は込んだ枝の間引きにとどめる",
      desc: "12〜2月（世田谷区は11〜3月）は、枯れ枝や込み合った枝を間引く作業を中心にします。",
    },
  ],
  ngHeading: "ウツギの剪定で避けたいこと",
  ngs: [
    {
      title: "時期を考えずに枝先を切り詰めることは避けます",
      desc: "大和市の事例は、花が咲かない原因として前年の枝切りの時期を挙げています。剪定は花の後と冬に行います。",
    },
    {
      title: "枝を込ませたままにすることは避けます",
      desc: "大和市の事例は、枝の込み過ぎも花が咲かない原因に挙げています。",
    },
    {
      title: "そろった列植の生垣を前提にすることは避けます",
      desc: "熊本市は、ウツギ類は個体差が大きく樹形が整わないので列植には適さないとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなって古い幹の整理が必要なとき、ほかの庭木とまとめて頼みたいとき</Hl>は、剪定業者に相談してください。「花を残したい」と伝え、花の後か冬に作業してもらうと、翌年の花を残しやすくなります。
    </p>,
    <p key="2">
      同じ時期に咲く花木は<Link href="/shimotsuke-sentei/" className={A}>シモツケの剪定</Link>、花芽の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、樹種ごとの剪定時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ウツギの剪定を業者に相談する",
  ctaText: "大きくなったウツギの株の整理や、ほかの庭木とまとめた剪定は、業者に任せると安心です。",
  faqHeading: "ウツギの剪定でよくある質問",
  faqs: [
    {
      q: "ウツギの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインはウツギ類の剪定時期を6〜7月と12〜2月、世田谷区の植栽ガイドブックは手入時期を6月下旬〜7月中旬と11月〜3月としています。",
    },
    {
      q: "ウツギの花が咲きません。",
      a: "大和市の園芸相談は、鉢植えのウツギの花が咲かない相談に、前年の枝切りの時期が悪かったことと枝の込み過ぎが原因と思われると回答しています。",
    },
    {
      q: "鉢植えのウツギを庭に植え替えられますか？",
      a: "世田谷区の表は、ウツギの移植難易を◎（移植がしやすく活着がよい）、移植時期を2月中旬〜3月と11月〜12月上旬としています。大和市の事例は、鉢から抜いて腐葉土を混ぜた植え穴にそのまま植える方法を回答しています。",
    },
    {
      q: "ウツギで生垣は作れますか？",
      a: "世田谷区は刈り込みに耐えるとしていますが、熊本市はウツギ類は個体差が大きく樹形が整わないので列植には適さないとしています。生垣にするなら、樹形がそろいにくい点を前提に考えてください。",
    },
  ],
  related: [
    { href: "/murasakishikibu-sentei/", label: "ムラサキシキブの剪定", desc: "実が終わった後の枝抜き" },
    { href: "/shimotsuke-sentei/", label: "シモツケの剪定", desc: "株立ちの花木" },
    { href: "/yukiyanagi-sentei/", label: "ユキヤナギの剪定", desc: "春の花木" },
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹と落葉樹の違い" },
  ],
};

export default function UtsugiSenteiPage() {
  return <KnowArticle data={data} />;
}
