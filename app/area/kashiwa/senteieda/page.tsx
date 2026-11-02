import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/kashiwa/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_KANEN = "https://www.city.kashiwa.lg.jp/kankyoservice/garbage_environment/kashiwaarea/guide-k/k_2.html";
const SRC_SENTEI = "https://www.city.kashiwa.lg.jp/garbage_environment/kashiwaarea/guide-k/se/0039.html";
const SRC_FUTOI = "https://www.city.kashiwa.lg.jp/garbage_environment/kashiwaarea/guide-k/ki/0012.html";
const SRC_SHONAN = "https://www.city.kashiwa.lg.jp/kankyoservice/garbage_environment/shonanarea/guide/s_2.html";

export const metadata: Metadata = {
  title: {
    absolute: "柏市の剪定枝の出し方｜太さ5cm・長さ30cm以内で束ねて可燃ごみ（沼南地域は基準が違う）｜お庭のミカタ",
  },
  description:
    "柏市の柏地域では、木の枝は1本の太さ5cm以内・長さ30cm以内にして直径20cm程度にひもで束ね、可燃ごみの日に出します。太さ5cmを超える枝は収集できないごみで、クリーンセンターに事前連絡して搬入します。沼南地域は太さ2cm・長さ50cm以内。市のごみ分別便利ガイド（2026年11月2日確認）をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "柏市の剪定枝の出し方｜柏地域は太さ5cm・長さ30cm以内、沼南地域は太さ2cm・長さ50cm以内",
    description:
      "柏市の剪定枝は可燃ごみ。柏地域は太さ5cm・長さ30cm以内で直径20cm程度に束ねる。太さ5cm超はクリーンセンターへ事前連絡。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/kashiwa/senteieda",
  published: "2026-11-02",
  updatedLabel: "2026年11月2日",
  parent: { href: "/area/kashiwa/", label: "柏の庭業者" },
  badge: "柏市の地域情報",
  h1: "柏市の剪定枝の出し方｜太さ5cm・長さ30cm以内で束ねて可燃ごみ（沼南地域は基準が違う）",
  breadcrumbLabel: "柏市の剪定枝の出し方",
  tagChips: ["柏市", "剪定枝", "可燃ごみ", "クリーンセンター", "沼南地域"],
  ldHeadline: "柏市の剪定枝の出し方｜柏地域は太さ5cm・長さ30cm以内、沼南地域は太さ2cm・長さ50cm以内",
  ldDescription:
    "柏市で剪定枝・草木ごみを可燃ごみとして出すときの太さ・長さ・束ね方、太さ5cmを超える枝のクリーンセンターへの搬入、沼南地域の基準を、市のごみ分別便利ガイドをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        柏市の柏地域では、草木ごみは可燃ごみで、<Hl>木の枝は1本の太さを5cm以内・長さ30cm以内にして、直径20cm程度にひもで束ねてそのまま出す</Hl>よう案内されています（出典：
        <a href={SRC_KANEN} className={A} target="_blank" rel="noopener noreferrer">柏市／可燃ごみ</a>
        （ごみ分別便利ガイド 柏地域版）、2026年11月2日確認）。
      </p>
      <p>
        柏市は柏地域と沼南地域で分別のガイドが分かれており、枝の基準も異なります。本記事では、両地域の基準と、太い枝を出すときの手順を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "柏地域は太さ5cm・長さ30cm以内で直径20cm程度に束ねて可燃ごみへ。太さ5cmを超える枝は収集できないため、クリーンセンターに事前連絡して搬入します。",
  conclusionBody: (
    <p>
      太さ5cmを超える木の枝は<Hl>「収集できないごみ」</Hl>で、<Hl>長さ1.0m未満、太さ10cm未満にし、クリーンセンターに事前連絡</Hl>するよう案内されています。直接搬入は北部・南部とも可能です（出典：
      <a href={SRC_FUTOI} className={A} target="_blank" rel="noopener noreferrer">木の枝-太さ5cmを超える | 柏市</a>
      、2026年11月2日確認）。
    </p>
  ),
  basicsHeading: "柏市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "柏地域：太さ5cm以内の剪定枝は可燃ごみ",
      desc: "長さ30cm以内にし、直径20cm以内ごとに束ねます。クリーンセンターへの直接搬入は北部・南部とも可能です。",
    },
    {
      title: "柏地域：草や葉はピンク色の指定ごみ袋に土を落として入れる",
      desc: "草木ごみは、他の可燃ごみと一緒にピンク色の指定ごみ袋に土を落として入れて出します。",
    },
    {
      title: "とげのある枝には貼り紙をする",
      desc: "トゲのあるものは貼り紙で表示するよう案内されています。",
    },
    {
      title: "柏地域：太さ5cmを超える枝は収集できないごみ",
      desc: "長さ1.0m未満、太さ10cm未満にし、クリーンセンターに事前連絡してから搬入します。",
    },
    {
      title: "沼南地域：木の枝は太さ2cm・長さ50cm以内でひもで束ねる",
      desc: "これ以上の木の枝で3辺（縦・横・高さ）の合計が1m未満のものは不燃ごみとなります。",
    },
  ],
  stepsHeading: "柏市（柏地域）で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝の太さを確かめる",
      desc: "太さ5cm以内なら可燃ごみ、5cmを超える場合は収集できないごみです。",
    },
    {
      title: "長さ30cm以内に切り、直径20cm程度に束ねる",
      desc: "ひもで束ねてそのまま出します。とげのある枝には貼り紙をします。",
    },
    {
      title: "収集日の朝8時30分までに出す",
      desc: "可燃ごみは週に2回、地域の収集日に収集されます。草や葉はピンク色の指定ごみ袋に入れ、口をしばって出します。",
    },
    {
      title: "太い枝はクリーンセンターに事前連絡して搬入する",
      desc: "長さ1.0m未満、太さ10cm未満にしてから、クリーンセンターに連絡します。",
    },
  ],
  ngHeading: "柏市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "太さ5cmを超える枝を可燃ごみに出しません",
      desc: "柏地域では、太さ5cmを超える木の枝は収集できないごみです。",
    },
    {
      title: "連絡なしでクリーンセンターに太い枝を運びません",
      desc: "太さ5cmを超える枝は、クリーンセンターに事前連絡するよう案内されています。",
    },
    {
      title: "沼南地域で柏地域の基準を当てはめません",
      desc: "沼南地域は木の枝の基準が太さ2cm・長さ50cm以内です。お住まいの地域のガイドで確認します。",
    },
  ],
  proHeading: "業者に頼む場合は、枝の処分方法を確認する",
  proParas: [
    <p key="1">
      柏地域の太さ5cm以内の剪定枝の扱いは、品目別のページでも確認できます（出典：
      <a href={SRC_SENTEI} className={A} target="_blank" rel="noopener noreferrer">剪定枝-太さ5cm以内 | 柏市</a>
      、2026年11月2日確認）。
      沼南地域の可燃ごみのページでは、木の枝（太さ2cm、長さ50cm以内）をひもで束ねて出すよう案内されています（出典：
      <a href={SRC_SHONAN} className={A} target="_blank" rel="noopener noreferrer">柏市／可燃ごみ</a>
      （ごみ分別便利ガイド 沼南地域）、2026年11月2日確認）。いずれの地域も太い枝は家庭ごみの収集に出せないため、伐採や大きな剪定では<Hl>枝の処分が見積もりに含まれるか</Hl>を確認してください。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月2日確認）。柏で依頼できる庭業者の比較は
      <Link href="/area/kashiwa/" className={A}>柏の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "量が多い剪定は、処分込みの見積もりで比べる",
  ctaText:
    "長さ30cm以内に切りそろえる作業は、枝が多いと負担が大きくなります。業者に依頼する場合は、処分費の有無をそろえて見積もりを比べてください。",
  faqHeading: "柏市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "柏市で剪定した枝は何ごみですか？",
      a: "柏地域では、太さ5cm以内の剪定枝は可燃ごみです。長さ30cm以内にし、直径20cm以内ごとに束ねて出します。",
    },
    {
      q: "太さ5cmを超える枝はどうしますか？",
      a: "収集できないごみです。長さ1.0m未満、太さ10cm未満にし、クリーンセンターに事前連絡して搬入します。",
    },
    {
      q: "沼南地域でも同じですか？",
      a: "沼南地域は、木の枝は太さ2cm・長さ50cm以内でひもで束ねて出します。これ以上の木の枝で3辺の合計が1m未満のものは不燃ごみです。",
    },
    {
      q: "草や落ち葉はどう出しますか？",
      a: "柏地域では、他の可燃ごみと一緒にピンク色の指定ごみ袋に土を落として入れ、収集日の朝8時30分までに出します。",
    },
  ],
  related: [
    { href: "/area/kashiwa/", label: "柏の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/bara-teire-kihon/", label: "庭のバラの手入れの基本", desc: "とげのある枝の剪定と扱い方" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KashiwaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
