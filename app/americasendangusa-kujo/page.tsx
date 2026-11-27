import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/americasendangusa-kujo/";
const A = "text-[#2D7F3E] underline";
const ENV_LIST = "https://www.env.go.jp/nature/intro/2outline/list/list2_plants.pdf";
const MIYAGI = "https://www.pref.miyagi.jp/documents/48197/amerikasendangusa.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "アメリカセンダングサの駆除｜一年草なので、トゲのある実ができる前に根ごと抜く。種子は長く生き残るため数年続ける｜お庭のミカタ",
  },
  description:
    "アメリカセンダングサの駆除の考え方を、環境省「我が国の生態系等に被害を及ぼすおそれのある外来種リスト（第2版）」と宮城県の雑草資料をもとに整理しました。出芽の時期、実が服に付いて広がる仕組み、抜き取りの手順をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "アメリカセンダングサの駆除",
    description:
      "アメリカセンダングサはキク科の一年草で、草高は1.5mに達します。出芽期間は3月下旬〜10月上旬と長く、実の棘で衣服や動物に付いて広がります。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; value: string }[] = [
  { src: "環境省（外来種リスト 第2版・植物 No.196）", item: "リスト上の扱い", value: "アメリカセンダングサ（セイタカタウコギ）、キク科。カテゴリは防除検討外来種。定着段階は分布拡大期〜まん延期" },
  { src: "環境省（同）", item: "広がり方", value: "果実に棘があり衣服や動物に付着して散布される。水に流されても分布拡大する。種子の寿命は16年に及ぶこともある" },
  { src: "環境省（同）", item: "生育環境", value: "湿った草地、川岸、水田、水路、休耕田、牧草地、樹園地、路傍、荒地等。一般に水辺や湿地を好む" },
  { src: "宮城県（雑草資料）", item: "形と大きさ", value: "キク科、一年生。草高が1.5m以上になる大型雑草。葉は対生で、1葉以降は複葉で縁は粗い鋸状。茎は暗紫色で直立" },
  { src: "宮城県（同）", item: "出芽の時期", value: "出芽期間は3月下旬〜10月上旬と長い（3月下旬から5月にかけて高い確率で出芽する）" },
  { src: "宮城県（同）", item: "種子", value: "そう果には棘があり、衣類等にくっつく。種子は湛水条件でも3年以上生存する" },
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
      2026年11月28日に、環境省「我が国の生態系等に被害を及ぼすおそれのある外来種リスト（第２版）＜植物＞」（2026.9.11 の表記があるPDF、No.196）と、宮城県の雑草資料「アメリカセンダングサ」（PDF）を開き、当サイトで並べました。宮城県の資料は大豆畑の雑草としての資料です。畑向けの除草剤の記載は、家庭の庭には当てはまらないため載せていません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "americasendangusa-kujo",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "アメリカセンダングサの駆除｜一年草なので、トゲのある実ができる前に根ごと抜く。種子は長く生き残るため数年続ける",
  breadcrumbLabel: "アメリカセンダングサの駆除",
  tagChips: ["アメリカセンダングサ", "ひっつき虫", "外来種", "一年草", "草取り"],
  ldHeadline: "アメリカセンダングサの駆除｜一年草なので、トゲのある実ができる前に根ごと抜く。種子は長く生き残るため数年続ける",
  ldDescription:
    "アメリカセンダングサの駆除の考え方を、環境省の外来種リスト（第2版）と宮城県の雑草資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        アメリカセンダングサは<Hl>キク科の一年草</Hl>です。宮城県の資料は、草高が1.5m以上になる大型雑草で、<Hl>出芽期間は3月下旬〜10月上旬と長い</Hl>としています（出典：<a href={MIYAGI} className={A} target="_blank" rel="noopener noreferrer">宮城県 雑草資料「アメリカセンダングサ」（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        一年草は、種を作らせなければ翌年以降の芽を減らせます。環境省の外来種リストは、<Hl>果実に棘があり衣服や動物に付着して散布される</Hl>こと、<Hl>種子の寿命は16年に及ぶこともある</Hl>ことを挙げています（出典：<a href={ENV_LIST} className={A} target="_blank" rel="noopener noreferrer">環境省「我が国の生態系等に被害を及ぼすおそれのある外来種リスト（第２版）＜植物＞」（PDF）</a>、同日確認）。駆除は、<Hl>実ができる前に根ごと抜くことを、数年続ける</Hl>のが基本になります（当サイトの整理）。
      </p>
    </>
  ),
  conclusionTitle: "アメリカセンダングサは、トゲのある実ができる前に根ごと抜きます。土の中の種子が長く生き残るため、1年で終わらせず、芽が出るたびに抜くことを数年続けます。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        種子の生き残る期間は、宮城県が湛水条件でも3年以上、環境省が16年に及ぶこともあるとしており、条件によって幅があります。どちらの資料からも、<Hl>一度種を落とした場所では、何年か芽が出続ける</Hl>と考えておくのが安全です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "アメリカセンダングサを駆除する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "一年草で、背が高くなる",
      desc: "宮城県はキク科の一年生とし、草高は1.5mに達するとしています。茎は暗紫色で直立し、葉は対生です。",
    },
    {
      title: "春から秋まで芽が出る",
      desc: "宮城県は、出芽期間を3月下旬〜10月上旬とし、3月下旬から5月にかけて高い確率で出芽するとしています。",
    },
    {
      title: "実が服や動物に付いて運ばれる",
      desc: "環境省・宮城県とも、そう果（実）に棘があり、衣服や動物に付着するとしています。宮城県の資料は、衣類等にくっつくことから「ばか」とも呼ばれるとしています。",
    },
    {
      title: "湿った場所を好む",
      desc: "環境省は、湿った草地や川岸、水路、休耕田、路傍、荒地などに生え、一般に水辺や湿地を好むとしています。水に流されても広がります。",
    },
  ],
  stepsHeading: "アメリカセンダングサを駆除する4つの手順",
  stepsIntro: <p>環境省・宮城県の記載をもとに、当サイトで庭向けに整理した流れです。</p>,
  steps: [
    {
      title: "春から初夏、小さいうちに抜く",
      desc: "宮城県は、3月下旬から5月にかけて高い確率で出芽するとしています。背が高くなる前の小さい株は、根ごと抜きやすい時期です。",
    },
    {
      title: "実ができる前に、残った株を抜く",
      desc: "一年草なので、実を作らせないことが翌年の芽を減らします。大きくなった株も、棘のある実ができる前に根元から抜きます。",
    },
    {
      title: "実が付いた株は、袋に入れて処分する",
      desc: "環境省は、果実が衣服や動物に付着して散布されるとしています。実の付いた株は庭に置かず、袋に入れて自治体の分け方に従って出します。作業後は服や靴、ペットの毛に付いた実も取り除きます。",
    },
    {
      title: "翌年以降も、芽を見つけたら抜く",
      desc: "種子は湛水条件でも3年以上生存し（宮城県）、16年に及ぶこともある（環境省）とされています。数年は同じ場所を見回ります。",
    },
  ],
  ngHeading: "アメリカセンダングサの駆除で避けたいこと",
  ngs: [
    {
      title: "実が付いたまま草刈りして放置することは避けます",
      desc: "刈った草に付いた実が、そのまま土に落ちたり、服や動物に付いたりして広がります（当サイトの整理）。",
    },
    {
      title: "実の付いた株を川や水路の近くに捨てることは避けます",
      desc: "環境省は、水に流されても分布拡大するとしています。",
    },
    {
      title: "畑向けの除草剤の情報をそのまま庭に使うことは避けます",
      desc: "宮城県の資料は大豆畑向けです。除草剤を使う場合は、庭・宅地などの用途に登録があるものを、ラベルの表示どおりに使います。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>空き地や広い庭一面に生えている場合、背丈ほどに育って実が付き始めている場合</Hl>は、草刈り業者に相談してください。「実が付いているので、刈った草はすべて持ち帰って処分してほしい」と伝えると、種を残さない作業を頼みやすくなります。性質は<a href={ENV_LIST} className={A} target="_blank" rel="noopener noreferrer">環境省の外来種リスト（第２版）＜植物＞（PDF）</a>と<a href={MIYAGI} className={A} target="_blank" rel="noopener noreferrer">宮城県 雑草資料「アメリカセンダングサ」（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      草刈りの時期は<Link href="/kusakari-jiki/" className={A}>草刈りの時期</Link>、同じ外来の雑草は<Link href="/warunasubi-kujo/" className={A}>ワルナスビの駆除</Link>、刈った草の出し方は<Link href="/senteieda-shobun/" className={A}>剪定枝・刈り草の処分方法</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "アメリカセンダングサの草取りを業者に相談する",
  ctaText: "広い範囲に生えたアメリカセンダングサは、刈った草の持ち帰りまで業者に任せると安心です。",
  faqHeading: "アメリカセンダングサの駆除でよくある質問",
  faqs: [
    {
      q: "アメリカセンダングサはいつ抜けばよいですか？",
      a: "宮城県の資料では、出芽期間は3月下旬〜10月上旬で、3月下旬から5月にかけて高い確率で出芽するとしています。小さいうちに抜き、大きくなった株も実ができる前に抜きます。",
    },
    {
      q: "服に付くトゲトゲした実は何ですか？",
      a: "アメリカセンダングサのそう果（実）です。環境省・宮城県とも、棘があり衣服や動物に付着するとしています。",
    },
    {
      q: "毎年生えてくるのはなぜですか？",
      a: "種子が長く生き残るためです。宮城県は湛水条件でも3年以上、環境省は16年に及ぶこともあるとしています。",
    },
    {
      q: "アメリカセンダングサは法律で駆除が義務づけられていますか？",
      a: "環境省の外来種リスト（第2版）では防除検討外来種で、特定外来生物の欄は空欄です。駆除の義務はありませんが、実を広げないことが大切です。",
    },
  ],
  related: [
    { href: "/zasso-taisaku/", label: "雑草対策の方法比較", desc: "手取り・除草剤・防草シート" },
    { href: "/warunasubi-kujo/", label: "ワルナスビの駆除", desc: "外来の多年草の掘り取り" },
    { href: "/kusakari-jiki/", label: "草刈りの時期", desc: "年3回が目安になる理由" },
    { href: "/akichi-zasso-taisaku/", label: "空き地の雑草対策", desc: "所有者の管理と除草の回数" },
    { href: "/himemukashiyomogi-kujo/", label: "ヒメムカシヨモギの駆除", desc: "風で種が飛ぶキク科の外来の雑草" },
  ],
};

export default function AmericaSendangusaKujoPage() {
  return <KnowArticle data={data} />;
}
