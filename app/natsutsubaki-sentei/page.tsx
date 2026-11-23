import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/natsutsubaki-sentei/";
const A = "text-[#2D7F3E] underline";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";
const HOKUDAI = "https://hosho.ees.hokudai.ac.jp/tsuyu/top/plt/tea/stewartia/pse.html";

export const metadata: Metadata = {
  title: {
    absolute: "シャラの木（ナツツバキ）の剪定｜梅雨の終わりまでに枝元から間引く。秋は10〜11月に形を整える｜お庭のミカタ",
  },
  description:
    "シャラの木（ナツツバキ）の剪定の時期と切り方を、大和市の園芸相談の事例、熊本市の樹木管理ガイドライン、福岡県の花木の病害虫資料をもとにまとめました。花芽ができる時期と、放置すると約10mになる点も整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "シャラの木（ナツツバキ）の剪定",
    description:
      "ナツツバキは梅雨末期までに剪定し、残した短い枝に夏の間に花芽をつけさせます。秋の10〜11月は全体のバランスを整える程度にします。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  {
    src: "大和市 園芸相談の事例《庭木》",
    item: "剪定の時期",
    note: "梅雨末期まで。残された短い枝に夏の間に花芽ができる。秋の剪定は10〜11月で、全体のバランスを整える",
  },
  {
    src: "大和市 園芸相談の事例《庭木》",
    item: "切り方",
    note: "込み過ぎていれば枝元から間引く。伸びすぎていれば1/3か2/3を剪定する。枝先が軟らかい時期は少し硬くなるのを待つ",
  },
  {
    src: "大和市 園芸相談の事例《庭木》",
    item: "大きさ",
    note: "そのままだと10mくらいになるので、毎年整枝か剪定をして大きさを調整する",
  },
  {
    src: "熊本市 公共施設樹木の維持管理ガイドライン",
    item: "基本樹形",
    note: "ナツツバキは「卵、球、楕円形」と「盃、扇形」の両方の欄に挙げられている",
  },
  {
    src: "福岡県【花き花木】病害虫・雑草の発生生態と防除",
    item: "注意する害虫",
    note: "チャドクガはチャやナツツバキも加害する。幼虫は5〜6月と8〜9月。成虫・幼虫・マユ・卵塊とも毒刺毛を持つ",
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
      2026年11月24日に大和市の園芸相談の事例《庭木》（PDF）、熊本市の公共施設樹木の維持管理ガイドライン（公共施設の樹木などの基本樹形）、福岡県の花き花木の病害虫資料（ツバキ・サザンカの害虫）を開き、ナツツバキの記載を当サイトで項目ごとに並べました。大和市の回答は鉢植え2年目の株についての相談への回答です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "natsutsubaki-sentei",
  published: "2026-11-24",
  updatedLabel: "2026年11月24日",
  h1: "シャラの木（ナツツバキ）の剪定｜梅雨の終わりまでに枝元から間引く。秋は10〜11月に形を整える",
  breadcrumbLabel: "シャラの木（ナツツバキ）の剪定",
  tagChips: ["ナツツバキ", "シャラノキ", "落葉樹", "花木", "花芽"],
  ldHeadline: "シャラの木（ナツツバキ）の剪定｜梅雨の終わりまでに枝元から間引く。秋は10〜11月に形を整える",
  ldDescription:
    "シャラの木（ナツツバキ）の剪定の時期と方法を、大和市・熊本市・福岡県の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        シャラの木（ナツツバキ）の剪定は、<Hl>花が終わった後、梅雨の終わりまでに、込み合った枝を枝元から間引く</Hl>のが基本です。大和市が公開している園芸相談の事例では、ナツツバキの剪定について「剪定の時期は梅雨末期まで。残された短い枝に夏の間に花芽ができる」と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月24日確認）。
      </p>
      <p>
        「シャラノキ」は、ナツツバキの別名として使われている呼び方です（北海道大学のサイトの植物解説ページに「Syaranoki（シャラノキ、娑羅樹）」として掲載。<a href={HOKUDAI} className={A} target="_blank" rel="noopener noreferrer">Stewartia pseudocamellia</a>、同日確認）。本記事では、庭のナツツバキを剪定するときの時期と切り方を、自治体の資料から整理します。
      </p>
    </>
  ),
  conclusionTitle: "ナツツバキは梅雨末期までに、込み合った枝を枝元から間引きます。夏以降に枝先を切ると翌年の花芽を落とすため、秋（10〜11月）は全体のバランスを整える程度にします。",
  conclusionBody: (
    <>
      <p>
        大和市の回答では、秋の剪定は10〜11月に全体のバランスを整えるもの、とされています。また、別の相談への回答で、ナツツバキは「そのままだと10mくらいになってしまうので、毎年整枝か剪定して木の大きさを調整する」としています。各資料の記載を並べると、次のとおりです（熊本市は<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">公共施設樹木の維持管理ガイドライン（PDF）</a>、福岡県は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">【花き花木】病害虫・雑草の発生生態と防除（PDF）</a>、いずれも同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ナツツバキの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は梅雨末期までに済ませる",
      desc: "大和市の回答では、剪定の時期は梅雨末期までとしています。残した短い枝に夏の間に花芽ができるため、それより後に枝先を切ると、翌年の花が減ります。",
    },
    {
      title: "伸びたばかりの軟らかい枝は少し待つ",
      desc: "同じ回答では、枝が伸びる時期は枝先がまだ軟らかいので、少し硬くなるのを待って剪定するとしています。",
    },
    {
      title: "込み合った枝は枝元から間引く",
      desc: "込み過ぎている場合は枝元から間引き、伸びすぎている場合は1/3か2/3を剪定し、全体のバランスを考えて切ります（大和市）。",
    },
    {
      title: "放置すると高さ10mほどになる",
      desc: "大和市の回答では、ナツツバキはそのままだと10mくらいになるとしています。庭で育てる場合は、毎年の整枝・剪定で大きさを保ちます。",
    },
  ],
  stepsHeading: "ナツツバキを剪定する4つの手順",
  stepsIntro: <p>大和市の園芸相談の回答と、熊本市・福岡県の資料の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "花後〜梅雨末期の作業日を決める",
      desc: "ナツツバキの花は初夏に咲きます。花が終わってから梅雨末期までの間に、主な剪定を済ませます。",
    },
    {
      title: "チャドクガの卵塊・幼虫がないか確かめる",
      desc: "福岡県の資料は、チャドクガがナツツバキも加害し、幼虫は5〜6月と8〜9月に見られ、成虫・幼虫・マユ・卵塊とも毒刺毛を持つとしています。作業前に葉裏を確かめ、手袋・長袖で作業します。",
    },
    {
      title: "込み合った枝・伸びすぎた枝を切る",
      desc: "込み合った部分は枝元から間引き、伸びすぎた枝は1/3〜2/3を切り戻します。熊本市のガイドラインはナツツバキの基本樹形を「卵、球、楕円形」「盃、扇形」としており、自然な樹形を残す切り方が基本です。",
    },
    {
      title: "秋は10〜11月に全体の形を見直す",
      desc: "大和市の回答では、秋の剪定は10〜11月に全体のバランスを整えるものとしています。夏の間にできた花芽を落とさないよう、強く切り詰めないようにします。",
    },
  ],
  ngHeading: "ナツツバキの剪定で避けたいこと",
  ngs: [
    {
      title: "夏以降に枝先を一律に切りそろえることは避けます",
      desc: "大和市の回答では、梅雨末期までに剪定して残した短い枝に、夏の間に花芽ができるとしています。夏以降に枝先を切ると、その花芽も落とします。",
    },
    {
      title: "チャドクガのついた枝を素手で扱うことはしません",
      desc: "福岡県の資料は、チャドクガは成虫・幼虫・マユ・卵塊とも毒刺毛を持つとし、防除法として卵塊のある葉や群生幼虫を除去するとしています。",
    },
    {
      title: "何年も放置してから一度に小さくすることは避けます",
      desc: "大和市の回答では、そのままだと10mくらいになるため、毎年整枝か剪定して大きさを調整するとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>脚立の天板付近に立たないと届かない高さになった株、チャドクガが広がっている株</Hl>は、剪定業者に相談してください。依頼するときは、花を残したいこと、梅雨末期までに作業したいことを伝えると、時期のずれによる花芽の切り落としを避けやすくなります。
    </p>,
    <p key="2">
      樹皮のはがれが気になる場合は<Link href="/niwaki-juhi-hagare/" className={A}>庭木の樹皮がはがれる</Link>、チャドクガが出やすいツバキ類の手入れは<Link href="/tsubaki-sazanka-teire/" className={A}>ツバキ・サザンカの手入れ</Link>、脚立を使うときの注意は<Link href="/sentei-kyatatsu/" className={A}>剪定で脚立を使うときの注意</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "高くなったナツツバキの剪定を業者に相談する",
  ctaText:
    "ナツツバキは放置すると10mほどになる木です。脚立で届かない高さになったら、花芽の時期を伝えて業者に任せると安心です。",
  faqHeading: "シャラの木（ナツツバキ）の剪定でよくある質問",
  faqs: [
    {
      q: "ナツツバキの剪定はいつ行えばよいですか？",
      a: "大和市の園芸相談の回答では、剪定の時期は梅雨末期までとし、残された短い枝に夏の間に花芽ができるとしています。秋は10〜11月に全体のバランスを整える程度です。",
    },
    {
      q: "シャラの木とナツツバキは同じ木ですか？",
      a: "シャラノキはナツツバキの別名として使われている呼び方です。北海道大学のサイトの植物解説ページでは、ナツツバキの名前の一つとして「Syaranoki（シャラノキ、娑羅樹）」を挙げています。",
    },
    {
      q: "ナツツバキはどのくらいの高さになりますか？",
      a: "大和市の回答では、そのままだと10mくらいになるとしています。毎年整枝か剪定をして木の大きさを調整します。",
    },
    {
      q: "ナツツバキにつく害虫で注意するものはありますか？",
      a: "福岡県の資料は、チャドクガがチャやナツツバキも加害するとしています。幼虫は5〜6月と8〜9月に見られ、成虫・幼虫・マユ・卵塊とも毒刺毛を持ちます。",
    },
  ],
  related: [
    {
      href: "/niwaki-juhi-hagare/",
      label: "庭木の樹皮がはがれる",
      desc: "ナツツバキの樹皮の性質",
    },
    {
      href: "/tsubaki-sazanka-teire/",
      label: "ツバキ・サザンカの手入れ",
      desc: "チャドクガへの注意",
    },
    {
      href: "/sentei-jiki/",
      label: "剪定の時期",
      desc: "庭木ごとの考え方",
    },
    {
      href: "/sentei-kyatatsu/",
      label: "剪定で脚立を使うときの注意",
      desc: "高い枝を切るとき",
    },
  ],
};

export default function NatsutsubakiSenteiPage() {
  return <KnowArticle data={data} />;
}
