import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/okazaki/";
const UPDATED = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

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
      "【2026年最新】岡崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "岡崎で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・くらしのマーケットの料金と特徴、母屋・離れ・蔵が建つ敷地で手入れの範囲を決める考え方、使っていない建物のまわりをどこまで手入れするか、屋根がいくつもある敷地の落ち葉の見方、門から玄関までの通路の頼み方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】岡崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "岡崎で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。母屋・離れ・蔵が一つの敷地に建つ家は建物ごとではなく人が通る道ごとに手入れの範囲を決めること、使っていない建物のまわりは近づける状態に保つことだけを目的に頼むこと、屋根がいくつもある敷地では落ち葉がどの屋根に載るかを見てから切る枝を選ぶこと、門から玄関までの通路の頼み方も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、岡崎市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。母屋と離れの間に伸びた木を1本だけ小さく整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "母屋と離れの間に伸びた木を1本単位で小さく整えたい人",
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
        ため、建物と建物の間や、使っていない蔵のまわりなど、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "建物と建物の間や蔵のまわりの草を範囲を決めて片付けたい人",
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
        のが特徴です。使わなくなった建物のまわりで大きくなりすぎた木の整理や、庭を作り替えるための抜根も、切り分けて運び出す方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "使っていない建物のまわりで大きくなりすぎた木を整理したい人",
      "建物に近い木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。手入れする場所が敷地の中でいくつにも分かれている庭では、どこを年に何回見るかを決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "敷地の中で手入れする場所が分かれている庭を回数を決めて任せたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。岡崎市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、敷地の中のどこまでを頼むかを写真で伝えてから予約するといった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで頼む範囲を写真で決めてから頼みたい人",
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
    t: "① 敷地の見取り図を描いて「どの道とどの建物のまわりを頼むか」を先に示す",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、敷地のどこを頼むのかを図で示すと、見積もりの精度が上がります。紙に母屋・離れ・蔵などの位置を描き、毎日通る道を線で引き、頼みたい範囲を囲むだけで十分です。写真は、範囲全体が入る引きの一枚と、気になる木や段差の近くの一枚を分けて撮っておきましょう。建物と木が近い場所は、建物との距離と、切ったものを運び出す経路もあわせて伝えると、当日の段取りが早くなります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを「場所ごとに分けて」取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。敷地が広いと一式でまとめた見積もりになりがちですが、道ごと・建物ごとに分けて出してもらうと、今年はどこまでやるかを予算に合わせて選べます。長く手が入っていない場所は刈り草や枝の量が多くなり、処分費が総額の大きな部分を占めることがあります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "敷地が広い家では、隣地との境界がどこにあるのか、境目の木や塀がどちらの所有なのかがはっきりしないことがあります。境界の位置や塀の所有関係が分からないときは、土地家屋調査士などの専門家に相談する範囲です。隣家側へ伸びた枝は、境界を越えている部分の扱いに法律上の決まりがあるため、勝手に切らず先に確かめるのが基本です。道路や歩道の街路樹・植樹帯は道路を管理する自治体の担当で、庭業者に頼んで切ることはできません。地域で管理している緑地や集会所まわりの植栽は、自治会や管理組合の管轄になっていることがあります。敷地の高低差を支える擁壁そのものの傷みは土木・建築の業者の範囲で、庭業者に頼めるのはその上に生えた草木の手入れまでです。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。広い敷地を場所ごとに分けて受けてくれるか、建物に近い木を切り分けて下ろす作業に慣れているか、通路だけといった範囲を限った依頼も受けてくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "岡崎で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。母屋と離れの間に伸びた木を1本だけ小さく整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "敷地が広く建物がいくつもあります。全部まとめて頼むべきですか？",
    a: "まとめて頼めば一度で済みますが、金額も大きくなります。おすすめは、見積もりを道ごと・建物ごとに分けて出してもらい、優先順位をつけて進める方法です。毎日通る道の頭上と足元、使っていない建物へ近づく一本の道を先に確保すれば、残りは翌年以降に回しても暮らしに支障は出にくくなります。草刈り110番は1平米600円〜という面積単価で、範囲を決めて頼めます。",
  },
  {
    q: "使っていない離れや蔵のまわりは、どこまで手を入れればよいですか？",
    a: "扉や窓の前、建物の壁ぎわ、そしてその建物へ向かう一本の道が通れて開けられる状態を目安にすると、無理なく続けられます。壁に枝やつるが触れていると建物の傷みにつながることがあるため、壁から距離を取っておくのは建物のためにもなります。建物に近い大きな木は、倒す方向が取れず切り分けて下ろす作業になることがあるため、建物との距離と運び出しの経路を伝えて見積もりを取りましょう。伐採110番は伐採後の木材処分まで一括対応をうたっており、見積もりは無料です。",
  },
  {
    q: "屋根に落ち葉が載って困っています。庭木の手入れで減らせますか？",
    a: "屋根の上に張り出している枝を減らすことで、載る葉の量は減らせます。建物がいくつもある敷地では、同じ木でも年によって葉のたまる屋根が変わることがあるため、切る枝を選ぶ前に、実際に葉がたまっている場所を見ておくと無駄がありません。あわせて雨どいと、雨どいから落ちた水が集まる地面の様子も確認しておきましょう。屋根より高い枝を自分で切るのは危険なため、無理をせず業者に相談してください。",
  },
  {
    q: "門から玄関までの通路だけを頼むこともできますか？",
    a: "できます。範囲を限った依頼は金額の見当もつけやすく、短い間隔で繰り返し頼みやすいのが利点です。見積もりのときに、どこからどこまでかを写真か簡単な図で示しましょう。くらしのマーケットは料金が出店者ごとに事前に明示され、予約前にメッセージで範囲を写真で伝えてから予約できます。通路の敷石に段差が出ている場合は、並べ直しまで対応できるかどうかを先に確認しておくと確実です。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。敷地が広く量が多くなる場合は、処分込みの総額で確認しておくと安心です。",
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

export default function AreaOkazakiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】岡崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "岡崎で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-17T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "岡崎の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#okazaki5",
      label: "1｜岡崎で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "岡崎の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#touru", label: "2｜母屋・離れ・蔵が一つの敷地に建つ家は、建物ごとではなく「人が通る道ごと」に手入れの範囲を決める" },
    { href: "#tsukawanai", label: "3｜同じ敷地に使っていない建物がある家は、そのまわりを「近づける状態に保つ」ことだけを目的に頼む" },
    { href: "#yaneochiba", label: "4｜屋根がいくつもある敷地では、落ち葉が「どの屋根に載るか」を見てから切る枝を選ぶ" },
    { href: "#approach", label: "5｜門から玄関までの通路が長い家は、そこだけ手入れの間隔を短くすると敷地全体が整って見える" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜岡崎の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">岡崎の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】岡崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["岡崎", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="岡崎の剪定・伐採・草刈り業者の比較"
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
              「母屋と離れと蔵が一つの敷地に建っていて、どこまでを庭として頼めばよいのか分からない」「使わなくなった離れのまわりが、いつの間にか草と枝に囲まれていた」「屋根がいくつもあるので、落ち葉の載る場所が年によって違う」「門から玄関までが長く、そこだけ手が回らない」——岡崎で庭業者を探すきっかけには、敷地の中に建物がいくつもある家ならではの、「どこまでを頼むか」に関わる事情が絡むことがあります。
            </p>
            <p>
              本記事では、岡崎市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「母屋・離れ・蔵が一つの敷地に建つ家は建物ごとではなく人が通る道ごとに手入れの範囲を決めること」「同じ敷地に使っていない建物がある家はそのまわりを近づける状態に保つことだけを目的に頼むこと」「屋根がいくつもある敷地では落ち葉がどの屋根に載るかを見てから切る枝を選ぶこと」「門から玄関までの通路が長い家はそこだけ手入れの間隔を短くすること」といった、岡崎で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="okazaki5" num="1">岡崎で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            岡崎市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月17日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            岡崎の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月17日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、岡崎での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="touru" num="2">母屋・離れ・蔵が一つの敷地に建つ家は、建物ごとではなく「人が通る道ごと」に手入れの範囲を決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            岡崎には、母屋のほかに離れや蔵、納屋を敷地の中に持つ家が残っています。こうした敷地の庭を頼むとき、多くの人はまず「母屋の庭」「蔵のまわり」と建物ごとに分けて考えます。ところが実際に困るのは建物のまわりではなく、<Hl>建物と建物をつなぐ通り道</Hl>であることが多いものです。洗濯物を干しに行く道、物を出し入れする道、車から玄関へ向かう道。ここが通りにくくなると、庭全体が荒れて見えます。頼む範囲を決めるときは、<Hl>敷地を建物で割るのではなく、毎日通る道を線で引いてみる</Hl>と決めやすくなります。庭の全体像を図で確かめる方法は<Link href="/niwa-sekkeizu-mikata/" className="text-[#2D7F3E] underline">庭の設計図・平面図の読み方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            線を引いたら、道ごとに「頭上」と「足元」を見ます。<Hl>頭上は通る人の頭に当たる枝、足元はつまずく段差と伸びた草</Hl>です。この二つが解消されていれば、多少草が残っていても暮らしに支障は出ません。逆にここを放置すると、雨の日や夜に危なくなります。狭い場所の植栽の考え方は<Link href="/semai-niwa-layout/" className="text-[#2D7F3E] underline">狭い庭のレイアウトの考え方</Link>、足元を歩きやすくする考え方は<Link href="/niwa-barrier-free/" className="text-[#2D7F3E] underline">庭のバリアフリーの考え方</Link>、夜の見え方は<Link href="/niwa-shomei-keikaku/" className="text-[#2D7F3E] underline">庭の照明計画の基本</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者に伝えるときは、<Hl>「この道からこの道まで」と範囲を指して頼む</Hl>ほうが、金額も仕上がりもぶれません。敷地が広いと「一式」でまとめた見積もりになりがちですが、道ごとに分けてもらえば、今年はどこまでやるかを予算に合わせて選べます。草刈り110番は1平米600円〜という面積単価で範囲を決めて頼め、草刈り後の防草シート施工も相談できます。見積もりの読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>、複数社に出してもらう進め方は<Link href="/aimitsumori-torikata/" className="text-[#2D7F3E] underline">庭工事の相見積もりの取り方</Link>をご覧ください。
          </p>

          {/* 3 */}
          <H2 id="tsukawanai" num="3">同じ敷地に使っていない建物がある家は、そのまわりを「近づける状態に保つ」ことだけを目的に頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            母屋には人が住んでいても、離れや蔵、納屋は何年も使っていない——という敷地は珍しくありません。使っていない建物のまわりは足が向かないため、草と枝が伸びても気づきにくく、気づいたときには扉の前まで塞がっていることがあります。ここで目的を高く置きすぎると続きません。<Hl>目指すのは「きれいにすること」ではなく、「必要になったときに近づける状態を保つこと」</Hl>です。長く手が入っていない敷地の考え方は<Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の基本</Link>が参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            具体的には、<Hl>扉や窓の前、建物の壁ぎわ、そしてその建物へ向かう一本の道</Hl>——この三つが通れて開けられれば十分です。壁ぎわに枝が触れていると、そこから傷みが進むことがあるため、壁から距離を取ることは建物のためにもなります。つる性の植物が壁を覆いはじめている場合は、放置すると外すのに手間がかかるため早めに手を打ちましょう。扱い方は<Link href="/tsuru-shokubutsu-kanri/" className="text-[#2D7F3E] underline">つる植物の管理の基本</Link>、敷地の隅から入ってくる竹や笹は<Link href="/take-taisaku/" className="text-[#2D7F3E] underline">竹・笹の対策の基礎知識</Link>にまとめています。草を面で抑えたい場所は<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの基礎知識</Link>と<Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの基本</Link>、生えにくい仕上げの考え方は<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>をご覧ください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大きくなりすぎた木が建物に近い場合は、切る場所と運び出す経路が限られるため、早めに相談しておくほうが安全です。伐採110番は大木・高木・危険木の特殊伐採に対応し、伐採後の木材処分まで一括で任せられることを掲げており、見積もりは無料です。<Hl>建物の近くの木は、倒す方向が取れず、切り分けて下ろす作業になることがある</Hl>ため、見積もりのときに建物との距離と運び出しの経路を伝えましょう。切り株を残す場合の注意は<Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株を放置するとどうなるか</Link>、庭全体を整理していく進め方は<Link href="/niwajimai/" className="text-[#2D7F3E] underline">庭じまいとローメンテナンス化</Link>をご覧ください。
          </p>

          {/* 4 */}
          <H2 id="yaneochiba" num="4">屋根がいくつもある敷地では、落ち葉が「どの屋根に載るか」を見てから切る枝を選ぶ</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            建物がいくつもある敷地では、落ち葉の悩みが一か所にとどまりません。同じ木から落ちた葉でも、風の向きによって母屋の屋根に載る年と、離れの屋根に載る年があります。<Hl>どの屋根に載るかは、木の位置よりも「屋根の上に張り出している枝がどこにあるか」で決まる</Hl>ため、切る枝を選ぶ前に、葉がたまっている場所を先に見ておくと無駄がありません。落ち葉の片付け方は<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策と掃除の基本</Link>、集めた葉の使い道は<Link href="/ochiba-taihi-compost/" className="text-[#2D7F3E] underline">落ち葉堆肥・コンポストの基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見てまわるときの順番は、<Hl>屋根の上、雨どい、そして雨どいから落ちた水が集まる地面</Hl>です。屋根に載った葉は雨どいへ流れ、雨どいからあふれた水は建物の足元にたまります。使っていない建物ほどこの流れが滞りやすく、気づかないうちに地面がぬかるんでいることがあります。排水桝の点検の目安は<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">排水桝の点検の基本</Link>、地面の水の抜け方は<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            切る内容が決まったら、<Hl>「屋根の上に枝を出さない」という目的を業者に伝える</Hl>のが早道です。木全体を小さくするのか、屋根側の枝だけを抜くのかで作業量が変わります。屋根より高い枝を自分で切るのは危険なため、無理をせず任せましょう。判断の目安は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者に頼む判断</Link>にまとめています。落ち葉の少ない木への入れ替えを考えるなら<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>と<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>、毎年の段取りとしてまとめたいなら、smileガーデンの定額制の年間管理プランのように回数と時期を決めて任せる方法もあり、作業後に写真付きの作業報告書を受け取れます。
          </p>

          {/* 5 */}
          <H2 id="approach" num="5">門から玄関までの通路が長い家は、そこだけ手入れの間隔を短くすると敷地全体が整って見える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            敷地が広い家では、庭のすべてを同じ頻度で手入れするのは現実的ではありません。そこで効くのが、<Hl>手をかける場所に差をつけること</Hl>です。中でも門から玄関までの通路は、家族も来客も必ず通り、外からも見える場所です。ここだけ手入れの間隔を短くしておくと、奥の草が多少伸びていても、敷地全体が整って見えます。外から見える面の整え方は<Link href="/symboltree-teire/" className="text-[#2D7F3E] underline">シンボルツリーの手入れの基本</Link>、和の趣を残した庭の扱いは<Link href="/wafu-niwa-teire/" className="text-[#2D7F3E] underline">和風の庭の手入れの基本</Link>、松のある庭は<Link href="/matsu-teire/" className="text-[#2D7F3E] underline">松の手入れの基礎知識</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            通路で気をつけたいのは三つです。<Hl>頭に当たる枝、足元の段差、そして雨の日の滑りやすさ</Hl>。敷石や飛び石は年月とともに動くため、段差が出たら早めに直しましょう。飛び石まわりの草は<Link href="/tobiishi-zasso/" className="text-[#2D7F3E] underline">飛び石まわりの雑草の解説記事</Link>、レンガや枕木の傷みは<Link href="/renga-makuragi-rekka/" className="text-[#2D7F3E] underline">レンガ・枕木の劣化と交換の判断</Link>、苔で滑りやすくなっている場合は<Link href="/niwa-koke-taisaku/" className="text-[#2D7F3E] underline">庭の苔対策の基本</Link>にまとめています。灯篭や庭石が通路にせり出している場合、移動や撤去には重量があり手間がかかるため、<Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯篭の撤去の基礎知識</Link>を確認したうえで相談しましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            通路の手入れは範囲が限られるぶん、<Hl>短い間隔で繰り返し頼みやすい</Hl>のが利点です。剪定110番は庭木1本からの依頼に対応し、剪定1本2,890円〜（出張費3,000円別途）の掲載料金で、現地調査・見積もりは無料です。くらしのマーケットは料金が出店者ごとに事前に明示され、予約前にメッセージで頼む範囲を写真で伝えてから予約できるため、「通路だけ」といった範囲を限った依頼にも向いています。通路を作り替えて手入れの回数そのものを減らしたい場合は、植栽の作業と外構の工事で担当が分かれることがあるため、<Link href="/niwa-reform-gaiko-chigai/" className="text-[#2D7F3E] underline">庭のリフォームと外構工事の違い</Link>で切り分けを確認してください。
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
          <H2 id="faq" num="7">岡崎の庭業者でよくある質問</H2>
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
            岡崎で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。母屋と離れの間に伸びた木を1本単位で小さく整えるなら樹種別の目安がある剪定110番、建物と建物の間や蔵のまわりの草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、使っていない建物のまわりで大きくなりすぎた木を整理するなら処分まで一括の伐採110番、敷地の中で手入れする場所が分かれている庭を回数を決めて任せるならsmileガーデン、頼む範囲を写真で決めてから発注するならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            敷地の中に建物がいくつもある家では、「どこまでを頼むか」を先に決めることが依頼の出発点になります。建物ごとではなく人が通る道ごとに範囲を決めること、使っていない建物のまわりは近づける状態を保つことだけを目的にすること、落ち葉はどの屋根に載るかを見てから切る枝を選ぶこと、門から玄関までの通路だけ手入れの間隔を短くすること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["岡崎", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/nagaoka/", label: "長岡の庭業者おすすめ5選" },
                { href: "/area/ichikawa/", label: "市川の庭業者おすすめ5選" },
                { href: "/area/toyohashi/", label: "豊橋の庭業者おすすめ5選" },
                { href: "/area/nishinomiya/", label: "西宮の庭業者おすすめ5選" },
                { href: "/area/machida/", label: "町田の庭業者おすすめ5選" },
                { href: "/area/toyonaka/", label: "豊中の庭業者おすすめ5選" },
                { href: "/area/kawagoe/", label: "川越の庭業者おすすめ5選" },
                { href: "/area/ichinomiya/", label: "一宮の庭業者おすすめ5選" },
                { href: "/area/atsugi/", label: "厚木の庭業者おすすめ5選" },
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
                { href: "/akiya-niwa-kanri/", label: "空き家の庭の管理の基本" },
                { href: "/ochiba-taisaku/", label: "落ち葉対策と掃除の基本" },
                { href: "/niwa-sekkeizu-mikata/", label: "庭の設計図・平面図の読み方" },
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
