import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/toyama/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_FAQ = "https://www.city.toyama.lg.jp/faq/1008441/1009895/1008844.html";
const SRC_PJ = "https://www.city.toyama.lg.jp/kurashi/gomi/1010242/1019211.html";
const SRC_PDF = "https://www.city.toyama.lg.jp/_res/projects/default_project/_page_/001/019/211/sentei.pdf";
const T_FAQ =
  "よくある質問　庭の掃除をしたときに出る落ち葉や剪定枝（せんていし）などは、どのようにして出せばよいですか。｜富山市公式ウェブサイト";
const T_PJ = "剪定枝リサイクルプロジェクト（剪定枝資源化モデル事業）｜富山市公式ウェブサイト";

export const metadata: Metadata = {
  title: {
    absolute: "富山市の剪定枝の出し方｜長さ1m以内・太さ直径10cm程度まで縛って燃やせるごみ｜お庭のミカタ",
  },
  description:
    "富山市では、庭木の剪定枝はおおむね1m以内に切ってひもなどで縛り、燃やせるごみの日に出します。出せる太さは直径10cm程度まで。令和9年10月からの家庭ごみ有料化で剪定枝は対象外（無料）とされ、拠点回収の実証事業も行われています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "富山市の剪定枝の出し方｜長さ1m以内・直径10cm程度まで縛って燃やせるごみ",
    description:
      "富山市の剪定枝は燃やせるごみ。1m以内に切って縛る。太さは直径10cm程度まで。家庭ごみ有料化（令和9年10月）では剪定枝は対象外。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/toyama/senteieda",
  published: "2026-11-04",
  updatedLabel: "2026年11月4日",
  parent: { href: "/area/toyama/", label: "富山の庭業者" },
  badge: "富山市の地域情報",
  h1: "富山市の剪定枝の出し方｜長さ1m以内・太さ直径10cm程度まで縛って燃やせるごみ",
  breadcrumbLabel: "富山市の剪定枝の出し方",
  tagChips: ["富山市", "剪定枝", "燃やせるごみ", "家庭ごみ有料化", "拠点回収"],
  ldHeadline: "富山市の剪定枝の出し方｜長さ1m以内・太さ直径10cm程度まで縛って燃やせるごみ",
  ldDescription:
    "富山市で庭の剪定枝・草・落ち葉を燃やせるごみとして出すときの長さ・太さ、太い枝や幹の扱い、家庭ごみ有料化での剪定枝の扱いと剪定枝リサイクルプロジェクトを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        富山市では、<Hl>庭木の剪定枝はおおむね1メートル以内に切ってビニールひもなどで縛って出す</Hl>よう案内されています。
        出せる枝の太さは直径10センチメートル程度までです（出典：
        <a href={SRC_FAQ} className={A} target="_blank" rel="noopener noreferrer">{T_FAQ}</a>
        、2026年11月4日確認）。
      </p>
      <p>
        本記事では、燃やせるごみとしての出し方に加え、家庭ごみ有料化での剪定枝の扱いと、市が行う剪定枝の拠点回収を整理します。
      </p>
    </>
  ),
  conclusionTitle: "剪定枝は1m以内に切って縛り、燃やせるごみの日へ。直径10cm程度より太い枝や幹は市で処理できないため、専門の業者等に相談します。",
  conclusionBody: (
    <p>
      庭の草や落ち葉は、<Hl>土を落として乾燥させてから袋に入れて「燃やせるごみ」の日</Hl>に出します。
      直径10センチメートル程度を超える太い枝や幹は処理できないため、専門の業者等へ相談するよう案内されています。
      多量にある場合は、日を分けて少量ずつ出します（出典：
      <a href={SRC_FAQ} className={A} target="_blank" rel="noopener noreferrer">富山市 よくある質問</a>
      、2026年11月4日確認）。
    </p>
  ),
  basicsHeading: "富山市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定枝はおおむね1m以内に切って縛る",
      desc: "ビニールひもなどで縛って、燃やせるごみの日に出します。",
    },
    {
      title: "出せる太さは直径10cm程度まで",
      desc: "それ以上の太い枝や幹は処理できないため、専門の業者等へ相談します。",
    },
    {
      title: "草・落ち葉は土を落として乾燥させてから袋へ",
      desc: "乾燥させてから袋に入れて、燃やせるごみの日に出します。",
    },
    {
      title: "多量にある場合は日を分ける",
      desc: "一度にまとめず、日を分けて少量ずつ出すよう案内されています。",
    },
    {
      title: "家庭ごみ有料化で剪定枝は対象外（無料）",
      desc: "令和9年10月からの「家庭ごみ有料化制度」では、剪定枝は有料化の対象外（無料）とされています。",
    },
  ],
  stepsHeading: "富山市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝の太さを確かめる",
      desc: "直径10cm程度までなら燃やせるごみです。それより太い枝や幹は専門の業者等に相談します。",
    },
    {
      title: "おおむね1m以内に切る",
      desc: "長さをそろえて切ります。",
    },
    {
      title: "ひもなどで縛る",
      desc: "ビニールひもなどで縛ります。草や落ち葉は土を落として乾燥させてから袋に入れます。",
    },
    {
      title: "燃やせるごみの日に出す",
      desc: "量が多い場合は、日を分けて少量ずつ出します。",
    },
  ],
  ngHeading: "富山市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "直径10cm程度を超える枝や幹をごみに出しません",
      desc: "市では処理できないため、専門の業者等へ相談するよう案内されています。",
    },
    {
      title: "多量の枝を一度に出しません",
      desc: "日を分けて少量ずつ出すよう案内されています。",
    },
    {
      title: "拠点回収にビニールひもで縛った枝を持ち込みません",
      desc: "剪定枝リサイクルプロジェクトのチラシでは、結束用のビニールひも・針金・ポリ袋がついた枝は回収できないものとされています。",
    },
  ],
  proHeading: "市の剪定枝リサイクルプロジェクトと、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      富山市は、剪定枝を拠点回収して木質チップ（バイオマス燃料）へリサイクルする実証事業「剪定枝リサイクルプロジェクト」を実施しています。
      持ち込めるのは<Hl>富山市民で、かつ富山市内の家庭や地域活動で剪定した枝</Hl>に限られます（出典：
      <a href={SRC_PJ} className={A} target="_blank" rel="noopener noreferrer">{T_PJ}</a>
      、2026年11月4日確認）。
    </p>,
    <p key="2">
      周知チラシでは、令和8年10月17日（土）・18日（日）の開催で、持ち込めるものは長さ2m以内かつ太さ15cm以内の枝、
      事業活動（農業・林業など）で剪定した枝や刈り草・落ち葉、竹・笹等は持ち込めないとされています（出典：
      <a href={SRC_PDF} className={A} target="_blank" rel="noopener noreferrer">剪定枝リサイクルプロジェクト_周知チラシ</a>
      、2026年11月4日確認）。次回の開催は市のページで確認してください。
    </p>,
    <p key="3">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月4日確認）。富山で依頼できる庭業者の比較は
      <Link href="/area/toyama/" className={A}>富山の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "太い枝や幹が出る作業は、処分込みの見積もりで比べる",
  ctaText:
    "直径10cm程度を超える枝や幹は市で処理できません。伐採や大きな剪定を業者に依頼する場合は、処分が見積もりに含まれるかをそろえて比べてください。",
  faqHeading: "富山市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "富山市で剪定した枝は何ごみですか？",
      a: "燃やせるごみです。おおむね1m以内に切ってビニールひもなどで縛って出します。",
    },
    {
      q: "どのくらいの太さまで出せますか？",
      a: "直径10cm程度までです。それ以上の太い枝や幹は処理できないため、専門の業者等へ相談するよう案内されています。",
    },
    {
      q: "家庭ごみが有料になっても剪定枝は無料ですか？",
      a: "市の案内では、令和9年10月からの家庭ごみ有料化制度で、剪定枝は有料化の対象外（無料）とされています。",
    },
    {
      q: "剪定枝を回収してもらえる機会はありますか？",
      a: "市が実証事業として剪定枝リサイクルプロジェクト（拠点回収）を実施しています。対象は市内の家庭や地域活動で剪定した枝です。開催日は市のページで確認してください。",
    },
  ],
  related: [
    { href: "/area/toyama/", label: "富山の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/fuyugakoi-yukigakoi/", label: "庭木の冬囲い・雪囲い", desc: "雪の前に枝を守る準備" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function ToyamaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
