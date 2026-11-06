import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/ichinomiya/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.ichinomiya.aichi.jp/faq/1005662/1044526/1006398.html";
const SRC_T = "植木の剪定や日曜大工で出た木くずの処理は。｜一宮市";
const SRC2 = "https://www.city.ichinomiya.aichi.jp/faq/1005662/1044526/1006367.html";
const SRC2_T = "庭の枯れ葉などの処理方法はどうしたらよいか。｜一宮市";

export const metadata: Metadata = {
  title: {
    absolute: "一宮市の剪定枝の出し方｜長さ60cm・太さ15cm以内で可燃ごみ袋へ、1世帯3袋・1袋6kgまで｜お庭のミカタ",
  },
  description:
    "一宮市では、植木の剪定で出た枝は長さ60cm以内・太さ15cm以内にして可燃ごみ袋に入れ、収集日に出します。1世帯3袋まで、1袋の重さは6kg以内。大量に出た場合は環境センターへ直接持ち込み（有料）。枯れ葉・枯れ枝の野焼きは一部を除き禁止です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "一宮市の剪定枝の出し方｜60cm・15cm以内で可燃ごみ袋へ、1世帯3袋まで",
    description:
      "一宮市の剪定枝は長さ60cm以内・太さ15cm以内で可燃ごみ袋へ。1世帯3袋まで・1袋6kg以内。大量なら環境センターへ直接持ち込み（有料）。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/ichinomiya/senteieda",
  published: "2026-11-06",
  updatedLabel: "2026年11月6日",
  parent: { href: "/area/ichinomiya/", label: "一宮の庭業者" },
  badge: "一宮市の地域情報",
  h1: "一宮市の剪定枝の出し方｜長さ60cm・太さ15cm以内で可燃ごみ袋へ、1世帯3袋・1袋6kgまで",
  breadcrumbLabel: "一宮市の剪定枝の出し方",
  tagChips: ["一宮市", "剪定枝", "可燃ごみ", "環境センター", "1世帯3袋"],
  ldHeadline: "一宮市の剪定枝の出し方｜長さ60cm・太さ15cm以内で可燃ごみ袋へ、1世帯3袋・1袋6kgまで",
  ldDescription:
    "一宮市で植木の剪定枝や枯れ葉を出すときの長さ・太さ、袋の数と重さ、大量に出た場合の環境センターへの持ち込み、野焼きの禁止を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        一宮市では、植木の剪定で出た枝は
        <Hl>長さ60センチメートル以内・太さ15センチメートル以内にして可燃ごみ袋に入れ、収集日に出します</Hl>
        。1世帯3袋まで、1袋の重さは6キログラム以内です（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月6日確認）。
      </p>
      <p>
        本記事では、袋の数と重さの決まり、枯れ葉との違い、大量に出たときの選択肢を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "長さ60cm・太さ15cm以内で可燃ごみ袋へ。1世帯3袋・1袋6kgまでで、大量に出た場合は環境センターへ持ち込みます。",
  conclusionBody: (
    <p>
      庭の枯れ葉や枯れ枝も、<Hl>可燃ごみとして袋に入れ、同じ条件（1世帯3袋・1袋6kg以内・枝や幹は60cm以内・太さ15cm以内）で出します</Hl>。
      枯れ葉や枯れ枝などの野焼きは、一部の場合を除いて法律で禁止されています（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月6日確認）。
    </p>
  ),
  basicsHeading: "一宮市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "長さは60cm以内",
      desc: "枝や幹は60センチメートル以内に切ります。",
    },
    {
      title: "太さは15cm以内",
      desc: "15センチメートル以内のものが可燃ごみ袋で出せる範囲です。",
    },
    {
      title: "可燃ごみ袋に入れて出す",
      desc: "束ねるだけではなく、可燃ごみ袋に入れて収集日に出します。",
    },
    {
      title: "1世帯3袋・1袋6kgまで",
      desc: "1回に出せる量と重さが決められています。",
    },
    {
      title: "大量なら環境センターへ持ち込み",
      desc: "大量に出た場合は環境センターへ直接持ち込みます（有料）。",
    },
  ],
  stepsHeading: "一宮市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "長さ60cm・太さ15cm以内に切る",
      desc: "袋に入る大きさに切り分けます。",
    },
    {
      title: "可燃ごみ袋に入れる",
      desc: "1袋の重さが6キログラム以内になるように分けます。",
    },
    {
      title: "1世帯3袋までにする",
      desc: "それより多い分は収集日を分けるか、持ち込みを考えます。",
    },
    {
      title: "収集日に出す",
      desc: "可燃ごみの収集日に出します。",
    },
  ],
  ngHeading: "一宮市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "枝や枯れ葉を庭で燃やしません",
      desc: "枯れ葉や枯れ枝などの野焼きは、一部の場合を除いて法律で禁止されています。",
    },
    {
      title: "1袋を重くしすぎません",
      desc: "1袋の重さは6キログラム以内とされています。",
    },
    {
      title: "一度に4袋以上を出しません",
      desc: "1世帯3袋までとされています。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      大量に出た場合は、環境センターへ直接持ち込むよう案内されています（有料）（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月6日確認）。持ち込みの手間をかけられない場合は、処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月6日確認）。一宮で依頼できる庭業者の比較は
      <Link href="/area/ichinomiya/" className={A}>一宮の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "3袋では出しきれない量なら、処分込みの見積もりで比べる",
  ctaText:
    "生垣や高木をまとめて剪定すると、1世帯3袋の範囲では何回にも分けて出すことになります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "一宮市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "一宮市で剪定した枝は何ごみですか？",
      a: "可燃ごみです。長さ60センチメートル以内・太さ15センチメートル以内にして、可燃ごみ袋に入れて収集日に出します。",
    },
    {
      q: "1回に何袋まで出せますか？",
      a: "1世帯3袋まで、1袋の重さは6キログラム以内です。",
    },
    {
      q: "大量に出たときはどうしますか？",
      a: "環境センターに直接持ち込むよう案内されています（有料）。",
    },
    {
      q: "枯れ葉を庭で燃やしてもよいですか？",
      a: "枯れ葉や枯れ枝などの野焼きは、一部の場合を除いて法律で禁止されています。可燃ごみとして出します。",
    },
  ],
  related: [
    { href: "/area/ichinomiya/", label: "一宮の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/nagoya/senteieda/", label: "名古屋市の剪定枝の出し方", desc: "近隣の政令市の分別ルール" },
    { href: "/area/gifu/senteieda/", label: "岐阜市の剪定枝の出し方", desc: "近隣の市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function IchinomiyaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
