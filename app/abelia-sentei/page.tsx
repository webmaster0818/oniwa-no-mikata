import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/abelia-sentei/";
const A = "text-[#2D7F3E] underline";
const MINATO = "https://www.city.minato.tokyo.jp/documents/175962/20260213161310.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "アベリアの剪定｜萌芽力が強く刈り込みに耐える、刈り込みは年2回・5〜6月に1回が目安｜お庭のミカタ",
  },
  description:
    "アベリアの剪定と刈り込みを、港区の樹木管理マニュアルと世田谷区の植栽ガイドブックをもとにまとめました。萌芽力が強く伸びのよい樹種として年2回の刈り込みの例に挙げられ、新芽が生長を休止する5〜6月に1回刈り込みます。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "アベリアの剪定と刈り込み",
    description:
      "アベリアの刈り込みの回数と時期、生垣の刈り方、手入れの時期を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; minato: string; setagaya: string }[] = [
  { item: "性質", minato: "萌芽力が強く伸長のよい樹種（マサキ・ネズミモチと並べて記載）", setagaya: "常緑・低木。株立となる。萌芽力あり、刈り込みに耐える" },
  { item: "刈り込みの回数・時期", minato: "年2回型。新芽が生長を休止する5月〜6月に1回刈り込みを行って形を整える", setagaya: "記載なし" },
  { item: "手入れの時期", minato: "記載なし", setagaya: "11〜3月" },
  { item: "花の時期", minato: "記載なし", setagaya: "6〜10月" },
  { item: "移植の時期", minato: "記載なし", setagaya: "3月中旬〜4月、6月下旬" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">港区 樹木管理マニュアル</th>
          <th className="border px-2 py-2 text-left">世田谷区 植栽ガイドブック 樹木一覧</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.minato}</td>
            <td className="border px-2 py-2">{r.setagaya}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に2つの資料を開き、アベリアに関する記載を当サイトで項目ごとに照合しました。港区は刈込みの時期・回数の説明でアベリアを例に挙げた箇所、世田谷区は樹木一覧のアベリアの行です。「記載なし」はその資料に書かれていないという意味です。2つの資料で示す時期が異なるのは、港区が生育期の刈り込み、世田谷区が手入れ全般の時期を示しているためと当サイトでは読んでいます。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "abelia-sentei",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "アベリアの剪定｜萌芽力が強く刈り込みに耐える、刈り込みは年2回・5〜6月に1回が目安",
  breadcrumbLabel: "アベリアの剪定",
  tagChips: ["アベリア", "生垣", "刈り込み", "常緑低木", "剪定時期"],
  ldHeadline: "アベリアの剪定｜萌芽力が強く刈り込みに耐える、刈り込みは年2回・5〜6月に1回が目安",
  ldDescription:
    "アベリアの刈り込みの回数と時期、生垣の刈り方、手入れの時期を、港区の樹木管理マニュアルと世田谷区の植栽ガイドブックをもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        アベリアは、<Hl>萌芽力が強く、刈り込みに耐える常緑の低木</Hl>です。港区の樹木管理マニュアルは、刈込みの回数を年1回型・年2回型などに分け、<Hl>萌芽力が強く伸長のよいマサキ・ネズミモチ・アベリアなどは年2回</Hl>とし、新芽が生長を休止する<Hl>5月〜6月に1回刈り込みを行って形を整える</Hl>としています（出典：<a href={MINATO} className={A} target="_blank" rel="noopener noreferrer">港区「樹木管理マニュアル」（令和5年4月・PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        本記事では、このマニュアルと世田谷区の植栽ガイドブックの樹木一覧を照合し、庭や生垣のアベリアの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "アベリアは刈り込みに強く、年2回の刈り込みが目安です。1回目は新芽の伸びが止まる5〜6月に形を整え、長年同じ位置で刈って芽吹きが落ちてきたら、ときどき深く切り戻します。",
  conclusionBody: (
    <>
      <p>
        2つの資料を当サイトで項目ごとに並べると、次のとおりです。世田谷区の植栽ガイドブックの樹木一覧では、アベリアを常緑の低木とし、手入れの時期を11〜3月、参考事項に「株立となる。萌芽力あり、刈り込みに耐える」と記載しています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、2026年11月21日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "アベリアの剪定に関する4つの基本",
  basicsIntro: (
    <p>
      以下は、2つの資料に書かれている内容を整理したものです。
    </p>
  ),
  basicsLabel: "基本",
  basics: [
    {
      title: "刈り込みに強い",
      desc: "世田谷区の樹木一覧では、アベリアは萌芽力があり、刈り込みに耐えるとしています。港区のマニュアルでも、萌芽力が強く伸長のよい樹種として挙げています。",
    },
    {
      title: "刈り込みは年2回型",
      desc: "港区のマニュアルでは、刈込みの回数は樹勢や萌芽力によって年1回型・年2回型・年3回型・多数型に分けられ、アベリアなどは年2回としています。",
    },
    {
      title: "1回目は5〜6月",
      desc: "港区のマニュアルでは、年2回の場合、新芽が生長を休止する5月〜6月に1回刈り込みを行って形を整えるとしています。",
    },
    {
      title: "花の時期が長い",
      desc: "世田谷区の樹木一覧では、アベリアの鑑賞時期を花6〜10月としています。港区のマニュアルでは、花木類を刈り込む場合は花芽の分化時期と着生位置に注意するとしています。",
    },
  ],
  stepsHeading: "アベリアを刈り込む4つの手順",
  stepsIntro: (
    <p>
      港区のマニュアルの刈込みの技法と、世田谷区の樹木一覧にもとづく流れです。
    </p>
  ),
  steps: [
    {
      title: "5〜6月に1回目の刈り込みで形を整える",
      desc: "港区のマニュアルでは、新芽が生長を休止する5月〜6月に1回刈り込みを行って形を整えるとしています。",
    },
    {
      title: "生垣は上を強く、下を弱く刈る",
      desc: "港区のマニュアルでは、生垣の刈込みは上枝を強く、下枝を弱く刈り込むことで、下枝が枯れずに裾の美しい線を保てるとしています。",
    },
    {
      title: "株全体のバランスを見て刈る",
      desc: "港区のマニュアルでは、剪定が個々の枝のあり方に重点を置くのに対し、刈込みは全体としての樹形のバランスに重点を置くとしています。",
    },
    {
      title: "芽吹きが落ちてきたら深く切り戻す",
      desc: "港区のマニュアルでは、長年同じところばかり刈り込むと萌芽力が落ちてくるため、時には深く切り戻すことも必要としています。世田谷区の樹木一覧では、アベリアの手入れの時期を11〜3月としています。",
    },
  ],
  ngHeading: "アベリアの剪定で避けたいこと",
  ngs: [
    {
      title: "生垣の上下を同じ強さで刈り続けることは避けます",
      desc: "港区のマニュアルでは、上枝を強く、下枝を弱く刈り込むことで下枝が枯れずに裾の線を保てるとしています。",
    },
    {
      title: "毎回同じ位置だけで刈り込み続けることは避けます",
      desc: "港区のマニュアルでは、長年同じところばかり刈り込むと萌芽力が落ちてくるとしています。",
    },
    {
      title: "花芽の付き方を確かめずに刈ることは避けます",
      desc: "港区のマニュアルでは、花木類を刈り込む場合は花芽の分化時期と着生位置に注意するとしています。花を楽しみたい場合は、刈り込む時期と量を控えめにして様子を見てください。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣が長く年2回の刈り込みが負担、株が大きくなって形を作り直したい、深い切り戻しで樹形を小さくしたい</Hl>といった場合は、庭木の剪定業者に相談すると作業がまとまります。依頼するときは、生垣か単独の株か、花をどの程度残したいかを伝えてください。
    </p>,
    <p key="2">
      生垣の刈り込み全般は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込みの基礎知識</Link>、生垣に使う樹種は<Link href="/ikegaki-shurui/" className={A}>生垣に向く木の種類</Link>、季節ごとの剪定の考え方は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "刈り込みの回数と仕上がりを伝えて相談する",
  ctaText:
    "アベリアは刈り込みに強く、5〜6月を含む年2回の刈り込みが目安です。長い生垣や作り直しは業者と相談すると安心です。",
  faqHeading: "アベリアの剪定のよくある質問",
  faqs: [
    {
      q: "アベリアの剪定はいつがよいですか？",
      a: "港区のマニュアルでは、アベリアなどは年2回の刈り込みとし、新芽が生長を休止する5月〜6月に1回刈り込みを行って形を整えるとしています。世田谷区の樹木一覧では、手入れの時期を11〜3月としています。",
    },
    {
      q: "アベリアは強く刈り込んでも大丈夫ですか？",
      a: "世田谷区の樹木一覧では、萌芽力があり、刈り込みに耐えるとしています。港区のマニュアルでは、長年同じところばかり刈り込むと萌芽力が落ちてくるため、時には深く切り戻すことも必要としています。",
    },
    {
      q: "アベリアの花はいつ咲きますか？",
      a: "世田谷区の樹木一覧では、アベリアの鑑賞時期を花6〜10月としています。",
    },
    {
      q: "アベリアの生垣をきれいに保つコツはありますか？",
      a: "港区のマニュアルでは、生垣の刈込みは上枝を強く、下枝を弱く刈り込むことで、下枝が枯れずに裾の美しい線を保つことができるとしています。",
    },
  ],
  related: [
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込みの基礎知識",
      desc: "刈る時期と上下の強さ",
    },
    {
      href: "/ikegaki-shurui/",
      label: "生垣に向く木の種類",
      desc: "樹種ごとの特徴",
    },
    {
      href: "/ikegaki-shitaeda-kare/",
      label: "生垣の下枝が枯れる・すき間があく",
      desc: "裾が透ける原因と対処",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "季節ごとの考え方と樹種の違い",
    },
  ],
};

export default function AbeliaSenteiPage() {
  return <KnowArticle data={data} />;
}
