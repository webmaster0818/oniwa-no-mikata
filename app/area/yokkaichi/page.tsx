import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/yokkaichi/";
const UPDATED = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";

// 後日ASP広告コードに差し替えるためのリンク枠。nullの間は公式サイトへ。
const AFF: Record<string, string | null> = {
  "sentei-110ban": null,
  "bassai-110ban": null,
  "kusakari-110ban": null,
  "smile-garden": null,
  "kurashi-no-market": null,
};

export const metadata: Metadata = {
  title: {
    absolute:
      "【2026年最新】四日市の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "四日市で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・くらしのマーケットの料金と特徴、排水桝や配管の上の植栽の扱い、室外機・給湯器・メーターまわりを囲わない考え方、散水栓とホースの取り回し、太陽光パネルと木の影・落ち葉まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】四日市の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "四日市で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。排水桝・浄化槽・配管の上は掘れる状態にしておくこと、室外機や給湯器のまわりは囲わないこと、散水栓とホースの取り回しを直すと庭仕事そのものが減ること、太陽光パネルがある家では木の影と落ち葉が手入れの理由になることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、四日市市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。設備のまわりだけ枝を払ってほしい、という範囲を絞った依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "設備のまわりの枝だけを範囲を決めて頼みたい人",
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
        ため、範囲を決めて頼みやすいサービスです。桝や点検口のまわりだけ、というように場所を指定して頼むこともできます。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "点検口や桝のまわりの草を場所を指定して片付けたい人",
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
        のが特徴です。設備に近づきすぎた木を根ごと整理したい場合の相談先になります。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "建物や設備に近づきすぎた木を根ごと整理したい人",
      "大きくなりすぎた木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。設備のまわりを毎年同じ状態に保ちたい庭では、年単位で任せる形が合います。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "設備まわりの状態を毎年同じように保ちたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。四日市市内の対応可否とプラン内容は見積もり時に確認してください。",
  },
  {
    slug: "kurashi-no-market",
    num: "1-5",
    catch: "口コミで比較・料金事前明示",
    name: "くらしのマーケット",
    officialUrl: "https://curama.jp/",
    image: "/images/kurashi-no-market-features.png",
    intro: (
      <>
        くらしのマーケットは、みんなのマーケット株式会社が運営する暮らしのサービス比較プラットフォームです。剪定・草刈り・伐採・造園などの庭のお手入れについて、
        <Hl>地域の業者を口コミ・評価・料金で比較して直接予約</Hl>
        できます。<Hl>料金は出店者ごとに事前に明示</Hl>
        され、予約前に業者とメッセージで相談できます。桝や配管の位置を写真で見せてから予約できるのは、この仕組みならではです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "桝や配管の位置を写真で見せてから相談したい人",
      "料金を比較してから依頼したい人",
      "口コミを見て自分で地域の業者を選びたい人",
      "万が一の補償制度を重視する人",
    ],
    table: [
      { k: "料金の特徴", v: "出店者ごとに事前明示", note: "口コミ・実績と合わせて比較" },
      { k: "予約", v: "オンラインで完結", note: "業者と直接メッセージ可" },
      { k: "補償", v: "トラブル時の費用補償制度あり" },
      { k: "運営会社", v: "みんなのマーケット株式会社" },
    ],
    memo:
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトのレビュー記事作成時に確認しています。出店者ごとにサービス品質は異なるため、口コミ・実績をよく確認し、予約前にメッセージで作業内容を相談するのがおすすめです。",
  },
];

