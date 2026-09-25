import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/matsudo/";
const UPDATED = "2026年9月11日";
const UPDATED_ISO = "2026-09-11";

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
      "【2026年最新】松戸の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "松戸で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・お庭マスター（剪定1本550円〜）の料金と特徴、庭木が育ちきった住宅地で自分の木が隣に落とす影と葉を確かめる考え方、舗装や塀を押し上げる根の見方、一度に切り戻すか数年かけて下げるかの決め方、移り住んで間もない家の一年目の見方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】松戸の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "松戸で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。庭木が育ちきった住宅地では自分の木が隣に落とす影と葉も手入れを考える理由になること、育った木の足元は舗装・塀・排水のふくらみを見てから切る内容と根の扱いを決めること、長年伸ばしてきた木を小さくするなら一度に切り戻すか数年かけて下げるかを先に決めること、移り住んで間もない家は最初の一年の落ち葉と草の出方を見てから計画を立てることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、松戸市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。隣の家に影を落とすようになった木を1本だけ小さく整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "隣の家に影を落とす木を1本単位で小さく整えたい人",
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
        ため、木を減らして日が入るようになった場所や家の裏手の細長い場所など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "木を減らして日が入るようになった場所の草を範囲を決めて片付けたい人",
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
        のが特徴です。根が舗装や塀を押し上げている木を株ごと入れ替える場合の抜根や、家より高くなった木の整理も、切り分けて搬出する方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "根が舗装や塀を押し上げている木を抜根まで相談したい人",
      "家より高くなった木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。数年かけて少しずつ木を下げていきたい家では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "数年かけて木を下げる手入れを続けて任せたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。松戸市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        お庭マスターは、関東・関西・中部エリアを中心に展開する職人品質のマッチング型サービスで、松戸を含む関東は主力エリアです。
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
      "松戸・関東エリアで業者を探している人",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心", note: "松戸での対応可否は見積もり時にご確認ください" },
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
    t: "① 庭の写真に「隣の家との距離」と「木の足元」を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、木がどこまで育っているかを写真で伝えましょう。隣家の窓や塀との距離、枝がどちら側へ張り出しているかが分かる写真があると、切る量と作業の向きが伝わりやすくなります。木の足元も一枚撮っておきましょう。幹の根元まわりの地面が盛り上がっていないか、アプローチのタイルや塀にひび・ずれがないかは、切る内容と根の扱いを決める材料になります。庭に入る道筋と、作業車を停められる場所もあわせて写しておくと、当日の段取りが早く決まります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。長年伸ばしてきた木を一度に小さくする場合は、切った枝の量が多くなり、処分費が総額の大きな部分を占めることがあります。数年かけて下げる進め方にすると、一度あたりの量と金額は抑えられますが、回数は増えます。どちらで進めるかによって総額の見え方が変わるため、進め方を伝えたうえで見積もりを取りましょう。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料なので、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "隣家側に伸びた枝は、境界を越えている部分の扱いに法律上の決まりがあるため、勝手に切らず先に確かめるのが基本です。隣家との境界がはっきりしない場所の木や、塀の所有関係が分からない場合は、土地家屋調査士などの専門家に相談する範囲です。擁壁や石積みそのものの傷みは土木・建築の業者が見る範囲で、庭業者に頼めるのはその上やそばに生えた草木の手入れまでです。歩道側の街路樹や植樹帯は道路を管理する自治体などの担当で、分譲地の入口や区画の間にある共用の緑地は管理組合や自治会の管轄になっていることがあります。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。育ちきった木を数年かけて下げる進め方に付き合ってくれるか、隣家に近い場所での作業に慣れているか、抜根と足元の片付けまで一括で頼めるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];


