import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/umemodoki-sodatekata/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const SETAGAYA_9 = "https://www.city.setagaya.lg.jp/documents/4728/29589_9.txt";
const SETAGAYA_12 = "https://www.city.setagaya.lg.jp/documents/4728/29589_12.txt";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ウメモドキの育て方｜日なたを好む落葉低木。実は雌株につき、手入れは落葉期の12〜3月｜お庭のミカタ",
  },
  description:
    "ウメモドキの育て方を、世田谷区の植栽ガイドブック（樹木一覧・植栽計画・維持管理）と熊本市の樹木管理ガイドラインをもとに整理しました。日当たり・土・植え付け時期・手入れの時期と、実を楽しむときの注意を並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ウメモドキの育て方",
    description:
      "世田谷区の樹木一覧では、ウメモドキはモチノキ科の落葉低木で雌雄異株、実は球形で紅色、手入時期は12〜3月としています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; value: string }[] = [
  { item: "分類・樹型", value: "モチノキ科、落葉・低木" },
  { item: "鑑賞時期", value: "実 11〜1月" },
  { item: "移植（植え付け）時期", value: "2月中旬〜3月・10〜11月（移植難易 ◎）" },
  { item: "手入時期", value: "12〜3月" },
  { item: "都市適応性", value: "○（適応性中）" },
  { item: "日照", value: "◎（日照を好む）" },
  { item: "乾湿", value: "○〜△（中間〜耐湿性あり）" },
  { item: "好む土壌", value: "壌土" },
  { item: "参考事項", value: "雌雄異株、株立となる。実は球形、紅色" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">世田谷区の樹木一覧の記載（ウメモドキ）</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、世田谷区「建築にともなう緑化のための植栽ガイドブック」の樹木一覧（PDF）を開き、ウメモドキの行を当サイトで項目ごとに分けて表にしました。◎○△の意味は同じ一覧の凡例によります（日照：◎日照を好む・○中間（半日影）・△日影を好む／乾湿：◎耐乾性あり・○中間・△耐湿性あり／都市適応性：◎強・○中・△弱）。世田谷区（東京都）の資料のため、寒い地域・暖かい地域では時期が前後することがあります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "umemodoki-sodatekata",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "ウメモドキの育て方｜日なたを好む落葉低木。実は雌株につき、手入れは落葉期の12〜3月",
  breadcrumbLabel: "ウメモドキの育て方",
  tagChips: ["ウメモドキ", "落葉低木", "実もの", "雌雄異株", "植え付け時期"],
  ldHeadline: "ウメモドキの育て方｜日なたを好む落葉低木。実は雌株につき、手入れは落葉期の12〜3月",
  ldDescription:
    "ウメモドキの日当たり・土・植え付け時期・手入れの時期を、世田谷区と熊本市の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ウメモドキは、秋から冬に赤い小さな実をつける落葉低木です。世田谷区の植栽ガイドブックの樹木一覧では、<Hl>モチノキ科の落葉低木で、雌雄異株、株立ちになり、実は球形で紅色</Hl>とされ、実の鑑賞時期は<Hl>11〜1月</Hl>、手入時期は<Hl>12〜3月</Hl>です（出典：<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        同じガイドブックは、ウメモドキを<Hl>病害虫に強い樹木の例</Hl>にも挙げています。本記事では、日当たり・土・植え付け・手入れの順に、資料に書かれている内容を整理します。
      </p>
    </>
  ),
  conclusionTitle: "ウメモドキは、日当たりのよい場所に、雌株を選んで植えるのが基本です。植え付けは2月中旬〜3月か10〜11月、剪定などの手入れは落葉期（12〜3月）に行います。",
  conclusionBody: (
    <>
      <p>世田谷区の樹木一覧に載っているウメモドキの記載を、項目ごとに並べると次のとおりです。</p>
      {table}
      <p className="mt-4">
        一覧の<Hl>実の鑑賞時期（11〜1月）と手入時期（12〜3月）は、12〜1月で重なります</Hl>。実を最後まで楽しみたい場合は、実が落ちたり鳥に食べられたりした後の2〜3月に手入れをする、という順番にすると両立しやすくなります（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "ウメモドキを育てる前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、世田谷区・熊本市の資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "日なたを好む",
      desc: "世田谷区の一覧では、日照は◎（日照を好む）です。乾湿は○〜△で、乾燥にとくに強い木とはされていません。",
    },
    {
      title: "雌雄異株。実は雌株につく",
      desc: "世田谷区は、ウメモドキを雌雄異株としています。赤い実を楽しみたい場合は、雌株であることを購入時に確かめてください。",
    },
    {
      title: "株立ちになる低木",
      desc: "世田谷区は株立ちになるとし、熊本市のガイドラインは公共施設の樹木の基本樹形で、ウメモドキを「卵、球、楕円形」に分類しています。",
    },
    {
      title: "病害虫に強い",
      desc: "世田谷区の植栽計画の章は、病害虫に強く肥料を施す必要がほとんどない樹木の例として、ウメモドキを挙げています。",
    },
  ],
  stepsHeading: "ウメモドキの育て方4つの手順",
  stepsIntro: <p>世田谷区の樹木一覧と、同じガイドブックの「維持・管理」の章にもとづく流れです。</p>,
  steps: [
    {
      title: "日当たりのよい場所を選ぶ",
      desc: "日照は◎（日照を好む）です。土は壌土を好むとされています。",
    },
    {
      title: "2月中旬〜3月か10〜11月に植える",
      desc: "一覧の移植時期はこの2つの期間で、移植難易は◎です。",
    },
    {
      title: "落葉期（12〜3月）に手入れする",
      desc: "世田谷区は、一般的な落葉樹の剪定は、葉が落ちて枝のつき方がよく分かる冬に行うとやりやすく、休眠しているので切り口も傷みにくいとしています。",
    },
    {
      title: "不要な枝から切る",
      desc: "最初に枯れ枝・折れ枝・病気の枝を除き、次に樹形を乱す枝（徒長枝、からみ枝、ふところ枝、ひこばえなど）を切ります。樹形が偏らないように全体を見ながら進めます（世田谷区「維持・管理」）。",
    },
  ],
  ngHeading: "ウメモドキの手入れで避けたいこと",
  ngs: [
    {
      title: "実の付いた枝を早い時期に切らないようにします",
      desc: "一覧の実の鑑賞時期は11〜1月です。手入時期の12〜3月のうち早い時期に切ると、実ごと落とします。",
    },
    {
      title: "日陰に植えることは避けます",
      desc: "世田谷区の一覧では、日照は◎（日照を好む）です。",
    },
    {
      title: "雄株だけを植えて実を期待しないようにします",
      desc: "雌雄異株のため、実がなるのは雌株です。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      株立ちが広がって通路をふさいでいる場合や、ほかの庭木とまとめて冬の手入れをしたい場合は、剪定業者に相談してください。「実が終わってから、落葉期に不要な枝を抜く程度にしてほしい」と伝えると、仕上がりの考え方を共有しやすくなります。剪定の考え方は<a href={SETAGAYA_12} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」3 維持・管理（テキスト版）</a>、病害虫に強い樹木の例は<a href={SETAGAYA_9} className={A} target="_blank" rel="noopener noreferrer">同 2 植栽計画（テキスト版）</a>、基本樹形は<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      時期の考え方は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、剪定の手法は<Link href="/sentei-towa/" className={A}>剪定とは</Link>、名前の似た梅の手入れは<Link href="/ume-sentei/" className={A}>梅（ウメ）の剪定</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ウメモドキの手入れを業者に相談する",
  ctaText: "大きくなった株立ちの整理や、庭木全体の冬の手入れは、業者に任せると安心です。",
  faqHeading: "ウメモドキの育て方でよくある質問",
  faqs: [
    {
      q: "ウメモドキの剪定はいつ行えばよいですか？",
      a: "世田谷区の樹木一覧は、手入時期を12〜3月としています。実の鑑賞時期が11〜1月なので、実を楽しむなら実が終わってからにします。",
    },
    {
      q: "ウメモドキに実がなりません。",
      a: "世田谷区は、ウメモドキを雌雄異株としています。実がなるのは雌株です。日照は◎（日照を好む）なので、日当たりも確かめてください。",
    },
    {
      q: "植え付けに適した時期はいつですか？",
      a: "世田谷区の樹木一覧では、移植時期は2月中旬〜3月と10〜11月です。",
    },
    {
      q: "ウメとは別の木ですか？",
      a: "世田谷区の樹木一覧では、ウメはバラ科、ウメモドキはモチノキ科で、科が異なります。時期や手入れはそれぞれの資料で確かめてください。",
    },
  ],
  related: [
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/sentei-towa/", label: "剪定とは", desc: "枝抜き・切り詰め・切り返しの違い" },
    { href: "/ume-sentei/", label: "梅（ウメ）の剪定", desc: "名前の似たバラ科の木" },
    { href: "/sanshuyu-sentei/", label: "サンシュユの剪定", desc: "同じく赤い実をつける庭木" },
  ],
};

export default function UmemodokiSodatekataPage() {
  return <KnowArticle data={data} />;
}
