import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/ume-byoki/";
const A = "text-[#2D7F3E] underline";
const KAGAWA = "https://www.pref.kagawa.lg.jp/documents/56836/3-4-1_ume.pdf";
const MIYAGI_KURO = "https://www.pref.miyagi.jp/documents/8593/02_ume-kurohoshi.pdf";
const MIYAGI_HAI = "https://www.pref.miyagi.jp/documents/8593/03_ume-haihoshi.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "梅の病気｜黒星病・灰星病などの症状と、剪定・手入れでできる対策｜お庭のミカタ",
  },
  description:
    "庭の梅に出やすい病気（黒星病・灰星病・かいよう病・縮葉病など）の症状と、剪定・手入れでできる対策を、宮城県病害虫防除所の病害虫ライブラリーと香川県の病害虫防除指針（うめ）をもとにまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "梅の病気",
    description:
      "梅の黒星病・灰星病・かいよう病・縮葉病などの症状と、病気の枝を剪定で取り除く・通風をよくするといった手入れの対策を、県の資料で整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { name: string; sign: string; care: string; src: string }[] = [
  {
    name: "黒星病",
    sign: "果実に径1〜3mm程度の緑黒色の病斑、表面にすす状のかび。若い枝にややくぼんだ病斑",
    care: "枝の病斑はせん除する。古枝を整理し結果枝を更新する（宮城県）。罹病した枝をせん定時に切り取り処分する（香川県）",
    src: "宮城県・香川県",
  },
  {
    name: "灰星病",
    sign: "完熟した果実に水浸状の病斑が広がり、灰褐色粉粒状の塊。花ぐされ・葉ぐされ・枝枯れ",
    care: "夏季・冬季のせん定時に枯れ枝を除去する。罹病果実は持ち出して適切に処分する（宮城県）",
    src: "宮城県",
  },
  {
    name: "かいよう病",
    sign: "（香川県の指針に症状の記載はなし。宮城県は黒星病の病斑と似ると説明）",
    care: "適正な肥培管理（過剰施肥・肥料不足は発病を助長）、防風対策、罹病した枝はせん定時に除去し処分する（香川県）",
    src: "香川県",
  },
  {
    name: "縮葉病",
    sign: "（香川県の指針に症状の記載はなし）",
    care: "早期に罹病葉を摘み取り、土中に埋める（香川県）",
    src: "香川県",
  },
  {
    name: "環紋葉枯病・すす斑病",
    sign: "（香川県の指針に症状の記載はなし）",
    care: "園内の通風をよくする。すす斑病は通風・排水を良好にする（香川県）",
    src: "香川県",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">病気</th>
          <th className="border px-2 py-2 text-left">症状</th>
          <th className="border px-2 py-2 text-left">剪定・手入れでできる対策</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.name}>
            <td className="border px-2 py-2">{r.name}</td>
            <td className="border px-2 py-2">{r.sign}</td>
            <td className="border px-2 py-2">{r.care}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に宮城県病害虫防除所の病害虫ライブラリー（うめ 黒星病・灰星病）と、香川県の病害虫防除指針（うめ）を開き、病気ごとに薬剤以外の対策（防除のポイント）を当サイトで並べました。いずれも果樹としての梅の生産者向けの資料で、薬剤の一覧は掲載していません。薬剤を使う場合は、うめに登録のある農薬をラベルで確認してください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "ume-byoki",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "梅の病気｜黒星病・灰星病などの症状と、剪定・手入れでできる対策",
  breadcrumbLabel: "梅の病気",
  tagChips: ["梅", "病気", "黒星病", "灰星病", "剪定"],
  ldHeadline: "梅の病気｜黒星病・灰星病などの症状と、剪定・手入れでできる対策",
  ldDescription:
    "梅に出やすい病気の症状と、剪定・手入れでできる対策を、宮城県病害虫防除所と香川県の資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        梅の病気の多くは、<Hl>前の年に病気になった枝や落ちた実が翌春の伝染源</Hl>になります。宮城県病害虫防除所は、黒星病の菌は枝の病斑の組織内部で菌糸のまま越冬し、翌春の伝染源になるとしています（出典：<a href={MIYAGI_KURO} className={A} target="_blank" rel="noopener noreferrer">宮城県病害虫防除所「病害虫ライブラリー うめ 黒星病」（PDF）</a>、2026年11月23日確認）。
      </p>
      <p>
        そのため、<Hl>剪定のときに病気の枝・枯れ枝を切り取って処分する</Hl>ことが、どの資料にも共通する対策です。本記事では、庭の梅に出やすい病気の症状と、剪定・手入れでできる対策を整理します。
      </p>
    </>
  ),
  conclusionTitle: "実に黒い小さな斑点が出たら黒星病、熟した実が灰色の粉をふいて腐ったら灰星病が疑われます。どちらも、冬の剪定で病気の枝・枯れ枝を取り除き、落ちた実を片付けることが対策の基本です。",
  conclusionBody: (
    <>
      <p>
        香川県の病害虫防除指針（うめ）は、病害ごとに薬剤以外の「防除のポイント」を示しています（出典：<a href={KAGAWA} className={A} target="_blank" rel="noopener noreferrer">香川県「病害虫防除指針（うめ）」（PDF）</a>、2026年11月23日確認）。宮城県の病害虫ライブラリーの記載とあわせて並べると、次のとおりです（灰星病は<a href={MIYAGI_HAI} className={A} target="_blank" rel="noopener noreferrer">宮城県病害虫防除所「病害虫ライブラリー うめ 灰星病」（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "梅の病気に関する4つの基本",
  basicsIntro: <p>以下は、宮城県と香川県の資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "黒星病は実と若い枝に出る",
      desc: "宮城県は、主に果実と枝に発生し、葉での発生はごく少なく問題とならないとしています。果実に発病が認められるのは5月上中旬以降です。",
    },
    {
      title: "黒星病とかいよう病は似ている",
      desc: "宮城県は、黒星病はかいよう病の病斑にも似ているが、病変部が果肉まで及ばないので区別できるとしています。",
    },
    {
      title: "雨の多い年・老木で出やすい",
      desc: "宮城県は、黒星病は春先の気温が高い年、落花後から5月にかけて雨の多い年に多く、若木よりも老木で多いとしています。灰星病は開花始期〜落花期に雨が続くと多いとしています。",
    },
    {
      title: "灰星病は収穫が遅れると多い",
      desc: "宮城県は、灰星病は収穫が遅れ完熟したときに多発し、果肉が軟化腐敗するとしています。",
    },
  ],
  stepsHeading: "庭の梅の病気を減らす4つの手順",
  stepsIntro: <p>宮城県と香川県の資料の防除方法のうち、薬剤を使わない手入れにもとづく流れです。</p>,
  steps: [
    {
      title: "冬の剪定で、病斑のある枝・枯れ枝を切る",
      desc: "宮城県は黒星病の枝病斑のせん除と、灰星病の夏季・冬季せん定時の枯れ枝除去を挙げています。香川県も黒星病・かいよう病の罹病枝をせん定時に切り取り処分するとしています。",
    },
    {
      title: "古い枝を整理して若い枝に更新する",
      desc: "宮城県は、黒星病は若木よりも老木で発病が多いため、古枝を整理し、結果枝の更新を図るとしています。",
    },
    {
      title: "落ちた実・病気の実を片付ける",
      desc: "宮城県は、灰星病の罹病果実はほ場外へ持ち出し、土中に埋設するなど適切に処分するとしています。被害落果は翌年の伝染源になります。",
    },
    {
      title: "風通しと肥料の量を見直す",
      desc: "香川県は、環紋葉枯病・すす斑病で通風をよくすること、かいよう病で過剰施肥や肥料不足を避けることと防風対策を挙げています。",
    },
  ],
  ngHeading: "梅の病気の手当てで避けたいこと",
  ngs: [
    {
      title: "病気の枝を切って庭に置いておくことは避けます",
      desc: "香川県は罹病した枝を切り取り「処分する」としています。宮城県は、前年の被害枝病斑や落果が翌春の伝染源になるとしています。",
    },
    {
      title: "完熟した実をいつまでも木に残すことは避けます",
      desc: "宮城県は、灰星病は収穫が遅れ完熟したときに多発するとしています。",
    },
    {
      title: "登録を確かめずに薬剤を使うことは避けます",
      desc: "香川県の指針は、農薬の使用方法や注意事項はラベルで確認するとしています。実を食べる梅では、うめに登録があるか、使用時期・回数を必ず確かめます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>病気の枝が多く樹全体の剪定が必要、木が高く上の枝に手が届かない、毎年同じ病気が出る</Hl>といった場合は、剪定や消毒に対応する業者に相談すると作業がまとまります。依頼するときは、症状が出た場所（実・枝・葉）と時期、実を食べるかどうかを伝えてください。
    </p>,
    <p key="2">
      梅の剪定時期と切り方は<Link href="/ume-sentei/" className={A}>梅の剪定</Link>、庭木の病害虫全般は<Link href="/niwaki-byogaichu/" className={A}>庭木の病害虫</Link>、消毒を業者に頼むかどうかは<Link href="/niwaki-shodoku-gyosha-handan/" className={A}>庭木の消毒を業者に頼む判断</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "症状の出た場所と時期を伝えて相談する",
  ctaText:
    "梅の病気は、前の年の枝や実から広がるものが多くあります。病気の枝が多い場合や木が高い場合は、剪定とあわせて業者と相談すると安心です。",
  faqHeading: "梅の病気のよくある質問",
  faqs: [
    {
      q: "梅の実に黒い斑点が出ました。何の病気ですか？",
      a: "宮城県病害虫防除所は、黒星病の果実の病斑を一般に緑黒色、径1〜3mm程度で、表面に緑黒色すす状のかびを生ずるとしています。かいよう病にも似ていますが、黒星病は病変部が果肉まで及ばないので区別できるとしています。",
    },
    {
      q: "梅の実が灰色の粉をふいて腐りました。",
      a: "宮城県病害虫防除所は、灰星病は完熟した果実に水浸状の病斑が広がり、表面に灰褐色粉粒状の塊が密生し、果肉が軟化腐敗するとしています。罹病果実は持ち出して処分します。",
    },
    {
      q: "梅の病気を防ぐには、いつ何をすればよいですか？",
      a: "冬の剪定で病斑のある枝・枯れ枝を切って処分することが、宮城県・香川県の資料に共通する対策です。宮城県は、黒星病の果実への感染は春先に雨で胞子が運ばれて起こるとしています。",
    },
    {
      q: "梅の葉が縮れています。",
      a: "香川県の防除指針は、うめの縮葉病の防除のポイントとして、早期に罹病葉を摘み取り、土中に埋めるとしています。",
    },
  ],
  related: [
    {
      href: "/ume-gaichu/",
      label: "梅の木の害虫",
      desc: "カイガラムシ・コスカシバなど",
    },
    {
      href: "/ume-sentei/",
      label: "梅の剪定",
      desc: "時期と切り方",
    },
    {
      href: "/niwaki-byogaichu/",
      label: "庭木の病害虫",
      desc: "よく出る病気と虫",
    },
    {
      href: "/sakura-byoki/",
      label: "桜の病気",
      desc: "同じバラ科の花木の病気",
    },
    {
      href: "/kaju-niwaki-teire/",
      label: "果樹の庭木の手入れ",
      desc: "実のなる木の管理",
    },
  ],
};

export default function UmeByokiPage() {
  return <KnowArticle data={data} />;
}
