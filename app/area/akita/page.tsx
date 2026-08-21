import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/akita/";
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
      "【2026年最新】秋田の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "秋田で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、雪の重みから庭木を守る冬囲いで「守る木を絞る」考え方、年齢とともに庭の管理を縮めていく進め方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】秋田の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "秋田で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。冬囲いは全部を守るより守る木を絞るほうが続くこと、体力に合わせて作業量そのものを見直す方法、庭木を減らす・低くする判断、離れて暮らす家族と分担する頼み方も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、秋田市内の依頼でも近隣の加盟店が対応します。料金が
        <Hl>剪定1本2,890円〜という本数単位</Hl>
        で示されるため、「今年はこの3本だけ」というように
        <Hl>手を入れる木を年ごとに絞って費用を調整する</Hl>
        使い方がしやすいのが特徴です。庭の管理を少しずつ軽くしていきたい家にとって、金額の予測が立てやすい料金体系といえます。現地調査・見積もりは無料で、24時間365日受け付けています。
      </>
    ),
    recommend: [
      "今年手を入れる木を絞って費用を調整したい人",
      "自分では登れなくなった木だけを頼みたい人",
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
      "当サイトのレビュー記事作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。冬囲いのように地域性のある作業に対応できるかは加盟店により異なるため、依頼時に作業内容を伝えて確認しましょう。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "bassai-110ban",
    num: "1-2",
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
        のが特徴です。毎年の冬支度が体力的に負担になっている木や、屋根まで届いて雪下ろしの邪魔になる木など、
        <Hl>「持ち続けること自体が負担になった木」を整理する</Hl>
        相談先になります。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "毎年の冬支度が負担になっている木を整理したい人",
      "屋根まわりに近づきすぎた木を減らしたい人",
      "伐採した木材の処分まで一括で頼みたい人",
      "抜根して手のかからない庭に作り替えたい人",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトのレビュー記事作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。雪の残る時期は作業できる日が限られることがあるため、日程には余裕を持って相談しましょう。",
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
        で剪定・消毒・施肥をセットで任せられます。毎回自分で業者を探して日程を調整する作業は、それ自体が負担になりがちです。
        <Hl>一年分の段取りを契約にまとめてしまえば、探す手間ごと預けられる</Hl>
        点が、庭の管理を軽くしたい家に向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れるため、離れて暮らす家族とも仕上がりを共有できます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "毎回の業者探しと日程調整をやめたい人",
      "一年を通して庭の手入れを定額で任せたい人",
      "離れて暮らす家族と作業内容を共有したい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。冬囲いなどの作業がプランに含まれるかは地域によって異なるため、秋田市内の対応可否とプラン内容は見積もり時に確認してください。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-4",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.kusakari110.com/",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。草刈りは体力の負担が大きく、
        <Hl>庭仕事のなかで最初に人手を借りたくなる作業</Hl>
        でもあります。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        まで頼めるため、「今年は刈ってもらう」だけでなく「来年から生えにくくする」方向にも進められます。
        <Hl>定期メンテナンスプラン</Hl>
        で回数と時期を決めておけば、そのつどの手配も不要になります。
      </>
    ),
    recommend: [
      "草刈りだけは人手を借りたいと考えている人",
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
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトのレビュー記事作成時に確認しています。表示は最低単価であり、草丈が伸びすぎている場合や障害物が多い場所では単価が変わることがあります。機械作業が中心のため狭い場所は苦手な場合があり、繁忙期は混み合います。面積と草の状態で総額が変わるため、見積もりで確認しましょう。",
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
        され、予約前にメッセージで相談できるため、冬囲いのような地域性のある作業を扱っているか、少ない本数でも受けてもらえるかを
        <Hl>予約前に確かめてから決められる</Hl>
        のが利点です。<Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "冬囲いに対応できる出店者を探したい人",
      "少ない本数・小さな範囲でも受けてくれる業者を探したい人",
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
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトのレビュー記事作成時に確認しています。出店者ごとに対応できる作業内容や最低受注の条件は異なるため、少量の依頼や冬囲いの取り扱いは予約前にメッセージで確認するのがおすすめです。",
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
    slug: "kusakari-110ban",
    name: "草刈り110番",
    type: "マッチング型",
    price: "草刈り1平米600円〜",
    point: "防草シート施工・定期メンテナンスプランあり",
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
    t: "① 「今年やること」を減らす前提で書き出してから相談する",
    b: "庭の手入れを業者に頼むとき、つい「去年までと同じ状態に戻す」ことを前提にしてしまいがちです。しかし、手をかけられる量が変わってきたなら、戻す範囲そのものを見直すほうが現実的です。庭を見回して、必ず手を入れたい場所、できれば整えたい場所、当面はこのままでよい場所の三つに分けて書き出しましょう。この分類を業者に渡せば、限られた予算をどこに使うかの相談がすぐに始められます。全部をお願いする前提で見積もりを取ると、金額を見てから諦める作業が出て、結局やり直しの相談になります。",
  },
  {
    t: "② 資材費・処分費・出張費まで含めた総額を作業前に確認する",
    b: "冬囲いのように資材を使う作業では、作業費のほかに縄や支柱などの費用が関わります。資材を業者が用意するのか自分で用意するのか、去年の資材を再利用できるのかで金額が変わるため、内訳を聞いておきましょう。剪定をあわせて頼むなら、切った枝の処分費と出張費まで含めた総額を確認します。「1本いくら」の表示は木の大きさや樹種で変わる目安のため、見積書に書かれた金額と、そこに含まれない費用の両方を確かめるのが確実です。",
  },
  {
    t: "③ 作業した内容を記録に残し、翌年の判断材料にする",
    b: "毎年少しずつ庭の管理を軽くしていくつもりなら、その年に何をどこまでやったかを残しておくことが効いてきます。見積書と作業後の写真を一か所にまとめておけば、翌年は「去年はここまでやった。今年はここを減らせるか」という具体的な相談ができます。作業報告書を出してくれる業者なら、そのまま記録として使えます。離れて暮らす家族が手配を引き継ぐ場合にも、この記録があるかないかで話の進み方がまったく変わります。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較し、断る選択肢も持っておく",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・資材や処分費の扱いを比べましょう。訪問して見積もりを出してもらうと断りにくく感じるものですが、その場で契約する義務はありません。金額や説明に納得できないときは、「家族と相談してから連絡します」と伝えて一度持ち帰るのが安全です。強く契約を迫る業者は、それ自体が見送る理由になります。",
  },
];

