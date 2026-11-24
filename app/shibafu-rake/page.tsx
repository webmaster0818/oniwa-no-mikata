import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shibafu-rake/";
const A = "text-[#2D7F3E] underline";
const SAITAMA4 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20205.pdf";
const SAITAMA5 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20206.pdf";
const SAITAMA6 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20207.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芝生のレーキ（熊手）の使いどころ｜張る前の整地、6〜7月のサッチ取り、目砂の均し、補修の4場面｜お庭のミカタ",
  },
  description:
    "芝生の手入れでレーキ・熊手を使う場面を、埼玉県の芝生化マニュアル（芝生を張ろう・維持管理・修復の各章）の記載からまとめました。張る前の地盤の均し、梅雨どきのサッチ（刈りくず）取り、目砂の均し、傷んだ部分の補修で使います。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芝生のレーキ（熊手）の使いどころ",
    description:
      "レーキ・熊手は、芝生を張る前の整地、刈りくず（サッチ）の除去、目砂の均し、補修のときに使います。埼玉県のマニュアルの記載を場面ごとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { scene: string; when: string; note: string; src: string }[] = [
  {
    scene: "芝生を張る前の整地",
    when: "芝張りの前",
    note: "土壌の改良の後、レーキ等で地盤を平らに整え、機材で土壌を均一にならす（転圧）",
    src: "第4章 芝生を張ろう",
  },
  {
    scene: "刈りくず（サッチ）の除去",
    when: "6〜7月（夏芝）",
    note: "排水不良などで病害虫が発生しやすくなるので、芝の刈りくず（サッチ）はほうき・熊手でしっかり取り除く",
    src: "第5章 維持管理をしよう",
  },
  {
    scene: "目砂（目土）の均し",
    when: "4〜9月のうち1〜2回（夏芝）",
    note: "厚さ2〜3mmで、芝生の葉が少し見える程度にまき、レーキ等で平らに均す。トンボ・レーキ・竹ぼうきで擦り込む",
    src: "第5章 維持管理をしよう",
  },
  {
    scene: "傷んだ部分の補修",
    when: "張り芝の補植は4〜7月頃",
    note: "張り芝は、新しい芝を張って目土をかけ、レーキ・竹ぼうき等で均す。種まきでは、刈りかすを熊手等で集め、補修部分の土を平らにしてから種をまく",
    src: "第6章 芝生を修復しよう",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">場面</th>
          <th className="border px-2 py-2 text-left">時期</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
          <th className="border px-2 py-2 text-left">章</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.scene}>
            <td className="border px-2 py-2">{r.scene}</td>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.note}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月25日に、埼玉県の園庭・校庭の芝生化マニュアルの第4章「芝生を張ろう」・第5章「維持管理をしよう」・第6章「芝生を修復しよう」（いずれもPDF）を開き、レーキ・熊手が出てくる記載を当サイトで場面ごとに並べました。園庭・校庭向けの資料で、時期は夏芝の場合の記載です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shibafu-rake",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "芝生のレーキ（熊手）の使いどころ｜張る前の整地、6〜7月のサッチ取り、目砂の均し、補修の4場面",
  breadcrumbLabel: "芝生のレーキ（熊手）の使いどころ",
  tagChips: ["芝生", "レーキ", "熊手", "サッチ", "目砂"],
  ldHeadline: "芝生のレーキ（熊手）の使いどころ｜張る前の整地、6〜7月のサッチ取り、目砂の均し、補修の4場面",
  ldDescription:
    "芝生の手入れでレーキ・熊手を使う場面（整地・サッチ取り・目砂の均し・補修）を、埼玉県の芝生化マニュアルをもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        芝生でレーキ（熊手）を使うのは、主に<Hl>①張る前の地盤の均し、②梅雨どきの刈りくず（サッチ）取り、③目砂（目土）の均し、④傷んだ部分の補修</Hl>の4つの場面です。埼玉県のマニュアルは、6〜7月の作業として「芝の刈りくず（サッチ）はほうき・熊手でしっかり取り除く」としています。梅雨の時期は排水不良などで病害虫が発生しやすくなるためです（出典：<a href={SAITAMA5} className={A} target="_blank" rel="noopener noreferrer">埼玉県 芝生化マニュアル 第5章 維持管理をしよう（PDF）</a>、2026年11月25日確認）。
      </p>
      <p>
        同じ章では、芝刈りの道具として熊手・竹ぼうきを挙げ、「刈り取った芝や落ち葉等をかき集めるのに使用する」としています。目砂は「レーキ等で平らに均す」とされています。
      </p>
    </>
  ),
  conclusionTitle: "レーキ・熊手は「平らに均す」「刈りくずを集める」道具です。梅雨どきのサッチ取りと、目砂・補修のあとの均しで使います。",
  conclusionBody: (
    <>
      <p>
        埼玉県のマニュアルの3つの章から、レーキ・熊手が出てくる記載を場面ごとに並べると次のとおりです（<a href={SAITAMA4} className={A} target="_blank" rel="noopener noreferrer">第4章 芝生を張ろう（PDF）</a>・<a href={SAITAMA6} className={A} target="_blank" rel="noopener noreferrer">第6章 芝生を修復しよう（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "芝生でレーキを使うときの4つの基本",
  basicsIntro: <p>以下は、埼玉県のマニュアルに書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "張る前は地盤を平らにする",
      desc: "第4章は、土壌の改良の後にレーキ等で地盤を平らに整え、機材で土壌を均一にならす（転圧）としています。",
    },
    {
      title: "梅雨どきは刈りくずを残さない",
      desc: "第5章は、6〜7月は排水不良などで病害虫が発生しやすくなるため、刈りくず（サッチ）をほうき・熊手でしっかり取り除くとしています。",
    },
    {
      title: "目砂は薄くまいて均す",
      desc: "第5章は、目砂は芝生の葉が少し見える程度に厚さ2〜3mmでまき、レーキ等で平らに均すとしています。",
    },
    {
      title: "補修でも最後に均す",
      desc: "第6章は、張り芝の補植では目土をかけてレーキ・竹ぼうき等で均し、種まきでは刈りかすを熊手等で集めて土を平らにするとしています。",
    },
  ],
  stepsHeading: "目砂をレーキで均す4つの手順",
  stepsIntro: <p>埼玉県のマニュアル第5章の目砂（目土）の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "刈りくずを熊手で集める",
      desc: "芝刈りの後、刈り取った芝や落ち葉を熊手・竹ぼうきでかき集めます。",
    },
    {
      title: "目砂を薄くまく",
      desc: "水はけの良い砂（川砂がおすすめ）を、芝生の葉が少し見える程度、厚さ2〜3mmでまきます。",
    },
    {
      title: "レーキで平らに均す",
      desc: "トンボ・レーキ・竹ぼうきで、地面を平らにしながら芝の間に擦り込みます。",
    },
    {
      title: "時期と回数を守る",
      desc: "夏芝の場合、目砂は4〜9月のうち1〜2回です。エアレーションや施肥の作業に合わせて行うと効果的とされています。",
    },
  ],
  ngHeading: "芝生のレーキがけで避けたいこと",
  ngs: [
    {
      title: "梅雨どきに刈りくずを放置することは避けます",
      desc: "埼玉県のマニュアルは、6〜7月は排水不良などで病害虫が発生しやすくなるとしています。",
    },
    {
      title: "目砂を厚くまいて芝を埋めることは避けます",
      desc: "目安は厚さ2〜3mm、芝生の葉が少し見える程度です。",
    },
    {
      title: "赤土や粘土状の土で目土をすることは避けます",
      desc: "第5章は、赤土や粘土状の水分を含んだ土の使用は避けるとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>芝生の新設・全面張り替えの整地、広い面積のサッチ取りや目砂、傷みが広がった芝生の補修</Hl>は、庭の手入れ業者に相談してください。面積と芝の種類、傷んでいる範囲を伝えると作業内容を決めやすくなります。
    </p>,
    <p key="2">
      目砂の詳しい手順は<Link href="/shibafu-medo/" className={A}>芝生の目土（目砂）のやり方</Link>、エアレーションは<Link href="/shibafu-aeration-jiki/" className={A}>芝生のエアレーションの時期</Link>、芝の種類は<Link href="/shibafu-towa/" className={A}>芝生とは</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "芝生の手入れを業者に相談する",
  ctaText: "芝生の整地や張り替え、広い面積のサッチ取り・目砂は、業者に任せると安心です。",
  faqHeading: "芝生のレーキについてよくある質問",
  faqs: [
    {
      q: "芝生にレーキ（熊手）は必要ですか？",
      a: "埼玉県のマニュアルでは、張る前の地盤の均し、刈りくず（サッチ）の除去、目砂の均し、補修の場面でレーキ・熊手が使われています。",
    },
    {
      q: "サッチ（刈りくず）はいつ取ればよいですか？",
      a: "埼玉県のマニュアルは、6〜7月の作業として、排水不良などで病害虫が発生しやすくなるため刈りくず（サッチ）をほうき・熊手でしっかり取り除くとしています。",
    },
    {
      q: "目砂をまいた後はどうすればよいですか？",
      a: "芝生の葉が少し見える程度にまき、レーキ等で平らに均します。トンボ・レーキ・竹ぼうきで芝の間に擦り込むとされています。",
    },
    {
      q: "芝が部分的にはげた場所はどう直しますか？",
      a: "埼玉県のマニュアルは、傷んだ部分を除去して均し、新しい芝を張って目土をかけ、レーキ・竹ぼうき等で均して十分に散水する手順を示しています。補植の適期は4〜7月頃としています。",
    },
  ],
  related: [
    { href: "/shibafu-medo/", label: "芝生の目土（目砂）のやり方", desc: "厚さ2〜3mmで均す" },
    { href: "/shibafu-aeration-jiki/", label: "芝生のエアレーションの時期", desc: "目砂と合わせる作業" },
    { href: "/shibafu-teire/", label: "芝生の手入れの基本", desc: "芝刈り・水やり・年間管理" },
    { href: "/shibafu-towa/", label: "芝生とは", desc: "夏芝と冬芝の違い" },
  ],
};

export default function ShibafuRakePage() {
  return <KnowArticle data={data} />;
}
