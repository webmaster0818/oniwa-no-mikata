import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/yokosuka/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.yokosuka.kanagawa.jp/cgi-bin/gomi/detail.php?id=734&lang=1";
const SRC_T = "剪定枝/刈り草/落ち葉｜横須賀市";
const SRC2 = "https://www.city.yokosuka.kanagawa.jp/4150/g_info/l100000695.html";
const SRC2_T = "燃せるごみ｜横須賀市";

export const metadata: Metadata = {
  title: {
    absolute: "横須賀市の剪定枝の出し方｜長さ50cm・直径20cm以内に束ねるか透明・半透明の袋で燃せるごみ｜お庭のミカタ",
  },
  description:
    "横須賀市では、剪定枝・刈り草・落ち葉は燃せるごみです。長さ50cm・直径20cm以内にひもで束ねるか、無色透明か白色半透明のポリ袋に入れて出します。トゲのある枝は「危険・トゲ」と書いた紙を貼ります。量が多いときはエコミルへの持ち込みも案内されています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "横須賀市の剪定枝の出し方｜長さ50cm・直径20cm以内に束ねて燃せるごみ",
    description:
      "横須賀市の剪定枝・刈り草・落ち葉は燃せるごみ。長さ50cm・直径20cm以内に束ねるか、透明・半透明の袋へ。エコミルへの持ち込みは幹の太さで長さの上限が変わります。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/yokosuka/senteieda",
  published: "2026-11-06",
  updatedLabel: "2026年11月6日",
  parent: { href: "/area/yokosuka/", label: "横須賀の庭業者" },
  badge: "横須賀市の地域情報",
  h1: "横須賀市の剪定枝の出し方｜長さ50cm・直径20cm以内に束ねるか透明・半透明の袋で燃せるごみ",
  breadcrumbLabel: "横須賀市の剪定枝の出し方",
  tagChips: ["横須賀市", "剪定枝", "燃せるごみ", "エコミル", "持ち込み"],
  ldHeadline: "横須賀市の剪定枝の出し方｜長さ50cm・直径20cm以内に束ねるか透明・半透明の袋で燃せるごみ",
  ldDescription:
    "横須賀市で剪定枝・刈り草・落ち葉を出すときの長さと束の直径、袋の種類、トゲのある枝の表示、横須賀ごみ処理施設エコミルへ持ち込む場合の大きさを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        横須賀市では、剪定枝・刈り草・落ち葉は燃せるごみです。
        <Hl>長さ50センチメートル・直径20センチメートル以内にひもで束ねるか、無色透明か白色半透明のポリ袋に入れて出します</Hl>
        （出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月6日確認）。
      </p>
      <p>
        本記事では、束ね方と袋の決まり、トゲのある枝の出し方、量が多いときの持ち込みの大きさを市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "長さ50cm・直径20cm以内に束ねるか、透明・半透明の袋に入れて燃せるごみへ。持ち込みなら幹は太さに応じて1mまたは50cm以下です。",
  conclusionBody: (
    <p>
      横須賀ごみ処理施設エコミルへ持ち込む場合は、<Hl>幹は太さ10cm未満なら長さ1m以下、太さ10cm以上20cm未満なら長さ50cm以下、草・枝は長さ1m以下</Hl>であれば処分できるとされています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月6日確認）。
    </p>
  ),
  basicsHeading: "横須賀市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定枝・刈り草・落ち葉は燃せるごみ",
      desc: "市のごみ分別検索で燃せるごみに分類されています。",
    },
    {
      title: "長さ50cm・直径20cm以内に束ねる",
      desc: "ひもで束ねて出します。",
    },
    {
      title: "袋なら無色透明か白色半透明のポリ袋",
      desc: "束ねずに袋に入れて出すこともできます。",
    },
    {
      title: "トゲのある枝は紙で表示する",
      desc: "「危険・トゲ」などと紙に書いて貼ります。",
    },
    {
      title: "持ち込みは幹の太さで長さが変わる",
      desc: "エコミルでは太さ10cm未満は1m以下、10cm以上20cm未満は50cm以下です。",
    },
  ],
  stepsHeading: "横須賀市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "長さを50cm以内に切る",
      desc: "収集に出す場合は長さ50cm以内にそろえます。",
    },
    {
      title: "束ねるか袋に入れる",
      desc: "直径20cm以内にひもで束ねるか、無色透明か白色半透明のポリ袋に入れます。",
    },
    {
      title: "トゲのある枝に表示を貼る",
      desc: "「危険・トゲ」などと紙に書いて貼ります。",
    },
    {
      title: "燃せるごみの日に出す",
      desc: "収集日は市の分別収集カレンダーで確認します。",
    },
  ],
  ngHeading: "横須賀市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "色付きの袋に入れて出しません",
      desc: "無色透明か白色半透明のポリ袋を使うよう案内されています。",
    },
    {
      title: "トゲのある枝を表示なしで出しません",
      desc: "「危険・トゲ」などと紙に書いて貼るよう案内されています。",
    },
    {
      title: "長さ50cmを超える枝をそのまま収集に出しません",
      desc: "収集に出す場合は長さ50cm以内にそろえるよう案内されています。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      燃せるごみは、横須賀ごみ処理施設エコミル（長坂5-1-1）へ有料で持ち込むことができます。市の生ごみ等減量化処理機器購入費補助制度では、小枝粉砕機も対象機器に含まれています（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月6日確認）。持ち込みや粉砕の手間をかけられない場合は、処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月6日確認）。横須賀で依頼できる庭業者の比較は
      <Link href="/area/yokosuka/" className={A}>横須賀の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "束ねて出しきれない量なら、処分込みの見積もりで比べる",
  ctaText:
    "太い幹や大量の枝は、切りそろえや持ち込みの手間がかかります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "横須賀市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "横須賀市で剪定した枝は何ごみですか？",
      a: "燃せるごみです。長さ50センチメートル・直径20センチメートル以内にひもで束ねるか、無色透明か白色半透明のポリ袋に入れて出します。",
    },
    {
      q: "トゲのある枝はどうしますか？",
      a: "「危険・トゲ」などと紙に書いて貼って出すよう案内されています。",
    },
    {
      q: "エコミルに持ち込める大きさは？",
      a: "幹は太さ10cm未満なら長さ1m以下、太さ10cm以上20cm未満なら長さ50cm以下、草・枝は長さ1m以下であれば処分できるとされています。",
    },
    {
      q: "枝を細かくする機械の補助はありますか？",
      a: "生ごみ等減量化処理機器購入費補助制度の対象機器に小枝粉砕機が含まれています。申請方法は市の「生ごみ処理機器の購入補助金制度」のページで確認します。",
    },
  ],
  related: [
    { href: "/area/yokosuka/", label: "横須賀の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/yokohama/senteieda/", label: "横浜市の剪定枝の出し方", desc: "近隣の政令市の分別ルール" },
    { href: "/area/fujisawa/senteieda/", label: "藤沢市の剪定枝の出し方", desc: "県内の市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function YokosukaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
