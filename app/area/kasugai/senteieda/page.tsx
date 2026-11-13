import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/kasugai/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.kasugai.lg.jp/_res/projects/default_project/_page_/001/032/949/2026benrityou.pdf";
const SRC_T = "春日井市「資源・ごみの出し方便利帳」（令和8年10月・PDF）";
const SRC2 = "https://www.city.kasugai.lg.jp/kurashi/1032702/1032853/1032855/1032949/index.html";
const SRC2_T = "資源・ごみの出し方便利帳｜春日井市公式ホームページ";
const SRC3 = "https://www.city.kasugai.lg.jp/shisei/shisetsu/kankyo/1010584/riyoannai.html";
const SRC3_T = "クリーンセンターへのごみの持ち込み｜春日井市公式ホームページ";

export const metadata: Metadata = {
  title: {
    absolute:
      "春日井市の剪定枝の出し方｜指定袋（黄色）に入れるか50cm程度にそろえてひもで縛る、直径3cm程度まで｜お庭のミカタ",
  },
  description:
    "春日井市では、庭木の剪定で出た木の枝は燃やせるごみです。指定袋（黄色）に入れるか、50cm程度に切りそろえてひもで縛って出します。" +
    "枝の直径は3cm程度まで。多量の場合は複数回に分けるか、クリーンセンターへ持ち込みます。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "春日井市の剪定枝の出し方｜指定袋か50cm程度で束ねて燃やせるごみ、直径3cm程度まで",
    description:
      "春日井市の剪定枝は燃やせるごみ。指定袋（黄色）に入れるか、50cm程度にそろえてひもで縛ります。多量なら複数回に分けるかクリーンセンターへ。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/kasugai/senteieda",
  published: "2026-11-13",
  updatedLabel: "2026年11月13日",
  parent: { href: "/area/kasugai/", label: "春日井の庭業者" },
  badge: "春日井市の地域情報",
  h1: "春日井市の剪定枝の出し方｜指定袋（黄色）に入れるか50cm程度にそろえてひもで縛る、直径3cm程度まで",
  breadcrumbLabel: "春日井市の剪定枝の出し方",
  tagChips: ["春日井市", "剪定枝", "燃やせるごみ", "クリーンセンター", "持ち込み"],
  ldHeadline: "春日井市の剪定枝の出し方｜指定袋に入れるか50cm程度で束ねて燃やせるごみ",
  ldDescription:
    "春日井市で庭木の剪定枝を出すときのごみ区分、袋に入れない場合の束ね方、枝の太さの目安、多量に出たときのクリーンセンターへの持ち込みを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        春日井市の「資源・ごみの出し方便利帳」では、庭木を剪定したときに出た木の枝や木材は燃やせるごみとして、
        <Hl>指定袋（黄色）に入れるか、50cm程度に切りそろえてひもでしばって</Hl>
        出すと案内されています（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月13日確認）。
      </p>
      <p>
        本記事では、袋に入れる場合と束ねる場合の出し方、枝の太さの目安、量が多いときの持ち込みを市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle:
    "剪定枝は燃やせるごみ。指定袋（黄色）に入れるか、50cm程度に切りそろえてひもで縛ります。枝の直径は3cm程度までです。",
  conclusionBody: (
    <p>
      パッカー車の故障につながるため、<Hl>枝の直径や木材の厚みは3cm程度まで</Hl>にするよう案内されています。
      多量の場合は、複数回に分けてごみステーションに出すか、クリーンセンターに持ち込みます（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、掲載ページ：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月13日確認）。
    </p>
  ),
  basicsHeading: "春日井市の剪定枝で押さえる4つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定枝は燃やせるごみ",
      desc: "燃やせるごみは週2回の収集で、指定袋（黄色）に入れて出します。",
    },
    {
      title: "袋に入れない場合は50cm程度で束ねる",
      desc: "庭木の枝は50cm程度に切りそろえ、ひもでしばれば指定袋に入れずに出せます。",
    },
    {
      title: "枝の直径は3cm程度まで",
      desc: "パッカー車の故障につながるため、枝の直径や木材の厚みは3cm程度までにします。",
    },
    {
      title: "収集日の朝8時までに出す",
      desc: "資源やごみは、収集日の朝8時までに地区ごとに決められたごみステーションに出し、前日には出しません。",
    },
  ],
  stepsHeading: "春日井市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝の太さを確かめる",
      desc: "直径3cm程度を超える枝は、ステーションに出す前に扱いを市に確認します。",
    },
    {
      title: "袋に入れるか束ねるかを決める",
      desc: "指定袋（黄色）に入れるか、50cm程度に切りそろえてひもでしばります。",
    },
    {
      title: "量が多ければ回数を分ける",
      desc: "多量の場合は、複数回に分けてごみステーションに出します。",
    },
    {
      title: "まとめて処分するならクリーンセンターへ",
      desc: "持ち込む日が決まったら、事前にクリーンセンターへ電話で確認してから運びます（予約ではありません）。",
    },
  ],
  ngHeading: "春日井市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "太い枝をそのまま束に入れません",
      desc: "枝の直径や木材の厚みは3cm程度までと案内されています。",
    },
    {
      title: "前日の夜に出しません",
      desc: "資源やごみは収集日の朝8時までに出し、前日には出しません。",
    },
    {
      title: "同居の家族以外に持ち込みを頼みません",
      desc: "クリーンセンターへのごみは原則として本人か同居の家族が持ち込み、同居の家族以外の代理持ち込みはできません。",
    },
  ],
  proHeading: "量が多いときの持ち込みと、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      クリーンセンターへの家庭ごみの持ち込みは、令和9年2月26日までは月曜から金曜の午前8時30分から正午と午後4時から午後7時、
      <Hl>令和9年3月1日からは午前9時から正午と午後1時から午後4時30分</Hl>に変わります。持ち込みの際は春日井市で出たごみであることが確認され、
      令和8年10月1日から料金と持ち込みできる品目が変わっています（出典：
      <a href={SRC3} className={A} target="_blank" rel="noopener noreferrer">{SRC3_T}</a>
      、2026年11月13日確認）。
    </p>,
    <p key="2">
      運ぶ手段がない場合は、処分まで含めて業者に相談する方法があります。剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月13日確認）。春日井で依頼できる庭業者の比較は
      <Link href="/area/kasugai/" className={A}>春日井の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "持ち込みの手間をかけられないなら、処分込みの見積もりで比べる",
  ctaText:
    "多量の枝は回数を分けて出すか、自分でクリーンセンターへ運ぶ必要があります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "春日井市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "春日井市で剪定した枝は何ごみですか？",
      a: "燃やせるごみです。指定袋（黄色）に入れるか、50cm程度に切りそろえてひもでしばって出します。",
    },
    {
      q: "束ねた枝も指定袋に入れる必要がありますか？",
      a: "50cm程度に切りそろえてひもでしばれば、指定袋に入れなくてよいと案内されています。",
    },
    {
      q: "太い枝も出せますか？",
      a: "パッカー車の故障につながるため、枝の直径や木材の厚みは3cm程度までにするよう案内されています。",
    },
    {
      q: "一度に大量の枝が出たときはどうしますか？",
      a: "複数回に分けてごみステーションに出すか、クリーンセンターに持ち込みます。持ち込む日が決まったら、事前にクリーンセンターへ電話で確認します。",
    },
  ],
  related: [
    { href: "/area/kasugai/", label: "春日井の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/area/kasugai/ryokka-josei/", label: "春日井市の都市緑化推進事業補助金", desc: "生垣設置の補助と事前相談" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/nagoya/senteieda/", label: "名古屋市の剪定枝の出し方", desc: "近隣の市の分別ルール" },
    { href: "/area/ichinomiya/senteieda/", label: "一宮市の剪定枝の出し方", desc: "県内の市の分別ルール" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KasugaiSenteiedaPage() {
  return <KnowArticle data={data} />;
}
