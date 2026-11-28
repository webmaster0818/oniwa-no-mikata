import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/bermudagrass/";
const A = "text-[#2D7F3E] underline";
const SAITAMA = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20202.pdf";
const SHIZUOKA = "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/turfmaintenancemanual.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "バミューダグラスの特徴と管理｜高温に強く日陰・寒さに弱い夏芝、刈高5cmなら7〜10日に1回｜お庭のミカタ",
  },
  description:
    "バミューダグラス（ティフトン芝など）の特徴と管理を、埼玉県の園庭・校庭芝生マニュアルと静岡県のバミューダグラス芝生管理マニュアルをもとにまとめました。高温に強く回復力がある一方、日陰と寒さに弱く、冬は休眠して茶色くなります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "バミューダグラスの特徴と管理",
    description:
      "バミューダグラスの長所と短所、刈高と刈り込み頻度、施肥の目安を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; bermuda: string; korai: string; noshiba: string }[] = [
  { item: "生長力", bermuda: "最も強い", korai: "3種のうち最も弱い", noshiba: "中間" },
  { item: "擦り切れの強さ", bermuda: "中間", korai: "3種のうち最も弱い", noshiba: "最も強い" },
  { item: "水枯れへの強さ", bermuda: "コウライシバ・ノシバより弱い", korai: "強い", noshiba: "強い" },
  { item: "葉の繊細さ・美しさ", bermuda: "コウライシバと同じく高い", korai: "高い", noshiba: "3種のうち最も低い" },
  { item: "主な施工方法", bermuda: "ポット苗", korai: "張り芝（マット/ロール）", noshiba: "張り芝（マット/ロール）" },
  { item: "主な用途", bermuda: "校庭・競技場", korai: "園庭・個人庭園", noshiba: "記載なし" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">バミューダグラス</th>
          <th className="border px-2 py-2 text-left">コウライシバ</th>
          <th className="border px-2 py-2 text-left">ノシバ</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.bermuda}</td>
            <td className="border px-2 py-2">{r.korai}</td>
            <td className="border px-2 py-2">{r.noshiba}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に埼玉県の園庭・校庭芝生マニュアル「第1章 芝生を選ぼう」の「芝生の種類と特徴」の表と「夏芝の比較イメージ」を開き、3種の夏芝の記載を当サイトで項目ごとに並べ替えました。順位は同マニュアルの不等号による比較で、数値による評価ではありません。「記載なし」はマニュアルに書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "bermudagrass",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "バミューダグラスの特徴と管理｜高温に強く日陰・寒さに弱い夏芝、刈高5cmなら7〜10日に1回",
  breadcrumbLabel: "バミューダグラス",
  tagChips: ["バミューダグラス", "ティフトン芝", "夏芝", "芝生", "芝刈り"],
  ldHeadline: "バミューダグラスの特徴と管理｜高温に強く日陰・寒さに弱い夏芝、刈高5cmなら7〜10日に1回",
  ldDescription:
    "バミューダグラスの特徴、コウライシバ・ノシバとの違い、刈高と刈り込み頻度、施肥の目安を、埼玉県と静岡県の芝生管理マニュアルをもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        バミューダグラスは、暖かい季節に育つ夏芝の一種です。埼玉県の園庭・校庭芝生マニュアルは、<Hl>校庭や競技場に多く利用され、高温に強く、夏芝の中で最も繁殖力が強い</Hl>一方、<Hl>日陰、寒さに弱い</Hl>、<Hl>生長が早いため刈込みや散水・施肥が比較的多く必要</Hl>としています（出典：<a href={SAITAMA} className={A} target="_blank" rel="noopener noreferrer">埼玉県 園庭・校庭芝生マニュアル「第1章 芝生を選ぼう」（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        本記事では、このマニュアルと静岡県の「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」を照合し、庭でバミューダグラスを検討する方向けに、特徴と管理の目安を整理します。2つの資料は園庭・校庭向けのため、家庭の庭では目安としてお読みください。
      </p>
    </>
  ),
  conclusionTitle: "バミューダグラスは日当たりがよく、よく使う庭に向く芝です。生長が早いぶん芝刈りと施肥の回数が多くなり、日陰では育ちにくい点に注意します。",
  conclusionBody: (
    <>
      <p>
        埼玉県のマニュアルの比較を当サイトで項目ごとに並べると、次のとおりです。静岡県のマニュアルは、バミューダグラスには地上と地下の両方にほふく茎があり、ほかの芝草に比べ生育速度が速いため、ダメージからの回復に優れているとしています（出典：<a href={SHIZUOKA} className={A} target="_blank" rel="noopener noreferrer">静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」（PDF）</a>、2026年11月21日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "バミューダグラスの4つの特徴",
  basicsIntro: (
    <p>
      以下は、2つのマニュアルに書かれている内容を整理したものです。
    </p>
  ),
  basicsLabel: "特徴",
  basics: [
    {
      title: "踏まれても回復しやすい",
      desc: "埼玉県のマニュアルでは、踏圧・擦り切れからの回復力があるとしています。静岡県のマニュアルでは、地上と地下のほふく茎が横に広がるため、適切な管理を続ければ一部がなくなっても横から伸びて復活するとしています。",
    },
    {
      title: "冬は休眠して茶色くなる",
      desc: "静岡県のマニュアルでは、暖地型芝草は冬は休眠して茶色く変色するとしています。1年を通して緑を保つには、寒地型芝草の種をまくウィンターオーバーシードという方法があるとしています。",
    },
    {
      title: "日照が1日6〜8時間必要",
      desc: "静岡県のマニュアルでは、通常1日6〜8時間の日照時間が必要になるとしています。埼玉県のマニュアルでも、日陰に弱いとしています。",
    },
    {
      title: "ポット苗で植えるのが一般的",
      desc: "埼玉県のマニュアルでは、ポット苗による施工が一般的としています。静岡県のマニュアルでは、ポット苗を50cm間隔で植え付ける方法を勧めています。",
    },
  ],
  stepsHeading: "刈り込みと施肥の4つの目安",
  stepsIntro: (
    <p>
      静岡県のマニュアル（園庭・校庭向け）に書かれている数字です。家庭の庭でも、刈り込みの間隔を決める目安になります。
    </p>
  ),
  steps: [
    {
      title: "刈高は5cmに設定する",
      desc: "園庭・校庭でバミューダグラスを管理する場合、刈高を5cmに設定するとしています。低くしたい場合は、5cmで2〜3年管理して経験を積んでから徐々に下げるとしています。",
    },
    {
      title: "草丈の3分の1以上を一度に刈らない",
      desc: "3分の1ルールとして、刈り込みが必要になる草丈の上限を「刈高×1.5」としています。刈高5cmなら、7.5cmになる前に刈り込みます。",
    },
    {
      title: "刈高51mmなら7〜10日ごとに刈る",
      desc: "マニュアルの表では、刈高51mmで7〜10日ごと、76mmで10〜14日ごと、25mmで4〜5日ごとを刈り込み頻度の参考としています。7〜8月の刈り込みの目安は週2回としています。",
    },
    {
      title: "肥料は量を計算してまく",
      desc: "バミューダグラスの維持管理には年間に20〜60g/㎡の窒素が必要で、園庭・校庭では年間窒素量30g/㎡が目安としています。計算なしの施肥はNGとし、1㎡あたりの養分量を計算するよう求めています。",
    },
  ],
  ngHeading: "バミューダグラスの管理で避けたいこと",
  ngs: [
    {
      title: "伸び切ってから一度に短く刈ることは避けます",
      desc: "静岡県のマニュアルでは、芝生が10cmぐらいに伸び切ってから刈る管理を良くない例に挙げ、できるだけ頻度を高くして刈り込むことを勧めています。",
    },
    {
      title: "日当たりの悪い場所に植えることは避けます",
      desc: "埼玉県のマニュアルでは日陰に弱いとし、静岡県のマニュアルでは通常1日6〜8時間の日照時間が必要としています。",
    },
    {
      title: "水やりを控えすぎることは避けます",
      desc: "埼玉県のマニュアルの比較では、水枯れへの強さはコウライシバ・ノシバの方がバミューダグラスより上としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>庭を芝生にしたいが日当たりが足りるか分からない、広い面積を植えたい、今の芝から張り替えたい</Hl>といった場合は、造園業者に相談すると作業がまとまります。依頼するときは、1日に何時間日が当たるか、庭をどの程度使うかを伝えると、芝の種類を選ぶ材料になります。
    </p>,
    <p key="2">
      芝刈りの月ごとの回数は<Link href="/shibakari-jiki/" className={A}>芝刈りの時期</Link>、肥料の考え方は<Link href="/shibafu-hiryo/" className={A}>芝生の肥料</Link>、天然芝と人工芝の比較は<Link href="/jinkoshiba-tennenshiba/" className={A}>人工芝と天然芝の比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "日当たりと使い方を伝えて相談する",
  ctaText:
    "バミューダグラスは高温と踏圧に強い一方、日陰と寒さに弱く、刈り込みの回数が多い芝です。植える前に日当たりと手入れの頻度を業者と確認すると安心です。",
  faqHeading: "バミューダグラスのよくある質問",
  faqs: [
    {
      q: "バミューダグラスとティフトン芝は同じですか？",
      a: "埼玉県のマニュアルでは、バミューダグラス類の代表としてティフトン419を挙げています。静岡県のマニュアルでは、バミューダグラス（芝種）のうちティフ419またはリビエラ（品種）を使用するとしています。",
    },
    {
      q: "バミューダグラスを植える時期はいつですか？",
      a: "埼玉県のマニュアルでは、夏芝の植付けの適期を3月下旬〜6月下旬としています。静岡県のマニュアルでは、ポット苗作成の時期として5月上旬から中旬を挙げ、作成は植え付けの1ヶ月前には開始するとしています。",
    },
    {
      q: "冬に茶色くなったのは枯れたのですか？",
      a: "静岡県のマニュアルでは、暖地型芝草は冬は休眠して茶色く変色するとしています。冬に茶色くなること自体は休眠によるものです。",
    },
    {
      q: "種から育てられますか？",
      a: "静岡県のマニュアルでは、直接の播種は、発芽して芝生がある程度の大きさに生長するまで地表面を乾かさないように定期的な散水が必要で、管理が大変なためお奨めできないとし、種子もセルポットに植え付けてポット苗にする方法を示しています。",
    },
  ],
  related: [
    {
      href: "/shibafu-towa/",
      label: "芝生とは",
      desc: "夏芝と冬芝の違い",
    },
    {
      href: "/kentucky-bluegrass/",
      label: "ケンタッキーブルーグラスの特徴",
      desc: "寒さに強い冬芝",
    },
    {
      href: "/shibakari-jiki/",
      label: "芝刈りの時期",
      desc: "月ごとの刈り込み回数の目安",
    },
    {
      href: "/shibafu-teire/",
      label: "芝生の手入れの基本",
      desc: "芝刈り・水やり・年間管理",
    },
    {
      href: "/shibafu-hiryo/",
      label: "芝生の肥料",
      desc: "施肥の時期と量",
    },
    {
      href: "/centipedegrass/",
      label: "センチピードグラスの特徴と植え方",
      desc: "寒さに弱く低く刈ると消える",
    },
    { href: "/noshiba-teire/", label: "野芝（ノシバ）の手入れ", desc: "比べられることの多い日本の夏芝" },
    { href: "/shibafu-pot-nae/", label: "芝生のポット苗の植え方", desc: "植え付け時期と間隔" },
  ],
};

export default function BermudagrassPage() {
  return <KnowArticle data={data} />;
}
