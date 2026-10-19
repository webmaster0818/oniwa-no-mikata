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
      "【2026年最新】山形の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "山形で剪定・伐採・草刈りを依頼できる庭業者を比較。剪定110番・伐採110番・草刈り110番・smileガーデン・くらしのマーケットの料金と特徴に加え、屋敷林・防風林のある家の手入れ、大きく育った木の危険の見方、高所作業の依頼方法を解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】山形の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "山形で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。屋敷林・防風林を減らす前に役割を確認する考え方、木の危険は高さより傾き・付け根・張り出しで判断すること、高所作業を依頼する際の確認点、数年かけて順番に手を入れる進め方も解説します。",
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
    officialUrl: "",
    image: "/images/bassai-110ban-features.png",
    intro: (
      <>
        伐採110番は、伐採・抜根に特化した専門サービスです。庭木の伐採から
        <Hl>大木・高木・危険木の特殊伐採</Hl>
        、重機を使った大規模作業まで対応し、
        <Hl>伐採後の木材処分まで一括で任せられる</Hl>
        のが特徴です。幹の太くなった木や、家・電線に近づいた木は、切ること自体より
        <Hl>倒す方向をどう制御するか</Hl>
        が難しい作業になります。こうした木を扱える体制があるかどうかは業者選びの重要な判断材料であり、伐採を専門に掲げるサービスは相談先として分かりやすい選択肢です。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "幹が太く育った木の処理を専門業者に任せたい方",
      "家・電線・塀に近い木の伐採を相談したい方",
      "伐採した太い幹の処分まで一括で依頼したい方",
      "抜根して跡地を使えるようにしたい方",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトの各社紹介ページ作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。重機やクレーンが必要になるか、搬出経路が確保できるかで金額が大きく変わるため、現地調査の際に敷地の出入口の幅もあわせて確認してもらってください。",
  },
  {
    slug: "sentei-110ban",
    num: "1-2",
    catch: "1本2,890円〜・24時間365日受付",
    name: "剪定110番",
    officialUrl: "",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国4,000社以上の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、山形市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        という本数単位の料金体系のため、木が何本もある敷地でも
        <Hl>今年手を入れる木を選んで費用を組み立てられる</Hl>
        のが利点です。伐採せずに枝の張り出しだけを抑えたいといった、部分的な相談もしやすい形式です。現地調査・見積もりは無料で、24時間365日受け付けています。
      </>
    ),
    recommend: [
      "本数の多い敷地で今年の作業対象を絞りたい方",
      "切らずに枝の張り出しだけ抑えたい木がある方",
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
      "当サイトの各社紹介ページ作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。表示は最低価格であり、高木や幹の太い木では金額が変わります。加盟店紹介型のため、高所作業に対応できる機材や体制は加盟店により異なります。大きな木の作業を依頼する場合は、作業内容を事前に伝えて対応可否をご確認ください。正確な金額は無料の現地調査・見積もりで確定します。",
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
        を確かめたうえで依頼先を決められます。大きな木の作業は出店者ごとに対応できる範囲が異なるため、この事前確認が業者選びの判断材料になります。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "対応できる木の高さや機材を予約前に確かめたい方",
      "口コミを見て自分で地域の業者を選びたい方",
      "作業範囲と料金を事前に文字で確認したい方",
      "万が一の補償制度を重視する方",
    ],
    table: [
      { k: "料金の特徴", v: "出店者ごとに事前明示", note: "口コミ・実績と合わせて比較" },
      { k: "予約", v: "オンラインで完結", note: "業者と直接メッセージ可" },
      { k: "補償", v: "トラブル時の費用補償制度あり" },
      { k: "運営会社", v: "みんなのマーケット株式会社" },
    ],
    memo:
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトの各社紹介ページ作成時に確認しています。出店者ごとに対応できる木の大きさや作業内容は異なり、高所作業や特殊伐採を扱わない出店者もいます。大きな木の依頼では、木の高さや幹の太さ、周囲の状況を伝えて予約前に確認することをおすすめします。",
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
        <Hl>年間実績3万件・リピート率95%以上</Hl>
        を掲げ、<Hl>定額制の年間管理プラン</Hl>
        で剪定・消毒・施肥をセットで任せられます。木の本数が多い敷地では、
        <Hl>放っておく年をつくらないこと</Hl>
        が、木を大きくしすぎないための有効な方法です。年間の契約で定期的に手入れが行われる形にしておけば、1本ずつ管理できる大きさのうちに整えられます。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "手入れの間隔が空いて木が大きくなるのを防ぎたい方",
      "本数の多い敷地の管理を定額でまとめたい方",
      "剪定・消毒・施肥をセットでまとめたい方",
      "留守中の作業でも報告書で仕上がりを確認したい方",
    ],
    table: [
      { k: "草刈り（草丈50cm未満）", v: "1m²あたり税込220円〜550円", note: "公式料金表の目安単価" },
      { k: "庭木剪定（高さ1〜3m未満）", v: "1本あたり税込1,650円〜6,600円", note: "公式料金表の目安単価" },
      { k: "伐採（高さ1〜3m未満・幹直径15cm未満）", v: "1本あたり税込3,300円〜11,000円", note: "公式料金表の目安単価" },
      { k: "最低受注金額", v: "税込8,800円〜13,200円", note: "地域により異なる" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "年間管理プラン、見積もり・出張費無料、年間実績3万件・リピート率95%以上という実績値、料金表の目安単価は、2026年10月19日に公式サイトで確認しています。相場として掲載されている金額は一般的な広さの庭を想定した目安のため、高木が多い敷地の金額は必ず現地の見積もりで確認してください。フランチャイズ型のため、実際の対応は地域の加盟店によります。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-5",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。木の多い敷地では、
        <Hl>木の根元まわりの下草がそのまま作業のしにくさにつながる</Hl>
        ことがあります。足元が見えないと根や石につまずく危険もあるため、剪定や伐採の前に下草を片付けておくと、作業を安全に進められます。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        まで依頼でき、<Hl>定期メンテナンスプラン</Hl>
        で回数と時期を決めておくこともできます。
      </>
    ),
    recommend: [
      "木の根元まわりの下草をまとめて片付けたい方",
      "剪定や伐採の前に足元を整えておきたい方",
      "庭や空き地の雑草を低価格で処理したい方",
      "定期契約で草刈りの手間をなくしたい方",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり600円〜", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトの各社紹介ページ作成時に確認しています。表示は最低単価であり、木の根元や障害物の多い場所では機械が使えず単価が変わることがあります。繁忙期は混み合うため、剪定や伐採と日程を合わせたい場合は早めに相談してください。",
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
    price: "剪定1本税込1,650円〜・草刈り1m²税込220円〜（公式の目安単価）",
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
    t: "① 気になる木を写真に撮り、危険度の高い順に整理してから相談する",
    b: "大きな木が何本もある敷地では、口頭の説明だけで状況を伝えるのは難しいものです。気になる木の全体と、傾きや付け根の様子が分かる写真を撮り、家や道路との位置関係が分かる写真も添えてください。そのうえで「すぐに対処したい木」「気になるが急がない木」「当面このままでよい木」に分けておけば、業者は現地調査の前から作業の規模を把握できます。優先順位が決まっていれば、予算に収まらない場合にどの作業を見送るかの相談もその場で進められます。",
  },
  {
    t: "② 高所・大径木の作業は、保険と作業体制を先に確認する",
    b: "高い場所での伐採や剪定は、落下や倒木で建物・車・隣家に損害が出る可能性のある作業です。依頼前に、作業中の事故や物損に備えた保険に加入しているかをご確認ください。あわせて、何人体制で作業するのか、ロープや高所作業車などどのような方法で行うのか、電線や建物に近い場合はどう対処するのかも確認しておきます。こうした質問に丁寧に答えてくれるかどうかは、その業者が同規模の作業に慣れているかを判断する材料にもなります。",
  },
  {
    t: "③ 幹の処分と搬出経路まで含めた総額の見積もりを取る",
    b: "太い木を切ると、大量の幹と枝が残ります。この処分費が総額に占める割合は小さくなく、敷地から運び出す経路が狭ければ、その分の手間も金額に反映されます。見積もりを取る際は、切る作業だけでなく「切った後の木材はどうなるのか」「処分費は含まれているのか」「敷地内に残してよいか」まで確認してください。薪などに使う予定があるなら、玉切りの長さを指定できるかも先に伝えておくと行き違いを防げます。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較し、見積書の内訳をそろえて確認する",
    b: "同じ木でも、業者によって作業の進め方も料金体系も異なります。時間に余裕があれば2〜3社から見積もりを取ることをおすすめします。ただし、総額だけを比べても正確な比較にはなりません。切る本数、処分の有無、重機の使用、養生の範囲がそろっているかを確認したうえで比較する必要があります。安い見積もりに処分費が含まれていないだけということもよくあります。内訳の記載が大まかな見積書しか提示されない場合は、その点を質問し、回答の内容を判断材料にすることもできます。",
  },
];

