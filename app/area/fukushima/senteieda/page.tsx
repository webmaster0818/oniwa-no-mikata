import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/fukushima/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.fukushima.fukushima.jp/kurashi/gomi-recycle/1/2/7861.html";
const T_SRC = "資源にできない燃やすごみ(燃やすごみ)／福島市公式ホームページ";
const SRC2 = "https://www.city.fukushima.fukushima.jp/kurashi/gomi-recycle/2/7803.html";
const T_SRC2 = "家庭用剪定枝破砕機を使ってみませんか?／福島市公式ホームページ";

export const metadata: Metadata = {
  title: {
    absolute: "福島市の剪定枝の出し方｜長さ60cm・束の直径30cm以内で燃やすごみ、1回2〜3束まで｜お庭のミカタ",
  },
  description:
    "福島市では、剪定した枝木はおおむね長さ60cm以内・束の直径30cm以内（1本の直径10cm以内）に束ねて燃やすごみへ。1世帯1回に枝木2〜3束、葉2〜3袋まで。多量に出すとクリーンセンターへの自己搬入になります。破砕機の無料貸出もあります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "福島市の剪定枝の出し方｜長さ60cm・束の直径30cm以内で燃やすごみ",
    description:
      "福島市の剪定枝は長さ60cm以内・束の直径30cm以内で燃やすごみ。1回に枝木2〜3束・葉2〜3袋まで。多量ならクリーンセンターへ自己搬入。破砕機の無料貸出あり。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/fukushima/senteieda",
  published: "2026-11-05",
  updatedLabel: "2026年11月5日",
  parent: { href: "/area/fukushima/", label: "福島の庭業者" },
  badge: "福島市の地域情報",
  h1: "福島市の剪定枝の出し方｜長さ60cm・束の直径30cm以内で燃やすごみ、1回2〜3束まで",
  breadcrumbLabel: "福島市の剪定枝の出し方",
  tagChips: ["福島市", "剪定枝", "燃やすごみ", "自己搬入", "剪定枝破砕機"],
  ldHeadline: "福島市の剪定枝の出し方｜長さ60cm・束の直径30cm以内で燃やすごみ、1回2〜3束まで",
  ldDescription:
    "福島市で家庭の剪定枝を燃やすごみに出すときの長さと束の大きさ、1回に出せる量、多量に出すときの自己搬入、家庭用剪定枝破砕機の貸出を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        福島市では、せん定した枝木は「資源にできない燃やすごみ」です。
        <Hl>おおむね長さ60cm以内に切りそろえ、束の直径30cm以内に束ねて</Hl>出します（枝木1本の直径は10cm以内）（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
        、2026年11月5日確認）。
      </p>
      <p>
        本記事では、束の作り方と1回に出せる量、量が多いときの選択肢、市の破砕機の貸出を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "1世帯1回に出せるのは枝木2〜3束、葉2〜3袋まで。それを超える量は集積所ではなくクリーンセンターへ自己搬入します。",
  conclusionBody: (
    <p>
      枝木についている葉はできるだけ取り除き、葉は透明または半透明袋に入れます。
      集積所に多量に出された枝木類には<Hl>違反シール（黄色）が貼られて残置</Hl>されるため、クリーンセンターへ自己搬入するよう案内されています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
      、2026年11月5日確認）。
    </p>
  ),
  basicsHeading: "福島市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定した枝木は燃やすごみ",
      desc: "雑草・草花も同じく資源にできない燃やすごみです。",
    },
    {
      title: "長さ60cm以内・束の直径30cm以内",
      desc: "おおむね長さ60cm以内に切りそろえ、束の直径30cm以内に束ねます。",
    },
    {
      title: "枝木1本の直径は10cm以内",
      desc: "これを目安に切り分けます。",
    },
    {
      title: "葉は取り除いて袋に入れる",
      desc: "透明または半透明袋（45リットル以内）に入れます。",
    },
    {
      title: "1回に枝木2〜3束、葉2〜3袋まで",
      desc: "1世帯あたりの量です。多量に出された枝木類は残置されます。",
    },
  ],
  stepsHeading: "福島市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝木から葉をできるだけ取り除く",
      desc: "葉は透明または半透明袋に入れます。",
    },
    {
      title: "長さ60cm以内に切りそろえる",
      desc: "枝木1本の直径は10cm以内が目安です。",
    },
    {
      title: "束の直径30cm以内に束ねる",
      desc: "1回に出すのは枝木2〜3束、葉2〜3袋までにします。",
    },
    {
      title: "量が多ければクリーンセンターへ自己搬入",
      desc: "片付けなどで一時的に多量のごみが出た場合（枝木も含む）は、クリーンセンターに自己搬入できます。",
    },
  ],
  ngHeading: "福島市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "集積所に多量の枝木を出しません",
      desc: "違反シール（黄色）を貼って残置されると案内されています。",
    },
    {
      title: "葉がついたまま束ねません",
      desc: "葉はできるだけ取り除き、袋に分けて出します。",
    },
    {
      title: "多数の世帯分を黙ってまとめて出しません",
      desc: "多数の世帯で出す場合は、あらかじめ集積所の場所や事情をごみ政策課へ連絡するよう案内されています。",
    },
  ],
  proHeading: "量を減らす方法と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      福島市は家庭用剪定枝破砕機を無料で貸し出しています。実施期間は令和8年4月1日〜令和9年3月31日、対象は市内に住む方（事業用は不可）、1回5日以内・1台までで、事前予約が必要です。
      最大破砕枝径は3cmで、運搬や電気代などは自己負担です（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{T_SRC2}</a>
      、2026年11月5日確認）。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月5日確認）。福島で依頼できる庭業者の比較は
      <Link href="/area/fukushima/" className={A}>福島の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "1回2〜3束で出しきれない量なら、処分込みの見積もりで比べる",
  ctaText:
    "生垣の刈り込みや伐採で枝が多く出る場合は、業者の見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "福島市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "福島市で剪定した枝は何ごみですか？",
      a: "資源にできない燃やすごみです。おおむね長さ60cm以内に切りそろえ、束の直径30cm以内に束ねて出します。",
    },
    {
      q: "1回にどれくらい出せますか？",
      a: "1世帯につき、1回に出せる量は枝木2〜3束、葉2〜3袋までです。",
    },
    {
      q: "たくさん出たときは？",
      a: "片付けなどで一時的に多量のごみが出た場合（枝木も含む）は、クリーンセンターに自己搬入できます。",
    },
    {
      q: "破砕機を借りられますか？",
      a: "市が家庭用剪定枝破砕機を無料で貸し出しています（令和8年4月1日〜令和9年3月31日、1回5日以内・1台まで、事前予約制）。最大破砕枝径は3cmです。",
    },
  ],
  related: [
    { href: "/area/fukushima/", label: "福島の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/koriyama/senteieda/", label: "郡山市の剪定枝の出し方", desc: "県内の市の分別ルール" },
    { href: "/area/iwaki/senteieda/", label: "いわき市の剪定枝の出し方", desc: "県内の市の分別ルール" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function FukushimaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
