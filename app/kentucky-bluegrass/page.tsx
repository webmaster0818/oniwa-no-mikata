import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kentucky-bluegrass/";
const A = "text-[#2D7F3E] underline";
const TOKYO_KISO = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual02";
const TOKYO_KANRI = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual03";
const SAITAMA = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20202.pdf";
const SHIZUOKA = "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/turfmaintenancemanual.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ケンタッキーブルーグラスの特徴｜寒さに強い冬芝、初期生長は遅く種まきは9月下旬〜10月上旬・10〜15g/㎡｜お庭のミカタ",
  },
  description:
    "ケンタッキーブルーグラスの特徴と育て方を、東京都教育委員会・埼玉県・静岡県の芝生管理マニュアルをもとにまとめました。地下ほふく茎で広がる寒地型の芝草で、寒さに強い一方、初期生長が遅く、関東では夏の高温で弱ります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ケンタッキーブルーグラスの特徴と育て方",
    description:
      "ケンタッキーブルーグラスの性質、種まきの時期と量、ほかの冬芝との違いを公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kbg: string; pr: string; source: string }[] = [
  { item: "広がり方", kbg: "弱いほふく型（東京都）／地下ほふく茎（静岡県）", pr: "株型（東京都）／直立タイプ（静岡県）", source: "東京都教育委員会・静岡県" },
  { item: "初期生長", kbg: "遅い", pr: "比較的早く、養生期間が短い", source: "東京都教育委員会" },
  { item: "寒さ", kbg: "寒さに強い", pr: "記載なし", source: "東京都教育委員会" },
  { item: "種まきの量（オーバーシード）", kbg: "10〜15g/㎡", pr: "30〜40g/㎡", source: "東京都教育委員会" },
  { item: "性質（ブルーグラス類）", kbg: "病害に強いが高温乾燥に弱い。踏圧に比較的強い。播種による施工が一般的", pr: "ライグラス類：冬芝の中で生長は一番早いが、夏にはほとんど枯死する", source: "埼玉県" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">ケンタッキーブルーグラス</th>
          <th className="border px-2 py-2 text-left">ペレニアルライグラス（比較）</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.kbg}</td>
            <td className="border px-2 py-2">{r.pr}</td>
            <td className="border px-2 py-2">{r.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に東京都教育委員会の「芝草の基礎知識」「芝生の維持管理方法」、埼玉県の園庭・校庭芝生マニュアル第1章、静岡県の芝生管理マニュアルを開き、ケンタッキーブルーグラスと、校庭で最もよく使われる冬芝のペレニアルライグラスの記載を当サイトで項目ごとに並べました。埼玉県の資料は「ブルーグラス類」「ライグラス類」の区分で書かれています。いずれも関東・東海の園庭・校庭向けの資料です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kentucky-bluegrass",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "ケンタッキーブルーグラスの特徴｜寒さに強い冬芝、初期生長は遅く種まきは9月下旬〜10月上旬・10〜15g/㎡",
  breadcrumbLabel: "ケンタッキーブルーグラス",
  tagChips: ["ケンタッキーブルーグラス", "芝生", "冬芝", "寒地型芝草", "種まき"],
  ldHeadline: "ケンタッキーブルーグラスの特徴｜寒さに強い冬芝、初期生長は遅く種まきは9月下旬〜10月上旬・10〜15g/㎡",
  ldDescription:
    "ケンタッキーブルーグラスの性質、種まきの時期と量、ほかの冬芝との違いを、東京都教育委員会・埼玉県・静岡県の芝生管理マニュアルをもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ケンタッキーブルーグラスは、冬の間も緑を保つ<Hl>寒地型芝草（冬芝）</Hl>の一つです。東京都教育委員会の芝生管理マニュアルは、<Hl>弱いほふく型で初期生長が遅く、寒さに強い</Hl>と紹介しています。冬芝は、種の発芽に平均気温15℃以上が必要で、最適な種まきの時期は9月下旬から10月上旬、夏（平均気温25℃以上）になると枯れ始めるとしています（出典：<a href={TOKYO_KISO} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「芝草の基礎知識」（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        本記事では、この資料と埼玉県・静岡県の芝生管理マニュアルを照合し、庭でケンタッキーブルーグラスを使うときの性質と育て方を整理します。
      </p>
    </>
  ),
  conclusionTitle: "ケンタッキーブルーグラスは寒さに強く、地下ほふく茎で広がる冬芝です。初期生長が遅いため、秋の早い時期に少なめの量（10〜15g/㎡）をまき、関東では夏の高温乾燥で弱る前提で管理します。",
  conclusionBody: (
    <>
      <p>
        資料を当サイトで項目ごとに並べると、次のとおりです。埼玉県の園庭・校庭芝生マニュアルでは、ブルーグラス類を<Hl>病害に強いが高温乾燥に弱く、踏圧に比較的強い、播種による施工が一般的な冬芝</Hl>としています（出典：<a href={SAITAMA} className={A} target="_blank" rel="noopener noreferrer">埼玉県 園庭・校庭芝生マニュアル「第1章 芝生を選ぼう」（PDF）</a>、2026年11月21日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ケンタッキーブルーグラスに関する4つの基本",
  basicsIntro: (
    <p>
      以下は、3都県の資料に書かれている内容を整理したものです。
    </p>
  ),
  basicsLabel: "基本",
  basics: [
    {
      title: "地下ほふく茎で広がる",
      desc: "静岡県の芝生管理マニュアルの芝草の生育型の表では、ケンタッキーブルーグラスを地下ほふく茎の欄に分類しています。ほふく茎があると、芝生が傷んでも横から新しい芝生が伸びてくるとしています。",
    },
    {
      title: "初期生長が遅い",
      desc: "東京都教育委員会のマニュアルでは、ケンタッキーブルーグラスは初期生長が遅いとし、株型で初期生長が比較的早いペレニアルライグラスと区別しています。",
    },
    {
      title: "寒さに強く、暑さで弱る",
      desc: "東京都教育委員会のマニュアルでは寒さに強いとし、冬芝全般は平均気温25℃以上で枯れ始め、10℃以下で生長がほぼ止まるとしています。埼玉県のマニュアルでは、ブルーグラス類は高温乾燥に弱いとしています。",
    },
    {
      title: "種から育てる芝",
      desc: "埼玉県のマニュアルでは、ブルーグラス類は播種による施工が一般的とし、冬芝の種まきの適期を9月中旬〜10月初旬としています。",
    },
  ],
  stepsHeading: "ケンタッキーブルーグラスを種から育てる4つの手順",
  stepsIntro: (
    <p>
      東京都教育委員会と埼玉県のマニュアルにもとづく流れです。夏芝の上に冬芝をまくオーバーシードの場合も、時期と量の考え方は同じです。
    </p>
  ),
  steps: [
    {
      title: "9月下旬〜10月上旬に種をまく",
      desc: "東京都教育委員会のマニュアルでは、冬芝の種まきは9月下旬から10月上旬にかけてが最適で、秋分の日から体育の日（現在のスポーツの日）にかけてと覚えると便利としています。",
    },
    {
      title: "量は1㎡あたり10〜15gにする",
      desc: "東京都教育委員会の「芝生の維持管理方法」では、夏芝の上にまく場合の最適な種まきの量を、ケンタッキーブルーグラス10〜15g/㎡としています。多すぎると夏芝の芽数が減り、少なすぎると冬の間に擦り切れることがあるとしています。",
    },
    {
      title: "まいた後は乾かさない",
      desc: "東京都教育委員会の「芝生の維持管理方法」では、冬芝の種まき後2週間は毎日、朝昼夕の3回少量を散水し、その後は徐々に散水頻度を落とすとしています。",
    },
    {
      title: "春から初夏は刈り込んで夏芝に切り替える",
      desc: "東京都教育委員会のマニュアルでは、夏芝と併用する場合、4月から6月にかけて冬芝の旺盛な生長を芝刈りで抑え、地面に日光が当たるようにして夏芝の新芽を出やすくするとしています。",
    },
  ],
  ngHeading: "ケンタッキーブルーグラスで避けたいこと",
  ngs: [
    {
      title: "ペレニアルライグラスと同じ量をまくことは避けます",
      desc: "東京都教育委員会のマニュアルでは、最適な種まきの量をペレニアルライグラス30〜40g/㎡、ケンタッキーブルーグラス10〜15g/㎡と分けています。",
    },
    {
      title: "早く緑にしたい場所に単独で使うことは避けます",
      desc: "東京都教育委員会のマニュアルでは、ケンタッキーブルーグラスは初期生長が遅いとし、養生期間が短いのはペレニアルライグラスとしています。行事などで早く仕上げたい場合は、種類の選び方を見直してください。",
    },
    {
      title: "関東の夏に冬と同じ緑を期待することは避けます",
      desc: "東京都教育委員会のマニュアルでは、冬芝は夏（平均気温25℃以上）になると枯れ始めるため毎年秋に種まきするとしています。埼玉県のマニュアルでも、ブルーグラス類は高温乾燥に弱いとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>広い面積を均一にまきたい、夏芝との切り替えがうまくいかない、エアレーションや目砂などの更新作業も合わせて頼みたい</Hl>といった場合は、芝生の管理に対応する業者に相談すると作業がまとまります。依頼するときは、夏芝の上にまくのか、ケンタッキーブルーグラス単独で育てるのかを伝えてください（出典：<a href={TOKYO_KANRI} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「芝生の維持管理方法」（PDF）</a>・<a href={SHIZUOKA} className={A} target="_blank" rel="noopener noreferrer">静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」（PDF）</a>、2026年11月21日確認）。
    </p>,
    <p key="2">
      冬芝の種まき全般は<Link href="/shibafu-tanemaki/" className={A}>芝生の種まき</Link>、夏芝の性質は<Link href="/bermudagrass/" className={A}>バミューダグラスの特徴と管理</Link>と<Link href="/centipedegrass/" className={A}>センチピードグラスの特徴と管理</Link>、日常の手入れは<Link href="/shibafu-teire/" className={A}>芝生の手入れの基本</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "夏芝との組み合わせを含めて相談する",
  ctaText:
    "ケンタッキーブルーグラスは、9月下旬〜10月上旬に10〜15g/㎡を目安にまき、乾かさずに育てるのが基本です。広い芝生は業者と相談すると安心です。",
  faqHeading: "ケンタッキーブルーグラスのよくある質問",
  faqs: [
    {
      q: "ケンタッキーブルーグラスは夏芝ですか、冬芝ですか？",
      a: "静岡県のマニュアルでは、ケンタッキーブルーグラスを寒地型芝草（冬芝）に分類しています。東京都教育委員会のマニュアルでは、冬芝は主に10月から7月にかけて冬の間も緑色を保つとしています。",
    },
    {
      q: "種まきはいつがよいですか？",
      a: "東京都教育委員会のマニュアルでは、冬芝の種が発芽するには平均気温で15℃以上が必要で、最適な種まきの時期は9月下旬から10月上旬としています。埼玉県のマニュアルでは、冬芝の種まきの適期を9月中旬〜10月初旬としています。",
    },
    {
      q: "1㎡にどのくらい種をまけばよいですか？",
      a: "東京都教育委員会の「芝生の維持管理方法」では、夏芝の上にまく場合の最適な量をケンタッキーブルーグラス10〜15g/㎡としています。ペレニアルライグラスとインターミディエイトライグラスは30〜40g/㎡です。",
    },
    {
      q: "踏まれても大丈夫ですか？",
      a: "埼玉県のマニュアルでは、ブルーグラス類は踏圧に比較的強いとしています。静岡県のマニュアルでは地下ほふく茎の欄に分類しており、ほふく茎がある芝草は傷んでも横から新しい芝生が伸びてくるとしています。",
    },
  ],
  related: [
    {
      href: "/shibafu-tanemaki/",
      label: "芝生の種まき",
      desc: "冬芝の時期と手順",
    },
    {
      href: "/bermudagrass/",
      label: "バミューダグラスの特徴と管理",
      desc: "高温に強い夏芝",
    },
    {
      href: "/centipedegrass/",
      label: "センチピードグラスの特徴と管理",
      desc: "手間の少ない夏芝",
    },
    {
      href: "/shibafu-teire/",
      label: "芝生の手入れの基本",
      desc: "芝刈り・水やり・肥料",
    },
  ],
};

export default function KentuckyBluegrassPage() {
  return <KnowArticle data={data} />;
}
