import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/hanamomo-sentei/";
const A = "text-[#2D7F3E] underline";
const BGTYM = "https://www.bgtym.org/fgbank/_wp/wp-content/uploads/2022/12/223-hanamomo.pdf";
const SETAGAYA_KANRI = "https://www.city.setagaya.lg.jp/documents/4728/29589_5.pdf";
const SAITAMA_CITY = "https://www.city.saitama.lg.jp/001/010/019/001/p012111_d/fil/jumokukanrigaidokaiteiban.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ハナモモの剪定は花後すぐ｜花の咲いた枝を2〜3芽残して切る・8月以降は枯れ枝だけ｜お庭のミカタ",
  },
  description:
    "ハナモモの剪定時期と切り方を、花と緑の銀行（富山県）の樹種解説、世田谷区の植栽ガイドブック、さいたま市の樹木管理ガイドラインをもとにまとめました。花後なるべく早く、花の咲いた枝の基部の2〜3芽を残して切ります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ハナモモの剪定は花後すぐ",
    description:
      "ハナモモの剪定時期、切る位置、8月以降に控える作業を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; bgtym: string; setagaya: string; saitama: string }[] = [
  { item: "剪定の時期", bgtym: "花後なるべく早い時期", setagaya: "花木は花が終わった直後が目安", saitama: "花木は花芽の分化時期を考慮して決める" },
  { item: "切る位置", bgtym: "花の咲いた枝の基部の2〜3芽を残す", setagaya: "記載なし", saitama: "記載なし" },
  { item: "花芽ができる時期", bgtym: "8月頃に来年の花芽ができる", setagaya: "記載なし（ツツジ類・ジンチョウゲは夏季）", saitama: "記載なし" },
  { item: "花芽ができた後", bgtym: "枯れ枝や重なった枝を切り除くだけ", setagaya: "花芽を切ると開花に支障が出ることがある", saitama: "記載なし" },
  { item: "ひこばえ・不要な枝", bgtym: "ひこばえや幹から直接出る枝は見つけ次第切り除く", setagaya: "徒長枝・からみ枝・ふところ枝・幹ぶき・ひこばえなどは剪定", saitama: "記載なし" },
  { item: "病害虫", bgtym: "サクラに準じて実施", setagaya: "記載なし", saitama: "記載なし" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">花と緑の銀行（ハナモモ）</th>
          <th className="border px-2 py-2 text-left">世田谷区 植栽ガイドブック</th>
          <th className="border px-2 py-2 text-left">さいたま市 樹木管理ガイドライン</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.bgtym}</td>
            <td className="border px-2 py-2">{r.setagaya}</td>
            <td className="border px-2 py-2">{r.saitama}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に3つの資料を開き、剪定に関する記載を当サイトで項目ごとに照合しました。ハナモモを名指しで扱っているのは花と緑の銀行の資料だけで、世田谷区とさいたま市の資料は花木全般についての記載です。「記載なし」はその資料に書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "hanamomo-sentei",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "ハナモモの剪定は花後すぐ｜花の咲いた枝を2〜3芽残して切る・8月以降は枯れ枝だけ",
  breadcrumbLabel: "ハナモモの剪定",
  tagChips: ["ハナモモ", "花桃", "花木", "剪定時期", "落葉樹"],
  ldHeadline: "ハナモモの剪定は花後すぐ｜花の咲いた枝を2〜3芽残して切る・8月以降は枯れ枝だけ",
  ldDescription:
    "ハナモモの剪定時期、切る位置、花芽ができた後の注意点を、花と緑の銀行（富山県）、世田谷区、さいたま市の資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ハナモモの剪定は、<Hl>花後なるべく早い時期</Hl>に行います。花と緑の銀行（富山県）の緑づくりコーナーに掲載された樹木医による解説は、樹形を整え、花を数多く咲かせ、木を大きくさせないためには、花後なるべく早い時期に<Hl>花の咲いた枝の基部の2〜3芽を残して剪定</Hl>するとしています。また、<Hl>8月頃に来年の花芽ができるため、それ以降の剪定は枯れ枝や重なった枝を切り除くだけ</Hl>にするとしています（出典：<a href={BGTYM} className={A} target="_blank" rel="noopener noreferrer">花と緑の銀行〈緑づくりコーナー〉「庭木に利用する樹種の特徴と管理 ハナモモ」（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        本記事では、この解説と、世田谷区・さいたま市の樹木管理の資料を照合し、庭のハナモモの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "ハナモモは花が終わったらすぐ、花の咲いた枝を根元の2〜3芽を残して切ります。8月頃に翌年の花芽ができるため、それ以降は枯れ枝や重なった枝の整理にとどめます。",
  conclusionBody: (
    <>
      <p>
        3つの資料を当サイトで項目ごとに並べると、次のとおりです。世田谷区の植栽ガイドブックは、花木は花が終わった直後を剪定の目安にすれば、ほとんど間違いないとしています（出典：<a href={SETAGAYA_KANRI} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」維持・管理（PDF）</a>、2026年11月21日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ハナモモの剪定に関する4つの基本",
  basicsIntro: (
    <p>
      以下は、3つの資料に書かれている内容を整理したものです。地域や品種によって花の時期は前後するため、ご自宅の木の花が終わった時期を基準にしてください。
    </p>
  ),
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は花後なるべく早く",
      desc: "花と緑の銀行の解説では、花後なるべく早い時期に剪定するとしています。富山県中央植物園では4月上旬から下旬にかけて観賞できるとしています。",
    },
    {
      title: "花の咲いた枝は2〜3芽残して切る",
      desc: "同じ解説では、花の咲いた枝の基部の2〜3芽を残して剪定するとしています。",
    },
    {
      title: "8月頃に翌年の花芽ができる",
      desc: "同じ解説では、8月頃に来年の花芽ができるので、それ以降の剪定は枯れ枝や重なった枝を切り除くだけにするとしています。",
    },
    {
      title: "水はけのよい日向を好む",
      desc: "同じ解説では、土質は特に選ばないものの、水はけのよい肥沃な土壌と日向を好むとしています。",
    },
  ],
  stepsHeading: "花後に行う4つの剪定の手順",
  stepsIntro: (
    <p>
      花が終わった時期に、次の順番で進めます。
    </p>
  ),
  steps: [
    {
      title: "枯れ枝・折れ枝・病気の枝を取り除く",
      desc: "世田谷区の植栽ガイドブックでは、最初に除去する枝は枯れ枝・折れ枝・病気の枝としています。",
    },
    {
      title: "ひこばえと幹から直接出る枝を切る",
      desc: "花と緑の銀行の解説では、ひこばえや幹から直接出る枝は見つけ次第切り除くとしています。",
    },
    {
      title: "花の咲いた枝を2〜3芽残して切る",
      desc: "同じ解説で示されている切り方です。花の咲いた枝の基部の2〜3芽を残します。",
    },
    {
      title: "樹形の偏りを確認する",
      desc: "世田谷区の植栽ガイドブックでは、樹木全体の枝付きを見ながら、樹形が偏らないように剪定するとしています。",
    },
  ],
  ngHeading: "ハナモモの剪定で避けたいこと",
  ngs: [
    {
      title: "8月以降に枝先を切り詰めることは避けます",
      desc: "花と緑の銀行の解説では、8月頃に来年の花芽ができるため、それ以降の剪定は枯れ枝や重なった枝を切り除くだけにするとしています。世田谷区の植栽ガイドブックでは、花木は剪定時に花芽を切ってしまうと開花に支障が出ることがあるとしています。",
    },
    {
      title: "ひこばえを伸ばしたままにすることは避けます",
      desc: "花と緑の銀行の解説では、ひこばえや幹から直接出る枝は見つけ次第切り除くとしています。",
    },
    {
      title: "日陰や水はけの悪い場所に植えることは避けます",
      desc: "同じ解説では、水はけのよい肥沃な土壌と日向を好むとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>木が大きくなって脚立が必要、樹形を作り直したい、サクラやウメなどほかの花木とまとめて花後に剪定したい</Hl>といった場合は、業者に相談すると作業がまとまります。さいたま市の樹木管理ガイドラインでは、花木の場合は花芽の分化時期を考慮して剪定時期を決めるとしています（出典：<a href={SAITAMA_CITY} className={A} target="_blank" rel="noopener noreferrer">さいたま市「公共用地における樹木等の管理ガイドライン（改訂版）」（PDF）</a>、2026年11月21日確認）。依頼するときは、作業日を花が終わった直後に合わせてもらうよう相談してください。
    </p>,
    <p key="2">
      花と緑の銀行の解説では、病害虫対策はサクラに準じて実施するとしています。サクラの剪定と管理は<Link href="/sakura-sentei/" className={A}>桜の剪定</Link>、ひこばえの扱いは<Link href="/hikobae-dobukieda/" className={A}>ひこばえ・胴吹き枝の処理</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "花後の剪定に合わせて相談する",
  ctaText:
    "ハナモモの剪定は花後なるべく早く、8月以降は枯れ枝や重なった枝の整理にとどめるのが目安です。大きな木は花後の剪定を業者と相談すると安心です。",
  faqHeading: "ハナモモの剪定のよくある質問",
  faqs: [
    {
      q: "ハナモモの剪定はいつがよいですか？",
      a: "花と緑の銀行の解説では、花後なるべく早い時期に剪定するとしています。8月頃に来年の花芽ができるため、それ以降の剪定は枯れ枝や重なった枝を切り除くだけにするとしています。",
    },
    {
      q: "冬に剪定してもよいですか？",
      a: "花と緑の銀行の解説では、8月頃に花芽ができた後の剪定は枯れ枝や重なった枝を切り除くだけにするとしています。冬に枝先を切り詰めると、すでにできている花芽を切ってしまうおそれがあります。",
    },
    {
      q: "ハナモモの実は食べられますか？",
      a: "花と緑の銀行の解説では、実もなるが、食用のモモと比べて小さくて苦味があり、食べられたものではないとしています。",
    },
    {
      q: "ハナモモとモモは違う木ですか？",
      a: "花と緑の銀行の解説では、ハナモモは花を観賞するためにモモ（バラ科サクラ属の落葉小高木、原産地は中国）を改良した栽培品種の総称としています。",
    },
  ],
  related: [
    {
      href: "/sakura-sentei/",
      label: "桜の剪定",
      desc: "病害虫対策の参考に",
    },
    {
      href: "/ume-sentei/",
      label: "梅の剪定",
      desc: "同じバラ科の花木",
    },
    {
      href: "/kaboku-kaika-teire/",
      label: "花木の開花を良くする手入れ",
      desc: "花が咲かない原因と剪定・施肥",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "季節ごとの考え方と樹種の違い",
    },
  ],
};

export default function HanamomoSenteiPage() {
  return <KnowArticle data={data} />;
}
