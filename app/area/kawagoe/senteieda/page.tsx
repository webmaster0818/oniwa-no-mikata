import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/kawagoe/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.kawagoe.saitama.jp/kurashi/gomi/1002380/1014541.html";
const SRC_T = "ごみ分別検索｜川越市";
const SRC2 = "https://www.city.kawagoe.saitama.jp/kurashi/gomi/1002380/1002397.html";
const SRC2_T = "家庭ごみのごみ処理施設への持込み(自己搬入)｜川越市";

export const metadata: Metadata = {
  title: {
    absolute:
      "川越市の剪定枝の出し方｜直径10cm未満は長さ50cm未満・束30cm未満でひもでしばり可燃ごみ、1回5束まで｜お庭のミカタ",
  },
  description:
    "川越市では、直径10cm未満の木の枝は長さ50cm未満にそろえ、束ねて30cm未満にしてひもでしばり可燃ごみに出します（1回5束まで）。" +
    "直径10cm以上30cm未満は事前に市処理施設へ問い合わせ、30cm以上は業者処分です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "川越市の剪定枝の出し方｜長さ50cm未満・束30cm未満でひもでしばり可燃ごみ（1回5束まで）",
    description:
      "川越市の木の枝は直径で扱いが変わります。10cm未満は可燃ごみ、10cm以上30cm未満は市処理施設へ事前に問い合わせ、30cm以上は業者処分です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/kawagoe/senteieda",
  published: "2026-11-07",
  updatedLabel: "2026年11月7日",
  parent: { href: "/area/kawagoe/", label: "川越の庭業者" },
  badge: "川越市の地域情報",
  h1: "川越市の剪定枝の出し方｜直径10cm未満は長さ50cm未満・束30cm未満でひもでしばり可燃ごみ、1回5束まで",
  breadcrumbLabel: "川越市の剪定枝の出し方",
  tagChips: ["川越市", "剪定枝", "可燃ごみ", "落ち葉・草", "自己搬入"],
  ldHeadline: "川越市の剪定枝の出し方｜直径10cm未満は長さ50cm未満・束30cm未満でひもでしばり可燃ごみ、1回5束まで",
  ldDescription:
    "川越市で庭木の枝・落ち葉・草・木の根を出すときの大きさ、束ね方、1回に出せる量、太い枝の扱いを、市のごみ分別検索をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        川越市のごみ分別検索では、木の枝（直径10センチメートル未満）は
        <Hl>長さ50cm未満・直径10cm未満・束ねて30cm未満にしてひもでしばり、可燃ごみ</Hl>
        として出すと案内されています。1回の排出は5束までです（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月7日確認）。
      </p>
      <p>
        本記事では、枝の太さごとの扱い、落ち葉・草・木の根の出し方を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle:
    "直径10cm未満の枝は長さ50cm未満・束30cm未満でひもでしばり可燃ごみへ（1回5束まで）。太い枝は扱いが変わります。",
  conclusionBody: (
    <p>
      直径10センチメートル以上30センチメートル未満の枝は、搬入日・搬入量に制限があるため、
      <Hl>必ず事前に市処理施設に問い合わせる</Hl>
      よう案内されています。直径30センチメートル以上の枝は業者処分です。なお、検索結果には「木材」の基準とは異なるとの注記があります（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月7日確認）。
    </p>
  ),
  basicsHeading: "川越市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "直径10cm未満の枝は可燃ごみ",
      desc: "長さ50cm未満・直径10cm未満にし、束ねて30cm未満にしてひもでしばります。",
    },
    {
      title: "1回の排出は5束まで",
      desc: "ごみ分別検索の木の枝の項目に示されています。",
    },
    {
      title: "直径10cm以上30cm未満は事前に問い合わせ",
      desc: "搬入日・搬入量に制限があるため、市処理施設に事前に問い合わせます。",
    },
    {
      title: "直径30cm以上は業者処分",
      desc: "市の収集・搬入の対象ではなく、業者処分と案内されています。",
    },
    {
      title: "落ち葉・草は1回45L袋5つ程度まで",
      desc: "可燃ごみです。草は土を落とします。",
    },
  ],
  stepsHeading: "川越市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝の直径を確認する",
      desc: "直径10cm未満か、10cm以上30cm未満か、30cm以上かで出し方が変わります。",
    },
    {
      title: "長さ50cm未満に切りそろえる",
      desc: "可燃ごみに出す枝は、長さ50cm未満にします。",
    },
    {
      title: "束ねて30cm未満にしてひもでしばる",
      desc: "1回に出すのは5束までです。",
    },
    {
      title: "落ち葉・草は土を落として袋に入れる",
      desc: "集積所に出す場合は1回45リットル袋で5つ程度までです。",
    },
  ],
  ngHeading: "川越市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "直径10cm以上の枝を集積所に出しません",
      desc: "10cm以上30cm未満は市処理施設への事前の問い合わせが必要で、30cm以上は業者処分です。",
    },
    {
      title: "一度に6束以上出しません",
      desc: "木の枝は1回の排出に5束までとされています。",
    },
    {
      title: "土のついた根をそのまま出しません",
      desc: "木の根は、土を落として10cm角以下に切断できれば自己搬入できます。それ以外は造園業者へ依頼します。",
    },
  ],
  proHeading: "太い枝・根があるときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      川越市内の日常生活から出る家庭ごみは、東清掃センター・資源化センターへの持込み（自己搬入）ができます。品目ごとの搬入の可否は「ごみ品目マニュアル（家庭ごみ）」で確認するよう案内されています（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月7日確認）。直径30cm以上の枝や、10cm角以下に切断できない木の根は業者処分・造園業者への依頼になります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月7日確認）。川越で依頼できる庭業者の比較は
      <Link href="/area/kawagoe/" className={A}>川越の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "直径30cm以上の枝や根があるなら、処分込みの見積もりで比べる",
  ctaText:
    "太い枝や木の根は市の収集に出せず、業者処分になります。見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "川越市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "川越市で剪定した枝は何ごみですか？",
      a: "直径10センチメートル未満の木の枝は可燃ごみです。長さ50cm未満・直径10cm未満・束ねて30cm未満にしてひもでしばって出します。",
    },
    {
      q: "1回に何束まで出せますか？",
      a: "木の枝は1回の排出に5束までです。",
    },
    {
      q: "太い枝はどうすればよいですか？",
      a: "直径10センチメートル以上30センチメートル未満は、搬入日・搬入量に制限があるため事前に市処理施設に問い合わせます。直径30センチメートル以上は業者処分です。",
    },
    {
      q: "落ち葉や草はどう出しますか？",
      a: "可燃ごみです。集積所に出す場合は1回に45リットル袋で5つ程度までで、草は土を落として出します。",
    },
  ],
  related: [
    { href: "/area/kawagoe/", label: "川越の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/tokorozawa/senteieda/", label: "所沢市の剪定枝の出し方", desc: "隣接する市の分別ルール" },
    { href: "/area/kawagoe/hozon-jumoku/", label: "川越市の保存樹木・保存樹林", desc: "市の保存樹木の指定と奨励金" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KawagoeSenteiedaPage() {
  return <KnowArticle data={data} />;
}
