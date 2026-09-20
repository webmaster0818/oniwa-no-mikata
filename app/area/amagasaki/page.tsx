import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/amagasaki/";
const UPDATED = "2026年9月9日";
const UPDATED_ISO = "2026-09-09";

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
      "【2026年最新】尼崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "尼崎で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・くらしのマーケットの料金と特徴、壁を接して建つ長屋・連棟の家の庭で足場と振動を隣と共有する段取り、路地に並べてきた鉢植えを減らす・下ろす・手放すに分ける考え方、木造の家が密集する街区で路地をふさがない枝の高さと張り出し、自転車の置き場と動線を基準にした手入れ範囲の決め方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】尼崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "尼崎で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。壁を接して建つ長屋・連棟の家の小さな庭は足場と振動を隣と共有する前提で作業を段取りすること、路地に並べてきた鉢植え・プランターは減らす・地面に下ろす・手放すに分けてから頼むこと、木造の家が密集する街区の庭木は路地をふさがない高さと張り出しを基準に整えること、平坦で自転車で暮らす街の庭は自転車の置き場と出し入れの動線を基準に手入れ範囲を決めることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、尼崎市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。隣と壁を接した家の小さな庭で、路地に張り出した木を1本だけ小さく整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "路地に張り出した木を1本単位で小さく整えたい人",
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
        ため、自転車置き場のまわりや家の裏手の細長い場所など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "自転車置き場のまわりや家の裏手の草を範囲を決めて片付けたい人",
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
        のが特徴です。路地をふさぐほど大きくなった木の整理や、壁を接した家の小さな庭で家より高くなった木の伐採も、切り分けて運び出す方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "路地をふさぐほど大きくなった木を整理したい人",
      "壁を接した家の小さな庭で家より高くなった木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。路地に面した小さな庭を、枝が通り道に出ない状態で毎年保ちたい家では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "路地に面した庭を枝が通り道に出ない状態で毎年保ちたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。尼崎市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、壁を接した隣家との位置関係が分かる写真を送って、足場の置き方や作業の時間帯を聞いてから予約するといった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで隣家との位置関係や作業の条件を相談してから頼みたい人",
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
    t: "① 庭の写真に「隣の家との壁の位置」と「路地の幅」を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭がどんな場所にあるかを写真で伝えましょう。隣と壁を接した長屋や連棟の家なら、壁の位置と、庭に入る道筋が家の中を通るのか路地からなのかが分かる写真があると、足場の置き方と運び出しの段取りが伝わりやすくなります。路地に面した庭なら、路地の幅と、枝がどこまで張り出しているかが写っていると、切る高さの判断がつきやすくなります。自転車置き場のまわりを頼むなら、自転車を出し入れする動線と、そこにかかる木と草の様子もあわせて写しておきましょう。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。路地が狭く作業車を近くに停められず、切ったものを離れた場所まで運ぶ場合や、家の中を通して道具と枝を運び出す場合は、その手間が金額に含まれるかどうかが確認事項になります。鉢植えを鉢と土ごと処分する場合は、鉢の数と土の量で処分費が変わるため、分けて確認しましょう。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "隣と壁を接した家では、壁そのものや、壁ぎわの塀・雨樋の所有関係がはっきりしないことがあります。境界の位置や塀の所有が分からない場合は、土地家屋調査士などの専門家に相談する範囲です。路地が公道なのか数軒で共有する私道なのかによって、路地に張り出した枝や路地に置く鉢の扱いも変わるため、購入時の書類や登記で確かめておきましょう。隣家側に伸びた枝は、境界を越えている部分の扱いに法律上の決まりがあるため、勝手に切らず先に確かめるのが基本です。歩道側の街路樹や植樹帯は道路を管理する自治体の担当で、市営住宅や団地の敷地内の緑地はその管理者の担当です。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。壁を接した家や狭い路地での作業に慣れているか、家の中を通して運び出す作業を受けてくれるか、鉢植えの整理と処分まで一括で頼めるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "尼崎で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。路地に張り出した木を1本だけ小さく整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "隣と壁がつながった長屋で、庭に入るには家の中を通るしかありません。それでも頼めますか？",
    a: "頼めますが、見積もりのときに、庭に入る道筋が家の中を通ること、脚立や道具を置ける地面の広さ、隣の家の窓や物干しの位置を先に伝えてください。道具と切った枝を家の中を通して運び出す手間が金額に含まれるかどうかは、業者によって扱いが変わります。作業日の前に隣にひと声かけ、枝葉が隣側に落ちたときの片付けの範囲も決めておくと安心です。くらしのマーケットなら予約前に隣家との位置関係が分かる写真を送って、足場の置き方をメッセージで聞いてから予約できます。",
  },
  {
    q: "路地に並べた鉢植えが増えすぎて手に負えません。鉢ごと処分まで頼めますか？",
    a: "鉢の中の木の剪定や植え替え、不要になった鉢と土の処分は、庭業者に相談できる範囲です。まず、残す鉢、地面に下ろす鉢、手放す鉢に分けてから頼むと、作業の内容と処分の量がはっきりします。鉢と土をまとめて処分する場合は、鉢の材質と土の量で処分費が変わるため、見積もりで分けて確認しましょう。自分で捨てる場合は、お住まいの市区町村のルールで鉢と土の出し方が決まっているため、先に確認が必要です。当サイトの植木鉢・プランターの処分方法の記事が参考になります。",
  },
  {
    q: "路地に張り出した枝を近所の人から指摘されました。どこまで切ればよいですか？",
    a: "目安は、路地を歩く人や自転車の人の頭に当たらない高さで、自分の家の壁面より外に枝が出ない範囲に整えることです。路地が公道なら道路を管理する自治体の決まりが、数軒で共有する私道なら共有者同士の取り決めが関わるため、路地の性質を先に確かめておきましょう。切った枝葉は路地に置いたままにせず当日に運び出すことも大切です。剪定110番は1本単位で頼めるため、路地側の木だけ小さくしたいという依頼にも向いています。当サイトの隣家への枝の越境と対処の基本の記事に、近隣との考え方をまとめています。",
  },
  {
    q: "自転車置き場のまわりの草を毎年刈るのが大変です。生えにくくする方法はありますか？",
    a: "刈った後に防草シートを敷いて砂利で覆うと、自転車の出し入れの邪魔になる草が生えにくくなり、雨の日の泥はねも減ります。自転車を出し入れする動線の幅を先に決めて、その範囲を面で覆うのが基本です。草刈り110番は1平米600円〜の面積単価で範囲を決めて頼め、草刈り後の防草シート施工も相談できます。当サイトの自転車置き場と動線の考え方と、防草シートの基礎知識の記事が参考になります。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。路地の狭い街区では、集めた枝葉を路地に置いたままにしないことも大切です。",
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

export default function AreaAmagasakiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】尼崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "尼崎で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "尼崎の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#amagasaki5",
      label: "1｜尼崎で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "尼崎の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#nagaya", label: "2｜壁を接して建つ長屋・連棟の家の小さな庭は「足場と振動を隣と共有する」前提で作業を段取りする" },
    { href: "#hachi", label: "3｜路地に並べてきた鉢植え・プランターは「減らす・地面に下ろす・手放す」に分けてから頼む" },
    { href: "#roji", label: "4｜木造の家が密集する街区の庭木は「路地をふさがない高さと張り出し」を基準に整える" },
    { href: "#jitensha", label: "5｜平坦で自転車で暮らす街の庭は「自転車の置き場と出し入れの動線」を基準に木と草の手入れ範囲を決める" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜尼崎の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">尼崎の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】尼崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["尼崎", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="尼崎の剪定・伐採・草刈り業者の比較"
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
              「隣と壁がつながった家で、木を切る作業の足場や振動が隣に及ばないか心配」「路地に並べてきた鉢が増えすぎて手に負えない」「路地に張り出した枝が自転車で通る人の頭に当たりそう」「自転車を出し入れするたびに枝と草が引っかかる」——尼崎で庭業者を探すきっかけには、平坦な街に工場と住宅と下町の路地が隣り合う土地ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、尼崎市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「壁を接して建つ長屋・連棟の家の小さな庭は足場と振動を隣と共有する前提で作業を段取りすること」「路地に並べてきた鉢植え・プランターは減らす・地面に下ろす・手放すに分けてから頼むこと」「木造の家が密集する街区の庭木は路地をふさがない高さと張り出しを基準に整えること」「平坦で自転車で暮らす街の庭は自転車の置き場と出し入れの動線を基準に手入れ範囲を決めること」といった、尼崎で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="amagasaki5" num="1">尼崎で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            尼崎市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月9日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            尼崎の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月9日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、尼崎での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="nagaya" num="2">壁を接して建つ長屋・連棟の家の小さな庭は「足場と振動を隣と共有する」前提で作業を段取りする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            尼崎の南側の下町には、隣と壁を接して建つ長屋や連棟の家が今も残っていて、玄関先や裏手のわずかな地面に木を植え、鉢を並べて庭にしている家が少なくありません。こうした家の庭木の手入れで先に考えたいのは、<Hl>作業の足場をどこに置くか、切るときの振動や枝の落ちる先が隣の家に及ばないか</Hl>という点です。壁がつながっている家では、脚立の置き場も、切った枝を下ろす場所も、隣の敷地の一部を借りるかたちになりやすく、木そのものの状態と同じくらい「隣とどう共有するか」が段取りの中心になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見積もりのときに伝えておきたいのは、隣との壁の位置、庭に入る道筋が家の中を通るのか路地からなのか、脚立や道具を置ける地面の広さ、そして隣の家の窓や物干しがどこにあるかです。作業日が決まったら隣にひと声かけておく、枝葉が隣側に落ちたときの片付けの範囲を先に決めておく、といった準備は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">庭木の剪定を頼む前の準備</Link>にまとめています。隣家側に伸びた枝の扱いは<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>、壁や塀の所有がはっきりしないときの考え方は<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>を参考にしてください。見積もりの項目の読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>をご覧ください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            家の中を通して道具や枝を運ぶ場合は、<Hl>運ぶ回数を減らせるよう、木を小さく保つ管理に早めに切り替える</Hl>のが現実的です。大きくなりすぎてから切ると、切った枝の量も足場の高さも増え、隣への負担が大きくなります。狭い場所での庭の作り方は<Link href="/semai-niwa-layout/" className="text-[#2D7F3E] underline">狭い庭のレイアウトの考え方</Link>、木を一定の大きさに保つ考え方は<Link href="/symboltree-teire/" className="text-[#2D7F3E] underline">シンボルツリーの手入れの基本</Link>と<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>にまとめています。木を1本単位で小さく整えるなら、剪定110番は剪定1本2,890円〜（出張費3,000円別途）の掲載料金で、見積もりは無料です。家より高くなった木を切り分けて運び出すなら、伐採110番は処分まで一括で相談できます。くらしのマーケットなら、予約前に隣家との位置関係が分かる写真を送って、足場の置き方や作業の時間帯をメッセージで相談してから予約できます。
          </p>

          {/* 3 */}
          <H2 id="hachi" num="3">路地に並べてきた鉢植え・プランターは「減らす・地面に下ろす・手放す」に分けてから頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            尼崎の下町の路地には、家の前に鉢植えやプランターを並べて花や木を育てる家が多く、長年のうちに鉢の数が増え、鉢の中で木が大きくなりすぎたり、置いたまま動かせなくなったりしていることがあります。鉢の庭の手入れは、地面に植えた木とは違い、<Hl>「減らす」「地面に下ろす」「手放す」のどれにするかを鉢ごとに決める</Hl>ところから始まります。全部をそのままの形で整えようとするより、残す鉢を絞ったほうが、その後の水やりも植え替えも軽くなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            「減らす」は、手のかかる鉢や似た植物の鉢を整理して、世話をする数を絞ることです。「地面に下ろす」は、鉢の中で根が詰まった木を、庭の地面に植え替えることで、考え方は<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えから地植えへの植え替え</Link>にまとめています。ただし、壁を接した家の小さな地面では根の広がる余地と隣との距離が限られるため、下ろす木は将来の大きさを見て選びます。「手放す」は、枯れた株や不要になった鉢と土を処分することで、<Link href="/uekibachi-planter-shobun/" className="text-[#2D7F3E] underline">植木鉢・プランターの処分方法</Link>に鉢の材質ごとの出し方をまとめています。室内から出した観葉植物の扱いは<Link href="/kanyo-shokubutsu-soto/" className="text-[#2D7F3E] underline">観葉植物を屋外で育てる注意点</Link>、手のかからない鉢に切り替える考え方は<Link href="/taniku-shokubutsu-niwa-ue/" className="text-[#2D7F3E] underline">多肉植物の庭植えの基本</Link>を参考にしてください。残す鉢の水やりは<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            鉢を並べる路地は、住む人の通り道でもあります。<Hl>鉢が路地にはみ出して通りにくくなっていないか、路地が公道なのか数軒で共有する私道なのか</Hl>を確かめ、通る幅を保つ並べ方に直しておきましょう。庭業者に頼めるのは、鉢の中の木の剪定や植え替え、不要な鉢と土の処分までで、鉢の数と土の量で処分費が変わるため、見積もりで分けて確認します。鉢の木を1本単位で整えるなら剪定110番、鉢の中で大きくなりすぎた木を切って処分するなら伐採110番、鉢と土の処分込みの片付けを口コミで選んだ業者に頼むならくらしのマーケットが向いています。
          </p>

          {/* 4 */}
          <H2 id="roji" num="4">木造の家が密集する街区の庭木は「路地をふさがない高さと張り出し」を基準に整える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            尼崎には、木造の家が細い路地に沿って密に建ち並ぶ街区があります。こうした街区では、路地が住む人の通り道であると同時に、いざというときの避難や消防の通り道にもなります。庭木の手入れで基準にしたいのは、<Hl>路地をふさがない高さと張り出し</Hl>です。路地に張り出した枝が人の頭の高さにある、切った枝葉を路地に積んだままにしている、枯れ枝が家のそばにたまっている、といった状態は、日常の通りにくさだけでなく、いざというときの妨げにもなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            手入れの目安は、路地側の枝を歩く人や自転車の人の頭より高い位置で切り、自分の家の壁面より外に出ない範囲に整えることです。枯れた木や枯れ枝は、風で落ちる前に早めに片付けるのが基本で、枯れたかどうかの見極めは<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>、高い木の危険の見つけ方は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者に頼む判断</Link>にまとめています。落ち葉が路地の側溝や排水桝をふさがないよう、<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策の基本</Link>と<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">排水桝の点検の基本</Link>もあわせて確認しましょう。切った枝葉は当日のうちに運び出すのが基本で、運び出しと処分の選択肢は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>をご覧ください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            路地に面した木を減らして、目隠しをフェンスに切り替える選択肢もあります。比較は<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較</Link>、木で目隠しを続けるなら<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>を参考にしてください。夜の路地の見え方は<Link href="/niwa-shomei-keikaku/" className="text-[#2D7F3E] underline">庭の照明計画の基本</Link>と<Link href="/niwa-bohan/" className="text-[#2D7F3E] underline">庭の防犯対策の基本</Link>にまとめています。歩道側の街路樹や植樹帯は道路を管理する自治体の担当で、庭業者に頼んで切ることはできません。<Hl>路地をふさぐほど大きくなった木を整理するなら、切り分けて運び出す方法から相談できる伐採110番</Hl>、枝が通り道に出ない状態を毎年保つならsmileガーデンの定額制の年間管理プランのように回数と時期を決めて任せる形が向いています。
          </p>

          {/* 5 */}
          <H2 id="jitensha" num="5">平坦で自転車で暮らす街の庭は「自転車の置き場と出し入れの動線」を基準に木と草の手入れ範囲を決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            尼崎は市内のほとんどが平坦で、駅や買い物、通勤・通学に自転車を使う暮らしが根づいた街です。家の敷地の中でも、玄関先や庭の一角が自転車の置き場になっていることが多く、<Hl>自転車を出し入れする動線に枝や草がかかると、毎日の小さな不便が積み重なります</Hl>。庭の手入れを頼むときは、木や草の状態から考えるより、自転車の置き場と出し入れの動線を先に決めて、そこにかかる木と草を「手入れの範囲」に入れるほうが、頼む内容がはっきりします。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            動線の足元は、門から置き場までの幅を決めて、その範囲を面で覆うのが基本です。刈った後に防草シートを敷いて砂利で覆うと、草が生えにくくなり、雨の日の泥はねも減ります。考え方は<Link href="/jitensha-okiba-dosen/" className="text-[#2D7F3E] underline">自転車置き場と動線の考え方</Link>、覆い方は<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの基礎知識</Link>と<Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの基本</Link>、草が生えにくい仕上げは<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭の作り方</Link>、雨の日の足元は<Link href="/niwa-doma-concrete/" className="text-[#2D7F3E] underline">庭の土間・コンクリートの考え方</Link>にまとめています。車も停める家なら<Link href="/carport-mawari-shokusai/" className="text-[#2D7F3E] underline">カーポートまわりの植栽の考え方</Link>を参考にしてください。<Hl>面で草を片付けるなら、草刈り110番は1平米600円〜の面積単価で範囲を決めて頼め、草刈り後の防草シート施工も相談できます</Hl>。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            動線にかかる木は、ハンドルやかごに枝が当たらない高さと、サドルに落ち葉や実、虫が落ちない樹種で考えます。落ち葉の少ない木への入れ替えは<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉の少ない庭木の選び方</Link>、毛虫のつきやすい木の注意は<Link href="/kemushi-chui/" className="text-[#2D7F3E] underline">庭木の毛虫の注意点</Link>、置き場のそばにできた蜂の巣の扱いは<Link href="/niwaki-hachinosu/" className="text-[#2D7F3E] underline">庭木の蜂の巣への対処</Link>にまとめています。自転車を家の裏手に置いている場合は、裏手の通路の幅を保つことが手入れの目的になり、動線にかかる木を1本単位で小さく整えるなら剪定110番が向いています。毎年同じ時期に動線を整えるなら、smileガーデンの定額制の年間管理プランで回数と時期を決めて任せる方法もあります。
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
          <H2 id="faq" num="7">尼崎の庭業者でよくある質問</H2>
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
            尼崎で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。路地に張り出した木を1本単位で小さく整えるなら樹種別の目安がある剪定110番、自転車置き場のまわりや家の裏手の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、路地をふさぐほど大きくなった木や壁を接した家で家より高くなった木の整理なら処分まで一括の伐採110番、路地に面した庭を枝が通り道に出ない状態で毎年保つならsmileガーデン、隣家との位置関係や作業の条件を写真で相談してから頼むならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            平坦な街に工場と住宅と下町の路地が隣り合う尼崎では、「隣と路地をどう共有するか」を先に決めることが依頼の出発点になります。壁を接した家では足場と振動と枝の落ちる先を隣と共有する前提で段取りすること、路地の鉢植えは減らす・地面に下ろす・手放すに分けてから頼むこと、木造の家が密集する街区では路地をふさがない高さと張り出しを基準に木を整えること、自転車で暮らす家では置き場と動線を基準に手入れの範囲を決めること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["尼崎", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/sentei-irai-junbi/", label: "庭木の剪定を頼む前の準備" },
                { href: "/uekibachi-planter-shobun/", label: "植木鉢・プランターの処分方法" },
                { href: "/jitensha-okiba-dosen/", label: "自転車置き場と動線の考え方" },
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
