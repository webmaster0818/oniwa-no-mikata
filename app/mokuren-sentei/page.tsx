import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/mokuren-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const SETAGAYA_7 = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "木蓮（モクレン）の剪定｜花が終わった直後の4〜5月に。花芽ができる5〜6月以降は切らない｜お庭のミカタ",
  },
  description:
    "木蓮（ハクモクレン・シモクレン）の剪定時期を、熊本市の公共施設樹木の維持管理ガイドラインの花芽分化と剪定時期の表と、世田谷区の植栽ガイドブックの樹木一覧をもとに整理しました。花芽分化期5〜6月・花芽の位置は頂芽・剪定は花の終わった直後であることをまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "木蓮（モクレン）の剪定",
    description:
      "熊本市のガイドラインでは、ハクモクレンの剪定時期は4〜5月、花芽分化期は5〜6月、花芽の位置は頂芽です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; tree: string; item: string; note: string }[] = [
  { src: "熊本市", tree: "ハクモクレン", item: "花芽分化と剪定の時期", note: "花芽分化期5〜6月、剪定時期4〜5月、花芽の位置は頂芽、開花時期3月" },
  { src: "熊本市", tree: "ハクモクレン", item: "主要樹種の特徴", note: "剪定時期4〜5月。剪定は花が終った直後がよい" },
  { src: "熊本市", tree: "シモクレン", item: "主要樹種の特徴", note: "剪定時期4〜5月。5月〜6月に花芽がつくられるので、剪定時期は花の終わった直後とし、それ以降は剪定しない" },
  { src: "世田谷区", tree: "ハクモクレン", item: "樹木一覧", note: "モクレン科の落葉高木。花3〜4月。手入時期11〜3月。移植困難（△）。幹は直立で生育よい。葉は大形、花は白色で早春に咲く" },
  { src: "世田谷区", tree: "シモクレン", item: "樹木一覧", note: "モクレン科の落葉低木。花4月。手入時期11〜3月。葉の前に開花し、花は暗紫色" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">樹種</th>
          <th className="border px-2 py-2 text-left">表</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.tree + r.item}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.tree}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（「花芽分化と剪定の時期」の表、「熊本平野部の主要樹種の特徴」の表）と、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（ハクモクレン・シモクレンの行）を開き、当サイトで樹種・項目ごとに整理しました。移植の記号の意味は世田谷区の樹木一覧の凡例によります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "mokuren-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "木蓮（モクレン）の剪定｜花が終わった直後の4〜5月に。花芽ができる5〜6月以降は切らない",
  breadcrumbLabel: "木蓮の剪定",
  tagChips: ["木蓮", "モクレン", "ハクモクレン", "シモクレン", "剪定時期"],
  ldHeadline: "木蓮（モクレン）の剪定｜花が終わった直後の4〜5月に。花芽ができる5〜6月以降は切らない",
  ldDescription:
    "木蓮（ハクモクレン・シモクレン）の剪定時期を、熊本市の樹木管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        木蓮（モクレン）の剪定は、<Hl>花が終わった直後の4〜5月</Hl>に行うのが目安です。熊本市のガイドラインの「花芽分化と剪定の時期」の表では、ハクモクレンの剪定時期は4〜5月、<Hl>花芽分化期は5〜6月、花芽の位置は頂芽</Hl>です（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        同じガイドラインは、紫色の花のシモクレンについても「5月〜6月に花芽がつくられるので、剪定時期は花の終わった直後とし、それ以降は剪定しない」としています。枝先の芽が翌年の花になるため、夏以降に枝先を切ると翌春の花が減ります。
      </p>
    </>
  ),
  conclusionTitle: "木蓮は、春の花が終わったらすぐに剪定し、翌年の花芽ができる5〜6月以降は枝先を切りません。",
  conclusionBody: (
    <>
      <p>2つの資料の記載をまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        世田谷区の樹木一覧は、ハクモクレン・シモクレンの手入時期を11〜3月としています（出典：<a href={SETAGAYA_7} className={A} target="_blank" rel="noopener noreferrer">世田谷区 植栽ガイドブック 樹木一覧（ハクモクレン）（PDF）</a>・<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">同（シモクレン）（PDF）</a>、同日確認）。一方、熊本市は花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。<Hl>冬に作業する場合は、枝先の大きな花芽を残し、枯れ枝や込み合った枝の整理にとどめる</Hl>のが、2つの資料を両立させる考え方です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "木蓮を剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は花の直後（4〜5月）",
      desc: "熊本市の表では、ハクモクレン・シモクレンとも剪定時期は4〜5月です。ハクモクレンは「剪定は花が終った直後がよい」としています。",
    },
    {
      title: "花芽ができるのは5〜6月",
      desc: "熊本市の表では、ハクモクレンの花芽分化期は5〜6月です。シモクレンも5月〜6月に花芽がつくられるとしています。",
    },
    {
      title: "花芽は枝先（頂芽）につく",
      desc: "熊本市の表では、ハクモクレンの花芽の位置は頂芽です。枝先を切り詰めると、その枝の花芽がなくなります。",
    },
    {
      title: "ハクモクレンは移植が難しい",
      desc: "世田谷区の樹木一覧では、ハクモクレンの移植の難易は△（移植困難）です。植える場所は、大きくなってからの樹形も考えて決めます。",
    },
  ],
  stepsHeading: "木蓮の剪定4つの手順",
  stepsIntro: <p>熊本市・世田谷区の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "3〜4月の花を見届ける",
      desc: "熊本市の表ではハクモクレンの開花時期は3月、世田谷区の樹木一覧では花3〜4月（シモクレンは4月）です。",
    },
    {
      title: "花が終わったらすぐに剪定する",
      desc: "熊本市の表の剪定時期は4〜5月です。伸びすぎた枝や込み合った枝を、付け根から間引きます。",
    },
    {
      title: "5〜6月以降は枝先を切らない",
      desc: "熊本市は、シモクレンは5月〜6月に花芽がつくられるので、それ以降は剪定しないとしています。",
    },
    {
      title: "冬は枯れ枝の整理にとどめる",
      desc: "世田谷区は手入時期を11〜3月としていますが、枝先には翌春の花芽がついています。冬は枯れ枝や傷んだ枝の除去にとどめます（当サイトの整理）。",
    },
  ],
  ngHeading: "木蓮の剪定で避けたいこと",
  ngs: [
    {
      title: "夏から冬に枝先を切り詰めることは避けます",
      desc: "熊本市の表では、ハクモクレンの花芽は5〜6月に分化し、枝先（頂芽）につきます。花芽分化後の剪定は翌年の花芽を切り落とすとしています。",
    },
    {
      title: "花の直後の剪定を先延ばしにすることは避けます",
      desc: "熊本市は、シモクレンの剪定時期は花の終わった直後とし、それ以降は剪定しないとしています。",
    },
    {
      title: "大きくなってから植え替えで調整することは避けます",
      desc: "世田谷区の樹木一覧では、ハクモクレンは移植困難（△）とされています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>ハクモクレンが高くなって脚立での作業が必要なとき、花を残しながら樹形を小さくしたいとき</Hl>は、剪定業者に相談してください。「花の直後に、枝先の花芽を残す前提で」と伝えると、時期と切り方の考え方を共有しやすくなります。
    </p>,
    <p key="2">
      花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、同じモクレン科の常緑樹は<Link href="/karatane-ogatama-sentei/" className={A}>カラタネオガタマの剪定</Link>、樹種ごとの時期の目安は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "木蓮の剪定を業者に相談する",
  ctaText: "高くなった木蓮の剪定や、花を残しながら樹形を整える作業は、業者に任せると安心です。",
  faqHeading: "木蓮の剪定でよくある質問",
  faqs: [
    {
      q: "木蓮の剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインでは、ハクモクレン・シモクレンとも剪定時期は4〜5月で、花が終わった直後がよいとしています。",
    },
    {
      q: "木蓮の花芽はいつできますか？",
      a: "熊本市の「花芽分化と剪定の時期」の表では、ハクモクレンの花芽分化期は5〜6月、花芽の位置は頂芽です。",
    },
    {
      q: "冬に木蓮を剪定してもよいですか？",
      a: "世田谷区の樹木一覧は手入時期を11〜3月としていますが、熊本市は花芽分化後に剪定すると翌年の花芽を切り落とすとしています。冬は枝先の花芽を残し、枯れ枝の整理程度にとどめます（当サイトの整理）。",
    },
    {
      q: "ハクモクレンとシモクレンの違いは何ですか？",
      a: "世田谷区の樹木一覧では、ハクモクレンは落葉高木で花は白色、シモクレンは落葉低木で葉の前に暗紫色の花が咲くとしています。",
    },
  ],
  related: [
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/karatane-ogatama-sentei/", label: "カラタネオガタマの剪定", desc: "同じモクレン科の常緑樹" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/tosamizuki-sentei/", label: "トサミズキの剪定", desc: "同じく早春に咲く花木" },
    { href: "/kobushi-sentei/", label: "コブシの剪定", desc: "同じモクレン科の花木" },
    { href: "/taisanboku-sentei/", label: "泰山木（タイサンボク）の剪定", desc: "同じモクレン科の常緑高木" },
    { href: "/sanshuyu-sentei/", label: "サンシュユの剪定", desc: "同じガイドラインの表に載る花木" },
  ],
};

export default function MokurenSenteiPage() {
  return <KnowArticle data={data} />;
}
