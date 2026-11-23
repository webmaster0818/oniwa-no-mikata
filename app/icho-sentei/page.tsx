import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/icho-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const BUNKYO = "https://www.city.bunkyo.lg.jp/documents/4667/20233238479_1.docx";
const KOBE = "https://www.city.kobe.lg.jp/documents/3051/omonazyumoku.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "イチョウの剪定｜冬（11〜3月）に芯を1本立てて枝を配置し、秋は込み過ぎた枝を抜く｜お庭のミカタ",
  },
  description:
    "イチョウの剪定の時期と方法を、芦屋市の街路樹等維持管理基本書、熊本市の樹木管理ガイドライン、世田谷区の植栽ガイドブックをもとにまとめました。ギンナンが実る雌木の見分けについて、文京区・神戸市の資料もあわせて整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "イチョウの剪定",
    description:
      "イチョウの冬の剪定と秋の枝抜き、円錐形の樹形の保ち方、雌木と雄木の見分けを公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { when: string; what: string; src: string }[] = [
  {
    when: "冬期剪定",
    what: "芯となる幹を1本立て、先端まで直立させる。主枝が重ならないように配置する。新生枝はできるだけ切り詰めず、外枝のところで切り返す",
    src: "芦屋市",
  },
  {
    when: "秋期剪定",
    what: "込み過ぎた枝を枝抜き剪定で透かす。落葉時期の葉量軽減が目的のため、葉がまったく無い不自然な強剪定は行わない",
    src: "芦屋市",
  },
  {
    when: "手入時期 11〜3月",
    what: "落葉高木。雌雄異株、秋の黄葉がよい。実はギンナン。移植難易は「◎」",
    src: "世田谷区",
  },
  {
    when: "樹形の目標",
    what: "全体を円錐形とし、枝はおおむね45度に立ち上げ、一番枝・二番枝・三番枝をバランスよくつくる",
    src: "熊本市",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">時期・項目</th>
          <th className="border px-2 py-2 text-left">資料の記載</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.when}>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.what}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に芦屋市の街路樹等維持管理基本書（令和3年3月）、熊本市の公共施設樹木の維持管理ガイドライン（令和5年8月）、世田谷区の植栽ガイドブックの特性表を開き、イチョウの剪定に関する記載を当サイトで並べました。芦屋市・熊本市の資料は街路樹・公共施設の樹木を対象としたもので、庭のイチョウでは木の大きさに合わせて読み替えが必要です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "icho-sentei",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "イチョウの剪定｜冬（11〜3月）に芯を1本立てて枝を配置し、秋は込み過ぎた枝を抜く",
  breadcrumbLabel: "イチョウの剪定",
  tagChips: ["イチョウ", "落葉高木", "冬期剪定", "枝抜き剪定", "ギンナン"],
  ldHeadline: "イチョウの剪定｜冬（11〜3月）に芯を1本立てて枝を配置し、秋は込み過ぎた枝を抜く",
  ldDescription:
    "イチョウの剪定の時期と方法、雌木と雄木の見分けを、芦屋市・熊本市・世田谷区・文京区・神戸市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        芦屋市の街路樹等維持管理基本書では、イチョウの冬期剪定について<Hl>芯となる幹を1本立て、先端まで直立させる</Hl>、<Hl>主枝が重ならないように適切に配置する</Hl>としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>、2026年11月23日確認）。世田谷区の植栽ガイドブックの特性表では、イチョウの手入時期を<Hl>11〜3月</Hl>としています。
      </p>
      <p>
        本記事では、これらの資料と熊本市のガイドラインを照合し、庭のイチョウの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "イチョウは落葉期の冬に骨格をつくる剪定を行い、秋は込み過ぎた枝を抜く程度にとどめます。円錐形の樹形を崩す強い切り詰めは避けます。",
  conclusionBody: (
    <>
      <p>
        熊本市の公共施設樹木の維持管理ガイドラインでは、イチョウの管理方針として<Hl>全体の樹形を円錐形とし、枝は概ね45度に立ち上げ</Hl>、一番枝・二番枝・三番枝をつくり込むとしています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」（PDF）</a>、2026年11月23日確認）。3つの資料の記載を並べると、次のとおりです（世田谷区は<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">掲載樹種特性表（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "イチョウの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は落葉期（11〜3月）が中心",
      desc: "世田谷区の特性表では、イチョウの手入時期を11〜3月としています。芦屋市の基本書でも、骨格を整える作業は冬期剪定としています。",
    },
    {
      title: "芯を1本に保ち、円錐形にする",
      desc: "芦屋市の基本書では芯となる幹を1本立てるとし、熊本市のガイドラインでは全体の樹形を円錐形にするとしています。",
    },
    {
      title: "上の枝は少なく、下の枝は多く",
      desc: "芦屋市の基本書では、頂部は成長が盛んなため優勢となり下方枝は弱りがちであるため、頂部は枝数を少なくし、下方枝に枝数を多くするとしています。",
    },
    {
      title: "ギンナンが実るのは雌木",
      desc: "神戸市の資料では、イチョウは雌雄が分かれており、雌木にはギンナンが実るとしています。世田谷区の特性表でも雌雄異株としています。",
    },
  ],
  stepsHeading: "庭のイチョウを剪定する4つの手順",
  stepsIntro: <p>芦屋市の基本書の冬期剪定・秋期剪定の要領にもとづく流れです。</p>,
  steps: [
    {
      title: "冬に、芯になる幹を1本決める",
      desc: "芦屋市の基本書では、冬期剪定で芯となる幹を1本立て、先端まで直立させるとしています。競り合う幹があれば1本に整理します。",
    },
    {
      title: "主枝が重ならないように配置する",
      desc: "同じ基本書では、主枝が重ならないように適切に配置するとしています。秋期剪定の要領でも、徒長枝・さかさ枝等の不必要な枝は原則として切り取るとしています。",
    },
    {
      title: "新しい枝は外枝の位置で切り返す",
      desc: "同じ基本書では、新生枝はできるだけ切り詰めないで、適当な長さの外枝のところで切返し剪定を行うとしています。",
    },
    {
      title: "秋は込み過ぎた枝だけを抜く",
      desc: "同じ基本書では、秋期剪定は込み過ぎた枝を枝抜き剪定で透かし、葉が全く無い不自然な強剪定は行わないとしています。",
    },
  ],
  ngHeading: "イチョウの剪定で避けたいこと",
  ngs: [
    {
      title: "秋に葉を全部落とすような強剪定は避けます",
      desc: "芦屋市の基本書では、秋期剪定は落葉時期の葉量軽減を目的とするため、葉が全く無い不自然な強剪定は行わないとしています。",
    },
    {
      title: "上の枝ばかり残すことは避けます",
      desc: "芦屋市の基本書では、頂部は優勢となり下方枝は弱りがちであるため、頂部の枝数を少なくするとしています。",
    },
    {
      title: "葉の形で雌雄を判断することは避けます",
      desc: "文京区の資料では、イチョウは花が咲くまでは雌雄の区別はできず、葉の形や気根の有無などから雌雄を見分けるという俗説はすべて確率が50％としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>木が高くなり脚立では届かない、隣家や道路に落ち葉・ギンナンが落ちる、芯が何本にも分かれて樹形が崩れた</Hl>といった場合は、高木の剪定に対応する業者に相談すると作業がまとまります。依頼するときは、木の高さ、ギンナンが実るかどうか、落ち葉で困っている場所を伝えてください。
    </p>,
    <p key="2">
      高い木の作業の危険は<Link href="/takagi-sentei-kiken/" className={A}>高木の剪定の危険</Link>、木を低くする考え方は<Link href="/niwaki-hikuku-suru/" className={A}>庭木を低くする方法</Link>、落ち葉の対策は<Link href="/ochiba-taisaku/" className={A}>落ち葉対策</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。雌雄の出典は<a href={BUNKYO} className={A} target="_blank" rel="noopener noreferrer">文京区 イチョウの街路樹に関するQ&amp;A（Word）</a>、<a href={KOBE} className={A} target="_blank" rel="noopener noreferrer">神戸市「街路樹に用いられる主な樹木」（PDF）</a>（いずれも2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "木の高さとギンナンの有無を伝えて相談する",
  ctaText:
    "イチョウは冬に骨格を整え、秋は枝を抜く程度にとどめる木です。大きく育った木や落ち葉・ギンナンの悩みは、業者と相談すると安心です。",
  faqHeading: "イチョウの剪定のよくある質問",
  faqs: [
    {
      q: "イチョウの剪定はいつがよいですか？",
      a: "世田谷区の植栽ガイドブックの特性表では、イチョウの手入時期を11〜3月としています。芦屋市の街路樹等維持管理基本書では、骨格を整える冬期剪定と、込み過ぎた枝を透かす秋期剪定に分けています。",
    },
    {
      q: "落ち葉を減らすために秋に強く切ってもよいですか？",
      a: "芦屋市の基本書では、秋期剪定は落葉時期の葉量軽減を目的とするため、葉が全く無い不自然な強剪定は行わないとしています。込み過ぎた枝を枝抜き剪定で透かす程度にとどめます。",
    },
    {
      q: "うちのイチョウにギンナンが実るかどうか分かりますか？",
      a: "文京区の資料では、イチョウは花が咲くまでは雌雄の区別はできないとしています。神戸市の資料では、雌木にはギンナンが実るとしています。",
    },
    {
      q: "街路樹のイチョウにギンナンが実らないのはなぜですか？",
      a: "文京区の資料では、ギンナンの落下によるトラブルや臭気、道路清掃の必要などから、今日では街路樹にはオスの木のみを植えているとしています。ただし、ごく稀にメスの苗木が混入することがあり得るとしています。",
    },
  ],
  related: [
    {
      href: "/keyaki-sentei/",
      label: "ケヤキの剪定",
      desc: "大きくなる落葉高木",
    },
    {
      href: "/takagi-sentei-kiken/",
      label: "高木の剪定の危険",
      desc: "高い木を自分で切るリスク",
    },
    {
      href: "/niwaki-hikuku-suru/",
      label: "庭木を低くする方法",
      desc: "大きくなった木の高さを下げる",
    },
    {
      href: "/ochiba-taisaku/",
      label: "落ち葉対策",
      desc: "落葉樹の落ち葉の片付け",
    },
    {
      href: "/momiji-kaede-teire/",
      label: "モミジ・カエデの手入れ",
      desc: "強剪定を避ける落葉樹",
    },
  ],
};

export default function IchoSenteiPage() {
  return <KnowArticle data={data} />;
}
