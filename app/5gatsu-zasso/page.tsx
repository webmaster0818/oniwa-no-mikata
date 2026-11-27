import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/5gatsu-zasso/";
const A = "text-[#2D7F3E] underline";
const TOKYO = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual06";
const SAITAMA5 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20206.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "5月の雑草｜メヒシバ・オヒシバが伸び始め、ハマスゲも出てくる時期。花や種をつける前に根から抜く｜お庭のミカタ",
  },
  description:
    "5月の庭や芝生で目立つ雑草と、この時期の草取りの考え方を、東京都教育委員会と埼玉県の芝生管理マニュアルをもとに整理しました。生育期間と花期の表、一年草と多年草で変わる抜き方をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "5月の雑草",
    description:
      "5月は、夏の一年草（メヒシバ・オヒシバ）が育ち始め、ハマスゲも生育期間に入る時期です。種をつける前に根から抜きます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { name: string; kind: string; grow: string; flower: string; may: string }[] = [
  { name: "メヒシバ", kind: "一年草・単子葉", grow: "4月〜10月", flower: "8月〜9月", may: "生育期間に入り、伸び始める" },
  { name: "オヒシバ", kind: "一年草・単子葉", grow: "4月〜10月", flower: "7月〜9月", may: "生育期間に入り、伸び始める" },
  { name: "ハマスゲ", kind: "多年草・単子葉", grow: "5月〜11月", flower: "7月〜10月", may: "生育期間の始まり" },
  { name: "スズメノカタビラ", kind: "一年草・単子葉", grow: "10月〜7月", flower: "2月〜7月", may: "花期の途中。種子を落としている" },
  { name: "オオバコ", kind: "多年草・双子葉", grow: "通年", flower: "4月〜6月", may: "花期" },
  { name: "シロツメクサ", kind: "多年草・双子葉", grow: "通年", flower: "4月〜7月", may: "花期" },
  { name: "カタバミ", kind: "多年草・双子葉", grow: "通年", flower: "5月〜11月", may: "花期の始まり" },
  { name: "セイヨウタンポポ", kind: "多年草・双子葉", grow: "通年", flower: "3〜5月、10〜11月", may: "春の花期の終わり" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">雑草</th>
          <th className="border px-2 py-2 text-left">区分</th>
          <th className="border px-2 py-2 text-left">生育期間</th>
          <th className="border px-2 py-2 text-left">花期</th>
          <th className="border px-2 py-2 text-left">5月の状態（当サイトの整理）</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.name}>
            <td className="border px-2 py-2">{r.name}</td>
            <td className="border px-2 py-2">{r.kind}</td>
            <td className="border px-2 py-2">{r.grow}</td>
            <td className="border px-2 py-2">{r.flower}</td>
            <td className="border px-2 py-2">{r.may}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、東京都教育委員会「芝生の異常──こんな時は？」（園庭・校庭における芝生維持管理マニュアル「主な雑草と特徴」）を開き、区分・生育期間・花期を書き写しました。「5月の状態」の列は、その期間と花期から当サイトが整理したものです。園庭・校庭の芝生向けの資料で、地域や年によって時期は前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "5gatsu-zasso",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "5月の雑草｜メヒシバ・オヒシバが伸び始め、ハマスゲも出てくる時期。花や種をつける前に根から抜く",
  breadcrumbLabel: "5月の雑草",
  tagChips: ["5月", "雑草", "草取り", "メヒシバ", "ハマスゲ"],
  ldHeadline: "5月の雑草｜メヒシバ・オヒシバが伸び始め、ハマスゲも出てくる時期。花や種をつける前に根から抜く",
  ldDescription:
    "5月の庭や芝生で目立つ雑草と草取りの考え方を、東京都教育委員会と埼玉県の芝生管理マニュアルをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        5月は、<Hl>春の雑草が花や種をつけ、夏の雑草が伸び始める時期</Hl>です。東京都教育委員会のマニュアルでは、メヒシバ・オヒシバの生育期間は4月〜10月、ハマスゲは5月〜11月で、オオバコ（4月〜6月）やシロツメクサ（4月〜7月）は花期にあたります（出典：<a href={TOKYO} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「芝生の異常──こんな時は？」（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        埼玉県の芝生化マニュアルは、4〜5月の作業として「除草はこまめに行う」とし、<Hl>発生初期に根っこから除草するのが効果的</Hl>としています（出典：<a href={SAITAMA5} className={A} target="_blank" rel="noopener noreferrer">埼玉県 芝生化マニュアル 第5章 維持管理をしよう（PDF）</a>、同日確認）。小さいうちに根から抜くと、夏の草取りの量が減ります。
      </p>
    </>
  ),
  conclusionTitle: "5月の草取りは「小さいうちに根から」「花や種をつける前に」。一年草は種を落とさせず、多年草は根や球根まで取ります。",
  conclusionBody: (
    <>
      <p>東京都教育委員会のマニュアルに載っている主な雑草の生育期間と花期を、5月の時点で並べると次のとおりです。</p>
      {table}
      <p className="mt-4">
        同じマニュアルは、一年草は「種子で増え、1年で枯れる」ので芝刈りで種子を結実させないこと、多年草は「地下茎などが土中に残り、そこから再び芽が出てくる」ので植物本体を確実に除草することを挙げています。<Hl>5月に花が咲いている草（オオバコ・シロツメクサ・カタバミなど）は、種ができる前に抜く</Hl>のが、この表からの考え方です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "5月の雑草で知っておきたい4つのこと",
  basicsIntro: <p>以下は、東京都教育委員会と埼玉県のマニュアルに書かれている内容を整理したものです。</p>,
  basicsLabel: "ポイント",
  basics: [
    {
      title: "夏の一年草が生え始める",
      desc: "東京都教育委員会のマニュアルでは、メヒシバ・オヒシバの生育期間は4月〜10月です。埼玉県の資料はメヒシバを（4〜5月）の欄に載せ、放置すると株が増え、高さ30〜90cmにもなるとしています。",
    },
    {
      title: "ハマスゲが出てくる",
      desc: "東京都教育委員会はハマスゲの生育期間を5月〜11月とし、地下茎の先に塊茎をつくり、塊茎を取り除かないと再生するとしています。埼玉県の資料は（5〜9月）の欄に載せています。",
    },
    {
      title: "春の草は花と種の時期",
      desc: "東京都教育委員会のマニュアルでは、スズメノカタビラの花期は2月〜7月で「花期が長いため、種子量が多い」としています。オオバコは4月〜6月、セイヨウタンポポは3〜5月に花が咲きます。",
    },
    {
      title: "単子葉と双子葉で抜き方が違う",
      desc: "東京都教育委員会は、単子葉植物（オヒシバ・スズメノカタビラなど）はひげ根を残しても再生することは少ないので地際で刈り取る、双子葉植物（タンポポ・オオバコなど）は主根をなるべく深く取り除くとしています。",
    },
  ],
  stepsHeading: "5月の草取り4つの手順",
  stepsIntro: <p>2つのマニュアルの記載にもとづく流れです。</p>,
  steps: [
    {
      title: "芽が小さいうちに見回る",
      desc: "埼玉県は、発生初期に根っこから除草するのが効果的としています。5月はメヒシバ・ハマスゲが出始める時期なので、小さいうちに見つけます。",
    },
    {
      title: "花が咲いている草から先に抜く",
      desc: "オオバコ・シロツメクサ・カタバミなど、5月が花期の草は、種をつける前に抜きます。東京都教育委員会は、芝刈りで種子を結実させないことを挙げています。",
    },
    {
      title: "根・塊茎・球根まで取る",
      desc: "ハマスゲは塊茎、カタバミは球根と肥大した根、タンポポは主根を残すと再生します（東京都教育委員会）。埼玉県は、根から取り除く道具として除草フォークを紹介しています。",
    },
    {
      title: "抜いた跡を埋め、芝生はこまめに刈る",
      desc: "埼玉県は、雑草を抜いたあとの穴は目砂で埋めるとよいとし、4〜5月の芝刈りを月4〜5回としています。芝刈り回数が多いほど芝生が密になり、雑草が生えにくくなるとしています。",
    },
  ],
  ngHeading: "5月の雑草対策で避けたいこと",
  ngs: [
    {
      title: "梅雨明けまで放置することは避けます",
      desc: "埼玉県の資料は、8〜9月を「雑草が種を付ける時期」としています。5月の小さいうちに抜くほうが手間は少なく済みます（当サイトの整理）。",
    },
    {
      title: "地上部だけをちぎることは避けます",
      desc: "東京都教育委員会は、ハマスゲは塊茎、カタバミは球根などを取り除かないと再生するとしています。",
    },
    {
      title: "芝生の周りを放置することは避けます",
      desc: "東京都教育委員会は、雑草の種子の供給源を絶つため、芝生地の周辺も除草することが重要としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>広い庭で草取りが追いつかないとき、空き家や遠方の家の庭</Hl>は、草刈り業者に相談してください。東京都教育委員会のマニュアルは、除草が追いつかない場合は芝刈りを行って雑草の勢いを弱めるとしています。業者には「根まで抜くのか、刈り取りなのか」を先に決めて伝えると、見積もりの範囲がそろいます（当サイトの整理）。
    </p>,
    <p key="2">
      除草剤を使う時期は<Link href="/josozai-sanpu-jiki/" className={A}>除草剤の散布時期</Link>、芝生の4月からの作業は<Link href="/shibafu-4gatsu-teire/" className={A}>芝生の4月の手入れ</Link>、方法ごとの違いは<Link href="/zasso-taisaku/" className={A}>雑草対策の方法比較</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "庭の草取り・草刈りを業者に相談する",
  ctaText: "広い庭や、伸びる前にまとめて片付けたい雑草は、業者に任せると安心です。",
  faqHeading: "5月の雑草でよくある質問",
  faqs: [
    {
      q: "5月に生えてくる雑草は何ですか？",
      a: "東京都教育委員会のマニュアルでは、メヒシバ・オヒシバの生育期間は4月〜10月、ハマスゲは5月〜11月です。埼玉県の資料もメヒシバを（4〜5月）、ハマスゲを（5〜9月）の欄に載せています。",
    },
    {
      q: "5月に草取りをする意味はありますか？",
      a: "あります。埼玉県のマニュアルは、発生初期に根っこから除草するのが効果的とし、4〜5月は除草をこまめに行うとしています。5月が花期の草（オオバコ・シロツメクサ・カタバミなど）は、種をつける前に抜けます。",
    },
    {
      q: "根まで抜かないとだめですか？",
      a: "草によります。東京都教育委員会は、単子葉植物はひげ根を残しても再生することは少ないので地際で刈り取る、双子葉植物は主根をなるべく深く取り除くとしています。ハマスゲの塊茎、カタバミの球根は取り除かないと再生します。",
    },
    {
      q: "草取りが追いつかないときはどうすればよいですか？",
      a: "東京都教育委員会のマニュアルは、除草が追いつかない場合は芝刈りを行って雑草の勢いを弱めるとしています。種をつけさせないことを優先します。",
    },
  ],
  related: [
    { href: "/josozai-sanpu-jiki/", label: "除草剤の散布時期", desc: "雑草が生える前と小さいうち" },
    { href: "/shibafu-zasso/", label: "芝生に雑草が増える", desc: "増える理由と対処" },
    { href: "/clover-zasso-taisaku/", label: "クローバー（シロツメクサ）の雑草対策", desc: "ほふく茎で広がる多年草" },
    { href: "/katabami-josou/", label: "カタバミの除草", desc: "5月から花が咲く多年草" },
  ],
};

export default function GogatsuZassoPage() {
  return <KnowArticle data={data} />;
}
