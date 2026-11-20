import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shibakari-jiki/";
const A = "text-[#2D7F3E] underline";
const TOKYO_KANRI = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual03";
const TOKYO_KEIKAKU = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual07";
const TOKYO_KISO = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual02";
const YOKOHAMA_KIHON = "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/midori-koen/midori_up/3ryokuka/hoikuentouryokuka.files/0018_20240206.pdf";
const YOKOHAMA_KISETSU = "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/midori-koen/midori_up/3ryokuka/hoikuentouryokuka.files/0017_20240206.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芝刈りの時期は4月〜10月｜月ごとの回数の目安と最後の芝刈り・刈る高さ｜お庭のミカタ",
  },
  description:
    "芝刈りの時期と回数を、東京都教育委員会と横浜市の芝生管理マニュアルをもとにまとめました。夏芝は4月〜10月が芝刈りの時期で、7〜9月は月4回が目安です。最後の芝刈りは概ね10月下旬、1回に刈るのは草丈の3分の1までです。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芝刈りの時期は4月〜10月",
    description:
      "芝刈りを始める時期、月ごとの回数、最後の芝刈り、刈る高さを公的なマニュアルをもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { month: string; tokyo: string; yokohama: string }[] = [
  { month: "3月", tokyo: "—", yokohama: "春の管理（3〜5月）：10〜14日に1回以上" },
  { month: "4月", tokyo: "1回", yokohama: "春の管理：10〜14日に1回以上／刈り高 25mm未満" },
  { month: "5月", tokyo: "2回", yokohama: "春の管理：10〜14日に1回以上／刈り高 25mm未満" },
  { month: "6月", tokyo: "3回", yokohama: "梅雨の期間中は週1回／刈り高 25mm未満" },
  { month: "7月", tokyo: "4回", yokohama: "梅雨明け後は5日に1回（月6回）／刈り高 25mm未満" },
  { month: "8月", tokyo: "4回", yokohama: "5日に1回（月6回）／刈り高 25mm未満" },
  { month: "9月", tokyo: "4回", yokohama: "前半は5日に1回、後半は週1回／後半から刈り高 25mm以上35mm未満" },
  { month: "10月", tokyo: "2回", yokohama: "刈り高 25mm以上35mm未満／概ね10月下旬が最後の芝刈り" },
  { month: "11月〜2月", tokyo: "—", yokohama: "記載なし（休眠期）" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">月</th>
          <th className="border px-2 py-2 text-left">東京都教育委員会（夏芝のみの場合の芝刈り回数）</th>
          <th className="border px-2 py-2 text-left">横浜市（ティフトン419の管理の目安）</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.month}>
            <td className="border px-2 py-2">{r.month}</td>
            <td className="border px-2 py-2">{r.tokyo}</td>
            <td className="border px-2 py-2">{r.yokohama}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月21日に、東京都教育委員会「園庭・校庭における芝生維持管理マニュアル」（平成30年3月）の「年間の維持管理活動の計画例」と、横浜市環境創造局「校庭・園庭芝生管理マニュアル」の季節ごとの管理の目安・芝刈りの項を開き、月ごとに当サイトで並べました。東京都の表の年間合計は20回です（当サイト計算）。どちらも園庭・校庭の芝生向けの資料で、横浜市は主にバミューダグラス（ティフトン419）を対象にしています。「—」は表に回数の記載がない月です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shibakari-jiki",
  published: "2026-11-21",
  updatedLabel: "2026年11月21日",
  h1: "芝刈りの時期は4月〜10月｜月ごとの回数の目安と最後の芝刈り・刈る高さ",
  breadcrumbLabel: "芝刈りの時期と回数",
  tagChips: ["芝刈り", "芝生", "時期", "回数", "刈り高"],
  ldHeadline: "芝刈りの時期は4月〜10月｜月ごとの回数の目安と最後の芝刈り・刈る高さ",
  ldDescription:
    "芝刈りの時期と月ごとの回数、最後の芝刈りの時期、1回に刈る量を、東京都教育委員会と横浜市の芝生管理マニュアルをもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        日本の庭や園庭に多い夏芝の芝刈りは、<Hl>芝が緑を保つ4月から10月</Hl>が時期です。東京都教育委員会の芝生維持管理マニュアルは、夏芝（暖地型芝草）は<Hl>主に4月から10月にかけて緑色を保ち</Hl>、それ以外の季節は地上部が茶色くなって休眠するとしています（出典：<a href={TOKYO_KISO} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「芝草の基礎知識」（PDF）</a>、2026年11月21日確認）。同じマニュアルの年間計画例では、夏芝のみの場合の芝刈り回数を<Hl>4月1回、5月2回、6月3回、7〜9月は各4回、10月2回</Hl>としています（出典：<a href={TOKYO_KEIKAKU} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「年間の維持管理活動の計画例」（PDF）</a>、2026年11月21日確認）。
      </p>
      <p>
        横浜市の校庭・園庭芝生管理マニュアルは、<Hl>概ね10月下旬にその年の最後の芝刈りを行う</Hl>とし、最後の芝刈りから少し伸びたぐらいで冬を迎えるのが理想的としています（出典：<a href={YOKOHAMA_KISETSU} className={A} target="_blank" rel="noopener noreferrer">横浜市「校庭・園庭芝生管理マニュアル」季節ごとの管理の目安（PDF）</a>、2026年11月21日確認）。本記事では、この2つのマニュアルを月ごとに照合して、芝刈りの時期と回数を整理します。
      </p>
    </>
  ),
  conclusionTitle: "芝刈りは4月に始め、夏の7〜9月に回数を最も多くし、10月下旬に最後の芝刈りをします。回数より、伸びすぎる前に刈ることを優先します。",
  conclusionBody: (
    <>
      <p>
        2つのマニュアルを当サイトで月ごとに並べると、次のとおりです。横浜市のマニュアルは、芝刈りでは何よりも頻度が重要で、雨天などで予定どおりにできない場合も、できるだけ間隔が空かないよう計画を立てることが重要としています（出典：<a href={YOKOHAMA_KIHON} className={A} target="_blank" rel="noopener noreferrer">横浜市「校庭・園庭芝生管理マニュアル」芝生管理の基本作業（PDF）</a>、2026年11月21日確認）。軸刈り・刈り残し・刃の切れ味については、東京都教育委員会のマニュアルの芝刈りの項を参照しています（出典：<a href={TOKYO_KANRI} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「芝生の維持管理方法」（PDF）</a>、2026年11月21日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "芝刈りの時期を決める4つの基本",
  basicsIntro: (
    <p>
      以下は、東京都教育委員会と横浜市のマニュアルに書かれている内容を整理したものです。どちらも園庭・校庭の芝生向けの資料のため、家庭の芝生では面積や使い方に合わせて調整してください。
    </p>
  ),
  basicsLabel: "基本",
  basics: [
    {
      title: "夏芝は平均気温12℃が新芽の目安",
      desc: "東京都教育委員会のマニュアルでは、平均気温12℃が新芽の生長と休眠の目安とし、平均気温20℃を超えると生育旺盛、25℃以上で最も旺盛に生長するとしています。芝刈りの回数が夏に最も多くなるのはこのためです。",
    },
    {
      title: "旺盛に伸びる時期は週1回以上",
      desc: "東京都教育委員会のマニュアルでは、芝草が旺盛に生育する時期は週1回以上の芝刈りを実施するとしています。横浜市のマニュアルでは、梅雨明け後は5日に1回（月6回）としています。",
    },
    {
      title: "1回に刈るのは草丈の3分の1まで",
      desc: "横浜市のマニュアルでは、1回で刈れるのは草丈の1/3までで2/3は残すとしています（2/3ルール）。それより低く刈ると、葉の基部にある生長点を刈り取ってしまう可能性があるとしています。",
    },
    {
      title: "秋は刈る高さを上げる",
      desc: "横浜市のマニュアルでは、4月から9月前半までは刈り高を25mm未満、伸びが衰える9月後半から10月下旬までは25mm以上35mm未満としています。",
    },
  ],
  stepsHeading: "1年の芝刈りを進める4つの手順",
  stepsIntro: (
    <p>
      上の表をもとに、家庭の芝生で1年の芝刈りを組み立てる順番です。
    </p>
  ),
  steps: [
    {
      title: "4月、新芽が伸びてきたら刈り揃える",
      desc: "横浜市のマニュアルでは、春の芝刈りは芝生へ均等に日光を当てるため10〜14日に1回以上行い、刈りかすが増えてきたら刈る間隔を短くするとしています。",
    },
    {
      title: "6月から回数を増やす",
      desc: "東京都の計画例では6月3回、7〜9月は各4回です。横浜市は梅雨の期間中は週1回、梅雨明け後は5日に1回としています。雨で予定がずれても、間隔を空けすぎないようにします。",
    },
    {
      title: "9月後半から刈る高さを上げる",
      desc: "横浜市のマニュアルでは、9月になると芝生の生育は葉を伸ばす方から養分を蓄える方へ変化するとし、9月後半からは刈り高を25mm以上35mm未満にしています。",
    },
    {
      title: "10月下旬に最後の芝刈りをする",
      desc: "横浜市のマニュアルでは、概ね10月下旬に最後の芝刈りを行い、気候によって前後するとしています。最後の芝刈りから少し伸びたぐらいで冬を迎えるのが理想的としています。",
    },
  ],
  ngHeading: "芝刈りで避けたいこと",
  ngs: [
    {
      title: "伸びすぎてから一度に短く刈ることは避けます",
      desc: "東京都教育委員会のマニュアルでは、生長点まで刈ってしまった状態を軸刈りと呼び、白っぽく見えるのが特徴としています。軸刈りが確認された場合は刈高の設定を上げるとしています。",
    },
    {
      title: "刈り残しを作ることは避けます",
      desc: "東京都教育委員会のマニュアルでは、刈り残しがあると次の芝刈りでその部分が軸刈りになりやすいとし、芝刈り機の刈り幅を1/2から1/3重ねて刈るとしています。",
    },
    {
      title: "刃が切れない芝刈り機で刈ることは避けます",
      desc: "横浜市のマニュアルでは、芝刈り機の刃が良く研げていないと芝生を傷めるとしています。東京都教育委員会のマニュアルは、刃の切れ味は1年ほどで悪くなるとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>夏に週1回以上の芝刈りが続けられない、面積が広くて手押しの芝刈り機では追いつかない、留守の間に伸びすぎてしまう</Hl>といった場合は、夏の時期だけ業者に頼む方法もあります。依頼するときは、刈る高さと、刈った芝の処分を含むかどうかを確認してください。
    </p>,
    <p key="2">
      芝生の手入れ全体は<Link href="/shibafu-teire/" className={A}>芝生の手入れの基本</Link>、秋冬の手入れは<Link href="/shibafu-aki-fuyu-teire/" className={A}>芝生の秋冬の手入れ</Link>、草刈りの料金の例は<Link href="/kusakari-110ban-kusakari-ryokin/" className={A}>草刈り110番の草刈り・芝刈り料金</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "夏の芝刈りが追いつかないときに相談する",
  ctaText:
    "芝刈りは4月〜10月、夏は週1回以上が目安です。回数を保てない時期だけ業者に任せる方法もあります。",
  faqHeading: "芝刈りの時期のよくある質問",
  faqs: [
    {
      q: "芝刈りはいつから始めますか？",
      a: "東京都教育委員会の年間計画例（夏芝のみの場合）では4月から芝刈りを始めています。同じマニュアルでは、夏芝は平均気温12℃が新芽の目安で、入学式が終わった頃に新芽が出てくるとしています。",
    },
    {
      q: "冬に芝刈りは必要ですか？",
      a: "夏芝は4月から10月以外の季節は地上部が茶色くなって休眠するため、東京都の夏芝のみの計画例では11月〜3月の芝刈り回数の記載はありません。冬も緑を保つ冬芝を重ねた場合は、同じマニュアルの計画例で4月〜10月は各4回、11月2回、3月1回としています。",
    },
    {
      q: "家庭に多いコウライシバやノシバでも同じ時期・回数でよいですか？",
      a: "横浜市のマニュアルでは、ノシバ・コウライシバも夏に旺盛に生育する暖地型芝草なので、ティフトン419と同じように芝刈・施肥・散水を行うとしています。一方で同じマニュアルの芝の種類の説明では、一般に芝刈りや施肥の頻度はティフトン419に比べ少ないと言われているとも記載しています。伸び方を見て、草丈の3分の1を超えて伸びる前に刈る頻度に調整してください。",
    },
    {
      q: "芝生は何センチに刈ればよいですか？",
      a: "横浜市のマニュアル（ティフトン419）では、4月から9月前半は25mm未満、9月後半から10月下旬は25mm以上35mm未満としています。芝の種類によって適した高さは異なるため、1回に刈るのは草丈の3分の1までという考え方とあわせてご判断ください。",
    },
    {
      q: "芝刈りと肥料を同じ日にしてもよいですか？",
      a: "横浜市のマニュアルでは、芝刈りと施肥を同じ日に行う場合は、芝刈りの後に施肥を行い、最後に散水して肥料を洗い落とすとしています。",
    },
  ],
  related: [
    {
      href: "/bermudagrass/",
      label: "バミューダグラスの特徴と管理",
      desc: "刈高と刈り込み頻度の目安",
    },
    {
      href: "/shibafu-teire/",
      label: "芝生の手入れの基本",
      desc: "芝刈り・水やり・年間管理",
    },
    {
      href: "/shibafu-medo/",
      label: "芝生の目土",
      desc: "目土の時期と入れ方",
    },
    {
      href: "/shibafu-aki-fuyu-teire/",
      label: "芝生の秋冬の手入れ",
      desc: "刈り込みを止める時期と冬の管理",
    },
    {
      href: "/shibafu-hiryo/",
      label: "芝生の肥料",
      desc: "時期と量の計算方法",
    },
  ],
};

export default function ShibakariJikiPage() {
  return <KnowArticle data={data} />;
}
