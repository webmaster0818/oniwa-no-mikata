import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/matebashii-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const SETAGAYA_7 = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";
const SAITAMA2 = "https://www.pref.saitama.lg.jp/documents/4144/gairozyusenntei2.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "マテバシイの剪定｜成長が早く樹高10〜15mになる常緑樹。春か秋に枝抜きで透かし、葉のない強剪定はしない｜お庭のミカタ",
  },
  description:
    "マテバシイの剪定時期と切り方を、熊本市の樹木管理ガイドライン、芦屋市の街路樹等維持管理基本書、世田谷区の植栽ガイドブック、埼玉県の街路樹剪定マニュアルをもとに整理しました。4つの資料の時期の違いも並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "マテバシイの剪定",
    description:
      "芦屋市の基本書では、マテバシイは成長が早い樹種で、クスノキの剪定に準じて4月中旬〜7月中旬または9月中旬〜10月下旬に枝抜き剪定で樹形を整えるとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; time: string; note: string }[] = [
  { src: "芦屋市（クスノキの剪定に準じる）", time: "4月中旬〜7月中旬、または9月中旬〜10月下旬", note: "徒長枝・さかさ枝・こみ枝は枝抜き剪定。葉が全く無い不自然な強剪定は行わない。成長が早い樹種。樹高10〜15m" },
  { src: "熊本市（主要樹種の特徴）", time: "9〜12月", note: "樹勢が強く、耐潮性、耐煙性もある。樹形は楕円" },
  { src: "世田谷区（樹木一覧）", time: "手入時期 3〜4月・10〜11月", note: "幹は直で生育よい。都市環境に強い。移植時期は3月下旬〜5月" },
  { src: "埼玉県（主要街路樹一覧）", time: "記載なし", note: "葉が大きい、木姿が丸くまとまる、寒い時期の剪定注意、臨海地向、枝折れあり" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">剪定・手入れの時期</th>
          <th className="border px-2 py-2 text-left">そのほかの記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.time}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、芦屋市「街路樹等維持管理基本書」（主な樹種の剪定方法 クスノキ・常緑樹の剪定を行う樹木・主な高木一覧）、熊本市「公共施設樹木の維持管理ガイドライン」（巻末資料 熊本平野部の主要樹種の特徴）、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧、埼玉県「街路樹剪定マニュアル」（主要街路樹一覧）を開き、マテバシイの行を当サイトで並べました。いずれも街路樹・公共施設の樹木の資料で、熊本市の表は熊本平野部の樹種として作成されたものです。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "matebashii-sentei",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "マテバシイの剪定｜成長が早く樹高10〜15mになる常緑樹。春か秋に枝抜きで透かし、葉のない強剪定はしない",
  breadcrumbLabel: "マテバシイの剪定",
  tagChips: ["マテバシイ", "常緑樹", "ブナ科", "剪定時期", "枝抜き剪定"],
  ldHeadline: "マテバシイの剪定｜成長が早く樹高10〜15mになる常緑樹。春か秋に枝抜きで透かし、葉のない強剪定はしない",
  ldDescription:
    "マテバシイの剪定時期と切り方を、芦屋市・熊本市・世田谷区・埼玉県の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        マテバシイは<Hl>成長が早く、樹高10〜15mになるブナ科の常緑樹</Hl>です。芦屋市の街路樹等維持管理基本書は、マテバシイを成長が早い樹種とし、剪定は<Hl>クスノキの剪定に準じて、4月中旬〜7月中旬または9月中旬〜10月下旬</Hl>に行うとしています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        切り方は、<Hl>徒長枝・さかさ枝・こみ枝を付け根から抜く枝抜き剪定</Hl>が中心です。同じ基本書は、<Hl>葉が全く無い不自然な強剪定は行わない</Hl>、支障枝でもぶつ切りはしないとしています。
      </p>
    </>
  ),
  conclusionTitle: "マテバシイは、春（4〜5月頃）か秋（9〜10月頃）に、込み合った枝を付け根から抜いて透かします。大きくなりすぎても、葉が残らないほど切り詰めることは避けます。",
  conclusionBody: (
    <>
      <p>4つの資料の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        時期は資料によって幅がありますが、<Hl>春は3〜5月頃、秋は9〜11月頃</Hl>が複数の資料で重なっています（当サイトの整理）。埼玉県の一覧が「寒い時期の剪定注意」としていることから、真冬の強い剪定は避け、熊本市の9〜12月も、寒い地域では秋の早い時期に寄せるのが安全です（<a href={SAITAMA2} className={A} target="_blank" rel="noopener noreferrer">埼玉県「街路樹剪定マニュアル」主要街路樹の管理・剪定方法等（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  basicsHeading: "マテバシイを剪定する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "成長が早く、大きくなる",
      desc: "芦屋市は、マテバシイを成長が早い樹種とし、主な高木一覧で樹高を10〜15mとしています。日当たりは陽です。",
    },
    {
      title: "剪定に耐え、樹勢が強い",
      desc: "芦屋市の一覧では、剪定の適否は○、移植容易度も○です。熊本市は、樹勢が強く、耐潮性・耐煙性もあるとしています。",
    },
    {
      title: "まっすぐな幹で、丸くまとまる",
      desc: "世田谷区は、幹は直で生育がよく、都市環境に強いとしています。埼玉県は、葉が大きく、木姿が丸くまとまるとしています。",
    },
    {
      title: "枝が折れることがある",
      desc: "埼玉県の主要街路樹一覧は、マテバシイの特徴に「枝折れあり」を挙げています。",
    },
  ],
  stepsHeading: "マテバシイの剪定4つの手順",
  stepsIntro: <p>芦屋市の「クスノキの剪定」（マテバシイはこれに準じる）の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "春か秋の時期を選ぶ",
      desc: "芦屋市は4月中旬〜7月中旬または9月中旬〜10月下旬としています。乱れた樹形を作り直すときは、4月中旬〜5月下旬に行うとしています。",
    },
    {
      title: "徒長枝・さかさ枝・こみ枝を抜く",
      desc: "粗密のないように、徒長枝、さかさ枝、こみ枝等は枝抜き剪定をして樹形を整えます（芦屋市）。",
    },
    {
      title: "低い枝は必要な高さまで上げる",
      desc: "芦屋市は、下枝が低い場合は必要な高さを確保できるように剪定するとしています。庭では通路や窓にかかる枝が対象です。",
    },
    {
      title: "切り返し・切り詰めは位置を選んで切る",
      desc: "芦屋市は、切返し剪定・切詰め剪定は適切な切る位置と切り方で行い、支障枝でもぶつ切りはしないとしています。",
    },
  ],
  ngHeading: "マテバシイの剪定で避けたいこと",
  ngs: [
    {
      title: "葉が残らない強剪定は避けます",
      desc: "芦屋市は、葉が全く無い不自然な強剪定は行わないとしています。",
    },
    {
      title: "太い枝の途中でぶつ切りにすることは避けます",
      desc: "芦屋市は、支障枝でもぶつ切りはせず、最適な処置を行うとしています。",
    },
    {
      title: "寒い時期の強い剪定は避けます",
      desc: "埼玉県の主要街路樹一覧は、マテバシイについて「寒い時期の剪定注意」としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      マテバシイは樹高10〜15mになる木です（芦屋市）。<Hl>2階の高さを超えたもの、電線や屋根にかかる枝があるもの、幹が太くなったもの</Hl>は、剪定業者に相談してください。「春（または秋）に、枝抜きで透かす。葉が残らない切り詰めはしない」と伝えると、仕上がりの考え方を共有しやすくなります。時期と樹勢は<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、手入時期と特徴は<a href={SETAGAYA_7} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      マテバシイの剪定の手本になるクスノキは<Link href="/kusunoki-sentei/" className={A}>クスノキの剪定</Link>、同じブナ科の常緑樹は<Link href="/kashi-teire/" className={A}>カシの手入れ</Link>と<Link href="/ubamegashi-sentei/" className={A}>ウバメガシの剪定</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "マテバシイの剪定を業者に相談する",
  ctaText: "大きくなったマテバシイの枝抜きや、高所の剪定は、業者に任せると安心です。",
  faqHeading: "マテバシイの剪定でよくある質問",
  faqs: [
    {
      q: "マテバシイの剪定はいつ行えばよいですか？",
      a: "芦屋市はクスノキに準じて4月中旬〜7月中旬または9月中旬〜10月下旬、熊本市は9〜12月、世田谷区は手入時期を3〜4月と10〜11月としています。",
    },
    {
      q: "どのくらい切ってよいですか？",
      a: "芦屋市は、徒長枝・さかさ枝・こみ枝を枝抜き剪定で整え、葉が全く無い不自然な強剪定は行わないとしています。",
    },
    {
      q: "マテバシイはどのくらいの大きさになりますか？",
      a: "芦屋市の主な高木一覧では、樹高10〜15mです。成長が早い樹種としています。",
    },
    {
      q: "冬に剪定してもよいですか？",
      a: "埼玉県の主要街路樹一覧は「寒い時期の剪定注意」としています。強い剪定は春か秋に行います。",
    },
  ],
  related: [
    { href: "/kusunoki-sentei/", label: "クスノキの剪定", desc: "マテバシイの剪定の手本" },
    { href: "/kashi-teire/", label: "カシの手入れ", desc: "同じブナ科の常緑樹" },
    { href: "/ubamegashi-sentei/", label: "ウバメガシの剪定", desc: "同じブナ科の常緑樹" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
  ],
};

export default function MatebashiiSenteiPage() {
  return <KnowArticle data={data} />;
}
