import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/tsuge-sentei/";
const A = "text-[#2D7F3E] underline";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ツゲの剪定｜剪定は6月と10月が目安。4月末からのツゲノメイガの食害を、剪定のときに確かめる｜お庭のミカタ",
  },
  description:
    "ツゲ（本ツゲ）の剪定時期と、剪定とあわせて見ておきたい害虫（ツゲノメイガ・アオバハゴロモ）を、大和市の園芸相談の事例と福岡県の病害虫資料をもとに整理しました。イヌツゲとの違いも記載しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ツゲの剪定",
    description:
      "大和市の園芸相談では、ツゲの剪定時期の質問に「庭木の剪定は6月と10月」と回答しています。福岡県の資料は、ツゲノメイガの被害が4月末から始まり9月頃まで年2〜3回発生するとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; value: string }[] = [
  { src: "大和市（園芸相談の事例 71）", item: "剪定の時期", value: "ツゲの「剪定したいがいつが良いか」に対し、庭木の剪定は6月と10月。花の咲くものは、10月の剪定は軽く徒長枝を除くのみ" },
  { src: "大和市（同 71）", item: "葉を閉じる虫", value: "葉を閉じるのはハマキムシ。少なければ手で潰す。多ければ薬剤を散布" },
  { src: "大和市（同 72）", item: "白い綿のような虫", value: "アオバハゴロモという植木につく虫。悪さをする虫ではないが白い綿が目立つ。防除は6月上旬頃" },
  { src: "大和市（同 73）", item: "葉を食害される", value: "4〜5月に発生し、6月に成虫が発生してからも年3〜4回発生する" },
  { src: "福岡県（ツゲ、クサツゲの害虫）", item: "ツゲノメイガ", value: "幼虫がツゲ科の葉を食害し、新梢に糸を張り周りの葉を食う。被害は4月末から始まり、9月頃まで年2〜3回の発生。激しい被害が続くと木を枯らすこともある" },
  { src: "福岡県（同）", item: "そのほかの害虫", value: "カイガラムシ類、ハダニ類（「共通」の項参照）" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.item}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、大和市「園芸相談の事例《庭木》」（71〜73 ツゲ）と福岡県「【花き花木】病害虫・雑草の発生生態と防除」（ツゲ、クサツゲ）を開き、当サイトで並べました。大和市の71の回答は「庭木の剪定は6月と10月」という庭木全般の書き方で、ツゲだけの時期として示したものではありません。73の回答は虫の名前を挙げていません。薬剤名は当サイトでは省略しています。使う場合は、ツゲに登録のある薬剤をラベルの表示どおりに使ってください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "tsuge-sentei",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "ツゲの剪定｜剪定は6月と10月が目安。4月末からのツゲノメイガの食害を、剪定のときに確かめる",
  breadcrumbLabel: "ツゲの剪定",
  tagChips: ["ツゲ", "本ツゲ", "剪定時期", "ツゲノメイガ", "生垣"],
  ldHeadline: "ツゲの剪定｜剪定は6月と10月が目安。4月末からのツゲノメイガの食害を、剪定のときに確かめる",
  ldDescription:
    "ツゲの剪定時期と、剪定とあわせて確かめたい害虫を、大和市の園芸相談の事例と福岡県の病害虫資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ツゲの剪定は、<Hl>6月と10月</Hl>が目安です。大和市の園芸相談の事例では、ツゲについて「剪定したいがいつが良いか」という相談に、<Hl>庭木の剪定は6月と10月</Hl>と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        ツゲで気をつけたいのは、葉を食べる<Hl>ツゲノメイガ</Hl>です。福岡県の資料は、被害が<Hl>4月末から始まり、9月頃まで年2〜3回</Hl>発生するとしています（出典：<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県「【花き花木】病害虫・雑草の発生生態と防除」（PDF）</a>、同日確認）。6月の剪定のときに、新しい枝先に糸が張られていないかを一緒に確かめると、見落としを減らせます（当サイトの整理）。
      </p>
    </>
  ),
  conclusionTitle: "ツゲは、6月と10月に形を整えます。6月の剪定では、ツゲノメイガの糸や食べられた葉がないかもあわせて確かめます。",
  conclusionBody: (
    <>
      <p>2つの資料の、ツゲについての記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        大和市の73の回答（4〜5月に発生し、6月に成虫が出てからも年3〜4回）と、福岡県のツゲノメイガの記載（4月末から9月頃まで年2〜3回）は、<Hl>どちらも春から秋まで繰り返し発生する</Hl>点で共通しています（当サイトの整理）。回数は地域や年によって変わると考えてください。
      </p>
    </>
  ),
  basicsHeading: "ツゲを剪定する前に知っておきたい4つのこと",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "ポイント",
  basics: [
    {
      title: "ツゲとイヌツゲは別の木",
      desc: "福岡県の資料はツゲノメイガを「ツゲ科の葉を食害する」虫としています。一方、世田谷区の植栽ガイドブックの樹木一覧では、イヌツゲはモチノキ科です。名前は似ていますが、科が異なります。",
    },
    {
      title: "剪定は年2回",
      desc: "大和市は、ツゲの剪定時期の相談に、庭木の剪定は6月と10月と回答しています。",
    },
    {
      title: "新しい枝先に糸が張られたら食害のサイン",
      desc: "福岡県は、ツゲノメイガの幼虫が新梢に糸を張り、周りの葉を食べるとしています。若い幼虫が食べた葉は、透けて半透明に見えます。",
    },
    {
      title: "白い綿のような虫は目立つが害は小さい",
      desc: "大和市は、ツゲにつく白い綿のようなもの（触ると青白い虫が飛ぶ）をアオバハゴロモとし、悪さをする虫ではないが白い綿が目立つと回答しています。",
    },
  ],
  stepsHeading: "ツゲの剪定4つの手順",
  stepsIntro: <p>大和市・福岡県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "6月、刈る前に枝先を確かめる",
      desc: "福岡県は、ツゲノメイガの被害は4月末から始まるとしています。刈り込む前に、糸でつづられた枝先や透けた葉がないか見ます。",
    },
    {
      title: "食害された枝先は取り除く",
      desc: "福岡県は、ツゲノメイガの蛹化は被害部で行うとしています。糸でつづられた枝先は、剪定のときに切り取って処分します（当サイトの整理）。",
    },
    {
      title: "外側を刈り込んで形を整える",
      desc: "大和市は、庭木の剪定は6月と10月としています。6月は伸びた枝を刈り、形を整えます。",
    },
    {
      title: "10月は伸びた分を軽く整える",
      desc: "大和市は、花の咲くものは10月の剪定は軽く徒長枝を除くのみとしています。10月に強く刈り込むと冬の間に葉の少ない姿で過ごすことになるため、軽い手直しにとどめます（当サイトの整理）。",
    },
  ],
  ngHeading: "ツゲの剪定で避けたいこと",
  ngs: [
    {
      title: "春から夏に枝先の食害を放っておくことは避けます",
      desc: "福岡県は、ツゲノメイガの激しい被害が続くと木を枯らすこともあるとしています。",
    },
    {
      title: "イヌツゲの情報をそのまま当てはめることは避けます",
      desc: "ツゲ（ツゲ科）とイヌツゲ（モチノキ科）は別の木です。イヌツゲの剪定は別のページにまとめています。",
    },
    {
      title: "薬剤をラベルを見ずに使うことは避けます",
      desc: "薬剤を使う場合は、ツゲに登録のある薬剤を、ラベルの使用時期・回数どおりに使います。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>長い生垣になっているツゲ、玉仕立てなど形を作り込んだツゲ、枝先の食害が広がっているツゲ</Hl>は、剪定業者に相談してください。「6月の剪定のときに、ツゲノメイガの食害も見てほしい」と伝えると、剪定と害虫の確認を一度に頼めます。剪定時期は<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、害虫は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県「【花き花木】病害虫・雑草の発生生態と防除」（PDF）</a>、イヌツゲの科名は<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">世田谷区 植栽ガイドブック 樹木一覧（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      名前の似たイヌツゲは<Link href="/inutsuge-sentei/" className={A}>イヌツゲの剪定</Link>、生垣の刈り込みは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込みの基礎知識</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ツゲの剪定を業者に相談する",
  ctaText: "生垣や玉仕立てのツゲの刈り込みは、業者に任せると仕上がりがそろいます。",
  faqHeading: "ツゲの剪定でよくある質問",
  faqs: [
    {
      q: "ツゲの剪定はいつ行えばよいですか？",
      a: "大和市の園芸相談の事例では、ツゲの剪定時期の相談に、庭木の剪定は6月と10月と回答しています。",
    },
    {
      q: "ツゲの葉が糸でつづられ、食べられています。何の虫ですか？",
      a: "福岡県の資料は、ツゲノメイガの幼虫が新梢に糸を張り、周りの葉を食べるとしています。被害は4月末から9月頃まで、年2〜3回発生します。",
    },
    {
      q: "ツゲに白い綿のようなものが付いています。",
      a: "大和市の回答では、アオバハゴロモという植木につく虫で、悪さをする虫ではないが白い綿が目立つとしています。防除する場合は6月上旬頃としています。",
    },
    {
      q: "ツゲとイヌツゲは同じ木ですか？",
      a: "別の木です。福岡県の資料はツゲをツゲ科として扱い、世田谷区の樹木一覧ではイヌツゲはモチノキ科です。",
    },
  ],
  related: [
    { href: "/inutsuge-sentei/", label: "イヌツゲの剪定", desc: "名前の似たモチノキ科の木" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込みの基礎知識", desc: "刈り込みの時期と回数" },
    { href: "/niwaki-byogaichu/", label: "庭木の病害虫", desc: "害虫の見つけ方と対処" },
    { href: "/ikegaki-shurui/", label: "生垣に向く木の種類", desc: "生垣の樹種の選び方" },
  ],
};

export default function TsugeSenteiPage() {
  return <KnowArticle data={data} />;
}
