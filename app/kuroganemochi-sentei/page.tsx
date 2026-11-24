import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kuroganemochi-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "クロガネモチの剪定｜時期は5〜7月が目安。生長が遅いので毎年切らず、枝透かしで整える｜お庭のミカタ",
  },
  description:
    "クロガネモチの剪定時期と切り方を、熊本市の樹木管理ガイドライン、芦屋市の街路樹等維持管理基本書、世田谷区の植栽ガイドブックの記載を並べて整理しました。生長が遅い木なので、切りすぎないことが基本です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "クロガネモチの剪定",
    description:
      "クロガネモチは生長が遅い常緑樹です。剪定時期の目安と、大枝を切り詰めず枝透かしで整える考え方を、3つの自治体の資料からまとめました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "剪定時期（主要樹種の特徴の表）", note: "5〜7月。沿岸部や市街地にも植栽可" },
  { src: "熊本市", item: "管理方針", note: "生長が遅い。大枝の切り詰めは避け、副主枝から側枝にかけての切返剪定を原則とする。骨格ができた後の剪定は2〜3年ごと" },
  { src: "芦屋市", item: "剪定の時期（クスノキの剪定に準じる）", note: "4月中旬〜7月中旬、または9月中旬〜10月下旬。乱れた樹形を作り直すときは4月中旬〜5月下旬" },
  { src: "芦屋市", item: "次の剪定までの間隔", note: "生長が遅い樹種に分類（ウバメガシ・ヤマモモと同じ）。成長が早い樹木は3年後、遅い樹木は5年後を次期剪定の目安とする計画" },
  { src: "世田谷区", item: "手入時期（掲載樹種特性表）", note: "5月中旬〜6月上旬、10月〜11月上旬。雌雄異株、萌芽力あり、日当たりのよい土地を好む" },
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
      2026年11月25日に、熊本市の公共施設樹木の維持管理ガイドライン（巻末資料「熊本平野部の主要樹種の特徴」と「クロガネモチ」の管理方針）、芦屋市の街路樹等維持管理基本書（常緑樹の剪定・クスノキの剪定）、世田谷区の植栽ガイドブック（掲載樹種特性表）を開き、クロガネモチに関する記載を当サイトで並べました。熊本市・芦屋市の記載は街路樹・公共施設の樹木向けで、時期の幅は資料ごとに異なります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kuroganemochi-sentei",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "クロガネモチの剪定｜時期は5〜7月が目安。生長が遅いので毎年切らず、枝透かしで整える",
  breadcrumbLabel: "クロガネモチの剪定",
  tagChips: ["クロガネモチ", "常緑樹", "シンボルツリー", "剪定時期", "枝透かし"],
  ldHeadline: "クロガネモチの剪定｜時期は5〜7月が目安。生長が遅いので毎年切らず、枝透かしで整える",
  ldDescription:
    "クロガネモチの剪定時期と切り方を、熊本市・芦屋市・世田谷区の公的な資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        クロガネモチの剪定は、<Hl>春から初夏（5〜7月ごろ）を目安に、2〜3年に一度、込み合った枝を間引く程度</Hl>で足ります。熊本市のガイドラインは剪定時期を5〜7月とし、クロガネモチを「成長は遅く」、大枝の切り詰めは避けて切返剪定を原則とする木としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月25日確認）。
      </p>
      <p>
        芦屋市の基本書もクロガネモチを「成長が遅い樹種」に分け、剪定はクスノキに準じて<Hl>4月中旬〜7月中旬、または9月中旬〜10月下旬</Hl>としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "クロガネモチは生長が遅いため、毎年強く切る必要はありません。春〜初夏に、込み合った枝を間引いて風通しを確保します。",
  conclusionBody: (
    <>
      <p>
        3つの自治体の資料を並べると、剪定の時期は「春〜初夏」と「秋」の2つの幅で書かれています。どの資料も、生長が遅いことと、強く切り詰めないことを前提にしています。
      </p>
      {table}
      <p className="mt-4">
        庭のクロガネモチで迷ったときは、3つの資料の時期が重なる5月中旬〜6月を第一の候補にすると、どの資料の記載からも外れにくくなります（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "クロガネモチの剪定に関する4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "生長が遅い常緑高木",
      desc: "熊本市は「成長は遅く」、芦屋市は「成長が遅い樹種」としています。芦屋市の計画では、成長が遅い樹木の次の剪定は5年後を目安にしています。",
    },
    {
      title: "大枝の切り詰めは避ける",
      desc: "熊本市は、樹勢が増した後も大枝の切り詰めは避け、副主枝から側枝にかけての切返剪定を原則とするとしています。",
    },
    {
      title: "枝が密になるとすす病の原因に",
      desc: "熊本市は、枝葉が密生すると風通しが悪くなりスス病を誘発するため、衰弱枝やふところ枝を除いた後に枝透かしを行うとしています。",
    },
    {
      title: "実をつけるのは雌の木",
      desc: "世田谷区の特性表は、クロガネモチを雌雄異株、実は球形で紅色、観賞時期を実の10月としています。",
    },
  ],
  stepsHeading: "クロガネモチを剪定する4つの手順",
  stepsIntro: <p>熊本市・芦屋市の資料の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "前回の剪定から2〜3年たっているか確かめる",
      desc: "熊本市は、骨格となる樹形ができた後の剪定を2年〜3年ごととしています。毎年切る必要はありません。",
    },
    {
      title: "枯れ枝・衰弱枝・ふところ枝を抜く",
      desc: "熊本市は、樹体内の衰弱枝やふところ枝を除去した後に枝透かしを行うとしています。芦屋市も徒長枝・さかさ枝・こみ枝の枝抜きを挙げています。",
    },
    {
      title: "伸びすぎた枝は分かれ目で切り返す",
      desc: "大枝の途中で切り詰めず、副主枝から側枝の分かれ目で切り返します。芦屋市は、葉が全くない不自然な強剪定は行わないとしています。",
    },
    {
      title: "古い木は弱った枝の整理だけにする",
      desc: "熊本市は、生育の緩慢になった老木では懐内の衰弱枝の除去程度にとどめるとしています。",
    },
  ],
  ngHeading: "クロガネモチの剪定で避けたいこと",
  ngs: [
    {
      title: "大枝を途中でぶつ切りにすることは避けます",
      desc: "熊本市は大枝の切り詰めを避けるとし、芦屋市は支障枝でもぶつ切りはしないとしています。生長が遅いため、樹形が戻るまでに時間がかかります。",
    },
    {
      title: "葉がなくなるほど強く切ることは避けます",
      desc: "芦屋市は、葉が全くない不自然な強剪定は行わないとしています。",
    },
    {
      title: "枝を込ませたまま放置することは避けます",
      desc: "熊本市は、枝葉が密生すると風通しが悪くなりスス病を誘発するとしています。黒いすすのような汚れが出たときは、枝透かしとあわせて原因の虫も確かめます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>樹高が高く脚立では届かないとき、太い枝を落とす必要があるとき</Hl>は、剪定業者に相談してください。「枝透かし中心で、大枝は切り詰めない」と伝えると、資料の考え方に沿った剪定を頼みやすくなります。
    </p>,
    <p key="2">
      黒い汚れが目立つときは<Link href="/susubyo/" className={A}>すす病の原因と対策</Link>、同じ常緑樹の剪定は<Link href="/kusunoki-sentei/" className={A}>クスノキの剪定</Link>、樹種ごとの剪定時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "クロガネモチの剪定を業者に相談する",
  ctaText: "高くなったクロガネモチの枝透かしや、太い枝の整理は、業者に任せると安心です。",
  faqHeading: "クロガネモチの剪定でよくある質問",
  faqs: [
    {
      q: "クロガネモチの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは5〜7月、芦屋市の基本書は4月中旬〜7月中旬または9月中旬〜10月下旬、世田谷区の特性表は手入時期を5月中旬〜6月上旬と10月〜11月上旬としています。",
    },
    {
      q: "毎年剪定したほうがよいですか？",
      a: "熊本市は、骨格となる樹形ができた後の剪定を2年〜3年ごととしています。芦屋市は成長が遅い樹種として、次期剪定を5年後に見込む計画にしています。",
    },
    {
      q: "実がならないのはなぜですか？",
      a: "世田谷区の特性表は、クロガネモチを雌雄異株としています。実がつくのは雌の木です。木の性別は、当サイトでは確かめられないため、購入した店や業者に確認してください。",
    },
    {
      q: "葉や枝が黒くなってきました。",
      a: "熊本市は、枝葉が密生すると風通しが悪くなりスス病を誘発するとしています。枝透かしで風通しを良くするとともに、すす病の原因になるカイガラムシなどの虫がいないかも確かめてください。",
    },
  ],
  related: [
    { href: "/kusunoki-sentei/", label: "クスノキの剪定", desc: "芦屋市の常緑樹剪定" },
    { href: "/susubyo/", label: "すす病", desc: "葉や枝が黒くなる" },
    { href: "/symboltree-teire/", label: "シンボルツリーの手入れ", desc: "庭の主木の管理" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹と落葉樹の違い" },
  ],
};

export default function KuroganemochiSenteiPage() {
  return <KnowArticle data={data} />;
}
