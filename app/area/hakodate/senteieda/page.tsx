import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/hakodate/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.hakodate.hokkaido.jp/docs/2014011800014/";
const SRC_T = "燃やせるごみ（有料）の分け方・出し方 | 函館市";

export const metadata: Metadata = {
  title: {
    absolute: "函館市の剪定枝の出し方｜太さ10cm未満・長さ50cm未満で燃やせるごみ、袋に入らない束はごみ処理券を直接貼る｜お庭のミカタ",
  },
  description:
    "函館市では、木・枝は太さまたは厚さ10cm未満・長さ50cm未満にすれば燃やせるごみ（有料）です。指定袋に入れて出し、40リットルの指定袋に入らない枝は切って束ね、ごみ処理券を直接貼って出します。草・葉は土を落とし、乾燥させてから指定袋へ。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "函館市の剪定枝の出し方｜10cm未満・50cm未満で燃やせるごみ、束にはごみ処理券",
    description:
      "函館市の木・枝は太さ10cm未満・長さ50cm未満で燃やせるごみ。指定袋に入らない枝は束ねてごみ処理券を直接貼ります。草・葉は乾燥させて指定袋へ。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/hakodate/senteieda",
  published: "2026-11-06",
  updatedLabel: "2026年11月6日",
  parent: { href: "/area/hakodate/", label: "函館の庭業者" },
  badge: "函館市の地域情報",
  h1: "函館市の剪定枝の出し方｜太さ10cm未満・長さ50cm未満で燃やせるごみ、袋に入らない束はごみ処理券を直接貼る",
  breadcrumbLabel: "函館市の剪定枝の出し方",
  tagChips: ["函館市", "剪定枝", "燃やせるごみ", "指定ごみ袋", "ごみ処理券"],
  ldHeadline: "函館市の剪定枝の出し方｜太さ10cm未満・長さ50cm未満で燃やせるごみ、袋に入らない束はごみ処理券を直接貼る",
  ldDescription:
    "函館市で庭木の枝・草・葉を出すときの太さと長さ、指定ごみ袋とごみ処理券の使い分け、出すときの注意点を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        函館市では、木・枝は
        <Hl>太さまたは厚さ10センチ未満・長さ50センチ未満にすれば、燃やせるごみ（有料）</Hl>
        として出せます。燃やせるごみは指定袋に入れて出すのが基本です（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月6日確認）。
      </p>
      <p>
        本記事では、指定袋とごみ処理券の使い分け、草・葉の下準備、出すときの注意点を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "太さ10cm未満・長さ50cm未満で燃やせるごみへ。指定袋に入らない枝は束ねて、ごみ処理券を直接貼って出します。",
  conclusionBody: (
    <p>
      一番大きい40リットルの指定袋に入らない大きさのものは、<Hl>ごみ処理券を直接貼って</Hl>出します。
      木・枝は太さまたは厚さ10センチ未満、長さ50センチ未満に切って束ね、ごみ処理券を直接貼ります。指定ごみ袋以外の袋やダンボールにごみ処理券を貼って出すことはできません（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月6日確認）。
    </p>
  ),
  basicsHeading: "函館市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "木・枝は太さ10cm未満・長さ50cm未満",
      desc: "太さまたは厚さ10センチ未満、長さ50センチ未満が燃やせるごみの範囲です。",
    },
    {
      title: "基本は燃やせるごみの指定袋に入れる",
      desc: "指定袋は5・10・20・30・40リットル用があります。",
    },
    {
      title: "袋に入らない枝は束ねてごみ処理券を貼る",
      desc: "40リットルの指定袋に入らない大きさの束には、ごみ処理券を直接貼ります。",
    },
    {
      title: "他の袋や箱にごみ処理券は貼れない",
      desc: "指定ごみ袋以外の袋やダンボールに貼って出すことはできません。",
    },
    {
      title: "草・葉は土を落とし乾燥させる",
      desc: "乾燥させてから指定ごみ袋に入れます。",
    },
  ],
  stepsHeading: "函館市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "草・葉の土を落として乾かす",
      desc: "草・葉は土を落とし、乾燥させてから指定ごみ袋に入れます。",
    },
    {
      title: "枝を10cm未満・50cm未満に切る",
      desc: "太さまたは厚さ10センチ未満、長さ50センチ未満にします。",
    },
    {
      title: "指定袋に入れるか、束ねて処理券を貼る",
      desc: "40リットルの指定袋に入らないものは束ねて、ごみ処理券を直接貼ります。",
    },
    {
      title: "片手で持てる重さにして出す",
      desc: "袋が破れないよう、片手で持てる程度の重さにするよう案内されています。",
    },
  ],
  ngHeading: "函館市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "ごみ処理券を普通の袋や箱に貼りません",
      desc: "指定ごみ袋以外の袋やダンボールに貼って出すことはできません。",
    },
    {
      title: "土の付いた草をそのまま袋に入れません",
      desc: "草・葉は土を落とし、乾燥させてから指定ごみ袋に入れます。",
    },
    {
      title: "袋を重くしすぎません",
      desc: "袋が破れないよう、片手で持てる程度の重さにします。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      市の案内では、燃やせるごみは有料の指定袋またはごみ処理券で出します。カラスなどによる散乱や、ごみの飛散にも注意するよう案内されています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月6日確認）。太い枝や大量の枝で切り分けや束ねの手間をかけられない場合は、処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月6日確認）。函館で依頼できる庭業者の比較は
      <Link href="/area/hakodate/" className={A}>函館の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "切り分けきれない太い枝が多いなら、処分込みの見積もりで比べる",
  ctaText:
    "太さ10cmを超える枝や大量の枝は、切り分けの手間がかかります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "函館市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "函館市で剪定した枝は何ごみですか？",
      a: "太さまたは厚さ10センチ未満、長さ50センチ未満の木・枝は燃やせるごみ（有料）です。",
    },
    {
      q: "指定袋に入らない枝はどうしますか？",
      a: "太さまたは厚さ10センチ未満、長さ50センチ未満に切って束ね、ごみ処理券を直接貼って出します。",
    },
    {
      q: "ごみ処理券を普通のごみ袋に貼ってもよいですか？",
      a: "指定ごみ袋以外の袋やダンボールに「ごみ処理券」を貼ってごみを出すことはできません。",
    },
    {
      q: "草や葉はどう出しますか？",
      a: "土を落とし、乾燥させてから燃やせるごみの指定ごみ袋に入れて出します。",
    },
  ],
  related: [
    { href: "/area/hakodate/", label: "函館の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/sapporo/senteieda/", label: "札幌市の剪定枝の出し方", desc: "道内の政令市の分別ルール" },
    { href: "/area/asahikawa/senteieda/", label: "旭川市の剪定枝の出し方", desc: "道内の中核市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function HakodateSenteiedaPage() {
  return <KnowArticle data={data} />;
}
