import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/katsura-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const KOTO = "https://www.city.koto.lg.jp/470200/documents/20260810092618.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "カツラの剪定｜冬（12〜2月）に骨格を整え、初夏は軽く。樹高25〜30mになる木で強い剪定は向かない｜お庭のミカタ",
  },
  description:
    "カツラ（桂）の剪定時期と注意点を、熊本市の公共施設樹木の維持管理ガイドライン、芦屋市の街路樹等維持管理基本書、江東区の街路樹の資料をもとに整理しました。剪定の時期、育つ大きさ、樹形、植える場所の条件をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "カツラの剪定",
    description:
      "熊本市のガイドラインでは、カツラの骨格剪定は12月〜2月、軽剪定は6〜7月です。芦屋市は剪定の適否を×としています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "主要樹木の剪定の時期（落葉樹）", note: "骨格剪定12月〜2月、軽剪定6月〜7月（表の着色）" },
  { src: "熊本市", item: "熊本平野部の主要樹種の特徴", note: "落葉高木。樹形は広鐘。剪定時期9〜10月・2〜3月。水辺でも育成できる。日当たりは陽・中、生長は早、移植は易の欄に印" },
  { src: "芦屋市", item: "主な高木一覧", note: "カツラ科の落葉広葉樹。樹高25〜30m。観賞のポイントは樹姿・葉・紅葉・シンボル性。剪定の適否は×、移植容易度は△、日当たりは陽〜中庸。区分はC（沿道境界から幹芯まで3.0m以上4.0m未満）" },
  { src: "江東区", item: "街路樹の樹形", note: "樹形は卵円形の例としてカツラを挙げている" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">表</th>
          <th className="border px-2 py-2 text-left">カツラの記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.item}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、熊本市の公共施設樹木の維持管理ガイドライン（「主要樹木の剪定の時期（落葉樹）」の表、「熊本平野部の主要樹種の特徴」の表）、芦屋市の街路樹等維持管理基本書（参考資料「主な高木一覧」）、江東区「4－3 適切な維持管理に向けて～剪定など～」（樹形の表）を開き、当サイトで項目ごとに整理しました。芦屋市の○・△・×の段階の説明は資料に記載がないため、記号のまま掲載しています。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "katsura-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "カツラの剪定｜冬（12〜2月）に骨格を整え、初夏は軽く。樹高25〜30mになる木で強い剪定は向かない",
  breadcrumbLabel: "カツラの剪定",
  tagChips: ["カツラ", "桂", "剪定時期", "落葉高木", "シンボルツリー"],
  ldHeadline: "カツラの剪定｜冬（12〜2月）に骨格を整え、初夏は軽く。樹高25〜30mになる木で強い剪定は向かない",
  ldDescription:
    "カツラの剪定時期、育つ大きさと樹形、植える場所の条件を、熊本市・芦屋市・江東区の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        カツラの剪定は、<Hl>葉が落ちた12月〜2月に骨格を整え、6〜7月は軽い剪定にとどめる</Hl>のが目安です。熊本市のガイドラインの「主要樹木の剪定の時期（落葉樹）」の表では、カツラの骨格剪定は12月〜2月、軽剪定は6月〜7月です（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        芦屋市の基本書は、カツラを<Hl>樹高25〜30mになる落葉広葉樹</Hl>とし、剪定の適否の欄を×としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>、同日確認）。大きく育つ前提で場所を選び、剪定で小さく保とうとしない木です。
      </p>
    </>
  ),
  conclusionTitle: "カツラは大木になる木です。剪定は冬の枝抜きと初夏の軽い整理にとどめ、植える場所の広さで大きさに備えます。",
  conclusionBody: (
    <>
      <p>3つの資料のカツラの記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市のガイドラインの中でも、剪定時期の書き方は表によって異なります（剪定時期の表では12月〜2月と6〜7月、主要樹種の特徴の表では9〜10月と2〜3月）。<Hl>いずれも葉が茂る春の芽吹き直後は含まれていません</Hl>。冬の落葉期は枝ぶりが見えやすく、枝抜きの判断がしやすい時期です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "カツラを剪定するときの4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "骨格剪定は冬、軽剪定は初夏",
      desc: "熊本市の剪定時期の表では、骨格剪定は12月〜2月、軽剪定は6月〜7月です。",
    },
    {
      title: "樹高25〜30mになる",
      desc: "芦屋市の基本書では、カツラの樹高は25〜30mです。熊本市の表でも生長は「早」の欄に印があります。",
    },
    {
      title: "樹形は鐘形・卵円形",
      desc: "熊本市は樹形を広鐘、江東区は卵円形の例としてカツラを挙げています。自然の樹形を生かす剪定が前提です。",
    },
    {
      title: "日当たりと水気のある場所に向く",
      desc: "熊本市は水辺でも育成できるとし、日当たりは陽・中の欄に印があります。芦屋市は日当たりを陽〜中庸としています。",
    },
  ],
  stepsHeading: "カツラの剪定4つの手順",
  stepsIntro: <p>熊本市・芦屋市の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "落葉後の12〜2月に全体を見る",
      desc: "熊本市の骨格剪定の時期です。葉が落ちて、枝の重なりや枯れ枝が見えやすくなります。",
    },
    {
      title: "枯れ枝・込み合った枝を付け根から抜く",
      desc: "樹形を変える切り詰めではなく、不要な枝を付け根から間引きます。芦屋市が剪定の適否を×としているため、切る量は控えめにします（当サイトの整理）。",
    },
    {
      title: "6〜7月は伸びすぎた枝の軽い整理",
      desc: "熊本市の軽剪定の時期です。通路や建物にかかる枝の整理にとどめます。",
    },
    {
      title: "大きさは植える場所で調整する",
      desc: "芦屋市は、カツラを沿道境界から幹芯まで3.0m以上4.0m未満とする区分Cに入れています。庭では建物や境界から十分に離して植えます（当サイトの整理）。",
    },
  ],
  ngHeading: "カツラの剪定で避けたいこと",
  ngs: [
    {
      title: "強く切り詰めて小さく保つことは避けます",
      desc: "芦屋市の基本書は、カツラの剪定の適否を×としています。樹高25〜30mになる木を、毎年の強い切り詰めで小さく保つ前提は避けます。",
    },
    {
      title: "狭い場所に植えることは避けます",
      desc: "芦屋市は、カツラを高木一覧の区分C（沿道境界から幹芯まで3.0m以上4.0m未満）に入れています。",
    },
    {
      title: "植えた後に場所を変える前提にすることは避けます",
      desc: "芦屋市は移植容易度を△としています。熊本市の表では移植は「易」の欄に印があり、資料によって評価が分かれます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>2階の屋根を超える高さになったカツラ、電線や隣地に枝が届くカツラ</Hl>は、剪定業者に相談してください。「冬に枝抜きで、強い切り詰めはしない」と伝えると、時期と切り方の考え方を共有しやすくなります。樹形の分類は<a href={KOTO} className={A} target="_blank" rel="noopener noreferrer">江東区「4－3 適切な維持管理に向けて～剪定など～」（PDF）</a>（2026年11月27日確認）によります。
    </p>,
    <p key="2">
      落葉樹の剪定時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、シンボルツリーの手入れは<Link href="/symboltree-teire/" className={A}>シンボルツリーの手入れ</Link>、高い木の作業の危険は<Link href="/takagi-sentei-kiken/" className={A}>高い木の剪定を自分で行う危険性</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "カツラの剪定を業者に相談する",
  ctaText: "大きく育ったカツラの枝抜きや、高い位置の枝の剪定は、業者に任せると安心です。",
  faqHeading: "カツラの剪定でよくある質問",
  faqs: [
    {
      q: "カツラの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインの剪定時期の表では、骨格剪定は12月〜2月、軽剪定は6月〜7月です。同じガイドラインの主要樹種の特徴の表は、剪定時期を9〜10月・2〜3月としています。",
    },
    {
      q: "カツラはどのくらいの大きさになりますか？",
      a: "芦屋市の街路樹等維持管理基本書では、カツラの樹高は25〜30mです。",
    },
    {
      q: "カツラは強く切り詰めてもよいですか？",
      a: "芦屋市の基本書は、カツラの剪定の適否を×としています。冬の枝抜きと初夏の軽い整理にとどめ、植える場所の広さで大きさに備えます。",
    },
    {
      q: "カツラはどんな場所に向いていますか？",
      a: "熊本市は水辺でも育成できるとしています。日当たりは熊本市が陽・中、芦屋市が陽〜中庸です。",
    },
  ],
  related: [
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/symboltree-teire/", label: "シンボルツリーの手入れ", desc: "大きくなる木の育て方" },
    { href: "/keyaki-sentei/", label: "ケヤキの剪定", desc: "同じく大木になる落葉樹" },
    { href: "/takagi-sentei-kiken/", label: "高い木の剪定を自分で行う危険性", desc: "脚立と高所作業の注意" },
  ],
};

export default function KatsuraSenteiPage() {
  return <KnowArticle data={data} />;
}
