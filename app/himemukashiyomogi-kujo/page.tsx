import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/himemukashiyomogi-kujo/";
const A = "text-[#2D7F3E] underline";
const ENV_DETAIL = "https://www.env.go.jp/nature/intro/2outline/list/detail_sho.pdf";
const ENV_TOKUTEI = "https://www.env.go.jp/nature/intro/2outline/list.html";
const ENV_LIST2 = "https://www.env.go.jp/nature/intro/2outline/list/list2_plants.pdf";
const SAITAMA_RDB = "https://www.pref.saitama.lg.jp/documents/266115/466-499.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ヒメムカシヨモギの駆除｜8〜10月に咲き、風で種が遠くへ飛ぶ外来の雑草。花が咲く前に抜くか刈る｜お庭のミカタ",
  },
  description:
    "ヒメムカシヨモギの駆除の考え方を、環境省の要注意外来生物リスト詳細資料・特定外来生物等一覧・外来種リスト（第2版）と、埼玉県レッドデータブック植物編2024をもとに整理しました。開花期、種の数と飛び方、抜き取り・刈り取りの時期をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ヒメムカシヨモギの駆除",
    description:
      "環境省の資料は、ヒメムカシヨモギは抜き取りや刈り取りで防除し、除草剤に耐性をもつ型もあるとしています。開花期は8〜10月で、種は風で遠くまで飛びます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; value: string }[] = [
  { src: "環境省（要注意外来生物リスト 詳細資料）", item: "原産地と侵入", value: "北アメリカ原産。非意図的導入により1867年頃に侵入したとされ、比較的短期間に全国に広がった" },
  { src: "同上", item: "生える場所", value: "畑地、休耕地、樹園地、牧草地、路傍、荒地、河川敷など。肥沃地を好み、耐旱性が大きい" },
  { src: "同上", item: "姿と開花期", value: "キク科の一〜越年草で、高さは0.8〜2m。開花期は8〜10月" },
  { src: "同上", item: "種の広がり方", value: "痩果（種）は風（遠方まで飛散）、雨、人間により運ばれる。1個体あたりの種子生産量は59,960〜819,620個、種子の寿命は112年に及ぶとの報告がある" },
  { src: "同上", item: "防除", value: "抜き取りや刈り取りによって防除するが、除草剤（アトラジン・パラコート）耐性型がある。冬期は枯れ草になり、美観を損ね、火災の原因となるため刈り取りが行われている" },
  { src: "環境省（特定外来生物等一覧）", item: "外来生物法上の扱い", value: "特定外来生物の植物（19種類）にヒメムカシヨモギは含まれない" },
  { src: "環境省（外来種リスト 第2版・植物）", item: "リスト上の扱い", value: "ヒメムカシヨモギ自体の掲載行はない。近縁のケナシヒメムカシヨモギは防除検討外来種として掲載されている" },
  { src: "埼玉県（レッドデータブック植物編2024）", item: "県内での記録", value: "12年間（2011〜2022年）に集めた外来種の記録72,972件のうち1,446件。多く記録された種として12番目に挙げられている。区分は［外来一般］" },
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
        {ROWS.map((r, i) => (
          <tr key={i}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、環境省「要注意外来生物に係る情報及び注意事項」（詳細資料 2-79〜2-80 ヒメムカシヨモギ）、環境省「特定外来生物等一覧」、環境省「我が国の生態系等に被害を及ぼすおそれのある外来種リスト（第２版）＜植物＞」（2026.9.11 の表記があるPDF）、埼玉県レッドデータブック植物編2024「希少植物を脅かす外来植物」を開き、当サイトで項目ごとに並べました。要注意外来生物リストは平成27年3月26日をもって発展的に解消されていると同資料に注記があります。埼玉県の記録件数は調査で記録された件数で、県内の株数ではありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "himemukashiyomogi-kujo",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "ヒメムカシヨモギの駆除｜8〜10月に咲き、風で種が遠くへ飛ぶ外来の雑草。花が咲く前に抜くか刈る",
  breadcrumbLabel: "ヒメムカシヨモギの駆除",
  tagChips: ["ヒメムカシヨモギ", "外来種", "キク科", "雑草対策", "抜き取り"],
  ldHeadline: "ヒメムカシヨモギの駆除｜8〜10月に咲き、風で種が遠くへ飛ぶ外来の雑草。花が咲く前に抜くか刈る",
  ldDescription:
    "ヒメムカシヨモギの駆除の考え方を、環境省の外来種の資料と埼玉県レッドデータブック植物編2024をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ヒメムカシヨモギは、北アメリカ原産のキク科の一〜越年草です。環境省の資料は、<Hl>高さは0.8〜2mになり、開花期は8〜10月</Hl>、種（痩果）は<Hl>風で遠方まで飛散する</Hl>としています。防除は<Hl>抜き取りや刈り取り</Hl>で行い、除草剤に耐性をもつ型があるとしています（出典：<a href={ENV_DETAIL} className={A} target="_blank" rel="noopener noreferrer">環境省 要注意外来生物リスト 詳細資料（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        庭や空き地では、<Hl>種ができる前に株ごと除くこと</Hl>が駆除の中心になります。本記事では、環境省と埼玉県の資料を並べ、時期と方法を整理します。
      </p>
    </>
  ),
  conclusionTitle: "ヒメムカシヨモギは、花が咲く8月より前に、根ごと抜くか地際で刈ります。花や綿毛が付いたあとは、種を散らさないように袋に入れて処分します。",
  conclusionBody: (
    <>
      <p>4つの資料の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        1株で数万〜数十万個の種を作り、種の寿命は長いとの報告があるため、<Hl>1回でも種を落とさせると、翌年以降も芽が出続ける</Hl>おそれがあります（当サイトの整理）。外来生物法の特定外来生物ではないため、庭で抜いて処分することに法律上の制限はありません（<a href={ENV_TOKUTEI} className={A} target="_blank" rel="noopener noreferrer">環境省 特定外来生物等一覧</a>、同日確認）。
      </p>
    </>
  ),
  basicsHeading: "ヒメムカシヨモギを駆除する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "背が高くなる一〜越年草",
      desc: "環境省は、キク科の一〜越年草で、高さは0.8〜2mになるとしています。秋に芽を出した株は冬を越し、翌年に大きくなります。",
    },
    {
      title: "8〜10月に咲き、種が風で飛ぶ",
      desc: "開花期は8〜10月で、痩果は風（遠方まで飛散）、雨、人間により運ばれます。隣地や空き地から種が入ってくることもあります。",
    },
    {
      title: "種の数が多く、寿命も長い",
      desc: "環境省の資料は、1個体あたりの種子生産量を59,960〜819,620個、種子の寿命を112年に及ぶとする報告を紹介しています。",
    },
    {
      title: "身近な場所に多い",
      desc: "埼玉県レッドデータブック植物編2024では、12年間に集めた外来種の記録72,972件のうちヒメムカシヨモギは1,446件で、多く記録された種の12番目です。",
    },
  ],
  stepsHeading: "ヒメムカシヨモギを駆除する4つの手順",
  stepsIntro: <p>環境省の資料の「抜き取り・刈り取り」を、家庭の庭や空き地に当てはめた流れです。</p>,
  steps: [
    {
      title: "花が咲く前に見つける",
      desc: "開花期は8〜10月です。初夏までの、背丈が低く茎が細いうちに見つけると作業が楽になります。",
    },
    {
      title: "根ごと抜く",
      desc: "株の数が少なければ、根元を持って抜き取ります。背が高くなった株は、茎の途中で折れないよう根元に近い位置を持ちます。",
    },
    {
      title: "数が多ければ地際で刈る",
      desc: "環境省は、抜き取りや刈り取りによって防除するとしています。一面に生えている場合は、花が咲く前に地際で刈り取ります。",
    },
    {
      title: "花や綿毛が付いた株は袋に入れる",
      desc: "種は風で遠方まで飛ぶため、花や綿毛が付いた株は、その場で振り回さず袋に入れ、お住まいの自治体の区分に従って処分します。",
    },
  ],
  ngHeading: "ヒメムカシヨモギの駆除で避けたいこと",
  ngs: [
    {
      title: "綿毛が付くまで放置することは避けます",
      desc: "1株で数万〜数十万個の種を作るとの報告があります。花が咲く前に除くのが最も効果的です。",
    },
    {
      title: "除草剤だけに頼ることは避けます",
      desc: "環境省は、除草剤（アトラジン・パラコート）に耐性をもつ型があるとしています。薬剤を使う場合も、効かない株は抜き取りや刈り取りで除きます。",
    },
    {
      title: "冬の枯れ草をそのままにしないようにします",
      desc: "環境省の資料は、冬期は枯れ草になって美観を損ね、火災の原因となるため刈り取りが行われているとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      空き地や広い庭一面に生えている場合、背丈ほどに育って花や綿毛が付いている場合は、草刈り業者に相談してください。「綿毛が付いているので、刈った草はすべて持ち帰ってほしい」と伝えると、種を散らさない作業を頼みやすくなります。外来種リストの扱いは<a href={ENV_LIST2} className={A} target="_blank" rel="noopener noreferrer">環境省 外来種リスト（第2版）＜植物＞（PDF）</a>、県内の記録は<a href={SAITAMA_RDB} className={A} target="_blank" rel="noopener noreferrer">埼玉県レッドデータブック植物編2024「希少植物を脅かす外来植物」（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      同じキク科の外来の雑草は<Link href="/americasendangusa-kujo/" className={A}>アメリカセンダングサの駆除</Link>と<Link href="/seitakaawadachiso-kujo/" className={A}>セイタカアワダチソウの駆除</Link>、雑草全般の対策は<Link href="/zasso-taisaku/" className={A}>雑草対策</Link>、空き地の管理は<Link href="/akichi-zasso-taisaku/" className={A}>空き地の雑草対策</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ヒメムカシヨモギの駆除を業者に相談する",
  ctaText: "広い空き地の草刈りや、花や綿毛が付いた草の回収は、業者に任せると安心です。",
  faqHeading: "ヒメムカシヨモギの駆除でよくある質問",
  faqs: [
    {
      q: "ヒメムカシヨモギは特定外来生物ですか？",
      a: "いいえ。環境省の特定外来生物等一覧の植物（19種類）に、ヒメムカシヨモギは含まれていません。外来種リスト（第2版）にもヒメムカシヨモギ自体の掲載行はありません。",
    },
    {
      q: "いつ駆除するのがよいですか？",
      a: "環境省の資料では開花期は8〜10月です。種を作らせないように、花が咲く前に抜くか刈るのが効果的です。",
    },
    {
      q: "除草剤は効きますか？",
      a: "環境省の資料は、除草剤（アトラジン・パラコート）に耐性をもつ型があるとしています。抜き取りや刈り取りを基本にしてください。",
    },
    {
      q: "どこから生えてくるのですか？",
      a: "種は風（遠方まで飛散）、雨、人間により運ばれます。周りの空き地や道ばたから飛んできた種が芽を出すことがあります。",
    },
  ],
  related: [
    { href: "/americasendangusa-kujo/", label: "アメリカセンダングサの駆除", desc: "同じキク科の外来の雑草" },
    { href: "/seitakaawadachiso-kujo/", label: "セイタカアワダチソウの駆除", desc: "背が高くなるキク科の外来種" },
    { href: "/zasso-taisaku/", label: "雑草対策", desc: "庭の雑草対策の基本" },
    { href: "/akichi-zasso-taisaku/", label: "空き地の雑草対策", desc: "広い場所の草の管理" },
  ],
};

export default function HimemukashiyomogiKujoPage() {
  return <KnowArticle data={data} />;
}
