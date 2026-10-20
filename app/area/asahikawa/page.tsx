import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/asahikawa/";
const UPDATED = "2026年9月28日";
const UPDATED_ISO = "2026-09-28";

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
      "【2026年最新】旭川の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "旭川で剪定・伐採・草刈りを依頼できる庭業者5社を比較。剪定110番（1本4,000円〜・税込）・草刈り110番（1平米163円〜・税込）などの料金と特徴に加え、移植の前年から始まる準備、常緑樹の葉の入れ替わりの見分け方、残した切り株の扱い、見立てのみを依頼する方法を編集部が中立的に解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】旭川の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "旭川で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。移植の準備は掘り上げる前年から始まること、常緑樹も葉が入れ替わること、残した切り株は腐朽が進むこと、判断に迷う木は作業と切り離して見立てを依頼できることも解説します。",
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
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、旭川市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本4,000円〜（税込）の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。移植前の木の枝のみ、切り株のまわりの枝のみといった、範囲を絞った依頼にも適しています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "移植や伐採の前に枝だけ落としておきたい方",
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
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米163円〜（税込）の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>面積で費用の見当がつく</Hl>
        ため、範囲を決めて依頼しやすいサービスです。切り株のまわりや木を抜いたあとの場所など、範囲を指定して依頼することもできます。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "切り株や木を抜いたあとの場所の草を片付けたい方",
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
    image: "/images/bassai-110ban-features.png",
    intro: (
      <>
        伐採110番は、伐採・抜根に特化した専門サービスです。庭木の伐採から
        <Hl>大木・高木・危険木の特殊伐採</Hl>
        、重機を使った大規模作業まで対応し、
        <Hl>伐採後の木材処分まで一括で任せられる</Hl>
        のが特徴です。切り株の抜根まで依頼する場合は掘削作業が伴うため、伐採と抜根の見積もりを分けて提示してもらうと比較しやすくなります。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "切り株の抜根まで含めて相談したい方",
      "大きくなりすぎた木を搬出方法から相談したい方",
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
        で剪定・消毒・施肥をセットで任せられます。移植したばかりの木や植えて数年の木は、年単位で状態を確認してもらう形が適しています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "移植した木や若い木を数年かけて育てたい方",
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
      "年間管理プラン、見積もり・出張費無料、年間実績3万件・リピート率95%以上という実績値、料金表の目安単価は、2026年10月19日に公式サイトで確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。旭川市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できます。切るか残すかで迷っている木の写真を事前に見せて相談できる点は、この仕組みの特徴です。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "迷っている木の写真を見せてから相談したい方",
      "料金を比較してから依頼したい方",
      "口コミを見て自分で地域の業者を選びたい方",
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
    t: "① 木の扱いを「切る・移す・残す」のいずれかに整理して伝える",
    b: "「相談したい」という伝え方だけでは、見積もりを出すことができません。切るのか、庭の中で移すのか、残して手入れをするのかを整理してから伝えると、必要な人数や日数を見積もりやすくなります。判断できない木がある場合は、その木だけを分けて「まだ決めていない」と伝えてください。あわせて、作業車を停められる場所と、掘った土や切った枝を仮置きできる平らな場所も伝えます。移植の予定がある場合は、移植先の見当がついているかどうかも最初に共有してください。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。木の移植や切り株の抜根は掘削作業を伴うため、枝を切るだけの作業とは費用の構成が異なります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されます。",
  },
  {
    t: "③ 木の作業と、作業後に残る地面の作業を分けて考える",
    b: "木を抜いたあとには穴と土が残り、切り株を残せばその周囲に空間ができます。土を入れて平らにする、砂利を敷く、下草を植えるといった作業は、木を切る作業とは別の見積もりになることがあります。庭業者に依頼できる範囲を事前に確認し、舗装や構造物にかかる部分は外構の工事業者が相談先になることを把握しておくと、当日に作業が止まることを防げます。抜いたあとの扱いが決まっていない場合は、その部分だけを後日に回す方法もあります。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。掘削を伴う依頼の段取りを組めるか、切るか残すかで迷っている木について判断材料を示してくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較することをおすすめします。同じ条件で依頼した見積もりを比較すれば、金額の差がどこから生じているのかも把握できます。金額や説明に納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
];

