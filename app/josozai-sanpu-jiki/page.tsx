import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/josozai-sanpu-jiki/";
const A = "text-[#2D7F3E] underline";
const CHIBA = "https://www.pref.chiba.lg.jp/annou/shokubo/documents/r8shishin020301.pdf";
const KAGOSHIMA = "https://www.pref.kagoshima.jp/ag04/sangyo-rodo/nogyo/gizyutu/kankyo/noyaku/documents/64868_20260312160159-1.pdf";
const IBARAKI = "https://www.pref.ibaraki.jp/nourinsuisan/hokunourin/kikaku/kikaku/documents/20180228keihan04.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "除草剤の散布時期｜土壌処理剤は雑草が生える前、茎葉処理剤は草丈が小さいうちに。雨の前後は避ける｜お庭のミカタ",
  },
  description:
    "除草剤をまく時期を、千葉県の雑草防除指針、鹿児島県の除草剤使用上の一般的注意事項、茨城県の除草剤の使い方の資料をもとにまとめました。土壌処理剤と茎葉処理剤の違い、ラベルの「使用時期」の読み方、天候の注意を整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "除草剤の散布時期",
    description:
      "除草剤は、雑草が生える前にまく土壌処理剤と、生えている雑草にかける茎葉処理剤で時期が違います。公的資料から散布時期の考え方を整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { type: string; method: string; when: string }[] = [
  {
    type: "土壌処理剤（例：DBN剤の粒剤）",
    method: "植栽地を除く樹木等の周辺地に全面土壌散布",
    when: "雑草発生前〜発生始期",
  },
  {
    type: "土壌処理と茎葉処理の両方に使える剤（例：DCMU剤の液剤）",
    method: "植栽地を除く樹木等の周辺地に雑草茎葉散布又は全面土壌散布",
    when: "雑草発生前〜生育初期（草丈20cm以下）",
  },
  {
    type: "茎葉処理剤（例：グルホシネート剤の液剤）",
    method: "植栽地を除く樹木等の周辺地に雑草茎葉散布",
    when: "雑草生育期（草丈30cm以下）",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">除草剤の種類</th>
          <th className="border px-2 py-2 text-left">使用方法</th>
          <th className="border px-2 py-2 text-left">使用時期</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.type}>
            <td className="border px-2 py-2">{r.type}</td>
            <td className="border px-2 py-2">{r.method}</td>
            <td className="border px-2 py-2">{r.when}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月24日に茨城県県北農林事務所の「水田畦畔，のり面管理における除草剤の効果的な使い方」（平成30年2月作成）を開き、表「除草剤の農薬登録適用内容（平成30年2月14日現在）」のうち、適用場所が「公園、庭園、堤とう、駐車場、道路、運動場、宅地、のり面、鉄道等」の樹木等の行から、使用方法と使用時期を当サイトで抜き出しました。商品名は省いています。登録内容は変わることがあるため、実際の使用時期は手元の製品のラベルで確認してください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "josozai-sanpu-jiki",
  published: "2026-11-24",
  updatedLabel: "2026年11月24日",
  h1: "除草剤の散布時期｜土壌処理剤は雑草が生える前、茎葉処理剤は草丈が小さいうちに。雨の前後は避ける",
  breadcrumbLabel: "除草剤の散布時期",
  tagChips: ["除草剤", "散布時期", "土壌処理剤", "茎葉処理剤", "雑草対策"],
  ldHeadline: "除草剤の散布時期｜土壌処理剤は雑草が生える前、茎葉処理剤は草丈が小さいうちに。雨の前後は避ける",
  ldDescription:
    "除草剤の散布時期を、土壌処理剤と茎葉処理剤の違いとともに、千葉県・鹿児島県・茨城県の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        除草剤をまく時期は、<Hl>雑草が生える前にまく「土壌処理剤」か、生えている雑草にかける「茎葉処理剤」か</Hl>で変わります。千葉県の雑草防除指針は、除草剤は雑草発生前に散布する土壌処理剤と生育中の雑草に散布する茎葉処理剤とに大別でき、「土壌処理剤は雑草が出芽してからでは効かないものが多い。茎葉処理剤でも、生育の進んだ雑草には効果が劣る」としています（出典：<a href={CHIBA} className={A} target="_blank" rel="noopener noreferrer">千葉県 雑草防除指針 畑地の除草（PDF）</a>、2026年11月24日確認）。
      </p>
      <p>
        本記事では、庭や駐車場などで除草剤を使うときの散布時期の考え方を、千葉県・鹿児島県・茨城県の資料から整理します。指針は主に農地向けのものですが、時期の考え方は庭で使う除草剤にも共通します。
      </p>
    </>
  ),
  conclusionTitle: "粒剤などの土壌処理剤は雑草が生える前から生え始めに、液剤などの茎葉処理剤は雑草が小さいうち（ラベルの草丈以下）にまきます。雨の直前・直後と風の強い日は避け、時期はラベルの「使用時期」で確かめます。",
  conclusionBody: (
    <>
      <p>
        鹿児島県の除草剤使用上の一般的注意事項は、「雑草発生前処理：雑草の芽が地上に出ないうちに処理する」「雑草生育期処理：雑草の芽が地上に出てから処理する」と定義し、使用時期・使用量は登録要件を厳守するとしています（出典：<a href={KAGOSHIMA} className={A} target="_blank" rel="noopener noreferrer">鹿児島県 除草剤使用上の一般的注意事項（PDF）</a>、同日確認）。宅地・庭園などを適用場所に含む除草剤の登録内容の例を並べると、次のとおりです（出典：<a href={IBARAKI} className={A} target="_blank" rel="noopener noreferrer">茨城県県北農林事務所 除草剤の効果的な使い方（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "除草剤の散布時期に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "土壌処理剤は、生える前にまく",
      desc: "千葉県の指針は、土壌処理剤は雑草が出芽してからでは効かないものが多いとしています。茨城県の資料の登録例でも、土壌散布の使用時期は「雑草発生前〜発生始期」です。",
    },
    {
      title: "茎葉処理剤は、雑草が小さいうちにかける",
      desc: "千葉県の指針は、茎葉処理剤でも生育の進んだ雑草には効果が劣るとしています。茨城県の資料の登録例では、茎葉散布の使用時期が「草丈30cm以下」のように草丈で示されています。",
    },
    {
      title: "時期はラベルの「使用時期」で決まる",
      desc: "鹿児島県の注意事項は、容器に表示されている使用基準（対象作物・対象雑草・使用時期・使用量・使用法等）を確認したうえで厳守するとしています。",
    },
    {
      title: "雨と風の日を避ける",
      desc: "鹿児島県の注意事項は、散布は可能な限り晴天・曇天の無風時を選び、大雨の直前や直後は使用しないとしています。千葉県の指針も、処理直後に大雨が予想される場合は散布を遅らせるか控えるとしています。",
    },
  ],
  stepsHeading: "除草剤をまく時期を決める4つの手順",
  stepsIntro: <p>千葉県の指針と鹿児島県の注意事項にもとづく流れです。</p>,
  steps: [
    {
      title: "手元の除草剤が土壌処理剤か茎葉処理剤かを確かめる",
      desc: "ラベルの使用方法が「全面土壌散布」なら土壌処理、「雑草茎葉散布」なら茎葉処理です。両方が書かれている除草剤もあります（茨城県の表）。",
    },
    {
      title: "ラベルの「使用時期」と雑草の状態を見比べる",
      desc: "「雑草発生前〜発生始期」なら芽が出る前から出始め、「草丈30cm以下」なら草がその高さを超える前にまきます。",
    },
    {
      title: "晴天か曇天の、風のない日を選ぶ",
      desc: "大雨の直前・直後は避けます（鹿児島県）。粒剤は、土が乾いていると効果が劣るとされています（千葉県）。",
    },
    {
      title: "まいたあとは、土の表面を崩さない",
      desc: "鹿児島県の注意事項は、土壌処理剤は散布後の土壌処理層を壊さないようにするとしています。",
    },
  ],
  ngHeading: "除草剤をまくときに避けたいこと",
  ngs: [
    {
      title: "大きく育った雑草に土壌処理剤だけをまくことは避けます",
      desc: "千葉県の指針は、土壌処理剤は雑草が出芽してからでは効かないものが多いとしています。",
    },
    {
      title: "雨の直前・直後の散布は避けます",
      desc: "鹿児島県の注意事項は、大雨の直前や直後は使用しないとしています。",
    },
    {
      title: "同じ除草剤を毎年続けて使うことは避けます",
      desc: "千葉県の指針は、同じ除草剤を毎年使うと特定の雑草が増えることになるとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>広い敷地、庭木や芝生のすぐそば、隣地や道路に面した場所</Hl>での除草剤の散布は、草刈りや防草の業者に相談してください。防草シートや砂利など、除草剤以外の方法とあわせて見積もりを取ると比べやすくなります。
    </p>,
    <p key="2">
      庭で除草剤を安全に使う方法は<Link href="/josozai-anzen/" className={A}>庭で除草剤を安全に使うには</Link>、方法の比べ方は<Link href="/zasso-taisaku/" className={A}>雑草対策の方法比較</Link>、地下茎で広がる草は<Link href="/dokudami-sugina-taisaku/" className={A}>ドクダミ・スギナなどしつこい雑草の対策</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "除草剤の散布や草刈りを業者に相談する",
  ctaText:
    "広い敷地や庭木の近くでの除草剤の散布は、業者に任せると安心です。草刈りや防草シートとあわせて相談できます。",
  faqHeading: "除草剤の散布時期でよくある質問",
  faqs: [
    {
      q: "除草剤は雑草が生える前と後、どちらにまけばよいですか？",
      a: "除草剤の種類によります。千葉県の指針は、土壌処理剤は雑草発生前に散布し、茎葉処理剤は生育中の雑草に散布するとしています。手元の製品のラベルの「使用方法」と「使用時期」で確かめてください。",
    },
    {
      q: "背の高くなった雑草に除草剤は効きますか？",
      a: "千葉県の指針は、茎葉処理剤でも生育の進んだ雑草には効果が劣るとしています。茨城県の資料の登録例でも、茎葉散布の使用時期は「草丈30cm以下」のように示されています。",
    },
    {
      q: "雨の前日に除草剤をまいてもよいですか？",
      a: "鹿児島県の注意事項は、大雨の直前や直後は使用しないとしています。千葉県の指針も、処理直後に大雨が予想される場合は散布を遅らせるか控えるとしています。",
    },
    {
      q: "粒の除草剤をまいたのに効きません。",
      a: "千葉県の指針は、土壌が乾燥していると効果が劣り、粒剤の場合は特に劣るとしています。土壌乾燥時は降雨を待つか、かん水後に処理するとしています。",
    },
  ],
  related: [
    {
      href: "/josozai-anzen/",
      label: "庭で除草剤を安全に使うには",
      desc: "登録の表示と近隣への配慮",
    },
    {
      href: "/zasso-taisaku/",
      label: "雑草対策の方法比較",
      desc: "手取り・除草剤・防草シート",
    },
    {
      href: "/dokudami-sugina-taisaku/",
      label: "ドクダミ・スギナの対策",
      desc: "地下茎で広がる草",
    },
    {
      href: "/shibafu-zasso/",
      label: "芝生に雑草が増える",
      desc: "芝生の中の雑草",
    },
    { href: "/5gatsu-zasso/", label: "5月の雑草", desc: "5月に目立つ雑草と草取り" },
  ],
};

export default function JosozaiSanpuJikiPage() {
  return <KnowArticle data={data} />;
}
