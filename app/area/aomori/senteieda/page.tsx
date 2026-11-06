import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/aomori/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.aomori.aomori.jp/kurashi_kankyo/gomi/1001942/1007974.html";
const SRC_T = "ごみの出し方分別事典（五十音順） │ 青森市";
const SRC2 = "https://www.city.aomori.aomori.jp/kurashi_kankyo/gomi/1001942/1001944/1001952.html";
const SRC2_T = "燃えるごみ │ 青森市";

export const metadata: Metadata = {
  title: {
    absolute: "青森市の剪定枝の出し方｜1本60cm・太さ10cm未満でひもでしばり週後半の燃えるごみ、60cm〜1.8mは粗大ごみ｜お庭のミカタ",
  },
  description:
    "青森市では、木の枝・根は1本あたり長さ60cm・太さ10cm未満にしてひもでしばり、週後半の「燃えるごみ」に出します。長さ60cm〜1.8m・太さ10cm程度のものは粗大ごみ、それを超えるものは専門業者や取扱店へ。落ち葉・草は土を取り除き、乾燥させて指定ごみ袋へ。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "青森市の剪定枝の出し方｜60cm・太さ10cm未満でしばって週後半の燃えるごみ",
    description:
      "青森市の枝は1本60cm・太さ10cm未満でひもでしばり、週後半の燃えるごみへ。60cm〜1.8m・太さ10cm程度は粗大ごみ。落ち葉・草は乾燥させて指定袋へ。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/aomori/senteieda",
  published: "2026-11-06",
  updatedLabel: "2026年11月6日",
  parent: { href: "/area/aomori/", label: "青森の庭業者" },
  badge: "青森市の地域情報",
  h1: "青森市の剪定枝の出し方｜1本60cm・太さ10cm未満でひもでしばり週後半の燃えるごみ、60cm〜1.8mは粗大ごみ",
  breadcrumbLabel: "青森市の剪定枝の出し方",
  tagChips: ["青森市", "剪定枝", "燃えるごみ", "粗大ごみ", "週後半"],
  ldHeadline: "青森市の剪定枝の出し方｜1本60cm・太さ10cm未満でひもでしばり週後半の燃えるごみ、60cm〜1.8mは粗大ごみ",
  ldDescription:
    "青森市で庭木の枝・根・落ち葉・草を出すときの長さと太さ、燃えるごみと粗大ごみの分かれ目、袋に入れずに出す大きさを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        青森市では、木（枝・根・木くず・切り株等）は
        <Hl>1本あたり長さ60cm・太さ10cm未満にして、ひもでしばって週後半の「燃えるごみ」</Hl>
        へ出します（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月6日確認）。
      </p>
      <p>
        本記事では、燃えるごみと粗大ごみの分かれ目、落ち葉・草の下準備、業者に頼む目安を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "1本60cm・太さ10cm未満はひもでしばって週後半の燃えるごみ、60cm〜1.8m・太さ10cm程度は粗大ごみ、それを超えるものは専門業者や取扱店へ。",
  conclusionBody: (
    <p>
      分別事典では、<Hl>1本あたり長さが60cm〜1.8m、太さが10cm程度のものは「粗大ごみ」</Hl>、これを超えるものは専門業者や取扱店へ依頼するよう案内されています。
      燃えるごみのうち40センチメートル以上60センチメートル未満のものは、ごみ袋に入れずに出します（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月6日確認）。
    </p>
  ),
  basicsHeading: "青森市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "1本60cm・太さ10cm未満にする",
      desc: "この大きさまでが燃えるごみの範囲です。",
    },
    {
      title: "ひもでしばって週後半の燃えるごみへ",
      desc: "収集は週後半の「燃えるごみ」の日です。",
    },
    {
      title: "40cm以上60cm未満は袋に入れずに出す",
      desc: "燃えるごみのうち、この大きさのものはごみ袋に入れずに出します。",
    },
    {
      title: "60cm〜1.8m・太さ10cm程度は粗大ごみ",
      desc: "これを超えるものは専門業者や取扱店へ依頼します。",
    },
    {
      title: "落ち葉・草は土を取り除き乾燥させる",
      desc: "乾燥させてから指定ごみ袋に入れて出します。",
    },
  ],
  stepsHeading: "青森市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "落ち葉・草の土を取り除いて乾かす",
      desc: "乾燥させてから指定ごみ袋に入れます。",
    },
    {
      title: "枝を1本60cm・太さ10cm未満に切る",
      desc: "それより大きいものは粗大ごみの区分になります。",
    },
    {
      title: "ひもでしばる",
      desc: "しばった枝は、40cm以上60cm未満ならごみ袋に入れずに出します。",
    },
    {
      title: "週後半の燃えるごみの日に出す",
      desc: "分別事典で、週後半の「燃えるごみ」へ出すよう案内されています。",
    },
  ],
  ngHeading: "青森市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "60cm以上の枝を燃えるごみに出しません",
      desc: "1本あたり長さが60cm〜1.8m、太さが10cm程度のものは粗大ごみです。",
    },
    {
      title: "土の付いた草をそのまま袋に入れません",
      desc: "落ち葉・草は土を取り除き、乾燥させてから指定ごみ袋に入れます。",
    },
    {
      title: "粗大ごみの大きさを超える木を集積所に出しません",
      desc: "長さ1.8m・太さ10cm程度を超えるものは、専門業者や取扱店への依頼が案内されています。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      市は、1本あたり長さ1.8m・太さ10cm程度を超える木は、専門業者や取扱店へ依頼するよう案内しています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月6日確認）。太い幹の伐採や抜根を伴う作業は、処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月6日確認）。青森で依頼できる庭業者の比較は
      <Link href="/area/aomori/" className={A}>青森の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "粗大ごみの大きさを超える木なら、処分込みの見積もりで比べる",
  ctaText:
    "太い幹や切り株は、市の収集では出せない大きさになることがあります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "青森市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "青森市で剪定した枝は何ごみですか？",
      a: "1本あたり長さ60cm・太さ10cm未満にしてひもでしばれば、週後半の「燃えるごみ」です。",
    },
    {
      q: "長い枝や太い枝はどうしますか？",
      a: "1本あたり長さが60cm〜1.8m、太さが10cm程度のものは粗大ごみです。これを超えるものは専門業者や取扱店へ依頼するよう案内されています。",
    },
    {
      q: "しばった枝は袋に入れますか？",
      a: "燃えるごみのうち40センチメートル以上60センチメートル未満のものは、ごみ袋に入れずに出します。",
    },
    {
      q: "落ち葉や草はどう出しますか？",
      a: "土を取り除き、乾燥させてから指定ごみ袋に入れて燃えるごみに出します。",
    },
  ],
  related: [
    { href: "/area/aomori/", label: "青森の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/hachinohe/senteieda/", label: "八戸市の剪定枝の出し方", desc: "県内の中核市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function AomoriSenteiedaPage() {
  return <KnowArticle data={data} />;
}