const faqs = [
  {
    q: "松戸で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。隣の家に影を落とすようになった木を1本だけ小さくしたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "隣の家から「おたくの木で日が陰る」と言われました。どうすればよいですか？",
    a: "まず、どの時間帯にどこが陰っているのかを確かめるところから始めましょう。木全体を低くしなくても、隣家側に張り出した枝を外して内側を透かすだけで、日の入り方が変わることがあります。隣家側に伸びた枝は境界を越えている部分の扱いに法律上の決まりがあるため、勝手に切らず先に確かめるのが基本です。作業日が決まったら隣にひと声かけ、枝葉が隣側に落ちたときの片付けの範囲も決めておくと安心です。当サイトの隣家への枝の越境と対処の基本の記事が参考になります。",
  },
  {
    q: "木の根で玄関前のタイルが浮いてきました。枝を切れば止まりますか？",
    a: "枝を切っても、根の広がりがすぐに止まるわけではありません。まず、浮いている範囲と幹からの距離を確かめ、切ってよい根かどうかを業者に見てもらいましょう。太い根を大きく切ると木が不安定になることがあるため、木を残すのか、抜いて植え直すのかを含めて決める場面です。舗装や塀を直す工事そのものは外構や土木・建築の業者が受ける範囲で、庭業者に頼めるのは木と根の扱いまでです。伐採110番は抜根と処分まで一括で相談できます。",
  },
  {
    q: "大きくなりすぎた木を一度に小さくしてもらっても大丈夫ですか？",
    a: "樹種と時期によります。一度に強く切り戻すと、翌年に細い枝が勢いよく伸びて、かえって手がかかる形になることがあります。急ぎでなければ、数年かけて少しずつ高さを下げる進め方のほうが、樹形も崩れにくくなります。どちらで進めるかによって一回あたりの金額と回数が変わるため、見積もりの前に進め方を伝えておきましょう。当サイトの庭木の剪定時期の基本の記事に、樹種ごとの考え方をまとめています。",
  },
  {
    q: "引っ越してきたばかりで、庭に何が植わっているのか分かりません。",
    a: "分からないまま全部を切ってしまう前に、最初の一年は「いつ花が咲き、いつ実や落ち葉が落ち、どこに草が茂るか」を見ておくと、手入れの計画が立てやすくなります。月ごとに同じ位置から写真を残しておくと、業者に相談するときにも状態が伝わります。隣家や道路に張り出した枝、枯れ枝、通り道をふさぐ草など、外へ影響が出る場所だけ先に頼み、残りは一年見てから決める、という分け方もできます。当サイトの中古住宅購入時の庭の現状確認の記事が参考になります。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。育ちきった木を一度に小さくすると量が多くなりやすいため、処分込みの総額を先に固めておくと安心です。",
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

export default function AreaMatsudoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】松戸の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "松戸で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-11T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "松戸の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#matsudo5",
      label: "1｜松戸で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "松戸の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kage", label: "2｜庭木が育ちきった住宅地では「自分の木が隣に落とす影と葉」も手入れを考える理由になる" },
    { href: "#neagari", label: "3｜育った木の足元は「舗装・塀・排水のふくらみ」を見てから、切る内容と根の扱いを決める" },
    { href: "#kirimodoshi", label: "4｜長年伸ばしてきた木を小さくするなら「一度に切り戻す」か「数年かけて下げる」かを先に決める" },
    { href: "#ichinenme", label: "5｜移り住んで間もない家は、最初の一年の「いつ何が落ちて、どこが茂るか」を見てから計画を立てる" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜松戸の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">松戸の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】松戸の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["松戸", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="松戸の剪定・伐採・草刈り業者の比較"
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
              「隣の家から、うちの木で日が陰ると言われた」「木の根で玄関前のタイルが浮いてきた」「一度に小さくしてもらったら、翌年に枝が暴れた」「引っ越してきたばかりで、庭に何が植わっているのか分からない」——松戸で庭業者を探すきっかけには、都心へ通う人が早くから移り住み、庭木がじゅうぶんに育った住宅地が広がる土地ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、松戸市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「庭木が育ちきった住宅地では自分の木が隣に落とす影と葉も手入れを考える理由になること」「育った木の足元は舗装・塀・排水のふくらみを見てから切る内容と根の扱いを決めること」「長年伸ばしてきた木を小さくするなら一度に切り戻すか数年かけて下げるかを先に決めること」「移り住んで間もない家は最初の一年のいつ何が落ちて、どこが茂るかを見てから計画を立てること」といった、松戸で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="matsudo5" num="1">松戸で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            松戸市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月11日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、口コミで地域の業者を選べるくらしのマーケットと、大手直営のダスキンは、比較表に掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            松戸の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月11日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東・関西・中部エリア中心のサービスのため、松戸での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="kage" num="2">庭木が育ちきった住宅地では「自分の木が隣に落とす影と葉」も手入れを考える理由になる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            松戸には、都心へ通う人が早くから移り住み、まとまった区画で住宅地が開かれてきた地域があります。住み始めた頃は小さかった庭木も、年月とともに屋根の高さを越え、<Hl>自分の庭だけでなく、隣の家の日当たりや落ち葉の量にも関わる大きさ</Hl>になっていることがあります。「伸びすぎたから切る」だけでなく、「隣にどう影響しているか」も、手入れを考える理由のひとつです。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確かめ方は、<Hl>時間帯を変えて、自分の木がどこに影を落としているかを見る</Hl>ことです。朝と昼過ぎでは陰る場所が変わり、洗濯物を干す場所や隣家の窓にかかる時間帯だけが問題になっていることもあります。落ち葉の落ちる先も同じで、隣の駐車場や雨樋にたまっていないかを見ておきましょう。隣家側に伸びた枝は、境界を越えている部分の扱いに法律上の決まりがあるため、勝手に切らず先に確かめるのが基本です。考え方は<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>、境界や塀の所有が分からないときは<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>、落ち葉の片付けは<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策の基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            手を入れるときは、<Hl>木全体を低くするより、隣家側の張り出しを外して内側を透かす</Hl>ほうが、木の姿を保ったまま日の入り方を変えられます。日陰になった場所の下草の選び方は<Link href="/hikage-niwa-shokusai/" className="text-[#2D7F3E] underline">北向き・日陰の庭の植栽の考え方</Link>、目隠しの役割も兼ねている木は<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>を参考にしてください。手が届かない高さの作業は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者に頼む判断</Link>を確かめてから頼みましょう。隣家側の枝だけを1本単位で整えるなら、剪定110番は剪定1本2,890円〜（出張費3,000円別途）、お庭マスターは剪定1本550円〜の掲載料金で、いずれも見積もりは無料です。
          </p>

          {/* 3 */}
          <H2 id="neagari" num="3">育った木の足元は「舗装・塀・排水のふくらみ」を見てから、切る内容と根の扱いを決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            木が育つと、地上の枝と同じだけ地面の下の根も広がります。長く住んだ家の庭では、<Hl>幹の根元まわりの地面が盛り上がる、アプローチのタイルが浮く、塀にひびが入る</Hl>といった変化が、木の足元から始まっていることがあります。枝の伸びすぎだけを見て切る内容を決める前に、足元を一度見ておくと、同じ費用でも手を入れる場所の優先順位が変わります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見るのは、幹の根元から広がる地面のふくらみ、舗装のずれ、塀の傾き、そして雨水の流れ方です。<Hl>根は水と空気のあるほうへ伸びるため、排水の詰まりや土の締まり具合とも関係します</Hl>。舗装と根の関係は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>、雨水の出口は<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">庭の排水桝の点検の基本</Link>と<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>、敷きものの傷みは<Link href="/renga-makuragi-rekka/" className="text-[#2D7F3E] underline">レンガ・枕木の劣化と交換の判断</Link>と<Link href="/niwa-doma-concrete/" className="text-[#2D7F3E] underline">庭をコンクリート・土間打ちにする判断</Link>にまとめています。擁壁や石積みそのものの傷みは土木・建築の業者が見る範囲で、境界や塀の所有関係がはっきりしない場合は土地家屋調査士などの専門家に相談する範囲です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            対処は、<Hl>木を残して根を部分的に扱うか、木ごと入れ替えるか</Hl>の判断になります。太い根を大きく切ると木が不安定になることがあるため、切ってよい太さと位置は現地で見てもらいましょう。木ごと入れ替えるなら、<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違い</Link>と<Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>を押さえて、根まで取るかどうかを決めます。伐採110番は伐採・抜根から処分まで一括で相談でき、見積もりは無料です。舗装や塀を直す工事そのものは庭業者の範囲を越えるため、<Link href="/niwa-reform-gaiko-chigai/" className="text-[#2D7F3E] underline">庭のリフォームと外構工事の違い</Link>を参考に、どちらに頼む内容かを分けておきましょう。
          </p>

          {/* 4 */}
          <H2 id="kirimodoshi" num="4">長年伸ばしてきた木を小さくするなら「一度に切り戻す」か「数年かけて下げる」かを先に決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            長年伸ばしてきた木を小さくするとき、進め方は大きく二つです。<Hl>一度に目標の高さまで切り戻すか、数年かけて少しずつ下げるか</Hl>。どちらを選ぶかで、一回あたりの費用と枝葉の量、仕上がりの見え方、その後の枝の出方が変わります。頼む前にどちらで進めるかを決めておくと、見積もりも当日のやり取りもぶれません。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            一度に切り戻す方法は、<Hl>短い期間で目的の大きさになる代わりに、翌年に細い枝が勢いよく伸びやすい</Hl>という面があります。数年かけて下げる方法は、樹形を保ちやすく一回の量も抑えられますが、回数が必要です。樹種と時期によって向き不向きがあるため、<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>と<Link href="/symboltree-teire/" className="text-[#2D7F3E] underline">シンボルツリーの手入れの基本</Link>、低木や植え込みは<Link href="/teiboku-kanri/" className="text-[#2D7F3E] underline">低木・植え込みの管理の基本</Link>、生垣を作り替えるなら<Link href="/ikegaki-koshin-uekae/" className="text-[#2D7F3E] underline">生垣の更新・植え替えの考え方</Link>を参考にしてください。自分でやる範囲と頼む範囲の線引きは<Link href="/sentei-diy-gyosha/" className="text-[#2D7F3E] underline">剪定のDIYと業者依頼の判断基準</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            数年かけて下げるなら、<Hl>回数と時期を決めて同じ業者に続けて任せる</Hl>ほうが、前回どこまで切ったかが引き継がれます。smileガーデンには定額制の年間管理プランがあり、作業後に写真付きの作業報告書を受け取れます。一度に切り戻して枝葉の量が多くなる場合は、<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>を押さえて処分込みの総額を先に固めましょう。切り戻しでは形が戻らないほど大きくなった木や、手が届かない高さの木は、<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者に頼む判断</Link>を確かめたうえで、切り分けて運び出すところまで任せられる伐採110番に相談する方法もあります。これから先の手入れを軽くしたいなら、<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>で木そのものを選び直す選択肢もあります。
          </p>

          {/* 5 */}
          <H2 id="ichinenme" num="5">移り住んで間もない家は、最初の一年の「いつ何が落ちて、どこが茂るか」を見てから計画を立てる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            松戸は、都心へ通う人が移り住んできた街で、庭付きの家に新しく住み始める人も少なくありません。前の持ち主や親の代が植えた木が育っている庭では、<Hl>何が植わっていて、いつ何が落ち、どこが茂るのかが、住んでみるまで分からない</Hl>のがふつうです。分からないまま全部を切ってしまうと、翌年に「残しておけばよかった」と思う木が出てきます。最初の一年は、見てから決める期間と考えると、手入れの計画が立てやすくなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見ておきたいのは、<Hl>花と実の時期、落ち葉の量と落ちる先、草が茂る場所、雨のあと水が引かない場所</Hl>の四つです。月ごとに同じ位置から写真を撮っておくと、業者に相談するときにも樹種や状態が伝わります。季節ごとの見どころは<Link href="/haru-niwa-checklist/" className="text-[#2D7F3E] underline">春の庭仕事チェックリスト</Link>と<Link href="/aki-niwa-checklist/" className="text-[#2D7F3E] underline">秋の庭仕事チェックリスト</Link>、一年の段取りは<Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュール</Link>、引き継いだ庭の確かめ方は<Link href="/chuko-jutaku-niwa-kakunin/" className="text-[#2D7F3E] underline">中古住宅購入時の庭の現状確認</Link>にまとめています。図面が残っていれば<Link href="/niwa-sekkeizu-mikata/" className="text-[#2D7F3E] underline">庭の設計図・平面図の読み方</Link>も参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            一年を待たずに手を入れたほうがよいのは、<Hl>隣家や道路に張り出した枝、枯れ枝、通り道をふさぐ草</Hl>です。外へ影響が出る場所だけ先に頼み、残りは一年見てから決める、という分け方ができます。草の出方が分かってきたら、刈る場所と覆う場所を分けるのが基本で、考え方は<Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の方法比較</Link>と<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>にまとめています。面で片付けるなら、草刈り110番は1平米600円〜の面積単価で範囲を決めて頼め、草刈り後の防草シート施工も相談できます。枝を1本単位で先に整えるなら剪定110番やお庭マスター、一年見て木を入れ替えると決めたなら、抜根と処分まで一括の伐採110番に相談できます。
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
          <H2 id="faq" num="7">松戸の庭業者でよくある質問</H2>
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
            松戸で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。隣の家に影を落とす枝を1本単位で整えるなら樹種別の目安がある剪定110番や1本単位の料金体系のお庭マスター、木を減らして日が入るようになった場所や家の裏手の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、根が舗装を押し上げている木の抜根や家より高くなった木の整理なら処分まで一括の伐採110番、数年かけて木を下げる手入れを続けるならsmileガーデン、というように、目的によって向いているサービスは変わります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            都心へ通う人が早くから移り住み、庭木がじゅうぶんに育った住宅地が広がる松戸では、「木がどこまで大きくなったか」を隣と足元の両方から見ることが依頼の出発点になります。自分の木が隣に落とす影と葉を確かめること、足元の舗装・塀・排水のふくらみを見てから根の扱いを決めること、小さくするなら一度に切り戻すか数年かけて下げるかを先に決めること、移り住んで間もない家は最初の一年を見てから計画を立てること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["松戸", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/eda-ekkyo/", label: "隣家への枝の越境と対処の基本" },
                { href: "/niwaki-neagari-hoso/", label: "庭木の根上がりと舗装への影響" },
                { href: "/sentei-jiki/", label: "庭木の剪定時期の基本" },
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
