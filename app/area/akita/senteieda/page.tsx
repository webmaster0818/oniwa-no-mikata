import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/akita/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.akita.lg.jp/kurashi/recycle/1006071/1010211/1012981.html";
const SRC_T = "家庭ごみの出し方｜秋田市公式サイト";
const SRC2 = "https://www.city.akita.lg.jp/kurashi/recycle/1006071/1010211/1006252.html";
const SRC2_T = "秋田市　ごみの分け方・出し方　さ行｜秋田市公式サイト";

export const metadata: Metadata = {
  title: {
    absolute: "秋田市の剪定枝の出し方｜50cm以下にして束ね、袋に入れずに家庭ごみへ。1回2束まで｜お庭のミカタ",
  },
  description:
    "秋田市では、剪定枝は50cm以下にして束ねれば、袋に入れずにそのまま家庭ごみとして出せます（1回の収集につき2束まで）。草・落葉は資源化物用袋で1回2袋まで。集積所に大量にあると次回以降の収集になる場合があります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "秋田市の剪定枝の出し方｜50cm以下で束ね、袋なしで家庭ごみ（1回2束まで）",
    description:
      "秋田市の剪定枝は50cm以下にして束ね、袋に入れずに家庭ごみへ。1回の収集につき2束まで。草・落葉は資源化物用袋で1回2袋まで。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/akita/senteieda",
  published: "2026-11-06",
  updatedLabel: "2026年11月6日",
  parent: { href: "/area/akita/", label: "秋田の庭業者" },
  badge: "秋田市の地域情報",
  h1: "秋田市の剪定枝の出し方｜50cm以下にして束ね、袋に入れずに家庭ごみへ。1回2束まで",
  breadcrumbLabel: "秋田市の剪定枝の出し方",
  tagChips: ["秋田市", "剪定枝", "家庭ごみ", "資源化物用袋", "1回2束"],
  ldHeadline: "秋田市の剪定枝の出し方｜50cm以下にして束ね、袋に入れずに家庭ごみへ。1回2束まで",
  ldDescription:
    "秋田市で庭木の剪定枝・草・落葉を出すときの長さ、束ね方、1回に出せる量、集積所に大量にある場合の扱いを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        秋田市では、
        <Hl>剪定枝は50センチメートル以下にして束ねれば、袋に入れずにそのまま家庭ごみとして出せます</Hl>
        。1回の収集につき2束までです（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月6日確認）。
      </p>
      <p>
        本記事では、束ね方と量の決まり、草や落葉との違い、量が多いときの考え方を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "剪定枝は50cm以下で束ね、袋に入れずに家庭ごみへ。1回2束まで、草・落葉は資源化物用袋で1回2袋までです。",
  conclusionBody: (
    <p>
      市の分別一覧でも、剪定枝は<Hl>家庭ごみ・50センチメートル以下に結束して1回の収集につき2束まで</Hl>とされています。
      家庭ごみを優先して収集するため、集積所に大量の剪定枝・草・落ち葉がある場合は、一時的に残置して次回以降の収集とする場合があります（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月6日確認）。
    </p>
  ),
  basicsHeading: "秋田市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定枝は50cm以下にして束ねる",
      desc: "長さ50cm以下にそろえて束ねます。",
    },
    {
      title: "束ねた剪定枝は袋に入れなくてよい",
      desc: "束ねてそのまま家庭ごみとして出すことができます。",
    },
    {
      title: "1回の収集につき2束まで",
      desc: "それより多い分は次の収集日以降に分けて出します。",
    },
    {
      title: "草・落葉は資源化物用袋で1回2袋まで",
      desc: "雑草・刈草・落葉が対象で、観賞用植物や家庭菜園から出た茎は除かれます。",
    },
    {
      title: "収集日の午前6時から8時までに出す",
      desc: "収集日前や収集後には出さないよう案内されています。",
    },
  ],
  stepsHeading: "秋田市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "長さを50cm以下にそろえる",
      desc: "50cmを超える枝は切り分けます。",
    },
    {
      title: "ひもで束ねる",
      desc: "束ねた剪定枝は袋に入れずに出せます。",
    },
    {
      title: "量を1回2束までに分ける",
      desc: "多い場合は収集日を分けて出します。",
    },
    {
      title: "家庭ごみの日の朝8時までに出す",
      desc: "家庭ごみの収集は週2回で、収集日の午前6時から8時までに集積所へ出します。",
    },
  ],
  ngHeading: "秋田市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "一度に3束以上を出しません",
      desc: "剪定枝は1回の収集につき2束までとされています。",
    },
    {
      title: "50cmを超える枝をそのまま束ねません",
      desc: "家庭ごみとして出すには50cm以下にします。",
    },
    {
      title: "収集日の前日や収集後に出しません",
      desc: "収集日の午前6時から8時までに出すよう案内されています。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      市は、家庭ごみを優先して収集するため、集積所に大量の剪定枝・草・落ち葉がある場合は一時的に残置し、次回以降の収集とする場合があるとしています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月6日確認）。一度に出しきれない量が出る作業では、収集日を分ける前提で計画するか、処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月6日確認）。秋田で依頼できる庭業者の比較は
      <Link href="/area/akita/" className={A}>秋田の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "2束ずつでは出しきれない量なら、処分込みの見積もりで比べる",
  ctaText:
    "庭木をまとめて剪定すると、1回2束の範囲では何回にも分けて出すことになります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "秋田市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "秋田市で剪定した枝は何ごみですか？",
      a: "家庭ごみです。50センチメートル以下にして束ねれば、袋に入れずにそのまま出せます。",
    },
    {
      q: "1回にどれくらい出せますか？",
      a: "剪定枝は1回の収集につき2束まで、草・落葉は資源化物用袋で1回2袋までです。",
    },
    {
      q: "草や落ち葉も同じ出し方ですか？",
      a: "草（雑草・刈草）・落葉は「資源化物用」袋に入れて出すことができます。観賞用植物、家庭菜園から出た茎は除かれます。",
    },
    {
      q: "大量に出すとどうなりますか？",
      a: "家庭ごみを優先して収集するため、一時的に残置し、次回以降の収集とする場合があると案内されています。",
    },
  ],
  related: [
    { href: "/area/akita/", label: "秋田の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/morioka/senteieda/", label: "盛岡市の剪定枝の出し方", desc: "東北の県庁所在地の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function AkitaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
