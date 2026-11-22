import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/inutsuge-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_KANRI = "https://www.city.setagaya.lg.jp/documents/4728/29589_5.pdf";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "イヌツゲの剪定｜刈り込みは5〜6月と9〜10月の年2回、枝が密で刈り込みに耐える木｜お庭のミカタ",
  },
  description:
    "イヌツゲの剪定・刈り込みの時期と方法を、世田谷区の植栽ガイドブック（維持・管理と樹木の特性表）と熊本市の公共施設樹木の維持管理ガイドラインをもとにまとめました。3つの資料の時期の違いも並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "イヌツゲの剪定",
    description:
      "イヌツゲの刈り込みの時期、生垣の刈り方、葉に白い斑点が出たときの見方を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kanri: string; list: string; kumamoto: string }[] = [
  {
    item: "樹木の性質",
    kanri: "カナメモチ・ヒイラギと並ぶ萌芽力の強い樹種",
    list: "モチノキ科の常緑低木。雌雄異株。枝は密で刈り込みに耐える。植栽が多い",
    kumamoto: "常緑の中木。樹形は楕円・卵形。耐潮性があるので沿岸部に利用できる",
  },
  {
    item: "剪定・刈り込みの時期",
    kanri: "年2回の場合、新芽が生長を休止する5〜6月と、土用芽が生長を休止する9〜10月",
    list: "手入時期は6月下旬〜9月上旬、3〜4月",
    kumamoto: "5〜6月",
  },
  {
    item: "植え付け（移植）の時期",
    kanri: "記載なし",
    list: "3月下旬〜4月、10月。移植難易は「○」（移植時期や方法に注意が必要）",
    kumamoto: "記載なし",
  },
  {
    item: "育つ場所",
    kanri: "記載なし",
    list: "都市適応性は「◎」（適応性強）、日照は「○」（半日影）、乾湿は「○」（中間）、好む土壌は砂壌土",
    kumamoto: "記載なし",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">世田谷区 植栽ガイドブック 維持・管理</th>
          <th className="border px-2 py-2 text-left">世田谷区 植栽ガイドブック 掲載樹種特性表</th>
          <th className="border px-2 py-2 text-left">熊本市 公共施設樹木の維持管理ガイドライン</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.kanri}</td>
            <td className="border px-2 py-2">{r.list}</td>
            <td className="border px-2 py-2">{r.kumamoto}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月22日に3つの資料を開き、イヌツゲの行と、イヌツゲを名指しした刈り込みの記載を当サイトで項目ごとに照合しました。「記載なし」はその資料に書かれていないという意味です。特性表の記号の意味は、同じ特性表の「見方」の欄によります。熊本市の表は熊本平野部の樹種の特徴として作成されたもので、地域の気候によって適した時期は前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "inutsuge-sentei",
  published: "2026-11-22",
  updatedLabel: "2026年11月22日",
  h1: "イヌツゲの剪定｜刈り込みは5〜6月と9〜10月の年2回、枝が密で刈り込みに耐える木",
  breadcrumbLabel: "イヌツゲの剪定",
  tagChips: ["イヌツゲ", "常緑樹", "生垣", "刈り込み", "剪定時期"],
  ldHeadline: "イヌツゲの剪定｜刈り込みは5〜6月と9〜10月の年2回、枝が密で刈り込みに耐える木",
  ldDescription:
    "イヌツゲの剪定・刈り込みの時期と方法を、世田谷区の植栽ガイドブックと熊本市の公共施設樹木の維持管理ガイドラインをもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        世田谷区の植栽ガイドブックは、刈り込みを年2回行う場合は<Hl>新芽が生長を休止する5〜6月と、土用芽が生長を休止する9〜10月</Hl>に行うとし、この回数が<Hl>イヌツゲ・カナメモチ・ヒイラギなど萌芽力の強い樹種</Hl>に適しているとしています（出典：<a href={SETAGAYA_KANRI} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」維持・管理（PDF）</a>、2026年11月22日確認）。
      </p>
      <p>
        本記事では、同じガイドブックの掲載樹種特性表と、熊本市の公共施設樹木の維持管理ガイドラインにあるイヌツゲの行を照合し、庭のイヌツゲの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "イヌツゲは枝が密で刈り込みに耐える木です。生垣や玉仕立ては、5〜6月と9〜10月の年2回を目安に刈り込みます。",
  conclusionBody: (
    <>
      <p>
        世田谷区の掲載樹種特性表では、イヌツゲを<Hl>「雌雄異株、枝は密で刈り込みに耐える。植栽多い。」</Hl>とし、手入時期を6月下旬〜9月上旬と3〜4月としています（出典：<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」掲載樹種特性表（PDF）</a>、2026年11月22日確認）。熊本市の表では剪定時期を5〜6月としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」巻末資料 熊本平野部の主要樹種の特徴（PDF）</a>、2026年11月22日確認）。3つの資料を当サイトで項目ごとに並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "イヌツゲの剪定に関する4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "萌芽力が強く、刈り込みに耐える",
      desc: "世田谷区のガイドブックでは、イヌツゲを萌芽力の強い樹種とし、特性表でも「枝は密で刈り込みに耐える」としています。",
    },
    {
      title: "刈り込みは年2回が目安",
      desc: "世田谷区のガイドブックでは、萌芽力の強い樹種は5〜6月と9〜10月の年2回の刈り込みに適しているとしています。熊本市の表では剪定時期を5〜6月としています。",
    },
    {
      title: "年1回なら6〜7月",
      desc: "世田谷区のガイドブックでは、刈り込みを年1回とする場合は6〜7月に行い、ほとんどの樹種はこの時期に行って差し支えないとしています。",
    },
    {
      title: "潮風のあたる場所にも使われる",
      desc: "熊本市の表では、イヌツゲは耐潮性があるので沿岸部に利用できるとしています。",
    },
  ],
  stepsHeading: "イヌツゲを刈り込む4つの手順",
  stepsIntro: <p>世田谷区のガイドブックにある刈り込みの方法にもとづく流れです。</p>,
  steps: [
    {
      title: "5〜6月に、伸びた新芽を刈り込む",
      desc: "世田谷区のガイドブックでは、新芽が生長を休止する5〜6月を1回目の刈り込みの時期としています。熊本市の表でも5〜6月を剪定時期としています。",
    },
    {
      title: "枝が混み合った部分を中すかしする",
      desc: "世田谷区のガイドブックでは、枝の密生した箇所は内部に日光を入れるために中すかしを行い、樹冠の外側のラインを一定の形にそろえて切るとしています。枝が密なイヌツゲは、外側だけを刈り続けると内側に光が入りにくくなります。",
    },
    {
      title: "生垣は上を強く、裾を弱く刈る",
      desc: "世田谷区のガイドブックでは、生垣は上部の枝を強く、下部の枝を弱く刈り込むと、裾のラインを美しく保てるとしています。自分で管理する場合は、刈りやすい高さにしておくと維持管理しやすいとしています。",
    },
    {
      title: "9〜10月に、土用芽を整える",
      desc: "世田谷区のガイドブックでは、土用芽（夏に伸びる芽）が生長を休止する9〜10月を2回目の時期としています。伸びた分をそろえる程度にとどめます。",
    },
  ],
  ngHeading: "イヌツゲの剪定で避けたいこと",
  ngs: [
    {
      title: "生垣の上を残したまま裾ばかり刈ることは避けます",
      desc: "世田谷区のガイドブックでは、生垣は上部の枝を強く、下部の枝を弱く刈り込むとしています。上が茂ると裾に光が届きにくくなります。",
    },
    {
      title: "外側だけを毎年同じ線で刈り続けることは避けます",
      desc: "世田谷区のガイドブックでは、枝の密生した箇所は内部に日光を入れるために中すかしを行うとしています。",
    },
    {
      title: "葉の白い斑点を見過ごすことは避けます",
      desc: "福岡県の病害虫の資料では、ミカンハダニの寄主にイヌツゲを挙げ、被害葉は葉緑素が抜けて白い小斑点が生じ、加害が激しいと落葉するとしています（出典は下記）。刈り込みのときに葉の裏も確かめてください。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣が長い、玉仕立てなど形を保つ仕立物にしている、高さがあって脚立での作業になる</Hl>といった場合は、庭木の剪定業者に相談すると作業がまとまります。世田谷区のガイドブックでも、仕立物の刈り込みは難しいため専門家に依頼する必要があるとしています。依頼するときは、イヌツゲであること、生垣か仕立物か、希望の高さを伝えてください。
    </p>,
    <p key="2">
      生垣の刈り込みの基本は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、生垣に向く木の比較は<Link href="/ikegaki-shurui/" className={A}>生垣に向く木の種類</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。ハダニの記載の出典は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県「【花き花木】病害虫・雑草の発生生態と防除」（PDF）</a>（2026年11月22日確認）です。
    </p>,
  ],
  ctaHeading: "生垣か仕立物か、希望の高さを伝えて相談する",
  ctaText:
    "イヌツゲは萌芽力が強く、年2回の刈り込みに向く木です。長い生垣や形を保つ仕立物は、業者と相談すると安心です。",
  faqHeading: "イヌツゲの剪定のよくある質問",
  faqs: [
    {
      q: "イヌツゲの剪定はいつがよいですか？",
      a: "世田谷区の植栽ガイドブックでは、年2回刈り込む場合は5〜6月と9〜10月としています。熊本市の公共施設樹木の維持管理ガイドラインの表では5〜6月としています。",
    },
    {
      q: "年に1回しか刈り込めません。",
      a: "世田谷区のガイドブックでは、刈り込みを年1回とする場合は6〜7月に行い、ほとんどの樹種はこの時期に行って差し支えないとしています。",
    },
    {
      q: "イヌツゲは強く刈り込んでも大丈夫ですか？",
      a: "世田谷区の特性表では、イヌツゲは枝が密で刈り込みに耐えるとしています。ただし、枝が密生した箇所は中すかしを行い、内部に光を入れることも勧めています。",
    },
    {
      q: "イヌツゲの葉が白っぽくかすれています。",
      a: "福岡県の病害虫の資料では、ミカンハダニの寄主にイヌツゲを挙げ、被害葉は葉緑素が抜けて白い小斑点が生じるとしています。原因が分からない場合は、葉の裏を確かめたうえで専門家に相談してください。",
    },
  ],
  related: [
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込み",
      desc: "時期と刈り方の基本",
    },
    {
      href: "/ikegaki-shurui/",
      label: "生垣に向く木の種類",
      desc: "4市の資料に共通する樹種",
    },
    {
      href: "/hiiragi-sentei/",
      label: "ヒイラギの剪定",
      desc: "同じく萌芽力の強い常緑樹",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "季節ごとの考え方と樹種の違い",
    },
  ],
};

export default function InutsugeSenteiPage() {
  return <KnowArticle data={data} />;
}
