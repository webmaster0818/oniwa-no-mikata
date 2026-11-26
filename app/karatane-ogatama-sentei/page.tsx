import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/karatane-ogatama-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "カラタネオガタマの剪定｜手入れは花の前の3〜4月上旬か10月、移植は難しいので植え場所は慎重に｜お庭のミカタ",
  },
  description:
    "カラタネオガタマの剪定時期を、世田谷区の植栽ガイドブックの掲載樹種特性表と芦屋市の街路樹等維持管理基本書をもとに整理しました。手入れの時期（3〜4月上旬・10月）、4月の花、移植が難しい点をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "カラタネオガタマの剪定",
    description:
      "世田谷区の掲載樹種特性表では、カラタネオガタマの手入時期は3〜4月上旬と10月です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "世田谷区", item: "樹型", note: "モクレン科の常緑の中高木" },
  { src: "世田谷区", item: "鑑賞時期", note: "花 4月" },
  { src: "世田谷区", item: "手入時期", note: "3〜4月上旬、10月" },
  { src: "世田谷区", item: "移植時期・移植難易", note: "3月下旬〜4月、6〜7月上旬。移植難易は△（移植困難）" },
  { src: "世田谷区", item: "都市適応性・日照・乾湿", note: "いずれも○（適応性中・半日影・中間）。好む土壌は壌土" },
  { src: "世田谷区", item: "参考事項", note: "株立ち、花は半開で黄白色、芳香あり" },
  { src: "芦屋市", item: "基本特性", note: "常緑広葉樹。樹高3m。観賞のポイントに花" },
  { src: "芦屋市", item: "管理のポイント", note: "剪定の適否は○、移植容易度は×、日当たりは中庸" },
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
      2026年11月26日に、世田谷区「建築にともなう緑化のための植栽ガイドブック」の掲載樹種特性表（カラタネオガタマの行と「掲載樹種特性表の見方」）と、芦屋市の街路樹等維持管理基本書（参考資料「主な高木一覧」）を開き、当サイトで項目ごとに整理しました。記号の意味は各資料の凡例によります。世田谷区の表は『グリーンハンドブック』（東京都）を参考に作成されたものです。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "karatane-ogatama-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "カラタネオガタマの剪定｜手入れは花の前の3〜4月上旬か10月、移植は難しいので植え場所は慎重に",
  breadcrumbLabel: "カラタネオガタマの剪定",
  tagChips: ["カラタネオガタマ", "常緑樹", "花木", "剪定時期", "移植"],
  ldHeadline: "カラタネオガタマの剪定｜手入れは花の前の3〜4月上旬か10月、移植は難しいので植え場所は慎重に",
  ldDescription:
    "カラタネオガタマの剪定時期を、世田谷区の植栽ガイドブックの掲載樹種特性表と芦屋市の街路樹等維持管理基本書をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        カラタネオガタマの手入れは、<Hl>3〜4月上旬か10月</Hl>が目安です。世田谷区の植栽ガイドブックの掲載樹種特性表は、カラタネオガタマの手入時期を3〜4月上旬と10月、鑑賞時期を花の4月としています（出典：<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」掲載樹種特性表（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        芦屋市の街路樹等維持管理基本書は、カラタネオガタマの剪定の適否を○とする一方、<Hl>移植容易度を×</Hl>としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>、同日確認）。世田谷区の表でも移植難易は△（移植困難）です。大きくなってから植え替えるのは難しいため、剪定で大きさを保つことが基本になります。
      </p>
    </>
  ),
  conclusionTitle: "カラタネオガタマは、花が咲く4月をはさんで、3〜4月上旬か10月に枝を整えます。移植が難しい木なので、植え替えではなく剪定で大きさを保ちます。",
  conclusionBody: (
    <>
      <p>2つの資料の記載をまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        世田谷区の手入時期のうち3〜4月上旬は花の直前にあたります。花芽のついた枝を切ると、その年の花が減ることになります（当サイトの整理）。花を優先するなら、枝の整理は10月に行い、春は枯れ枝や飛び出した枝を切る程度にとどめます。
      </p>
    </>
  ),
  basicsHeading: "カラタネオガタマを剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "株立ちの常緑樹",
      desc: "世田谷区は、カラタネオガタマをモクレン科の常緑の中高木とし、参考事項に株立ちと書いています。芦屋市は樹高を3mとしています。",
    },
    {
      title: "手入れは3〜4月上旬と10月",
      desc: "世田谷区の掲載樹種特性表の手入時期です。",
    },
    {
      title: "花は4月、黄白色で香りがある",
      desc: "世田谷区は、鑑賞時期を花の4月とし、花は半開で黄白色、芳香ありとしています。",
    },
    {
      title: "移植は難しい",
      desc: "芦屋市は移植容易度を×、世田谷区は移植難易を△（移植困難）としています。",
    },
  ],
  stepsHeading: "カラタネオガタマの剪定4つの手順",
  stepsIntro: <p>世田谷区・芦屋市の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "10月に枝を整理する",
      desc: "世田谷区の手入時期の一つです。込み合った枝や、株立ちの内側に向かう枝を付け根から間引きます。",
    },
    {
      title: "春（3〜4月上旬）は軽く整える",
      desc: "世田谷区の手入時期の一つですが、花の4月の直前です。つぼみのついた枝は残し、枯れ枝や形から飛び出した枝を切る程度にします。",
    },
    {
      title: "大きくなる前に高さを決めておく",
      desc: "芦屋市・世田谷区とも移植が難しい木としています。植え替えで調整しにくいため、望む高さを決めて毎年少しずつ整えます。",
    },
    {
      title: "日当たりと株元の状態を見る",
      desc: "世田谷区は日照を○（半日影）、芦屋市は日当たりを中庸としています。込み合って株の内側が暗くなっていないかを確かめます。",
    },
  ],
  ngHeading: "カラタネオガタマの剪定で避けたいこと",
  ngs: [
    {
      title: "花の直前につぼみのある枝を多く切ることは避けます",
      desc: "世田谷区は鑑賞時期を花の4月としています。3〜4月上旬に作業するときは、つぼみのついた枝を残します。",
    },
    {
      title: "大きくなってから植え替えで解決することは避けます",
      desc: "芦屋市は移植容易度を×、世田谷区は移植難易を△（移植困難）としています。",
    },
    {
      title: "手入時期を外れた真夏や真冬の作業は避けます",
      desc: "世田谷区の手入時期は3〜4月上旬と10月です。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株立ちの幹が増えて込み合っているとき、高さを大きく下げたいとき、植え替えを考えているとき</Hl>は、剪定業者に相談してください。移植が難しい木であることと、「花を残したいので枝の整理は秋に」という希望を伝えると、作業の方針を決めやすくなります。
    </p>,
    <p key="2">
      花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、常緑樹の剪定時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、切ってよい枝の種類は<Link href="/imieda/" className={A}>忌み枝とは</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "カラタネオガタマの剪定を業者に相談する",
  ctaText: "大きくなったカラタネオガタマの枝の整理や高さの調整は、業者に任せると安心です。",
  faqHeading: "カラタネオガタマの剪定でよくある質問",
  faqs: [
    {
      q: "カラタネオガタマの剪定はいつ行えばよいですか？",
      a: "世田谷区の植栽ガイドブックの掲載樹種特性表は、カラタネオガタマの手入時期を3〜4月上旬と10月としています。",
    },
    {
      q: "カラタネオガタマの花はいつ咲きますか？",
      a: "世田谷区の表は、鑑賞時期を花の4月とし、花は半開で黄白色、芳香ありとしています。",
    },
    {
      q: "カラタネオガタマは植え替えできますか？",
      a: "芦屋市の街路樹等維持管理基本書は移植容易度を×、世田谷区の表は移植難易を△（移植困難）としています。世田谷区の移植時期は3月下旬〜4月と6〜7月上旬です。植え替えを考えるときは業者に相談してください。",
    },
    {
      q: "カラタネオガタマはどのくらいの高さになりますか？",
      a: "芦屋市の街路樹等維持管理基本書は、樹高を3mとしています。世田谷区は常緑の中高木としています。",
    },
  ],
  related: [
    { href: "/mokuren-sentei/", label: "木蓮の剪定", desc: "同じモクレン科の花木" },
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹の剪定時期の考え方" },
    { href: "/imieda/", label: "忌み枝とは", desc: "切ってよい枝の種類" },
    { href: "/nezumimochi-sentei/", label: "ネズミモチの剪定", desc: "庭や生垣の常緑樹" },
    { href: "/kobushi-sentei/", label: "コブシの剪定", desc: "同じモクレン科の花木" },
  ],
};

export default function KarataneOgatamaSenteiPage() {
  return <KnowArticle data={data} />;
}
