import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shibafu-aeration-jiki/";
const A = "text-[#2D7F3E] underline";
const SAITAMA5 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20206.pdf";
const YOKOHAMA_KISETSU = "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/midori-koen/midori_up/3ryokuka/hoikuentouryokuka.files/0017_20240206.pdf";
const MLIT = "https://www.mlit.go.jp/toshi/park/content/001304623.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芝生のエアレーションの時期｜夏芝は芝が動き出す4〜5月、梅雨入りまで。休眠中の冬は行わない｜お庭のミカタ",
  },
  description:
    "芝生のエアレーションの時期を、埼玉県と横浜市の芝生管理マニュアル、国土交通省のサイトに掲載された梅小路公園の管理資料をもとにまとめました。夏芝は4〜5月、梅雨入りまでに行い、休眠中の冬は行いません。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芝生のエアレーションの時期",
    description:
      "芝生のエアレーション（穴あけ）を行う時期と回数、終わったあとの目土・散水を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; saitama: string; yokohama: string; mlit: string }[] = [
  { item: "対象の芝", saitama: "園庭・校庭の芝生（冬は休眠して枯葉色になる芝）", yokohama: "ティフトン419", mlit: "夏芝ティフトン＋冬芝（オーバーシード）" },
  { item: "行う時期", saitama: "4〜5月。芝が活動を始める時期。生育し始める前の春頃", yokohama: "更新作業は梅雨入りまでに行う", mlit: "夏芝は5月下旬（目土・施肥と同時）。冬芝の種まき時（10月上旬）にコアリング" },
  { item: "回数", saitama: "年1〜2回（年1回以上）。生育状況に応じて", yokohama: "記載なし", mlit: "毎年行う" },
  { item: "行わない時期", saitama: "12〜1月は芝を傷つけるので行わない", yokohama: "記載なし", mlit: "記載なし" },
  { item: "あとの作業", saitama: "目砂（目土）をして、たっぷり散水すると効果的", yokohama: "作業内容によっては一時的に使用を制限する", mlit: "目土3〜5mm、冬芝の種まき3〜5g/㎡" },
  { item: "穴の大きさ", saitama: "記載なし", yokohama: "記載なし", mlit: "コアリング φ8〜9mm、長さ70mm、間隔80mm程度" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">埼玉県 芝生マニュアル</th>
          <th className="border px-2 py-2 text-left">横浜市 芝生管理マニュアル</th>
          <th className="border px-2 py-2 text-left">梅小路公園（京都市）の管理資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.saitama}</td>
            <td className="border px-2 py-2">{r.yokohama}</td>
            <td className="border px-2 py-2">{r.mlit}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月22日に3つの資料を開き、エアレーション（更新作業）の時期と方法に関する記載を当サイトで項目ごとに照合しました。「記載なし」はその資料に書かれていないという意味です。いずれも園庭・校庭・公園の芝生を対象にした資料のため、家庭の芝生では面積や使い方に合わせて参考にしてください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shibafu-aeration-jiki",
  published: "2026-11-22",
  updatedLabel: "2026年11月22日",
  h1: "芝生のエアレーションの時期｜夏芝は芝が動き出す4〜5月、梅雨入りまで。休眠中の冬は行わない",
  breadcrumbLabel: "芝生のエアレーションの時期",
  tagChips: ["芝生", "エアレーション", "コアリング", "更新作業", "目土"],
  ldHeadline: "芝生のエアレーションの時期｜夏芝は芝が動き出す4〜5月、梅雨入りまで。休眠中の冬は行わない",
  ldDescription:
    "芝生のエアレーションを行う時期と回数、作業後の目土・散水を、埼玉県と横浜市の芝生管理マニュアルと梅小路公園の管理資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        埼玉県の園庭・校庭芝生マニュアルは、エアレーションを<Hl>芝が活動を始める4〜5月に、年1〜2回</Hl>行うとし、<Hl>芝生が休眠している12〜1月は芝を傷つけるので行わない</Hl>としています。エアレーションのあとは目砂（目土）をして、たっぷり散水すると効果的としています（出典：<a href={SAITAMA5} className={A} target="_blank" rel="noopener noreferrer">埼玉県「園庭・校庭芝生マニュアル」第5章 維持管理をしよう（PDF）</a>、2026年11月22日確認）。
      </p>
      <p>
        本記事では、このマニュアルと横浜市の芝生管理マニュアル、梅小路公園の管理資料を照合し、家庭の芝生でエアレーションを行う時期を整理します。
      </p>
    </>
  ),
  conclusionTitle: "日本芝やティフトンなどの夏芝は、芝が動き出す春から梅雨入りまでにエアレーションを行います。休眠中の冬は回復しないため行いません。",
  conclusionBody: (
    <>
      <p>
        横浜市の校庭・園庭芝生管理マニュアルは、夏の管理の中で<Hl>更新作業は梅雨入りまでに行う</Hl>としています（出典：<a href={YOKOHAMA_KISETSU} className={A} target="_blank" rel="noopener noreferrer">横浜市「校庭・園庭芝生管理マニュアル」季節ごとの管理の目安（PDF）</a>、2026年11月22日確認）。京都市の梅小路公園の芝生広場では、夏芝のエアレーションを5月下旬に目土・施肥と同時に行い、冬芝の種をまく10月上旬にもコアリングを行っています（出典：<a href={MLIT} className={A} target="_blank" rel="noopener noreferrer">国土交通省ウェブサイト掲載 梅小路公園の芝生管理資料「芝生を育てる」（PDF）</a>、2026年11月22日確認）。3つの資料を当サイトで項目ごとに並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "芝生のエアレーションに関する4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "固くなった土をほぐし、根に空気を入れる作業",
      desc: "埼玉県のマニュアルでは、エアレーション（コアリング）を、踏み固められた土をほぐし、古くなった芝生の根を活性化させ、水はけを良くする作業としています。",
    },
    {
      title: "時期は芝が動き出す春",
      desc: "埼玉県のマニュアルでは4〜5月、芝生が生育し始める前の春頃に行うとよいとしています。横浜市のマニュアルでは、更新作業は梅雨入りまでに行うとしています。",
    },
    {
      title: "回数は年1〜2回が目安",
      desc: "埼玉県のマニュアルでは、年1〜2回（年1回以上）を目安とし、芝生の生育状況に応じて行うとしています。毎週の芝刈りのように頻繁に行う作業ではありません。",
    },
    {
      title: "冬の休眠中は行わない",
      desc: "埼玉県のマニュアルでは、12〜1月は芝が生長せず擦り切れから回復しにくいため、エアレーションなどの更新作業は芝を傷つけるので行わないとしています。",
    },
  ],
  stepsHeading: "芝生のエアレーションを行う4つの手順",
  stepsIntro: <p>3つの資料にもとづき、当サイトで家庭の芝生向けに整理した流れです。</p>,
  steps: [
    {
      title: "芝が緑になり動き出したのを確かめる",
      desc: "埼玉県のマニュアルでは、4〜5月を芝生が緑色になり維持管理作業が始まる時期としています。休眠中の茶色い芝には行わず、芽が動き出してから始めます。",
    },
    {
      title: "面積に合った道具を選ぶ",
      desc: "埼玉県のマニュアルでは、足で踏み込むローンスパイクは手軽だが広い面積には不向き、手押しのスパイクは一度に多くの穴を開けられ、エンジン式のエアレーターは早く深くできるが高価なため業者への委託も勧めるとしています。",
    },
    {
      title: "穴を開けたら目土をまく",
      desc: "埼玉県のマニュアルでは、エアレーションのあとに目砂（目土）をすると効果的としています。梅小路公園では、目土3〜5mmをエアレーションと同時に行っています。",
    },
    {
      title: "たっぷり散水し、しばらく使用を控える",
      desc: "埼玉県のマニュアルでは、作業後にたっぷり散水すると効果的としています。横浜市のマニュアルでは、作業内容によっては一時的に芝生の使用を制限するとしています。",
    },
  ],
  ngHeading: "芝生のエアレーションで避けたいこと",
  ngs: [
    {
      title: "休眠中の冬に行うことは避けます",
      desc: "埼玉県のマニュアルでは、12〜1月の芝は生長せず回復しにくいため、エアレーションなどの更新作業は行わないとしています。",
    },
    {
      title: "梅雨入り後や真夏まで先送りすることは避けます",
      desc: "横浜市のマニュアルでは、更新作業は梅雨入りまでに行い、夏の生育期に行う場合はあらかじめ作業内容や時期を計画しておくとしています。",
    },
    {
      title: "穴を開けたまま放置することは避けます",
      desc: "埼玉県のマニュアルでは、エアレーションのあとに目砂（目土）と十分な散水を行うと効果的としています。穴を開けたら、目土と水やりまでを一続きの作業として行います。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>芝生の面積が広い、土が固く足踏み式の道具では穴が開かない、目土や施肥もまとめて頼みたい</Hl>といった場合は、芝生の管理に対応する業者に相談すると作業がまとまります。埼玉県のマニュアルでも、エンジン式のエアレーターは高価なため作業を専門業者に委託することも勧めています。依頼するときは、芝の種類と面積、目土まで頼むかを伝えてください。
    </p>,
    <p key="2">
      目土のやり方は<Link href="/shibafu-medo/" className={A}>芝生の目土のやり方</Link>、芝刈りの時期と回数は<Link href="/shibakari-jiki/" className={A}>芝刈りの時期</Link>、年間の手入れの流れは<Link href="/shibafu-teire/" className={A}>芝生の手入れの基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "芝の種類と面積、目土まで頼むかを伝えて相談する",
  ctaText:
    "芝生のエアレーションは、芝が動き出す春から梅雨入りまでに行います。広い芝生や固い土の場合は、目土とあわせて業者に相談すると安心です。",
  faqHeading: "芝生のエアレーションのよくある質問",
  faqs: [
    {
      q: "芝生のエアレーションはいつ行えばよいですか？",
      a: "埼玉県の芝生マニュアルでは、芝が活動を始める4〜5月に行うとしています。横浜市の芝生管理マニュアルでは、更新作業は梅雨入りまでに行うとしています。",
    },
    {
      q: "エアレーションは年に何回必要ですか？",
      a: "埼玉県のマニュアルでは、年1〜2回（年1回以上）を目安とし、芝生の生育状況に応じて行うとしています。",
    },
    {
      q: "秋にエアレーションをしてもよいですか？",
      a: "埼玉県のマニュアルでは、10〜11月の作業に芝刈り・施肥・除草・散水を挙げ、エアレーションは4〜5月としています。休眠に入る12〜1月は行わないとしています。冬芝の種をまく場合は、梅小路公園のように種まき（10月上旬）に合わせてコアリングを行う例があります。",
    },
    {
      q: "エアレーションのあとは何をすればよいですか？",
      a: "埼玉県のマニュアルでは、エアレーション後に目砂（目土）をして、たっぷり散水すると効果的としています。コアリングで抜いた芝生のコアを補植に使う方法も紹介しています。",
    },
  ],
  related: [
    {
      href: "/shibafu-rake/",
      label: "芝生のレーキ（熊手）の使いどころ",
      desc: "目砂の均しとサッチ取り",
    },
    {
      href: "/shibafu-medo/",
      label: "芝生の目土のやり方",
      desc: "エアレーションとあわせて行う作業",
    },
    {
      href: "/shibakari-jiki/",
      label: "芝刈りの時期",
      desc: "月ごとの芝刈りの回数",
    },
    {
      href: "/shibafu-teire/",
      label: "芝生の手入れの基本",
      desc: "芝刈り・水やり・年間管理",
    },
    {
      href: "/shibafu-aki-fuyu-teire/",
      label: "芝生の秋冬の手入れ",
      desc: "休眠期に控える作業",
    },
  ],
};

export default function ShibafuAerationJikiPage() {
  return <KnowArticle data={data} />;
}
