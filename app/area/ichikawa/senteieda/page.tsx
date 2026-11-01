import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/ichikawa/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.ichikawa.lg.jp/page/4028.html";

export const metadata: Metadata = {
  title: {
    absolute: "市川市の剪定枝の出し方｜太さ10cm・長さ50cm以下の束で1世帯3束まで、葉・草は燃やすごみ｜お庭のミカタ",
  },
  description:
    "市川市の剪定枝の出し方を市の公式ページ（2026年11月1日確認）をもとに整理しました。太さ10cm以下の枝を長さ50cm以下・直径30cm以下の束にしてひもでしばり、袋には入れずに出します。1回に出せるのは1世帯3束まで。葉・草・竹は燃やすごみ、太さ10cm超・長さ50cm超は大型ごみです。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "市川市の剪定枝の出し方｜束の大きさ・1世帯3束・出せないもの",
    description:
      "市川市の剪定枝は太さ10cm以下、長さ50cm以下・直径30cm以下の束で、1回1世帯3束まで。葉・草・竹は燃やすごみへ。市の公式ページをもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/ichikawa/senteieda",
  published: "2026-11-01",
  updatedLabel: "2026年11月1日",
  parent: { href: "/area/ichikawa/", label: "市川の庭業者" },
  badge: "市川市の地域情報",
  h1: "市川市の剪定枝の出し方｜太さ10cm・長さ50cm以下の束で1世帯3束まで、葉・草は燃やすごみ",
  breadcrumbLabel: "市川市の剪定枝の出し方",
  tagChips: ["市川市", "剪定枝", "ごみの出し方", "分別収集", "大型ごみ"],
  ldHeadline: "市川市の剪定枝の出し方｜束の大きさ・1世帯3束・出せないもの",
  ldDescription:
    "市川市の剪定枝の分別収集のルール（太さ10cm以下、長さ50cm以下・直径30cm以下の束、袋に入れない、1回1世帯3束まで）と、葉・草・竹や大きな枝の出し方を市の公式ページをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        市川市では、家庭から出た木の枝を<Hl>「剪定枝」として分別収集し、堆肥化チップや畜産チップなどに資源化</Hl>しています。太さ10cm以下の木の枝を、長さ50cm以下・直径30cm以下の束にしてひもでしばって出します（出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">市川市「剪定枝の出し方」</a>、2026年11月1日確認）。
      </p>
      <p>
        本記事では、束の大きさ、1回に出せる量、剪定枝として出せないものの出し先を、市の公式ページの記載に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "太さ10cm以下の枝を長さ50cm以下・直径30cm以下の束にしてひもでしばり、袋に入れずに出します。1回1世帯3束までです。",
  conclusionBody: (
    <p>
      <Hl>葉・草・竹は「燃やすごみ」の日</Hl>に出し、<Hl>太さ10cm超、または長さ50cm超の剪定枝は「大型ごみ」</Hl>で出します。市は資源化の観点からできるかぎり分別排出を求めており、やむを得ず少量の枝を燃やすごみとして出す場合は、燃やすごみ用の指定袋に入れるよう案内しています（出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">市川市「剪定枝の出し方」</a>、2026年11月1日確認）。
    </p>
  ),
  basicsHeading: "市川市の剪定枝で押さえる4つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "太さ10cm以下・長さ50cm以下に切る",
      desc: "剪定枝として出せるのは太さ10cm以下の木の枝で、長さは50cm以下に切ります。太さ10cm超または長さ50cm超のものは大型ごみです。",
    },
    {
      title: "直径30cm以下の束にしてひもでしばる、袋は不要",
      desc: "枝は直径30cm以下の束にしてひもでしばります。袋に入れる必要はありません。",
    },
    {
      title: "1回に出せるのは1世帯3束まで",
      desc: "1回に出せる排出数は1世帯3束までとするよう案内されています。量が多いときは数回に分けるか、業者の処分を検討します。",
    },
    {
      title: "葉・草・竹は燃やすごみへ",
      desc: "葉・草・竹は剪定枝ではなく「燃やすごみ」の日に出します。",
    },
  ],
  stepsHeading: "市川市で剪定枝を出すまでの手順（3つの手順）",
  steps: [
    {
      title: "枝・葉・草・竹を分ける",
      desc: "枝と、燃やすごみになる葉・草・竹を分けます。太さ10cmを超える枝は大型ごみとして別にします。",
    },
    {
      title: "長さ50cm以下に切り、直径30cm以下の束にする",
      desc: "ひもでしばり、袋には入れずにまとめます。1回に出すのは3束までにします。",
    },
    {
      title: "剪定枝の収集日に出す",
      desc: "お住まいの地区の剪定枝の収集日に出します。収集日は市の収集日・集積場所の案内で確認してください。",
    },
  ],
  ngHeading: "市川市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "剪定枝を袋に入れて出しません",
      desc: "剪定枝は束にしてひもでしばって出します。袋に入れる必要はありません。",
    },
    {
      title: "葉や草を剪定枝の日に出しません",
      desc: "葉・草・竹は「燃やすごみ」の日に出すよう案内されています。",
    },
    {
      title: "一度に4束以上出しません",
      desc: "1回に出せる排出数は1世帯3束までです。",
    },
  ],
  proHeading: "業者に頼む場合の確認点",
  proParas: [
    <p key="1">
      生垣の刈り込みや大きな木の剪定で3束を大きく超える量が出る場合は、業者に<Hl>枝葉の処分まで含めて</Hl>依頼する方法もあります。剪定110番は料金ページで「剪定 4,000円~(税込)」と示し、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：<a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>、2026年11月1日確認）。
    </p>,
    <p key="2">
      市川で依頼できる庭業者の比較は<Link href="/area/ichikawa/" className={A}>市川の庭業者おすすめ</Link>、処分方法の全体像は<Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "量が多いときは、処分込みで見積もりを取る",
  ctaText:
    "1回1世帯3束までという目安を超える量や、太さ10cmを超える幹が出る作業は、処分まで含めて依頼すると手間が少なく済みます。見積もりでは処分費が含まれるかを確認してください。",
  faqHeading: "市川市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "市川市で剪定枝は袋に入れて出しますか？",
      a: "袋に入れる必要はありません。長さ50cm以下・直径30cm以下の束にしてひもでしばって出します。",
    },
    {
      q: "1回に何束まで出せますか？",
      a: "1世帯3束までとするよう案内されています。",
    },
    {
      q: "太い枝はどうすればよいですか？",
      a: "太さ10cm超、または長さ50cm超の剪定枝は「大型ごみ」で出します。",
    },
    {
      q: "剪定枝を燃やすごみで出してもよいですか？",
      a: "資源化の観点からできるかぎり分別排出が求められています。やむを得ず少量の枝を燃やすごみとして出す場合は、燃やすごみ用の指定袋に入れます。",
    },
  ],
  related: [
    { href: "/area/ichikawa/", label: "市川の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/chiba/senteieda/", label: "千葉市の剪定枝の出し方", desc: "近隣市の収集ルール" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
  ],
};

export default function IchikawaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
