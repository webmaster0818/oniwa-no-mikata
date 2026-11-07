import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/yamagata/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.yamagata-yamagata.lg.jp/kurashi/gomi/1006506/1006508/1001857.html";
const SRC_T = "ごみの出し方｜山形市公式ホームページ";
const SRC2 = "https://www.city.yamagata-yamagata.lg.jp/faq/kurashi/gomikankyo/1007162/1019395.html";
const SRC2_T = "枝豆やバラの枝の出し方について｜山形市公式ホームページ";

export const metadata: Metadata = {
  title: {
    absolute:
      "山形市の剪定枝の出し方｜直径30cm以下・長さ60cm以下の束で1回3束まで、もやせるごみの有料化対象外｜お庭のミカタ",
  },
  description:
    "山形市では、剪定枝は直径30cm以下・長さ60cm以下の束にして1回3束まで、もやせるごみの日に出せます（有料化対象外）。" +
    "木1本の直径が15cm以上のものは市で処理できません。野菜や草花の枝は剪定枝として出せません。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "山形市の剪定枝の出し方｜直径30cm以下・長さ60cm以下の束で1回3束まで（有料化対象外）",
    description:
      "山形市の剪定枝は、直径30cm以下・長さ60cm以下の束にして1回3束まで。木1本の直径15cm以上は市で処理できず、野菜や草花の枝はもやせるごみの袋で出します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/yamagata/senteieda",
  published: "2026-11-07",
  updatedLabel: "2026年11月7日",
  parent: { href: "/area/yamagata/", label: "山形の庭業者" },
  badge: "山形市の地域情報",
  h1: "山形市の剪定枝の出し方｜直径30cm以下・長さ60cm以下の束で1回3束まで、もやせるごみの有料化対象外",
  breadcrumbLabel: "山形市の剪定枝の出し方",
  tagChips: ["山形市", "剪定枝", "もやせるごみ", "有料化対象外", "許可業者"],
  ldHeadline: "山形市の剪定枝の出し方｜直径30cm以下・長さ60cm以下の束で1回3束まで、もやせるごみの有料化対象外",
  ldDescription:
    "山形市で庭木の剪定枝を出すときの束の大きさ、1回に出せる量、出す時間、市で処理できない太さ、剪定枝として出せない枝を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        山形市では、もやせるごみ（週2回）のうち
        <Hl>剪定枝は有料化対象外で、直径30cm以下・長さ60cm以下の束にして1回3束まで</Hl>
        出せます（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月7日確認）。
      </p>
      <p>
        本記事では、束の大きさと量、出す時間、市で処理できない枝、剪定枝として扱われない枝を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle:
    "剪定枝は直径30cm以下・長さ60cm以下の束で1回3束まで。木1本の直径が15cm以上なら許可業者へ依頼します。",
  conclusionBody: (
    <p>
      市は、
      <Hl>木1本の直径が15cm以上あるものは市では処理できない</Hl>
      ため、一般廃棄物収集運搬業許可業者に依頼するよう案内しています。また、枝豆・ナス・トマト・シソなどの野菜類や、ヒマワリ・チューリップ・アジサイ・菊・ツル植物などの樹木以外の草花類は剪定枝の対象外で、もやせるごみとして出します（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月7日確認）。
    </p>
  ),
  basicsHeading: "山形市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "束は直径30cm以下・長さ60cm以下",
      desc: "この大きさの束にして出します。",
    },
    {
      title: "1回3束まで",
      desc: "もやせるごみの有料化対象外のものとして案内されています。",
    },
    {
      title: "収集日当日の午前6時から8時に出す",
      desc: "町内会等で決められた集積所に出します。",
    },
    {
      title: "木1本の直径15cm以上は市で処理できない",
      desc: "一般廃棄物収集運搬業許可業者に依頼します。",
    },
    {
      title: "野菜や草花の枝は剪定枝の対象外",
      desc: "もやせるごみとして出します。",
    },
  ],
  stepsHeading: "山形市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "木と野菜・草花を分ける",
      desc: "剪定枝として出せるのは樹木の枝です。野菜や草花の枝はもやせるごみにします。",
    },
    {
      title: "太さを確認する",
      desc: "木1本の直径が15cm以上のものは市で処理できません。",
    },
    {
      title: "長さ60cm以下にそろえて束ねる",
      desc: "束の直径は30cm以下にします。",
    },
    {
      title: "収集日の午前6時から8時に出す",
      desc: "1回に出すのは3束までです。",
    },
  ],
  ngHeading: "山形市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "バラや枝豆の枝を剪定枝として出しません",
      desc: "野菜の枝や花の枝はもやせるごみで、剪定枝として無料で出すことはできません。",
    },
    {
      title: "直径15cm以上の木を集積所に出しません",
      desc: "市では処理できないため、許可業者に依頼します。",
    },
    {
      title: "一度に4束以上出しません",
      desc: "剪定枝は1回3束までとされています。",
    },
  ],
  proHeading: "太い木があるときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      市のよくある質問では、枝豆やナス、シソの枝などの野菜の枝、バラやひまわり、アジサイなどの花の枝はもやせるごみで、剪定枝として無料で出すことはできないと案内されています。もやせるごみの袋に入れるか、直径30cm以下・長さ60cm以下の束にして共通収集シールを貼って出します（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月7日確認）。直径15cm以上の木は市で処理できないため、伐採とあわせて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月7日確認）。山形で依頼できる庭業者の比較は
      <Link href="/area/yamagata/" className={A}>山形の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "直径15cm以上の木があるなら、処分込みの見積もりで比べる",
  ctaText:
    "市で処理できない太さの木は、業者に処分まで頼むことになります。見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "山形市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "山形市で剪定した枝はどう出しますか？",
      a: "直径30cm以下、長さ60cm以下の束にして、1回3束までもやせるごみの日に出します。剪定枝は有料化対象外です。",
    },
    {
      q: "何時までに出せばよいですか？",
      a: "お住まいの地域の収集日当日の午前6時から8時に、町内会等で決められた集積所に出します。",
    },
    {
      q: "太い木はどうすればよいですか？",
      a: "木1本の直径が15cm以上あるものは市では処理できません。一般廃棄物収集運搬業許可業者に依頼します。",
    },
    {
      q: "バラの枝も剪定枝として出せますか？",
      a: "出せません。バラやひまわり、アジサイなどの花の枝や、枝豆・ナス・シソなどの野菜の枝はもやせるごみです。",
    },
  ],
  related: [
    { href: "/area/yamagata/", label: "山形の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/sendai/senteieda/", label: "仙台市の剪定枝の出し方", desc: "近隣の市の分別ルール" },
    { href: "/area/fukushima/senteieda/", label: "福島市の剪定枝の出し方", desc: "近隣の市の分別ルール" },
    { href: "/fuyugakoi-yukigakoi/", label: "庭木の冬囲い・雪囲い", desc: "雪の前に済ませたい庭木の準備" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function YamagataSenteiedaPage() {
  return <KnowArticle data={data} />;
}
