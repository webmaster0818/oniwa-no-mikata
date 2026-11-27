import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/clover-zasso-taisaku/";
const A = "text-[#2D7F3E] underline";
const TOKYO = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual06";
const SAITAMA5 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20206.pdf";
const SHIZUOKA = "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/turfmaintenancemanual.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "クローバー（シロツメクサ）の雑草対策｜ほふく茎の根元から抜き、肥料不足と芝の薄さを見直す｜お庭のミカタ",
  },
  description:
    "庭や芝生に広がるクローバー（シロツメクサ）の対策を、東京都教育委員会・埼玉県・静岡県の芝生管理マニュアルをもとに整理しました。ほふく茎の基部の根を残すと再生し、肥料が少ない目印にもなります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "クローバー（シロツメクサ）の雑草対策",
    description:
      "クローバーはほふく茎で横に広がる多年草です。基部の根まで取り除き、肥料と芝刈りで芝生の密度を上げると、生えにくくなります。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "東京都教育委員会", item: "シロツメクサの特徴", note: "多年草・双子葉植物。生育期間は通年、花期は4月〜7月。ほふくして広がり、ほふく茎の節から根を下ろす" },
  { src: "東京都教育委員会", item: "除草のポイント", note: "ほふく茎の基部の根を取り除かないと再生する。双子葉植物は主根をなるべく深く取り除く" },
  { src: "東京都教育委員会", item: "芝刈り", note: "芝刈りをマメに行うことが最も効果的な対策。芝生の密度が高まり、雑草の種子が地面に落ちにくくなる" },
  { src: "埼玉県", item: "シロツメクサ（3〜4月）", note: "マメ科多年草。地下茎と種で繁殖し、広範囲に渡って横に広がる。熱湯をかけて枯らす。広がる前に地下茎から取り除く" },
  { src: "埼玉県", item: "除草のポイント", note: "発生初期に根っこから除草するのが効果的。芝刈り回数が多いほど芝生が密になり、雑草が生えにくくなる" },
  { src: "静岡県", item: "クローバー", note: "空気中の窒素を利用して生育できるマメ科の植物。生えていれば施肥量が少ないとの指標になる。葉だけ取り除いても横へ広がる。芝生の状態が良くなると自然に少なくなる" },
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
      2026年11月25日に、東京都教育委員会「芝生の異常──こんな時は？」（園庭・校庭における芝生維持管理マニュアル）、埼玉県 芝生化マニュアル 第5章 維持管理をしよう、静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」を開き、シロツメクサ（クローバー）に関する記載を当サイトで並べました。3つとも園庭・校庭の芝生向けの資料です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "clover-zasso-taisaku",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "クローバー（シロツメクサ）の雑草対策｜ほふく茎の根元から抜き、肥料不足と芝の薄さを見直す",
  breadcrumbLabel: "クローバーの雑草対策",
  tagChips: ["クローバー", "シロツメクサ", "芝生の雑草", "多年草", "草取り"],
  ldHeadline: "クローバー（シロツメクサ）の雑草対策｜ほふく茎の根元から抜き、肥料不足と芝の薄さを見直す",
  ldDescription:
    "庭や芝生に広がるクローバー（シロツメクサ）の対策を、東京都教育委員会・埼玉県・静岡県の芝生管理マニュアルをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        クローバー（シロツメクサ）は、<Hl>地面をはうほふく茎の節から根を下ろして広がる多年草</Hl>です。東京都教育委員会のマニュアルは「ほふく茎の基部の根を取り除かないと再生する」としています（出典：<a href={TOKYO} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「芝生の異常──こんな時は？」（PDF）</a>、2026年11月25日確認）。葉をむしるだけでは減らないので、<Hl>広がる前に、茎をたどって根元の根まで取り除く</Hl>のが基本です。
      </p>
      <p>
        静岡県のマニュアルは、クローバーは空気中の窒素を利用して育つマメ科の植物で、<Hl>生えていれば施肥量が少ないとの指標になる</Hl>とし、芝生の状態が良くなると自然に少なくなるとしています（出典：<a href={SHIZUOKA} className={A} target="_blank" rel="noopener noreferrer">静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "クローバーは根元の根まで抜いて数を減らし、肥料と芝刈りで芝生を密にして、入り込むすき間をなくします。",
  conclusionBody: (
    <>
      <p>
        3つの資料の記載を並べると、次のとおりです。抜き方の注意（根元の根を残さない）と、芝生側の対策（芝刈り・肥料）の両方が書かれています。
      </p>
      {table}
      <p className="mt-4">
        芝生のない花壇や砂利の庭でも、ほふく茎で広がる性質は同じです。芝生以外の場所では、根元から抜く作業を広がる前に行うことが中心になります（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "クローバーの雑草対策で知っておきたい4つの性質",
  basicsIntro: <p>以下は、3つのマニュアルに書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "ほふく茎で横に広がる多年草",
      desc: "東京都教育委員会は、ほふくして広がり、ほふく茎の節から根を下ろすとしています。埼玉県は、地下茎と種で繁殖し広範囲に横に広がるとしています。",
    },
    {
      title: "葉だけ取っても減らない",
      desc: "静岡県は、葉だけ取り除いても横へ横へと広がって増えていくとしています。東京都教育委員会は、ほふく茎の基部の根を取り除かないと再生するとしています。",
    },
    {
      title: "肥料が足りない目印になる",
      desc: "静岡県は、空気中の窒素を利用して育つマメ科のため、クローバーが生えていれば施肥量が少ないとの指標になるとしています。",
    },
    {
      title: "一年中葉があり、春から初夏に花",
      desc: "東京都教育委員会は、生育期間を通年、花期を4月〜7月としています。埼玉県の資料は3〜4月に見られる雑草として挙げています。",
    },
  ],
  stepsHeading: "クローバーを減らす4つの手順",
  stepsIntro: <p>3つのマニュアルの記載にもとづく流れです。</p>,
  steps: [
    {
      title: "広がる前、生え始めに抜く",
      desc: "埼玉県は、発生初期に根っこから除草するのが効果的とし、シロツメクサは広がる前に地下茎から取り除くとしています。",
    },
    {
      title: "ほふく茎をたどり、根元の根まで取る",
      desc: "茎の節ごとに根が出ているので、茎をたどって株の基部を探し、根ごと抜きます。埼玉県は、根から取り除く道具として除草フォークを紹介しています。",
    },
    {
      title: "抜いた穴を目砂で埋める",
      desc: "埼玉県は、雑草を抜いたあとの穴は目砂で埋めるとよいとしています。すき間を残さないことで、芝が広がりやすくなります。",
    },
    {
      title: "肥料と芝刈りで芝生を密にする",
      desc: "静岡県は、芝生の状態が良くなると自然にクローバーは少なくなるとしています。東京都教育委員会は、芝刈りをマメに行うことが最も効果的な対策としています。",
    },
  ],
  ngHeading: "クローバーの雑草対策で避けたいこと",
  ngs: [
    {
      title: "葉だけをむしって終わらせることは避けます",
      desc: "静岡県は、葉だけ取り除いても横へ広がって増えていくとしています。",
    },
    {
      title: "抜いても肥料不足のままにすることは避けます",
      desc: "静岡県は、クローバーは施肥量が少ないことの指標になるとしています。抜くだけでなく、芝生の肥料の量も見直します。",
    },
    {
      title: "芝の上で熱湯を広く使うことは避けます",
      desc: "埼玉県はシロツメクサの対処として熱湯をかけて枯らす方法を挙げていますが、まわりの芝にかかれば芝も傷みます。使うなら株の部分だけにとどめます（当サイトの注意）。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>芝生の広い範囲がクローバーに置き換わっている、芝そのものが薄くなっている</Hl>ときは、芝生の手入れや張り替えを扱う業者に相談してください。「クローバーを抜いたあと、芝の密度を戻したい」と伝えると、目砂・肥料・張り替えのどれが要るかを相談しやすくなります。
    </p>,
    <p key="2">
      芝生の雑草全般は<Link href="/shibafu-zasso/" className={A}>芝生に雑草が増える</Link>、肥料の量と時期は<Link href="/shibafu-hiryo/" className={A}>芝生の肥料</Link>、目砂のやり方は<Link href="/shibafu-medo/" className={A}>芝生の目土（目砂）のやり方</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "芝生の雑草対策を業者に相談する",
  ctaText: "クローバーが広がった芝生の除草や、芝の密度を戻す手入れは、業者に任せると安心です。",
  faqHeading: "クローバーの雑草対策でよくある質問",
  faqs: [
    {
      q: "クローバーを抜いても、またすぐ生えてきます。",
      a: "東京都教育委員会のマニュアルは、ほふく茎の基部の根を取り除かないと再生するとしています。茎をたどって根元の根まで抜き、抜いた穴は目砂で埋めます。",
    },
    {
      q: "芝生にクローバーが増えるのはなぜですか？",
      a: "静岡県のマニュアルは、クローバーは空気中の窒素を利用して生育できるマメ科の植物で、生えていれば施肥量が少ないとの指標になるとしています。芝生の状態が良くなると自然に少なくなるとしています。",
    },
    {
      q: "クローバーが目立つのはいつごろですか？",
      a: "東京都教育委員会はシロツメクサの生育期間を通年、花期を4月〜7月としています。埼玉県は3〜4月に見られる雑草として挙げています。",
    },
    {
      q: "除草剤は使えますか？",
      a: "3つのマニュアルは、抜き取りと芝生の管理を中心に書いており、薬剤名は挙げていません。使う場合は、芝生に使えると製品ラベルに書かれたものを、ラベルどおりに使います。",
    },
  ],
  related: [
    { href: "/shibafu-zasso/", label: "芝生に雑草が増える", desc: "雑草全般の対処" },
    { href: "/shibafu-hiryo/", label: "芝生の肥料", desc: "量と時期の目安" },
    { href: "/shibakari-jiki/", label: "芝刈りの時期", desc: "月ごとの回数" },
    { href: "/dokudami-sugina-taisaku/", label: "ドクダミ・スギナなどしつこい雑草の対策", desc: "地下茎で増える雑草" },
    { href: "/katabami-josou/", label: "カタバミの除草", desc: "同じくほふくして広がる多年草" },
  ],
};

export default function CloverZassoTaisakuPage() {
  return <KnowArticle data={data} />;
}
