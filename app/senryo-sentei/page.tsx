import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/senryo-sentei/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "千両（センリョウ）の剪定｜時期は3月。伸び放題や株の大きくなり過ぎは花・実が付かない原因に｜お庭のミカタ",
  },
  description:
    "千両（センリョウ）の剪定の時期と、花や実が付かないときの見直し方を、熊本市の樹木管理ガイドライン、大和市の園芸相談の事例、世田谷区の植栽ガイドブックをもとにまとめました。実を侵す病気について、福岡県の資料もあわせて整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "千両（センリョウ）の剪定",
    description:
      "センリョウの剪定時期、花や実が付かないときの原因として挙げられていること、株分けと整枝、実腐病を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; what: string; src: string }[] = [
  {
    item: "剪定時期",
    what: "3月。樹形は株立ち。寒さに弱いので、標高の高い山間部には植栽できない",
    src: "熊本市",
  },
  {
    item: "性質",
    what: "常緑低木。鑑賞時期は実（11〜12月）。半陰を好む。株立ちとなる。実は朱紅及び黄色",
    src: "世田谷区",
  },
  {
    item: "花が付かない（相談）",
    what: "毎年伸び放題のため、剪定しなかったためと思われる",
    src: "大和市",
  },
  {
    item: "1m位に伸び、花も実も付かない（相談）",
    what: "長いこと植え替えず、株が大きくなり過ぎて丈夫な幹になっていないのが主たる原因。株分けと整枝が必要",
    src: "大和市",
  },
  {
    item: "生育は良いが花が咲かない（相談）",
    what: "地植えは日当たり・窒素肥料の多さを見直す。剪定はあまりしない方が良い",
    src: "大和市",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">資料の記載</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.what}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に熊本市の公共施設樹木の維持管理ガイドライン（令和5年8月）の主要樹種の表、世田谷区の植栽ガイドブックの特性表、大和市の園芸相談の事例《庭木》のセンリョウの5件を開き、剪定と花・実に関する記載を当サイトで並べました。大和市の事例は個別の相談への回答のため、「剪定しなかったため」と「剪定はあまりしない方が良い」の両方があります。株の状態によって答えが分かれる点にご注意ください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "senryo-sentei",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "千両（センリョウ）の剪定｜時期は3月。伸び放題や株の大きくなり過ぎは花・実が付かない原因に",
  breadcrumbLabel: "千両（センリョウ）の剪定",
  tagChips: ["センリョウ", "千両", "常緑低木", "株立ち", "実が付かない"],
  ldHeadline: "千両（センリョウ）の剪定｜時期は3月。伸び放題や株の大きくなり過ぎは花・実が付かない原因に",
  ldDescription:
    "千両（センリョウ）の剪定の時期と、花や実が付かないときの見直し方を、熊本市・大和市・世田谷区・福岡県の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        熊本市の公共施設樹木の維持管理ガイドラインでは、センリョウの剪定時期を<Hl>3月</Hl>とし、樹形を<Hl>株立ち</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」（PDF）</a>、2026年11月23日確認）。大和市の園芸相談の事例では、花が付かない相談に対して、毎年伸び放題のため<Hl>剪定しなかったためと思われる</Hl>と回答しています。
      </p>
      <p>
        本記事では、これらの資料と世田谷区・福岡県の資料を照合し、庭のセンリョウの剪定と、花や実が付かないときの見直し方を整理します。
      </p>
    </>
  ),
  conclusionTitle: "センリョウの剪定は3月を目安にします。伸び放題で花が付かない株は剪定で整え、大きくなり過ぎた株は株分けと整枝を検討します。",
  conclusionBody: (
    <>
      <p>
        大和市の園芸相談の事例では、1m位に伸びて花も実も付かない相談に対し、<Hl>長いこと植替えず、株が大きくなり過ぎて丈夫な幹になっていない</Hl>のが主たる原因とし、株分けと整枝が必要ではないかと回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市「園芸相談の事例《庭木》」（PDF）</a>、2026年11月23日確認）。資料の記載を並べると、次のとおりです（世田谷区は<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">掲載樹種特性表（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "センリョウの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定時期は3月",
      desc: "熊本市のガイドラインでは、センリョウの剪定時期を3月としています。世田谷区の特性表では、鑑賞時期を実の付く11〜12月としています。",
    },
    {
      title: "株立ちになる低木",
      desc: "熊本市のガイドライン・世田谷区の特性表とも、センリョウを株立ちの樹形としています。1本の幹を仕立てる木ではなく、根元から出る幹の更新が中心になります。",
    },
    {
      title: "半陰を好み、寒さに弱い",
      desc: "世田谷区の特性表では半陰を好むとし、熊本市のガイドラインでは寒さに弱いので標高の高い山間部には植栽できないとしています。",
    },
    {
      title: "花・実が付かない原因は1つではない",
      desc: "大和市の園芸相談では、剪定しなかったため、株が大きくなり過ぎたため、日当たり・肥料のためなど、相談ごとに異なる原因を挙げています。",
    },
  ],
  stepsHeading: "庭のセンリョウを整える4つの手順",
  stepsIntro: <p>熊本市のガイドラインと大和市の園芸相談の回答をもとに、当サイトで整理した流れです。</p>,
  steps: [
    {
      title: "3月に、株の状態を見る",
      desc: "熊本市のガイドラインの剪定時期は3月です。実の鑑賞が終わったあとに、幹の本数・高さ・込み具合を確かめます。",
    },
    {
      title: "伸び放題の株は剪定で整える",
      desc: "大和市の園芸相談では、毎年そのままで伸び放題の株が花を付けない相談に、剪定しなかったためと思われると回答しています。",
    },
    {
      title: "大きくなり過ぎた株は、株分けと整枝を検討する",
      desc: "大和市の園芸相談では、長いこと植え替えず株が大きくなり過ぎて丈夫な幹になっていない場合に、株分けと整枝が必要ではないかと回答しています。",
    },
    {
      title: "よく育っているのに咲かない株は、日当たりと肥料を見直す",
      desc: "大和市の園芸相談では、生育は良いが花が咲かない株について、地植えはもう少し日が当たるようにし、窒素肥料が多いと回答し、剪定はあまりしない方が良いとしています。",
    },
  ],
  ngHeading: "センリョウの手入れで避けたいこと",
  ngs: [
    {
      title: "何年も伸び放題のままにすることは避けます",
      desc: "大和市の園芸相談では、毎年伸び放題の株が花を付けない原因を、剪定しなかったためと思われるとしています。",
    },
    {
      title: "よく茂っている株を強く切り続けることは避けます",
      desc: "大和市の園芸相談では、生育は良いが花が咲かない株について、肥料を見直したうえで剪定はあまりしない方が良いとしています。",
    },
    {
      title: "傷んだ実や芽を株元に残すことは避けます",
      desc: "福岡県の資料では、センリョウの実腐病は花・果実・葉・茎を侵すとし、発病株や芽は除去・処分するとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きくなり過ぎて株分けが必要、ほかの庭木と一緒に植えたセンリョウが次々に枯れる</Hl>といった場合は、庭木の植え替えや手入れに対応する業者に相談すると作業がまとまります。依頼するときは、株の高さ、何年植え替えていないか、花や実の付き方を伝えてください。
    </p>,
    <p key="2">
      同じく赤い実を楽しむ低木は<Link href="/nanten-sentei/" className={A}>南天の剪定</Link>、日陰の庭に向く植物は<Link href="/hikage-niwa-shokusai/" className={A}>日陰の庭の植栽</Link>、庭木の植え替えは<Link href="/niwaki-ishoku/" className={A}>庭木の移植</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。実腐病の出典は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県「【花き花木】病害虫・雑草の発生生態と防除」（PDF）</a>（2026年11月23日確認）です。福岡県の資料は花き・花木の生産を対象としたもので、庭のセンリョウでは読み替えが必要です。
    </p>,
  ],
  ctaHeading: "株の高さと植え替えの時期を伝えて相談する",
  ctaText:
    "センリョウは剪定しなくても、切り過ぎても花や実に影響が出ることがあります。大きくなった株の株分けは、業者と相談すると安心です。",
  faqHeading: "千両（センリョウ）の剪定のよくある質問",
  faqs: [
    {
      q: "センリョウの剪定はいつがよいですか？",
      a: "熊本市の公共施設樹木の維持管理ガイドラインでは、センリョウの剪定時期を3月としています。",
    },
    {
      q: "センリョウに花が咲かず、実も付きません。",
      a: "大和市の園芸相談の事例では、毎年伸び放題の株は剪定しなかったため、株が大きくなり過ぎた場合は丈夫な幹になっていないため、生育が良いのに咲かない場合は日当たりや肥料のためと、相談ごとに異なる原因を挙げています。",
    },
    {
      q: "1mくらいに伸びたセンリョウはどうすればよいですか？",
      a: "大和市の園芸相談の事例では、長いこと植え替えず株が大きくなり過ぎた株について、株分けと整枝が必要ではないかと回答しています。",
    },
    {
      q: "実が茶色くなって落ちてしまいます。",
      a: "福岡県の資料では、センリョウの実腐病は果実が侵されると褐色に変色し次々に落下するとし、発病株や芽は除去・処分するとしています。夏期の多雨・低温、9月の多雨が発病を助長するとしています。",
    },
  ],
  related: [
    {
      href: "/nanten-sentei/",
      label: "南天の剪定",
      desc: "赤い実を楽しむ低木",
    },
    {
      href: "/hikage-niwa-shokusai/",
      label: "日陰の庭の植栽",
      desc: "半日陰に向く植物",
    },
    {
      href: "/niwaki-ishoku/",
      label: "庭木の移植",
      desc: "植え替えの時期と注意点",
    },
    {
      href: "/kaboku-kaika-teire/",
      label: "花木が咲かないときの手入れ",
      desc: "花が付かない原因の見直し",
    },
  ],
};

export default function SenryoSenteiPage() {
  return <KnowArticle data={data} />;
}
