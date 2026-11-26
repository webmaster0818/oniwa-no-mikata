import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/mokkoku-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "モッコクの剪定｜6月と10月が目安、冬の強剪定は避ける。葉を綴じるハマキムシにも注意｜お庭のミカタ",
  },
  description:
    "モッコクの剪定の時期と、つきやすいハマキムシ（モッコクハマキ）の見分け方・防除の時期を、熊本市の樹木管理ガイドライン、大和市の園芸相談の事例、福岡県の花木の病害虫資料をもとにまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "モッコクの剪定",
    description:
      "モッコクの剪定は暖かい時期（4〜10月）に行い、6月と10月が目安です。剪定と同じ時期に気をつけたいハマキムシの防除適期も公的資料から整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  {
    src: "熊本市",
    item: "剪定時期",
    note: "4月〜10月。樹形は広鐘形。陰樹だが陽光地にも耐える",
  },
  {
    src: "大和市",
    item: "剪定時期（モッコクの相談への回答）",
    note: "庭木の剪定は6月と10月。花の咲くものは、10月の剪定は軽く徒長枝を除くのみ",
  },
  {
    src: "大和市",
    item: "ハマキムシ（モッコクハマキ）",
    note: "幼虫で越冬し、4〜5月上旬に第1回の成虫が発生。5月下旬〜6月上旬が第1回の防除適期。綴じた葉の上から手で潰す",
  },
  {
    src: "福岡県",
    item: "ハマキガ類",
    note: "モッコクなどを加害する広食性の害虫。幼虫で越冬し、春から成虫が出現。若齢幼虫期をねらって防除し、越冬幼虫を捕殺する",
  },
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
      2026年11月24日に熊本市の公共施設樹木の維持管理ガイドライン（常緑樹の剪定時期の表）、大和市の園芸相談の事例《庭木》（モッコクの相談4件）、福岡県の【花き花木】病害虫・雑草の発生生態と防除（ハマキガ類の項）を開き、モッコクに関する記載を当サイトで並べました。熊本市の記載は公共施設の樹木向けのものです。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "mokkoku-sentei",
  published: "2026-11-24",
  updatedLabel: "2026年11月24日",
  h1: "モッコクの剪定｜6月と10月が目安、冬の強剪定は避ける。葉を綴じるハマキムシにも注意",
  breadcrumbLabel: "モッコクの剪定",
  tagChips: ["モッコク", "常緑樹", "剪定時期", "ハマキムシ", "和風の庭"],
  ldHeadline: "モッコクの剪定｜6月と10月が目安、冬の強剪定は避ける。葉を綴じるハマキムシにも注意",
  ldDescription:
    "モッコクの剪定時期と、つきやすいハマキムシの防除時期を、熊本市・大和市・福岡県の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        モッコクの剪定は、<Hl>暖かい時期（4〜10月）に行い、6月と10月の年2回を目安にする</Hl>のが基本です。熊本市のガイドラインは、モッコクの剪定時期を4月〜10月とし、「陰樹だが陽光地にも耐える」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月24日確認）。
      </p>
      <p>
        大和市の園芸相談の事例では、モッコクの剪定時期の質問に「庭木の剪定は6月と10月」と回答しています。本記事では、剪定の時期と、モッコクで相談の多いハマキムシへの対処を、自治体と県の資料から整理します。
      </p>
    </>
  ),
  conclusionTitle: "モッコクは6月と10月を目安に、4〜10月の暖かい時期に剪定します。6月の剪定の前後は、葉が綴じられていないか（ハマキムシ）を確かめます。",
  conclusionBody: (
    <>
      <p>
        大和市の園芸相談の事例には、モッコクの相談が4件あり、4件ともハマキムシ（モッコクハマキ）に関するものです（うち1件では剪定時期も回答）（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、同日確認）。3つの資料の記載を並べると、次のとおりです（福岡県は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">【花き花木】病害虫・雑草の発生生態と防除（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "モッコクの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は4〜10月の暖かい時期に",
      desc: "熊本市のガイドラインは、モッコクの剪定時期を4月〜10月としています。11月から3月の寒い時期は挙げられていません。",
    },
    {
      title: "6月と10月が目安",
      desc: "大和市の事例は、モッコクの剪定時期の質問に、庭木の剪定は6月と10月と回答しています。花の咲くものは、10月の剪定は軽く徒長枝を除くのみとしています。",
    },
    {
      title: "日陰にも日なたにも耐える",
      desc: "熊本市のガイドラインは、モッコクを「陰樹だが陽光地にも耐える」としています。",
    },
    {
      title: "ハマキムシの相談が多い",
      desc: "大和市の事例では、モッコクの4件の相談がいずれもハマキムシに関するものです。福岡県の資料も、ハマキガ類が加害する花木の例にモッコクを挙げています。",
    },
  ],
  stepsHeading: "モッコクを剪定する4つの手順",
  stepsIntro: <p>熊本市・大和市の時期の記載と、ハマキムシの防除の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "6月か10月に作業日を決める",
      desc: "熊本市の4月〜10月の範囲で、大和市の回答にある6月と10月を目安にします。",
    },
    {
      title: "徒長枝と込み合った枝を切る",
      desc: "大和市の事例は、花の咲くものの10月の剪定は軽く徒長枝を除くのみとしています。秋は伸びすぎた枝を整える程度にとどめます。",
    },
    {
      title: "綴じた葉を見つけたら上から潰す",
      desc: "大和市の事例は、綴じた葉の上から手で潰すとし、葉を開くと虫が落下して捕まえられないとしています。",
    },
    {
      title: "5月下旬〜6月上旬は特に葉の様子を見る",
      desc: "大和市の事例は、ハマキムシは幼虫で越冬し、4〜5月上旬に第1回の成虫が出て、5月下旬〜6月上旬が第1回の防除適期としています。",
    },
  ],
  ngHeading: "モッコクの剪定で避けたいこと",
  ngs: [
    {
      title: "冬の寒い時期の剪定は避けます",
      desc: "熊本市のガイドラインの剪定時期は4月〜10月です。",
    },
    {
      title: "綴じた葉を開いて虫を探すことは避けます",
      desc: "大和市の事例は、葉を開くと虫が落下して捕まえられないため、綴じた葉の上から潰すとしています。",
    },
    {
      title: "ラベルに適用のない薬剤は使いません",
      desc: "大和市の事例には薬剤名を挙げた回答もありますが、薬剤を使う場合は、製品のラベルに使える植物と害虫が記載されているかを確かめ、ラベルどおりに使ってください。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>樹形を整える剪定、脚立で届かない高さの枝、ハマキムシが広がった木の消毒</Hl>は、剪定業者に相談してください。木の高さと、気になっている症状（葉が綴じられているなど）を伝えると、作業内容を決めやすくなります。
    </p>,
    <p key="2">
      和風の庭の手入れは<Link href="/wafu-niwa-teire/" className={A}>和風の庭の手入れの基本</Link>、樹種ごとの剪定時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、同じくハマキムシがつくキンモクセイは<Link href="/kinmokusei-gaichu/" className={A}>キンモクセイの害虫</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "モッコクの剪定を業者に相談する",
  ctaText:
    "モッコクの樹形を整える剪定や、ハマキムシが広がった木の消毒は、業者に任せると安心です。",
  faqHeading: "モッコクの剪定でよくある質問",
  faqs: [
    {
      q: "モッコクの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは剪定時期を4月〜10月としています。大和市の園芸相談の事例では、モッコクの剪定時期の質問に、庭木の剪定は6月と10月と回答しています。",
    },
    {
      q: "モッコクの葉がくっついて丸まっています。",
      a: "大和市の事例では、葉を綴じるのはハマキムシ（モッコクハマキ）の幼虫で、中に幼虫がいて葉肉を食べるとしています。綴じた葉の上から手で潰すと回答しています。",
    },
    {
      q: "ハマキムシの防除はいつ行えばよいですか？",
      a: "大和市の事例は、ハマキムシは幼虫で越冬し、4〜5月上旬に第1回の成虫が発生し、産卵からふ化まで2週間ほどのため、5月下旬〜6月上旬が第1回の防除適期としています。",
    },
    {
      q: "モッコクは日陰でも育ちますか？",
      a: "熊本市のガイドラインは、モッコクを「陰樹だが陽光地にも耐える」としています。",
    },
  ],
  related: [
    {
      href: "/wafu-niwa-teire/",
      label: "和風の庭の手入れの基本",
      desc: "苔・砂利・石組みを保つ",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "常緑樹と落葉樹の違い",
    },
    {
      href: "/kinmokusei-gaichu/",
      label: "キンモクセイの害虫",
      desc: "同じくハマキムシがつく木",
    },
    {
      href: "/sangoju-sentei/",
      label: "サンゴジュの剪定",
      desc: "常緑樹の剪定時期",
    },
    { href: "/hisakaki-sentei/", label: "ヒサカキの剪定", desc: "同じツバキ科の常緑樹" },
  ],
};

export default function MokkokuSenteiPage() {
  return <KnowArticle data={data} />;
}
