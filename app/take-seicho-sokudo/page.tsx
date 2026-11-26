import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/take-seicho-sokudo/";
const A = "text-[#2D7F3E] underline";
const RINYA = "https://www.rinya.maff.go.jp/j/tokuyou/take/seisitu.html";
const KUMAMOTO_PREF = "https://www.pref.kumamoto.jp/uploaded/attachment/240466.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "竹の成長速度｜1日に約1.2m伸びた記録、地上に出てから約50日で竹になる｜お庭のミカタ",
  },
  description:
    "竹の成長速度を、林野庁「竹の性質」と熊本県林業研究・研修センター「タケノコ栽培の手引」をもとに整理しました。1日でマダケ121cm・モウソウチク119cm伸びた記録、地上に出てから竹稈が完成するまで50日前後、地下茎は1年に5m伸びた記録などをまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "竹の成長速度",
    description:
      "林野庁によると、竹は1日（24時間）にマダケで121cm、モウソウチクで119cm伸びた記録があります。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "林野庁", item: "1日の伸び", note: "1日（24時間）にマダケで121cm、モウソウチクで119cm伸びたという記録がある" },
  { src: "林野庁", item: "竹になるまで", note: "地下茎の節にある芽子から毎年新しい竹を出し、わずか数か月で立派な竹に生長する" },
  { src: "熊本県林業研究・研修センター", item: "竹稈が完成するまで", note: "タケノコが地上にあらわれてから竹稈を完成させる期間は、わずか50日前後" },
  { src: "熊本県林業研究・研修センター", item: "地上に出る時期", note: "おおむね3月上旬ごろから。竹稈の完成、先端部の成長、枝葉の展開まで終わるのが5月末〜6月上旬" },
  { src: "熊本県林業研究・研修センター", item: "成長の栄養", note: "大部分が地下茎の貯蔵養分によって賄われている" },
  { src: "熊本県林業研究・研修センター", item: "地下茎が伸びる時期", note: "5月末〜6月上旬ごろから成長を開始し、10月下旬〜11月上旬まで続く" },
  { src: "林野庁", item: "地下茎の伸び", note: "土質や気象条件によって異なるが、1年に5m伸びた記録がある" },
  { src: "林野庁", item: "太さと寿命", note: "形成層がないため、樹木のように毎年太くなることはない。寿命は太いものほど長く、20年ほど" },
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
      2026年11月26日に、林野庁「竹の性質」と熊本県林業研究・研修センター「タケノコ栽培の手引」（「竹の生理」の章）を開き、成長の速さと時期に関する記載を当サイトで項目ごとに整理しました。熊本県の時期は熊本県内のモウソウチクのタケノコ栽培を前提にした記載で、地域や竹の種類によって時期はずれます。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "take-seicho-sokudo",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "竹の成長速度｜1日に約1.2m伸びた記録、地上に出てから約50日で竹になる",
  breadcrumbLabel: "竹の成長速度",
  tagChips: ["竹", "タケノコ", "地下茎", "モウソウチク", "マダケ"],
  ldHeadline: "竹の成長速度｜1日に約1.2m伸びた記録、地上に出てから約50日で竹になる",
  ldDescription:
    "竹の成長速度と成長の時期を、林野庁「竹の性質」と熊本県林業研究・研修センター「タケノコ栽培の手引」をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        竹は、<Hl>1日（24時間）にマダケで121cm、モウソウチクで119cm伸びたという記録</Hl>がある植物です（出典：<a href={RINYA} className={A} target="_blank" rel="noopener noreferrer">林野庁「竹の性質」</a>、2026年11月26日確認）。林野庁は、竹は毎年地下茎の節にある芽子から新しい竹を出し、わずか数か月で立派な竹に生長するとしています。
      </p>
      <p>
        熊本県林業研究・研修センターの手引は、<Hl>タケノコが地上にあらわれてから竹稈（かん）を完成させるまでの期間は、わずか50日前後</Hl>としています（出典：<a href={KUMAMOTO_PREF} className={A} target="_blank" rel="noopener noreferrer">熊本県林業研究・研修センター「タケノコ栽培の手引」（PDF）</a>、同日確認）。庭の竹が春に急に高くなるのは、この短い期間に一気に伸びるためです。
      </p>
    </>
  ),
  conclusionTitle: "竹は春の約50日で高さを伸ばしきり、その後は太くならず、夏から秋は地下茎が伸びます。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を項目ごとにまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        2つの資料を並べると、<Hl>地上の竹が伸びるのは春（3月上旬〜6月上旬）、地下茎が伸びるのは初夏から秋（5月末〜11月上旬）</Hl>と、時期が分かれていることが分かります（熊本県の手引の記載をもとにした当サイトの整理）。庭で竹の広がりを抑えたい場合は、春のタケノコだけでなく、夏から秋に伸びる地下茎にも目を向ける必要があります。
      </p>
    </>
  ),
  basicsHeading: "竹の成長について押さえておきたい4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "1日に1m以上伸びた記録がある",
      desc: "林野庁は、1日（24時間）にマダケで121cm、モウソウチクで119cm伸びたという記録を紹介しています。毎日この速さで伸びるという意味ではなく、記録された値です。",
    },
    {
      title: "伸びるのは地上に出てから50日前後",
      desc: "熊本県林業研究・研修センターの手引では、タケノコが地上にあらわれてから竹稈を完成させるまでの期間を50日前後としています。",
    },
    {
      title: "成長の栄養は地下茎から",
      desc: "同じ手引は、短期間に旺盛な生育をとげるタケノコの栄養は、大部分が地下茎の貯蔵養分によって賄われているとしています。",
    },
    {
      title: "その後は太くならない",
      desc: "林野庁は、竹には形成層がないため、樹木のように毎年太くなることはないとしています。寿命は太いものほど長く、20年ほどです。",
    },
  ],
  stepsHeading: "竹の1年の成長の流れ",
  stepsIntro: <p>熊本県林業研究・研修センターの手引（モウソウチク）と林野庁の記載にもとづく流れです。時期は熊本県内の目安です。</p>,
  steps: [
    {
      title: "3月上旬ごろ：タケノコが地上に出る",
      desc: "熊本県の手引では、タケノコが地上にあらわれるのはおおむね3月上旬ごろからです。",
    },
    {
      title: "5月末〜6月上旬：竹として完成する",
      desc: "竹稈の完成、先端部の成長、枝葉の展開まで終わるのが5月末〜6月上旬です。地上に出てから50日前後で竹の形になります。",
    },
    {
      title: "5月末〜11月上旬：地下茎が伸びる",
      desc: "熊本県の手引では、地下茎は5月末〜6月上旬ごろから成長を開始し、10月下旬〜11月上旬まで続きます。林野庁は、地下茎が1年に5m伸びた記録があるとしています。",
    },
    {
      title: "秋：翌春のタケノコが育ち始める",
      desc: "熊本県の手引は、地下茎が伸びるころからすでにタケノコの成長が始まっており、秋の手入れ時にかなり太ったタケノコを見ることがあるとしています。",
    },
  ],
  ngHeading: "竹の成長を考えるときに避けたいこと",
  ngs: [
    {
      title: "春のタケノコだけ取れば広がらないと考えることは避けます",
      desc: "熊本県の手引では、地下茎は5月末から11月上旬まで伸び続けます。林野庁は、地下茎が1年に5m伸びた記録があるとしています。",
    },
    {
      title: "伸びきった竹が太くなるのを待つことは避けます",
      desc: "林野庁は、竹には形成層がないため、樹木のように毎年太くなることはないとしています。",
    },
    {
      title: "1日の記録をそのまま毎日の伸びと考えることは避けます",
      desc: "林野庁の121cm・119cmは「伸びたという記録」です。伸び方は竹の種類や条件によって異なります。",
    },
  ],
  proHeading: "庭の竹が手に負えないとき",
  proParas: [
    <p key="1">
      <Hl>竹が高くなりすぎたとき、地下茎が隣地や建物の近くまで広がっているとき</Hl>は、伐採や抜根を扱う業者に相談してください。地上の竹だけでなく、地下茎の処理まで含めて見積もりを取ると、作業の範囲を比べやすくなります。
    </p>,
    <p key="2">
      竹や笹が広がる仕組みと止め方は<Link href="/take-taisaku/" className={A}>竹・笹の対策の基礎知識</Link>、伐った後の根の扱いは<Link href="/bassai-bakkon-chigai/" className={A}>伐採と抜根の違い</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "庭の竹の伐採・抜根を業者に相談する",
  ctaText: "高くなった竹の伐採や、広がった地下茎の処理は、業者に任せると安心です。",
  faqHeading: "竹の成長速度でよくある質問",
  faqs: [
    {
      q: "竹は1日にどのくらい伸びますか？",
      a: "林野庁は、1日（24時間）にマダケで121cm、モウソウチクで119cm伸びたという記録があるとしています。",
    },
    {
      q: "タケノコは何日くらいで竹になりますか？",
      a: "熊本県林業研究・研修センターの手引は、タケノコが地上にあらわれてから竹稈を完成させる期間を、わずか50日前後としています。",
    },
    {
      q: "竹は年々太くなりますか？",
      a: "林野庁は、竹には形成層がないため、樹木のように毎年太くなることはないとしています。",
    },
    {
      q: "地下茎はどのくらい伸びますか？",
      a: "林野庁は、地下茎の伸長は土質や気象条件によって異なるものの、1年に5m伸びた記録があるとしています。熊本県の手引では、地下茎が伸びる時期は5月末〜6月上旬ごろから10月下旬〜11月上旬までです。",
    },
  ],
  related: [
    { href: "/take-taisaku/", label: "竹・笹の対策の基礎知識", desc: "地下茎で広がる仕組みと止め方" },
    { href: "/bassai-bakkon-chigai/", label: "伐採と抜根の違い", desc: "根まで処理するかどうか" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "伐った後の根の扱い" },
  ],
};

export default function TakeSeichoSokudoPage() {
  return <KnowArticle data={data} />;
}
