import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/mito/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_RULE = "https://www.city.mito.lg.jp/site/gomi/1774.html";
const SRC_FUNSAI = "https://www.city.mito.lg.jp/site/gomi/6076.html";
const T_RULE = "ごみ・資源物の分け方、出し方の基本ルール - ごみ・リサイクル - 水戸市ホームページ";
const T_FUNSAI = "剪定枝粉砕機を無料で貸出します - ごみ・リサイクル - 水戸市ホームページ";

export const metadata: Metadata = {
  title: {
    absolute: "水戸市の剪定枝の出し方｜1m以内・太さ5cmまでで束ね、1束に1枚燃えるごみ処理券｜お庭のミカタ",
  },
  description:
    "水戸市では、せん定枝は1m以内に切り、直径30cm程度に束ねて1束につき1枚燃えるごみ処理券を貼って出します。1本の太さは5cmまで、1回10束まで（5束超は清掃事務所に事前連絡）。剪定枝粉砕機の無料貸出もあります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "水戸市の剪定枝の出し方｜1m以内・太さ5cmまで、1束に1枚処理券",
    description:
      "水戸市のせん定枝は1m以内・直径30cm程度に束ね、1束1枚の燃えるごみ処理券。太さ5cmまで、1回10束まで。粉砕機の無料貸出あり。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/mito/senteieda",
  published: "2026-11-04",
  updatedLabel: "2026年11月4日",
  parent: { href: "/area/mito/", label: "水戸の庭業者" },
  badge: "水戸市の地域情報",
  h1: "水戸市の剪定枝の出し方｜1m以内・太さ5cmまでで束ね、1束に1枚燃えるごみ処理券",
  breadcrumbLabel: "水戸市の剪定枝の出し方",
  tagChips: ["水戸市", "せん定枝", "燃えるごみ処理券", "剪定枝粉砕機", "自己搬入"],
  ldHeadline: "水戸市の剪定枝の出し方｜1m以内・太さ5cmまでで束ね、1束に1枚燃えるごみ処理券",
  ldDescription:
    "水戸市でせん定枝を出すときの長さ・太さ・束の大きさ、燃えるごみ処理券、1回に出せる束数と事前連絡、清掃工場への自己搬入、剪定枝粉砕機の無料貸出を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        水戸市では、せん定枝は<Hl>1メートル以内の長さに切り、片手で持てるくらい（直径30センチメートル程度）にひもで束ね</Hl>、
        <Hl>1束につき1枚、燃えるごみ処理券を貼って</Hl>出すよう案内されています。1本の太さは5センチまでです（出典：
        <a href={SRC_RULE} className={A} target="_blank" rel="noopener noreferrer">{T_RULE}</a>
        、2026年11月4日確認）。
      </p>
      <p>
        本記事では、1回に出せる束数と事前連絡、量が多い場合の選択肢、市の剪定枝粉砕機の貸出を整理します。
      </p>
    </>
  ),
  conclusionTitle: "1回に出せるのは10束まで。5束を超える場合は清掃事務所に事前連絡し、10束を超える場合は市清掃工場への自己搬入か許可業者に依頼します。",
  conclusionBody: (
    <p>
      市の基本ルールでは、せん定枝は<Hl>1回に出せるのは10束まで（5束を超える場合は清掃事務所に事前連絡が必要）</Hl>で、
      10束を超える場合は市清掃工場に自己搬入するか、水戸市一般廃棄物収集運搬業許可業者に処理を依頼するよう案内されています（出典：
      <a href={SRC_RULE} className={A} target="_blank" rel="noopener noreferrer">{T_RULE}</a>
      、2026年11月4日確認）。
    </p>
  ),
  basicsHeading: "水戸市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "1m以内の長さに切る",
      desc: "せん定枝は1メートル以内の長さに切ってから束ねます。",
    },
    {
      title: "直径30cm程度にひもで束ねる",
      desc: "片手で持てるくらいの大きさが目安です。",
    },
    {
      title: "1本の太さは5cmまで",
      desc: "太さ5センチまでの枝が対象です。",
    },
    {
      title: "1束につき1枚、燃えるごみ処理券を貼る",
      desc: "処理券は見やすい所に貼ります。",
    },
    {
      title: "1回10束まで、5束を超えるときは事前連絡",
      desc: "5束を超える場合は清掃事務所に事前連絡が必要です。10束を超える場合は自己搬入か許可業者に依頼します。",
    },
  ],
  stepsHeading: "水戸市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝の太さを確かめる",
      desc: "1本の太さは5センチまでです。",
    },
    {
      title: "1m以内に切り、直径30cm程度に束ねる",
      desc: "片手で持てるくらいにひもで束ねます。",
    },
    {
      title: "束の数を数え、処理券を貼る",
      desc: "1束につき1枚、燃えるごみ処理券を貼ります。5束を超える場合は清掃事務所に事前連絡します。",
    },
    {
      title: "10束を超える分は別の方法にする",
      desc: "市清掃工場への自己搬入か、水戸市一般廃棄物収集運搬業許可業者への依頼を選びます。",
    },
  ],
  ngHeading: "水戸市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "処理券を貼らずに束を出しません",
      desc: "せん定枝は1束につき1枚、燃えるごみ処理券を貼るよう案内されています。",
    },
    {
      title: "連絡なしで5束を超えて出しません",
      desc: "5束を超える場合は清掃事務所への事前連絡が必要です。",
    },
    {
      title: "粉砕機で砕いた枝を集積所に出しません",
      desc: "市の粉砕機で粉砕した剪定枝は、堆肥・土壌改良材・雑草防止材などとして活用し、家庭ごみ集積所には排出しないことが遵守事項になっています。",
    },
  ],
  proHeading: "市の剪定枝粉砕機の無料貸出と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      水戸市は、自宅敷地内で発生する剪定枝の有効利用のため、<Hl>剪定枝粉砕機を市民に無料で貸し出し</Hl>ています。
      貸出しの対象は市に住所を有する個人で、貸出しを受けたい日の30日前から前日までに窓口へ申し込み、貸出しの期間は7日以内です。
      最大粉砕能力は生木で直径30〜35ミリメートル程度（機種による）です（出典：
      <a href={SRC_FUNSAI} className={A} target="_blank" rel="noopener noreferrer">{T_FUNSAI}</a>
      、2026年11月4日確認）。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月4日確認）。水戸で依頼できる庭業者の比較は
      <Link href="/area/mito/" className={A}>水戸の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>、粉砕機の使い方は
      <Link href="/garden-shredder-katsuyo/" className={A}>ガーデンシュレッダーの活用</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "10束を超える剪定は、処分込みの見積もりで比べる",
  ctaText:
    "1回に出せるのは10束までです。生垣や高木の剪定で量が多くなる場合は、業者の見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "水戸市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "水戸市で剪定した枝はどう出しますか？",
      a: "1m以内に切り、直径30cm程度にひもで束ね、1束につき1枚燃えるごみ処理券を貼って出します。1本の太さは5cmまでです。",
    },
    {
      q: "何束まで出せますか？",
      a: "1回に出せるのは10束までです。5束を超える場合は清掃事務所に事前連絡が必要です。",
    },
    {
      q: "10束を超えるときはどうしますか？",
      a: "市清掃工場に自己搬入するか、水戸市一般廃棄物収集運搬業許可業者に処理を依頼するよう案内されています。",
    },
    {
      q: "剪定枝粉砕機は誰でも借りられますか？",
      a: "水戸市に住所を有する個人が対象です。事業者や事業目的では借りられません。貸出しを受けた月と同月に再度借りることはできません。",
    },
  ],
  related: [
    { href: "/area/mito/", label: "水戸の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/ochiba-taihi-compost/", label: "落ち葉の堆肥・コンポスト", desc: "庭で出た葉や枝を土に返す方法" },
  ],
};

export default function MitoSenteiedaPage() {
  return <KnowArticle data={data} />;
}
