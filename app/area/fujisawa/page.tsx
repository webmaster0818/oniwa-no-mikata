import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/fujisawa/";
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
      "【2026年最新】藤沢の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "藤沢で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・お庭マスター（剪定1本550円〜）の料金と特徴、人と車が増える季節を外して作業車を停められる日から逆算する頼み方、海帰りの道具を洗う一角がある庭の手入れの起点、庭で過ごす時間が長い家の木陰の残し方、庭越しの眺めと目隠しの分け方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】藤沢の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "藤沢で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。海や観光地に近い街では人と車が増える季節を外して作業車を停められる日から逆算して頼むこと、庭の一角が海帰りの道具を洗う・干す場所になっている家はその一角の足元と頭上を手入れの起点にすること、庭で過ごす時間が長い家は木陰をつくる枝を残す前提で切る枝を選んでもらうこと、庭越しの眺めを残したい家は抜く枝と目隠しに残す枝を分けて伝えることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、藤沢市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。庭で過ごす場所の頭上にかかる枝を1本だけ整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "庭で過ごす場所の頭上にかかる枝を1本単位で整えたい人",
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
        ため、道具を洗う一角のまわりや家の裏手の通路など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "洗い場や物置まわりの草を範囲を決めて片付けたい人",
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
        のが特徴です。庭からの眺めをふさぐほど大きくなった木の整理や、庭で過ごす場所の真上に育った木の伐採も、切り分けて搬出する方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "庭からの眺めをふさぐほど大きくなった木を整理したい人",
      "庭で過ごす場所の真上に育った木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。人や車が増える季節を避けて手入れの時期を決めたい家では、回数と時期を先に決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "手入れの時期を毎年の決まりごとにしておきたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。藤沢市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        お庭マスターは、関東・関西・中部エリアを中心に展開する職人品質のマッチング型サービスで、藤沢を含む関東は主力エリアです。
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
      "藤沢・関東エリアで業者を探している人",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心", note: "藤沢での対応可否は見積もり時にご確認ください" },
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
    t: "① 庭の写真に「作業車を停められる場所」と「庭で過ごす場所」を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭がどんな場所にあるかを写真で伝えましょう。家の前の道の幅と、作業車を停められそうな場所、停められない場合にどこまで道具や枝を運ぶことになるかが分かる写真があると、当日の段取りが伝わりやすくなります。庭で過ごす場所がある家なら、テーブルや椅子、デッキの位置と、その頭上にかかる枝が写っていると、どこまで切るかの話が早く進みます。道具を洗う水場や物干しがある庭では、その一角と、そこにかかる木と草の様子もあわせて写しておきましょう。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。家の前に作業車を停められず、切ったものを離れた場所まで運ぶ場合は、その手間が金額に含まれるかどうかが確認事項になります。人や車が増える季節に頼む場合は、希望の日に作業車を停められないこともあるため、日程の選択肢もあわせて確認しましょう。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料なので、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "歩道側の街路樹や植樹帯は道路を管理する自治体などの担当で、庭業者に頼んで切ることはできません。分譲地の入口や区画の間にある共用の緑地は、管理組合や自治会の管轄になっていることがあります。隣家との境界がはっきりしない場所の木や、塀の所有関係が分からない場合は、土地家屋調査士などの専門家に相談する範囲です。庭の一角にある擁壁や石積みそのものの傷みは土木・建築の業者が見る範囲で、庭業者に頼めるのはその上やそばに生えた草木の手入れまでです。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。作業車を停めにくい場所での作業に慣れているか、庭で過ごす場所の頭上だけを整える相談に応じてくれるか、剪定と草刈りをまとめて頼めるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];


