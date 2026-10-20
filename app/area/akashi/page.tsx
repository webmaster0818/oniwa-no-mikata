import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/akashi/";
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
      "【2026年最新】明石の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "明石で剪定・伐採・草刈りを依頼できる庭業者5社を比較。剪定110番（1本4,000円〜・税込）・草刈り110番（1平米163円〜・税込）などの料金と特徴、外壁塗装の足場を組む前の庭木の扱い、塀や擁壁の工事前の整理、境界標が見当たらない場合の確認方法、土や石の処分について編集部が中立の立場でまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】明石の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "明石で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。外壁塗装や屋根工事の足場を組む前に庭木の剪定範囲を庭業者と決めること、塀や擁壁の工事前に塀ぎわの木を整理すること、境界標が見当たらない庭では境目の木に手を入れる前に境界を確認すること、土や石は枝葉と処分の扱いが異なることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、明石市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本4,000円〜（税込）の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。工事の前に特定の1本だけ高さを下げる、といった一本単位の依頼にも適しています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "工事の前に一本だけ高さを下げておきたい方",
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
        ため、範囲を決めて依頼しやすいサービスです。足場を組む予定の範囲だけを先に刈る、という依頼も可能です。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "足場を組む範囲の草を先に片付けておきたい方",
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
        のが特徴です。工事のために残せなくなった木を、処分まで含めて整理する相談先になります。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "工事のために残せなくなった木を処分まで含めて整理したい方",
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
        で剪定・消毒・施肥をセットで任せられます。工事が終わったあとの庭を、毎年同じ形で保ちたい場合に向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "工事のあとの庭を毎年同じ形で保ちたい方",
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
      "年間管理プラン、見積もり・出張費無料、年間実績3万件・リピート率95%以上という実績値、料金表の目安単価は、2026年10月19日に公式サイトで確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。明石市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できます。工事の日程に合わせて作業日を調整したい場合も、予約前に相談できます。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "工事の日程に合わせて作業日を相談したい方",
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
    t: "① 工事の予定がある場合は、その日程を最初に伝える",
    b: "外壁塗装、屋根の工事、塀の作り直し、駐車場の舗装など、庭に関わる工事の予定がある場合は、見積もりの最初にお伝えください。足場を組む時期や掘削する範囲が分かれば、庭業者は切る位置と時期をそこから逆算できます。工事の前に行うべき作業と、工事のあとに回してよい作業を分けてもらうことで、同じ木に二度手を入れる無駄を防げます。工事の図面や見積書があれば、あわせて提示すると打ち合わせが円滑に進みます。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。工事に合わせた整理では、枝や草のほかに土・石・古い資材が出ることがあり、これらは処分の扱いが別になります。何が料金に含まれ、何が別料金かを種類ごとにご確認ください。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されます。",
  },
  {
    t: "③ 境界と所有が明確でない場所は、切る前に確認する",
    b: "境目の木、塀の上の植栽、擁壁の上に生えた草は、どちらの所有か、どこまで手を入れてよいかが明確でないことがあります。境界の位置や塀の所有関係が分からない場合は、土地家屋調査士などの専門家にご相談ください。隣家側へ伸びた枝は、境界を越えている部分の扱いに法律上の定めがあるため、無断で切らずに事前に確認することが基本です。擁壁そのものの傷みは土木・建築業者の担当範囲であり、庭業者に依頼できるのはその上に生えた草木の手入れまでです。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。工事の日程に合わせて作業日を組めるか、土や石の処分まで扱えるか、重量物を運び出す機械が使えるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較することをおすすめします。同じ条件で依頼した見積もりを比べることで、金額の差がどこから生じているのかも把握できます。金額や説明に納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
];

