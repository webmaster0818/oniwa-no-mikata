import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kyochikuto-doku/";
const A = "text-[#2D7F3E] underline";
const FSC = "https://www.fsc.go.jp/kids-box/index.data/202003_1kidsbox.pdf";
const NIHS = "https://mhlw-grants.niph.go.jp/system/files/report_pdf/202324019A-buntan6.pdf";
const WAKAYAMA = "https://www.pref.wakayama.lg.jp/prefg/070400/h27kentoukai_d/fil/05niwa.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "夾竹桃（キョウチクトウ）の毒｜葉などに強心配糖体。誤食の事例と、庭での剪定・片付けの注意｜お庭のミカタ",
  },
  description:
    "夾竹桃（キョウチクトウ）の毒を、食品安全委員会・厚生労働行政推進調査事業の報告書・和歌山県の家畜保健衛生所の報告をもとにまとめました。含まれる成分、誤食の事例、庭で剪定するときの注意を整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "夾竹桃（キョウチクトウ）の毒",
    description:
      "キョウチクトウの毒の成分と誤食の事例、庭木として剪定・片付けをするときの注意を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; fsc: string; nihs: string; wakayama: string }[] = [
  { item: "毒の成分", fsc: "記載なし（毒があり大変危険）", nihs: "oleandrin（オレアンドリン）や neritaloside などの強心配糖体", wakayama: "強心配糖体であるオレアンドリン。毒性は極めて強い" },
  { item: "注意する部位", fsc: "枝（お箸代わりにする遊び）", nihs: "樹皮・根・葉は強心作用が強いとする資料あり。植栽の葉による中毒事例", wakayama: "葉・枯葉" },
  { item: "症状", fsc: "記載なし", nihs: "吐き気・嘔吐・めまいなど", wakayama: "疝痛・下痢など（牛）" },
  { item: "事例", fsc: "記載なし", nihs: "小学校の児童2名が校庭のキョウチクトウの葉を3〜5枚程度食べ、嘔気・頭痛で入院（高松市 平成29年）", wakayama: "刈り取った野草にキョウチクトウの葉が混入し、牛が死亡した疑いの事例" },
  { item: "対処", fsc: "食べて具合が悪くなったらすぐ医療機関へ", nihs: "記載なし", wakayama: "落下した枯葉の混入を防ぐ必要がある" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">食品安全委員会 キッズボックス</th>
          <th className="border px-2 py-2 text-left">国立医薬品食品衛生研究所の調査（厚生労働行政推進調査事業）</th>
          <th className="border px-2 py-2 text-left">和歌山県 紀南家畜保健衛生所</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.fsc}</td>
            <td className="border px-2 py-2">{r.nihs}</td>
            <td className="border px-2 py-2">{r.wakayama}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月22日に3つの資料を開き、キョウチクトウに関する記載を当サイトで項目ごとに照合しました。「記載なし」はその資料に書かれていないという意味です。国立医薬品食品衛生研究所の調査の事例は、報告書が別添で引用している高松市の発表（平成29年12月15日）によるものです。和歌山県の報告は牛の事例で、人の中毒量を示したものではありません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kyochikuto-doku",
  published: "2026-11-22",
  updatedLabel: "2026年11月22日",
  h1: "夾竹桃（キョウチクトウ）の毒｜葉などに強心配糖体。誤食の事例と、庭での剪定・片付けの注意",
  breadcrumbLabel: "夾竹桃（キョウチクトウ）の毒",
  tagChips: ["キョウチクトウ", "夾竹桃", "有毒植物", "子どもの安全", "剪定"],
  ldHeadline: "夾竹桃（キョウチクトウ）の毒｜葉などに強心配糖体。誤食の事例と、庭での剪定・片付けの注意",
  ldDescription:
    "キョウチクトウの毒の成分、誤食の事例、庭木として剪定・片付けをするときの注意を、食品安全委員会・国立医薬品食品衛生研究所の調査・和歌山県の報告・大和市の園芸相談の事例をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        キョウチクトウ（夾竹桃）には毒があります。食品安全委員会は子ども向けの資料で、キョウチクトウを<Hl>公園などで見かける植物で、枝をお箸代わりにして遊ぶことがあるが、毒があり大変危険</Hl>と注意を呼びかけています。大人に向けては、よくわからないものを食べて具合が悪くなったらすぐ医療機関へ、としています（出典：<a href={FSC} className={A} target="_blank" rel="noopener noreferrer">食品安全委員会 キッズボックス「毒がある身近な植物 その1」（PDF）</a>、2026年11月22日確認）。
      </p>
      <p>
        本記事では、この資料に、国立医薬品食品衛生研究所の調査報告と和歌山県の家畜保健衛生所の報告を照合し、庭にキョウチクトウがある場合の注意を整理します。
      </p>
    </>
  ),
  conclusionTitle: "キョウチクトウは、葉などにオレアンドリンなどの強心配糖体を含み、植栽の葉を食べた中毒の事例があります。子どもの遊びや誤食を防ぎ、剪定した枝や落ち葉は口に入る場所に置かないように片付けます。",
  conclusionBody: (
    <>
      <p>
        国立医薬品食品衛生研究所の調査は、キョウチクトウに oleandrin（オレアンドリン）や neritaloside などの強心配糖体の含有が報告されているとし、植栽などに用いられているキョウチクトウの誤食や乾燥葉による中毒の報告が多々あったとしています。中毒症状としては吐き気・嘔吐・めまい等が挙げられていたとしています（出典：<a href={NIHS} className={A} target="_blank" rel="noopener noreferrer">厚生労働行政推進調査事業費補助金 分担研究報告書「成分本質（原材料）の分類変更に関する調査（2）キョウチクトウ」（PDF）</a>、2026年11月22日確認）。3つの資料を当サイトで項目ごとに並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "キョウチクトウの毒に関する4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "毒の成分は強心配糖体",
      desc: "和歌山県の報告では、有毒成分として強心配糖体であるオレアンドリンを含有し、毒性は極めて強いとしています。国立医薬品食品衛生研究所の調査でも、オレアンドリンなどの強心配糖体の含有が報告されているとしています。",
    },
    {
      title: "植栽の葉での中毒事例がある",
      desc: "国立医薬品食品衛生研究所の調査は、近年でも植栽等のキョウチクトウの葉による中毒事例の報告があるとしています。報告書が引用する高松市の発表では、小学校の児童2名が校庭のキョウチクトウの葉を3〜5枚程度食べ、入院しています。",
    },
    {
      title: "枝での遊びにも注意",
      desc: "食品安全委員会は、枝をお箸代わりにして遊ぶことがあるが、毒があり大変危険としています。",
    },
    {
      title: "落ち葉・枯葉にも注意",
      desc: "和歌山県の報告では、刈り取り場所の横に繁茂したキョウチクトウの葉や枯葉が野草に混じり、牛の中毒が疑われた事例を挙げ、落下した枯葉の混入を防ぐ必要があるとしています。",
    },
  ],
  stepsHeading: "庭のキョウチクトウを手入れする4つの手順",
  stepsIntro: (
    <p>
      大和市の園芸相談の事例と、上の3つの資料をもとに当サイトで整理した流れです（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月22日確認）。
    </p>
  ),
  steps: [
    {
      title: "剪定は10〜3月頃に行う",
      desc: "大和市の園芸相談の事例では、花が咲かないキョウチクトウの相談に対し、10〜3月頃に剪定して、それ以外は切らずにおけば咲くと回答しています。",
    },
    {
      title: "大きくしたくない場合は根元から切り詰める",
      desc: "大和市の園芸相談の事例では、大きくしたくないなら思い切って根元から切り詰めると、次の年は咲かないが2年目からは咲き出すとしています。邪魔になるなら大きい枝のみ間引くとしています。",
    },
    {
      title: "剪定枝や落ち葉はその日のうちに片付ける",
      desc: "和歌山県の報告では、落下した枯葉の混入を防ぐ必要があるとしています。子どもやペットが触れる場所、家畜の餌にする草を刈る場所に残さないようにします。",
    },
    {
      title: "口に入れたときはすぐ医療機関へ",
      desc: "食品安全委員会は、よくわからないものを食べて具合が悪くなったらすぐ医療機関へ、としています。",
    },
  ],
  ngHeading: "キョウチクトウで避けたいこと",
  ngs: [
    {
      title: "枝を箸や串の代わりに使うことは避けます",
      desc: "食品安全委員会は、枝をお箸代わりにして遊ぶことがあるが、毒があり大変危険としています。",
    },
    {
      title: "刈った草に葉や枯葉を混ぜたまま餌にすることは避けます",
      desc: "和歌山県の報告では、刈り取った野草にキョウチクトウの葉が混じり、牛の死亡が疑われた事例を報告しています。ウサギやヤギなどの動物を飼っている場合も、刈った草に混ぜないようにしてください。",
    },
    {
      title: "子どもの手が届く場所に剪定枝を置くことは避けます",
      desc: "国立医薬品食品衛生研究所の調査が引用する高松市の事例では、校庭に植わっていたキョウチクトウの葉を児童が食べています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>木が大きく剪定枝の量が多い、子どもやペットがいて作業後の片付けまで任せたい、伐採して植え替えたい</Hl>といった場合は、庭木の剪定業者に相談すると作業がまとまります。依頼するときは、キョウチクトウであること、剪定枝や落ち葉の回収・処分まで含めてほしいことを伝えてください。
    </p>,
    <p key="2">
      子どもが遊ぶ庭の注意点は<Link href="/kodomo-niwa-anzen/" className={A}>子どもと庭遊びの安全対策</Link>、ペットと庭の注意点は<Link href="/pet-to-niwa/" className={A}>ペットと庭の安全の基礎知識</Link>、剪定枝の出し方は<Link href="/senteieda-shobun/" className={A}>剪定枝・刈り草の処分方法</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "片付けまで含めて相談する",
  ctaText:
    "キョウチクトウは葉などに強心配糖体を含みます。剪定枝や落ち葉の回収まで含めて業者と相談すると安心です。",
  faqHeading: "キョウチクトウの毒のよくある質問",
  faqs: [
    {
      q: "キョウチクトウのどこに毒がありますか？",
      a: "国立医薬品食品衛生研究所の調査は、植栽のキョウチクトウの葉による中毒事例を挙げ、樹皮・根・葉は強心作用が強いとする資料も引用しています。食品安全委員会は枝をお箸代わりにする遊びを危険としています。",
    },
    {
      q: "キョウチクトウの毒の成分は何ですか？",
      a: "和歌山県の報告と国立医薬品食品衛生研究所の調査は、強心配糖体のオレアンドリンを挙げています。調査では neritaloside なども挙げています。",
    },
    {
      q: "子どもが葉を口に入れたらどうすればよいですか？",
      a: "食品安全委員会は、よくわからないものを食べて具合が悪くなったらすぐ医療機関へ、としています。食べた植物の名前と量を伝えられるようにしてください。",
    },
    {
      q: "庭のキョウチクトウはいつ剪定すればよいですか？",
      a: "大和市の園芸相談の事例では、10〜3月頃に剪定して、それ以外は切らずにおけば咲くと回答しています。",
    },
  ],
  related: [
    {
      href: "/kodomo-niwa-anzen/",
      label: "子どもと庭遊びの安全対策",
      desc: "植物・道具・段差の注意点",
    },
    {
      href: "/pet-to-niwa/",
      label: "ペットと庭の安全の基礎知識",
      desc: "ペットがいる庭の注意点",
    },
    {
      href: "/senteieda-shobun/",
      label: "剪定枝・刈り草の処分方法",
      desc: "市区町村ごとの出し方",
    },
    {
      href: "/kaboku-kaika-teire/",
      label: "花木の開花を良くする手入れ",
      desc: "花が咲かない原因と剪定の考え方",
    },
  ],
};

export default function KyochikutoDokuPage() {
  return <KnowArticle data={data} />;
}
