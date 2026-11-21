import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/lilac-sentei/";
const A = "text-[#2D7F3E] underline";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const SAPPORO = "https://www.city.sapporo.jp/museum/ouchimuseum/2025lilac.html";
const NARO = "https://www.naro.go.jp/org/tarc/to-noken/DB/DATA/057/057-251.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ライラックの剪定｜冬に花芽を確かめて不要枝を整理し、強い剪定は花の後に。若木は強く切らない｜お庭のミカタ",
  },
  description:
    "ライラックの剪定を、大和市の園芸相談の事例、札幌市博物館活動センターの解説、山形県園芸試験場の試験報告をもとにまとめました。冬は花芽を確かめて不要枝を整理し、強い剪定は花の後に行います。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ライラックの剪定",
    description:
      "ライラックの花芽の付き方、剪定の時期と切り方、若木の扱いを公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; yamato: string; sapporo: string; naro: string }[] = [
  {
    item: "木の性質",
    yamato: "記載なし",
    sapporo: "高さ5メートルくらいになる木。和名はムラサキハシドイ。モクセイ科ハシドイ属",
    naro: "幼木時は樹勢が弱く、年数を経ても株張りの弱い場合がある",
  },
  {
    item: "花芽",
    yamato: "冬の間に花芽を確認する",
    sapporo: "冬は硬い皮に包まれた冬芽で越し、春に冬芽から葉と花のつぼみが出る。芽は対生",
    naro: "記載なし",
  },
  {
    item: "剪定の時期と強さ",
    yamato: "冬の間に不要枝を整理し、花後に強い剪定をする",
    sapporo: "記載なし",
    naro: "切り花用の高木仕立てでは、3月上旬以前の切り戻しで長い着花枝が得られた。開花期（5月22日）の整枝では翌年の枝が短く、着花枝率も低かった",
  },
  {
    item: "仕立て方",
    yamato: "普通は2〜3本植え（別植）にして、自然な感じで仕立てる",
    sapporo: "記載なし",
    naro: "定植後の幼木は2年間放任して樹勢を強める。整枝は3年目に弱枝を整理する程度にとどめる",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">大和市 園芸相談の事例</th>
          <th className="border px-2 py-2 text-left">札幌市博物館活動センター</th>
          <th className="border px-2 py-2 text-left">山形県園芸試験場の試験報告</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.yamato}</td>
            <td className="border px-2 py-2">{r.sapporo}</td>
            <td className="border px-2 py-2">{r.naro}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月22日に3つの資料を開き、ライラックに関する記載を当サイトで項目ごとに照合しました。「記載なし」はその資料に書かれていないという意味です。山形県園芸試験場の報告は切り花の生産を目的とした試験で、庭木の剪定を直接扱ったものではありません。庭木に当てはめる場合は、花芽を残す時期の目安として参考にしてください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "lilac-sentei",
  published: "2026-11-22",
  updatedLabel: "2026年11月22日",
  h1: "ライラックの剪定｜冬に花芽を確かめて不要枝を整理し、強い剪定は花の後に。若木は強く切らない",
  breadcrumbLabel: "ライラックの剪定",
  tagChips: ["ライラック", "ムラサキハシドイ", "花木", "剪定時期", "花芽"],
  ldHeadline: "ライラックの剪定｜冬に花芽を確かめて不要枝を整理し、強い剪定は花の後に。若木は強く切らない",
  ldDescription:
    "ライラックの花芽の付き方、剪定の時期と強さ、若木の扱いを、大和市の園芸相談の事例・札幌市博物館活動センターの解説・山形県園芸試験場の試験報告をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ライラックの剪定について、大和市の園芸相談の事例では、<Hl>冬の間に花芽を確認して不要枝を整理し、花後に強い剪定をする</Hl>と回答しています。あわせて、普通は2〜3本植えにして、剪定は自然な感じで仕立てるとしています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月22日確認）。
      </p>
      <p>
        本記事では、この回答に、札幌市博物館活動センターによるライラックの解説と、山形県園芸試験場の試験報告を照合し、庭のライラックの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "ライラックは、冬は花芽を確かめながら不要枝の整理にとどめ、樹形を変えるような強い剪定は花が終わってから行います。植えて間もない若木は強く切らず、樹勢がつくのを待ちます。",
  conclusionBody: (
    <>
      <p>
        札幌市博物館活動センターは、ライラックを高さ5メートルくらいになるモクセイ科ハシドイ属の木とし、冬は硬い皮に包まれた冬芽で越して、春に冬芽から葉と花のつぼみが出ると解説しています（出典：<a href={SAPPORO} className={A} target="_blank" rel="noopener noreferrer">札幌市「植物の学芸員とめぐる！もっと知りたい『ライラック』」</a>、2026年11月22日確認）。山形県園芸試験場の試験報告では、幼木時は樹勢が弱いため、定植後2年間は放任して樹勢を強めるのがよいとしています（出典：<a href={NARO} className={A} target="_blank" rel="noopener noreferrer">東北農業研究 第57号「ライラックの仕立て法と適品種」（農研機構サイト掲載・PDF）</a>、2026年11月22日確認）。3つの資料を当サイトで項目ごとに並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ライラックの剪定に関する4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "花芽は冬芽の中にある",
      desc: "札幌市博物館活動センターの解説では、冬は硬い皮に包まれた冬芽で越し、暖かくなると冬芽から葉と花のつぼみが出るとしています。冬に枝先を切ると、この芽を落とすことになります。",
    },
    {
      title: "冬は不要枝の整理にとどめる",
      desc: "大和市の園芸相談の事例では、冬の間に花芽を確認し、不要枝を整理するとしています。",
    },
    {
      title: "強い剪定は花の後",
      desc: "大和市の園芸相談の事例では、花後に強い剪定をするとしています。山形県園芸試験場の試験では、開花期の整枝で翌年の枝が短くなり着花枝率も低かったため、花の後でも時期が遅れすぎないように注意します。",
    },
    {
      title: "若木は樹勢を育てる",
      desc: "山形県園芸試験場の報告では、幼木時は樹勢が弱く、定植後2年間は放任し、3年目に弱枝を整理する程度にとどめて樹勢を強めることが重要としています。",
    },
  ],
  stepsHeading: "ライラックを剪定する4つの手順",
  stepsIntro: <p>大和市の園芸相談の事例と、山形県園芸試験場の報告にもとづく流れです。</p>,
  steps: [
    {
      title: "冬に枝先の冬芽を確かめる",
      desc: "葉が落ちた冬に、枝先のふくらんだ冬芽の位置を確かめます。札幌市博物館活動センターの解説では、ライラックの芽は枝に対して同じ高さで両側に1つずつ付く対生としています。",
    },
    {
      title: "枯れ枝・弱い枝など不要枝だけを整理する",
      desc: "大和市の園芸相談の事例では、冬の間は花芽を確認しながら不要枝を整理するとしています。花芽の付いた枝先は残します。",
    },
    {
      title: "花が終わったら強めに切り戻す",
      desc: "大和市の園芸相談の事例では、花後に強い剪定をするとしています。樹高を下げたい、枝を減らしたいといった剪定はこの時期にまとめます。",
    },
    {
      title: "植えて2年ほどの若木は切りすぎない",
      desc: "山形県園芸試験場の報告では、定植後2年間は放任し、整枝は3年目に弱枝を整理する程度にとどめるとしています。また、樹勢を得るためには肥沃な土壌に植え付けることが薦められるとしています。",
    },
  ],
  ngHeading: "ライラックの剪定で避けたいこと",
  ngs: [
    {
      title: "冬に枝先をそろえて刈り込むことは避けます",
      desc: "札幌市博物館活動センターの解説では、花のつぼみは冬芽の中にあり、春に冬芽から出るとしています。冬に枝先を一律に切ると、翌春の花を減らすおそれがあります。",
    },
    {
      title: "植えたばかりの若木を強く切ることは避けます",
      desc: "山形県園芸試験場の報告では、幼木時は樹勢が弱く、2年間は放任して樹勢を強めるのがよいとしています。",
    },
    {
      title: "生け垣のように詰めて仕立てることは避けます",
      desc: "大和市の園芸相談の事例では、普通は2〜3本植え（別植）にして、剪定は自然な感じで仕立てるとしています。高さ5メートルくらいになる木のため、植える場所の広さも確かめてください。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>木が高くなり脚立での作業になる、花が年々減ってきた、樹形を大きく作り直したい</Hl>といった場合は、庭木の剪定業者に相談すると作業がまとまります。依頼するときは、ライラックであること、花を残したいこと、花の後に強い剪定を行いたいことを伝えてください。
    </p>,
    <p key="2">
      花木全般の剪定時期は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花を良くする手入れ</Link>、季節ごとの剪定の考え方は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、つぼみが落ちる原因は<Link href="/kaboku-tsubomi-ochiru/" className={A}>花木のつぼみが落ちる原因</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "花を残したい時期と剪定の強さを伝えて相談する",
  ctaText:
    "ライラックは、冬は花芽を確かめて不要枝を整理し、強い剪定は花の後に行います。高くなった木の作業は業者と相談すると安心です。",
  faqHeading: "ライラックの剪定のよくある質問",
  faqs: [
    {
      q: "ライラックの剪定はいつがよいですか？",
      a: "大和市の園芸相談の事例では、冬の間に花芽を確認して不要枝を整理し、花後に強い剪定をするとしています。樹形を変える剪定は花が終わってから行います。",
    },
    {
      q: "冬に剪定すると花は咲かなくなりますか？",
      a: "札幌市博物館活動センターの解説では、花のつぼみは冬芽の中にあり、春に冬芽から出るとしています。冬は花芽を確かめ、花芽の付いた枝先を残して不要枝だけを整理してください。",
    },
    {
      q: "植えたばかりのライラックは剪定したほうがよいですか？",
      a: "山形県園芸試験場の報告では、幼木時は樹勢が弱いため、定植後2年間は放任し、3年目に弱枝を整理する程度にとどめて樹勢を強めることが重要としています。",
    },
    {
      q: "ライラックはどのくらいの大きさになりますか？",
      a: "札幌市博物館活動センターの解説では、高さ5メートルくらいになる木としています。",
    },
  ],
  related: [
    {
      href: "/kaboku-kaika-teire/",
      label: "花木の開花を良くする手入れ",
      desc: "花が咲かない原因と剪定の考え方",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "季節ごとの考え方と樹種の違い",
    },
    {
      href: "/kaboku-tsubomi-ochiru/",
      label: "花木のつぼみが落ちる原因",
      desc: "花が咲かない・つぼみが落ちるとき",
    },
    {
      href: "/robai-sentei/",
      label: "ロウバイの剪定",
      desc: "花芽を残す花木の剪定",
    },
  ],
};

export default function LilacSenteiPage() {
  return <KnowArticle data={data} />;
}
