import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/kofu/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.kofu.lg.jp/genryo/kurashi/gomi/bunbetsu/bunbetsu.html";
const SRC_T = "ごみの分別方法／甲府市";

export const metadata: Metadata = {
  title: {
    absolute:
      "甲府市の剪定枝の出し方｜木の枝は長さ1m・直径15cm以下に切り、30cm以内に束ねて粗大ごみ｜お庭のミカタ",
  },
  description:
    "甲府市では、木の枝は燃えないごみの日の粗大ごみです。長さ1m・太さ直径15cm以下に切って30cm以内に束ね、ごみ処理券（シール）を貼って収集日の朝8時30分までに出します。落葉は燃えるごみです。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "甲府市の剪定枝の出し方｜長さ1m・直径15cm以下に切り、30cm以内に束ねて粗大ごみ",
    description:
      "甲府市の木の枝は粗大ごみ。長さ1m・太さ直径15cm以下に切って30cm以内に束ね、ごみ処理券（シール）を貼って出します。落葉は燃えるごみの指定袋へ。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/kofu/senteieda",
  published: "2026-11-07",
  updatedLabel: "2026年11月7日",
  parent: { href: "/area/kofu/", label: "甲府の庭業者" },
  badge: "甲府市の地域情報",
  h1: "甲府市の剪定枝の出し方｜木の枝は長さ1m・直径15cm以下に切り、30cm以内に束ねて粗大ごみ",
  breadcrumbLabel: "甲府市の剪定枝の出し方",
  tagChips: ["甲府市", "剪定枝", "粗大ごみ", "ごみ処理券", "落葉"],
  ldHeadline: "甲府市の剪定枝の出し方｜木の枝は長さ1m・直径15cm以下に切り、30cm以内に束ねて粗大ごみ",
  ldDescription:
    "甲府市で庭木の枝と落葉を出すときのごみ区分、枝の長さ・太さ・束の大きさ、ごみ処理券（シール）の貼り方、出す時間を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        甲府市では、
        <Hl>木の枝は燃えないごみの区分の「粗大ごみ」で、長さ1m、太さ直径15cm以下に切って30cm以内に束ねて</Hl>
        出します（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月7日確認）。
      </p>
      <p>
        本記事では、枝と落葉の区分、束ね方、ごみ処理券（シール）の貼り方、出す時間を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle:
    "木の枝は長さ1m・直径15cm以下に切り、30cm以内に束ねて粗大ごみへ。袋に入らないものはごみ処理券（シール）を貼ります。",
  conclusionBody: (
    <p>
      燃えないごみ（不燃ごみ、粗大ごみ、布団・ジュータン類）は、収集日の朝8時30分までに決められた場所に分けて出します。
      <Hl>袋に入らないごみ（粗大ごみ等）は、ごみ処理券（シール）を1つのごみにつき1枚貼って</Hl>
      出すよう案内されています。落葉は燃えるごみとして、燃えるごみ用指定袋（黄色半透明）で出します（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月7日確認）。
    </p>
  ),
  basicsHeading: "甲府市の剪定枝で押さえる4つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "木の枝は粗大ごみ",
      desc: "燃えないごみ（不燃ごみ、粗大ごみ、布団・ジュータン類）の収集日に出します。",
    },
    {
      title: "長さ1m・太さ直径15cm以下に切り、30cm以内に束ねる",
      desc: "市の分別方法に示された木の枝の出し方です。",
    },
    {
      title: "ごみ処理券（シール）を1つにつき1枚",
      desc: "袋に入らないごみ（粗大ごみ等）に貼って出します。",
    },
    {
      title: "落葉は燃えるごみ",
      desc: "燃えるごみ用指定袋（黄色半透明）で出します。",
    },
  ],
  stepsHeading: "甲府市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝と落葉を分ける",
      desc: "木の枝は粗大ごみ、落葉は燃えるごみです。",
    },
    {
      title: "長さ1m・太さ直径15cm以下に切る",
      desc: "この大きさまでにそろえます。",
    },
    {
      title: "30cm以内に束ねてシールを貼る",
      desc: "袋に入らないごみには、ごみ処理券（シール）を1つにつき1枚貼ります。",
    },
    {
      title: "収集日の朝8時30分までに出す",
      desc: "集積所では不燃ごみ・粗大ごみ・布団類を区別して出します。",
    },
  ],
  ngHeading: "甲府市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "枝を燃えるごみの日に出しません",
      desc: "木の枝は燃えないごみの区分の粗大ごみとして案内されています。",
    },
    {
      title: "長いまま・太いまま出しません",
      desc: "長さ1m、太さ直径15cm以下に切ってから束ねます。",
    },
    {
      title: "不燃ごみと混ぜて置きません",
      desc: "集積所へは不燃ごみ、粗大ごみ、布団・ジュータン類を区別して出します。",
    },
  ],
  proHeading: "量が多いとき・太い枝があるときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      甲府市の分別方法では、木の枝は長さ1m・太さ直径15cm以下に切って30cm以内に束ねることとされています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月7日確認）。太い枝を切りそろえる手間や、束の数だけシールが要ることを考えると、量が多い場合は処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月7日確認）。甲府で依頼できる庭業者の比較は
      <Link href="/area/kofu/" className={A}>甲府の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "直径15cmを超える枝が多いなら、処分込みの見積もりで比べる",
  ctaText:
    "太い枝や大量の枝は、切りそろえや束ねる手間がかかります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "甲府市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "甲府市で剪定した枝は何ごみですか？",
      a: "木の枝は燃えないごみの区分の粗大ごみです。長さ1m、太さ直径15cm以下に切って30cm以内に束ねて出します。",
    },
    {
      q: "束ねた枝にシールは必要ですか？",
      a: "袋に入らないごみ（粗大ごみ等）は、ごみ処理券（シール）を1つのごみにつき1枚貼って出すよう案内されています。",
    },
    {
      q: "何時までに出せばよいですか？",
      a: "収集日の朝8時30分までに、決められた場所に出します。",
    },
    {
      q: "落葉はどう出しますか？",
      a: "落葉は燃えるごみです。燃えるごみ用指定袋（黄色半透明）に入れて出します。",
    },
  ],
  related: [
    { href: "/area/kofu/", label: "甲府の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/matsumoto/senteieda/", label: "松本市の剪定枝の出し方", desc: "近隣県の市の分別ルール" },
    { href: "/area/hachioji/senteieda/", label: "八王子市の剪定枝の出し方", desc: "近隣の市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KofuSenteiedaPage() {
  return <KnowArticle data={data} />;
}
