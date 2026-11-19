import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/ikegaki-shurui/";
const A = "text-[#2D7F3E] underline";
const BUNKYO = "https://www.city.bunkyo.lg.jp/documents/4746/202143011711_1.pdf";
const ZUSHI =
  "https://www.city.zushi.kanagawa.jp/_res/projects/default_project/_page_/001/005/765/1-20230126103504.pdf";
const OTA = "https://www.city.ota.gunma.jp/uploaded/attachment/9274.pdf";
const IKOMA = "https://www.city.ikoma.lg.jp/cmsfiles/contents/0000000/528/0407.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "生垣に向く木の種類｜4市の資料に共通する樹種と、目的別の選び方｜お庭のミカタ",
  },
  description:
    "生垣（いけがき）に使われる木の種類を、文京区・逗子市・太田市・生駒市の生垣助成の資料で比べました。4市のうち3市以上の資料に載る樹種はイヌツゲ・ウバメガシ・マサキ・サザンカ・キンモクセイ・ヒイラギモクセイ・カナメモチ類・イヌマキの8種です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "生垣に向く木の種類｜4市の資料に共通する樹種",
    description:
      "生垣の樹種を、4つの自治体の生垣助成の資料で比べ、目的別の選び方を整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

type Row = { name: string; bunkyo: boolean; zushi: boolean; ota: boolean; ikoma: boolean };

// 2026-11-20 に4市の資料を開いて当サイトで照合した結果
// 文京区＝参考樹木（よく使われる・火に強い・排気ガスに強い・花が楽しめる）、逗子市＝配布樹木の例、
// 太田市＝補助対象の樹種（要綱第2条第2項）、生駒市＝「生垣に向いている樹木」の表
const ROWS: Row[] = [
  { name: "イヌツゲ", bunkyo: true, zushi: true, ota: true, ikoma: false },
  { name: "ウバメガシ", bunkyo: true, zushi: true, ota: true, ikoma: true },
  { name: "マサキ", bunkyo: true, zushi: true, ota: true, ikoma: true },
  { name: "サザンカ", bunkyo: true, zushi: false, ota: true, ikoma: true },
  { name: "キンモクセイ", bunkyo: true, zushi: false, ota: true, ikoma: true },
  { name: "ヒイラギモクセイ", bunkyo: true, zushi: false, ota: true, ikoma: true },
  { name: "カナメモチ類（レッドロビン・ベニカナメモチを含む）", bunkyo: true, zushi: true, ota: true, ikoma: true },
  { name: "イヌマキ", bunkyo: true, zushi: false, ota: true, ikoma: true },
  { name: "シラカシ", bunkyo: false, zushi: false, ota: true, ikoma: true },
  { name: "カイヅカイブキ", bunkyo: false, zushi: false, ota: true, ikoma: true },
  { name: "ツバキ", bunkyo: true, zushi: false, ota: true, ikoma: false },
  { name: "サンゴジュ", bunkyo: true, zushi: false, ota: true, ikoma: false },
  { name: "トキワマンサク", bunkyo: true, zushi: false, ota: false, ikoma: true },
];

