import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/ajisai-byoki/";
const A = "text-[#2D7F3E] underline";
const NAGANO = "https://www.pref.nagano.lg.jp/ringyosogo/joho/minigijutsu/documents/mini46.pdf";
const ISHIKAWA = "https://www.pref.ishikawa.lg.jp/noken/noushi/boujositsu_dayori/documents/boujo54.pdf";
const TOKYO = "https://www.sangyo-rodo.metro.tokyo.lg.jp/documents/d/sangyo-rodo/150_146_030_hydrangia_r8-pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "アジサイの病気｜花が緑のまま衰える葉化病は株ごと除去、葉の褐色の斑点は見た目で病名を決めにくい｜お庭のミカタ",
  },
  description:
    "アジサイの病気を、長野県林業総合センター・石川県病害虫防除室・東京都の病害虫防除指針・大和市の園芸相談の資料をもとにまとめました。花が緑色のまま衰える葉化病は治らないため除去し、葉の褐色の病斑は肉眼で病名を見分けにくいため相談先で診断を受けます。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "アジサイの病気と対処",
    description:
      "葉化病・葉の病斑・灰色かび病など、アジサイの主な病気と対処を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { name: string; sign: string; action: string; source: string }[] = [
  { name: "アジサイ葉化病", sign: "花びら（萼）が緑色になり、その後徐々に衰弱して場合によっては枯れる", action: "治癒しないため、見かけたら除去する。切ったハサミは洗ってアルコールなどで除菌してから他のアジサイに使う", source: "長野県林業総合センター" },
  { name: "葉の褐色〜赤褐色の病斑", sign: "褐斑病・炭疽病・斑点病・葉斑病・輪斑病・輪紋病などで、どれも病徴が似ている", action: "肉眼での判別は不可能で、顕微鏡での診断が必要", source: "石川県 病害虫防除室" },
  { name: "輪斑病・灰色かび病・葉腐病", sign: "防除指針のハイドランジア（アジサイ）の項に掲載", action: "発生を見たら薬剤を散布する（薬剤名・倍率は指針の表による）", source: "東京都 病害虫防除指針" },
  { name: "剪定の切り口", sign: "病名の記載なし", action: "剪定時及び病患部削り取り直後に、作物名アジサイで登録のある薬剤を切口等に塗布する", source: "東京都 病害虫防除指針" },
  { name: "白い飛ぶ虫（害虫）", sign: "アオバハゴロモと思われる", action: "害はあまりないとの回答", source: "大和市 園芸相談" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">病気・症状</th>
          <th className="border px-2 py-2 text-left">症状・位置づけ</th>
          <th className="border px-2 py-2 text-left">資料に書かれている対処</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.name}>
            <td className="border px-2 py-2">{r.name}</td>
            <td className="border px-2 py-2">{r.sign}</td>
            <td className="border px-2 py-2">{r.action}</td>
            <td className="border px-2 py-2">{r.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に4つの資料を開き、アジサイの病気と害虫に関する記載を当サイトで症状ごとに整理しました。長野県林業総合センターの資料は平成22年（2010年）8月のミニ技術情報、石川県は2020年10月15日の病害虫防除室の発行物、東京都は病害虫防除指針のハイドランジア・フェニックス・ブバルディアの項、大和市は園芸相談の事例《庭木》です。薬剤の名称・倍率は本記事に転記していません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "ajisai-byoki",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "アジサイの病気｜花が緑のまま衰える葉化病は株ごと除去、葉の褐色の斑点は見た目で病名を決めにくい",
  breadcrumbLabel: "アジサイの病気",
  tagChips: ["アジサイ", "紫陽花", "病気", "葉化病", "病害虫"],
  ldHeadline: "アジサイの病気｜花が緑のまま衰える葉化病は株ごと除去、葉の褐色の斑点は見た目で病名を決めにくい",
  ldDescription:
    "アジサイ葉化病・葉の病斑・灰色かび病など、アジサイの主な病気と対処を、長野県・石川県・東京都・大和市の資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        アジサイの病気でまず確かめたいのは、<Hl>花びら（萼）が緑色のまま、株が徐々に衰えていないか</Hl>です。長野県林業総合センターは、この症状をファイトプラズマという特殊な細菌による「アジサイ葉化病」とし、<Hl>一度感染すると樹体全体に広がって治癒しない</Hl>ため、「緑色のアジサイ」を見かけたら除去することが賢明としています（出典：<a href={NAGANO} className={A} target="_blank" rel="noopener noreferrer">長野県林業総合センター ミニ技術情報 No.46「緑のアジサイがありませんか？」（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        本記事では、この資料と石川県・東京都・大和市の資料を照合し、庭のアジサイに出る病気と対処を整理します。
      </p>
    </>
  ),
  conclusionTitle: "花が緑色のまま衰える株は葉化病を疑って除去し、使ったハサミは除菌します。葉の褐色の斑点は病名を見た目で決めにくいため、病害虫防除所などの相談先で診断を受けてから薬剤を選びます。",
  conclusionBody: (
    <>
      <p>
        4つの資料を当サイトで症状ごとに並べると、次のとおりです。石川県の病害虫防除室は、アジサイの葉に褐色〜赤褐色の病斑を生じる病害は褐斑病・炭疽病・斑点病・葉斑病・輪斑病・輪紋病などで、どれも病徴が似かよっており、<Hl>肉眼での判別は不可能</Hl>としています（出典：<a href={ISHIKAWA} className={A} target="_blank" rel="noopener noreferrer">石川県 病害虫防除室「アジサイの葉の病斑」（PDF）</a>、2026年11月21日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "アジサイの病気に関する4つの基本",
  basicsIntro: (
    <p>
      以下は、4つの資料に書かれている内容を整理したものです。
    </p>
  ),
  basicsLabel: "基本",
  basics: [
    {
      title: "葉化病は治らない",
      desc: "長野県林業総合センターの資料では、ファイトプラズマは植物の細胞内でないと増殖できない細菌で、一度感染すると樹体全体に広がって治癒することができないとしています。すぐには枯れず、徐々に衰弱して枯損に至るとしています。",
    },
    {
      title: "緑色の花は品種と紛らわしい",
      desc: "長野県林業総合センターの資料では、緑色のアジサイは園芸用として珍重されることもあったが、平成8年に栃木県・静岡県・大分県で見つかった緑色のアジサイ類がファイトプラズマによる病気と確認されたとしています。",
    },
    {
      title: "葉の病斑は似ている",
      desc: "石川県の病害虫防除室の資料では、葉の褐色〜赤褐色の病斑を生じる病害は病徴が似かよっており、顕微鏡での診断が必要としています。",
    },
    {
      title: "剪定の切り口にも配慮がある",
      desc: "東京都の病害虫防除指針では、ハイドランジア（アジサイ）の項で、剪定時及び病患部の削り取り直後に、作物名アジサイで登録のある薬剤を切口に塗布するとしています。",
    },
  ],
  stepsHeading: "アジサイの病気を疑ったときの4つの手順",
  stepsIntro: (
    <p>
      4つの資料にもとづく、確かめる順番です。
    </p>
  ),
  steps: [
    {
      title: "花が緑色のまま衰えていないかを見る",
      desc: "長野県林業総合センターの資料では、緑色の花びら（萼）を付けて、その後徐々に衰弱して場合によっては枯れる病気をアジサイ葉化病としています。ヤマアジサイやガクアジサイでも確認されています。",
    },
    {
      title: "葉化病が疑われる株は除去する",
      desc: "長野県林業総合センターの資料では、病気の株があると媒介昆虫によって周辺のアジサイにも広がるおそれがあるため、除去することが賢明としています。媒介昆虫はまだ見つかっていないとしています。",
    },
    {
      title: "葉の斑点は相談先で診断を受ける",
      desc: "石川県の病害虫防除室の資料では、葉の病斑は肉眼での判別は不可能で、顕微鏡で病原菌の構造を見て診断するとしています。都道府県の病害虫防除所や園芸相談の窓口に、斑点のある葉を持ち込んで相談できるかを確認してください。",
    },
    {
      title: "薬剤はアジサイ・樹木類の登録を確かめて使う",
      desc: "東京都の病害虫防除指針では、ハイドランジアの項に輪斑病・灰色かび病・葉腐病の防除方法を掲げ、樹木類の登録農薬も使用できるとしています。使う前に、製品のラベルで適用のある植物と使い方を確認してください。",
    },
  ],
  ngHeading: "アジサイの病気の対処で避けたいこと",
  ngs: [
    {
      title: "葉化病の株を切ったハサミをそのまま使い回すことは避けます",
      desc: "長野県林業総合センターの資料では、緑色のアジサイを切ったハサミにはファイトプラズマがいる樹液が付いたままになり、そのまま使うと病気を感染させてしまう危険性が高いため、洗ってアルコールなどで除菌するとしています。",
    },
    {
      title: "斑点の見た目だけで病名を決めて薬剤を選ぶことは避けます",
      desc: "石川県の病害虫防除室の資料では、輪紋病・炭疽病・斑葉病などの病斑は肉眼での判別は不可能としています。",
    },
    {
      title: "白い虫を見ただけで病気と決めつけることは避けます",
      desc: "大和市の園芸相談の回答では、アジサイにつく白い飛ぶ虫をアオバハゴロモと思われるとし、害はあまりないとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>株が大きく除去に人手がいる、複数の株に同じ症状が出ている、ほかの庭木にも斑点や枯れがある</Hl>といった場合は、庭木の管理業者に相談すると作業がまとまります。葉化病が疑われる株を除去してもらうときは、使った道具の除菌を依頼してください（出典：<a href={TOKYO} className={A} target="_blank" rel="noopener noreferrer">東京都 病害虫防除指針「ハイドランジア・フェニックス・ブバルディア」（PDF）</a>・<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月21日確認）。
    </p>,
    <p key="2">
      アジサイの剪定時期と花が咲かないときの考え方は<Link href="/ajisai-sentei-kanri/" className={A}>アジサイの剪定と管理</Link>、庭木の病害虫全般は<Link href="/niwaki-byogaichu/" className={A}>庭木の病害虫対策の基本</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "株の除去と道具の除菌を含めて相談する",
  ctaText:
    "花が緑色のまま衰えるアジサイは葉化病を疑って除去し、葉の斑点は相談先で診断を受けるのが目安です。株が大きい場合は業者と相談すると安心です。",
  faqHeading: "アジサイの病気のよくある質問",
  faqs: [
    {
      q: "アジサイの花が緑色のままです。病気ですか？",
      a: "長野県林業総合センターの資料では、緑色の花びら（萼）を付けて、その後徐々に衰弱して場合によっては枯れる場合はアジサイ葉化病としています。緑色の花は園芸用として珍重されることもあったため、株が衰えていくかどうかもあわせて確かめてください。",
    },
    {
      q: "アジサイ葉化病は治りますか？",
      a: "長野県林業総合センターの資料では、ファイトプラズマは一度感染してしまうと樹体全体に広がって治癒することができない病気としています。周辺のアジサイに広がるおそれがあるため、除去することが賢明としています。",
    },
    {
      q: "葉に茶色い斑点が出ています。何の病気ですか？",
      a: "石川県の病害虫防除室の資料では、アジサイの葉に褐色〜赤褐色の病斑を生じる病害は褐斑病・炭疽病・斑点病・葉斑病・輪斑病・輪紋病などで、肉眼での判別は不可能としています。顕微鏡での診断が必要としています。",
    },
    {
      q: "剪定のときに気をつけることはありますか？",
      a: "東京都の病害虫防除指針では、ハイドランジア（アジサイ）の項で、剪定時及び病患部の削り取り直後に、作物名アジサイで登録のある薬剤を切口に塗布するとしています。葉化病の株を切ったハサミは、長野県林業総合センターの資料のとおり洗って除菌してから使ってください。",
    },
  ],
  related: [
    {
      href: "/ajisai-sentei-kanri/",
      label: "アジサイの剪定と管理",
      desc: "花後の切り方と翌年咲かせる考え方",
    },
    {
      href: "/niwaki-byogaichu/",
      label: "庭木の病害虫対策の基本",
      desc: "異変のサインの見つけ方",
    },
    {
      href: "/susubyo/",
      label: "すす病",
      desc: "葉が黒くなる原因と対処",
    },
    {
      href: "/niwaki-ha-henshoku/",
      label: "庭木の葉が黄色・茶色になる",
      desc: "色の変わり方から原因を絞る",
    },
  ],
};

export default function AjisaiByokiPage() {
  return <KnowArticle data={data} />;
}
