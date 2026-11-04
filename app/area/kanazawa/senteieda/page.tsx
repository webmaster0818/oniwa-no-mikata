import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/kanazawa/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_MOYASU = "https://www4.city.kanazawa.lg.jp/soshikikarasagasu/gomigenryosuishinka/gyomuannai/1/3/3/7591.html";
const SRC_QA = "https://www4.city.kanazawa.lg.jp/soshikikarasagasu/gomigenryosuishinka/yokuarushitsumon/kateigomi_qa/3048.html";
const T_MOYASU = "燃やすごみ 週2回収集／金沢市公式ホームページ いいね金沢";
const T_QA = "ごみの分け方・出し方【市で収集できないもの等】に関する質問／金沢市公式ホームページ いいね金沢";

export const metadata: Metadata = {
  title: {
    absolute: "金沢市の剪定枝の出し方｜指定ごみ袋は不要、太さ10cm・長さ70cm程度まで燃やすごみ｜お庭のミカタ",
  },
  description:
    "金沢市では、せん定枝・落ち葉・草花は指定ごみ袋の対象外で、泥をはらってひもで束ねるか半透明袋で燃やすごみに出します。太さ10cm程度・長さ70cm程度まで。長さ70cmを超える枝は埋立ごみ、2m以上は出せません。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "金沢市の剪定枝の出し方｜指定ごみ袋は不要、太さ10cm・長さ70cm程度まで",
    description:
      "金沢市のせん定枝は燃やすごみ（指定ごみ袋は不要）。太さ10cm程度・長さ70cm程度まで。70cm超は埋立ごみ、2m以上は不可。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/kanazawa/senteieda",
  published: "2026-11-04",
  updatedLabel: "2026年11月4日",
  parent: { href: "/area/kanazawa/", label: "金沢の庭業者" },
  badge: "金沢市の地域情報",
  h1: "金沢市の剪定枝の出し方｜指定ごみ袋は不要、太さ10cm・長さ70cm程度まで燃やすごみ",
  breadcrumbLabel: "金沢市の剪定枝の出し方",
  tagChips: ["金沢市", "せん定枝", "燃やすごみ", "埋立ごみ", "半透明袋"],
  ldHeadline: "金沢市の剪定枝の出し方｜指定ごみ袋は不要、太さ10cm・長さ70cm程度まで燃やすごみ",
  ldDescription:
    "金沢市でせん定枝・落ち葉・草花を燃やすごみとして出すときの束ね方、太さ・長さの目安、埋立ごみになる長さ、業者が剪定した枝の扱いを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        金沢市では、<Hl>せん定枝・落ち葉・草花は指定ごみ袋の対象とならないごみ</Hl>で、
        半透明袋に入れて燃やすごみの日に出すことができます。袋に入らないせん定枝は、ひもで束ねて出すよう案内されています（出典：
        <a href={SRC_MOYASU} className={A} target="_blank" rel="noopener noreferrer">{T_MOYASU}</a>
        、2026年11月4日確認）。
      </p>
      <p>
        本記事では、出せる太さ・長さの目安と、長い枝や量が多い場合の扱いを市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "太さ10cm程度・長さ70cm程度までは燃やすごみ。長さ70cmを超える枝は埋立ごみで、2m以上のものは出せません。",
  conclusionBody: (
    <p>
      市の案内では、<Hl>太さは10センチメートル程度、長さ70センチメートル程度のものまで</Hl>燃やすごみに出せます。
      長さ70センチメートルを超える場合は埋立ごみで、埋立ごみとして出す際も指定ごみ袋は不要、<Hl>2メートル以上のものは出せません</Hl>（出典：
      <a href={SRC_MOYASU} className={A} target="_blank" rel="noopener noreferrer">{T_MOYASU}</a>
      、2026年11月4日確認）。
    </p>
  ),
  basicsHeading: "金沢市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "せん定枝・落ち葉・草花は指定ごみ袋の対象外",
      desc: "半透明袋に入れて出すことができます。袋に入らないせん定枝は、ひもで束ねて出します。",
    },
    {
      title: "泥をはらってから出す",
      desc: "せん定枝、落ち葉、草花は泥をはらい、ひもでしばるか半透明の袋に入れて出します。",
    },
    {
      title: "太さ10cm程度・長さ70cm程度まで",
      desc: "長さ70cmを超える場合は埋立ごみです。埋立ごみとして出す際も指定ごみ袋は不要です。",
    },
    {
      title: "2m以上のものは出せない",
      desc: "市で収集できないものとして、長さ2メートル以上または55キログラム以上のものが挙げられています。",
    },
    {
      title: "業者が剪定した枝木は市で収集しない",
      desc: "業者の剪定した枝木は、市で収集できないものに含まれています。",
    },
  ],
  stepsHeading: "金沢市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "泥をはらう",
      desc: "枝・落ち葉・草花についた泥を落とします。",
    },
    {
      title: "長さと太さを確かめる",
      desc: "太さ10cm程度・長さ70cm程度までなら燃やすごみ、長さ70cmを超える場合は埋立ごみです。",
    },
    {
      title: "ひもで束ねるか、半透明袋に入れる",
      desc: "指定ごみ袋は不要です。袋に入らないせん定枝はひもで束ねます。",
    },
    {
      title: "量が多い場合は収集日を選ぶ",
      desc: "量が多い場合は、できるだけ木・金の収集日に出すよう案内されています。一回で多くの量を出す場合は、埋立場への自己搬入または多量ごみの案内があります。",
    },
  ],
  ngHeading: "金沢市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "家庭菜園の枝・茎を半透明袋で出しません",
      desc: "家庭菜園から出る野菜くずや枝・茎は、指定ごみ袋で出すよう案内されています。",
    },
    {
      title: "2m以上の幹や枝をごみステーションに出しません",
      desc: "長さ2メートル以上のものは市で収集できません。",
    },
    {
      title: "業者が切った枝をごみステーションに出しません",
      desc: "業者の剪定した枝木は市で収集できないものです。作業を依頼する場合は、処分の方法を見積もりの段階で確認します。",
    },
  ],
  proHeading: "業者に頼む場合は、枝の処分が見積もりに含まれるかを確認する",
  proParas: [
    <p key="1">
      金沢市のよくある質問では、市で収集できないものとして「業者の剪定した枝木」が挙げられ、
      市で収集できないものは専門業者に処分を依頼するよう案内されています（出典：
      <a href={SRC_QA} className={A} target="_blank" rel="noopener noreferrer">{T_QA}</a>
      、2026年11月4日確認）。剪定を業者に頼む場合は、<Hl>切った枝の処分が作業に含まれるか</Hl>を見積もりで確認してください。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月4日確認）。金沢で依頼できる庭業者の比較は
      <Link href="/area/kanazawa/" className={A}>金沢の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "業者に剪定を頼むなら、処分込みの見積もりで比べる",
  ctaText:
    "業者が剪定した枝は市で収集されません。複数社に見積もりを依頼する場合は、枝の処分が含まれているかをそろえて比べてください。",
  faqHeading: "金沢市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "金沢市で剪定した枝は何ごみですか？",
      a: "燃やすごみです。指定ごみ袋の対象外で、泥をはらってひもで束ねるか半透明袋に入れて出します。",
    },
    {
      q: "長い枝はどうしますか？",
      a: "太さ10cm程度・長さ70cm程度までは燃やすごみです。長さ70cmを超える場合は埋立ごみで、2m以上のものは出せません。",
    },
    {
      q: "植木屋さんに剪定してもらった枝は出せますか？",
      a: "市の案内では、業者の剪定した枝木は市で収集できないものです。専門業者に処分を依頼するよう案内されています。",
    },
    {
      q: "量が多いときはどうしますか？",
      a: "できるだけ木・金の収集日に出すよう案内されています。一回で多くの量を出す場合は、埋立場への自己搬入または多量ごみの案内があります。",
    },
  ],
  related: [
    { href: "/area/kanazawa/", label: "金沢の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/fuyugakoi-yukigakoi/", label: "庭木の冬囲い・雪囲い", desc: "雪の前に枝を守る準備" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KanazawaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
