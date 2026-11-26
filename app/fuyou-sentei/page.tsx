import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/fuyou-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA_7 = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芙蓉（フヨウ）の剪定｜冬（11〜2月）に枯れ枝を取り除く程度で。花は7〜10月の夏から秋｜お庭のミカタ",
  },
  description:
    "芙蓉（フヨウ）の剪定時期を、熊本市の公共施設樹木の維持管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理しました。冬の剪定時期、花の時期、植え付けの時期、幹に穴をあける虫の注意をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芙蓉（フヨウ）の剪定",
    description:
      "熊本市のガイドラインでは、フヨウの剪定時期は11〜2月で、冬の枯れ枝を取り除く程度で良いとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "熊本平野部の主要樹種の特徴", note: "落葉の中木。樹形は株立ち。剪定時期11〜2月。冬の枯れ枝を取り除く程度で良い" },
  { src: "熊本市", item: "主要樹木の剪定の時期（低木類）", note: "骨格剪定12月〜2月（表の着色）" },
  { src: "世田谷区", item: "樹木一覧", note: "アオイ科の落葉低木。鑑賞時期は花7〜10月。移植時期3月中旬〜4月、移植難易は○（時期や方法に注意が必要）。手入時期11〜3月。日照は○（中間・半日影）。生育よい。花は夏期に咲く" },
  { src: "福岡県", item: "コウモリガ類", note: "木本類の加害植物の例にフヨウを挙げている。食入孔を木くずと虫糞を糸でつづって覆う" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">表・項目</th>
          <th className="border px-2 py-2 text-left">フヨウの記載</th>
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
      2026年11月27日に、熊本市の公共施設樹木の維持管理ガイドライン（「熊本平野部の主要樹種の特徴」の表、「主要樹木の剪定の時期（低木類・タケ）」の表）、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（フヨウの行）、福岡県「【花き花木】病害虫・雑草の発生生態と防除」（コウモリガ類の項）を開き、当サイトで項目ごとに整理しました。記号の意味は世田谷区の樹木一覧の凡例によります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "fuyou-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "芙蓉（フヨウ）の剪定｜冬（11〜2月）に枯れ枝を取り除く程度で。花は7〜10月の夏から秋",
  breadcrumbLabel: "芙蓉の剪定",
  tagChips: ["芙蓉", "フヨウ", "剪定時期", "花木", "アオイ科"],
  ldHeadline: "芙蓉（フヨウ）の剪定｜冬（11〜2月）に枯れ枝を取り除く程度で。花は7〜10月の夏から秋",
  ldDescription:
    "芙蓉（フヨウ）の剪定時期と方法、花と植え付けの時期、幹に穴をあける虫の注意を、熊本市・世田谷区・福岡県の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        芙蓉（フヨウ）の剪定は、<Hl>葉が落ちた冬（11〜2月）に、枯れ枝を取り除く程度</Hl>で足ります。熊本市のガイドラインは、フヨウの剪定時期を11〜2月とし、「冬の枯れ枝を取り除く程度で良い」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        世田谷区の植栽ガイドブックの樹木一覧では、フヨウはアオイ科の落葉低木で、<Hl>花は7〜10月</Hl>、手入時期は11〜3月です（出典：<a href={SETAGAYA_7} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、同日確認）。夏から秋の花が終わり、葉が落ちてから手を入れます。
      </p>
    </>
  ),
  conclusionTitle: "芙蓉は、花が終わって葉が落ちた冬に、枯れた枝を取り除く程度の剪定で十分です。",
  conclusionBody: (
    <>
      <p>3つの資料の記載をまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        剪定の時期は、熊本市が11〜2月（剪定時期の表の骨格剪定は12月〜2月）、世田谷区が手入時期11〜3月で、<Hl>いずれも冬の落葉期</Hl>です。花の時期（7〜10月）に枝を切ると、その枝の花を楽しめなくなります。
      </p>
    </>
  ),
  basicsHeading: "芙蓉を剪定するときの4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は冬（11〜2月）",
      desc: "熊本市の主要樹種の特徴の表では剪定時期は11〜2月、剪定時期の表では骨格剪定は12月〜2月です。世田谷区の手入時期は11〜3月です。",
    },
    {
      title: "枯れ枝を取り除く程度でよい",
      desc: "熊本市は、フヨウは冬の枯れ枝を取り除く程度で良いとしています。",
    },
    {
      title: "花は7〜10月",
      desc: "世田谷区の樹木一覧では、鑑賞時期は花7〜10月で、花は夏期に咲くとしています。",
    },
    {
      title: "株立ちで生育がよい",
      desc: "熊本市は樹形を株立ち、世田谷区は「生育よい」としています。",
    },
  ],
  stepsHeading: "芙蓉の剪定4つの手順",
  stepsIntro: <p>熊本市・世田谷区・福岡県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "7〜10月の花を見届ける",
      desc: "世田谷区の樹木一覧の鑑賞時期です。花の時期は枝を切らずにおきます。",
    },
    {
      title: "葉が落ちた11〜2月に枯れ枝を確認する",
      desc: "熊本市の剪定時期です。冬に枯れた枝を、付け根から取り除きます。",
    },
    {
      title: "株元の木くずを確認する",
      desc: "福岡県の資料は、コウモリガ類の加害植物にフヨウを挙げ、食入孔を木くずと虫糞を糸でつづって覆うとしています。株元や幹に木くずの塊がないかを見ます。",
    },
    {
      title: "植え付け・植え替えは3月中旬〜4月",
      desc: "世田谷区の樹木一覧の移植時期です。移植難易は○（時期や方法に注意が必要）です。",
    },
  ],
  ngHeading: "芙蓉の剪定で避けたいこと",
  ngs: [
    {
      title: "花の時期に枝を切ることは避けます",
      desc: "世田谷区の樹木一覧では花は7〜10月です。剪定は熊本市・世田谷区とも冬の時期としています。",
    },
    {
      title: "冬に必要以上に切り詰めることは避けます",
      desc: "熊本市は、フヨウは冬の枯れ枝を取り除く程度で良いとしています。",
    },
    {
      title: "幹の木くずの塊を見過ごすことは避けます",
      desc: "福岡県の資料では、コウモリガ類は多くの樹木にせん孔加害する害虫で、フヨウも加害植物に含まれています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなり通路にかかる芙蓉、幹に穴や木くずの塊が見つかった芙蓉</Hl>は、剪定業者に相談してください。「冬に枯れ枝の整理を中心に」と伝えると、時期と作業の範囲を共有しやすくなります。コウモリガ類の記載は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県【花き花木】病害虫・雑草の発生生態と防除（PDF）</a>（2026年11月27日確認）によります。
    </p>,
    <p key="2">
      同じアオイ科の花木は<Link href="/mukuge-sentei/" className={A}>ムクゲの剪定</Link>と<Link href="/hibiscus-sentei/" className={A}>ハイビスカスの剪定</Link>、幹に穴をあける虫は<Link href="/niwaki-kikuzu-ana/" className={A}>庭木の幹に穴と木くず</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "芙蓉の剪定を業者に相談する",
  ctaText: "大きくなった芙蓉の剪定や、幹に穴があいた株の手入れは、業者に任せると安心です。",
  faqHeading: "芙蓉の剪定でよくある質問",
  faqs: [
    {
      q: "芙蓉の剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインでは、フヨウの剪定時期は11〜2月です。世田谷区の植栽ガイドブックでは手入時期は11〜3月です。",
    },
    {
      q: "芙蓉はどのくらい切ればよいですか？",
      a: "熊本市は、冬の枯れ枝を取り除く程度で良いとしています。",
    },
    {
      q: "芙蓉の花はいつ咲きますか？",
      a: "世田谷区の樹木一覧では、フヨウの花の鑑賞時期は7〜10月で、花は夏期に咲くとしています。",
    },
    {
      q: "芙蓉の植え付けはいつがよいですか？",
      a: "世田谷区の樹木一覧では、移植時期は3月中旬〜4月です。",
    },
  ],
  related: [
    { href: "/mukuge-sentei/", label: "ムクゲの剪定", desc: "同じアオイ科の夏の花木" },
    { href: "/hibiscus-sentei/", label: "ハイビスカスの剪定", desc: "同じアオイ科の花木" },
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/niwaki-kikuzu-ana/", label: "庭木の幹に穴と木くず", desc: "穴をあける虫の見分け方" },
  ],
};

export default function FuyouSenteiPage() {
  return <KnowArticle data={data} />;
}
