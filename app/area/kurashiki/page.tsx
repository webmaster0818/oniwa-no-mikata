import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/kurashiki/";
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
      "【2026年最新】倉敷の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "倉敷で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・くらしのマーケットの料金と特徴、平らで水の抜けにくい庭の相談先の切り分け、白壁の蔵や塀ぎわの植栽と建物との距離、もとは田畑だった土地の締まりやすい土、古い家の庭を引き継いだときの現状確認まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】倉敷の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "倉敷で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。平らで水の抜けにくい庭で暗渠や排水を誰に相談するかの切り分け、白壁の蔵や塀ぎわの植栽を建物との距離で考える見方、もとは田畑だった土地の締まりやすい土との付き合い方、古い家の庭を図面がない前提で確かめてから頼む手順も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、倉敷市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。蔵や塀に枝が触れている木だけ整えたい、といった依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "蔵や塀に触れている枝を戻したい人",
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
        ため、水が残りやすい低い一角や、平らで広い裏手など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "水が残りやすく草の伸びる一角を範囲を決めて片付けたい人",
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
        のが特徴です。蔵や塀のすぐそばで大きくなりすぎた木や、引き継いだ庭の傾いた木を根元から整理したい場合にも相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "蔵や塀のそばで大きくなりすぎた木を整理したい人",
      "引き継いだ庭の傾いた木・枯れた木を片付けたい人",
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
        で剪定・消毒・施肥をセットで任せられます。締まりやすい土で木の元気が出にくい庭では、施肥まで含めて毎年の決まりごとにする形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "剪定と施肥を毎年セットで任せたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。倉敷市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、雨上がりの庭の写真を送って水が残る場所の相談ができるかを聞いてから予約する、といった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで庭の写真を送って相談したい人",
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
    t: "① 雨上がりの庭と「壁との距離」が分かる写真を伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭のどこに水が残るのか、木が蔵や塀からどれくらい離れているのかを写真で伝えましょう。雨上がりに撮った写真は水のたまる場所を伝えるのに役立ち、壁ぎわの木は幹の位置と枝の広がりが壁と一緒に写っていると、作業のしかたと養生の相談がしやすくなります。引き継いだばかりの庭なら、分かっている範囲で木や石の来歴も添えると、見積もりの精度が上がります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 暗渠・水路・壁・境界にかかわる作業は相談先を切り分ける",
    b: "植栽の手入れや表面の水はけの改善は庭業者に相談できますが、地中に排水管を通す暗渠の工事や既存の給排水管につなぐ作業は指定工事事業者や土木の業者、水路への放流にかかわることは水路の管理者への確認、蔵や塀そのものの補修は左官や建築の専門業者、隣地との境界がはっきりしない場合は土地家屋調査士などの専門家の範囲です。庭業者に頼める範囲と、別の専門家に頼む範囲を最初に切り分けておくと、話が二度手間になりません。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "倉敷で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。蔵や塀に枝が触れている木だけ整えたい、といった依頼もできます。樹種や高さによって手間が変わるため、最低価格ではなく出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "雨のあと、庭の一角にいつまでも水が残ります。誰に相談すればよいですか？",
    a: "まずは、水がどこにたまり、どこへ流れていくはずなのかを確かめるところからです。表面の傾きを直す、砂利や土を入れ替える、植栽で対処するといった範囲は庭業者に相談できます。排水桝の掃除は自分で見られる範囲もあります。一方で、地中に排水管を通す暗渠の工事や、既存の給排水管につなぐ作業は指定工事事業者や土木の業者の範囲で、水路へ水を流すことにかかわる場合は水路の管理者への確認が必要になることもあります。当サイトの庭の水はけ改善の記事に、原因の切り分け方をまとめています。",
  },
  {
    q: "蔵の白壁に沿って植えた木が、壁を傷めていないか心配です。",
    a: "枝葉が壁に触れ続けると汚れや傷の原因になり、壁ぎわに枝が茂って風が通らないと湿気がこもって壁面の傷みを早めることがあります。つる植物が壁に張り付いている場合も、はがすときに表面を傷めやすくなります。庭の側でできるのは、枝が壁に触れない幅まで戻し、風が抜ける隙間を保つことです。壁そのものにひび・剥がれ・ふくらみといった変化がある場合は、庭業者ではなく左官や建築の専門業者に見てもらう範囲です。",
  },
  {
    q: "もとは田んぼだった土地で、植えた木の元気がありません。土が原因でしょうか？",
    a: "水を保つ性質の強い土は、踏まれると締まって固くなり、乾くとひび割れ、根が深く入りにくくなります。根元がいつまでも湿っている、葉の色が冴えない、といった様子があれば、土の状態が関係している可能性はあります。植える前なら土の入れ替えや高植えといった準備ができ、植えてある木なら施肥や周囲の土の改良で様子を見る方法があります。当サイトの花壇の土づくりの記事と庭木の肥料の記事に考え方をまとめています。枯れているかどうかの見分けは、庭木が枯れたかどうかの見分け方の記事を参考にしてください。",
  },
  {
    q: "古い家を購入しました。庭の石や灯篭、木をどうすればよいか分かりません。",
    a: "図面や記録が残っていないことは珍しくないため、現状を確かめることから始めるのが確実です。傾いている木や枯れた木といった危険なものから優先して見て、次に境界と排水、地面に埋まっている配管や井戸の有無を確かめます。掘る作業は配管を傷めることがあるため、位置が分からないうちは無理をしないでください。石や灯篭は、残すものと撤去するものを分けてから相談すると見積もりを比べやすくなります。当サイトの中古住宅購入時の庭の確認と、庭石・灯篭の撤去の記事に手順をまとめています。",
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

export default function AreaKurashikiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】倉敷の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "倉敷で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "倉敷の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#kurashiki5",
      label: "1｜倉敷で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "倉敷の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#sec2", label: "2｜平らで水の抜けにくい庭は「水の逃げ道」と「相談先」を切り分けてから手を入れる" },
    { href: "#sec3", label: "3｜白壁の蔵・塀ぎわの植栽は「建物との距離」で考える" },
    { href: "#sec4", label: "4｜もとは田畑だった土地の庭は「締まりやすい土」から考える" },
    { href: "#sec5", label: "5｜古い家の庭を引き継いだら「図面がない」前提で現状を確かめてから頼む" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜倉敷の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">倉敷の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】倉敷の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["倉敷", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="倉敷の剪定・伐採・草刈り業者の比較"
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
              「雨のあと、庭の一角にいつまでも水が残る」「蔵の白壁に沿って植えた木が、壁を汚したり湿らせたりしていないか心配」「古い家を買ったが、庭の木や石が何のためにあるのか分からない」——倉敷で庭業者を探すきっかけには、干拓で広がった平らな土地と水路、白壁の蔵が並ぶ古い町並みといった、この土地ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、倉敷市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「平らで水の抜けにくい庭で暗渠や排水を誰に相談するかの切り分け」「白壁の蔵や塀ぎわの植栽を建物との距離で考える見方」「もとは田畑だった土地の締まりやすい土との付き合い方」「古い家の庭を図面がない前提で確かめてから頼む手順」といった、倉敷で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="kurashiki5" num="1">倉敷で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            倉敷市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月8日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            倉敷の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月8日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、倉敷での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="sec2" num="2">平らで水の抜けにくい庭は「水の逃げ道」と「相談先」を切り分けてから手を入れる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            倉敷の市街地の多くは、干拓によって広がった平らな土地に水路が張り巡らされて成り立っています。高低差が少ない土地では、<Hl>雨水が自然に流れて行きにくく、庭のわずかに低い一角に水が残りやすい</Hl>のが悩みの種です。水が残る場所は苔や蚊の発生源になり、木の根元がいつまでも湿って木の元気を奪うこともあります。まず確かめたいのは、庭のどこが低く、水はどこへ流れていくはずなのか、という「水の逃げ道」です。原因の切り分け方は<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            平らな庭の水はけは、<Hl>誰に相談する話なのかを最初に切り分ける</Hl>ことで、無駄な見積もりや行き違いが減ります。地面の表面にわずかな傾きをつける、砂利や土を入れ替える、湿った場所に合う植栽に変える、といった範囲は庭業者に相談できます。落ち葉や泥で詰まった排水桝の掃除は、自分で見られる範囲もあり、手順は<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">庭の排水桝の点検の基本</Link>をご覧ください。一方で、地中に排水管を通す暗渠の工事や、既存の給排水管につなぐ作業は指定工事事業者や土木の業者の範囲で、水路へ水を流すことにかかわる場合は水路の管理者への確認が必要になることもあります。庭業者に「暗渠を入れてほしい」と頼んでも対応できないことが多いため、まずは表面の対処で済む話か、地中や水路にかかわる話かを見極めてから相談先を決めましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            水が残る場所は、<Hl>水を減らすだけでなく、そこに何を置くかを見直す</Hl>ことでも変わります。庭を舗装すれば雨水の行き先が変わるため、コンクリートにするかどうかの判断は<Link href="/niwa-doma-concrete/" className="text-[#2D7F3E] underline">庭をコンクリートにする判断の考え方</Link>を、砂利敷きで足元を整える方法は<Link href="/jarishiki/" className="text-[#2D7F3E] underline">庭の砂利敷きの基礎知識</Link>を参考にしてください。水がたまる場所と茂みは蚊の居場所になりやすく、<Link href="/ka-hassei-shinikui-niwa/" className="text-[#2D7F3E] underline">蚊が発生しにくい庭づくり</Link>も合わせて見ておくと役に立ちます。苔を景観として活かすか対策するかは<Link href="/niwa-koke-taisaku/" className="text-[#2D7F3E] underline">庭の苔対策の基本</Link>をご覧ください。湿った一角で草がよく伸びるなら、草刈り110番のように1平米600円〜の掲載料金で範囲を決めて頼めるサービスに、刈り取りから防草シート施工までまとめて相談する方法もあります。
          </p>

          {/* 3 */}
          <H2 id="sec3" num="3">白壁の蔵・塀ぎわの植栽は「建物との距離」で考える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            白壁の蔵や漆喰の塀は倉敷の景観を象徴する存在で、古い家並みの住宅では、敷地の中に蔵や土塀が残っていることも珍しくありません。こうした建物のすぐそばに植えた木は、<Hl>枝葉が壁に触れ続けて汚れや傷の原因になり、壁ぎわに枝が茂って風が通らないと湿気がこもって壁面の傷みを早めます</Hl>。つる植物が壁に張り付いている場合は、見た目には風情があっても、はがすときに表面を傷めやすく、根が目地に入り込むこともあります。景観を守るためにも、植栽は「建物との距離」で考えるのが基本です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            距離の目安として見ておきたいのは、<Hl>枝が壁に触れない幅、風が抜ける隙間、落ち葉が壁際にたまらない足元</Hl>の三つです。枝は壁から戻す剪定で調整でき、壁ぎわの低木は厚みを減らして風の通り道をつくります。根が塀の基礎や敷石を押し上げることもあり、その見方は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>にまとめています。つるを壁面や塀に使うなら、壁そのものに這わせず支えを立てて誘引するのが原則で、考え方は<Link href="/tsurusei-fence-katsuyo/" className="text-[#2D7F3E] underline">つる性植物のフェンス活用</Link>と<Link href="/tsuru-shokubutsu-kanri/" className="text-[#2D7F3E] underline">ツル植物の管理の基本</Link>をご覧ください。壁そのものにひび・剥がれ・ふくらみといった変化が出ている場合は、庭業者の範囲ではなく左官や建築の専門業者に見てもらう領域です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            塀ぎわの木が隣地との境界に近い場合は、<Hl>塀が誰のものか、境界がどこかを先に確かめておく</Hl>と、作業の範囲を決めやすくなります。境界標の見方は<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>にまとめており、境界がはっきりしない場合は土地家屋調査士などの専門家に相談する範囲です。目隠しの役割を持たせている木は、壁から離しても役割が保てる仕立て方があり、<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>が参考になります。剪定110番は庭木1本から依頼でき、剪定1本2,890円〜（出張費3,000円別途）の掲載料金で、現地調査・見積もりは無料です。蔵や塀のすぐそばで大きくなりすぎた木を根元から整理したい場合は、伐採110番のように伐採後の木材処分まで一括対応をうたうサービスに、壁の養生を含めて相談しましょう。
          </p>

          {/* 4 */}
          <H2 id="sec4" num="4">もとは田畑だった土地の庭は「締まりやすい土」から考える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            干拓地や、田畑から宅地に変わった土地の庭では、<Hl>水を保つ性質の強い、きめの細かい土</Hl>に出会うことがよくあります。この土は、踏まれると締まって固くなり、乾くとひび割れ、雨が降るとぬるぬるとして水が抜けにくくなります。木の根が深く入りにくく、根元がいつまでも湿ったままになりやすいため、植えたのに木の元気が出ない、という悩みにつながりがちです。土の性質を知り、それに合わせた準備をするのが、この土地の庭の出発点です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            これから植える場所なら、<Hl>植え穴の土を入れ替える、有機物を混ぜて土をほぐす、周囲より少し高く植える</Hl>といった準備で、根のまわりに水と空気が入る状態をつくれます。基本の考え方は<Link href="/kadan-tsuchizukuri/" className="text-[#2D7F3E] underline">花壇の土づくりの基本</Link>にまとめています。鉢で育てていた木を庭に下ろすときも、土の準備で結果が変わります。手順は<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えから地植えへの植え替え</Link>をご覧ください。すでに植えてある木は、根元を踏み固めないよう周囲の動線を見直し、時期を選んで施肥をすることで様子を見る方法があります。肥料の考え方は<Link href="/niwaki-hiryo/" className="text-[#2D7F3E] underline">庭木の肥料・施肥の基礎</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            葉の色が冴えない、枝先から枯れてくる、といった様子があるときは、<Hl>水の与えすぎと水切れのどちらなのかを、根元の土の状態で見分ける</Hl>ことが要になります。土が締まっていると、表面は乾いていても根元は湿っている、ということが起こります。見分け方は<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの基本</Link>と<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>にまとめています。芝が育ちにくい場所は、無理に芝を続けるより、地面を覆う別の仕上げに変える選択肢もあり、<Link href="/groundcover-erabikata/" className="text-[#2D7F3E] underline">グランドカバープランツの選び方</Link>と<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>が参考になります。剪定と施肥を毎年の決まりごとにするなら、smileガーデンの定額制の年間管理プランのように、剪定・消毒・施肥をセットにして時期を決めて任せる方法があります。
          </p>

          {/* 5 */}
          <H2 id="sec5" num="5">古い家の庭を引き継いだら「図面がない」前提で現状を確かめてから頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            古い町並みの家を引き継いだり購入したりすると、庭の木や石、灯篭、井戸や池が何のためにあるのか分からないまま暮らし始めることになります。<Hl>庭の図面や、どこに配管が埋まっているかの記録が残っていないことは珍しくありません</Hl>。こうした庭では、いきなり「全部きれいにしてほしい」と頼むより、現状を確かめる順番を踏んでから頼むほうが、費用も後悔も少なくて済みます。入居後に見ておきたい点は<Link href="/chuko-jutaku-niwa-kakunin/" className="text-[#2D7F3E] underline">中古住宅購入時の庭の現状確認</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確かめる順番は、<Hl>危険なものから先に</Hl>が基本です。傾いている木、枯れ枝の多い木、隣家や道路へ張り出している木は、放っておくと外へ影響が出るため最初に見てもらいます。次に境界と排水を確かめ、地面に埋まっている配管や、ふたをされた井戸の有無を確認します。掘る作業は配管を傷めることがあるため、位置が分からないうちは無理をせず、給排水にかかわる部分は指定工事事業者の範囲だと切り分けておきましょう。使われなくなった井戸や池の扱いは<Link href="/ido-ike-kanri/" className="text-[#2D7F3E] underline">井戸・池のある庭の管理</Link>を参考にしてください。傾いた木や枯れた木の整理は、伐採110番のように伐採後の木材処分まで一括で頼めるサービスに、現地を見てもらったうえで相談する方法があります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            危険がないと分かったら、<Hl>残すものと撤去するものを分けてから相談する</Hl>と、見積もりを比べやすくなります。庭石や灯篭は撤去の進め方によって費用が変わるため、<Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯篭の撤去の基礎知識</Link>で判断の目安を確かめておきましょう。和風に仕立てられた庭を残して手入れするなら<Link href="/wafu-niwa-teire/" className="text-[#2D7F3E] underline">和風の庭の手入れの基本</Link>が参考になります。作り替えの提案を受けたときの図面の読み方は<Link href="/niwa-sekkeizu-mikata/" className="text-[#2D7F3E] underline">庭の設計図・平面図の読み方</Link>にまとめています。作業単位で近隣の事業者を比べたいなら、くらしのマーケットで口コミ・料金を見比べ、庭の写真を送って対応できる範囲を予約前のメッセージで確認してから頼む方法があります。
          </p>

          {/* 6｜選び方 */}
          <H2 id="erabikata" num="6">失敗しない庭業者の選び方4ステップ</H2>
          <p className="leading-loose mb-6 text-[#4a5443]">
            庭業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。「水が残って困っているから」と最初の1社に即決する前に、数分の確認でトラブルの多くは防げます。
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
          <H2 id="faq" num="7">倉敷の庭業者でよくある質問</H2>
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
            倉敷で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。蔵や塀に触れている枝を1本単位で戻すなら樹種別の目安がある剪定110番、水が残りやすい一角の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、壁ぎわで大きくなりすぎた木や引き継いだ庭の傾いた木の整理なら処分まで一括の伐採110番、締まりやすい土の庭で剪定と施肥を毎年セットで任せるならsmileガーデン、庭の写真を送って対応範囲を確かめてから頼むならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            平らな土地と水路、白壁の町並みが特徴の倉敷の庭では、水の逃げ道を確かめて表面の対処で済む話か地中や水路にかかわる話かを切り分けること、蔵や塀ぎわの植栽は建物との距離で考えて壁そのものの変化は専門業者に見てもらうこと、締まりやすい土は植える前の準備と根元の状態の見分けで付き合うこと、引き継いだ庭は図面がない前提で危険なものから順に確かめること、暗渠・水路・壁・境界は相談先が分かれる領域だと切り分けること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["倉敷", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/kusakari-110ban/", label: "草刈り110番の口コミ・評判" },
                { href: "/niwa-mizuhake/", label: "庭の水はけ改善の考え方" },
                { href: "/kadan-tsuchizukuri/", label: "花壇の土づくりの基本" },
                { href: "/chuko-jutaku-niwa-kakunin/", label: "中古住宅購入時の庭の現状確認" },
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
