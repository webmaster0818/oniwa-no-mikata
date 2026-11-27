import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shibafu-4gatsu-teire/";
const A = "text-[#2D7F3E] underline";
const SAITAMA5 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20206.pdf";
const TOKYO_KEIKAKU = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual07";
const YOKOHAMA_KISETSU = "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/midori-koen/midori_up/3ryokuka/hoikuentouryokuka.files/0017_20240206.pdf";
const SHIZUOKA = "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/turfmaintenancemanual.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芝生の4月の手入れ｜緑になったら芝刈り・肥料・除草を始める。張り替えや補修もこの時期から｜お庭のミカタ",
  },
  description:
    "夏芝の4月の手入れを、埼玉県・東京都教育委員会・横浜市・静岡県の芝生管理マニュアルをもとに整理しました。芝刈りの始め方、最初の肥料、春の雑草、張り替え・補修の時期をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芝生の4月の手入れ",
    description:
      "4月は夏芝が緑になり、手入れが始まる時期です。伸びを見て芝刈りを始め、最初の肥料を与え、春の雑草は根から抜きます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "埼玉県", item: "4〜5月の状態", note: "芝生が緑色になってくる。維持管理作業の始まり" },
  { src: "埼玉県", item: "4〜5月の作業", note: "芝張り・張り替え・補修はこの時期から。芝刈りは生長をみながら月に4〜5回。乾燥が続けば多めに散水。施肥は月1回。除草はこまめに。エアレーションはこの時期に行う" },
  { src: "東京都教育委員会", item: "年間計画例（夏芝のみ）", note: "芝刈り回数は4月1回、5月2回、6月3回、7〜9月は各4回" },
  { src: "横浜市", item: "春（3〜5月）の目安", note: "ティフトン419は最高気温が3〜4日続けて15℃を超える頃（横浜の平年では3月下旬）に新しい芽を出し始める。芝刈りは10〜14日に1回以上、肥料は月1回。3〜4月は散水の必要がない場合が多い" },
  { src: "静岡県", item: "最初の肥料", note: "芽出しし、葉が緑になりだした2週間後ぐらいから開始。3月下旬〜4月上旬頃が1回目の散布時期（バミューダグラス）" },
  { src: "埼玉県", item: "春の雑草", note: "シロツメクサ（3〜4月）、スズメノカタビラ（3〜4月）、メヒシバ（4〜5月）。発生初期に根っこから除草するのが効果的" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
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
      2026年11月25日に、埼玉県 芝生化マニュアル 第5章 維持管理をしよう、東京都教育委員会「年間の維持管理活動の計画例」、横浜市環境創造局「校庭・園庭芝生管理マニュアル」（季節ごとの管理）、静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」を開き、4月の手入れに関する記載を当サイトで並べました。いずれも夏芝の園庭・校庭向けの資料で、芝の種類と地域によって時期は前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shibafu-4gatsu-teire",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "芝生の4月の手入れ｜緑になったら芝刈り・肥料・除草を始める。張り替えや補修もこの時期から",
  breadcrumbLabel: "芝生の4月の手入れ",
  tagChips: ["芝生", "4月", "春の手入れ", "芝刈り", "肥料"],
  ldHeadline: "芝生の4月の手入れ｜緑になったら芝刈り・肥料・除草を始める。張り替えや補修もこの時期から",
  ldDescription:
    "夏芝の4月の手入れを、埼玉県・東京都教育委員会・横浜市・静岡県の芝生管理マニュアルをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        4月は、冬に茶色だった夏芝が緑に戻り、<Hl>芝刈り・肥料・除草の手入れを始める時期</Hl>です。埼玉県のマニュアルは4〜5月を「芝生が緑色になってきます。維持管理作業の始まりです」とし、芝張り・張り替え・補修もこの時期から行うとしています（出典：<a href={SAITAMA5} className={A} target="_blank" rel="noopener noreferrer">埼玉県 芝生化マニュアル 第5章 維持管理をしよう（PDF）</a>、2026年11月25日確認）。
      </p>
      <p>
        最初の肥料は、静岡県のマニュアルが<Hl>葉が緑になりだした2週間後ぐらい、3月下旬〜4月上旬頃</Hl>を1回目としています（出典：<a href={SHIZUOKA} className={A} target="_blank" rel="noopener noreferrer">静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "4月は、芝の伸びを見て刈り始め、緑になったら肥料を与え、春の雑草は小さいうちに根から抜きます。はげた所の補修や張り替えもこの時期に始められます。",
  conclusionBody: (
    <>
      <p>
        4つの資料の4月前後の記載を並べると、次のとおりです。
      </p>
      {table}
      <p className="mt-4">
        芝刈りの回数は、東京都の計画例が4月1回、埼玉県が4〜5月で月4〜5回、横浜市が10〜14日に1回以上と、資料によって差があります。どれも「芝の生長を見ながら」が前提で、<Hl>4月の初めは伸びがゆっくりなので少なめ、伸びてきたら回数を増やす</Hl>と考えると、3つの記載がつながります（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "4月の芝生について知っておきたい4つのこと",
  basicsIntro: <p>以下は、4つのマニュアルに書かれている内容を整理したものです。</p>,
  basicsLabel: "ポイント",
  basics: [
    {
      title: "芽が動き出す目安は気温",
      desc: "横浜市は、ティフトン419が最高気温3〜4日連続15℃超の頃（横浜の平年で3月下旬）に新しい芽を出し始めるとしています。",
    },
    {
      title: "張り替え・補修はこの時期から",
      desc: "埼玉県は、芝張り、張り替え・補修などは芝生が活動を始める4〜5月から行うとしています。",
    },
    {
      title: "春の雨で水やりは控えめでよいことが多い",
      desc: "横浜市は、3〜4月は定期的に雨が降るので散水の必要がない場合が多いとしています。埼玉県は、雨が少なく乾燥が続く場合は多めに散水するとしています。",
    },
    {
      title: "春の雑草が出始める",
      desc: "埼玉県は、シロツメクサとスズメノカタビラを3〜4月、メヒシバを4〜5月の雑草として挙げ、発生初期に根から除草するのが効果的としています。",
    },
  ],
  stepsHeading: "4月の芝生の手入れ4つの手順",
  stepsIntro: <p>4つのマニュアルの記載にもとづく流れです。</p>,
  steps: [
    {
      title: "緑になり始めたら、最初の肥料",
      desc: "静岡県は、葉が緑になりだした2週間後ぐらい（3月下旬〜4月上旬頃）を1回目の肥料の時期としています。埼玉県・横浜市は、春の施肥を月1回としています。",
    },
    {
      title: "伸びてきたら芝刈りを始める",
      desc: "横浜市は、刈り揃えることで芝生に均等に日光を当てるとして、10〜14日に1回以上を挙げています。最初は少なめに、伸びに合わせて回数を増やします。",
    },
    {
      title: "春の雑草を根から抜く",
      desc: "シロツメクサやスズメノカタビラは、広がる前に根から取り除きます。埼玉県は、抜いたあとの穴は目砂で埋めるとよいとしています。",
    },
    {
      title: "固い所はエアレーション、はげた所は補修",
      desc: "埼玉県は、エアレーションは芝が活動を始める4〜5月に行うとし、芝張り・補修もこの時期から行うとしています。",
    },
  ],
  ngHeading: "4月の芝生の手入れで避けたいこと",
  ngs: [
    {
      title: "まだ茶色いうちに肥料を急ぐことは避けます",
      desc: "静岡県は、葉が緑になりだした2週間後ぐらいから施肥を開始するとしています。",
    },
    {
      title: "雨が続いている時期の水のやりすぎは避けます",
      desc: "横浜市は、3〜4月は定期的に雨が降るので散水の必要がない場合が多いとしています。土の乾き具合を見て与えます。",
    },
    {
      title: "雑草が広がってから一度に抜くことは避けます",
      desc: "埼玉県は、発生初期に根っこから除草するのが効果的としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>冬の間にはげた部分が広い、張り替えを考えている、エアレーションの道具がない</Hl>ときは、芝生の手入れや張り替えを扱う業者に相談してください。4〜5月は芝が活動を始める時期なので、補修や張り替えの相談を始めやすい時期です。
    </p>,
    <p key="2">
      1年の流れは<Link href="/shibafu-teire/" className={A}>芝生の手入れの基本</Link>、芝刈りの回数は<Link href="/shibakari-jiki/" className={A}>芝刈りの時期</Link>、肥料の量は<Link href="/shibafu-hiryo/" className={A}>芝生の肥料</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "春の芝生の手入れを業者に相談する",
  ctaText: "冬明けの芝生の補修・張り替えやエアレーションは、業者に任せると安心です。",
  faqHeading: "芝生の4月の手入れでよくある質問",
  faqs: [
    {
      q: "4月に芝刈りは必要ですか？",
      a: "東京都教育委員会の計画例（夏芝のみ）は4月の芝刈りを1回としています。埼玉県は4〜5月を月4〜5回、横浜市は春を10〜14日に1回以上としています。芝の伸びを見て、伸びてきたら刈り始めます。",
    },
    {
      q: "4月に肥料はやるべきですか？",
      a: "静岡県は、3月下旬〜4月上旬頃を1回目の肥料の時期としています。埼玉県と横浜市は、春の施肥を月1回としています。",
    },
    {
      q: "4月に芝生を張り替えてもよいですか？",
      a: "埼玉県は、芝張り、張り替え・補修などは芝生が活動を始める4〜5月から行うとしています。",
    },
    {
      q: "4月は水やりが必要ですか？",
      a: "横浜市は、3〜4月は定期的に雨が降るので散水の必要がない場合が多いとしています。埼玉県は、雨が少なく乾燥が続く場合は地面に十分しみ込むくらい多めに散水するとしています。",
    },
  ],
  related: [
    { href: "/shibafu-teire/", label: "芝生の手入れの基本", desc: "1年の流れ" },
    { href: "/shibakari-jiki/", label: "芝刈りの時期", desc: "月ごとの回数" },
    { href: "/shibafu-hiryo/", label: "芝生の肥料", desc: "量と時期の目安" },
    { href: "/haru-niwa-checklist/", label: "春の庭仕事チェックリスト", desc: "冬明けの作業" },
    { href: "/5gatsu-zasso/", label: "5月の雑草", desc: "5月に目立つ雑草と草取り" },
  ],
};

export default function Shibafu4gatsuTeirePage() {
  return <KnowArticle data={data} />;
}
