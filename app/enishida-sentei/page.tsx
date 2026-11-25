import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/enishida-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "エニシダの剪定｜花は前年枝につくため、花後の6〜7月に切り過ぎないように整える｜お庭のミカタ",
  },
  description:
    "エニシダの剪定時期と切り方を、熊本市の樹木管理ガイドライン・大和市の園芸相談の事例・福岡県の花木の病害虫資料をもとに整理しました。花が咲かない原因、花後の剪定、イセリアカイガラムシへの備えをまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "エニシダの剪定",
    description:
      "熊本市のガイドラインは、エニシダの剪定時期を6〜7月とし、花が前年枝につくので切り過ぎに注意するとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "熊本市", item: "分類・樹形", note: "低木。樹形は枝垂（しだれ）" },
  { src: "熊本市", item: "剪定時期", note: "6〜7月" },
  { src: "熊本市", item: "特記事項", note: "花が前年枝につくので切り過ぎに注意する" },
  { src: "大和市", item: "花が咲かない（相談への回答）", note: "鉢植えのエニシダの花がまったく咲かなかった相談に対し、前年の枝切りの時期が遅かったことと、枝が込み過ぎていることが原因と思われると回答" },
  { src: "福岡県", item: "イセリアカイガラムシ", note: "寄主植物は数十科〜百数十種に及び、花木ではボタン・トベラ・ナンテン・エニシダ・アカシアなどに多い。年3〜5世代を繰り返し、年間を通して幼虫が見られる。群棲してすす病を誘発することもある" },
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
      2026年11月26日に、熊本市の公共施設樹木の維持管理ガイドライン（巻末資料「熊本平野部の主要樹種の特徴」）、大和市の園芸相談の事例《庭木》（エニシダの項）、福岡県【花き花木】病害虫・雑草の発生生態と防除（イセリアカイガラムシの項）を開き、エニシダに関する記載を当サイトで項目ごとに整理しました。熊本市の時期は熊本平野部の公共施設の樹木を前提にした目安です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "enishida-sentei",
  published: "2026-11-26",
  updatedLabel: "2026年11月26日",
  h1: "エニシダの剪定｜花は前年枝につくため、花後の6〜7月に切り過ぎないように整える",
  breadcrumbLabel: "エニシダの剪定",
  tagChips: ["エニシダ", "花木", "低木", "剪定時期", "カイガラムシ"],
  ldHeadline: "エニシダの剪定｜花は前年枝につくため、花後の6〜7月に切り過ぎないように整える",
  ldDescription:
    "エニシダの剪定時期と切り方を、熊本市の樹木管理ガイドライン・大和市の園芸相談の事例・福岡県の病害虫資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        エニシダの剪定は、<Hl>花が終わった後の6〜7月に、切り過ぎないように行う</Hl>のが目安です。熊本市のガイドラインは、エニシダの剪定時期を6〜7月とし、「花が前年枝につくので切り過ぎに注意する」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月26日確認）。
      </p>
      <p>
        花が咲かないときは、剪定の時期と枝の込み具合を振り返ります。大和市の園芸相談の事例では、花がまったく咲かなかった鉢植えのエニシダについて、<Hl>前年の枝切りの時期が遅かったことと、枝が込み過ぎていること</Hl>が原因と思われると回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "エニシダは、春に花が咲いた枝（前年に伸びた枝）を残すことが大切です。剪定は花後すぐの6〜7月に済ませ、込み合った枝を間引く程度にとどめます。",
  conclusionBody: (
    <>
      <p>3つの資料の記載をまとめると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市の「花が前年枝につく」という記載と、大和市の「前年の枝切りの時期が遅かった」という回答をあわせると、夏以降に切ると翌春に花をつける枝を減らすことになると読めます（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "エニシダを剪定するときの4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "枝が垂れる低木",
      desc: "熊本市は、エニシダを低木に分類し、樹形を枝垂としています。",
    },
    {
      title: "花は前年に伸びた枝につく",
      desc: "熊本市は、花が前年枝につくので切り過ぎに注意するとしています。",
    },
    {
      title: "剪定は6〜7月",
      desc: "熊本市の剪定時期は6〜7月です。",
    },
    {
      title: "カイガラムシがつきやすい",
      desc: "福岡県は、イセリアカイガラムシの寄主として花木ではエニシダなどに多いとし、群棲してすす病を誘発することもあるとしています。",
    },
  ],
  stepsHeading: "エニシダの剪定4つの手順",
  stepsIntro: <p>熊本市・大和市・福岡県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "花が終わるのを待つ",
      desc: "花が咲いた後、熊本市の剪定時期である6〜7月に作業します。",
    },
    {
      title: "込み合った枝を付け根から間引く",
      desc: "大和市の事例は、枝が込み過ぎていることを花が咲かなかった原因の一つに挙げています。重なった枝や内側に向かう枝を整理します。",
    },
    {
      title: "長さの調整は控えめにする",
      desc: "熊本市は、花が前年枝につくので切り過ぎに注意するとしています。全体を短く刈り込まず、はみ出した枝だけを切ります。",
    },
    {
      title: "枝や幹にカイガラムシがいないか見る",
      desc: "福岡県は、イセリアカイガラムシは年3〜5世代を繰り返し、年間を通して幼虫が見られるとしています。剪定のついでに、枝や幹に白い虫が群がっていないかを確かめます。",
    },
  ],
  ngHeading: "エニシダの剪定で避けたいこと",
  ngs: [
    {
      title: "夏の終わりから冬に剪定することは避けます",
      desc: "大和市の事例は、前年の枝切りの時期が遅かったことを花が咲かなかった原因の一つに挙げています。",
    },
    {
      title: "株全体を強く切り詰めることは避けます",
      desc: "熊本市は、花が前年枝につくので切り過ぎに注意するとしています。",
    },
    {
      title: "すすで黒くなった枝を放っておくことは避けます",
      desc: "福岡県は、イセリアカイガラムシが群棲してすす病を誘発することもあるとしています。黒いすすが目立つときは、カイガラムシがついていないかを確かめます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなって枝が込み合っているとき、カイガラムシが広がっているとき</Hl>は、剪定業者に相談してください。「花を残したいので花後に、間引き中心で」と伝えると、翌春の花を残しやすくなります。
    </p>,
    <p key="2">
      花芽と剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、切ってよい枝の種類は<Link href="/imieda/" className={A}>忌み枝とは</Link>、庭木の病害虫の見分け方は<Link href="/niwaki-byogaichu/" className={A}>庭木の病害虫</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "エニシダの剪定を業者に相談する",
  ctaText: "大きくなったエニシダの枝の間引きや、ほかの庭木とまとめた剪定は、業者に任せると安心です。",
  faqHeading: "エニシダの剪定でよくある質問",
  faqs: [
    {
      q: "エニシダの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインは、エニシダの剪定時期を6〜7月とし、花が前年枝につくので切り過ぎに注意するとしています。",
    },
    {
      q: "エニシダの花が咲きません。",
      a: "大和市の園芸相談の事例では、花がまったく咲かなかった鉢植えのエニシダについて、前年の枝切りの時期が遅かったことと、枝が込み過ぎていることが原因と思われると回答しています。",
    },
    {
      q: "エニシダに白い虫がついています。",
      a: "福岡県の資料は、イセリアカイガラムシの寄主として花木ではエニシダなどに多いとし、年間を通して幼虫が見られ、群棲してすす病を誘発することもあるとしています。",
    },
    {
      q: "エニシダは強く切り詰めてもよいですか？",
      a: "熊本市は、花が前年枝につくので切り過ぎに注意するとしています。強く切ると翌春の花が減るおそれがあります。",
    },
  ],
  related: [
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/imieda/", label: "忌み枝とは", desc: "切ってよい枝の種類" },
    { href: "/niwaki-byogaichu/", label: "庭木の病害虫", desc: "カイガラムシなどの見分け方" },
    { href: "/murasakishikibu-sentei/", label: "ムラサキシキブの剪定", desc: "枝垂の低木" },
  ],
};

export default function EnishidaSenteiPage() {
  return <KnowArticle data={data} />;
}
