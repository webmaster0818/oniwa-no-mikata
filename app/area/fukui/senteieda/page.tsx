import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/fukui/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.fukui.lg.jp/kurasi/kankyo/kgomi/kikuzu.html";
const T_SRC = "剪定枝や木くずの処理";
const SRC2 = "https://www.city.fukui.lg.jp/kurasi/kankyo/gomimochikomi/senteieda.html";
const T_SRC2 = "収集資源センターに剪定枝が持ち込めます（令和8年4月から）";

export const metadata: Metadata = {
  title: {
    absolute: "福井市の剪定枝の出し方｜細い枝は指定ごみ袋でステーションへ、直径10cm・長さ2m以内は持ち込み｜お庭のミカタ",
  },
  description:
    "福井市では、直径3cm以内の細い枝は指定ごみ袋に入れてごみステーションへ。直径10cm以内・長さ2m以内の剪定枝はクリーンセンターに持ち込め、令和8年4月からは収集資源センターでも受け入れています。それを超える枝や根・切り株は民間の処理業者へ。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "福井市の剪定枝の出し方｜細い枝は指定ごみ袋、直径10cm・長さ2m以内は持ち込み",
    description:
      "福井市の剪定枝は、細い枝なら指定ごみ袋でステーションへ。直径10cm・長さ2m以内はクリーンセンターか収集資源センターへ持ち込み。超えるものは民間業者へ。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/fukui/senteieda",
  published: "2026-11-05",
  updatedLabel: "2026年11月5日",
  parent: { href: "/area/fukui/", label: "福井の庭業者" },
  badge: "福井市の地域情報",
  h1: "福井市の剪定枝の出し方｜細い枝は指定ごみ袋でステーションへ、直径10cm・長さ2m以内は持ち込み",
  breadcrumbLabel: "福井市の剪定枝の出し方",
  tagChips: ["福井市", "剪定枝", "指定ごみ袋", "収集資源センター", "クリーンセンター"],
  ldHeadline: "福井市の剪定枝の出し方｜細い枝は指定ごみ袋でステーションへ、直径10cm・長さ2m以内は持ち込み",
  ldDescription:
    "福井市で家庭の剪定枝を出すときの大きさ別の出し方（指定ごみ袋・クリーンセンター・収集資源センター・民間の処理業者）を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        福井市では、家庭の樹木の剪定枝や木くずは<Hl>サイズにより出し方が変わる</Hl>と案内されています。
        直径3cm以内・長さ30cm以内なら指定ごみ袋に入れてごみステーションへ、直径10cm以内・長さ2m以内なら福井市クリーンセンターに持ち込めます（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
        、2026年11月5日確認）。
      </p>
      <p className="mb-4">
        ただし、指定ごみ袋に入れる枝の長さは市のページどうしで記載が異なります。「{T_SRC}」のページでは「直径3センチメートル以内で、長さ30センチメートル以内」、「{T_SRC2}」のページでは「刈草や枝葉など、直径3ｃｍ以内で、長さ40ｃｍ以内のもの」と書かれています（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
        ・
        <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{T_SRC2}</a>
        、2026年11月5日確認）。30cmを超え40cm以内の枝を袋で出す場合は、出す前に市に確認してください（両ページの問い合わせ先は市民生活部 収集資源センターです）。
      </p>
      <p>
        本記事では、大きさごとの出し先と、令和8年4月から始まった収集資源センターへの持ち込みを、市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "細い枝は指定ごみ袋でステーションへ、直径10cm・長さ2m以内は持ち込み、それを超える枝や根・切り株は民間の処理業者に相談します。",
  conclusionBody: (
    <p>
      直径10cmを超えるもの、長さが2mを超えるもの、木の根、切り株は<Hl>市の処理施設では処理できない</Hl>ため、市のページに掲載されている民間の処理業者に相談するよう案内されています。
      業者の訪問回収・直接持込はいずれも有料です（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
      、2026年11月5日確認）。
    </p>
  ),
  basicsHeading: "福井市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "細い枝は指定ごみ袋でステーションへ",
      desc: "剪定枝のページでは直径3cm以内・長さ30cm以内、収集資源センターの案内では刈草や枝葉は直径3cm以内・長さ40cm以内と、記載が異なります。長さの上限は市に確認してください。",
    },
    {
      title: "直径10cm以内・長さ2m以内は持ち込み",
      desc: "福井市クリーンセンターに持ち込めます。",
    },
    {
      title: "令和8年4月から収集資源センターでも受け入れ",
      desc: "指定袋に入らない家庭の剪定枝を持ち込めます。",
    },
    {
      title: "戸別収集はできない",
      desc: "収集資源センターの案内で、剪定枝の戸別収集はできないとされています。",
    },
    {
      title: "直径10cm・長さ2mを超えるもの、根・切り株は民間業者へ",
      desc: "市の処理施設では処理できません。",
    },
  ],
  stepsHeading: "福井市で剪定枝を処分するまでの手順（4つの手順）",
  steps: [
    {
      title: "太さと長さを測る",
      desc: "指定ごみ袋に入る細い枝か、持ち込みが必要な大きさかを分けます。",
    },
    {
      title: "細い枝は指定ごみ袋に入れてステーションへ",
      desc: "刈草や枝葉も、指定ごみ袋を使ってごみステーションに出します。",
    },
    {
      title: "袋に入らない枝は直径10cm・長さ2m以内にして持ち込む",
      desc: "収集資源センターの受付は8時30分〜17時です。休みの日は市のページで確かめてください。",
    },
    {
      title: "根・切り株や大きすぎる枝は民間の処理業者に相談",
      desc: "市のページに業者名・所在地・電話番号と、訪問回収・直接持込の可否が掲載されています。",
    },
  ],
  ngHeading: "福井市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "切り株を市の施設に持ち込みません",
      desc: "切り株は専門の業者に相談するよう案内されています。",
    },
    {
      title: "直径10cm・長さ2mを超える枝を持ち込みません",
      desc: "収集資源センターで受け入れるのは直径10cm以内・長さ2m以内に限られます。",
    },
    {
      title: "戸別収集を前提にしません",
      desc: "剪定枝の戸別収集はできないため、ステーションに出すか自分で持ち込みます。",
    },
  ],
  proHeading: "収集資源センターへの持ち込みと、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      収集資源センター（福井市南江守町2-1）では、令和8年4月から剪定枝を受け入れています。
      直径10cm以内・長さ2m以内に限られ、刈草や枝葉など指定ごみ袋に入るものはごみステーションに出すよう案内されています。料金は市のページで確かめてください（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{T_SRC2}</a>
      、2026年11月5日確認）。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月5日確認）。福井で依頼できる庭業者の比較は
      <Link href="/area/fukui/" className={A}>福井の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "持ち込む手段がないなら、処分込みの見積もりで比べる",
  ctaText:
    "剪定枝は戸別収集がなく、袋に入らない枝は持ち込みになります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "福井市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "福井市で剪定した枝は何ごみですか？",
      a: "細い枝は指定ごみ袋に入れてごみステーションに出せます。大きさは、市の剪定枝のページでは直径3cm以内・長さ30cm以内、収集資源センターの案内では直径3cm以内・長さ40cm以内と記載が異なるため、市に確認してください。",
    },
    {
      q: "指定ごみ袋に入らない枝はどうしますか？",
      a: "直径10cm以内・長さ2m以内なら、福井市クリーンセンターか、令和8年4月からは収集資源センターに持ち込めます。",
    },
    {
      q: "切り株や太い幹はどうしますか？",
      a: "市の処理施設では処理できないため、市のページに掲載された民間の処理業者に相談します。訪問回収・直接持込はいずれも有料です。",
    },
    {
      q: "家まで取りに来てもらえますか？",
      a: "剪定枝の戸別収集はできないと案内されています。",
    },
  ],
  related: [
    { href: "/area/fukui/", label: "福井の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/kanazawa/senteieda/", label: "金沢市の剪定枝の出し方", desc: "北陸の市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function FukuiSenteiedaPage() {
  return <KnowArticle data={data} />;
}
