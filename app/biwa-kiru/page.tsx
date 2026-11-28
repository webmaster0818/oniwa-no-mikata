import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/biwa-kiru/";
const A = "text-[#2D7F3E] underline";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050751.pdf";
const NAGASAKI = "https://www.pref.nagasaki.jp/e-nourin/nougi/theme/result/R6seika-jouhou/gyousei/G-06-03.pdf";
const SETAGAYA_10 = "https://www.city.setagaya.lg.jp/documents/4728/29589_10.txt";

export const metadata: Metadata = {
  title: {
    absolute: "びわの木を切る｜剪定は9月に間引く程度。高くなりすぎた木は長崎県の「一挙更新剪定」で約2mに｜お庭のミカタ",
  },
  description:
    "大きくなったびわの木を切るときの時期と考え方を、大和市の園芸相談の事例と長崎県農林技術開発センターの研究成果（一挙更新剪定）をもとに整理しました。根元から切る（伐採）場合の考え方も並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "びわの木を切る",
    description:
      "大和市の園芸相談の事例では、ビワの剪定は9月、冬に開花するので強い剪定は花や幼果が寒害を受け、混む所を間引くように剪定するとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { aim: string; when: string; how: string; src: string }[] = [
  { aim: "毎年の手入れ（混み合いの解消）", when: "9月", how: "混む所を間引くように剪定する。冬に開花するので、強い剪定は花や幼果が寒害を受ける", src: "大和市 園芸相談の事例" },
  { aim: "高くなりすぎた木を一度に低くする", when: "5月（試験では5月19日・5月26日に実施）", how: "樹高3.5mの木を、枝径5cm以下の部位で切除。2〜3年後も樹高2m程度に抑えられた", src: "長崎県農林技術開発センター" },
  { aim: "低くした後の管理", when: "翌年3〜4月・9月頃", how: "翌年3〜4月に間引き剪定、9月頃に副梢の除去。弱い枝・背面の枝は除去し、切った枝幹部には日焼け防止剤を塗布", src: "長崎県農林技術開発センター" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">目的</th>
          <th className="border px-2 py-2 text-left">時期</th>
          <th className="border px-2 py-2 text-left">切り方・注意</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.aim}>
            <td className="border px-2 py-2">{r.aim}</td>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.how}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、大和市「園芸相談の事例《果樹》」（PDF）と、長崎県農林技術開発センターの研究成果情報「一挙更新剪定により低樹高化したビワ『なつたより』の樹体形質と果実品質」（2024年度・PDF）を開き、当サイトで目的別に並べました。長崎県の成果は、果樹園で育てる品種「なつたより」の10年生の木を使った試験の結果で、庭の木で同じ結果になるとは限りません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "biwa-kiru",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "びわの木を切る｜剪定は9月に間引く程度。高くなりすぎた木は長崎県の「一挙更新剪定」で約2mに",
  breadcrumbLabel: "びわの木を切る",
  tagChips: ["ビワ", "果樹", "常緑樹", "低くする", "剪定時期"],
  ldHeadline: "びわの木を切る｜剪定は9月に間引く程度。高くなりすぎた木は長崎県の「一挙更新剪定」で約2mに",
  ldDescription:
    "大きくなったびわの木を切る時期と考え方を、大和市と長崎県の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        びわの木は、冬に花が咲く常緑の果樹です。大和市の園芸相談の事例では、「いつ剪定したら良いか」という相談に、<Hl>ビワの剪定は9月。冬に開花するので強い剪定は花や幼果が寒害を受ける。混む所を間引くように剪定する</Hl>と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《果樹》（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        一方、高くなりすぎた木については、長崎県農林技術開発センターが、<Hl>樹高3.5mの木を枝径5cm以下の部位で一度に切り下げ、2〜3年後も樹高2m程度に抑えられた</Hl>という研究成果を公開しています（<a href={NAGASAKI} className={A} target="_blank" rel="noopener noreferrer">長崎県農林技術開発センター 研究成果情報（PDF）</a>、同日確認）。本記事では、目的ごとに切り方を整理します。
      </p>
    </>
  ),
  conclusionTitle: "びわの木は、毎年の手入れなら9月に混んだ枝を間引く程度にします。高くなりすぎた木を一度に低くする方法もありますが、その後の数年の管理が必要です。木そのものを無くしたい場合は、伐採・抜根として業者に相談します。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を、目的ごとに並べると次のとおりです。</p>
      {table}
      <p className="mt-4">
        長崎県の資料は、ビワの低樹高化には<Hl>4、5年かけて段階的に切り下げる手法がある</Hl>が、完成までに長い年数がかかり、新梢管理を怠るとすぐに高木化しやすいため、一度に切り下げる方法を開発したとしています。一度に切った後も、<Hl>新しい枝の誘引や害虫の防除を続けることが前提</Hl>です。手間をかけられない庭では、9月の間引きで少しずつ小さくするほうが現実的です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "びわの木を切る前に知っておきたい4つのこと",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "ポイント",
  basics: [
    {
      title: "冬に花が咲く",
      desc: "大和市は、冬に開花するので強い剪定は花や幼果が寒害を受けるとしています。花の前に強く切らないことが基本です。",
    },
    {
      title: "樹勢が強く、高くなりやすい",
      desc: "長崎県は、品種「なつたより」について、樹勢が強いため新梢管理が不足すると高木化しやすいとしています。",
    },
    {
      title: "比較的小さいスペースでも植えられる常緑樹",
      desc: "世田谷区の植栽ガイドブックは、比較的小さいスペースでも植栽できる常緑樹の例にビワを挙げています。",
    },
    {
      title: "大きく切った後は日焼けに注意",
      desc: "長崎県は、一挙更新剪定の後は枝幹部の日焼けを防ぐために日焼け防止剤を塗布するとしています。",
    },
  ],
  stepsHeading: "びわの木を低くする4つの手順（長崎県の一挙更新剪定の場合）",
  stepsIntro: <p>長崎県農林技術開発センターの研究成果に書かれている試験の手順です。果樹園の試験のため、庭の木では業者と相談しながら進めてください。</p>,
  steps: [
    {
      title: "5月に、枝径5cm以下の部位で切る",
      desc: "樹高3.5mの木を、低樹高化を目的に枝径5cm以下の部位で切除しています。",
    },
    {
      title: "切った部分に日焼け防止剤を塗る",
      desc: "枝幹部の日焼けを防ぐためとしています。",
    },
    {
      title: "弱い枝・背面の枝を除き、強い枝は残す",
      desc: "発生した弱い枝と背面の枝は除去し、主幹から出た強勢な枝は樹勢の維持と徒長枝の抑制のため、力枝として残しています。",
    },
    {
      title: "翌年3〜4月に間引き、9月頃に副梢を除く",
      desc: "切った後1〜2年は新しい枝の育成に重点を置き、新芽のアブラムシやビワサビダニなどの防除を適期に行うとしています。",
    },
  ],
  ngHeading: "びわの木を切るときに避けたいこと",
  ngs: [
    {
      title: "花の前（秋〜冬）の強い剪定は避けます",
      desc: "大和市は、冬に開花するので強い剪定は花や幼果が寒害を受けるとしています。",
    },
    {
      title: "一度に低くした後、放置しないようにします",
      desc: "長崎県は、新梢管理を怠るとすぐに高木化しやすいとしています。",
    },
    {
      title: "高い位置の作業を無理に自分で行わないようにします",
      desc: "長崎県の資料でも、高木化した木は脚立等の乗り降りが増え、作業性が劣るとしています。高い位置の太い枝の作業は業者に任せてください。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      脚立が必要な高さまで伸びた木や、太い枝を切る必要がある場合は、剪定業者に相談してください。「実を残しながら低くしたい」のか「木を根元から無くしたい」のかで、作業も費用の出し方も変わります。根元から切る場合は、切り株を残すか根まで掘り起こすか（抜根）も決めておくと、見積もりをそろえやすくなります。毎年の剪定の時期は<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《果樹》（PDF）</a>、植えられる場所の例は<a href={SETAGAYA_10} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」高木・中木・低木（テキスト版）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      大きくなった庭木全般の考え方は<Link href="/niwaki-hikuku-suru/" className={A}>大きくなりすぎた庭木を低くする</Link>、根元から切る場合は<Link href="/bassai-bakkon-chigai/" className={A}>伐採と抜根の違い</Link>、果樹全般の手入れは<Link href="/kaju-niwaki-teire/" className={A}>庭の果樹の手入れの基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "びわの木の剪定・伐採を業者に相談する",
  ctaText: "高くなったびわの木の切り下げや、根元からの伐採は、業者に任せると安心です。",
  faqHeading: "びわの木を切るときによくある質問",
  faqs: [
    {
      q: "びわの木の剪定はいつ行えばよいですか？",
      a: "大和市の園芸相談の事例では、ビワの剪定は9月としています。冬に開花するので、強い剪定は花や幼果が寒害を受けるとしています。",
    },
    {
      q: "高くなりすぎたびわの木は低くできますか？",
      a: "長崎県農林技術開発センターの試験では、樹高3.5mの木を5月に枝径5cm以下の部位で切除し、2〜3年後も樹高2m程度に抑えられました。その後の誘引や防除が前提です。",
    },
    {
      q: "低くした後、実はなりますか？",
      a: "長崎県の試験では、一挙更新剪定から3年以降の果実は無処理より大きく、糖度も高い傾向でした。ただし果樹園の品種「なつたより」での結果です。",
    },
    {
      q: "びわの木を根元から切りたい場合は？",
      a: "伐採と、切り株の根を掘り起こす抜根は別の作業です。どこまで行うかを決めてから業者に見積もりを依頼してください。",
    },
  ],
  related: [
    { href: "/niwaki-hikuku-suru/", label: "大きくなりすぎた庭木を低くする", desc: "高さを抑える考え方" },
    { href: "/kaju-niwaki-teire/", label: "庭の果樹の手入れの基本", desc: "実がならないときの見方" },
    { href: "/bassai-bakkon-chigai/", label: "伐採と抜根の違い", desc: "切り株を残すかどうか" },
    { href: "/urushi-bassai/", label: "漆の木の伐採", desc: "かぶれに注意して切る木" },
  ],
};

export default function BiwaKiruPage() {
  return <KnowArticle data={data} />;
}
