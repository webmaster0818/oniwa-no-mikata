import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/machida/";
const UPDATED = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

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
      "【2026年最新】町田の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "町田で剪定・伐採・草刈りを依頼できる庭業者5社を比較します。剪定110番（1本4,000円〜・税込）・草刈り110番（1平米163円〜・税込）・お庭マスター（剪定1本550円〜）などの料金と特徴、旗竿地の通路と道具の搬入、段ごとの依頼内容、手作業中心の見積もりの確認方法を編集部が中立の立場で解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】町田の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "町田で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。旗竿地の庭は通路の幅より曲がり角と段差で持ち込める道具が決まること、敷地内に段がある庭は段ごとに依頼内容を分けること、外から見えない庭は同じ三か所を同じ角度で撮影しておくこと、機械が入らない庭の見積もりでは作業人数と日数を確認することについても解説します。",
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
    catch: "1本4,000円〜（税込）・24時間365日受付",
    name: "剪定110番",
    officialUrl: "https://www.sharing-tech.co.jp/sentei/",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、町田市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本4,000円〜（税込）の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。機材が入りにくい奥まった庭で、気になる木を1本だけ小さく整えたいという依頼にも適しています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "機材が入りにくい庭で気になる木を1本単位で小さく整えたい方",
      "庭木1本から依頼したい方",
      "見積もり後の追加料金なしの明朗会計を重視する方",
      "剪定と合わせて伐採・草刈り・消毒も相談したい方",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "4,000円〜（税込）", note: "樹種・高さで変動" },
      { k: "出張費", v: "地域により別途の場合あり", note: "公式に金額の記載なし" },
      { k: "受付時間", v: "24時間365日" },
      { k: "見積もり", v: "現地調査・見積もり無料・追加料金なし" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "当サイトの各社紹介ページ作成時の調査で、剪定1本4,000円〜（税込）・出張費は地域により別途の場合あり・24時間365日受付・請負賠償保険加入を確認しています。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-2",
    catch: "1平米163円〜（税込）・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.sharing-tech.co.jp/kusakari/",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米163円〜（税込）の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>面積で費用の見当がつく</Hl>
        ため、通路の脇や階段でしか行けない段など、範囲を決めて依頼しやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        のほか、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "通路の脇や階段でしか行けない段の草を範囲を決めて片付けたい方",
      "面積で費用の見当をつけたい方",
      "草刈り後の防草シート施工まで相談したい方",
      "定期契約で雑草管理の手間をなくしたい方",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり163円〜（税込）", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米163円〜（税込）の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトの各社紹介ページ作成時に確認しています。機械作業が中心のため狭い場所には対応しにくい場合があり、夏場の繁忙期は予約が混み合います。面積と草の状態で総額が変わるため、見積もりでご確認ください。",
  },
  {
    slug: "bassai-110ban",
    num: "1-3",
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
        のが特徴です。重機が入らない敷地で大きくなりすぎた木の整理や、庭を作り替えるための抜根も、切り分けて搬出する方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "重機が入らない敷地で大きくなりすぎた木を整理したい方",
      "搬出経路が限られる木を切り分け方から相談したい方",
      "伐採した木材の処分まで一括で依頼したい方",
      "抜根して庭を作り替えたい方",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトの各社紹介ページ作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。",
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
        で剪定・消毒・施肥をセットで任せられます。手作業が中心になる庭では、回数と時期を決めて任せる形にしておくと、一度あたりの作業量を抑えられます。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "手作業が中心の庭を回数を決めて任せたい方",
      "一年を通して庭の手入れを定額で任せたい方",
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
      "年間管理プラン、見積もり・出張費無料、年間実績3万件・リピート率95%以上という実績値、料金表の目安単価は、2026年10月19日に公式サイトで確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。町田市内の対応可否とプラン内容は見積もり時に確認してください。",
  },
  {
    slug: "oniwa-master",
    num: "1-5",
    catch: "剪定1本550円〜・関東エリア中心",
    name: "お庭マスター",
    officialUrl: "https://oniwa-master.info/",
    image: "/images/oniwa-master-features.png",
    intro: (
      <>
        お庭マスターは、全国47都道府県を対応エリアとする（公式表記）職人品質のマッチング型サービスで、町田を含む関東は主力エリアです。
        <Hl>経験10年以上の職人が対応</Hl>
        し、中間マージンをカットすることで
        <Hl>剪定1本550円〜・伐採1本3,300円〜</Hl>
        という手頃な価格を実現しています。見積もり・出張は無料で、
        <Hl>施工後の保証</Hl>
        がある点も安心材料です。造園デザインの相談にも対応します。
      </>
    ),
    recommend: [
      "経験豊富な職人に手頃な価格で依頼したい方",
      "施工後の保証があるサービスを選びたい方",
      "剪定だけでなく庭のデザインまで相談したい方",
      "町田・関東エリアで業者を探している方",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心", note: "町田での対応可否は見積もり時にご確認ください" },
    ],
    memo:
      "剪定1本550円〜・伐採1本3,300円〜・見積もり出張無料・施工後保証あり・対応エリアは関東・関西・中部中心であることを当サイトの各社紹介ページ作成時に確認しています。最低価格は小さな低木などの場合の金額のため、樹種・高さによる総額を見積もりでご確認ください。",
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
    price: "剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）",
    point: "24時間365日受付・見積もり後の追加料金なし",
  },
  {
    slug: "kusakari-110ban",
    name: "草刈り110番",
    type: "マッチング型",
    price: "草刈り1平米163円〜（税込）",
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
    price: "剪定1本税込1,650円〜・草刈り1m²税込220円〜（公式の目安単価）",
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
    t: "① 通路と段差を「幅・曲がり角・段の数」まで測って事前に伝える",
    b: "「剪定」「伐採」「草刈り」のどれを依頼するかに加えて、道路から庭までの経路を伝えてください。最も狭い箇所の幅、曲がり角の内側の広さ、途中の段差の数と高さ、門扉や木戸の開く幅の四つが分かれば、業者は運び込める道具と必要な作業人数の見当をつけられます。写真は、道路に立って通路の奥を見た一枚、曲がり角を横から見た一枚、庭に立って通路側を振り返った一枚の三枚が役立ちます。敷地の中に段がある場合は、どの段へは階段でしか行けないのかもあわせて伝えてください。",
  },
  {
    t: "② 処分費・出張費を含めた総額を「人数と日数」まで確認して見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。機械が入らない庭では手作業の時間が総額を押し上げるため、入る人数と日数、そして出たものを道路まで運ぶ手間が料金に含まれるかどうかを確認してください。運び出しが別料金になっている場合もあります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料のため、金額を確認してから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "隣家側に伸びた枝は、境界を越えている部分の扱いに法律上の決まりがあるため、無断で切らず、先に確認することが基本です。隣家との境界がはっきりしない場所の木や、塀の所有関係が分からない場合は、土地家屋調査士などの専門家に相談する範囲です。擁壁や石積みそのものの傷みは土木・建築の業者が担当する範囲で、庭業者に依頼できるのはその上やそばに生えた草木の手入れまでです。歩道側の街路樹や植樹帯は道路を管理する自治体などの担当で、分譲地の入口や区画の間にある共用の緑地は管理組合や自治会の管轄になっていることがあります。庭業者に依頼する前に、手を入れてよい範囲と相談先を整理しておくと、後のトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。機材が入らない敷地での手作業に慣れているか、段ごと・場所ごとに分けた依頼を受けてくれるか、運び出しまで含めた金額を出してくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較することをおすすめします。通路の寸法と段差の情報を各社に同じように伝えると、条件をそろえて比較できます。金額や説明に納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
];

