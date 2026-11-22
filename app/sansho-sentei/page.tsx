import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/sansho-sentei/";
const A = "text-[#2D7F3E] underline";
const KYOTO = "https://www.pref.kyoto.jp/nantan/no-norin/documents/1205824134012.pdf";
const WAKAYAMA = "https://www.pref.wakayama.lg.jp/prefg/070100/070109/gaiyou/002/seikahappyou_d/fil/R6-2.pdf";
const SHIMANE = "https://www1.pref.shimane.lg.jp/industry/norin/gijutsu/nougyo_tech/kenyui/kenkyu_seika/tokimeki/index.data/No464_sansyo.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "山椒（サンショウ）の剪定｜「刃物を嫌う」木なので冬に軽く。夏は枝を1/3摘心｜お庭のミカタ",
  },
  description:
    "山椒（サンショウ）の剪定の時期と方法を、京都府の実ザンショウ栽培こよみ、和歌山県果樹試験場の摘心の試験、島根県の土壌の調査をもとにまとめました。樹形を低く保つ方法と、枯れやすい場所の条件も整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "山椒（サンショウ）の剪定",
    description:
      "サンショウは強い剪定を嫌う木です。冬の軽い剪定、夏の摘心、枯れやすい場所の条件を県の資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; when: string; how: string }[] = [
  {
    src: "京都府 実ザンショウ栽培こよみ",
    when: "冬期（落葉中）",
    how: "軽い剪定で枝を切り詰める。弱い枝を間引く（隔年結果対策）",
  },
  {
    src: "京都府 実ザンショウ栽培こよみ",
    when: "6月",
    how: "剪定の代わりに、枝を捻って成長を止める方法もある",
  },
  {
    src: "京都府 実ザンショウ栽培こよみ",
    when: "植え付けから3年目まで",
    how: "支柱で枝を横に引っ張って広げ、冬期の軽い剪定とあわせて2m位の樹高に仕立てる",
  },
  {
    src: "和歌山県果樹試験場（ブドウサンショウ）",
    when: "7月下旬（収穫時）",
    how: "発育枝を伸長量の1/3程度摘心。翌年の房あたりの粒数・重量が無処理より多い傾向",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">時期</th>
          <th className="border px-2 py-2 text-left">作業</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.when}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.how}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に京都府南丹広域振興局の「実ザンショウ栽培こよみ」と和歌山県果樹試験場の研究成果を開き、枝を切る・止める作業を時期別に当サイトで並べました。いずれも実を収穫する栽培向けの資料で、庭木として育てる場合も考え方は参考になりますが、地域の気候によって時期は前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "sansho-sentei",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "山椒（サンショウ）の剪定｜「刃物を嫌う」木なので冬に軽く。夏は枝を1/3摘心",
  breadcrumbLabel: "山椒（サンショウ）の剪定",
  tagChips: ["サンショウ", "山椒", "果樹", "摘心", "庭木"],
  ldHeadline: "山椒（サンショウ）の剪定｜「刃物を嫌う」木なので冬に軽く。夏は枝を1/3摘心",
  ldDescription:
    "山椒（サンショウ）の剪定の時期と方法を、京都府・和歌山県・島根県の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        京都府南丹広域振興局の「実ザンショウ栽培こよみ」では、サンショウは<Hl>「刃物を嫌う」ので、成長してから樹形を変えるのは困難</Hl>とし、<Hl>苗木植栽後3年目までに支柱による誘導と冬期の軽い剪定で樹形を整えます</Hl>としています（出典：<a href={KYOTO} className={A} target="_blank" rel="noopener noreferrer">京都府南丹広域振興局「実ザンショウ栽培こよみ（平成19年度 南丹版）」（PDF）</a>、2026年11月23日確認）。
      </p>
      <p>
        本記事では、この栽培こよみと和歌山県・島根県の研究成果を照合し、庭のサンショウの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "サンショウは強い剪定に向かない木です。若いうちに樹形をつくり、その後は冬の軽い剪定と夏の摘心で大きさを保ちます。",
  conclusionBody: (
    <>
      <p>
        和歌山県果樹試験場の研究成果では、ブドウサンショウの発育枝を<Hl>夏期に伸長量の1/3程度摘心</Hl>した区で、翌年の房あたりの重量が<Hl>無処理区6.0gに対して6.9gと15%重くなる傾向</Hl>がみられたとしています（出典：<a href={WAKAYAMA} className={A} target="_blank" rel="noopener noreferrer">和歌山県果樹試験場「サンショウにおける摘心の影響と樹勢維持に向けた取り組み」（PDF）</a>、2026年11月23日確認）。2つの資料の作業を時期別に並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "サンショウの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "大きくなってからの強い剪定は避ける",
      desc: "京都府の栽培こよみでは、サンショウは「刃物を嫌う」ので、成長してから樹形を変えるのは困難としています。",
    },
    {
      title: "樹形は植えてから3年目までにつくる",
      desc: "同じ資料では、支柱で枝を横に引っ張って広げ、冬期に軽い剪定で枝を切り詰めることを繰り返し、2m位の樹高に立てるとしています。",
    },
    {
      title: "雌雄のある木",
      desc: "京都府の栽培こよみでは、サンショウは木に雌雄があり、接ぎ木か挿し木で増やすとしています。実を採りたい場合は、苗の選び方も確かめます。",
    },
    {
      title: "水はけの悪い場所では弱る",
      desc: "島根県農業技術センターの調査では、生育不良・枯死症状は、固く締まった排水不良の土壌で発生が多いことが明らかになったとしています。",
    },
  ],
  stepsHeading: "庭のサンショウを整える4つの手順",
  stepsIntro: <p>各資料の作業を、1年の流れに沿って並べたものです。</p>,
  steps: [
    {
      title: "冬に枯れ枝と弱い枝を間引く",
      desc: "京都府の栽培こよみでは、隔年結果対策として冬期剪定で弱い枝を間引くとしています。切り詰めは軽めにとどめます。",
    },
    {
      title: "若木は支柱で枝を横に広げる",
      desc: "同じ資料では、苗木植栽後3年目までに支柱による誘導で樹形を整えるとしています。背を高くしないための作業です。",
    },
    {
      title: "6月は枝を捻って伸びを止める方法もある",
      desc: "京都府の栽培こよみでは、剪定の代わりに6月に枝を捻って成長を止める方法もあるとしています。",
    },
    {
      title: "夏に伸びた枝を1/3程度摘心する",
      desc: "和歌山県果樹試験場の試験では、7月下旬に発育枝の伸長量の1/3程度を摘心した区で、翌年の結実性や樹勢が良くなる傾向がみられたとしています。",
    },
  ],
  ngHeading: "サンショウの手入れで避けたいこと",
  ngs: [
    {
      title: "株元を深く耕して太い根を切ることは避けます",
      desc: "京都府の栽培こよみでは、その他の注意事項として、深耕で太い根を切らない、除草剤は使用しない、敷ワラ等で乾燥を防ぐとしています。",
    },
    {
      title: "全部の枝に実をつけたままにすることは避けます",
      desc: "同じ資料では、実をつけた枝は弱るので、全部の枝に実をつけると翌年の結果が悪くなるとし、摘蕾等で実のつき具合を調整するとしています。",
    },
    {
      title: "水の溜まりやすい場所に植えることは避けます",
      desc: "京都府の栽培こよみでは、夏に乾燥しすぎたり地下水位が高い場所は枯死しやすいので避けるとしています。島根県の資料でも、排水不良の土壌では排水対策や堆肥による土壌改良を行った上で植栽することが必要としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>大きく育って手が届かない、枝が混み合って葉に斑点が出ている、急に葉が落ちて元気がない</Hl>といった場合は、庭木の剪定業者に相談すると判断しやすくなります。京都府の栽培こよみでは、サビ病は風通しが悪いと発生しやすいので枝葉が混み合わないよう整理するとしています。依頼するときは、強い剪定を避けたいことと、実を採りたいかどうかを伝えてください。
    </p>,
    <p key="2">
      果樹全般の手入れは<Link href="/kaju-niwaki-teire/" className={A}>庭の果樹の手入れの基本</Link>、柑橘の剪定は<Link href="/yuzu-sentei/" className={A}>柚子の剪定</Link>、病気や虫の見方は<Link href="/niwaki-byogaichu/" className={A}>庭木の病害虫対策の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。土壌の調査の出典は<a href={SHIMANE} className={A} target="_blank" rel="noopener noreferrer">島根県農業技術センター「サンショウの生育不良となる土壌条件」（PDF）</a>（2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "強い剪定を避けたいことを伝えて相談する",
  ctaText:
    "サンショウは刃物を嫌い、大きくなってからの樹形の変更が難しい木です。高くなり過ぎた木の手入れは、業者と相談すると安心です。",
  faqHeading: "山椒（サンショウ）の剪定のよくある質問",
  faqs: [
    {
      q: "サンショウの剪定はいつがよいですか？",
      a: "京都府南丹広域振興局の実ザンショウ栽培こよみでは、冬期の軽い剪定で樹形を整え、隔年結果対策として冬期剪定で弱い枝を間引くとしています。剪定の代わりに6月に枝を捻って成長を止める方法もあるとしています。",
    },
    {
      q: "大きくなり過ぎたサンショウを短く切ってもよいですか？",
      a: "京都府の栽培こよみでは、サンショウは「刃物を嫌う」ので、成長してから樹形を変えるのは困難としています。一度に大きく切り下げることは避け、数年かけて少しずつ整えることを検討してください。",
    },
    {
      q: "夏に伸びた枝はどうすればよいですか？",
      a: "和歌山県果樹試験場の試験では、7月下旬にブドウサンショウの発育枝を伸長量の1/3程度摘心した区で、翌年の房あたりの粒数が多く、重量も15%重くなる傾向がみられたとしています。",
    },
    {
      q: "サンショウが急に枯れてしまいました。",
      a: "島根県農業技術センターの調査では、サンショウ苗木の生育不良・枯死症状は、固く締まった排水不良の土壌で発生が多いとしています。京都府の栽培こよみでも、地下水位が高い場所や夏に乾燥しすぎる場所は枯死しやすいとしています。",
    },
  ],
  related: [
    {
      href: "/kaju-niwaki-teire/",
      label: "庭の果樹の手入れの基本",
      desc: "実がならないときの見方",
    },
    {
      href: "/yuzu-sentei/",
      label: "柚子の剪定",
      desc: "トゲのある果樹の剪定",
    },
    {
      href: "/kinkan-sentei/",
      label: "金柑の剪定",
      desc: "庭で育てる果樹の剪定",
    },
    {
      href: "/niwaki-kareta/",
      label: "庭木が枯れたときの判断",
      desc: "枯れたかどうかの見分け方",
    },
  ],
};

export default function SanshoSenteiPage() {
  return <KnowArticle data={data} />;
}
