import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/ubamegashi-sentei/";
const A = "text-[#2D7F3E] underline";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const ZUSHI =
  "https://www.city.zushi.kanagawa.jp/_res/projects/default_project/_page_/001/005/765/1-20230126103504.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ウバメガシの剪定｜生垣の刈り込みは6月か9月、成長が遅いので切り過ぎない｜お庭のミカタ",
  },
  description:
    "ウバメガシの剪定・刈り込みの時期と方法を、芦屋市の街路樹等維持管理基本書、熊本市の樹木管理ガイドライン、世田谷区の植栽ガイドブックをもとにまとめました。生垣に仕立てた場合と、自然な樹形で育てる場合に分けて整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ウバメガシの剪定",
    description:
      "ウバメガシの生垣の刈り込みと、自然樹形の木の枝抜きの時期・方法を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; what: string; src: string }[] = [
  {
    item: "刈込みの時期",
    what: "6月、9月（どちらかの月に年1回）",
    src: "芦屋市",
  },
  {
    item: "常緑樹の剪定の時期",
    what: "4月中旬〜7月下旬、または9月〜10月。枝抜きで葉を透かし、伸び過ぎた枝を切り返す",
    src: "芦屋市",
  },
  {
    item: "成長の速さ",
    what: "成長が遅い樹種（クロガネモチ・ヤマモモと並べて記載）",
    src: "芦屋市",
  },
  {
    item: "剪定時期・性質",
    what: "5〜6月。刈込に耐え生垣に利用されることが多い。樹形は広卵",
    src: "熊本市",
  },
  {
    item: "性質",
    what: "常緑高木。萌芽力あり、公害に強く、公共緑化に多く利用",
    src: "世田谷区",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">資料の記載</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item + r.src}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.what}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に芦屋市の街路樹等維持管理基本書（令和3年3月）、熊本市の公共施設樹木の維持管理ガイドライン（令和5年8月）、世田谷区の植栽ガイドブックの特性表を開き、ウバメガシの記載を当サイトで並べました。芦屋市は刈り込む中木（生垣など）と、自然樹形で育てる常緑樹の両方にウバメガシを挙げているため、仕立て方ごとに分けて掲載しています。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "ubamegashi-sentei",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "ウバメガシの剪定｜生垣の刈り込みは6月か9月、成長が遅いので切り過ぎない",
  breadcrumbLabel: "ウバメガシの剪定",
  tagChips: ["ウバメガシ", "常緑樹", "生垣", "刈り込み", "枝抜き剪定"],
  ldHeadline: "ウバメガシの剪定｜生垣の刈り込みは6月か9月、成長が遅いので切り過ぎない",
  ldDescription:
    "ウバメガシの剪定・刈り込みの時期と方法を、芦屋市・熊本市・世田谷区・逗子市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        芦屋市の街路樹等維持管理基本書では、刈り込んで仕立てる中木としてのウバメガシの刈込みを<Hl>6月、9月のどちらかの月に年1回</Hl>としています。同じ基本書では、ウバメガシを<Hl>成長が遅い樹種</Hl>に分類しています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>、2026年11月23日確認）。
      </p>
      <p>
        本記事では、これらの資料と熊本市・世田谷区の資料を照合し、生垣のウバメガシと自然樹形のウバメガシの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "生垣のウバメガシは6月か9月に刈り込みます。自然樹形の木は枝抜きで透かす程度にし、成長が遅いため一度に強く切り詰めないようにします。",
  conclusionBody: (
    <>
      <p>
        熊本市の公共施設樹木の維持管理ガイドラインでは、ウバメガシの剪定時期を<Hl>5〜6月</Hl>とし、<Hl>刈込に耐え生垣に利用されることが多い</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」（PDF）</a>、2026年11月23日確認）。資料の記載を並べると、次のとおりです（世田谷区は<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">掲載樹種特性表（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ウバメガシの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "刈り込みに耐え、生垣によく使われる",
      desc: "熊本市のガイドラインでは刈込に耐え生垣に利用されることが多いとし、世田谷区の特性表では萌芽力ありとしています。逗子市の生垣用樹木の配布でも、ウバメガシが例に挙がっています。",
    },
    {
      title: "生垣の刈り込みは6月か9月",
      desc: "芦屋市の基本書では、ウバメガシの刈込みを6月・9月のどちらかの月に年1回としています。熊本市のガイドラインでは剪定時期を5〜6月としています。",
    },
    {
      title: "自然樹形の木は枝抜きで透かす",
      desc: "芦屋市の基本書では、ウバメガシを含む常緑樹の剪定は、枝抜きにより葉を透かし、伸び過ぎた枝の切返し剪定を行い、自然樹形が基本であるため強剪定にならないようにするとしています。",
    },
    {
      title: "成長が遅い",
      desc: "芦屋市の基本書では、ウバメガシをクロガネモチ・ヤマモモとともに成長が遅い樹種としています。切った分が戻るまでに時間がかかります。",
    },
  ],
  stepsHeading: "庭のウバメガシを剪定する4つの手順",
  stepsIntro: <p>芦屋市の基本書の中木の刈込みと常緑樹の剪定の要領にもとづく流れです。</p>,
  steps: [
    {
      title: "生垣か自然樹形かを確かめる",
      desc: "芦屋市の基本書は、刈り込む中木と自然樹形の常緑樹で剪定の方法を分けています。生垣・玉仕立てなら刈り込み、1本立ちの木なら枝抜きが中心です。",
    },
    {
      title: "生垣は6月か9月に、天端を強く裾を弱く刈る",
      desc: "芦屋市の基本書では、生垣式に植栽されているものは裾を弱く、天端を強く刈込むとしています（下枝の枯れ上がりを防ぐため）。",
    },
    {
      title: "刈り込み後、太い枝を一段下で切り返す",
      desc: "同じ基本書では、毎回同じところで刈込みを行うと古い枝ばかりになるため、刈込み後に太い枝は一段下で切返しを行うとしています。",
    },
    {
      title: "自然樹形の木は、込んだ枝と伸び過ぎた枝だけを整理する",
      desc: "同じ基本書では、ウバメガシはクスノキの剪定に準じて行うとし、粗密のないように徒長枝・さかさ枝・こみ枝等は枝抜き剪定をして樹形を整えるとしています。",
    },
  ],
  ngHeading: "ウバメガシの剪定で避けたいこと",
  ngs: [
    {
      title: "自然樹形の木を一度に強く切り詰めることは避けます",
      desc: "芦屋市の基本書では、常緑樹は自然樹形が基本であるため強剪定にならないようにするとしています。成長が遅い樹種でもあるため、樹形が戻るまで時間がかかります。",
    },
    {
      title: "生垣の裾を強く刈ることは避けます",
      desc: "芦屋市の基本書では、生垣は裾を弱く、天端を強く刈込むとしています。裾を強く刈ると下枝の枯れ上がりにつながります。",
    },
    {
      title: "毎回同じ面だけを刈ることは避けます",
      desc: "芦屋市の基本書では、毎回同じところで刈込みを行うと古い枝ばかりになるとしています。ときどき太い枝を一段下で切り返して更新します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣が長く高さもある、内側が透けて枝が古くなった、1本立ちの木が大きくなり枝抜きが難しい</Hl>といった場合は、生垣の刈り込みや常緑樹の剪定に対応する業者に相談すると作業がまとまります。依頼するときは、生垣か1本立ちか、高さと長さ、前回の剪定の時期を伝えてください。
    </p>,
    <p key="2">
      生垣の刈り込みの基本は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、生垣に使われる木は<Link href="/ikegaki-shurui/" className={A}>生垣の種類</Link>、同じカシの仲間は<Link href="/kashi-teire/" className={A}>カシの手入れ</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。逗子市の配布樹木の出典は<a href={ZUSHI} className={A} target="_blank" rel="noopener noreferrer">逗子市「生垣用の樹木を配布します」（PDF）</a>（2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "生垣か1本立ちかと高さを伝えて相談する",
  ctaText:
    "ウバメガシは刈り込みに耐える一方、成長が遅い木です。長い生垣や大きくなった木は、業者と相談すると安心です。",
  faqHeading: "ウバメガシの剪定のよくある質問",
  faqs: [
    {
      q: "ウバメガシの剪定はいつがよいですか？",
      a: "芦屋市の街路樹等維持管理基本書では、刈り込む中木としてのウバメガシは6月・9月のどちらかの月に年1回としています。熊本市のガイドラインでは剪定時期を5〜6月としています。",
    },
    {
      q: "ウバメガシの生垣は強く刈り込んでも大丈夫ですか？",
      a: "熊本市のガイドラインでは刈込に耐え生垣に利用されることが多いとし、世田谷区の特性表では萌芽力ありとしています。ただし芦屋市の基本書では成長が遅い樹種に分類しているため、切った分が戻るまでに時間がかかります。",
    },
    {
      q: "生垣の下のほうが枯れてきました。",
      a: "芦屋市の基本書では、生垣式に植栽されているものは裾を弱く、天端を強く刈込むことで下枝の枯れ上がりを防ぐとしています。",
    },
    {
      q: "1本立ちのウバメガシはどう切ればよいですか？",
      a: "芦屋市の基本書では、ウバメガシを含む常緑樹の剪定は、枝抜きにより葉を透かし、伸び過ぎた枝の切返し剪定を行い、強剪定にならないようにするとしています。",
    },
  ],
  related: [
    {
      href: "/kusunoki-sentei/",
      label: "クスノキの剪定",
      desc: "暖かくなってから剪定する常緑樹",
    },
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込み",
      desc: "時期と刈り方の基本",
    },
    {
      href: "/kashi-teire/",
      label: "カシの手入れ",
      desc: "シラカシ・アラカシなどの常緑樹",
    },
    {
      href: "/yamamomo-sentei/",
      label: "ヤマモモの剪定",
      desc: "成長が遅い常緑樹",
    },
    {
      href: "/masaki-sentei/",
      label: "マサキの剪定",
      desc: "生垣に多い常緑樹の刈り込み",
    },
  ],
};

export default function UbamegashiSenteiPage() {
  return <KnowArticle data={data} />;
}