const faqs = [
  {
    q: "旭川で庭木1本だけの剪定でも依頼できますか？",
    a: "依頼できます。剪定110番は庭木1本からの依頼に対応しており、剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）です。移植前の木の枝のみ、切り株のまわりの枝のみといった、範囲を絞った依頼も相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりでご確認ください。現地調査・見積もりは無料です。",
  },
  {
    q: "庭の中で木を移したいのですが、いつ依頼すればよいですか？",
    a: "木の大きさによって段取りが変わります。小さい木は掘って移すだけで済むことがありますが、大きい木では、掘り上げる前の年に幹のまわりの細い根を切っておく準備を行うことがあります。この準備の要否と実施時期は樹種・大きさ・移す距離によって変わるため、現地を確認してもらったうえで決めることをおすすめします。移植先の場所と、地中の埋設物の有無もあわせて確認してもらってください。移植後の一、二年は、剪定よりも水やりと支柱の手入れが中心になります。",
  },
  {
    q: "常緑樹の葉がまとまって落ちました。枯れたのでしょうか？",
    a: "常緑樹も葉を入れ替えるため、まとまって落葉すること自体は珍しくありません。枝の内側や下側の古い葉が落ち、枝先の葉が残っている場合は入れ替わりであることが多く、枝先からの変色、枝の内部の乾燥、幹の片側だけの落葉が見られる場合は別の原因が考えられます。相談の際は、落葉が始まった時期と、落ちた葉の位置・量を伝えてください。",
  },
  {
    q: "切り株はそのまま残しても大丈夫ですか？",
    a: "切り株を残すことは可能ですが、年単位で腐朽が進み、キノコの発生、表面の崩れ、内部の空洞化といった変化が生じます。湿気がこもりやすく虫が入りやすい場所になるため、家の基礎や木製のデッキ・フェンスが近い場合は距離をご確認ください。残す場合は、切る高さと残す期間を作業前に決めておくことをおすすめします。抜根まで依頼する場合は掘削作業が伴うため、見積もりを分けて提示してもらってください。",
  },
  {
    q: "切るか残すか決められない木があります。どう相談すればよいですか？",
    a: "作業を前提とした見積もりとは切り離し、見立てのみを依頼する方法があります。樹木診断を専門とする方に確認してもらう方法や、複数の業者に同じ木を見てもらい意見を比較する方法です。判断が分かれる木であれば、現時点で判断を急ぐ必要はないかもしれません。相談の際は「大きいから」ではなく「隣の屋根に届きそうだから」のように、困っている点と放置した場合の懸念を具体的に伝えると、伐採以外の対処法も検討しやすくなります。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応を掲げています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ずご確認ください。掘削を伴う依頼では土や根も発生するため、枝葉とは処分の扱いが異なることがあります。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。",
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

export default function AreaAsahikawaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】旭川の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "旭川で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-28T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "旭川の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#asahikawa5",
      label: "1｜旭川で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "旭川の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#ishoku-nemawashi", label: "2｜庭木の移植の準備は掘り上げる前年から始まります" },
    { href: "#hagawari", label: "3｜常緑樹の葉の入れ替わりと枯れの見分け方" },
    { href: "#kabu-kuchiru", label: "4｜残した切り株の変化と、残す場合に決めておくこと" },
    { href: "#mitate-dake", label: "5｜切るか残すか迷う木は、見立てのみを依頼する方法もあります" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
    { href: "#faq", label: "7｜旭川の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">旭川の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】旭川の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              {["旭川", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="旭川の剪定・伐採・草刈り業者の比較"
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
              旭川で庭業者を探すきっかけには、庭全体の手入れだけでなく、木そのものの扱いをどう決めるかという悩みが含まれることがあります。たとえば「駐車スペースを広げたいが、あの木は切るしかないのか」「常緑樹なのに葉がまとまって落ち、枯れたのか分からない」「切り株を残したままでよいのか」「切るか残すかを決められず、見積もりを依頼できずにいる」といったご相談です。
            </p>
            <p>
              本記事では、旭川市内から依頼できる主要な庭業者を、当サイト編集部が各社紹介ページの作成時に調査した料金・サービス内容をもとに比較しています。あわせて、移植の準備は掘り上げる前年から始まること、常緑樹の葉の入れ替わりを枯れと誤認しないこと、残す切り株は高さと期限まで決めておくこと、迷っている木は作業と切り離して見立てのみを依頼できることなど、旭川で依頼する際に確認しておきたい進め方も解説します。業者選びの参考としてご活用ください。
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
          <H2 id="asahikawa5" num="1">旭川で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            旭川市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社紹介ページの作成時に公式サイト等で確認した掲載値です（2026年9月28日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスター（現：お庭レスキュープロ）は全国47都道府県を対応エリアとしています（公式表記）。本ページではカード紹介に含めず、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            旭川の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年9月28日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、旭川での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="ishoku-nemawashi" num="2">庭木の移植の準備は掘り上げる前年から始まります</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            建て替えの予定がある、駐車スペースを広げたい、周囲の環境が変わって日当たりが変化したといった理由で、庭の中で木の場所を変える場合に検討するのが<Hl>移植</Hl>です。移植は木を掘って運ぶ日の作業と考えられがちですが、実際に結果を左右するのは<Hl>根を切る時期をいつにするか</Hl>です。庭木の移し方は<Link href="/niwaki-ishoku/" className="text-[#2D7F3E] underline">庭木の移植の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大きな木ほど、準備なしに掘り上げると失う根の割合が大きくなります。そこで、<Hl>掘り上げる前の年に幹のまわりを一周して細い根を切っておく</Hl>という準備を入れることがあります。切られた側は新しい細根を出すため、翌年に掘ったときに根鉢へ根が残ります。この準備の要否は木の大きさ・樹種・移す距離によって変わるため、見積もりの段階でご確認ください。伐採との違いは<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違いの解説記事</Link>、鉢から地面へ下ろす場合は<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えから地植えへの植え替えの解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            移植後の一、二年は、剪定よりも<Hl>水・支柱・株元</Hl>の手入れが中心になります。移植先を決める際は、木が成長したときの枝の広がりまで考慮してください。支柱の立て方は<Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の解説記事</Link>、水のやり方は<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの解説記事</Link>、植える場所の決め方は<Link href="/shokusai-haichi-keikaku/" className="text-[#2D7F3E] underline">植栽の配置計画の解説記事</Link>にまとめています。
          </p>
          {/* 3 */}
          <H2 id="hagawari" num="3">常緑樹の葉の入れ替わりと枯れの見分け方</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            「常緑樹だから葉は落ちない」と思っていると、ある時期にまとまって葉が落ちたときに<Hl>枯れたのではないか</Hl>と心配になります。常緑樹も葉を入れ替えます。古い葉が色を変えて落ち、新しい葉と交代する時期は、木の種類によって異なります。枯れたかどうかの見分けは<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたときの解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            手がかりは<Hl>落ちている葉が「どこの葉か」</Hl>です。枝の内側や下側の古い葉が落ちていて枝先の葉が残っているなら、入れ替わりの動きであることが多くあります。一方、枝先から茶色くなっている、枝を折ると中まで乾いている、幹の同じ側だけ葉がないといった場合は、別の原因が考えられます。虫や病気の切り分けは<Link href="/niwaki-byogaichu/" className="text-[#2D7F3E] underline">庭木の病害虫の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者に相談するときは、<Hl>いつから・どの高さの葉が・どのくらい落ちたか</Hl>を伝えると、現地での確認箇所を絞り込めます。落ちる葉の量そのものが毎年の負担になっているなら、葉の少ない木へ入れ替えるという選び方もあります。片付け方は<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策の解説記事</Link>、木の選び直しは<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉の少ない庭木の解説記事</Link>にまとめています。剪定110番は庭木1本からの相談に対応しています。
          </p>
          {/* 4 */}
          <H2 id="kabu-kuchiru" num="4">残した切り株の変化と、残す場合に決めておくこと</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            木を切ったあと、<Hl>切り株をそのまま残す</Hl>という選択はよくあります。抜くと費用も手間も増えるためです。ただし、残した切り株はそのままの状態を保つわけではなく、年単位で<Hl>腐朽しながら形を変えていきます</Hl>。残す場合の注意は<Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株を放置した場合の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            腐りが進むと、<Hl>キノコが出る・表面が崩れる・中が空になる</Hl>といった変化が出ます。そこは湿りやすく、虫が入りやすい場所になります。家の基礎や木製のデッキ・フェンスが近い場合は、事前に距離をご確認ください。木部の傷み方は<Link href="/wood-fence-rekka/" className="text-[#2D7F3E] underline">木製フェンスの劣化の解説記事</Link>、デッキまわりは<Link href="/wooddeck-mawari-teire/" className="text-[#2D7F3E] underline">ウッドデッキまわりの手入れの解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            残すと決めるなら、<Hl>どこまで低く切るか</Hl>と<Hl>いつまで残すか</Hl>を作業の前に決めておくと、その後の管理が容易になります。地面すれすれまで下げれば足を引っかけにくく、草刈り機も通しやすくなります。抜根まで依頼する場合は掘削作業が伴うため、見積もりを分けて提示してもらってください。抜根の考え方は<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違いの解説記事</Link>にまとめています。伐採110番は伐採から抜根・木材処分まで一括で相談でき、見積もりは無料です。
          </p>
          {/* 5 */}
          <H2 id="mitate-dake" num="5">切るか残すか迷う木は、見立てのみを依頼する方法もあります</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            「この木を切るべきか、残せるか」で迷ったまま、見積もりの依頼に進めないことがあります。見積もりは<Hl>作業を前提にした相談</Hl>であり、切るか残すかが決まっていないと話が進みにくいためです。木の状態の見方は<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたときの解説記事</Link>、高い木の作業の危険は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            このような場合の方法の一つが、<Hl>作業とは切り離して見立てのみを依頼する</Hl>ことです。樹木診断を専門とする方に確認してもらう方法や、複数の業者に同じ木を見てもらい意見を比較する方法があります。見る人によって判断が分かれる木であれば、<Hl>現時点で判断を急ぐ必要のない木</Hl>かもしれません。複数社への依頼方法は<Link href="/aimitsumori-torikata/" className="text-[#2D7F3E] underline">相見積もりの取り方の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見立てを依頼する際に整理しておくとよいのは、<Hl>その木で困っていること</Hl>と<Hl>放っておいた場合に何が起きると困るか</Hl>の二つです。「大きいから」ではなく「隣の屋根に届きそうだから」「道に張り出しているから」のように具体的に伝えると、伐採以外の対処法も検討しやすくなります。枝の張り出しは<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境の解説記事</Link>、依頼先の違いは<Link href="/zoen-uekiya-chigai/" className="text-[#2D7F3E] underline">造園業者と植木屋の違いの解説記事</Link>にまとめています。
          </p>
          {/* 6｜選び方 */}
          <H2 id="erabikata" num="6">庭業者の選び方（4つの手順）</H2>
          <p className="leading-loose mb-6 text-[#4a5443]">
            庭業者を選ぶ際は、次の4つの手順で確認することをおすすめします。最初の1社に即決する前に数分の確認を行うことで、多くのトラブルを防ぐことができます。
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
          <H2 id="faq" num="7">旭川の庭業者でよくある質問</H2>
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
            旭川で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。移植前や切り株まわりの枝のみを範囲を決めて依頼する場合は1本単位の剪定110番、切り株のまわりや木を抜いたあとの草を片付ける場合は面積単価の草刈り110番、切り株の抜根まで含めて相談する場合は伐採110番、移植した木や若い木を数年かけて育てたい場合は年間管理プランのsmileガーデン、迷っている木の写真を見せてから相談したい場合はくらしのマーケットというように、目的によって適したサービスは異なります。大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            木そのものの扱いを決める場面では、作業の料金よりも、いつ・どの順序で手を入れるかによって結果が変わります。移植の準備は掘り上げる前年から始まること、常緑樹の葉の入れ替わりを枯れと誤認しないこと、残す切り株は高さと残す期間まで決めておくこと、迷っている木は作業と切り離して見立てのみを依頼できること、そして木を抜いたあとの地面の作業は別の見積もりになることを、依頼前にご確認ください。本記事の比較を参考に、庭の状況に合った業者をお選びください。
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
              {["旭川", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/bassai-110ban/", label: "伐採110番の口コミ・評判" },
                { href: "/niwaki-ishoku/", label: "庭木の移植" },
                { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなる" },
                { href: "/niwaki-kareta/", label: "庭木が枯れたときの見分け方" },
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
