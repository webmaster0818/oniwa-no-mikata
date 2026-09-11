import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/kawasaki/";
const UPDATED = "2026年9月8日";
const UPDATED_ISO = "2026-09-08";

// 後日ASP広告コードに差し替えるためのリンク枠。nullの間は公式サイトへ。
const AFF: Record<string, string | null> = {
  "sentei-110ban": null,
  "bassai-110ban": null,
  "kusakari-110ban": null,
  "smile-garden": null,
  "oniwa-master": null,
};

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】川崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "川崎で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・お庭マスター（剪定1本550円〜）の料金と特徴、川沿いの低地と丘陵の住宅地で違う庭の課題、マンションの専用庭で先に確認する規約と共用部との境目、小さな庭の作業音と落ち葉への配慮まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】川崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "川崎で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。川沿いの低地と丘陵の住宅地で庭の困りごとが違うこと、マンションの専用庭は専用でも自由ではなく規約と共用部との境目を先に確認すること、小さな庭の作業は時間帯と音・飛び散り・落ち葉の出方を決めてから頼むこと、集合住宅や小さな戸建てでは運ぶ経路が作業の条件になることも解説します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

// ---- 掲載データ（data/companies.json・各社レビュー記事の掲載値のみ） ----

interface AreaCompany {
  slug: string;
  num: string;
  catch: string;
  name: string;
  officialUrl: string;
  image: string | null;
  intro: React.ReactNode;
  recommend: string[];
  table: { k: string; v: string; note?: string }[];
  memo: string;
}

