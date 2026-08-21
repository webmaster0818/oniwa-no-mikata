import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/tokushima/";
const UPDATED = "2026年8月21日";
const UPDATED_ISO = "2026-08-21";

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
      "【2026年最新】徳島の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "徳島で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、石垣・法面のある庭の草刈りを安全に進める考え方、傾斜地の見積もりで伝えるべき条件まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】徳島の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "徳島で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。斜面・石垣まわりの草刈りを自分でやるかどうかの線引き、法面は刈るより覆って作業量を減らす考え方、石垣を傷める草と根への対処、傾斜・足場・搬出経路を伝える見積もりの取り方も解説します。",
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
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。斜面や石垣のある敷地では、
        <Hl>刈るのが大変な場所ほど自分では手が出しにくい</Hl>
        ため、草刈りを専門に扱うサービスは相談先として分かりやすい選択肢です。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        まで頼めるので、刈り続ける前提を見直したいときにも使えます。
        <Hl>定期メンテナンスプラン</Hl>
        で回数と時期を決めておくこともできます。
      </>
    ),
    recommend: [
      "自分では入れない斜面の草刈りを任せたい人",
      "刈るだけでなく生えにくい状態にしていきたい人",
      "庭や空き地の雑草を低価格で処理したい人",
      "定期契約で草刈りの手配をなくしたい人",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり600円〜", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトのレビュー記事作成時に確認しています。表示は最低単価であり、傾斜地や石垣まわりのように機械が使いにくい場所では単価が変わることがあります。傾斜の角度や足場の状況で作業効率が大きく変わるため、現地を見てもらったうえでの見積もりが前提になります。",
  },
  {
    slug: "kurashi-no-market",
    num: "1-2",
    catch: "口コミで比較・料金事前明示",
    name: "くらしのマーケット",
    officialUrl: "https://curama.jp/",
    image: "/images/kurashi-no-market-features.png",
    intro: (
      <>
        くらしのマーケットは、みんなのマーケット株式会社が運営する暮らしのサービス比較プラットフォームです。剪定・草刈り・伐採・造園などの庭のお手入れについて、
        <Hl>地域の業者を口コミ・評価・料金で比較して直接予約</Hl>
        できます。傾斜のある敷地では
        <Hl>その作業を受けられるかどうかが出店者ごとに分かれる</Hl>
        ため、予約前にメッセージで斜面の状況を伝えて確かめられる仕組みは実務的です。
        <Hl>料金は出店者ごとに事前に明示</Hl>
        され、<Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "斜面や石垣まわりに対応できる出店者を探したい人",
      "作業条件を予約前にメッセージで伝えたい人",
      "口コミを見て自分で地域の業者を選びたい人",
      "万が一の補償制度を重視する人",
    ],
    table: [
      { k: "料金の特徴", v: "出店者ごとに事前明示", note: "口コミ・実績と合わせて比較" },
      { k: "予約", v: "オンラインで完結", note: "業者と直接メッセージ可" },
      { k: "補償", v: "トラブル時の費用補償制度あり" },
      { k: "運営会社", v: "みんなのマーケット株式会社" },
    ],
    memo:
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトのレビュー記事作成時に確認しています。出店者ごとに対応できる作業条件は異なり、傾斜地の作業を扱わない出店者もいます。斜面の高さ・傾き・足場の有無を写真とあわせて伝え、予約前に確認するのがおすすめです。",
  },
  {
    slug: "sentei-110ban",
    num: "1-3",
    catch: "1本2,890円〜・24時間365日受付",
    name: "剪定110番",
    officialUrl: "https://www.sentei110.com/",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国4,000社以上の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、徳島市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        という本数単位の料金体系のため、斜面に生えた木や石垣の上の木など、
        <Hl>足場の悪い場所にある木だけを選んで頼む</Hl>
        使い方がしやすいのが特徴です。現地調査・見積もりは無料で、24時間365日受け付けています。
      </>
    ),
    recommend: [
      "足場の悪い場所の木だけを選んで頼みたい人",
      "斜面に張り出した枝を整えたい人",
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
      "当サイトのレビュー記事作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。表示は最低価格であり、足場の悪い場所や高木では金額が変わります。加盟店紹介型のため、傾斜地の作業に対応できるかは加盟店により異なります。依頼時に現地の状況を伝えて確認しましょう。正確な金額は無料の現地調査・見積もりで確定します。",
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
        で剪定・消毒・施肥をセットで任せられます。斜面のある敷地は、
        <Hl>草丈が伸びきってからだと作業がいっそう危なくなる</Hl>
        ため、伸びる前に手が入る形をつくれるかが管理のしやすさを左右します。年間の予定として組み込んでおけば、そのつどの判断が要らなくなります。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "伸びきる前に手が入る形をつくりたい人",
      "一年を通して庭の手入れを定額で任せたい人",
      "自分では見に行きにくい場所の状態を写真で確認したい人",
      "剪定・消毒・施肥をセットでまとめたい人",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。相場として掲載されている金額は一般的な広さの庭を想定した目安のため、傾斜地を含む敷地の金額は必ず現地の見積もりで確認してください。フランチャイズ型のため、実際の対応は地域の加盟店によります。",
  },
  {
    slug: "bassai-110ban",
    num: "1-5",
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
        のが特徴です。斜面や石垣の際に生えてしまった木は、根が石を押し広げたり、倒れる方向を選びにくかったりと、
        <Hl>平地の木とは扱いが違う</Hl>
        作業になります。抜根まで含めて相談できる専門サービスは、こうした木の整理に向いています。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "石垣や擁壁の際に生えた木を整理したい人",
      "斜面に生えた木の伐採を専門業者に任せたい人",
      "伐採した木材の処分まで一括で頼みたい人",
      "抜根して根の広がりを止めたい人",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトのレビュー記事作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。石垣や擁壁の際で抜根を行うと構造物に影響が出ることがあるため、根をどこまで取るかは現地で相談して決めましょう。",
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
    point: "草刈り・除草の専門・防草シート施工・定期メンテナンスプランあり",
  },
  {
    slug: "kurashi-no-market",
    name: "くらしのマーケット",
    type: "プラットフォーム型",
    price: "出店者ごとに事前明示",
    point: "口コミ・評価で比較・メッセージで事前相談・トラブル時の費用補償制度",
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
    t: "① 斜面の高さ・傾き・足場の有無を、写真と数字で伝える",
    b: "傾斜のある場所の作業は、平地の作業と前提がまったく違います。「庭の草刈り」とだけ伝えても見積もりは出ません。斜面の上端から下端までのおおよその高さ、上から見下ろした角度が分かる写真、下から見上げた写真、そして石垣や擁壁があるならその高さと状態が分かる写真を用意しましょう。あわせて、斜面に立てる足場があるか、上と下のどちらから作業に入れるかも伝えます。この情報があるかないかで、見積もりの精度も、当日の作業の進み方も変わります。",
  },
  {
    t: "② 自分でやる範囲と業者に頼む範囲を、先に線引きしておく",
    b: "傾斜地の草刈りは、足を滑らせたときに止まれない、刈払機の刃が跳ねる、斜面の上から石や道具が落ちるといった危険があり、平地の作業とは危なさの質が違います。全部を頼むと費用がかさむからと部分的に自分でやる場合も、「どこまでは自分でやり、どこからは頼むのか」を先に決めておきましょう。傾斜のきつい場所、石垣の際、下に道路や隣家がある場所は、無理をせず頼む側に振り分けるのが安全です。この線引きを業者にも伝えておけば、見積もりの範囲もはっきりします。",
  },
  {
    t: "③ 刈った草の処分と搬出経路まで含めた総額の見積もりを取る",
    b: "斜面で刈った草は、その場に残すか、上か下へ運び出すかを決める必要があります。運び出す場合、階段や狭い通路しかなければ人力での搬出になり、その手間が金額に反映されます。見積もりを取るときは、作業費だけでなく「刈った草をどうするか」「処分費は含まれるか」「搬出経路はどこを通るか」を確認しましょう。斜面の下に落として集める方法が取れる場合もありますが、下が道路や隣家、水路であれば当然できません。この点も現地で相談しておく必要があります。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較し、傾斜地の経験と機材を確かめる",
    b: "同じ敷地でも、業者によって得意分野も料金体系も異なります。時間に余裕があれば2〜3社から見積もりを取りましょう。傾斜地の依頼では、金額に加えて「どうやって作業するつもりか」を聞くのが有効です。どこから斜面に入るのか、何人で行うのか、どんな機材を使うのかを具体的に説明できる業者は、その条件での作業に慣れている可能性が高いといえます。逆に、現地を見ずに金額だけを提示してくる場合は、当日になって条件が違うと追加を求められることがあるため注意しましょう。",
  },
];

