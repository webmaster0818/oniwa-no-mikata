import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/hachioji/";
const UPDATED = "2026年9月9日";
const UPDATED_ISO = "2026-09-09";

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
      "【2026年最新】八王子の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "八王子で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・お庭マスター（剪定1本550円〜）の料金と特徴、ひな壇状に造成された丘陵の住宅地で上の家と下の家の両方に目を配る手入れ、丘陵の北側・谷側の庭で日が当たる時間を基準に木を選び直す考え方、人に貸している戸建ての庭の分担の決め方、畑や果樹園に隣り合う住宅地の庭の段取りまで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】八王子の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "八王子で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。ひな壇状に造成された丘陵の住宅地の庭は上の家と下の家の両方に目を配って手入れすること、丘陵の北側・谷側の庭は日が当たる時間を基準に木と下草を選び直すこと、人に貸している戸建ての庭は借主と貸主の分担を決めてから業者を手配すること、畑や果樹園に隣り合う住宅地の庭は農作業の時期と境目の草を意識して段取りすることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、八王子市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。ひな壇状の住宅地で下の家の屋根より高くなった木を1本だけ低く整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "下の家の屋根より高くなった木を1本単位で低く整えたい人",
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
        ため、畑に接する外周や斜面の下の通路など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "畑に接する外周や斜面の下の草を範囲を決めて片付けたい人",
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
        のが特徴です。ひな壇状の住宅地で下の家の側に枝を落とせない場所の木や、人に貸している家の庭で大きくなりすぎた木も、切り分けて搬出する方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "ひな壇状の住宅地で下の家に配慮しながら木を整理したい人",
      "貸している家の庭の木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。人に貸している家や、離れて暮らす親の家の庭では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "貸している家や離れて暮らす親の家の庭を毎年の決まりごとにしたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。八王子市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        お庭マスターは、関東・関西・中部エリアを中心に展開する職人品質のマッチング型サービスで、八王子を含む関東は主力エリアです。
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
      "八王子・関東エリアで業者を探している人",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心", note: "八王子での対応可否は見積もり時にご確認ください" },
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
    t: "① 庭の写真に「高さの差」と「隣との位置関係」を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭がどんな場所にあるかを写真で伝えましょう。ひな壇状の住宅地なら、上の家との擁壁や下の家の屋根がどのくらいの位置にあるのか、庭から道路までの階段や通路、車を停められそうな場所が写っていると、作業のしかたと搬出の段取りが伝わりやすくなります。畑や果樹園に接している庭なら、境目の様子と農地側の作物の位置も撮っておくと、作業の時期の相談が早くなります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。階段でしか入れない庭や、切ったものを下の道路まで下ろす必要がある庭では、運ぶ手間が金額に含まれるかどうかが確認事項です。市街地から離れた場所では出張費の扱いも加盟店によって変わることがあります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料なので、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "ひな壇状の住宅地では、上の家の木が擁壁越しに張り出していたり、自分の木の枝が下の家の屋根にかかっていたりします。境界を越えた枝の扱いには法律上の決まりがあるため、勝手に切らず先に相談するのが基本です。擁壁のひび・ふくらみ・ずれは庭業者ではなく土木や建築の専門業者の範囲、境界の位置がはっきりしない場所は土地家屋調査士などの専門家に相談する範囲です。人に貸している家の庭は、契約でどこまで借主の負担かが決まっているため、不動産会社や管理会社に確認してから手配しましょう。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。高さの差がある敷地での作業に慣れているか、日の当たりにくい庭に合う木を提案してくれるか、立ち会えない日の作業を報告付きで受けてくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "八王子で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。下の家の屋根より高くなった木を1本だけ低くしたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "上の家の木の枝が擁壁越しにこちらの庭へ張り出しています。切ってもよいですか？",
    a: "まず上の家の持ち主に連絡して相談するのが基本です。越境してきた枝の扱いには法律上の決まりがあり、状況によって対応が変わるため、勝手に切る前に持ち主への連絡を優先しましょう。境界の位置そのものがはっきりしない場合は、土地家屋調査士などの専門家に確認する範囲です。擁壁そのものにひびやふくらみがある場合は、庭業者ではなく土木や建築の専門業者に見てもらってください。当サイトの隣家への枝の越境と対処の基本の記事に考え方をまとめています。",
  },
  {
    q: "丘陵の北側で日が当たる時間が短く、植えた木が育ちません。",
    a: "日が当たる時間の短い庭では、日なた向きの木をそのまま育て続けるより、日陰に向く木や下草に切り替えるほうが手入れが軽くなります。まず一日のうちどの時間帯にどこへ日が当たるかを確かめ、日が当たる一角には残したい木を、当たらない場所には日陰に向くものを配置し直す考え方です。弱った木が枯れたかどうかの見極めは、春の芽吹きまで待ってから判断しましょう。当サイトの北向き・日陰の庭の植栽の考え方の記事が参考になります。",
  },
  {
    q: "学生に貸している戸建ての庭が荒れてきました。貸主が業者を手配してよいですか？",
    a: "まず賃貸借契約でどこまでが借主の負担かを確かめ、不動産会社や管理会社に確認したうえで手配してください。日常の草取りは借主、木の剪定や伐採は貸主が業者に頼む、という分け方が一般的ですが、契約によって扱いは変わります。業者を入れる日は借主に事前に伝え、庭への出入りの経路を決めておきましょう。立ち会えない場合は、smileガーデンのように写真付きの作業報告書が受け取れるサービスを選ぶと、仕上がりを確かめやすくなります。",
  },
  {
    q: "隣が畑で、境目から草が入ってきます。農地側の草も刈ってもらえますか？",
    a: "庭業者に頼めるのは自分の敷地の中までで、農地側の草は持ち主の判断で管理する範囲です。境目の草は自分の敷地側で伸びる前に刈る、防草シートや砂利で覆って生えにくくする、という方法で対処します。農地との境界の位置がはっきりしない場合は、土地家屋調査士などの専門家に確認する範囲です。草刈り110番は1平米600円〜の面積単価で範囲を決めて頼めます。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。ひな壇状の住宅地では、切ったものを下の家の側に落とさず、階段や通路で運ぶ段取りまで確認しておくと安心です。",
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

export default function AreaHachiojiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】八王子の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "八王子で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-09T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "八王子の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#sagamihara5",
      label: "1｜八王子で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "八王子の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#hinadan", label: "2｜ひな壇状に造成された丘陵の住宅地の庭は「上の家」と「下の家」の両方に目を配って手入れする" },
    { href: "#kitagawa", label: "3｜丘陵の北側・谷側にある庭は「日が当たる時間」を基準に木と下草を選び直す" },
    { href: "#kashiya", label: "4｜人に貸している戸建ての庭は「借主が日常」「貸主が木」と分担を決めてから業者を手配する" },
    { href: "#hatake", label: "5｜畑や果樹園に隣り合う住宅地の庭は「農作業の時期」と「境目の草」を意識して段取りする" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜八王子の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">八王子の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】八王子の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["八王子", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="八王子の剪定・伐採・草刈り業者の比較"
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
              「上の家の木が擁壁越しに張り出してきた」「うちの木の枝が下の家の屋根にかかりそう」「北向きの斜面で植えた木が育たない」「学生に貸している家の庭が荒れてきた」「隣の畑との境目から草が入ってくる」——八王子で庭業者を探すきっかけには、丘陵を切り開いた住宅地と、大学の多い街の貸家、畑や果樹園の残る郊外とが同じ市内に混じり合う土地ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、八王子市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「ひな壇状に造成された丘陵の住宅地の庭は上の家と下の家の両方に目を配って手入れすること」「丘陵の北側・谷側の庭は日が当たる時間を基準に木と下草を選び直すこと」「人に貸している戸建ての庭は借主と貸主の分担を決めてから業者を手配すること」「畑や果樹園に隣り合う住宅地の庭は農作業の時期と境目の草を意識して段取りすること」といった、八王子で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="sagamihara5" num="1">八王子で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            八王子市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月9日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、口コミで地域の業者を選べるくらしのマーケットと、大手直営のダスキンは、比較表に掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            八王子の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月9日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東・関西・中部エリア中心のサービスのため、八王子での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="hinadan" num="2">ひな壇状に造成された丘陵の住宅地の庭は「上の家」と「下の家」の両方に目を配って手入れする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            八王子の住宅地には、丘陵の斜面を段々に切り開いて造成された、ひな壇状の区画が数多くあります。こうした場所の庭は、上の区画とは擁壁で、下の区画とは自分の庭の擁壁で仕切られていて、<Hl>平らな住宅地なら「隣」ひとつで済む関係が、「上」と「下」の二方向に分かれる</Hl>のが特徴です。上の家の木は擁壁越しにこちらの庭へ枝を張り出し、こちらの木は下の家の屋根や庭に枝葉を落とします。手入れを考えるときは、自分の庭だけを見るのではなく、上から来るものと下へ落とすものの両方を頭に入れておく必要があります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            まず上の家との関係です。擁壁の上にある木は、こちらから見ると根元が高い位置にあるため、少し伸びただけでも枝が頭の上に張り出してきます。<Hl>張り出している枝の元が上の家の敷地にある場合、切る前に持ち主への連絡が要ります</Hl>。越境した枝の扱いには法律上の決まりがあり、状況によって対応が変わるため、勝手に切らず先に相談するのが基本です。考え方は<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>、境界の位置がはっきりしないときは<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>を参考に、土地家屋調査士などの専門家に確認する範囲です。擁壁そのものにひび・ふくらみ・ずれといった変化がある場合は、庭業者ではなく土木や建築の専門業者に見てもらう範囲で、根が構造物に与える影響は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            次に下の家との関係です。自分の庭の木は、下の家から見ると擁壁の上にそびえる木で、<Hl>落ち葉・枝・実・毛虫がそのまま下の家の屋根や庭に落ちる</Hl>位置にあります。こちらが意識していなくても、下の家にとっては「上から降ってくるもの」になっているため、下の家の側に張り出した枝を優先して整える、実の落ちる木は下の家に向かない側に枝を残す、落葉の時期の前に一度手を入れる、という順番で考えると関係を保ちやすくなります。作業のときも、切った枝を下の家の側に落とさず、階段や通路で運ぶ段取りが要ります。伐採110番は重機が入れない立地でも木を切り分けて搬出する方法を含めて相談でき、剪定110番は剪定1本2,890円〜（出張費3,000円別途）で1本単位から頼めます。落ち葉の出方まで含めた木の選び方は<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>、切りすぎない高さの保ち方は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>をご覧ください。
          </p>

          {/* 3 */}
          <H2 id="kitagawa" num="3">丘陵の北側・谷側にある庭は「日が当たる時間」を基準に木と下草を選び直す</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            丘陵を切り開いた住宅地では、同じ区画の並びでも、南向きの斜面に建つ家と北向きの斜面や谷の底に近い家とで、庭に日が当たる時間がまるで違います。北側や谷側の庭は、朝夕のどちらかしか日が差さなかったり、冬の間は上の家の影に入ったままだったりします。<Hl>日なた向きの木を植えてしまうと、枝が日を求めて片側だけに伸び、形が崩れて弱っていく</Hl>ことがあり、「手入れが足りない」のではなく「場所に合っていない」のが原因というケースが少なくありません。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            こうした庭では、木を切る前に、<Hl>一日のうちどの時間帯にどこへ日が当たるかを確かめる</Hl>ことから始めます。日が当たる一角には残したい木や花を集め、日が当たらない場所には日陰に向く木や下草を置く、という配置の見直しです。日陰に向く植物の選び方は<Link href="/hikage-niwa-shokusai/" className="text-[#2D7F3E] underline">北向き・日陰の庭の植栽の考え方</Link>、地面を覆う下草の選び方は<Link href="/groundcover-erabikata/" className="text-[#2D7F3E] underline">グランドカバープランツの選び方</Link>にまとめています。日陰で湿りがちな場所は苔が広がりやすく、活かすか対策するかの判断は<Link href="/niwa-koke-taisaku/" className="text-[#2D7F3E] underline">庭の苔対策の基本</Link>を参考にしてください。今ある木を別の場所に動かせるかは<Link href="/niwaki-ishoku/" className="text-[#2D7F3E] underline">庭木の移植の解説記事</Link>で考え方を確かめられます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            弱った木を「枯れた」と決めつけて切ってしまう前に、<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>で春の芽吹きまで見てから判断するのが基本です。それでも育たない木は、<Hl>無理に残すより、日の当たる場所に合う木へ入れ替える</Hl>ほうが、その後の手入れが軽くなります。入れ替えは伐採と抜根、処分、植え直しがひと続きの作業になるため、<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違い</Link>を押さえたうえで、伐採110番のように処分まで一括で頼めるサービスや、お庭マスターのように造園デザインの相談まで受けるサービスに、植え直しを含めて相談すると段取りが組みやすくなります。日陰に強く手入れの軽い木の候補は<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>にまとめています。
          </p>

          {/* 4 */}
          <H2 id="kashiya" num="4">人に貸している戸建ての庭は「借主が日常」「貸主が木」と分担を決めてから業者を手配する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大学の多い八王子では、庭付きの戸建てを学生や単身者に貸している家や、親から受け継いだ家を人に貸しながら自分は離れて暮らしている家が珍しくありません。こうした家の庭は、住んでいる人と持ち主が違うため、<Hl>「誰が、どこまで手を入れる責任を持つのか」がはっきりしないまま荒れていく</Hl>ことがあります。借主は自分の庭ではないので木を切る判断ができず、貸主は住んでいないので伸びていることに気づかない、という状態です。庭業者に頼む前に、まずこの分担を決めておく必要があります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            分け方の目安は、<Hl>日常の草取りや落ち葉掃きは借主、木の剪定・伐採・消毒のように専門の作業になるものは貸主が業者に頼む</Hl>、という線です。ただし、実際にどちらの負担になるかは賃貸借契約の内容で決まるため、契約書と、不動産会社や管理会社への確認が先です。貸主が業者を入れる場合は、作業の日を借主に事前に伝え、庭への出入りの経路（室内を通るのか、外から入れるのか）と、車を停める場所を決めておきましょう。借主の側から見た考え方は、契約で手を入れてよい範囲を確かめることが出発点で、当サイトの<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>とあわせて、隣家に迷惑をかけない範囲を先に押さえておくと安心です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            貸主が立ち会えないことを前提にすると、<Hl>写真と報告が残る頼み方</Hl>が向いています。smileガーデンは定額制の年間管理プランで剪定・消毒・施肥をまとめて任せられ、作業後に写真付きの作業報告書が受け取れるため、離れていても仕上がりを確かめられます。入居者が入れ替わる時期に合わせて一度大きく整え、その後は回数と時期を決めて定期で回す形にすると、そのたびに手配する手間もなくなります。空いている期間の庭の考え方は<Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の基本</Link>、貸すにあたって手入れの軽い庭に作り替えるなら<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>と<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>、木を減らして管理を軽くする判断は<Link href="/niwajimai/" className="text-[#2D7F3E] underline">庭じまいの解説記事</Link>を参考にしてください。
          </p>

          {/* 5 */}
          <H2 id="hatake" num="5">畑や果樹園に隣り合う住宅地の庭は「農作業の時期」と「境目の草」を意識して段取りする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            八王子の郊外には、住宅地のすぐ隣に畑や果樹園が残っている場所が多くあります。畑に接する庭は、日当たりと風通しがよく開放的な一方で、<Hl>境目から入ってくる草の種と、農作業の時期に合わせた段取り</Hl>が手入れの条件になります。農地側の草や作物は持ち主の判断で管理する範囲で、こちらから手を出すことはできません。自分の庭でできるのは、境目の草を自分の敷地側で抑えることと、農作業の忙しい時期を避けて作業を組むことです。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            境目の草は、<Hl>伸びてから刈るより、生えにくい状態を先に作る</Hl>ほうが手間が減ります。境目の帯を防草シートや砂利で覆う、地面を覆う下草を植えておく、という方法があり、考え方は<Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の比較記事</Link>、<Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの解説記事</Link>、<Link href="/tsuru-shokubutsu-kanri/" className="text-[#2D7F3E] underline">つる植物の管理の基本</Link>にまとめています。外周を面で片付けるなら、草刈り110番は1平米600円〜の面積単価で範囲を決めて頼め、刈った後の防草シート施工まで相談できます。境界の位置がはっきりしない場所は、土地家屋調査士などの専門家に確認する範囲です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            作業の時期は、<Hl>隣の農地の収穫期や薬剤散布の時期と重ならないように組む</Hl>と、互いに気を使わずに済みます。刈った草や剪定枝が風で農地側に飛ばないよう、作業日は風の弱い日を選び、片付けまで同じ日に終える段取りが基本です。庭で果樹や家庭菜園を楽しむ家では、庭木との日当たりの取り合いが起きやすく、<Link href="/kateisaien-niwaki/" className="text-[#2D7F3E] underline">家庭菜園と庭木の解説記事</Link>で配置の考え方を確かめられます。毛虫や害虫は農地と庭の間を行き来するため、<Link href="/niwaki-byogaichu/" className="text-[#2D7F3E] underline">庭木の病害虫対策の基本</Link>と<Link href="/kemushi-chui/" className="text-[#2D7F3E] underline">庭の毛虫の注意点</Link>を参考に、消毒を頼むかどうかは<Link href="/niwaki-shodoku-gyosha-handan/" className="text-[#2D7F3E] underline">庭木の消毒を業者に頼む判断</Link>で見当をつけてください。毎年同じ時期に頼むことが決まっているなら、smileガーデンの定額制の年間管理プランのように回数と時期を決めて任せる形にすると、農作業の時期を避けた段取りも固定できます。
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
          <H2 id="faq" num="7">八王子の庭業者でよくある質問</H2>
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
            八王子で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。下の家の屋根より高くなった木を1本単位で低く整えるなら樹種別の目安がある剪定110番や1本単位の料金体系のお庭マスター、畑に接する外周や斜面の下の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、ひな壇状の住宅地で下の家に配慮しながら木を整理するなら処分まで一括の伐採110番、貸している家や離れて暮らす親の家の庭を定期的に整えるなら写真付きの報告書が受け取れるsmileガーデン、というように、目的によって向いているサービスは変わります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            丘陵を切り開いた住宅地と、大学の多い街の貸家、畑や果樹園の残る郊外とが同じ市内に混じり合う八王子では、庭の置かれた立場を伝えることが依頼の出発点になります。ひな壇状の住宅地では上から来るものと下へ落とすものの両方に目を配ること、北側や谷側の庭では日が当たる時間を基準に木と下草を選び直すこと、人に貸している家の庭は借主と貸主の分担を契約で確かめてから手配すること、畑に接する庭は境目の草を先に抑えて農作業の時期を避けて段取りすること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["八王子", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/funabashi/", label: "船橋の庭業者おすすめ5選" },
                { href: "/area/kawaguchi/", label: "川口の庭業者おすすめ5選" },
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
                { href: "/agents/oniwa-master/", label: "お庭マスターの口コミ・評判" },
                { href: "/eda-ekkyo/", label: "隣家への枝の越境と対処の基本" },
                { href: "/hikage-niwa-shokusai/", label: "北向き・日陰の庭の植栽の考え方" },
                { href: "/akiya-niwa-kanri/", label: "空き家の庭の管理の基本" },
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
