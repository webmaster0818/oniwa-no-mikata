import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/urushi-bassai/";
const A = "text-[#2D7F3E] underline";
const SHIMANE = "https://www.pref.shimane.lg.jp/infra/nature/shizen/shimane/sizennkansatu/wasigamine/kiken-syokubutu.html";
const RINYA = "https://www.rinya.maff.go.jp/kanto/invitation/sizenkyuuyourin_anzen/html/05page.html";

export const metadata: Metadata = {
  title: {
    absolute: "漆（ウルシ）の木の伐採｜切ると白い液が出て、かぶれは1〜2日後に出る。肌を出さずに作業し、かぶれやすい人は業者へ｜お庭のミカタ",
  },
  description:
    "庭や敷地に生えたウルシの仲間（ヤマウルシ・ハゼノキ・ツタウルシなど）を切るときの注意を、島根県「野外における危険な植物」と林野庁関東森林管理局の安全の案内をもとに整理しました。見分け方の表と、かぶれたときの対処も並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "漆（ウルシ）の木の伐採",
    description:
      "島根県は、ウルシの仲間によるかぶれは遅延型接触皮膚炎で1〜2日後に起こり、ウルシ科の植物は枝や葉を切ると白い液が出るとしています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { name: string; leaf: string; back: string; fruit: string }[] = [
  { name: "ヤマハゼ", leaf: "小葉はだ円形または卵状長だ円形、5〜7cm、4〜7対、小葉の長さにかなりの差がある", back: "緑白色", fruit: "扁球形で黄褐色の光沢あり" },
  { name: "ハゼノキ", leaf: "小葉は広披針形または狭長だ円形、4〜10cm、4〜7対、小葉の長さにほとんど差がない", back: "粉白色", fruit: "扁球形で白い光沢あり" },
  { name: "ヤマウルシ", leaf: "小葉は卵形または長だ円形、6〜12cm、6〜8対、小葉の長さにかなりの差がある", back: "淡緑色", fruit: "扁球形で黄色な毛を密生" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">種類</th>
          <th className="border px-2 py-2 text-left">葉（小葉）</th>
          <th className="border px-2 py-2 text-left">葉の裏面</th>
          <th className="border px-2 py-2 text-left">果実</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.name}>
            <td className="border px-2 py-2">{r.name}</td>
            <td className="border px-2 py-2">{r.leaf}</td>
            <td className="border px-2 py-2">{r.back}</td>
            <td className="border px-2 py-2">{r.fruit}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、島根県自然環境課「野外における危険な植物」の「ハゼ類の見分け方」「ハゼ類の特徴」を開き、当サイトで1つの表にまとめました。島根県内で自然状態でよく見られる3種についての記載です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "urushi-bassai",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "漆（ウルシ）の木の伐採｜切ると白い液が出て、かぶれは1〜2日後に出る。肌を出さずに作業し、かぶれやすい人は業者へ",
  breadcrumbLabel: "漆の木の伐採",
  tagChips: ["ウルシ", "ヤマウルシ", "ハゼノキ", "かぶれ", "伐採"],
  ldHeadline: "漆（ウルシ）の木の伐採｜切ると白い液が出て、かぶれは1〜2日後に出る。肌を出さずに作業し、かぶれやすい人は業者へ",
  ldDescription:
    "ウルシの仲間を切るときのかぶれの注意と見分け方を、島根県と林野庁の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        庭や空き地に、ヤマウルシやハゼノキなどウルシの仲間の木が生えてくることがあります。島根県の「野外における危険な植物」は、<Hl>ウルシの仲間によるアレルギー性皮膚炎は遅延型接触皮膚炎と呼ばれ、1〜2日後に皮膚炎が起こり、触れた一部の人だけに発症する</Hl>としています。また、<Hl>ウルシ科の植物は枝や葉を切ると白い液が出てくる</Hl>としています（出典：<a href={SHIMANE} className={A} target="_blank" rel="noopener noreferrer">島根県「危険な植物」（野外における危険な植物）</a>、2026年11月28日確認）。
      </p>
      <p>
        切る作業は、枝や葉に触れ、切り口から出る液にも近づく作業です。本記事では、切る前の見分け方、作業時の服装、かぶれたときの対処を、資料に書かれている範囲で整理します。
      </p>
    </>
  ),
  conclusionTitle: "ウルシの仲間を切るときは、まず種類を確かめ、長袖・長ズボン・手袋で肌を出さずに作業します。かぶれは1〜2日後に出るため、作業後しばらくは様子を見て、かぶれたら皮膚科へ。以前かぶれたことがある人は、自分で切らずに業者に任せます。",
  conclusionBody: (
    <>
      <p>島根県の資料にある、よく見られる3種の見分け方は次のとおりです。</p>
      {table}
      <p className="mt-4">
        同じ資料は、<Hl>同じウルシ科でもヌルデはかぶれることはほとんどなく、葉の中軸に緑色の翼がある</Hl>ので簡単に見分けられるとしています。また、ハゼノキは果皮からロウを採るために移入された栽培植物が野生化したもので、人里近くで普通に見られるとしています。
      </p>
    </>
  ),
  basicsHeading: "ウルシの仲間を切る前に知っておきたい4つのこと",
  basicsIntro: <p>以下は、島根県・林野庁の資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "ポイント",
  basics: [
    {
      title: "かぶれは1〜2日後に出る",
      desc: "島根県は、遅延型接触皮膚炎のため本人にも原因が分からないことが多いとしています。毒成分はウルシオールで、顔や首、手などにかゆみの強い紅斑を生じます。",
    },
    {
      title: "かぶれる人とかぶれない人がいる",
      desc: "島根県は、触れた一部の人だけに発症することも特徴の一つとしています。一緒に作業した人が平気でも、自分も大丈夫とは限りません。",
    },
    {
      title: "切ると白い液が出る",
      desc: "島根県は、ウルシ科の植物は枝や葉を切ると白い液が出てくるとしています。見分けの手がかりにもなります。",
    },
    {
      title: "ツタウルシは毒性が最も強い",
      desc: "島根県は、ツタウルシは野生のウルシの仲間の中でかぶれる毒性分の強さが最も強く、島根県内のかぶれの原因植物の筆頭はツタウルシとヤマウルシとしています。木に絡んだつるにも注意します。",
    },
  ],
  stepsHeading: "ウルシの仲間を切るときの4つの手順",
  stepsIntro: <p>島根県と林野庁関東森林管理局の案内にもとづく、かぶれを避けるための流れです。</p>,
  steps: [
    {
      title: "種類を確かめる",
      desc: "小葉の数・大きさ、葉の裏の色、果実の様子を上の表で確かめます。ヌルデは葉の中軸に緑色の翼があります。",
    },
    {
      title: "肌を出さない服装にする",
      desc: "林野庁関東森林管理局は、できるだけ皮膚が露出しない衣服を着用し、ツタウルシやハゼノキなどの有毒な植物には触れないようにとしています。長袖・長ズボン・手袋で作業します。",
    },
    {
      title: "絡んだつるを確かめる",
      desc: "切る木にツタのようなつるが絡んでいたら、ツタウルシでないか確かめます。島根県は、同じつるから出ている葉がすべて3枚かどうかを見るとよいとしています（ツタなら2枚や1枚の葉がほぼ必ず見られる）。",
    },
    {
      title: "作業後1〜2日は様子を見る",
      desc: "かぶれは遅れて出ます。かぶれを確認したら専門医の治療を受け、何にかぶれたかを確かめておきます（島根県）。",
    },
  ],
  ngHeading: "ウルシの仲間を切るときに避けたいこと",
  ngs: [
    {
      title: "素手・半袖で作業しないようにします",
      desc: "林野庁関東森林管理局は、できるだけ皮膚が露出しない衣服の着用を勧めています。",
    },
    {
      title: "かぶれた経験のある人が自分で切ることは避けます",
      desc: "島根県は、よくかぶれる人は皮膚科でパッチテストを受けて原因植物を突き止めておくとよいとしています。原因が分かっている人は、業者に任せるのが確実です。",
    },
    {
      title: "見た目だけで「ツタ」と決めつけないようにします",
      desc: "島根県は、ツタの若木の葉はツタウルシのように3枚に分かれることがあり、植物にかなり詳しい人でもなかなか見分けがつかないとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      かぶれやすい人、木が太く倒す方向に家や電線がある場合、ツタウルシが絡んでいる場合は、伐採業者に相談してください。依頼の際は「ウルシの仲間（ヤマウルシ・ハゼノキなど）と思われる」と伝えると、作業する人が準備をして来られます。根元から抜くかどうか（抜根）も決めておくと、見積もりをそろえやすくなります。かぶれの特徴と見分け方は<a href={SHIMANE} className={A} target="_blank" rel="noopener noreferrer">島根県「危険な植物」（野外における危険な植物）</a>、服装は<a href={RINYA} className={A} target="_blank" rel="noopener noreferrer">林野庁 関東森林管理局「E 危険な動植物に注意」</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      木を倒す作業の基本は<Link href="/battou/" className={A}>伐倒とは</Link>、チェーンソーを使う場合は<Link href="/chainsaw-tsukaikata/" className={A}>チェーンソーの使い方と安全の基本</Link>、根元から抜くかどうかは<Link href="/bassai-bakkon-chigai/" className={A}>伐採と抜根の違い</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "ウルシの木の伐採を業者に相談する",
  ctaText: "かぶれが心配な木の伐採や、絡んだつるの撤去は、業者に任せると安心です。",
  faqHeading: "漆の木の伐採でよくある質問",
  faqs: [
    {
      q: "ウルシに触れてすぐかぶれなければ大丈夫ですか？",
      a: "島根県は、ウルシの仲間によるかぶれは遅延型接触皮膚炎で、1〜2日後に起こるとしています。すぐに症状が出なくても、しばらく様子を見てください。",
    },
    {
      q: "かぶれたらどうすればよいですか？",
      a: "島根県は、かぶれを確認したら専門医の治療を受け、何にかぶれたかを確認して今後に生かすことが重要としています。",
    },
    {
      q: "ヌルデもかぶれますか？",
      a: "島根県は、同じウルシ科でもヌルデはかぶれることはほとんどないとしています。葉の中軸に緑色の翼があることで見分けられます。",
    },
    {
      q: "ウルシの木かどうか、簡単に見分ける方法は？",
      a: "島根県は、ウルシ科の植物は枝や葉を切ると白い液が出てくるとしています。ハゼ類3種は、小葉の大きさ・対の数・葉の裏の色・果実で見分けます。",
    },
  ],
  related: [
    { href: "/battou/", label: "伐倒とは", desc: "受け口・追い口と退避の範囲" },
    { href: "/bassai-bakkon-chigai/", label: "伐採と抜根の違い", desc: "切り株を残すかどうか" },
    { href: "/niwaki-jueki-yani/", label: "庭木の幹から樹液・ヤニが出ている", desc: "幹から出る液の見方" },
    { href: "/biwa-kiru/", label: "びわの木を切る", desc: "大きくなった果樹の切り方" },
  ],
};

export default function UrushiBassaiPage() {
  return <KnowArticle data={data} />;
}
