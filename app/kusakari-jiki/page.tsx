import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kusakari-jiki/";
const A = "text-[#2D7F3E] underline";
const KANAZAWA = "https://www4.city.kanazawa.lg.jp/material/files/group/67/akiti.pdf";
const OTA = "https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/kankyou/kogai_hunso/akichinozasso.html";
const NARO = "https://www.naro.go.jp/org/warc/research_results/h29/pdf/01_sakumotu/11_0106_17.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "草刈りの時期は5〜10月、年1回では足りない｜梅雨前・夏・秋の年3回が目安になる理由｜お庭のミカタ",
  },
  description:
    "雑草の草刈りの時期と回数を、金沢市の空き地管理の案内、大田区の空き地の雑草のページ、農研機構の芝生畦畔の草刈り試験をもとにまとめました。雑草は5月から10月頃まで伸び続けるため、年1回では足りず、年2回以上が目安です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "草刈りの時期は5〜10月、年1回では足りない",
    description:
      "雑草が伸びる時期と、年1回・年3回の草刈りで何が違うかを公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { month: string; growth: string; naro3: string; naro1: string }[] = [
  { month: "4月", growth: "—", naro3: "—", naro1: "—" },
  { month: "5月", growth: "成長が始まる", naro3: "草刈り", naro1: "草刈り" },
  { month: "6月", growth: "梅雨の時期に勢いが加速", naro3: "—", naro1: "—" },
  { month: "7月", growth: "成長を続ける", naro3: "草刈り", naro1: "チガヤとヨモギが繁茂" },
  { month: "8月", growth: "成長を続ける", naro3: "—", naro1: "シバの上の明るさが60%に低下" },
  { month: "9月", growth: "成長を続ける", naro3: "草刈り", naro1: "35%程度に低下" },
  { month: "10月", growth: "この頃まで成長を続ける", naro3: "—", naro1: "35%程度・シバの被度65%に衰退" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">月</th>
          <th className="border px-2 py-2 text-left">雑草の伸び方（金沢市）</th>
          <th className="border px-2 py-2 text-left">年3回刈り（農研機構の試験）</th>
          <th className="border px-2 py-2 text-left">5月に1回だけ刈った場合（同）</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.month}>
            <td className="border px-2 py-2">{r.month}</td>
            <td className="border px-2 py-2">{r.growth}</td>
            <td className="border px-2 py-2">{r.naro3}</td>
            <td className="border px-2 py-2">{r.naro1}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に金沢市の空き地管理の案内と農研機構の研究成果情報を開き、月ごとの記載を当サイトで1つの表に並べました。農研機構の試験は瀬戸内地域（福山市）の芝生の畦畔で行われたもので、年3回刈りではシバの上の明るさ（相対光量子密度）が79〜91%に保たれ、シバの被度は75%でほぼ一定でした。「—」は資料に記載がない月です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kusakari-jiki",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "草刈りの時期は5〜10月、年1回では足りない｜梅雨前・夏・秋の年3回が目安になる理由",
  breadcrumbLabel: "草刈りの時期",
  tagChips: ["草刈り", "雑草", "時期", "回数", "空き地"],
  ldHeadline: "草刈りの時期は5〜10月、年1回では足りない｜梅雨前・夏・秋の年3回が目安になる理由",
  ldDescription:
    "雑草の草刈りの時期と回数を、金沢市・大田区の空き地管理の案内と、農研機構の芝生畦畔の草刈り試験をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        雑草は<Hl>5月に入ると成長が始まり、梅雨の時期にその勢いが加速し、10月頃まで成長を続けます</Hl>。金沢市の空き地管理の案内は、このため<Hl>年1回の除草では十分ではなく、雑草の種類や成長に応じて年2回以上</Hl>の除草を求めています（出典：<a href={KANAZAWA} className={A} target="_blank" rel="noopener noreferrer">金沢市「空き地管理について」（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        本記事では、この案内と大田区の空き地の雑草のページ、農研機構の草刈り回数の試験を照合し、庭や空き地の草刈りの時期と回数を整理します。
      </p>
    </>
  ),
  conclusionTitle: "草刈りは5月から10月の間に、年2回以上行います。梅雨前の5月、夏の7月、秋の9月の年3回にすると、5月に1回だけ刈った場合に比べて夏以降の繁茂を抑えられます。",
  conclusionBody: (
    <>
      <p>
        農研機構の研究成果情報は、芝生の畦畔で5月・7月・9月の年3回草刈りを行うと、4月から10月の毎月の年7回草刈り並みにシバに必要な光環境を確保できる一方、5月の年1回草刈りでは7月以降にチガヤとヨモギが繁茂したとしています（出典：<a href={NARO} className={A} target="_blank" rel="noopener noreferrer">農研機構 西日本農業研究センター「瀬戸内地域の芝生畦畔では、年3回の草刈りでシバに必要な光環境は確保できる」（PDF）</a>、2026年11月21日確認）。金沢市の案内と合わせて当サイトで月ごとに並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "草刈りの時期に関する4つの基本",
  basicsIntro: (
    <p>
      以下は、3つの資料に書かれている内容を整理したものです。地域や雑草の種類によって伸び方は異なるため、目安としてお読みください。
    </p>
  ),
  basicsLabel: "基本",
  basics: [
    {
      title: "雑草は5月から10月頃まで伸びる",
      desc: "金沢市の案内では、雑草は5月に入ると成長が始まり、梅雨の時期に勢いが加速し、10月頃まで成長を続けるとしています。",
    },
    {
      title: "年1回では足りない",
      desc: "金沢市の案内では、年1回の除草では十分ではないとし、年2回以上の除草を求めています。",
    },
    {
      title: "長く伸びないうちに刈る",
      desc: "大田区のページでは、空き地は定期的に見回り、雑草が長く伸びないうちに刈り取るよう求めています（出典：大田区「空き地の雑草について」）。",
    },
    {
      title: "5・7・9月の年3回で夏以降の繁茂を抑えられる",
      desc: "農研機構の試験では、年3回草刈りで、年7回草刈りと同程度の光環境がシバの上に保たれました。5月の年1回では7月以降にチガヤとヨモギが繁茂しました。",
    },
  ],
  stepsHeading: "年3回で刈る場合の4つの段取り",
  stepsIntro: (
    <p>
      農研機構の試験の5月・7月・9月の組み合わせを、家庭の庭や空き地に当てはめた段取りです。
    </p>
  ),
  steps: [
    {
      title: "5月に1回目を刈る",
      desc: "金沢市の案内では、5月に入ると雑草の成長が始まるとしています。伸び始めのうちに1回目を刈ります。",
    },
    {
      title: "梅雨明けの7月に2回目を刈る",
      desc: "梅雨の時期に勢いが加速するため（金沢市）、梅雨の後に2回目を刈ります。農研機構の試験では、5月の1回だけの場合、7月以降にチガヤとヨモギが繁茂しました。",
    },
    {
      title: "9月に3回目を刈る",
      desc: "雑草は10月頃まで成長を続けるため（金沢市）、9月に3回目を刈ります。農研機構の試験でも3回目は9月です。",
    },
    {
      title: "刈っても減らない多年生の雑草は別の方法を考える",
      desc: "農研機構の研究成果情報では、大型の多年生雑草であるチガヤ、ヨモギ等が発生した場合は、移行性除草剤の塗布処理等で防除する必要があるとしています。除草剤は、製品ラベルに記載された対象と使い方に従ってください。",
    },
  ],
  ngHeading: "草刈りの時期で避けたいこと",
  ngs: [
    {
      title: "5月に1回刈っただけで秋まで放置することは避けます",
      desc: "農研機構の試験では、5月の年1回草刈りでは7月以降にチガヤとヨモギが繁茂し、10月にはシバの被度が65%に衰退しました。",
    },
    {
      title: "伸び切ってからまとめて刈ることは避けます",
      desc: "大田区のページでは、雑草が長く伸びないうちに刈り取るよう求めています。雑草が生い茂ると、害虫の発生、花粉や接触等によるアレルギーの誘発、ごみの不法投棄、不審火などの問題を招くとしています。",
    },
    {
      title: "離れた土地を見回らずに放置することは避けます",
      desc: "金沢市の案内では、草陰にごみが投棄されることがあり、放置すると次々にごみが投棄されるとして、定期的な見回りを求めています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>年に何度も刈る時間がない、空き地と離れて住んでいる、面積が広い</Hl>といった場合は、業者やシルバー人材センターに依頼する方法があります。金沢市の案内では、自身で除草ができない場合は専門の業者などに委託するよう求めています。大田区のページでは、専門の業者やシルバー人材センターへの依頼を挙げ、料金・作業内容等の詳細は直接業者等へ問い合わせるよう案内しています（出典：<a href={OTA} className={A} target="_blank" rel="noopener noreferrer">大田区「空き地の雑草について」</a>、2026年11月21日確認）。
    </p>,
    <p key="2">
      年に複数回の作業を依頼する場合は、5月・7月・9月など時期を決めてまとめて見積もりを取ると比べやすくなります。刈払機を使う場合の注意点は<Link href="/karibarai-anzen/" className={A}>草刈り機（刈払機）を安全に使う</Link>、草刈り以外の方法は<Link href="/zasso-taisaku/" className={A}>雑草対策の方法比較</Link>、業者の料金は<Link href="/kusakari-110ban-kusakari-ryokin/" className={A}>草刈り110番の草刈り料金</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "刈る時期を決めて相談する",
  ctaText:
    "雑草は5月から10月頃まで伸び続けるため、草刈りは年2回以上、5月・7月・9月の年3回が目安です。自分で刈れない場合は時期を決めて業者に相談すると安心です。",
  faqHeading: "草刈りの時期のよくある質問",
  faqs: [
    {
      q: "草刈りは年に何回必要ですか？",
      a: "金沢市の案内では、年1回の除草では十分ではないとし、年2回以上の除草を求めています。農研機構の芝生畦畔の試験では、5月・7月・9月の年3回草刈りで、毎月刈る年7回と同程度の光環境がシバの上に保たれました。",
    },
    {
      q: "草刈りを始める時期はいつですか？",
      a: "金沢市の案内では、雑草は5月に入ると成長が始まるとしています。農研機構の試験でも、1回目の草刈りは5月です。",
    },
    {
      q: "冬に草刈りは必要ですか？",
      a: "金沢市の案内では、雑草は10月頃まで成長を続けるとしています。冬の草刈りについての記載は3つの資料にありません。",
    },
    {
      q: "刈ってもすぐに生えてくる雑草はどうすればよいですか？",
      a: "農研機構の研究成果情報では、チガヤ、ヨモギ等の大型の多年生雑草が発生した場合は、移行性除草剤の塗布処理等で防除する必要があるとしています。大田区のページでは、防草シートを敷くことも有効な対策の一つとしています。",
    },
  ],
  related: [
    {
      href: "/kusakari-shamen/",
      label: "斜面の草刈り",
      desc: "滑りやすい条件と作業の向き",
    },
    {
      href: "/zasso-taisaku/",
      label: "雑草対策の方法比較",
      desc: "手取り・除草剤・防草シート・砂利",
    },
    {
      href: "/karibarai-anzen/",
      label: "草刈り機（刈払機）を安全に使う",
      desc: "飛び石・キックバックと服装",
    },
    {
      href: "/shibakari-jiki/",
      label: "芝刈りの時期",
      desc: "芝生の月ごとの刈り込み回数",
    },
    {
      href: "/kusakari-110ban-kusakari-ryokin/",
      label: "草刈り110番の草刈り料金",
      desc: "公式の料金表の見方",
    },
  ],
};

export default function KusakariJikiPage() {
  return <KnowArticle data={data} />;
}
