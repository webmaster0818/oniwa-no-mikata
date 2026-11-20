import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/centipedegrass/";
const A = "text-[#2D7F3E] underline";
const IBARAKI = "https://www.pref.ibaraki.jp/nourinsuisan/hokunourin/kikaku/kikaku/documents/20180228keihan01.pdf";
const NARO = "https://www.naro.go.jp/PUBLICITY_REPORT/publication/files/shiba2015.pdf";
const OKAYAMA = "https://www.pref.okayama.jp/uploaded/life/1052054_10191510_misc.pdf";
const KYOTO = "https://www.pref.kyoto.jp/nosoken/outcome/documents/22-08.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "センチピードグラス（ムカデ芝）の特徴と植え方｜寒さに弱い・低く刈ると消える・播種は5〜6月｜お庭のミカタ",
  },
  description:
    "センチピードグラス（ムカデ芝）の特徴・植え方・管理を、茨城県のグランドカバープランツ導入の手引き、農研機構のシバ型草地化技術マニュアル、岡山県・京都府の試験成果をもとにまとめました。寒さや積雪に弱く、低く刈ると消滅するため注意が必要です。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "センチピードグラス（ムカデ芝）の特徴と植え方",
    description:
      "センチピードグラスの長所と短所、育苗・定植の時期、刈り高の注意点を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; ibaraki: string; naro: string; other: string }[] = [
  { item: "植え方", ibaraki: "セル苗の定植を紹介（種子の吹付・シート貼付もある）", naro: "種子を播く方法（播種法）", other: "岡山県：セル苗を30×30cmで定植／京都府：マット苗張付と直播を比較" },
  { item: "時期", ibaraki: "定植は梅雨時期（6月中下旬）", naro: "播種は5〜6月頃（梅雨の始まり）", other: "記載なし" },
  { item: "植える間隔・量", ibaraki: "30cm×30cm（11.1株/㎡）、種子10.6g/100㎡（育苗用）", naro: "おおむね2kg/10a。0.5〜1kg/10aでも2〜3年で被度80%以上", other: "京都府：直播の種子量70g/10㎡" },
  { item: "広がるまで", ibaraki: "短ければ3年程度で被覆", naro: "少ない播種量では2〜3年", other: "岡山県：定植前の除草とマルチで、定植した年に畦畔法面の8割程度を被覆" },
  { item: "刈り方", ibaraki: "低く刈ると消滅するので注意。焼き払わない", naro: "記載なし", other: "京都府：刈り払いの高さ10cm" },
  { item: "寒さ", ibaraki: "寒さや積雪に弱い。標高が高い地域には向かない", naro: "年平均気温11.5℃以上（最低気温−8.9℃以上）の地域で被度が5倍に", other: "記載なし" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">茨城県 導入の手引き</th>
          <th className="border px-2 py-2 text-left">農研機構 マニュアル</th>
          <th className="border px-2 py-2 text-left">岡山県・京都府の試験成果</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.ibaraki}</td>
            <td className="border px-2 py-2">{r.naro}</td>
            <td className="border px-2 py-2">{r.other}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に4つの資料を開き、センチピードグラスに関する記載を当サイトで項目ごとに照合しました。いずれも水田の畦畔や耕作放棄地を対象にした資料で、家庭の庭を対象にしたものではありません。「記載なし」はその資料に書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "centipedegrass",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "センチピードグラス（ムカデ芝）の特徴と植え方｜寒さに弱い・低く刈ると消える・播種は5〜6月",
  breadcrumbLabel: "センチピードグラス",
  tagChips: ["センチピードグラス", "ムカデ芝", "グランドカバー", "芝生", "雑草対策"],
  ldHeadline: "センチピードグラス（ムカデ芝）の特徴と植え方｜寒さに弱い・低く刈ると消える・播種は5〜6月",
  ldDescription:
    "センチピードグラス（ムカデ芝）の特徴、植え方、刈り方の注意点を、茨城県・農研機構・岡山県・京都府の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        センチピードグラス（和名：ムカデ芝）は東南アジア原産の植物で、地面を覆って雑草を抑えるグランドカバーとして、主に水田の畦畔で導入が進んでいます。茨城県の手引きは、畦畔に繁茂すると<Hl>草刈りが年間1〜2回で済む</Hl>とする一方、<Hl>寒さや積雪に弱い</Hl>、<Hl>低く刈ると消滅する</Hl>ことを注意点に挙げています（出典：<a href={IBARAKI} className={A} target="_blank" rel="noopener noreferrer">茨城県県北農林事務所「グランドカバープランツ導入の手引き」（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        本記事では、この手引きと農研機構のマニュアル、岡山県・京都府の試験成果を照合し、庭や法面への導入を検討する方向けに、特徴と植え方を整理します。資料はいずれも農地向けのため、庭に当てはめる際は目安としてお読みください。
      </p>
    </>
  ),
  conclusionTitle: "センチピードグラスは5〜6月に植え、刈るときは低くしすぎないことが要点です。寒さに弱いため、冬の冷え込みが厳しい地域や標高の高い場所には向きません。",
  conclusionBody: (
    <>
      <p>
        4つの資料を当サイトで項目ごとに並べると、次のとおりです。植える時期は、茨城県が定植を梅雨時期（6月中下旬）、農研機構が播種を5〜6月頃としており、どちらも梅雨の雨で乾燥を防ぐ考え方です（出典：<a href={NARO} className={A} target="_blank" rel="noopener noreferrer">農研機構「耕作放棄地放牧等における省力・低コストなシバ型草地化技術マニュアル 2015年版」（PDF）</a>、2026年11月21日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "センチピードグラスの4つの特徴",
  basicsIntro: (
    <p>
      以下は、資料に書かれている長所と短所を整理したものです。
    </p>
  ),
  basicsLabel: "特徴",
  basics: [
    {
      title: "地面を覆うと草刈りの回数が減る",
      desc: "茨城県の手引きでは、畦畔に繁茂すると草刈りが年間1〜2回で済むとしています。京都府の試験成果では、抑草効果が高いとしています。",
    },
    {
      title: "被覆すると強固なマットになる",
      desc: "茨城県の手引きでは、長所として長期間の植生維持、歩いても滑りにくい、活着すると被覆が早い、マットができると非常に強固になる、自家増殖ができることを挙げています。",
    },
    {
      title: "寒さ・積雪・乾燥に弱い",
      desc: "同じ手引きでは、短所として移植・発芽時の乾燥に弱い、寒さや積雪に弱い、標高が高い地域には向かないことを挙げています。",
    },
    {
      title: "種子が高い",
      desc: "農研機構のマニュアルでは、センチピードグラスの種子代金はkgあたり一万円を超え高額だとしています。茨城県の手引きでも、施工コストがベントグラスより高いことを短所に挙げています。",
    },
  ],
  stepsHeading: "セル苗で植える4つの手順",
  stepsIntro: (
    <p>
      茨城県の手引きで紹介されている、セル苗を育てて植え付ける方法です。種子を直接まく方法に比べ、安定して定着させやすいとしています。
    </p>
  ),
  steps: [
    {
      title: "セルトレイに種をまいて苗を育てる",
      desc: "1穴あたり5〜10粒をまき、軽く土をかぶせて乾燥しないように覆います。発芽には20℃以上が必要で、発芽まで7〜10日程度、播種後40日程度で草丈5cm以上の植え付けられる苗になるとしています。",
    },
    {
      title: "植える場所の雑草を先に除く",
      desc: "雑草の防除が不十分だと、苗の生育が停滞するとしています。手引きでは、4月下旬〜5月上旬と、定植の3〜7日前の2回、非選択性除草剤を散布する方法を示しています。除草剤は、製品ラベルに記載された対象と使い方に従ってください。",
    },
    {
      title: "梅雨時期に30cm間隔で植える",
      desc: "定植は乾燥による枯死が少ない梅雨時期（6月中下旬）が適し、植付間隔は30cm×30cmが一般的としています。浅く植えると乾燥で枯れやすいとしています。",
    },
    {
      title: "1年目はこまめに雑草を取る",
      desc: "雑草の草丈が20〜30cmになるとセンチピードグラスの生育が停滞するため、抜き取るか、草丈5cm程度の高さに刈り払うとしています。1年目の雑草管理が生育を大きく左右するとしています。",
    },
  ],
  ngHeading: "センチピードグラスの管理で避けたいこと",
  ngs: [
    {
      title: "地際まで低く刈り込むことは避けます",
      desc: "茨城県の手引きでは、草刈りを行う場合、低く刈るとセンチピードグラスが消滅するので注意するとしています。京都府の試験成果では、刈り払いの高さを10cmとしています。",
    },
    {
      title: "枯れ草を焼き払うことは避けます",
      desc: "茨城県の手引きでは、センチピードグラスが再生しないので、焼き払わないとしています。",
    },
    {
      title: "寒冷地や標高の高い場所に植えることは避けます",
      desc: "茨城県の手引きでは、寒さや積雪に弱く、標高が高い地域には向かないとしています。農研機構のマニュアルでは、年平均気温11.5℃以上（最低気温−8.9℃以上）の地域で、造成初年度の秋から1年で被度が5倍になったとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>広い法面や斜面に植えたい、既存の雑草が多く植える前の除草が難しい、張り芝やほかのグランドカバーと比べて決めたい</Hl>といった場合は、造園業者に相談すると作業がまとまります。岡山県の試験成果では、既存の畦畔に導入する場合、定植までに既存雑草に2回以上除草剤を散布し、マルチを敷いてから定植すると、その後の雑草発生が少なくなるとしています（出典：<a href={OKAYAMA} className={A} target="_blank" rel="noopener noreferrer">岡山県「既存畦畔への効果的なセンチピードグラス導入法」（PDF）</a>、2026年11月21日確認）。
    </p>,
    <p key="2">
      急な斜面では、京都府の試験成果が、マット苗の張付は育苗用土の経費が掛かるものの、急斜面や直播が難しい既存法面で早期の造成を図ることができるとしています（出典：<a href={KYOTO} className={A} target="_blank" rel="noopener noreferrer">京都府農林水産技術センター「景観に配慮した球根類を用いた水田畦畔づくり」（PDF）</a>、2026年11月21日確認）。ほかの地被植物は<Link href="/groundcover-erabikata/" className={A}>グランドカバープランツの選び方</Link>、芝生の種まきは<Link href="/shibafu-tanemaki/" className={A}>芝生の種まき</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "植える場所と時期を決めて相談する",
  ctaText:
    "センチピードグラスは5〜6月に植え、低く刈りすぎないことが要点です。広い法面への導入は、植える前の除草と合わせて業者と相談すると安心です。",
  faqHeading: "センチピードグラスのよくある質問",
  faqs: [
    {
      q: "センチピードグラスはどのくらいで一面に広がりますか？",
      a: "茨城県の手引きでは、短ければ3年程度で被覆できるとしています。農研機構のマニュアルでは、0.5〜1kg/10aの少ない播種量でも、初期の広がりは遅いものの2〜3年で被度80%以上になるとしています。",
    },
    {
      q: "センチピードグラスの種はどのくらいまけばよいですか？",
      a: "農研機構のマニュアルでは、おおむね2kg/10a（1,000㎡あたり2kg）が推奨されるとしています。京都府の試験成果では、直播の種子量を10㎡あたり70gとしています。",
    },
    {
      q: "センチピードグラスに肥料は必要ですか？",
      a: "農研機構のマニュアル（放牧草地向け）では、基本的には施肥は不要としています。茨城県の手引きでは、苗を植えるときに植穴へ施肥するとしています。",
    },
    {
      q: "センチピードグラスと一緒に花を植えられますか？",
      a: "京都府の試験成果では、センチピードグラスにヒガンバナ・スイセンの球根を混植し、雑草抑制と季節感のある景観の形成ができるとしています。",
    },
  ],
  related: [
    {
      href: "/groundcover-erabikata/",
      label: "グランドカバープランツの選び方",
      desc: "雑草対策と景観を両立する地被植物",
    },
    {
      href: "/zasso-haenikui-niwa/",
      label: "雑草が生えにくい庭",
      desc: "庭の雑草を減らす方法",
    },
    {
      href: "/shibafu-tanemaki/",
      label: "芝生の種まき",
      desc: "種まきの時期と量の目安",
    },
    {
      href: "/shibakari-jiki/",
      label: "芝刈りの時期",
      desc: "月ごとの刈り込み回数の目安",
    },
  ],
};

export default function CentipedegrassPage() {
  return <KnowArticle data={data} />;
}
