import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/matsudo/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/shuushuubi/sentei_kyouryoku.html";
const SRC_CAL = "https://www.city.matsudo.chiba.jp/kurashi/gomi_shinyou/shuushuubi/gomikalendar.html";

export const metadata: Metadata = {
  title: {
    absolute: "松戸市の剪定枝・落ち葉・草の出し方｜不燃ごみ・資源ごみの日に、可燃ごみの日は不可｜お庭のミカタ",
  },
  description:
    "松戸市では家庭から出る剪定枝や落ち葉・草を、当分の間「不燃ごみ」「資源ごみ」の日に専用車両で収集しています。枝は直径10cm未満・長さ50cm未満にしてひもで縛るか袋へ、落ち葉・草は土を落として袋へ。可燃ごみの日には収集しません。市の公式ページ（2026年11月1日確認）をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "松戸市の剪定枝・落ち葉・草の出し方｜収集日と大きさ、袋の種類",
    description:
      "松戸市の剪定枝・落ち葉・草は「不燃ごみ」「資源ごみ」の日に。枝は直径10cm未満・長さ50cm未満。可燃ごみの日には出せません。市の公式ページをもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/matsudo/senteieda",
  published: "2026-11-01",
  updatedLabel: "2026年11月1日",
  parent: { href: "/area/matsudo/", label: "松戸の庭業者" },
  badge: "松戸市の地域情報",
  h1: "松戸市の剪定枝・落ち葉・草の出し方｜不燃ごみ・資源ごみの日に、可燃ごみの日は不可",
  breadcrumbLabel: "松戸市の剪定枝・落ち葉・草の出し方",
  tagChips: ["松戸市", "剪定枝", "落ち葉", "ごみの出し方", "分別収集"],
  ldHeadline: "松戸市の剪定枝・落ち葉・草の出し方｜収集日と大きさ、袋の種類",
  ldDescription:
    "松戸市の家庭から出る剪定枝・落ち葉・草の分別収集（不燃ごみ・資源ごみの日に専用車両で収集、枝は直径10cm未満・長さ50cm未満、使える袋、花や果実の扱い）を市の公式ページをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        松戸市では、家庭から出る剪定枝（切った枝）や落ち葉・草を、<Hl>当分の間「不燃ごみ」・「資源ごみ」の日に収集</Hl>しています。不燃ごみ・資源ごみを収集する車両とは別の専用車両で集める分別収集で、<Hl>可燃ごみの日には収集しません</Hl>（出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">松戸市「家庭から出る剪定枝（切った枝）や落ち葉・草等は、当分の間「不燃ごみ」・「資源ごみ」の日に収集します」</a>、2026年11月1日確認）。
      </p>
      <p>
        この分別収集は、ごみの焼却灰（飛灰）に含まれる放射性セシウムの濃度を下げるため、平成23年8月22日から続いているものです。出典ページの更新日は2022年2月1日ですが、市の「ごみ出しカレンダー」のページ（2026年4月1日更新）からも案内されています（<a href={SRC_CAL} className={A} target="_blank" rel="noopener noreferrer">松戸市「ごみ出しカレンダー」</a>、2026年11月1日確認）。本記事では、枝と落ち葉・草それぞれの出し方を、市の公式ページの記載に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "剪定枝・落ち葉・草は「不燃ごみ」「資源ごみ」の日に出します。枝は直径10cm未満・長さ50cm未満にしてひもで縛るか袋へ。可燃ごみの日には出しません。",
  conclusionBody: (
    <p>
      枝は<Hl>1本の太さを直径10センチ未満、かつ長さ50センチ未満</Hl>にして少量ずつひもで縛るか、松戸市認定袋（可燃ごみ用）または一目で中身が確認できる透明・半透明のポリ袋に入れます。落ち葉・草は土を振るい落として同じ袋に入れます。<Hl>花や果実がついていると収集できない</Hl>ため、花や果実は可燃ごみで出します（出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">松戸市「家庭から出る剪定枝（切った枝）や落ち葉・草等は、当分の間「不燃ごみ」・「資源ごみ」の日に収集します」</a>、2026年11月1日確認）。
    </p>
  ),
  basicsHeading: "松戸市の剪定枝・落ち葉・草で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "出す日は「不燃ごみ」「資源ごみ」の日",
      desc: "剪定枝・落ち葉・草は、当分の間「不燃ごみ」・「資源ごみ」の日に収集されます。不燃ごみ・資源ごみとは別の専用車両で集めます。",
    },
    {
      title: "可燃ごみの日には収集しない",
      desc: "剪定枝・落ち葉・草は可燃ごみの日には収集しません。",
    },
    {
      title: "枝は直径10cm未満・長さ50cm未満",
      desc: "1本の太さを直径10センチ未満、かつ長さ50センチ未満にして、少量ずつひもで縛るか袋に入れます。",
    },
    {
      title: "袋は認定袋（可燃ごみ用）か透明・半透明のポリ袋",
      desc: "松戸市認定袋可燃ごみ用、または一目で中身が確認できる透明度の透明・半透明のポリ袋を使います。",
    },
    {
      title: "落ち葉・草は土を落とす、花や果実は可燃ごみ",
      desc: "落ち葉・草は土を振るい落としてから袋に入れます。花や果実がついていると収集できないため、花や果実は可燃ごみで出します。",
    },
  ],
  stepsHeading: "松戸市で剪定枝・落ち葉・草を出すまでの手順（3つの手順）",
  steps: [
    {
      title: "花や果実、土を取り除く",
      desc: "花や果実は可燃ごみに分け、落ち葉・草は土を振るい落とします。",
    },
    {
      title: "枝を切りそろえ、縛るか袋に入れる",
      desc: "枝は直径10cm未満・長さ50cm未満にして少量ずつひもで縛るか、認定袋（可燃ごみ用）や透明・半透明のポリ袋に入れます。落ち葉・草も同じ袋に入れます。",
    },
    {
      title: "不燃ごみ・資源ごみの日に出す",
      desc: "お住まいの地区の不燃ごみ・資源ごみの日に出します。収集日は市のごみ出しカレンダーで確認できます。",
    },
  ],
  ngHeading: "松戸市で剪定枝・落ち葉・草を出すときに避けたいこと",
  ngs: [
    {
      title: "可燃ごみの日に出しません",
      desc: "剪定枝・落ち葉・草は可燃ごみの日には収集されません。",
    },
    {
      title: "花や果実をつけたまま出しません",
      desc: "花や果実がついていると収集できません。",
    },
    {
      title: "中身の見えない袋に入れません",
      desc: "一目で中身が確認できる透明度の袋か、松戸市認定袋可燃ごみ用を使います。",
    },
  ],
  proHeading: "業者に頼む場合の確認点",
  proParas: [
    <p key="1">
      太さ10cm以上の枝が出る伐採や、少量ずつでは出しきれない量の剪定は、業者に<Hl>枝葉の処分まで含めて</Hl>依頼する方法もあります。剪定110番は料金ページで「剪定 4,000円~(税込)」と示し、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：<a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>、2026年11月1日確認）。
    </p>,
    <p key="2">
      松戸で依頼できる庭業者の比較は<Link href="/area/matsudo/" className={A}>松戸の庭業者おすすめ</Link>、処分方法の全体像は<Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>、落ち葉の片付けは<Link href="/ochiba-taisaku/" className={A}>落ち葉対策</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "量が多いときは、処分込みで見積もりを取る",
  ctaText:
    "枝は少量ずつ出すよう案内されています。一度に大量に出る作業は、処分費が見積もりに含まれているかを確認してから依頼先を決めてください。",
  faqHeading: "松戸市の剪定枝・落ち葉・草に関するよくある質問",
  faqs: [
    {
      q: "松戸市で剪定枝は可燃ごみの日に出せますか？",
      a: "出せません。剪定枝・落ち葉・草は当分の間「不燃ごみ」・「資源ごみ」の日に専用車両で収集されます。",
    },
    {
      q: "枝はどのくらいの大きさまで出せますか？",
      a: "1本の太さを直径10センチ未満、かつ長さ50センチ未満にします。少量ずつひもで縛るか袋に入れます。",
    },
    {
      q: "どの袋を使えばよいですか？",
      a: "松戸市認定袋可燃ごみ用か、一目で中身が確認できる透明度の透明・半透明のポリ袋です。",
    },
    {
      q: "花がついた枝も出せますか？",
      a: "花や果実がついていると収集できません。花や果実は可燃ごみで出します。",
    },
  ],
  related: [
    { href: "/area/matsudo/", label: "松戸の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/ichikawa/senteieda/", label: "市川市の剪定枝の出し方", desc: "近隣市の収集ルール" },
    { href: "/ochiba-taisaku/", label: "落ち葉対策", desc: "落ち葉の片付けと出し方の考え方" },
  ],
};

export default function MatsudoSenteiedaPage() {
  return <KnowArticle data={data} />;
}
