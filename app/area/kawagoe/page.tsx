import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/kawagoe/";
const UPDATED = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";

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
      "【2026年最新】川越の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "川越で剪定・伐採・草刈りを依頼できる庭業者5社を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・お庭マスター（剪定1本550円〜）などの料金と特徴、当日に使う水道・電源・出入口、見積書の「一式」の確認方法、業者の継続と見直しの判断、作業後の確認点を編集部がまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】川越の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "川越で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。当日に業者が使う水道・電源・出入口の3点を見積もりの段階で決めておくこと、見積書の「一式」に含まれる内容と含まれない内容を確認すること、同じ業者に継続して依頼するか見積もりを取り直すかは庭の状態で判断すること、作業後は切り口・株元・持ち帰りの量を確認することも解説します。",
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
    officialUrl: "",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国4,000社以上の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、川越市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。休みの日に気になった木を1本だけ小さく整えるといった依頼にも適しています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "休みの日に気になった木を1本単位で小さく整えたい方",
      "庭木1本から依頼したい方",
      "見積もり後の追加料金なしの明朗会計を重視する方",
      "剪定と合わせて伐採・草刈り・消毒も相談したい方",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "2,890円〜", note: "樹種・高さで変動。カシ2,300円／モミジ3,000円などの樹種別目安あり" },
      { k: "出張費", v: "3,000円", note: "別途必要" },
      { k: "受付時間", v: "24時間365日" },
      { k: "見積もり", v: "現地調査・見積もり無料・追加料金なし" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "当サイトの各社紹介ページ作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-2",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>面積で費用の見当がつく</Hl>
        ため、物干しの下や室外機のまわりなど、範囲を決めて依頼しやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "物干しの下や室外機まわりの草を範囲を決めて片付けたい方",
      "面積で費用の見当をつけたい方",
      "草刈り後の防草シート施工まで相談したい方",
      "定期契約で雑草管理の手間をなくしたい方",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり600円〜", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトの各社紹介ページ作成時に確認しています。機械作業が中心のため狭い場所には対応しにくい場合があり、夏場の繁忙期は予約が混み合います。面積と草の状態で総額が変わるため、見積もりでご確認ください。",
  },
  {
    slug: "bassai-110ban",
    num: "1-3",
    catch: "伐採・抜根専門・処分まで一括",
    name: "伐採110番",
    officialUrl: "",
    image: "/images/bassai-110ban-features.png",
    intro: (
      <>
        伐採110番は、伐採・抜根に特化した専門サービスです。庭木の伐採から
        <Hl>大木・高木・危険木の特殊伐採</Hl>
        、重機を使った大規模作業まで対応し、
        <Hl>伐採後の木材処分まで一括で任せられる</Hl>
        のが特徴です。何年も手を入れられないまま大きくなった木の整理や、庭を作り替えるための抜根も、切り分けて搬出する方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "何年も手を入れられないまま大きくなった木を整理したい方",
      "大きくなった木を搬出方法から相談したい方",
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
        <Hl>年間3万件・リピート95%以上・満足度4.1</Hl>
        を掲げ、<Hl>定額制の年間管理プラン</Hl>
        で剪定・消毒・施肥をセットで任せられます。平日に庭を見る時間が取りにくい家では、回数と時期を決めて任せる形が適しています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "平日に庭を見る時間が取りにくく、毎年定期的に手入れを任せたい方",
      "一年を通して庭の手入れを定額で任せたい方",
      "剪定・消毒・施肥をセットでまとめたい方",
      "留守中の作業でも報告書で仕上がりを確認したい方",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトの各社紹介ページ作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。川越市内の対応可否とプラン内容は見積もり時に確認してください。",
  },
  {
    slug: "oniwa-master",
    num: "1-5",
    catch: "剪定1本550円〜・関東エリア中心",
    name: "お庭マスター",
    officialUrl: "https://oniwa-master.info/",
    image: "/images/oniwa-master-features.png",
    intro: (
      <>
        お庭マスターは、全国47都道府県を対応エリアとする（公式表記）職人品質のマッチング型サービスで、川越を含む関東は主力エリアです。
        <Hl>経験10年以上の職人が対応</Hl>
        し、中間マージンをカットすることで
        <Hl>剪定1本550円〜・伐採1本3,300円〜</Hl>
        という手頃な価格を実現しています。見積もり・出張は無料で、
        <Hl>施工後の保証</Hl>
        がある点も安心材料です。造園デザインの相談にも対応します。
      </>
    ),
    recommend: [
      "経験豊富な職人に手頃な価格で依頼したい方",
      "施工後の保証があるサービスを選びたい方",
      "剪定だけでなく庭のデザインまで相談したい方",
      "川越・関東エリアで業者を探している方",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心", note: "川越での対応可否は見積もり時にご確認ください" },
    ],
    memo:
      "剪定1本550円〜・伐採1本3,300円〜・見積もり出張無料・施工後保証あり・対応エリアは関東・関西・中部中心であることを当サイトの各社紹介ページ作成時に確認しています。最低価格は小さな低木などの場合の金額のため、樹種・高さによる総額を見積もりでご確認ください。",
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
    t: "① 水道・電源・出入口の3点と、動かせない物の位置を先に伝える",
    b: "「剪定」「伐採」「草刈り」のどれを依頼したいのかに加えて、当日に業者が使うものをお伝えください。立水栓の位置とホースが届く範囲、電源を取れる場所、門扉や木戸の開く幅と途中の段差の3点が分かれば、持ち込める道具と作業の手順が決まります。写真は、道路から出入口を撮った1枚、庭全体が入る1枚、気になる場所を近くから撮った1枚の計3枚が目安です。物干しやホースリール、自転車、車など動かせない物の位置も伝えておくと、当日の作業が滞りません。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。見積書に「一式」とだけ書かれている場合は、対象の本数と場所、仕上げる高さ、切った枝と刈った草の持ち帰り、出張費、作業する人数と日数の5項目をご確認ください。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料のため、金額を確認してから判断できます。",
  },
  {
    t: "③ 自分の判断で手を入れてよい範囲を先に確認する",
    b: "隣家側に伸びた枝は、境界を越えている部分の扱いに法律上の定めがあるため、無断で切らずに事前に確認することが基本です。隣家との境界が明確でない場所の木や、塀の所有関係が分からない場合は、土地家屋調査士などの専門家にご相談ください。擁壁や石積みそのものの傷みは土木・建築業者の担当範囲であり、庭業者に依頼できるのはその上やそばに生えた草木の手入れまでです。歩道側の街路樹や植樹帯は道路を管理する自治体などの担当で、分譲地の入口や区画の間にある共用の緑地は管理組合や自治会の管轄になっていることがあります。庭業者に依頼する前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。見積書の内訳を細かく出してくれるか、作業後に写真で報告してくれるか、立ち会えない日の作業に対応してくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較することをおすすめします。去年と作業の内容が変わる年ほど、見積もりを取り直す価値があります。金額や説明に納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
];

const faqs = [
  {
    q: "川越で庭木1本だけの剪定でも頼めますか？",
    a: "依頼できます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。1本だけ依頼する場合も、仕上げたい高さと切った枝の持ち帰りを含むかどうかを先に決めておくと、総額が変動しにくくなります。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりでご確認ください。",
  },
  {
    q: "作業の日に水道や電源を貸す必要はありますか？",
    a: "使用する場合があります。水は刈ったあとの通路を流す、道具を洗う、粉じんを抑えるといった用途で、電源は電動の道具を使う場合に必要になることがあります。立水栓の位置とホースが届く範囲、電源を取れる場所を見積もりの段階で伝えておけば、当日に相談が必要になることはほとんどありません。貸せない場合も事前に伝えておけば、業者側で用意してもらえることがあります。",
  },
  {
    q: "見積書に一式としか書かれていません。そのまま頼んでよいですか？",
    a: "依頼する前に内訳をご確認ください。対象の本数と場所、仕上げる高さ、切った枝と刈った草の持ち帰り、出張費、作業する人数と日数の5項目が明確になれば、あとから追加される項目はほとんどなくなります。「この一式に含まれるもの、含まれないもの」を尋ねれば、多くの場合はその場で内訳を提示してもらえます。回答が曖昧なまま進めないことが大切です。",
  },
  {
    q: "去年と同じ業者に頼むのと、毎回見積もりを取り直すのはどちらがよいですか？",
    a: "庭の状態が安定しているかどうかで判断します。毎年同じ木を同じ形に保つ手入れの場合は、継続して依頼するほうが説明の手間が減り、仕上がりのばらつきも小さくなります。木を減らす、生垣を入れ替える、庭の一角の利用をやめるなど内容が変わる年は、業者の得意分野の差が出やすいため、見積もりを取り直す価値があります。",
  },
  {
    q: "作業が終わったあとは、どこを見ればよいですか？",
    a: "切り口、株元、持ち帰ってもらう量の3か所です。切り口がつぶれたり裂けたまま残っていないか、株元が踏み固められていないか、庭の隅に枝や草がまとめて残されていないかを確認します。その場で気づけば、業者に伝えられます。立ち会えない場合は、同じ3か所を写真で送ってもらうよう事前に決めておいてください。smileガーデンは写真付きの作業報告書を掲げています。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応を掲げています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ずご確認ください。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。見積書の一式に持ち帰りが含まれるかどうかは、必ず明確にご確認ください。",
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

export default function AreaKawagoePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】川越の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "川越で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-20T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "川越の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#kawagoe5",
      label: "1｜川越で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "川越の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kasumono", label: "2｜作業当日に業者へ貸す水道・電源・出入口の3点は、見積もりの段階で決めておく" },
    { href: "#isshiki", label: "3｜見積書の「一式」は、含まれる内容と含まれない内容を一つずつ確認する" },
    { href: "#tsukiaikata", label: "4｜同じ業者に継続して依頼するか、毎回見積もりを取り直すかは、庭の状態が安定しているかどうかで判断する" },
    { href: "#owattahi", label: "5｜作業が終わった日は、切り口・株元・持ち帰ってもらう量の3か所を確認する" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
    { href: "#faq", label: "7｜川越の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">川越の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】川越の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              {["川越", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="川越の剪定・伐採・草刈り業者の比較"
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
              川越で庭業者を探すきっかけには、作業そのものよりも段取りや確認でつまずいた経験が関わることがあります。たとえば「見積もりの金額は聞いたが、どこまで作業してもらえるのかが分からない」「当日になって水道と電源を貸してほしいと言われて慌てた」「去年と同じ業者に依頼するか、また複数社から見積もりを取るかで迷っている」「作業が終わったあとで気になる場所が出てきたが、伝えそびれた」といったケースです。古い町並みの残る中心部と郊外の住宅地とで、庭の広さも道路からの入り方も異なるため、同じ依頼でも当日の進み方が変わります。
            </p>
            <p>
              本記事では、川越市内から依頼できる主要な庭業者を、当サイト編集部が各社紹介ページの作成時に調査した料金・サービス内容で比較しました。あわせて、作業当日に業者へ貸す水道・電源・出入口の決め方、見積書の「一式」の確認方法、同じ業者に継続して依頼するか見積もりを取り直すかの判断、作業が終わった日に確認する3か所など、川越で依頼する際に確認していただきたい考え方もまとめています。業者選びの参考としてご活用ください。
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
          <H2 id="kawagoe5" num="1">川越で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            川越市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社紹介ページの作成時に公式サイト等を調査した掲載値です（2026年9月20日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、口コミで地域の業者を選べるくらしのマーケットと、大手直営のダスキンは、比較表に掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            川越の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年9月20日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、川越での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="kasumono" num="2">作業当日に業者へ貸す水道・電源・出入口の3点は、見積もりの段階で決めておく</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            作業の当日になって「水道をお借りできますか」「電源はどこから取れますか」「この門から入れますか」と聞かれて慌てるのは、庭の作業でよくある行き違いです。<Hl>水・電気・出入口の3点</Hl>は業者が現場で使うことがあり、使えるかどうかで作業の手順も時間も変わります。見積もりの段階で決めておけば、当日に相談が必要になることはほとんどありません。準備の全体像は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">剪定を依頼する前の準備</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            水は、刈ったあとの通路を流す、道具を洗う、粉じんを抑えるといった用途で使われます。立水栓の位置とホースが届く範囲を伝えておいてください（<Link href="/risuisen-sansui/" className="text-[#2D7F3E] underline">立水栓・散水設備の考え方</Link>）。電源は、電動の道具を使う場合に必要になることがあります（<Link href="/garden-shredder-katsuyo/" className="text-[#2D7F3E] underline">庭用シュレッダーの活用</Link>）。出入口は、門扉や木戸の開く幅、途中の段差、宅配ボックスや自転車など動かせない物の位置まで伝えると、当日に運び込める道具が決まります（<Link href="/takuhaibox-gaiko/" className="text-[#2D7F3E] underline">宅配ボックス設置と外構の考え方</Link>、<Link href="/jitensha-okiba-dosen/" className="text-[#2D7F3E] underline">自転車置き場と庭の動線</Link>）。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            3点が決まったら、<Hl>当日までに自分で動かしておく物</Hl>もあわせて決めます。物干し、ホースリール、鉢、車などが残っていると、作業が中断します。剪定110番は現地調査・見積もりが無料で、24時間365日受付のため、下見の日程も取りやすいサービスです。お庭マスターも見積もり・出張は無料です。立ち会えない日に依頼する場合は、出入口の開け方と作業後の連絡方法を事前に決めておいてください。自分で使う道具の選び方は<Link href="/niwa-dogu-erabikata/" className="text-[#2D7F3E] underline">庭仕事の道具の選び方と手入れ</Link>を参考にしてください。
          </p>

          {/* 3 */}
          <H2 id="isshiki" num="3">見積書の「一式」は、含まれる内容と含まれない内容を一つずつ確認する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見積書に「庭木剪定一式」「草刈り一式」とだけ書かれていることがあります。金額は出ていても、<Hl>何本まで、どこまでの高さ、切った枝の持ち帰りを含むのか</Hl>が読み取れません。作業のあとで「そこまでは含まれていません」と言われるのは、多くの場合この一行が原因です。見積書の読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認しておく項目は、<Hl>対象の本数と場所、仕上げる高さ、切った枝と刈った草の持ち帰り、出張費、作業する人数と日数</Hl>の5つです。このうち持ち帰りと出張費は、あとから追加されやすい項目です。「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。剪定110番は剪定1本2,890円〜（出張費3,000円別途）で見積もり後の追加料金がないことを掲げており、お庭マスターは剪定1本550円〜・伐採1本3,300円〜という1本単位の料金体系です。処分の考え方は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝の処分方法</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認の方法は難しくありません。<Hl>「この一式には何が含まれていて、何が含まれていませんか」</Hl>と尋ねれば、多くの場合はその場で内訳を提示してもらえます。回答が曖昧なまま進めるより、ここで時間をかけるほうが結果的に早く済みます。複数社に同じ内容で出してもらう進め方は<Link href="/aimitsumori-torikata/" className="text-[#2D7F3E] underline">庭工事の相見積もりの取り方</Link>、依頼先の種類の違いは<Link href="/zoen-uekiya-chigai/" className="text-[#2D7F3E] underline">造園業者と植木屋の違い</Link>にまとめています。金額や説明に納得できない場合は、その場で契約せずにお断りいただくこともできます。
          </p>

          {/* 4 */}
          <H2 id="tsukiaikata" num="4">同じ業者に継続して依頼するか、毎回見積もりを取り直すかは、庭の状態が安定しているかどうかで判断する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            一度依頼して問題がなかった業者に翌年も依頼するか、毎回複数社から見積もりを取り直すかは、<Hl>庭の状態が安定しているかどうかで判断します</Hl>。毎年同じ木を同じ形に保つ手入れであれば継続して依頼するほうが効率的で、木を減らす・作り替えるといった内容が変わる年は見積もりを取り直すほうが納得しやすくなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            継続して依頼する利点は、<Hl>庭の事情を毎回説明しなくて済むこと</Hl>です。去年どこをどのように切ったか、どの木を残す約束だったかが引き継がれるため、仕上がりのばらつきが小さくなります。年間で回数と時期を決めて任せる形もあります。smileガーデンは定額制の年間管理プランを掲げ、作業後には写真付きの作業報告書を受け取れます。一年の作業をどこに置くかは<Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭の掃除・手入れの年間スケジュール</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            一方、<Hl>作業の内容が去年と変わる年</Hl>は、見積もりを取り直す価値があります。大きくなりすぎた木を低くする、生垣を入れ替える、庭の一角の利用をやめるといった作業は、業者の得意分野の差が出やすく、金額の幅も広くなります。生垣の入れ替えは<Link href="/ikegaki-koshin-uekae/" className="text-[#2D7F3E] underline">生垣の更新・植え替えの考え方</Link>、フェンスとの比較は<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較</Link>、庭の面積そのものを減らす場合は<Link href="/niwajimai/" className="text-[#2D7F3E] underline">庭じまいの進め方</Link>を参考にしてください。伐採110番は伐採・抜根と伐採後の木材処分まで一括で相談でき、見積もりは無料・24時間受付です。
          </p>

          {/* 5 */}
          <H2 id="owattahi" num="5">作業が終わった日は、切り口・株元・持ち帰ってもらう量の3か所を確認する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            作業が終わった日に、庭を見て「きれいになった」で済ませてしまうと、あとから気づいた不具合を伝えにくくなります。確認するのは、<Hl>切り口、株元、持ち帰ってもらう量</Hl>の3か所です。いずれも数分で確認でき、その場であれば業者に伝えられます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            切り口は、枝を落とした断面がつぶれていないか、裂けたまま残っていないかを確認します。株元は、踏み固められていないか、根が露出していないか、掘り返した土が戻されているかを確認します（<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>）。持ち帰ってもらう量は、<Hl>庭の隅に枝や草がまとめて残されていないか</Hl>の確認です。置いていく約束であれば問題ありませんが、持ち帰る約束であれば当日のうちに伝えてください（<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝の処分方法</Link>）。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            立ち会えない日に依頼する場合は、<Hl>同じ3か所を写真で送ってもらう</Hl>よう事前に決めておくと確認できます。smileガーデンは写真付きの作業報告書を掲げているため、立ち会えない日が多い家でも仕上がりを後から確認できます。切った直後は分からず、しばらくしてから葉が落ちてくることもあります。木が弱っているかどうかの見方は<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>、虫や病気が関わる場合は<Link href="/niwaki-byogaichu/" className="text-[#2D7F3E] underline">庭木の病害虫</Link>を参考にしてください。
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
          <H2 id="faq" num="7">川越の庭業者でよくある質問</H2>
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
            本記事では、川越で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。1本単位で高さを決めて整える場合は樹種別の目安がある剪定110番や1本単位の料金体系のお庭マスター、範囲を決めて草を片付ける場合は面積単価が分かりやすい草刈り110番、大きくなりすぎた木を処分まで含めて整理する場合は伐採110番、毎年同じ内容を継続して任せ、作業後の報告を受けたい場合はsmileガーデンというように、目的によって適したサービスは異なります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            庭の作業でつまずく原因の多くは、作業の技術ではなく段取りと確認にあります。水道・電源・出入口の3点を見積もりの段階で決めておくこと、見積書の一式の中身を一つずつ確認すること、継続して依頼するか見積もりを取り直すかを庭の状態で判断すること、作業が終わった日に切り口・株元・持ち帰る量の3か所を確認すること、そして処分費・出張費を含めた総額を作業前に確認することが、トラブルを防ぐための共通の注意点です。本記事の比較を参考に、庭の状況に合った業者をお選びください。
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
              {["川越", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/sentei-diy-gyosha/", label: "剪定のDIYと業者依頼の判断基準" },
                { href: "/niwa-soji-nenkan/", label: "庭の掃除・手入れの年間スケジュール" },
                { href: "/aimitsumori-torikata/", label: "庭工事の相見積もりの取り方" },
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
