import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/sanshuyu-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const SETAGAYA_11 = "https://www.city.setagaya.lg.jp/documents/4728/29589_11.txt";
const SETAGAYA_12 = "https://www.city.setagaya.lg.jp/documents/4728/29589_12.txt";

export const metadata: Metadata = {
  title: {
    absolute: "サンシュユの剪定｜花芽は6月上旬にでき、剪定は花後の3〜4月。自然に樹形が整うので軽めでよい｜お庭のミカタ",
  },
  description:
    "サンシュユの剪定時期と切り方を、熊本市の樹木管理ガイドライン（花芽分化と剪定の時期・主要樹種の特徴）と世田谷区の植栽ガイドブックをもとに整理しました。冬に切ると花が減る理由も並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "サンシュユの剪定",
    description:
      "熊本市のガイドラインは、サンシュユの花芽分化期を6月上旬、剪定時期を3〜4月、花芽の位置を側芽としています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; time: string; note: string }[] = [
  { src: "熊本市（花芽分化と剪定の時期）", time: "剪定時期 3〜4月", note: "花芽分化期は6月上旬、花芽の位置は側芽、開花時期は2月下旬〜4月上旬" },
  { src: "熊本市（主要樹種の特徴）", time: "3〜4月", note: "樹形は広円。自然に樹形が整い、剪定等の管理手間が少なくてすむ" },
  { src: "世田谷区（樹木一覧）", time: "手入時期 11〜3月", note: "ミズキ科の落葉高木。花の鑑賞時期3〜4月、早春に黄色の花が咲く。実は楕円で紅色、花木。移植時期は2月・11月中旬〜12月上旬、日照◎（日照を好む）、好む土壌は石灰質の壌土" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">剪定・手入れの時期</th>
          <th className="border px-2 py-2 text-left">そのほかの記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.time}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、熊本市「公共施設樹木の維持管理ガイドライン」（2.3.3 花木の剪定時期・巻末資料 熊本平野部の主要樹種の特徴）と、世田谷区「建築にともなう緑化のための植栽ガイドブック」の樹木一覧（PDF）を開き、サンシュユの行を当サイトで並べました。熊本市の表は熊本平野部の樹種として作成されたもので、地域によって時期は前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "sanshuyu-sentei",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "サンシュユの剪定｜花芽は6月上旬にでき、剪定は花後の3〜4月。自然に樹形が整うので軽めでよい",
  breadcrumbLabel: "サンシュユの剪定",
  tagChips: ["サンシュユ", "花木", "落葉樹", "剪定時期", "花芽分化"],
  ldHeadline: "サンシュユの剪定｜花芽は6月上旬にでき、剪定は花後の3〜4月。自然に樹形が整うので軽めでよい",
  ldDescription:
    "サンシュユの剪定時期と切り方を、熊本市と世田谷区の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        サンシュユは、早春に黄色い花を咲かせ、秋に赤い実をつける落葉樹です。熊本市の公共施設樹木の維持管理ガイドラインは、サンシュユの<Hl>花芽分化期を6月上旬、剪定時期を3〜4月、花芽の位置を側芽、開花時期を2月下旬〜4月上旬</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        同じガイドラインの主要樹種の表では、<Hl>自然に樹形が整い、剪定等の管理手間が少なくてすむ</Hl>樹種とされています。本記事では、世田谷区の植栽ガイドブックとあわせて、時期と切り方を整理します。
      </p>
    </>
  ),
  conclusionTitle: "サンシュユは、花が終わる3〜4月に、込み合った枝や伸びすぎた枝を軽く整える程度で十分です。6月上旬に翌年の花芽ができるため、夏以降から冬の強い剪定は花を減らします。",
  conclusionBody: (
    <>
      <p>2つの自治体の資料の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        世田谷区の樹木一覧は手入時期を11〜3月としていますが、熊本市の表では<Hl>花芽が6月上旬にでき、側芽につきます</Hl>。熊本市は、花木の剪定は花後から花芽分化の前までに行い、花芽分化後に剪定すると翌年の花芽を切り落とすとしています。このため、<Hl>冬に切るのは枯れ枝や明らかに不要な枝にとどめ、形を整える剪定は花後の3〜4月に回す</Hl>と、花を減らさずにすみます（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "サンシュユを剪定する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "花芽は6月上旬にでき、側芽につく",
      desc: "熊本市の「花芽分化と剪定の時期」の表によります。開花は2月下旬〜4月上旬です。",
    },
    {
      title: "自然に樹形が整う",
      desc: "熊本市は、自然に樹形が整い、剪定等の管理手間が少なくてすむとしています。樹形は広円です。",
    },
    {
      title: "日なたを好む",
      desc: "世田谷区の一覧では、日照は◎（日照を好む）、好む土壌は石灰質の壌土です。",
    },
    {
      title: "小ぶりにまとめやすい",
      desc: "世田谷区は、中庭の緑化で「形よくまとまり、小ぶりに剪定できる樹種」の例にサンシュユを挙げています。",
    },
  ],
  stepsHeading: "サンシュユの剪定4つの手順",
  stepsIntro: <p>熊本市の花木の剪定時期の考え方と、世田谷区の維持・管理の剪定の方法にもとづく流れです。</p>,
  steps: [
    {
      title: "花が終わった3〜4月に行う",
      desc: "熊本市は剪定時期を3〜4月としています。世田谷区も、花木は花が終わった直後を剪定の目安にすればほとんど間違いないとしています。",
    },
    {
      title: "枯れ枝・折れ枝を先に切る",
      desc: "世田谷区の維持・管理は、最初に除去する枝を枯れ枝、折れ枝、病気の枝としています。",
    },
    {
      title: "込み合った枝を付け根から抜く",
      desc: "徒長枝、からみ枝、ふところ枝、ひこばえなど樹形を乱す枝を、付け根から抜き取ります（世田谷区の「枝抜き剪定」）。",
    },
    {
      title: "高さを抑えるときは分かれ目で切る",
      desc: "高く伸びすぎた枝は、適正な分岐点より長いほうの枝を付け根から切ります（世田谷区の「切返し剪定」）。",
    },
  ],
  ngHeading: "サンシュユの剪定で避けたいこと",
  ngs: [
    {
      title: "6月以降の強い剪定は避けます",
      desc: "熊本市は、花芽分化後に剪定すると翌年の花芽を切り落とすため、翌年開花しないとしています。サンシュユの花芽分化期は6月上旬です。",
    },
    {
      title: "枝先をそろえて刈り込むことは避けます",
      desc: "花芽は側芽につくため、枝を短く切りそろえると花芽も一緒に落とします（熊本市の表の花芽の位置からの当サイトの整理）。",
    },
    {
      title: "毎年の強い剪定は必要ありません",
      desc: "熊本市は、自然に樹形が整い、剪定等の管理手間が少なくてすむとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      高木になって脚立が必要な高さまで伸びた場合や、ほかの庭木とまとめて手入れしたい場合は、剪定業者に相談してください。「花後の3〜4月に、枝抜きで軽く整えてほしい。夏以降は強く切らない」と伝えると、仕上がりの考え方を共有しやすくなります。剪定の方法は<a href={SETAGAYA_12} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」3 維持・管理（テキスト版）</a>、中庭の樹種の例は<a href={SETAGAYA_11} className={A} target="_blank" rel="noopener noreferrer">同 中庭の緑化（テキスト版）</a>、樹木一覧は<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">同 樹木一覧（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      花木の時期の考え方は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、剪定の手法は<Link href="/sentei-towa/" className={A}>剪定とは</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "サンシュユの剪定を業者に相談する",
  ctaText: "高くなったサンシュユの切り戻しや、庭木全体の手入れは、業者に任せると安心です。",
  faqHeading: "サンシュユの剪定でよくある質問",
  faqs: [
    {
      q: "サンシュユの剪定はいつ行えばよいですか？",
      a: "熊本市は3〜4月としています。花芽分化期が6月上旬のため、花が終わってから6月までに済ませます。",
    },
    {
      q: "冬に剪定してもよいですか？",
      a: "世田谷区の樹木一覧は手入時期を11〜3月としていますが、この時期にはすでに翌春の花芽ができています。冬は枯れ枝などの整理にとどめると、花を減らさずにすみます。",
    },
    {
      q: "サンシュユの花が咲きません。",
      a: "熊本市は、花芽分化後に剪定すると翌年の花芽を切り落とすとしています。夏から冬に強く切っていないか確かめてください。世田谷区の一覧では、日照は◎（日照を好む）です。",
    },
    {
      q: "どのくらい切ってよいですか？",
      a: "熊本市は、自然に樹形が整い、剪定等の管理手間が少なくてすむとしています。込み合った枝を抜く程度で十分です。",
    },
  ],
  related: [
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "花木は花後に切る理由" },
    { href: "/sentei-towa/", label: "剪定とは", desc: "枝抜き・切り詰め・切り返しの違い" },
    { href: "/mokuren-sentei/", label: "木蓮の剪定", desc: "同じガイドラインの表に載る花木" },
    { href: "/umemodoki-sodatekata/", label: "ウメモドキの育て方", desc: "同じく赤い実をつける庭木" },
  ],
};

export default function SanshuyuSenteiPage() {
  return <KnowArticle data={data} />;
}