const faqs = [
  {
    q: "町田で庭木1本だけの剪定でも依頼できますか？",
    a: "依頼できます。剪定110番は庭木1本からの依頼に対応しており、剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。機材が入りにくい奥まった庭で気になる木を1本だけ小さく整えたいという依頼にも対応しています。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりでご確認ください。",
  },
  {
    q: "家の前まで作業車が入りません。作業を断られることはありますか？",
    a: "作業車が入れない場合でも、近くに停めて手で運ぶ形で対応してもらえることが一般的です。ただし運ぶ距離と段差の数によって手間が変わるため、見積もりの前に通路の幅・曲がり角・段差を伝えてください。駐車できる場所が近くにあるかどうかも事前に確認しておくと、日程が決まりやすくなります。事前に伝えないまま当日を迎えると、作業内容の変更や追加の相談が必要になることがあります。",
  },
  {
    q: "庭が段になっていて、下の段は階段でしか行けません。まとめて依頼できますか？",
    a: "まとめて依頼できますが、段ごとに手間が異なるため、見積もりも段ごとに分けてもらうほうが実態に合います。階段でしか行けない段は手で運ぶ作業が増え、同じ面積でも時間がかかります。草刈り110番は1平米163円〜（税込）の面積単価のため、段ごとに範囲を区切って依頼しやすいサービスです。擁壁や石積み自体の傷みは、庭業者ではなく土木・建築の業者にご相談ください。",
  },
  {
    q: "「一式」とだけ書かれた見積もりが来ました。どう確認すればよいですか？",
    a: "作業人数、日数、運び出しの有無の三点を確認すると、内訳の目安が分かります。あわせて、処分費と出張費が総額に含まれているかもご確認ください。説明を求めた際に具体的な回答があるかどうかは、業者を選ぶ判断材料にもなります。納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
  {
    q: "道路から庭が見えないので、何年も放置してしまいました。どこから依頼すればよいですか？",
    a: "まず、建物に近い木と、通路をふさいでいる草木から依頼することをおすすめします。屋根や壁に触れている枝、通路の頭上に垂れている枝、足元をふさぐ草の三つが片付けば、日常の危険は大きく減ります。高い木や傾いた木はご自身で触らず、業者に相談してください。作業の前後で同じ三か所を同じ角度から撮影しておくと、次回の依頼時期の目安にもなります。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応を掲げています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ずご確認ください。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。通路を手で運び出す庭では運搬の手間も金額に関わるため、処分費を含めた総額で確認しておくことをおすすめします。",
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

export default function AreaMachidaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】町田の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "町田で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-17T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "町田の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#machida5",
      label: "1｜町田で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "町田の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#hatazao", label: "2｜旗竿地の庭に持ち込める道具は「通路の幅」より「曲がり角と段差」で決まります" },
    { href: "#dansa", label: "3｜敷地内に段がある庭は、段ごとに依頼内容を分けます" },
    { href: "#mienai", label: "4｜外から見えない奥まった庭は、同じ三か所を同じ角度で撮影して記録します" },
    { href: "#ninzunissu", label: "5｜機械が入らない庭の見積もりでは「作業人数と日数」を確認します" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
    { href: "#faq", label: "7｜町田の庭業者に関するよくある質問" },
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
              <li className="text-[#33402f]">町田の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】町田の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              {["町田", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="町田の剪定・伐採・草刈り業者の比較"
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
              町田で庭業者を探すきっかけには、丘の起伏に沿って家が建ち、道路から奥まった敷地も多い土地ならではの、庭までの経路に関わる事情が関係することがあります。たとえば「通路が狭くて、業者の車が家の前まで入れない」「庭が段になっていて、下の段は階段でしか行けない」「道路から庭が見えないので、木が屋根に当たるまで気づかなかった」「一式いくらの見積もりが来たが、何にかかる費用なのか分からない」といったご相談です。
            </p>
            <p>
              本記事では、町田市内から依頼できる主要な庭業者を、当サイト編集部が各社紹介ページの作成時に調査した料金・サービス内容で比較しました。あわせて、「旗竿地の庭は通路の幅より曲がり角と段差で持ち込める道具が決まること」「敷地内に段がある庭は上の段と下の段で手間が変わるため段ごとに依頼内容を分けること」「外から見えない奥まった庭は同じ三か所を同じ角度で撮影しておくこと」「機械が入らない庭の見積もりでは作業人数と日数を確認すること」など、町田で依頼する際に確認していただきたい考え方もまとめています。業者選びの参考としてご活用ください。
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
          <H2 id="machida5" num="1">町田で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            町田市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社の紹介ページ作成時に公式サイト等を調査した掲載値です（2026年9月17日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、口コミで地域の業者を選べるくらしのマーケットと、大手直営のダスキンは、比較表に掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            町田の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年9月17日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、町田での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2 */}
          <H2 id="hatazao" num="2">旗竿地の庭に持ち込める道具は「通路の幅」より「曲がり角と段差」で決まります</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            道路から細い通路が伸び、その奥に建物と庭がある、いわゆる旗竿地の敷地では、庭に何を持ち込めるかによって作業の内容が決まります。このとき見落とされやすいのが、<Hl>幅そのものより、途中の曲がり角と段差</Hl>です。まっすぐなら通る長さの物でも、直角に曲がる場所があれば入りません。敷地の形と寸法を確かめる方法は<Link href="/niwa-sekkeizu-mikata/" className="text-[#2D7F3E] underline">庭の設計図・平面図の読み方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見積もりの前に測っておく項目は四つです。<Hl>最も狭い箇所の幅、曲がり角の内側の広さ、途中の段差の数と高さ、門扉や木戸の開く幅</Hl>です。この四つを伝えると、業者は運び込める道具と、人手でどこまで運ぶかの見当をつけられます。段差が続く通路では台車が使えず、道具も出たものもすべて手で運ぶことになります。通路の歩きやすさそのものを見直す場合は<Link href="/niwa-barrier-free/" className="text-[#2D7F3E] underline">庭のバリアフリーの考え方</Link>、足元の傷みは<Link href="/renga-makuragi-rekka/" className="text-[#2D7F3E] underline">レンガ・枕木の劣化と交換の判断</Link>と<Link href="/tobiishi-zasso/" className="text-[#2D7F3E] underline">飛び石まわりの雑草の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            そのうえで相談すべき点が<Hl>「出たものをどこまで運ぶか」</Hl>です。切った枝も刈った草も、同じ通路を通って道路まで出すことになります。伐採110番は大木・高木・危険木の特殊伐採に対応し、伐採後の木材処分まで一括で任せられることを掲げており、見積もりは無料・24時間受付です。運び出す量そのものを減らす方法として、その場で細かくする道具を使う選択肢もあり、<Link href="/garden-shredder-katsuyo/" className="text-[#2D7F3E] underline">ガーデンシュレッダーの活用</Link>と<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝の処分方法</Link>にまとめています。
          </p>

          {/* 3 */}
          <H2 id="dansa" num="3">敷地内に段がある庭は、段ごとに依頼内容を分けます</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            丘の起伏に沿って造られた住宅地では、同じ敷地の中に高さの違う面がいくつもあることがあります。上の段は日当たりがよく草の伸びが早い、下の段は湿って苔が出やすいというように、<Hl>同じ庭でも段によって生じる問題が異なります</Hl>。まとめて「庭の手入れ」として依頼すると、不要な場所に費用がかかり、必要な場所の手入れが不足することがあります。限られた面をどう使うかは<Link href="/semai-niwa-layout/" className="text-[#2D7F3E] underline">狭い庭のレイアウトの考え方</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            分けて考えるときの目印は<Hl>「その段へどうやって上り下りするか」</Hl>です。階段でしか行けない段は、道具も刈った草もすべて手で運ぶことになり、同じ面積でも手間が増えます。反対に、平らにつながっている段はまとめて依頼したほうが費用を抑えられます。なお、段と段の間を支えている擁壁や石積みそのものの傷みは土木・建築の業者が担当する範囲で、庭業者に依頼できるのはその上やそばに生えた草木の手入れまでです。低い段の水の抜け方は<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>、湿って苔が出る場所は<Link href="/niwa-koke-taisaku/" className="text-[#2D7F3E] underline">庭の苔対策の基本</Link>、排水の詰まりは<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">排水桝の点検の基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            依頼する際は、<Hl>「上の段は年に何回、下の段は年に何回」と段ごとに回数を分ける</Hl>と、費用の見通しが立ちます。草刈り110番は1平米163円〜（税込）という面積単価のため、段ごとに範囲を区切って依頼しやすく、刈った後の防草シート施工も相談できます。手入れしにくい段は、草が生えにくい仕上げに変えるほうが維持しやすくなります。考え方は<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>、<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの基礎知識</Link>、<Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの基本</Link>をご覧ください。
          </p>

          {/* 4 */}
          <H2 id="mienai" num="4">外から見えない奥まった庭は、同じ三か所を同じ角度で撮影して記録します</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            道路から庭が見えない敷地には静かさという利点がありますが、<Hl>庭の変化に気づくのが遅れる</Hl>という弱点があります。外から見える庭なら、伸びすぎや傾きに誰かが気づきます。奥まった庭では、木が屋根に触れるまで、塀が押されるまで、誰も気づかないことがあります。長く人の目が入らない敷地の考え方は<Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の基本</Link>が参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            記録の方法は簡単です。<Hl>同じ三か所を、同じ角度から、季節ごとに撮影しておく</Hl>だけで十分です。三か所とは、最も高い木を下から見上げた一枚、建物と木が最も近い場所の一枚、通路の足元の一枚です。写真を比べると、少しずつ進む変化がはっきり分かります。高くなった木を自分で切ることの危険は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者に依頼する判断</Link>、傾きはじめた木の支え方は<Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の立て方の基本</Link>、強い風への備えは<Link href="/taifu-niwaki-taisaku/" className="text-[#2D7F3E] underline">台風前後の庭木対策の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            写真が蓄積されると、<Hl>業者に相談する際の説明にそのまま使えます</Hl>。現地確認が必要な点は残りますが、訪問前に見当がつけば、日程も金額も決まりやすくなります。剪定110番は24時間365日受付で、現地調査・見積もりは無料です。相談の進め方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>と<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">剪定を依頼する前の準備</Link>、夜に通路を歩く家では<Link href="/niwa-shomei-keikaku/" className="text-[#2D7F3E] underline">庭の照明計画の基本</Link>もご覧ください。
          </p>

          {/* 5 */}
          <H2 id="ninzunissu" num="5">機械が入らない庭の見積もりでは「作業人数と日数」を確認します</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            重機も作業車も入らない庭では、作業のほとんどが人の手で進みます。そのため金額を左右するのは道具や材料ではなく、<Hl>何人が何日作業するか</Hl>です。「一式いくら」とだけ書かれた見積もりでは、この点が分かりません。金額の内訳の読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認すべき点は三つです。<Hl>作業人数、日数、そして出たものを道路まで運ぶ手間が作業に含まれるかどうか</Hl>です。手作業が中心の庭では、切る時間より運ぶ時間のほうが長くなることがあります。運び出しが別料金になっていないか、道路までの距離が金額にどう反映されているかを確認してください。庭石や灯篭のように重いものを外す場合はとくに手間がかかるため、<Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯篭の撤去の基礎知識</Link>を確認したうえで相談してください。依頼先の種類による違いは<Link href="/zoen-uekiya-chigai/" className="text-[#2D7F3E] underline">造園業者と植木屋の違い</Link>が参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            日数がかかると分かった場合は、<Hl>一度にすべてを依頼するか、場所を分けて複数年で進めるか</Hl>を決めます。分けると一回あたりの金額と拘束時間は抑えられますが、回数は増えます。お庭マスターは剪定1本550円〜・伐採1本3,300円〜という1本単位の料金体系で、見積もり・出張は無料、施工後の保証があります。庭そのものを手のかからない形に変えていく進め方は<Link href="/niwajimai/" className="text-[#2D7F3E] underline">庭じまいとローメンテナンス化</Link>、外構の工事と植栽の作業で担当が分かれる点は<Link href="/niwa-reform-gaiko-chigai/" className="text-[#2D7F3E] underline">庭のリフォームと外構工事の違い</Link>にまとめています。
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
          <H2 id="faq" num="7">町田の庭業者に関するよくある質問</H2>
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
            町田で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。機材が入りにくい庭で気になる木を1本単位で整える場合は樹種別の目安がある剪定110番や1本単位の料金体系のお庭マスター、段ごとに範囲を区切って草を片付ける場合は面積単価が分かりやすい草刈り110番、重機が入らない敷地で大きくなりすぎた木を整理する場合は処分まで一括で対応する伐採110番、手作業が中心の庭を回数を決めて任せたい場合はsmileガーデンが適しています。目的によって適したサービスは異なります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            丘の起伏に沿って家が建ち、道路から奥まった敷地も多い町田では、庭までの経路を事前に確認することが依頼の第一歩になります。通路は幅より曲がり角と段差で持ち込める道具が決まること、段ごとに依頼内容と回数を分けること、外から見えない庭は同じ三か所を同じ角度で撮影して変化を記録すること、手作業が中心の庭では作業人数と日数を確認すること、そして処分費・出張費を含めた総額を作業前に確認することが、業者選びで共通して押さえておくべき点です。本記事の比較を参考に、庭の状況に合った業者をお選びください。
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
              {["町田", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/sentei-110ban/", label: "剪定110番の口コミ・評判" },
                { href: "/agents/bassai-110ban/", label: "伐採110番の口コミ・評判" },
                { href: "/niwa-mitsumori-mikata/", label: "剪定・伐採の見積もりの見方" },
                { href: "/niwaishi-toro-tekkyo/", label: "庭石・灯篭の撤去の基礎知識" },
                { href: "/niwa-barrier-free/", label: "庭のバリアフリーの考え方" },
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
