import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kusakari-silver-jinzai/";
const A = "text-[#2D7F3E] underline";
const CHIBA = "https://www.city.chiba.jp/hokenfukushi/koreishogai/korei/sileverjinnzai.html";
const ITABASHI = "https://webc.sjc.ne.jp/itabashi/job2_2";
const ICHIHARA = "https://www.ichihara-sjc.jp/jobprice/";
const YOKOSUKA = "http://www.yokosuka-sc.or.jp/service.html";
const HITACHIOTA = "http://hitachiota-sjc.com/job/";

export const metadata: Metadata = {
  title: {
    absolute: "草刈りをシルバー人材センターに頼む｜5センターの料金の目安と、刈払機・処分の扱いの違い｜お庭のミカタ",
  },
  description:
    "シルバー人材センターに草刈り・除草を頼むときの料金の目安を、千葉市・板橋区・市原市・横須賀市・常陸太田市の公式ページの記載で比べました。手作業か刈払機か、草の処分を含むかはセンターごとに異なります。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "草刈りをシルバー人材センターに頼む",
    description:
      "5つのシルバー人材センターの公式ページで、除草・草刈りの料金の目安、刈払機の扱い、草の処分の扱いを確認して並べました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; href: string; hand: string; machine: string; note: string }[] = [
  {
    src: "千葉市（市のページ）",
    href: CHIBA,
    hand: "1人 3,100円（2時間）〜",
    machine: "1人 6,400円（2時間）〜",
    note: "最低2時間分から、以後1時間ごと。芝に関する対応は行っていない",
  },
  {
    src: "板橋区シルバー人材センター",
    href: ITABASHI,
    hand: "1人1日（7時間計算）12,880円〜",
    machine: "受けていない（電動の草刈り機・刈り払い機は承っていない）",
    note: "草の処分は原則行わない（束ねる・袋詰めのため、ごみ袋の用意が必要）",
  },
  {
    src: "市原市シルバー人材センター",
    href: ICHIHARA,
    hand: "日額 12,000円〜（除草・草刈り（手））",
    machine: "日額 14,000円〜",
    note: "令和8年10月1日から料金改定。消費税・事務費を含む",
  },
  {
    src: "横須賀市シルバー人材センター",
    href: YOKOSUKA,
    hand: "12,480円〜お見積り（除草・1日1名）",
    machine: "記載なし（除草として一つの区分）",
    note: "令和8年10月1日受注分からの目安。別途ごみ処分費用がかかる",
  },
  {
    src: "常陸太田市シルバー人材センター",
    href: HITACHIOTA,
    hand: "約7,600円（1人が1日（7時間）従事）",
    machine: "約10,300円（刈払機使用・1人1日）",
    note: "別途1回510円の機材運搬代。草を処分する場合は別途費用",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">センター</th>
          <th className="border px-2 py-2 text-left">手作業の除草</th>
          <th className="border px-2 py-2 text-left">機械（刈払機）</th>
          <th className="border px-2 py-2 text-left">備考</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">
              <a href={r.href} className={A} target="_blank" rel="noopener noreferrer">
                {r.src}
              </a>
            </td>
            <td className="border px-2 py-2">{r.hand}</td>
            <td className="border px-2 py-2">{r.machine}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に各センター（千葉市は市の案内ページ）の公式ページを開き、除草・草刈りの料金の記載を当サイトで並べました。金額はいずれも各ページの表記どおりで、「〜」「約」は目安を示します。料金は改定されることがあり、実際の金額は下見・見積もりで決まります。単位（時間・日）が異なるため、単純な高い・安いの比較はできません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kusakari-silver-jinzai",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "草刈りをシルバー人材センターに頼む｜5センターの料金の目安と、刈払機・処分の扱いの違い",
  breadcrumbLabel: "草刈りをシルバー人材センターに頼む",
  tagChips: ["草刈り", "除草", "シルバー人材センター", "料金", "刈払機"],
  ldHeadline: "草刈りをシルバー人材センターに頼む｜5センターの料金の目安と、刈払機・処分の扱いの違い",
  ldDescription:
    "シルバー人材センターに草刈り・除草を頼むときの料金の目安と、刈払機・草の処分の扱いを、5つのセンターの公式ページで比べた記事です。",
  lead: (
    <>
      <p className="mb-4">
        シルバー人材センターの除草は、<Hl>1人1日あたりおよそ7,600円〜14,000円、2時間単位なら3,100円〜</Hl>という記載でした（2026年11月23日に5センターの公式ページを当サイトで確認）。ただし、<Hl>刈払機を使うか、草の処分を含むか</Hl>はセンターによって異なります。板橋区のセンターは手作業のみで、電動の草刈り機は扱っていません。
      </p>
      <p>
        千葉市は、シルバー人材センターを「高年齢者等の雇用の安定等に関する法律に基づく公的な団体」と説明しています（出典：<a href={CHIBA} className={A} target="_blank" rel="noopener noreferrer">千葉市「シルバー人材センターへのご入会とご利用」</a>、2026年11月23日確認）。本記事では、依頼の前に確かめておきたい点を各センターの記載から整理します。
      </p>
    </>
  ),
  conclusionTitle: "料金の単位（時間・日）、刈払機の可否、草の処分の有無の3点を、地元のセンターに確かめてから頼みます。",
  conclusionBody: (
    <>
      <p>
        5つのセンターの記載を並べると、次のとおりです。手作業より機械（刈払機）の方が高い設定のセンター（千葉市・市原市・常陸太田市）と、機械を扱わないセンター（板橋区）がありました。
      </p>
      {table}
    </>
  ),
  basicsHeading: "シルバー人材センターの草刈りに関する4つの基本",
  basicsIntro: <p>以下は、各センターの公式ページに書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "料金は時間単位か1日単位",
      desc: "千葉市は2時間からの時間単位、板橋区・市原市・横須賀市・常陸太田市は1人1日の単位で目安を示しています。面積（㎡）単位の料金表は、今回確認した5センターにはありませんでした。",
    },
    {
      title: "刈払機を使うかで料金が変わる",
      desc: "千葉市は手作業2時間3,100円〜・機械2時間6,400円〜、市原市は手作業日額12,000円〜・機械14,000円〜、常陸太田市は手作業約7,600円・刈払機約10,300円としています。",
    },
    {
      title: "草の処分は別のことが多い",
      desc: "板橋区は処分を原則行わず、横須賀市と常陸太田市は処分費用が別途かかるとしています。刈った草を自分で出すのか、頼むのかを先に決めておきます。",
    },
    {
      title: "地元のセンターにしか頼めない",
      desc: "横須賀市のセンターは仕事を横須賀市内に限るとしています。料金・受け付ける作業はセンターごとに違うため、住んでいる市区町村のセンターに問い合わせます。",
    },
  ],
  stepsHeading: "シルバー人材センターに草刈りを頼む4つの手順",
  stepsIntro: <p>各センターの依頼方法の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "地元のセンターの料金ページを見る",
      desc: "受け付ける作業・単位・改定の時期を確かめます。市原市と横須賀市は令和8年10月から料金を改定したと記載しています。",
    },
    {
      title: "広さ・草丈・刈払機の要否を伝えて相談する",
      desc: "千葉市は手作業を「一般家庭のお庭、それほど広くない場所に適しています」、機械を「草刈り機で一気に草を取り除きます」と説明しています。広い空き地や草丈の高い場所は、機械を扱うかを先に聞きます。",
    },
    {
      title: "処分と追加費用を確かめる",
      desc: "ごみ処分費用（横須賀市）、機材運搬代1回510円（常陸太田市）、材料費等（板橋区）など、作業料金以外の費用が記載されています。",
    },
    {
      title: "時期は早めに申し込む",
      desc: "板橋区は、時季により予約が集中し案内にかなりの時間がかかる場合があるとしています。千葉市も植木剪定について時期によっては待つ場合があるとしています。",
    },
  ],
  ngHeading: "シルバー人材センターへの依頼で避けたいこと",
  ngs: [
    {
      title: "どのセンターも同じ料金だと考えることは避けます",
      desc: "今回の5センターでも、1人1日の目安は約7,600円から14,000円まで幅がありました。単位も時間・日で異なります。",
    },
    {
      title: "刈払機での作業を前提に申し込むことは避けます",
      desc: "板橋区のセンターは、除草はすべて手持ち鎌などによる手作業で、電動の草刈り機・刈り払い機は承っていないとしています。",
    },
    {
      title: "芝生の手入れを草刈りと同じ扱いで頼むことは避けます",
      desc: "千葉市の案内では、除草について「芝に関する対応は行っておりません」としています。芝刈りは別に相談します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>広い敷地を機械で一気に刈りたい、斜面や草丈の高い場所がある、刈った草の処分までまとめて頼みたい、急いでいる</Hl>といった場合は、草刈りを専門に扱う業者の見積もりも取って比べると判断しやすくなります。業者は面積（㎡）単位の料金を示していることが多いため、シルバー人材センターの1日単位の料金とは、広さと作業時間をそろえて比べます。
    </p>,
    <p key="2">
      草刈りの時期は<Link href="/kusakari-jiki/" className={A}>草刈りの時期</Link>、刈払機を自分で使う場合の注意は<Link href="/karibarai-anzen/" className={A}>刈払機の安全な使い方</Link>、斜面の草刈りは<Link href="/kusakari-shamen/" className={A}>斜面の草刈り</Link>、業者の料金の出し方は<Link href="/kusakari-110ban-kusakari-ryokin/" className={A}>草刈り110番の料金</Link>と<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "広さと草丈を伝えて見積もりを比べる",
  ctaText:
    "シルバー人材センターと業者では、料金の単位と作業の範囲が異なります。広さ・草丈・処分の有無をそろえて比べると判断しやすくなります。",
  faqHeading: "シルバー人材センターの草刈りのよくある質問",
  faqs: [
    {
      q: "シルバー人材センターの草刈りはいくらですか？",
      a: "2026年11月23日に確認した5センターでは、1人1日あたり約7,600円（常陸太田市・手作業）から14,000円〜（市原市・機械）、千葉市は2時間で手作業3,100円〜・機械6,400円〜でした。センターごとに異なり、料金は改定されることがあります。",
    },
    {
      q: "草刈り機（刈払機）を使ってもらえますか？",
      a: "センターによります。千葉市・市原市・常陸太田市は機械（刈払機）の料金を示していますが、板橋区は電動の草刈り機・刈り払い機は承っていないとしています。",
    },
    {
      q: "刈った草は持って帰ってもらえますか？",
      a: "板橋区は処分を原則行わないとしています。横須賀市はごみ処分費用、常陸太田市は処分する場合の費用が別途かかるとしています。依頼時に確かめてください。",
    },
    {
      q: "面積（㎡）単位の料金はありますか？",
      a: "今回確認した5センターの公式ページは、いずれも時間または1日単位の目安でした。広さに応じた金額は下見・見積もりで決まります。",
    },
  ],
  related: [
    {
      href: "/akichi-zasso-taisaku/",
      label: "空き地の雑草対策",
      desc: "遠方の空き地の管理",
    },
    {
      href: "/kusakari-jiki/",
      label: "草刈りの時期",
      desc: "年に何回、いつ刈るか",
    },
    {
      href: "/kusakari-110ban-kusakari-ryokin/",
      label: "草刈り110番の料金",
      desc: "業者の㎡単価の出し方",
    },
    {
      href: "/karibarai-anzen/",
      label: "刈払機の安全な使い方",
      desc: "自分で刈るときの注意",
    },
    {
      href: "/zasso-taisaku/",
      label: "雑草対策",
      desc: "刈った後に生やさない工夫",
    },
  ],
};

export default function KusakariSilverJinzaiPage() {
  return <KnowArticle data={data} />;
}
