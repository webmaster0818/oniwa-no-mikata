import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/aoki-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const SETAGAYA_12 = "https://www.city.setagaya.lg.jp/documents/4728/29589_12.txt";

export const metadata: Metadata = {
  title: {
    absolute: "アオキの剪定｜自然に樹形が整う日陰向きの常緑低木。春に枝抜き程度で透かす｜お庭のミカタ",
  },
  description:
    "アオキの剪定時期と切り方を、熊本市の樹木管理ガイドラインと世田谷区の植栽ガイドブック（樹木一覧・維持管理）をもとに整理しました。2つの資料の時期の違いと、実を楽しむときの注意も並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "アオキの剪定",
    description:
      "熊本市のガイドラインは、アオキの剪定時期を4〜5月とし、剪定に耐えるが自然に樹形が整うので枝抜き程度でよいとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; time: string; note: string }[] = [
  { src: "熊本市（主要樹種の特徴）", time: "4〜5月", note: "樹形は卵。剪定に耐えるが、自然に樹形が整うので枝抜き程度でよい" },
  { src: "世田谷区（樹木一覧）", time: "手入時期 5〜6月・9〜10月", note: "ミズキ科の常緑低木。雌雄異株、実は鮮紅色。ダルマ・シロミ・斑入り種等あり。鑑賞時期は実11〜3月。日照△（日影を好む）、乾湿△（耐湿性あり）、都市適応性◎、移植難易◎、移植時期4〜6月上旬・9〜10月、好む土壌は砂壌土" },
  { src: "世田谷区（維持・管理）", time: "一般的な常緑樹は3〜4月頃", note: "常緑樹は冬に大量の枝葉を切ると寒さで弱ってしまうため、少し暖かくなりかけた3〜4月頃に剪定する" },
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
      2026年11月28日に、熊本市「公共施設樹木の維持管理ガイドライン」（巻末資料 熊本平野部の主要樹種の特徴）と、世田谷区「建築にともなう緑化のための植栽ガイドブック」の樹木一覧（PDF）・「3 維持・管理」（テキスト版）を開き、当サイトで並べました。維持・管理の行はアオキに限らない常緑樹一般の記載です。熊本市の表は熊本平野部の樹種として作成されたものです。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "aoki-sentei",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "アオキの剪定｜自然に樹形が整う日陰向きの常緑低木。春に枝抜き程度で透かす",
  breadcrumbLabel: "アオキの剪定",
  tagChips: ["アオキ", "常緑低木", "日陰の庭", "剪定時期", "枝抜き剪定"],
  ldHeadline: "アオキの剪定｜自然に樹形が整う日陰向きの常緑低木。春に枝抜き程度で透かす",
  ldDescription:
    "アオキの剪定時期と切り方を、熊本市と世田谷区の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        アオキは、日陰を好み、冬に赤い実をつける常緑低木です。熊本市の公共施設樹木の維持管理ガイドラインは、アオキの剪定時期を<Hl>4〜5月</Hl>とし、<Hl>剪定に耐えるが、自然に樹形が整うので枝抜き程度でよい</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        つまり、毎年形を作り込む木ではなく、<Hl>込み合った枝や伸びすぎた枝を付け根から抜く</Hl>手入れが中心です。本記事では、世田谷区の植栽ガイドブックとあわせて、時期と切り方を整理します。
      </p>
    </>
  ),
  conclusionTitle: "アオキは、春（4〜5月頃）に、込み合った枝や伸びすぎた枝を付け根から抜く程度で十分です。実を楽しむ株は、冬の実が終わってから切ります。",
  conclusionBody: (
    <>
      <p>2つの自治体の資料の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市の4〜5月と、世田谷区が常緑樹一般の時期とする3〜4月は、<Hl>春（4月頃）で重なります</Hl>（当サイトの整理）。世田谷区の樹木一覧では手入時期を5〜6月・9〜10月とし、実の鑑賞時期を11〜3月としています。<Hl>実の付いた株を冬に切ると、その年の実を落とす</Hl>ことになるため、実を楽しむなら実が終わった春以降に切ります（<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  basicsHeading: "アオキを剪定する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "自然に樹形が整う",
      desc: "熊本市は、剪定に耐えるが、自然に樹形が整うので枝抜き程度でよいとしています。樹形は卵形です。",
    },
    {
      title: "日陰を好み、湿り気に強い",
      desc: "世田谷区の一覧では、日照は△（日影を好む）、乾湿は△（耐湿性あり）です。建物の北側など、日の当たりにくい場所に使われます。",
    },
    {
      title: "雌雄異株で、実は雌株につく",
      desc: "世田谷区は、雌雄異株で実は鮮紅色、実の鑑賞時期は11〜3月としています。実を楽しみたい場合は雌株が必要です。",
    },
    {
      title: "品種が多い",
      desc: "世田谷区は、ダルマ・シロミ・斑入り種などがあるとしています。都市適応性・移植難易はいずれも◎です。",
    },
  ],
  stepsHeading: "アオキの剪定4つの手順",
  stepsIntro: <p>熊本市の「枝抜き程度」と、世田谷区の維持・管理の剪定の方法にもとづく流れです。</p>,
  steps: [
    {
      title: "春（4〜5月頃）に行う",
      desc: "熊本市は4〜5月としています。実を楽しむ株は、実の鑑賞時期（11〜3月）が終わってから切ります。",
    },
    {
      title: "枯れ枝・折れ枝を先に切る",
      desc: "世田谷区の維持・管理は、最初に除去する枝を枯れ枝、折れ枝、病気の枝としています。",
    },
    {
      title: "込み合った枝を付け根から抜く",
      desc: "世田谷区は、骨格となる枝を選び、周辺の不要な枝を付け根から抜き取る方法を「枝抜き剪定」としています。アオキはこれが中心です（熊本市）。",
    },
    {
      title: "伸びすぎた枝は分かれ目で切る",
      desc: "高く伸びすぎた枝や通路にはみ出した枝は、枝の分かれ目で長いほうを付け根から切ると、切り口が目立ちにくくなります（世田谷区の「切返し剪定」）。",
    },
  ],
  ngHeading: "アオキの剪定で避けたいこと",
  ngs: [
    {
      title: "冬に大量の枝葉を切ることは避けます",
      desc: "世田谷区は、常緑樹は冬に大量の枝葉を切ると寒さで樹木が弱ってしまうとしています。",
    },
    {
      title: "毎年の強い刈り込みは必要ありません",
      desc: "熊本市は、自然に樹形が整うので枝抜き程度でよいとしています。",
    },
    {
      title: "実の付いた枝を冬に切らないようにします",
      desc: "世田谷区の一覧では、実の鑑賞時期は11〜3月です。この時期に切ると、実を一緒に落とします。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      株が大きく広がって通路をふさいでいる場合や、ほかの庭木とまとめて手入れしたい場合は、剪定業者に相談してください。「春に、枝抜きで透かす程度にしてほしい。実の付く株は実が終わってから」と伝えると、仕上がりの考え方を共有しやすくなります。剪定の方法は<a href={SETAGAYA_12} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」3 維持・管理（テキスト版）</a>によります（2026年11月28日確認）。
    </p>,
    <p key="2">
      日陰の庭に向く木は<Link href="/hikage-niwa-shokusai/" className={A}>日陰の庭の植栽</Link>、剪定の手法は<Link href="/sentei-towa/" className={A}>剪定とは</Link>、時期の考え方は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "アオキの剪定を業者に相談する",
  ctaText: "大きく広がったアオキの透かしや、庭木全体の手入れは、業者に任せると安心です。",
  faqHeading: "アオキの剪定でよくある質問",
  faqs: [
    {
      q: "アオキの剪定はいつ行えばよいですか？",
      a: "熊本市は4〜5月としています。世田谷区の樹木一覧は手入時期を5〜6月・9〜10月とし、常緑樹一般の剪定は3〜4月頃としています。",
    },
    {
      q: "どのくらい切ってよいですか？",
      a: "熊本市は、剪定に耐えるが、自然に樹形が整うので枝抜き程度でよいとしています。",
    },
    {
      q: "アオキに実がなりません。",
      a: "世田谷区は、アオキを雌雄異株としています。実がなるのは雌株です。実の付く株を冬（11〜3月）に剪定すると、実を落とすことにもなります。",
    },
    {
      q: "日陰でも育ちますか？",
      a: "世田谷区の一覧では、日照は△（日影を好む）です。",
    },
  ],
  related: [
    { href: "/hikage-niwa-shokusai/", label: "日陰の庭の植栽", desc: "日の当たりにくい場所の木" },
    { href: "/sentei-towa/", label: "剪定とは", desc: "透かし・切り詰め・切り返しの違い" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/yatsude-sentei/", label: "ヤツデの剪定", desc: "同じく常緑の低木" },
  ],
};

export default function AokiSenteiPage() {
  return <KnowArticle data={data} />;
}
