import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/noshiba-teire/";
const A = "text-[#2D7F3E] underline";
const SAITAMA = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20202.pdf";
const YOKOHAMA = "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/midori-koen/midori_up/3ryokuka/hoikuentouryokuka.files/0017_20240206.pdf";
const SHIZUOKA = "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/turfmaintenancemanual.pdf";
const TOKYO = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual06";

export const metadata: Metadata = {
  title: {
    absolute: "野芝（ノシバ）の手入れ｜踏まれに強いが、すり減ると回復が遅い日本の芝。傷みは早めに養生する｜お庭のミカタ",
  },
  description:
    "野芝（ノシバ）の特徴と手入れの目安を、埼玉県の園庭・校庭芝生マニュアル、横浜市の校庭・園庭芝生管理マニュアル、静岡県の芝生管理マニュアル、東京都教育委員会の資料をもとに整理しました。コウライシバ・バミューダグラスとの違いも並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "野芝（ノシバ）の手入れ",
    description:
      "埼玉県のマニュアルでは、ノシバは踏圧・乾燥・病害虫に比較的強く、芝刈り回数は比較的少ない一方、いったん摩耗すると回復は遅いとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "埼玉県（芝生の種類と特徴）", item: "性質", note: "踏圧、高温・低温、乾燥、病害虫等に比較的強い。やせ地でも生育しやすい。葉幅は広く、芝刈り回数は比較的少ない。踏圧に強いが、いったん摩耗すると回復は遅い。張り芝（マット/ロール）による施工が一般的" },
  { src: "埼玉県（夏芝の比較イメージ）", item: "3種の夏芝との比較", note: "生長力：バミューダグラス＞ノシバ＞コウライシバ。擦り切れの強さ：ノシバ＞バミューダグラス＞コウライシバ。水枯れへの強さ：ノシバ・コウライシバ＞バミューダグラス。葉の繊細さ・美しさ：バミューダグラス・コウライシバ＞ノシバ" },
  { src: "横浜市（草種の特性）", item: "管理のポイント", note: "日本列島に自生する芝草。ティフトン419に比べると損傷からの回復力が劣るため、冬眠中の利用制限や回復のための養生期間を確保することが望まれる。芝刈りや施肥の頻度はティフトン419より少ないと言われる" },
  { src: "静岡県（芝草研究所の試験）", item: "よく使われる場所での結果", note: "1人あたりの面積が狭い保育所でバミューダグラスとノシバを比べた試験で、翌春のノシバの芽出しが悪く、2年以内にノシバは消滅した" },
  { src: "東京都教育委員会（芝生の異常）", item: "病気", note: "春先や秋口に丸く茶色くなるラージパッチは、特にノシバやコウライシバで発生しやすい傾向がある" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">ノシバについての記載</th>
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
      2026年11月28日に、埼玉県「園庭・校庭芝生マニュアル」第1章 芝生を選ぼう、横浜市「校庭・園庭芝生管理マニュアル」、静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」、東京都教育委員会「芝生の異常──こんな時は？」を開き、ノシバに触れている箇所を当サイトで1つの表にまとめました。いずれも園庭・校庭向けの資料で、家庭の庭より踏まれる頻度が高い場所を前提にしています。
    </p>
  </div>
);

const YEAR: { season: string; work: string }[] = [
  { season: "3月下旬〜5月", work: "休眠から目覚めて新芽が出る時期。芝刈りで刈り揃えて日光を均等に当て、肥料と水を与えます" },
  { season: "6月〜8月", work: "生育が最も旺盛な時期。伸び過ぎないように芝刈りし、日照りが続いたら土が濡れて色が変わるくらい散水します" },
  { season: "9月〜11月", work: "養分を蓄える時期。10月下旬頃にその年の最後の芝刈りを行い、少し伸びた状態で冬を迎えます" },
  { season: "12月〜2月", work: "休眠中。雨のない日が続いたときの散水と、削れた場所に立ち入らないようにする養生が中心です" },
];

const yearTable = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">時期</th>
          <th className="border px-2 py-2 text-left">主な作業（横浜市マニュアルの季節の管理から）</th>
        </tr>
      </thead>
      <tbody>
        {YEAR.map((r) => (
          <tr key={r.season}>
            <td className="border px-2 py-2">{r.season}</td>
            <td className="border px-2 py-2">{r.work}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      横浜市のマニュアルの季節ごとの管理はティフトン419（バミューダグラス）を対象にしたものです。同マニュアルは、ノシバ・コウライシバも夏に旺盛に生育する暖地型芝草なので、ティフトン419と同じように芝刈・施肥・散水を行うとしています。芝刈りや施肥の回数はティフトン419より少ないと言われるため、表では回数を省いています。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "noshiba-teire",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "野芝（ノシバ）の手入れ｜踏まれに強いが、すり減ると回復が遅い日本の芝。傷みは早めに養生する",
  breadcrumbLabel: "野芝（ノシバ）の手入れ",
  tagChips: ["野芝", "ノシバ", "日本芝", "夏芝", "芝生の手入れ"],
  ldHeadline: "野芝（ノシバ）の手入れ｜踏まれに強いが、すり減ると回復が遅い日本の芝。傷みは早めに養生する",
  ldDescription:
    "野芝（ノシバ）の特徴と手入れの目安を、埼玉県・横浜市・静岡県・東京都教育委員会の芝生管理資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        野芝（ノシバ）は、日本に自生する夏芝です。埼玉県の園庭・校庭芝生マニュアルは、ノシバを<Hl>踏圧、高温・低温、乾燥、病害虫等に比較的強く、やせ地でも生育しやすい</Hl>芝とし、<Hl>芝刈り回数は比較的少ない</Hl>一方で、<Hl>踏圧に強いが、いったん摩耗すると回復は遅い</Hl>としています（出典：<a href={SAITAMA} className={A} target="_blank" rel="noopener noreferrer">埼玉県 園庭・校庭芝生マニュアル「第1章 芝生を選ぼう」（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        手入れの要点は、芝刈り・施肥・散水を夏芝の時期に合わせて行うことと、<Hl>傷んだ場所を早めに見つけて休ませること</Hl>です。本記事では4つの公的資料を並べ、家庭の庭に当てはめるときの目安を整理します。
      </p>
    </>
  ),
  conclusionTitle: "野芝は手間の少ない芝ですが、すり減った部分の回復は遅い芝です。芝刈りは春から秋に行い、薄くなった場所はすぐに立ち入りを控えて養生します。",
  conclusionBody: (
    <>
      <p>4つの資料でノシバに触れている箇所を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        資料を並べると、ノシバは<Hl>「傷みにくいが、傷むと戻りにくい」</Hl>という点で一致しています（当サイトの整理）。横浜市のマニュアルも、芝刈りや施肥の頻度が少ない代わりに、<Hl>芝生を注意深く観察し、傷んできたらすぐに養生を行うことが管理のポイント</Hl>としています（<a href={YOKOHAMA} className={A} target="_blank" rel="noopener noreferrer">横浜市 校庭・園庭芝生管理マニュアル（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  basicsHeading: "野芝を手入れする前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "日本に自生する夏芝",
      desc: "横浜市は、ノシバ・コウライシバを日本列島に自生する芝草とし、夏に旺盛に生育する暖地型芝草としています。冬は休眠して茶色くなります。",
    },
    {
      title: "芝刈りの回数は比較的少ない",
      desc: "埼玉県は、ノシバの葉幅は広く、芝刈り回数は比較的少ないとしています。生長力はバミューダグラスより弱く、コウライシバより強いという比較です。",
    },
    {
      title: "すり減ると回復が遅い",
      desc: "埼玉県は、踏圧に強いが、いったん摩耗すると回復は遅いとしています。横浜市も、損傷からの回復力はティフトン419に劣るとしています。",
    },
    {
      title: "張り芝で植えるのが一般的",
      desc: "埼玉県のマニュアルは、ノシバは張り芝（マット/ロール）による施工が一般的としています。種から育てる方法は主に冬芝で用いられます。",
    },
  ],
  stepsHeading: "野芝の手入れ4つの手順",
  stepsIntro: (
    <>
      <p>横浜市のマニュアルの季節ごとの管理を、ノシバに当てはめた流れです。</p>
      {yearTable}
    </>
  ),
  steps: [
    {
      title: "春の芽出しに合わせて刈り揃える",
      desc: "横浜市は、夏芝は一日の最高気温が3〜4日連続して15℃を超える頃（横浜の平年では3月下旬）に新しい芽を出し始めるとしています。芽が出そろったら刈り揃え、肥料と水を与えます。",
    },
    {
      title: "夏は伸び過ぎる前に刈る",
      desc: "梅雨明け頃に生育がピークになります。伸びた芝を刈らずにおくと、ひょろ長く伸びて枯れる株が出て密度が下がると横浜市は説明しています。",
    },
    {
      title: "秋は最後の芝刈りで冬に備える",
      desc: "横浜市は、概ね10月下旬にその年の最後の芝刈りを行い、少し伸びたぐらいで冬を迎えるのが理想的としています。",
    },
    {
      title: "薄くなった場所は立ち入りを控える",
      desc: "ノシバは回復が遅いため、地面が見えてきた場所は早めに歩かないようにして休ませます。横浜市は、特に冬眠中の利用制限と、回復のための養生期間の確保を求めています。",
    },
  ],
  ngHeading: "野芝の手入れで避けたいこと",
  ngs: [
    {
      title: "傷んだ場所を踏み続けることは避けます",
      desc: "埼玉県は、ノシバはいったん摩耗すると回復は遅いとしています。休眠中の冬は特に回復しません。",
    },
    {
      title: "毎日走り回る場所への全面使用は慎重にします",
      desc: "静岡県芝草研究所の保育所での試験では、ノシバは翌春の芽出しが悪く、2年以内に消滅しました。子どもが毎日走り回る庭など、強く使う場所では向き不向きを確かめてから選んでください（静岡県のマニュアルはこの用途にバミューダグラスの品種を勧めています）。",
    },
    {
      title: "春秋の丸い茶色を放置しないようにします",
      desc: "東京都教育委員会は、春先や秋口に丸い形で茶色くなるラージパッチは、特にノシバやコウライシバで発生しやすい傾向があるとしています。水はけを確かめてください。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      広い面積の芝刈りや、張り替え・補修をまとめて行いたい場合は、造園業者や芝生の管理業者に相談してください。「ノシバの庭で、薄くなった部分の補修を相談したい」と芝の種類を伝えると、補修に使う芝の選び方を共有しやすくなります。試験の内容は<a href={SHIZUOKA} className={A} target="_blank" rel="noopener noreferrer">静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」（PDF）</a>、ラージパッチは<a href={TOKYO} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「芝生の異常──こんな時は？」（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      芝生全般の手入れは<Link href="/shibafu-teire/" className={A}>芝生の手入れの基本</Link>、夏芝と冬芝の違いは<Link href="/shibafu-towa/" className={A}>芝生とは</Link>、ほかの夏芝は<Link href="/bermudagrass/" className={A}>バミューダグラスの特徴と管理</Link>、張り替えは<Link href="/shibafu-harikae/" className={A}>芝生の張り替え</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "野芝の手入れを業者に相談する",
  ctaText: "広い芝生の芝刈りや、薄くなった部分の補修は、業者に任せると安心です。",
  faqHeading: "野芝の手入れでよくある質問",
  faqs: [
    {
      q: "野芝とコウライシバはどう違いますか？",
      a: "埼玉県のマニュアルの比較では、生長力と擦り切れの強さはノシバの方が上、葉の繊細さ・美しさはコウライシバの方が上です。水枯れへの強さは同程度としています。",
    },
    {
      q: "野芝の芝刈りはいつからいつまでですか？",
      a: "横浜市のマニュアルでは、夏芝は3月下旬頃に芽を出し始め、概ね10月下旬にその年の最後の芝刈りを行うとしています。",
    },
    {
      q: "野芝は手入れが楽ですか？",
      a: "埼玉県は、芝刈り回数は比較的少ないとしています。ただし、すり減ると回復は遅いため、傷んだ場所をこまめに見る手間はかかります。",
    },
    {
      q: "野芝は種から育てられますか？",
      a: "埼玉県のマニュアルでは、ノシバは張り芝（マット/ロール）による施工が一般的としています。",
    },
  ],
  related: [
    { href: "/shibafu-teire/", label: "芝生の手入れの基本", desc: "芝刈り・水やり・年間管理" },
    { href: "/shibafu-towa/", label: "芝生とは", desc: "夏芝と冬芝の違い" },
    { href: "/bermudagrass/", label: "バミューダグラスの特徴と管理", desc: "回復力の強い夏芝" },
    { href: "/large-patch/", label: "ラージパッチ", desc: "ノシバに出やすい芝生の病気" },
  ],
};

export default function NoshibaTeirePage() {
  return <KnowArticle data={data} />;
}
