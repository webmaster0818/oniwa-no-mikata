import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shibafu-pot-nae/";
const A = "text-[#2D7F3E] underline";
const SAITAMA_4 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20205.pdf";
const SAITAMA_1 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20202.pdf";
const SHIZUOKA = "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/turfmaintenancemanual.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芝生のポット苗の植え方｜植え付けは4〜7月、梅雨までが適期。30cmか50cm間隔で植え、2〜3週間は乾かさない｜お庭のミカタ",
  },
  description:
    "芝生のポット苗の植え付け時期・間隔・必要な数と、植えた後の水やりを、埼玉県の園庭・校庭芝生マニュアル（第4章 芝生を張ろう）と静岡県のバミューダグラス芝生管理マニュアルをもとに整理しました。ポット苗の作り方も並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芝生のポット苗の植え方",
    description:
      "埼玉県のマニュアルは、ポット苗の植付け時期を4〜7月、梅雨時期（6月上旬〜7月下旬）までを適期とし、間隔を30cm（1,100ポット/100㎡）または50cm（400ポット/100㎡）としています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; saitama: string; shizuoka: string }[] = [
  { item: "向いている芝", saitama: "主にバミューダグラス（ティフトン芝等）で多く用いられる。コウライシバ・ノシバは張り芝、冬芝は播種が多い", shizuoka: "バミューダグラス（ティフ419・リビエラ）。施工方法の中でポット苗を植え付ける方法を勧める" },
  { item: "植え付け時期", saitama: "4〜7月。梅雨時期（6月上旬〜7月下旬）までが適期", shizuoka: "梅雨が明ける前の6〜7月。6〜8月なら植え付けから1か月ほどで一面緑になる" },
  { item: "植え付け間隔", saitama: "30cm間隔（1,100ポット/100㎡）または50cm間隔（400ポット/100㎡）", shizuoka: "50cm間隔。目安の線を引いておくと見た目がきれい（トンボに50cm間隔で釘を付けて引く）" },
  { item: "植えた後", saitama: "植付け後の作業として、圧着（土壌と芝生を定着させる）と目砂（凸凹した土壌をならす）を挙げている", shizuoka: "植え付けから2〜3週間は、雨の降らない日は毎日散水。芝生になるまでの1〜2か月は養生が必要" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">埼玉県マニュアル</th>
          <th className="border px-2 py-2 text-left">静岡県マニュアル</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.saitama}</td>
            <td className="border px-2 py-2">{r.shizuoka}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、埼玉県「園庭・校庭芝生マニュアル」第4章 芝生を張ろう（PDF）と、静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」（PDF）を開き、ポット苗に触れている箇所を当サイトで1つの表にまとめました。いずれも園庭・校庭向けの資料で、家庭の庭では面積に合わせて数を計算してください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shibafu-pot-nae",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "芝生のポット苗の植え方｜植え付けは4〜7月、梅雨までが適期。30cmか50cm間隔で植え、2〜3週間は乾かさない",
  breadcrumbLabel: "芝生のポット苗の植え方",
  tagChips: ["芝生", "ポット苗", "バミューダグラス", "植え付け時期", "芝生化"],
  ldHeadline: "芝生のポット苗の植え方｜植え付けは4〜7月、梅雨までが適期。30cmか50cm間隔で植え、2〜3週間は乾かさない",
  ldDescription:
    "芝生のポット苗の植え付け時期・間隔・数と植えた後の水やりを、埼玉県と静岡県の芝生マニュアルをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ポット苗は、小さな容器で育てた芝の苗を等間隔に植え、根や茎が広がることで芝生にする方法です。埼玉県の園庭・校庭芝生マニュアルは、ポット苗の<Hl>植付け時期を4〜7月とし、梅雨時期（6月上旬〜7月下旬）までの植付けを適期</Hl>としています。植付け間隔は<Hl>30cm間隔（1,100ポット/100㎡）または50cm間隔（400ポット/100㎡）</Hl>です（出典：<a href={SAITAMA_4} className={A} target="_blank" rel="noopener noreferrer">埼玉県 園庭・校庭芝生マニュアル 第4章 芝生を張ろう（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        同じマニュアルは、ポット苗は<Hl>主にバミューダグラス（ティフトン芝等）で多く用いられる</Hl>としています。本記事では、静岡県のマニュアルとあわせて、時期・間隔・植えた後の管理を整理します。
      </p>
    </>
  ),
  conclusionTitle: "芝生のポット苗は、梅雨前から梅雨の間（6〜7月頃）に、30cmか50cm間隔で植えるのが目安です。植えてから2〜3週間は、雨のない日は毎日水をやります。",
  conclusionBody: (
    <>
      <p>2つの県のマニュアルの記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        間隔を30cmにすると必要な数は50cmの約2.75倍（100㎡あたり1,100ポットと400ポット）になります（当サイトの計算）。たとえば庭の芝生が20㎡なら、埼玉県の数字からの比例計算で、<Hl>30cm間隔は約220ポット、50cm間隔は約80ポット</Hl>が目安です。間隔を狭くするほど早く埋まりやすく、広くするほど苗の数を減らせます。
      </p>
    </>
  ),
  basicsHeading: "ポット苗を植える前に知っておきたい4つのこと",
  basicsIntro: <p>以下は、埼玉県・静岡県のマニュアルに書かれている内容を整理したものです。</p>,
  basicsLabel: "ポイント",
  basics: [
    {
      title: "主にバミューダグラスで使う方法",
      desc: "埼玉県は、コウライシバ・ノシバは張り芝、冬芝（ライグラス等）は播種、バミューダグラスはポット苗での施工が多いとしています。",
    },
    {
      title: "最初から根が5cmほどある",
      desc: "静岡県は、5×5の25穴のセルポットを推奨し、土をきっちり詰めると土の厚みは約5cmで、植え付け当初から5cmの深さまで根があるため多少の乾燥に耐えられるとしています。",
    },
    {
      title: "ソッドからも作れる",
      desc: "静岡県は、ソッド（板状の切芝）を1cm四方に切ってセルポットに植えれば1か月ほどで植え付けられる状態になり、5×5のセルポットならソッド1㎡でおよそ42シート＝芝生化250㎡分を作れるとしています。",
    },
    {
      title: "ポットの土は雑草の種が入っていないものに",
      desc: "静岡県は、現地の土を使うと雑草が次々と生え、砂では頻繁に散水が必要になるため、セルポットに詰めやすい土を購入するのがよさそうだとしています。",
    },
  ],
  stepsHeading: "芝生のポット苗の植え方4つの手順",
  stepsIntro: <p>静岡県のマニュアルの施工方法・施工時期と、埼玉県のマニュアルの植付け間隔にもとづく流れです。</p>,
  steps: [
    {
      title: "植え付けの1か月前からポット苗を用意する",
      desc: "静岡県は、ポット苗作成は少なくとも植え付けの1か月前に始め、5月上旬〜中旬が作成の時期として最適としています。完成までは定期的な散水・施肥が必要です。",
    },
    {
      title: "目安の線を引く",
      desc: "静岡県は、トンボなどに50cm間隔で釘を取り付け、縦横に引っ張ると正方形の目安ができるとしています。",
    },
    {
      title: "30cmか50cm間隔で植える",
      desc: "埼玉県は30cm間隔（1,100ポット/100㎡）または50cm間隔（400ポット/100㎡）、静岡県は50cm間隔としています。",
    },
    {
      title: "2〜3週間は毎日水をやり、1〜2か月は養生する",
      desc: "静岡県は、植え付けから2〜3週間は雨の降らない日は毎日散水が必要で、梅雨時期に施工すれば散水の手間を大きく省けるとしています。芝生になるまでの1〜2か月は養生が必要です。",
    },
  ],
  ngHeading: "ポット苗を植えるときに避けたいこと",
  ngs: [
    {
      title: "梅雨明け後の遅い植え付けは避けます",
      desc: "埼玉県は梅雨時期（6月上旬〜7月下旬）までを適期とし、静岡県もバミューダグラスが勢いよく育つのは6〜8月と限られているとしています。",
    },
    {
      title: "養生明けにいきなり使わないようにします",
      desc: "静岡県は、使用開始直後は軽めの利用にとどめ、1か月ほどかけて徐々に使用時間を延ばしたほうがよいとしています。",
    },
    {
      title: "日陰の場所に植えることは避けます",
      desc: "埼玉県のマニュアル（第1章）では、バミューダグラス（主にティフトン419）は日陰・寒さに弱いとされています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      面積が広い場合や、植える前の土の入れ替え・整地が必要な場合は、造園業者や芝生の施工業者に相談してください。「ポット苗で、間隔は30cmか50cm」「植え付けは梅雨前」と伝えると、苗の数と工程を共有しやすくなります。時期と間隔は<a href={SAITAMA_4} className={A} target="_blank" rel="noopener noreferrer">埼玉県 園庭・校庭芝生マニュアル 第4章（PDF）</a>、作り方と植えた後の管理は<a href={SHIZUOKA} className={A} target="_blank" rel="noopener noreferrer">静岡県 誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル（PDF）</a>、バミューダグラスが日陰・寒さに弱いことは<a href={SAITAMA_1} className={A} target="_blank" rel="noopener noreferrer">埼玉県 園庭・校庭芝生マニュアル 第1章 芝生を選ぼう（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      ポット苗でよく使われる芝の特徴は<Link href="/bermudagrass/" className={A}>バミューダグラスの特徴と管理</Link>、張り芝で作る場合は<Link href="/shibafu-harikae/" className={A}>芝生の張り替えの基礎知識</Link>、種から作る場合は<Link href="/shibafu-tanemaki/" className={A}>芝生の種まき</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "芝生づくりを業者に相談する",
  ctaText: "広い面積の芝生化や、植える前の土づくりは、業者に任せると安心です。",
  faqHeading: "芝生のポット苗でよくある質問",
  faqs: [
    {
      q: "ポット苗はいつ植えればよいですか？",
      a: "埼玉県は4〜7月、梅雨時期（6月上旬〜7月下旬）までを適期としています。静岡県は梅雨が明ける前の6〜7月としています。",
    },
    {
      q: "何cm間隔で植えればよいですか？",
      a: "埼玉県は30cm間隔（1,100ポット/100㎡）または50cm間隔（400ポット/100㎡）、静岡県は50cm間隔としています。",
    },
    {
      q: "どのくらいで一面の芝生になりますか？",
      a: "静岡県は、バミューダグラスが勢いよく育つ6〜8月であれば、植え付けから1か月ほどで一面緑になるとしています。芝生になるまでの1〜2か月は養生が必要です。",
    },
    {
      q: "水やりはどのくらい必要ですか？",
      a: "静岡県は、植え付けから2〜3週間は雨の降らない日は毎日散水が必要としています。試験では、ソッドや種子に比べてポット苗はさほど熱心に散水しなくても問題なかったとしています。",
    },
  ],
  related: [
    { href: "/bermudagrass/", label: "バミューダグラスの特徴と管理", desc: "ポット苗でよく使われる夏芝" },
    { href: "/shibafu-tanemaki/", label: "芝生の種まき", desc: "冬芝の播種の時期と量" },
    { href: "/shibafu-harikae/", label: "芝生の張り替えの基礎知識", desc: "張り芝で作る場合" },
    { href: "/shibafu-teire/", label: "芝生の手入れの基本", desc: "植えた後の年間管理" },
  ],
};

export default function ShibafuPotNaePage() {
  return <KnowArticle data={data} />;
}
