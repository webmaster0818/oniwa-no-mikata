import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kaido-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const KOTO = "https://www.city.koto.lg.jp/470200/documents/20260810092618.pdf";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "カイドウ（ハナカイドウ）の剪定｜落葉期（12〜3月）に、7〜8月にできた花芽を残して切る｜お庭のミカタ",
  },
  description:
    "カイドウ（ハナカイドウ）の剪定時期を、熊本市・江東区・世田谷区の資料で照合しました。花芽ができる時期と位置、花が咲かないときの見直し点、オビカレハ・赤星病など注意したい病害虫も公的資料をもとにまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "カイドウ（ハナカイドウ）の剪定",
    description:
      "江東区の資料では、カイドウの剪定時期は落葉期（12月〜3月）、花芽分化期は7月中旬〜8月下旬、花芽は側芽につきます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kumamoto: string; koto: string; setagaya: string }[] = [
  { item: "分類", kumamoto: "落葉樹・中木（樹形は円）", koto: "記載なし", setagaya: "バラ科の落葉中木（ハナカイドウ）" },
  { item: "剪定・手入れの時期", kumamoto: "1〜3月", koto: "落葉期（12月〜3月）", setagaya: "手入時期 11〜2月" },
  { item: "花芽", kumamoto: "落葉期に花芽を落とさぬよう留意して剪定する", koto: "花芽分化期 7月中旬〜8月下旬（目安）、花芽の位置は側芽", setagaya: "記載なし" },
  { item: "花の時期", kumamoto: "記載なし", koto: "開花期 4月上旬〜4月下旬", setagaya: "鑑賞時期 花4月" },
  { item: "移植", kumamoto: "記載なし", koto: "記載なし", setagaya: "2〜3月、11〜12月。移植がしやすく活着がよい（◎）" },
  { item: "日照・乾湿・土壌", kumamoto: "記載なし", koto: "記載なし", setagaya: "日照を好む（◎）、乾湿は中間（○）、壌土" },
  { item: "参考事項", kumamoto: "記載なし", koto: "記載なし", setagaya: "展葉期にアブラムシの害を受けやすい" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">熊本市 ガイドライン</th>
          <th className="border px-2 py-2 text-left">江東区 剪定時期の表</th>
          <th className="border px-2 py-2 text-left">世田谷区 樹木一覧</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.kumamoto}</td>
            <td className="border px-2 py-2">{r.koto}</td>
            <td className="border px-2 py-2">{r.setagaya}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、熊本市の公共施設樹木の維持管理ガイドライン（「熊本平野部の主要樹種の特徴」の表のハナカイドウの行）、江東区「4－3 適切な維持管理に向けて～剪定など～」（表4.3.2 主な花芽の分化時期及び剪定時期のカイドウの行）、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（ハナカイドウの行）を開き、当サイトで項目ごとに照合しました。熊本市・世田谷区はハナカイドウ、江東区はカイドウと表記しています。◎などの記号の意味は世田谷区の樹木一覧の凡例によります。「記載なし」はその資料に書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kaido-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "カイドウ（ハナカイドウ）の剪定｜落葉期（12〜3月）に、7〜8月にできた花芽を残して切る",
  breadcrumbLabel: "カイドウの剪定",
  tagChips: ["カイドウ", "ハナカイドウ", "花木", "剪定時期", "花芽"],
  ldHeadline: "カイドウ（ハナカイドウ）の剪定｜落葉期（12〜3月）に、7〜8月にできた花芽を残して切る",
  ldDescription:
    "カイドウ（ハナカイドウ）の剪定時期と花芽の位置、花が咲かないときの見直し点、注意したい病害虫を、熊本市・江東区・世田谷区・福岡県・大和市の資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        カイドウ（ハナカイドウ）の剪定は、<Hl>葉が落ちている12月〜3月ごろ</Hl>が目安です。江東区の資料の表では、カイドウの剪定時期を落葉期（12月〜3月）、花芽分化期を7月中旬〜8月下旬、花芽の位置を側芽、開花期を4月上旬〜4月下旬としています（出典：<a href={KOTO} className={A} target="_blank" rel="noopener noreferrer">江東区「4－3 適切な維持管理に向けて～剪定など～」（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        熊本市のガイドラインの表も、ハナカイドウの剪定時期を1〜3月とし、<Hl>「落葉期に花芽を落とさぬよう留意して剪定する」</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、同日確認）。冬の枝には、夏につくられた翌春の花芽がすでについています。
      </p>
    </>
  ),
  conclusionTitle: "カイドウは、夏にできた花芽が枝についたまま冬を越します。落葉期の剪定は、花芽を見ながら必要な枝だけを切ります。",
  conclusionBody: (
    <>
      <p>3つの資料の記載を当サイトで項目ごとに並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        剪定・手入れの時期は、熊本市が1〜3月、江東区が12月〜3月、世田谷区が11〜2月と、3つの資料で少しずつ異なります。<Hl>3つの資料が重なるのは1月〜2月</Hl>です。江東区の表では、花芽ができるのは7月中旬〜8月下旬なので、この時期より後に枝を切ると、翌春に咲く花芽も一緒に落とすことになります。
      </p>
    </>
  ),
  basicsHeading: "カイドウを剪定するときの4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "バラ科の落葉中木",
      desc: "世田谷区の樹木一覧では、ハナカイドウはバラ科の落葉中木です。熊本市の表も落葉の中木に分け、樹形を円としています。",
    },
    {
      title: "剪定は落葉期",
      desc: "江東区は落葉期（12月〜3月）、熊本市は1〜3月、世田谷区の手入時期は11〜2月です。",
    },
    {
      title: "花芽は7〜8月にできる",
      desc: "江東区の表では、カイドウの花芽分化期は7月中旬〜8月下旬（目安）で、花芽の位置は側芽です。",
    },
    {
      title: "花は4月",
      desc: "江東区の表の開花期は4月上旬〜4月下旬、世田谷区の鑑賞時期は花4月です。",
    },
  ],
  stepsHeading: "カイドウの剪定4つの手順",
  stepsIntro: <p>熊本市・江東区・世田谷区の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "葉が落ちてから作業する",
      desc: "江東区の表の剪定時期は落葉期（12月〜3月）です。3つの資料が重なる1月〜2月に行うと、どの資料の記載にも沿います。",
    },
    {
      title: "枯れ枝や込み合った枝を先に抜く",
      desc: "樹形を崩している枝から減らします。剪定で取り除く不要な枝の見分け方は「忌み枝とは」にまとめています。",
    },
    {
      title: "花芽のついた枝は残す",
      desc: "熊本市は、落葉期に花芽を落とさぬよう留意して剪定するとしています。江東区の表では、花芽は側芽につきます。",
    },
    {
      title: "春の展葉期に虫がいないか見る",
      desc: "世田谷区の樹木一覧は、ハナカイドウは展葉期にアブラムシの害を受けやすいとしています。剪定の後も、芽吹きのころは様子を見ます。",
    },
  ],
  ngHeading: "カイドウの剪定で避けたいこと",
  ngs: [
    {
      title: "花芽ができた後の夏から秋に、枝を大きく切ることは避けます",
      desc: "江東区の表では、花芽分化期は7月中旬〜8月下旬です。その後に強く切ると、翌春の花芽を落とすことになります。",
    },
    {
      title: "近くにビャクシン類を植えることは避けます",
      desc: "福岡県の資料は、ビャクシン類のさび病はカイドウなどに発生する赤星病の中間寄主であり、防除法として中間寄主を近くに植えないことを挙げています。",
    },
    {
      title: "春先の枝のテント状の巣を放置することは避けます",
      desc: "福岡県の資料では、オビカレハはカイドウなどバラ科樹木の葉を食害し、幼虫は3月に孵化して枝に糸を張ったテント状の巣を作ります。巣の中の幼虫を枝葉ごと除去するか、卵塊を潰すとしています。",
    },
  ],
  proHeading: "花が咲かないとき・業者に頼む目安",
  proParas: [
    <p key="1">
      大和市の園芸相談の事例では、鉢植えで5年ほど植え替えていないカイドウの花が咲かない相談に対し、<Hl>根詰まりと肥料不足が考えられる</Hl>と回答しています。花が終わった後に枝についた小さな玉はカイガラムシで、冬期のマシン油乳剤の散布か、ブラシでこすり落とす方法を挙げています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月27日確認）。薬剤を使う場合は、製品ラベルの適用と使い方に従ってください。病害虫の記載は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県【花き花木】病害虫・雑草の発生生態と防除（PDF）</a>（同日確認）によります。
    </p>,
    <p key="2">
      <Hl>木が大きくなって脚立が必要なとき、毛虫の巣が高い位置にあるとき</Hl>は、剪定業者に相談してください。「花芽を残して落葉期に剪定したい」と伝えると、作業の内容を共有しやすくなります。花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、同じバラ科で赤星病に注意したい庭木は<Link href="/boke-sodatekata/" className={A}>ボケの育て方</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "カイドウの剪定を業者に相談する",
  ctaText: "大きくなったカイドウの剪定や、冬の花木の手入れは、業者に任せると安心です。",
  faqHeading: "カイドウの剪定でよくある質問",
  faqs: [
    {
      q: "カイドウの剪定はいつ行えばよいですか？",
      a: "江東区の資料の表では落葉期（12月〜3月）、熊本市のガイドラインの表では1〜3月です。世田谷区の樹木一覧の手入時期は11〜2月です。",
    },
    {
      q: "カイドウの花芽はいつできますか？",
      a: "江東区の資料の表では、カイドウの花芽分化期は7月中旬〜8月下旬（目安）で、花芽の位置は側芽です。開花期は4月上旬〜4月下旬です。",
    },
    {
      q: "カイドウの花が咲かないのはなぜですか？",
      a: "大和市の園芸相談の事例では、鉢植えで5年ほど植え替えていないカイドウについて、根詰まりと肥料不足が考えられると回答しています。花芽ができた後の夏から秋に枝を切ったかどうかも見直します。",
    },
    {
      q: "カイドウの植え替えはいつがよいですか？",
      a: "世田谷区の樹木一覧では、ハナカイドウの移植時期は2〜3月と11〜12月で、移植がしやすく活着がよい樹種（◎）とされています。",
    },
  ],
  related: [
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/boke-sodatekata/", label: "ボケの育て方", desc: "同じバラ科の花木と赤星病" },
    { href: "/kaigaramushi-aburamushi/", label: "カイガラムシ・アブラムシ等の見分け方", desc: "枝や新芽につく虫のサイン" },
    { href: "/kemushi-chui/", label: "毛虫に触れたときの注意と予防", desc: "春から夏の毛虫" },
  ],
};

export default function KaidoSenteiPage() {
  return <KnowArticle data={data} />;
}
