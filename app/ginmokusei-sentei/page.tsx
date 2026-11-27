import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/ginmokusei-sentei/";
const A = "text-[#2D7F3E] underline";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "銀木犀（ギンモクセイ）の剪定｜本格的な剪定は花後（11月頃）に枝抜きと浅い刈り込み。春は徒長枝と込み合った枝だけ抜く｜お庭のミカタ",
  },
  description:
    "銀木犀（ギンモクセイ）の剪定時期と切り方を、大和市の園芸相談の事例、熊本市の樹木管理ガイドライン、芦屋市の街路樹等維持管理基本書、福岡県の病害虫資料をもとに整理しました。花後の11月頃の剪定と、春にしてよい作業をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "銀木犀（ギンモクセイ）の剪定",
    description:
      "大和市の園芸相談では、ギンモクセイの剪定は花後（11月頃）に行い、枝抜きもして浅く刈り込むと回答しています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; value: string }[] = [
  { src: "大和市（園芸相談の事例）", item: "剪定の時期と方法", value: "剪定は花後（11月頃）行う。枝抜きもして浅く刈込む。3月頃は徒長枝、込み合っている枝抜きは行っても大丈夫" },
  { src: "熊本市（花芽分化と剪定の時期・「モクセイ」の行）", item: "剪定時期・花芽", value: "花芽分化期は7月、剪定時期は3〜4月、花芽の位置は側芽、開花時期は10月" },
  { src: "芦屋市（主な高木一覧）", item: "大きさ・管理", value: "モクセイ科の常緑広葉樹。樹高10m。剪定の適否は○、移植容易度は○、日当たりは中庸" },
  { src: "福岡県（病害虫資料）", item: "病害虫", value: "キンモクセイ・ギンモクセイ・ヒイラギの項に、先葉枯病・炭疽病・褐斑病・さび病、アブラムシ類・ハダニ類・カイガラムシ類・イボタガ・オリーブアナアキゾウムシ・ヘリグロテントウノミハムシ" },
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
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、大和市「園芸相談の事例《庭木》」（26 ギンモクセイ 剪定）、熊本市「公共施設樹木の維持管理ガイドライン」（「花芽分化と剪定の時期」の表）、芦屋市「街路樹等維持管理基本書」（参考資料：主な高木一覧）、福岡県「【花き花木】病害虫・雑草の発生生態と防除」（キンモクセイ、ギンモクセイ、ヒイラギ）を開き、当サイトで並べました。熊本市の表は「モクセイ」として載っており、ギンモクセイを名指ししたものではありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "ginmokusei-sentei",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "銀木犀（ギンモクセイ）の剪定｜本格的な剪定は花後（11月頃）に枝抜きと浅い刈り込み。春は徒長枝と込み合った枝だけ抜く",
  breadcrumbLabel: "銀木犀の剪定",
  tagChips: ["ギンモクセイ", "銀木犀", "剪定時期", "モクセイ科", "生垣"],
  ldHeadline: "銀木犀（ギンモクセイ）の剪定｜本格的な剪定は花後（11月頃）に枝抜きと浅い刈り込み。春は徒長枝と込み合った枝だけ抜く",
  ldDescription:
    "銀木犀（ギンモクセイ）の剪定時期と切り方を、大和市・熊本市・芦屋市・福岡県の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        銀木犀（ギンモクセイ）の剪定は、<Hl>秋の花が終わった後、11月頃</Hl>が目安です。大和市の園芸相談の事例では、「枝が伸び大きくなりすぎるので3月頃に切りたい」という相談に、<Hl>剪定は花後（11月頃）に行い、枝抜きもして浅く刈り込む</Hl>と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        同じ回答は、3月頃でも<Hl>徒長枝や込み合っている枝を抜く程度なら行っても大丈夫</Hl>としています。春は大きく形を変えず、飛び出した枝を付け根から抜くことにとどめます。
      </p>
    </>
  ),
  conclusionTitle: "ギンモクセイは、花後の11月頃に枝抜きと浅い刈り込みで整えます。春（3月頃）は徒長枝と込み合った枝を抜く程度にします。",
  conclusionBody: (
    <>
      <p>4つの資料の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        熊本市の表（「モクセイ」の行）は剪定時期を3〜4月とし、花芽分化期を7月としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、同日確認）。大和市の回答（花後の11月頃）とは時期が異なりますが、<Hl>どちらも花芽ができる7月より前か、花が終わった後</Hl>で、夏に刈り込まない点は共通しています（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "ギンモクセイを剪定する前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "樹高10mになる常緑樹",
      desc: "芦屋市の主な高木一覧では、ギンモクセイはモクセイ科の常緑広葉樹で、樹高は10m、日当たりは中庸です。",
    },
    {
      title: "剪定に耐える",
      desc: "芦屋市の一覧では、剪定の適否は○、移植容易度も○です。",
    },
    {
      title: "花芽は7月ごろ、枝のわきにできる",
      desc: "熊本市の表の「モクセイ」の行では、花芽分化期は7月、花芽の位置は側芽、開花時期は10月です。",
    },
    {
      title: "キンモクセイと同じ病害虫",
      desc: "福岡県の資料は、キンモクセイ・ギンモクセイ・ヒイラギを同じ項にまとめ、イボタガ（幼虫は4〜5月に見られる）などを挙げています。",
    },
  ],
  stepsHeading: "ギンモクセイの剪定4つの手順",
  stepsIntro: <p>大和市・熊本市・芦屋市・福岡県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "花が終わるのを待つ",
      desc: "熊本市の表の開花時期は10月です。大和市は、剪定は花後（11月頃）に行うとしています。",
    },
    {
      title: "込み合った枝を付け根から抜く",
      desc: "大和市は「枝抜きもして」としています。内側の込み合った枝、枯れた枝を先に抜き、風通しをよくします。",
    },
    {
      title: "外側を浅く刈り込む",
      desc: "大和市は「浅く刈込む」としています。深く刈り込まず、表面を整える程度にします。",
    },
    {
      title: "春は徒長枝だけ抜く",
      desc: "大和市は、3月頃は徒長枝や込み合っている枝の枝抜きは行っても大丈夫としています。4〜5月はイボタガの幼虫が見られる時期なので、葉の食害もあわせて確かめます（福岡県）。",
    },
  ],
  ngHeading: "ギンモクセイの剪定で避けたいこと",
  ngs: [
    {
      title: "夏に強く刈り込むことは避けます",
      desc: "熊本市の表（モクセイ）では花芽分化期は7月です。花芽ができた後に刈り込むと、秋の花が減ります（当サイトの整理）。",
    },
    {
      title: "春に大きく形を変えることは避けます",
      desc: "大和市は、3月頃は徒長枝や込み合った枝の枝抜きにとどめ、剪定は花後に行うとしています。",
    },
    {
      title: "込み合ったまま放置することは避けます",
      desc: "福岡県の資料は、ギンモクセイの害虫にカイガラムシ類・ハダニ類を挙げています。枝抜きで風通しをよくしておきます（当サイトの整理）。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>背丈を超えて大きくなったギンモクセイ、生垣として長く並んでいるギンモクセイ</Hl>は、剪定業者に相談してください。「花後の11月頃に、枝抜きと浅い刈り込みで」と伝えると、時期と仕上がりの考え方を共有しやすくなります。大きさと剪定の適否は<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>、病害虫は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県「【花き花木】病害虫・雑草の発生生態と防除」（PDF）</a>によります（いずれも2026年11月27日確認）。
    </p>,
    <p key="2">
      同じモクセイ科のキンモクセイは<Link href="/kinmokusei-teire/" className={A}>キンモクセイの手入れ</Link>と<Link href="/kinmokusei-gaichu/" className={A}>キンモクセイの害虫</Link>、生垣の刈り込みは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込みの基礎知識</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ギンモクセイの剪定を業者に相談する",
  ctaText: "大きくなったギンモクセイや、生垣の刈り込みは、業者に任せると安心です。",
  faqHeading: "銀木犀（ギンモクセイ）の剪定でよくある質問",
  faqs: [
    {
      q: "ギンモクセイの剪定はいつ行えばよいですか？",
      a: "大和市の園芸相談の事例では、剪定は花後（11月頃）に行うと回答しています。熊本市の表（モクセイ）は剪定時期を3〜4月としています。",
    },
    {
      q: "春（3月頃）に切ってもよいですか？",
      a: "大和市の回答では、3月頃は徒長枝や込み合っている枝の枝抜きは行っても大丈夫としています。大きく形を変える剪定は花後に行います。",
    },
    {
      q: "どのくらい切ればよいですか？",
      a: "大和市は「枝抜きもして浅く刈込む」としています。込み合った枝を付け根から抜き、外側は浅く整えます。",
    },
    {
      q: "ギンモクセイはどのくらいの大きさになりますか？",
      a: "芦屋市の主な高木一覧では、樹高は10mです。剪定の適否は○です。",
    },
  ],
  related: [
    { href: "/kinmokusei-teire/", label: "キンモクセイの手入れ", desc: "同じモクセイ科の花木" },
    { href: "/kinmokusei-gaichu/", label: "キンモクセイの害虫", desc: "ギンモクセイと共通の病害虫" },
    { href: "/hiiragi-sentei/", label: "ヒイラギの剪定", desc: "同じモクセイ科の常緑樹" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込みの基礎知識", desc: "刈り込みの時期と回数" },
  ],
};

export default function GinmokuseiSenteiPage() {
  return <KnowArticle data={data} />;
}
