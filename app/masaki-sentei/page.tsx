import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/masaki-sentei/";
const A = "text-[#2D7F3E] underline";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const MINATO = "https://www.city.minato.tokyo.jp/documents/175962/20260213161310.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "マサキの剪定｜刈り込みは6月か9月、刈り込み後は太い枝を一段下で切り返す｜お庭のミカタ",
  },
  description:
    "マサキの剪定・刈り込みの時期と方法を、芦屋市の街路樹等維持管理基本書、港区の樹木管理マニュアル、熊本市の樹木管理ガイドラインをもとにまとめました。マサキに付くカイガラムシについて、福岡県の資料もあわせて整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "マサキの剪定",
    description:
      "マサキの刈り込みの時期と回数、刈り込み後の切り返し、生垣の裾の扱い、付きやすいカイガラムシを公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; when: string; note: string }[] = [
  {
    src: "芦屋市",
    when: "6月、9月（どちらかの月に年1回）",
    note: "刈込み後、太い枝は一段下で切返しを行う",
  },
  {
    src: "港区",
    when: "年2回型の例。新芽が生長を休止する5〜6月に1回刈り込む",
    note: "萌芽力が強く伸長のよい樹種としてマサキを挙げる",
  },
  {
    src: "熊本市",
    when: "6〜7月、9〜12月",
    note: "樹形は球。いろいろな病害虫を受けやすい",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">時期・回数</th>
          <th className="border px-2 py-2 text-left">備考</th>
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
      2026年11月23日に芦屋市の街路樹等維持管理基本書（令和3年3月）の中低木の刈込み剪定の表、港区の樹木管理マニュアルの刈込みの項、熊本市の公共施設樹木の維持管理ガイドライン（令和5年8月）の主要樹種の表を開き、マサキの記載を当サイトで並べました。資料によって時期の幅が異なるのは、刈り込みの回数（年1回か年2回か）や対象とする地域・場所の違いによるものと当サイトでは読んでいます。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "masaki-sentei",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "マサキの剪定｜刈り込みは6月か9月、刈り込み後は太い枝を一段下で切り返す",
  breadcrumbLabel: "マサキの剪定",
  tagChips: ["マサキ", "常緑樹", "生垣", "刈り込み", "カイガラムシ"],
  ldHeadline: "マサキの剪定｜刈り込みは6月か9月、刈り込み後は太い枝を一段下で切り返す",
  ldDescription:
    "マサキの剪定・刈り込みの時期と方法、付きやすいカイガラムシを、芦屋市・港区・熊本市・福岡県の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        芦屋市の街路樹等維持管理基本書では、マサキの刈込みを<Hl>6月、9月のどちらかの月に年1回</Hl>とし、備考に<Hl>刈込み後、太い枝は一段下で切返しを行う</Hl>と記載しています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>、2026年11月23日確認）。港区の樹木管理マニュアルでは、マサキを萌芽力が強く伸長のよい樹種として、年2回の刈込みの例に挙げています。
      </p>
      <p>
        本記事では、これらの資料と熊本市のガイドラインを照合し、生垣や玉仕立てのマサキの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "マサキは刈り込みに耐える木です。初夏（6月前後）か9月に刈り込み、伸びの強い木は年2回に分けます。同じ位置ばかり刈らず、ときどき太い枝を一段下で切り返します。",
  conclusionBody: (
    <>
      <p>
        港区の樹木管理マニュアルでは、年2回の場合は<Hl>新芽が生長を休止する5月〜6月に1回刈込みを行って、形を整える</Hl>としています（出典：<a href={MINATO} className={A} target="_blank" rel="noopener noreferrer">港区「樹木管理マニュアル」（PDF）</a>、2026年11月23日確認）。3つの資料の記載を並べると、次のとおりです（熊本市は<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">公共施設樹木の維持管理ガイドライン（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "マサキの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "刈り込みは6月か9月が目安",
      desc: "芦屋市の基本書は6月・9月のどちらかの月に年1回、熊本市のガイドラインは6〜7月・9〜12月としています。",
    },
    {
      title: "伸びが強いので年2回刈ることもある",
      desc: "港区のマニュアルでは、萌芽力が強く伸長のよいマサキ・ネズミモチ・アベリアなどを年2回の刈込みの例に挙げています。",
    },
    {
      title: "同じ位置ばかり刈ると古い枝ばかりになる",
      desc: "芦屋市の基本書では、毎回同じところで刈込みを行うと古い枝ばかりになるため、枝の更新（切返し）を行う必要があるとしています。",
    },
    {
      title: "病害虫を受けやすい",
      desc: "熊本市のガイドラインでは、マサキはいろいろな病害虫を受けやすいとしています。福岡県の資料ではマサキに付くカイガラムシを4種挙げています。",
    },
  ],
  stepsHeading: "庭のマサキを刈り込む4つの手順",
  stepsIntro: <p>芦屋市の基本書と港区のマニュアルの刈込みの要領にもとづく流れです。</p>,
  steps: [
    {
      title: "初夏に、新芽の伸びが止まったころ刈り込む",
      desc: "港区のマニュアルでは、新芽が生長を休止する5月〜6月に1回刈込みを行って形を整えるとしています。",
    },
    {
      title: "生垣は天端を強く、裾を弱く刈る",
      desc: "芦屋市の基本書では、生垣式に植栽されているものは裾を弱く、天端を強く刈込むとしています（下枝の枯れ上がりを防ぐため）。",
    },
    {
      title: "刈り込み後、太い枝を一段下で切り返す",
      desc: "芦屋市の基本書では、刈込み後に太い枝は一段下で切返しを行うとしています。表面の小枝だけでなく、内側の太い枝も更新します。",
    },
    {
      title: "伸びの強い木は9月にもう一度整える",
      desc: "芦屋市の基本書は9月も刈込みの時期に挙げ、熊本市のガイドラインは9〜12月を剪定時期に含めています。",
    },
  ],
  ngHeading: "マサキの剪定で避けたいこと",
  ngs: [
    {
      title: "毎年同じ位置だけを刈り続けることは避けます",
      desc: "港区のマニュアルでは、長年同じところばかり刈込むと萌芽力が落ちてくるので、時には深く切り戻すことも必要としています。",
    },
    {
      title: "生垣の裾を強く刈ることは避けます",
      desc: "港区のマニュアルでは、上枝を強く、下枝を弱く刈込むことで、下枝が枯れずに裾の美しい線を保つことができるとしています。",
    },
    {
      title: "枝や葉のカイガラムシを見過ごすことは避けます",
      desc: "福岡県の資料では、マサキにトビイロマルカイガラムシ・マサキナガカイガラムシ・ツノロウムシ・カメノコロウムシが付くとしています。刈り込みのときに枝・幹・葉を見ておくと早く気づけます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣が長く年2回の刈り込みが負担になっている、内側が枯れて透けてきた、カイガラムシが広がっている</Hl>といった場合は、生垣の刈り込みに対応する業者に相談すると作業がまとまります。依頼するときは、生垣の長さと高さ、年に何回刈っているか、虫の付き方を伝えてください。
    </p>,
    <p key="2">
      生垣の刈り込みの基本は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、生垣に使われる木は<Link href="/ikegaki-shurui/" className={A}>生垣の種類</Link>、カイガラムシの対処は<Link href="/kaigaramushi-aburamushi/" className={A}>カイガラムシ・アブラムシ対策</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。カイガラムシの出典は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県「【花き花木】病害虫・雑草の発生生態と防除」（PDF）</a>（2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "生垣の長さと刈り込みの回数を伝えて相談する",
  ctaText:
    "マサキは伸びが強く、刈り込みの回数が多くなりやすい木です。長い生垣や内側の枯れ込みは、業者と相談すると安心です。",
  faqHeading: "マサキの剪定のよくある質問",
  faqs: [
    {
      q: "マサキの剪定はいつがよいですか？",
      a: "芦屋市の街路樹等維持管理基本書では、6月・9月のどちらかの月に年1回としています。港区の樹木管理マニュアルでは、年2回の場合は新芽が生長を休止する5月〜6月に1回刈込みを行うとしています。熊本市のガイドラインでは6〜7月・9〜12月としています。",
    },
    {
      q: "マサキは年に何回刈り込めばよいですか？",
      a: "芦屋市の基本書は年1回としていますが、港区のマニュアルはマサキを萌芽力が強く伸長のよい樹種として年2回の例に挙げています。伸びの強さに合わせて回数を決めます。",
    },
    {
      q: "刈り込みを続けていたら中が透けてきました。",
      a: "芦屋市の基本書では、毎回同じところで刈込みを行うと古い枝ばかりになるため、枝の更新（切返し）を行う必要があるとしています。港区のマニュアルでも、時には深く切り戻すことも必要としています。",
    },
    {
      q: "マサキに付きやすい虫はありますか？",
      a: "福岡県の資料では、マサキに付くカイガラムシとしてトビイロマルカイガラムシ・マサキナガカイガラムシ・ツノロウムシ・カメノコロウムシを挙げています。熊本市のガイドラインでも、いろいろな病害虫を受けやすいとしています。",
    },
  ],
  related: [
    { href: "/karatane-ogatama-sentei/", label: "カラタネオガタマの剪定", desc: "移植が難しい常緑樹" },
    {
      href: "/sangoju-sentei/",
      label: "サンゴジュの剪定",
      desc: "同じ生垣向きの常緑樹",
    },
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込み",
      desc: "時期と刈り方の基本",
    },
    {
      href: "/ikegaki-shurui/",
      label: "生垣の種類",
      desc: "自治体の資料で見る生垣の木",
    },
    {
      href: "/kaigaramushi-aburamushi/",
      label: "カイガラムシ・アブラムシ対策",
      desc: "枝や葉に付く虫の対処",
    },
    {
      href: "/kanamemochi-sentei/",
      label: "カナメモチ（レッドロビン）の剪定",
      desc: "生垣に多い常緑樹",
    },
  ],
};

export default function MasakiSenteiPage() {
  return <KnowArticle data={data} />;
}
