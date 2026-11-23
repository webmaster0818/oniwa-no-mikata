import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/takagari-kusakari/";
const A = "text-[#2D7F3E] underline";
const NIIGATA1 = "https://www.pref.niigata.lg.jp/sec/nosoken_sakumotsu/201705.html";
const NIIGATA2 = "https://www.pref.niigata.lg.jp/site/nogyo-navi/pests-kamemushi.html";
const NARO = "https://www.naro.go.jp/PUBLICITY_REPORT/publication/files/Jirei_5_Ine_Shizuoka.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "高刈りとは｜地際ではなく10cm程度の高さで刈る草刈り。イネ科の雑草を減らす狙いと注意点｜お庭のミカタ",
  },
  description:
    "高刈り（草刈りの高さを10cm程度にする刈り方）の意味・時期・回数・注意点を、新潟県の試験の解説と農研機構の事例集（静岡県）をもとにまとめました。地際刈りとの違いも整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "高刈りとは",
    description:
      "高刈りは、地際ではなく10cm程度の高さで刈る草刈りの方法です。新潟県と農研機構（静岡県の事例）の資料で、時期・回数・効果が出るまでの期間を整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; niigata: string; shizuoka: string }[] = [
  {
    item: "刈る高さ",
    niigata: "地際から10cm程度離して刈る",
    shizuoka: "草刈り高を10cm程度に高める",
  },
  {
    item: "時期・回数",
    niigata: "5月からおよそ1か月間隔（結果として1年で4〜5回）",
    shizuoka: "4月中下旬と7月上旬の2回",
  },
  {
    item: "比べた方法",
    niigata: "地際刈り、除草剤＋地際刈り",
    shizuoka: "低刈り（2回・3回）",
  },
  {
    item: "結果",
    niigata: "高刈り区は地際刈り区よりイネ科雑草の植被率が低くなった",
    shizuoka: "カスミカメムシの餌となるイネ科雑草を抑制できる",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">新潟県の試験</th>
          <th className="border px-2 py-2 text-left">静岡県の事例（農研機構の事例集）</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.niigata}</td>
            <td className="border px-2 py-2">{r.shizuoka}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に新潟県の2つの解説ページと、農研機構「土着天敵を活用する害虫管理技術 事例集」の静岡県の事例（PDF）を開き、高刈りの高さ・時期・回数・結果の記載を当サイトで並べました。いずれも水田の畦畔（あぜ）での試験・事例で、家庭の庭で同じ結果になるかを確かめたものではありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "takagari-kusakari",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "高刈りとは｜地際ではなく10cm程度の高さで刈る草刈り。イネ科の雑草を減らす狙いと注意点",
  breadcrumbLabel: "高刈りとは",
  tagChips: ["草刈り", "高刈り", "畦畔", "雑草", "イネ科"],
  ldHeadline: "高刈りとは｜地際ではなく10cm程度の高さで刈る草刈り。イネ科の雑草を減らす狙いと注意点",
  ldDescription:
    "高刈り（草刈りの高さを10cm程度にする刈り方）の意味・時期・回数・注意点を、新潟県と農研機構（静岡県の事例）の資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        高刈りは、<Hl>草を地際で刈らず、10cm程度の高さを残して刈る</Hl>方法です。新潟県は、高刈りを「草刈りの高さを地際ではなく10cm程度にすることで、その後のイネ科雑草の発生の抑制に有効であるとされる方法」と説明しています（出典：<a href={NIIGATA1} className={A} target="_blank" rel="noopener noreferrer">新潟県「イネ科雑草の発生を抑える畦畔の草刈り方法」</a>、2026年11月23日確認）。
      </p>
      <p>
        主に水田の畦畔（あぜ）で、斑点米の原因になるカメムシ類の餌となるイネ科雑草を減らすために研究されてきた刈り方です。本記事では、新潟県と静岡県の資料をもとに、高さ・時期・回数と注意点を整理します。
      </p>
    </>
  ),
  conclusionTitle: "高刈りは、イネ科以外の背の低い草を残してイネ科の雑草を増やしにくくする刈り方です。効果が出るまでに年単位の時間がかかることがあり、こまめな草刈りも必要です。",
  conclusionBody: (
    <>
      <p>
        新潟県と静岡県（農研機構の事例集）の記載を並べると、次のとおりです。どちらも刈る高さは10cm程度で一致しており、時期・回数は異なります（静岡県の事例は<a href={NARO} className={A} target="_blank" rel="noopener noreferrer">農研機構「水田の斑点米カメムシを低減する植生管理技術（静岡県）」（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "高刈りに関する4つの基本",
  basicsIntro: <p>以下は、新潟県と農研機構の資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "高さは10cm程度",
      desc: "新潟県・静岡県の資料とも、高刈りの高さを10cm程度としています。地際で刈る方法は「地際刈り」「低刈り」と呼ばれています。",
    },
    {
      title: "イネ科以外の草を残すのが狙い",
      desc: "新潟県は、イネ科以外の雑草を温存するように高刈りをし、この管理を続けてイネ科以外の雑草の植被率を高めるとしています。高刈り区ではノチドメやシロツメクサが優占したと紹介しています。",
    },
    {
      title: "除草剤で地際まで枯らすとイネ科が増えた",
      desc: "新潟県の試験では、4月下旬に除草剤を散布し6月から地際刈りをした区は、6月にはイネ科雑草が優占し、その後も植被率が高い状態でした。",
    },
    {
      title: "天敵のクモが増える事例もある",
      desc: "新潟県は、静岡県の試験事例として、高刈りで植生を維持するとクモなどの土着天敵が増え、カメムシ類の個体数が減ると紹介しています。",
    },
  ],
  stepsHeading: "高刈りを試すときの4つの手順",
  stepsIntro: <p>新潟県と静岡県の資料の方法にもとづく流れです。庭や空き地で試す場合は、当サイトの整理として参考にしてください。</p>,
  steps: [
    {
      title: "今生えている草の種類を見る",
      desc: "新潟県は、すでにイネ科雑草が優占した畦畔では、高刈りを行ってからイネ科以外の雑草が優占するまで2年程度必要な事例もあるとしています。",
    },
    {
      title: "刈る高さを10cm程度にそろえる",
      desc: "刈払機の刃を地面に付けず、地際から10cm程度離して刈ります。新潟県は「地際から10cm程度離して草刈りを行った」区を高刈り区としています。",
    },
    {
      title: "春から刈り始め、間隔をあけずに続ける",
      desc: "新潟県の試験は5月からおよそ1か月間隔、静岡県の事例は4月中下旬と7月上旬の2回です。",
    },
    {
      title: "穂が出たイネ科はこまめに刈る",
      desc: "新潟県は、一度出穂するまでに生育したイネ科雑草は、高刈りしても早い時期に再び出穂してしまうため、こまめな草刈りが必要としています。",
    },
  ],
  ngHeading: "高刈りで避けたいこと",
  ngs: [
    {
      title: "1回の高刈りで草の種類が変わると考えることは避けます",
      desc: "新潟県の試験は平成25年から27年の3年間で、効果は「季節が進むに従って」現れたと記載されています。2年程度かかる事例もあるとしています。",
    },
    {
      title: "穂の出たイネ科雑草を残したままにすることは避けます",
      desc: "新潟県の解説では、カスミカメムシ類が増えやすいのは出穂したイネ科雑草の植被率が高く、出穂した状態が長く続く場所としています。",
    },
    {
      title: "高刈りを除草剤と組み合わせて地際まで枯らすことは避けます",
      desc: "新潟県の試験では、除草剤＋地際刈り区はイネ科雑草が優占し、高刈り区・地際刈り区よりイネ科雑草が多い状態になりました。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>敷地が広く月1回の草刈りが続けられない、斜面があり刈払機の高さを保つのが難しい</Hl>といった場合は、草刈りの業者やシルバー人材センターに相談する方法があります。依頼するときは、刈る高さ（地際か10cm程度か）と回数を伝えてください。何も伝えないと地際で刈られることがあります。
    </p>,
    <p key="2">
      草刈りの時期は<Link href="/kusakari-jiki/" className={A}>草刈りの時期</Link>、刈払機の扱いは<Link href="/karibarai-anzen/" className={A}>刈払機の安全な使い方</Link>、斜面の草刈りは<Link href="/kusakari-shamen/" className={A}>斜面の草刈り</Link>、シルバー人材センターへの依頼は<Link href="/kusakari-silver-jinzai/" className={A}>草刈りをシルバー人材センターに頼む</Link>にまとめています。高刈りの注意点は<a href={NIIGATA2} className={A} target="_blank" rel="noopener noreferrer">新潟県「カスミカメムシ類の餌となるイネ科雑草を抑える畦畔の除草方法」</a>（2026年11月23日確認）を参照しています。
    </p>,
  ],
  ctaHeading: "刈る高さと回数を伝えて相談する",
  ctaText:
    "高刈りは、同じ高さで続けて刈ることが前提の方法です。自分で続けにくい広さの場合は、刈る高さと回数を伝えて相談すると安心です。",
  faqHeading: "高刈りのよくある質問",
  faqs: [
    {
      q: "高刈りとは何ですか？",
      a: "草を地際で刈らず、10cm程度の高さを残して刈る方法です。新潟県は、その後のイネ科雑草の発生の抑制に有効であるとされる方法と説明しています。",
    },
    {
      q: "高刈りは何cmで刈ればよいですか？",
      a: "新潟県の試験は地際から10cm程度、農研機構の事例集（静岡県）は草刈り高を10cm程度としています。",
    },
    {
      q: "高刈りは年に何回行いますか？",
      a: "新潟県の試験は5月からおよそ1か月間隔（1年で4〜5回）、静岡県の事例は4月中下旬と7月上旬の2回でした。",
    },
    {
      q: "高刈りをすれば雑草は減りますか？",
      a: "新潟県・静岡県の資料が示しているのは、イネ科雑草が減り、イネ科以外の雑草が増えるという草の種類の変化です。草そのものがなくなる方法ではありません。新潟県は効果が出るまで2年程度かかる事例もあるとしています。",
    },
  ],
  related: [
    {
      href: "/kusakari-jiki/",
      label: "草刈りの時期",
      desc: "年に何回、いつ刈るか",
    },
    {
      href: "/kusakari-shamen/",
      label: "斜面の草刈り",
      desc: "法面を安全に刈る",
    },
    {
      href: "/karibarai-anzen/",
      label: "刈払機の安全な使い方",
      desc: "自分で刈るときの注意",
    },
    {
      href: "/zasso-taisaku/",
      label: "雑草対策",
      desc: "刈った後に生やさない工夫",
    },
  ],
};

export default function TakagariKusakariPage() {
  return <KnowArticle data={data} />;
}