const faqs = [
  {
    q: "屋敷林や防風林の木を減らしたいのですが、どこから手をつければよいですか？",
    a: "最初に確認すべきなのは、その木立が現在も果たしている役割です。家のまわりの木立は、風を弱める、視線をさえぎる、夏の日差しを和らげるといった働きをしていることがあります。風上側をまとめて切ってしまうと、残った木に風が直接当たるようになり、かえって倒れやすくなる場合もあります。減らす場合は、家に近づきすぎた木、傾きや傷みのある木、電線に触れそうな木といった、危険につながる理由がある木から順に検討し、風を受け止めている列は最後に回すことをおすすめします。判断が難しい場合は、木立全体を確認してもらったうえで、順番の提案を受けてください。",
  },
  {
    q: "幹の太い大きな木の伐採は、費用がどのくらい変わりますか？",
    a: "金額の幅は大きく、一律の目安を示すことはできません。費用を左右するのは、木の高さと幹の太さに加えて、「まっすぐ倒せる空き地があるか」「上から順に切り下ろす必要があるか」「重機や高所作業車を入れられるか」「切った材をどこまで運ぶか」といった条件です。周囲に建物や塀があって一度に倒せない木は、枝を落としながら少しずつ短くしていく作業になり、手間も時間も増えます。伐採110番のような伐採専門のサービスは見積もりが無料のため、まず現地を確認してもらい、条件ごとの金額を把握することをおすすめします。",
  },
  {
    q: "家や電線に近い木は、自分で切ってはいけませんか？",
    a: "ご自身で切ることは避けてください。倒れる方向は木の重心や枝の付き方で決まり、見た目の傾きどおりに倒れるとは限りません。建物・塀・車に当たれば損害が出ますし、電線に触れる作業は感電や停電につながる危険があります。電線に枝が触れている、あるいは触れそうな場合は、切る前に電力会社へ相談することが基本です。高い場所の作業をご自身で行う危険性は当サイトの高木剪定の危険性の解説記事でまとめています。無理のない範囲の線引きは、剪定のDIYと業者依頼の比較記事も参考にしてください。",
  },
  {
    q: "木が傾いているように見えます。すぐ切るべきでしょうか？",
    a: "傾きだけで判断はできません。もともと日当たりの方向へ伸びて傾いている木もあれば、根が持ち上がって傾き始めた木もあり、意味がまったく違います。確認すべき点は、根元の地面が盛り上がっていないか、幹の付け根に裂けやきのこ、大きな空洞がないか、以前と比べて傾きが増していないかという点です。地面の盛り上がりや付け根の異常があるなら、早めに業者へ相談してください。判断に迷う段階では、傾きの角度が分かる写真を撮って残しておくと、変化の有無を後から比べられます。木の状態の見極めは当サイトの枯れたように見える庭木の解説記事も参考になります。",
  },
  {
    q: "伐採した太い幹の処分も依頼できますか？敷地に置いておくこともできますか？",
    a: "処分まで対応する業者が一般的で、伐採110番のように木材処分を含めて一括で任せられるサービスもあります。一方で、敷地に余裕があれば、切った材を敷地内に残す選択もできます。その場合は費用の扱いが変わることがあるため、見積もりの段階で相談してください。ただし、太い材をそのまま置いておくと、湿った状態が続いて虫が集まったり、腐って崩れたりすることがあります。置く場所と期間を決めておくことをおすすめします。切り株を残す場合の注意点は当サイトの切り株の放置リスクの解説記事でまとめています。",
  },
  {
    q: "高いところの剪定を依頼するとき、業者の保険は確認したほうがよいですか？",
    a: "確認しておくことをおすすめします。高所作業では、切った枝が落ちて屋根や車を傷つける、隣家の敷地に落ちるといったことが起こり得ます。作業中の事故や物損に備えた保険に加入しているかを、依頼前にご確認ください。剪定110番は請負賠償保険への加入を当サイトの各社紹介ページ作成時に確認しています。あわせて、隣家に面した枝を切る場合は、事前に一言伝えておくと当日のやり取りが穏やかに進みます。境界まわりの枝の扱いは当サイトの枝の越境の解説記事が参考になります。",
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
      "【2026年最新】山形の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "山形で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
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
      label: "1｜山形で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "山形の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#yashikirin", label: "2｜屋敷林・防風林は減らす前に役割を確認します" },
    { href: "#kiken-mikata", label: "3｜大きな木の危険は、高さよりも傾き・付け根・張り出しに表れます" },
    { href: "#kousho", label: "4｜高所・大径木の作業は、作業体制と方法まで確認して依頼します" },
    { href: "#junban", label: "5｜一度にすべて行わず、順番と予算を決めて数年かけて進めます" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
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
              【2026年最新】山形の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              山形で庭業者を探すご相談には、「家のまわりの木立が大きくなりすぎて、自分では手が出せない」「祖父の代から残る木を切るべきかどうか決めかねている」といった、大きく育った木の扱いに関する悩みが多く見られます。家のまわりに木立を残してきた住まいでは、木は景観や風よけとしての役割を持つ一方、育ちすぎた木は屋根や電線に近づき、倒木や落枝のおそれが生じます。また、大きな木は手入れをしない年が続くほど作業が難しくなり、費用も上がっていきます。
            </p>
            <p>
              本記事では、山形市内から依頼できる主要な庭業者を、当サイト編集部が各社紹介ページの作成時に調査した料金・サービス内容をもとに比較しています。あわせて、木立の役割を確認してから減らす順番を決める考え方、危険の見分け方は高さではなく傾き・付け根・張り出しにあること、高所・大径木の作業を依頼する際の確認事項、一度にすべて行わず数年かけて進める計画の立て方など、大きな木がある家に合った依頼の考え方も解説します。業者選びの参考としてご活用ください。
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
          <H2 id="yamagata5" num="1">山形で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            山形市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社紹介ページの作成時に公式サイト等で確認した掲載値です（2026年8月21日時点・公式サイト確認）。実際の総額は樹種・本数・木の大きさ・庭の状況で変わるため、必ず作業前に見積もりで確認してください。高所作業や大きな木の伐採に対応できるかは業者・加盟店により異なるため、依頼時にあわせてご確認ください。なお、お庭マスター（現：お庭レスキュープロ）は全国47都道府県を対応エリアとしています（公式表記）。本ページではカード紹介に含めず、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            山形の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年8月21日時点・公式サイト確認の掲載内容であり、樹種・本数・面積・木の大きさ・庭の状況により総額は変動します。高所作業や大径木の特殊伐採の料金は各社の掲載値に含まれないため、見積もり時にご確認ください。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、山形での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜屋敷林の役割 */}
          <H2 id="yashikirin" num="2">屋敷林・防風林は減らす前に役割を確認します</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            家のまわりを木立が囲む住まいでは、木は景色をつくるだけでなく、
            <Hl>風を弱める・視線をさえぎる・夏の日差しを和らげる</Hl>
            といった役割を担っていることがあります。手入れが負担になったからといってまとめて切ってしまうと、これまで木立が受け止めていた風や日差しなどの影響が、一度に家へ及ぶことになります。特に風は影響が分かりやすく、
            <Hl>風上側の列を切ったあと、残した木に直接風が当たるようになる</Hl>
            という問題が起こります。減らすこと自体は選択肢の一つですが、どこから減らすかによって結果が変わる点を事前に把握しておくことが大切です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            減らす順番を決める際の基準は、<Hl>危険につながる理由がある木から手をつける</Hl>ことです。家の屋根に枝がかかっている木、電線に近づいている木、傾きや付け根の傷みがある木、隣家側へ大きく張り出している木は、役割の有無にかかわらず優先して相談することをおすすめします。一方、風を受け止めている列や、目隠しとして機能している木は、代わりの対策を決めてから手を入れるほうが安全です。目隠しの考え方は
            <Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の解説記事</Link>
            、生垣とフェンスの比べ方は
            <Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較記事</Link>
            が参考になります。隣家に張り出した枝の扱いは
            <Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境の解説記事</Link>
            でまとめています。
          </p>

          {/* 3｜危険の見方 */}
          <H2 id="kiken-mikata" num="3">大きな木の危険は、高さよりも傾き・付け根・張り出しに表れます</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大きな木に不安を感じる主な理由は高さです。しかし、
            <Hl>危険の原因は高さそのものではなく、木を支える部分が弱っていること</Hl>
            です。確認すべき場所は三つあります。一つ目は根元で、地面が片側だけ盛り上がっていないか、根が浮いていないかを確認します。二つ目は幹の付け根から下部で、大きな裂け目、深い空洞、きのこが出ていないかを確認します。三つ目は枝の張り出しで、片側にだけ重く伸びた枝があると、風や雪の力が偏ってかかります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            これらは<Hl>一度の確認で終わらせず、変化を継続して確認することが重要です</Hl>。同じ位置から写真を撮って残しておけば、傾きが進んでいるのか、去年と変わらないのかを比べられます。強い風のあとに枝が落ちた、幹の周りに木くずが溜まっているといった変化も、状態を知らせる手がかりです。木の見極めは
            <Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">枯れたように見える庭木の解説記事</Link>
            、幹や枝に入る虫や病気の影響は
            <Link href="/niwaki-byogaichu/" className="text-[#2D7F3E] underline">庭木の病害虫の解説記事</Link>
            でまとめています。風の強い時期に備えた点検は
            <Link href="/taifu-niwaki-taisaku/" className="text-[#2D7F3E] underline">台風前後の庭木対策の解説記事</Link>
            も参考にしてください。
          </p>

          {/* 4｜高所作業の頼み方 */}
          <H2 id="kousho" num="4">高所・大径木の作業は、作業体制と方法まで確認して依頼します</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大きな木の作業は、<Hl>切る技術よりも、倒す方向と落とす順番を制御できるかどうか</Hl>で結果が分かれます。周囲に空き地があってまっすぐ倒せる木と、建物や塀に囲まれていて上から少しずつ切り下ろすしかない木とでは、必要な人数も機材も費用も大きく異なります。依頼する際は、何人体制で行うのか、ロープや高所作業車をどう使うのか、隣家側へ枝を落とさないためにどう養生するのかを確認しておいてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            あわせて確認すべきなのが<Hl>保険への加入と、作業後の木材の扱い</Hl>です。落枝や倒木で建物・車に損害が出る可能性のある作業では、保険の有無が重要な確認事項になります。剪定110番は請負賠償保険への加入を当サイトの各社紹介ページ作成時に確認しています。切った木材の処分費が見積もりに含まれているか、搬出経路が確保できるかも、総額に直結する要素です。伐採と抜根の違いは
            <Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違いの解説記事</Link>
            、切り株を残す場合の注意点は
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            、枝の処分方法は
            <Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝の処分の解説記事</Link>
            でまとめています。伐採110番では大木・危険木の特殊伐採から処分まで一括で相談でき、見積もりは無料です。
          </p>

          {/* 5｜順番と予算 */}
          <H2 id="junban" num="5">一度にすべて行わず、順番と予算を決めて数年かけて進めます</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            大きな木が何本もある敷地では、まとめて手を入れようとすると金額が大幅に上がります。一方で、毎年何もしなければ木はさらに大きくなり、次に依頼する際の費用は上がっていきます。現実的な方法は、
            <Hl>危険の高い木から順に、年ごとに予算を決めて進めること</Hl>
            です。今年は屋根にかかった1本、来年は電線に近づいている1本というように区切れば、年ごとの費用を平準化できます。この進め方をとる場合は、複数年で計画していることを業者にも伝えておくと、順番の提案を受けやすくなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            もう一つ有効なのが、<Hl>残す木を管理できる大きさにとどめること</Hl>です。手が届く範囲に収まっている木は、定期的な剪定で維持でき、大がかりな作業が不要です。手入れの間隔が空くほど作業は重くなるため、定額制の年間管理プランのようにあらかじめ定期的に手入れが行われる形にしておく方法もあります。造園業者と植木屋の違いや依頼先の考え方は
            <Link href="/zoen-uekiya-chigai/" className="text-[#2D7F3E] underline">造園業者と植木屋の違いの解説記事</Link>
            、見積書のどこを見るべきかは
            <Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">庭の見積もりの見方の解説記事</Link>
            、一年の作業の並べ方は
            <Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュールの解説記事</Link>
            を参考にしてください。
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
            山形で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。幹の太い木や家・電線に近い木の処理は特殊伐採から処分まで一括対応の伐採110番、本数の多い敷地で今年の作業対象を絞る場合は本数単位の剪定110番、対応できる木の大きさや機材を予約前に確認して選ぶ場合はくらしのマーケット、手入れの間隔を空けずに管理できる大きさにとどめたい場合は定額制のsmileガーデン、木の根元まわりの下草を片付けて作業の足元を整える場合は面積単価の草刈り110番というように、目的によって適したサービスは異なります。大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            大きな木がある家では、判断を先送りするほど作業も費用も負担が大きくなります。木立の役割を確認してから減らす順番を決めること、危険は高さではなく傾き・付け根・張り出しに表れると理解して変化を写真で記録すること、高所や大径木の作業は保険と作業体制まで確認して依頼すること、一度にすべて行わず年ごとに予算を区切って進めること、処分費と搬出経路まで含めた総額を作業前に確認することを、依頼前にご確認ください。本記事の比較を参考に、敷地の状況に合った業者をお選びください。
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
