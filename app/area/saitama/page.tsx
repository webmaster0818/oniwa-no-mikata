import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/saitama/";
const UPDATED = "2026年10月20日";
const UPDATED_ISO = "2026-10-20";

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
      "【2026年最新】さいたまの庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "さいたまで剪定・伐採・草刈りを依頼できる庭業者を比較。剪定110番・伐採110番・草刈り110番・smileガーデン・お庭マスターの料金と特徴に加え、生垣の刈り込み、境界を越えた枝への対応、隣家に配慮した依頼の段取りを解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】さいたまの庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "さいたまで剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。生垣の刈り込みの考え方や、隣地に越境した枝の扱い、作業当日の隣家への配慮など、戸建ての境界まわりの注意点も解説します。",
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
    image: "/images/sentei-110ban-features-v2.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、さいたま市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本4,000円〜（税込）の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "庭木1本から依頼したい方",
      "隣地に伸びかけた枝を早めに整えたい方",
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
    slug: "bassai-110ban",
    num: "1-2",
    catch: "伐採・抜根専門・処分まで一括",
    name: "伐採110番",
    officialUrl: "https://www.sharing-tech.co.jp/baxtusai/",
    image: "/images/bassai-110ban-features-v2.png",
    intro: (
      <>
        伐採110番は、伐採・抜根に特化した専門サービスです。庭木の伐採から
        <Hl>大木・高木・危険木の特殊伐採</Hl>
        、重機を使った大規模作業まで対応し、
        <Hl>伐採後の木材処分まで一括で任せられる</Hl>
        のが特徴です。境界近くで大きくなりすぎた木を根元から整理したい場合も、伐採から処分まで一度に相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "大きくなりすぎた庭木を根元から処分したい方",
      "境界近くの木を整理して隣家への心配をなくしたい方",
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
    slug: "kusakari-110ban",
    num: "1-3",
    catch: "1平米163円〜（税込）・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.sharing-tech.co.jp/kusakari/",
    image: "/images/kusakari-110ban-features-v2.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米163円〜（税込）の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        もあわせて依頼でき、<Hl>定期メンテナンスプラン</Hl>
        を使えば夏場に伸び続ける雑草の管理を任せきりにできます。
      </>
    ),
    recommend: [
      "庭や空き地の雑草を低価格で片付けたい方",
      "草刈り後の防草対策までまとめて相談したい方",
      "定期契約で雑草管理の手間をなくしたい方",
      "遠方の実家・空き家の敷地を管理したい方",
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
        で剪定・消毒・施肥をセットで任せられます。生垣や庭木が隣地へ伸びる前に定期的に手入れが行われる仕組みを作れるため、境界まわりの管理にも適しています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "一年を通して庭の手入れを定額で任せたい方",
      "生垣や庭木を隣地へ伸ばさない仕組みを作りたい方",
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
      "年間管理プラン、見積もり・出張費無料、年間実績3万件・リピート率95%以上という実績値、料金表の目安単価は、2026年10月19日に公式サイトで確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。さいたま市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        お庭マスターは、全国47都道府県を対応エリアとする（公式表記）職人品質のマッチング型サービスで、さいたまを含む関東は主力エリアです。
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
      "さいたま・関東エリアで業者を探している方",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心（さいたま対応）" },
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
    slug: "bassai-110ban",
    name: "伐採110番",
    type: "マッチング型",
    price: "木の高さ・本数で変動（見積もり無料）",
    point: "伐採・抜根専門・処分まで一括対応",
  },
  {
    slug: "kusakari-110ban",
    name: "草刈り110番",
    type: "マッチング型",
    price: "草刈り1平米163円〜（税込）",
    point: "防草シート施工・定期メンテナンスプランあり",
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
    t: "① 境界まわりは、どこまでが自分の木かを先に確認する",
    b: "「剪定」「伐採」「草刈り」のどれを依頼したいのかに加えて、生垣や境界沿いの木の手入れでは、どの木が自分の所有か、生垣が自分側・隣家側・共有のどれなのかを先に確認しておくことが大切です。あいまいなまま作業すると、思わぬトラブルの原因になります。対象の木の種類・高さ・本数をメモし、境界側から見た写真をスマートフォンで撮っておくと、見積もりの精度が上がります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・庭の状況で変わります。生垣の刈り込みで出る枝葉は量が多くなりがちなため、処分費・出張費まで含めた総額を必ず作業前にご確認ください。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料のため、金額を確認してから判断できます。",
  },
  {
    t: "③ 隣地に面した作業は、立ち入り・駐車・飛散対策の段取りを確認する",
    b: "境界沿いの生垣や庭木の作業では、脚立を隣地側に立てさせてもらう、刈った枝葉が隣家側に落ちるといった場面が起こりえます。見積もりの際に「隣地への立ち入りが必要か」「養生や清掃はどこまで対応してもらえるか」「作業車をどこに停めるか」を確認し、必要なら事前に隣家へひと声かけておくと、当日のトラブルを防げます。",
  },
  {
    t: "④ 急ぎでない場合は複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較することをおすすめします。金額や説明に納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
];