const faqs = [
  {
    q: "秋田で庭木の冬囲いだけを頼むことはできますか？資材は誰が用意しますか？",
    a: "冬囲いに対応する業者はありますが、すべてのサービスが扱っているわけではありません。全国型のマッチングサービスやプラットフォームでは、地域性のある作業の取り扱いが加盟店・出店者によって分かれます。依頼時には「冬囲いに対応できるか」「縄や支柱などの資材はどちらが用意するか」「去年の資材を再利用できるか」の三点を最初に確認しましょう。資材の扱いで金額が変わるため、ここを曖昧にしたまま進めると総額が読めません。くらしのマーケットのように予約前にメッセージで相談できる仕組みなら、対応可否を確かめてから予約できます。",
  },
  {
    q: "年齢とともに庭の手入れがつらくなってきました。どこから業者に任せればよいですか？",
    a: "優先すべきは、脚立に登る作業と、重いものを運ぶ作業です。高いところの剪定や、刈った草・切った枝の運び出しは、けがにつながりやすく、自分でやり続ける理由が乏しい作業といえます。逆に、地面に立ったままできる草取りや水やりは、無理のない範囲で続けても差し支えありません。まずは「登る作業」と「運ぶ作業」を業者に、「立ったままできる作業」を自分に、という線引きから始めるのが現実的です。高い場所の作業の危なさは当サイトの高木剪定の危険性の解説記事、自分でやるか業者に頼むかの判断は剪定のDIYと業者依頼の比較記事でまとめています。",
  },
  {
    q: "庭木を減らすことに抵抗があります。どのくらい減らせば管理が楽になりますか？",
    a: "何本という決まった数字はありません。判断の目安になるのは本数よりも、「その木に毎年どんな作業が必要か」です。脚立が要る、冬囲いが要る、落ち葉の片付けが要る——こうした作業が重なる木は、1本あるだけで負担が大きくなります。逆に、放っておいても形が乱れにくい木なら本数が多くても手間は増えません。全部を減らすのではなく、手のかかる木から順に検討するのが現実的です。木を減らす以外に、高さを抑えて手の届く範囲に収める方法もあります。管理の総量を段階的に縮める進め方は当サイトの庭じまいの解説記事が参考になります。",
  },
  {
    q: "冬囲いを外す作業も頼めますか？自分で外してもよいですか？",
    a: "外す作業自体を頼める業者は多く、契約時にまとめて依頼しておくのが確実です。自分で外すことも可能ですが、外す時期が早すぎると遅い雪や急な冷え込みで枝を傷めることがあり、遅すぎると芽の動きを妨げます。判断に迷う場合は、付ける作業と外す作業をセットで契約しておくと悩まずに済みます。また、外すときは高い位置の縄をほどく必要があることも多く、脚立作業になりがちです。この点でも、撤去まで頼んでおくほうが安全です。外す際に木の状態を見てもらえるよう頼んでおくと、傷みの発見も早くなります。",
  },
  {
    q: "冬の間に折れた枝は、いつ手を入れればよいですか？",
    a: "折れた枝が中途半端にぶら下がっている状態は、落下の危険がありますし、切り口が裂けたままだと木にも負担が残ります。危ないものは気づいた時点で相談し、そうでないものは雪が落ち着いてから枝の状態をまとめて見てもらうのが現実的です。枯れてしまったように見えても、葉が出る時期を待たないと判断できない場合があります。慌てて切らず、状態を写真に残して業者に見せましょう。見極めの目安は当サイトの枯れたように見える庭木の解説記事でまとめています。",
  },
  {
    q: "毎年同じ業者に頼みたいのですが、どう進めればよいですか？",
    a: "確実なのは、作業が終わったその場で次回の話をしておくことです。「来年も同じ時期にお願いしたい」と伝え、連絡の時期と方法を決めておけば、翌年に一から探し直す手間がなくなります。さらに進めて年間管理の契約にまとめれば、日程調整そのものを業者側の段取りに移せます。smileガーデンの定額制の年間管理プランのようなサービスは、この使い方に向いています。一年の作業を並べて考える方法は当サイトの庭仕事の年間スケジュールの解説記事が参考になります。",
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

export default function AreaAkitaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】秋田の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "秋田で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "秋田の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#akita5",
      label: "1｜秋田で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "秋田の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#mamoru-ki", label: "2｜冬囲いは「全部を守る」より「守る木を絞る」ほうが続く" },
    { href: "#sagyoryo", label: "3｜手をかけられる量が変わったら、庭の作業量から見直す" },
    { href: "#herasu", label: "4｜庭木を減らす・低くするのは「あきらめ」ではなく設計変更" },
    { href: "#kazoku", label: "5｜離れて暮らす家族と分担するなら「記録が残る頼み方」を" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜秋田の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">秋田の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】秋田の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["秋田", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="秋田の剪定・伐採・草刈り業者の比較"
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
              「毎年の冬囲いを続けてきたが、脚立に登るのがそろそろ怖い」「親が住む実家の庭を、どこまで手入れすればよいのか分からない」——秋田で庭業者を探す相談には、雪への備えと、庭を管理する側の事情が変わってきたことが同時に関わっているケースが少なくありません。雪の重みは庭木の枝を折り、形を崩します。一方で、その備えを毎年続けるには相応の体力と時間が要ります。この二つを両立させようとして、どこから手をつけるか決められないまま季節が過ぎてしまう——それが、この地域の庭仕事で起こりがちなつまずきです。
            </p>
            <p>
              本記事では、秋田市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「守る木を絞って冬囲いを続けやすくする考え方」「手をかけられる量が変わったときの見直し方」「庭木を減らす・低くするという設計変更」「離れて暮らす家族と分担するための記録の残し方」といった、管理の負担を減らしていくための依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="akita5" num="1">秋田で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            秋田市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月21日時点・公式サイト確認）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。冬囲いなど地域性のある作業の対応可否も、依頼時にあわせてご確認ください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            秋田の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月21日時点・公式サイト確認の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。冬囲いなど地域性のある作業の料金・対応可否は各社の掲載値に含まれないため、見積もり時にご確認ください。お庭マスターは関東エリア中心のサービスのため、秋田での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜守る木を絞る */}
          <H2 id="mamoru-ki" num="2">冬囲いは「全部を守る」より「守る木を絞る」ほうが続く</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            雪の重みは、枝を下へ押し下げ、支えきれなくなった枝を付け根から裂きます。だからこそ冬囲いが必要になるわけですが、庭にある木すべてに同じ手間をかけようとすると、費用も作業日数も膨らみ、何年も続けるのが難しくなります。長く続けるために有効なのは、
            <Hl>庭の木を「必ず守る木」と「傷んでも仕立て直せる木」に分けること</Hl>
            です。玄関先の目に入る木、家族が大切にしてきた木、代わりが利かない木には手をかけ、丈夫で回復の早い木や、多少形が崩れても気にならない木は簡単な処置にとどめる——この配分だけで、毎年の負担は目に見えて変わります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            もうひとつ確認したいのが、<Hl>屋根からの落雪が当たる位置に木がないか</Hl>です。落ちてくる雪は上から一気に加わるため、どんな囲い方をしても負担が大きくなります。毎年その木の枝を折られているなら、囲い方を工夫するより植え場所を見直したほうが根本的な解決になることがあります（
            <Link href="/niwaki-ishoku/" className="text-[#2D7F3E] underline">庭木の移植の解説記事</Link>
            へ）。枝を支える道具の考え方は
            <Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の解説記事</Link>
            、背の低い木の扱いは
            <Link href="/teiboku-kanri/" className="text-[#2D7F3E] underline">低木の管理の解説記事</Link>
            でまとめています。1本単位で頼める剪定110番のようなサービスなら、守る木だけを選んで相談することができます。
          </p>

          {/* 3｜作業量の見直し */}
          <H2 id="sagyoryo" num="3">手をかけられる量が変わったら、庭の作業量から見直す</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭仕事がつらくなってきたとき、多くの人はまず「今年は業者に頼もうか」と考えます。それも正しい判断ですが、同時に見直したいのが
            <Hl>庭そのものが求めてくる作業の量</Hl>
            です。手入れの必要な木が10本ある庭は、誰がやっても10本分の作業が発生します。人手を借りるだけでは、費用というかたちで負担が残り続けます。作業量を減らす方向にも手を打っておくと、依頼の費用そのものが年々小さくなっていきます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            具体的には、<Hl>草の生える面積を減らす</Hl>ことと、<Hl>手のかかる木を手のかからない木に置き換える</Hl>ことの二つが軸になります。通路や物置まわりなど、緑である必要のない場所を砂利や防草シートで覆えば、その区画は毎年の草刈りから外れます。初期の費用はかかりますが、数年単位で見れば作業も費用も減っていく方向の投資です。方法ごとの費用と向き不向きは
            <Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の比較記事</Link>
            と
            <Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>
            、砂利敷きの進め方は
            <Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの解説記事</Link>
            でまとめています。手のかかりにくい木への植え替えは
            <Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の解説記事</Link>
            が参考になります。
          </p>

          {/* 4｜減らす・低くする */}
          <H2 id="herasu" num="4">庭木を減らす・低くするのは「あきらめ」ではなく設計変更</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            長年育ててきた木を切ることには抵抗があるものです。ただ、放っておいて大きくなりすぎた木は、剪定に脚立や高所作業が必要になり、冬囲いも難しくなり、雪や風で折れたときの危険も増していきます。
            <Hl>「手が届く高さに収める」「本数を減らす」ことは、庭を維持し続けるための設計変更</Hl>
            であって、手入れをあきらめることとは違います。むしろ、残す木に手をかけられるようになるという意味では、庭を守る判断です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            進め方としては、一度にすべてを決めずに、<Hl>負担の大きい木から順に、年をまたいで手を入れる</Hl>のが現実的です。今年は高くなりすぎた1本を低く仕立て直し、来年は毎年冬囲いに手間取っている木を検討する——という具合です。高い場所の作業を自分でやることの危なさは
            <Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>
            、自分でやるか業者に頼むかの線引きは
            <Link href="/sentei-diy-gyosha/" className="text-[#2D7F3E] underline">剪定のDIYと業者依頼の比較記事</Link>
            でまとめています。伐採と抜根の違いや跡地の始末は
            <Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違いの解説記事</Link>
            と
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            を参考にしてください。伐採110番なら伐採から抜根・処分まで一括で相談でき、見積もりは無料です。
          </p>

          {/* 5｜家族と分担 */}
          <H2 id="kazoku" num="5">離れて暮らす家族と分担するなら「記録が残る頼み方」を</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭の管理を、住んでいる本人と離れて暮らす家族で分担するケースは珍しくありません。このとき問題になりやすいのが、
            <Hl>「何をどこまでやったか」が誰にも分からなくなること</Hl>
            です。電話で口頭のやり取りだけで進めると、支払った金額と作業内容が結び付かず、翌年の相談も一から始めることになります。見積書と作業後の写真を一か所にまとめておくだけで、この問題はかなり防げます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            <Hl>作業報告書を出してくれる業者を選ぶ</Hl>のも有効な方法です。smileガーデンは写真付きの作業報告書を提供しており、立ち会えなかった家族も仕上がりを確認できます。手配を家族が担当する場合は、支払い方法と連絡先の窓口をどちらにするかも最初に決めておきましょう。訪問販売や飛び込み営業への対応方針を家族で共有しておくことも、あわせて考えておきたい点です。人が住まなくなった家の庭をどう扱うかは
            <Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の解説記事</Link>
            、隣家との境界まわりで気をつける点は
            <Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境の解説記事</Link>
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
          <H2 id="faq" num="7">秋田の庭業者でよくある質問</H2>
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
            秋田で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。守る木を選んで1本単位で頼むなら剪定110番、負担になった木を整理して作業量そのものを減らすなら処分まで一括の伐採110番、毎回の業者探しと日程調整をやめて記録も残したいなら定額制で報告書のあるsmileガーデン、体力の要る草刈りを人手に任せて生えにくい状態にしていくなら面積単価の草刈り110番、冬囲いの対応や少量の依頼を予約前に確かめて選ぶならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            雪のある地域で庭を長く維持していくうえで大切なのは、「去年と同じことを毎年続ける」前提を一度外してみることです。守る木を絞って冬囲いを続けやすくすること、人手を借りるのと同時に庭の作業量そのものを減らしていくこと、大きくなりすぎた木は手の届く高さに戻すか本数を減らすかを検討すること、見積書と写真を残して翌年の判断材料にすること、資材費・処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭と暮らしの状況に合った業者を選んでください。
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
              {["秋田", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/yamagata/", label: "山形の庭業者おすすめ5選" },
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
                { href: "/agents/sentei-110ban/", label: "剪定110番の口コミ・評判" },
                { href: "/agents/bassai-110ban/", label: "伐採110番の口コミ・評判" },
                { href: "/niwajimai/", label: "庭じまいの進め方" },
                { href: "/teire-raku-niwaki/", label: "手入れが楽な庭木" },
                { href: "/takagi-sentei-kiken/", label: "高木剪定の危険性" },
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