const faqs = [
  {
    q: "明石で庭木1本だけの剪定でも頼めますか？",
    a: "依頼できます。剪定110番は庭木1本からの依頼に対応しており、剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）です。足場がかかる1本だけ先に高さを下げたい、といった依頼にも対応しています。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりでご確認ください。現地調査・見積もりは無料です。",
  },
  {
    q: "外壁塗装の業者に「枝を切ってください」と言われました。どちらに頼むべきですか？",
    a: "足場に当たる枝を落とすだけなら工事業者が対応することもありますが、切る位置と時期によって木の翌年の姿が変わるため、庭業者に相談することをおすすめします。工事の日程と足場がかかる範囲を伝えたうえで、木に負担の少ない切る位置を確認してもらってください。工事の都合で時期をずらせない場合もあるため、早めに相談するほど選択肢が多く残ります。",
  },
  {
    q: "塀の工事の前に、塀ぎわの生垣を抜いたほうがよいですか？",
    a: "新しい塀ができたあとにその生垣が必要かどうかで判断が変わります。目隠しのために塀の内側に植えていて、新しい塀で目隠しの役割を果たせる場合は、工事に合わせて整理するのが合理的です。独立した庭木として植えている場合は、掘る範囲から根を守る方法を工事業者と庭業者の両方に相談してください。工事が始まってからでは切り方を選ぶ余裕がなくなるため、日程が決まった時点で確認してもらうことをおすすめします。",
  },
  {
    q: "境界標が見当たりません。境目の木を切っても大丈夫ですか？",
    a: "境界の位置が明確でないまま、境目の木を切る・根を掘るといった作業を進めることは避けてください。購入時や建築時の書類の測量図、地面に埋まった鋲や杭を確認し、それでも判断できない場合は土地家屋調査士などの専門家にご相談ください。境界を庭業者が決めることはできません。確認が済むまでの間も、自分の敷地側の枝払いや草刈りは進められます。",
  },
  {
    q: "掘った土や古い砂利も持ち帰ってもらえますか？",
    a: "枝葉と土・石では処分の扱いが別で、受け入れ先も違います。対応できるかは業者によって異なるため、見積もりのときに種類ごとに分けて聞いてください。切った枝、刈った草、抜いた根、掘った土、砂利、コンクリートがら、鉢、金属の支柱の順に確認すると、漏れを防げます。土はごみとして受け付けない自治体が多いため、自分で出せる分と業者に依頼する分を分けたうえで総額を確認することをおすすめします。",
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

export default function AreaAkashiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】明石の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "明石で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "明石の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#akashi5",
      label: "1｜明石で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "明石の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#ashiba", label: "2｜外壁塗装や屋根工事で足場を組む前に、庭木をどこまで切るかは工事業者ではなく庭業者と決める" },
    { href: "#hei", label: "3｜古いブロック塀や擁壁を直す予定がある場合は、塀ぎわの木と草を工事の前に整理する" },
    { href: "#kyokai", label: "4｜境界標が見当たらない庭では、境目の木に手を入れる前に敷地の範囲を確認する" },
    { href: "#juryobutsu", label: "5｜工事や整理で出る土・石・古い鉢は枝葉と処分の扱いが異なるため、見積もりを分けて取る" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
    { href: "#faq", label: "7｜明石の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">明石の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】明石の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              {["明石", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="明石の剪定・伐採・草刈り業者の比較"
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
              明石で庭業者を探すきっかけには、庭そのものではなく家や塀の工事が先にあり、その段取りの一部として庭の手入れが必要になる場合があります。たとえば「来年外壁を塗り替えるので、庭木をどうにかしてほしいと言われた」「古いブロック塀を直すことになったが、塀ぎわに木が並んでいる」「境目の木を切りたいが、どこまでが自分の敷地か分からない」といったケースです。
            </p>
            <p>
              本記事では、明石市内から依頼できる主要な庭業者を、当サイト編集部が各社紹介ページの作成時に調査した料金・サービス内容で比較しました。あわせて、足場を組む前に庭木をどこまで切るかを決めること、塀や擁壁の工事前に塀ぎわを整理すること、境界標が見当たらない場合の確認方法、土・石・古い鉢の処分は枝葉とは扱いが異なることなど、明石で依頼する際に確認していただきたい点もまとめています。業者選びの参考としてご活用ください。
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
          <H2 id="akashi5" num="1">明石で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            明石市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社紹介ページの作成時に公式サイト等を調査した掲載値です（2026年9月25日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスター（現：お庭レスキュープロ）は全国47都道府県を対応エリアとしています（公式表記）。本ページではカード紹介に含めず、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            明石の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年9月25日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、明石での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="ashiba" num="2">外壁塗装や屋根工事で足場を組む前に、庭木をどこまで切るかは工事業者ではなく庭業者と決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            足場は、<Hl>家の周囲を囲むように組まれます</Hl>。壁から少し離れた位置に支柱が立ち、その外側に養生シートが張られます。そのため、家に沿って植えられている木は、ほぼすべてが足場の位置と重なります。工事の打ち合わせで「枝が当たるので切ってください」と言われて初めて気づくケースも少なくありません。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            注意が必要なのは、<Hl>工事業者が切る枝と、庭業者が切る枝は目的が異なる</Hl>という点です。工事業者にとっては足場が組めればよいため、当たる枝を落とせば目的は果たせます。一方、庭の手入れの観点では、<Hl>同じ1本でも、どこで切るかによって翌年の樹形が大きく変わります</Hl>。時期が合わなければ木を弱らせることもあります。工事の日程が決まりましたら、足場がかかる範囲を庭業者に確認してもらい、切る位置と時期をご相談ください。時期の考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">剪定の時期の解説記事</Link>、思い切って下げる場合は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            また、<Hl>工事の期間中は庭に立ち入りにくくなります</Hl>。足場の下には資材が置かれ、シートで日光も遮られます。鉢植えは早めに別の場所へ移し、日陰に弱いものは工事期間を考慮して置き場所を決めてください。地植えの植物は動かせないため、<Hl>しばらく日が当たらないことを前提に、工事の前に手入れを済ませておく</Hl>ことをおすすめします。鉢の扱いは<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えと地植えの植え替えの解説記事</Link>、日陰での植栽は<Link href="/hikage-niwa-shokusai/" className="text-[#2D7F3E] underline">日陰の庭の植栽の解説記事</Link>にまとめています。剪定110番は現地調査・見積もりが無料で、24時間365日受け付けています。
          </p>

          {/* 3 */}
          <H2 id="hei" num="3">古いブロック塀や擁壁を直す予定がある場合は、塀ぎわの木と草を工事の前に整理する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            塀の工事は、<Hl>塀そのものの作業だけでは完結しません</Hl>。古い塀を解体し、基礎を掘り、新しい塀を設置するまで、塀の両側に作業スペースが必要です。塀ぎわに木や生垣があると、このスペースを確保できません。<Hl>工事が始まってから切ると、切り方を選ぶ余裕がなくなります</Hl>。塀まわりの考え方は<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            整理するかどうかの判断は、<Hl>その植栽が塀の代わりをしているのか、塀とは別に育てているのか</Hl>によって分かれます。目隠しのために塀の内側に植えた生垣であれば、新しい塀の高さによっては不要になることがあります。一方、独立した庭木として植えている場合は、掘削する範囲から根を守る方法を相談することになります。生垣を続けるかフェンスにするかは<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較記事</Link>、木の塀の傷みは<Link href="/wood-fence-rekka/" className="text-[#2D7F3E] underline">木製フェンスの劣化の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            工事後の庭まで見据える場合は、<Hl>新しい塀ができたあとに何を植えるかを、工事前に決めておく</Hl>と無駄がありません。塀からの距離や仕立てる高さを先に決めておけば、数年後に同じ作業を繰り返さずに済みます。生垣の刈り込みは<Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの解説記事</Link>、植え替えは<Link href="/ikegaki-koshin-uekae/" className="text-[#2D7F3E] underline">生垣の更新と植え替えの解説記事</Link>にまとめています。伐採110番は伐採・抜根と伐採後の木材処分まで一括で相談でき、見積もりは無料・24時間受付です。
          </p>

          {/* 4 */}
          <H2 id="kyokai" num="4">境界標が見当たらない庭では、境目の木に手を入れる前に敷地の範囲を確認する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            古くからある家では、<Hl>境界の印が土に埋もれたり、植え込みの下に隠れたりしている</Hl>ことがあります。塀の位置を境界と考えていても、実際の境界とずれている場合があります。境目に立っている木を切る、根を掘るといった作業は、<Hl>境界が明確でないまま進めると後のトラブルの原因</Hl>になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認は段階を追って行います。まず、<Hl>家を買ったときや建てたときの書類に、測量の図面が入っていないか</Hl>を探します。次に、庭を歩いて、地面に埋まった金属の鋲や、コンクリートの杭の頭が出ていないかを確認します。それでも分からないときは、<Hl>土地家屋調査士などの専門家に相談する範囲</Hl>になります。庭業者に境界を決めてもらうことはできません。隣家との枝のやり取りは<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            境界が明確になるまでの間も、<Hl>自分の敷地の側から手を入れられる範囲</Hl>はあります。自分の敷地側に伸びた枝を払う、足元の草を刈るといった作業は進められます。業者に依頼する際は、「この線から先には手を入れないでほしい」と現地で示して伝え、見積書の作業範囲にも記載してもらってください。境目に近い作業では、事前に隣家へ声をかけておくことも大切です。草の対策は<Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の解説記事</Link>、地面を覆う方法は<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>を参考にしてください。
          </p>

          {/* 5 */}
          <H2 id="juryobutsu" num="5">工事や整理で出る土・石・古い鉢は枝葉と処分の扱いが異なるため、見積もりを分けて取る</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭を片付けると、<Hl>枝と草だけでなく、土・砂利・ブロック・割れた鉢・古い支柱</Hl>が出てきます。枝葉の処分は多くの庭業者が扱いますが、<Hl>土や石は重さも量も桁違いで、受け入れ先も異なります</Hl>。同じ日にまとめて持ち帰ってもらえると考えていたところ、土だけが残されたという行き違いは起こりがちです。剪定枝の処分は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝の処分の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見積もりを依頼する際は、<Hl>出るものを種類ごとに分けて伝える</Hl>ことが確実です。切った枝と刈った草、抜いた根、掘った土、砂利、コンクリートがら、鉢やプランター、金属の支柱の順に、それぞれ依頼できるかを確認すると、対応できる範囲が明確になります。石や灯篭のような重量物は、<Hl>運び出す経路と機械が入るかどうかで金額が変わります</Hl>。庭石や灯篭の撤去は<Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯篭の撤去の解説記事</Link>、鉢の処分は<Link href="/uekibachi-planter-shobun/" className="text-[#2D7F3E] underline">植木鉢・プランターの処分の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            自分で出せるものもあります。<Hl>植木鉢や支柱は、材質ごとに分ければ家庭ごみとして出せることがあります</Hl>。ただし、土そのものはごみとして受け付けない自治体が多く、量が多ければ引き取り先を探すことになります。お住まいの地域のルールを先に確認し、<Hl>自分で出す分と業者に依頼する分を分けてから見積もりを取る</Hl>と、総額の見通しが立ちます。庭の土づくりに再利用できるものもあるため、処分する前に一度ご相談ください。土の扱いは<Link href="/kadan-tsuchizukuri/" className="text-[#2D7F3E] underline">花壇の土づくりの解説記事</Link>にまとめています。
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
          <H2 id="faq" num="7">明石の庭業者でよくある質問</H2>
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
            本記事では、明石で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。工事の前に1本だけ高さを下げる場合は1本単位で依頼できる剪定110番、足場を組む範囲の草を先に片付ける場合は面積単価の草刈り110番、工事のために残せなくなった木を処分まで含めて整理する場合は伐採110番、工事後の庭を毎年同じ形で保ちたい場合は年間管理プランのあるsmileガーデン、工事の日程に合わせて作業日を相談したい場合はくらしのマーケットというように、目的によって適したサービスは異なります。大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            家の工事が先に決まると、庭の手入れも工事の段取りの一部として急いで進めることになります。足場がかかる範囲を庭業者に見てもらい切る位置と時期を決めること、塀や擁壁の工事前に塀ぎわの植栽を整理すること、境界標が見当たらない場所は境界を確認するまで境目の木に手を入れないこと、土・石・古い鉢は枝葉と分けて見積もりを取ること、そして工事の予定を見積もりの最初に伝えることが、トラブルを防ぐための共通の注意点です。本記事の比較を参考に、庭の状況に合った業者をお選びください。
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
              {["明石", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
