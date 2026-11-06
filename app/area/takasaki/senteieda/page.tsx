import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/takasaki/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.takasaki.gunma.jp/page/5818.html";
const SRC_T = "燃やせるごみ（可燃ごみ）の出し方 - 高崎市公式ホームページ（一般廃棄物対策課）";
const SRC2 = "https://www.city.takasaki.gunma.jp/page/2114.html";
const SRC2_T = "屋外での燃焼行為（野焼き等）はやめましょう - 高崎市公式ホームページ（環境政策課）";

export const metadata: Metadata = {
  title: {
    absolute: "高崎市の剪定枝の出し方｜直径3cm・長さ60cmまでをひもで束ねて燃やせるごみ、1束は直径30cm程度｜お庭のミカタ",
  },
  description:
    "高崎市では、せん定枝は直径3cm・長さ60cmまでにそろえ、1束の直径30cm程度にひもで束ねて燃やせるごみ（週2回・朝8時30分まで）に出します。小枝・落葉・草は土を払って乾燥させます。量が多い場合は各クリーンセンターへ直接搬入。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "高崎市の剪定枝の出し方｜直径3cm・長さ60cmまで、ひもで束ねて燃やせるごみ",
    description:
      "高崎市のせん定枝は直径3cm・長さ60cmまで、1束の直径30cm程度にひもで束ねて燃やせるごみへ。量が多い場合は各クリーンセンターへ直接搬入。野焼きは禁止。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/takasaki/senteieda",
  published: "2026-11-06",
  updatedLabel: "2026年11月6日",
  parent: { href: "/area/takasaki/", label: "高崎の庭業者" },
  badge: "高崎市の地域情報",
  h1: "高崎市の剪定枝の出し方｜直径3cm・長さ60cmまでをひもで束ねて燃やせるごみ、1束は直径30cm程度",
  breadcrumbLabel: "高崎市の剪定枝の出し方",
  tagChips: ["高崎市", "剪定枝", "燃やせるごみ", "クリーンセンター", "野焼き禁止"],
  ldHeadline: "高崎市の剪定枝の出し方｜直径3cm・長さ60cmまでをひもで束ねて燃やせるごみ、1束は直径30cm程度",
  ldDescription:
    "高崎市で庭木の剪定枝・小枝・落葉・草を出すときの太さと長さ、束ね方、1回に出せる量、量が多いときの搬入先、野焼きの禁止を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        高崎市では、
        <Hl>せん定枝は直径3センチメートル・長さ60センチメートルまでにそろえ、ひもで束ねて燃やせるごみ</Hl>
        として出します。1束の直径は30センチメートル程度です（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月6日確認）。
      </p>
      <p>
        本記事では、束ね方と量の目安、小枝・落葉・草の下準備、量が多いときの搬入先を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "直径3cm・長さ60cmまでを1束直径30cm程度に束ねて燃やせるごみへ。量が多い場合は各クリーンセンターへ直接搬入します。",
  conclusionBody: (
    <p>
      環境政策課のよくある質問では、剪定枝は束ねたもの、落ち葉や草・小枝は乾燥させて指定袋に入れたものを<Hl>3袋程度であればごみステーションに出し、量が多い場合は各クリーンセンターへ直接搬入</Hl>するよう案内されています。
      剪定枝を野焼きすることも、適用除外（農業を営むためにやむを得ない行為）に該当しない限り禁止です（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月6日確認）。
    </p>
  ),
  basicsHeading: "高崎市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "せん定枝は直径3cm・長さ60cmまで",
      desc: "この大きさまでにそろえてから束ねます。",
    },
    {
      title: "ひもで束ね、1束は直径30cm程度",
      desc: "束ねた枝は燃やせるごみとして出します。",
    },
    {
      title: "小枝・落葉・草は土を払って乾燥させる",
      desc: "燃やせるごみに出せるものとして、下準備とあわせて案内されています。",
    },
    {
      title: "ごみ出しは1回3袋まで",
      desc: "燃やせるごみの注意点として示されています。",
    },
    {
      title: "量が多い場合はクリーンセンターへ",
      desc: "各クリーンセンターへ直接搬入するよう案内されています。",
    },
  ],
  stepsHeading: "高崎市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "土を払い、乾燥させる",
      desc: "小枝・落葉・草は土を払って乾燥させてから出します。",
    },
    {
      title: "太さと長さをそろえる",
      desc: "せん定枝は直径3cm・長さ60cmまでに切ります。",
    },
    {
      title: "ひもで束ねる",
      desc: "1束の直径が30cm程度になるように束ねます。",
    },
    {
      title: "収集日の朝8時30分までに出す",
      desc: "燃やせるごみは週2回で、決められた集積所に朝8時30分までに出します。",
    },
  ],
  ngHeading: "高崎市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "剪定枝を庭で燃やしません",
      desc: "適用除外に当たらない屋外での燃焼行為は禁止されています。",
    },
    {
      title: "事業で出た枝をごみステーションに出しません",
      desc: "事業系のごみはごみステーションに出せません。",
    },
    {
      title: "一度に多量の枝をステーションに出しません",
      desc: "量が多い場合は各クリーンセンターへの直接搬入が案内されています。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      市は、量が多い剪定枝は各クリーンセンターへ直接搬入するよう案内しています。事業系のごみはごみステーションに出せません（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月6日確認）。搬入の手間をかけられない場合は、処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月6日確認）。高崎で依頼できる庭業者の比較は
      <Link href="/area/takasaki/" className={A}>高崎の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "直径3cmを超える枝が多いなら、処分込みの見積もりで比べる",
  ctaText:
    "太い枝や大量の枝は、切りそろえや搬入の手間がかかります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "高崎市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "高崎市で剪定した枝は何ごみですか？",
      a: "燃やせるごみ（可燃ごみ）です。直径3センチメートル・長さ60センチメートルまでにそろえ、ひもで束ねて出します。",
    },
    {
      q: "1束の大きさに決まりはありますか？",
      a: "1束の直径は30センチメートル程度にするよう案内されています。",
    },
    {
      q: "量が多いときはどうしますか？",
      a: "3袋程度であればごみステーションに出し、量が多い場合は各クリーンセンターへ直接搬入するよう案内されています。",
    },
    {
      q: "剪定枝を庭で燃やしてもよいですか？",
      a: "適用除外（農業を営むためにやむを得ない行為）に該当しない屋外での燃焼行為は禁止されています。",
    },
  ],
  related: [
    { href: "/area/takasaki/", label: "高崎の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/maebashi/senteieda/", label: "前橋市の剪定枝の出し方", desc: "隣接する市の分別ルール" },
    { href: "/area/takasaki/hozon-jumoku/", label: "高崎市の保存樹木・保存生垣", desc: "市の緑化条例による指定と補助" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function TakasakiSenteiedaPage() {
  return <KnowArticle data={data} />;
}
