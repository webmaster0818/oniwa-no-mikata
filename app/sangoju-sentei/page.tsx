import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/sangoju-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "サンゴジュの剪定｜6〜7月と秋（10〜12月）の年1〜2回。刈り込みに強く、生垣は面で整える｜お庭のミカタ",
  },
  description:
    "サンゴジュの剪定の時期と刈り込みの考え方を、世田谷区の植栽ガイドブック、熊本市の樹木管理ガイドライン、芦屋市の街路樹等維持管理基本書をもとにまとめました。つきやすいカイガラムシ・ミノガ類などの害虫も福岡県の資料から整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "サンゴジュの剪定",
    description:
      "サンゴジュは生育旺盛で刈り込みに強い常緑樹です。初夏と秋の剪定時期と、カイガラムシ類・ミノガ類への注意を公的資料から整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; when: string; note: string }[] = [
  {
    src: "世田谷区",
    when: "手入時期 6月中旬〜7月中旬・10月下旬〜11月",
    note: "常緑高木。生育旺盛、刈り込みに強い。実は紅色（鑑賞は11月）。移植時期は3月下旬〜4月・6月中旬〜7月上旬・9月中旬〜10月上旬",
  },
  {
    src: "熊本市",
    when: "剪定時期 6〜7月・11〜12月",
    note: "樹形は卵形。ミノガ類やカイガラムシ類がつきやすいので、防除に留意する",
  },
  {
    src: "芦屋市",
    when: "刈込み 6月・9月（年1回、どちらかの月。路線によっては両方）",
    note: "中木の刈込みの樹種として記載。刈込み後、太い枝は一段下で切返しを行う",
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
      2026年11月24日に世田谷区の植栽ガイドブック（掲載樹種特性表）、熊本市の公共施設樹木の維持管理ガイドライン（常緑樹の剪定時期の表）、芦屋市の街路樹等維持管理基本書（中木の刈込みの記載と表）を開き、サンゴジュの記載を当サイトで並べました。芦屋市・熊本市の記載は街路樹・公共施設の樹木向けのもので、時期の幅は資料ごとに異なります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "sangoju-sentei",
  published: "2026-11-24",
  updatedLabel: "2026年11月24日",
  h1: "サンゴジュの剪定｜6〜7月と秋（10〜12月）の年1〜2回。刈り込みに強く、生垣は面で整える",
  breadcrumbLabel: "サンゴジュの剪定",
  tagChips: ["サンゴジュ", "常緑樹", "生垣", "刈り込み", "カイガラムシ"],
  ldHeadline: "サンゴジュの剪定｜6〜7月と秋（10〜12月）の年1〜2回。刈り込みに強く、生垣は面で整える",
  ldDescription:
    "サンゴジュの剪定の時期と方法、つきやすい害虫を、世田谷区・熊本市・芦屋市・福岡県の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        サンゴジュの剪定は、<Hl>6〜7月の初夏と、10〜12月の秋の年1〜2回</Hl>が目安です。世田谷区の植栽ガイドブックは、サンゴジュの手入時期を6月中旬〜7月中旬と10月下旬〜11月とし、「生育旺盛、刈り込みに強い」としています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「植栽ガイドブック」掲載樹種特性表（PDF）</a>、2026年11月24日確認）。
      </p>
      <p>
        サンゴジュは生垣や目隠しに使われることの多い常緑樹です。本記事では、剪定の時期と刈り込みの考え方、つきやすい害虫を、自治体と県の資料から整理します。
      </p>
    </>
  ),
  conclusionTitle: "サンゴジュは6〜7月と秋に、伸びた枝を刈り込んで形を保ちます。刈り込んだあとは太い枝を一段下で切り返し、カイガラムシ類・ミノガ類がついていないかを確かめます。",
  conclusionBody: (
    <>
      <p>
        熊本市のガイドラインは、サンゴジュの剪定時期を6〜7月・11〜12月とし、ミノガ類やカイガラムシ類がつきやすいので防除に留意するとしています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、同日確認）。3つの資料の記載を並べると、次のとおりです（芦屋市は<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">街路樹等維持管理基本書（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "サンゴジュの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は初夏と秋",
      desc: "世田谷区は6月中旬〜7月中旬・10月下旬〜11月、熊本市は6〜7月・11〜12月、芦屋市は6月・9月を挙げています。いずれも初夏と秋の2つの時期に分かれています。",
    },
    {
      title: "生育が旺盛で、刈り込みに強い",
      desc: "世田谷区のガイドブックは、サンゴジュを「生育旺盛、刈り込みに強い」としています。芦屋市の基本書も、刈込みで形を保つ中木の樹種にサンゴジュを挙げています。",
    },
    {
      title: "太い枝は一段下で切り返す",
      desc: "芦屋市の基本書は、毎回同じところで刈込みを行うと古い枝ばかりになるため、枝の更新（切返し）が必要とし、刈込み後に太い枝は一段下で切返しを行うとしています。",
    },
    {
      title: "カイガラムシ類・ミノガ類がつきやすい",
      desc: "熊本市のガイドラインはミノガ類やカイガラムシ類への留意を挙げています。福岡県の資料は、フジツボカイガラムシについて「サンゴジュでの被害が多い」としています。",
    },
  ],
  stepsHeading: "サンゴジュを剪定する4つの手順",
  stepsIntro: <p>芦屋市の中木の刈込みの記載と、熊本市・世田谷区の時期の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "6〜7月か秋に作業日を決める",
      desc: "年1回なら、初夏か秋のどちらかで行います。芦屋市の基本書は年1回をどちらかの月とし、路線によっては両方の月に行うとしています。",
    },
    {
      title: "裾を弱く、上部を強く刈り込む",
      desc: "生垣では高さと幅の線を決めてから刈り込みます。芦屋市の基本書は、生垣式に植栽されているものは、下枝の枯れ上がりを防ぐため、裾を弱く、天端を強く刈り込むとしています。",
    },
    {
      title: "太い枝は一段下で切り返す",
      desc: "刈り込んだあと、太い枝は一段下の分かれ目で切り返します（芦屋市）。",
    },
    {
      title: "枝・幹のカイガラムシ類を確かめる",
      desc: "福岡県の資料は、サンゴジュのカイガラムシとしてフジツボカイガラムシ（枝・幹）とチャノクロカイガラムシ（枝）を挙げています。剪定のついでに枝と幹を見てください。",
    },
  ],
  ngHeading: "サンゴジュの剪定で避けたいこと",
  ngs: [
    {
      title: "表面だけの刈り込みを続けることは避けます",
      desc: "芦屋市の基本書は、毎回同じところで刈込みを行うと古い枝ばかりになるため、枝の更新（切返し）が必要としています。",
    },
    {
      title: "害虫のついた枝を残したままにしません",
      desc: "熊本市のガイドラインは、ミノガ類やカイガラムシ類がつきやすいので防除に留意するとしています。",
    },
    {
      title: "冬の寒い時期の強い刈り込みは避けます",
      desc: "各資料の剪定・手入時期は初夏と秋で、冬（1〜3月）を挙げている資料はありません。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>長い生垣の刈り込み、脚立で届かない高さの枝、カイガラムシ類が広がった木の消毒</Hl>は、剪定業者に相談してください。生垣の延長（m）と高さを伝えると、見積もりが出しやすくなります。
    </p>,
    <p key="2">
      生垣の刈り込みの手順は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込みの基礎知識</Link>、生垣に向く木は<Link href="/ikegaki-shurui/" className={A}>生垣に向く木の種類</Link>、枝や幹につく虫の見分け方は<Link href="/kaigaramushi-aburamushi/" className={A}>カイガラムシ・アブラムシ等の見分け方</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "サンゴジュの生垣の刈り込みを業者に相談する",
  ctaText:
    "サンゴジュは生育が旺盛で、生垣は毎年の刈り込みが必要です。長い生垣や高い位置の作業は、業者に任せると安心です。",
  faqHeading: "サンゴジュの剪定でよくある質問",
  faqs: [
    {
      q: "サンゴジュの剪定はいつ行えばよいですか？",
      a: "世田谷区の植栽ガイドブックは手入時期を6月中旬〜7月中旬・10月下旬〜11月、熊本市のガイドラインは剪定時期を6〜7月・11〜12月としています。芦屋市の基本書は、刈込みを6月・9月のどちらか（年1回）としています。",
    },
    {
      q: "サンゴジュは強く刈り込んでも大丈夫ですか？",
      a: "世田谷区のガイドブックは、サンゴジュを「生育旺盛、刈り込みに強い」としています。芦屋市の基本書は、刈込み後に太い枝は一段下で切返しを行うとしています。",
    },
    {
      q: "サンゴジュにつきやすい虫は何ですか？",
      a: "熊本市のガイドラインはミノガ類やカイガラムシ類を挙げています。福岡県の資料は、フジツボカイガラムシについてサンゴジュでの被害が多いとし、ダニ類の表ではミカンハダニ・チャノホコリダニをサンゴジュの害虫に挙げています。",
    },
    {
      q: "サンゴジュの植え替えはいつできますか？",
      a: "世田谷区の植栽ガイドブックは、サンゴジュの移植時期を3月下旬〜4月・6月中旬〜7月上旬・9月中旬〜10月上旬としています。",
    },
  ],
  related: [
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込みの基礎知識",
      desc: "面で整える手順",
    },
    {
      href: "/ikegaki-shurui/",
      label: "生垣に向く木の種類",
      desc: "サンゴジュを含む樹種の比較",
    },
    {
      href: "/masaki-sentei/",
      label: "マサキの剪定",
      desc: "同じ生垣向きの常緑樹",
    },
    {
      href: "/kaigaramushi-aburamushi/",
      label: "カイガラムシ・アブラムシ等の見分け方",
      desc: "枝や幹につく虫",
    },
  ],
};

export default function SangojuSenteiPage() {
  return <KnowArticle data={data} />;
}