const faqs = [
  {
    q: "さいたまで庭木1本だけの剪定でも依頼できますか？",
    a: "依頼できます。剪定110番は庭木1本からの依頼に対応しており、剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。境界沿いの1本のみを整えたいという依頼も相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりでご確認ください。",
  },
  {
    q: "生垣の刈り込みだけを依頼することはできますか？",
    a: "できます。生垣の刈り込みは剪定サービスの対応範囲で、剪定110番やお庭マスターに相談できます。料金は生垣の高さ・長さ・厚みや枝葉の処分量で変わるため、見積もり時に生垣の写真とおおよその長さを伝えると、相談が円滑に進みます。くらしのマーケットでも、生垣剪定を扱う地域の出店者を料金・口コミで比較して選べます。",
  },
  {
    q: "隣の家から「枝がうちに入ってきている」と言われました。どうすればよいですか？",
    a: "放置せず、早めに対応することをおすすめします。自分の庭の木の枝が隣地に越境している場合、手入れの責任は基本的に木の所有者側にあります。高い場所の枝や太い枝を無理にご自身で切ると危険なうえ、切り方を誤ると木を傷めるため、業者に依頼して境界の内側まで整えてもらう方法が確実です。剪定110番は24時間受付・見積もり無料のため、指摘を受けた当日のうちに相談を始められます。",
  },
  {
    q: "作業の前に、隣の家へ挨拶をしておくべきですか？",
    a: "境界沿いの作業では、事前にひと声かけておくことをおすすめします。刈り込みや伐採では音が出ますし、枝葉が隣地側へ落ちたり、場合によっては脚立の設置で隣地への立ち入りをお願いしたりすることもあります。「いつ・どのような作業をするか」を伝えておくだけで、当日の受け止められ方は大きく変わります。近隣への声かけに慣れている業者もあるため、見積もり時に相談してください。",
  },
  {
    q: "道路にはみ出した枝も切ってもらえますか？",
    a: "依頼できます。道路にはみ出した枝は、通行人や車への接触、標識・見通しの妨げになるおそれがあり、木の所有者が管理すべき部分です。歩行者や車の通行に配慮しながらの作業になるため、ご自身で切るより業者に任せることをおすすめします。見積もり時に「道路側の枝がはみ出している」と伝え、必要な安全対策も含めてご確認ください。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応を掲げています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ずご確認ください。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。",
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

export default function AreaSaitamaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】さいたまの庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "さいたまで剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-12T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "さいたまの庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#saitama5",
      label: "1｜さいたまで依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "さいたまの庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#ikegaki", label: "2｜生垣の手入れは高さ・厚み・時期をそろえて考えます" },
    { href: "#ekkyo", label: "3｜境界を越えた枝は放置せず、早めに対応します" },
    { href: "#kinrin", label: "4｜作業当日の隣家への配慮（挨拶・駐車・飛散対策）" },
    { href: "#teiki", label: "5｜境界まわりは定期管理で伸びる前に整えます" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
    { href: "#faq", label: "7｜さいたまの庭業者でよくある質問" },
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
              <li className="text-[#33402f]">さいたまの庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】さいたまの庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              {["さいたま", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="さいたまの剪定・伐採・草刈り業者の比較"
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
              さいたまで庭業者を探すきっかけには、「生垣が伸びて、隣家との境が茂ってきた」「隣の家から、枝がそちらに入っていると言われた」といった、境界まわりの悩みが多く見られます。戸建てが整然と並ぶ住宅地では隣家との距離が近く、生垣や庭木のわずかな伸びも目立ちやすくなります。手入れそのものは難しくなくても、隣家にどう配慮しながら進めるかで悩む方が多いことが、このエリアの特徴といえます。
            </p>
            <p>
              本記事では、さいたま市内から依頼できる主要な庭業者を、当サイト編集部が各社紹介ページの作成時に調査した料金・サービス内容をもとに比較しています。あわせて、生垣の刈り込みの考え方、境界を越えた枝への対応、作業当日の隣家への配慮など、戸建ての境界まわりで確認しておきたい依頼の段取りも解説します。業者選びの参考としてご活用ください。
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
          <H2 id="saitama5" num="1">さいたまで依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            さいたま市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社紹介ページの作成時に公式サイト等で確認した掲載値です（2026年8月12日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            さいたまの庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年8月12日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜生垣 */}
          <H2 id="ikegaki" num="2">生垣の手入れは高さ・厚み・時期をそろえて考えます</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            生垣は塀と異なり生きた植物であるため、手入れを止めると形が崩れ始めます。整った生垣を保つポイントは、<Hl>「高さ」「厚み」「刈る時期」の3つを毎回そろえて管理する</Hl>ことです。高さがまちまちだと不揃いな印象になり、厚みを放置すると内側が蒸れて枝葉が枯れ込みやすくなります。刈る時期にも樹種による適否があり、時期を外すと切り口から傷みやすくなります。刈り込みの基本的な考え方は
            <Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの解説記事</Link>
            で詳しくまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            隣家との目隠しを兼ねた生垣は、<Hl>高くしすぎるとご自身で手入れできなくなり、隣地への日照や圧迫感の面でも配慮が必要</Hl>になります。脚立の上でのバリカン作業は転落の危険もあるため、肩より高い生垣は業者に任せることをおすすめします。剪定110番やお庭マスターは1本単位・見積もり無料で相談でき、生垣の長さと高さを伝えれば刈り込みと枝葉の処分まで含めた金額を確認できます。
          </p>

          {/* 3｜越境枝 */}
          <H2 id="ekkyo" num="3">境界を越えた枝は放置せず、早めに対応します</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭木の枝が隣の敷地に入り込む「越境」は、戸建ての境界まわりで最も起こりやすいトラブルの原因です。<Hl>自分の木の枝が隣地へ伸びている場合、その手入れの責任は基本的に木の所有者側にあります</Hl>。落ち葉や毛虫、日当たりへの影響など、枝そのもの以外の形で迷惑が広がることもあり、指摘を受けてからの対応では、隣家との関係に影響が出やすくなります。枝の越境をめぐるルールと対応の考え方は
            <Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境の解説記事</Link>
            で詳しく解説しています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            対応の基本は、<Hl>境界の内側に収まるよう、越境しそうな枝を早めに剪定しておく</Hl>ことです。境界沿いの高い枝をご自身で切ろうとすると、脚立の設置場所がなく隣地にはみ出してしまうこともあるため、無理をせず業者に任せてください。剪定110番は24時間365日受付・現地調査無料のため、隣家から指摘を受けた場合でもすぐに相談を始められます。反対に、隣家の枝が自分の敷地へ伸びてきて困っている場合も、無断で処理する前に、まず相手に伝えて対応をお願いすることが原則です。
          </p>

          {/* 4｜隣家配慮 */}
          <H2 id="kinrin" num="4">作業当日の隣家への配慮（挨拶・駐車・飛散対策）</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            境界沿いの作業では、隣家と接する場面が生じます。トラブルを防ぐためには、<Hl>「事前のひと声」「駐車場所の確認」「飛散を防ぐ養生」の3点を段取りに組み込む</Hl>ことが大切です。刈り込み機や電動工具の音は想像以上に響き、刈った枝葉が隣地側へ落ちることもあります。作業日が決まったら「いつ・どのような作業をするか」を隣家に伝えておくだけで、当日の受け止められ方は大きく変わります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            また、住宅地では作業車の駐車場所も事前に決めておくべき点です。自宅前に停められない場合の対応はサービス・加盟店により異なるため、見積もり時にご確認ください。<Hl>隣地側に落ちた枝葉の清掃をどこまでやってもらえるか、隣地への立ち入りが必要になりそうか</Hl>も、あわせて確認しておくことをおすすめします。くらしのマーケットでは予約前に出店者とメッセージでやり取りできるため、境界まわりの事情を写真で伝えて段取りを相談してから予約できます。
          </p>

          {/* 5｜定期管理 */}
          <H2 id="teiki" num="5">境界まわりは定期管理で伸びる前に整えます</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            越境や生垣の乱れは、起きてから対処するより<Hl>伸びる前に整える仕組みを作るほうが、費用も精神的な負担も小さく済みます</Hl>。枝が隣地に届いてから急いで依頼する単発の剪定を繰り返すより、年に決まった回数の手入れを最初から予定に組み込んでおけば、隣家との関係を心配する場面そのものを減らせます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            smileガーデンの<Hl>定額制の年間管理プラン</Hl>は剪定・消毒・施肥をセットで任せられ、生垣や庭木が伸びすぎる前に定期的に手入れが行われます。作業後の写真付き報告書で仕上がりを確認できるため、日中留守がちの家庭でも利用しやすい仕組みです。境界沿いの雑草が気になる場合は、草刈り110番の定期メンテナンスプランや防草シート施工で、境界まわりを手のかからない状態にしておく方法もあります。
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
          <H2 id="faq" num="7">さいたまの庭業者でよくある質問</H2>
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
            さいたまで剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。生垣の刈り込みや境界沿いの枝の手入れは1本単位で依頼できる剪定110番やお庭マスター、境界近くの大きな木の整理は処分まで一括対応の伐採110番、境界まわりの雑草対策は草刈り110番、伸びる前に整える定額管理はsmileガーデンというように、目的によって適したサービスは異なります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            境界まわりの庭仕事は、作業の技術と同様に段取りが大切です。どこまでが自分の木かを確認してから相談すること、作業前に隣家へひと声かけること、処分費・出張費を含めた総額を作業前に確認することを、依頼前にご確認ください。本記事の比較を参考に、庭の状況に合った業者をお選びください。
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
              {["さいたま", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/oniwa-master/", label: "お庭マスターの口コミ・評判" },
                { href: "/agents/smile-garden/", label: "smileガーデンの口コミ・評判" },
                { href: "/ikegaki-karikomi/", label: "生垣の刈り込みの時期と方法" },
                { href: "/eda-ekkyo/", label: "隣家に越境した枝の扱い方" },
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
