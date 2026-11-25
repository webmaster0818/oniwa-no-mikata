import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/murasakishikibu-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ムラサキシキブの剪定｜実が終わった後の落葉期（12〜3月）に枝抜きで整える。開花の時期は切らない｜お庭のミカタ",
  },
  description:
    "ムラサキシキブ（紫式部）の剪定時期と切り方を、熊本市の樹木管理ガイドラインと大和市の園芸相談の事例をもとに整理しました。落葉期の枝抜き、株立ちの仕立て方、開花期に切らない理由、鉢植えの植え替えの目安をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ムラサキシキブの剪定",
    description:
      "熊本市のガイドラインは、ムラサキシキブの剪定時期を12〜3月とし、枝が繁茂するので実が終わった後に枝抜きで樹形を整えるとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "分類・樹形", note: "落葉の低木。樹形は枝垂（しだれ）" },
  { src: "熊本市", item: "剪定時期", note: "12〜3月" },
  { src: "熊本市", item: "特記事項", note: "枝が繁茂するので、実が終わった後に枝抜きで樹形を整える" },
  { src: "大和市", item: "剪定の時期（相談への回答）", note: "剪定は落葉しているときが良い。開花する時期は切らない方が良い" },
  { src: "大和市", item: "仕立て方（相談への回答）", note: "1本立ちより3〜4本立ちの方が良い" },
  { src: "大和市", item: "鉢植えの管理（相談への回答）", note: "3〜4年に1回は植え替えた方が良い。肥料はやらないか少量で良い" },
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
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（巻末資料「熊本平野部の主要樹種の特徴」）と、大和市の園芸相談の事例《庭木》（ムラサキシキブの項。7号鉢で3年ほど育てた株の剪定についての相談）を開き、当サイトで項目ごとに整理しました。熊本市の時期は熊本平野部の公共施設の樹木を前提にした目安です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "murasakishikibu-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "ムラサキシキブの剪定｜実が終わった後の落葉期（12〜3月）に枝抜きで整える。開花の時期は切らない",
  breadcrumbLabel: "ムラサキシキブの剪定",
  tagChips: ["ムラサキシキブ", "実もの", "落葉低木", "剪定時期", "枝抜き"],
  ldHeadline: "ムラサキシキブの剪定｜実が終わった後の落葉期（12〜3月）に枝抜きで整える。開花の時期は切らない",
  ldDescription:
    "ムラサキシキブの剪定時期と切り方を、熊本市の樹木管理ガイドラインと大和市の園芸相談の事例をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ムラサキシキブ（紫式部）の剪定は、<Hl>実が終わった後の落葉期（12〜3月）に、込み合った枝を抜いて整える</Hl>のが目安です。熊本市のガイドラインは、樹形を枝垂、剪定時期を12〜3月とし、「枝が繁茂するので、実が終わった後に枝抜きで樹形を整える」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        大和市の園芸相談の事例でも、鉢植えのムラサキシキブの剪定の相談に対し、<Hl>剪定は落葉しているときが良い、開花する時期は切らない方が良い</Hl>と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ムラサキシキブは、紫の実を楽しんだ後、葉が落ちてから古い枝や込み合った枝を株元から抜きます。花が咲く初夏から実がつく秋までは、枝を切らずに残します。",
  conclusionBody: (
    <>
      <p>2つの資料の記載をまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        2つの資料は、時期（落葉期）と切り方（枝抜き）の両方で一致しています。大和市が「1本立ちより3〜4本立ちの方が良い」としているのは、細い枝が弓なりに垂れる樹形（熊本市の分類では枝垂）を、数本の幹で支える仕立て方と読めます（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "ムラサキシキブを剪定するときの4つの基本",
  basicsIntro: <p>以下は、2つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "枝が垂れる落葉の低木",
      desc: "熊本市は、ムラサキシキブを落葉の低木に分類し、樹形を枝垂としています。",
    },
    {
      title: "剪定は実が終わった後の落葉期",
      desc: "熊本市の剪定時期は12〜3月です。大和市の事例も、剪定は落葉しているときが良いとしています。",
    },
    {
      title: "切り方は枝抜きが中心",
      desc: "熊本市は、枝が繁茂するので枝抜きで樹形を整えるとしています。",
    },
    {
      title: "数本立ちに仕立てる",
      desc: "大和市の事例は、1本立ちより3〜4本立ちの方が良いとしています。",
    },
  ],
  stepsHeading: "ムラサキシキブの剪定4つの手順",
  stepsIntro: <p>熊本市と大和市の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "実を楽しみ、葉が落ちるのを待つ",
      desc: "熊本市は、実が終わった後に枝抜きで樹形を整えるとしています。剪定時期は12〜3月です。",
    },
    {
      title: "残す幹を3〜4本に決める",
      desc: "大和市の事例は、1本立ちより3〜4本立ちの方が良いとしています。勢いのある幹を選び、それ以外の細く弱い幹を株元から整理します。",
    },
    {
      title: "込み合った枝を付け根から抜く",
      desc: "枝先を短く切りそろえるのではなく、交差している枝や内側に向かう枝を付け根から抜きます。熊本市は枝抜きで樹形を整えるとしています。",
    },
    {
      title: "鉢植えは3〜4年に1回植え替える",
      desc: "大和市の事例は、鉢植えの株について3〜4年に1回は植え替えた方が良い、肥料はやらないか少量で良いとしています。",
    },
  ],
  ngHeading: "ムラサキシキブの剪定で避けたいこと",
  ngs: [
    {
      title: "花の咲く時期に切ることは避けます",
      desc: "大和市の事例は、開花する時期は切らない方が良いとしています。花のあとにできる実を楽しむためにも、この時期は枝を残します。",
    },
    {
      title: "株全体を刈り込んで形をそろえることは避けます",
      desc: "熊本市は、枝が繁茂するので枝抜きで樹形を整えるとしています。刈り込むと、垂れる枝の樹形が失われます。",
    },
    {
      title: "鉢植えに肥料を多く与えることは避けます",
      desc: "大和市の事例は、肥料はやらないか少量で良いとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなって幹の整理が必要なとき、ほかの庭木とまとめて冬に手入れしたいとき</Hl>は、剪定業者に相談してください。「実を楽しみたいので枝抜き中心で」と伝えると、樹形を残しやすくなります。
    </p>,
    <p key="2">
      樹種ごとの時期の目安は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、切ってよい枝の種類は<Link href="/imieda/" className={A}>忌み枝とは</Link>、鉢から庭に植え替えるときは<Link href="/hachiue-jiue-uekae/" className={A}>鉢植えから地植えへの植え替え</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ムラサキシキブの剪定を業者に相談する",
  ctaText: "大きくなったムラサキシキブの幹の整理や、ほかの庭木とまとめた冬の剪定は、業者に任せると安心です。",
  faqHeading: "ムラサキシキブの剪定でよくある質問",
  faqs: [
    {
      q: "ムラサキシキブの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは剪定時期を12〜3月とし、実が終わった後に枝抜きで樹形を整えるとしています。大和市の園芸相談の事例も、剪定は落葉しているときが良いとしています。",
    },
    {
      q: "ムラサキシキブを夏に切ってもよいですか？",
      a: "大和市の園芸相談の事例は、開花する時期は切らない方が良いとしています。",
    },
    {
      q: "ムラサキシキブは何本立ちにすればよいですか？",
      a: "大和市の園芸相談の事例は、1本立ちより3〜4本立ちの方が良いとしています。",
    },
    {
      q: "鉢植えのムラサキシキブの植え替えはどのくらいの間隔ですか？",
      a: "大和市の園芸相談の事例は、3〜4年に1回は植え替えた方が良いとしています。肥料はやらないか少量で良いとしています。",
    },
  ],
  related: [
    { href: "/enishida-sentei/", label: "エニシダの剪定", desc: "枝垂の低木" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "季節ごとの考え方" },
    { href: "/imieda/", label: "忌み枝とは", desc: "切ってよい枝の種類" },
    { href: "/utsugi-sentei/", label: "ウツギの剪定", desc: "株立ちの落葉低木" },
    { href: "/hachiue-jiue-uekae/", label: "鉢植えから地植えへの植え替え", desc: "庭に下ろす前の確認" },
  ],
};

export default function MurasakishikibuSenteiPage() {
  return <KnowArticle data={data} />;
}
