import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/kasukabe/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.kasukabe.lg.jp/kurashi/gomi_recycle/kateigomi/19165.html";
const T_SRC = "可燃ごみの出し方／春日部市公式ホームページ";
const SRC2 = "https://www.city.kasukabe.lg.jp/kurashi/gomi_recycle/kateigomi/9748.html";
const T_SRC2 = "ごみと資源物の出し方のルール／春日部市公式ホームページ";
const SRC3 = "https://www.city.kasukabe.lg.jp/kurashi/gomi_recycle/kateigomi/33098.html";
const T_SRC3 = "剪定枝・伐採木の処分／春日部市公式ホームページ";

export const metadata: Metadata = {
  title: {
    absolute: "春日部市の剪定枝の出し方｜幹径10cm以下は50cm以下に切って束ねて可燃ごみ、超えるものは処理困難物｜お庭のミカタ",
  },
  description:
    "春日部市では、家庭で剪定した枝（幹径10cm以下）は50cm以下に裁断してひもで束ね、可燃ごみ（週3回）へ。直径10cmまたは長さ50cmを超える枝は処理困難物で、市の施設では処理できません。量が多いときは数回に分けて出します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "春日部市の剪定枝の出し方｜幹径10cm以下は50cm以下で束ねて可燃ごみ",
    description:
      "春日部市の剪定枝は幹径10cm以下なら50cm以下に切って束ね可燃ごみへ。直径10cm・長さ50cmを超えるものは処理困難物。多いときは数回に分ける。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/kasukabe/senteieda",
  published: "2026-11-05",
  updatedLabel: "2026年11月5日",
  parent: { href: "/area/kasukabe/", label: "春日部の庭業者" },
  badge: "春日部市の地域情報",
  h1: "春日部市の剪定枝の出し方｜幹径10cm以下は50cm以下に切って束ねて可燃ごみ、超えるものは処理困難物",
  breadcrumbLabel: "春日部市の剪定枝の出し方",
  tagChips: ["春日部市", "剪定枝", "可燃ごみ", "処理困難物", "許可業者"],
  ldHeadline: "春日部市の剪定枝の出し方｜幹径10cm以下は50cm以下に切って束ねて可燃ごみ、超えるものは処理困難物",
  ldDescription:
    "春日部市で家庭の剪定枝を可燃ごみに出すときの太さと長さの基準、量が多いときの出し方、市の施設で処理できない大きさの枝の扱いを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        春日部市では、家庭で剪定した枝などの樹木（幹径10cm以下）は、
        <Hl>50cm以下に裁断してひもで束ね、可燃ごみ</Hl>として出します。
        可燃ごみの収集は週3回です（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
        、2026年11月5日確認）。
      </p>
      <p>
        本記事では、可燃ごみに出せる大きさ、量が多いときの出し方、市で処理できない大きさの枝の扱いを市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "幹径10cm以下の枝は50cm以下で束ねて可燃ごみ。直径10cmまたは長さ50cmを超えるものは処理困難物になり、市の施設では処理できません。",
  conclusionBody: (
    <p>
      市の可燃ごみの品目では、生木・小枝、植木の枝葉は<Hl>直径10cm、または長さ50cmを超えるものは処理困難物</Hl>とされています。
      剪定枝のページでは、この大きさを超える剪定枝・根・株・幹は市の施設で処理できず、受け入れ可能な許可業者に処分を依頼できると案内されています（出典：
      <a href={SRC3} className={A} target="_blank" rel="noopener noreferrer">{T_SRC3}</a>
      、2026年11月5日確認）。
    </p>
  ),
  basicsHeading: "春日部市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "幹径10cm以下の枝は可燃ごみ",
      desc: "50cm以下に裁断して、ひもで束ねて出します。",
    },
    {
      title: "直径10cm・長さ50cmを超えると処理困難物",
      desc: "市の施設では処理できません。",
    },
    {
      title: "量が多いときは数回に分ける",
      desc: "庭木の剪定枝は、分別ルールを守って数回に分けて集積所に出すよう案内されています。",
    },
    {
      title: "収集日の朝8時までに出す",
      desc: "可燃ごみの収集は週3回です。",
    },
    {
      title: "葉などを袋に入れるときは45L以下の透明・白色半透明袋",
      desc: "色つきの袋、レジ袋、段ボール箱、紙袋は使えません。",
    },
  ],
  stepsHeading: "春日部市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "太さを確かめる",
      desc: "幹径10cm以下なら可燃ごみに出せます。超える場合は許可業者への依頼を検討します。",
    },
    {
      title: "50cm以下に裁断してひもで束ねる",
      desc: "長さ50cmを超える枝は処理困難物になるため、切りそろえます。",
    },
    {
      title: "量が多ければ数回に分ける",
      desc: "一度にまとめて出さず、収集日を分けて出します。",
    },
    {
      title: "収集日の朝8時までに集積所へ",
      desc: "収集日は収集区によって異なるため、ごみ収集カレンダーで確かめます。",
    },
  ],
  ngHeading: "春日部市で剪定枝を処分するときに避けたいこと",
  ngs: [
    {
      title: "太い幹や根を可燃ごみに出しません",
      desc: "直径10cmまたは長さ50cmを超えるものは処理困難物で、市の施設では処理できません。",
    },
    {
      title: "一度に大量の枝を集積所に出しません",
      desc: "剪定枝や一時多量ごみは、数回に分けて出すよう案内されています。",
    },
    {
      title: "無許可の業者に処分を頼みません",
      desc: "一般廃棄物の処分を無許可業者に依頼すると、依頼者側も法令違反に問われる可能性があると市は案内しています。",
    },
  ],
  proHeading: "太い枝・根・株があるときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      市の剪定枝のページには、直径10cmまたは長さ50cmを超える剪定枝・伐採木・伐根を受け入れ可能な許可業者が掲載されています。
      依頼の前に、受け入れ条件（量や太さ、長さなど）や処理料金、営業日時を確認するよう案内されています。草などは市の施設（豊野環境センター）で処理できるため対象外です（出典：
      <a href={SRC3} className={A} target="_blank" rel="noopener noreferrer">{T_SRC3}</a>
      、2026年11月5日確認）。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月5日確認）。集積所の出し方は
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{T_SRC2}</a>
      も参考になります。春日部で依頼できる庭業者の比較は
      <Link href="/area/kasukabe/" className={A}>春日部の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "伐採や抜根で太い木が出るなら、処分込みの見積もりで比べる",
  ctaText:
    "幹径10cmを超える幹や根・株は市では処理できません。伐採や抜根を頼む場合は、見積もりで処分まで含まれるかをそろえて比べてください。",
  faqHeading: "春日部市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "春日部市で剪定した枝は何ごみですか？",
      a: "幹径10cm以下の枝は、50cm以下に裁断してひもで束ね、可燃ごみとして出します。",
    },
    {
      q: "太い枝はどうしますか？",
      a: "直径10cmまたは長さ50cmを超えるものは処理困難物で、市の施設では処理できません。市のページに掲載された受け入れ可能な許可業者に相談できます。",
    },
    {
      q: "たくさん出たときは？",
      a: "庭木の剪定枝は、分別ルールを守り、数回に分けて集積所に出すよう案内されています。",
    },
    {
      q: "刈った草も許可業者に頼む必要がありますか？",
      a: "草などは市の施設（豊野環境センター）で処理できるため、許可業者への依頼の対象外とされています。",
    },
  ],
  related: [
    { href: "/area/kasukabe/", label: "春日部の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/koshigaya/senteieda/", label: "越谷市の剪定枝の出し方", desc: "隣接する市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/bassai-110ban-bassai-bakkon/", label: "伐採110番の伐採・抜根", desc: "料金ページの表示と処分の確認点" },
  ],
};

export default function KasukabeSenteiedaPage() {
  return <KnowArticle data={data} />;
}
