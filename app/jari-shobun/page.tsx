import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/jari-shobun/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA = "https://www.city.setagaya.lg.jp/02241/23967.html";
const CHUO = "https://www.city.chuo.lg.jp/a0039/faq/kurashi/gomi/bunbetsu/0008.html";
const MORIOKA =
  "https://www.city.morioka.iwate.jp/_res/projects/default_project/_page_/001/001/159/tonanziten.pdf";
const YOKOHAMA =
  "https://www.city.yokohama.lg.jp/kurashi/sumai-kurashi/gomi-recycle/ongen/pamphlet/wakedashi.files/All.pdf";
const HIROSHIMA = "https://www.city.hiroshima.lg.jp/faq/gomi-kankyo/1001569/1006452.html";

export const metadata: Metadata = {
  title: {
    absolute: "庭の砂利の処分方法｜区・市によって「収集しない」と「燃えないごみ」に分かれる｜お庭のミカタ",
  },
  description:
    "庭の砂利・土・石の処分方法を、世田谷区・中央区・盛岡市・横浜市・広島市の公式な案内を並べて整理しました。集積所に出せない自治体では処理業者や販売店への依頼、出せる自治体でも袋の条件や量の扱いがあります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "庭の砂利の処分方法",
    description:
      "砂利・土・石を家庭ごみとして出せるかどうかを、5つの区・市の案内で比べました。出せない場合の依頼先と、出せる場合の条件をまとめています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { city: string; rule: string; how: string }[] = [
  {
    city: "世田谷区",
    rule: "収集しない（土・砂・石・ブロック・レンガ）",
    how: "処理業者などに引き取りを依頼。区のページに、区で把握している処理業者が掲載されている",
  },
  {
    city: "中央区",
    rule: "石・ブロックはごみとして収集しない",
    how: "販売店に問い合わせるか、許可を受けた収集業者に依頼。鉢植え等の園芸用土は回収・再生の取り組みあり",
  },
  {
    city: "盛岡市（都南地域）",
    rule: "「石、土砂」は収集・受入しないもの",
    how: "販売店または専門業者等に相談",
  },
  {
    city: "横浜市",
    rule: "燃えないごみ",
    how: "「砂利や土などは、袋に入れてお出しください」と案内",
  },
  {
    city: "広島市",
    rule: "不燃ごみ（「プランター等の土や砂、底石など」）",
    how: "透明または半透明のじょうぶなポリ袋に入れる（土のう袋等を除く）",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">区・市</th>
          <th className="border px-2 py-2 text-left">砂利・土・石の扱い</th>
          <th className="border px-2 py-2 text-left">出し方・依頼先</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.city}>
            <td className="border px-2 py-2">{r.city}</td>
            <td className="border px-2 py-2">{r.rule}</td>
            <td className="border px-2 py-2">{r.how}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に各区・市の公式ページと資料を開き、砂利・土・石の扱いを当サイトで並べました。5つの区・市は扱いの違いを示すために選んだもので、全国の傾向を集計したものではありません。お住まいの市区町村の扱いは、その市区町村の分別案内でご確認ください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "jari-shobun",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "庭の砂利の処分方法｜区・市によって「収集しない」と「燃えないごみ」に分かれる",
  breadcrumbLabel: "庭の砂利の処分方法",
  tagChips: ["砂利の処分", "土・石", "ごみの分別", "処理業者", "庭の片付け"],
  ldHeadline: "庭の砂利の処分方法｜区・市によって「収集しない」と「燃えないごみ」に分かれる",
  ldDescription:
    "庭の砂利・土・石の処分方法を、世田谷区・中央区・盛岡市・横浜市・広島市の公式な案内を比べて解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        世田谷区では、家庭菜園やガーデニングなどで使用した土や砂、石やブロック、レンガは、<Hl>廃棄物に該当しない、または清掃工場などのごみ処理施設の故障につながる恐れがあるため区では収集できません</Hl>としています（出典：<a href={SETAGAYA} className={A} target="_blank" rel="noopener noreferrer">世田谷区「土・砂や石・ブロック・レンガの処分」</a>、2026年11月23日確認）。一方、横浜市の分別案内では、燃えないごみの出し方として<Hl>砂利や土などは、袋に入れてお出しください</Hl>としています。
      </p>
      <p>
        このように、庭の砂利を家庭ごみとして出せるかどうかは、区・市によって異なります。本記事では、5つの区・市の案内を並べ、処分の進め方を整理します。
      </p>
    </>
  ),
  conclusionTitle: "まずお住まいの市区町村の分別案内で「砂利」「土・石」の扱いを確認します。収集しない自治体では、処理業者や販売店への依頼が案内されています。",
  conclusionBody: (
    <>
      <p>
        盛岡市（都南地域）の資源・ごみ分別辞典では「石、土砂」を<Hl>収集・受入しないもの</Hl>とし、販売店または専門業者等に相談するよう案内しています（出典：<a href={MORIOKA} className={A} target="_blank" rel="noopener noreferrer">盛岡市「資源・ごみ分別辞典（都南地域）」（PDF）</a>、2026年11月23日確認）。5つの区・市の扱いを並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "砂利の処分について知っておきたい4つの点",
  basicsIntro: <p>以下は、各区・市の案内に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "集積所に出せない自治体がある",
      desc: "世田谷区は土・砂・石・ブロック・レンガを収集せず、中央区は石・ブロックをごみとして収集しないとしています。盛岡市（都南地域）も「石、土砂」を収集・受入しないものとしています。",
    },
    {
      title: "出せる自治体でも袋の条件がある",
      desc: "横浜市は砂利や土などを袋に入れて燃えないごみに出すよう案内しています。広島市は「プランター等の土や砂、底石など」を不燃ごみの例に挙げ、透明または半透明のじょうぶなポリ袋（土のう袋等を除く）に入れるとしています。",
    },
    {
      title: "一度に多く出る場合は扱いが変わる",
      desc: "横浜市の分別案内では、引越しや自ら庭木の剪定を行うなど一度に多量のごみを出す場合を「一時多量ごみ」とし、通常の集積場所とは別の処分方法を案内しています。",
    },
    {
      title: "工事で出た砂利は工事業者に",
      desc: "横浜市の分別案内では、ブロック・フェンス・構造物など、業者に工事を頼んで出たごみは、工事を請け負った業者に処理を依頼するよう案内しています。",
    },
  ],
  stepsHeading: "庭の砂利を処分する4つの手順",
  stepsIntro: <p>各区・市の案内をもとに、当サイトで整理した流れです。</p>,
  steps: [
    {
      title: "お住まいの市区町村の分別案内で「砂利」を調べる",
      desc: "分別辞典や「ごみとして取り扱えないもの」の一覧に、砂利・土・石の扱いが載っていることがあります。載っていない場合は、清掃の担当窓口に問い合わせます。",
    },
    {
      title: "量を確かめる",
      desc: "袋に入れて出せる自治体でも、庭一面の砂利を撤去するような量は一時多量ごみとして扱われることがあります。横浜市は一時多量ごみの申し込み先を案内しています。",
    },
    {
      title: "収集しない場合は、案内されている依頼先に連絡する",
      desc: "世田谷区は区で把握している処理業者をページに掲載しています。中央区は販売店か許可を受けた収集業者、盛岡市（都南地域）は販売店または専門業者等への相談を案内しています。",
    },
    {
      title: "外構工事に伴う撤去は、工事業者に処分まで含めて頼む",
      desc: "砂利を撤去して別の舗装や植栽に変える場合は、撤去した砂利の処分を見積もりに含めてもらうと、依頼先が1つにまとまります。",
    },
  ],
  ngHeading: "砂利の処分で避けたいこと",
  ngs: [
    {
      title: "公園や空き地に撒くことは避けます",
      desc: "世田谷区は、土・砂・石などを集積所に出したり、公園等に撒くなどの行為は不法投棄に該当するため絶対に行わないよう案内しています。",
    },
    {
      title: "収集しない自治体で集積所に出すことは避けます",
      desc: "世田谷区は、ごみとして出さないよう案内しています。収集の対象かどうかは、出す前に分別案内で確かめます。",
    },
    {
      title: "土のう袋のまま出すことは避けます（広島市の場合）",
      desc: "広島市は、不燃ごみを透明または半透明のじょうぶなポリ袋に入れるとし、土のう袋等を除くとしています。袋の指定は自治体ごとに確認します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>庭一面の砂利を撤去する、砂利の下に防草シートや土が混ざっている、撤去後に別の仕上げにしたい</Hl>といった場合は、撤去と処分をまとめて業者に依頼すると作業が一度で済みます。依頼するときは、砂利を敷いている面積、敷いた厚さの目安、防草シートの有無を伝えてください。
    </p>,
    <p key="2">
      砂利敷きの基礎は<Link href="/jarishiki/" className={A}>庭の砂利敷きの基礎知識</Link>、防犯砂利は<Link href="/bohan-jari-erabikata/" className={A}>防犯砂利の選び方</Link>、庭の手入れの負担を減らす整理は<Link href="/niwajimai/" className={A}>庭じまい</Link>、剪定枝の出し方は<Link href="/senteieda-shobun/" className={A}>剪定枝・刈り草の処分方法</Link>にまとめています。中央区の案内は<a href={CHUO} className={A} target="_blank" rel="noopener noreferrer">中央区「土・石・ブロックを処分したいのですが。」</a>、横浜市は<a href={YOKOHAMA} className={A} target="_blank" rel="noopener noreferrer">横浜市「資源とごみの分け方・出し方」（2026年9月発行・PDF）</a>、広島市は<a href={HIROSHIMA} className={A} target="_blank" rel="noopener noreferrer">広島市「不燃ごみとはどのようなものですか。」</a>（いずれも2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "面積と防草シートの有無を伝えて相談する",
  ctaText:
    "砂利を家庭ごみとして出せるかどうかは自治体ごとに異なります。量が多い場合や撤去後の仕上げも考えたい場合は、業者と相談すると安心です。",
  faqHeading: "砂利の処分のよくある質問",
  faqs: [
    {
      q: "庭の砂利は燃えないごみに出せますか？",
      a: "自治体によって異なります。横浜市は燃えないごみとして袋に入れて出すよう案内しています。世田谷区は土・砂・石などを区では収集しないとし、盛岡市（都南地域）は「石、土砂」を収集・受入しないものとしています。",
    },
    {
      q: "自治体が収集しない場合、どこに頼めばよいですか？",
      a: "世田谷区は区で把握している処理業者をページに掲載しています。中央区は販売店に問い合わせるか許可を受けた収集業者に依頼するよう、盛岡市（都南地域）は販売店または専門業者等に相談するよう案内しています。",
    },
    {
      q: "プランターの土や鉢底の石はどうすればよいですか？",
      a: "広島市は「プランター等の土や砂、底石など」を不燃ごみの例に挙げています。中央区は、家庭で不用になった鉢植え等の園芸用土を回収し、再生させる取り組みを行っています。",
    },
    {
      q: "業者に工事を頼んで出た砂利は自分で出してよいですか？",
      a: "横浜市の分別案内では、業者に工事を頼んで出たごみは、工事を請け負った業者に処理を依頼するよう案内しています。",
    },
  ],
  related: [
    {
      href: "/jarishiki/",
      label: "庭の砂利敷きの基礎知識",
      desc: "種類・敷き方・防草効果",
    },
    {
      href: "/niwajimai/",
      label: "庭じまい",
      desc: "手間の大きいものから順に減らす",
    },
    {
      href: "/senteieda-shobun/",
      label: "剪定枝・刈り草の処分方法",
      desc: "自治体ごみ・持ち込み・業者回収",
    },
    {
      href: "/uekibachi-planter-shobun/",
      label: "植木鉢・プランターの処分",
      desc: "鉢と土の出し方",
    },
  ],
};

export default function JariShobunPage() {
  return <KnowArticle data={data} />;
}