// 比較表は7社全部（お庭マスター・ダスキン含む）
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
    slug: "kurashi-no-market",
    name: "くらしのマーケット",
    type: "プラットフォーム型",
    price: "出店者ごとに事前明示",
    point: "口コミ・評価で比較・トラブル時の費用補償制度",
  },
  {
    slug: "oniwa-master",
    name: "お庭マスター",
    type: "マッチング型",
    price: "剪定1本550円〜・伐採1本3,300円〜",
    point: "経験10年以上の職人・施工後の保証あり（関東エリア中心のため対応可否は要確認）",
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
    t: "① 設備の位置を書き出してから、手を入れてほしい場所を伝える",
    b: "庭業者は、庭を見て木の状態は分かりますが、地面の下に何が通っているかは分かりません。桝のふた、浄化槽、止水栓、メーター、室外機、給湯器の位置を書き出し、見取り図か写真で渡しましょう。そのうえで、「この機器の正面は空けたい」「この桝の上は掘らないでほしい」という形で、設備を基準にして伝えます。庭の言葉ではなく設備の言葉で伝えたほうが、初めて来る人にも正確に届きます。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。設備のまわりだけを頼む場合でも、作業しにくい場所は手間がかかるぶん金額が変わることがあります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されます。",
  },
  {
    t: "③ 庭業者に頼める範囲と、別の業者になる範囲を切り分ける",
    b: "蛇口を増やす、桝や配管そのものを直す、屋根に上がってパネルの葉を払う——これらは庭業者の範囲ではありません。水まわりの工事は水道の工事業者、設備の点検や修理はその機器を扱う会社、屋根の上は屋根の業者が相談先になります。庭業者に頼めるのは、それらの作業ができる状態に庭を整えること、つまり枝を払い、草を止め、置いてあるものをどける部分です。どこから先が別の業者かを見積もりの段階で確かめておくと、当日に作業が止まりません。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。設備のまわりのような細かい範囲指定に応じてくれるか、地面の下のものを避けた段取りを組めるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。同じ言葉で頼んだ見積もりを並べれば、金額の差がどこから出ているのかも見えます。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "四日市で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。室外機の前の枝だけ、桝の上にかかる枝だけ、といった範囲を絞った依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "排水桝の上に木が植わっています。抜いたほうがよいですか？",
    a: "すぐ抜くと決める前に、根がどこまで回っているかと、桝のふたが今どこまで開くかを確かめてください。ふたが開き、点検のときに人が入れる空間があるなら、そのまま様子を見るという選択もあります。根がふたを押し上げている、ふたの上に土がかぶって場所が分からない、という状態なら手を入れる時期です。根を切ってよいかどうかは木の体力に関わるため、現地で見てもらったうえで判断しましょう。",
  },
  {
    q: "室外機のまわりは、どのくらい空けておけばよいですか？",
    a: "必要な空間は機器によって違うため、まずはその機器の取扱説明書か本体に貼られた表示を確認してください。庭の側でできるのは、吹き出し口の正面に人が立てる空間を残すこと、点検用のカバーが全部開くところまで空けること、刈った草や切った枝を機器の上や周囲に置かないことです。植えた木を抜かずに、機器側の枝だけを落として空間を作る頼み方もできます。",
  },
  {
    q: "太陽光パネルに落ちた葉の掃除も庭業者に頼めますか？",
    a: "パネルや架台そのものに触れる作業は庭業者の範囲外と考えてください。屋根に上がる作業は、設置した会社や屋根の業者が相談先になります。庭業者に頼めるのは、落ち葉や影のもとになっている木を切ることまでです。木の高さを下げる、枝を透かす、本数を減らすという三つの選択肢があるため、どれが合うかを現地で相談しましょう。高い木の作業を自分でやるのは危険なので、登らずに依頼してください。",
  },
  {
    q: "散水栓を増やす工事も庭業者に頼めますか？",
    a: "蛇口そのものを増やす工事は水道の工事業者の範囲になることが多く、対応できるかは業者によって異なります。庭業者に頼みやすいのは、ホースが通る経路にかかる枝を払うこと、経路の草を止めること、鉢の置き場所をまとめ直すことです。まずはホースリールを蛇口のそばに固定するなど、工事をせずに済む方法から試すと負担が少なく済みます。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。",
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

export default function AreaYokkaichiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】四日市の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "四日市で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-25T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "四日市の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#yokkaichi5",
      label: "1｜四日市で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "四日市の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#haisui", label: "2｜排水桝・浄化槽・配管の上は、植える前でも植えたあとでも「掘れる状態」にしておく" },
    { href: "#setsubi", label: "3｜室外機・給湯器・メーターのまわりは「囲わない」——業者に頼む範囲を設備ごとに決める" },
    { href: "#sansui", label: "4｜散水栓とホースの取り回しを直すと、庭仕事の量そのものが減る" },
    { href: "#panel", label: "5｜屋根や庭に太陽光パネルがある家は、木の影と落ち葉が「設備の都合」として手入れの理由になる" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜四日市の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">四日市の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】四日市の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["四日市", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="四日市の剪定・伐採・草刈り業者の比較"
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
              「庭の点検に来た業者に、桝の上は掘れないと言われた」「室外機の前に植えた木が茂って、点検口に手が届かない」「散水栓の位置が悪く、ホースを毎回家の裏まで引き回している」——四日市で庭業者を探すきっかけには、植物そのものよりも、家の設備と植栽の位置関係から始まる困りごとが混ざっていることがあります。
            </p>
            <p>
              本記事では、四日市市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「排水桝・浄化槽・配管の上を掘れる状態に保つこと」「室外機・給湯器・メーターのまわりを囲わないこと」「散水栓とホースの取り回しを直すこと」「太陽光パネルがある家の木の影と落ち葉」といった、四日市で特に確認しておきたい依頼の進め方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="yokkaichi5" num="1">四日市で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            四日市市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月25日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            四日市の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月25日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、四日市での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="haisui" num="2">排水桝・浄化槽・配管の上は、植える前でも植えたあとでも「掘れる状態」にしておく</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭のどこかに、<Hl>雨水桝・汚水桝・浄化槽のふた・止水栓のボックス</Hl>があります。ふだんは踏んでも気にならないものですが、詰まりや漏れが起きたときには、その真上を開けて作業することになります。ここに木の根が回っていたり、上に鉢や花壇が載っていたり、茂みで場所そのものが分からなくなっていたりすると、<Hl>修理の前に庭の片付けから始めることになります</Hl>。桝の点検については<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">排水桝の点検の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            まずやっておきたいのは、<Hl>ふたの位置を全部書き出すこと</Hl>です。図面が残っていればそれを見ればよく、なければ庭を一周してふたを探し、家の見取り図に印をつけておきます。<Hl>ふたの上に載っているものを、どけられるものとどけられないものに分ける</Hl>のが次の作業です。鉢やプランターならその日のうちに動かせますが、飛び石や花壇の縁石、植えて何年もたつ木は、一度決めると簡単には戻せません。鉢の整理は<Link href="/uekibachi-planter-shobun/" className="text-[#2D7F3E] underline">植木鉢・プランターの処分の解説記事</Link>、飛び石まわりの草は<Link href="/tobiishi-zasso/" className="text-[#2D7F3E] underline">飛び石まわりの雑草の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者に頼むときは、<Hl>見積もりのときにふたの位置を一緒に見てもらう</Hl>のが早道です。作業で使う機械の通り道や、資材を仮置きする場所を決める段階で、踏ませたくない場所・掘らせたくない場所として伝えておけば、当日の段取りに織り込んでもらえます。すでに根が回っている場合、根を切ってよいかどうかは木の体力に関わるため、その場で判断せず相談してください。根まわりの影響は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりの解説記事</Link>、地面の下を通るものを避けた植え方は<Link href="/shokusai-haichi-keikaku/" className="text-[#2D7F3E] underline">植栽の配置計画の解説記事</Link>にまとめています。剪定110番は現地調査・見積もりが無料で、24時間365日受け付けています。
          </p>

          {/* 3 */}
          <H2 id="setsubi" num="3">室外機・給湯器・メーターのまわりは「囲わない」——業者に頼む範囲を設備ごとに決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            エアコンの室外機、給湯器、電気とガスと水道のメーター、換気口。<Hl>どれも、まわりに空間があることを前提に置かれています</Hl>。目隠しのつもりで植えた木が育ち、吹き出し口の前をふさいだり、点検に来た人が機器の前に立てなくなったりすることがあります。設備のまわりの植栽は<Link href="/shitsugaiki-shokusai/" className="text-[#2D7F3E] underline">室外機まわりの植栽の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見直すときの基準は単純で、<Hl>その設備の正面に人が立てるか、ふたや扉が全部開くか</Hl>の二つです。開き戸のカバーがある機器は、扉の回る範囲まで空けておく必要があります。植えた木を抜くところまでしなくても、<Hl>こちら側だけ枝を落として空間を作る</Hl>という頼み方で足りることが多くあります。目隠しを兼ねている場合は、正面を空けて横と後ろに残す、という形にできないかを相談しましょう。目隠しの木の考え方は<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の解説記事</Link>、カーポートまわりは<Link href="/carport-mawari-shokusai/" className="text-[#2D7F3E] underline">カーポートまわりの植栽の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            依頼のときは、<Hl>設備ごとに「どこまで空けたいか」を分けて伝える</Hl>と食い違いが減ります。「室外機の前は正面一メートル」「メーターの扉が全開できるところまで」というように、機器を基準にした言い方にすると、庭を知らない人にも伝わります。あわせて、<Hl>刈った草や切った枝を機器の上に置かないでほしい</Hl>ことも先に言っておくと安心です。草刈り110番は1平米600円〜の面積単価で、場所を指定した依頼がしやすいサービスです。狭い場所のレイアウトは<Link href="/semai-niwa-layout/" className="text-[#2D7F3E] underline">狭い庭のレイアウトの解説記事</Link>にまとめています。
          </p>

          {/* 4 */}
          <H2 id="sansui" num="4">散水栓とホースの取り回しを直すと、庭仕事の量そのものが減る</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭仕事が続かなくなる理由は、作業そのものよりも<Hl>始めるまでの手間</Hl>にあることがあります。ホースを物置から出し、蛇口につなぎ、庭の反対側まで引き回し、終わったら巻いて戻す——この往復が面倒で、水やりを飛ばす日が増えていきます。散水栓と立水栓の使い分けは<Link href="/risuisen-sansui/" className="text-[#2D7F3E] underline">立水栓・散水栓の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            直し方はいくつかあります。<Hl>ホースリールを蛇口のそばに固定して、巻き取りだけで済ませる</Hl>のがいちばん手軽です。庭が広く、いつも同じ場所まで引いているなら、<Hl>その先に蛇口を増やす</Hl>工事も選択肢になります。鉢が多い家では、細いチューブを這わせて自動で水を出す仕組みもあります。どれを選ぶにしても、<Hl>ホースが通る経路に、毎回またぐ段差や引っかかる枝がないか</Hl>を先に見ておくと効果が出ます。水やりの基本は<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの解説記事</Link>、道具選びは<Link href="/niwa-dogu-erabikata/" className="text-[#2D7F3E] underline">庭の道具選びの解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者に頼む場合、<Hl>蛇口を増やす工事は庭業者ではなく水道の工事業者の範囲</Hl>になることがあります。庭業者に頼めるのは、経路にかかる枝を払うこと、ホースが通る場所の草を止めること、鉢の置き場所をまとめ直すことなどです。どこから先が別の業者かを見積もりのときに確かめておくと、二度手間になりません。相談先の切り分けは<Link href="/niwa-reform-gaiko-chigai/" className="text-[#2D7F3E] underline">庭リフォームと外構工事の違いの解説記事</Link>、地面を覆う対策は<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>にまとめています。
          </p>

          {/* 5 */}
          <H2 id="panel" num="5">屋根や庭に太陽光パネルがある家は、木の影と落ち葉が「設備の都合」として手入れの理由になる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            パネルを載せている家では、<Hl>木の影がかかる時間と、パネルの上に積もる葉</Hl>が、庭の見た目とは別の理由で気になってきます。植えたときには低かった木でも、何年かたてば屋根の高さに近づきます。影は季節と時間で動くため、<Hl>いつ・どこに影が伸びるかを一度見ておく</Hl>ことが判断の出発点になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            手を入れるかどうかを決めるときは、<Hl>高さを下げるのか、枝を透かすのか、本数を減らすのか</Hl>の三つを分けて考えます。影を作っているのが幹の上のほうだけなら、そこを下げれば済むことがあります。落ち葉が問題なら、<Hl>葉の量が多い木と少ない木を見分けて、多いほうから手を入れる</Hl>ほうが効きます。落ち葉の少ない木への植え替えは<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉の少ない庭木の解説記事</Link>、落ち葉全般の対策は<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            注意したいのは、<Hl>パネルや架台そのものに触れる作業は庭業者の範囲外</Hl>だということです。屋根に上がって葉を払う、パネルを拭くといった作業は、設置した会社や屋根の業者に相談する内容になります。庭業者に頼めるのは、影と落ち葉のもとになっている木を切ることまでです。高い木の作業は危険を伴うため、自分で登らずに相談してください。<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>にまとめています。伐採110番は伐採・抜根から木材の処分まで一括で相談でき、見積もりは無料・24時間受付です。
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
          <H2 id="faq" num="7">四日市の庭業者でよくある質問</H2>
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
            四日市で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。設備のまわりの枝だけを範囲を決めて頼むなら1本単位の剪定110番、桝や点検口のまわりの草を場所を指定して片付けるなら面積単価の草刈り110番、設備に近づきすぎた木を根ごと整理するなら処分まで一括の伐採110番、設備まわりを毎年同じ状態に保ちたいなら年間管理プランのsmileガーデン、桝や配管の位置を写真で見せてから相談するならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            家の設備は、まわりに空間があることを前提に置かれています。桝や浄化槽のふたの位置を書き出して掘れる状態を保つこと、室外機や給湯器やメーターの正面を囲わないこと、散水栓とホースの取り回しを直して庭仕事を始めるまでの手間を減らすこと、パネルの影と落ち葉のもとになっている木を高さ・透かし・本数のどれで直すか決めること、そして庭業者に頼める範囲と別の業者になる範囲を切り分けることが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["四日市", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/kawasaki/", label: "川崎の庭業者おすすめ5選" },
                { href: "/area/matsue/", label: "松江の庭業者おすすめ5選" },
                { href: "/area/yamaguchi/", label: "山口の庭業者おすすめ5選" },
                { href: "/area/sagamihara/", label: "相模原の庭業者おすすめ5選" },
                { href: "/area/sakai/", label: "堺の庭業者おすすめ5選" },
                { href: "/area/hamamatsu/", label: "浜松の庭業者おすすめ5選" },
                { href: "/area/himeji/", label: "姫路の庭業者おすすめ5選" },
                { href: "/area/kurashiki/", label: "倉敷の庭業者おすすめ5選" },
                { href: "/area/takasaki/", label: "高崎の庭業者おすすめ5選" },
                { href: "/area/higashiosaka/", label: "東大阪の庭業者おすすめ5選" },
                { href: "/area/hachioji/", label: "八王子の庭業者おすすめ5選" },
                { href: "/area/kawaguchi/", label: "川口の庭業者おすすめ5選" },
                { href: "/area/funabashi/", label: "船橋の庭業者おすすめ5選" },
                { href: "/area/amagasaki/", label: "尼崎の庭業者おすすめ5選" },
                { href: "/area/fujisawa/", label: "藤沢の庭業者おすすめ5選" },
                { href: "/area/matsudo/", label: "松戸の庭業者おすすめ5選" },
                { href: "/area/koriyama/", label: "郡山の庭業者おすすめ5選" },
                { href: "/area/okazaki/", label: "岡崎の庭業者おすすめ5選" },
                { href: "/area/nagaoka/", label: "長岡の庭業者おすすめ5選" },
                { href: "/area/ichikawa/", label: "市川の庭業者おすすめ5選" },
                { href: "/area/toyohashi/", label: "豊橋の庭業者おすすめ5選" },
                { href: "/area/nishinomiya/", label: "西宮の庭業者おすすめ5選" },
                { href: "/area/machida/", label: "町田の庭業者おすすめ5選" },
                { href: "/area/toyonaka/", label: "豊中の庭業者おすすめ5選" },
                { href: "/area/kawagoe/", label: "川越の庭業者おすすめ5選" },
                { href: "/area/ichinomiya/", label: "一宮の庭業者おすすめ5選" },
                { href: "/area/atsugi/", label: "厚木の庭業者おすすめ5選" },
                { href: "/area/fukuyama/", label: "福山の庭業者おすすめ5選" },
                { href: "/area/hirakata/", label: "枚方の庭業者おすすめ5選" },
                { href: "/area/kashiwa/", label: "柏の庭業者おすすめ5選" },
                { href: "/area/toyota/", label: "豊田の庭業者おすすめ5選" },
                { href: "/area/akashi/", label: "明石の庭業者おすすめ5選" },
                { href: "/area/takatsuki/", label: "高槻の庭業者おすすめ5選" },
                { href: "/area/tokorozawa/", label: "所沢の庭業者おすすめ5選" },
                { href: "/area/koshigaya/", label: "越谷の庭業者おすすめ5選" },
                { href: "/area/kasugai/", label: "春日井の庭業者おすすめ5選" },
                { href: "/area/kurume/", label: "久留米の庭業者おすすめ5選" },
                { href: "/area/tsukuba/", label: "つくばの庭業者おすすめ5選" },
                { href: "/area/hiratsuka/", label: "平塚の庭業者おすすめ5選" },
                { href: "/area/yao/", label: "八尾の庭業者おすすめ5選" },
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
                { href: "/agents/bassai-110ban/", label: "伐採110番の口コミ・評判" },
                { href: "/niwa-mitsumori-mikata/", label: "庭の見積もりの見方" },
                { href: "/sentei-irai-junbi/", label: "剪定を依頼する前の準備" },
                { href: "/teire-raku-niwaki/", label: "手入れが楽な庭木" },
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
