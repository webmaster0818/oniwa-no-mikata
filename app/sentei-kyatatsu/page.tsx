import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/sentei-kyatatsu/";
const A = "text-[#2D7F3E] underline";
const KOKUSEN_2026 = "https://www.kokusen.go.jp/mimamori/mj_mailmag/mj-shinsen553.html";
const KOKUSEN_2019 = "https://www.kokusen.go.jp/news/data/n-20190328_2.html";
const NITE = "https://www.nite.go.jp/data/000139707.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "剪定で脚立を使うときの注意｜天板から2段以上下に立つ・止め具を固定し平らな地面に置く・一人で作業しない｜お庭のミカタ",
  },
  description:
    "庭木の剪定で脚立を使うときの注意点を、国民生活センターの注意喚起（2026年10月）と事故の集計、製品評価技術基盤機構（NITE）の報告書をもとにまとめました。転落事故の数字と、天板に乗らない理由も整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "剪定で脚立を使うときの注意",
    description:
      "脚立は天板から2段以上下で作業し、止め具を固定して固く平坦な地盤に置く。庭木の手入れ中の転落事故の事例と数字を、公的機関の資料から整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; fig: string; note: string }[] = [
  {
    src: "国民生活センター（2019年3月公表）",
    fig: "20歳以上の脚立・はしごの事故458件のうち転落433件",
    note: "転落433件のうち60〜70歳代が236件。約半数の206件が入院、3件が死亡。事故の約8割は屋外",
  },
  {
    src: "製品評価技術基盤機構（NITE・令和4年8月）",
    fig: "脚立の高齢者事故75件",
    note: "転落のきっかけは、無理な体勢66件、製品の破損9件",
  },
  {
    src: "国民生活センター 見守り新鮮情報 第553号（2026年10月8日）",
    fig: "事例：70歳代",
    note: "庭木の剪定中に脚立の上でバランスを崩して転落し、肋骨・脊椎・上腕骨の骨折などで入院",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">件数・事例</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.fig}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月24日に国民生活センターの2つのページと、NITE「はしご・脚立の事故防止対策報告書」（PDF）を開き、件数と事例を当サイトで並べました。集計の期間・対象は資料ごとに異なるため、数字どうしを足し合わせることはできません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "sentei-kyatatsu",
  published: "2026-11-24",
  updatedLabel: "2026年11月24日",
  h1: "剪定で脚立を使うときの注意｜天板から2段以上下に立つ・止め具を固定し平らな地面に置く・一人で作業しない",
  breadcrumbLabel: "剪定で脚立を使うときの注意",
  tagChips: ["脚立", "剪定", "転落事故", "高所作業", "安全"],
  ldHeadline: "剪定で脚立を使うときの注意｜天板から2段以上下に立つ・止め具を固定し平らな地面に置く・一人で作業しない",
  ldDescription:
    "庭木の剪定で脚立を使うときの注意点を、国民生活センターとNITEの資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        剪定で脚立を使うときは、<Hl>止め具を確実に固定して固く平坦な地面に置き、天板から2段以上下の踏ざんに立って作業する</Hl>のが基本です。国民生活センターは2026年10月8日の見守り新鮮情報で、脚立やはしごからの転落事故は「特に庭木の手入れ中の事故が目立ち」としています（出典：<a href={KOKUSEN_2026} className={A} target="_blank" rel="noopener noreferrer">国民生活センター 見守り新鮮情報 第553号</a>、2026年11月24日確認）。
      </p>
      <p>
        同じ注意喚起では、一人きりの作業を避けること、安定性補助器具が付いた脚立を使うこと、ヘルメット・動きやすい服装・滑りにくい靴で作業することも挙げています。本記事では、庭木の剪定で脚立を使う前に知っておきたい事故の数字と、使い方の注意を公的機関の資料から整理します。
      </p>
    </>
  ),
  conclusionTitle: "脚立は止め具を固定して平らで固い地面に置き、天板から2段以上下に立ちます。天板に乗る・座る・またぐことはしません。届かない高さは業者に任せます。",
  conclusionBody: (
    <>
      <p>
        製品評価技術基盤機構（NITE）の報告書は、上枠付き脚立・足場台脚立・踏み台を除き、脚立の天板に乗る、天板に座る、天板をまたぐことは禁止行為であり、取扱説明書や本体表示にもその旨が記載されているとしています（出典：<a href={NITE} className={A} target="_blank" rel="noopener noreferrer">NITE「はしご・脚立の事故防止対策報告書」（PDF）</a>、2026年11月24日確認）。事故の件数と事例を並べると、次のとおりです（2019年の集計は<a href={KOKUSEN_2019} className={A} target="_blank" rel="noopener noreferrer">国民生活センター「思わぬ大けがに！高齢者の脚立・はしごからの転落」</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "剪定で脚立を使うときの4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "天板から2段以上下の踏ざんに立つ",
      desc: "国民生活センターは、脚立は作業用の用具であり、天板から2段以上下の踏ざんに立って作業するよう呼びかけています。",
    },
    {
      title: "天板に乗る・座る・またぐのは禁止",
      desc: "NITEの報告書は、上枠付き脚立・足場台脚立・踏み台を除く脚立で、天板に乗る・座る・またぐことは禁止行為としています。",
    },
    {
      title: "はしごの上では作業しない",
      desc: "国民生活センターは、はしごは高所へ移動するための用具なので、はしご上で作業しないよう呼びかけています。剪定ばさみを使う作業は脚立で行います。",
    },
    {
      title: "転落のきっかけの多くは無理な体勢",
      desc: "NITEが抽出した脚立の高齢者事故75件では、転落のきっかけは無理な体勢が66件、製品の破損が9件でした。枝に手を伸ばして体を乗り出す動きが事故につながります。",
    },
  ],
  stepsHeading: "脚立で庭木を剪定する4つの手順",
  stepsIntro: <p>国民生活センターの注意喚起とNITEの報告書の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "本体表示と取扱説明書で、使い方を確かめる",
      desc: "天板に乗れる構造かどうか、何段目まで立てるかは製品によって異なります。NITEの報告書は、禁止行為が取扱説明書や本体表示に記載されているとしています。",
    },
    {
      title: "固く平坦な地面に置き、止め具を固定する",
      desc: "国民生活センターは、止め具を確実に固定し、固く平坦な地盤に設置するよう呼びかけています。柔らかい土や傾いた場所には置きません。",
    },
    {
      title: "一人で作業せず、装備を整える",
      desc: "一人きりの作業は避け、安定性補助器具が付いたものを利用します。ヘルメット、動きやすい服装、滑りにくい靴で作業します（国民生活センター）。",
    },
    {
      title: "届かない枝は、脚立を動かしてから切る",
      desc: "天板から2段以上下に立ったまま、体を乗り出さずに届く範囲だけを切ります。届かないときは一度降りて、脚立を置き直します。",
    },
  ],
  ngHeading: "脚立での剪定で避けたいこと",
  ngs: [
    {
      title: "天板に立つ・またぐことはしません",
      desc: "NITEの報告書は、上枠付き脚立などを除き、天板に乗る・座る・またぐことを禁止行為としています。",
    },
    {
      title: "はしごに乗ったまま枝を切ることはしません",
      desc: "国民生活センターは、はしごは高所へ移動するための用具であり、はしご上で作業しないよう呼びかけています。",
    },
    {
      title: "高い位置の作業を無理に自分で行うことは避けます",
      desc: "国民生活センターは、高齢になると身体・認知機能が衰えるとして、専門業者や身近な人に頼むなど、なるべく高所での作業を自分で行わないよう呼びかけています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>脚立の天板付近に立たないと届かない枝、体を乗り出さないと切れない枝、電線や屋根に近い枝</Hl>は、剪定業者に相談してください。国民生活センターの2019年の集計では、脚立・はしごからの転落の約半数が入院に至っています。依頼するときは、木の高さと、切りたい枝の位置を伝えます。
    </p>,
    <p key="2">
      高い木の作業で起こりやすい事故は<Link href="/takagi-sentei-kiken/" className={A}>高い木の剪定の危険</Link>、木を低く保つ方法は<Link href="/niwaki-hikuku-suru/" className={A}>庭木を低くする</Link>、剪定に使う道具は<Link href="/niwa-dogu-erabikata/" className={A}>庭仕事の道具の選び方</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "脚立で届かない高さは業者に相談する",
  ctaText:
    "庭木の手入れ中の脚立からの転落は、公的機関が繰り返し注意を呼びかけている事故です。天板付近に立たないと届かない枝は、業者に任せると安心です。",
  faqHeading: "剪定で脚立を使うときのよくある質問",
  faqs: [
    {
      q: "脚立の何段目まで立ってよいですか？",
      a: "国民生活センターは、脚立は天板から2段以上下の踏ざんに立って作業するよう呼びかけています。製品ごとの決まりは本体表示と取扱説明書で確認します。",
    },
    {
      q: "脚立の天板に乗って剪定してもよいですか？",
      a: "NITEの報告書は、上枠付き脚立・足場台脚立・踏み台を除き、脚立の天板に乗る・座る・またぐことは禁止行為としています。",
    },
    {
      q: "はしごを木に立て掛けて剪定してもよいですか？",
      a: "国民生活センターは、はしごは高所へ移動するための用具なので、はしご上で作業しないよう呼びかけています。",
    },
    {
      q: "脚立からの転落事故はどのくらい起きていますか？",
      a: "国民生活センターの2019年の公表では、医療機関ネットワークに寄せられた20歳以上の脚立・はしごの事故458件のうち433件が転落で、そのうち60〜70歳代が236件、約半数の206件が入院、3件が死亡でした。",
    },
  ],
  related: [
    {
      href: "/takagi-sentei-kiken/",
      label: "高い木の剪定の危険",
      desc: "自分で登らない判断",
    },
    {
      href: "/niwa-dogu-erabikata/",
      label: "庭仕事の道具の選び方",
      desc: "剪定ばさみ・のこぎりなど",
    },
    {
      href: "/densen-eda-sesshoku/",
      label: "電線に枝が触れている",
      desc: "自分で切らない枝",
    },
    {
      href: "/niwaki-hikuku-suru/",
      label: "庭木を低くする",
      desc: "脚立が要らない高さに保つ",
    },
  ],
};

export default function SenteiKyatatsuPage() {
  return <KnowArticle data={data} />;
}
