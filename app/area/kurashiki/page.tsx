import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/kurashiki/";
const UPDATED = "2026年10月20日";
const UPDATED_ISO = "2026-10-20";

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
      "【2026年最新】倉敷の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "倉敷で剪定・伐採・草刈りを依頼できる庭業者5社を比較。剪定110番（1本4,000円〜・税込）・草刈り110番（1平米163円〜・税込）などの料金と特徴、水の抜けにくい庭の相談先、蔵や塀ぎわの植栽、田畑だった土地の土、古い家の庭の現状確認を編集部が中立の立場でまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】倉敷の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "倉敷で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。水の抜けにくい庭の相談先の切り分け、白壁の蔵や塀ぎわの植栽と建物の距離、田畑だった土地の締まりやすい土への対処、図面のない古い家の庭を確認してから依頼する手順も解説します。",
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
    catch: "1本4,000円〜（税込）・24時間365日受付",
    name: "剪定110番",
    officialUrl: "https://www.sharing-tech.co.jp/sentei/",
    image: "/images/sentei-110ban-features-v2.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、倉敷市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本4,000円〜（税込）の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。蔵や塀に枝が触れている木だけを整えたいといった依頼にも適しています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "蔵や塀に触れている枝を戻したい方",
      "庭木1本から依頼したい方",
      "見積もり後の追加料金なしの明朗会計を重視する方",
      "剪定と合わせて伐採・草刈り・消毒も相談したい方",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "4,000円〜（税込）", note: "樹種・高さで変動" },
      { k: "出張費", v: "地域により別途の場合あり", note: "公式に金額の記載なし" },
      { k: "受付時間", v: "24時間365日" },
      { k: "見積もり", v: "現地調査・見積もり無料・追加料金なし" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "当サイトの各社紹介ページ作成時の調査で、剪定1本4,000円〜（税込）・出張費は地域により別途の場合あり・24時間365日受付・請負賠償保険加入を確認しています。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-2",
    catch: "1平米163円〜（税込）・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.sharing-tech.co.jp/kusakari/",
    image: "/images/kusakari-110ban-features-v2.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米163円〜（税込）の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>面積で費用の見当がつく</Hl>
        ため、水が残りやすい低い一角や、平らで広い裏手など、範囲を決めて依頼しやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "水が残りやすく草の伸びる一角を範囲を決めて片付けたい方",
      "面積で費用の見当をつけたい方",
      "草刈り後の防草シート施工まで相談したい方",
      "定期契約で雑草管理の手間をなくしたい方",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり163円〜（税込）", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米163円〜（税込）の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトの各社紹介ページ作成時に確認しています。機械作業が中心のため狭い場所には対応しにくい場合があり、夏場の繁忙期は予約が混み合います。面積と草の状態で総額が変わるため、見積もりでご確認ください。",
  },
  {
    slug: "bassai-110ban",
    num: "1-3",
    catch: "伐採・抜根専門・処分まで一括",
    name: "伐採110番",
    officialUrl: "https://www.sharing-tech.co.jp/baxtusai/",
    image: "/images/bassai-110ban-features-v2.png",
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
      "蔵や塀のそばで大きくなりすぎた木を整理したい方",
      "引き継いだ庭の傾いた木・枯れた木を片付けたい方",
      "伐採した木材の処分まで一括で依頼したい方",
      "抜根して庭を作り替えたい方",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトの各社紹介ページ作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。",
  },
  {
    slug: "smile-garden",
    num: "1-4",
    catch: "定額制の年間管理・写真付き報告書",
    name: "smileガーデン",
    officialUrl: "https://www.smile-garden1128.com/",
    image: "/images/smile-garden-features.png",
    intro: (
      <>
        smileガーデンは、全国展開のフランチャイズ型お庭メンテナンスサービスです。公式掲載の実績値として
        <Hl>年間実績3万件・リピート率95%以上</Hl>
        を掲げ、<Hl>定額制の年間管理プラン</Hl>
        で剪定・消毒・施肥をセットで任せられます。締まりやすい土で木の生育が思わしくない庭では、施肥まで含めて毎年の定例作業にする形が適しています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "剪定と施肥を毎年セットで任せたい方",
      "一年を通して庭の手入れを定額で任せたい方",
      "剪定・消毒・施肥をセットでまとめたい方",
      "留守中の作業でも報告書で仕上がりを確認したい方",
    ],
    table: [
      { k: "草刈り（草丈50cm未満）", v: "1m²あたり税込220円〜550円", note: "公式料金表の目安単価" },
      { k: "庭木剪定（高さ1〜3m未満）", v: "1本あたり税込1,650円〜6,600円", note: "公式料金表の目安単価" },
      { k: "伐採（高さ1〜3m未満・幹直径15cm未満）", v: "1本あたり税込3,300円〜11,000円", note: "公式料金表の目安単価" },
      { k: "最低受注金額", v: "税込8,800円〜13,200円", note: "地域により異なる" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "年間管理プラン、見積もり・出張費無料、年間実績3万件・リピート率95%以上という実績値、料金表の目安単価は、2026年10月19日に公式サイトで確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。倉敷市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、雨上がりの庭の写真を送り、水が残る場所について相談できるかを確認してから予約するといった使い方にも適しています。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい方",
      "料金を比較してから依頼したい方",
      "予約前にメッセージで庭の写真を送って相談したい方",
      "万が一の補償制度を重視する方",
    ],
    table: [
      { k: "料金の特徴", v: "出店者ごとに事前明示", note: "口コミ・実績と合わせて比較" },
      { k: "予約", v: "オンラインで完結", note: "業者と直接メッセージ可" },
      { k: "補償", v: "トラブル時の費用補償制度あり" },
      { k: "運営会社", v: "みんなのマーケット株式会社" },
    ],
    memo:
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトの各社紹介ページ作成時に確認しています。出店者ごとにサービス品質は異なるため、口コミ・実績をよく確認し、予約前にメッセージで作業内容を相談することをおすすめします。",
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
    price: "剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）",
    point: "24時間365日受付・見積もり後の追加料金なし",
  },
  {
    slug: "kusakari-110ban",
    name: "草刈り110番",
    type: "マッチング型",
    price: "草刈り1平米163円〜（税込）",
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
    price: "剪定1本税込1,650円〜・草刈り1m²税込220円〜（公式の目安単価）",
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
    b: "「剪定」「伐採」「草刈り」のどれを依頼したいのかに加えて、庭のどこに水が残るのか、木が蔵や塀からどれくらい離れているのかを写真で伝えてください。雨上がりに撮った写真は水のたまる場所を伝えるのに役立ちます。壁ぎわの木は、幹の位置と枝の広がりが壁と一緒に写っていると、作業の方法と養生の相談がしやすくなります。引き継いだばかりの庭であれば、分かっている範囲で木や石の来歴も添えると、見積もりの精度が上がります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を確認してから判断できます。",
  },
  {
    t: "③ 暗渠・水路・壁・境界にかかわる作業は相談先を切り分ける",
    b: "植栽の手入れや表面の水はけの改善は庭業者に相談できます。一方で、地中に排水管を通す暗渠の工事や既存の給排水管につなぐ作業は指定工事事業者や土木の業者、水路への放流に関わることは水路の管理者への確認、蔵や塀そのものの補修は左官や建築の専門業者、隣地との境界がはっきりしない場合は土地家屋調査士などの専門家の範囲です。庭業者に依頼できる範囲と、別の専門家に依頼する範囲を最初に切り分けておくと、相談の二度手間を防げます。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較することをおすすめします。金額や説明に納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
];

const faqs = [
  {
    q: "倉敷で庭木1本だけの剪定でも依頼できますか？",
    a: "依頼できます。剪定110番は庭木1本からの依頼に対応しており、剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）です。蔵や塀に枝が触れている木だけを整えたいといった依頼も可能です。樹種や高さによって手間が変わるため、最低価格ではなく出張費を含めた総額を見積もりでご確認ください。現地調査・見積もりは無料です。",
  },
  {
    q: "雨のあと、庭の一角にいつまでも水が残ります。誰に相談すればよいですか？",
    a: "まずは、水がどこにたまり、どこへ流れていくはずなのかを確認することから始めます。表面の傾きを直す、砂利や土を入れ替える、植栽で対処するといった範囲は庭業者に相談できます。排水桝の掃除はご自身で確認できる範囲もあります。一方で、地中に排水管を通す暗渠の工事や、既存の給排水管につなぐ作業は指定工事事業者や土木の業者の範囲で、水路へ水を流すことに関わる場合は水路の管理者への確認が必要になることもあります。当サイトの庭の水はけ改善の記事に、原因の切り分け方をまとめています。",
  },
  {
    q: "蔵の白壁に沿って植えた木が、壁を傷めていないか心配です。",
    a: "枝葉が壁に触れ続けると汚れや傷の原因になり、壁ぎわに枝が茂って風が通らないと、湿気がこもって壁面の傷みを早めることがあります。つる植物が壁に張り付いている場合も、はがす際に表面を傷めやすくなります。庭の側でできるのは、枝が壁に触れない幅まで戻し、風が抜ける隙間を保つことです。壁そのものにひび・剥がれ・ふくらみといった変化がある場合は、庭業者ではなく左官や建築の専門業者に確認してもらう範囲です。",
  },
  {
    q: "もとは田んぼだった土地で、植えた木の元気がありません。土が原因でしょうか？",
    a: "水を保つ性質の強い土は、踏まれると締まって固くなり、乾くとひび割れ、根が深く入りにくくなります。根元がいつまでも湿っている、葉の色がさえないといった様子があれば、土の状態が関係している可能性があります。植える前であれば土の入れ替えや高植えといった準備ができ、すでに植えてある木であれば施肥や周囲の土の改良で様子を見る方法があります。当サイトの花壇の土づくりの記事と庭木の肥料の記事に考え方をまとめています。枯れているかどうかの見分け方は、庭木が枯れたかどうかの見分け方の記事を参考にしてください。",
  },
  {
    q: "古い家を購入しました。庭の石や灯篭、木をどうすればよいか分かりません。",
    a: "図面や記録が残っていないことは珍しくないため、現状を確認することから始めるのが確実です。傾いている木や枯れた木といった危険なものを優先して確認し、次に境界と排水、地面に埋まっている配管や井戸の有無を確認します。掘る作業は配管を傷めることがあるため、位置が分からないうちは無理をしないでください。石や灯篭は、残すものと撤去するものを分けてから相談すると、見積もりを比較しやすくなります。当サイトの中古住宅購入時の庭の確認と、庭石・灯篭の撤去の記事に手順をまとめています。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応を掲げています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ずご確認ください。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。",
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
      "【2026年最新】倉敷の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "倉敷で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
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
      label: "1｜倉敷で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "倉敷の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#sec2", label: "2｜平らで水の抜けにくい庭における排水経路と相談先の切り分け" },
    { href: "#sec3", label: "3｜白壁の蔵・塀ぎわの植栽と建物との距離" },
    { href: "#sec4", label: "4｜田畑だった土地の庭における締まりやすい土への対処" },
    { href: "#sec5", label: "5｜古い家の庭を引き継いだ際の現状確認の手順" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
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
              【2026年最新】倉敷の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              「雨の後、庭の一角にいつまでも水が残る」「蔵の白壁に沿って植えた木が、壁を汚したり湿らせたりしていないか心配」「古い家を購入したが、庭の木や石が何のためにあるのか分からない」など、倉敷で庭業者を探すきっかけには、干拓で広がった平らな土地と水路、白壁の蔵が並ぶ古い町並みといった、この土地ならではの事情が関わることがあります。
            </p>
            <p>
              本記事では、倉敷市内から依頼できる主要な庭業者を、当サイト編集部が各社の紹介ページ作成時に調査した料金・サービス内容をもとに比較しています。あわせて、「平らで水の抜けにくい庭で暗渠や排水を誰に相談するかの切り分け」「白壁の蔵や塀ぎわの植栽を建物との距離で考える見方」「田畑だった土地の締まりやすい土への対処」「図面のない古い家の庭を確認してから依頼する手順」など、倉敷で特に確認しておくべき依頼の考え方もまとめています。業者選びの参考としてご活用ください。
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
          <H2 id="kurashiki5" num="1">倉敷で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            倉敷市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社の紹介ページ作成時に公式サイト等を調査した掲載値です（2026年9月8日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスター（現：お庭レスキュープロ）は全国47都道府県を対応エリアとしています（公式表記）。本ページではカード紹介に含めず、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            倉敷の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年9月8日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、倉敷での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
                  href={AFF[c.slug] ?? (c.officialUrl || undefined)}
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
                (AFF[c.slug] ?? c.officialUrl) ? (<p className="mb-5">
                  <a
                    href={AFF[c.slug] ?? (c.officialUrl || undefined)}
                    rel="sponsored nofollow noopener"
                    target="_blank"
                    className="text-[#2D7F3E] underline font-bold"
                  >
                    {c.name} 公式サイト
                  </a>
                </p>) : null
              )}

              <p className="leading-loose text-[#4a5443]">{c.intro}</p>

              <H4>このような方におすすめです</H4>
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
                {(AFF[c.slug] ?? c.officialUrl) ? (<a
                  href={AFF[c.slug] ?? (c.officialUrl || undefined)}
                  rel="sponsored nofollow noopener"
                  target="_blank"
                  className="block rounded-full bg-[#FF8C00] hover:bg-[#E07A00] transition-colors px-4 py-4 text-center text-[15px] font-bold text-white shadow-[0_4px_14px_rgba(255,140,0,0.3)]"
                >
                  {c.name}の公式サイトを見る
                </a>) : null}
                <Link
                  href={`/agents/${c.slug}/`}
                  className="block rounded-full bg-[#2D7F3E] hover:bg-[#1E5C2B] transition-colors px-4 py-4 text-center text-[15px] font-bold text-white"
                >
                  {c.name}の詳細ページを見る
                </Link>
              </div>
            </section>
          ))}

          {/* 2 */}
          <H2 id="sec2" num="2">平らで水の抜けにくい庭における排水経路と相談先の切り分け</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            倉敷の市街地の多くは、干拓によって広がった平らな土地に水路が張り巡らされて成り立っています。高低差が少ない土地では、<Hl>雨水が自然に流れにくく、庭のわずかに低い一角に水が残りやすい</Hl>という課題があります。水が残る場所は苔や蚊の発生源になり、木の根元がいつまでも湿って木を弱らせることもあります。まず確認すべきなのは、庭のどこが低く、水はどこへ流れていくはずなのかという排水経路です。原因の切り分け方は<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            平らな庭の水はけは、<Hl>誰に相談すべき内容なのかを最初に切り分ける</Hl>ことで、無駄な見積もりや行き違いが減ります。地面の表面にわずかな傾きをつける、砂利や土を入れ替える、湿った場所に合う植栽に変えるといった範囲は庭業者に相談できます。落ち葉や泥で詰まった排水桝の掃除はご自身で確認できる範囲もあり、手順は<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">庭の排水桝の点検の基本</Link>をご覧ください。一方で、地中に排水管を通す暗渠の工事や、既存の給排水管につなぐ作業は指定工事事業者や土木の業者の範囲で、水路へ水を流すことに関わる場合は水路の管理者への確認が必要になることもあります。庭業者に暗渠の設置を依頼しても対応できないことが多いため、表面の対処で済む内容か、地中や水路に関わる内容かを見極めてから相談先を決めてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            水が残る場所は、<Hl>水を減らすだけでなく、そこに何を置くかを見直す</Hl>ことでも改善できます。庭を舗装すれば雨水の行き先が変わるため、コンクリートにするかどうかの判断は<Link href="/niwa-doma-concrete/" className="text-[#2D7F3E] underline">庭をコンクリートにする判断の考え方</Link>を、砂利敷きで足元を整える方法は<Link href="/jarishiki/" className="text-[#2D7F3E] underline">庭の砂利敷きの基礎知識</Link>を参考にしてください。水がたまる場所と茂みは蚊の発生源になりやすいため、<Link href="/ka-hassei-shinikui-niwa/" className="text-[#2D7F3E] underline">蚊が発生しにくい庭づくり</Link>もあわせてご確認ください。苔を景観として活かすか対策するかは<Link href="/niwa-koke-taisaku/" className="text-[#2D7F3E] underline">庭の苔対策の基本</Link>をご覧ください。湿った一角で草がよく伸びる場合は、草刈り110番のように1平米163円〜（税込）の掲載料金で範囲を決めて依頼できるサービスに、刈り取りから防草シート施工までまとめて相談する方法もあります。
          </p>

          {/* 3 */}
          <H2 id="sec3" num="3">白壁の蔵・塀ぎわの植栽と建物との距離</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            白壁の蔵や漆喰の塀は倉敷の景観を象徴する存在で、古い家並みの住宅では、敷地の中に蔵や土塀が残っていることも珍しくありません。こうした建物のすぐそばに植えた木は、<Hl>枝葉が壁に触れ続けて汚れや傷の原因になり、壁ぎわに枝が茂って風が通らないと湿気がこもって壁面の傷みを早めます</Hl>。つる植物が壁に張り付いている場合は、見た目には風情があっても、はがす際に表面を傷めやすく、根が目地に入り込むこともあります。景観を守るためにも、植栽は建物との距離を基準に考えるのが基本です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            距離の目安として確認すべきなのは、<Hl>枝が壁に触れない幅、風が抜ける隙間、落ち葉が壁際にたまらない足元</Hl>の三つです。枝は壁から戻す剪定で調整でき、壁ぎわの低木は厚みを減らして風の通り道をつくります。根が塀の基礎や敷石を押し上げることもあり、その確認方法は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>にまとめています。つるを壁面や塀に使う場合は、壁そのものに這わせず支えを立てて誘引するのが原則で、考え方は<Link href="/tsurusei-fence-katsuyo/" className="text-[#2D7F3E] underline">つる性植物のフェンス活用</Link>と<Link href="/tsuru-shokubutsu-kanri/" className="text-[#2D7F3E] underline">ツル植物の管理の基本</Link>をご覧ください。壁そのものにひび・剥がれ・ふくらみといった変化が出ている場合は、庭業者の範囲ではなく、左官や建築の専門業者に確認してもらう領域です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            塀ぎわの木が隣地との境界に近い場合は、<Hl>塀の所有者と境界の位置を事前に確認しておく</Hl>と、作業の範囲を決めやすくなります。境界標の見方は<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>にまとめており、境界がはっきりしない場合は土地家屋調査士などの専門家に相談する範囲です。目隠しの役割を持たせている木は、壁から離しても役割を保てる仕立て方があり、<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>が参考になります。剪定110番は庭木1本から依頼でき、剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）の掲載料金で、現地調査・見積もりは無料です。蔵や塀のすぐそばで大きくなりすぎた木を根元から整理したい場合は、伐採110番のように伐採後の木材処分まで一括対応を掲げるサービスに、壁の養生を含めてご相談ください。
          </p>

          {/* 4 */}
          <H2 id="sec4" num="4">田畑だった土地の庭における締まりやすい土への対処</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            干拓地や、田畑から宅地に変わった土地の庭では、<Hl>水を保つ性質の強い、きめの細かい土</Hl>が多く見られます。この土は、踏まれると締まって固くなり、乾くとひび割れ、雨が降るとぬかるんで水が抜けにくくなります。木の根が深く入りにくく、根元がいつまでも湿ったままになりやすいため、植えた木の生育が思わしくないという悩みにつながりがちです。土の性質を把握し、それに合わせた準備をすることが、この土地の庭づくりの出発点です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            これから植える場所であれば、<Hl>植え穴の土を入れ替える、有機物を混ぜて土をほぐす、周囲より少し高く植える</Hl>といった準備で、根のまわりに水と空気が入る状態をつくれます。基本の考え方は<Link href="/kadan-tsuchizukuri/" className="text-[#2D7F3E] underline">花壇の土づくりの基本</Link>にまとめています。鉢で育てていた木を庭に下ろす場合も、土の準備で結果が変わります。手順は<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えから地植えへの植え替え</Link>をご覧ください。すでに植えてある木は、根元を踏み固めないよう周囲の動線を見直し、時期を選んで施肥をすることで様子を見る方法があります。肥料の考え方は<Link href="/niwaki-hiryo/" className="text-[#2D7F3E] underline">庭木の肥料・施肥の基礎</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            葉の色がさえない、枝先から枯れてくるといった様子がある場合は、<Hl>水の与えすぎと水切れのどちらなのかを、根元の土の状態で見分ける</Hl>ことが重要です。土が締まっていると、表面は乾いていても根元は湿っているということが起こります。見分け方は<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの基本</Link>と<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>にまとめています。芝が育ちにくい場所は、無理に芝を続けるより、地面を覆う別の仕上げに変える選択肢もあり、<Link href="/groundcover-erabikata/" className="text-[#2D7F3E] underline">グランドカバープランツの選び方</Link>と<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>が参考になります。剪定と施肥を毎年の定例作業にする場合は、smileガーデンの定額制の年間管理プランのように、剪定・消毒・施肥をセットにして時期を決めて任せる方法があります。
          </p>

          {/* 5 */}
          <H2 id="sec5" num="5">古い家の庭を引き継いだ際の現状確認の手順</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            古い町並みの家を引き継いだり購入したりすると、庭の木や石、灯篭、井戸や池が何のためにあるのか分からないまま暮らし始めることになります。<Hl>庭の図面や、どこに配管が埋まっているかの記録が残っていないことは珍しくありません</Hl>。こうした庭では、いきなり「全部きれいにしてほしい」と依頼するより、順を追って現状を確認してから依頼するほうが、費用面でも仕上がりの面でも納得しやすくなります。入居後に確認すべき点は<Link href="/chuko-jutaku-niwa-kakunin/" className="text-[#2D7F3E] underline">中古住宅購入時の庭の現状確認</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認の順番は、<Hl>危険なものから先に</Hl>が基本です。傾いている木、枯れ枝の多い木、隣家や道路へ張り出している木は、放置すると外部へ影響が出るため最初に確認してもらいます。次に境界と排水を確認し、地面に埋まっている配管や、ふたをされた井戸の有無を確認します。掘る作業は配管を傷めることがあるため、位置が分からないうちは無理をせず、給排水に関わる部分は指定工事事業者の範囲として切り分けておいてください。使われなくなった井戸や池の扱いは<Link href="/ido-ike-kanri/" className="text-[#2D7F3E] underline">井戸・池のある庭の管理</Link>を参考にしてください。傾いた木や枯れた木の整理は、伐採110番のように伐採後の木材処分まで一括で依頼できるサービスに、現地を確認してもらったうえで相談する方法があります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            危険がないと分かったら、<Hl>残すものと撤去するものを分けてから相談する</Hl>と、見積もりを比較しやすくなります。庭石や灯篭は撤去の進め方によって費用が変わるため、<Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯篭の撤去の基礎知識</Link>で判断の目安をご確認ください。和風に仕立てられた庭を残して手入れする場合は<Link href="/wafu-niwa-teire/" className="text-[#2D7F3E] underline">和風の庭の手入れの基本</Link>が参考になります。作り替えの提案を受けた際の図面の読み方は<Link href="/niwa-sekkeizu-mikata/" className="text-[#2D7F3E] underline">庭の設計図・平面図の読み方</Link>にまとめています。作業単位で近隣の事業者を比較したい場合は、くらしのマーケットで口コミ・料金を比較し、庭の写真を送って対応できる範囲を予約前のメッセージで確認してから依頼する方法があります。
          </p>

          {/* 6｜選び方 */}
          <H2 id="erabikata" num="6">庭業者の選び方（4つの手順）</H2>
          <p className="leading-loose mb-6 text-[#4a5443]">
            庭業者を選ぶ際は、次の4つの手順で確認することをおすすめします。水が残って困っているという理由で最初の1社に即決する前に数分の確認を行うことで、多くのトラブルを防ぐことができます。
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
            倉敷で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。蔵や塀に触れている枝を1本単位で戻す場合は樹種別の目安がある剪定110番、水が残りやすい一角の草を範囲を決めて片付ける場合は面積単価が分かりやすい草刈り110番、壁ぎわで大きくなりすぎた木や引き継いだ庭の傾いた木の整理には処分まで一括で対応する伐採110番、締まりやすい土の庭で剪定と施肥を毎年セットで任せる場合はsmileガーデン、庭の写真を送って対応範囲を確認してから依頼したい場合はくらしのマーケットが適しており、目的によって向いているサービスは異なります。大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            平らな土地と水路、白壁の町並みが特徴の倉敷の庭では、排水経路を確認して表面の対処で済む内容か地中や水路に関わる内容かを切り分けること、蔵や塀ぎわの植栽は建物との距離で考え、壁そのものの変化は専門業者に確認してもらうこと、締まりやすい土には植える前の準備と根元の状態の見極めで対処すること、引き継いだ庭は図面がない前提で危険なものから順に確認すること、暗渠・水路・壁・境界は相談先が分かれる領域として切り分けること、そして処分費・出張費を含めた総額を作業前に確認することが、業者選びにおける共通の注意点です。本記事の比較を参考に、庭の状況に合った業者をお選びください。
          </p>
          <div className="rounded-2xl bg-[#2D7F3E] text-white p-6 text-center">
            <p className="font-bold text-lg mb-2">お庭のお手入れでお困りの方へ</p>
            <p className="text-green-50 text-sm mb-4">
              各社の詳細ページで評判・料金を比較し、条件に合う業者をお選びください。
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
                { href: "/area/fukuyama/", label: "福山の庭業者おすすめ5選" },
                { href: "/area/hirakata/", label: "枚方の庭業者おすすめ5選" },
                { href: "/area/kashiwa/", label: "柏の庭業者おすすめ5選" },
                { href: "/area/toyota/", label: "豊田の庭業者おすすめ5選" },
                { href: "/area/yokkaichi/", label: "四日市の庭業者おすすめ5選" },
                { href: "/area/akashi/", label: "明石の庭業者おすすめ5選" },
                { href: "/area/takatsuki/", label: "高槻の庭業者おすすめ5選" },
                { href: "/area/tokorozawa/", label: "所沢の庭業者おすすめ5選" },
                { href: "/area/koshigaya/", label: "越谷の庭業者おすすめ5選" },
                { href: "/area/kasugai/", label: "春日井の庭業者おすすめ5選" },
                { href: "/area/kurume/", label: "久留米の庭業者おすすめ5選" },
                { href: "/area/tsukuba/", label: "つくばの庭業者おすすめ5選" },
                { href: "/area/hiratsuka/", label: "平塚の庭業者おすすめ5選" },
                { href: "/area/yao/", label: "八尾の庭業者おすすめ5選" },
                { href: "/area/yokosuka/", label: "横須賀の庭業者おすすめ5選" },
                { href: "/area/suita/", label: "吹田の庭業者おすすめ5選" },
                { href: "/area/iwaki/", label: "いわきの庭業者おすすめ5選" },
                { href: "/area/kakogawa/", label: "加古川の庭業者おすすめ5選" },
                { href: "/area/ichihara/", label: "市原の庭業者おすすめ5選" },
                { href: "/area/fuchu/", label: "府中の庭業者おすすめ5選" },
                { href: "/area/shimonoseki/", label: "下関の庭業者おすすめ5選" },
                { href: "/area/soka/", label: "草加の庭業者おすすめ5選" },
                { href: "/area/sasebo/", label: "佐世保の庭業者おすすめ5選" },
                { href: "/area/matsumoto/", label: "松本の庭業者おすすめ5選" },
                { href: "/area/asahikawa/", label: "旭川の庭業者おすすめ5選" },
                { href: "/area/hakodate/", label: "函館の庭業者おすすめ5選" },
                { href: "/area/hachinohe/", label: "八戸の庭業者おすすめ5選" },
                { href: "/area/kasukabe/", label: "春日部の庭業者おすすめ5選" },
                { href: "/area/tachikawa/", label: "立川の庭業者おすすめ5選" },
                { href: "/area/chigasaki/", label: "茅ヶ崎の庭業者おすすめ5選" },
                { href: "/area/numazu/", label: "沼津の庭業者おすすめ5選" },
                { href: "/area/suzuka/", label: "鈴鹿の庭業者おすすめ5選" },
                { href: "/area/neyagawa/", label: "寝屋川の庭業者おすすめ5選" },
                { href: "/area/takarazuka/", label: "宝塚の庭業者おすすめ5選" },
                { href: "/area/kure/", label: "呉の庭業者おすすめ5選" },
                { href: "/area/beppu/", label: "別府の庭業者おすすめ5選" },
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
