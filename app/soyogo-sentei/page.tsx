import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/soyogo-sentei/";
const A = "text-[#2D7F3E] underline";
const TAFF = "https://www.tokyo-aff.or.jp/uploaded/life/85642_1066462_misc.pdf";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const SETAGAYA_KANRI = "https://www.city.setagaya.lg.jp/documents/4728/29589_5.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ソヨゴの剪定は弱めでよい｜伸びすぎた枝と内向きの枝を抜く・試験での樹形の違い｜お庭のミカタ",
  },
  description:
    "ソヨゴの剪定方法を、東京都農林総合研究センターの剪定試験（2020年3月〜2023年12月）のマニュアルと世田谷区の植栽ガイドブックをもとにまとめました。成長が緩やかなため強く切る必要はなく、伸びすぎた枝や内向きの枝を取り除く程度で樹形を保てます。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ソヨゴの剪定は弱めでよい",
    description:
      "ソヨゴの剪定の強さ、切る枝、手入れの時期を、東京都の剪定試験と世田谷区の資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { level: string; content: string; apr: string; dec: string; diff: string }[] = [
  { level: "無剪定", content: "ひこばえの除去のみ", apr: "167cm", dec: "197cm", diff: "+30cm" },
  { level: "弱剪定（推奨）", content: "徒長枝などの不要枝を除き、樹冠から飛び出た枝を切り詰める", apr: "125cm", dec: "140cm", diff: "+15cm" },
  { level: "中剪定（推奨）", content: "横枝を切り詰め、立ち上がった枝や内向きの枝を半分程度切り取る", apr: "119cm", dec: "142cm", diff: "+23cm" },
  { level: "強剪定", content: "横枝を強く切り詰め、立ち上がった枝や内向きの枝をさらに切り取る", apr: "104cm", dec: "117cm", diff: "+13cm" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">剪定の強さ</th>
          <th className="border px-2 py-2 text-left">剪定の内容（マニュアルの表）</th>
          <th className="border px-2 py-2 text-left">枝張り 2023年4月（剪定直後）</th>
          <th className="border px-2 py-2 text-left">枝張り 2023年12月（枝伸長後）</th>
          <th className="border px-2 py-2 text-left">差（当サイト計算）</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.level}>
            <td className="border px-2 py-2">{r.level}</td>
            <td className="border px-2 py-2">{r.content}</td>
            <td className="border px-2 py-2">{r.apr}</td>
            <td className="border px-2 py-2">{r.dec}</td>
            <td className="border px-2 py-2">{r.diff}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      枝張りの値は、東京都農林水産振興財団・東京都農林総合研究センター緑化森林科「新しい街路樹用中高木 剪定マニュアル」（2025年3月）p.13 の写真に記載された寸法を2026年11月21日に読み取り、差を当サイトで計算したものです。対象は品種「ハラシマ」で、立川市内の圃場で栽培した1本ずつの記録です。庭の環境や株の大きさが異なれば、伸び方も変わります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "soyogo-sentei",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "ソヨゴの剪定は弱めでよい｜伸びすぎた枝と内向きの枝を抜く・試験での樹形の違い",
  breadcrumbLabel: "ソヨゴの剪定",
  tagChips: ["ソヨゴ", "シンボルツリー", "常緑樹", "剪定", "赤い実"],
  ldHeadline: "ソヨゴの剪定は弱めでよい｜伸びすぎた枝と内向きの枝を抜く・試験での樹形の違い",
  ldDescription:
    "ソヨゴの剪定の強さと切る枝、手入れの時期を、東京都農林総合研究センターの剪定試験のマニュアルと世田谷区の植栽ガイドブックをもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ソヨゴは、<Hl>強く切らなくても形が整いやすい木</Hl>です。東京都農林水産振興財団と東京都農林総合研究センター緑化森林科がまとめた「新しい街路樹用中高木 剪定マニュアル」は、ソヨゴ（品種「ハラシマ」）について、<Hl>成長は比較的緩慢なため強く剪定を行う必要はない</Hl>とし、徒長枝のような樹形を乱す枝や変な方向の枝を根元から取り除き、樹冠からはみ出している枝を切り詰める程度で良いとしています（出典：<a href={TAFF} className={A} target="_blank" rel="noopener noreferrer">東京都農林水産振興財団「新しい街路樹用中高木 剪定マニュアル」（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        このマニュアルは、2020年3月から2023年12月まで剪定の強さを変えて管理した試験の結果をまとめたものです。本記事では、マニュアルの記載と、世田谷区の植栽ガイドブックにある樹木一覧（手入れの時期）と維持管理の章を照合し、庭のソヨゴの剪定を整理します（出典：<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>・<a href={SETAGAYA_KANRI} className={A} target="_blank" rel="noopener noreferrer">同 維持・管理（PDF）</a>、2026年11月21日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ソヨゴは伸びすぎた枝と内向きの枝を抜く程度の弱い剪定で十分です。試験では、弱い剪定でも枝張りを無剪定より小さく保てていました。",
  conclusionBody: (
    <>
      <p>
        マニュアルが推奨する剪定の強さは<Hl>弱剪定と中剪定</Hl>です。毎年剪定を行う場合は、長く伸びすぎた枝を切り詰めたり、変な方向の枝を切り取ったりする程度で良好な樹形を維持できるとしています。マニュアルの写真に記載された枝張りの寸法を当サイトで並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ソヨゴの剪定に関する4つの基本",
  basicsIntro: (
    <p>
      以下は、東京都のマニュアルと世田谷区の植栽ガイドブックに書かれている内容を整理したものです。マニュアルは街路樹の管理者向けの資料ですが、成長特性と剪定の考え方は庭木にも参考になります。
    </p>
  ),
  basicsLabel: "基本",
  basics: [
    {
      title: "成長は緩やかで、幹が1本まっすぐ伸びる",
      desc: "東京都のマニュアルでは、幹が1本まっすぐ伸び、枝の伸長が緩やかで細身な樹形に仕立てやすいとしています。最終樹高（推定）は6〜8mです。",
    },
    {
      title: "推奨は弱剪定・中剪定",
      desc: "マニュアルでは、強く剪定する必要はなく、弱剪定か中剪定を推奨しています。上の表のとおり、強剪定は枝張りが最も小さくなりましたが、推奨には含まれていません。",
    },
    {
      title: "赤い実がなるのは雌株",
      desc: "世田谷区の植栽ガイドブックの樹木一覧では、ソヨゴは雌雄異株で、実は球形紅色、鑑賞時期は実の10〜11月としています。実を楽しみたい場合は、雌株かどうかを確かめます。",
    },
    {
      title: "手入れの時期は6月中旬〜7月上旬と10月",
      desc: "世田谷区の樹木一覧では、ソヨゴの手入時期を6月中旬〜7月上旬と10月としています。同じガイドブックの維持管理の章は、一般的な常緑樹は冬に大量の枝葉を切ると寒さで弱るため、少し暖かくなりかけた3〜4月頃に剪定するとしています。",
    },
  ],
  stepsHeading: "庭のソヨゴを剪定する4つの手順",
  stepsIntro: (
    <p>
      強く切り詰める必要はないため、不要な枝を減らす作業が中心です。
    </p>
  ),
  steps: [
    {
      title: "枯れた枝、折れた枝を先に取り除く",
      desc: "世田谷区の植栽ガイドブックでは、最初に除去する枝は枯れ枝・折れ枝・病気の枝としています。",
    },
    {
      title: "内側に向かって伸びる枝を根元から切る",
      desc: "東京都のマニュアルでは、木の内側に向かって伸びている枝は樹形を乱すので根元から切り取るとしています。",
    },
    {
      title: "樹冠からはみ出した枝を切り詰める",
      desc: "長く伸びすぎた枝は、樹冠の外形に合わせて切り詰めます。マニュアルの留意点では、太い枝をぶつ切りにせず、必ず細い枝との枝分かれ部分で切るとしています。",
    },
    {
      title: "毎年少しずつ続ける",
      desc: "マニュアルの試験は毎年剪定を行ったもので、隔年で剪定する場合は推奨より強めに剪定する必要が生じると考えられるとしています。毎年軽く手を入れるほうが、強く切らずに済みます。",
    },
  ],
  ngHeading: "ソヨゴの剪定で避けたいこと",
  ngs: [
    {
      title: "太い枝の途中で切ることは避けます",
      desc: "東京都のマニュアルでは、切り詰めた枝に葉も枝分かれもなく一本棒になってしまう例を悪い例として示しています。細い枝との枝分かれ部分で切ります。",
    },
    {
      title: "数年放置してから一度に強く切ることは避けます",
      desc: "成長が緩やかな木ですが、剪定の間隔が空くと、推奨より強い剪定が必要になります。毎年の軽い剪定で大きさを保ちます。",
    },
    {
      title: "冬に枝葉を大量に切ることは避けます",
      desc: "世田谷区の植栽ガイドブックでは、常緑樹は冬でもわずかに活動しており、冬に大量の枝葉を切ると寒さで樹木が弱ってしまうとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>高さが2階に届く、脚立に乗らないと上の枝に手が届かない、長年切っておらず枝が混み合っている</Hl>といった場合は、業者に相談すると安全です。ソヨゴは強く切る必要がない木なので、依頼するときは「伸びすぎた枝と内向きの枝を抜く程度に」と剪定の強さを伝えておくと、仕上がりの食い違いを避けられます。
    </p>,
    <p key="2">
      シンボルツリー全体の手入れの考え方は<Link href="/symboltree-teire/" className={A}>シンボルツリーの手入れ</Link>、剪定の時期の基本は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ソヨゴの軽い剪定を相談する",
  ctaText:
    "ソヨゴは伸びすぎた枝と内向きの枝を抜く程度の剪定で形を保てます。高い位置の枝は無理をせず、業者に相談すると安心です。",
  faqHeading: "ソヨゴの剪定のよくある質問",
  faqs: [
    {
      q: "ソヨゴは毎年剪定が必要ですか？",
      a: "東京都のマニュアルの試験は毎年剪定を行ったもので、弱い剪定でも樹形が乱れたり樹冠が大きくなりすぎたりしなかったとしています。隔年で剪定する場合は、推奨より強めの剪定が必要になると考えられるとしています。",
    },
    {
      q: "ソヨゴを強く切り詰めても大丈夫ですか？",
      a: "マニュアルでは、成長が比較的緩慢なため強く剪定する必要はないとし、推奨を弱剪定・中剪定としています。強く切る場合でも、太い枝をぶつ切りにせず、細い枝との枝分かれ部分で切るとしています。",
    },
    {
      q: "ソヨゴに実がならないのはなぜですか？",
      a: "世田谷区の植栽ガイドブックの樹木一覧では、ソヨゴは雌雄異株としています。赤い実がなるのは雌株のため、雄株では実はなりません。",
    },
    {
      q: "ソヨゴにつきやすい害虫はありますか？",
      a: "東京都のマニュアルでは、ソヨゴ「ハラシマ」の病害虫としてルビーロウカイガラムシを挙げています。カイガラムシの見分け方と対処は、カイガラムシ・アブラムシの記事をご覧ください。",
    },
  ],
  related: [
    {
      href: "/symboltree-teire/",
      label: "シンボルツリーの手入れ",
      desc: "樹種ごとの育ち方と剪定の頻度",
    },
    {
      href: "/kashi-teire/",
      label: "カシの手入れ",
      desc: "常緑樹の剪定の考え方",
    },
    {
      href: "/kaigaramushi-aburamushi/",
      label: "カイガラムシ・アブラムシ",
      desc: "庭木につく害虫の見分け方",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "季節ごとの考え方と樹種の違い",
    },
  ],
};

export default function SoyogoSenteiPage() {
  return <KnowArticle data={data} />;
}
