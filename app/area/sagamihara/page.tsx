import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/sagamihara/";
const UPDATED = "2026年9月8日";
const UPDATED_ISO = "2026-09-08";

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
      "【2026年最新】相模原の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "相模原で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・お庭マスター（剪定1本550円〜）の料金と特徴、林に接する庭と住宅街の庭で違う困りごと、緑地から入ってくる落ち葉・枝・つるとの付き合い方、植えて数年の木を育てる手入れ、広い市域で来てもらえる範囲と出張の条件まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】相模原の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "相模原で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。同じ市内でも林に接する庭と住宅街の庭では困りごとの中心が違うこと、林や緑地に接する庭は向こうから来る落ち葉・枝・つる・生き物を前提に手入れすること、新しく開かれた住宅地では植えて数年の木を育てる手入れが中心になること、市域が広い相模原では来てもらえる範囲と出張の条件を先に確認することも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、相模原市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。植えて数年のシンボルツリーの形を整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "植えて数年の木の樹形を1本単位で整えたい人",
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
        ため、林や畑に接する敷地の外周など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "林や畑に接する外周の草を範囲を決めて片付けたい人",
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
        のが特徴です。林に接する敷地で大きくなりすぎた木や、道が狭く車が入りにくい場所の木も、切り分けて搬出する方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "林に接する敷地で大きくなりすぎた木を整理したい人",
      "車が入りにくい場所で搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。林からの落ち葉や虫と毎年付き合う庭では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "林や緑地に接する庭の手入れを毎年の決まりごとにしたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。相模原市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        お庭マスターは、関東・関西・中部エリアを中心に展開する職人品質のマッチング型サービスで、相模原を含む関東は主力エリアです。
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
      "相模原・関東エリアで業者を探している人",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心", note: "相模原での対応可否は見積もり時にご確認ください" },
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
    t: "① 庭の写真に「周りの環境」を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭がどんな環境にあるかを写真で伝えましょう。林や緑地に接しているのか、畑に隣り合っているのか、住宅街の中で隣家の窓が近いのか、道路から庭までの通路や車を停められそうな場所はどこかが写っていると、作業のしかたと搬出の段取りが伝わりやすくなります。林側から張り出している枝や、庭に入り込んでいるつるがあれば、その部分も撮っておくと相談が早くなります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。市街地から離れた場所では、出張費の扱いや対応できる範囲が加盟店によって変わることがあるため、その点も先に確認しましょう。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料なので、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "林や緑地に接する庭では、張り出してきた枝やつるの元が自分の敷地の外にあることがあります。私有の林なら所有者、公有の緑地や公園なら自治体の担当窓口と、相談先が分かれます。境界がはっきりしない場所は、土地家屋調査士などの専門家に相談する範囲です。庭に出る獣への対応は自治体の窓口が担当で、庭業者に頼めるのは庭側の環境を整える作業までです。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。林に接する敷地の作業に慣れているか、郊外まで出張できるか、作業をまとめて一度に済ませられるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "相模原で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。植えて数年のシンボルツリーの形を整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "隣の林から落ち葉が大量に入ってきます。減らす方法はありますか？",
    a: "自分の敷地の外にある木の落ち葉は、こちらの手入れで減らすことができないため、「受ける場所」と「片付けの回数」で考えるのが現実的です。落ち葉がたまりやすい場所を確かめ、そこに落ち葉がたまっても困らない仕上げにする、排水桝の上にたまらないようにする、集める回数と時期を決めて業者に頼む、といった方法があります。落ち葉を庭で活かす考え方も含めて、当サイトの落ち葉対策と掃除の基本の記事にまとめています。",
  },
  {
    q: "隣接する林の枝がこちらの庭に大きく張り出しています。切ってもよいですか？",
    a: "まず、その林の所有者が誰かを確かめてください。私有地なら所有者、公園や緑地なら自治体の担当窓口が相談先になります。越境してきた枝の扱いには法律上の決まりがあり、状況によって対応が変わるため、勝手に切る前に所有者への連絡と相談を優先しましょう。境界の位置そのものがはっきりしない場合は、土地家屋調査士などの専門家に確認する範囲です。当サイトの隣家への枝の越境と対処の基本の記事に考え方をまとめています。",
  },
  {
    q: "庭に獣が入ってくるようになりました。庭業者に相談できますか？",
    a: "獣そのものへの対応（捕獲や追い払いの相談）は自治体の担当窓口が担当で、庭業者の範囲ではありません。庭業者に頼めるのは、隠れ場所になっている茂みを減らす、落ちた実や放置した果樹を片付ける、外周の草を刈って見通しをよくするといった、庭側の環境を整える作業です。両方を組み合わせて考えるのが基本で、当サイトの庭の獣害の基本の記事が参考になります。",
  },
  {
    q: "市街地から離れた場所に住んでいます。それでも来てもらえますか？",
    a: "多くのサービスは相模原市内に対応していますが、加盟店やフランチャイズ型のサービスでは、実際に来られる範囲や出張費の扱いが加盟店によって変わることがあります。見積もりを頼むときに、住所と道路の状況（車が入れるか、駐車できる場所があるか）を先に伝えて、対応の可否と出張費を確認しましょう。お庭マスターは関東エリア中心のサービスですが、市内での対応可否は見積もり時に確認が必要です。剪定と草刈りと処分をまとめて一度に頼むと、出張の回数を減らせます。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。林に接する敷地では、切った枝を林側に放置しないことも大切です。",
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

export default function AreaSagamiharaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】相模原の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "相模原で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-08T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "相模原の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#sagamihara5",
      label: "1｜相模原で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "相模原の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kubun", label: "2｜同じ市内でも「林に接する庭」と「住宅街の庭」では困りごとの中心が違う" },
    { href: "#rinen", label: "3｜林や緑地に接する庭は「向こうから来るもの」を前提に手入れする——落ち葉・枝・つる・生き物" },
    { href: "#wakaki", label: "4｜新しく開かれた住宅地の庭は「植えて数年の木」を育てる手入れが中心になる" },
    { href: "#hani", label: "5｜市域が広い相模原では「来てもらえる範囲」と「出張の条件」を先に確認する" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜相模原の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">相模原の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】相模原の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["相模原", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="相模原の剪定・伐採・草刈り業者の比較"
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
              「裏の林から落ち葉が毎年降ってくる」「隣の緑地の枝がこちらの庭まで張り出している」「新しく建てた家の木がなかなか形にならない」「市街地から離れているけれど来てもらえるのか」——相模原で庭業者を探すきっかけには、広い市域の中で林や緑地に接する場所と、新しく開かれた住宅街とが隣り合っている土地ならではの事情が絡むことがあります。
            </p>
            <p>
              本記事では、相模原市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「同じ市内でも林に接する庭と住宅街の庭では困りごとの中心が違うこと」「林や緑地に接する庭は向こうから来るものを前提に手入れすること」「新しく開かれた住宅地では植えて数年の木を育てる手入れが中心になること」「市域が広い相模原では来てもらえる範囲と出張の条件を先に確認すること」といった、相模原で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="sagamihara5" num="1">相模原で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            相模原市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月8日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、口コミで地域の業者を選べるくらしのマーケットと、大手直営のダスキンは、比較表に掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            相模原の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月8日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東・関西・中部エリア中心のサービスのため、相模原での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="kubun" num="2">同じ市内でも「林に接する庭」と「住宅街の庭」では困りごとの中心が違う</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            相模原は市域が広く、区によって周りの環境がかなり違います。台地の上に住宅街が広がる場所もあれば、丘陵や山地に近く庭の裏がそのまま林につながる場所、川に向かって下る途中に段差のある場所もあります。<Hl>同じ「庭の手入れ」でも、林に接する庭では「外から入ってくるもの」、住宅街の庭では「隣家との近さ」が困りごとの中心になりやすい</Hl>という違いがあります。業者に頼むときも、自分の庭がどちらの性質を持っているかを意識して伝えると、話が早くなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            林や緑地に接する庭では、落ち葉・枝・つる・生き物が向こうから入ってきます。木陰になる時間が長く、地面が湿りがちで苔が広がることもあります。こうした庭の手入れは、自分の木を整えるだけでは終わらず、<Hl>外から来るものをどう受け止めるか</Hl>が組み立ての中心になります。次の章で詳しく取り上げます。日陰の場所に合う植物の選び方は<Link href="/hikage-niwa-shokusai/" className="text-[#2D7F3E] underline">北向き・日陰の庭の植栽の考え方</Link>、苔を活かすか対策するかの判断は<Link href="/niwa-koke-taisaku/" className="text-[#2D7F3E] underline">庭の苔対策の基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            住宅街の庭では、隣家の窓や塀との距離、作業の音、刈った草や枝葉の飛び散り、車を停める場所が作業の条件になります。<Hl>隣地に落ちた枝葉の片付けや作業の時間帯まで含めて先に決めておく</Hl>と、当日のトラブルを避けられます。隣家との考え方は<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>を参考にしてください。段差のある場所に建つ家では、庭が擁壁の上にあったり階段でしか入れなかったりして、切ったものを下ろして運ぶ手間が費用を左右します。擁壁そのものにひび・ふくらみ・ずれといった変化がある場合は、庭業者ではなく土木や建築の専門業者に見てもらう範囲です。根が構造物に与える影響の考え方は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>にまとめています。
          </p>

          {/* 3 */}
          <H2 id="rinen" num="3">林や緑地に接する庭は「向こうから来るもの」を前提に手入れする——落ち葉・枝・つる・生き物</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            裏が林や緑地になっている庭では、自分の敷地に木が一本もなくても落ち葉が降り積もります。<Hl>自分の木ではない落ち葉は、こちらの手入れで減らすことができない</Hl>ため、「受ける場所」と「片付けの回数」で考えるのが現実的です。落ち葉がたまりやすい場所を確かめて、そこにたまっても困らない仕上げにする、排水桝の上にたまらないようにする、集める回数と時期を決めて業者に頼む、という順番です。片付けの基本は<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策と掃除の基本</Link>、庭で活かす方法は<Link href="/ochiba-taihi-compost/" className="text-[#2D7F3E] underline">落ち葉の堆肥化の考え方</Link>、一年の掃除の段取りは<Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除の年間スケジュール</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            林側から張り出してくる枝と、入り込んでくるつるや竹は、落ち葉より先に手を打つ必要があります。ただし、<Hl>張り出している枝の元が自分の敷地の外にある場合、切る前に所有者への連絡が要ります</Hl>。私有の林なら所有者、公園や公有の緑地なら自治体の担当窓口と、相談先が分かれます。越境した枝の扱いには法律上の決まりがあり、状況によって対応が変わるため、勝手に切らず先に相談するのが基本です。境界の位置そのものがはっきりしないときは、土地家屋調査士などの専門家に確認する範囲で、<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>を参考にしてください。庭に入り込んだつるや竹は、自分の敷地の中なら手を入れられます。伸びる前に境目で止める考え方は<Link href="/tsuru-shokubutsu-kanri/" className="text-[#2D7F3E] underline">つる植物の管理の基本</Link>と<Link href="/take-taisaku/" className="text-[#2D7F3E] underline">竹の対策の基本</Link>をご覧ください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            生き物も向こうから来ます。毛虫や蜂は林に近い庭ほど付き合いが長くなり、獣が庭に入ってくることもあります。<Hl>獣そのものへの対応は自治体の窓口が担当で、庭業者に頼めるのは庭側の環境を整える作業まで</Hl>です。隠れ場所になる茂みを減らす、落ちた実を片付ける、外周の草を刈って見通しをよくする、といった作業は庭業者の範囲で、考え方は<Link href="/niwa-gaiju-higai/" className="text-[#2D7F3E] underline">庭の獣害の基本</Link>にまとめています。毛虫や蜂の巣を見つけたときの注意は<Link href="/kemushi-chui/" className="text-[#2D7F3E] underline">庭の毛虫の注意点</Link>と<Link href="/niwaki-hachinosu/" className="text-[#2D7F3E] underline">庭木の蜂の巣への対処</Link>をご覧ください。落ち葉・枝・虫と毎年付き合う庭では、smileガーデンの定額制の年間管理プランのように回数と時期を決めて任せる方法があり、外周の草を面で片付けるなら草刈り110番の1平米600円〜という面積単価で範囲を決めて頼めます。
          </p>

          {/* 4 */}
          <H2 id="wakaki" num="4">新しく開かれた住宅地の庭は「植えて数年の木」を育てる手入れが中心になる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            相模原には、畑や林を切り開いて新しく作られた住宅地が点在しています。こうした住宅地の庭は、木もまだ若く、<Hl>「大きくなりすぎた木をどうするか」ではなく「これからどう育てるか」が手入れの中心</Hl>になります。植えて数年の木は、根がまだ十分に張っておらず、風で揺れたり、乾いた季節に水が足りなくなったりしやすい時期です。支柱の添え方と外す時期は<Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の立て方の基本</Link>、水やりの考え方は<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            若い木の剪定は、<Hl>将来の大きさと形を決める作業</Hl>です。最初の数年で骨格になる枝を選び、伸ばす方向を決めておくと、その後の手入れが軽くなります。逆に、この時期に放っておくと、家の大きさに対して木が大きくなりすぎてから慌てて切ることになり、搬出や処分の負担も増えます。シンボルツリーの育て方は<Link href="/symboltree-teire/" className="text-[#2D7F3E] underline">シンボルツリーの手入れの基本</Link>、切る時期の考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>、肥料の与え方は<Link href="/niwaki-hiryo/" className="text-[#2D7F3E] underline">庭木の肥料の基本</Link>をご覧ください。庭木1本の形を整えるなら、剪定110番は剪定1本2,890円〜（出張費3,000円別途）、お庭マスターは剪定1本550円〜の掲載料金で、いずれも見積もりは無料です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            もうひとつ気にしておきたいのが、<Hl>造成された土地の土の状態</Hl>です。新しく整えられた宅地では、表面の土の下が締め固められていて、水が抜けにくかったり根が伸びにくかったりすることがあります。植えた木の元気がない、雨のあと水が引かないといった状態が続くなら、土そのものを見直す段階です。考え方は<Link href="/kadan-tsuchizukuri/" className="text-[#2D7F3E] underline">花壇の土づくりの基本</Link>と<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>にまとめています。これから庭を作る段階なら、<Link href="/shinchiku-niwazukuri-junbi/" className="text-[#2D7F3E] underline">新築の庭づくりの準備</Link>と<Link href="/shokusai-haichi-keikaku/" className="text-[#2D7F3E] underline">植栽の配置計画の立て方</Link>で、隣家や道路との距離を含めた配置を先に決めておくと、将来の手入れが楽になります。
          </p>

          {/* 5 */}
          <H2 id="hani" num="5">市域が広い相模原では「来てもらえる範囲」と「出張の条件」を先に確認する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            相模原は市街地から山あいまで市域が広く、同じ市内でも業者の拠点からの距離がかなり違います。全国展開のマッチング型やフランチャイズ型のサービスは、依頼者の近くの加盟店を手配する仕組みですが、<Hl>実際に来られる範囲や出張費の扱いは加盟店によって変わることがあります</Hl>。剪定110番は出張費3,000円が別途必要という掲載値で、smileガーデンとお庭マスターは見積もり・出張無料をうたっていますが、市街地から離れた場所での対応可否は見積もり時に確認が必要です。くらしのマーケットは出店者ごとに対応エリアが決まっているため、予約前に住所を伝えて確かめましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見積もりを頼むときは、住所に加えて<Hl>道路の状況と車を停められる場所</Hl>を先に伝えておくと、対応の可否と段取りがはっきりします。山あいの集落では道が狭く作業車が入れないこともあり、その場合は離れた場所に停めて運ぶ手間が金額に含まれるかどうかが確認事項になります。伐採110番は重機が入れない立地でも木を切り分けて搬出する方法を含めて相談できます。見積もりの読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>、複数社に頼むときのコツは<Link href="/aimitsumori-torikata/" className="text-[#2D7F3E] underline">相見積もりの取り方</Link>、頼む前の準備は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">庭木の剪定を頼む前の準備</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            出張の回数を減らすには、<Hl>一度に頼む作業をまとめる</Hl>のが有効です。剪定と草刈りと処分を別々に頼むより、同じ日にまとめたほうが出張の手間が一回で済み、総額の見当もつけやすくなります。毎年頼むことが決まっているなら、定額制の年間管理プランのように回数と時期を決めて任せる形にすると、そのたびに業者を探す手間もなくなります。刈り草や剪定枝の処分の選択肢は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>、家を空けがちな場合の考え方は<Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の基本</Link>にまとめています。
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
          <H2 id="faq" num="7">相模原の庭業者でよくある質問</H2>
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
            相模原で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。植えて数年の木の形を1本単位で整えるなら樹種別の目安がある剪定110番や1本単位の料金体系のお庭マスター、林や畑に接する外周の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、林に接する敷地で大きくなりすぎた木を整理するなら処分まで一括の伐採110番、落ち葉や虫と毎年付き合う庭を定期的に整えるならsmileガーデン、というように、目的によって向いているサービスは変わります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            林や緑地に接する場所と新しい住宅街とが隣り合う相模原では、庭の性質を伝えることが依頼の出発点になります。林に接する庭は外から来る落ち葉・枝・つる・生き物を前提に手入れの範囲と相談先を切り分けること、住宅街の庭は隣家との近さを意識すること、若い木は将来の大きさを決める剪定を早めに始めること、市街地から離れた場所では来てもらえる範囲と出張の条件を先に確認して作業をまとめること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["相模原", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/sakai/", label: "堺の庭業者おすすめ5選" },
                { href: "/area/hamamatsu/", label: "浜松の庭業者おすすめ5選" },
                { href: "/area/himeji/", label: "姫路の庭業者おすすめ5選" },
                { href: "/area/kurashiki/", label: "倉敷の庭業者おすすめ5選" },
                { href: "/area/takasaki/", label: "高崎の庭業者おすすめ5選" },
                { href: "/area/higashiosaka/", label: "東大阪の庭業者おすすめ5選" },
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
                { href: "/ochiba-taisaku/", label: "落ち葉対策と掃除の基本" },
                { href: "/eda-ekkyo/", label: "隣家への枝の越境と対処の基本" },
                { href: "/niwaki-shichu/", label: "庭木の支柱の立て方の基本" },
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
