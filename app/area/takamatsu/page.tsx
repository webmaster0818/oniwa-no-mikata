import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/takamatsu/";
const UPDATED = "2026年8月16日";
const UPDATED_ISO = "2026-08-16";

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
      "【2026年最新】高松の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "高松で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、手水鉢や灯篭のある和風の庭を保つ手入れの考え方、空き家になった実家の庭の管理まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】高松の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "高松で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。手水鉢・灯篭・松のある和風の庭の意匠を保つ手入れ、松の手入れ費用を抑える任せ方、空き家になった実家の庭を県外から管理する方法、和風の庭の縮小の考え方も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、高松市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "庭木1本からでも気軽に頼みたい人",
      "庭の松やマキの仕立てを職人に相談したい人",
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
        のが特徴です。手入れする人がいなくなった庭の茂った木や、代替わりを機に整理したい木も、伐採から抜根・処分まで一度に相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "大きくなりすぎた庭木を根元から処分したい人",
      "手入れする人のいなくなった庭の木を整理したい人",
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
        もあわせて依頼でき、住む人のいなくなった実家の庭など、通えない敷地の雑草は
        <Hl>定期メンテナンスプラン</Hl>
        でまとめて任せる使い方が向いています。
      </>
    ),
    recommend: [
      "庭や空き地の雑草を低価格で片付けたい人",
      "空き家になった実家の敷地の雑草を管理したい人",
      "草刈りとあわせて防草シートの相談をしたい人",
      "定期契約で草刈りの手間をなくしたい人",
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
        で剪定・消毒・施肥をセットで任せられます。手をかけて作られた和風の庭を、決まったサイクルの手入れで荒らさずに保つ使い方にも向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "一年を通して庭の手入れを定額で任せたい人",
      "親が作った和風の庭を荒らさずに保ちたい人",
      "剪定・消毒・施肥をセットでまとめたい人",
      "離れて暮らす実家の庭を報告書で見守りたい人",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。高松市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、松の手入れの経験がある出店者を口コミから探したり、県外から実家の庭の手配をしたりする使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "松の手入れの経験がある出店者を探したい人",
      "県外から実家の庭の手入れを手配したい人",
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
    t: "① 「庭のどこを守りたいか」を先に決めて伝える",
    b: "手水鉢や灯篭、松の仕立てなど、意匠のある和風の庭では、「この松の形は崩したくない」「灯篭まわりのコケは残したい」といった守りたい部分を先に伝えることが、仕上がりの満足度を大きく左右します。全部を丁寧に、と頼むと費用がかさむため、こだわる部分と手早く済ませてよい部分を分けて伝えると、予算に合った提案を受けやすくなります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・庭の状況で変わります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 松の手入れは「経験の有無」を見積もり時に確認する",
    b: "松のみどり摘みやもみあげは、一般的な庭木の刈り込みとは違う手間のかかる作業で、仕上がりは経験の差が出やすい分野です。見積もり時に「松の手入れの経験はあるか」「年に何回の手入れを想定するか」を確認しましょう。くらしのマーケットなら、口コミや施工写真から松の手入れ実績のある出店者を選ぶ方法もあります。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "高松で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。庭の松を1本だけ整えたいという依頼でも相談できます。ただし松の手入れは樹種別価格が高めに設定されていることが一般的なため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "松のみどり摘みやもみあげだけをお願いすることはできますか？",
    a: "相談できます。松の手入れは春のみどり摘みと秋から冬のもみあげが基本のサイクルとされ、どちらか片方だけの依頼も可能なことが一般的です。ただし作業に手間がかかるため、一般的な庭木より料金が高めになる傾向があります。年間の手入れ回数と時期をセットで相談すると、費用の見通しが立てやすくなります。詳しくは当サイトの松の手入れの解説記事も参考にしてください。",
  },
  {
    q: "手水鉢や灯篭のまわりの手入れも頼めますか？",
    a: "頼めます。手水鉢や灯篭のまわりは、雑草を抜きすぎるとコケや下草の景色まで失われることがあるため、「どこまで手を入れるか」を業者と共有することが大切です。水が溜まる手水鉢は蚊の発生源になることがあるため、使っていない場合は水の管理も相談しましょう。灯篭や庭石の撤去・移設まで考える場合は、重量物の扱いに慣れた業者への依頼が必要です。",
  },
  {
    q: "空き家になった高松の実家の庭を、県外から管理できますか？",
    a: "できます。くらしのマーケットなら庭の写真をもとに県外から出店者を選んで予約でき、草刈り110番の定期メンテナンスプランやsmileガーデンの年間管理プランなら、通わなくても定期的に人の手が入る状態を作れます。立ち会いの要否・鍵や門の開閉・作業後の報告方法を手配時に確認しておくとスムーズです。",
  },
  {
    q: "誰も住んでいない実家の庭木は、放置するとどうなりますか？",
    a: "一般に、枝が越境して隣家や道路にかかる、害虫が発生する、見た目の荒れから空き家であることが周囲に伝わりやすくなる、といった問題につながるとされています。トラブルになってから対処すると費用も労力も大きくなるため、最低限「年に数回の剪定・草刈りが入る仕組み」だけでも作っておくのがおすすめです。詳しくは当サイトの空き家の庭管理の解説記事をご覧ください。",
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

export default function AreaTakamatsuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】高松の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "高松で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-16T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "高松の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#takamatsu5",
      label: "1｜高松で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "高松の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#wafu", label: "2｜手水鉢・灯篭のある和風の庭は「守る部分」を決めて手入れする" },
    { href: "#matsu", label: "3｜松の手入れは「任せる範囲」を決めると費用を抑えやすい" },
    { href: "#akiya", label: "4｜空き家になった実家の庭は「荒れる前の仕組み化」が肝心" },
    { href: "#shukusho", label: "5｜和風の庭の縮小は「木・石・下草」を分けて考える" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜高松の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">高松の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】高松の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["高松", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="高松の剪定・伐採・草刈り業者の比較"
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
              「親が大事にしてきた松と手水鉢のある庭を、自分の代でどう保てばいいのか分からない」「実家が空き家になり、庭だけがどんどん茂っていく」——高松で庭業者を探す相談には、こうした「和風の庭の維持」と「住む人のいなくなった実家の庭」の悩みがよく関わってきます。名園を身近に持つ土地柄もあってか、手水鉢や灯篭、仕立てられた松を備えた庭は住宅にも多く、その分「作った人がいなくなった後、誰がどう手入れするか」という問題に直面しやすいのがこの土地の庭事情です。
            </p>
            <p>
              本記事では、高松市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「手水鉢・灯篭のある庭の守りどころの決め方」「松の手入れの費用を抑える任せ方」「空き家になった実家の庭を県外から管理する方法」「和風の庭を無理なく縮小する考え方」といった、この土地の庭を受け継ぐ人のための依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="takamatsu5" num="1">高松で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            高松市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月16日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            高松の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月16日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、高松での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜和風の庭 */}
          <H2 id="wafu" num="2">手水鉢・灯篭のある和風の庭は「守る部分」を決めて手入れする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            手水鉢や灯篭、仕立てられた松や飛び石で構成された和風の庭は、<Hl>「どこを守り、どこは簡素にするか」を決めてから手入れを頼む</Hl>のが基本です。和風の庭の美しさは、木の形だけでなく、灯篭まわりのコケや下草、石と植栽の間合いまで含めた全体の景色で成り立っています。雑草を根こそぎ抜いてほしいのか、コケや下草の景色は残してほしいのか——この線引きを伝えずに「きれいにしてください」と頼むと、意図と違う仕上がりになることがあります。コケを景色として保つ考え方は
            <Link href="/niwa-koke-taisaku/" className="text-[#2D7F3E] underline">庭のコケ対策の解説記事</Link>
            も参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            使われなくなった手水鉢は水が溜まったままになりがちで、<Hl>蚊の発生源や水垢・落ち葉の溜まり場</Hl>になることがあります。水を張り続けるのか、乾いた景色として扱うのかも含めて、庭全体の管理方針を業者と共有しましょう。飛び石の間から生える雑草の扱いは
            <Link href="/tobiishi-zasso/" className="text-[#2D7F3E] underline">飛び石まわりの雑草の解説記事</Link>
            でまとめています。手をかけて作られた庭ほど、その意図を汲んで作業してくれる業者を選ぶことが、庭の価値を保つ近道です。
          </p>

          {/* 3｜松 */}
          <H2 id="matsu" num="3">松の手入れは「任せる範囲」を決めると費用を抑えやすい</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            和風の庭の主役になりやすい松は、春の<Hl>みどり摘み</Hl>と秋から冬の<Hl>もみあげ</Hl>という独特の手入れを積み重ねて形が保たれる木で、一般的な庭木の刈り込みよりも手間がかかるぶん、費用も高めになる傾向があります。だからこそ、「全部を毎年職人任せ」以外の選択肢も含めて考えるのが現実的です。たとえば、形を決める仕立ての剪定は年1回プロに任せ、日常の枯れ葉取りは自分で行う、といった分担です。作業の内容と時期の基本は
            <Link href="/matsu-teire/" className="text-[#2D7F3E] underline">松の手入れの解説記事</Link>
            で詳しくまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者選びでは、<Hl>松の手入れの経験と、年間の手入れ回数の想定</Hl>を見積もり時に確認しましょう。剪定110番は樹種別の料金目安を掲げており、現地調査・見積もりは無料です。くらしのマーケットなら、施工写真や口コミから松を扱い慣れた出店者を選べます。「もう松を維持しきれない」という場合は、無理に放置して枯らすより、仕立てを簡素にする・別の木に替える・伐採するといった選択肢を、庭全体の計画として相談するのがおすすめです。
          </p>

          {/* 4｜空き家の実家 */}
          <H2 id="akiya" num="4">空き家になった実家の庭は「荒れる前の仕組み化」が肝心</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            進学や就職で家族が県外へ移り、親の代が終わった実家が空き家になる——高松に限らない話ですが、庭のある家では「家より先に庭が荒れる」のが通例です。庭木の枝は隣家や道路へ伸び、雑草は夏のたびに茂り、<Hl>庭の荒れは「この家には人がいない」というサインとして周囲に伝わりやすい</Hl>ため、防犯面でも近隣関係でも放置は得策ではありません。対処が遅れるほど、剪定も草刈りも一度あたりの費用がかさんでいきます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            現実的な解は、<Hl>通わなくても定期的に人の手が入る仕組みを作ってしまう</Hl>ことです。雑草は草刈り110番の定期メンテナンスプラン、庭木はsmileガーデンの年間管理プランのように、決まったサイクルで作業と報告が入る形にすれば、県外からでも庭の状態を把握できます。単発の依頼なら、くらしのマーケットで写真をもとに出店者へ相談する方法もあります。空き家の庭に起こりやすい問題と管理の全体像は
            <Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家・遠方の実家の庭管理の解説記事</Link>
            で詳しくまとめています。
          </p>

          {/* 5｜縮小 */}
          <H2 id="shukusho" num="5">和風の庭の縮小は「木・石・下草」を分けて考える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            「庭は残したいが、今の規模は維持できない」という場合、和風の庭では<Hl>木・石・下草を分けて縮小を考える</Hl>と判断しやすくなります。手間の大部分を生むのは仕立ての必要な木と伸びる下草で、灯篭や庭石そのものは手入れを要求しません。手のかかる木を減らして石の景色を活かす形にすれば、和の趣を保ったまま管理の負担を大きく減らせます。手間の少ない木への入れ替えは
            <Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の解説記事</Link>
            が参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            木を減らす場合は、伐採110番のように<Hl>伐採から抜根・処分まで一括</Hl>で頼めるサービスが便利です。切り株を残すと後々の腐朽や虫のリスクがあるため、抜根まで含めた見積もりを取りましょう（詳しくは
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            へ）。灯篭や庭石まで手放す場合は重量物の撤去になり、扱える業者が限られます。進め方は
            <Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯篭の撤去の解説記事</Link>
            でまとめています。売却や処分の判断は焦らず、まず「残す景色」を決めることから始めてください。
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
          <H2 id="faq" num="7">高松の庭業者でよくある質問</H2>
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
            高松で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。松の仕立てや庭木1本の手入れなら樹種別の料金目安がある剪定110番、維持しきれなくなった木の整理なら処分まで一括の伐採110番、空き家になった実家の雑草なら定期プランのある草刈り110番、和風の庭を決まったサイクルで保つならsmileガーデン、松の実績がある出店者を口コミで探すならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            受け継いだ和風の庭との付き合い方に、正解は一つではありません。守る部分と簡素にする部分の線引きを決めること、松は任せる範囲を決めて費用を計画すること、空き家の庭は荒れる前に定期の仕組みを作ること、縮小するなら木・石・下草を分けて考えること、処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["高松", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/nagano/", label: "長野の庭業者おすすめ5選" },
                { href: "/area/gifu/", label: "岐阜の庭業者おすすめ5選" },
                { href: "/area/mito/", label: "水戸の庭業者おすすめ5選" },
                { href: "/area/maebashi/", label: "前橋の庭業者おすすめ5選" },
                { href: "/area/toyama/", label: "富山の庭業者おすすめ5選" },
                { href: "/area/nagasaki/", label: "長崎の庭業者おすすめ5選" },
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
                { href: "/agents/kusakari-110ban/", label: "草刈り110番の口コミ・評判" },
                { href: "/matsu-teire/", label: "松の手入れの基本" },
                { href: "/akiya-niwa-kanri/", label: "空き家・遠方の実家の庭管理" },
                { href: "/niwaishi-toro-tekkyo/", label: "庭石・灯篭の撤去" },
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
