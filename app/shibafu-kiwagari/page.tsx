import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shibafu-kiwagari/";
const A = "text-[#2D7F3E] underline";
const SAITAMA = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20206.pdf";
const SZ_SA = "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/st2.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芝生のキワ刈り｜芝刈機が届かない建物の際や木の周りは、芝生バリカンか除草剤で年2〜3回｜お庭のミカタ",
  },
  description:
    "芝生のキワ（際）の刈り方を、埼玉県の園庭・校庭芝生マニュアルと静岡県の芝生管理マニュアルをもとに整理しました。芝生バリカン・エッジカッターの使いどころ、除草剤で際を処理する方法と注意点をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芝生のキワ刈り",
    description:
      "建物の際や樹木の周りは芝刈機で刈り込めないことが多い場所です。埼玉県は芝生バリカン、静岡県は非選択性除草剤での処理を挙げています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { way: string; use: string; note: string; src: string }[] = [
  { way: "芝生バリカン", use: "小回りが利くため、建物の際や樹木周りの芝刈りに用いる", note: "刃の進む方向へ手を出さない", src: "埼玉県" },
  { way: "ハサミ・芝刈り用バリカン", use: "芝刈機で刈り込めない植え込みの周りや建物との際", note: "大変な時間と労力がかかり、放置されがち", src: "静岡県" },
  { way: "刈払機", use: "曲線や築山の芝生を刈る。伸びすぎた芝や雑草の刈り込み", note: "エンジン式と充電式がある", src: "埼玉県" },
  { way: "ターフカッター・エッジカッター", use: "伸びた芝生の縁を切りそろえる", note: "芝の根が張る前に、早めに切るのがおすすめ", src: "埼玉県" },
  { way: "非選択性の除草剤", use: "芝刈機で刈り込めない際の部分を枯らす", note: "ラベルの使用方法を守る。周りの樹木の葉にはかけない。年2〜3回の処理", src: "静岡県" },
  { way: "芝見切り材・芝エッジ材", use: "芝生と砂地の境目を維持する", note: "芝生施工時に地中に埋め込み、芝の根の侵食を防ぐ", src: "埼玉県" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">方法・道具</th>
          <th className="border px-2 py-2 text-left">使う場面</th>
          <th className="border px-2 py-2 text-left">注意・補足</th>
          <th className="border px-2 py-2 text-left">出典</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.way}>
            <td className="border px-2 py-2">{r.way}</td>
            <td className="border px-2 py-2">{r.use}</td>
            <td className="border px-2 py-2">{r.note}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、埼玉県「園庭・校庭芝生マニュアル」第5章（芝刈りの道具、その他の維持管理作業「芝切り、見切り材」）と、静岡県「セントオーガスティングラスによる芝生管理マニュアル」（芝刈機で刈り込めない場所の管理について）を開き、際の処理に関わる記載を当サイトで1つの表にまとめました。静岡県のマニュアルはセントオーガスティングラスの芝生を対象にした資料です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shibafu-kiwagari",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "芝生のキワ刈り｜芝刈機が届かない建物の際や木の周りは、芝生バリカンか除草剤で年2〜3回",
  breadcrumbLabel: "芝生のキワ刈り",
  tagChips: ["芝生", "キワ刈り", "際刈り", "芝生バリカン", "エッジ"],
  ldHeadline: "芝生のキワ刈り｜芝刈機が届かない建物の際や木の周りは、芝生バリカンか除草剤で年2〜3回",
  ldDescription:
    "芝刈機が届かない芝生の際（キワ）の刈り方と、除草剤で際を処理する方法・注意点を、埼玉県と静岡県の芝生管理マニュアルをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        芝生のキワ（建物の際や樹木の周り）は、<Hl>芝刈機では刈り込めないことが多い場所</Hl>です。埼玉県の園庭・校庭芝生マニュアルは、芝生バリカンを「小回りが利くため、建物の際や樹木周りの芝刈りに用いられる」道具とし、使うときは刃の進む方向へ手を出さないようにするとしています（出典：<a href={SAITAMA} className={A} target="_blank" rel="noopener noreferrer">埼玉県「園庭・校庭芝生マニュアル」第5章（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        静岡県の芝生管理マニュアルは、際をハサミやバリカンで刈るのは大変な時間と労力がかかり、結局放置されることが多いとして、<Hl>芝刈機で刈り込めない部分は非選択性の除草剤で枯らす</Hl>ことを勧め、年に2〜3回の処理で見た目が格段に向上するとしています（出典：<a href={SZ_SA} className={A} target="_blank" rel="noopener noreferrer">静岡県「セントオーガスティングラスによる芝生管理マニュアル」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "芝生のキワは、芝生バリカンなどで刈るか、除草剤で際の部分を枯らしておくかの2つの方法があります。",
  conclusionBody: (
    <>
      <p>2つの資料にある際の処理の方法を、当サイトで1つの表にまとめると次のとおりです。</p>
      {table}
      <p className="mt-4">
        静岡県のマニュアルは、刈らずに放置された際の部分は見た目が悪いだけでなく、<Hl>雑草がはびこり、芝生への雑草の発生源にもなる</Hl>としています。刈る方法と除草剤のどちらを選ぶ場合も、際を放置しないことが共通の考え方です。
      </p>
    </>
  ),
  basicsHeading: "芝生のキワ刈りの4つの基本",
  basicsIntro: <p>以下は、埼玉県・静岡県の資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "芝刈機は際まで届かない",
      desc: "静岡県のマニュアルは、植え込みの周りや建物との際などの芝生は、芝刈機では刈り込めないことが多々あるとしています。",
    },
    {
      title: "芝生バリカンは小回りが利く",
      desc: "埼玉県のマニュアルは、芝生バリカンを建物の際や樹木周りの芝刈りに用いる道具としています。",
    },
    {
      title: "縁は根が張る前に切る",
      desc: "埼玉県のマニュアルは、ターフカッターやエッジカッターで伸びた芝生の縁を切りそろえ、芝の根が張る前に早めに切るのがおすすめとしています。",
    },
    {
      title: "除草剤は年2〜3回",
      desc: "静岡県のマニュアルは、芝刈機で刈り込めない部分を非選択性の除草剤で処理し、年に2〜3回、芝生との際を処理するだけで見た目が格段に向上するとしています。",
    },
  ],
  stepsHeading: "芝生のキワを整える4つの手順",
  stepsIntro: <p>埼玉県・静岡県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "芝刈機で刈れる部分を先に刈る",
      desc: "芝刈機で刈り込めずに残った建物の際や植え込みの周りが、キワ刈りの対象になります。",
    },
    {
      title: "残った際を芝生バリカンで刈る",
      desc: "埼玉県のマニュアルの使い方です。刃の進む方向へ手を出さないようにします。",
    },
    {
      title: "はみ出した縁を切りそろえる",
      desc: "埼玉県はターフカッター・エッジカッターで伸びた縁を切りそろえるとしています。静岡県も、はみ出した地上ほふく茎は定期的に切り取り、芝生との境を明確にしておくとしています。",
    },
    {
      title: "刈るのが難しい際は除草剤で処理する",
      desc: "静岡県のマニュアルの方法です。非選択性の除草剤をラベルの使用方法どおりに使い、周りの樹木の葉にはかけないようにします。",
    },
  ],
  ngHeading: "芝生のキワ刈りで避けたいこと",
  ngs: [
    {
      title: "刈れない際をそのまま放置することは避けます",
      desc: "静岡県のマニュアルは、放置された部分は見た目が悪いだけでなく、雑草がはびこり、芝生への雑草発生源にもなるとしています。",
    },
    {
      title: "除草剤を樹木の葉にかけることは避けます",
      desc: "静岡県のマニュアルは、芝生地の周囲に樹木などがある場合、樹木にも除草剤の影響が出ないよう注意し、樹木の葉には除草剤をかけないとしています。",
    },
    {
      title: "除草剤をまいた直後に芝生を使うことは避けます",
      desc: "静岡県のマニュアルは、ラベルの使用方法を守るよう求め、影響が心配な場合は散布してから数日間は利用を控えると安心としています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>芝生の面積が広く際の延長が長いとき、ブロック塀や花壇のまわりなど際の部分が多いとき</Hl>は、草刈りや庭の手入れの業者に相談してください。「芝刈機が届かない際も刈ってほしい」「除草剤は使わないでほしい」など、際の扱いを先に伝えると作業の内容を共有しやすくなります。
    </p>,
    <p key="2">
      はみ出したランナーの扱いは<Link href="/shibafu-runner/" className={A}>芝生のランナー（ほふく茎）とは</Link>、芝刈りや年間の管理は<Link href="/shibafu-teire/" className={A}>芝生の手入れの基本</Link>、除草剤をまく時期は<Link href="/josozai-sanpu-jiki/" className={A}>除草剤の散布時期</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "芝生の手入れを業者に相談する",
  ctaText: "広い芝生の芝刈りや、際の多い庭の草刈りは、業者に任せると安心です。",
  faqHeading: "芝生のキワ刈りでよくある質問",
  faqs: [
    {
      q: "芝刈機が届かない際はどうやって刈ればよいですか？",
      a: "埼玉県の園庭・校庭芝生マニュアルは、小回りが利く芝生バリカンを建物の際や樹木周りの芝刈りに用いる道具としています。静岡県のマニュアルはハサミや芝刈り用バリカンも挙げていますが、時間と労力がかかるとしています。",
    },
    {
      q: "芝生の際に除草剤を使ってもよいですか？",
      a: "静岡県のマニュアルは、芝刈機で刈り込めない部分は非選択性の除草剤で枯らすことを勧め、ラベルの使用方法を守ること、周りの樹木の葉にはかけないことを挙げています。",
    },
    {
      q: "キワ刈りや際の処理はどのくらいの頻度で行いますか？",
      a: "静岡県のマニュアルは、除草剤で処理する場合、年に2〜3回、芝生との際を処理するだけで見た目が格段に向上するとしています。",
    },
    {
      q: "芝生が花壇や砂利に広がらないようにするには？",
      a: "埼玉県のマニュアルは、芝見切り材・芝エッジ材を芝生施工時に地中に埋め込み、芝の根の侵食を防いで芝生と砂地の境目を維持するとしています。伸びた縁はターフカッターやエッジカッターで切りそろえます。",
    },
  ],
  related: [
    { href: "/shibafu-runner/", label: "芝生のランナー（ほふく茎）とは", desc: "はみ出した分の切り方" },
    { href: "/shibafu-teire/", label: "芝生の手入れの基本", desc: "芝刈り・水やり・年間管理" },
    { href: "/josozai-sanpu-jiki/", label: "除草剤の散布時期", desc: "土壌処理剤と茎葉処理剤の時期" },
    { href: "/shibafu-zasso/", label: "芝生に雑草が増える", desc: "増える理由と対処の判断" },
  ],
};

export default function ShibafuKiwagariPage() {
  return <KnowArticle data={data} />;
}
