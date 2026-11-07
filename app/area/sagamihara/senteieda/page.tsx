import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/sagamihara/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.sagamihara.kanagawa.jp/kurashi/1026489/recycle/1026493/katei/1014750.html";
const SRC_T = "枝の出し方｜相模原市";
const SRC2 = "https://www.city.sagamihara.kanagawa.jp/shisei/1026875/faq/gomi/1002507.html";
const SRC2_T = "よくある質問　植木の剪定や日曜大工で出た草木の処理方法を知りたい。｜相模原市";

export const metadata: Metadata = {
  title: {
    absolute:
      "相模原市の剪定枝の出し方｜長さ50cm未満・太さ10cm以下は一般ごみ、50cm以上2m以下は粗大ごみ｜お庭のミカタ",
  },
  description:
    "相模原市では、長さ50cm未満・太さ10cm以下の枝は一般ごみ、長さ50cm以上2m以下は粗大ごみです。" +
    "太さ10cmを超える枝や長さ2mを超える枝は市で処理できません。束ね方と搬入先を市の公式情報で整理します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "相模原市の剪定枝の出し方｜50cm未満・太さ10cm以下は一般ごみ、2mまでは粗大ごみ",
    description:
      "相模原市の枝は大きさで出し方が変わります。50cm未満・太さ10cm以下は一般ごみ、50cm以上2m以下は粗大ごみ、それを超えるものは市で処理できません。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/sagamihara/senteieda",
  published: "2026-11-07",
  updatedLabel: "2026年11月7日",
  parent: { href: "/area/sagamihara/", label: "相模原の庭業者" },
  badge: "相模原市の地域情報",
  h1: "相模原市の剪定枝の出し方｜長さ50cm未満・太さ10cm以下は一般ごみ、50cm以上2m以下は粗大ごみ",
  breadcrumbLabel: "相模原市の剪定枝の出し方",
  tagChips: ["相模原市", "剪定枝", "一般ごみ", "粗大ごみ", "清掃工場"],
  ldHeadline: "相模原市の剪定枝の出し方｜長さ50cm未満・太さ10cm以下は一般ごみ、50cm以上2m以下は粗大ごみ",
  ldDescription:
    "相模原市で庭木の剪定枝を出すときの大きさごとの区分、束ね方、直接搬入できる施設、市で処理できない枝の扱いを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        相模原市では、枝は大きさによって処分方法が異なります。
        <Hl>長さ50センチメートル未満で、かつ太さ10センチメートル以下の枝は一般ごみ</Hl>
        です（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月7日確認）。
      </p>
      <p>
        本記事では、大きさごとの区分、束ね方、直接搬入できる施設、市で処理できない枝の扱いを市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle:
    "50cm未満・太さ10cm以下は一般ごみ、50cm以上2m以下は粗大ごみ。太さ10cm超・長さ2m超は市で処理できません。",
  conclusionBody: (
    <p>
      市のよくある質問でも、植木の剪定で出た草木を一般ごみの日にごみ資源集積場所に出す場合は、
      <Hl>長さ50センチメートル未満、太さ10センチメートル以下</Hl>
      にするよう案内されています。それ以上のものは粗大ごみ、または処理困難物となります（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月7日確認）。
    </p>
  ),
  basicsHeading: "相模原市の枝の出し方で押さえる4つの区分",
  basicsLabel: "区分",
  basics: [
    {
      title: "50cm未満・太さ10cm以下は一般ごみ",
      desc: "できるだけ少量ずつ、ひもでしばるか透明または半透明の袋に入れて出します。",
    },
    {
      title: "50cm以上2m以下・太さ10cm以下は粗大ごみ",
      desc: "粗大ごみの戸別収集を申し込むか、南清掃工場または津久井クリーンセンターへ直接搬入（有料）します。",
    },
    {
      title: "太さ10cm超・長さ2m超は市で処理できない",
      desc: "破砕できないため、市では処理できないものとされています。",
    },
    {
      title: "竹は粗大ごみ",
      desc: "南清掃工場への直接搬入か、戸別収集を申し込みます。",
    },
  ],
  stepsHeading: "相模原市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "太さを確認する",
      desc: "太さ10cmを超える枝は市で処理できないため、先に分けておきます。",
    },
    {
      title: "長さ50cm未満に切りそろえる",
      desc: "一般ごみとして出す枝は、長さ50cm未満にします。",
    },
    {
      title: "少量ずつしばるか袋に入れる",
      desc: "ひもでしばるか、透明または半透明の袋に入れます。",
    },
    {
      title: "長い枝は粗大ごみとして申し込む",
      desc: "50cm以上2m以下の枝は、戸別収集を申し込むか直接搬入します。",
    },
  ],
  ngHeading: "相模原市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "長い枝を一般ごみに出しません",
      desc: "長さ50cm以上の枝は粗大ごみの扱いです。",
    },
    {
      title: "粗大ごみの枝を北清掃工場に運びません",
      desc: "粗大ごみの枝は、粗大ごみ受入施設と北清掃工場では受け入れていません。",
    },
    {
      title: "太い枝を集積場所に出しません",
      desc: "太さ10cmを超える枝は市では処理できないものです。",
    },
  ],
  proHeading: "量が多いとき・太い枝があるときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      一般ごみを直接搬入する場合は北清掃工場・南清掃工場・津久井クリーンセンター、粗大ごみの枝は南清掃工場または津久井クリーンセンターへの搬入（有料）が案内されています。太さ10cmを超える枝や長さ2mを超える枝は市で処理できません（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月7日確認）。太い枝を切る作業や運搬の手間をかけられない場合は、処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月7日確認）。相模原で依頼できる庭業者の比較は
      <Link href="/area/sagamihara/" className={A}>相模原の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "太さ10cmを超える枝があるなら、処分込みの見積もりで比べる",
  ctaText:
    "市で処理できない太い枝や長い枝は、業者に処分まで頼むことになります。見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "相模原市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "相模原市で剪定した枝は何ごみですか？",
      a: "長さ50センチメートル未満で、かつ太さ10センチメートル以下の枝は一般ごみです。長さ50センチメートル以上2メートル以下で、かつ太さ10センチメートル以下の枝は粗大ごみです。",
    },
    {
      q: "枝は袋に入れる必要がありますか？",
      a: "一般ごみとして出す枝は、できるだけ少量ずつ、ひもでしばるか透明または半透明の袋に入れて出します。",
    },
    {
      q: "太い枝はどうすればよいですか？",
      a: "太さが10センチメートルを超える枝、または長さが2メートルを超える枝は、破砕できないため市では処理できないものとされています。",
    },
    {
      q: "竹はどう出しますか？",
      a: "竹は粗大ごみの扱いで、南清掃工場への直接搬入か、戸別収集を申し込みます。",
    },
  ],
  related: [
    { href: "/area/sagamihara/", label: "相模原の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/machida/senteieda/", label: "町田市の剪定枝の出し方", desc: "隣接する市の分別ルール" },
    { href: "/area/sagamihara/ikegaki-josei/", label: "相模原市の生垣設置助成", desc: "市の生垣づくりの助成制度" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function SagamiharaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
