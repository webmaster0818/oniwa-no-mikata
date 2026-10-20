import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/fukushima/";
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
      "【2026年最新】福島の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "福島で剪定・伐採・草刈りを依頼できる庭業者を比較。剪定110番・伐採110番・草刈り110番・smileガーデン・くらしのマーケットの料金と特徴に加え、転居や二拠点生活で留守がちな家の庭を定期巡回で管理する考え方、近隣への影響から優先順位を決める方法を中立的に解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】福島の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "福島で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。留守がちな家の庭は近隣への影響から優先順位を決めること、定期巡回の間隔と報告方法の決め方、立ち会えない場合の段取り、庭の作りを留守向きに変える方法も解説します。",
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
    slug: "smile-garden",
    num: "1-1",
    catch: "定額制の年間管理・写真付き報告書",
    name: "smileガーデン",
    officialUrl: "https://www.smile-garden1128.com/",
    image: "/images/smile-garden-features.png",
    intro: (
      <>
        smileガーデンは、全国展開のフランチャイズ型お庭メンテナンスサービスです。公式掲載の実績値として
        <Hl>年間実績3万件・リピート率95%以上</Hl>
        を掲げ、<Hl>定額制の年間管理プラン</Hl>
        で剪定・消毒・施肥をセットで任せられます。家を空けがちな住まいでは、
        <Hl>気づいたときに依頼する方法そのものが成り立ちにくい</Hl>
        という事情があります。年間の予定として組み込んでおけば、現地の状況を確認してから手配するという手順が不要になります。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れるため、現地に行かなくても仕上がりを確認できます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "現地の様子を見ずに年間の予定として任せたい方",
      "作業の仕上がりを写真で確認したい方",
      "剪定・消毒・施肥をセットでまとめたい方",
      "手配と日程調整の連絡を減らしたい方",
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
      "年間管理プラン、見積もり・出張費無料、年間実績3万件・リピート率95%以上という実績値、料金表の目安単価は、2026年10月19日に公式サイトで確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。立ち会いなしの作業への対応可否や、鍵・水道の扱いは加盟店ごとに条件が異なるため、契約前にご確認ください。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-2",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.sharing-tech.co.jp/kusakari/",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。留守がちな家で最も早く目に見える変化が出るのは草であり、
        <Hl>次に訪れたときには手に負えない状態になっている</Hl>
        ことも珍しくありません。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        まで依頼できるため、その場を整えるだけでなく、次に伸びるまでの期間を延ばすことも可能です。
        <Hl>定期メンテナンスプラン</Hl>
        で回数と時期を決めておけば、訪問の予定とは切り離して管理できます。
      </>
    ),
    recommend: [
      "訪問の予定と関係なく草刈りを定期的に依頼したい方",
      "次に来るまでの間に伸びすぎるのを防ぎたい方",
      "刈るだけでなく生えにくい状態にしたい方",
      "庭や空き地の雑草を低価格で処理したい方",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり600円〜", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトの各社紹介ページ作成時に確認しています。表示は最低単価であり、草丈が伸びきっている場合は単価が変わることがあります。留守中に草が伸びてから依頼すると単価も上がりやすいため、間隔を決めて定期的に依頼するほうが、結果的に費用を抑えやすくなります。面積と草の状態で総額が変わるため、見積もりでご確認ください。",
  },
  {
    slug: "sentei-110ban",
    num: "1-3",
    catch: "1本2,890円〜・24時間365日受付",
    name: "剪定110番",
    officialUrl: "https://www.sharing-tech.co.jp/sentei/",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国4,000社以上の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、福島市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        という本数単位の料金体系で、
        <Hl>受付は24時間365日</Hl>
        です。離れた場所から手配する場合、日中に電話をかける時間が取りにくいこともあるため、時間を選ばずに相談を始められる点は実務上の利点です。現地調査・見積もりは無料です。
      </>
    ),
    recommend: [
      "離れた場所から時間を選ばず相談を始めたい方",
      "隣家側へ張り出した枝だけを整えたい方",
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
      "当サイトの各社紹介ページ作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。現地調査に立ち会いが必要かどうかは加盟店により異なるため、留守がちな場合は最初に伝えて調整してください。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "kurashi-no-market",
    num: "1-4",
    catch: "口コミで比較・料金事前明示",
    name: "くらしのマーケット",
    officialUrl: "https://curama.jp/",
    image: "/images/kurashi-no-market-features.png",
    intro: (
      <>
        くらしのマーケットは、みんなのマーケット株式会社が運営する暮らしのサービス比較プラットフォームです。剪定・草刈り・伐採・造園などの庭のお手入れについて、
        <Hl>地域の業者を口コミ・評価・料金で比較して直接予約</Hl>
        できます。<Hl>やり取りがメッセージで残る</Hl>
        ため、立ち会えない作業でも「どこまで刈るか」「刈った草をどうするか」を文字で共有でき、当日の行き違いを減らせます。
        <Hl>料金は出店者ごとに事前に明示</Hl>
        され、<Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "作業範囲をメッセージで文字に残しておきたい方",
      "立ち会いなしでも受けてくれる出店者を探したい方",
      "口コミを見て自分で地域の業者を選びたい方",
      "万が一の補償制度を重視する方",
    ],
    table: [
      { k: "料金の特徴", v: "出店者ごとに事前明示", note: "口コミ・実績と合わせて比較" },
      { k: "予約", v: "オンラインで完結", note: "業者と直接メッセージ可" },
      { k: "補償", v: "トラブル時の費用補償制度あり" },
      { k: "運営会社", v: "みんなのマーケット株式会社" },
    ],
    memo:
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトの各社紹介ページ作成時に確認しています。立ち会いなしの作業を受けるかどうかは出店者ごとに方針が異なるため、予約前にメッセージで確認することをおすすめします。作業前後の写真を送ってもらえるかもあわせて相談しておくと、仕上がりを確認しやすくなります。",
  },
  {
    slug: "bassai-110ban",
    num: "1-5",
    catch: "伐採・抜根専門・処分まで一括",
    name: "伐採110番",
    officialUrl: "https://www.sharing-tech.co.jp/baxtusai/",
    image: "/images/bassai-110ban-features.png",
    intro: (
      <>
        伐採110番は、伐採・抜根に特化した専門サービスです。庭木の伐採から
        <Hl>大木・高木・危険木の特殊伐採</Hl>
        、重機を使った大規模作業まで対応し、
        <Hl>伐採後の木材処分まで一括で任せられる</Hl>
        のが特徴です。日常的に目が届きにくい家では、木が道路側や隣家側へ張り出したまま気づかれずに大きくなることがあります。
        <Hl>本数を減らして管理の対象そのものを小さくする</Hl>
        判断は、通う頻度が下がっている家ほど効果があります。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "通う頻度に対して木が多すぎると感じている方",
      "道路側・隣家側へ張り出した木を整理したい方",
      "伐採した木材の処分まで一括で依頼したい方",
      "抜根して手のかからない状態にしたい方",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトの各社紹介ページ作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。切った木材を敷地内に残す場合は、置き場所と期間も決めておいてください。",
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
    point: "口コミ・評価で比較・メッセージで事前相談・トラブル時の費用補償制度",
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
    t: "① 留守中に問題になりやすい場所から優先順位を付ける",
    b: "家を空けがちな住まいの庭では、庭全体をきれいに保つことより、放置すると敷地の外へ影響が出る場所への対応を優先します。道路や歩道にはみ出す枝、隣家側へ伸びる枝と草、側溝をふさぐ落ち葉、郵便受けや門扉のまわりを先に挙げ、それ以外は後回しにすると決めておくことをおすすめします。優先順位を書き出して業者と共有しておけば、予算が限られていても、対応すべき場所には手が入っている状態を保てます。",
  },
  {
    t: "② 立ち会えない前提の条件を、見積もりの段階で確定する",
    b: "留守中の作業では、当日その場で相談できない分、事前に決めておくことが増えます。敷地への出入り口、門扉の施錠の有無、作業車を停める場所、水道や電気の使用可否、刈った草や切った枝の処理方法を、見積もりの段階で確定させておいてください。一つでも決まっていないと、当日に作業が止まって再訪問となり、その分の費用がかかることもあります。",
  },
  {
    t: "③ 作業範囲と報告方法を、記録の残る形で共有する",
    b: "立ち会えない作業では、仕上がりの確認が後日になります。そのため、作業範囲を文字で残し、作業後の報告方法を事前に決めておく必要があります。区画の名前や写真で範囲を示し、含む作業と含まない作業を書き出して、メールやメッセージなど記録の残る形でやり取りしてください。作業前後の写真を送ってもらえるか、報告書が発行されるかも確認しておけば、次回の依頼内容を決める際の材料になります。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較し、継続して依頼できる業者かを確認する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較してください。留守がちな家の庭は一度の作業では終わらず、数年にわたって依頼を続けることになります。そのため、金額だけでなく、連絡が取りやすいか、質問に具体的に答えてくれるか、報告の方法を相談できるかも確認しておくことをおすすめします。納得できない場合は、その場で契約せず、一度持ち帰って検討することもできます。",
  },
];

