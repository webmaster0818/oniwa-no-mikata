import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/sakai/";
const UPDATED = "2026年9月8日";
const UPDATED_ISO = "2026-09-08";

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
      "【2026年最新】堺の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "堺で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・くらしのマーケットの料金と特徴、区画整理された住宅地の道路側の緑の管理区分、ニュータウン型の住宅地での共用緑地と専用庭の境目、同じ時期に育った庭木の更新の考え方、中古で買った家の庭の読み解き方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】堺の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "堺で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。区画整理された住宅地では道路側の緑の管理区分を先に確かめること、ニュータウン型の住宅地では共用緑地と専用庭の境目が手入れの範囲を決めること、同じ時期に建った住宅地では庭木も同じ時期に大きくなるという更新の考え方、中古で買った家の庭は前の持ち主の手入れを読み解いてから頼むことも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、堺市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。道路側に張り出したシンボルツリーを1本だけ整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "道路側に張り出した木を1本単位で整えたい人",
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
        ため、歩道との境目や家のまわりの通路など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "歩道との境目や家のまわりの草を範囲を決めて片付けたい人",
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
        のが特徴です。家の大きさに対して育ちすぎた木の更新や、前の持ち主が残した切り株の抜根もまとめて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "家に対して大きくなりすぎた木を更新したい人",
      "前の持ち主が残した切り株を抜きたい人",
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
        で剪定・消毒・施肥をセットで任せられます。道路や歩道に面した生垣を一定の高さに保ちたい庭では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "道路や歩道に面した生垣を一定の状態に保ちたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。堺市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、引き継いだばかりの庭の写真を送って何から手をつけるべきか聞いてから予約するといった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで庭の状態を相談してから頼みたい人",
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
    t: "① 庭の写真に「敷地の境目」を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭がどこまで自分の敷地なのかが分かる写真を用意しましょう。歩道との境目、隣家との塀、裏手の緑地や法面との境目、道路側の生垣の位置が写っていると、切ってよい範囲と作業のしかたが伝わりやすくなります。ニュータウン型の住宅地なら、共用の緑地や植栽との境目も写しておくと、見積もりの精度が上がります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。大きくなった木を根元から更新する場合や切り株を抜く場合は、処分と抜根の費用が金額の大きな部分を占めることがあります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "歩道の街路樹や植樹帯は道路を管理する自治体の担当で、共用緑地や緑道の植栽は管理組合や自治会の管轄です。自分の敷地の中でも、協定や申し合わせで生垣の高さや道路側の植栽が決まっている住宅地があります。境界の位置がはっきりしない場所や塀の所有関係が分からない場合は、土地家屋調査士などの専門家に相談する範囲です。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。歩道に面した場所での作業の養生に慣れているか、大きな木の更新から植え替えまで相談に乗ってくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "堺で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。道路側に張り出したシンボルツリーを1本だけ整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "歩道の街路樹から落ち葉が庭に入ってきます。誰に相談すればよいですか？",
    a: "街路樹は道路を管理している自治体の担当で、庭業者に頼んで切ることはできません。落ち葉や枝の張り出しで困っている場合は、自治体の道路管理の窓口に相談するのが基本です。庭側でできるのは、落ち葉がたまる場所の仕上げを変える、排水桝の上にたまらないようにする、集める回数を決めて業者に頼むといった受け方の工夫です。当サイトの落ち葉対策と掃除の基本の記事に考え方をまとめています。",
  },
  {
    q: "生垣が歩道側に張り出してきました。自分で切ってよいですか？",
    a: "自分の敷地に植えた生垣なら、歩道側に張り出した部分を切るのは所有者の責任で行う範囲です。通行の妨げになる前に整えましょう。ただし、住宅地によっては協定や申し合わせで生垣の高さや道路側の植栽の扱いが決まっていることがあるため、大きく切り詰めたりフェンスに変えたりする前に確認するのが安心です。歩道での作業は通行人への配慮と養生が必要なので、業者に頼む場合はその段取りも相談してください。",
  },
  {
    q: "家の裏の緑地や法面の木が伸びてきました。庭業者に頼めますか？",
    a: "まず、その緑地や法面が誰の管理かを確かめてください。ニュータウン型の住宅地では、街区の裏の緑地や緑道、法面が共用部分として管理組合や自治会の管轄になっていることがあります。その場合は、管理組合や自治会に相談するのが先で、勝手に切ることはできません。自分の敷地の中に入ってきた枝やつるについては、境界がはっきりしていれば自分側で手を入れられます。境界の位置が分からないときは、土地家屋調査士などの専門家に確認する範囲です。",
  },
  {
    q: "中古で買った家の庭に切り株が残っています。放っておいて大丈夫ですか？",
    a: "切り株の扱いは、そのまま残す、腐らせて処理する、抜根する、の三つに分かれます。残す場合はつまずきや虫の住みかになることがあり、抜く場合は根の広がり方によって費用が変わります。まずは切り株の大きさと場所、まわりの舗装や配管との位置関係を確かめて、写真を添えて業者に相談しましょう。当サイトの切り株を放置するとどうなるかの記事と、伐採と抜根の違いの記事が参考になります。伐採110番は抜根と処分まで一括で相談できます。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。歩道に面した家では、集めた枝葉を歩道に置いたままにしないことも大切です。",
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

export default function AreaSakaiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】堺の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "堺で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "堺の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#sakai5",
      label: "1｜堺で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "堺の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#dorogawa", label: "2｜区画整理された住宅地では「道路側の緑」の管理区分を先に確かめる" },
    { href: "#kyoyo", label: "3｜ニュータウン型の住宅地では「共用緑地」と「専用庭」の境目が手入れの範囲を決める" },
    { href: "#koshin", label: "4｜同じ時期に建った住宅地では、庭木も同じ時期に大きくなる——「更新」の考え方" },
    { href: "#chuko", label: "5｜中古で買った家の庭は「前の持ち主の手入れ」を読み解いてから頼む" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜堺の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">堺の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】堺の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["堺", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="堺の剪定・伐採・草刈り業者の比較"
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
              「歩道側の生垣をどこまで切ってよいのか分からない」「家の裏の緑地の木が伸びてきたけれど、誰に相談すればよいのか」「近所の家も自分の家も、同じ時期に植えた木が一斉に大きくなってきた」「中古で買った家の庭に前の持ち主の木と切り株が残っている」——堺で庭業者を探すきっかけには、区画整理された住宅地やニュータウン型の街区が広がる土地ならではの、「どこまでが自分の管理か」に関わる事情が絡むことがあります。
            </p>
            <p>
              本記事では、堺市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「区画整理された住宅地では道路側の緑の管理区分を先に確かめること」「ニュータウン型の住宅地では共用緑地と専用庭の境目が手入れの範囲を決めること」「同じ時期に建った住宅地では庭木も同じ時期に大きくなるという更新の考え方」「中古で買った家の庭は前の持ち主の手入れを読み解いてから頼むこと」といった、堺で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="sakai5" num="1">堺で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            堺市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月8日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            堺の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月8日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、堺での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="dorogawa" num="2">区画整理された住宅地では「道路側の緑」の管理区分を先に確かめる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            堺の住宅地には、区画整理で道路・歩道・植樹帯がまとめて整えられた街区が多くあります。こうした街区では、家の前に歩道があり、その歩道に街路樹や植樹帯が並び、その内側に自分の敷地の生垣や庭木が続く、という重なりになりがちです。<Hl>見た目はひと続きの緑でも、管理する人は歩道側と敷地側で分かれています</Hl>。街路樹と植樹帯は道路を管理する自治体の担当で、庭業者に頼んで切ることはできません。敷地の中の生垣や庭木は所有者の責任で手入れする範囲です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            困りごとが起きやすいのは、この境目です。街路樹の枝や落ち葉が敷地に入ってくる場合は、自治体の道路管理の窓口に相談するのが基本で、庭側でできるのは落ち葉の受け方の工夫までです。逆に、<Hl>自分の生垣や庭木が歩道側に張り出した場合は、通行の妨げになる前に整えるのが所有者の責任</Hl>です。道路への張り出しは隣家への越境より先に問題になりやすく、考え方は<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>にまとめています。境界の位置や塀の所有関係がはっきりしないときは、土地家屋調査士などの専門家に確認する範囲で、<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            もうひとつ、区画整理された住宅地では<Hl>協定や申し合わせで生垣の高さや道路側の植栽の扱いが決まっている</Hl>ことがあります。生垣を大きく切り詰めたり、フェンスに切り替えたりする前に、そうした取り決めがないかを確かめておくと安心です。生垣を続けるなら<Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの基礎知識</Link>、フェンスとの比較は<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較</Link>、道路側の目隠しの考え方は<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>をご覧ください。歩道に面した生垣を一定の高さに保ちたいなら、smileガーデンの定額制の年間管理プランのように回数と時期を決めて任せる方法があります。歩道との境目の草を面で片付けるなら、草刈り110番の1平米600円〜という面積単価で範囲を決めて頼めます。
          </p>

          {/* 3 */}
          <H2 id="kyoyo" num="3">ニュータウン型の住宅地では「共用緑地」と「専用庭」の境目が手入れの範囲を決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            堺の丘陵側には、ニュータウンとして計画的に開かれた住宅地が広がっています。こうした住宅地の特徴は、<Hl>住戸の庭のすぐ外に、共用の緑地・緑道・法面・植栽帯が続いている</Hl>ことです。集合住宅の一階の専用庭はもちろん、戸建てが並ぶ街区でも、家の裏手の斜面や街区の間の緑道が共用部分として管理組合や自治会の管轄になっていることがあります。見た目には自分の庭の続きに見えても、手を入れてよい範囲は境目で変わります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認したいのは、<Hl>どこまでが自分の敷地（または専用使用できる範囲）で、どこからが共用緑地か</Hl>です。共用緑地の木が伸びて日当たりが悪くなった、法面の草が敷地に入ってくる、といった場合は、管理組合や自治会に相談するのが先で、勝手に切ることはできません。専用庭でも、規約や使用細則で植えてよいもの・切ってよいもの・業者を入れる手続きが決まっていることがあります。自分の敷地の中に入ってきた枝やつるは、境界がはっきりしていれば自分側で手を入れられます。つるの止め方は<Link href="/tsuru-shokubutsu-kanri/" className="text-[#2D7F3E] underline">つる植物の管理の基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認が済んだら、自分の範囲の手入れに集中できます。共用緑地に接する庭は、緑地側からの落ち葉や虫と付き合う前提で、<Hl>手入れが楽な木への入れ替えや、限られた広さを使いやすくする配置</Hl>を考えると負担が減ります。考え方は<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>と<Link href="/semai-niwa-layout/" className="text-[#2D7F3E] underline">狭い庭のレイアウトの考え方</Link>を参考にしてください。緑地側の木陰で日が当たりにくい場所には<Link href="/hikage-niwa-shokusai/" className="text-[#2D7F3E] underline">北向き・日陰の庭の植栽の考え方</Link>が役立ちます。業者に頼むときは、共用部を通って庭に入る場合の手続きや養生も戸建てと違う点なので、管理組合や自治会への届け出が必要なら作業日の前に済ませておきましょう。専用庭の木を1本単位で相談するなら、剪定110番は剪定1本2,890円〜（出張費3,000円別途）の掲載料金で、見積もりは無料です。
          </p>

          {/* 4 */}
          <H2 id="koshin" num="4">同じ時期に建った住宅地では、庭木も同じ時期に大きくなる——「更新」の考え方</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            区画整理やニュータウンの開発でまとめて建てられた住宅地では、それぞれの家が同じ頃に庭を作り、同じ頃に木を植えています。つまり、<Hl>街区全体で庭木が同じ時期に大きくなり、同じ時期に「家に対して大きすぎる」状態になります</Hl>。植えたときは小さかったシンボルツリーが屋根を越え、生垣は厚くなって刈り込みに手間がかかり、隣家からも道路からも同じ相談が出る、という状態です。毎年少しずつ切って維持してきた木でも、幹が太くなると剪定だけでは戻せなくなる時期が来ます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            ここで考えたいのが「更新」です。<Hl>剪定で維持し続けるのか、切り戻して小さく仕立て直すのか、根元から整理して植え替えるのか</Hl>を、木ごとに決めていきます。高くなりすぎた木の手入れは自分で行うと危険が伴うため、判断の目安は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者の判断基準</Link>をご覧ください。根元から整理する場合、切り株を残すか抜くかで費用と後の使い方が変わります。違いは<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違い</Link>、残した場合に起きることは<Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株を放置するとどうなるか</Link>にまとめています。植え替えるなら、次は家の大きさに合った木を選ぶのが更新の要点で、<Link href="/symboltree-teire/" className="text-[#2D7F3E] underline">シンボルツリーの手入れの基本</Link>と<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>が参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            近所の家が同じ時期に同じ悩みを抱えているということは、<Hl>業者への依頼も同じ時期に集中しやすい</Hl>ということでもあります。急ぎでなければ、混み合う時期を避けて計画を立てるほうが段取りしやすくなります。切る時期の考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>を参考にしてください。大きくなった木を根元から更新するなら、伐採110番は伐採・抜根から木材処分まで一括で相談でき、見積もりは無料です。更新のついでに庭全体を軽くしたい場合は<Link href="/niwajimai/" className="text-[#2D7F3E] underline">庭じまいとローメンテナンス化の進め方</Link>もあわせてご覧ください。
          </p>

          {/* 5 */}
          <H2 id="chuko" num="5">中古で買った家の庭は「前の持ち主の手入れ」を読み解いてから頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            住む人の世代が入れ替わる住宅地では、中古で家を買って庭を引き継ぐ人が増えます。引き継いだ庭には、<Hl>前の持ち主が植えた木、残した切り株、植えたまま忘れられた球根や宿根草、どこにつながっているか分からない排水桝</Hl>が残っています。最初の見積もりを頼む前に、庭に何があるのかを一通り確かめておくと、頼む内容がはっきりします。確認の順番は<Link href="/chuko-jutaku-niwa-kakunin/" className="text-[#2D7F3E] underline">中古住宅の庭の確認ポイント</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            引き継いだ直後に全部を切ってしまうのは、もったいないことがあります。<Hl>一年を通して見ると、花が咲く木、実がなる木、日陰を作ってくれている木が分かってきます</Hl>。最初の一年は最低限の手入れで様子を見て、残す木と手放す木を分けるのがおすすめです。季節ごとの見どころは<Link href="/kaboku-kaika-teire/" className="text-[#2D7F3E] underline">花木の開花と手入れの基本</Link>、春と秋の点検は<Link href="/haru-niwa-checklist/" className="text-[#2D7F3E] underline">春の庭仕事チェックリスト</Link>と<Link href="/aki-niwa-checklist/" className="text-[#2D7F3E] underline">秋の庭仕事チェックリスト</Link>を参考にしてください。弱っているように見える木も、枯れているのか休んでいるだけなのかを見極めてから判断しましょう。目安は<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確かめておきたいのは庭の中だけではありません。<Hl>隣家との塀がどちらの所有か、隣家に張り出している枝をこれまでどう扱ってきたか</Hl>は、前の持ち主の時代の慣行がそのまま引き継がれています。塀の所有や境界の位置がはっきりしない場合は、土地家屋調査士などの専門家に相談する範囲です。庭を作り替えたい場合、植栽の作業と外構の工事は担当が分かれることがあるため、<Link href="/niwa-reform-gaiko-chigai/" className="text-[#2D7F3E] underline">庭リフォームと外構工事の違い</Link>で切り分けを確認してください。何から手をつけるべきか迷うなら、くらしのマーケットで庭の写真を送って予約前にメッセージで相談する使い方があり、残した木を毎年整えていくならsmileガーデンの定額制の年間管理プランで回数と時期を決めて任せる方法もあります。
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
          <H2 id="faq" num="7">堺の庭業者でよくある質問</H2>
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
            堺で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。道路側に張り出した木を1本単位で整えるなら樹種別の目安がある剪定110番、歩道との境目や家のまわりの草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、家に対して大きくなりすぎた木の更新や切り株の抜根なら処分まで一括の伐採110番、歩道に面した生垣を定期的に整えるならsmileガーデン、引き継いだ庭の写真を送って相談してから頼むならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            区画整理された住宅地やニュータウン型の街区が広がる堺では、「どこまでが自分の管理か」を確かめることが依頼の出発点になります。歩道の街路樹や植樹帯は自治体、共用緑地や緑道は管理組合・自治会と相談先を切り分けること、協定や申し合わせの有無を確かめてから生垣に手を入れること、同じ時期に大きくなった木は剪定で維持するか更新するかを木ごとに決めること、引き継いだ庭は一年見てから残す木を選ぶこと、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["堺", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/shikichi-kyokai-hei/", label: "敷地境界と塀の基礎知識" },
                { href: "/chuko-jutaku-niwa-kakunin/", label: "中古住宅の庭の確認ポイント" },
                { href: "/bassai-bakkon-chigai/", label: "伐採と抜根の違い" },
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