const mark = (b: boolean) => (b ? "○" : "－");

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">樹種</th>
          <th className="border px-2 py-2">文京区</th>
          <th className="border px-2 py-2">逗子市</th>
          <th className="border px-2 py-2">太田市</th>
          <th className="border px-2 py-2">生駒市</th>
          <th className="border px-2 py-2">掲載数</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => {
          const n = [r.bunkyo, r.zushi, r.ota, r.ikoma].filter(Boolean).length;
          return (
            <tr key={r.name}>
              <td className="border px-2 py-2">{r.name}</td>
              <td className="border px-2 py-2 text-center">{mark(r.bunkyo)}</td>
              <td className="border px-2 py-2 text-center">{mark(r.zushi)}</td>
              <td className="border px-2 py-2 text-center">{mark(r.ota)}</td>
              <td className="border px-2 py-2 text-center">{mark(r.ikoma)}</td>
              <td className="border px-2 py-2 text-center">{n}市</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月20日に4市の資料を開き、当サイトで照合しました。文京区は「よく使われる樹木」「火に強い樹木」「排気ガスに強い樹木」「花が楽しめる樹木」の例（カナメモチ・レッドロビン）、逗子市は配布樹木の例（レッドロビン）、太田市は補助対象の樹種（カナメモチ）、生駒市は「生垣に向いている樹木」の表（ベニカナメモチ）です。逗子市の配布樹木は「イヌツゲ、レッドロビン、ウバメガシ、マサキなど」と例示のみのため、－は「載っていない」の意味で、配布されないという意味ではありません。生駒市の資料の「マメツゲ」はイヌツゲの品種ですが、ここでは別の名前として扱っています。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "ikegaki-shurui",
  published: "2026-11-20",
  updatedLabel: "2026年11月20日",
  h1: "生垣に向く木の種類｜4市の資料に共通する樹種と、目的別の選び方",
  breadcrumbLabel: "生垣に向く木の種類",
  tagChips: ["生垣", "生け垣", "樹種", "目隠し", "生垣助成"],
  ldHeadline: "生垣に向く木の種類｜4市の資料に共通する樹種と、目的別の選び方",
  ldDescription:
    "生垣に使われる樹種を、文京区・逗子市・太田市・生駒市の生垣助成の資料で照合し、複数の市で共通する樹種と、火・排気ガスに強い木、花を楽しめる木など目的別の選び方をまとめた記事です。",
  lead: (
    <>
      <p className="mb-4">
        生垣（いけがき）に使われる木の種類は、自治体の生垣助成の資料にまとまっています。当サイトで<Hl>文京区・逗子市・太田市・生駒市の4市の資料を照合したところ、ウバメガシ・マサキ・カナメモチ類（レッドロビンなど）は4市すべてに、イヌツゲ・サザンカ・キンモクセイ・ヒイラギモクセイ・イヌマキは3市の資料に載っていました</Hl>（2026年11月20日確認）。
      </p>
      <p className="mb-4">
        生駒市の資料は、生垣に向いているのは「刈り込みに強く」「外観が美しく」「成長が早く」「葉の密度が高く」「手入れが比較的容易」なものとしています（出典：<a href={IKOMA} className={A} target="_blank" rel="noopener noreferrer">生駒市 生垣助成制度の案内（PDF）</a>）。
      </p>
      <p>
        本記事では、4市の資料の比較表と、文京区の資料にある目的別の分類をもとに、生垣の樹種の選び方を整理します。各市の助成の条件や金額は変わることがあるため、申請を考えている方は必ずお住まいの自治体の最新の案内をご確認ください。
      </p>
    </>
  ),
  conclusionTitle: "迷ったら、複数の自治体が生垣向きとして挙げる常緑樹から、目的（目隠し・防火・花）と日当たりで選びます。",
  conclusionBody: (
    <>
      <p>
        4市の資料に共通して載る樹種は、刈り込みに耐え、葉が密につく常緑樹が中心です。以下は、当サイトで4市の資料を照合した結果です。
      </p>
      {table}
    </>
  ),
  basicsHeading: "生垣の樹種を選ぶ4つの観点",
  basicsIntro: (
    <p>
      文京区の資料は、生垣の参考樹木を目的別に4つに分けて例示しています（出典：<a href={BUNKYO} className={A} target="_blank" rel="noopener noreferrer">文京区 生垣造成補助金について（PDF）</a>、2026年11月20日確認）。生駒市の資料の日当たりの区分とあわせて整理します。
    </p>
  ),
  basicsLabel: "観点",
  basics: [
    {
      title: "火に強い木：カナメモチ・マサキ・サンゴジュ・サザンカ・ツバキなど",
      desc: "文京区の資料が「火に強い樹木」として挙げている例です。サンゴジュ・ツバキは太田市の補助対象の樹種にも含まれます。",
    },
    {
      title: "排気ガスに強い木：イヌツゲ・マサキ・ウバメガシ・トベラなど",
      desc: "文京区の資料が「排気ガスに強い樹木」として挙げている例です。道路に面した場所の生垣で参考になります。",
    },
    {
      title: "花が楽しめる木：キンモクセイ・トキワマンサク・ムクゲ・サザンカなど",
      desc: "文京区の資料が「花が楽しめる樹木」として挙げている例です。生駒市の資料も、キンモクセイは秋に芳香のある花、サザンカは秋から冬に花、トキワマンサクは春に花と赤く色づく若葉が特徴としています。",
    },
    {
      title: "日当たりで選ぶ：日陰でも育つ木と、日当たりが必要な木",
      desc: "生駒市の表では、サザンカ・ヒイラギモクセイ・マサキ・マメツゲ・イヌマキ・ゴールドクレストを「耐陰性あり」、アラカシ・ウバメガシ・キンモクセイ・ベニカナメモチ・カイズカイブキなどを「陽樹」としています。",
    },
  ],
  stepsHeading: "生垣の樹種を決める4つの手順",
  stepsIntro: (
    <p>
      植える前に、次の順番で確認します。助成を受ける場合は、樹種の条件が市ごとに異なるため、最初に自治体の案内を確認してください。
    </p>
  ),
  steps: [
    {
      title: "助成を使うか決め、自治体の樹種の条件を確認する",
      desc: "太田市の要綱は、補助対象の樹種を「原則として」カナメモチ・サザンカ・イヌツゲ・イヌマキ・カイヅカイブキなど12科の樹種に限っています（出典：太田市生け垣設置事業補助金交付要綱）。逗子市は生垣用の樹木を配布する方式で、1件につき1種類としています。",
    },
    {
      title: "目的を決める（目隠し・防火・道路沿い・花）",
      desc: "文京区の資料の4分類（よく使われる・火に強い・排気ガスに強い・花が楽しめる）を目安に、候補を絞ります。",
    },
    {
      title: "植える場所の日当たりを確認する",
      desc: "生駒市の資料は、木は植える場所の土や日当たりの影響を受けるため、環境に合ったものを選ぶとしています。北側や建物の陰には「耐陰性あり」の樹種が候補になります。",
    },
    {
      title: "病気に弱い樹種は、植え替えの候補も確認しておく",
      desc: "大和市の園芸相談の事例では、レッドロビンの垣根が病気で枯れそうという相談に対し、レッドロビンは褐斑病やごま色斑点病に弱く、日本産のベニカナメモチの方が病気には強いと回答しています（出典：大和市 園芸相談の事例《庭木》）。",
    },
  ],
  ngHeading: "生垣の樹種選びで避けたいこと",
  ngs: [
    {
      title: "助成の条件を確かめずに植えることは避けます",
      desc: "太田市は補助対象の樹種、逗子市は配布の条件、文京区は設置した生垣を10年以上保全する義務など、市ごとに条件があります。植えた後では対象外になることがあります。",
    },
    {
      title: "日陰に日当たりを好む樹種を植えることは避けます",
      desc: "生駒市の資料で「陽樹」とされる樹種は、日当たりのよい場所が向いています。葉が薄くなると目隠しの役割を果たしにくくなります。",
    },
    {
      title: "1種類の樹種だけで長い生垣をつくる場合は、病害虫に注意します",
      desc: "同じ病気が生垣全体に広がることがあります。大和市の相談事例でも、レッドロビンの垣根全体が病気で弱った例があります。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>既存のブロック塀を撤去して生垣にする、延長が長い、助成の申請に業者の見積書が必要</Hl>といった場合は、造園業者に相談すると手続きがまとまります。依頼するときは、助成を使う予定であることと、自治体の樹種の条件を伝えてください。市によっては、市内の業者に限る、着工前の申請が必要などの条件があります。
    </p>,
    <p key="2">
      植えた後の手入れは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込みの基礎知識</Link>、フェンスとの比較は<Link href="/ikegaki-fence-hikaku/" className={A}>生垣とフェンスの比較</Link>、古い生垣の扱いは<Link href="/ikegaki-koshin-uekae/" className={A}>生垣の更新・植え替え</Link>、東京都内の助成制度は<Link href="/area/tokyo/hogo-jumoku-ikegaki-josei/" className={A}>東京都の保護樹木・生垣の助成</Link>にまとめています。
    </p>,
    <p key="3" className="text-sm">
      本記事の出典（いずれも2026年11月20日確認）：<a href={BUNKYO} className={A} target="_blank" rel="noopener noreferrer">文京区 生垣造成補助金について（PDF）</a>／<a href={ZUSHI} className={A} target="_blank" rel="noopener noreferrer">逗子市 生垣用の樹木の配布（PDF）</a>／<a href={OTA} className={A} target="_blank" rel="noopener noreferrer">太田市生け垣設置事業補助金交付要綱（PDF）</a>／<a href={IKOMA} className={A} target="_blank" rel="noopener noreferrer">生駒市 生垣助成制度の案内（PDF）</a>／<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>。太田市の要綱と生駒市の案内は掲載ファイルの作成時期が古いため、現在の制度の内容は各市にご確認ください。
    </p>,
  ],
  ctaHeading: "樹種と助成の条件をそろえて相談する",
  ctaText:
    "生垣の樹種は、目的と日当たり、助成の条件で絞り込めます。塀の撤去を伴う場合や延長が長い場合は、見積もりの段階で業者に相談すると安心です。",
  faqHeading: "生垣の種類のよくある質問",
  faqs: [
    {
      q: "生垣によく使われる木は何ですか？",
      a: "文京区の資料は、よく使われる樹木としてレッドロビン・ヒイラギモクセイ・イヌマキ・イヌツゲを挙げています。当サイトで4市の資料を照合したところ、ウバメガシ・マサキ・カナメモチ類は4市すべての資料に載っていました（2026年11月20日確認）。",
    },
    {
      q: "日陰でも育つ生垣の木はありますか？",
      a: "生駒市の資料では、サザンカ・ヒイラギモクセイ・マサキ・マメツゲ・イヌマキ・ゴールドクレストを「耐陰性あり」としています。",
    },
    {
      q: "火事に強い生垣の木はありますか？",
      a: "文京区の資料は、火に強い樹木の例としてカナメモチ・マサキ・サンゴジュ・サザンカ・ツバキを挙げています。",
    },
    {
      q: "レッドロビンの生垣が病気で弱っています。",
      a: "大和市の園芸相談の事例では、レッドロビンは褐斑病やごま色斑点病に弱く、日本産のベニカナメモチの方が病気には強いと回答しています。植え替えを考える場合は、生垣の更新・植え替えの記事もご覧ください。",
    },
  ],
  related: [
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込みの基礎知識",
      desc: "時期・頻度・道具と手順",
    },
    {
      href: "/ikegaki-fence-hikaku/",
      label: "生垣とフェンスの比較",
      desc: "目隠し・境界での違い",
    },
    {
      href: "/ikegaki-koshin-uekae/",
      label: "生垣の更新・植え替え",
      desc: "再生するか植え替えるか",
    },
    {
      href: "/mekakushi-niwaki/",
      label: "目隠しになる庭木の選び方",
      desc: "視線を遮る木の条件と管理",
    },
    {
      href: "/area/tokyo/hogo-jumoku-ikegaki-josei/",
      label: "東京都の保護樹木・生垣の助成",
      desc: "区市町の制度の一覧",
    },
  ],
};

export default function IkegakiShuruiPage() {
  return <KnowArticle data={data} />;
}

