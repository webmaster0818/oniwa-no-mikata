import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/metasequoia-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const KOTO = "https://www.city.koto.lg.jp/470200/documents/20260810092618.pdf";
const SAITAMA1 = "https://www.pref.saitama.lg.jp/documents/4144/gairozyusenntei1.pdf";
const HRO = "https://www.hro.or.jp/upload/3320/gairoju02.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "メタセコイアの剪定｜円錐形の自然樹形を生かし、12〜3月に枝抜き程度にとどめる｜お庭のミカタ",
  },
  description:
    "メタセコイアの剪定時期と切り方の考え方を、熊本市の樹木管理ガイドライン、江東区の街路樹の資料、埼玉県の街路樹剪定マニュアル、北海道立総合研究機構の街路樹マニュアルをもとに整理しました。枝張りから見た樹高の目安も計算しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "メタセコイアの剪定",
    description:
      "熊本市のガイドラインは、メタセコイアの剪定時期を12〜3月とし、自然樹形を生かして枝抜き程度にとどめるとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市（主要樹種の特徴）", item: "剪定時期・方法", note: "樹形は円錐。剪定時期は12〜3月。自然樹形を生かして枝抜き程度にとどめる" },
  { src: "熊本市（公共施設の樹木などの基本樹形）", item: "基本樹形", note: "円錐形（イチョウ、イヌマキ、カイヅカイブキ、ヒマラヤスギなどと同じ区分）" },
  { src: "江東区（目標樹形の区分と代表樹種）", item: "目標とする樹形", note: "円錐形の代表樹種としてイチョウとともに掲載。高木は空間に応じた樹冠の大きな自然樹形仕立てを原則とし、狭い場所では制約に応じたコンパクトな樹形を維持する" },
  { src: "埼玉県（樹形タイプ毎の望ましい樹高・枝張り比）", item: "樹高と枝張りの比", note: "円錐型。メタセコイアの望ましい樹高・枝張り比は0.3（東京都街路樹マスタープラン検討委員会報告書の値）" },
  { src: "北海道立総合研究機構（街路樹の造成マニュアル）", item: "剪定の考え方", note: "街路樹は自然樹形を原則とし、整枝剪定程度にとどめるのが望ましい。「適度に剪定された街路樹」の写真の例にメタセコイアを掲載" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、熊本市「公共施設樹木の維持管理ガイドライン」、江東区「4－3 適切な維持管理に向けて～剪定など～」、埼玉県「街路樹剪定マニュアル」（表3-1 樹形タイプ毎の望ましい樹高・枝張り比）、地方独立行政法人 北海道立総合研究機構「みどり豊かな街路樹の造成マニュアル」を開き、メタセコイアに触れている箇所を当サイトで並べました。いずれも街路樹・公共施設の樹木の資料です。江東区・熊本市の基本樹形の表では「メタセコイヤ」と表記されています。
    </p>
  </div>
);

const RATIO: { span: string; height: string }[] = [
  { span: "1.5m", height: "約5m" },
  { span: "2m", height: "約6.7m" },
  { span: "3m", height: "約10m" },
  { span: "4m", height: "約13m" },
];

