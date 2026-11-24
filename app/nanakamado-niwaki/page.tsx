import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/nanakamado-niwaki/";
const A = "text-[#2D7F3E] underline";
const HRO = "https://www.hro.or.jp/upload/3323/gairoju05.pdf";
const HOKKAIDO = "https://www.pref.hokkaido.lg.jp/kn/tkn/hana/flower/hk009.html";
const TOHOKU = "https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/nanakamado.html";

export const metadata: Metadata = {
  title: {
    absolute: "ナナカマドを庭木にする｜白い花・紅葉・赤い実が楽しめる落葉樹。剪定は好まないので自然樹形で育てる｜お庭のミカタ",
  },
  description:
    "ナナカマドを庭木にするときに知っておきたい特徴と手入れを、北海道立総合研究機構 林業試験場の街路樹事例集、北海道庁、東北森林管理局の樹木図鑑をもとにまとめました。剪定を好まず、傷口から病気が入りやすい点に注意します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ナナカマドを庭木にする",
    description:
      "ナナカマドは夏の白い花、秋の紅葉と赤い実が見どころの落葉樹です。剪定を好まないため、植える場所を決めて自然樹形で育てるのが基本です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "東北森林管理局", item: "分類・分布", note: "バラ科の落葉高木。北海道・本州・四国・九州に分布（生育場所は山地）" },
  { src: "北海道庁", item: "花と実", note: "夏に5ミリほどの小さな花が集まった白い花。秋は紅葉と果実が美しく、葉が落ちた後も実だけが残る" },
  { src: "道総研 林業試験場", item: "みどころ", note: "鮮やかな紅葉、赤い果実、花" },
  { src: "道総研 林業試験場", item: "街路樹としての樹高", note: "5〜8m" },
  { src: "道総研 林業試験場", item: "植栽上の留意点", note: "剪定は好まない、できるだけ自然樹形で育てる。傷口から病気が進入しやすいので注意する" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.item}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月25日に、北海道立総合研究機構 林業試験場「北海道の街路樹 －街路樹の種類と事例集－」（PDF・ナナカマドの項）、北海道庁「ナナカマド（七竈）」、東北森林管理局の樹木図鑑「ナナカマド」を開き、当サイトで要点を並べました。樹高は北海道の街路樹としての目安で、庭木として植えた場合の大きさは土地や手入れによって変わります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "nanakamado-niwaki",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "ナナカマドを庭木にする｜白い花・紅葉・赤い実が楽しめる落葉樹。剪定は好まないので自然樹形で育てる",
  breadcrumbLabel: "ナナカマドを庭木にする",
  tagChips: ["ナナカマド", "落葉樹", "紅葉", "シンボルツリー", "自然樹形"],
  ldHeadline: "ナナカマドを庭木にする｜白い花・紅葉・赤い実が楽しめる落葉樹。剪定は好まないので自然樹形で育てる",
  ldDescription:
    "ナナカマドを庭木にするときの特徴と手入れの注意点を、道総研 林業試験場・北海道庁・東北森林管理局の資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ナナカマドは、<Hl>夏の白い花、秋の紅葉と赤い実を楽しめる落葉樹</Hl>で、庭木にするなら<Hl>剪定をあまりせず、自然な樹形で育てられる場所に植える</Hl>のが基本です。北海道立総合研究機構 林業試験場の事例集は、ナナカマドの植栽上の留意点を「剪定は好まない、できるだけ自然樹形で育てる。傷口から病気が進入しやすいので注意する」としています（出典：<a href={HRO} className={A} target="_blank" rel="noopener noreferrer">道総研 林業試験場「北海道の街路樹 －街路樹の種類と事例集－」（PDF）</a>、2026年11月25日確認）。
      </p>
      <p>
        北海道庁は、ナナカマドを「秋には赤く染まる紅葉や果実が美しく、葉が落ちた後も実だけが残る」「一年を通じて目を楽しませてくれる」と紹介しています（出典：<a href={HOKKAIDO} className={A} target="_blank" rel="noopener noreferrer">北海道 ナナカマド（七竈）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "ナナカマドは切って小さく保つ木ではありません。大きくなっても困らない場所を選び、枯れ枝を除く程度の手入れで育てます。",
  conclusionBody: (
    <>
      <p>
        東北森林管理局の樹木図鑑は、ナナカマドをバラ科の落葉高木とし、北海道・本州・四国・九州に分布するとしています（出典：<a href={TOHOKU} className={A} target="_blank" rel="noopener noreferrer">東北森林管理局 ナナカマド</a>、同日確認）。3つの資料の記載を並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ナナカマドを庭木にするときの4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "見どころは花・紅葉・実",
      desc: "道総研の事例集は、みどころを鮮やかな紅葉、赤い果実、花としています。北海道庁は、夏に小さな白い花が集まって咲くとしています。",
    },
    {
      title: "落葉の高木",
      desc: "東北森林管理局は落葉高木、道総研は北海道の街路樹としての樹高を5〜8mとしています。将来の大きさを見込んで植える場所を決めます。",
    },
    {
      title: "剪定を好まない",
      desc: "道総研の事例集は、剪定は好まない、できるだけ自然樹形で育てるとしています。",
    },
    {
      title: "傷口から病気が入りやすい",
      desc: "同じく、傷口から病気が進入しやすいので注意するとしています。枝を切る回数と切り口を少なくすることが手入れの基本になります。",
    },
  ],
  stepsHeading: "ナナカマドを庭で育てる4つの手順",
  stepsIntro: <p>道総研の留意点にもとづき、当サイトで整理した流れです。</p>,
  steps: [
    {
      title: "大きくなっても困らない場所を選ぶ",
      desc: "街路樹としての樹高は5〜8mです。建物・電線・隣地との間に余裕のある場所に植えると、切る必要が少なくなります。",
    },
    {
      title: "樹形は自然に任せる",
      desc: "剪定で形を作る木ではないため、自然樹形を生かします。",
    },
    {
      title: "切るのは枯れ枝・折れた枝にとどめる",
      desc: "どうしても切る枝は、枯れ枝や折れた枝などに絞ります。切り口の数を減らすことが、病気の入り口を減らすことになります。",
    },
    {
      title: "幹や枝の傷に気をつける",
      desc: "草刈りの機械や作業中の接触で幹に傷をつけないようにします。傷口から病気が入りやすいとされています。",
    },
  ],
  ngHeading: "ナナカマドの手入れで避けたいこと",
  ngs: [
    {
      title: "毎年強く切り詰めて小さく保つことは避けます",
      desc: "道総研の事例集は、剪定は好まない、できるだけ自然樹形で育てるとしています。",
    },
    {
      title: "幹や太い枝に傷をつけることは避けます",
      desc: "傷口から病気が進入しやすいので注意する、とされています。",
    },
    {
      title: "狭い場所に植えることは避けます",
      desc: "落葉高木で、街路樹としての樹高は5〜8mです。切って大きさを抑える前提の場所には向きません。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>大きくなって建物や電線に枝がかかる、枯れ枝が増えた、幹に傷や異常がある</Hl>ときは、庭木の手入れ業者や樹木医に相談してください。「剪定を好まない木なので、切る枝を最小限にしたい」と伝えると、作業内容を決めやすくなります。
    </p>,
    <p key="2">
      落葉樹の剪定時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、紅葉を楽しむ木の手入れは<Link href="/momiji-kaede-teire/" className={A}>モミジ・カエデの手入れ</Link>、雪の多い地域の冬支度は<Link href="/fuyugakoi-yukigakoi/" className={A}>冬囲い・雪囲い</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ナナカマドの手入れを業者に相談する",
  ctaText: "大きくなったナナカマドの枝の整理や、幹の傷・枯れ枝が気になるときは、業者に相談すると安心です。",
  faqHeading: "ナナカマドの庭木でよくある質問",
  faqs: [
    {
      q: "ナナカマドは剪定したほうがよいですか？",
      a: "道総研 林業試験場の事例集は、剪定は好まない、できるだけ自然樹形で育てる、傷口から病気が進入しやすいので注意するとしています。切るのは枯れ枝などに絞るのが無難です。",
    },
    {
      q: "ナナカマドはどのくらいの大きさになりますか？",
      a: "東北森林管理局は落葉高木としています。道総研の事例集では、北海道の街路樹としての樹高を5〜8mとしています。庭での大きさは土地や手入れで変わります。",
    },
    {
      q: "ナナカマドの見どころはいつですか？",
      a: "北海道庁は、夏に白い花が咲き、秋は紅葉と赤い果実が美しく、葉が落ちた後も実だけが残るとしています。",
    },
    {
      q: "ナナカマドは北海道以外でも育ちますか？",
      a: "東北森林管理局の樹木図鑑は、北海道・本州・四国・九州に分布するとしています。北海道庁は、全国の山地に自生し、北海道では街路樹としてもよく植えられているとしています。",
    },
  ],
  related: [
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "常緑樹と落葉樹の違い" },
    { href: "/momiji-kaede-teire/", label: "モミジ・カエデの手入れ", desc: "紅葉を楽しむ木" },
    { href: "/fuyugakoi-yukigakoi/", label: "冬囲い・雪囲い", desc: "雪の多い地域の冬支度" },
    { href: "/yamaboushi-teire/", label: "ヤマボウシの手入れ", desc: "花と実を楽しむ落葉樹" },
  ],
};

export default function NanakamadoNiwakiPage() {
  return <KnowArticle data={data} />;
}
