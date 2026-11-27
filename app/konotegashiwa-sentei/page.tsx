import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/konotegashiwa-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const SETAGAYA_5 = "https://www.city.setagaya.lg.jp/documents/4728/29589_5.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SAITAMA = "https://www.pref.saitama.lg.jp/documents/4144/gairozyusenntei1.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "コノテガシワの剪定｜手入れは6〜7月と11〜12月。円錐形の自然樹形を生かし、枝抜きと軽い切り詰めで整える｜お庭のミカタ",
  },
  description:
    "コノテガシワ（児手柏）の剪定時期と切り方を、世田谷区の植栽ガイドブック樹木一覧、熊本市の樹木管理ガイドライン、埼玉県の街路樹剪定マニュアルをもとに整理しました。手入時期は6〜7月と11〜12月、自然樹形は円錐形です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "コノテガシワの剪定",
    description:
      "世田谷区の樹木一覧では、コノテガシワ（ヒノキ科・常緑の中木）の手入時期は6〜7月と11〜12月です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; value: string; src: string }[] = [
  { item: "科名・樹型", value: "ヒノキ科・常緑の中木", src: "世田谷区" },
  { item: "手入時期", value: "6〜7月、11〜12月", src: "世田谷区" },
  { item: "移植時期・移植難易", value: "2月下旬〜4月上旬・△〜○（移植困難〜時期や方法に注意が必要）", src: "世田谷区" },
  { item: "日照", value: "◎（日照を好む）", src: "世田谷区" },
  { item: "樹形", value: "根元より分岐し、整った円錐形の樹形となる", src: "世田谷区" },
  { item: "基本樹形の分類", value: "円錐形（イヌマキ・カイヅカイブキ・クロマツなどと同じ分類）", src: "熊本市" },
  { item: "冬の剪定", value: "寒さに強い常緑針葉樹の枝抜きや軽い切り詰めも冬期が適期", src: "埼玉県" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.value}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧、熊本市「公共施設樹木の維持管理ガイドライン」（公共施設の樹木などの基本樹形）、埼玉県「街路樹剪定マニュアル」（冬期剪定）を開き、コノテガシワに関する記載を当サイトで並べました。埼玉県の記載は常緑針葉樹全般についてのもので、コノテガシワを名指ししたものではありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "konotegashiwa-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "コノテガシワの剪定｜手入れは6〜7月と11〜12月。円錐形の自然樹形を生かし、枝抜きと軽い切り詰めで整える",
  breadcrumbLabel: "コノテガシワの剪定",
  tagChips: ["コノテガシワ", "児手柏", "剪定時期", "針葉樹", "ヒノキ科"],
  ldHeadline: "コノテガシワの剪定｜手入れは6〜7月と11〜12月。円錐形の自然樹形を生かし、枝抜きと軽い切り詰めで整える",
  ldDescription:
    "コノテガシワの剪定時期と整え方を、世田谷区・熊本市・埼玉県の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        コノテガシワの剪定は、<Hl>6〜7月と11〜12月</Hl>が目安です。世田谷区の植栽ガイドブックの樹木一覧は、コノテガシワをヒノキ科の常緑の中木とし、手入時期を6〜7月と11〜12月、樹形を「根元より分岐し、整った円錐形の樹形となる」としています（出典：<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        自然に円錐形にまとまる木なので、<Hl>形を作り直すより、飛び出した枝と込み合った枝を減らす剪定</Hl>が中心になります。埼玉県の街路樹剪定マニュアルは、寒さに強い常緑針葉樹の枝抜きや軽い切り詰めは冬期が適期としています（出典：<a href={SAITAMA} className={A} target="_blank" rel="noopener noreferrer">埼玉県「街路樹剪定マニュアル」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "コノテガシワは、初夏（6〜7月）と初冬（11〜12月）に、円錐形の輪郭からはみ出た枝を抜く程度に整えます。",
  conclusionBody: (
    <>
      <p>3つの資料のコノテガシワに関する記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市のガイドラインは、常緑樹は春の新芽が伸びて成長が休止する5〜6月と、土用芽や徒長枝が伸びて再び成長が休止する9〜10月が剪定に適するとし、剪定後に寒風を受けると残した葉が枯れることがあるため秋の強剪定は避けた方が良いとしています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、同日確認）。<Hl>11〜12月に手を入れるときは、軽い枝抜きにとどめる</Hl>のが、資料を両立させる考え方です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "コノテガシワを剪定する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "ヒノキ科の常緑の中木",
      desc: "世田谷区の樹木一覧では、コノテガシワはヒノキ科、樹型は常緑・中木です。",
    },
    {
      title: "根元から分かれて円錐形になる",
      desc: "世田谷区は「根元より分岐し、整った円錐形の樹形となる」とし、熊本市の基本樹形の表でも円錐形に分類されています。",
    },
    {
      title: "日当たりを好む",
      desc: "世田谷区の樹木一覧では、日照の欄が◎（日照を好む）です。日陰側の枝は葉が薄くなりやすいため、剪定で風と光を通します（当サイトの整理）。",
    },
    {
      title: "大きくなってからの植え替えは難しい",
      desc: "世田谷区の樹木一覧では、移植時期は2月下旬〜4月上旬、移植難易は△〜○です。",
    },
  ],
  stepsHeading: "コノテガシワの剪定4つの手順",
  stepsIntro: <p>世田谷区・熊本市・埼玉県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "6〜7月か11〜12月に作業する",
      desc: "世田谷区の手入時期です。熊本市は常緑樹の剪定に5〜6月と9〜10月を挙げています。",
    },
    {
      title: "円錐形の輪郭を決める",
      desc: "根元から分かれて円錐形になる木なので、てっぺんから裾へ広がる輪郭を目で決め、そこからはみ出た枝を選びます。",
    },
    {
      title: "はみ出た枝・込み合った枝を付け根から抜く",
      desc: "埼玉県は、常緑針葉樹の枝抜きや軽い切り詰めを冬期の作業として挙げています。内側の枯れた枝もこのときに取り除きます。",
    },
    {
      title: "生垣は刈り込みで面をそろえる",
      desc: "世田谷区は、刈り込みを年1回なら6〜7月、年2回なら5〜6月と9〜10月としています（同区 植栽ガイドブック 維持・管理）。",
    },
  ],
  ngHeading: "コノテガシワの剪定で避けたいこと",
  ngs: [
    {
      title: "秋に強く切り込むことは避けます",
      desc: "熊本市は、常緑樹は剪定後に寒風を受けると残した葉が枯れることがあるため、秋の強剪定は避けた方が良いとしています。",
    },
    {
      title: "円錐形を無視して箱形に刈ることは避けます",
      desc: "世田谷区・熊本市とも、コノテガシワの樹形を円錐形としています。自然樹形に沿って整えます（当サイトの整理）。",
    },
    {
      title: "大きくなってから植え替えで調整することは避けます",
      desc: "世田谷区の樹木一覧では移植難易は△〜○です。大きさは剪定で調整します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>背丈を超えたコノテガシワ、生垣として長く並んでいるコノテガシワ</Hl>は、剪定業者に相談してください。「円錐形の自然樹形を残して、はみ出た枝を抜く」と伝えると、仕上がりの考え方を共有しやすくなります。刈り込みの時期は<a href={SETAGAYA_5} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」維持・管理（PDF）</a>によります（2026年11月27日確認）。
    </p>,
    <p key="2">
      針葉樹の手入れ全般は<Link href="/conifer-teire/" className={A}>コニファーの剪定・手入れ</Link>、生垣の刈り込みは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込みの基礎知識</Link>、樹種ごとの時期の目安は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "コノテガシワの剪定を業者に相談する",
  ctaText: "背の高くなったコノテガシワや、長い生垣の刈り込みは、業者に任せると安心です。",
  faqHeading: "コノテガシワの剪定でよくある質問",
  faqs: [
    {
      q: "コノテガシワの剪定はいつ行えばよいですか？",
      a: "世田谷区の植栽ガイドブックの樹木一覧は、手入時期を6〜7月と11〜12月としています。熊本市は常緑樹の剪定に5〜6月と9〜10月を挙げています。",
    },
    {
      q: "冬に剪定してもよいですか？",
      a: "埼玉県の街路樹剪定マニュアルは、寒さに強い常緑針葉樹の枝抜きや軽い切り詰めは冬期が適期としています。一方、熊本市は常緑樹の秋の強剪定は避けた方が良いとしています。冬は軽い枝抜きにとどめます（当サイトの整理）。",
    },
    {
      q: "コノテガシワはどんな形に育ちますか？",
      a: "世田谷区は「根元より分岐し、整った円錐形の樹形となる」としています。熊本市の基本樹形の表でも円錐形に分類されています。",
    },
    {
      q: "コノテガシワは植え替えできますか？",
      a: "世田谷区の樹木一覧では、移植時期は2月下旬〜4月上旬、移植難易は△〜○（移植困難〜時期や方法に注意が必要）です。",
    },
  ],
  related: [
    { href: "/conifer-teire/", label: "コニファーの剪定・手入れ", desc: "針葉樹の手入れ全般" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込みの基礎知識", desc: "刈り込みの時期と回数" },
    { href: "/maki-teire/", label: "マキ（イヌマキ）の剪定・手入れ", desc: "同じく円錐形の常緑針葉樹" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/metasequoia-sentei/", label: "メタセコイアの剪定", desc: "同じ円錐形の樹形" },
  ],
};

export default function KonotegashiwaSenteiPage() {
  return <KnowArticle data={data} />;
}
