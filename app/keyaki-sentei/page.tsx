import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/keyaki-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const TOKYO = "https://www.kensetsu.metro.tokyo.lg.jp/content/000051877.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ケヤキの剪定｜時期は11〜3月の落葉期、強く切らず不要な枝を抜いてほうき状の樹形を保つ｜お庭のミカタ",
  },
  description:
    "ケヤキの剪定の時期と方法を、世田谷区の植栽ガイドブック、熊本市の樹木管理ガイドライン、芦屋市の街路樹等維持管理基本書をもとにまとめました。剪定を嫌う樹種とされる理由と、大きくなりすぎたときの切り方も整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ケヤキの剪定",
    description:
      "ケヤキの剪定時期（11〜3月）、強剪定を避けて不要枝を抜く方法、樹冠を小さくするときの切返し剪定を、公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; when: string; note: string }[] = [
  {
    src: "世田谷区",
    when: "手入時期 11〜3月",
    note: "幹は直立でほうき状の樹形となる。新緑や落葉後の樹姿もよい",
  },
  {
    src: "熊本市",
    when: "剪定時期 11〜3月",
    note: "樹形は盃形。枝抜き剪定は、幹枝のバランスを保つように留意して行う",
  },
  {
    src: "芦屋市",
    when: "秋期剪定（10月上旬〜11月中旬）と冬期剪定",
    note: "剪定を嫌う樹種のため、必要最低限の不要枝抜きを原則とする（秋期）。樹冠が大きくなり過ぎたときは冬期に切返し・切詰め剪定",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">時期</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に世田谷区の植栽ガイドブック（掲載樹種特性表）、熊本市の公共施設樹木の維持管理ガイドライン（主要樹種の表とケヤキの管理方針）、芦屋市の街路樹等維持管理基本書（剪定時期とケヤキの剪定）を開き、ケヤキの記載を当サイトで並べました。芦屋市の資料は街路樹を対象としており、秋期剪定は落葉量を減らす目的を含みます。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "keyaki-sentei",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "ケヤキの剪定｜時期は11〜3月の落葉期、強く切らず不要な枝を抜いてほうき状の樹形を保つ",
  breadcrumbLabel: "ケヤキの剪定",
  tagChips: ["ケヤキ", "落葉樹", "高木", "枝抜き剪定", "樹形"],
  ldHeadline: "ケヤキの剪定｜時期は11〜3月の落葉期、強く切らず不要な枝を抜いてほうき状の樹形を保つ",
  ldDescription:
    "ケヤキの剪定の時期と方法を、世田谷区・熊本市・芦屋市・東京都の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ケヤキの剪定は、<Hl>葉が落ちた11月〜3月</Hl>に、<Hl>強く切らず、からみ枝や枯れ枝などの不要な枝を抜く</Hl>のが基本です。世田谷区の植栽ガイドブックは手入時期を11〜3月とし、ケヤキを「幹は直立でほうき状の樹形となる」と説明しています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「植栽ガイドブック」掲載樹種特性表（PDF）</a>、2026年11月23日確認）。
      </p>
      <p>
        芦屋市の街路樹等維持管理基本書は、ケヤキを「剪定を嫌う樹種」とし、必要最低限の不要枝抜きを原則としています。本記事では、庭や敷地のケヤキを剪定するときの考え方を、自治体の資料から整理します。
      </p>
    </>
  ),
  conclusionTitle: "ケヤキは落葉期（11〜3月）に、不要な枝を付け根から抜いて樹形を整えます。枝先を短く切りそろえたり、太い枝を途中でぶつ切りにしたりはしません。",
  conclusionBody: (
    <>
      <p>
        熊本市のガイドラインは、ケヤキの剪定時期を11〜3月とし、枝抜き剪定は幹枝のバランスを保つように留意して行うとしています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」（PDF）</a>、2026年11月23日確認）。3つの資料の記載を並べると、次のとおりです（芦屋市は<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">街路樹等維持管理基本書（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ケヤキの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定時期は11〜3月",
      desc: "世田谷区の手入時期、熊本市の剪定時期とも11〜3月です。葉が落ちて枝の形が見えやすい時期です。",
    },
    {
      title: "剪定を嫌う樹種とされる",
      desc: "芦屋市の基本書は、ケヤキを剪定を嫌う樹種とし、秋期剪定では必要最低限の不要枝抜きを原則とし、強剪定は行わないとしています。",
    },
    {
      title: "直幹・ほうき状（盃形）の樹形を活かす",
      desc: "熊本市は管理方針として「直幹、盃形の樹木特有の美しい樹形を目指す」とし、1〜2年に一度の切返し剪定か、数年に一度の切詰め剪定で樹形を維持するとしています。",
    },
    {
      title: "根は浅く広がる",
      desc: "東京都建設局の街路樹診断マニュアル（参考資料）では、根系分布の浅根型の樹種としてケヤキを挙げています。根元の土を掘り返したり踏み固めたりする作業にも注意します。",
    },
  ],
  stepsHeading: "庭のケヤキを剪定する4つの手順",
  stepsIntro: <p>芦屋市の基本書と熊本市のガイドラインの剪定の要領にもとづく流れです。</p>,
  steps: [
    {
      title: "落葉後に、からみ枝・枯れ枝を見つける",
      desc: "芦屋市の基本書は、基本的には不要枝（からみ枝、枯れ枝等）だけを枝抜き剪定し、樹形を整えるとしています。",
    },
    {
      title: "込み過ぎた枝を付け根から抜いて透かす",
      desc: "芦屋市の基本書は、必要以上に込み過ぎた枝は枝抜き剪定によって透かしておくとし、新生枝は基本的に切り詰めない（枝先を切らない）としています。",
    },
    {
      title: "大きくなり過ぎた枝は、分かれ目で切り返す",
      desc: "熊本市は、主枝を切除する場合はできるだけ送り枝のある部位で切返し剪定を行い、剪定は分岐した枝の真上で斜めに切除するとしています。芦屋市は、樹冠が大きくなり過ぎたときは冬期に切返し剪定・切詰め剪定で樹冠を小さくするとしています。",
    },
    {
      title: "翌年以降に、切り口から出た枝を整理する",
      desc: "熊本市は、主枝の途中で切り詰めた切り口から多く萌芽した枝のうち、外側に向かって素直に伸びた枝を2〜3本残して切除するとしています。",
    },
  ],
  ngHeading: "ケヤキの剪定で避けたいこと",
  ngs: [
    {
      title: "強剪定で枝を大きく切り詰めることは避けます",
      desc: "芦屋市の基本書は、ケヤキの秋期剪定で強剪定は行わないとし、切返し剪定・切詰め剪定は冬期剪定で行うとしています。",
    },
    {
      title: "太い枝を途中でぶつ切りにすることは避けます",
      desc: "芦屋市の基本書は、原則ぶつ切りはしないとしています。熊本市も、分岐した枝の真上で斜めに切除するとしています。",
    },
    {
      title: "秋の剪定で葉をすべて落とすような切り方は避けます",
      desc: "芦屋市の基本書は、落葉期前の秋期剪定では葉が全く無い不自然な強剪定は行わないとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>樹高が2階の屋根を超えている、枝が電線や隣家に届いている、太い枝を切る必要がある</Hl>といった場合は、高木の剪定に対応する業者に相談してください。ケヤキは高木になる木で、はしごや脚立の上での作業は危険を伴います。依頼するときは、樹高、どこまで小さくしたいか、枝が当たっているもの（電線・屋根・隣地）を伝えます。
    </p>,
    <p key="2">
      高い木の作業の危険は<Link href="/takagi-sentei-kiken/" className={A}>高い木の剪定の危険</Link>、木を低くする方法は<Link href="/niwaki-hikuku-suru/" className={A}>庭木を低くする</Link>、落ち葉の対策は<Link href="/ochiba-taisaku/" className={A}>落ち葉対策</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。根の分布の出典は<a href={TOKYO} className={A} target="_blank" rel="noopener noreferrer">東京都建設局「街路樹診断マニュアル 第Ⅶ章 参考資料」（PDF）</a>（2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "樹高と小さくしたい範囲を伝えて相談する",
  ctaText:
    "ケヤキは大きくなる木で、強く切ると樹形が崩れやすい木です。高い位置の枝や太い枝の剪定は、業者と相談すると安心です。",
  faqHeading: "ケヤキの剪定のよくある質問",
  faqs: [
    {
      q: "ケヤキの剪定はいつがよいですか？",
      a: "世田谷区の植栽ガイドブックは手入時期を11〜3月、熊本市のガイドラインは剪定時期を11〜3月としています。芦屋市の街路樹の基本書は、秋期（10月上旬〜11月中旬）に不要枝抜き、冬期に樹冠を小さくする剪定としています。",
    },
    {
      q: "ケヤキは強く切っても大丈夫ですか？",
      a: "芦屋市の基本書は、ケヤキを剪定を嫌う樹種とし、必要最低限の不要枝抜きを原則、強剪定は行わないとしています。",
    },
    {
      q: "大きくなり過ぎたケヤキを小さくするには？",
      a: "芦屋市の基本書は、樹冠が大きくなり過ぎたときは冬期に切返し剪定・切詰め剪定で樹冠を小さくするとしています。熊本市は、送り枝のある部位で切返し、分岐した枝の真上で斜めに切るとしています。",
    },
    {
      q: "ケヤキはどんな樹形になりますか？",
      a: "世田谷区のガイドブックは「幹は直立でほうき状の樹形となる」、熊本市のガイドラインは盃形としています。",
    },
  ],
  related: [
    {
      href: "/kusunoki-sentei/",
      label: "クスノキの剪定",
      desc: "大木になる常緑樹",
    },
    {
      href: "/takagi-sentei-kiken/",
      label: "高い木の剪定の危険",
      desc: "自分で登らない判断",
    },
    {
      href: "/niwaki-hikuku-suru/",
      label: "庭木を低くする",
      desc: "大きくなった木の小さくし方",
    },
    {
      href: "/icho-sentei/",
      label: "イチョウの剪定",
      desc: "大きくなる落葉高木",
    },
    {
      href: "/ochiba-taisaku/",
      label: "落ち葉対策",
      desc: "落葉樹の落ち葉の片付け",
    },
    { href: "/katsura-sentei/", label: "カツラの剪定", desc: "同じく大木になる落葉樹" },
  ],
};

export default function KeyakiSenteiPage() {
  return <KnowArticle data={data} />;
}
