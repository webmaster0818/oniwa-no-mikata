import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/yagi-josou/";
const A = "text-[#2D7F3E] underline";
const HIROSHIMA = "https://www.pref.hiroshima.lg.jp/uploaded/attachment/178446.pdf";
const MINOKAMO = "https://www.city.minokamo.lg.jp/uploaded/attachment/3154.pdf";
const KYOTO = "https://www.pref.kyoto.jp/chikken/documents/201309-6.pdf";
const MAFF = "https://www.maff.go.jp/j/syouan/douei/katiku_yobo/k_shiyou/index.html";

export const metadata: Metadata = {
  title: {
    absolute: "ヤギ除草｜刈った草の処分が不要な一方、柵が要り食べ残しが出る。公的な実証でわかった利点と課題｜お庭のミカタ",
  },
  description:
    "ヤギによる除草の利点と課題を、広島県畜産技術センター・美濃加茂市掲載の岐阜大学の比較検証・京都府畜産センターの報告と、農林水産省の飼養衛生管理基準のページをもとにまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ヤギ除草の利点と課題",
    description:
      "ヤギ除草と人力除草の比較、向く場所・向かない場所、ヤギを飼う場合の届け出を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; yagi: string; jinryoku: string }[] = [
  { item: "地形", yagi: "地形によらず除草可能", jinryoku: "急斜面や凹凸のある地形では困難" },
  { item: "仕上がり", yagi: "除草できる植物に偏りがある。草が高く残り、ムラができる", jinryoku: "むらなく除草でき、選択的に植物を残せる" },
  { item: "刈った草", yagi: "処分が不要。排泄物が肥料の代わりになる", jinryoku: "集草・運搬・処分が必要（費用試算に含まれる）" },
  { item: "準備・手間", yagi: "柵が必要。除草に時間がかかる。糞尿の処理が必要になる場合がある", jinryoku: "頻繁な除草が必要。機械の騒音が出る" },
  { item: "庭木への影響", yagi: "樹皮なども食べてしまうことがある", jinryoku: "記載なし" },
  { item: "費用", yagi: "人力除草に比べ1,000㎡当たり2万円程度削減可能（放牧日数と牧柵の償却期間で変動）", jinryoku: "コストが高額" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">ヤギによる除草</th>
          <th className="border px-2 py-2 text-left">人力（刈払機）による除草</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.yagi}</td>
            <td className="border px-2 py-2">{r.jinryoku}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月22日に美濃加茂市掲載の岐阜大学の資料を開き、「各除草法のメリットとデメリット」と「ヤギによる除草の利点と課題」の記載を当サイトで項目ごとに並べ直しました。検証の場所はダム調整池の堤体面で、家庭の庭とは広さや条件が異なります。費用は資料の試算で、庭の規模にそのまま当てはまるものではありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "yagi-josou",
  published: "2026-11-22",
  updatedLabel: "2026年11月22日",
  h1: "ヤギ除草｜刈った草の処分が不要な一方、柵が要り食べ残しが出る。公的な実証でわかった利点と課題",
  breadcrumbLabel: "ヤギ除草",
  tagChips: ["ヤギ除草", "除草", "草刈り", "法面", "雑草対策"],
  ldHeadline: "ヤギ除草｜刈った草の処分が不要な一方、柵が要り食べ残しが出る。公的な実証でわかった利点と課題",
  ldDescription:
    "ヤギによる除草の利点と課題、人力除草との比較、ヤギを飼う場合の報告義務を、広島県・美濃加茂市掲載の岐阜大学資料・京都府・農林水産省の資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ヤギ除草は、ヤギを放して雑草を食べさせる除草の方法です。広島県畜産技術センターは、道路建設予定地（水田跡地）3,000㎡にヤギ6頭を60日間放牧した社会実験で、<Hl>緩やかではあるが確実な除草管理を達成</Hl>し、草刈り機による管理に比べて<Hl>投下コストを20％削減（3年間）</Hl>できたとしています。あわせて、ヤギは法面・傾斜地などでの放牧対応が簡単・確実にできるとしています（出典：<a href={HIROSHIMA} className={A} target="_blank" rel="noopener noreferrer">広島県 畜産技術センター「ヤギを利用した道路予定地の維持管理」（PDF）</a>、2026年11月22日確認）。
      </p>
      <p>
        本記事では、この報告に、ヤギ除草と人力除草を比べた岐阜大学の検証と京都府畜産センターの報告を照合し、ヤギ除草が向く場所と注意点を整理します。
      </p>
    </>
  ),
  conclusionTitle: "ヤギ除草は、斜面など人の作業が難しい場所で、刈った草の処分なしに草を減らせます。一方で、柵が必要で、食べない草や食べ残しは刈払機で仕上げる必要があり、庭木の樹皮を食べることもあります。",
  conclusionBody: (
    <>
      <p>
        美濃加茂市が掲載する岐阜大学の資料は、ダム調整池の堤体でヤギ除草区と人力除草区を比べ、ヤギ除草は作業時間を大幅に削減できる一方、除草後の草量や草高が高く残り、ムラができるとしています（出典：<a href={MINOKAMO} className={A} target="_blank" rel="noopener noreferrer">美濃加茂市掲載「山羊による緑地再生に関する共同研究 ―岐阜大学の活動報告―」（PDF）</a>、2026年11月22日確認）。資料の比較を当サイトで項目ごとに並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ヤギ除草に関する4つの基本",
  basicsIntro: <p>以下は、4つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "斜面に強い",
      desc: "広島県畜産技術センターは、ヤギは大家畜（牛）では対応が困難な法面・傾斜地などでの放牧対応が簡単・確実にできるとしています。岐阜大学の資料でも、ヤギ除草は地形によらず除草可能としています。",
    },
    {
      title: "食べる量の目安がある",
      desc: "広島県畜産技術センターは、ヤギ1頭の1日当たりの草の乾物摂取量を2.3kgと推定しています。",
    },
    {
      title: "食べ残しが出る",
      desc: "岐阜大学の資料では、除草できる植物に偏りがあり、除草後の草量や草高が高く残る、ムラができるとしています。",
    },
    {
      title: "荒れた草地も短期間で減らせる",
      desc: "京都府畜産センターは、京丹後市の荒廃農地でレンタヤギを放牧し、短時間で雑草がなくなったと報告しています。放牧はサルによる被害の防止にも一役買っているとしています。",
    },
  ],
  stepsHeading: "ヤギ除草を進める4つの手順",
  stepsIntro: (
    <p>
      岐阜大学の資料にある改善点と、京都府畜産センターの報告にもとづく流れです（出典：<a href={KYOTO} className={A} target="_blank" rel="noopener noreferrer">京都府 畜産センター「レンタヤギの活躍により荒廃農地がすっきり」（平成25年9月 試験研究業務月報・PDF）</a>、2026年11月22日確認）。
    </p>
  ),
  steps: [
    {
      title: "柵で放牧する範囲を囲う",
      desc: "岐阜大学の資料では、ヤギ除草のデメリットに柵が必要なことを挙げています。広島県の実験でも、電気牧柵で囲んだ用地に放牧しています。食べられたくない庭木や花壇は柵の外にします。",
    },
    {
      title: "草が伸びきる前に1回目の放牧をする",
      desc: "岐阜大学の資料では、改善点として、植物が成熟する前（5月中）に最初の放牧を実施するとしています。",
    },
    {
      title: "短い放牧を繰り返す",
      desc: "岐阜大学の資料では、比較的短期間の放牧（除草）を頻回繰り返すこと、ヤギによる除草は継続的に実施した方が費用対効果が高いことを挙げています。",
    },
    {
      title: "食べ残した草は刈払機で仕上げる",
      desc: "岐阜大学の資料では、残った草を作業者が刈払機で除去するとしています。",
    },
  ],
  ngHeading: "ヤギ除草で避けたいこと",
  ngs: [
    {
      title: "庭木の近くで柵なしに放すことは避けます",
      desc: "岐阜大学の資料では、ヤギは樹皮なども食べてしまうことがあるとしています。",
    },
    {
      title: "ヤギだけで仕上がりを求めることは避けます",
      desc: "岐阜大学の資料では、除草できる植物に偏りがあり、ムラができるとしています。見た目を整えたい場所は刈払機での仕上げを前提にします。",
    },
    {
      title: "ヤギを自分で飼うのに報告を忘れることは避けます",
      desc: "農林水産省は、飼養衛生管理基準が定められた家畜（山羊を含む）の所有者は、飼養する目的（愛玩など）を問わず、毎年、頭数と衛生状況を都道府県に報告しなければならないとしています。山羊の提出期限は毎年4月15日です（農林水産省「飼養衛生管理基準について」、2026年11月22日確認）。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>庭の広さに対してヤギを置く場所や柵が用意できない、庭木や花壇が多い、短期間できれいに仕上げたい</Hl>といった場合は、草刈り業者に依頼するほうが向いています。ヤギを自分で飼う場合の報告義務は、<a href={MAFF} className={A} target="_blank" rel="noopener noreferrer">農林水産省「飼養衛生管理基準について」</a>（2026年11月22日確認）で確認してください。
    </p>,
    <p key="2">
      斜面の草刈りの注意点は<Link href="/kusakari-shamen/" className={A}>斜面の草刈り</Link>、草刈りの時期は<Link href="/kusakari-jiki/" className={A}>草刈りの時期</Link>、方法ごとの比較は<Link href="/zasso-taisaku/" className={A}>雑草対策の方法比較</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "広さと仕上がりの希望を伝えて相談する",
  ctaText:
    "ヤギ除草は斜面に強い一方、柵と仕上げの草刈りが必要です。庭の広さや仕上がりの希望に合わせて、草刈り業者と比べて検討してください。",
  faqHeading: "ヤギ除草のよくある質問",
  faqs: [
    {
      q: "ヤギは1日にどのくらい草を食べますか？",
      a: "広島県畜産技術センターは、ヤギ1頭の1日当たりの草の乾物摂取量を2.3kgと推定しています。",
    },
    {
      q: "ヤギ除草は人の草刈りより安いですか？",
      a: "美濃加茂市掲載の岐阜大学の資料では、人力除草に比べ1,000㎡当たり2万円程度削減可能としつつ、放牧日数や牧柵の償却期間によって変動するとしています。広島県の実験では、草刈り機による管理に比べ投下コストを20％削減（3年間）できたとしています。どちらも広い緑地での試算です。",
    },
    {
      q: "ヤギはどんな草でも食べますか？",
      a: "岐阜大学の資料では、除草できる植物に偏りがあり、除草後に草が高く残ったりムラができたりするとしています。残った草は刈払機で除去するとしています。",
    },
    {
      q: "ペットとしてヤギを1頭飼う場合も届け出が必要ですか？",
      a: "農林水産省は、飼養衛生管理基準が定められた家畜の所有者は、飼養する目的（学術、教育、愛玩、展示等）を問わず、毎年報告の必要があるとしています。山羊の提出期限は毎年4月15日です。",
    },
  ],
  related: [
    {
      href: "/kusakari-shamen/",
      label: "斜面の草刈り",
      desc: "滑りやすい条件と作業の向き",
    },
    {
      href: "/zasso-taisaku/",
      label: "雑草対策の方法比較",
      desc: "草刈り・防草シート・除草剤など",
    },
    {
      href: "/kusakari-jiki/",
      label: "草刈りの時期",
      desc: "年に何回・いつ刈るか",
    },
    {
      href: "/seitakaawadachiso-kujo/",
      label: "セイタカアワダチソウの駆除",
      desc: "荒れた草地に多い外来植物",
    },
  ],
};

export default function YagiJosouPage() {
  return <KnowArticle data={data} />;
}