const faqs = [
  {
    q: "転居して家を空けています。立ち会えなくても庭の作業を依頼できますか？",
    a: "立ち会いなしの作業を受ける業者はありますが、条件は業者ごとに異なります。確認すべき点は、敷地への出入り方法（門扉の鍵、通用口の場所）、作業車を停める場所、水道や電気を使う必要があるかどうか、作業後の報告方法、支払い方法の五つです。特に鍵の扱いは慎重に決める必要があり、鍵を預けずに済む段取りが組めるかを先に相談してください。くらしのマーケットのように予約前にメッセージでやり取りできる仕組みであれば、これらの条件を文字で確認したうえで依頼できます。住む方がいなくなった家の庭の扱いは、当サイトの空き家の庭の管理の解説記事も参考になります。",
  },
  {
    q: "近所の方から草や枝について指摘を受けました。どう対応すればよいですか？",
    a: "まずは指摘のあった場所を具体的に確かめてください。道路や歩道にはみ出した枝、隣家の敷地へ伸びた枝、境界沿いに繁った草など、外へ影響が出ている部分は優先度が高い項目です。すぐに現地へ行けない場合でも、業者に写真で状況を確認してもらい、その部分だけを先に処理するよう依頼できます。あわせて、伸びきる前に手が入るよう間隔を決めた定期の依頼に切り替えると、同様の指摘を防ぎやすくなります。隣家に張り出した枝の扱いは当サイトの枝の越境の解説記事、境界まわりの考え方は敷地境界と塀の解説記事で解説しています。",
  },
  {
    q: "定期巡回として依頼する場合、どのくらいの間隔が目安になりますか？",
    a: "一律の目安はありませんが、決め方の考え方はあります。草は時期によって伸びる速さが変わるため、年間を通じて同じ間隔にする必要はありません。伸びる時期は回数を多めに、それ以外の時期は少なめに配分し、1年間運用したうえで、訪れたときの伸び具合をもとに翌年の間隔を調整する方法が現実的です。庭木の剪定は草刈りより間隔が長くなるのが一般的で、草刈りの予定に剪定を組み込む形で年間計画を作ると管理しやすくなります。年間の作業計画は当サイトの庭仕事の年間スケジュールの解説記事が参考になります。",
  },
  {
    q: "作業の仕上がりを、現地へ行かずに確認する方法はありますか？",
    a: "作業前後の写真を送ってもらう方法が確実です。依頼の段階で「作業前と作業後の写真をお願いしたい」と伝えておけば、多くの業者が対応しています。smileガーデンは写真付きの作業報告書を提供しており、この確認方法があらかじめ仕組みに含まれています。写真を依頼する際は、庭全体の写真だけでなく、気になっている場所（道路側、隣家側、玄関まわりなど）を指定しておくと、確認すべき点が明確になります。受け取った写真は保存しておき、次回の依頼で「前回と同じ範囲で」と伝える際の資料としてご活用ください。",
  },
  {
    q: "水道や電気が使えない状態でも作業してもらえますか？",
    a: "作業内容によります。草刈りや剪定は機材を持ち込んで行うため、水道や電気が使えなくても進められることが多い一方、道具の洗浄や高圧洗浄をともなう作業では水が必要になります。また、刈った草や切った枝を敷地内に置けない場合は、持ち帰りの費用が発生します。使えない設備がある場合は、見積もりの前に伝えておいてください。伝えないまま当日を迎えると、作業の一部ができずに再訪問となり、余計な費用がかかることがあります。",
  },
  {
    q: "通う頻度が読めないので、庭の作りごと手のかからない形に変えたいです。",
    a: "手入れの必要量を減らす方向の対策は有効です。草の生える面積を砂利や防草シートで減らす、通路や物置まわりなど植物が不要な場所から順に覆う、伸びの早い木や落ち葉の多い木を手のかからない木に置き換える、といった方法が基本になります。初期費用はかかりますが、通えない期間が長いほど効果が大きくなります。方法ごとの費用と向き不向きは当サイトの雑草対策の比較記事と防草シートの解説記事、落ち葉の少ない木の選び方は落ち葉の少ない庭木の解説記事で解説しています。竹が入り込んでいる場合は早めの対処が必要で、竹の対策の解説記事が参考になります。",
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

export default function AreaFukushimaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】福島の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "福島で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "福島の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#fukushima5",
      label: "1｜福島で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "福島の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kinrin", label: "2｜留守がちな家の庭は、敷地の外へ影響が出る場所から対応します" },
    { href: "#junkai", label: "3｜定期巡回を依頼する際の間隔と報告方法の決め方" },
    { href: "#tachiai", label: "4｜立ち会えない場合の段取りは見積もりの段階で確定します" },
    { href: "#rusu-muki", label: "5｜通う頻度が定まらない場合の、留守向きの庭づくり" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
    { href: "#faq", label: "7｜福島の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">福島の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】福島の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              {["福島", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="福島の剪定・伐採・草刈り業者の比較"
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
              福島で庭業者を探すご相談には、「仕事の都合で家を空けており、たまに戻ると庭が手に負えなくなっている」「近所の方に迷惑をかけていないか気になるが、頻繁には行けない」といった、留守がちな家の庭をどう管理するかという事情が関わることがあります。日常的に手を入れていない庭では、草も枝も気づかないうちに伸び、道路側や隣家側へ影響が出始めます。また、現地にいない分、状況を確認してから業者を手配するという通常の手順を踏みにくく、対応が遅れやすい点も課題です。
            </p>
            <p>
              本記事では、福島市内から依頼できる主要な庭業者を、当サイト編集部が各社紹介ページの作成時に調査した料金・サービス内容をもとに比較しています。あわせて、敷地の外へ影響が出る場所から優先順位を決める考え方、定期巡回として依頼する際の間隔と報告方法、立ち会えない場合に決めておく段取り、庭の作りを留守向きに変える方法など、家を空けがちな住まいに合った依頼の考え方も解説します。業者選びの参考としてご活用ください。
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
          <H2 id="fukushima5" num="1">福島で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            福島市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社紹介ページの作成時に公式サイト等で確認した掲載値です（2026年8月21日時点・公式サイト確認）。実際の総額は面積・草の状態・樹種・本数で変わるため、必ず作業前に見積もりで確認してください。立ち会いなしの作業に対応できるかは業者・加盟店により異なるため、依頼時にあわせてご確認ください。なお、お庭マスター（現：お庭レスキュープロ）は全国47都道府県を対応エリアとしています（公式表記）。本ページではカード紹介に含めず、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            福島の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年8月21日時点・公式サイト確認の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。立ち会いなしの作業や定期巡回の条件は各社の掲載値に含まれないため、見積もり時にご確認ください。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、福島での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜外への影響 */}
          <H2 id="kinrin" num="2">留守がちな家の庭は、敷地の外へ影響が出る場所から対応します</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            日常的に人がいない家の庭では、すべてをきれいに保とうとすると、費用も手配の手間も継続が難しくなります。優先すべきは、
            <Hl>敷地の外へ影響が出る場所</Hl>
            です。道路や歩道にはみ出す枝、隣家側へ伸びる枝と草、側溝をふさぐ落ち葉、門扉や郵便受けのまわりが荒れると、住んでいる方よりも先に周囲が影響を受けます。一方、建物の裏手や敷地の内側は、多少伸びていても外への影響はほとんどありません。
            <Hl>この線引きを明確にすることで、限られた予算の使い道が決まります</Hl>
            。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            もう一つ留意すべき点は、<Hl>荒れた状態が長く続くほど、元に戻す費用が上がる</Hl>という点です。草丈が伸びきってから刈れば手間が増えて単価も上がり、枝が太くなってから切れば作業も処分も重くなります。気づいたときに依頼するのではなく、外へ影響が出る場所だけでも間隔を決めて定期的に依頼するほうが、結果として費用は安定します。隣家に張り出した枝の扱いは
            <Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境の解説記事</Link>
            、境界まわりの考え方は
            <Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の解説記事</Link>
            、住む方がいなくなった家の庭の扱いは
            <Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の解説記事</Link>
            でまとめています。
          </p>

          {/* 3｜定期巡回 */}
          <H2 id="junkai" num="3">定期巡回を依頼する際の間隔と報告方法の決め方</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            留守がちな家の庭の管理に適しているのは、その都度手配する形ではなく、
            <Hl>あらかじめ間隔を決めて定期的に作業してもらう形</Hl>
            です。現地の状況を確認してから依頼するという手順が不要になり、伸びきる前に手が入るため単価も安定します。間隔は年間一律にする必要はなく、草の伸びる時期は回数を多めに、それ以外の時期は少なめに配分する方法が現実的です。1年間運用したうえで、訪れたときの伸び具合をもとに翌年の間隔を調整してください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            同時に決めておくべきなのが<Hl>報告方法</Hl>です。立ち会わない作業では、作業完了を何で確認するかを事前に決めておかないと、支払いだけが進んで実態が把握できなくなります。作業前後の写真の送付や報告書の発行といった方法を、依頼の段階で相談してください。smileガーデンは写真付きの作業報告書を提供しており、草刈り110番には回数と時期を決める定期メンテナンスプランがあります。年間の作業計画は
            <Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュールの解説記事</Link>
            、落ち葉の時期の備えは
            <Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策の解説記事</Link>
            が参考になります。
          </p>

          {/* 4｜立ち会いなしの段取り */}
          <H2 id="tachiai" num="4">立ち会えない場合の段取りは見積もりの段階で確定します</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            当日その場で相談できない分、留守中の作業では
            <Hl>事前に決めておくべきことが増えます</Hl>
            。敷地への出入り方法と鍵の扱い、作業車を停める場所、水道や電気を使う必要があるか、刈った草や切った枝を敷地内に置いてよいか、支払い方法が決まっていないと、当日に作業が止まって再訪問となり、余計な費用がかかります。特に鍵の扱いは慎重に決めるべき項目であり、鍵を預けずに済む段取りが組めるかを先に相談してください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            あわせて、<Hl>作業範囲を文字と写真で残す</Hl>ことも必要です。区画の名前と場所を示し、含む作業と含まない作業（草の持ち帰り、生垣の刈り込み、側溝まわりなど）を書き出して、記録の残る形で共有しておきます。くらしのマーケットのように予約前からメッセージでやり取りできる仕組みは、この点で利用しやすい形式です。住む方が不在の家では、庭が荒れていること自体が外から見た印象に影響することもあります。防犯の観点での庭の見せ方は
            <Link href="/niwa-bohan/" className="text-[#2D7F3E] underline">庭の防犯対策の解説記事</Link>
            、虫の巣ができてしまった場合の対処は
            <Link href="/niwaki-hachinosu/" className="text-[#2D7F3E] underline">庭木の蜂の巣の解説記事</Link>
            でまとめています。
          </p>

          {/* 5｜留守向きの庭 */}
          <H2 id="rusu-muki" num="5">通う頻度が定まらない場合の、留守向きの庭づくり</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            依頼の回数を増やす方法は分かりやすい解決策ですが、通えない期間が長く続く場合は、
            <Hl>庭そのものが求めてくる手入れの量を減らす</Hl>
            ほうが根本的な対策になります。草の生える面積を砂利や防草シートで減らす、伸びの早い木や落ち葉の多い木を手のかからない木に置き換える、本数そのものを減らすといった方法は、初期費用がかかる一方で、以後の依頼の回数と金額を抑えられます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            すべてを一度に変える必要はありません。<Hl>外へ影響が出る場所から順に手を入れる</Hl>方法が効率的です。道路際、隣家との境界沿い、門扉まわりを先に手のかからない状態にしておけば、それだけでも懸念は少なくなります。方法ごとの費用と向き不向きは
            <Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の比較記事</Link>
            と
            <Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>
            、砂利敷きの進め方は
            <Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの解説記事</Link>
            でまとめています。木の選び直しは
            <Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の解説記事</Link>
            と
            <Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉の少ない庭木の解説記事</Link>
            、竹が入り込んでいる場合は
            <Link href="/take-taisaku/" className="text-[#2D7F3E] underline">竹の対策の解説記事</Link>
            が参考になります。本数を減らす場合、伐採110番では伐採から抜根・処分まで一括で相談でき、見積もりは無料です。
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
          <H2 id="faq" num="7">福島の庭業者でよくある質問</H2>
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
            福島で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。現地を見ずに年間の予定として任せ、写真で仕上がりを確認したい場合は定額制で報告書のあるsmileガーデン、訪問の予定と切り離して草刈りを定期的に依頼する場合は定期プランのある草刈り110番、時間を選ばず相談を始めて庭木を本数単位で依頼する場合は剪定110番、作業範囲をメッセージで文字に残して依頼したい場合はくらしのマーケット、通う頻度に対して多すぎる木を減らす場合は処分まで一括対応の伐採110番というように、目的によって適したサービスは異なります。大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            留守がちな家の庭は、完璧な状態を目指すよりも、継続できる管理の形を作ることが大切です。敷地の外へ影響が出る場所から優先順位を決めること、その都度手配せず間隔を決めて定期的に依頼すること、報告方法を事前に決めて仕上がりを確認できるようにすること、鍵・駐車・水道・処分といった条件を見積もりの段階で確定させること、通えない期間が長い場合は庭の作りを手のかからない形に変えていくことを、依頼前にご確認ください。本記事の比較を参考に、住まいの状況に合った業者をお選びください。
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
              {["福島", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/smile-garden/", label: "smileガーデンの口コミ・評判" },
                { href: "/agents/kusakari-110ban/", label: "草刈り110番の口コミ・評判" },
                { href: "/akiya-niwa-kanri/", label: "空き家の庭の管理" },
                { href: "/eda-ekkyo/", label: "枝の越境トラブル" },
                { href: "/zasso-taisaku/", label: "雑草対策の比較" },
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
