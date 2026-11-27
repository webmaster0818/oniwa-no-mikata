import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/buddleja-sentei/";
const A = "text-[#2D7F3E] underline";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const ENV_LIST = "https://www.env.go.jp/nature/intro/2outline/list/list2_plants.pdf";
const ENV_PAGE = "https://www.env.go.jp/nature/intro/2outline/iaslist.html";

export const metadata: Metadata = {
  title: {
    absolute: "ブッドレア（ブットレア）の剪定｜剪定は3月頃に混んだ所を間引く。環境省の外来種リストに載る木なので花がらを摘み種を飛ばさない｜お庭のミカタ",
  },
  description:
    "ブッドレア（ブットレア・フサフジウツギ）の剪定時期と、花がら摘みが大切な理由を、大和市の園芸相談の事例と環境省「我が国の生態系等に被害を及ぼすおそれのある外来種リスト（第2版）」をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ブッドレア（ブットレア）の剪定",
    description:
      "大和市の園芸相談では、ブッドレアの剪定は3月頃に混んでいる所を間引くと回答しています。環境省の外来種リスト（第2版）では、フサフジウツギ（ブッドレア）は防除推進外来種です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; value: string }[] = [
  { src: "大和市（園芸相談の事例 155）", item: "剪定の時期と方法", value: "大きくしたいなら剪定はしない。花がらを摘むのみ。剪定は3月頃、混んでいる所を間引く" },
  { src: "環境省（外来種リスト 第2版・植物 No.103）", item: "リスト上の扱い", value: "和名フサフジウツギ（別名・流通名にニシキフジウツギ、チチブフジウツギ、ブッドレア）。カテゴリは防除推進外来種。特段の防除取り組みが要請される区域は生物多様性保全上重要な地域" },
  { src: "環境省（同）", item: "日本での利用・分布", value: "明治時代に園芸植物として渡来。多数の園芸品種があり、ブッドレアとして観賞用に栽培され、切り花にもされる。北海道・本州・九州で逸出" },
  { src: "環境省（同）", item: "利用上の留意事項", value: "風により種子が散布され、草原を森林化すること等から、生物多様性の保全上重要な地域に侵入するおそれのある場所には、持ち込まない" },
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
      2026年11月28日に、大和市「園芸相談の事例《庭木》」（155 ブッドレア 剪定）と、環境省「我が国の生態系等に被害を及ぼすおそれのある外来種リスト（第２版）＜植物＞」（2026.9.11 の表記があるPDF、No.103 フサフジウツギ）を開き、当サイトで並べました。環境省のリストは法律で栽培を禁止するものではありません（特定外来生物の欄は空欄です）。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "buddleja-sentei",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "ブッドレア（ブットレア）の剪定｜剪定は3月頃に混んだ所を間引く。環境省の外来種リストに載る木なので花がらを摘み種を飛ばさない",
  breadcrumbLabel: "ブッドレアの剪定",
  tagChips: ["ブッドレア", "ブットレア", "フサフジウツギ", "剪定時期", "花がら摘み", "外来種"],
  ldHeadline: "ブッドレア（ブットレア）の剪定｜剪定は3月頃に混んだ所を間引く。環境省の外来種リストに載る木なので花がらを摘み種を飛ばさない",
  ldDescription:
    "ブッドレア（フサフジウツギ）の剪定時期と花がら摘みの理由を、大和市の園芸相談の事例と環境省の外来種リスト（第2版）をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ブッドレア（ブットレア）の剪定は、<Hl>3月頃に、混んでいる所を間引く</Hl>のが目安です。大和市の園芸相談の事例では、「大きくしたい。いつ頃切ったらよいか」という相談に、<Hl>大きくしたいなら剪定はしない。花がらを摘むのみ。剪定は3月頃、混んでいる所を間引く</Hl>と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        もう1つ知っておきたいのは、ブッドレアが<Hl>環境省の外来種リストに「フサフジウツギ」の名で載っている</Hl>ことです。リストは、風で種子が散布されることを挙げています（出典：<a href={ENV_LIST} className={A} target="_blank" rel="noopener noreferrer">環境省「我が国の生態系等に被害を及ぼすおそれのある外来種リスト（第２版）＜植物＞」（PDF）</a>、同日確認）。庭で育てるときは、花が終わったら花がらを摘み、種を作らせないことが剪定と同じくらい大切です（当サイトの整理）。
      </p>
    </>
  ),
  conclusionTitle: "ブッドレアは、3月頃に混んだ枝を間引いて整えます。大きくしたい年は切らずに花がら摘みだけにし、どちらの場合も種ができる前に花がらを取ります。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        大和市の回答は剪定の時期と切り方、環境省のリストは庭の外に広げないための注意を示しています。花がら摘みは、大和市の回答では「大きくしたいとき」の手入れとして出てきますが、<Hl>種子が風で散る木であることを考えると、毎年の花後に行う作業</Hl>と考えるのが安全です（当サイトの整理）。リストの位置づけは<a href={ENV_PAGE} className={A} target="_blank" rel="noopener noreferrer">環境省「生態系被害防止外来種リスト」のページ</a>で確認できます。
      </p>
    </>
  ),
  basicsHeading: "ブッドレアを剪定する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、環境省の外来種リスト（第2版）の記載を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "園芸名がブッドレア、和名はフサフジウツギ",
      desc: "リストの和名はフサフジウツギで、別名・流通名にニシキフジウツギ、チチブフジウツギ、ブッドレアを挙げています。学名は Buddleja davidii、中国西部原産です。",
    },
    {
      title: "明治時代から庭で育てられてきた",
      desc: "明治時代に園芸植物として渡来し、多数の園芸品種があり、ブッドレアとして観賞用に栽培され、切り花にもされるとしています。",
    },
    {
      title: "種子は風で散る",
      desc: "利用上の留意事項に、風により種子が散布され、草原を森林化すること等を挙げています。日本では北海道・本州・九州で逸出しています。",
    },
    {
      title: "すき間や斜面でも育つ",
      desc: "排水の良い日当たりを好み、寒さに強く、舗道の割れ目やコンクリートブロックの間でも生長するとしています。山地の崩壊地や道路の法面で群落をつくり、分布を広げています。",
    },
  ],
  stepsHeading: "ブッドレアの剪定と花後の手入れ4つの手順",
  stepsIntro: <p>大和市の回答と環境省のリストの記載にもとづく流れです。</p>,
  steps: [
    {
      title: "花が咲き終わったら花がらを摘む",
      desc: "大和市は、大きくしたいなら花がらを摘むのみとしています。環境省のリストは種子が風で散ることを挙げているため、種ができる前に、咲き終わった花穂を付け根から切り取ります（当サイトの整理）。",
    },
    {
      title: "摘んだ花がらは庭に放置しない",
      desc: "切った花穂は袋に入れ、お住まいの自治体の分け方に従って処分します。剪定枝や刈り草の出し方は自治体ごとに異なります。",
    },
    {
      title: "3月頃に混んでいる枝を間引く",
      desc: "大和市は、剪定は3月頃、混んでいる所を間引くとしています。込み合った枝、枯れた枝を付け根から抜き、株の内側に日が入るようにします。",
    },
    {
      title: "大きくしたい年は切らない",
      desc: "大和市は、大きくしたいなら剪定はしないと回答しています。その年は3月の間引きも控え、花がら摘みだけにします。",
    },
  ],
  ngHeading: "ブッドレアの手入れで避けたいこと",
  ngs: [
    {
      title: "花がらを付けたまま種を作らせることは避けます",
      desc: "環境省のリストは、風により種子が散布されることを挙げています。花後は早めに花がらを摘みます（当サイトの整理）。",
    },
    {
      title: "自然の多い場所の近くへ株や枝を持ち出すことは避けます",
      desc: "リストの利用上の留意事項は、生物多様性の保全上重要な地域に侵入するおそれのある場所には持ち込まないとしています。河原や山林の近くに植えたり、切った枝を捨てたりしないようにします。",
    },
    {
      title: "大きくしたいのに毎年強く切り戻すことは避けます",
      desc: "大和市は、大きくしたいなら剪定はしないと回答しています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>背丈を超えて大きくなった株、こぼれ種で庭のあちこちから芽が出ている場合</Hl>は、剪定業者に相談してください。「3月頃に混んだ枝を間引く」「花後に花がらを摘み、切った枝と花穂は持ち帰って処分する」と伝えると、時期と後始末の考え方を共有しやすくなります。剪定の時期は<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、外来種としての扱いは<a href={ENV_LIST} className={A} target="_blank" rel="noopener noreferrer">環境省の外来種リスト（第２版）＜植物＞（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      花木の剪定時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花と手入れ</Link>、切った枝の出し方は<Link href="/senteieda-shobun/" className={A}>剪定枝・刈り草の処分方法</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ブッドレアの剪定を業者に相談する",
  ctaText: "大きくなったブッドレアの間引きや、花後の花がら摘みは、業者に任せると安心です。",
  faqHeading: "ブッドレア（ブットレア）の剪定でよくある質問",
  faqs: [
    {
      q: "ブッドレアの剪定はいつ行えばよいですか？",
      a: "大和市の園芸相談の事例では、剪定は3月頃、混んでいる所を間引くと回答しています。",
    },
    {
      q: "大きく育てたいときはどうすればよいですか？",
      a: "大和市の回答では、大きくしたいなら剪定はせず、花がらを摘むのみとしています。",
    },
    {
      q: "ブッドレアは植えてはいけない木ですか？",
      a: "環境省の外来種リスト（第2版）では、フサフジウツギ（ブッドレア）は防除推進外来種で、特定外来生物の欄は空欄です。栽培を法律で禁止するものではありませんが、生物多様性の保全上重要な地域に侵入するおそれのある場所には持ち込まないとしています。",
    },
    {
      q: "花がらはなぜ摘むのですか？",
      a: "環境省のリストは、風により種子が散布されることを挙げています。種ができる前に花がらを摘むと、庭の外へ広がることを防げます（当サイトの整理）。",
    },
  ],
  related: [
    { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ", desc: "花芽と剪定時期の関係" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/senteieda-shobun/", label: "剪定枝・刈り草の処分方法", desc: "切った枝と花がらの出し方" },
    { href: "/hagi-sentei/", label: "萩の剪定", desc: "株元から切り戻す花木" },
  ],
};

export default function BuddlejaSenteiPage() {
  return <KnowArticle data={data} />;
}
