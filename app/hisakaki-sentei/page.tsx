import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/hisakaki-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ヒサカキの剪定｜時期は3〜7月が目安。萌芽力が強く刈り込みに耐える常緑樹｜お庭のミカタ",
  },
  description:
    "ヒサカキの剪定時期と手入れを、熊本市の公共施設樹木の維持管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理しました。2つの資料で時期の書き方が異なる点と、植え替えの時期もまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ヒサカキの剪定",
    description:
      "熊本市のガイドラインでは、ヒサカキの剪定時期は3〜7月。萌芽力が強く、剪定に耐える樹種としています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kumamoto: string; setagaya: string }[] = [
  { item: "分類", kumamoto: "常緑樹・低木", setagaya: "ツバキ科の常緑中木" },
  { item: "樹形", kumamoto: "球（公共施設の樹木などの基本樹形では「卵、球、楕円形」の群）", setagaya: "記載なし（図のみ）" },
  { item: "剪定・手入れの時期", kumamoto: "3〜7月", setagaya: "手入時期 4月・6月、9月下旬〜10月上旬" },
  { item: "剪定についての記載", kumamoto: "萌芽力が強く、剪定に耐える", setagaya: "萌芽力あり、刈り込みに耐える" },
  { item: "移植", kumamoto: "記載なし", setagaya: "4〜6月。移植がしやすく活着がよい（◎）" },
  { item: "日照・乾湿・土壌", kumamoto: "記載なし", setagaya: "日照 ○〜△、乾湿は中間（○）、砂壌土" },
  { item: "花・実", kumamoto: "記載なし", setagaya: "花は臭い。実は球形、紫黒色" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">熊本市 ガイドライン</th>
          <th className="border px-2 py-2 text-left">世田谷区 樹木一覧</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.kumamoto}</td>
            <td className="border px-2 py-2">{r.setagaya}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、熊本市の公共施設樹木の維持管理ガイドライン（「熊本平野部の主要樹種の特徴」の表のヒサカキの行と、「公共施設の樹木などの基本樹形」の表）と、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（ヒサカキの行）を開き、当サイトで項目ごとに照合しました。◎などの記号の意味は世田谷区の樹木一覧の凡例によります。「記載なし」はその資料に書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "hisakaki-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "ヒサカキの剪定｜時期は3〜7月が目安。萌芽力が強く刈り込みに耐える常緑樹",
  breadcrumbLabel: "ヒサカキの剪定",
  tagChips: ["ヒサカキ", "常緑樹", "剪定時期", "刈り込み", "生垣"],
  ldHeadline: "ヒサカキの剪定｜時期は3〜7月が目安。萌芽力が強く刈り込みに耐える常緑樹",
  ldDescription:
    "ヒサカキの剪定時期と刈り込みへの強さを、熊本市の樹木管理ガイドラインと世田谷区の植栽ガイドブックの樹木一覧をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ヒサカキの剪定は、<Hl>3〜7月が目安</Hl>です。熊本市のガイドラインの「熊本平野部の主要樹種の特徴」の表は、ヒサカキを常緑の低木に分け、剪定時期を3〜7月とし、「萌芽力が強く、剪定に耐える」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        世田谷区の植栽ガイドブックの樹木一覧でも、ヒサカキは<Hl>「萌芽力あり、刈り込みに耐える」</Hl>ツバキ科の常緑樹です。手入時期は4月・6月と9月下旬〜10月上旬が示されています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ヒサカキは刈り込みに耐える常緑樹です。春から夏の時期に、形を整える剪定を行います。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を当サイトで項目ごとに並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        剪定・手入れの時期は、熊本市が3〜7月、世田谷区が4月・6月と9月下旬〜10月上旬で、書き方が異なります。2つの資料が重なるのは<Hl>4月と6月</Hl>です。秋の手入れは世田谷区だけが示しています。分類も、熊本市は低木、世田谷区は中木としており、資料によって扱いが分かれます。
      </p>
    </>
  ),
  basicsHeading: "ヒサカキを剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "ツバキ科の常緑樹",
      desc: "世田谷区の樹木一覧では、ヒサカキはツバキ科の常緑樹です。熊本市は常緑の低木、世田谷区は中木に分けています。",
    },
    {
      title: "剪定は3〜7月が目安",
      desc: "熊本市の表の剪定時期は3〜7月です。世田谷区の手入時期は4月・6月、9月下旬〜10月上旬です。",
    },
    {
      title: "萌芽力が強く刈り込める",
      desc: "熊本市は「萌芽力が強く、剪定に耐える」、世田谷区は「萌芽力あり、刈り込みに耐える」としています。",
    },
    {
      title: "樹形は球の形",
      desc: "熊本市の表では、ヒサカキの樹形は球です。同じ資料の基本樹形の表では「卵、球、楕円形」の群に入っています。",
    },
  ],
  stepsHeading: "ヒサカキの剪定4つの手順",
  stepsIntro: <p>熊本市・世田谷区の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "時期を3〜7月の間で決める",
      desc: "熊本市の表の剪定時期です。世田谷区の手入時期と重なる4月か6月に行うと、2つの資料の記載に沿います。",
    },
    {
      title: "枯れ枝や込み合った枝を先に抜く",
      desc: "形を整える前に、内側の不要な枝を減らします。不要な枝の見分け方は「忌み枝とは」にまとめています。",
    },
    {
      title: "球の形をめやすに刈り込む",
      desc: "熊本市の表の樹形は球です。萌芽力が強く刈り込みに耐える樹種のため、外側の輪郭を整えます。",
    },
    {
      title: "秋に伸びた枝を軽く整える",
      desc: "世田谷区の手入時期には9月下旬〜10月上旬も入っています。春夏の剪定後に伸びて形が崩れた部分を整えます。",
    },
  ],
  ngHeading: "ヒサカキの剪定で避けたいこと",
  ngs: [
    {
      title: "冬に強く刈り込むことは避けます",
      desc: "熊本市の剪定時期（3〜7月）、世田谷区の手入時期（4月・6月、9月下旬〜10月上旬）のいずれにも、冬は入っていません。",
    },
    {
      title: "植え替えを真夏や冬に行うことは避けます",
      desc: "世田谷区の樹木一覧では、ヒサカキの移植時期は4〜6月です。移植がしやすく活着がよい樹種（◎）とされていますが、時期は合わせます。",
    },
    {
      title: "花のにおいを知らずに玄関や窓のそばに植えることは避けます",
      desc: "世田谷区の樹木一覧は、ヒサカキの参考事項に「花は臭い」と書いています。植える場所を決める前に確かめます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣のように本数が多いとき、高さが手の届かないところまで伸びたとき</Hl>は、剪定業者に相談してください。「ヒサカキは3〜7月に刈り込みたい」と時期を伝えると、日程を決めやすくなります。
    </p>,
    <p key="2">
      常緑樹の剪定時期の考え方は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、同じツバキ科の庭木は<Link href="/mokkoku-sentei/" className={A}>モッコクの剪定</Link>、生垣の刈り込みは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ヒサカキの剪定を業者に相談する",
  ctaText: "生垣の刈り込みや、高くなったヒサカキの剪定は、業者に任せると安心です。",
  faqHeading: "ヒサカキの剪定でよくある質問",
  faqs: [
    {
      q: "ヒサカキの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインの表では、ヒサカキの剪定時期は3〜7月です。世田谷区の樹木一覧の手入時期は4月・6月と9月下旬〜10月上旬です。",
    },
    {
      q: "ヒサカキは強く刈り込んでも大丈夫ですか？",
      a: "熊本市は「萌芽力が強く、剪定に耐える」、世田谷区は「萌芽力あり、刈り込みに耐える」としています。いずれも、刈り込みに耐える樹種として記載しています。",
    },
    {
      q: "ヒサカキの植え替えはいつがよいですか？",
      a: "世田谷区の樹木一覧では、ヒサカキの移植時期は4〜6月で、移植がしやすく活着がよい樹種（◎）とされています。",
    },
    {
      q: "ヒサカキの花はにおいますか？",
      a: "世田谷区の樹木一覧の参考事項には「花は臭い。実は球形、紫黒色」と書かれています。",
    },
  ],
  related: [
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹と落葉樹の時期の違い" },
    { href: "/mokkoku-sentei/", label: "モッコクの剪定", desc: "同じツバキ科の常緑樹" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込み", desc: "刈り込みの手順と時期" },
    { href: "/imieda/", label: "忌み枝とは", desc: "剪定で取り除く不要枝" },
  ],
};

export default function HisakakiSenteiPage() {
  return <KnowArticle data={data} />;
}