const companies: AreaCompany[] = [
  {
    slug: "sentei-110ban",
    num: "1-1",
    catch: "1本2,890円〜・24時間365日受付",
    name: "剪定110番",
    officialUrl: "https://www.sentei110.com/",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国4,000社以上の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、川崎市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。専用庭や小さな庭の木を1本だけ、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "専用庭や小さな庭の木を1本単位で相談したい人",
      "庭木1本からでも気軽に頼みたい人",
      "見積もり後の追加料金なしの明朗会計を重視する人",
      "剪定と合わせて伐採・草刈り・消毒も相談したい人",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "2,890円〜", note: "樹種・高さで変動。カシ2,300円／モミジ3,000円などの樹種別目安あり" },
      { k: "出張費", v: "3,000円", note: "別途必要" },
      { k: "受付時間", v: "24時間365日" },
      { k: "見積もり", v: "現地調査・見積もり無料・追加料金なし" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "当サイトのレビュー記事作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-2",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.kusakari110.com/",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>面積で費用の見当がつく</Hl>
        ため、専用庭や家のまわりの通路など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "小さな庭や通路の草を範囲を決めて片付けたい人",
      "面積で費用の見当をつけたい人",
      "草刈り後の防草シート施工まで相談したい人",
      "定期契約で雑草管理の手間をなくしたい人",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり600円〜", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトのレビュー記事作成時に確認しています。機械作業が中心のため狭い場所は苦手な場合があり、夏場の繁忙期は混み合います。面積と草の状態で総額が変わるため、見積もりで確認しましょう。",
  },
  {
    slug: "bassai-110ban",
    num: "1-3",
    catch: "伐採・抜根専門・処分まで一括",
    name: "伐採110番",
    officialUrl: "https://www.bassai110.com/",
    image: "/images/bassai-110ban-features.png",
    intro: (
      <>
        伐採110番は、伐採・抜根に特化した専門サービスです。庭木の伐採から
        <Hl>大木・高木・危険木の特殊伐採</Hl>
        、重機を使った大規模作業まで対応し、
        <Hl>伐採後の木材処分まで一括で任せられる</Hl>
        のが特徴です。車を近くに停められない住宅地や、共用廊下を通して運び出す必要がある集合住宅でも、木を切り分けて搬出する方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "隣家に近い場所で大きくなりすぎた木を整理したい人",
      "運び出す経路が限られる家で搬出方法から相談したい人",
      "伐採した木材の処分まで一括で頼みたい人",
      "抜根して庭を作り替えたい人",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトのレビュー記事作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。",
  },
  {
    slug: "smile-garden",
    num: "1-4",
    catch: "定額制の年間管理・写真付き報告書",
    name: "smileガーデン",
    officialUrl: "https://www.smile-garden.jp/",
    image: "/images/smile-garden-features.png",
    intro: (
      <>
        smileガーデンは、全国展開のフランチャイズ型お庭メンテナンスサービスです。公式掲載の実績値として
        <Hl>年間3万件・リピート95%以上・満足度4.1</Hl>
        をうたい、<Hl>定額制の年間管理プラン</Hl>
        で剪定・消毒・施肥をセットで任せられます。隣家との距離が近く、伸びるたびに手を入れる必要がある庭では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "隣家に面した木を一定の状態に保ちたい人",
      "一年を通して庭の手入れを定額で任せたい人",
      "剪定・消毒・施肥をセットでまとめたい人",
      "留守中の作業でも報告書で仕上がりを確認したい人",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。川崎市内の対応可否とプラン内容は見積もり時に確認してください。",
  },
  {
    slug: "oniwa-master",
    num: "1-5",
    catch: "剪定1本550円〜・関東エリア中心",
    name: "お庭マスター",
    officialUrl: "https://www.oniwa-master.com/",
    image: "/images/oniwa-master-features.png",
    intro: (
      <>
        お庭マスターは、関東・関西・中部エリアを中心に展開する職人品質のマッチング型サービスで、川崎を含む関東は主力エリアです。
        <Hl>経験10年以上の職人が対応</Hl>
        し、中間マージンをカットすることで
        <Hl>剪定1本550円〜・伐採1本3,300円〜</Hl>
        という手頃な価格を実現しています。見積もり・出張は無料で、
        <Hl>施工後の保証</Hl>
        がある点も安心材料です。造園デザインの相談にも対応します。
      </>
    ),
    recommend: [
      "経験豊富な職人に手頃な価格で頼みたい人",
      "施工後の保証があるサービスを選びたい人",
      "剪定だけでなく庭のデザインまで相談したい人",
      "川崎・関東エリアで業者を探している人",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心", note: "川崎での対応可否は見積もり時にご確認ください" },
    ],
    memo:
      "剪定1本550円〜・伐採1本3,300円〜・見積もり出張無料・施工後保証あり・対応エリアは関東・関西・中部中心であることを当サイトのレビュー記事作成時に確認しています。最低価格は小さな低木などの場合の金額のため、樹種・高さによる総額を見積もりで確認しましょう。",
  },
];

// 比較表は7社全部（くらしのマーケット・ダスキン含む）
const compareRows: {
  slug: string;
  name: string;
  type: string;
  price: string;
  point: string;
}[] = [
  {
    slug: "sentei-110ban",
    name: "剪定110番",
    type: "マッチング型",
    price: "剪定1本2,890円〜（出張費3,000円別途）",
    point: "24時間365日受付・見積もり後の追加料金なし",
  },
  {
    slug: "kusakari-110ban",
    name: "草刈り110番",
    type: "マッチング型",
    price: "草刈り1平米600円〜",
    point: "防草シート施工・定期メンテナンスプランあり",
  },
  {
    slug: "bassai-110ban",
    name: "伐採110番",
    type: "マッチング型",
    price: "木の高さ・本数で変動（見積もり無料）",
    point: "伐採・抜根専門・処分まで一括対応",
  },
  {
    slug: "smile-garden",
    name: "smileガーデン",
    type: "フランチャイズ型",
    price: "草刈り2〜3万円台・剪定3〜4万円台（相場）",
    point: "定額制の年間管理プラン・写真付き作業報告書",
  },
  {
    slug: "oniwa-master",
    name: "お庭マスター",
    type: "マッチング型",
    price: "剪定1本550円〜・伐採1本3,300円〜",
    point: "経験10年以上の職人・施工後の保証あり",
  },
  {
    slug: "kurashi-no-market",
    name: "くらしのマーケット",
    type: "プラットフォーム型",
    price: "出店者ごとに事前明示",
    point: "口コミ・評価で比較・トラブル時の費用補償制度",
  },
  {
    slug: "duskin",
    name: "ダスキン",
    type: "直営型",
    price: "やや高めの傾向（見積もりで確認）",
    point: "全国約600拠点・年間管理プラン・資格を持つ専門スタッフ",
  },
];

const steps = [
  {
    t: "① 庭の写真に「隣家との距離」と「運ぶ経路」を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭がどんな環境にあるかを写真で伝えましょう。隣家の窓や塀との距離、庭から道路までの通路、車を停められそうな場所が写っていると、作業のしかたと搬出の段取りが伝わりやすくなります。マンションの専用庭なら、庭に出入りする経路（室内を通るのか、共用部から入れるのか）も先に伝えておくと、見積もりの精度が上がります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。運び出す距離が長い場合や、共用部を通す場合はその手間が金額に含まれるかも確認しましょう。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料なので、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "マンションの専用庭は、区分所有者が専用で使える場所であっても、管理規約や使用細則で植えてよいもの・切ってよいもの・業者を入れる手続きが決まっていることがあります。共用部の植栽は管理組合の管轄です。戸建てでも、隣地との境界がはっきりしない場所の木や、塀の所有関係が分からない場合は、土地家屋調査士などの専門家に相談する範囲が絡みます。庭業者に頼む前に、手を入れてよい範囲を確かめておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。狭い場所や集合住宅での作業に慣れているか、作業時間帯の相談に応じてくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "川崎で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。専用庭のシンボルツリー1本だけ整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "マンションの専用庭の木を、自分の判断で業者に切ってもらってよいですか？",
    a: "まず管理規約と使用細則を確認してください。専用庭は区分所有者が専用で使える場所ですが、多くの場合は共用部分を専用使用している扱いで、植栽の変更や伐採、業者の立ち入りに管理組合への届け出や承認が必要と定められていることがあります。専用庭と共用部の植栽の境目がはっきりしない場合も、管理組合や管理会社に確認するのが確実です。確認が済んでから業者に依頼すると、後からのトラブルを避けられます。",
  },
  {
    q: "隣の家との距離が近くて、作業の音や飛び散りが心配です。",
    a: "見積もりの段階で、作業の時間帯、電動工具を使う作業の有無、枝葉や刈り草が隣地に飛び散らないための養生について相談しておきましょう。作業日が決まったら、隣家にひと声かけておくと安心です。生垣や隣地に面した木の作業は、隣家側にも枝葉が落ちる可能性があるため、作業後の片付けの範囲も確認しておくとよいでしょう。当サイトの隣家への枝の越境と対処の基本の記事に、近隣との考え方をまとめています。",
  },
  {
    q: "川沿いの低い土地で、雨のあと庭がなかなか乾きません。",
    a: "地面が乾きにくい庭では、土がむき出しの場所から見直すのが基本です。水がたまる場所を見つけて、その一角の土の状態を確かめ、雨水の出口である排水桝が土や落ち葉でふさがれていないかを点検します。植える木や草は、湿った場所に合うものを選ぶ考え方もあります。原因が地面の下にある場合は、掘る作業や土の入れ替えが必要になることがあるため、現地を見てもらったうえで判断しましょう。当サイトの庭の水はけ改善の考え方の記事が参考になります。",
  },
  {
    q: "家の前に作業車を停める場所がありません。それでも頼めますか？",
    a: "頼めます。ただし、車を離れた場所に停めて機材や枝を運ぶ距離が長くなるほど手間がかかり、金額や作業方法に影響します。見積もりの段階で、車を停められそうな場所（コインパーキングや来客用駐車場の有無）、庭までの経路、集合住宅ならエレベーターや共用廊下を使えるかどうかを伝えておきましょう。伐採110番は重機が入れない立地でも木を切り分けて搬出する方法を含めて相談できます。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。集合住宅では、ごみ置き場に出せるものの範囲が管理規約で決まっていることもあります。",
  },
];

// 強調ハイライト（オレンジの下線マーカー）
function Hl({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-bold bg-[linear-gradient(transparent_65%,rgba(255,140,0,0.28)_65%)]">
      {children}
    </strong>
  );
}

// h2（オレンジの左ボーダー：既存ページの見出しスタイルを踏襲）
function H2({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-20 mt-14 mb-6 text-2xl md:text-3xl font-bold border-l-4 border-[#FF8C00] pl-4 leading-snug text-[#33402f]"
    >
      {num}｜{children}
    </h2>
  );
}

// h4（左に緑の縦バー）
function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative pl-4 mt-8 mb-3 text-base md:text-lg font-bold text-[#33402f]">
      <span
        className="absolute left-0 top-0 bottom-0 w-[4px] rounded-[2px]"
        style={{ background: "linear-gradient(180deg, #2D7F3E 0%, #4A9E5C 100%)" }}
      />
      {children}
    </h4>
  );
}

export default function AreaKawasakiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】川崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "川崎で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-08T00:00:00+09:00",
    dateModified: `${UPDATED_ISO}T00:00:00+09:00`,
    author: { "@type": "Organization", name: "お庭のミカタ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "お庭のミカタ", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${PATH}` },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "お庭のミカタ", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "川崎の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#kawasaki5",
      label: "1｜川崎で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "川崎の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#teichi", label: "2｜川沿いの低地と丘陵の住宅地では、庭の困りごとが違う" },
    { href: "#senyoniwa", label: "3｜マンションの専用庭は「専用」でも自由ではない——規約と共用部との境目を先に確認" },
    { href: "#oto", label: "4｜小さな庭の作業は「時間帯」と「音・飛び散り・落ち葉の出方」を決めてから頼む" },
    { href: "#hakobu", label: "5｜集合住宅・小さな戸建てでは「運ぶ経路」が作業の条件になる" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜川崎の庭業者でよくある質問" },
    { href: "#matome", label: "8｜まとめ" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white text-[#33402f]">
        <div className="mx-auto max-w-4xl px-4 pt-4 pb-12 md:pb-16">
          {/* パンくず */}
          <nav aria-label="パンくず" className="text-xs text-[#6b7563] mb-4">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link href="/" className="hover:underline">お庭のミカタ</Link>
              </li>
              <li>/</li>
              <li className="text-[#33402f]">川崎の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】川崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
            </h1>
            <div>
              <span className="inline-block rounded-full bg-[#2D7F3E] px-3 py-1 text-xs font-bold tracking-wide text-white">
                エリア別 庭業者まとめ
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-wide text-[#6b7563]">
              <span>
                更新日：<time dateTime={UPDATED_ISO}>{UPDATED}</time>
              </span>
              <span>
                ※本記事にはアフィリエイト広告（PR）を含む場合があります。詳しくは
                <Link href="/content-policy/" className="underline hover:text-[#2D7F3E]">
                  コンテンツ制作ポリシー
                </Link>
                をご覧ください。
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {["川崎", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[#d6e4d0] bg-white px-3 py-1.5 text-xs md:text-sm font-bold tracking-wide text-[#33402f] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]"
                >
                  {t}
                </li>
              ))}
            </ul>
            <figure className="overflow-hidden rounded-2xl">
              <Image
                src="/images/kv-top.jpg"
                alt="川崎の剪定・伐採・草刈り業者の比較"
                width={1024}
                height={1024}
                className="w-full h-52 md:h-72 object-cover"
                priority
              />
            </figure>
          </header>

          {/* 導入文 */}
          <div className="mt-6 leading-loose text-[#4a5443]">
            <p className="mb-4">
              「マンションの専用庭の木が伸びてきたけれど、勝手に切ってよいのか分からない」「隣の家との距離が近くて、作業の音や飛び散りが気になる」「家の前に作業車を停める場所がない」——川崎で庭業者を探すきっかけには、集合住宅と戸建てが混ざり合い、隣家との距離が近い住宅地ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、川崎市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「川沿いの低地と丘陵の住宅地で庭の困りごとが違うこと」「マンションの専用庭は規約と共用部との境目を先に確認すること」「小さな庭の作業は時間帯と音・飛び散り・落ち葉の出方を決めてから頼むこと」「集合住宅や小さな戸建てでは運ぶ経路が作業の条件になること」といった、川崎で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
            </p>
          </div>

          {/* Contents 目次ボックス */}
          <nav
            aria-label="目次"
            className="mt-10 grid gap-4 rounded-2xl border border-[#d6e4d0] bg-[#f4f9f1] px-5 py-8 md:gap-6 md:px-12 md:py-10"
          >
            <div className="text-2xl md:text-[30px] font-bold">
              <span className="bg-gradient-to-r from-[#2D7F3E] to-[#4A9E5C] bg-clip-text text-transparent">
                Contents
              </span>
            </div>
            <ol className="grid gap-2">
              {toc.map((item) => (
                <li key={item.href} className="grid gap-2">
                  <a
                    href={item.href}
                    className="w-fit text-sm md:text-base font-bold tracking-wide leading-relaxed text-[#2D7F3E] hover:underline"
                  >
                    {item.label}
                  </a>
                  {item.sub && (
                    <ol className="grid gap-2 pl-4 md:pl-8">
                      {item.sub.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            className="w-fit text-xs md:text-sm tracking-wide leading-relaxed text-[#4a5443] hover:underline"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* 1｜5選 */}
          <H2 id="kawasaki5" num="1">川崎で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            川崎市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月8日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、口コミで地域の業者を選べるくらしのマーケットと、大手直営のダスキンは、比較表に掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            川崎の庭業者を一覧表で徹底比較
            <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-[#2D7F3E] to-[#4A9E5C]" />
          </h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#2D7F3E] text-white">
                  <th className="border border-[#d6e4d0] px-3 py-2 whitespace-nowrap text-left">業者名</th>
                  <th className="border border-[#d6e4d0] px-3 py-2 whitespace-nowrap text-left">タイプ</th>
                  <th className="border border-[#d6e4d0] px-3 py-2 whitespace-nowrap text-left">料金の目安</th>
                  <th className="border border-[#d6e4d0] px-3 py-2 whitespace-nowrap text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={r.slug} className={i % 2 === 1 ? "bg-[#f4f9f1]" : "bg-white"}>
                    <td className="border border-[#d6e4d0] px-3 py-2 font-bold whitespace-nowrap">
                      <Link href={`/agents/${r.slug}/`} className="text-[#2D7F3E] underline">
                        {r.name}
                      </Link>
                    </td>
                    <td className="border border-[#d6e4d0] px-3 py-2 whitespace-nowrap">{r.type}</td>
                    <td className="border border-[#d6e4d0] px-3 py-2">{r.price}</td>
                    <td className="border border-[#d6e4d0] px-3 py-2">{r.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6b7563] mb-10">
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月8日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東・関西・中部エリア中心のサービスのため、川崎での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
          </p>

          {/* 各社カード */}
          {companies.map((c) => (
            <section key={c.slug} id={c.slug} className="scroll-mt-20 mb-16">
              <h3 className="relative pb-3 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold leading-snug text-[#33402f]">
                {c.num}｜【{c.catch}】{c.name}
                <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-[#2D7F3E] to-[#4A9E5C]" />
              </h3>

              {c.image ? (
                <a
                  href={AFF[c.slug] ?? c.officialUrl}
                  rel="sponsored nofollow noopener"
                  target="_blank"
                  className="block mb-5 overflow-hidden rounded-2xl border border-[#d6e4d0] transition-opacity hover:opacity-90"
                >
                  <Image
                    src={c.image}
                    alt={`${c.name}の特徴`}
                    width={1200}
                    height={500}
                    className="w-full h-auto"
                  />
                </a>
              ) : (
                <p className="mb-5">
                  <a
                    href={AFF[c.slug] ?? c.officialUrl}
                    rel="sponsored nofollow noopener"
                    target="_blank"
                    className="text-[#2D7F3E] underline font-bold"
                  >
                    {c.name} 公式サイト
                  </a>
                </p>
              )}

              <p className="leading-loose text-[#4a5443]">{c.intro}</p>

              <H4>こんな人におすすめ</H4>
              <div className="rounded-2xl bg-[#f1f9ee] border border-[#bfe0b8] px-5 py-4 md:px-6">
                <ul className="text-sm leading-[1.9] tracking-wide text-[#4a5443]">
                  {c.recommend.map((r) => (
                    <li key={r}>・{r}</li>
                  ))}
                </ul>
              </div>

              <H4>料金／サービス内容</H4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {c.table.map((row, i) => (
                      <tr key={row.k} className={i % 2 === 1 ? "bg-[#f4f9f1]" : "bg-white"}>
                        <th className="border border-[#d6e4d0] px-3 py-2 whitespace-nowrap bg-[#EFF7EC] text-left font-bold w-36 md:w-44">
                          {row.k}
                        </th>
                        <td className="border border-[#d6e4d0] px-3 py-2">
                          <span className="font-bold">{row.v}</span>
                          {row.note && (
                            <span className="block text-xs text-[#6b7563] mt-1">{row.note}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <H4>編集部の確認メモ</H4>
              <div className="rounded-2xl border border-[#d6e4d0] bg-white px-5 py-4 md:px-6">
                <p className="text-sm leading-relaxed text-[#4a5443]">{c.memo}</p>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <a
                  href={AFF[c.slug] ?? c.officialUrl}
                  rel="sponsored nofollow noopener"
                  target="_blank"
                  className="block rounded-full bg-[#FF8C00] hover:bg-[#E07A00] transition-colors px-4 py-4 text-center text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(255,140,0,0.3)]"
                >
                  {c.name}の公式サイトを見る
                </a>
                <Link
                  href={`/agents/${c.slug}/`}
                  className="block rounded-full bg-[#2D7F3E] hover:bg-[#1E5C2B] transition-colors px-4 py-4 text-center text-[15px] font-bold text-white"
                >
                  {c.name}の詳しい評判を見る
                </Link>
              </div>
            </section>
          ))}

          {/* 2 */}
          <H2 id="teichi" num="2">川沿いの低地と丘陵の住宅地では、庭の困りごとが違う</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            川崎は、大きな川に沿った平らな低地と、内陸側に広がる丘陵の住宅地とで、地面の性質がかなり違います。同じ市内でも、<Hl>低地の庭では「乾きにくさ」、丘陵の庭では「高低差」が困りごとの中心になりやすい</Hl>という違いがあります。業者に頼むときも、自分の庭がどちらの性質を持っているかを意識して伝えると、話が早くなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            川沿いの低地の庭では、雨のあとに水がなかなか引かない、いつまでもぬかるむ、土がむき出しの場所に苔が広がる、といったことが起きやすくなります。見直す順番は、<Hl>水がたまる場所を見つけて、その一角の土の状態と雨水の出口を確かめること</Hl>です。原因の切り分け方は<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>、自分で見られる排水桝の点検は<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">庭の排水桝の点検の基本</Link>にまとめています。湿った場所には湿った場所に合う植物を選ぶ考え方もあり、<Link href="/hikage-niwa-shokusai/" className="text-[#2D7F3E] underline">北向き・日陰の庭の植栽の考え方</Link>が参考になります。地面の下に原因がある場合は、掘る作業や土の入れ替えが必要になることがあり、給排水の配管に関わる工事は指定の工事事業者の領域ですから、現地を見てもらったうえで担当を切り分けましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            丘陵の住宅地の庭では、道路と庭に高低差がある、庭が擁壁の上にある、階段でしか庭に入れない、といった条件が作業の進め方を左右します。<Hl>木を切ること自体より、切ったものを下ろして運ぶ手間が費用を左右する</Hl>ことが多く、見積もりの段階で庭までの経路を写真で伝えることが大切です。擁壁や法面そのものにひび・ふくらみ・ずれといった変化がある場合は、庭業者ではなく土木や建築の専門業者に見てもらう範囲で、根が構造物に与える影響の考え方は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>にまとめています。大きくなりすぎた木を高低差のある庭で整理したい場合は、伐採110番のように伐採後の木材処分まで一括対応をうたうサービスに、搬出方法を含めて相談しましょう。
          </p>

          {/* 3 */}
          <H2 id="senyoniwa" num="3">マンションの専用庭は「専用」でも自由ではない——規約と共用部との境目を先に確認</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            川崎には、一階に専用庭のついたマンションが多くあります。専用庭は、その住戸の人だけが使える庭ですが、<Hl>多くの場合は共用部分を専用で使わせてもらっている扱いで、所有しているわけではありません</Hl>。そのため、植えてよいもの、切ってよいもの、業者を入れるときの手続きが、管理規約や使用細則で決まっていることがあります。庭木が伸びてきたからといって自分の判断で伐採してしまうと、後から管理組合との間で問題になることがあります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認したいのは、<Hl>手入れの範囲と、専用庭と共用部の植栽との境目</Hl>です。専用庭の中の草取りや低木の刈り込みは住戸側の負担とされていることが多い一方、庭の外周に植えられた生垣や高木は共用部の植栽として管理組合が管理していることがあります。境目が分かりにくい場合は、管理組合や管理会社に確認するのが確実です。目隠しのために木を植えたい、フェンスを立てたいといった変更も、規約で認められる範囲が決まっていることがあるため、<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較</Link>や<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>を参考に希望を整理したうえで、先に規約を確かめましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認が済んだら、業者に頼む段取りに移ります。専用庭の作業では、<Hl>庭への出入りの経路と、共用部を使う場合の手続き</Hl>が戸建てと違う点です。室内を通って庭に入るのか、共用部から直接入れるのかで、養生や搬出の方法が変わります。管理組合への届け出が必要な場合は、作業日の前に済ませておきましょう。専用庭の木を1本単位で相談するなら、剪定110番は剪定1本2,890円〜（出張費3,000円別途）、お庭マスターは剪定1本550円〜の掲載料金で、いずれも見積もりは無料です。限られた広さの専用庭を使いやすく整える考え方は<Link href="/semai-niwa-layout/" className="text-[#2D7F3E] underline">狭い庭のレイアウトの考え方</Link>、手間のかからない木への入れ替えは<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>もあわせてご覧ください。
          </p>

          {/* 4 */}
          <H2 id="oto" num="4">小さな庭の作業は「時間帯」と「音・飛び散り・落ち葉の出方」を決めてから頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            隣家との距離が近い住宅地では、庭の作業がそのまま隣家の暮らしに影響します。<Hl>電動工具の音、刈った草や枝葉の飛び散り、木くずや落ち葉の風による移動</Hl>は、作業する側が思う以上に隣家には気になるものです。小さな庭ほど隣家の窓や塀が近く、作業のしかたによっては隣地に枝葉が落ちてしまうこともあります。頼む前に、こうした「出方」をどうするかを決めておくと、当日のトラブルを避けられます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見積もりの段階で相談したいのは、まず<Hl>作業の時間帯</Hl>です。平日か休日か、朝早くや夕方を避けるかは、隣家の在宅状況によって望ましい時間が変わります。次に、<Hl>電動工具を使う作業がどれくらいあるか</Hl>です。生垣の刈り込みや草刈りは機械の音が続く作業で、手作業で済む範囲と機械が必要な範囲を分けて確認しておくと、作業時間の見当もつきます。そして、<Hl>隣地への飛び散りを防ぐ養生と、作業後の片付けの範囲</Hl>です。隣家側に落ちた枝葉をどうするかまで含めて決めておきましょう。作業日が決まったら、隣家にひと声かけておくと安心です。近隣との考え方は<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            毎年の落ち葉が隣家に流れてしまう庭では、<Hl>落ちる葉そのものを減らす</Hl>方向で考える方法もあります。隣地側に張り出した枝は、その部分だけでも枝を戻す剪定を相談する価値があります。落ち葉の集め方と処分の考え方は<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策と掃除の基本</Link>、木を入れ替える機会があるなら<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>が参考になります。隣家に面した木を一定の状態に保ちたいなら、smileガーデンの定額制の年間管理プランのように回数と時期を決めて任せる方法があり、留守中の作業でも写真付きの作業報告書で仕上がりを確認できます。生垣の刈り込みの時期と頻度は<Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの基礎知識</Link>をご覧ください。
          </p>

          {/* 5 */}
          <H2 id="hakobu" num="5">集合住宅・小さな戸建てでは「運ぶ経路」が作業の条件になる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            川崎の住宅地では、家の前に作業車を停められない、庭が建物の裏側にあって通路が狭い、集合住宅で共用廊下やエレベーターを通さないと外に出せない、といった条件が珍しくありません。<Hl>切った枝や幹、刈った草をどこを通して、どこまで運ぶのか</Hl>は、そのまま作業の手間と費用に反映されます。見積もりの精度を上げるには、この経路を先に伝えることが欠かせません。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            戸建てなら、<Hl>車を停められそうな場所、門や通路の幅、隣家との間の通路が使えるかどうか</Hl>を写真で伝えましょう。近くにコインパーキングしかない場合は、その旨も先に伝えておくと、駐車費用の扱いを含めて見積もりに反映してもらえます。集合住宅の専用庭なら、<Hl>来客用駐車場の有無、エレベーターの使用可否、共用廊下を通すときの養生</Hl>が確認事項になります。共用部の使い方は管理規約で決まっていることがあるため、管理組合や管理会社への確認を先に済ませておきましょう。見積もりの読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>、頼む前の準備は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">庭木の剪定を頼む前の準備</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            運ぶ経路が限られる家では、<Hl>そもそも運び出す量を減らす</Hl>という発想も有効です。大きくなりすぎてから一度に切ると搬出の負担が大きくなりますが、毎年少しずつ透かして大きさを保てば、一回あたりに出る枝の量は抑えられます。伐採110番は重機が入れない立地でも木を切り分けて搬出する方法を含めて相談でき、草刈り110番は1平米600円〜の掲載料金で範囲を決めて頼めます。刈り草や剪定枝の処分の選択肢は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>、庭の中で枝の量を減らす道具の考え方は<Link href="/garden-shredder-katsuyo/" className="text-[#2D7F3E] underline">ガーデンシュレッダーの活用</Link>にまとめています。集合住宅では、ごみ置き場に出せるものの範囲が管理規約で決まっていることもあるため、作業と一緒に処分まで頼んでしまうほうが結果的に楽なことがあります。
          </p>

          {/* 6｜選び方 */}
          <H2 id="erabikata" num="6">失敗しない庭業者の選び方4ステップ</H2>
          <p className="leading-loose mb-6 text-[#4a5443]">
            庭業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。「早く片付けたいから」と最初の1社に即決する前に、数分の確認でトラブルの多くは防げます。
          </p>
          {steps.map((s) => (
            <section key={s.t} className="mb-8">
              <h3 className="relative pb-3 mb-4 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]">
                {s.t}
                <span className="absolute bottom-[-4px] left-0 h-[4px] w-24 bg-gradient-to-r from-[#2D7F3E] to-[#4A9E5C]" />
              </h3>
              <p className="leading-loose text-sm md:text-base text-[#4a5443]">{s.b}</p>
            </section>
          ))}

          {/* 7｜FAQ */}
          <H2 id="faq" num="7">川崎の庭業者でよくある質問</H2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#d6e4d0] overflow-hidden">
                <p className="flex gap-3 px-5 py-4 font-bold text-[#33402f] bg-[#f1f9ee]">
                  <span className="text-[#2D7F3E] shrink-0">Q.</span>
                  {f.q}
                </p>
                <p className="flex gap-3 px-5 py-4 text-sm leading-relaxed text-[#4a5443]">
                  <span className="text-[#FF8C00] font-bold shrink-0">A.</span>
                  <span>{f.a}</span>
                </p>
              </div>
            ))}
          </div>

          {/* 8｜まとめ */}
          <H2 id="matome" num="8">まとめ</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            川崎で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。専用庭や小さな庭の木を1本単位で相談するなら樹種別の目安がある剪定110番や1本単位の料金体系のお庭マスター、小さな庭や通路の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、運ぶ経路が限られる家で大きくなりすぎた木を整理するなら処分まで一括の伐採110番、隣家に面した木を定期的に整えるならsmileガーデン、というように、目的によって向いているサービスは変わります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            集合住宅と戸建てが混ざり合い、隣家との距離が近い川崎の住宅地では、作業そのものより「その前の確認」が結果を左右します。低地の庭は乾きにくさ、丘陵の庭は高低差という性質を意識して伝えること、専用庭は規約と共用部との境目を先に確かめること、作業の時間帯と音・飛び散り・落ち葉の出方を決めてから頼むこと、運ぶ経路と駐車を写真で伝えること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
          </p>
          <div className="rounded-2xl bg-[#2D7F3E] text-white p-6 text-center">
            <p className="font-bold text-lg mb-2">お庭のお手入れでお困りの方へ</p>
            <p className="text-green-50 text-sm mb-4">
              各社の詳しい評判・料金のレビューを比較して、納得できる業者を選びましょう。
            </p>
            <Link
              href="/agents/"
              className="inline-block rounded-lg bg-[#FF8C00] hover:bg-[#e67e00] px-8 py-3 font-bold text-white"
            >
              庭業者の一覧・比較を見る
            </Link>
          </div>

          {/* タグ */}
          <div className="mt-12">
            <p className="text-sm font-bold text-[#6b7563] mb-3">タグ</p>
            <ul className="flex flex-wrap gap-2">
              {["川崎", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-[#d6e4d0] bg-white px-3 py-1.5 text-xs md:text-sm font-bold tracking-wide text-[#33402f] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* 他エリア */}
          <div className="mt-10">
            <p className="text-sm font-bold text-[#6b7563] mb-3">他エリアの庭業者まとめ</p>
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                { href: "/area/tokyo/", label: "東京の庭業者おすすめ5選" },
                { href: "/area/osaka/", label: "大阪の庭業者おすすめ5選" },
                { href: "/area/nagoya/", label: "名古屋の庭業者おすすめ5選" },
                { href: "/area/yokohama/", label: "横浜の庭業者おすすめ5選" },
                { href: "/area/fukuoka/", label: "福岡の庭業者おすすめ5選" },
                { href: "/area/sapporo/", label: "札幌の庭業者おすすめ5選" },
                { href: "/area/sendai/", label: "仙台の庭業者おすすめ5選" },
                { href: "/area/kyoto/", label: "京都の庭業者おすすめ5選" },
                { href: "/area/kobe/", label: "神戸の庭業者おすすめ5選" },
                { href: "/area/saitama/", label: "さいたまの庭業者おすすめ5選" },
                { href: "/area/chiba/", label: "千葉の庭業者おすすめ5選" },
                { href: "/area/hiroshima/", label: "広島の庭業者おすすめ5選" },
                { href: "/area/kitakyushu/", label: "北九州の庭業者おすすめ5選" },
                { href: "/area/shizuoka/", label: "静岡の庭業者おすすめ5選" },
                { href: "/area/okayama/", label: "岡山の庭業者おすすめ5選" },
                { href: "/area/kumamoto/", label: "熊本の庭業者おすすめ5選" },
                { href: "/area/niigata/", label: "新潟の庭業者おすすめ5選" },
                { href: "/area/utsunomiya/", label: "宇都宮の庭業者おすすめ5選" },
                { href: "/area/kagoshima/", label: "鹿児島の庭業者おすすめ5選" },
                { href: "/area/matsuyama/", label: "松山の庭業者おすすめ5選" },
                { href: "/area/naha/", label: "那覇の庭業者おすすめ5選" },
                { href: "/area/takamatsu/", label: "高松の庭業者おすすめ5選" },
                { href: "/area/nagano/", label: "長野の庭業者おすすめ5選" },
                { href: "/area/gifu/", label: "岐阜の庭業者おすすめ5選" },
                { href: "/area/mito/", label: "水戸の庭業者おすすめ5選" },
                { href: "/area/maebashi/", label: "前橋の庭業者おすすめ5選" },
                { href: "/area/toyama/", label: "富山の庭業者おすすめ5選" },
                { href: "/area/nagasaki/", label: "長崎の庭業者おすすめ5選" },
                { href: "/area/wakayama/", label: "和歌山の庭業者おすすめ5選" },
                { href: "/area/kochi/", label: "高知の庭業者おすすめ5選" },
                { href: "/area/saga/", label: "佐賀の庭業者おすすめ5選" },
                { href: "/area/aomori/", label: "青森の庭業者おすすめ5選" },
                { href: "/area/akita/", label: "秋田の庭業者おすすめ5選" },
                { href: "/area/yamagata/", label: "山形の庭業者おすすめ5選" },
                { href: "/area/fukushima/", label: "福島の庭業者おすすめ5選" },
                { href: "/area/tokushima/", label: "徳島の庭業者おすすめ5選" },
                { href: "/area/kanazawa/", label: "金沢の庭業者おすすめ5選" },
                { href: "/area/morioka/", label: "盛岡の庭業者おすすめ5選" },
                { href: "/area/nara/", label: "奈良の庭業者おすすめ5選" },
                { href: "/area/tottori/", label: "鳥取の庭業者おすすめ5選" },
                { href: "/area/miyazaki/", label: "宮崎の庭業者おすすめ5選" },
                { href: "/area/oita/", label: "大分の庭業者おすすめ5選" },
                { href: "/area/kofu/", label: "甲府の庭業者おすすめ5選" },
                { href: "/area/fukui/", label: "福井の庭業者おすすめ5選" },
                { href: "/area/otsu/", label: "大津の庭業者おすすめ5選" },
                { href: "/area/tsu/", label: "津の庭業者おすすめ5選" },
                { href: "/area/matsue/", label: "松江の庭業者おすすめ5選" },
                { href: "/area/yamaguchi/", label: "山口の庭業者おすすめ5選" },
                { href: "/area/hamamatsu/", label: "浜松の庭業者おすすめ5選" },
                { href: "/area/himeji/", label: "姫路の庭業者おすすめ5選" },
                { href: "/area/kurashiki/", label: "倉敷の庭業者おすすめ5選" },
                { href: "/area/sagamihara/", label: "相模原の庭業者おすすめ5選" },
                { href: "/area/sakai/", label: "堺の庭業者おすすめ5選" },
                { href: "/area/takasaki/", label: "高崎の庭業者おすすめ5選" },
                { href: "/area/higashiosaka/", label: "東大阪の庭業者おすすめ5選" },
                { href: "/area/funabashi/", label: "船橋の庭業者おすすめ5選" },
                { href: "/area/hachioji/", label: "八王子の庭業者おすすめ5選" },
                { href: "/area/kawaguchi/", label: "川口の庭業者おすすめ5選" },
                { href: "/area/amagasaki/", label: "尼崎の庭業者おすすめ5選" },
                { href: "/area/fujisawa/", label: "藤沢の庭業者おすすめ5選" },
                { href: "/area/matsudo/", label: "松戸の庭業者おすすめ5選" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-xl border border-[#d6e4d0] bg-white px-4 py-3 text-sm font-bold text-[#2D7F3E] hover:bg-[#f4f9f1] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 関連記事 */}
          <div className="mt-10">
            <p className="text-sm font-bold text-[#6b7563] mb-3">関連記事</p>
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                { href: "/agents/", label: "庭・剪定業者の一覧・比較" },
                { href: "/agents/sentei-110ban/", label: "剪定110番の口コミ・評判" },
                { href: "/agents/oniwa-master/", label: "お庭マスターの口コミ・評判" },
                { href: "/eda-ekkyo/", label: "隣家への枝の越境と対処の基本" },
                { href: "/niwa-mizuhake/", label: "庭の水はけ改善の考え方" },
                { href: "/semai-niwa-layout/", label: "狭い庭のレイアウトの考え方" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-xl border border-[#d6e4d0] bg-white px-4 py-3 text-sm font-bold text-[#2D7F3E] hover:bg-[#f4f9f1] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
