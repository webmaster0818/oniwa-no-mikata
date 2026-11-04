import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/koriyama/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.koriyama.lg.jp/soshiki/55/150018.html";
const T_SRC = "草木等の処分方法について - 郡山市公式ウェブサイト";

export const metadata: Metadata = {
  title: {
    absolute: "郡山市の剪定枝の出し方｜幹2本・枝2束・草2袋まで、3つ以上は日を分ける｜お庭のミカタ",
  },
  description:
    "郡山市では、草木は燃やしてよいごみの日に、幹は2本まで・枝は2束まで、または葉・草・花はごみ袋2袋までごみ集積所に出せます。3つ以上は日を分けるか業者に依頼。幹は直径15cm・長さ1m以内、枝束は30cm・長さ1m以内が基準です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "郡山市の剪定枝の出し方｜幹2本・枝2束・草2袋まで",
    description:
      "郡山市の草木は燃やしてよいごみ。幹2本・枝2束・葉草花2袋まで。幹は直径15cm・長さ1m以内、枝束30cm・長さ1m以内。乾燥させて減量。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/koriyama/senteieda",
  published: "2026-11-04",
  updatedLabel: "2026年11月4日",
  parent: { href: "/area/koriyama/", label: "郡山の庭業者" },
  badge: "郡山市の地域情報",
  h1: "郡山市の剪定枝の出し方｜幹2本・枝2束・草2袋まで、3つ以上は日を分ける",
  breadcrumbLabel: "郡山市の剪定枝の出し方",
  tagChips: ["郡山市", "剪定枝", "燃やしてよいごみ", "草木の乾燥", "自己搬入"],
  ldHeadline: "郡山市の剪定枝の出し方｜幹2本・枝2束・草2袋まで、3つ以上は日を分ける",
  ldDescription:
    "郡山市で庭の草木（幹・枝・葉・草・花）をごみ集積所に出すときの数の上限、幹と枝束の大きさの基準、乾燥による減量、クリーンセンターへの自己搬入を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        郡山市では、ご自宅の草刈等で発生した草木は、燃やしてよいごみの日に
        <Hl>幹は2本まで、枝は2束まで、または葉・草・花はごみ袋2袋まで</Hl>ごみ集積所に出すことができます（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
        、2026年11月4日確認）。
      </p>
      <p>
        本記事では、出せる数と大きさの基準、出す前の乾燥、量が多いときの選択肢を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "1回に出せるのは幹2本・枝2束・葉草花2袋まで。全部で3つ以上ある場合は、日を分けて出すか民間の業者に依頼します。",
  conclusionBody: (
    <p>
      大きさの基準は、<Hl>幹1本が直径15cm以内・長さ1m以内、枝1束が枝束30cm以内・長さ1m以内</Hl>です。
      全部で3つ（本、束、袋）以上ある場合は、複数日に分けてごみ集積所に出すか、民間の業者に依頼（有料）するよう案内されています。
      クリーンセンターへ自分で持ち込むこともできます（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
      、2026年11月4日確認）。
    </p>
  ),
  basicsHeading: "郡山市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "草木は燃やしてよいごみの日に出す",
      desc: "幹・枝・葉・草・花は、燃やしてよいごみの日にごみ集積所に出せます。",
    },
    {
      title: "幹2本・枝2束・葉草花2袋まで",
      desc: "全部で3つ（本、束、袋）以上ある場合は、複数日に分けるか、民間の業者に依頼します。",
    },
    {
      title: "幹は直径15cm以内・長さ1m以内",
      desc: "幹1本ごとの基準です。",
    },
    {
      title: "枝は束30cm以内・長さ1m以内",
      desc: "枝1束ごとの基準です。葉・草・花は透明・半透明の袋に入れます。",
    },
    {
      title: "土を落として一週間程度乾燥させる",
      desc: "水分を抜いて重量を減らしてから出すよう案内されています。",
    },
  ],
  stepsHeading: "郡山市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "土を落として乾燥させる",
      desc: "一週間程度乾燥させて水分を抜き、重量を減らします。",
    },
    {
      title: "幹と枝を基準の大きさにする",
      desc: "幹は直径15cm以内・長さ1m以内、枝は束30cm以内・長さ1m以内にします。",
    },
    {
      title: "葉・草・花は透明・半透明の袋に入れる",
      desc: "1回に出せるのはごみ袋2袋までです。",
    },
    {
      title: "数を数えて、多い場合は日を分ける",
      desc: "全部で3つ以上ある場合は、複数日に分けるか、民間の業者に依頼するか、クリーンセンターへ自己搬入します。",
    },
  ],
  ngHeading: "郡山市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "一度に大量の草木を集積所に出しません",
      desc: "大量に出すと他のごみ集積所の回収に支障が出るため、協力が呼びかけられています。",
    },
    {
      title: "土がついたまま袋に詰めません",
      desc: "市は、草と一緒に大量の土が入り、45L袋で10kg以上の重さになっているものがあったと案内しています。",
    },
    {
      title: "刈ってすぐの草を出しません",
      desc: "乾燥させると重量が減り、ごみ処理にかかるエネルギーの削減にもつながると案内されています。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      郡山市は7月を「草木乾燥月間」とし、草木類を出す前にしっかり乾かすことを呼びかけています。
      クリーンセンターへの自己搬入の方法や搬入料金は、市の「ごみ処理施設へのごみの自己搬入方法」のページで案内されています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
      、2026年11月4日確認）。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月4日確認）。郡山で依頼できる庭業者の比較は
      <Link href="/area/koriyama/" className={A}>郡山の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "1回2束までで出しきれない量なら、処分込みの見積もりで比べる",
  ctaText:
    "集積所に出せる量には上限があります。生垣の刈り込みや伐採で量が多くなる場合は、業者の見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "郡山市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "郡山市で剪定した枝は何ごみですか？",
      a: "燃やしてよいごみの日に、ごみ集積所に出せます。枝は2束まで、幹は2本まで、葉・草・花はごみ袋2袋までです。",
    },
    {
      q: "枝の束の大きさに決まりはありますか？",
      a: "枝1束は、枝束30cm以内・長さ1m以内が基準です。幹1本は直径15cm以内・長さ1m以内です。",
    },
    {
      q: "3つ以上あるときはどうしますか？",
      a: "全部で3つ（本、束、袋）以上ある場合は、複数日に分けて出すか、民間の業者に依頼（有料）するよう案内されています。クリーンセンターへの自己搬入もできます。",
    },
    {
      q: "刈った草はすぐに出してよいですか？",
      a: "市は、土を落として一週間程度乾燥させ、水分を抜いて重量を減らしてから出すよう案内しています。",
    },
  ],
  related: [
    { href: "/area/koriyama/", label: "郡山の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/zasso-taisaku/", label: "庭の雑草対策", desc: "草刈りの頻度と抜き方・防ぎ方" },
    { href: "/kusakari-110ban-kusakari-ryokin/", label: "草刈り110番の草刈り料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KoriyamaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
