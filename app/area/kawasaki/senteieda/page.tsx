import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/kawasaki/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.kawasaki.jp/kurashi/category/261-1-10-2-0-0-0-0-0-0.html";
const T_SRC = "川崎市 : ごみの分別に迷ったら";
const SRC2 = "https://www.city.kawasaki.jp/kurashi/category/261-1-10-9-0-0-0-0-0-0.html";
const T_SRC2 = "川崎市 : 普通ごみ";
const SRC3 = "https://www.city.kawasaki.jp/kurashi/category/261-1-5-0-0-0-0-0-0-0.html";
const T_SRC3 = "川崎市 : 一時多量ごみ制度";

export const metadata: Metadata = {
  title: {
    absolute: "川崎市の剪定枝の出し方｜太さ10cm程度・長さ50cm未満で束ねて普通ごみ、1回3束程度が目安｜お庭のミカタ",
  },
  description:
    "川崎市では落ち葉・剪定枝・刈り草は普通ごみ。枝は太さ10cm程度・長さ50cm未満に切って束ね、1回3束程度を目安に出します。最長辺が50cm以上なら乾燥後に粗大ごみ。多量に出すときは一時多量ごみ制度（許可業者・有料）があります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "川崎市の剪定枝の出し方｜太さ10cm程度・長さ50cm未満で束ねて普通ごみ",
    description:
      "川崎市の剪定枝は普通ごみ。太さ10cm程度・長さ50cm未満で束ね、1回3束程度が目安。最長辺50cm以上は乾燥後に粗大ごみ。多量なら一時多量ごみ制度。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/kawasaki/senteieda",
  published: "2026-11-05",
  updatedLabel: "2026年11月5日",
  parent: { href: "/area/kawasaki/", label: "川崎の庭業者" },
  badge: "川崎市の地域情報",
  h1: "川崎市の剪定枝の出し方｜太さ10cm程度・長さ50cm未満で束ねて普通ごみ、1回3束程度が目安",
  breadcrumbLabel: "川崎市の剪定枝の出し方",
  tagChips: ["川崎市", "剪定枝", "普通ごみ", "粗大ごみ", "一時多量ごみ"],
  ldHeadline: "川崎市の剪定枝の出し方｜太さ10cm程度・長さ50cm未満で束ねて普通ごみ、1回3束程度が目安",
  ldDescription:
    "川崎市で家庭の落ち葉・剪定枝・刈り草を出すときの分別区分、枝の太さと長さの目安、1回に出す束の目安、粗大ごみになる大きさ、一時多量ごみ制度を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        川崎市の分別表では、落ち葉・剪定枝・刈り草は<Hl>普通ごみ</Hl>です。
        枝は太さ10cm程度、長さ50cm未満に切って束ね、最長辺が50cm以上なら乾燥後に粗大ごみとして出します（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
        、2026年11月5日確認）。
      </p>
      <p>
        本記事では、普通ごみで出すときの束の目安、粗大ごみとの分かれ目、まとまった量を出すときの制度を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "枝は太さ10cm程度・長さ50cm未満で小さく束ね、1回3束程度を目安に普通ごみへ。50cm以上なら乾燥後に粗大ごみです。",
  conclusionBody: (
    <p>
      市の普通ごみのページでは、小枝・板切れは<Hl>太さ10cm程度、長さ50cm未満にし、小さく束ねて1回3束程度を目安</Hl>に出すよう案内されています。
      普通ごみの収集は週2回で、ふた付きポリ容器または透明・半透明の袋で、収集当日の朝8時までに出します（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{T_SRC2}</a>
      、2026年11月5日確認）。
    </p>
  ),
  basicsHeading: "川崎市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "落ち葉・剪定枝・刈り草は普通ごみ",
      desc: "分別表で普通ごみに分類されています。",
    },
    {
      title: "枝は太さ10cm程度・長さ50cm未満",
      desc: "この大きさに切って束ねます。",
    },
    {
      title: "1回3束程度が目安",
      desc: "小さく束ねて、1回に出す量は3束程度を目安にします。",
    },
    {
      title: "最長辺50cm以上は乾燥後に粗大ごみ",
      desc: "長さ50cm未満にできない枝は、乾燥させてから粗大ごみとして申し込みます。",
    },
    {
      title: "収集当日の朝8時までに出す",
      desc: "普通ごみの収集は週2回です。中身が確認できない黒い袋等は使いません。",
    },
  ],
  stepsHeading: "川崎市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝を太さ10cm程度・長さ50cm未満に切る",
      desc: "この大きさにできない枝は、乾燥させて粗大ごみに回します。",
    },
    {
      title: "小さく束ねる",
      desc: "落ち葉や刈り草は、ふた付きポリ容器か透明・半透明の袋に入れます。指定袋はありません。",
    },
    {
      title: "1回3束程度に分ける",
      desc: "量が多いときは、収集日を分けて出します。",
    },
    {
      title: "収集当日の朝8時までに出す",
      desc: "収集後や夜間には出さないよう案内されています。",
    },
  ],
  ngHeading: "川崎市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "長さ50cm以上の枝を普通ごみに混ぜません",
      desc: "最長辺が50cm以上なら、乾燥後に粗大ごみとして出します。",
    },
    {
      title: "中身が見えない袋は使いません",
      desc: "指定袋はありませんが、黒い袋等は使わないよう案内されています。",
    },
    {
      title: "無許可の業者に回収を頼みません",
      desc: "一時多量ごみ制度では、市が許可した業者を選ぶこと、無許可の業者を使わないことが案内されています。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      川崎市には、一時的に多量に出る家庭系ごみを希望日に出したいときに使える「一時多量ごみ制度」（有料）があります。
      許可業者を選び、生活環境事業所に申込書を出してから、分別したごみを許可業者に引き渡す流れです。費用は許可業者によって異なるため、見積もりを取って契約するよう案内されています（出典：
      <a href={SRC3} className={A} target="_blank" rel="noopener noreferrer">{T_SRC3}</a>
      、2026年11月5日確認）。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月5日確認）。川崎で依頼できる庭業者の比較は
      <Link href="/area/kawasaki/" className={A}>川崎の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "1回3束程度で出しきれない量なら、処分込みの見積もりで比べる",
  ctaText:
    "生垣の刈り込みや伐採で枝が多く出る場合は、業者の見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "川崎市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "川崎市で剪定した枝は何ごみですか？",
      a: "落ち葉・剪定枝・刈り草は普通ごみです。枝は太さ10cm程度、長さ50cm未満に切って束ねます。",
    },
    {
      q: "1回にどれくらい出せますか？",
      a: "普通ごみのページでは、小枝は小さく束ねて1回3束程度を目安に出すよう案内されています。",
    },
    {
      q: "長い枝はどうしますか？",
      a: "最長辺が50cm以上なら、乾燥後に粗大ごみとして出します。",
    },
    {
      q: "まとめて一度に処分したいときは？",
      a: "一時多量ごみ制度（有料）を使えます。許可業者を選び、生活環境事業所に申込書を出してから引き渡します。",
    },
  ],
  related: [
    { href: "/area/kawasaki/", label: "川崎の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/yokohama/senteieda/", label: "横浜市の剪定枝の出し方", desc: "隣接する市の分別ルール" },
    { href: "/ochiba-taisaku/", label: "庭の落ち葉対策", desc: "落ち葉の集め方と減らし方" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KawasakiSenteiedaPage() {
  return <KnowArticle data={data} />;
}
