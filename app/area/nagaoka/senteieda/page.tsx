import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/nagaoka/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.nagaoka.niigata.jp/kurashi/cate08/ek-gomi.html";
const T_SRC = "枝葉・草";

export const metadata: Metadata = {
  title: {
    absolute: "長岡市の剪定枝の出し方｜「枝葉・草」の日に縄で縛って出す、1月・2月は収集なし｜お庭のミカタ",
  },
  description:
    "長岡市では、庭木を剪定した枝・葉は「枝葉・草」として、袋に入れずにわら縄・麻縄で縛って出します。1本の太さ10cm以内・長さ150cm以内、1束の直径30cm以内。1月・2月は収集がなく、幹や根は許可業者に依頼します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "長岡市の剪定枝の出し方｜「枝葉・草」の日に縄で縛って出す",
    description:
      "長岡市の剪定枝は「枝葉・草」。袋に入れずわら縄・麻縄で縛り、太さ10cm・長さ150cm・束の直径30cm以内。1月・2月は収集なし。幹・根は許可業者へ。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/nagaoka/senteieda",
  published: "2026-11-05",
  updatedLabel: "2026年11月5日",
  parent: { href: "/area/nagaoka/", label: "長岡の庭業者" },
  badge: "長岡市の地域情報",
  h1: "長岡市の剪定枝の出し方｜「枝葉・草」の日に縄で縛って出す、1月・2月は収集なし",
  breadcrumbLabel: "長岡市の剪定枝の出し方",
  tagChips: ["長岡市", "剪定枝", "枝葉・草", "冬囲い", "許可業者"],
  ldHeadline: "長岡市の剪定枝の出し方｜「枝葉・草」の日に縄で縛って出す、1月・2月は収集なし",
  ldDescription:
    "長岡市で庭木の剪定枝・葉、落ち葉・草を「枝葉・草」として出すときの縛り方と大きさ、出せないもの、収集のない月、幹や根の扱いを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        長岡市では、庭木をせん定した枝・葉は燃やすごみではなく、<Hl>「枝葉・草」</Hl>として出します。
        枝葉は袋に入れずに、わら縄・麻縄などで縛って出します。収集方法は地域で違い、<Hl>1月・2月は収集しません</Hl>（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}（長岡市）</a>
        、2026年11月5日確認）。
      </p>
      <p>
        本記事では、枝葉と草・落ち葉の出し方の違い、「枝葉・草」に出せないもの、幹や根の扱いを市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "枝葉は1本の太さ10cm以内・長さ150cm以内、1束の直径30cm以内にして縄で縛る。草・落ち葉は土を落として透明か半透明の袋に入れます。",
  conclusionBody: (
    <p>
      木の幹・根は「枝葉・草」には出せず、<Hl>市のごみ収集運搬業許可業者に収集を依頼</Hl>するよう案内されています。
      収集した枝葉・草は処理施設に運ばれ、培養土や有機肥料等にリサイクルされます（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}（長岡市）</a>
      、2026年11月5日確認）。
    </p>
  ),
  basicsHeading: "長岡市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定枝・葉は「枝葉・草」に出す",
      desc: "庭の落葉・草・花、切り花、冬囲いなどに使った荒縄も「枝葉・草」です。",
    },
    {
      title: "枝葉は袋に入れず縄で縛る",
      desc: "わら縄・麻縄などで縛って出します。",
    },
    {
      title: "1本の太さ10cm以内・長さ150cm以内",
      desc: "1束の直径は30cm以内です。",
    },
    {
      title: "草・落ち葉は土を落として袋に入れる",
      desc: "透明または半透明の袋を使います。",
    },
    {
      title: "1月・2月は収集しない",
      desc: "収集方法は地域ごとのごみ収集カレンダーで確かめます。",
    },
  ],
  stepsHeading: "長岡市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "地域のごみ収集カレンダーで収集日を確かめる",
      desc: "収集方法は地域で違います。1月・2月は収集がありません。",
    },
    {
      title: "幹・根と、出せないものを分ける",
      desc: "幹・根、害虫が付いた枝葉、冬囲いの竹などは「枝葉・草」に入れません。",
    },
    {
      title: "枝葉を大きさに合わせて縄で縛る",
      desc: "1本の太さ10cm以内・長さ150cm以内、1束の直径30cm以内にします。",
    },
    {
      title: "草・落ち葉は土を落として袋に入れる",
      desc: "透明または半透明の袋に入れて、枝葉と一緒の日に出します。",
    },
  ],
  ngHeading: "長岡市で「枝葉・草」に出してはいけないもの",
  ngs: [
    {
      title: "害虫が付いた枝葉・除草剤が付いた草は入れません",
      desc: "これらは「燃やすごみ」に出すよう案内されています。",
    },
    {
      title: "冬囲いの竹や加工した角材・板・杭は入れません",
      desc: "ホームセンターなどで購入した冬囲いの竹、加工された角材・板・杭も「燃やすごみ」です。大きい場合は粗大ごみになります。",
    },
    {
      title: "家庭菜園の茎やつる、栗のいがは入れません",
      desc: "枝豆、しそ、みょうがなどの茎・つるや栗のいがは「燃やすごみ」です。",
    },
  ],
  proHeading: "幹や根が出るときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      木の幹・根は「枝葉・草」の収集では扱われないため、市のごみ収集運搬業許可業者に収集を依頼します。
      市は、枝葉や草はできるだけ身近な大地に戻すことも呼びかけています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}（長岡市）</a>
      、2026年11月5日確認）。冬囲いの時期と作業は
      <Link href="/fuyugakoi-yukigakoi/" className={A}>庭木の冬囲い・雪囲い</Link>にまとめています。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月5日確認）。長岡で依頼できる庭業者の比較は
      <Link href="/area/nagaoka/" className={A}>長岡の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "伐採や抜根で幹・根が出るなら、処分込みの見積もりで比べる",
  ctaText:
    "幹や根は「枝葉・草」に出せません。伐採や抜根を頼む場合は、見積もりで処分まで含まれるかをそろえて比べてください。",
  faqHeading: "長岡市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "長岡市で剪定した枝は何ごみですか？",
      a: "「枝葉・草」です。袋に入れずに、わら縄・麻縄などで縛って出します。",
    },
    {
      q: "枝の大きさに決まりはありますか？",
      a: "1本当たりの太さ10cm以内・長さ150cm以内、1束当たりの直径30cm以内です。",
    },
    {
      q: "冬でも出せますか？",
      a: "1月・2月は「枝葉・草」の収集をしません。収集方法は地域ごとのごみ収集カレンダーで確かめてください。",
    },
    {
      q: "木の幹や根はどうしますか？",
      a: "「枝葉・草」には出せないため、市のごみ収集運搬業許可業者に収集を依頼するよう案内されています。",
    },
  ],
  related: [
    { href: "/area/nagaoka/", label: "長岡の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/niigata/senteieda/", label: "新潟市の剪定枝の出し方", desc: "県内の市の分別ルール" },
    { href: "/fuyugakoi-yukigakoi/", label: "庭木の冬囲い・雪囲い", desc: "時期・やり方と業者に頼む目安" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function NagaokaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
