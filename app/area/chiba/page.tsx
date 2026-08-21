import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/chiba/";
const UPDATED = "2026年8月12日";
const UPDATED_ISO = "2026-08-12";

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
      "【2026年最新】千葉の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "千葉で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・お庭マスター（剪定1本550円〜）の料金と特徴、潮風で傷んだ庭木の手当てや風を受け流す剪定の考え方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】千葉の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "千葉で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。潮風にさらされる庭木の傷みのサインの見方や、風を受け流す樹形に整える剪定の考え方など、海に近い住宅地で押さえたい注意点も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、千葉市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "庭木1本からでも気軽に頼みたい人",
      "風で傷んだ枝の整理を早めに済ませたい人",
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
        のが特徴です。弱って傾いてきた木や枯れが進んだ木の整理も、伐採から処分まで一度に相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "大きくなりすぎた庭木を根元から処分したい人",
      "弱って傾いた木・枯れた木を安全に整理したい人",
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
    slug: "kusakari-110ban",
    num: "1-3",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.kusakari110.com/",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        もあわせて依頼でき、<Hl>定期メンテナンスプラン</Hl>
        を使えば夏場に伸び続ける雑草の管理を任せきりにできます。
      </>
    ),
    recommend: [
      "庭や空き地の雑草を低価格で片付けたい人",
      "草刈り後の防草対策までまとめて相談したい人",
      "定期契約で雑草管理の手間をなくしたい人",
      "遠方の実家・空き家の敷地を管理したい人",
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
        で剪定・消毒・施肥をセットで任せられます。風の強い環境で消耗しやすい庭木に定期的に手を入れ、木の体力を保つ使い方にも向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "一年を通して庭の手入れを定額で任せたい人",
      "風で消耗しやすい庭木の体力を定期的な手入れで保ちたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。千葉市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        お庭マスターは、関東・関西・中部エリアを中心に展開する職人品質のマッチング型サービスで、千葉を含む関東は主力エリアです。
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
      "千葉・関東エリアで業者を探している人",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "550円〜", note: "樹種・高さで変動" },
      { k: "伐採（1本あたり）", v: "3,300円〜", note: "木の大きさで変動" },
      { k: "見積もり・出張費", v: "無料", note: "作業費のみ" },
      { k: "保証", v: "施工後の保証あり" },
      { k: "対応エリア", v: "関東・関西・中部エリア中心（千葉対応）" },
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
    price: "草刈り1平米600円〜",
    point: "防草シート施工・定期メンテナンスプランあり",
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
    t: "① 木の「傷み方」も含めて状況を整理する",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、海に近い住宅地では、葉先の変色・枝先の枯れ・葉の量の減り方といった「木の傷み方」も伝えたい情報です。対象の木の種類・高さ・本数をメモし、木の全体と傷みが気になる部分の両方をスマートフォンで撮影しておくと、手入れの方針を含めた見積もりの精度が上がります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・庭の状況で変わります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・お庭マスター・smileガーデン・伐採110番はいずれも見積もり無料なので、金額を見てから判断できます。",
  },
  {
    t: "③ 「切る」だけでなく「木を守る手入れ」も相談する",
    b: "風の強い環境の庭木は、枝を減らして風を受け流しやすくする剪定や、弱った木の回復を待つ管理など、「どう切るか」に選択肢があります。見積もりの際に「この木を長持ちさせたい」「風で倒れないか心配」といった目的を伝えると、単に短くするだけでない提案を受けやすくなります。作業の目的と方針を確認してから依頼しましょう。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "千葉で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。お庭マスターも剪定1本550円〜と1本単位の料金体系です。シンボルツリー1本だけ整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "海の近くに住んでいます。庭木の葉が茶色くなるのは潮風のせいですか？",
    a: "可能性はありますが、原因は一つとは限りません。潮風に含まれる塩分が葉に付くと、葉先が茶色く変色するなど傷みの原因になることがあるとされています。一方で、病害虫・水切れ・根の傷みでも似た症状は出るため、見た目だけで自己判断するのは禁物です。剪定110番のような現地調査無料のサービスで木の状態を見てもらい、原因に合った手入れを相談するのが確実です。",
  },
  {
    q: "潮風の影響を受けにくい庭にするには、どうすればよいですか？",
    a: "一般に、海沿いの環境に比較的強いとされる樹種を選ぶこと、風当たりの強い場所には木を密に植えすぎないこと、傷んだ枝葉を放置せず整理して木の体力を保つことが基本の考え方です。今ある木については、樹種の入れ替えまでしなくても、剪定で風の通りを良くして負担を減らせる場合があります。庭全体の構成に関わる相談は、造園デザインにも対応するお庭マスターのようなサービスが向いています。",
  },
  {
    q: "台風の前に、庭では何を確認しておけばよいですか？",
    a: "庭木については、伸びすぎた枝・枯れ枝・込み合った樹冠を事前に整理しておくと、風を受ける面積を減らせます。あわせて、鉢植えやガーデン用品など飛ばされやすい物の片付け・固定も忘れずに行いましょう。樹木の台風対策は直前ではなく、台風シーズンに入る前の余裕がある時期に済ませておくのが理想です。高い木の枝下ろしは危険を伴うため、自分で登らず業者に依頼してください。",
  },
  {
    q: "強風のあと、木が斜めになってしまいました。元に戻せますか？",
    a: "木の大きさと傾き方によります。根が浮いてしまった木は、放置すると次の強風で倒れるおそれがあるため、まず近づかず状態を観察し、早めに業者へ相談しましょう。小さな木なら支柱を立てて立て直せる場合がありますが、大きな木や根の傷みが激しい木は伐採が安全な選択になることもあります。伐採110番は危険木の特殊伐採と処分まで一括で相談でき、24時間受付・見積もり無料です。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。",
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

export default function AreaChibaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】千葉の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "千葉で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "千葉の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#chiba5",
      label: "1｜千葉で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "千葉の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#shiokaze", label: "2｜潮風にさらされる庭木は「傷みのサイン」を早めに拾う" },
    { href: "#kazesentei", label: "3｜風を受け流す樹形に——枝を透かす剪定という備え" },
    { href: "#mikiwame", label: "4｜弱った木・枯れたかもしれない木は切る前に見極めを" },
    { href: "#teiki", label: "5｜海に近い庭こそ定期的な手入れで木の体力を保つ" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜千葉の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">千葉の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】千葉の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["千葉", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="千葉の剪定・伐採・草刈り業者の比較"
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
              「海が近いせいか、庭木の葉先がいつも茶色い」「風の強い日が続くと、木が傷んでいないか気になる」——三方を海に囲まれた千葉では、庭業者を探すきっかけに「潮風と風」がよく関わってきます。海に近い住宅地の庭木は、内陸の庭に比べて葉や枝が傷みやすい環境に置かれがちで、傷んだまま放置すると木の体力が落ち、樹形の乱れや枯れ込みにつながることもあります。
            </p>
            <p>
              本記事では、千葉市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「潮風で傷んだ庭木のサインの見方」「風を受け流す樹形に整える剪定の考え方」「弱った木を切るかどうかの見極め」といった、海に近い環境ならではの依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="chiba5" num="1">千葉で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            千葉市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月12日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            千葉の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月12日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜潮風 */}
          <H2 id="shiokaze" num="2">潮風にさらされる庭木は「傷みのサイン」を早めに拾う</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            海に近い庭では、潮風に含まれる塩分が葉に付着することで、<Hl>葉先の変色や葉の傷みが起こりやすくなる</Hl>とされています。海側に面した枝だけ葉が茶色い、風の通り道になっている側だけ葉が薄い、といった「方角による差」が出やすいのが、潮風による傷みでよく語られる特徴です。ただし、似た症状は病害虫や水切れ、根の傷みでも起こるため、見た目だけで原因を決めつけないことが大切です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            対処の基本は、<Hl>傷んだ枝葉を放置せず、原因を確かめたうえで整理する</Hl>ことです。傷んだ部分をそのままにすると見た目が悪いだけでなく、木の体力低下や病害虫の入り口になることもあります。剪定110番は現地調査・見積もりが無料なので、「この傷みは切るべきか、様子を見るべきか」という相談から始められます。葉の変色が病気や害虫によるものだった場合も、剪定とあわせて消毒まで相談できるのが業者に見てもらう利点です。
          </p>

          {/* 3｜風を受け流す剪定 */}
          <H2 id="kazesentei" num="3">風を受け流す樹形に——枝を透かす剪定という備え</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            風の強い地域の庭木の手入れでよく使われるのが、枝を間引いて樹冠に風の通り道を作る「透かし剪定」の考え方です。枝葉が密に茂った木は帆のように風を受け止めてしまいますが、<Hl>混み合った枝を整理して風が抜けるようにすれば、幹や枝への負担を減らせます</Hl>。倒木・枝折れへの備えとしても、台風シーズン前の点検とあわせて取り入れたい手入れです。台風と庭木の備え全般は
            <Link href="/taifu-niwaki-taisaku/" className="text-[#2D7F3E] underline">台風から庭木を守る対策の解説記事</Link>
            で詳しくまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            注意したいのは、<Hl>強く切り詰めるほど安全になるとは限らない</Hl>ことです。切りすぎは木を弱らせ、切り口から徒長枝が密に噴き出してかえって風を受けやすい樹形になることもあります。どの枝を残してどこを抜くかは経験の差が出る作業なので、高木や大切な木ほどプロに任せる価値があります。お庭マスターは経験10年以上の職人対応と施工後の保証をうたっており、樹形を整える剪定の相談先として選択肢になります。
          </p>

          {/* 4｜見極め */}
          <H2 id="mikiwame" num="4">弱った木・枯れたかもしれない木は切る前に見極めを</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            葉がほとんど落ちてしまった木を前にすると「枯れたから伐採するしかない」と考えがちですが、<Hl>落葉と枯死は見た目が似ていて、素人判断は意外と外れます</Hl>。枝の内側がまだ生きていて、手入れ次第で回復する木もあれば、逆に葉が残っていても根や幹が深く傷んでいる木もあります。枯れているかどうかの見分け方の基本は
            <Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見極めの解説記事</Link>
            で解説しています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見極めが重要なのは、<Hl>本当に枯れた木は強風時に倒れたり枝を落としたりするリスクが高い</Hl>からです。回復の見込みがない木や、傾いて家屋・道路側に倒れかねない木は、安全のために伐採を検討すべき状態といえます。伐採110番は危険木の特殊伐採から伐採後の木材処分までの一括対応をうたっており、24時間受付・見積もり無料です。「切るべきか迷っている」段階でも、まず状態を見てもらうことから始めましょう。
          </p>

          {/* 5｜定期管理 */}
          <H2 id="teiki" num="5">海に近い庭こそ定期的な手入れで木の体力を保つ</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            潮風や強風にさらされる環境の庭木は、内陸の庭よりも消耗が早い分、<Hl>「傷んだら手当てする」より「傷みをためない」管理が向いています</Hl>。年に決まった回数の剪定で樹形と風通しを保ち、傷んだ枝をこまめに整理しておけば、木の体力が保たれ、大掛かりな伐採や植え替えに至るリスクを減らせます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            smileガーデンの<Hl>定額制の年間管理プラン</Hl>は剪定・消毒・施肥をセットで任せられ、季節ごとの手入れを一つの仕組みにできます。作業後の写真付き報告書で仕上がりを確認できるのも安心です。庭の雑草は草刈り110番の定期メンテナンスプランや防草シート施工で手間を減らせます。くらしのマーケットを使えば、地域の事情に通じた出店者を口コミで選び、予約前にメッセージで庭の環境を伝えて相談することもできます。
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
          <H2 id="faq" num="7">千葉の庭業者でよくある質問</H2>
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
            千葉で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。傷んだ枝の整理や透かし剪定なら庭木1本から頼める剪定110番、職人品質と施工後の保証を重視するならお庭マスター、弱った木・危険木の伐採と処分なら伐採110番、雑草対策なら草刈り110番、木の体力を保つ定額管理ならsmileガーデン、というように、目的によって向いているサービスは変わります。口コミで地域の業者を選びたい方はくらしのマーケット、大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            海に近い千葉の庭では、傷みのサインを早めに拾い、風を受け流す樹形を保つことが庭木を長持ちさせる近道です。傷みの原因を自己判断で決めつけないこと、切りすぎない剪定をプロと相談すること、処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["千葉", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/hiroshima/", label: "広島の庭業者おすすめ5選" },
                { href: "/area/kitakyushu/", label: "北九州の庭業者おすすめ5選" },
                { href: "/area/shizuoka/", label: "静岡の庭業者おすすめ5選" },
                { href: "/area/okayama/", label: "岡山の庭業者おすすめ5選" },
                { href: "/area/kumamoto/", label: "熊本の庭業者おすすめ5選" },
                { href: "/area/niigata/", label: "新潟の庭業者おすすめ5選" },
                { href: "/area/kanazawa/", label: "金沢の庭業者おすすめ5選" },
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
                { href: "/agents/oniwa-master/", label: "お庭マスターの口コミ・評判" },
                { href: "/taifu-niwaki-taisaku/", label: "台風から庭木を守る対策" },
                { href: "/niwaki-kareta/", label: "庭木が枯れたかどうかの見極め方" },
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
