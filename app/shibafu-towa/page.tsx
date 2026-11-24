import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shibafu-towa/";
const A = "text-[#2D7F3E] underline";
const SAITAMA = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20202.pdf";
const SHIZUOKA =
  "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/turfmaintenancemanual.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芝生とは｜夏芝（暖地型）と冬芝（寒地型）の2つに分かれる。冬に茶色くなるかどうかと主な種類の違い｜お庭のミカタ",
  },
  description:
    "芝生に使う芝草は、冬に休眠して茶色くなる夏芝（暖地型）と、冬も緑を保つ冬芝（寒地型）に分かれます。埼玉県と静岡県の芝生マニュアルをもとに、2つの違いと主な種類、庭での選び方をまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芝生とは",
    description:
      "芝生の芝草は夏芝（暖地型）と冬芝（寒地型）に分かれます。生長の時期、冬の色、横に広がるかどうか、主な種類を公的なマニュアルから整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { kind: string; season: string; spread: string; examples: string }[] = [
  {
    kind: "夏芝（暖地型）",
    season: "春から生育し、秋まで緑。冬は休眠して茶色になる（埼玉県：12℃以上で緑の葉が出始め、20℃以上で生育旺盛、12℃以下で休眠）",
    spread: "主にほふく型（上にも横にも伸び、隙間が自然とつながる）",
    examples: "バミューダグラス、コウライシバ、ノシバ、セントオーガスティンなど",
  },
  {
    kind: "冬芝（寒地型）",
    season: "冬の間も緑を保つ。秋に種まきして発芽する。関東以南では梅雨明けの暑さでほぼ消滅する（埼玉県）",
    spread: "主に株型（横には広がらず、隙間は自然にはつながらない）",
    examples: "ペレニアルライグラス、クリーピングベントグラス、ケンタッキーブルーグラス、トールフェスキューなど",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">分類</th>
          <th className="border px-2 py-2 text-left">生長と冬の色</th>
          <th className="border px-2 py-2 text-left">広がり方</th>
          <th className="border px-2 py-2 text-left">主な種類（静岡県）</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.kind}>
            <td className="border px-2 py-2">{r.kind}</td>
            <td className="border px-2 py-2">{r.season}</td>
            <td className="border px-2 py-2">{r.spread}</td>
            <td className="border px-2 py-2">{r.examples}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月25日に、埼玉県の園庭・校庭の芝生化マニュアル 第1章「芝生を選ぼう」（PDF）と、静岡県の「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」（PDF）を開き、芝草の分類に関する記載を当サイトで1つの表にまとめました。どちらも園庭・校庭向けの資料です。温度の目安は埼玉県の資料の記載で、地域によって時期はずれます。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shibafu-towa",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "芝生とは｜夏芝（暖地型）と冬芝（寒地型）の2つに分かれる。冬に茶色くなるかどうかと主な種類の違い",
  breadcrumbLabel: "芝生とは",
  tagChips: ["芝生", "夏芝", "冬芝", "暖地型芝草", "寒地型芝草"],
  ldHeadline: "芝生とは｜夏芝（暖地型）と冬芝（寒地型）の2つに分かれる。冬に茶色くなるかどうかと主な種類の違い",
  ldDescription:
    "芝生に使う芝草の分類（夏芝・冬芝）と主な種類の違いを、埼玉県と静岡県の芝生マニュアルをもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        芝生は、芝草（しばくさ）で地面を覆った場所のことで、使う芝草は<Hl>冬に休眠して茶色くなる「夏芝（暖地型）」と、冬も緑を保つ「冬芝（寒地型）」の2つ</Hl>に分かれます。埼玉県のマニュアルは「芝生は、生長の時期や特徴によって『夏芝』と『冬芝』の２つに分類されます」とし、園庭や校庭には一般的に夏芝が用いられるとしています（出典：<a href={SAITAMA} className={A} target="_blank" rel="noopener noreferrer">埼玉県 芝生化マニュアル 第1章 芝生を選ぼう（PDF）</a>、2026年11月25日確認）。
      </p>
      <p>
        静岡県のマニュアルも、芝草は暖地型芝草と寒地型芝草の2種類に分類できるとし、寒地型は1年中緑を保てる一方で夏の暑さに弱く、夏越しに手間がかかるとしています（出典：<a href={SHIZUOKA} className={A} target="_blank" rel="noopener noreferrer">静岡県 誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "冬に茶色くなっても手間を抑えたいなら夏芝、冬も緑にしたいなら冬芝（または夏芝への冬芝の種まき）です。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を並べると、夏芝と冬芝の違いは次のとおりです。</p>
      {table}
      <p className="mt-4">
        夏芝と冬芝の両方を使い、1年を通して緑に保つ方法もあります。秋に夏芝の上から冬芝の種をまく「オーバーシード」で、埼玉県は年間を通して管理が必要になるとしています。静岡県は、毎年冬芝の種まきが必要になるとしています。
      </p>
    </>
  ),
  basicsHeading: "芝生を知るための4つの基本",
  basicsIntro: <p>以下は、2つのマニュアルに書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "夏芝は冬に茶色くなる",
      desc: "埼玉県は、夏芝は春から秋まで緑の葉が繁り、冬には休眠して茶色になるとしています。休眠中は回復能力がなく、冬に過度な利用をすると枯れるとしています。",
    },
    {
      title: "冬芝は夏に弱い",
      desc: "埼玉県は、冬芝は冬の間も緑色を保つ一方、関東以南では梅雨明けの暑さでほぼ消滅し、毎年種をまく管理が必要としています。",
    },
    {
      title: "ほふく茎があると傷んでも戻る",
      desc: "静岡県は、ほふく茎がある芝草は一部がなくなっても横から新しい芝生が伸び、適切な管理を続ければ一面の緑に戻るとしています。埼玉県は、ほふく型は主に夏芝、株型は主に冬芝としています。",
    },
    {
      title: "家庭の庭はコウライシバが多い",
      desc: "埼玉県は、コウライシバを園庭・個人庭園で多く利用されている芝とし、葉がきめ細やかで、芝刈り回数は比較的少なくて済むとしています。",
    },
  ],
  stepsHeading: "庭の芝生を選ぶ4つの手順",
  stepsIntro: <p>埼玉県・静岡県のマニュアルの記載にもとづく流れです。</p>,
  steps: [
    {
      title: "冬も緑が必要かを決める",
      desc: "冬に茶色くなってよければ夏芝です。冬も緑にしたい場合は、冬芝を使うか、夏芝にオーバーシードをします。",
    },
    {
      title: "日当たりを確かめる",
      desc: "埼玉県は、バミューダグラスは日陰・寒さに弱いとしています。フェスク類は冬芝の中で乾燥と日陰に強いとしています。",
    },
    {
      title: "手入れにかけられる手間を考える",
      desc: "埼玉県は、バミューダグラスは生長が早いため刈込みや散水・施肥が比較的多く必要とし、コウライシバ・ノシバは芝刈り回数が比較的少ないとしています。",
    },
    {
      title: "張る時期に合わせて準備する",
      desc: "埼玉県は、夏芝の植付けの適期を3月下旬〜6月下旬、冬芝の種まきの適期を9月中旬〜10月初旬としています。",
    },
  ],
  ngHeading: "芝生選びで避けたいこと",
  ngs: [
    {
      title: "手間をかけられないのに冬芝だけで作ることは避けます",
      desc: "静岡県は、県内でできるだけ手間をかけずに管理しようとすると、寒地型芝草は不適切としています。",
    },
    {
      title: "冬に茶色い夏芝を枯れたと決めつけないでください",
      desc: "夏芝は冬に休眠して茶色になります。ただし休眠中は回復能力がないため、埼玉県は冬に過度な利用をすると枯れるとしています。",
    },
    {
      title: "日陰にバミューダグラスを植えることは避けます",
      desc: "埼玉県は、バミューダグラスは日陰・寒さに弱いとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>広い面積の張り替え、下地の土の入れ替え、日当たりの悪い場所での芝選び</Hl>は、造園業者や庭の手入れ業者に相談してください。面積・日当たり・冬も緑にしたいかどうかを伝えると、芝の種類と作業内容を決めやすくなります。
    </p>,
    <p key="2">
      芝の種類ごとの特徴は<Link href="/bermudagrass/" className={A}>バミューダグラス</Link>・<Link href="/kentucky-bluegrass/" className={A}>ケンタッキーブルーグラス</Link>、年間の手入れは<Link href="/shibafu-teire/" className={A}>芝生の手入れの基本</Link>、冬芝の種まきは<Link href="/shibafu-tanemaki/" className={A}>芝生の種まき</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "芝生の張り替えや手入れを業者に相談する",
  ctaText: "芝生の新設・張り替えや、日当たりに合った芝の選び方は、業者に相談すると安心です。",
  faqHeading: "芝生についてよくある質問",
  faqs: [
    {
      q: "夏芝と冬芝の違いは何ですか？",
      a: "埼玉県のマニュアルは、夏芝（暖地型）は春から秋まで緑で冬は休眠して茶色になり、冬芝（寒地型）は冬の間も緑を保つが関東以南では梅雨明けの暑さでほぼ消滅するとしています。",
    },
    {
      q: "冬に芝生が茶色くなりました。枯れたのでしょうか？",
      a: "夏芝は冬に休眠して茶色になります（埼玉県）。春に緑の葉が出てくれば休眠です。ただし休眠中は回復能力がないため、冬に踏みすぎると枯れることがあります。",
    },
    {
      q: "1年中緑の芝生にできますか？",
      a: "冬芝を使うか、夏芝の上に秋に冬芝の種をまくオーバーシードで可能です。埼玉県は年間を通して管理が必要になるとし、静岡県は毎年冬芝の種まきが必要としています。",
    },
    {
      q: "家庭の庭にはどの芝が多いですか？",
      a: "埼玉県のマニュアルは、コウライシバを園庭・個人庭園で多く利用されている芝としています。ノシバは踏圧や病害虫に比較的強いとしています。",
    },
  ],
  related: [
    { href: "/shibafu-teire/", label: "芝生の手入れの基本", desc: "芝刈り・水やり・年間管理" },
    { href: "/bermudagrass/", label: "バミューダグラス", desc: "夏芝の代表的な種類" },
    { href: "/kentucky-bluegrass/", label: "ケンタッキーブルーグラス", desc: "冬芝の代表的な種類" },
    { href: "/shibafu-tanemaki/", label: "芝生の種まき", desc: "冬芝の種まきの時期" },
  ],
};

export default function ShibafuTowaPage() {
  return <KnowArticle data={data} />;
}
