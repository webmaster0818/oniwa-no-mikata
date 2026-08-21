import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/yamagata/";
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
      "【2026年最新】山形の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "山形で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、屋敷林・防風林のある家の手入れの考え方、大きく育った木の危険の見方と高所作業の頼み方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】山形の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "山形で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。屋敷林・防風林を減らす前に役割を確かめる考え方、木の危険は高さより傾き・付け根・張り出しで見ること、高所作業を頼むときの確認点、数年かけて順番に手を入れる進め方も解説します。",
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
    slug: "bassai-110ban",
    num: "1-1",
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
        のが特徴です。幹の太くなった木や、家・電線に近づいた木は、切ること自体より
        <Hl>倒す方向をどう制御するか</Hl>
        が難しい作業になります。こうした木を扱える体制があるかどうかは業者を選ぶ大きな分かれ目で、伐採を専門に掲げるサービスは相談先として分かりやすい選択肢です。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "幹が太く育った木の処理を専門業者に任せたい人",
      "家・電線・塀に近い木の伐採を相談したい人",
      "伐採した太い幹の処分まで一括で頼みたい人",
      "抜根して跡地を使えるようにしたい人",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトのレビュー記事作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。重機やクレーンが必要になるか、搬出経路が確保できるかで金額が大きく変わるため、現地調査の際に敷地の出入口の幅もあわせて見てもらいましょう。",
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
        から依頼者の近くのプロを手配する仕組みで、山形市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        という本数単位の料金体系のため、木が何本もある敷地でも
        <Hl>今年手を入れる木を選んで費用を組み立てられる</Hl>
        のが利点です。切らずに済ませたい木の枝の張り出しだけを抑えるといった、部分的な相談もしやすい形式といえます。現地調査・見積もりは無料で、24時間365日受け付けています。
      </>
    ),
    recommend: [
      "本数の多い敷地で今年の作業対象を絞りたい人",
      "切らずに枝の張り出しだけ抑えたい木がある人",
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
      "当サイトのレビュー記事作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。表示は最低価格であり、高木や幹の太い木では金額が変わります。加盟店紹介型のため、高所作業に対応できる機材や体制は加盟店により異なります。大きな木の作業を頼む場合は、対応可否を事前に伝えて確認しましょう。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "kurashi-no-market",
    num: "1-3",
    catch: "口コミで比較・料金事前明示",
    name: "くらしのマーケット",
    officialUrl: "https://curama.jp/",
    image: "/images/kurashi-no-market-features.png",
    intro: (
      <>
        くらしのマーケットは、みんなのマーケット株式会社が運営する暮らしのサービス比較プラットフォームです。剪定・草刈り・伐採・造園などの庭のお手入れについて、
        <Hl>地域の業者を口コミ・評価・料金で比較して直接予約</Hl>
        できます。<Hl>料金は出店者ごとに事前に明示</Hl>
        され、予約前にメッセージで相談できるため、
        <Hl>対応できる木の高さの上限や、使える機材</Hl>
        を確かめたうえで依頼先を決められます。大きな木の作業は出店者ごとに受けられる範囲が分かれるため、この事前確認がそのまま業者選びになります。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "対応できる木の高さや機材を予約前に確かめたい人",
      "口コミを見て自分で地域の業者を選びたい人",
      "作業範囲と料金を事前に文字で確認したい人",
      "万が一の補償制度を重視する人",
    ],
    table: [
      { k: "料金の特徴", v: "出店者ごとに事前明示", note: "口コミ・実績と合わせて比較" },
      { k: "予約", v: "オンラインで完結", note: "業者と直接メッセージ可" },
      { k: "補償", v: "トラブル時の費用補償制度あり" },
      { k: "運営会社", v: "みんなのマーケット株式会社" },
    ],
    memo:
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトのレビュー記事作成時に確認しています。出店者ごとに対応できる木の大きさや作業内容は異なり、高所作業や特殊伐採を扱わない出店者もいます。大きな木の依頼では、木の高さや幹の太さ、周囲の状況を伝えて予約前に確認するのがおすすめです。",
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
        で剪定・消毒・施肥をセットで任せられます。木の本数が多い敷地では、
        <Hl>放っておく年をつくらないこと</Hl>
        が大きくなりすぎる木を出さない近道になります。年間の契約で定期的に手が入る形にしておけば、一本一本が管理できる大きさのうちに整えられます。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "手入れの間隔が空いて木が大きくなるのを防ぎたい人",
      "本数の多い敷地の管理を定額でまとめたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。相場として掲載されている金額は一般的な広さの庭を想定した目安のため、高木が多い敷地の金額は必ず現地の見積もりで確認してください。フランチャイズ型のため、実際の対応は地域の加盟店によります。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-5",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.kusakari110.com/",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。木の多い敷地では、
        <Hl>木の根元まわりの下草がそのまま作業のしにくさにつながる</Hl>
        ことがあります。足元が見えないと、根や石につまずく危険もあり、剪定や伐採の前に下草を片付けておくと作業が安全に進みます。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        まで頼め、<Hl>定期メンテナンスプラン</Hl>
        で回数と時期を決めておくこともできます。
      </>
    ),
    recommend: [
      "木の根元まわりの下草をまとめて片付けたい人",
      "剪定や伐採の前に足元を整えておきたい人",
      "庭や空き地の雑草を低価格で処理したい人",
      "定期契約で草刈りの手間をなくしたい人",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり600円〜", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトのレビュー記事作成時に確認しています。表示は最低単価であり、木の根元や障害物の多い場所では機械が使えず単価が変わることがあります。繁忙期は混み合うため、剪定や伐採と日程を合わせたい場合は早めに相談しましょう。",
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
    slug: "bassai-110ban",
    name: "伐採110番",
    type: "マッチング型",
    price: "木の高さ・本数で変動（見積もり無料）",
    point: "伐採・抜根専門・大木や危険木の特殊伐採・処分まで一括対応",
  },
  {
    slug: "sentei-110ban",
    name: "剪定110番",
    type: "マッチング型",
    price: "剪定1本2,890円〜（出張費3,000円別途）",
    point: "24時間365日受付・見積もり後の追加料金なし",
  },
  {
    slug: "kurashi-no-market",
    name: "くらしのマーケット",
    type: "プラットフォーム型",
    price: "出店者ごとに事前明示",
    point: "口コミ・評価で比較・トラブル時の費用補償制度",
  },
  {
    slug: "smile-garden",
    name: "smileガーデン",
    type: "フランチャイズ型",
    price: "草刈り2〜3万円台・剪定3〜4万円台（相場）",
    point: "定額制の年間管理プラン・写真付き作業報告書",
  },
  {
    slug: "kusakari-110ban",
    name: "草刈り110番",
    type: "マッチング型",
    price: "草刈り1平米600円〜",
    point: "防草シート施工・定期メンテナンスプランあり",
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
    t: "① 気になる木を写真に撮り、危ないと感じる順に並べてから相談する",
    b: "大きな木が何本もある敷地では、口頭の説明だけで状況を伝えるのは難しいものです。気になる木の全体と、傾きや付け根の様子が分かる写真を撮り、家や道路との位置関係が分かる一枚も添えておきましょう。そのうえで「今すぐ何とかしたい木」「気になるが急がない木」「当面このままでよい木」に並べておけば、業者は現地に来る前から作業の規模を想像できます。優先順位が決まっていれば、予算に収まらない場合にどこを外すかの相談もその場で進みます。",
  },
  {
    t: "② 高所・大径木の作業は、保険と作業体制を先に確認する",
    b: "高い場所での伐採や剪定は、落下や倒木で建物・車・隣家に損害が出る可能性のある作業です。依頼前に、作業中の事故や物損に備えた保険に加入しているかを確認しましょう。あわせて、何人体制で作業するのか、ロープや高所作業車などどんな方法で行うのか、電線や建物に近い場合はどう処理するのかも聞いておきます。説明を面倒がらずに答えてくれるかどうかは、その業者がその規模の作業に慣れているかを測る材料にもなります。",
  },
  {
    t: "③ 幹の処分と搬出経路まで含めた総額の見積もりを取る",
    b: "太い木を切ると、大量の幹と枝が残ります。この処分費が総額に占める割合は小さくなく、敷地から運び出す経路が狭ければ、その分の手間も金額に反映されます。見積もりを取るときは、切る作業だけでなく「切った後の材はどうなるのか」「処分費は含まれているのか」「敷地内に残してよいか」まで確認しましょう。薪などに使う予定があるなら、玉切りの長さを指定できるかも先に伝えておくと行き違いを防げます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較し、見積書の内訳をそろえて見る",
    b: "同じ木でも、業者によって作業の進め方も料金体系も異なります。時間に余裕があれば2〜3社から見積もりを取りましょう。ただし総額だけを並べても比較になりません。切る本数、処分の有無、重機の使用、養生の範囲がそろっているかを確かめたうえで比べる必要があります。安い見積もりに処分費が入っていないだけ、ということもよくあります。内訳の書き方が大ざっぱな見積書しか出てこない場合は、その点を質問して反応を見るのも判断材料になります。",
  },
];

