import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/kawaguchi/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.kawaguchi.lg.jp/kurashi_tetsuzuki/gomi_risaikuru/2/1/9617.html";
const T_SRC = "家庭ごみの分け方・出し方／川口市ホームページ";

export const metadata: Metadata = {
  title: {
    absolute: "川口市の剪定枝の出し方｜直径10cm以下は長さ40cm以下で束ねて一般ごみ、袋には入れない｜お庭のミカタ",
  },
  description:
    "川口市では、自宅の庭木の枝は直径10cm以下なら長さ40cm以下に切ってひもで束ね、袋に入れずに一般ごみへ。直径10〜50cmの枝・幹は長さ120cm以下で粗大ごみ、50cmを超える幹は縦に割ります。量が多いときの自己搬入は前日までに予約。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "川口市の剪定枝の出し方｜直径10cm以下は40cm以下で束ねて一般ごみ",
    description:
      "川口市の庭木の枝は直径10cm以下なら長さ40cm以下で束ねて一般ごみ（袋に入れない）。直径10〜50cmは長さ120cm以下で粗大ごみ。自己搬入は前日までに電話予約。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/kawaguchi/senteieda",
  published: "2026-11-05",
  updatedLabel: "2026年11月5日",
  parent: { href: "/area/kawaguchi/", label: "川口の庭業者" },
  badge: "川口市の地域情報",
  h1: "川口市の剪定枝の出し方｜直径10cm以下は長さ40cm以下で束ねて一般ごみ、袋には入れない",
  breadcrumbLabel: "川口市の剪定枝の出し方",
  tagChips: ["川口市", "剪定枝", "一般ごみ", "粗大ごみ", "自己搬入"],
  ldHeadline: "川口市の剪定枝の出し方｜直径10cm以下は長さ40cm以下で束ねて一般ごみ、袋には入れない",
  ldDescription:
    "川口市で自宅の庭木の枝・幹・根を出すときの太さと長さの基準、一般ごみと粗大ごみの分かれ目、量が多いときの環境センターへの自己搬入を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        川口市では、自宅内の庭木の枝・幹・根・ひげ根は、
        <Hl>直径10cm以下の枝等なら長さ40cm以下に切ってひもで束ね、一般ごみ</Hl>
        として出します。袋には入れないよう案内されています（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
        、2026年11月5日確認）。
      </p>
      <p>
        本記事では、太さごとの出し方の違い、出す前の下準備、量が多いときの選択肢を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "直径10cm以下は40cm以下で束ねて一般ごみ、直径10〜50cmは120cm以下で粗大ごみ。50cmを超える幹は縦に割ってから出します。",
  conclusionBody: (
    <p>
      市の表では、<Hl>直径10cm〜50cmの枝・幹は長さ120cm以下に切って粗大ごみ</Hl>、
      直径50cmを超える幹は搬入できないため縦に割って上の大きさに合わせる、とされています。
      土は払い、生木は乾燥させてから出します。事業系のごみは受入基準が異なります（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
      、2026年11月5日確認）。
    </p>
  ),
  basicsHeading: "川口市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "対象は自宅内の庭木の枝・幹・根",
      desc: "枝、幹、根、ひげ根が対象です。事業系は受入基準が異なります。",
    },
    {
      title: "直径10cm以下は長さ40cm以下で束ねる",
      desc: "ひもで束ねて一般ごみとして出します。袋には入れません。",
    },
    {
      title: "直径10〜50cmは長さ120cm以下で粗大ごみ",
      desc: "枝・幹を長さ120cm以下に切り、粗大ごみとして申し込みます。",
    },
    {
      title: "直径50cmを超える幹は縦に割る",
      desc: "そのままでは搬入できないため、縦に割って上の大きさに合わせます。",
    },
    {
      title: "土を払い、生木は乾燥させる",
      desc: "出す前の下準備として案内されています。",
    },
  ],
  stepsHeading: "川口市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "土を払い、生木を乾燥させる",
      desc: "根やひげ根についた土を落とし、切ったばかりの枝は乾かしてから出します。",
    },
    {
      title: "太さを測って出し方を分ける",
      desc: "直径10cm以下は一般ごみ、直径10〜50cmは粗大ごみ、50cm超は縦に割ります。",
    },
    {
      title: "長さをそろえて束ねる",
      desc: "一般ごみは長さ40cm以下でひもで束ね、袋には入れません。粗大ごみは長さ120cm以下にします。",
    },
    {
      title: "収集日の朝8時30分までに出す",
      desc: "一般ごみステーションに出します。前日や夜間には出さないよう案内されています。",
    },
  ],
  ngHeading: "川口市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "束ねた枝を袋に入れて出しません",
      desc: "直径10cm以下の枝等は、ひもで束ねて袋に入れずに出すよう案内されています。",
    },
    {
      title: "直径50cmを超える幹をそのまま出しません",
      desc: "搬入できないため、縦に割って基準の大きさに合わせます。",
    },
    {
      title: "一時に多量の枝を集積所に出しません",
      desc: "引越しごみなどの一時多量ごみは、環境センターへの自己搬入か一般廃棄物収集運搬許可業者への委託が案内されています。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      家庭ごみを自家用車で環境センター等に持ち込む自己搬入は事前予約制で、希望する日の前日までに専用ダイヤルへ電話で予約します。
      土曜日・日曜日、祝休日、年末年始は搬入できません。受付時間と手数料は市のページの表で案内されています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
      、2026年11月5日確認）。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月5日確認）。川口で依頼できる庭業者の比較は
      <Link href="/area/kawaguchi/" className={A}>川口の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "束ねて出しきれない量なら、処分込みの見積もりで比べる",
  ctaText:
    "太い幹や大量の枝は、粗大ごみの申し込みや自己搬入の手間がかかります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "川口市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "川口市で剪定した枝は何ごみですか？",
      a: "直径10cm以下の枝等は、長さ40cm以下に切ってひもで束ね、一般ごみとして出します。袋には入れません。",
    },
    {
      q: "太い枝や幹はどうしますか？",
      a: "直径10cm〜50cmの枝・幹は長さ120cm以下に切って粗大ごみです。直径50cmを超える幹は搬入できないため、縦に割って基準の大きさにします。",
    },
    {
      q: "量が多いときはどうしますか？",
      a: "環境センター等への自己搬入（前日までに電話予約・土日祝と年末年始は不可）か、一般廃棄物収集運搬許可業者への委託が案内されています。",
    },
    {
      q: "出す前にやっておくことはありますか？",
      a: "土を払い、生木は乾燥させてから出すよう案内されています。",
    },
  ],
  related: [
    { href: "/area/kawaguchi/", label: "川口の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/saitama/senteieda/", label: "さいたま市の剪定枝の出し方", desc: "隣接する市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KawaguchiSenteiedaPage() {
  return <KnowArticle data={data} />;
}
