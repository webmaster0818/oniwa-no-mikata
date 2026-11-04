import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/funabashi/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_KANEN = "https://www.city.funabashi.lg.jp/kurashi/gomi/001/p001542.html";
const SRC_SODAI = "https://www.city.funabashi.lg.jp/kurashi/gomi/002/p001551.html";
const T_KANEN = "可燃ごみの出し方｜船橋市公式ホームページ";
const T_SODAI = "粗大ごみ処理手数料一覧｜船橋市公式ホームページ";

export const metadata: Metadata = {
  title: {
    absolute: "船橋市の剪定枝の出し方｜直径10cm・長さ50cm以内は可燃ごみ、それを超える枝木は粗大ごみ｜お庭のミカタ",
  },
  description:
    "船橋市では、枝木は直径10cm以内・長さ50cm以内のものをひもでしばって可燃ごみに出します。可燃ごみはおおむね長さ50cm以内で、小さくするのが難しいものは粗大ごみ。粗大ごみの品目には「枝木または丸太」（長さ1.5m以下・直径20cm以下）があります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "船橋市の剪定枝の出し方｜直径10cm・長さ50cm以内は可燃ごみ",
    description:
      "船橋市の枝木は直径10cm以内・長さ50cm以内でひもでしばって可燃ごみ。超えるものは粗大ごみ（枝木または丸太：長さ1.5m以下・直径20cm以下）。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/funabashi/senteieda",
  published: "2026-11-04",
  updatedLabel: "2026年11月4日",
  parent: { href: "/area/funabashi/", label: "船橋の庭業者" },
  badge: "船橋市の地域情報",
  h1: "船橋市の剪定枝の出し方｜直径10cm・長さ50cm以内は可燃ごみ、それを超える枝木は粗大ごみ",
  breadcrumbLabel: "船橋市の剪定枝の出し方",
  tagChips: ["船橋市", "枝木", "可燃ごみ", "粗大ごみ", "ひもでしばる"],
  ldHeadline: "船橋市の剪定枝の出し方｜直径10cm・長さ50cm以内は可燃ごみ、それを超える枝木は粗大ごみ",
  ldDescription:
    "船橋市で剪定した枝木を可燃ごみとして出すときの直径・長さ、束ね方、収集時間、可燃ごみに出せない大きさの枝木を粗大ごみとして出す場合の品目区分を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        船橋市の可燃ごみの品目では、木くずのうち<Hl>枝木は直径10cm以内で長さ50cm以内のもの</Hl>を、
        <Hl>ひもでしばって出す</Hl>と案内されています（出典：
        <a href={SRC_KANEN} className={A} target="_blank" rel="noopener noreferrer">{T_KANEN}</a>
        、2026年11月4日確認）。
      </p>
      <p>
        本記事では、可燃ごみとして出す基準と、それを超える枝木を粗大ごみで出す場合の品目区分を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "直径10cm・長さ50cm以内に切り、ひもでしばって可燃ごみへ。小さくすることが難しい枝木は粗大ごみで出します。",
  conclusionBody: (
    <p>
      可燃ごみは<Hl>おおむね長さ50cm以内のもの</Hl>で、小さくすることが難しいものは粗大ごみで出すよう案内されています。
      枝木類は、袋に入れにくい場合はひもで束ねて出します（出典：
      <a href={SRC_KANEN} className={A} target="_blank" rel="noopener noreferrer">{T_KANEN}</a>
      、2026年11月4日確認）。
    </p>
  ),
  basicsHeading: "船橋市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "枝木は直径10cm以内・長さ50cm以内",
      desc: "この大きさの枝木は可燃ごみの木くずとして出せます。",
    },
    {
      title: "ひもでしばって出す",
      desc: "枝木類は、袋に入れにくい場合はひもで束ねて出します。",
    },
    {
      title: "袋で出すときは市指定の可燃ごみ袋",
      desc: "可燃ごみは市指定の可燃ごみ袋（15・20・30・45リットルの4種類）で、収集ステーションに出します。",
    },
    {
      title: "可燃ごみはおおむね長さ50cm以内",
      desc: "小さくすることが難しいものは粗大ごみで出すよう案内されています。",
    },
    {
      title: "粗大ごみには「枝木または丸太」の品目がある",
      desc: "粗大ごみ処理手数料一覧に「枝木または丸太」（長さが1.5m以下、直径20cm以下）の区分があります。",
    },
  ],
  stepsHeading: "船橋市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝の太さを確かめる",
      desc: "直径10cm以内なら可燃ごみにできます。",
    },
    {
      title: "長さ50cm以内に切る",
      desc: "可燃ごみはおおむね長さ50cm以内のものです。",
    },
    {
      title: "ひもでしばるか、指定袋に入れる",
      desc: "袋に入れにくい枝木はひもで束ねます。",
    },
    {
      title: "収集日に収集ステーションへ出す",
      desc: "収集日は地域別の収集日一覧で確認します。小さくできない枝木は粗大ごみとして扱います。",
    },
  ],
  ngHeading: "船橋市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "直径10cm・長さ50cmを超えたまま可燃ごみに出しません",
      desc: "可燃ごみの基準に合わせて切るか、粗大ごみとして扱います。",
    },
    {
      title: "指定袋以外の袋で出しません",
      desc: "可燃ごみは市指定の可燃ごみ袋で出すよう案内されています。",
    },
    {
      title: "粗大ごみの区分を確かめずに出しません",
      desc: "「枝木または丸太」は長さ1.5m以下・直径20cm以下の区分です。手数料と申し込み方法は市の粗大ごみのページで確認します。",
    },
  ],
  proHeading: "粗大ごみの区分と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      船橋市の粗大ごみ処理手数料一覧には、<Hl>「枝木または丸太」（長さが1.5m以下、直径20cm以下）</Hl>の品目があります（出典：
      <a href={SRC_SODAI} className={A} target="_blank" rel="noopener noreferrer">{T_SODAI}</a>
      、2026年11月4日確認）。手数料の額と申し込み方法は、同ページと市の粗大ごみの案内で確認してください。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月4日確認）。船橋で依頼できる庭業者の比較は
      <Link href="/area/funabashi/" className={A}>船橋の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "長さ50cmに切りそろえる手間が大きいなら、処分込みの見積もりで比べる",
  ctaText:
    "枝を長さ50cm以内に切る作業は、量が多いと負担が大きくなります。業者に依頼する場合は、処分費の有無をそろえて見積もりを比べてください。",
  faqHeading: "船橋市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "船橋市で剪定した枝は何ごみですか？",
      a: "直径10cm以内・長さ50cm以内の枝木は可燃ごみです。ひもでしばって出します。",
    },
    {
      q: "袋に入れて出してもよいですか？",
      a: "可燃ごみは市指定の可燃ごみ袋で出します。枝木類は、袋に入れにくい場合はひもで束ねて出すよう案内されています。",
    },
    {
      q: "長さ50cmに切れない太い枝はどうしますか？",
      a: "小さくすることが難しいものは粗大ごみです。粗大ごみには「枝木または丸太」（長さ1.5m以下・直径20cm以下）の品目があります。",
    },
    {
      q: "可燃ごみは何時までに出しますか？",
      a: "市の可燃ごみのページで、収集日と出す時間が案内されています。お住まいの地域の収集日一覧で確認してください。",
    },
  ],
  related: [
    { href: "/area/funabashi/", label: "船橋の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/ichikawa/senteieda/", label: "市川市の剪定枝の出し方", desc: "隣の市の出し方と基準" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function FunabashiSenteiedaPage() {
  return <KnowArticle data={data} />;
}