const faqs = [
  {
    q: "藤沢で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。庭で過ごす場所の頭上にかかる木を1本だけ整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "家の前の道が狭く、季節によっては車が多くて作業車を停められそうにありません。",
    a: "見積もりの段階で、家の前の道の幅、停められる場所の有無、停められない場合にどこまで道具や枝を運ぶことになるかを伝えておきましょう。人や車が増える季節を外して日程を組む、午前中のうちに作業を終えるなど、日程と時間帯の相談もできます。停める場所の条件によって金額が変わることもあるため、総額の見積もりを取るときに一緒に確認してください。剪定110番は24時間365日受付、伐採110番は24時間受付で、日程の相談がしやすいサービスです。",
  },
  {
    q: "庭の一角で海から帰った道具を洗っています。そのまわりの草がすぐ茂って困ります。",
    a: "水を使う一角は土が湿りやすく、草が出やすい場所です。洗い場から水が流れる先と、人が通る幅を先に決めて、その範囲を面で覆うのが基本です。刈った後に防草シートを敷いて砂利で覆うと草が生えにくくなり、雨の日の泥はねも減ります。草刈り110番は1平米600円〜の面積単価で範囲を決めて頼め、草刈り後の防草シート施工も相談できます。水がたまるようなら、排水桝が土や落ち葉でふさがれていないかもあわせて点検しましょう。",
  },
  {
    q: "海が近い庭で葉の色が悪くなりました。木が弱っているのでしょうか？",
    a: "海に近い場所では潮を含んだ風で葉が傷みやすいと言われますが、葉の見た目だけで木が弱っていると決めつけることはできません。まず葉を水で洗い流し、新しい芽の出方を確かめ、春の芽吹きまで様子を見てから判断するのが基本です。それでも回復しない場合は、風の当たり方をやわらげる植え方に変える、別の木に植え替えるといった検討に進みます。当サイトの庭木が枯れたかどうかの見分け方の記事が参考になります。",
  },
  {
    q: "庭で過ごす場所の上まで枝が伸びてきました。どこまで切ってもらえばよいですか？",
    a: "目安は、椅子やテーブルに座ったときに頭が当たらない高さと、真上から実や落ち葉が落ちてこない張り出しに整えることです。日差しをやわらげる木陰の役割も兼ねている場合は、全部を短くするのではなく、残したい木陰の場所を伝えて枝を透かしてもらうと、涼しさを残したまま通りやすくなります。毛虫のつきやすい木や、蜂の巣ができやすい場所があれば、作業前に業者へ伝えておきましょう。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。作業車を家の前に停められない庭では、運び出しの手間が金額に含まれるかもあわせて確認しておくと安心です。",
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

export default function AreaFujisawaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】藤沢の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "藤沢で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "藤沢の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#fujisawa5",
      label: "1｜藤沢で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "藤沢の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#sagyobi", label: "2｜海と観光地が近い街では「作業車を停められる日」から逆算して依頼の時期を決める" },
    { href: "#araiba", label: "3｜庭の一角が「海帰りの道具を洗う・干す場所」になっている家は、その一角の足元と頭上を手入れの起点にする" },
    { href: "#kokage", label: "4｜庭で過ごす時間が長い家は「木陰をつくる枝」を残す前提で、切る枝を選んでもらう" },
    { href: "#nagame", label: "5｜庭越しの眺めを残したい家は「抜く枝」と「目隠しに残す枝」を分けて伝える" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜藤沢の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">藤沢の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】藤沢の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["藤沢", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="藤沢の剪定・伐採・草刈り業者の比較"
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
              「休みの日に限って家の前が混んでいて、作業車を停められるか分からない」「海から帰って道具を洗う場所のまわりが草だらけ」「庭で過ごしたいのに、椅子の真上まで枝が伸びてきた」「庭越しに抜けていた眺めが、いつの間にか木でふさがれていた」——藤沢で庭業者を探すきっかけには、海に近い暮らしと、季節によって人と車が増える街並みが重なる土地ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、藤沢市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「海と観光地が近い街では作業車を停められる日から逆算して依頼の時期を決めること」「庭の一角が海帰りの道具を洗う・干す場所になっている家はその一角の足元と頭上を手入れの起点にすること」「庭で過ごす時間が長い家は木陰をつくる枝を残す前提で切る枝を選んでもらうこと」「庭越しの眺めを残したい家は抜く枝と目隠しに残す枝を分けて伝えること」といった、藤沢で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="fujisawa5" num="1">藤沢で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            藤沢市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月11日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、口コミで地域の業者を選べるくらしのマーケットと、大手直営のダスキンは、比較表に掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            藤沢の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月11日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東・関西・中部エリア中心のサービスのため、藤沢での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="sagyobi" num="2">海と観光地が近い街では「作業車を停められる日」から逆算して依頼の時期を決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            藤沢は海に面した街で、季節や曜日によって、市内の道や駐車できる場所に人と車が集まります。庭の手入れそのものは一年のどの時期でも頼めますが、<Hl>作業車を家の近くに停められるかどうかは日によって変わります</Hl>。剪定や伐採は、道具の積み下ろしと、切った枝葉の運び出しがひと続きの作業です。停める場所が遠いほど、運ぶ手間と時間が増えます。頼む時期を決めるときは、木の状態だけでなく、家のまわりの道の込み具合もあわせて考えておくと、当日の段取りが軽くなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見積もりのときに伝えたいのは、家の前の道の幅、作業車を停められる場所があるか、停められない場合にどこまで運ぶことになるか、そして庭に入る道筋です。<Hl>停める場所の条件は金額に関わることがある</Hl>ため、写真とあわせて先に伝えておきましょう。準備の進め方は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">庭木の剪定を頼む前の準備</Link>、見積もりの項目の読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>、複数社に声をかけるときの進め方は<Link href="/aimitsumori-torikata/" className="text-[#2D7F3E] underline">庭工事の相見積もりの取り方</Link>にまとめています。運び出した枝葉の行き先は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            時期は、木にとって切ってよい季節かどうかでも決まります。<Hl>樹種ごとの適期と、家のまわりが落ち着く時期が重なる日を選ぶ</Hl>のが理想で、考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>、一年の段取りは<Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュール</Link>にまとめています。日程の相談のしやすさでは、剪定110番は24時間365日受付、伐採110番は24時間受付で、いずれも見積もりは無料です。毎年同じ時期に済ませたいなら、smileガーデンの定額制の年間管理プランのように回数と時期を先に決めて任せる形もあります。1本だけ先に整えたい場合は、剪定1本2,890円〜（出張費3,000円別途）の剪定110番や、剪定1本550円〜のお庭マスターのように、1本単位で頼めるサービスが向いています。
          </p>

          {/* 3 */}
          <H2 id="araiba" num="3">庭の一角が「海帰りの道具を洗う・干す場所」になっている家は、その一角の足元と頭上を手入れの起点にする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            海の近くで暮らす家では、庭の一角が道具を洗う場所や、洗ったものを干す場所になっていることがあります。水を出す場所、砂を落とす足元、干すためのポールやフェンス——こうした一角は、<Hl>水を使う場所であると同時に、毎日人が通る場所</Hl>です。庭全体を一度に整えようとするより、この一角の足元と頭上から手入れの範囲を決めたほうが、暮らしの不便が先に片付きます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            足元は、流した水の行き先と、通る幅を決めるところから始めます。湿りやすい場所は草が出やすく、刈ってもすぐ戻るため、<Hl>刈る、覆う、水の抜け道を確かめるの順</Hl>で考えるのが基本です。覆い方は<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの基礎知識</Link>と<Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの基本</Link>、草が出にくい仕上げは<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>、水を使う場所まわりは<Link href="/risuisen-sansui/" className="text-[#2D7F3E] underline">立水栓・散水まわりの基礎知識</Link>、雨の日の足元は<Link href="/niwa-doma-concrete/" className="text-[#2D7F3E] underline">庭をコンクリート・土間打ちにする判断</Link>を参考にしてください。水がたまるようなら<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">庭の排水桝の点検の基本</Link>と<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>で出口を確かめます。面で片付けるなら、草刈り110番は1平米600円〜の面積単価で範囲を決めて頼め、草刈り後の防草シート施工も相談できます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            頭上は、洗ったものを干す場所に<Hl>落ち葉や実、虫が落ちてこないか</Hl>で考えます。落ち葉の出方で木を選び直すなら<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>、毛虫のつきやすい木は<Link href="/kemushi-chui/" className="text-[#2D7F3E] underline">庭木の毛虫の注意点</Link>、物置やフェンスのそばにできた蜂の巣は<Link href="/niwaki-hachinosu/" className="text-[#2D7F3E] underline">庭木の蜂の巣への対処</Link>にまとめています。デッキが洗い場を兼ねている家は<Link href="/wooddeck-mawari-teire/" className="text-[#2D7F3E] underline">ウッドデッキ周りの手入れの基本</Link>もあわせて確認しましょう。頭上の枝を1本単位で整えるなら剪定110番やお庭マスター、干し場に届く高さまで育った木を切り分けて運び出すなら、処分まで一括で相談できる伐採110番が向いています。
          </p>

          {/* 4 */}
          <H2 id="kokage" num="4">庭で過ごす時間が長い家は「木陰をつくる枝」を残す前提で、切る枝を選んでもらう</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            藤沢には、庭に椅子やテーブルを出して過ごす家、デッキやタイルの一角をつくって屋外の時間を楽しむ家が多くあります。こうした庭では、木は眺めるものであると同時に、<Hl>日差しをやわらげる屋根の役割</Hl>も持っています。手入れのときに「すっきりさせてください」とだけ伝えると、木陰ごと無くなって、暑い時期に庭へ出にくくなることがあります。切る枝を選んでもらう前に、残したい木陰の場所を伝えるのが順番です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            伝え方は、<Hl>過ごす場所に立って、どの方向からの日差しを遮りたいかを示す</Hl>のが分かりやすい方法です。そのうえで、頭に当たる高さの枝、真上から実や落ち葉が落ちてくる枝、風の通りをふさいで蒸れる枝を外してもらえば、涼しさを残したまま通りやすくなります。暑い時期の庭の過ごし方は<Link href="/natsu-niwa-mosho/" className="text-[#2D7F3E] underline">夏の庭の水やりと猛暑対策</Link>、木を一定の大きさに保つ考え方は<Link href="/symboltree-teire/" className="text-[#2D7F3E] underline">シンボルツリーの手入れの基本</Link>と<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>、子どもが遊ぶ庭の注意は<Link href="/kodomo-niwa-anzen/" className="text-[#2D7F3E] underline">子どもと庭遊びの安全対策</Link>、犬と過ごす庭は<Link href="/pet-to-niwa/" className="text-[#2D7F3E] underline">ペットと庭の安全の基礎知識</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            海に近い場所では、潮を含んだ風で葉が傷みやすいと言われます。ただし、<Hl>葉の色や縁の様子だけで木が弱ったと決めつけず、春の芽吹きまで見てから判断する</Hl>のが基本です。見極めは<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>、手入れの軽い木への入れ替えは<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>、乾いた風を受ける場所に向く木は<Link href="/olive-niwaki-teire/" className="text-[#2D7F3E] underline">オリーブなど乾燥に強い庭木の手入れ</Link>が参考になります。過ごす場所の真上まで育って手が届かなくなった木は、無理をせず<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者に頼む判断</Link>を確かめてから頼みましょう。頭上の枝を1本単位で整えるなら剪定110番やお庭マスター、切って運び出すところまで任せるなら伐採110番が向いています。
          </p>

          {/* 5 */}
          <H2 id="nagame" num="5">庭越しの眺めを残したい家は「抜く枝」と「目隠しに残す枝」を分けて伝える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭の先に空や緑が抜けて見える家では、<Hl>木は眺めをつくる側にも、ふさぐ側にもなります</Hl>。長く住むうちに、目隠しのために植えた木が育って、外からの視線と一緒に、見たかった景色まで隠してしまうことがあります。手入れを頼むときは「全体を低く」ではなく、抜いてほしい枝と、目隠しとして残したい枝を分けて伝えると、仕上がりの行き違いが減ります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            伝えるときは、<Hl>家の中から見える高さと、道や隣家から見える高さを分けて考える</Hl>のが分かりやすい方法です。座って見る高さの枝を透かし、歩く人の目線の高さは残す、という伝え方ができます。目隠しの木の選び方は<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>、生垣を刈り込みやすい形に保つ手入れは<Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの基礎知識</Link>、木からフェンスへ切り替える判断は<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較</Link>、配置ごと考え直すなら<Link href="/shokusai-haichi-keikaku/" className="text-[#2D7F3E] underline">植栽の配置計画の立て方</Link>を参考にしてください。夜の見え方は<Link href="/niwa-shomei-keikaku/" className="text-[#2D7F3E] underline">庭の照明計画の基本</Link>と<Link href="/niwa-bohan/" className="text-[#2D7F3E] underline">庭の防犯対策の基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            眺めをふさぐほど大きくなった木は、切るか、移すか、入れ替えるかの判断になります。<Hl>切り株を残すか根まで取るかで費用と後の使い道が変わる</Hl>ため、<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違い</Link>と<Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>を確かめてから決めましょう。同じ木を別の場所で生かすなら<Link href="/niwaki-ishoku/" className="text-[#2D7F3E] underline">庭木の植え替え・移植の基礎知識</Link>が参考になります。歩道側の街路樹や植樹帯は道路を管理する自治体などの担当で、庭業者に頼んで切ることはできません。分譲地の入口や区画の間にある共用の緑地は、管理組合や自治会の管轄になっていることがあります。<Hl>大きくなった木の整理なら、切り分けて運び出す方法から相談できる伐採110番</Hl>、仕上がりを毎年同じ状態で保つなら、写真付きの作業報告書が受け取れるsmileガーデンの年間管理が向いています。
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
          <H2 id="faq" num="7">藤沢の庭業者でよくある質問</H2>
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
            藤沢で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。庭で過ごす場所の頭上にかかる枝を1本単位で整えるなら樹種別の目安がある剪定110番や1本単位の料金体系のお庭マスター、洗い場や物置まわりの草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、眺めをふさぐほど大きくなった木の整理なら処分まで一括の伐採110番、毎年同じ時期に手入れを済ませたいならsmileガーデン、というように、目的によって向いているサービスは変わります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            海に近い暮らしと、季節によって人と車が増える街並みが重なる藤沢では、「いつ、どこに車を停めて作業してもらうか」を先に決めることが依頼の出発点になります。人と車が増える季節を外して日程を組むこと、洗い場や干し場のある一角は足元と頭上から範囲を決めること、庭で過ごす家は木陰をつくる枝を残す前提で切る枝を選んでもらうこと、眺めと目隠しを分けて伝えること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["藤沢", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/oniwa-master/", label: "お庭マスターの口コミ・評判" },
                { href: "/sentei-irai-junbi/", label: "庭木の剪定を頼む前の準備" },
                { href: "/mekakushi-niwaki/", label: "目隠しになる庭木の選び方" },
                { href: "/bousou-sheet/", label: "防草シートの基礎知識" },
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