const faqs = [
  {
    q: "斜面の草刈りを自分でやるのは危険ですか？",
    a: "平地の草刈りとは危なさの質が違うため、無理は避けてください。傾斜地では体勢が安定せず、足を滑らせても止まりにくくなります。刈払機は刃が石や切り株に当たると跳ね返り、斜面ではその力を受け止めきれないことがあります。また、上で作業していると刈った草や道具、石が下へ落ちるため、下に道路や隣家、通行する人がある場所ではそれ自体が危険になります。傾斜がきつい場所、石垣の際、下に人や車がある場所は、業者に頼む側へ振り分けるのが安全です。自分でやるか業者に頼むかの線引きの考え方は当サイトの剪定のDIYと業者依頼の比較記事も参考になります。",
  },
  {
    q: "石垣の隙間から生えてきた草や小さな木は、どうすればよいですか？",
    a: "早い段階で取り除くのが基本です。石と石の隙間に入り込んだ根は、太くなるにつれて石を押し広げる方向に力をかけます。草のうちは手で抜けることもありますが、木になってしまうと根が奥まで入り込み、引き抜こうとして石を動かしてしまうことがあります。太くなった木を見つけたら、自分で無理に抜かず、石垣の状態を見てもらったうえで抜くか切るかを決めましょう。根をどこまで取るかは構造物への影響と直結するため、現地で相談して決めるのが確実です。切り株を残す場合の注意点は当サイトの切り株の放置リスクの解説記事でまとめています。",
  },
  {
    q: "法面の草刈りは、平らな庭より費用が高くなりますか？",
    a: "同じ面積でも金額が上がることが一般的です。理由は、体勢を安定させながらの作業になるため時間がかかること、機械を使いにくい場所があること、刈った草の運び出しに手間がかかること、安全のために人数を増やす場合があることなどです。草刈り110番は1平米600円〜という面積単価を掲げていますが、これは最低単価のため、傾斜地では条件に応じた金額になります。面積だけで計算した金額を前提にせず、現地を見てもらったうえで総額を確認してください。見積書のどこを見るべきかは当サイトの庭の見積もりの見方の解説記事が参考になります。",
  },
  {
    q: "刈った草は、そのまま斜面に置いておいてもよいですか？",
    a: "場所によります。斜面に厚く積もったまま放置すると、下の草が蒸れて傷んだり、雨で流れて側溝や排水口をふさいだりすることがあります。下に道路や水路がある場合は特に注意が必要です。一方で、敷地内で問題のない場所へまとめられるなら、持ち帰りの費用を抑えられることもあります。見積もりの段階で「敷地内に置いてよいか」「置く場合はどこにまとめるか」を相談しておきましょう。庭の水はけそのものが気になる場合は当サイトの庭の水はけ改善の解説記事が参考になります。",
  },
  {
    q: "斜面に除草剤を使ってもよいですか？",
    a: "使う場合は、流れる先を考えたうえで判断してください。傾斜地では雨のたびに水が下へ移動するため、まいた薬剤も同じ方向へ流れます。下に隣家の敷地、家庭菜園、水路がある場合は影響が及ぶ可能性があります。製品ごとに使用できる場所と方法が定められているため、必ず製品の表示に従ってください。判断に迷う場合は、除草剤に頼らず刈り取りや覆う方法に切り替えるほうが確実です。方法ごとの向き不向きは当サイトの雑草対策の比較記事、覆う方法の詳細は防草シートの解説記事とグラウンドカバーの選び方の解説記事でまとめています。",
  },
  {
    q: "石垣や擁壁のまわりに生えた木の根が気になります。どこに相談すればよいですか？",
    a: "まずは庭木を扱う業者に見てもらい、根がどこまで広がっているか、木を切るだけで済むのか抜根まで必要かを判断してもらいましょう。伐採110番のように抜根まで含めて相談できるサービスなら、切ったあとの根の扱いまで一度に検討できます。ただし、石垣や擁壁そのものにひび割れ・はらみ・ずれといった変化が出ている場合は、庭木の問題を超えて構造物の問題になります。その場合は、庭業者の作業とは別に、擁壁や外構を扱う専門業者への相談が必要です。庭石や石の構造物の撤去については当サイトの庭石・灯籠の撤去の解説記事も参考になります。",
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

export default function AreaTokushimaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】徳島の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "徳島で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-21T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "徳島の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#tokushima5",
      label: "1｜徳島で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "徳島の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#shamen", label: "2｜斜面・石垣まわりの草刈りは「自分でやるか」を先に決める" },
    { href: "#oou", label: "3｜法面の草は「刈り続ける」より「覆って減らす」" },
    { href: "#ishigaki", label: "4｜石垣・擁壁まわりは、草と根が構造物を傷めることがある" },
    { href: "#mitsumori", label: "5｜見積もりでは「傾斜・足場・搬出経路」を先に伝える" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜徳島の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">徳島の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】徳島の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["徳島", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="徳島の剪定・伐採・草刈り業者の比較"
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
              「敷地の裏が斜面になっていて、草刈りのたびに足を滑らせそうになる」「石垣の隙間から木が生えてきたが、どうすればよいのか分からない」——徳島で庭業者を探す相談には、こうした傾斜のある敷地ならではの悩みが関わってくることがあります。石垣や擁壁で高さを処理した土地、庭の一部が法面になっている土地では、草刈りひとつをとっても平地とは前提が違います。体勢が安定しない、機械が使いにくい、刈った草を運び出しにくい——この三つが重なるため、同じ面積でも作業の重さがまるで変わってきます。
            </p>
            <p>
              本記事では、徳島市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「自分でやる範囲と頼む範囲の線引き」「刈り続けるより覆って作業量を減らす考え方」「石垣・擁壁まわりの草と根への対処」「傾斜・足場・搬出経路を伝える見積もりの取り方」といった、斜面のある敷地ならではの依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="tokushima5" num="1">徳島で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            徳島市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月21日時点・公式サイト確認）。実際の総額は面積・草の状態・傾斜・足場の条件で変わるため、必ず作業前に見積もりで確認してください。斜面や石垣まわりの作業に対応できるかは業者・加盟店により異なるため、依頼時にあわせてご確認ください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            徳島の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月21日時点・公式サイト確認の掲載内容であり、樹種・本数・面積・傾斜・足場の条件により総額は変動します。傾斜地や石垣まわりの作業の料金・対応可否は各社の掲載値に含まれないため、見積もり時にご確認ください。お庭マスターは関東エリア中心のサービスのため、徳島での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜斜面の線引き */}
          <H2 id="shamen" num="2">斜面・石垣まわりの草刈りは「自分でやるか」を先に決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            傾斜のある場所の草刈りは、平地の作業を少し大変にしたものではなく、
            <Hl>危なさの種類そのものが違う作業</Hl>
            です。まず体勢が安定せず、足を滑らせても止まりにくくなります。刈払機は刃が石や切り株に当たると跳ね返り、斜面ではその力を受け止めきれないことがあります。さらに、上で作業すれば刈った草や石、道具が下へ落ちるため、下に道路や隣家、通行する人があればそれ自体が危険です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            そこで有効なのが、<Hl>作業を始める前に「自分でやる範囲」と「頼む範囲」を線引きしておく</Hl>ことです。平らな部分や斜面のごく下の縁は自分で、傾斜のきつい場所・石垣の際・下に道路や隣家がある場所は業者に——という分け方が現実的です。この線引きは費用の話でもあり、頼む範囲が決まれば見積もりの範囲もはっきりします。自分でやるか業者に頼むかの判断軸は
            <Link href="/sentei-diy-gyosha/" className="text-[#2D7F3E] underline">剪定のDIYと業者依頼の比較記事</Link>
            、高い場所の作業の危なさは
            <Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>
            が参考になります。
          </p>

          {/* 3｜覆って減らす */}
          <H2 id="oou" num="3">法面の草は「刈り続ける」より「覆って減らす」</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            斜面の草刈りは、作業の重さのわりに、また同じ時期が来れば元に戻ります。危険と費用のかかる作業を毎年繰り返すことになるため、
            <Hl>刈る前提そのものを見直す価値が平地より大きい</Hl>
            場所だといえます。方向としては、地面を覆って草の生える余地を減らす手立てが基本です。斜面では雨で土が流れやすいこともあり、覆うこと自体が地面を落ち着かせる方向に働きます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            ただし、<Hl>斜面では「覆えば終わり」にはなりません</Hl>。防草シートは押さえが甘いと雨や風でめくれ、砂利は傾斜が強いと下へ動きます。背の低い植物で覆う方法は、根が張るまでの間の手入れが必要になります。どの方法を選ぶにしても、傾斜での納まりを含めて相談したほうが確実です。方法ごとの費用と向き不向きは
            <Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の比較記事</Link>
            、シートの選び方と施工は
            <Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>
            、覆う植物の選び方は
            <Link href="/groundcover-erabikata/" className="text-[#2D7F3E] underline">グラウンドカバーの選び方の解説記事</Link>
            、砂利敷きの進め方は
            <Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの解説記事</Link>
            でまとめています。そもそも草の生えにくい庭に変えていく考え方は
            <Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草の生えにくい庭の解説記事</Link>
            が参考になります。
          </p>

          {/* 4｜石垣・擁壁 */}
          <H2 id="ishigaki" num="4">石垣・擁壁まわりは、草と根が構造物を傷めることがある</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            石垣や擁壁のまわりの草は、見た目の問題だけではありません。
            <Hl>石と石の隙間に入り込んだ根は、太くなるにつれて石を押し広げる方向に力をかけます</Hl>
            。草のうちは手で抜けることもありますが、木になってしまうと根が奥まで入り込み、抜こうとして石を動かしてしまうこともあります。隙間から芽が出ているのを見つけたら、小さいうちに取り除くのが基本です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            すでに太くなった木がある場合は、<Hl>切るだけにするか、根まで取るかを現地で相談して決める</Hl>必要があります。抜根は根の広がりを止められる一方、石垣の際では構造物に影響が出ることがあるためです。伐採110番なら伐採から抜根・処分まで一括で相談でき、見積もりは無料です。なお、石垣や擁壁そのものにひび割れ・はらみ・ずれが出ている場合は、庭木の問題を超えた構造物の問題になるため、外構や擁壁を扱う専門業者への相談が必要です。庭石や石の構造物の撤去は
            <Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯籠の撤去の解説記事</Link>
            、水の流れが気になる場合は
            <Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の解説記事</Link>
            、竹が入り込んでいる場合は
            <Link href="/take-taisaku/" className="text-[#2D7F3E] underline">竹の対策の解説記事</Link>
            が参考になります。
          </p>

          {/* 5｜見積もり */}
          <H2 id="mitsumori" num="5">見積もりでは「傾斜・足場・搬出経路」を先に伝える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            面積単価で示される草刈りの料金は分かりやすい一方、
            <Hl>傾斜地ではその単価がそのまま当てはまらない</Hl>
            ことがほとんどです。体勢を保ちながらの作業になるため時間がかかり、機械を使いにくい場所があり、安全のために人数を増やす場合もあります。草刈り110番は1平米600円〜という面積単価を掲げていますが、これは最低単価のため、傾斜地では条件に応じた金額になると考えておきましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            依頼側でできる準備は、<Hl>傾斜・足場・搬出経路の三つを先に伝えること</Hl>です。斜面の上端から下端までのおおよその高さ、上と下のどちらから作業に入れるか、斜面に立てる足場があるか、刈った草をどの経路で運び出すか——これらが分かれば、見積もりの精度が上がり、当日の追加相談も減ります。斜面の様子は言葉より写真のほうが伝わるため、見上げた写真と見下ろした写真の両方を用意しておきましょう。見積書のどこを見るべきかは
            <Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">庭の見積もりの見方の解説記事</Link>
            、飛び石まわりなど細かい場所の草の扱いは
            <Link href="/tobiishi-zasso/" className="text-[#2D7F3E] underline">飛び石まわりの雑草の解説記事</Link>
            でまとめています。
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
          <H2 id="faq" num="7">徳島の庭業者でよくある質問</H2>
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
            徳島で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。自分では入れない斜面の草刈りを任せ、防草対策まで進めるなら草刈り110番、斜面の状況を予約前にメッセージで伝えて対応できる業者を選ぶならくらしのマーケット、足場の悪い場所の木だけを本数単位で頼むなら剪定110番、伸びきる前に手が入る形を年間の予定として作るなら定額制のsmileガーデン、石垣の際に生えた木を抜根まで含めて整理するなら伐採110番、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            斜面のある敷地では、「がんばれば自分でもできる」と考えた結果としてけがにつながることがあります。自分でやる範囲と頼む範囲を作業前に線引きすること、刈り続ける前提を見直して覆う手立てを検討すること、石垣の隙間の草や木は小さいうちに取り除くこと、傾斜・足場・搬出経路を写真とあわせて先に伝えること、処分費と搬出の手間まで含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、敷地の状況に合った業者を選んでください。
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
              {["徳島", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/saga/", label: "佐賀の庭業者おすすめ5選" },
                { href: "/area/aomori/", label: "青森の庭業者おすすめ5選" },
                { href: "/area/akita/", label: "秋田の庭業者おすすめ5選" },
                { href: "/area/yamagata/", label: "山形の庭業者おすすめ5選" },
                { href: "/area/fukushima/", label: "福島の庭業者おすすめ5選" },
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
                { href: "/agents/kurashi-no-market/", label: "くらしのマーケットの口コミ・評判" },
                { href: "/zasso-taisaku/", label: "雑草対策の比較" },
                { href: "/groundcover-erabikata/", label: "グラウンドカバーの選び方" },
                { href: "/niwaishi-toro-tekkyo/", label: "庭石・灯籠の撤去" },
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