const ratioTable = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">広げられる枝張り（幅）</th>
          <th className="border px-2 py-2 text-left">比0.3で計算した樹高の目安</th>
        </tr>
      </thead>
      <tbody>
        {RATIO.map((r) => (
          <tr key={r.span}>
            <td className="border px-2 py-2">{r.span}</td>
            <td className="border px-2 py-2">{r.height}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      埼玉県のマニュアルは、生育可能な枝張りを樹高・枝張り比で割ると樹高が算出されるとし、例として「枝張り4mのイチョウの樹高：4m÷0.3＝13m」を示しています。表は同じ計算をメタセコイアの比0.3で当サイトが行ったもので、街路樹で望ましいとされる形の目安です。木が実際にその高さで止まるという意味ではありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "metasequoia-sentei",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "メタセコイアの剪定｜円錐形の自然樹形を生かし、12〜3月に枝抜き程度にとどめる",
  breadcrumbLabel: "メタセコイアの剪定",
  tagChips: ["メタセコイア", "落葉樹", "針葉樹", "剪定時期", "枝抜き剪定"],
  ldHeadline: "メタセコイアの剪定｜円錐形の自然樹形を生かし、12〜3月に枝抜き程度にとどめる",
  ldDescription:
    "メタセコイアの剪定時期と切り方の考え方を、熊本市・江東区・埼玉県・北海道立総合研究機構の資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        メタセコイアは、円錐形にまっすぐ育つ落葉の針葉樹です。熊本市の公共施設樹木の維持管理ガイドラインは、<Hl>剪定時期を12〜3月とし、自然樹形を生かして枝抜き程度にとどめる</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        円錐形の木は、先端を止めたり横から切り詰めたりすると形が崩れやすくなります（当サイトの整理）。本記事では、4つの資料を並べ、庭のメタセコイアを剪定するときの時期と考え方を整理します。
      </p>
    </>
  ),
  conclusionTitle: "メタセコイアは、葉が落ちた12〜3月に、込み合った枝や支障になる枝を付け根から抜く程度にとどめます。大きさを抑えたいときは、枝を広げられる幅から高さの目安を考えます。",
  conclusionBody: (
    <>
      <p>4つの資料でメタセコイアに触れている箇所を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        埼玉県の街路樹剪定マニュアルは、円錐型のメタセコイアの望ましい樹高・枝張り比を0.3としています（<a href={SAITAMA1} className={A} target="_blank" rel="noopener noreferrer">埼玉県「街路樹剪定マニュアル」（PDF）</a>、同日確認）。この比を使うと、<Hl>枝を広げられる幅が2mなら、望ましい樹高の目安は約6.7m</Hl>になります（当サイトの計算）。
      </p>
      {ratioTable}
    </>
  ),
  basicsHeading: "メタセコイアを剪定する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "円錐形に育つ",
      desc: "熊本市・江東区は、メタセコイアをイチョウなどと同じ円錐形の樹形に区分しています。",
    },
    {
      title: "剪定は冬の落葉期",
      desc: "熊本市は剪定時期を12〜3月としています。葉が落ちている時期は枝の付き方が見やすくなります。",
    },
    {
      title: "枝抜き程度が基本",
      desc: "熊本市は、自然樹形を生かして枝抜き程度にとどめるとしています。北海道立総合研究機構も、街路樹は自然樹形を原則とし、整枝剪定程度にとどめるのが望ましいとしています。",
    },
    {
      title: "幅に対して背が高くなる",
      desc: "埼玉県の表では、樹高・枝張り比は0.3です。枝張りに対して樹高がおよそ3.3倍になる、細長い形が望ましい形とされています。",
    },
  ],
  stepsHeading: "メタセコイアの剪定4つの手順",
  stepsIntro: <p>熊本市・北海道立総合研究機構の記載をもとに、庭の木に当てはめた流れです。</p>,
  steps: [
    {
      title: "12〜3月の落葉期を選ぶ",
      desc: "熊本市の剪定時期は12〜3月です。",
    },
    {
      title: "枯れ枝・込み合った枝を付け根から抜く",
      desc: "自然樹形を生かして枝抜き程度にとどめます（熊本市）。枝の途中で切るのではなく、付け根から抜きます。",
    },
    {
      title: "建物や通路にかかる枝を外す",
      desc: "北海道立総合研究機構は、適度な剪定の利点として、建物にかかる枝や交通の障害となる枝が除かれることを挙げています。",
    },
    {
      title: "円錐形を崩していないか離れて見る",
      desc: "江東区・熊本市の区分どおり円錐形が基本の形です。片側だけが大きく欠けていないか、離れた位置から確かめます。",
    },
  ],
  ngHeading: "メタセコイアの剪定で避けたいこと",
  ngs: [
    {
      title: "強剪定は避けます",
      desc: "北海道立総合研究機構は、過度の剪定（強剪定）の弊害として、緑の量の大幅な減少、開葉の遅れ、傷口からの腐朽菌の侵入、樹勢の衰えなどを挙げています。",
    },
    {
      title: "大きくなる場所に植えたままにしないようにします",
      desc: "同マニュアルは、強剪定を行う原因として、成長が早く大きくなる樹種や、生育空間よりも大きくなる樹種を植えていることを挙げています。庭が狭い場合は、計画的な更新も検討します。",
    },
    {
      title: "生育期の大きな剪定は避けます",
      desc: "熊本市の剪定時期は12〜3月です。葉が茂っている時期に太い枝を切ることは避けます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      メタセコイアは円錐形に高くなる木です。<Hl>2階の高さを超えたもの、電線や屋根にかかる枝があるもの</Hl>は、剪定業者や伐採業者に相談してください。「冬の落葉期に、円錐形を残して枝抜きしてほしい」と伝えると、仕上がりの考え方を共有しやすくなります。樹形の区分は<a href={KOTO} className={A} target="_blank" rel="noopener noreferrer">江東区「4－3 適切な維持管理に向けて～剪定など～」（PDF）</a>、強剪定の弊害は<a href={HRO} className={A} target="_blank" rel="noopener noreferrer">北海道立総合研究機構「みどり豊かな街路樹の造成マニュアル」（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      同じ円錐形の木は<Link href="/conifer-teire/" className={A}>コニファーの手入れ</Link>、剪定の手法は<Link href="/sentei-towa/" className={A}>剪定とは</Link>、太い枝の切り方は<Link href="/edaoroshi/" className={A}>枝下ろし</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "メタセコイアの剪定を業者に相談する",
  ctaText: "高くなったメタセコイアの枝抜きや、高所の剪定は、業者に任せると安心です。",
  faqHeading: "メタセコイアの剪定でよくある質問",
  faqs: [
    {
      q: "メタセコイアの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは、剪定時期を12〜3月としています。",
    },
    {
      q: "どのくらい切ってよいですか？",
      a: "熊本市は、自然樹形を生かして枝抜き程度にとどめるとしています。強く切り詰める剪定は避けます。",
    },
    {
      q: "庭に植えるとどのくらいの高さを目安にすればよいですか？",
      a: "埼玉県の表では、メタセコイアの望ましい樹高・枝張り比は0.3です。枝を広げられる幅が2mなら約6.7m、3mなら約10mが目安になります（当サイトの計算）。",
    },
    {
      q: "メタセコイアは落葉しますか？",
      a: "はい。メタセコイアは落葉する針葉樹で、熊本市の剪定時期12〜3月は落葉期にあたります。",
    },
  ],
  related: [
    { href: "/conifer-teire/", label: "コニファーの手入れ", desc: "同じ円錐形の針葉樹" },
    { href: "/sentei-towa/", label: "剪定とは", desc: "透かし・切り詰め・切り返しの違い" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/edaoroshi/", label: "枝下ろし", desc: "太い枝を付け根から切る" },
  ],
};

export default function MetasequoiaSenteiPage() {
  return <KnowArticle data={data} />;
}
