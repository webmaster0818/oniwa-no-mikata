import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/taisanboku-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "泰山木（タイサンボク）の剪定｜花が終わった6月ごろに。花芽は7〜8月に枝先にできるため、夏以降は切り詰めない｜お庭のミカタ",
  },
  description:
    "泰山木（タイサンボク）の剪定時期と切り方を、熊本市の樹木管理ガイドライン、世田谷区の植栽ガイドブック、芦屋市の街路樹等維持管理基本書をもとに整理しました。花芽分化期・花芽の位置・樹高と、切り詰めるときの位置をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "泰山木（タイサンボク）の剪定",
    description:
      "熊本市の表では、タイサンボクの剪定時期は花後、花芽分化期は7〜8月、花芽の位置は頂芽、開花は5月です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; value: string }[] = [
  { src: "熊本市（花芽分化と剪定の時期）", item: "剪定時期・花芽", value: "剪定時期は花後。花芽分化期は7月〜8月、花芽の位置は頂芽、開花時期は5月" },
  { src: "熊本市（熊本平野部の主要樹種の特徴）", item: "剪定時期・留意点", value: "剪定時期は6月。樹形は広円錐。枝の切り詰めを行う場合は新枝や新芽の上で行う" },
  { src: "世田谷区（樹木一覧）", item: "手入時期・移植", value: "モクレン科・常緑の高木。手入時期は3〜4月・10〜11月。移植時期は4月・6〜7月上旬、移植難易は△（移植困難）で要根巻" },
  { src: "芦屋市（主な高木一覧）", item: "大きさ・管理", value: "モクレン科の常緑広葉樹。樹高25〜30m。剪定の適否は△、移植容易度は△、日当たりは陽" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、熊本市「公共施設樹木の維持管理ガイドライン」（「花芽分化と剪定の時期」の表、巻末資料「熊本平野部の主要樹種の特徴」）、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧、芦屋市「街路樹等維持管理基本書」（参考資料：主な高木一覧）を開き、タイサンボクの行を当サイトで並べました。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "taisanboku-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "泰山木（タイサンボク）の剪定｜花が終わった6月ごろに。花芽は7〜8月に枝先にできるため、夏以降は切り詰めない",
  breadcrumbLabel: "泰山木の剪定",
  tagChips: ["タイサンボク", "泰山木", "剪定時期", "花芽", "モクレン科"],
  ldHeadline: "泰山木（タイサンボク）の剪定｜花が終わった6月ごろに。花芽は7〜8月に枝先にできるため、夏以降は切り詰めない",
  ldDescription:
    "泰山木（タイサンボク）の剪定時期と切り方を、熊本市・世田谷区・芦屋市の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        泰山木（タイサンボク）の剪定は、<Hl>5月の花が終わった直後、6月ごろ</Hl>が目安です。熊本市のガイドラインの「花芽分化と剪定の時期」の表では、タイサンボクの剪定時期は花後、<Hl>花芽分化期は7月〜8月、花芽の位置は頂芽</Hl>、開花時期は5月です（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        同じガイドラインの巻末資料は、剪定時期を6月とし、「枝の切り詰めを行う場合は新枝や新芽の上で行う」としています。花芽は枝先にできるので、7月以降に枝先を切り詰めると、翌年の花が減ります。
      </p>
    </>
  ),
  conclusionTitle: "タイサンボクは花後の6月に剪定し、切り詰めるときは新芽の上で切ります。7月以降は枝先の花芽を残し、枯れ枝の整理にとどめます。",
  conclusionBody: (
    <>
      <p>3つの資料のタイサンボクの記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        世田谷区の樹木一覧は手入時期を3〜4月と10〜11月としています（出典：<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">世田谷区 植栽ガイドブック 樹木一覧（PDF）</a>、同日確認）。この時期には花芽がすでに枝先にあるため、<Hl>3〜4月・10〜11月に作業するときは、枝先を切らずに込み合った枝や枯れ枝を付け根から抜く</Hl>のが、資料を両立させる考え方です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "タイサンボクを剪定する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "花は5〜6月、白色の大輪",
      desc: "熊本市の表では開花時期は5月、世田谷区の樹木一覧の鑑賞時期は花5〜6月で、「花は白色大輪、芳香あり」としています。",
    },
    {
      title: "花芽は7〜8月に枝先にできる",
      desc: "熊本市の表では花芽分化期は7月〜8月、花芽の位置は頂芽です。熊本市は、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。",
    },
    {
      title: "樹高25〜30mになる常緑高木",
      desc: "芦屋市の主な高木一覧では、タイサンボクは常緑広葉樹で樹高25〜30m、剪定の適否は△です。熊本市は樹形を広円錐としています。",
    },
    {
      title: "植え替えが難しい",
      desc: "世田谷区の樹木一覧では移植難易は△（移植困難）で「要根巻」、芦屋市の移植容易度も△です。",
    },
  ],
  stepsHeading: "タイサンボクの剪定4つの手順",
  stepsIntro: <p>熊本市・世田谷区・芦屋市の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "5〜6月の花を見届ける",
      desc: "熊本市の開花時期は5月、世田谷区の鑑賞時期は花5〜6月です。",
    },
    {
      title: "花が終わったら6月に剪定する",
      desc: "熊本市の表は剪定時期を花後、巻末資料は6月としています。伸びすぎた枝や込み合った枝を整理します。",
    },
    {
      title: "切り詰めは新枝や新芽の上で",
      desc: "熊本市は、枝の切り詰めを行う場合は新枝や新芽の上で行うとしています。芽のない位置で切ると、残った枝が枯れ込みやすくなります（当サイトの整理）。",
    },
    {
      title: "7月以降は枝先を残す",
      desc: "花芽分化期は7月〜8月、花芽の位置は頂芽です（熊本市）。夏以降の作業は枯れ枝や傷んだ枝の除去にとどめます。",
    },
  ],
  ngHeading: "タイサンボクの剪定で避けたいこと",
  ngs: [
    {
      title: "夏から冬に枝先を切り詰めることは避けます",
      desc: "熊本市の表では花芽は7月〜8月に頂芽にできます。枝先を切ると翌年の花芽がなくなります。",
    },
    {
      title: "芽のない位置で枝を途中から切ることは避けます",
      desc: "熊本市は、切り詰めを行う場合は新枝や新芽の上で行うとしています。",
    },
    {
      title: "大きくしてから植え替えることは避けます",
      desc: "世田谷区は移植難易△・要根巻、芦屋市は移植容易度△です。樹高25〜30mになる木なので、植える場所を最初に決めます（当サイトの整理）。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>2階を超える高さのタイサンボク、花を残しながら高さを抑えたいタイサンボク</Hl>は、剪定業者に相談してください。「花の後の6月に、新芽の上で切り詰める」と伝えると、時期と切り方の考え方を共有しやすくなります。大きさと剪定の適否は<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>によります（2026年11月27日確認）。
    </p>,
    <p key="2">
      同じモクレン科の木は<Link href="/mokuren-sentei/" className={A}>木蓮の剪定</Link>と<Link href="/kobushi-sentei/" className={A}>コブシの剪定</Link>、高い木の作業の注意は<Link href="/takagi-sentei-kiken/" className={A}>高木の剪定の危険</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "タイサンボクの剪定を業者に相談する",
  ctaText: "高くなったタイサンボクの剪定や、花を残しながら樹形を整える作業は、業者に任せると安心です。",
  faqHeading: "泰山木（タイサンボク）の剪定でよくある質問",
  faqs: [
    {
      q: "タイサンボクの剪定はいつ行えばよいですか？",
      a: "花が終わった後です。熊本市のガイドラインは「花芽分化と剪定の時期」の表で花後、巻末資料で6月としています。",
    },
    {
      q: "タイサンボクの花芽はいつできますか？",
      a: "熊本市の表では花芽分化期は7月〜8月、花芽の位置は頂芽（枝先）です。",
    },
    {
      q: "冬や春先に剪定してもよいですか？",
      a: "世田谷区の樹木一覧は手入時期を3〜4月と10〜11月としていますが、その時期には枝先に花芽があります。枝先を切らず、込み合った枝や枯れ枝の間引きにとどめます（当サイトの整理）。",
    },
    {
      q: "タイサンボクはどのくらいの大きさになりますか？",
      a: "芦屋市の主な高木一覧では、樹高は25〜30mです。",
    },
  ],
  related: [
    { href: "/mokuren-sentei/", label: "木蓮の剪定", desc: "同じモクレン科の花木" },
    { href: "/kobushi-sentei/", label: "コブシの剪定", desc: "同じモクレン科の花木" },
    { href: "/karatane-ogatama-sentei/", label: "カラタネオガタマの剪定", desc: "同じモクレン科の常緑樹" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
  ],
};

export default function TaisanbokuSenteiPage() {
  return <KnowArticle data={data} />;
}
