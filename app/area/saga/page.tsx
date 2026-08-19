import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/saga/";
const UPDATED = "2026年8月19日";
const UPDATED_ISO = "2026-08-19";

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
      "【2026年最新】佐賀の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "佐賀で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、広い敷地の草刈りを区画ごとの回数で組み立てる考え方、面積単価の見積もりの読み方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】佐賀の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "佐賀で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。広い敷地は「全面を何回」ではなく「区画ごとに何回」で決める考え方、刈らない場所を作って回数を減らす方法、面積単価の見積もりが変わる条件、年間予算の組み立て方も解説します。",
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
    slug: "kusakari-110ban",
    num: "1-1",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.kusakari110.com/",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>面積単価で料金が示される</Hl>
        ため、敷地の広い家では「どこを何平米刈るか」を決めれば費用の見通しが立てやすいのが利点です。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        もあわせて依頼でき、<Hl>定期メンテナンスプラン</Hl>
        を使えば年間の回数を決めて回す形にできます。
      </>
    ),
    recommend: [
      "広い敷地の草刈りを面積単価で見積もりたい人",
      "年間の刈る回数を決めて費用を読めるようにしたい人",
      "刈るだけでなく防草シートで面積を減らしたい人",
      "母屋まわりと外周を分けて頼みたい人",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり600円〜", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトのレビュー記事作成時に確認しています。表示は最低単価であり、草丈が伸びすぎている場合や障害物が多い場所では単価が変わることがあります。機械作業が中心のため狭い場所は苦手な場合があり、夏場の繁忙期は混み合います。面積と草の状態で総額が変わるため、見積もりで確認しましょう。",
  },
  {
    slug: "sentei-110ban",
    num: "1-2",
    catch: "1本2,890円〜・24時間365日受付",
    name: "剪定110番",
    officialUrl: "https://www.sentei110.com/",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国4,000社以上の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、佐賀市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        という本数単位の料金体系のため、草刈りは面積で、庭木は本数で——というように、
        <Hl>作業ごとに費用の単位を分けて組み立てたい</Hl>
        場合に扱いやすいサービスです。現地調査・見積もりは無料で、24時間365日受け付けています。
      </>
    ),
    recommend: [
      "草刈りとは別に、庭木だけ本数単位で頼みたい人",
      "今年手を入れる木を絞って費用を抑えたい人",
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
    slug: "smile-garden",
    num: "1-3",
    catch: "定額制の年間管理・写真付き報告書",
    name: "smileガーデン",
    officialUrl: "https://www.smile-garden.jp/",
    image: "/images/smile-garden-features.png",
    intro: (
      <>
        smileガーデンは、全国展開のフランチャイズ型お庭メンテナンスサービスです。公式掲載の実績値として
        <Hl>年間3万件・リピート95%以上・満足度4.1</Hl>
        をうたい、<Hl>定額制の年間管理プラン</Hl>
        で剪定・消毒・施肥をセットで任せられます。作業量の多い敷地ほど、そのつど手配し直す手間が積み上がるため、
        <Hl>年間の作業をひとまとめの契約にする</Hl>
        使い方と相性があります。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "作業量の多い敷地の管理を定額でまとめたい人",
      "毎回の手配と日程調整の手間をなくしたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。相場として掲載されている金額は一般的な広さの庭を想定した目安のため、敷地が広い場合の金額は必ず現地の見積もりで確認してください。フランチャイズ型のため、実際の対応は地域の加盟店によります。",
  },
  {
    slug: "bassai-110ban",
    num: "1-4",
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
        のが特徴です。敷地の外周に並んだ木や、管理しきれずに大きくなった木を減らして、毎年の作業量そのものを小さくしたいときに相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "本数を減らして毎年の作業量を軽くしたい人",
      "外周の大きくなりすぎた木を整理したい人",
      "伐採した木材の処分まで一括で頼みたい人",
      "抜根して跡地を作り替えたい人",
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
        され、予約前にメッセージで相談できるため、対応できる面積の上限や機械の持ち込み可否を確かめてから予約できます。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "広い面積に対応できる出店者を探したい人",
      "口コミを見て自分で地域の業者を選びたい人",
      "予約前にメッセージで作業範囲を相談したい人",
      "万が一の補償制度を重視する人",
    ],
    table: [
      { k: "料金の特徴", v: "出店者ごとに事前明示", note: "口コミ・実績と合わせて比較" },
      { k: "予約", v: "オンラインで完結", note: "業者と直接メッセージ可" },
      { k: "補償", v: "トラブル時の費用補償制度あり" },
      { k: "運営会社", v: "みんなのマーケット株式会社" },
    ],
    memo:
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトのレビュー記事作成時に確認しています。出店者ごとに対応できる面積や作業内容は異なるため、広い敷地の依頼では予約前に範囲を伝えて確認するのがおすすめです。",
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
    slug: "kusakari-110ban",
    name: "草刈り110番",
    type: "マッチング型",
    price: "草刈り1平米600円〜",
    point: "面積単価で見積もりやすい・防草シート施工・定期メンテナンスプランあり",
  },
  {
    slug: "sentei-110ban",
    name: "剪定110番",
    type: "マッチング型",
    price: "剪定1本2,890円〜（出張費3,000円別途）",
    point: "24時間365日受付・見積もり後の追加料金なし",
  },
  {
    slug: "smile-garden",
    name: "smileガーデン",
    type: "フランチャイズ型",
    price: "草刈り2〜3万円台・剪定3〜4万円台（相場）",
    point: "定額制の年間管理プラン・写真付き作業報告書",
  },
  {
    slug: "bassai-110ban",
    name: "伐採110番",
    type: "マッチング型",
    price: "木の高さ・本数で変動（見積もり無料）",
    point: "伐採・抜根専門・処分まで一括対応",
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
    t: "① 敷地を区画に分け、おおよその面積を測ってから相談する",
    b: "広い敷地では、「庭の草刈りをお願いします」だけでは見積もりが出せません。母屋のまわり、駐車場から門までの通路、建物の裏、外周まわりといった具合に区画へ分け、それぞれの縦横をおおよそでよいので測って面積を出しておきましょう。歩幅で数えた概算でも十分役に立ちます。区画ごとの面積が分かれば、面積単価のサービスなら費用の当たりが自分で付けられ、業者との会話も一気に具体的になります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1平米◯◯円〜」という表示は最低単価で、実際は草丈・地面の状態・障害物の多さで変わります。面積が広いほど刈った草の量も増え、処分費が総額に占める割合が大きくなるため、処分費・出張費まで含めた総額を必ず作業前に確認しましょう。刈った草を敷地内に残してよいなら費用が変わることもあるので、その可否もあわせて相談すると判断材料が増えます。",
  },
  {
    t: "③ 契約前に「1回あたりの作業範囲」を文字で残す",
    b: "定期の草刈りでは、同じ料金でもどこまで刈るかの認識がずれやすく、「前回は刈ってくれた場所が今回は入っていない」という行き違いが起こりがちです。区画の名前と面積、含む作業と含まない作業（草の持ち帰り、生垣の刈り込み、側溝まわりなど）を書き出して、メールなど記録の残る形で共有しておきましょう。1年目の実績をもとに2年目の範囲と回数を見直す前提にしておくと、契約が実態に合わないまま続くことを防げます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ敷地でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。面積が広い依頼では、単価の差が総額の差として大きく出るため、比較の効果も大きくなります。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "広い敷地の草刈りは、年に何回頼むのが目安ですか？",
    a: "全面を同じ回数で刈る必要はありません。人の出入りがある母屋まわりや通路は回数を多めに、ふだん使わない外周や裏手は年1〜2回に抑える、という配分が現実的です。まずは「よく使う区画は多め、使わない区画は少なめ」で1年やってみて、伸び具合と気になり方を見ながら翌年の回数を調整しましょう。全面を毎回刈る前提で考えると費用が膨らみやすく、続けにくくなります。",
  },
  {
    q: "草刈りの費用は面積だけで決まりますか？",
    a: "面積が基本の単位ですが、それだけでは決まりません。草丈が伸びきっているか、地面が平らか、石や切り株などの障害物があるか、機械を持ち込めるか、刈った草を持ち帰るかといった条件で作業効率が変わり、単価や総額に反映されます。草刈り110番は1平米600円〜という面積単価を掲げていますが、これは最低単価のため、実際の金額は現地の状況を見た見積もりで確定します。",
  },
  {
    q: "敷地が広すぎて、毎年の草刈り費用が負担です。減らす方法はありますか？",
    a: "回数を削るより、「刈る面積そのものを減らす」ほうが長い目で効きます。通路や物置のまわりなど、緑である必要のない場所を砂利や防草シートで覆えば、その区画は毎年の作業から外れます。初期費用はかかりますが、数年単位で見れば草刈り費用の削減につながることが多いでしょう。使わない区画は背の低い植物で覆ってしまう方法もあります。方法ごとの費用と向き不向きは当サイトの雑草対策の比較記事でまとめています。",
  },
  {
    q: "庭木の剪定と草刈りは、同じ業者にまとめて頼んだ方が安くなりますか？",
    a: "必ずしも安くなるとは限りませんが、出張の回数が減る分の効率は期待できます。ただし料金の単位が違う点に注意してください。草刈りは面積、剪定は本数や木の大きさで計算されるのが一般的で、それぞれ得意な業者も異なります。まとめて1社に頼む場合も、見積もりは「草刈り分」「剪定分」に分けて出してもらうと、他社と比べやすくなり、翌年どちらを削るかの判断もしやすくなります。",
  },
  {
    q: "刈った草の処分もお願いできますか？量が多くなりそうです。",
    a: "処分まで対応する業者が一般的ですが、面積が広いと草の量も多くなり、処分費が総額を左右します。見積もり時に「処分込みの金額か」「量が増えた場合はどう扱うか」を確認しておきましょう。敷地に余裕があり、刈った草をその場に敷いたり一角にまとめたりしてよい場合は、費用が変わることもあります。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（量や出し方の制限）の確認が必要です。",
  },
  {
    q: "母屋まわりだけ、といった部分的な依頼もできますか？",
    a: "できます。むしろ広い敷地では、区画を区切って頼むほうが費用の見通しが立てやすくなります。依頼の際は「どこからどこまで」を写真や簡単な図で示すと、当日の行き違いを防げます。1回目は範囲を絞って頼み、仕上がりと段取りを見てから翌回の範囲を広げるという進め方なら、業者との相性も確かめられます。定期契約に進む場合も、この実績が回数と範囲を決める材料になります。",
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

export default function AreaSagaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】佐賀の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "佐賀で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-19T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "佐賀の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#saga5",
      label: "1｜佐賀で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "佐賀の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kukaku", label: "2｜広い敷地は「全面を何回」ではなく「区画ごとに何回」で決める" },
    { href: "#karanai", label: "3｜回数を減らしたいなら「刈らない場所」を先に作る" },
    { href: "#tanka", label: "4｜面積単価の見積もりは「実測」と「作業条件」で変わる" },
    { href: "#yosan", label: "5｜年間の予算は「まとめる」「時期をずらす」で組み立てる" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜佐賀の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">佐賀の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】佐賀の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["佐賀", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="佐賀の剪定・伐採・草刈り業者の比較"
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
              「敷地が広くて、草刈りが終わる頃には最初に刈った場所がまた伸びている」「全部きれいにしようとすると費用が読めない」——佐賀で庭業者を探す相談には、こうした「面積が広い家の草の管理」の悩みがよく関わってきます。敷地にゆとりがある住まいでは、庭木の手入れよりもまず、草をどう抑えるかが毎年の負担の中心になります。そして面積が広いほど、「全部を同じように手入れする」という前提そのものが、費用も手間も膨らませる原因になります。
            </p>
            <p>
              本記事では、佐賀市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「区画ごとに回数を配分する考え方」「刈らない場所を作って作業量そのものを減らす方法」「面積単価の見積もりが変わる条件」「年間の予算の組み立て方」といった、広い敷地ならではの依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="saga5" num="1">佐賀で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            佐賀市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月19日時点の掲載内容）。実際の総額は面積・草の状態・樹種・本数で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            佐賀の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月19日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、佐賀での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜区画ごとの回数 */}
          <H2 id="kukaku" num="2">広い敷地は「全面を何回」ではなく「区画ごとに何回」で決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            広い敷地の草刈りで費用が膨らむいちばんの原因は、<Hl>敷地全体をひとかたまりとして扱っていること</Hl>です。全面を年3回刈ると決めれば、ふだん誰も歩かない裏手にも年3回分の費用がかかります。そうではなく、敷地を「母屋のまわり」「門から玄関までの通路」「駐車場」「建物の裏」「外周」といった区画に分け、<Hl>区画ごとに必要な回数を割り振る</Hl>のが、面積の広い家の基本の考え方です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            回数の割り振りの基準は、「そこを人が見るか、通るか」です。来客の目に入る場所や日常的に歩く通路は多めに、めったに立ち入らない裏手や外周は年1〜2回で十分なことが多いでしょう。<Hl>この配分をするだけで、同じ予算でも「気になる場所がきれいな状態」を長く保てます</Hl>。草刈り110番のような面積単価のサービスなら、区画ごとの面積さえ分かれば、どこに何回分の予算を置くかを自分で組み立てられます。一年の庭仕事全体の中での位置づけは
            <Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュールの解説記事</Link>
            も参考にしてください。
          </p>

          {/* 3｜刈らない場所 */}
          <H2 id="karanai" num="3">回数を減らしたいなら「刈らない場所」を先に作る</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            回数を削るのは、費用を下げるいちばん手軽な方法に見えますが、伸びきってから刈ると単価も上がりやすく、思ったほど得になりません。長い目で効くのは<Hl>「刈る面積そのものを減らす」</Hl>ほうです。物置のまわり、通路、駐車場の際など、緑である必要のない場所を砂利や防草シートで覆ってしまえば、その区画は毎年の作業から丸ごと外れます。初期費用はかかりますが、広い敷地ほど数年での回収が見込めます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            全部を覆う必要はありません。<Hl>面積の大きい場所から順に、費用対効果の高い区画だけを選んで手を入れる</Hl>のが現実的です。歩く場所は砂利、建物の裏は防草シート、日当たりのよい平らな区画は背の低い植物で覆う——というように、場所ごとに方法を変えるのが合理的です。方法ごとの費用と向き不向きは
            <Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の比較記事</Link>
            と
            <Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>
            、覆う植物の選び方は
            <Link href="/groundcover-erabikata/" className="text-[#2D7F3E] underline">グラウンドカバーの選び方の解説記事</Link>
            でまとめています。そもそも草の生えにくい庭に作り替える考え方は
            <Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草の生えにくい庭の解説記事</Link>
            が参考になります。
          </p>

          {/* 4｜単価 */}
          <H2 id="tanka" num="4">面積単価の見積もりは「実測」と「作業条件」で変わる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            「1平米600円〜」のような面積単価は分かりやすい一方で、<Hl>これは最低単価であって、掛け算しただけの金額になるとは限りません</Hl>。草丈が伸びきっていれば一度で刈り払えず手間が増えますし、地面に石や切り株、傾斜、側溝があれば機械を思うように使えません。逆に、平らで見通しがよく、機械を持ち込める区画は効率よく進みます。同じ面積でも条件で総額が変わるのは、こうした理由です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            だからこそ、依頼側でできる準備は<Hl>区画ごとの面積をおおよそでも実測しておくこと</Hl>と、<Hl>作業条件を先に伝えておくこと</Hl>の二つです。歩幅で数えた概算でも構いませんし、地図アプリの計測機能を使う方法もあります。障害物の有無、機械を入れられる出入口の幅、刈った草を敷地内に置いてよいかどうかを最初に伝えれば、見積もりの精度が上がり、当日の追加相談も減ります。見積書のどこを見るべきかは
            <Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">庭の見積もりの見方の解説記事</Link>
            でまとめています。
          </p>

          {/* 5｜年間予算 */}
          <H2 id="yosan" num="5">年間の予算は「まとめる」「時期をずらす」で組み立てる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            作業量の多い敷地では、一年の費用をどう配分するかが管理のしやすさを左右します。まず効くのが<Hl>1回の訪問に作業をまとめる</Hl>ことです。草刈りと庭木の剪定を別々の日に頼めば、そのたびに出張の費用と日程調整が発生します。同じ日にまとめられる作業は、見積もりの段階で相談してみましょう。年間の作業をひとまとめの契約にできるsmileガーデンの定額制プランのようなサービスは、この手間を業者側の段取りに移す選択肢になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            もう一つが時期の工夫です。草が最も伸びる時期は依頼が集中し、日程が取りにくくなります。<Hl>混み合う時期を外して予定を先に押さえておく</Hl>だけでも、希望の日に作業してもらいやすくなります。あわせて、毎年の作業量を根本から減らすなら、外周で大きくなりすぎた木を減らすのも有効です。本数が減れば剪定も落ち葉の片付けも軽くなります（
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            へ）。手のかからない木への植え替えの考え方は
            <Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の解説記事</Link>
            、管理の総量を段階的に縮める進め方は
            <Link href="/niwajimai/" className="text-[#2D7F3E] underline">庭じまいの解説記事</Link>
            を参考にしてください。
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
          <H2 id="faq" num="7">佐賀の庭業者でよくある質問</H2>
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
            佐賀で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。区画ごとの面積で費用を組み立てるなら面積単価の草刈り110番、庭木だけを本数単位で頼むなら剪定110番、年間の作業をまとめて定額で任せるならsmileガーデン、外周の大きくなりすぎた木を減らして作業量そのものを軽くするなら処分まで一括の伐採110番、対応できる面積や条件を予約前に確かめて選ぶならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            敷地が広い家では、「全部を同じように手入れする」という前提を外すことが第一歩です。区画に分けて回数を配分すること、刈らない場所を作って作業量そのものを減らすこと、面積単価は作業条件で変わると理解して実測と情報を先に渡すこと、1回の訪問に作業をまとめて混み合う時期を外すこと、処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、敷地の状況に合った業者を選んでください。
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
              {["佐賀", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/kanazawa/", label: "金沢の庭業者おすすめ5選" },
                { href: "/area/utsunomiya/", label: "宇都宮の庭業者おすすめ5選" },
                { href: "/area/matsuyama/", label: "松山の庭業者おすすめ5選" },
                { href: "/area/kagoshima/", label: "鹿児島の庭業者おすすめ5選" },
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
                { href: "/area/aomori/", label: "青森の庭業者おすすめ5選" },
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
                { href: "/agents/kusakari-110ban/", label: "草刈り110番の口コミ・評判" },
                { href: "/agents/smile-garden/", label: "smileガーデンの口コミ・評判" },
                { href: "/zasso-taisaku/", label: "雑草対策の比較" },
                { href: "/bousou-sheet/", label: "防草シートの選び方" },
                { href: "/niwa-mitsumori-mikata/", label: "庭の見積もりの見方" },
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
