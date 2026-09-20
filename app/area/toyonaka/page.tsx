import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/toyonaka/";
const UPDATED = "2026年9月20日";
const UPDATED_ISO = "2026-09-20";

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
      "【2026年最新】豊中の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "豊中で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・くらしのマーケットの料金と特徴、庭木の名前を一本ずつ確かめることから始める考え方、常緑樹と落葉樹で手を入れてよい時期が違うこと、仕上がりの希望を言葉でそろえる伝え方、木を植え足すときの離し方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】豊中の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "豊中で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。木の名前が分からないままでは切る時期も切り方も決められないこと、常緑樹と落葉樹では手を入れてよい時期が違うこと、仕上がりの希望は「切り詰める」「透かす」「刈り込む」という言葉でそろえること、植え足す木は建物・塀・配管からの距離を先に決めることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、豊中市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。花の咲く木を1本だけ、咲かせたい高さに整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "花の咲く木を1本単位で咲かせたい高さに整えたい人",
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
        ため、花壇の外周や植え込みの足元など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "花壇の外周や植え込みの足元の草を範囲を決めて片付けたい人",
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
        のが特徴です。何年も咲かなくなった木を入れ替えるための伐採や、庭を作り替えるための抜根も、切り分けて運び出す方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "何年も咲かなくなった木を入れ替えるために整理したい人",
      "大きくなりすぎた花木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。木ごとに手を入れる時期が違う庭では、どの木をいつ見るかを決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "木ごとに違う手入れの時期をまとめて任せたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。豊中市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、花が終わった木の写真を送って切ってよい時期かを聞いてから予約するといった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで切ってよい時期を相談してから頼みたい人",
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
    t: "① 木の名前が分かるものだけでも伝え、葉・幹・全体の三枚を撮って渡す",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、どの木に手を入れてほしいのかを伝えましょう。木の名前が分からない場合は、葉を近くから撮った一枚、幹の肌が分かる一枚、木全体が入る一枚の三枚を用意しておくと、見積もりの段階で樹種の見当がつきます。木の高さは、家の窓や雨どいと並べて写すと伝わります。あわせて、冬に葉を落とす木かどうか、花や実がつくかどうかを覚えている範囲で添えておくと、切ってよい時期の相談が一度で済みます。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。木ごとに手を入れてよい時期が違う庭では、一日でまとめて頼むのか、時期を分けて何回かに分けるのかで総額の見え方が変わります。どの木をいつ頼むのかを伝えたうえで見積もりを取りましょう。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "敷地が広い家では、隣地との境界がどこにあるのか、境目の木や塀がどちらの所有なのかがはっきりしないことがあります。境界の位置や塀の所有関係が分からないときは、土地家屋調査士などの専門家に相談する範囲です。隣家側へ伸びた枝は、境界を越えている部分の扱いに法律上の決まりがあるため、勝手に切らず先に確かめるのが基本です。道路や歩道の街路樹・植樹帯は道路を管理する自治体の担当で、庭業者に頼んで切ることはできません。地域で管理している緑地や集会所まわりの植栽は、自治会や管理組合の管轄になっていることがあります。敷地の高低差を支える擁壁そのものの傷みは土木・建築の業者の範囲で、庭業者に頼めるのはその上に生えた草木の手入れまでです。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。樹種ごとの扱いに詳しいか、切り詰める・透かす・刈り込むのどれで仕上げるかを事前にすり合わせてくれるか、木ごとに違う時期に合わせて来てくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。同じ言葉で頼んだ見積もりを並べれば、金額の差がどこから出ているのかも見えます。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "豊中で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。名前の分からない木を1本だけ見てもらい、扱いを教わりたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "庭にある木の名前が分かりません。それでも見積もりを頼めますか？",
    a: "頼めます。現地調査に来てもらえば、その場で樹種を確認してもらえることがほとんどです。事前に相談したい場合は、葉を近くから撮った写真、幹の肌が分かる写真、木全体が入る写真の三枚を用意しておくと話が早く進みます。くらしのマーケットは予約前に業者とメッセージで相談できるため、写真を送って確認してから予約する使い方もできます。",
  },
  {
    q: "庭の木をまとめて一日で切ってもらうことはできますか？",
    a: "作業としてはできますが、木によって手を入れてよい時期が違うため、まとめて切ると翌年花が咲かない木や、切り口から弱る木が出ることがあります。時期の近い木をまとめ、時期の合わない木だけ別の日に頼む組み方が現実的です。smileガーデンは定額制の年間管理プランがあり、剪定・消毒・施肥をまとめて任せられます。どの木をいつ手入れするかは、見積もりのときに業者と決めておきましょう。",
  },
  {
    q: "短くしてくださいと頼んだら想像と違う仕上がりになりました。どう伝えればよいですか？",
    a: "「切り詰める（枝の長さを詰めて小さくする）」「透かす（枝の数を減らして中を明るくする）」「刈り込む（面をそろえて形を作る）」の三つの言葉で伝えると、受け取り方の差が小さくなります。あわせて、保ちたい高さを窓枠や雨どいなど動かないものを基準に伝えると、数字が分からなくても正確に伝わります。仕上がりの希望に近い写真を一枚添えるとさらに確実です。",
  },
  {
    q: "木を切ったあとの空いた場所に、新しく木を植えてもらえますか？",
    a: "植栽まで対応できるかは業者によって異なるため、見積もりの段階で確認しましょう。植える場所は、建物の壁と窓から、塀や境界から、地面の下を通る配管や排水桝から、それぞれどれだけ離すかを先に決めておくと、数年後に困りません。大きくなったときの姿で置き場所を考えると、後から切り続ける手間が減ります。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。時期を分けて何回かに分けて頼む場合は、そのたびに処分費がかかるのかどうかも聞いておくと総額が読めます。",
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

export default function AreaToyonakaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】豊中の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "豊中で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "豊中の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#toyonaka5",
      label: "1｜豊中で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "豊中の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kinonamae", label: "2｜庭にある木の名前が分からないまま頼むと、切る時期も切り方も決まらない——まず一本ずつ名前を確かめる" },
    { href: "#jorakuyo", label: "3｜常緑樹と落葉樹では手を入れてよい時期が違う——「一日でまとめて」と頼む前に木ごとの時期を確かめる" },
    { href: "#shiagekotoba", label: "4｜仕上がりの希望は「切り詰める」「透かす」「刈り込む」という言葉でそろえる——頼んだ姿との食い違いを減らす" },
    { href: "#uekitashi", label: "5｜木を植え足すときは、建物・塀・配管からどれだけ離すかを先に決める——大きくなってからでは動かせない" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜豊中の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">豊中の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】豊中の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["豊中", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="豊中の剪定・伐採・草刈り業者の比較"
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
              「この木がなんという名前なのか分からないまま、毎年なんとなく切っている」「まとめて一日で片付けてほしいと頼んだら、翌年ほとんど花が咲かなかった」「短くしてくださいと伝えたのに、想像していた姿とまるで違う仕上がりになった」「空いた場所に木を植え足したいが、どこに植えればよいのか決められない」——豊中で庭業者を探すきっかけには、前の世代から受け継いだ木とあとから植え足した木が一つの庭に混ざっている家ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、豊中市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「庭にある木の名前が分からないまま頼むと切る時期も切り方も決まらないこと」「常緑樹と落葉樹では手を入れてよい時期が違うこと」「仕上がりの希望は切り詰める・透かす・刈り込むという言葉でそろえること」「木を植え足すときは建物・塀・配管からどれだけ離すかを先に決めること」といった、豊中で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="toyonaka5" num="1">豊中で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            豊中市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月20日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            豊中の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月20日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、豊中での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="kinonamae" num="2">庭にある木の名前が分からないまま頼むと、切る時期も切り方も決まらない——まず一本ずつ名前を確かめる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            前の持ち主が植えた木、親の代からある木、引き渡しのときに最初から立っていた木——<Hl>名前を知らないまま毎年なんとなく切っている</Hl>庭は珍しくありません。ところが庭木の手入れは、木の名前が分かって初めて「いつ切ってよいか」「どこまで切ってよいか」が決まります。名前が分からないまま「全部短くしてください」とだけ頼むと、翌年花が咲かない木や、切った場所から枯れ込む木が出ます。時期の考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">剪定に適した時期の基本</Link>、庭の中心になる木の扱いは<Link href="/symboltree-teire/" className="text-[#2D7F3E] underline">シンボルツリーの手入れ</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            名前を確かめる手がかりは、葉の形と付き方、幹の肌、花や実の色と時期、そして冬に葉を落とすかどうかの四つです。<Hl>葉を一枚と、幹の肌と、木全体の三枚を撮っておく</Hl>と、見積もりに来た業者に見せるだけで名前が分かることがほとんどです。花の咲く木は<Link href="/kaboku-kaika-teire/" className="text-[#2D7F3E] underline">花木の開花と手入れ</Link>、庭でよく見かける木については<Link href="/kinmokusei-teire/" className="text-[#2D7F3E] underline">キンモクセイの手入れ</Link>、<Link href="/momiji-kaede-teire/" className="text-[#2D7F3E] underline">モミジ・カエデの手入れ</Link>、<Link href="/matsu-teire/" className="text-[#2D7F3E] underline">松の手入れ</Link>、<Link href="/olive-niwaki-teire/" className="text-[#2D7F3E] underline">オリーブの手入れ</Link>、<Link href="/tsubaki-sazanka-teire/" className="text-[#2D7F3E] underline">ツバキ・サザンカの手入れ</Link>、<Link href="/ajisai-sentei-kanri/" className="text-[#2D7F3E] underline">アジサイの剪定と管理</Link>に樹種ごとの考え方をまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            名前が分かれば、業者に伝える内容も具体的になります。剪定110番は庭木1本からの依頼に対応し、剪定1本2,890円〜（出張費3,000円別途）の掲載料金で、現地調査・見積もりは無料です。名前の分からない木が何本もある庭では、<Hl>最初の一回だけ立ち会って、木ごとに名前と扱いを教わる</Hl>進め方が結局いちばん早く済みます。くらしのマーケットは予約前に業者とメッセージで相談でき、料金は出店者ごとに事前明示されるため、写真を送ってから頼む使い方もできます。頼む相手の種類の違いは<Link href="/zoen-uekiya-chigai/" className="text-[#2D7F3E] underline">造園業者と植木屋の違い</Link>、準備は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">剪定を依頼する前の準備</Link>を参考にしてください。
          </p>

          {/* 3 */}
          <H2 id="jorakuyo" num="3">常緑樹と落葉樹では手を入れてよい時期が違う——「一日でまとめて」と頼む前に木ごとの時期を確かめる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭に何本も木があると、どうしても<Hl>一日でまとめて片付けてほしくなります</Hl>。ところが木には手を入れてよい時期があり、冬に葉を落とす木と一年中葉をつけている木では、その時期がずれます。まとめて一日で切った結果、ある木は問題なく、別の木は翌年花が咲かなくなり、また別の木は切り口から弱った——ということが起こるのはこのためです。時期の全体像は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">剪定に適した時期の基本</Link>、一年の流れは<Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭の掃除・手入れの年間スケジュール</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大まかには、<Hl>葉を落とす木は葉がない時期に枝ぶりを見ながら整え、一年中葉をつけている木は寒さの厳しい時期を避ける</Hl>という考え方が基本になります。花を見たい木は、翌年の花になる芽がいつできるかで、切ってよい時期がさらに絞られます。生垣は刈り込みの回数と時期で仕上がりが変わるため<Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの基礎知識</Link>、低木は<Link href="/teiboku-kanri/" className="text-[#2D7F3E] underline">低木の管理</Link>、実を採る木は<Link href="/kaju-niwaki-teire/" className="text-[#2D7F3E] underline">果樹の庭木の手入れ</Link>を参考にしてください。季節ごとの確認は<Link href="/haru-niwa-checklist/" className="text-[#2D7F3E] underline">春の庭のチェックリスト</Link>と<Link href="/aki-niwa-checklist/" className="text-[#2D7F3E] underline">秋の庭のチェックリスト</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            時期が分かれば、<Hl>一年に何回、どの木を頼むか</Hl>が決まります。smileガーデンは定額制の年間管理プランがあり、剪定・消毒・施肥をまとめて任せられるうえ、作業後には写真付きの作業報告書を受け取れます。木ごとに違う時期に何度も来てもらうのが難しい場合は、時期の近い木をまとめ、どうしても時期の合わない木だけ別の日に頼む、という組み方もできます。回数と費用の組み立ては<Link href="/aimitsumori-torikata/" className="text-[#2D7F3E] underline">庭工事の相見積もりの取り方</Link>と<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>を参考にしてください。
          </p>

          {/* 4 */}
          <H2 id="shiagekotoba" num="4">仕上がりの希望は「切り詰める」「透かす」「刈り込む」という言葉でそろえる——頼んだ姿との食い違いを減らす</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            「短くしてください」「すっきりさせてください」——この頼み方は、<Hl>受け取る側によって意味がまるで変わります</Hl>。枝の先を詰めて全体を小さくするのか、込み合った枝を根元から抜いて風と光を通すのか、面をそろえて刈り込むのか。どれも「短くする」「すっきりさせる」に当てはまりますが、仕上がった姿はまったく違います。頼んだ姿と違う仕上がりになったという話の多くは、この言葉のずれから起きています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            伝え方は三つの言葉で足ります。<Hl>「切り詰める」は枝の長さを詰めて全体を小さくすること、「透かす」は枝の数を減らして中を明るくすること、「刈り込む」は面をそろえて形を作ること</Hl>です。加えて、どのくらいの高さで保ちたいかを、窓枠や雨どいなど動かないものを基準に伝えると、数字が分からなくても正確に伝わります。仕上がりの希望に近い状態の写真を一枚添えるとさらに確実です。頼む前の整理は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">剪定を依頼する前の準備</Link>、自分でやる範囲との線引きは<Link href="/sentei-diy-gyosha/" className="text-[#2D7F3E] underline">剪定のDIYと業者依頼の判断基準</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            言葉がそろうと、見積もりの比較もしやすくなります。同じ「透かす」を頼んだ二社の金額を並べれば、差がどこから出ているのかが見えます。くらしのマーケットは地域の業者を口コミ・評価・料金で比較して直接予約でき、予約前にメッセージで作業内容を相談できます。切ったあとに木が弱っていないかの見方は<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>、高い位置の作業を自分でやる危険は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者に頼む判断</Link>、出た枝の始末は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝の処分方法</Link>を参考にしてください。
          </p>

          {/* 5 */}
          <H2 id="uekitashi" num="5">木を植え足すときは、建物・塀・配管からどれだけ離すかを先に決める——大きくなってからでは動かせない</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            木を切ったあとに空いた場所や、外構を作り替えたあとの土のままの場所に、<Hl>新しく木を植え足したくなること</Hl>があります。このとき、植える場所を見た目のおさまりだけで決めると、数年後に困ることになります。木は上へ伸びるだけでなく、枝を横へ張り、根を地面の下へ広げるからです。配置の考え方は<Link href="/shokusai-haichi-keikaku/" className="text-[#2D7F3E] underline">植栽の配置計画</Link>、図面がある場合は<Link href="/niwa-sekkeizu-mikata/" className="text-[#2D7F3E] underline">庭の設計図の見方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            先に決めておきたいのは、<Hl>建物の壁と窓から、塀や境界から、そして地面の下を通る配管や排水桝から、それぞれどれだけ離すか</Hl>の三つです。壁に近すぎると葉が張りついて湿気がこもり、境界に近すぎると枝が隣へ出て、配管の上に植えると根が入り込むことがあります。地面の下の確認は<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">排水桝の点検</Link>、根の影響は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>、境界の考え方は<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>と<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            植え足す前に、<Hl>その木が大きくなったときの姿で置き場所を考える</Hl>と、後から切り続ける手間が減ります。手のかかりにくい木の選び方は<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>、落ち葉を減らしたい場合は<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木</Link>、鉢で育ててきた木を地面に下ろすなら<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えから地植えへの植え替え</Link>が参考になります。すでに大きくなった木を別の場所へ移す場合は<Link href="/niwaki-ishoku/" className="text-[#2D7F3E] underline">庭木の移植</Link>、抜いてしまう場合は<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違い</Link>にまとめています。伐採110番は伐採・抜根と伐採後の木材処分まで一括で相談でき、見積もりは無料・24時間受付です。
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
          <H2 id="faq" num="7">豊中の庭業者でよくある質問</H2>
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
            豊中で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。名前の分からない木を1本だけ見てもらうなら樹種別の目安がある剪定110番、花壇の外周や植え込みの足元のように範囲がはっきりした草を片付けるなら面積単価が分かりやすい草刈り110番、大きくなりすぎた木を入れ替えるなら処分まで一括の伐採110番、木ごとに違う時期の手入れをまとめて任せるなら年間管理プランのsmileガーデン、写真を送って相談してから頼むならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            庭木の手入れは、木の名前が分かって初めて「いつ」「どこまで」が決まります。一本ずつ名前を確かめること、常緑樹と落葉樹で手を入れてよい時期が違うと知っておくこと、仕上がりの希望を切り詰める・透かす・刈り込むという言葉でそろえること、植え足すときは建物・塀・配管からの距離を先に決めること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["豊中", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/kurashi-no-market/", label: "くらしのマーケットの口コミ・評判" },
                { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れの基本" },
                { href: "/sentei-jiki/", label: "庭木の剪定時期の基本" },
                { href: "/kadan-tsuchizukuri/", label: "花壇の土づくりの基本" },
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
