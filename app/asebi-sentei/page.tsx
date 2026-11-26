import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/asebi-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "アセビ（馬酔木）の剪定｜花が終わった4〜6月に枝抜き程度。7月中旬には枝先に翌年の花芽ができる｜お庭のミカタ",
  },
  description:
    "アセビの剪定の時期と切り方を、世田谷区の植栽ガイドブック、熊本市の樹木管理ガイドライン、芦屋市の街路樹等維持管理基本書をもとにまとめました。花芽ができる時期と、強く切らない理由も整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "アセビ（馬酔木）の剪定",
    description:
      "アセビの剪定時期（花後の4〜6月）、枝抜き程度にとどめる理由、7月中旬にできる花芽との関係を、公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; when: string; note: string }[] = [
  {
    src: "世田谷区",
    when: "手入時期 4〜5月",
    note: "常緑・低木。鑑賞時期は花2〜4月。生育は遅い。花はツボ状で白色、紅花種もある",
  },
  {
    src: "熊本市",
    when: "剪定時期 5〜6月",
    note: "樹形は株立ち。強剪定を行うと弱ることがあるので、枝抜き程度でよい",
  },
  {
    src: "芦屋市",
    when: "刈込み 6月（1回／年）",
    note: "花芽分化期は7月中旬、花芽の位置は頂芽（枝先）、開花期は3月下旬〜4月下旬",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">時期</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月24日に世田谷区の植栽ガイドブック（掲載樹種特性表）、熊本市の公共施設樹木の維持管理ガイドライン（熊本平野部の主要樹種の特徴）、芦屋市の街路樹等維持管理基本書（低木の刈込み時期と花芽分化期の表）を開き、アセビの記載を当サイトで並べました。3つの資料は地域も対象（庭・公共施設・街路）も異なるため、時期には幅があります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "asebi-sentei",
  published: "2026-11-24",
  updatedLabel: "2026年11月24日",
  h1: "アセビ（馬酔木）の剪定｜花が終わった4〜6月に枝抜き程度。7月中旬には枝先に翌年の花芽ができる",
  breadcrumbLabel: "アセビの剪定",
  tagChips: ["アセビ", "馬酔木", "常緑低木", "花木", "花芽"],
  ldHeadline: "アセビ（馬酔木）の剪定｜花が終わった4〜6月に枝抜き程度。7月中旬には枝先に翌年の花芽ができる",
  ldDescription:
    "アセビの剪定の時期と方法を、世田谷区・熊本市・芦屋市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        アセビの剪定は、<Hl>花が終わった4〜6月に、混み合った枝を抜く程度</Hl>にとどめるのが基本です。熊本市のガイドラインは剪定時期を5〜6月とし、「強剪定を行うと弱ることがあるので、枝抜き程度でよい」としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」（PDF）</a>、2026年11月24日確認）。
      </p>
      <p>
        芦屋市の街路樹等維持管理基本書では、アセビの花芽分化期を7月中旬、花芽の位置を頂芽（枝先）としています。夏以降に枝先を切りそろえると、翌春に咲くはずの花芽を落とすことになります。本記事では、庭のアセビを剪定するときの時期と切り方を、自治体の資料から整理します。
      </p>
    </>
  ),
  conclusionTitle: "アセビは花後〜6月までに、込み合った枝を付け根から抜いて整えます。7月以降に枝先を刈り込むと、翌春の花が減ります。",
  conclusionBody: (
    <>
      <p>
        世田谷区の植栽ガイドブックは、アセビの手入時期を4〜5月、鑑賞時期（花）を2〜4月としています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「植栽ガイドブック」掲載樹種特性表（PDF）</a>、2026年11月24日確認）。3つの資料の記載を並べると、次のとおりです（芦屋市は<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">街路樹等維持管理基本書（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "アセビの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は花が終わった後、6月までに",
      desc: "世田谷区は手入時期を4〜5月、熊本市は剪定時期を5〜6月、芦屋市は低木の刈込みを6月に年1回としています。いずれも花（2〜4月）が終わった後の時期です。",
    },
    {
      title: "翌年の花芽は7月中旬に枝先にできる",
      desc: "芦屋市の基本書の花芽分化期の表では、アセビの花芽分化期は7月中旬、花芽の位置は頂芽、開花期は3月下旬〜4月下旬です。花芽ができた後に枝先を切ると、その枝の花はなくなります。",
    },
    {
      title: "強く切ると弱ることがある",
      desc: "熊本市のガイドラインは、強剪定を行うと弱ることがあるので枝抜き程度でよいとしています。世田谷区のガイドブックも「生育は遅い」としており、切った枝が元に戻るまで時間がかかります。",
    },
    {
      title: "樹形は株立ち",
      desc: "熊本市のガイドラインは、アセビの樹形を株立ちとしています。根元から複数の幹が立つ形を活かし、込み合った部分を間引いて整えます。",
    },
  ],
  stepsHeading: "庭のアセビを剪定する4つの手順",
  stepsIntro: <p>熊本市・芦屋市の資料の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "花が終わったら、花がらと枯れ枝を確認する",
      desc: "花（2〜4月）が終わったら、枯れた枝や弱った枝がないかを見ます。作業は6月までに終える予定で始めます。",
    },
    {
      title: "込み合った枝を付け根から抜く",
      desc: "熊本市の記載どおり、枝抜き程度にとどめます。内側に向かう枝や、ほかの枝と交差している枝を付け根で切り、株の中に光と風が通るようにします。",
    },
    {
      title: "飛び出した枝だけを、分かれ目で切り戻す",
      desc: "全体を同じ高さに刈りそろえるのではなく、輪郭から大きく飛び出した枝だけを、下の分かれ目まで切り戻します。強剪定は避けます。",
    },
    {
      title: "7月以降は枝先を切らない",
      desc: "芦屋市の表では、7月中旬に枝先で翌年の花芽ができます。夏以降は、枯れ枝の除去など必要な作業だけにとどめます。",
    },
  ],
  ngHeading: "アセビの剪定で避けたいこと",
  ngs: [
    {
      title: "夏から冬に枝先を刈り込むことは避けます",
      desc: "花芽分化期（7月中旬）より後に枝先を切ると、翌春の花芽を切り落とすことになります。",
    },
    {
      title: "一度に大きく切り詰めることは避けます",
      desc: "熊本市のガイドラインは、強剪定を行うと弱ることがあるとしています。大きさを抑えたい場合は、数年に分けて少しずつ枝を抜きます。",
    },
    {
      title: "年に何度も刈り込むことは避けます",
      desc: "芦屋市の基本書は、アセビの刈込みを6月に年1回としています。形が気になっても、花後の1回にまとめて作業します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      アセビは低木で、多くの場合は自分で剪定できる高さです。<Hl>株が大きくなり過ぎて形を作り直したい、ほかの庭木とまとめて手入れしたい</Hl>といった場合は、剪定業者に相談してください。依頼するときは、花後（4〜6月）に作業してほしいことと、花芽を残したいことを伝えます。
    </p>,
    <p key="2">
      花が咲く時期と剪定時期の関係は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、同じツツジ科の花木は<Link href="/tsutsuji-satsuki-teire/" className={A}>ツツジ・サツキの剪定時期</Link>や<Link href="/shakunage-sentei/" className={A}>シャクナゲの剪定</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "花後の時期を指定して相談する",
  ctaText:
    "アセビは強く切ると弱りやすく、時期を外すと翌年の花が減る木です。形を大きく直したいときは、花後に作業できる業者に相談すると安心です。",
  faqHeading: "アセビの剪定のよくある質問",
  faqs: [
    {
      q: "アセビの剪定はいつがよいですか？",
      a: "花が終わった後、6月までです。世田谷区の植栽ガイドブックは手入時期を4〜5月、熊本市のガイドラインは剪定時期を5〜6月、芦屋市の基本書は低木の刈込みを6月としています。",
    },
    {
      q: "秋や冬にアセビを剪定してもよいですか？",
      a: "芦屋市の基本書の表では、アセビの花芽は7月中旬に枝先（頂芽）にできます。秋や冬に枝先を切ると翌春の花芽を落とすため、枯れ枝の除去など必要な作業だけにとどめます。",
    },
    {
      q: "アセビを強く切り詰めても大丈夫ですか？",
      a: "熊本市のガイドラインは、強剪定を行うと弱ることがあるので枝抜き程度でよいとしています。世田谷区のガイドブックも生育は遅いとしています。",
    },
    {
      q: "アセビの花はいつ咲きますか？",
      a: "世田谷区のガイドブックは鑑賞時期（花）を2〜4月、芦屋市の基本書は開花期を3月下旬〜4月下旬としています。花はツボ状で白色、紅花種もあります（世田谷区）。",
    },
  ],
  related: [
    { href: "/yatsude-sentei/", label: "ヤツデの剪定", desc: "日陰に強い常緑低木" },
    {
      href: "/shimotsuke-sentei/",
      label: "シモツケの剪定",
      desc: "枝抜き程度にとどめる低木",
    },
    {
      href: "/kaboku-kaika-teire/",
      label: "花木の開花と手入れ",
      desc: "花芽と剪定時期の関係",
    },
    {
      href: "/tsutsuji-satsuki-teire/",
      label: "ツツジ・サツキの剪定時期",
      desc: "花後すぐに切る花木",
    },
    {
      href: "/shakunage-sentei/",
      label: "シャクナゲの剪定",
      desc: "同じツツジ科の花木",
    },
    {
      href: "/jinchouge-sentei/",
      label: "ジンチョウゲの剪定",
      desc: "早春に咲く常緑低木",
    },
  ],
};

export default function AsebiSenteiPage() {
  return <KnowArticle data={data} />;
}
