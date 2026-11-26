import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/tochoushi-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SAITAMA_1 = "https://www.pref.saitama.lg.jp/documents/4144/gairozyusenntei1.pdf";
const SAITAMA_2 = "https://www.pref.saitama.lg.jp/documents/4144/gairozyusenntei2.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const YAMATO_KAJU = "https://www.city.yamato.lg.jp/material/files/group/26/000050751.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "徒長枝の剪定｜勢いよく伸びた長い枝は付け根から切る。途中で切ると、また伸びる原因に｜お庭のミカタ",
  },
  description:
    "徒長枝（とちょうし）の剪定方法を、熊本市の樹木管理ガイドライン、埼玉県の街路樹剪定マニュアル、芦屋市の街路樹等維持管理基本書、大和市の園芸相談の事例をもとに整理しました。徒長枝が出る理由、切る位置、時期、残してよい場合をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "徒長枝の剪定",
    description:
      "埼玉県のマニュアルは、強剪定の後は切り口付近から徒長枝が出やすくなるとしています。徒長枝は付け根から切り取るのが基本です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "徒長枝とは", note: "本年生枝・前年生枝の中で、ほかの普通の枝より異常に長く伸びる枝。組織的に軟弱なものが多い。夏以降に伸びた土用枝は徒長枝になりやすい" },
  { src: "芦屋市", item: "別名と扱い", note: "「とび枝」。幹枝から一直線にまっすぐ飛び出すのが特徴で、夏芽・土用芽の枝もこの類。樹形を乱し養分を取りすぎるため、通常は切り取る必要がある" },
  { src: "埼玉県", item: "出る理由", note: "強剪定をすると、その後に切り口付近から生長してくる枝は徒長枝が出やすくなり、混み合いやすくなるため樹形を乱す原因になる" },
  { src: "埼玉県", item: "切る位置", note: "長く伸び出す徒長枝も、多くの場合その付け根から切り取る（ヤマモモ・ウバメガシなど萌芽枝の多い樹種の剪定の説明）" },
  { src: "大和市", item: "果樹の相談への回答", note: "骨格ができていれば徒長枝は根元から取る。途中で切ってはいけない。残して伸ばしたい枝は枝先を1/3くらい切る" },
  { src: "芦屋市・埼玉県", item: "残す場合", note: "その場所の枝数が少ないときは、樹形を考えて予備枝として残す（芦屋市）。強い枝透かしや樹形の作り直しでは、正常な枝に仕立て直すために残すこともある（埼玉県）" },
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
      2026年11月27日に、熊本市の公共施設樹木の維持管理ガイドライン（「2.3.4 剪定の対象となる枝」）、埼玉県「街路樹剪定マニュアル」（県土整備部道路環境課、令和2年12月。「強い切詰剪定（強剪定）による樹形の作り直し」、樹種別の剪定、用語集）、芦屋市の街路樹等維持管理基本書（「おもな剪定すべき枝の名称」、冬期剪定の項）、大和市の園芸相談の事例《果樹》（アンズ・ウメの剪定の相談）を開き、当サイトで項目ごとに整理しました。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "tochoushi-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "徒長枝の剪定｜勢いよく伸びた長い枝は付け根から切る。途中で切ると、また伸びる原因に",
  breadcrumbLabel: "徒長枝の剪定",
  tagChips: ["徒長枝", "とび枝", "剪定", "強剪定", "不要枝"],
  ldHeadline: "徒長枝の剪定｜勢いよく伸びた長い枝は付け根から切る。途中で切ると、また伸びる原因に",
  ldDescription:
    "徒長枝が出る理由、切る位置と時期、残してよい場合を、熊本市・埼玉県・芦屋市・大和市の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        徒長枝（とちょうし）は、<Hl>ほかの枝より異常に長く、勢いよく伸びる枝</Hl>です。熊本市のガイドラインは、本年生枝・前年生枝の中で普通の枝より異常に長く伸びる枝で、組織的に軟弱なものが多いと説明しています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        切り方の基本は、<Hl>枝の途中ではなく付け根から切り取る</Hl>ことです。埼玉県の街路樹剪定マニュアルは、長く伸び出す徒長枝も多くの場合その付け根から切り取るとし、強剪定の後は切り口付近から徒長枝が出やすくなるとしています（出典：<a href={SAITAMA_1} className={A} target="_blank" rel="noopener noreferrer">埼玉県「街路樹剪定マニュアル」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "徒長枝は付け根から間引きます。枝先だけを切り詰めたり、毎年強く切り戻したりすると、かえって徒長枝が増えます。",
  conclusionBody: (
    <>
      <p>4つの資料の記載を、当サイトで項目ごとに並べると次のとおりです。</p>
      {table}
      <p className="mt-4">
        4つの資料はいずれも、徒長枝を<Hl>原則として切り取る枝</Hl>として扱っています。そのうえで、芦屋市と埼玉県は、枝数が少ない場所や樹形を作り直す途中では、あえて残して将来の枝に育てる場合があるとしています。
      </p>
    </>
  ),
  basicsHeading: "徒長枝を知るための4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "異常に長く、軟弱な枝",
      desc: "熊本市は、徒長枝を普通の枝より異常に長く伸びる枝で、組織的に軟弱なものが多いとしています。埼玉県の用語集も同じ説明で、通常は切除の対象としています。",
    },
    {
      title: "夏以降に伸びた枝はなりやすい",
      desc: "熊本市は、夏以降に伸びた土用枝は徒長枝になりやすいとしています。芦屋市も、夏芽や土用芽の枝を徒長枝（とび枝）の類としています。",
    },
    {
      title: "強剪定の後に出やすい",
      desc: "埼玉県のマニュアルは、強剪定をすると直後の樹形は小さくなるものの、その後に切り口付近から伸びる枝は徒長枝が出やすく、樹形を乱す原因になるとしています。",
    },
    {
      title: "放置すると養分を取りすぎる",
      desc: "芦屋市の基本書は、徒長枝は将来樹形を乱したり養分を取りすぎたりするため、通常の場合は切り取る必要があるとしています。",
    },
  ],
  stepsHeading: "徒長枝を剪定する4つの手順",
  stepsIntro: <p>埼玉県・大和市・熊本市の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "まっすぐ飛び出した長い枝を見つける",
      desc: "芦屋市の基本書は、幹や枝から一直線にまっすぐ飛び出すのが徒長枝の特徴としています。樹冠の外に突き出た長い枝が目印です。",
    },
    {
      title: "残すか切るかを決める",
      desc: "芦屋市は、その場所に枝数が少ない場合は樹形を考えて予備枝として残すとしています。枝が少ない側の徒長枝は、残して育てる選択もあります。",
    },
    {
      title: "付け根から切り取る",
      desc: "大和市の園芸相談の事例は、骨格ができていれば徒長枝は根元から取り、途中で切ってはいけないと回答しています。埼玉県も多くの場合は付け根から切り取るとしています。",
    },
    {
      title: "残した枝は先を軽く切り詰める",
      desc: "大和市の事例は、残して伸ばしたい枝は枝先を1/3くらい切るとしています（果樹の相談への回答）。",
    },
  ],
  ngHeading: "徒長枝の剪定で避けたいこと",
  ngs: [
    {
      title: "徒長枝を途中で切って終わらせることは避けます",
      desc: "大和市の園芸相談の事例は、徒長枝は根元から取り、途中で切ってはいけないとしています。",
    },
    {
      title: "強い切り詰めを繰り返すことは避けます",
      desc: "埼玉県のマニュアルは、強剪定の後は切り口付近から徒長枝が出やすく、混み合って樹形を乱す原因になるとしています。",
    },
    {
      title: "春の若葉が開く時期の剪定は避けます",
      desc: "埼玉県のマニュアルは、春の葉の展開期の剪定と夏の強い剪定を、樹木の健康を損ねるため避ける剪定としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>毎年同じ場所から何本も徒長枝が出る木、高い位置の徒長枝が多い木</Hl>は、強剪定の繰り返しで樹形が乱れていることがあります。剪定業者には「徒長枝は付け根から間引き、強い切り詰めは控えてほしい」と伝えると、切り方の考え方を共有しやすくなります。予備枝の扱いは<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>、用語の定義は<a href={SAITAMA_2} className={A} target="_blank" rel="noopener noreferrer">埼玉県「街路樹剪定マニュアル」第7章・用語集（PDF）</a>、果樹の相談は<a href={YAMATO_KAJU} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《果樹》（PDF）</a>によります（いずれも2026年11月27日確認）。
    </p>,
    <p key="2">
      徒長枝以外の不要枝は<Link href="/imieda/" className={A}>忌み枝とは</Link>、幹や根元から出る枝は<Link href="/hikobae-dobukieda/" className={A}>胴吹き枝・ひこばえとは</Link>、透かし・切り詰めの違いは<Link href="/sentei-towa/" className={A}>剪定とは</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "徒長枝の多い庭木の剪定を業者に相談する",
  ctaText: "徒長枝が毎年たくさん出る木や、高い位置の枝の剪定は、業者に任せると安心です。",
  faqHeading: "徒長枝の剪定でよくある質問",
  faqs: [
    {
      q: "徒長枝とは何ですか？",
      a: "熊本市のガイドラインでは、本年生枝・前年生枝の中で、ほかの普通の枝より異常に長く伸びる枝です。組織的に軟弱なものが多いとしています。芦屋市は「とび枝」とも呼んでいます。",
    },
    {
      q: "徒長枝はどこで切ればよいですか？",
      a: "付け根から切り取るのが基本です。埼玉県のマニュアルは多くの場合その付け根から切り取るとし、大和市の園芸相談の事例も根元から取り、途中で切ってはいけないとしています。",
    },
    {
      q: "徒長枝が出るのはなぜですか？",
      a: "埼玉県のマニュアルは、強剪定をすると切り口付近から伸びる枝に徒長枝が出やすくなるとしています。熊本市は、夏以降に伸びた土用枝も徒長枝になりやすいとしています。",
    },
    {
      q: "徒長枝はすべて切るべきですか？",
      a: "原則は切り取りますが、芦屋市は枝数が少ない場所では予備枝として残すとし、埼玉県も樹形を作り直すときは残すことがあるため、安易にすべて取り除かないようにするとしています。",
    },
  ],
  related: [
    { href: "/imieda/", label: "忌み枝とは", desc: "剪定で取り除く不要枝9種類" },
    { href: "/hikobae-dobukieda/", label: "胴吹き枝・ひこばえとは", desc: "出る理由と切り方" },
    { href: "/sentei-towa/", label: "剪定とは", desc: "透かし・切り詰め・切り返しの違い" },
    { href: "/edaoroshi/", label: "枝下ろしとは", desc: "太い枝を付け根から切る剪定" },
  ],
};

export default function TochoushiSenteiPage() {
  return <KnowArticle data={data} />;
}
