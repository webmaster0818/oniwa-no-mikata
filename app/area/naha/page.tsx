import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/naha/";
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
      "【2026年最新】那覇の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "那覇で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、台風シーズン前の枝抜き・支柱・飛散対策の一般的な考え方、潮風を受ける環境での庭木との付き合い方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】那覇の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "那覇で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。台風への備えを年中行事にする枝抜き・支柱・飛散物対策の考え方、潮風を受ける庭の木の選び方と手入れ、防風を兼ねた生垣の管理、一年中伸びる雑草・つる植物の抑え方も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、那覇市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "庭木1本からでも気軽に頼みたい人",
      "台風シーズン前に風を受けにくい枝抜きを頼みたい人",
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
        のが特徴です。強風を受けて傾いたままの木や、建物に覆いかぶさるほど茂った木の整理も、伐採から抜根・処分まで一度に相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "大きくなりすぎた庭木を根元から処分したい人",
      "傾いたまま放置している木を早めに整理したい人",
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
        もあわせて依頼でき、冬の休みがほとんどなく一年中伸び続ける雑草は、
        <Hl>定期メンテナンスプラン</Hl>
        で年間の管理としてまとめて任せる使い方が向いています。
      </>
    ),
    recommend: [
      "庭や空き地の雑草を低価格で片付けたい人",
      "一年中伸び続ける雑草を定期契約で管理したい人",
      "草刈りとあわせて防草シートの相談をしたい人",
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
        で剪定・消毒・施肥をセットで任せられます。台風シーズンの前に枝を整え、シーズン後に傷んだ枝を手当てするといった、季節の節目に手が入る年間サイクルを作る使い方にも向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "一年を通して庭の手入れを定額で任せたい人",
      "台風シーズンの前後に合わせて庭木を整えたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。那覇市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、台風前の庭まわりの片付けや潮風で汚れた外まわりの洗浄など、庭木の手入れ以外の困りごとを扱う出店者を探す使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで庭の状況を相談したい人",
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
    t: "① 「風を受けたときにどうなるか」まで含めて状況を伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、台風への備えを兼ねた依頼なら、庭木の周囲に何があるか（建物・駐車場・隣家・道路など）も重要な情報になります。枝が折れたり木が倒れたりしたときに何に当たる位置なのかを写真とあわせて伝えると、枝抜きの程度や支柱の要否など、風を意識した提案を受けやすくなります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・庭の状況で変わります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 台風の接近が報じられてからでは間に合わない前提で動く",
    b: "台風の進路情報が出ると、庭木の枝下ろしや飛びそうな物の片付けの依頼は一気に集中し、直前の予約は取りにくくなります。接近してからの高所作業は業者にとっても危険で、断られることもあります。備えの剪定や危険木の点検は、天気の急変とは関係のない落ち着いた時期に計画的に済ませておくのが、この土地での基本の段取りです。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "那覇で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。玄関先のシンボルツリーを1本だけ整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。",
  },
  {
    q: "台風が近づいてから枝下ろしを頼んでも間に合いますか？",
    a: "直前の依頼は予約が集中して受けてもらえないことが多く、強風下・雨天の高所作業は危険なため断られる場合もあります。台風への備えとしての枝抜きや危険木の点検は、進路情報が出てからではなく、落ち着いた時期に計画的に済ませておくのが基本です。接近直前にできることは、鉢植えや庭の小物の屋内への取り込みなど、地上で安全にできる範囲にとどめましょう。",
  },
  {
    q: "潮風の当たる庭では、どんな木を選べばよいですか？",
    a: "一般に、海からの風を受けやすい場所では、潮風への耐性がある樹種を選ぶのが基本とされ、沿岸の緑化にも使われてきた木は候補になります。同じ庭でも建物の陰になる場所と風が抜ける場所では条件が違うため、植える場所ごとに考えることが大切です。新しく植える・植え替える場合は、その土地で施工実績のある業者や園芸店に、場所の条件を伝えて相談しましょう。",
  },
  {
    q: "潮風で庭木の葉が茶色くなってしまいました。枯れたのでしょうか？",
    a: "一般論として、強い潮風を受けた後に葉が茶色く傷むことはよくあり、葉が傷んでいても幹や枝が生きていれば回復する場合があります。すぐに伐採を決めず、傷んだ葉や枝の状態をしばらく観察するのが基本です。枝先を軽く折ってみて内部が緑色なら生きている可能性があります。判断に迷う場合は、写真を撮って業者や園芸店に相談しましょう。",
  },
  {
    q: "台風の後、折れた枝や倒れた木の片付けも頼めますか？",
    a: "頼めます。伐採110番は倒れた木や傾いた木の伐採・処分まで一括で相談でき、24時間受付です。ただし台風後は同様の依頼が集中し、順番待ちになることがあります。電線に触れている木や建物に倒れかかった木は、自分で動かそうとせず、危険のない場所から写真を撮って状況を伝え、専門の対応を待ちましょう。",
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

export default function AreaNahaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】那覇の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "那覇で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "那覇の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#naha5",
      label: "1｜那覇で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "那覇の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#taifu-sonae", label: "2｜台風への備えは「枝抜き・支柱・飛散対策」の3点セットで年中行事にする" },
    { href: "#shiokaze", label: "3｜潮風を受ける庭は「木の選び方」と「傷んだ後の見極め」で付き合う" },
    { href: "#ikegaki", label: "4｜生垣・目隠しの木は「風よけの役割」ごと手入れを考える" },
    { href: "#zasso", label: "5｜一年中伸びる雑草・つる植物は「刈る」と「覆う」で先手を打つ" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜那覇の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">那覇の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】那覇の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["那覇", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="那覇の剪定・伐採・草刈り業者の比較"
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
              「台風のたびに、庭木の枝が折れないかひやひやする」「潮風のせいか、植えた木がなかなか元気に育たない」——那覇で庭業者を探す相談には、こうした「風への備え」と「潮風を受ける環境での木の育て方」の悩みがよく関わってきます。台風の接近が珍しくない土地では、庭木の手入れは見た目を整えるだけの作業ではなく、枝や木そのものを飛ばさない・倒さないための備えという意味を持ちます。海に近い市街地では、潮風と付き合いながら木を育てる工夫も必要です。
            </p>
            <p>
              本記事では、那覇市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「枝抜き・支柱・飛散対策という台風への備えの3点セット」「潮風を受ける庭の木の選び方と傷んだ後の見極め」「防風を兼ねた生垣の手入れ」「一年中伸びる雑草・つる植物の抑え方」といった、この土地の庭ならではの依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="naha5" num="1">那覇で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            那覇市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月16日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            那覇の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月16日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、那覇での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜台風への備え */}
          <H2 id="taifu-sonae" num="2">台風への備えは「枝抜き・支柱・飛散対策」の3点セットで年中行事にする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            台風の接近が珍しくない土地の庭では、備えを「その年の思いつき」ではなく<Hl>毎年決まった時期に行う年中行事にしてしまう</Hl>のが、負担を減らすいちばんの近道です。柱になるのは3つ。1つめは、枝が混み合った木の<Hl>枝抜き剪定</Hl>で、風の通り道を作って木が帆のように風を受けるのを防ぎます。2つめは、植えて間もない木や根の張りが浅い木の<Hl>支柱の点検・立て直し</Hl>です。支柱は結び目がゆるんだり資材が傷んだりするため、立てたままの放置は禁物です（詳しくは
            <Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の解説記事</Link>
            へ）。3つめは、鉢植え・すだれ・園芸資材など<Hl>飛ばされやすい物の片付け場所をあらかじめ決めておく</Hl>ことです。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            このうち枝抜きと支柱は、高さや木の状態によっては自分で行うのが難しい作業です。剪定110番なら現地調査・見積もり無料で、「風を受けにくくしたい」という目的から相談できます。すでに傾いている木や幹の傷んだ木は、強風時に倒れて建物や隣家に被害を及ぼすおそれがあるため、伐採110番のような伐採・処分まで一括のサービスに早めに相談しましょう。事前・事後にやるべきことの全体像は
            <Link href="/taifu-niwaki-taisaku/" className="text-[#2D7F3E] underline">台風前後の庭木対策の解説記事</Link>
            で詳しくまとめています。
          </p>

          {/* 3｜潮風 */}
          <H2 id="shiokaze" num="3">潮風を受ける庭は「木の選び方」と「傷んだ後の見極め」で付き合う</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            海に近い庭では、潮風の影響とどう付き合うかが木を育てるうえでの前提になります。一般的な考え方の1つめは、<Hl>植える段階で潮風への耐性がある樹種を選ぶ</Hl>ことです。沿岸の緑化に昔から使われてきた木は、それだけ潮に耐えてきた実績があるということでもあります。同じ敷地でも、風が抜ける場所と建物や塀の陰になる場所では条件が大きく違うため、「どこに植えるか」もあわせて考えましょう。2つめは、強い潮風を受けた後に<Hl>葉に付いた潮を水で洗い流せる範囲は流しておく</Hl>ことです。葉に潮が付いたまま晴天が続くと、葉が傷む一因になると一般に言われています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            そして大切なのが、傷んだ後の見極めです。潮風で葉が茶色くなると枯れたように見えますが、<Hl>葉が傷んでいても幹や枝が生きていれば回復することがある</Hl>ため、慌てて切り倒すのは早計です。しばらく様子を見て、新芽が出るかどうかを確認しましょう。枯れたかどうかの見分け方は
            <Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたときの解説記事</Link>
            でまとめています。判断に迷う場合や、新しく植える木の相談は、その土地の条件を知る業者・園芸店に写真を添えて相談するのが確実です。
          </p>

          {/* 4｜生垣 */}
          <H2 id="ikegaki" num="4">生垣・目隠しの木は「風よけの役割」ごと手入れを考える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            風の強い土地では、生垣や目隠しの木は視線を遮るだけでなく、<Hl>庭や建物に当たる風をやわらげる「風よけ」の役割</Hl>も担ってきました。だからこそ手入れでは、「どこまで透かすか」の加減が大切です。密に茂りすぎた生垣は風をまともに受けて傷みやすく、逆に強く刈り込みすぎれば風よけとしての働きが落ちます。刈り込みの時期と方法の基本は
            <Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの解説記事</Link>
            を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            生垣の作り替えや、目隠しを兼ねた木の植え替えを考えるときは、<Hl>「風・潮・視線」の3つをどう受け持たせるか</Hl>を業者に伝えると提案が的確になります。目隠しに向く木の選び方は
            <Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しの庭木の解説記事</Link>
            で、生垣とフェンスの使い分けは
            <Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較記事</Link>
            でまとめています。手入れの続けやすさまで含めて、くらしのマーケットで造園系の出店者に相談したり、smileガーデンの年間管理で刈り込みをサイクル化したりする方法もあります。
          </p>

          {/* 5｜雑草・つる */}
          <H2 id="zasso" num="5">一年中伸びる雑草・つる植物は「刈る」と「覆う」で先手を打つ</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            冬らしい冬が少ない温暖な土地では、雑草の生育が止まる期間が短く、<Hl>「涼しくなったら落ち着くだろう」という本土の感覚が通用しにくい</Hl>のが実情です。気づいたときに刈るだけの後追い管理では負担が続くため、刈った直後の地面を防草シートや砂利で覆い、雑草の生える面積そのものを減らしていく方法が理にかなっています。方法ごとの違いは
            <Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の比較記事</Link>
            と
            <Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>
            でまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見落としがちなのが、フェンスや庭木に絡みつく<Hl>つる植物の管理</Hl>です。勢いのあるつるは放置すると木を覆って弱らせたり、隣家側へ越境したりするため、小さいうちに根元から断つのが基本です（詳しくは
            <Link href="/tsuru-shokubutsu-kanri/" className="text-[#2D7F3E] underline">つる植物の管理の解説記事</Link>
            へ）。草刈り110番は1平米600円〜の草刈りに加えて防草シート施工にも対応しており、<Hl>定期メンテナンスプラン</Hl>で年間の管理として任せる方法もあります。暑い時期の草刈りは体への負担も大きいため、無理せず業者を使い分けましょう。
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
          <H2 id="faq" num="7">那覇の庭業者でよくある質問</H2>
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
            那覇で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。台風への備えを兼ねた枝抜きや庭木1本の手入れなら剪定110番、傾いた木・危険木の整理なら処分まで一括の伐採110番、一年中伸びる雑草の管理なら防草シートまで相談できる草刈り110番、季節の節目に手が入る年間サイクルを作るならsmileガーデン、庭まわりの片付けや洗浄など幅広い困りごとを口コミで選んだ出店者に頼むならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            風の強い土地の庭は、「傷んでから直す」より「傷まないように整えておく」ほうが、費用も心配ごとも小さく済みます。枝抜き・支柱・飛散対策の3点セットを落ち着いた時期に済ませること、潮風で傷んだ木は慌てて切らず見極めること、雑草は刈るだけでなく覆って面積を減らすこと、処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["那覇", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/takamatsu/", label: "高松の庭業者おすすめ5選" },
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
                { href: "/agents/bassai-110ban/", label: "伐採110番の口コミ・評判" },
                { href: "/taifu-niwaki-taisaku/", label: "台風前後の庭木対策" },
                { href: "/niwaki-shichu/", label: "庭木の支柱の立て方と点検" },
                { href: "/tsuru-shokubutsu-kanri/", label: "つる植物の管理方法" },
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
