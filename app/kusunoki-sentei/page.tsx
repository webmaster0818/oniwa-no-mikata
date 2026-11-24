import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kusunoki-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "クスノキの剪定｜暖かくなってからの4〜6月が中心。寒さに弱く、葉をすべて落とす強剪定はしない｜お庭のミカタ",
  },
  description:
    "クスノキの剪定の時期と切り方を、世田谷区の植栽ガイドブック、熊本市の樹木管理ガイドライン、芦屋市の街路樹等維持管理基本書をもとにまとめました。大木になる性質と、秋の剪定を避けたい理由も整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "クスノキの剪定",
    description:
      "クスノキは寒さに弱いため、暖かくなってから剪定します。生長が早く大木になる木なので、数年おきに枝抜きと切返し剪定で大きさを保ちます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; when: string; note: string }[] = [
  {
    src: "世田谷区",
    when: "手入時期 4〜5月・9〜10月",
    note: "常緑高木。萌芽力大、都市環境に強い。若木は乾燥を嫌う。移植時期は4〜6月",
  },
  {
    src: "熊本市",
    when: "剪定時期 5〜6月",
    note: "樹形は広楕円。生長が早く、大木となる。広い空間がない場合は切返し・切詰め剪定を繰り返し、4〜5年かけて目標の樹形にする",
  },
  {
    src: "芦屋市",
    when: "4月中旬〜7月中旬、または9月中旬〜10月下旬",
    note: "寒さに弱いため、暖かくなってから剪定する。できれば9〜10月は避ける。樹形を作り直すときは4月中旬〜5月下旬",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">時期</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月24日に世田谷区の植栽ガイドブック（掲載樹種特性表）、熊本市の公共施設樹木の維持管理ガイドライン（主要樹種の特徴・クスノキの管理方針）、芦屋市の街路樹等維持管理基本書（常緑樹の剪定・クスノキの剪定）を開き、クスノキの記載を当サイトで並べました。芦屋市・熊本市の記載は街路樹・公共施設の樹木向けのもので、時期の幅は資料ごとに異なります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kusunoki-sentei",
  published: "2026-11-24",
  updatedLabel: "2026年11月24日",
  h1: "クスノキの剪定｜暖かくなってからの4〜6月が中心。寒さに弱く、葉をすべて落とす強剪定はしない",
  breadcrumbLabel: "クスノキの剪定",
  tagChips: ["クスノキ", "常緑高木", "大木", "枝抜き剪定", "切返し剪定"],
  ldHeadline: "クスノキの剪定｜暖かくなってからの4〜6月が中心。寒さに弱く、葉をすべて落とす強剪定はしない",
  ldDescription:
    "クスノキの剪定の時期と方法を、世田谷区・熊本市・芦屋市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        クスノキの剪定は、<Hl>暖かくなってからの4〜6月を中心に、込み合った枝を抜いて形を整える</Hl>のが基本です。芦屋市の街路樹等維持管理基本書は、「クスノキに関しては、寒さに弱いため、暖かくなってから剪定を行う」とし、できれば9〜10月は気温の変化が大きく季節が冬に向かうため避けるとしています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>、2026年11月24日確認）。
      </p>
      <p>
        熊本市のガイドラインは、クスノキの剪定時期を5〜6月とし、「生長が早く、大木となる」としています。本記事では、庭のクスノキを剪定するときの時期と切り方を、3つの自治体の資料から整理します。
      </p>
    </>
  ),
  conclusionTitle: "クスノキは4〜6月に、徒長枝・逆さ枝・込み枝を抜いて整えます。葉がまったく残らない強剪定やぶつ切りはしません。大きくなる木なので、数年おきに手を入れて大きさを保ちます。",
  conclusionBody: (
    <>
      <p>
        世田谷区の植栽ガイドブックは、クスノキの手入時期を4〜5月・9〜10月とし、萌芽力が大きく都市環境に強い木としています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「植栽ガイドブック」掲載樹種特性表（PDF）</a>、同日確認）。3つの資料の記載を並べると、次のとおりです（熊本市は<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">公共施設樹木の維持管理ガイドライン（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "クスノキの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は暖かくなってから",
      desc: "芦屋市の基本書は、クスノキは寒さに弱いため暖かくなってから剪定し、できれば9〜10月は避けるとしています。熊本市は5〜6月、世田谷区は4〜5月を手入時期に挙げています。",
    },
    {
      title: "生長が早く、大木になる",
      desc: "熊本市のガイドラインは「生長が早く、大木となる」とし、芦屋市の基本書の高木一覧ではクスノキの樹高を20〜40mとしています。庭に植える場合は、早いうちから大きさを保つ管理が必要です。",
    },
    {
      title: "枝抜きで透かし、ぶつ切りはしない",
      desc: "芦屋市の基本書は、徒長枝・さかさ枝・こみ枝は枝抜き剪定をして樹形を整え、葉が全く無い不自然な強剪定は行わず、支障枝でもぶつ切りはしないとしています。",
    },
    {
      title: "萌芽力が大きい",
      desc: "世田谷区のガイドブックは、クスノキを萌芽力大としています。熊本市のガイドラインも、切り口から萌芽した枝を生かして樹形を作る方法を示しています。",
    },
  ],
  stepsHeading: "クスノキを剪定する4つの手順",
  stepsIntro: <p>熊本市のクスノキの管理方針と、芦屋市のクスノキの剪定の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "4月中旬以降、暖かくなってから作業する",
      desc: "芦屋市の基本書は、乱れた樹形の姿を作り直すときは4月中旬〜5月下旬に剪定し、姿を整えるだけの剪定はそれ以降に行うとしています。",
    },
    {
      title: "徒長枝・さかさ枝・こみ枝を付け根から抜く",
      desc: "粗密がないように、不要な枝を枝抜き剪定して樹形を整えます（芦屋市）。",
    },
    {
      title: "大きさを抑えるときは数年かけて切り戻す",
      desc: "熊本市のガイドラインは、広い空間が確保できない場合は切返し剪定や切詰め剪定を繰り返し、4〜5年かけて目標の樹形を作るとしています。",
    },
    {
      title: "目標の大きさに達したら、枝抜きと切返しで維持する",
      desc: "熊本市のガイドラインは、初年度の剪定後2〜3年目に一度剪定すると、その後はあまり手を入れる必要はなく、目標の樹形に達したら不要枝の枝抜き剪定と切返し剪定で維持するとしています。芦屋市の基本書も、生長が早い樹種は3年後を次の剪定の目安にしています。",
    },
  ],
  ngHeading: "クスノキの剪定で避けたいこと",
  ngs: [
    {
      title: "秋から冬に向かう時期の剪定は避けます",
      desc: "芦屋市の基本書は、クスノキは寒さに弱いため、できれば9〜10月は避けるとしています。",
    },
    {
      title: "葉がまったく残らない強剪定はしません",
      desc: "芦屋市の基本書は、葉が全く無い不自然な強剪定は行わないとしています。",
    },
    {
      title: "太い枝の途中でのぶつ切りはしません",
      desc: "芦屋市の基本書は、支障枝でもぶつ切りはせず、適切な切る位置と切り方で対応するとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>脚立で届かない高さの枝、電線や屋根・隣地にかかる枝、太い枝の切り戻し</Hl>は、剪定業者に相談してください。クスノキは生長が早く大木になるため、一度に小さくするのではなく、数年かけて大きさを整える計画を業者と相談すると、強剪定を避けやすくなります。
    </p>,
    <p key="2">
      高い木の作業で起こりやすい事故は<Link href="/takagi-sentei-kiken/" className={A}>高い木の剪定の危険</Link>、木を低く保つ方法は<Link href="/niwaki-hikuku-suru/" className={A}>庭木を低くする</Link>、同じ常緑樹の剪定は<Link href="/ubamegashi-sentei/" className={A}>ウバメガシの剪定</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "大きくなったクスノキの剪定を業者に相談する",
  ctaText:
    "クスノキは生長が早く大木になる木です。高い位置の枝や太い枝の切り戻しは、暖かい時期に業者に任せると安心です。",
  faqHeading: "クスノキの剪定でよくある質問",
  faqs: [
    {
      q: "クスノキの剪定はいつ行えばよいですか？",
      a: "芦屋市の基本書は、寒さに弱いため暖かくなってから剪定するとし、クスノキの剪定時期を4月中旬〜7月中旬または9月中旬〜10月下旬としつつ、できれば9〜10月は避けるとしています。熊本市は5〜6月、世田谷区は4〜5月・9〜10月を挙げています。",
    },
    {
      q: "クスノキはどのくらい大きくなりますか？",
      a: "芦屋市の基本書の高木一覧では、クスノキの樹高を20〜40mとしています。熊本市のガイドラインも「生長が早く、大木となる」としています。",
    },
    {
      q: "クスノキを短く切り詰めても大丈夫ですか？",
      a: "芦屋市の基本書は、葉が全く無い不自然な強剪定は行わず、ぶつ切りもしないとしています。熊本市のガイドラインは、広い空間がない場合は切返し・切詰め剪定を繰り返して4〜5年かけて目標の樹形にするとしています。",
    },
    {
      q: "クスノキの剪定はどのくらいの間隔で必要ですか？",
      a: "熊本市のガイドラインは、初年度の剪定後2〜3年目に一度剪定すると、その後はあまり手を入れる必要はないとしています。芦屋市の基本書は、生長が早い樹種は3年後を次の剪定の目安としています。",
    },
  ],
  related: [
    {
      href: "/kuroganemochi-sentei/",
      label: "クロガネモチの剪定",
      desc: "クスノキの剪定に準じる",
    },
    {
      href: "/ubamegashi-sentei/",
      label: "ウバメガシの剪定",
      desc: "同じ常緑樹の剪定",
    },
    {
      href: "/niwaki-hikuku-suru/",
      label: "庭木を低くする",
      desc: "大きくなった木の高さを抑える",
    },
    {
      href: "/takagi-sentei-kiken/",
      label: "高い木の剪定の危険",
      desc: "自分で登らない判断",
    },
    {
      href: "/keyaki-sentei/",
      label: "ケヤキの剪定",
      desc: "大木になる木の剪定",
    },
  ],
};

export default function KusunokiSenteiPage() {
  return <KnowArticle data={data} />;
}
