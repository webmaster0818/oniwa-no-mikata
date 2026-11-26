import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kobushi-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const KOTO = "https://www.city.koto.lg.jp/470200/documents/20260810092618.pdf";
const SAITAMA = "https://www.pref.saitama.lg.jp/documents/4144/gairozyusenntei1.pdf";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "コブシの剪定｜花が散った直後（4〜5月）に。花芽ができる6〜7月以降は枝先を切らない｜お庭のミカタ",
  },
  description:
    "コブシ（辛夷）の剪定時期を、熊本市の樹木管理ガイドライン、江東区の剪定時期の表、埼玉県の街路樹剪定マニュアル、世田谷区の植栽ガイドブック、芦屋市の街路樹等維持管理基本書をもとに整理しました。花芽分化期と花芽の位置、冬に切ると花が減る理由をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "コブシの剪定",
    description:
      "熊本市の表では、コブシの剪定時期は4〜5月、花芽分化期は6〜7月、花芽の位置は頂芽です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; when: string; bud: string; pos: string; flower: string }[] = [
  { src: "熊本市", when: "4月〜5月", bud: "6月〜7月", pos: "頂芽", flower: "3月" },
  { src: "江東区", when: "落花直後（3月〜5月）", bud: "6月中旬〜7月下旬", pos: "頂芽", flower: "3月〜4月" },
  { src: "埼玉県", when: "花の散った直後", bud: "（冬期剪定の時期にはすでに花芽ができている）", pos: "記載なし", flower: "記載なし" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">剪定時期</th>
          <th className="border px-2 py-2 text-left">花芽分化期</th>
          <th className="border px-2 py-2 text-left">花芽の位置</th>
          <th className="border px-2 py-2 text-left">開花時期</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.bud}</td>
            <td className="border px-2 py-2">{r.pos}</td>
            <td className="border px-2 py-2">{r.flower}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、熊本市の公共施設樹木の維持管理ガイドライン（「花芽分化と剪定の時期」の表）、江東区「4－3 適切な維持管理に向けて～剪定など～」（表4.3.2 主な花芽の分化時期及び剪定時期）、埼玉県「街路樹剪定マニュアル」（5.2.3 花木の剪定「主要な花木の街路樹の剪定時期」）を開き、当サイトで項目ごとに整理しました。「記載なし」はその資料に書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kobushi-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "コブシの剪定｜花が散った直後（4〜5月）に。花芽ができる6〜7月以降は枝先を切らない",
  breadcrumbLabel: "コブシの剪定",
  tagChips: ["コブシ", "辛夷", "剪定時期", "花芽", "モクレン科"],
  ldHeadline: "コブシの剪定｜花が散った直後（4〜5月）に。花芽ができる6〜7月以降は枝先を切らない",
  ldDescription:
    "コブシの剪定時期を、花芽分化期と花芽の位置とともに、熊本市・江東区・埼玉県・世田谷区・芦屋市の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        コブシの剪定は、<Hl>花が散った直後の4〜5月</Hl>に行うのが目安です。熊本市のガイドラインの「花芽分化と剪定の時期」の表では、コブシの剪定時期は4月〜5月、<Hl>花芽分化期は6月〜7月、花芽の位置は頂芽</Hl>です（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        埼玉県の街路樹剪定マニュアルは、コブシなどの花木は冬期剪定の時期にはすでに花芽ができているとし、コブシの剪定時期を「花の散った直後」としています（出典：<a href={SAITAMA} className={A} target="_blank" rel="noopener noreferrer">埼玉県「街路樹剪定マニュアル」（PDF）</a>、同日確認）。冬に枝先を切ると、翌春の花が減ります。
      </p>
    </>
  ),
  conclusionTitle: "コブシは、早春の花が散ったらすぐに剪定します。夏以降は枝先に翌年の花芽があるため、切り詰めません。",
  conclusionBody: (
    <>
      <p>3つの資料の剪定時期と花芽の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        世田谷区の植栽ガイドブックの樹木一覧は、コブシの手入時期を11〜3月としています（出典：<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">世田谷区 植栽ガイドブック 樹木一覧（PDF）</a>、同日確認）。熊本市の剪定時期の表（落葉樹）でも骨格剪定は12月〜2月に着色されています。一方で、花芽はその前の6〜7月にできています。<Hl>冬に作業するときは、枝先の花芽を残し、枯れ枝や込み合った枝の間引きにとどめる</Hl>のが、資料を両立させる考え方です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "コブシを剪定するときの4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は花が散った直後",
      desc: "熊本市は4月〜5月、江東区は落花直後（3月〜5月）、埼玉県は花の散った直後としています。",
    },
    {
      title: "花芽ができるのは6〜7月",
      desc: "熊本市の表では花芽分化期は6月〜7月、江東区は6月中旬〜7月下旬です。",
    },
    {
      title: "花芽は枝先（頂芽）につく",
      desc: "熊本市・江東区とも、コブシの花芽の位置は頂芽です。枝先を切り詰めると、その枝の花芽がなくなります。",
    },
    {
      title: "樹高15〜20mになる",
      desc: "芦屋市の基本書では、コブシはモクレン科の落葉広葉樹で樹高15〜20m、剪定の適否は△、移植容易度は○、日当たりは中庸です。",
    },
  ],
  stepsHeading: "コブシの剪定4つの手順",
  stepsIntro: <p>熊本市・江東区・埼玉県・世田谷区の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "3〜4月の花を見届ける",
      desc: "熊本市の表では開花時期は3月、江東区は3月〜4月、世田谷区の樹木一覧の鑑賞時期は花3〜4月です。",
    },
    {
      title: "花が散ったらすぐに剪定する",
      desc: "伸びすぎた枝や込み合った枝を、付け根から間引きます。熊本市の剪定時期は4月〜5月です。",
    },
    {
      title: "6月以降は枝先を切らない",
      desc: "熊本市の表では花芽分化期は6月〜7月です。熊本市は、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。",
    },
    {
      title: "冬は枯れ枝の整理にとどめる",
      desc: "世田谷区の手入時期は11〜3月ですが、枝先には翌春の花芽がついています。冬は枯れ枝や傷んだ枝の除去にとどめます（当サイトの整理）。",
    },
  ],
  ngHeading: "コブシの剪定で避けたいこと",
  ngs: [
    {
      title: "夏から冬に枝先を切り詰めることは避けます",
      desc: "埼玉県のマニュアルは、コブシなどは冬期剪定の時期にはすでに花芽ができているとしています。",
    },
    {
      title: "花後の剪定を先延ばしにすることは避けます",
      desc: "埼玉県は、花木は花が終わった直後から1か月以内の、翌年の花芽が形成される前に剪定するとしています。",
    },
    {
      title: "大きくなってから植え替えで調整することは避けます",
      desc: "世田谷区の樹木一覧では、コブシの移植難易は△（移植困難）です。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>高さが2階に届くコブシ、花を残しながら樹形を小さくしたいコブシ</Hl>は、剪定業者に相談してください。「花の直後に、枝先の花芽を残す前提で」と伝えると、時期と切り方の考え方を共有しやすくなります。江東区の表は<a href={KOTO} className={A} target="_blank" rel="noopener noreferrer">江東区「4－3 適切な維持管理に向けて～剪定など～」（PDF）</a>、大きさは<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>によります（いずれも2026年11月27日確認）。
    </p>,
    <p key="2">
      同じモクレン科の花木は<Link href="/mokuren-sentei/" className={A}>木蓮の剪定</Link>、花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、樹種ごとの時期の目安は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "コブシの剪定を業者に相談する",
  ctaText: "高くなったコブシの剪定や、花を残しながら樹形を整える作業は、業者に任せると安心です。",
  faqHeading: "コブシの剪定でよくある質問",
  faqs: [
    {
      q: "コブシの剪定はいつ行えばよいですか？",
      a: "花が散った直後です。熊本市のガイドラインは4月〜5月、江東区は落花直後（3月〜5月）、埼玉県のマニュアルは花の散った直後としています。",
    },
    {
      q: "コブシの花芽はいつできますか？",
      a: "熊本市の表では花芽分化期は6月〜7月、江東区の表では6月中旬〜7月下旬です。花芽の位置はいずれも頂芽です。",
    },
    {
      q: "冬にコブシを剪定してもよいですか？",
      a: "世田谷区の樹木一覧は手入時期を11〜3月としていますが、埼玉県は冬期剪定の時期にはすでに花芽ができているとしています。冬は枝先の花芽を残し、枯れ枝の整理程度にとどめます（当サイトの整理）。",
    },
    {
      q: "コブシはどのくらいの大きさになりますか？",
      a: "芦屋市の街路樹等維持管理基本書では、コブシの樹高は15〜20mです。",
    },
  ],
  related: [
    { href: "/mokuren-sentei/", label: "木蓮の剪定", desc: "同じモクレン科の花木" },
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/karatane-ogatama-sentei/", label: "カラタネオガタマの剪定", desc: "同じモクレン科の常緑樹" },
  ],
};

export default function KobushiSenteiPage() {
  return <KnowArticle data={data} />;
}