const faqs = [
  {
    q: "屋敷林や防風林の木を減らしたいのですが、どこから手をつければよいですか？",
    a: "先に確かめたいのは、その木立が今も果たしている役割です。家のまわりの木立は、風を弱める、視線をさえぎる、夏の日差しを和らげるといった働きをしていることがあります。風上側をまとめて切ってしまうと、残った木に風が直接当たるようになり、かえって倒れやすくなる場合もあります。減らすなら、家に近づきすぎた木、傾きや傷みのある木、電線に触れそうな木といった「危険側の理由がある木」から順に検討し、風を受け止めている列は最後に回すのが安全です。判断が難しければ、木立全体を見てもらったうえで順番の提案を受けましょう。",
  },
  {
    q: "幹の太い大きな木の伐採は、費用がどのくらい変わりますか？",
    a: "金額の幅は大きく、一律の目安を示すことはできません。費用を左右するのは、木の高さと幹の太さに加えて、「まっすぐ倒せる空き地があるか」「上から順に切り下ろす必要があるか」「重機や高所作業車を入れられるか」「切った材をどこまで運ぶか」といった条件です。周囲に建物や塀があって一気に倒せない木は、枝を落としながら少しずつ短くしていく作業になり、手間も時間も増えます。伐採110番のような伐採専門のサービスは見積もりが無料のため、まず現地を見てもらって条件ごとの金額を確認するのが確実です。",
  },
  {
    q: "家や電線に近い木は、自分で切ってはいけませんか？",
    a: "自分で切ることは避けてください。倒れる方向は木の重心や枝の付き方で決まり、見た目の傾きどおりに倒れるとは限りません。建物・塀・車に当たれば損害が出ますし、電線に触れる作業は感電や停電につながる危険があります。電線に枝が触れている、あるいは触れそうな場合は、切る前に電力会社へ相談するのが基本です。高い場所の作業を自分で行うことの危なさは当サイトの高木剪定の危険性の解説記事でまとめています。無理のない範囲の線引きは、剪定のDIYと業者依頼の比較記事も参考にしてください。",
  },
  {
    q: "木が傾いているように見えます。すぐ切るべきでしょうか？",
    a: "傾きだけで判断はできません。もともと日当たりの方向へ伸びて傾いている木もあれば、根が持ち上がって傾き始めた木もあり、意味がまったく違います。確認したいのは、根元の地面が盛り上がっていないか、幹の付け根に裂けやきのこ、大きな空洞がないか、以前と比べて傾きが増していないかという点です。地面の盛り上がりや付け根の異常があるなら、早めに業者へ相談してください。判断に迷う段階では、傾きの角度が分かる写真を撮って残しておくと、変化の有無を後から比べられます。木の状態の見極めは当サイトの枯れたように見える庭木の解説記事も参考になります。",
  },
  {
    q: "伐採した太い幹の処分も頼めますか？敷地に置いておくこともできますか？",
    a: "処分まで対応する業者が一般的で、伐採110番のように木材処分を含めて一括で任せられるサービスもあります。一方で、敷地に余裕があれば、切った材を敷地内に残す選択もできます。その場合は費用の扱いが変わることがあるため、見積もりの段階で相談しましょう。ただし、太い材をそのまま置いておくと、湿った状態が続いて虫が集まったり、腐って崩れたりすることがあります。置く場所と期間を決めておくのが無難です。切り株を残す場合の注意点は当サイトの切り株の放置リスクの解説記事でまとめています。",
  },
  {
    q: "高いところの剪定を頼むとき、業者の保険は確認したほうがよいですか？",
    a: "確認しておくことをおすすめします。高所作業では、切った枝が落ちて屋根や車を傷つける、隣家の敷地に落ちるといったことが起こり得ます。作業中の事故や物損に備えた保険に加入しているかを、依頼前に聞いておきましょう。剪定110番は請負賠償保険への加入を当サイトのレビュー記事作成時に確認しています。あわせて、隣家に面した枝を切る場合は、事前に一言伝えておくと当日のやり取りが穏やかに進みます。境界まわりの枝の扱いは当サイトの枝の越境の解説記事が参考になります。",
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

export default function AreaYamagataPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】山形の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "山形で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "山形の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#yamagata5",
      label: "1｜山形で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "山形の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#yashikirin", label: "2｜屋敷林・防風林は「減らす前に役割を確かめる」" },
    { href: "#kiken-mikata", label: "3｜大きな木の危険は「高さ」より傾き・付け根・張り出しに出る" },
    { href: "#kousho", label: "4｜高所・大径木の作業は「誰が・どう切るか」まで確認して頼む" },
    { href: "#junban", label: "5｜一度に全部やらず「順番と予算」を決めて数年で進める" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜山形の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">山形の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】山形の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["山形", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="山形の剪定・伐採・草刈り業者の比較"
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
              「家のまわりの木立が大きくなりすぎて、自分では手が出せない」「祖父の代から残る木を切るべきかどうか決めかねている」——山形で庭業者を探す相談には、こうした大きく育った木をどう扱うかという悩みが関わってくることがよくあります。家のまわりに木立を残してきた住まいでは、木は景観や風よけとして役割を持つ一方、育ちすぎた木は屋根や電線に近づき、倒木や落枝の心配を生みます。しかも大きな木は、放っておく年が続くほど手を入れにくくなり、費用も上がっていきます。
            </p>
            <p>
              本記事では、山形市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「木立の役割を確かめてから減らす順番を決める考え方」「危険の見分け方は高さではなく傾き・付け根・張り出しにあること」「高所・大径木の作業を頼むときに確認すべきこと」「一度に全部やらず数年かけて進める組み立て方」といった、大きな木を抱える家ならではの依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="yamagata5" num="1">山形で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            山形市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月21日時点・公式サイト確認）。実際の総額は樹種・本数・木の大きさ・庭の状況で変わるため、必ず作業前に見積もりで確認してください。高所作業や大きな木の伐採に対応できるかは業者・加盟店により異なるため、依頼時にあわせてご確認ください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            山形の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月21日時点・公式サイト確認の掲載内容であり、樹種・本数・面積・木の大きさ・庭の状況により総額は変動します。高所作業や大径木の特殊伐採の料金は各社の掲載値に含まれないため、見積もり時にご確認ください。お庭マスターは関東エリア中心のサービスのため、山形での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜屋敷林の役割 */}
          <H2 id="yashikirin" num="2">屋敷林・防風林は「減らす前に役割を確かめる」</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            家のまわりを木立が囲む住まいでは、木は景色をつくるだけでなく、
            <Hl>風を弱める・視線をさえぎる・夏の日差しを和らげる</Hl>
            といった役割を担っていることがあります。手入れが負担になってきたからといって、まとめて切ってしまうと、これまで木立が引き受けていた条件が一度に家へ返ってきます。特に風は影響が分かりやすく、
            <Hl>風上側の列を切ったあと、残した木に直接風が当たるようになる</Hl>
            という順序の問題が起こります。減らすこと自体は選択肢ですが、どこから減らすかで結果が変わるという点は先に押さえておきたいところです。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            減らす順番を決めるときの基準は、<Hl>「危険側の理由がある木」から手をつける</Hl>ことです。家の屋根に枝がかかっている木、電線に近づいている木、傾きや付け根の傷みがある木、隣家側へ大きく張り出している木——こうした木は、役割の有無にかかわらず優先して相談する価値があります。逆に、風を受け止めている列や、目隠しとして機能している木は、代わりの手立てを決めてから触るほうが安全です。目隠しの考え方は
            <Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の解説記事</Link>
            、生垣とフェンスの比べ方は
            <Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較記事</Link>
            が参考になります。隣家に張り出した枝の扱いは
            <Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境の解説記事</Link>
            でまとめています。
          </p>

          {/* 3｜危険の見方 */}
          <H2 id="kiken-mikata" num="3">大きな木の危険は「高さ」より傾き・付け根・張り出しに出る</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大きな木を見て不安になるのは、たいてい高さのせいです。しかし、
            <Hl>高いこと自体が危険なのではなく、支えが弱っていることが危険</Hl>
            です。見るべき場所は三つあります。ひとつめは根元で、地面が片側だけ盛り上がっていないか、根が浮いていないかを確かめます。ふたつめは幹の付け根から下部で、大きな裂け目、深い空洞、きのこが出ていないかを見ます。みっつめは枝の張り出しで、片側にだけ重く伸びた枝があると、風や雪の力が偏ってかかります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            これらは<Hl>一度見て終わりではなく、変化を追うことに意味があります</Hl>。同じ位置から写真を撮って残しておけば、傾きが進んでいるのか、去年と変わらないのかを比べられます。強い風のあとに枝が落ちた、幹の周りに木くずが溜まっているといった変化も、状態を知らせる手がかりです。木の見極めは
            <Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">枯れたように見える庭木の解説記事</Link>
            、幹や枝に入る虫や病気の影響は
            <Link href="/niwaki-byogaichu/" className="text-[#2D7F3E] underline">庭木の病害虫の解説記事</Link>
            でまとめています。風の強い時期に備えた点検は
            <Link href="/taifu-niwaki-taisaku/" className="text-[#2D7F3E] underline">台風前後の庭木対策の解説記事</Link>
            も参考にしてください。
          </p>

          {/* 4｜高所作業の頼み方 */}
          <H2 id="kousho" num="4">高所・大径木の作業は「誰が・どう切るか」まで確認して頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大きな木の作業は、<Hl>切る技術よりも、倒す方向と落とす順番を制御できるかどうか</Hl>で結果が分かれます。周囲に空き地があってまっすぐ倒せる木と、建物や塀に囲まれていて上から少しずつ切り下ろすしかない木とでは、必要な人数も機材も費用もまったく違います。依頼するときは、何人体制で行うのか、ロープや高所作業車をどう使うのか、隣家側へ枝を落とさないためにどう養生するのかを聞いておきましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            あわせて確認したいのが<Hl>保険への加入と、作業後の材の扱い</Hl>です。落枝や倒木で建物・車に損害が出る可能性のある作業では、保険の有無が実質的な安心につながります。剪定110番は請負賠償保険への加入を当サイトのレビュー記事作成時に確認しています。切った材の処分費が見積もりに含まれているか、搬出経路が確保できるかも、総額に直結する要素です。伐採と抜根の違いは
            <Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違いの解説記事</Link>
            、切り株を残す場合の注意点は
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            、枝の処分方法は
            <Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝の処分の解説記事</Link>
            でまとめています。伐採110番なら大木・危険木の特殊伐採から処分まで一括で相談でき、見積もりは無料です。
          </p>

          {/* 5｜順番と予算 */}
          <H2 id="junban" num="5">一度に全部やらず「順番と予算」を決めて数年で進める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大きな木が何本もある敷地では、まとめて手を入れようとすると金額が跳ね上がります。かといって毎年何もしなければ、木はさらに大きくなり、次に頼むときの費用は上がっていきます。現実的なのは、
            <Hl>危険の高い木から順に、年ごとに予算を決めて進めること</Hl>
            です。今年は屋根にかかった1本、来年は電線に近づいている1本、というように区切れば、費用の山を平らにできます。この進め方をとる場合、業者側にも複数年で考えていることを伝えておくと、順番の提案を受けやすくなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            もうひとつ効くのが、<Hl>残す木を「管理できる大きさ」で止めること</Hl>です。手が届く範囲に収まっている木は、定期的な剪定で維持でき、大がかりな作業が要りません。手入れの間隔が空くほど作業は重くなるため、定額制の年間管理プランのようにあらかじめ手が入る形にしておく方法もあります。造園業者と植木屋の違いや依頼先の考え方は
            <Link href="/zoen-uekiya-chigai/" className="text-[#2D7F3E] underline">造園業者と植木屋の違いの解説記事</Link>
            、見積書のどこを見るべきかは
            <Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">庭の見積もりの見方の解説記事</Link>
            、一年の作業の並べ方は
            <Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュールの解説記事</Link>
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
          <H2 id="faq" num="7">山形の庭業者でよくある質問</H2>
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
            山形で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。幹の太い木や家・電線に近い木の処理なら特殊伐採から処分まで一括の伐採110番、本数の多い敷地で今年の作業対象を絞るなら本数単位の剪定110番、対応できる木の大きさや機材を予約前に確かめて選ぶならくらしのマーケット、手入れの間隔を空けずに管理できる大きさで止めたいなら定額制のsmileガーデン、木の根元まわりの下草を片付けて作業の足元を整えるなら面積単価の草刈り110番、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            大きな木を抱える家では、判断を先送りするほど作業も費用も重くなります。木立の役割を確かめてから減らす順番を決めること、危険は高さではなく傾き・付け根・張り出しに出ると理解して変化を写真で追うこと、高所や大径木の作業は保険と作業体制まで確認して頼むこと、一度に全部やらず年ごとに予算を区切って進めること、処分費と搬出経路まで含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、敷地の状況に合った業者を選んでください。
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
              {["山形", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/fukushima/", label: "福島の庭業者おすすめ5選" },
                { href: "/area/tokushima/", label: "徳島の庭業者おすすめ5選" },
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
                { href: "/agents/bassai-110ban/", label: "伐採110番の口コミ・評判" },
                { href: "/agents/sentei-110ban/", label: "剪定110番の口コミ・評判" },
                { href: "/takagi-sentei-kiken/", label: "高木剪定の危険性" },
                { href: "/bassai-bakkon-chigai/", label: "伐採と抜根の違い" },
                { href: "/taifu-niwaki-taisaku/", label: "台風前後の庭木対策" },
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
