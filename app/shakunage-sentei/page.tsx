import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shakunage-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const SETAGAYA_KANRI = "https://www.city.setagaya.lg.jp/documents/4728/29589_5.pdf";
const TAFF = "https://www.tokyo-aff.or.jp/uploaded/attachment/14017.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "シャクナゲの剪定は花が終わった直後｜花がら摘みと手入れの時期4〜6月・生育が遅い木の切り方｜お庭のミカタ",
  },
  description:
    "シャクナゲの剪定時期と手入れを、世田谷区の植栽ガイドブック、東京都農林水産振興財団のセイヨウシャクナゲの育て方、大和市の園芸相談の回答をもとにまとめました。手入れの時期は4〜6月、花が咲き終わったら花がらを摘み取ります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "シャクナゲの剪定は花が終わった直後",
    description:
      "シャクナゲの剪定時期、花がら摘み、施肥、病害虫を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; setagaya: string; taff: string; yamato: string }[] = [
  { item: "花の時期", setagaya: "5〜6月", taff: "4〜5月（セイヨウシャクナゲ）", yamato: "記載なし" },
  { item: "手入れ", setagaya: "手入時期 4〜6月", taff: "花が咲き終わったら花がらをつみ取る", yamato: "記載なし" },
  { item: "肥料", setagaya: "記載なし", taff: "3月と9月に油粕や緩効性の化成肥料等を株元に施す", yamato: "育ちが悪い場合、樹の周りを掘って腐葉土又はピートモスに化成肥料を加えて与える" },
  { item: "土・場所", setagaya: "埴壌土を好む。夏期の高温乾燥を嫌う", taff: "酸性土壌を好む。西日の当たらない所に植え、乾燥防止にマルチング", yamato: "記載なし" },
  { item: "病害虫", setagaya: "記載なし", taff: "アブラムシ類等", yamato: "葉が白くなる相談にツツジグンバイムシの被害と回答" },
  { item: "育ち方", setagaya: "生育遅い", taff: "常緑の低木で、地植えで高さ3m位", yamato: "記載なし" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">世田谷区 植栽ガイドブック</th>
          <th className="border px-2 py-2 text-left">東京都農林水産振興財団</th>
          <th className="border px-2 py-2 text-left">大和市 園芸相談の回答</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.setagaya}</td>
            <td className="border px-2 py-2">{r.taff}</td>
            <td className="border px-2 py-2">{r.yamato}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に3つの資料を開き、シャクナゲに関する記載を当サイトで項目ごとに照合しました。世田谷区は「建築にともなう緑化のための植栽ガイドブック」の樹木一覧、東京都農林水産振興財団は苗木生産供給事業の「セイヨウシャクナゲ」の育て方、大和市は園芸相談の事例集です。「記載なし」はその資料に書かれていないという意味で、内容を否定するものではありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shakunage-sentei",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "シャクナゲの剪定は花が終わった直後｜花がら摘みと手入れの時期4〜6月・生育が遅い木の切り方",
  breadcrumbLabel: "シャクナゲの剪定",
  tagChips: ["シャクナゲ", "石楠花", "花木", "剪定時期", "花がら摘み"],
  ldHeadline: "シャクナゲの剪定は花が終わった直後｜花がら摘みと手入れの時期4〜6月・生育が遅い木の切り方",
  ldDescription:
    "シャクナゲの剪定時期、花がら摘み、施肥、病害虫を、世田谷区の植栽ガイドブック、東京都農林水産振興財団の育て方、大和市の園芸相談の回答をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        シャクナゲの剪定は、<Hl>花が咲き終わった直後</Hl>が目安です。世田谷区の「建築にともなう緑化のための植栽ガイドブック」の樹木一覧は、シャクナゲの<Hl>手入時期を4〜6月</Hl>、花の鑑賞時期を5〜6月とし、<Hl>生育遅い</Hl>、夏期の高温乾燥を嫌うとしています（出典：<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、2026年11月21日確認）。同じガイドブックの維持管理の章は、花木は剪定時に花芽を切ってしまうと開花に支障が出ることがあるとし、<Hl>花が終わった直後を剪定の目安にすれば、ほとんど間違いない</Hl>としています（出典：<a href={SETAGAYA_KANRI} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」維持・管理（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        東京都農林水産振興財団のセイヨウシャクナゲの育て方は、手入れとして<Hl>花が咲き終わったら花がらをつみ取る</Hl>ことを挙げています（出典：<a href={TAFF} className={A} target="_blank" rel="noopener noreferrer">東京都農林水産振興財団「セイヨウシャクナゲ」（PDF）</a>、2026年11月21日確認）。本記事では、この資料と大和市の園芸相談の回答を照合し、庭のシャクナゲの剪定と手入れを整理します。
      </p>
    </>
  ),
  conclusionTitle: "シャクナゲは花が終わったらすぐに花がらを摘み、剪定もその時期に済ませます。生育が遅い木なので、切る量は混み合った枝や枯れ枝を整理する程度にとどめます。",
  conclusionBody: (
    <>
      <p>
        3つの資料を当サイトで項目ごとに並べると、次のとおりです。剪定の時期は、世田谷区の手入時期（4〜6月）と、東京都農林水産振興財団の「花が咲き終わったら花がらをつみ取る」が、どちらも花後の時期を示しています。病害虫と育ちが悪いときの対処は、大和市の園芸相談の回答を参照しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月21日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "シャクナゲの剪定に関する4つの基本",
  basicsIntro: (
    <p>
      以下は、3つの資料に書かれている内容を整理したものです。品種や地域によって花の時期は前後するため、ご自宅の株が咲き終わった時期を基準にしてください。
    </p>
  ),
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は花が終わった直後",
      desc: "世田谷区の植栽ガイドブックでは、花木は花が終わった直後を剪定の目安にすればほとんど間違いないとしています。シャクナゲの手入時期は4〜6月です。",
    },
    {
      title: "花が咲き終わったら花がらを摘み取る",
      desc: "東京都農林水産振興財団の育て方では、手入れとして花が咲き終わったら花がらをつみ取るとしています。",
    },
    {
      title: "生育が遅い",
      desc: "世田谷区の樹木一覧では、シャクナゲを生育遅いとしています。一度に多く切ると元の大きさに戻るまでに時間がかかるため、切る量は控えめにします。",
    },
    {
      title: "肥料は3月と9月",
      desc: "東京都農林水産振興財団の育て方では、3月と9月に油粕や緩効性の化成肥料等を株元に施すとしています。",
    },
  ],
  stepsHeading: "花後に行う4つの手入れの手順",
  stepsIntro: (
    <p>
      花が咲き終わった時期に、次の順番で進めます。
    </p>
  ),
  steps: [
    {
      title: "咲き終わった花がらを摘み取る",
      desc: "東京都農林水産振興財団の育て方による手入れです。花が咲き終わったら摘み取ります。",
    },
    {
      title: "枯れた枝や折れた枝を取り除く",
      desc: "世田谷区の植栽ガイドブックでは、最初に除去する枝は枯れ枝・折れ枝・病気の枝としています。",
    },
    {
      title: "混み合った枝を付け根から抜く",
      desc: "同じガイドブックでは、樹形を乱す枝や生育上不要な枝（徒長枝・からみ枝・ふところ枝など）を剪定し、全体の枝付きを見て樹形が偏らないように剪定するとしています。",
    },
    {
      title: "株元の乾燥を防ぐ",
      desc: "世田谷区の樹木一覧では、シャクナゲは夏期の高温乾燥を嫌うとしています。東京都農林水産振興財団の育て方では、乾燥防止にマルチングするとしています。",
    },
  ],
  ngHeading: "シャクナゲの手入れで避けたいこと",
  ngs: [
    {
      title: "夏以降に枝先を切り詰めることは避けます",
      desc: "世田谷区の植栽ガイドブックでは、花木は剪定時に花芽を切ってしまうと開花に支障が出ることがあるとしています。手入時期の4〜6月を過ぎてから枝先を切ると、翌年の花が減るおそれがあります。",
    },
    {
      title: "植え付け時に石灰や鶏ふんを入れることは避けます",
      desc: "東京都農林水産振興財団の育て方では、酸性土壌を好むため、植え付け時に石灰や鶏ふん等を入れないでくださいとしています。",
    },
    {
      title: "西日の強い場所に植えることは避けます",
      desc: "東京都農林水産振興財団の育て方では、西日の当たらない所に植えるとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなって樹形を作り直したい、葉が白くなるなど病害虫の被害が続いている、ほかの花木とまとめて花後に剪定したい</Hl>といった場合は、業者に相談すると作業がまとまります。依頼するときは、作業日を花が終わった直後に合わせてもらうよう相談してください。
    </p>,
    <p key="2">
      同じツツジの仲間の剪定は<Link href="/tsutsuji-satsuki-teire/" className={A}>ツツジ・サツキの剪定時期</Link>、花木の開花の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花を良くする手入れ</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "花後の剪定に合わせて相談する",
  ctaText:
    "シャクナゲの剪定は花が終わった直後、手入れの時期は4〜6月が目安です。株が大きい場合は花後の剪定を業者と相談すると安心です。",
  faqHeading: "シャクナゲの剪定のよくある質問",
  faqs: [
    {
      q: "シャクナゲの剪定はいつがよいですか？",
      a: "世田谷区の植栽ガイドブックの樹木一覧では、シャクナゲの手入時期を4〜6月としています。同じガイドブックでは、花木は花が終わった直後を剪定の目安にすればほとんど間違いないとしています。",
    },
    {
      q: "シャクナゲの葉が白っぽくなりました。病気ですか？",
      a: "大和市の園芸相談の事例では、シャクナゲの葉が白くなっているという相談に対し、ツツジグンバイムシの被害と回答しています。薬剤を使う場合は、製品ラベルに記載された対象植物と使い方に従ってください。",
    },
    {
      q: "シャクナゲの育ちが悪いときはどうすればよいですか？",
      a: "大和市の園芸相談の事例では、育ちが悪いという相談に対し、樹の周りを掘って腐葉土又はピートモスに化成肥料を加えて与えると回答しています。",
    },
    {
      q: "シャクナゲの植え替えに適した時期はいつですか？",
      a: "世田谷区の樹木一覧では、シャクナゲの移植時期を3〜4月中旬と10月としています。",
    },
  ],
  related: [
    {
      href: "/tsutsuji-satsuki-teire/",
      label: "ツツジ・サツキの剪定時期",
      desc: "花が終わった直後に切る",
    },
    {
      href: "/kaboku-kaika-teire/",
      label: "花木の開花を良くする手入れ",
      desc: "花が咲かない原因と剪定・施肥",
    },
    {
      href: "/jinchouge-sentei/",
      label: "沈丁花の剪定",
      desc: "花後に切る常緑の花木",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "季節ごとの考え方と樹種の違い",
    },
  ],
};

export default function ShakunageSenteiPage() {
  return <KnowArticle data={data} />;
}
