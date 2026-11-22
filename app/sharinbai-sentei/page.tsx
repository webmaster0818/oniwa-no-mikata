import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/sharinbai-sentei/";
const A = "text-[#2D7F3E] underline";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "シャリンバイの剪定｜花芽ができる7月より前、花後の6月に刈り込む｜お庭のミカタ",
  },
  description:
    "シャリンバイの剪定・刈り込みの時期を、芦屋市の街路樹等維持管理基本書の花芽分化期の表、熊本市の樹木管理ガイドライン、世田谷区の植栽ガイドブックをもとにまとめました。葉が落ちるごま色斑点病について、福岡県の資料もあわせて整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "シャリンバイの剪定",
    description:
      "シャリンバイの刈り込みの時期と花芽の関係、資料ごとの時期の違い、ごま色斑点病の対処を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; prune: string; bud: string; bloom: string }[] = [
  {
    src: "芦屋市",
    prune: "6月中（年1回）",
    bud: "7月上旬〜8月中旬・頂芽",
    bloom: "3月中旬〜4月下旬",
  },
  {
    src: "熊本市（花芽分化と剪定の時期の表）",
    prune: "7〜8月",
    bud: "7月〜8月・頂芽",
    bloom: "4月〜5月",
  },
  {
    src: "熊本市（主要樹種の表）",
    prune: "9〜10月",
    bud: "—",
    bloom: "—",
  },
  {
    src: "世田谷区",
    prune: "—",
    bud: "—",
    bloom: "花5月",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">剪定・刈込みの時期</th>
          <th className="border px-2 py-2 text-left">花芽分化期・位置</th>
          <th className="border px-2 py-2 text-left">開花期</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.prune}</td>
            <td className="border px-2 py-2">{r.bud}</td>
            <td className="border px-2 py-2">{r.bloom}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に芦屋市の街路樹等維持管理基本書（令和3年3月）の中低木の刈込みの表と花芽分化期の表、熊本市の公共施設樹木の維持管理ガイドライン（令和5年8月）の2つの表、世田谷区の植栽ガイドブックの特性表を開き、シャリンバイの記載を当サイトで並べました。剪定の時期は資料によって6月から10月まで幅があります。どの資料も花芽は枝先（頂芽）に夏に作られるとしているため、当サイトでは花芽ができる前の花後〜6月の刈り込みを中心に案内しています。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "sharinbai-sentei",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "シャリンバイの剪定｜花芽ができる7月より前、花後の6月に刈り込む",
  breadcrumbLabel: "シャリンバイの剪定",
  tagChips: ["シャリンバイ", "常緑低木", "花木", "刈り込み", "ごま色斑点病"],
  ldHeadline: "シャリンバイの剪定｜花芽ができる7月より前、花後の6月に刈り込む",
  ldDescription:
    "シャリンバイの剪定・刈り込みの時期と花芽の関係、ごま色斑点病を、芦屋市・熊本市・世田谷区・福岡県の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        芦屋市の街路樹等維持管理基本書では、シャリンバイの刈込みを<Hl>6月中に年1回</Hl>とし、花芽分化期を<Hl>7月上旬〜8月中旬</Hl>、花芽の位置を<Hl>頂芽</Hl>としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>、2026年11月23日確認）。
      </p>
      <p>
        熊本市のガイドラインでは、花木の剪定時期は<Hl>花後から花芽分化が行われる前の時期でなければならない</Hl>とし、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。本記事では、これらの資料を照合し、庭のシャリンバイの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "シャリンバイは枝先に夏（7〜8月）に花芽を作ります。花が終わったあと、6月中に刈り込むと翌春の花を残しやすくなります。",
  conclusionBody: (
    <>
      <p>
        熊本市の公共施設樹木の維持管理ガイドラインでは、花芽分化と剪定の時期の表でシャリンバイの花芽分化期を<Hl>7月〜8月</Hl>、花芽の位置を頂芽とし、主要樹種の表では剪定時期を<Hl>9〜10月</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」（PDF）</a>、2026年11月23日確認）。資料の記載を並べると、次のとおりです（世田谷区は<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">掲載樹種特性表（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "シャリンバイの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "花芽は夏に枝先に作られる",
      desc: "芦屋市の基本書は花芽分化期を7月上旬〜8月中旬、熊本市のガイドラインは7月〜8月とし、どちらも花芽の位置を頂芽（枝先）としています。",
    },
    {
      title: "花木の剪定は花後から花芽分化の前まで",
      desc: "熊本市のガイドラインでは、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。芦屋市の基本書も、花木の刈込みは開花習性を配慮して行うとしています。",
    },
    {
      title: "生育が遅い",
      desc: "世田谷区の特性表では、シャリンバイを生育が遅い常緑低木とし、幹より輪状に枝を出すとしています。花は白色（淡紅花種もある）としています。",
    },
    {
      title: "寒さに弱い",
      desc: "熊本市のガイドラインでは、シャリンバイは寒さに弱いので、標高の高い山間部には植栽できないとしています。",
    },
  ],
  stepsHeading: "庭のシャリンバイを刈り込む4つの手順",
  stepsIntro: <p>芦屋市の基本書の低木の刈込みと、両市の花芽分化期の表にもとづく流れです。</p>,
  steps: [
    {
      title: "花が終わるのを待つ",
      desc: "芦屋市の基本書では開花期を3月中旬〜4月下旬、熊本市のガイドラインでは4月〜5月としています。花が終わってから作業します。",
    },
    {
      title: "6月中に形を整える",
      desc: "芦屋市の基本書では、シャリンバイの刈込みを6月中に年1回としています。花芽分化期（7月上旬〜）の前にあたります。",
    },
    {
      title: "込み合った枝を間引く",
      desc: "世田谷区の特性表では、シャリンバイは幹より輪状に枝を出すとしています。同じ位置から出た枝が込み合った場合は、表面を刈るだけでなく内側の枝を間引いて風を通します。",
    },
    {
      title: "夏以降は伸びた枝を整える程度にする",
      desc: "熊本市の主要樹種の表は9〜10月を剪定時期としていますが、同じガイドラインの表では花芽分化期を7月〜8月としています。夏以降に枝先を広く刈ると、作られた花芽を切り落とすことになります。",
    },
  ],
  ngHeading: "シャリンバイの剪定で避けたいこと",
  ngs: [
    {
      title: "秋に枝先を一斉に刈り込むことは避けます",
      desc: "熊本市のガイドラインでは、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。シャリンバイの花芽は7〜8月に枝先に作られます。",
    },
    {
      title: "斑点の出た葉や落ち葉を株元に残すことは避けます",
      desc: "福岡県の資料では、ごま色斑点病は病葉上で越冬して翌春の伝染源になるとし、初発をなるべく早く見つけて摘葉し、落下した病葉も株元に放置せず除去するとしています。",
    },
    {
      title: "近くのカナメモチ・ビワの病気を見過ごすことは避けます",
      desc: "福岡県の資料では、ごま色斑点病はベニカナメ・ビワなど多くのバラ科ナシ亜科の樹木に感染でき、病植物の間で感染を繰り返して広がるとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>植え込みや生垣が長く6月中に刈り終えられない、葉に赤紫の斑点が出て落葉が続いている</Hl>といった場合は、低木の刈り込みや庭木の消毒に対応する業者に相談すると作業がまとまります。依頼するときは、株の数と高さ、花を残したいかどうか、葉の症状を伝えてください。
    </p>,
    <p key="2">
      花木の時期の考え方は<Link href="/kaboku-kaika-teire/" className={A}>花木が咲かないときの手入れ</Link>、同じ病気が出るカナメモチは<Link href="/kanamemochi-sentei/" className={A}>カナメモチ（レッドロビン）の剪定</Link>、庭木の病害虫は<Link href="/niwaki-byogaichu/" className={A}>庭木の病害虫</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。ごま色斑点病の出典は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県「【花き花木】病害虫・雑草の発生生態と防除」（PDF）</a>（2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "株の数と葉の症状を伝えて相談する",
  ctaText:
    "シャリンバイは花芽が夏に作られるため、刈り込みの時期で翌春の花が変わります。株が多い植え込みや葉の病気は、業者と相談すると安心です。",
  faqHeading: "シャリンバイの剪定のよくある質問",
  faqs: [
    {
      q: "シャリンバイの剪定はいつがよいですか？",
      a: "芦屋市の街路樹等維持管理基本書では、刈込みを6月中に年1回としています。熊本市のガイドラインは、花芽分化と剪定の時期の表で7〜8月、主要樹種の表で9〜10月としており、資料によって幅があります。",
    },
    {
      q: "シャリンバイの花が咲かなくなりました。",
      a: "芦屋市・熊本市の資料とも、シャリンバイの花芽は7〜8月ごろに枝先（頂芽）に作られるとしています。熊本市のガイドラインでは、花芽分化後に剪定すると翌年の花芽を切り落とすため翌年開花しないとしています。刈り込みの時期を見直します。",
    },
    {
      q: "葉に赤い斑点が出て、葉が落ちます。",
      a: "福岡県の資料では、シャリンバイのごま色斑点病は、初め紅色の小斑点が葉に出て、進行すると激しく落葉するとしています。初発をなるべく早く見つけて摘葉し、落下した病葉も除去するとしています。",
    },
    {
      q: "シャリンバイはすぐに大きくなりますか？",
      a: "世田谷区の植栽ガイドブックの特性表では、シャリンバイを生育が遅い常緑低木としています。",
    },
  ],
  related: [
    {
      href: "/kaboku-kaika-teire/",
      label: "花木が咲かないときの手入れ",
      desc: "花芽と剪定の時期",
    },
    {
      href: "/kanamemochi-sentei/",
      label: "カナメモチ（レッドロビン）の剪定",
      desc: "同じ病気が出る生垣の木",
    },
    {
      href: "/niwaki-byogaichu/",
      label: "庭木の病害虫",
      desc: "葉や枝の異変の見分け方",
    },
    {
      href: "/masaki-sentei/",
      label: "マサキの剪定",
      desc: "植え込みに多い常緑樹",
    },
  ],
};

export default function SharinbaiSenteiPage() {
  return <KnowArticle data={data} />;
}
