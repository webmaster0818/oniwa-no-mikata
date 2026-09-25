import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/funabashi/";
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
      "【2026年最新】船橋の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "船橋で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・お庭マスター（剪定1本550円〜）の料金と特徴、駅から歩ける住宅地の庭と車で暮らす郊外の庭で違う頼み方、海を埋め立てた土地の庭で地面の下を先に確かめる考え方、幹線道路沿いの庭のほこりを前提にした手入れ、建売で最初から植えられていた木の残す・替える・増やすの決め方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】船橋の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "船橋で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。駅から歩ける住宅地の庭は隣家と道路、車で暮らす郊外の庭は量と回数が頼み方の中心になること、海を埋め立てた土地の庭は入れた土の性質で木の育ち方が変わるため地面の下を先に確かめること、幹線道路沿いの庭はほこりで葉が汚れる前提で洗う・切る・植え替える順に手入れすること、建売で最初から植えられていた木は残す・替える・増やすを決めてから手入れを頼むことも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、船橋市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。駅から歩ける住宅地で隣家の窓に届きそうな木を1本だけ小さく整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "隣家の窓に届きそうな木を1本単位で小さく整えたい人",
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
        ため、郊外の広い庭の外周や幹線道路に面した空き地など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "郊外の広い庭の外周や空き地の草を範囲を決めて片付けたい人",
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
        のが特徴です。建売で最初から植えられていた木を株ごと入れ替える場合の抜根や、郊外の広い庭で大きくなりすぎた木の整理も、切り分けて搬出する方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "建売で植えられていた木を株ごと入れ替えるために抜根したい人",
      "郊外の広い庭で大きくなりすぎた木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。幹線道路沿いでほこりを浴びやすい庭や、共働きで庭を見る時間が取りにくい家では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "幹線道路沿いの庭の手入れを毎年の決まりごとにしたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。船橋市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        お庭マスターは、関東・関西・中部エリアを中心に展開する職人品質のマッチング型サービスで、船橋を含む関東は主力エリアです。
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
      "船橋・関東エリアで業者を探している人",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心", note: "船橋での対応可否は見積もり時にご確認ください" },
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
    t: "① 庭の写真に「道路との位置関係」と「庭の広さ」を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭がどんな環境にあるかを写真で伝えましょう。駅から歩ける住宅地なら、隣家の窓や塀との距離と、家の前の道路の幅、車を停められそうな場所が写っていると、作業のしかたと搬出の段取りが伝わりやすくなります。郊外の広い庭なら、庭全体が入る引きの写真と、木の本数や草の茂り方が分かる写真を分けて撮っておくと、量の見当がつきやすくなります。幹線道路に面した庭なら、道路側の植栽と歩道の様子も写しておきましょう。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。郊外の広い庭では刈り草や剪定枝の量が多くなり、処分費が総額の大きな部分を占めることがあります。建売の木を株ごと入れ替える場合は、抜根と処分と植え直しの費用を分けて確認しましょう。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料なので、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "幹線道路に面した庭では、歩道側の街路樹や植樹帯は道路を管理する自治体などの担当で、庭業者に頼んで切ることはできません。分譲地の入口や区画の間にある共用の緑地は、管理組合や自治会の管轄になっていることがあります。隣家との境界がはっきりしない場所の木や、塀の所有関係が分からない場合は、土地家屋調査士などの専門家に相談する範囲です。埋め立て地の地盤そのものの相談は住宅会社や地盤調査の専門会社の範囲で、庭業者に頼めるのは目に見える土の状態の改善までです。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。狭い敷地での作業に慣れているか、広い庭を回数で分けて受けてくれるか、木の入れ替えから植え直しまで一括で頼めるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "船橋で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。建売で最初から植えられていたシンボルツリー1本だけ整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "駅近の狭い敷地で、隣家の窓のすぐそばに木があります。作業の音や飛び散りが心配です。",
    a: "見積もりの段階で、作業の時間帯、電動工具を使う作業の有無、枝葉や刈り草が隣地に飛び散らないための養生について相談しておきましょう。作業日が決まったら、隣家にひと声かけておくと安心です。隣家側に落ちた枝葉の片付けの範囲も先に確認しておくとよいでしょう。木そのものを隣家の窓に届かない大きさに保つ管理に切り替えるのもひとつの方法で、当サイトの隣家への枝の越境と対処の基本の記事に近隣との考え方をまとめています。",
  },
  {
    q: "埋め立て地の住宅で、植えた木の育ちが悪く、雨のあと水が引きません。",
    a: "埋め立てや造成でできた土地では、庭の土が造成のときに入れられたもので、場所によって性質が均一でないことがあります。まず水がたまる場所を見つけて、その一角の土の状態を確かめ、排水桝が土や落ち葉でふさがれていないかを点検しましょう。表面の土を入れ替えたり、植える場所を盛り上げたりする方法がありますが、地盤そのものの相談は住宅会社や地盤調査の専門会社の範囲です。当サイトの庭の水はけ改善の考え方の記事が参考になります。",
  },
  {
    q: "幹線道路沿いで、葉がほこりで黒ずんでいます。木が弱っているのでしょうか？",
    a: "葉の汚れそのものはほこりが原因で、ただちに木が弱っているとは限りません。まず水で葉を洗い流してから、葉の色や新しい芽の出方を確かめましょう。それでも元気がない場合は、風通しをよくする剪定や、汚れに強い木への植え替えを検討する段階です。枯れたかどうかの見極めは、春の芽吹きまで待ってから判断するのが基本で、当サイトの庭木が枯れたかどうかの見分け方の記事が参考になります。歩道側の街路樹や植樹帯は道路を管理する自治体などの担当で、庭業者には頼めません。",
  },
  {
    q: "建売で最初から植えられていた木が大きくなりすぎました。抜いてしまってもよいですか？",
    a: "自分の敷地の中の木なら、残すか替えるかは持ち主が決められます。ただし、分譲地の入口や区画の間にある共用の緑地は管理組合や自治会の管轄で、外構の保証が残っている場合は建築会社や売主に確認してから手を入れるのが安心です。抜く場合は、切り株を残す伐採か、根まで取る抜根かで費用と後の使い道が変わるため、当サイトの伐採と抜根の違いの記事を参考に決めましょう。伐採110番は抜根と処分まで一括で相談できます。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。郊外の広い庭では量が多くなりやすいため、処分込みの総額を先に固めておくと安心です。",
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

export default function AreaFunabashiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】船橋の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "船橋で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "船橋の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#sagamihara5",
      label: "1｜船橋で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "船橋の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#ekichika", label: "2｜駅から歩ける住宅地の庭は「隣家と道路」、車で暮らす郊外の庭は「量と回数」が頼み方の中心になる" },
    { href: "#umetate", label: "3｜海を埋め立てた土地の庭は「入れた土」の性質で木の育ち方が変わる——地面の下を先に確かめる" },
    { href: "#kansen", label: "4｜幹線道路沿いの庭は「ほこりで葉が汚れる」前提で洗う・切る・植え替える順に手入れする" },
    { href: "#tateuri", label: "5｜建売で最初から植えられていた木は「残す・替える・増やす」を決めてから手入れを頼む" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜船橋の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">船橋の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】船橋の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["船橋", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="船橋の剪定・伐採・草刈り業者の比較"
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
              「駅近の小さな庭で隣の窓に枝が届きそう」「郊外の広い庭を刈るのに毎回大変」「埋め立て地で植えた木が育たない」「幹線道路沿いで葉がほこりで黒ずむ」「建売で植えられていた木が大きくなりすぎた」——船橋で庭業者を探すきっかけには、駅前の密集した住宅地と車で暮らす郊外、海を埋め立てた湾岸と内陸の分譲地とが同じ市内に並ぶ土地ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、船橋市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「駅から歩ける住宅地の庭は隣家と道路、車で暮らす郊外の庭は量と回数が頼み方の中心になること」「海を埋め立てた土地の庭は入れた土の性質で木の育ち方が変わるため地面の下を先に確かめること」「幹線道路沿いの庭はほこりで葉が汚れる前提で洗う・切る・植え替える順に手入れすること」「建売で最初から植えられていた木は残す・替える・増やすを決めてから手入れを頼むこと」といった、船橋で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="sagamihara5" num="1">船橋で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            船橋市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月9日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、口コミで地域の業者を選べるくらしのマーケットと、大手直営のダスキンは、比較表に掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            船橋の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月9日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東・関西・中部エリア中心のサービスのため、船橋での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="ekichika" num="2">駅から歩ける住宅地の庭は「隣家と道路」、車で暮らす郊外の庭は「量と回数」が頼み方の中心になる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            船橋は、複数の路線の駅を中心に住宅地が広がる街で、駅から歩ける範囲には敷地の小さな家が密に建ち並び、駅から離れるにつれて車で暮らす前提の、庭の広い家が増えていきます。<Hl>同じ「庭の手入れ」でも、駅近の庭では「隣家と道路」、郊外の庭では「量と回数」が頼み方の中心になる</Hl>という違いがあり、業者に伝えるべきことも変わります。自分の庭がどちらの性質を持っているかを意識して伝えると、見積もりの精度が上がります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            駅から歩ける住宅地の庭は、隣家の窓や塀との距離が近く、家の前の道路も広くありません。<Hl>作業の音、刈った草や枝葉の飛び散り、作業車を停める場所が作業の条件</Hl>になり、木そのものも隣家の窓に届かない大きさに保つ管理が中心です。隣家との考え方は<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>、限られた広さで庭を続ける工夫は<Link href="/semai-niwa-layout/" className="text-[#2D7F3E] underline">狭い庭のレイアウトの考え方</Link>、隣家との間の目隠しを木で作るなら<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>を参考にしてください。庭木1本を隣家に届かない大きさに整えるなら、剪定110番は剪定1本2,890円〜（出張費3,000円別途）、お庭マスターは剪定1本550円〜の掲載料金で、いずれも見積もりは無料です。くらしのマーケットなら予約前に敷地の写真を送って、車の置き場や作業の時間帯をメッセージで相談してから予約できます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            車で暮らす郊外の広い庭は、隣家との距離に余裕がある代わりに、<Hl>木の本数と草の面積が多く、一度に出る枝葉や刈り草の量が総額を左右</Hl>します。全面を一度に頼むのではなく、区画ごとに「何回」で決める、刈らない場所を先に作る、という発想で回数と量を減らすのが基本です。面で片付けるなら草刈り110番の1平米600円〜という面積単価で範囲を決めて頼め、刈った後の防草シート施工や定期メンテナンスプランまで相談できます。刈る場所を減らす考え方は<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>と<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>、芝生を続けるかどうかの判断は<Link href="/shibafu-teire/" className="text-[#2D7F3E] underline">芝生の手入れの基本</Link>、大きくなりすぎた木の整理は処分まで一括の伐採110番に相談できます。量が多い片付けほど、<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>を押さえて処分込みの総額を先に固めておきましょう。
          </p>

          {/* 3 */}
          <H2 id="umetate" num="3">海を埋め立てた土地の庭は「入れた土」の性質で木の育ち方が変わる——地面の下を先に確かめる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            船橋の湾岸側には、海を埋め立ててできた住宅地があります。こうした土地の庭の土は、もともとそこにあったものではなく、<Hl>造成のときに運び込まれ、締め固められた土</Hl>です。表面には植栽用の土が入っていても、その下は砂まじりだったり、砕石が混じっていたり、場所によって性質が均一でなかったりします。「同じ庭の中でも、この一角だけ木が育たない」「雨のあと一部だけ水が引かない」といった状態は、地面の下の違いが原因になっていることがあります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            木を植える前、あるいは育ちの悪い木を切ってしまう前に、<Hl>まず地面の下がどうなっているかを確かめる</Hl>のが順番です。水がたまる場所を見つけて一角を掘り、土の色と手触り、どのくらいの深さで固くなるかを見ます。雨水の出口である排水桝が土や落ち葉でふさがれていないかも点検しましょう。考え方は<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>、<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">庭の排水桝の点検の基本</Link>、土そのものを直す考え方は<Link href="/kadan-tsuchizukuri/" className="text-[#2D7F3E] underline">花壇の土づくりの基本</Link>にまとめています。地盤そのものについての相談は住宅会社や地盤調査の専門会社の範囲で、庭業者に頼めるのは目に見える土の状態の改善までです。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            地面の下が分かったら、<Hl>その土に合う木を選ぶか、植える場所の土を作り替えるか</Hl>を決めます。深く根を張る木を無理に植えるより、乾きやすい場所には乾燥に強い木、水のたまる場所には湿った土に向く木を置く考え方が、手入れを軽くします。海に近い庭では潮風の影響も重なるため、<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>と<Link href="/olive-niwaki-teire/" className="text-[#2D7F3E] underline">オリーブなど乾燥に強い庭木の手入れ</Link>を参考にしてください。育たない木を入れ替えるなら、<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違い</Link>を押さえたうえで、伐採110番のように抜根と処分まで一括で頼めるサービスに、植え直しまで含めて相談すると段取りが組みやすくなります。地植えが難しい場所は、<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えから地植えへの植え替え</Link>の考え方を逆にたどって、鉢やプランター中心に切り替える選択肢もあります。
          </p>

          {/* 4 */}
          <H2 id="kansen" num="4">幹線道路沿いの庭は「ほこりで葉が汚れる」前提で洗う・切る・植え替える順に手入れする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            船橋の市内には、交通量の多い幹線道路が住宅地を貫くように走っていて、道路に面した庭では、<Hl>葉がほこりで黒ずむ、葉の表面がざらつく、道路側の木だけ元気がない</Hl>といった状態が起きます。多くの場合、木そのものが弱っているのではなく、葉に付いたほこりが日光を遮ったり、水をはじいたりしているのが原因です。「弱っているから切る」「枯れたから抜く」と決める前に、まず葉を洗い流して様子を見る、という順番で考えます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            手入れの順番は、<Hl>洗う、切る、植え替える</Hl>です。まず水で葉を洗い流し、葉の色や新しい芽の出方を確かめます。それでも元気がない木は、風通しをよくして葉の入れ替わりを促す剪定を頼み、それでも回復しないなら汚れに強い木への植え替えを検討する段階です。枯れたかどうかの見極めは<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>、病害虫との切り分けは<Link href="/niwaki-byogaichu/" className="text-[#2D7F3E] underline">庭木の病害虫対策の基本</Link>と<Link href="/kaigaramushi-aburamushi/" className="text-[#2D7F3E] underline">カイガラムシ・アブラムシの対策</Link>を参考にしてください。水やりのしかたは<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの基本</Link>にまとめています。ほこりを浴びやすい庭の手入れを毎年の決まりごとにするなら、smileガーデンの定額制の年間管理プランのように剪定・消毒・施肥をセットで回数と時期を決めて任せる方法があります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            道路側の植栽は、家の中から見た目隠しと、道路のほこりや音をやわらげる役割を兼ねていることが多く、<Hl>「減らす」より「役割ごと入れ替える」</Hl>で考えると失敗が減ります。生垣なら刈り込みやすい形を保つ手入れを<Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの基礎知識</Link>で、生垣をやめてフェンスに切り替える判断は<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較</Link>で確かめられます。歩道側の街路樹や植樹帯は道路を管理する自治体などの担当で、庭業者に頼んで切ることはできません。道路に張り出した自分の枝は通行の妨げになるため、隣家より先に問題になりやすく、伸びる前に整えておくのが基本です。道路に面した外構ごと見直すなら<Link href="/niwa-reform-gaiko-chigai/" className="text-[#2D7F3E] underline">庭のリフォームと外構工事の違い</Link>を参考に、庭業者と外構業者のどちらに頼む内容かを分けておきましょう。
          </p>

          {/* 5 */}
          <H2 id="tateuri" num="5">建売で最初から植えられていた木は「残す・替える・増やす」を決めてから手入れを頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            船橋の内陸側には、まとまった区画で建てられた建売の分譲住宅地が広がっています。こうした家の庭には、<Hl>引き渡しのときから建築会社が植えたシンボルツリーや低木が付いている</Hl>ことが多く、住み始めて数年たつと「自分で選んだわけではない木が大きくなってきた」という状態になります。手入れを頼む前に、その木をこのまま残すのか、別の木に替えるのか、まわりに植え足して庭らしくするのかを決めておくと、業者に伝える内容がはっきりします。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            残す場合は、<Hl>家の大きさに対してどこまで大きくするかを早めに決める</Hl>のが基本です。植えて数年の木は骨格になる枝を選ぶ時期で、この時期に方向を決めておくと後の手入れが軽くなります。考え方は<Link href="/symboltree-teire/" className="text-[#2D7F3E] underline">シンボルツリーの手入れの基本</Link>と<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>、支柱の外し時は<Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の立て方の基本</Link>、肥料の与え方は<Link href="/niwaki-hiryo/" className="text-[#2D7F3E] underline">庭木の肥料の基本</Link>にまとめています。替える場合は、伐採と抜根、処分、植え直しがひと続きの作業になるため、<Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>を参考に根まで取るかどうかを決め、伐採110番のように抜根と処分まで一括で頼めるサービスに相談すると段取りが組みやすくなります。落ち葉の出方や手入れの軽さで選び直すなら<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>が参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            増やす場合は、<Hl>隣家や道路、カーポートとの距離を含めた配置を先に決める</Hl>ことが、将来の手入れを左右します。分譲地は隣家との距離が近く、車を停める場所も決まっているため、<Link href="/shokusai-haichi-keikaku/" className="text-[#2D7F3E] underline">植栽の配置計画の立て方</Link>と<Link href="/carport-mawari-shokusai/" className="text-[#2D7F3E] underline">カーポートまわりの植栽の考え方</Link>、室外機の近くに植えるときの注意は<Link href="/shitsugaiki-shokusai/" className="text-[#2D7F3E] underline">室外機まわりの植栽の注意点</Link>を参考にしてください。造園デザインの相談まで受けるお庭マスターのようなサービスに、植え足しと手入れをまとめて相談する方法もあります。なお、分譲地の入口や区画の間にある共用の緑地は管理組合や自治会の管轄で、外構の保証が残っている間は建築会社や売主に確認してから手を入れるのが安心です。中古で買った家なら、前の持ち主の手入れの跡を読み解くところから始める考え方を<Link href="/chuko-jutaku-niwa-kakunin/" className="text-[#2D7F3E] underline">中古住宅の庭の確認ポイント</Link>にまとめています。
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
          <H2 id="faq" num="7">船橋の庭業者でよくある質問</H2>
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
            船橋で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。隣家の窓に届きそうな木を1本単位で小さく整えるなら樹種別の目安がある剪定110番や1本単位の料金体系のお庭マスター、郊外の広い庭の外周や空き地の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、建売で植えられていた木を株ごと入れ替えたり郊外の大きくなりすぎた木を整理したりするなら処分まで一括の伐採110番、幹線道路沿いでほこりを浴びやすい庭を定期的に整えるならsmileガーデン、というように、目的によって向いているサービスは変わります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            駅前の密集した住宅地と車で暮らす郊外、海を埋め立てた湾岸と内陸の分譲地とが同じ市内に並ぶ船橋では、庭の性質を伝えることが依頼の出発点になります。駅近の庭は隣家と道路を意識し、郊外の庭は量と回数で組み立てること、埋め立て地の庭は地面の下を確かめてから木を選ぶこと、幹線道路沿いの庭は洗う・切る・植え替えるの順で判断すること、建売の木は残す・替える・増やすを決めてから頼むこと、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["船橋", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/niwa-mizuhake/", label: "庭の水はけ改善の考え方" },
                { href: "/symboltree-teire/", label: "シンボルツリーの手入れの基本" },
                { href: "/niwaki-kareta/", label: "庭木が枯れたかどうかの見分け方" },
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
