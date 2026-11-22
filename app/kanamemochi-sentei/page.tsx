import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kanamemochi-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_KANRI = "https://www.city.setagaya.lg.jp/documents/4728/29589_5.pdf";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "カナメモチ（レッドロビン）の剪定｜年2回の刈り込みに向き、生垣はこまめに刈らないと下枝が枯れ上がる｜お庭のミカタ",
  },
  description:
    "カナメモチ・レッドロビンの剪定の時期と方法を、世田谷区の植栽ガイドブック、熊本市・芦屋市の樹木管理の資料、福岡県の病害虫資料をもとにまとめました。生垣で多いごま色斑点病の見方も整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "カナメモチ（レッドロビン）の剪定",
    description:
      "カナメモチ・レッドロビンの刈り込みの時期、下枝の枯れ上がりを防ぐ刈り方、ごま色斑点病の対処を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; time: string; note: string }[] = [
  {
    src: "世田谷区 植栽ガイドブック 維持・管理",
    time: "年2回の場合、5〜6月と9〜10月",
    note: "イヌツゲ・カナメモチ・ヒイラギなど萌芽力の強い樹種に適している",
  },
  {
    src: "世田谷区 植栽ガイドブック 掲載樹種特性表",
    time: "手入時期は3〜4月上旬、6・7・9月",
    note: "バラ科の常緑中高木。萌芽力があり、刈り込みに耐える。ベニカナメ、レッドロビンの新葉は紅葉。移植難易は「△ 要根回」",
  },
  {
    src: "熊本市 公共施設樹木の維持管理ガイドライン",
    time: "6〜7月",
    note: "生垣に用いるときは、こまめに剪定しないと下枝が枯れあがりやすい",
  },
  {
    src: "芦屋市 街路樹等維持管理基本書（中木の刈込み）",
    time: "セイヨウベニカナメモチは9月・年1回",
    note: "刈込み後、太い枝は一段下で切返しを行う（中木の刈込みの記載）",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">剪定・刈り込みの時期</th>
          <th className="border px-2 py-2 text-left">カナメモチに関する記載</th>
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
      2026年11月22日に4つの資料を開き、カナメモチ（芦屋市はセイヨウベニカナメモチ）の行と、カナメモチを名指しした刈り込みの記載を当サイトで並べました。時期は資料によって幅があり、6月ごろと9月ごろを挙げる資料が多くなっています。各資料は作成した地域の気候にもとづくもので、地域によって時期は前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kanamemochi-sentei",
  published: "2026-11-22",
  updatedLabel: "2026年11月22日",
  h1: "カナメモチ（レッドロビン）の剪定｜年2回の刈り込みに向き、生垣はこまめに刈らないと下枝が枯れ上がる",
  breadcrumbLabel: "カナメモチの剪定",
  tagChips: ["カナメモチ", "レッドロビン", "生垣", "刈り込み", "ごま色斑点病"],
  ldHeadline: "カナメモチ（レッドロビン）の剪定｜年2回の刈り込みに向き、生垣はこまめに刈らないと下枝が枯れ上がる",
  ldDescription:
    "カナメモチ・レッドロビンの剪定の時期と方法、ごま色斑点病の対処を、世田谷区・熊本市・芦屋市・福岡県・大和市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        熊本市の公共施設樹木の維持管理ガイドラインにある主要樹種の表では、カナメモチの剪定時期を<Hl>6〜7月</Hl>とし、<Hl>生垣に用いるときは、こまめに剪定しないと下枝が枯れあがりやすい</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」巻末資料 熊本平野部の主要樹種の特徴（PDF）</a>、2026年11月22日確認）。
      </p>
      <p>
        本記事では、この表と世田谷区・芦屋市の資料を照合し、福岡県・大和市の資料にある病気の記載とあわせて、庭のカナメモチ・レッドロビンの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "カナメモチ・レッドロビンは萌芽力が強く、年2回の刈り込みに向く木です。生垣は間をあけずに刈り込み、下枝の枯れ上がりを防ぎます。",
  conclusionBody: (
    <>
      <p>
        世田谷区の植栽ガイドブックは、刈り込みを年2回行う場合は<Hl>新芽が生長を休止する5〜6月と、土用芽が生長を休止する9〜10月</Hl>とし、この回数がカナメモチなど萌芽力の強い樹種に適しているとしています（出典：<a href={SETAGAYA_KANRI} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」維持・管理（PDF）</a>、2026年11月22日確認）。同じガイドブックの特性表（<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">掲載樹種特性表（PDF）</a>）と芦屋市の資料（<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>）を含め、4つの資料を当サイトで並べると、次のとおりです（いずれも2026年11月22日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "カナメモチの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "萌芽力が強く、刈り込みに耐える",
      desc: "世田谷区の特性表では「萌芽力があり、刈り込みに耐える」とし、維持・管理の章でも年2回の刈り込みに適した樹種に挙げています。",
    },
    {
      title: "生垣は下枝が枯れ上がりやすい",
      desc: "熊本市の表では、生垣に用いるときは、こまめに剪定しないと下枝が枯れあがりやすいとしています。",
    },
    {
      title: "新葉が赤く色づく",
      desc: "世田谷区の特性表では、ベニカナメ・レッドロビンの新葉は紅葉するとし、鑑賞時期を新葉の5〜6月としています。",
    },
    {
      title: "ごま色斑点病が出やすい",
      desc: "大和市の園芸相談の事例では、レッドロビンは日本のベニカナメモチに比べて病気に弱く、病気はごま色斑点病と回答しています。",
    },
  ],
  stepsHeading: "カナメモチの生垣を刈り込む4つの手順",
  stepsIntro: <p>世田谷区のガイドブックの刈り込みの方法と、各資料の注意点にもとづく流れです。</p>,
  steps: [
    {
      title: "初夏（5〜7月）に1回目を刈り込む",
      desc: "世田谷区のガイドブックでは5〜6月、熊本市の表では6〜7月としています。新芽が伸びて落ち着いたころに刈ります。",
    },
    {
      title: "生垣は上を強く、裾を弱く刈る",
      desc: "世田谷区のガイドブックでは、生垣は上部の枝を強く、下部の枝を弱く刈り込むと、裾のラインを美しく保てるとしています。熊本市の表にある下枝の枯れ上がりを防ぐことにもつながります。",
    },
    {
      title: "太い枝は一段下で切り返す",
      desc: "芦屋市の基本書では、中木の刈込み後、太い枝は一段下で切返しを行うとしています。刈り込みの面から太い枝が突き出たままにならないようにします。",
    },
    {
      title: "9月ごろに2回目で形を整える",
      desc: "世田谷区のガイドブックでは9〜10月、芦屋市の表ではセイヨウベニカナメモチを9月としています。伸びた分をそろえる程度にとどめます。",
    },
  ],
  ngHeading: "カナメモチの剪定で避けたいこと",
  ngs: [
    {
      title: "何年も刈らずに放置することは避けます",
      desc: "熊本市の表では、生垣に用いるときは、こまめに剪定しないと下枝が枯れあがりやすいとしています。",
    },
    {
      title: "病気の落ち葉を生垣の下に残すことは避けます",
      desc: "福岡県の資料では、ごま色斑点病の防除法として、越冬病葉と病落葉を除去・処分するとしています。",
    },
    {
      title: "成長した木を気軽に移植することは避けます",
      desc: "世田谷区の特性表では、カナメモチの移植難易を「△」（移植困難）とし、「要根回」としています。植え替えを考える場合は専門家に相談してください。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣が長い、下枝が枯れ上がって裾が透けている、ごま色斑点病で葉が大量に落ちた</Hl>といった場合は、庭木の剪定業者に相談すると作業がまとまります。福岡県の資料では、被害が激しい場合は思い切った剪定をして仕立てなおすとしています。依頼するときは、カナメモチ（レッドロビン）の生垣であること、葉の症状、希望の高さを伝えてください。
    </p>,
    <p key="2">
      生垣の刈り込みの基本は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、裾が透けてきたときの見方は<Link href="/ikegaki-shitaeda-kare/" className={A}>生垣の下枝が枯れる原因</Link>、生垣に向く木の比較は<Link href="/ikegaki-shurui/" className={A}>生垣に向く木の種類</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。病気の出典は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県「【花き花木】病害虫・雑草の発生生態と防除」（PDF）</a>、<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>（いずれも2026年11月22日確認）です。
    </p>,
  ],
  ctaHeading: "葉の症状と希望の高さを伝えて相談する",
  ctaText:
    "カナメモチ・レッドロビンは萌芽力が強く、年2回の刈り込みに向く木です。下枝の枯れ上がりや病気で形が崩れた生垣は、業者と相談すると安心です。",
  faqHeading: "カナメモチの剪定のよくある質問",
  faqs: [
    {
      q: "カナメモチ（レッドロビン）の剪定はいつがよいですか？",
      a: "世田谷区の植栽ガイドブックでは、年2回刈り込む場合は5〜6月と9〜10月としています。熊本市の表では6〜7月、芦屋市の表ではセイヨウベニカナメモチを9月・年1回としています。",
    },
    {
      q: "レッドロビンの葉に赤い斑点が出て、たくさん落ちます。",
      a: "福岡県の資料では、ごま色斑点病は4月下旬から当年葉に紅色の小斑点を多数生じ、やがて2〜5mmの灰褐色の円斑になり、ひどくなると5月頃に病葉が一斉に落葉するとしています。防除法として、越冬病葉と病落葉の除去・処分を挙げています。",
    },
    {
      q: "ごま色斑点病を防ぐにはどうすればよいですか？",
      a: "大和市の園芸相談の事例では、丈夫に育てること、日当り良く、風通し良く、肥料をやり過ぎないことを挙げています。福岡県の資料では、シャリンバイ・カリン・ビワなど同じ病気が出る樹木が近くにある場合は同時に防除するとしています。",
    },
    {
      q: "生垣の下の方が透けてきました。",
      a: "熊本市の表では、生垣に用いるときは、こまめに剪定しないと下枝が枯れあがりやすいとしています。世田谷区のガイドブックでは、生垣は上部の枝を強く、下部の枝を弱く刈り込むと裾のラインを保てるとしています。",
    },
  ],
  related: [
    {
      href: "/sharinbai-sentei/",
      label: "シャリンバイの剪定",
      desc: "花芽ができる前の刈り込み",
    },
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込み",
      desc: "時期と刈り方の基本",
    },
    {
      href: "/ikegaki-shitaeda-kare/",
      label: "生垣の下枝が枯れる原因",
      desc: "裾が透けてきたときの見方",
    },
    {
      href: "/ikegaki-shurui/",
      label: "生垣に向く木の種類",
      desc: "4市の資料に共通する樹種",
    },
    {
      href: "/inutsuge-sentei/",
      label: "イヌツゲの剪定",
      desc: "同じく年2回の刈り込みに向く木",
    },
  ],
};

export default function KanamemochiSenteiPage() {
  return <KnowArticle data={data} />;
}
