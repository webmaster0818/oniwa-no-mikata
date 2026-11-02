import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/iwaki/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_HANDBOOK = "https://www.city.iwaki.lg.jp/www/contents/1001000001842/index.html";
const SRC_JIKO = "https://www.city.iwaki.lg.jp/www/contents/1001000001954/index.html";

export const metadata: Metadata = {
  title: {
    absolute: "いわき市の剪定枝の出し方｜燃やすごみは長さ60cm・一束直径20cm未満、1回2束程度まで｜お庭のミカタ",
  },
  description:
    "いわき市では剪定枝は燃やすごみで、長さ60cm・一束の直径20cm未満にしてひもでしばります。1回2束程度まで、1本の太さは15cmまで。木枝と葉は切り分け、葉は袋へ。清掃センターへの自己搬入は予約不要です。市のハンドブックと自己搬入のページ（2026年11月2日確認）をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "いわき市の剪定枝の出し方｜長さ60cm・一束直径20cm未満、1回2束程度まで",
    description:
      "いわき市の剪定枝は燃やすごみ。長さ60cm・一束直径20cm未満でひもでしばり、1回2束程度まで。量が多いときは清掃センターへ自己搬入できます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/iwaki/senteieda",
  published: "2026-11-02",
  updatedLabel: "2026年11月2日",
  parent: { href: "/area/iwaki/", label: "いわきの庭業者" },
  badge: "いわき市の地域情報",
  h1: "いわき市の剪定枝の出し方｜燃やすごみは長さ60cm・一束直径20cm未満、1回2束程度まで",
  breadcrumbLabel: "いわき市の剪定枝の出し方",
  tagChips: ["いわき市", "剪定枝", "燃やすごみ", "自己搬入", "清掃センター"],
  ldHeadline: "いわき市の剪定枝の出し方｜長さ60cm・一束直径20cm未満、1回2束程度まで",
  ldDescription:
    "いわき市で剪定枝を燃やすごみとして集積所に出すときの長さ・束の太さ・量、葉の扱い、北部・南部清掃センターへの自己搬入の規格を、市のハンドブックと自己搬入のページをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        いわき市の家庭ごみハンドブック（令和8年3月）では、<Hl>剪定枝は「燃やすごみ」</Hl>で、
        <Hl>長さ60cm、直径一束20cm未満にしてひもでしばって出す</Hl>よう案内されています（出典：
        <a href={SRC_HANDBOOK} className={A} target="_blank" rel="noopener noreferrer">家庭ごみの分け方・出し方（ハンドブック）｜いわき市役所</a>
        、2026年11月2日確認）。
      </p>
      <p>
        本記事では、集積所に出すときの決まりと、量が多いときの清掃センターへの自己搬入、業者に頼む場合の注意点を、市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "剪定枝は長さ60cm・一束の直径20cm未満でひもでしばり、1回2束程度まで。1本の太さは15cmまでにします。",
  conclusionBody: (
    <p>
      一度に大量に出されたものは収集できないとされています。量が多い場合は、<Hl>北部清掃センター・南部清掃センターへ事前予約なしで自己搬入</Hl>できます。
      燃やすごみとして搬入できる剪定枝は、<Hl>直径15cm未満で長さ180cm未満</Hl>のものです（出典：
      <a href={SRC_JIKO} className={A} target="_blank" rel="noopener noreferrer">ごみの自己搬入方法｜いわき市役所</a>
      、2026年11月2日確認）。
    </p>
  ),
  basicsHeading: "いわき市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定枝は燃やすごみ。長さ60cm・一束の直径20cm未満",
      desc: "ひもでしばって出します。剪定枝は1本の太さが15cmまでになるよう求められています。",
    },
    {
      title: "1回に出せるのは2束程度まで",
      desc: "一度に大量に出されたものは収集できません（1回2束程度まで）とハンドブックに記載されています。",
    },
    {
      title: "木枝と葉は切り分け、葉は袋に入れる",
      desc: "木枝と葉は切り分けて、葉は袋に入れて出します。草や木の葉などは乾燥させてから出します。",
    },
    {
      title: "土や石は市で収集しない",
      desc: "土や石はごみではないため、市で収集しないと案内されています。根に付いた土は落としてから出します。",
    },
    {
      title: "清掃センターへの自己搬入は予約不要",
      desc: "剪定枝・木材・木材片（直径15cm未満で長さ180cm未満）は燃やすごみとして、北部清掃センター（0246-34-2301）・南部清掃センター（0246-56-7963）に搬入できます。",
    },
  ],
  stepsHeading: "いわき市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝を長さ60cmに切りそろえる",
      desc: "1本の太さは15cmまでにします。",
    },
    {
      title: "一束の直径20cm未満でひもでしばる",
      desc: "葉は枝から切り分けて袋に入れます。草や木の葉は乾燥させてから出します。",
    },
    {
      title: "燃やすごみの日に1回2束程度まで出す",
      desc: "収集日は地区ごとの収集カレンダーやごみ分別アプリで確認します。",
    },
    {
      title: "量が多いときは清掃センターに自己搬入する",
      desc: "事前予約は不要です。施設の点検等で大型ごみ（可燃物）の受入を休止する場合があるため、事前に電話で受入状況を確認するよう案内されています。",
    },
  ],
  ngHeading: "いわき市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "一度に大量の束を集積所に出しません",
      desc: "一度に大量に出されたものは収集できません。目安は1回2束程度までです。",
    },
    {
      title: "混雑する日の自己搬入を避けます",
      desc: "年末年始・お盆・春の引っ越しシーズン・連休の翌日・土曜日は自己搬入が多く、混雑が予想されると案内されています。",
    },
    {
      title: "業者に家庭の枝の搬入を頼みません",
      desc: "家庭から生じた木くず類で事業者が搬入しようとするものは、事業系木くずと同様に搬入できないと案内されています。",
    },
  ],
  proHeading: "業者に頼む場合は、枝の処分方法を確認する",
  proParas: [
    <p key="1">
      いわき市の清掃センターは、<Hl>家庭から生じた木くず類でも事業者が搬入しようとするもの</Hl>を受け入れていません。業者に剪定を頼む場合は、<Hl>枝の処分が見積もりに含まれるか</Hl>を確認してください。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月2日確認）。いわきで依頼できる庭業者の比較は
      <Link href="/area/iwaki/" className={A}>いわきの庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "量が多い剪定は、処分込みの見積もりで比べる",
  ctaText:
    "生垣の刈り込みや伐採で枝が多く出る場合は、処分まで含めて依頼すると手間が少なく済みます。見積もりでは処分費の有無をそろえて比べてください。",
  faqHeading: "いわき市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "いわき市で剪定した枝は何ごみですか？",
      a: "燃やすごみです。長さ60cm、一束の直径20cm未満にしてひもでしばって出します。",
    },
    {
      q: "一度に何束まで出せますか？",
      a: "ハンドブックでは、一度に大量に出されたものは収集できず、1回2束程度までと案内されています。",
    },
    {
      q: "葉の付いた枝はそのまま出せますか？",
      a: "木枝と葉は切り分けて、葉は袋に入れて出すよう案内されています。草や木の葉は乾燥させてから出します。",
    },
    {
      q: "清掃センターに持ち込むときに予約は必要ですか？",
      a: "事前予約は必要ありません。剪定枝は直径15cm未満で長さ180cm未満のものを、燃やすごみとして北部清掃センター・南部清掃センターに搬入できます。",
    },
  ],
  related: [
    { href: "/area/iwaki/", label: "いわきの庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/ochiba-taisaku/", label: "庭の落ち葉対策", desc: "落ち葉の量を減らす工夫と片付け方" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function IwakiSenteiedaPage() {
  return <KnowArticle data={data} />;
}
