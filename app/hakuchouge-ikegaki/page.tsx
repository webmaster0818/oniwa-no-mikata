import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/hakuchouge-ikegaki/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_7 = "https://www.city.setagaya.lg.jp/documents/4728/29589_7.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const KOTO = "https://www.city.koto.lg.jp/470200/documents/20260810092618.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ハクチョウゲの生垣と刈り込み｜萌芽力が強く刈り込める常緑低木。花を見るなら花後すぐに刈る｜お庭のミカタ",
  },
  description:
    "ハクチョウゲを生垣や低い植え込みにするときの刈り込みの時期と考え方を、世田谷区の植栽ガイドブック、熊本市の樹木管理ガイドライン、江東区の街路樹の資料をもとに整理しました。資料ごとの時期の違いも並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ハクチョウゲの生垣と刈り込み",
    description:
      "世田谷区の樹木一覧は、ハクチョウゲを枝が細く密で、萌芽力が強く刈り込み可能な常緑低木としています。熊本市は、花を見るには花が終わった直後に剪定するとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; time: string; flower: string; note: string }[] = [
  { src: "熊本市（花芽分化と剪定の時期）", time: "6〜7月", flower: "花芽分化 3月下旬〜4月上旬／開花 5月上旬〜7月上旬／頂芽", note: "主要樹種の特徴の表では、樹形は株立ち。「花を見るには、花が終った直後に剪定をする」" },
  { src: "江東区（主な花芽の分化時期及び剪定時期）", time: "11月〜3月", flower: "花芽分化 6月中旬頃（目安）／開花 5月上旬〜7月上旬／頂芽", note: "花木類の刈込は、花芽をつける時期を考慮して行うとしている" },
  { src: "世田谷区（樹木一覧）", time: "手入時期 4〜10月", flower: "鑑賞時期 花5〜6月", note: "アカネ科の常緑低木。株立ちとなる。枝は細く密、萌芽力強く、刈り込み可。移植時期 2月中旬〜3月・10〜11月、移植難易◎" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">剪定・手入れの時期</th>
          <th className="border px-2 py-2 text-left">花の時期・花芽</th>
          <th className="border px-2 py-2 text-left">そのほかの記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.time}</td>
            <td className="border px-2 py-2">{r.flower}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、熊本市「公共施設樹木の維持管理ガイドライン」（花芽分化と剪定の時期・巻末資料 熊本平野部の主要樹種の特徴）、江東区「4－3 適切な維持管理に向けて～剪定など～」（表4.3.2 主な花芽の分化時期及び剪定時期）、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧を開き、ハクチョウゲの行を当サイトで並べました。花芽分化の時期は熊本市と江東区で記載が異なり、表は各資料の記載をそのまま載せています。3つの資料に、ハクチョウゲを生垣に使うことの記載はありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "hakuchouge-ikegaki",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "ハクチョウゲの生垣と刈り込み｜萌芽力が強く刈り込める常緑低木。花を見るなら花後すぐに刈る",
  breadcrumbLabel: "ハクチョウゲの生垣と刈り込み",
  tagChips: ["ハクチョウゲ", "生垣", "常緑低木", "刈り込み", "アカネ科"],
  ldHeadline: "ハクチョウゲの生垣と刈り込み｜萌芽力が強く刈り込める常緑低木。花を見るなら花後すぐに刈る",
  ldDescription:
    "ハクチョウゲを生垣や低い植え込みにするときの刈り込みの時期と考え方を、世田谷区・熊本市・江東区の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ハクチョウゲは、5〜6月頃に小さな花を咲かせるアカネ科の常緑低木です。世田谷区の植栽ガイドブックの樹木一覧は、<Hl>株立ちとなり、枝は細く密、萌芽力が強く刈り込み可</Hl>としています（出典：<a href={SETAGAYA_7} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        刈り込みに耐える性質から、低い生垣や縁取りの植え込みに使われます（当サイトの整理）。熊本市のガイドラインは、<Hl>花を見るには、花が終わった直後に剪定をする</Hl>としています。本記事では、3つの資料の時期を並べ、生垣として刈り込むときの目安を整理します。
      </p>
    </>
  ),
  conclusionTitle: "花も楽しむ生垣なら、花が終わった直後（6〜7月頃）に刈り込みます。花より形を優先する場合は、江東区の資料のように冬（11〜3月）に整える方法もありますが、翌年の花は減ることがあります。",
  conclusionBody: (
    <>
      <p>3つの資料の記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        3つの資料で、ハクチョウゲの<Hl>開花（5〜7月頃）と、花芽が枝先（頂芽）につくこと</Hl>は一致しています。枝先を刈り込むと花芽も一緒に切ることになるため、花を残したい場合は、熊本市の<Hl>花後すぐ</Hl>が分かりやすい目安です（当サイトの整理）。江東区は剪定時期を11月〜3月としつつ、花木類の刈込は花芽をつける時期を考慮して行うとしています（<a href={KOTO} className={A} target="_blank" rel="noopener noreferrer">江東区「4－3 適切な維持管理に向けて～剪定など～」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  basicsHeading: "ハクチョウゲを生垣にする前に知っておきたい4つの性質",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "萌芽力が強く、刈り込める",
      desc: "世田谷区は、枝は細く密、萌芽力が強く、刈り込み可としています。刈り込んで形を作る生垣に向く性質です。",
    },
    {
      title: "花芽は枝先にできる",
      desc: "熊本市と江東区の表は、いずれもハクチョウゲの花芽の位置を「頂芽」としています。枝先を切る時期によって、翌年の花の量が変わります。",
    },
    {
      title: "半日陰でも育つ",
      desc: "世田谷区の一覧では、日照は○（中間・半日影）、乾湿は○（中間）、都市適応性は○（中）、好む土壌は壌土です。",
    },
    {
      title: "移植しやすい",
      desc: "世田谷区の一覧では、移植難易は◎（移植がしやすく活着がよい）、移植時期は2月中旬〜3月と10〜11月です。",
    },
  ],
  stepsHeading: "ハクチョウゲの生垣を刈り込む4つの手順",
  stepsIntro: <p>3つの資料の記載をもとに、家庭の低い生垣に当てはめた流れです。</p>,
  steps: [
    {
      title: "花が終わるのを待つ",
      desc: "開花は5月上旬〜7月上旬です（熊本市・江東区）。花が終わった直後が、花を残すための刈り込みの目安です（熊本市）。",
    },
    {
      title: "上面と側面を刈りそろえる",
      desc: "萌芽力が強く刈り込み可（世田谷区）のため、伸びた枝先を刈り込みばさみで刈りそろえます。",
    },
    {
      title: "生育期は伸びた枝を軽く整える",
      desc: "世田谷区は手入時期を4〜10月としています。花後の刈り込みのあとに飛び出した枝は、夏から初秋に軽く整えます。",
    },
    {
      title: "冬は形を見直す程度にとどめる",
      desc: "江東区は剪定時期を11月〜3月としています。冬に強く刈ると枝先の花芽も切ることになるため、花を楽しむ生垣では形を見直す程度にとどめます。",
    },
  ],
  ngHeading: "ハクチョウゲの生垣で避けたいこと",
  ngs: [
    {
      title: "花芽ができてからの強い刈り込みは避けます",
      desc: "花芽は枝先（頂芽）にできます（熊本市・江東区）。花芽ができた後に枝先を強く刈ると、翌年の花が減ります。",
    },
    {
      title: "時期を1つの資料だけで決めないようにします",
      desc: "剪定時期は熊本市が6〜7月、江東区が11月〜3月で、花芽分化の時期も資料によって違います。花を優先するか、形を優先するかで時期を選んでください。",
    },
    {
      title: "株の内側まで光が届かない刈り方は避けます",
      desc: "枝が細く密に茂る木です（世田谷区）。外側だけを厚く刈りそろえ続けると内側が混み合うため、ときどき込み合った枝を抜きます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      生垣が長い場合や、伸び放題になった株を作り直したい場合は、植木屋や造園業者に相談してください。「花を残したいので、花が終わった直後に刈り込んでほしい」と伝えると、時期の考え方を共有しやすくなります。剪定時期と花芽分化は<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>によります（2026年11月28日確認）。
    </p>,
    <p key="2">
      生垣の刈り込み全般は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、生垣に使う木の選び方は<Link href="/ikegaki-shurui/" className={A}>生垣の種類</Link>、同じ低い生垣に使う木は<Link href="/dodantsutsuji-ikegaki/" className={A}>ドウダンツツジの生垣</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ハクチョウゲの生垣の刈り込みを業者に相談する",
  ctaText: "長い生垣の刈り込みや、伸びすぎた株の作り直しは、業者に任せると安心です。",
  faqHeading: "ハクチョウゲの生垣でよくある質問",
  faqs: [
    {
      q: "ハクチョウゲの刈り込みはいつ行えばよいですか？",
      a: "熊本市は剪定時期を6〜7月とし、花を見るには花が終わった直後に剪定するとしています。江東区は11月〜3月、世田谷区は手入時期を4〜10月としています。",
    },
    {
      q: "ハクチョウゲは生垣に向いていますか？",
      a: "世田谷区の樹木一覧は、枝は細く密、萌芽力が強く刈り込み可としています。生垣に使うことの記載そのものはありませんが、刈り込みに耐える性質です。",
    },
    {
      q: "刈り込んだら花が咲かなくなりました。",
      a: "熊本市と江東区の表では、ハクチョウゲの花芽は枝先（頂芽）にできます。花芽ができた後に刈り込むと、翌年の花が減ります。",
    },
    {
      q: "日陰でも育ちますか？",
      a: "世田谷区の一覧では、日照は○（中間・半日影）です。",
    },
  ],
  related: [
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込み", desc: "生垣の刈り込みの基本" },
    { href: "/ikegaki-shurui/", label: "生垣の種類", desc: "生垣に使う木の選び方" },
    { href: "/dodantsutsuji-ikegaki/", label: "ドウダンツツジの生垣", desc: "同じ低い生垣に使う木" },
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "花木の剪定時期の考え方" },
  ],
};

export default function HakuchougeIkegakiPage() {
  return <KnowArticle data={data} />;
}
