import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/wakayama/";
const UPDATED = "2026年8月19日";
const UPDATED_ISO = "2026-08-19";

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
      "【2026年最新】和歌山の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "和歌山で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、柑橘や果樹のある庭の手入れの頼み方、住む人がいなくなった実家の庭を管理を縮めながら保つ考え方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】和歌山の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "和歌山で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。柑橘・果樹のある庭を「残す木」と「手放す木」に分ける考え方、住む人のいない実家の庭の落果や枝の張り出しへの備え、遠方から年2回の型で管理する頼み方も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、和歌山市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "庭に残した果樹を1本だけ整えてもらいたい人",
      "毎年伸びる枝を本数単位でこまめに頼みたい人",
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
      "当サイトのレビュー記事作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。果樹の仕立てに慣れた職人かどうかは加盟店により異なるため、依頼時に樹種を伝えて相談しましょう。正確な金額は無料の現地調査・見積もりで確定します。",
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
        のが特徴です。手入れの担い手がいなくなり、実も収穫されないまま伸び続けた果樹の整理も、伐採から抜根・処分まで一度に相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "収穫しなくなった果樹を根元から整理したい人",
      "実家の庭の木を減らして管理を軽くしたい人",
      "伐採した木材の処分まで一括で頼みたい人",
      "抜根して跡地を作り替えたい人",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトのレビュー記事作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。所有者以外が伐採を手配する場合は、事前に所有者の同意を得ておきましょう。",
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
        もあわせて依頼でき、住む人のいなくなった実家の敷地を
        <Hl>定期メンテナンスプラン</Hl>
        で荒れさせずに保つ使い方にも向いています。
      </>
    ),
    recommend: [
      "離れて暮らす実家の敷地の草を定期的に片付けたい人",
      "果樹の足元の草を刈って落果を拾いやすくしたい人",
      "草刈りとあわせて防草シートの相談をしたい人",
      "年に数回の草刈りを定期契約でまとめたい人",
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
        で剪定・消毒・施肥をセットで任せられます。住む人が離れた庭を「毎年決まった時期に手が入る状態」にしておきたい場合の受け皿になります。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れるため、遠方からでも庭の状態を把握できます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "遠方の実家の庭を定額で任せたい人",
      "毎年決まった時期に手が入る状態を作りたい人",
      "剪定・消毒・施肥をセットでまとめたい人",
      "現地に行けなくても報告書で仕上がりを確認したい人",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。和歌山市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、「実の付いた木がある」「留守宅なので立ち会えない」といった事情を写真とあわせて伝え、対応できるかを確かめてから頼めます。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "留守宅の作業を予約前に相談しておきたい人",
      "果樹の扱いに慣れた出店者を探したい人",
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
    t: "① 庭にある木を「残す・小さくする・手放す」で仕分けてから相談する",
    b: "果樹のある庭は、木ごとに向き合い方が違います。実を食べたい木、花や緑を眺めたいだけの木、もう手が回らない木——この三つに仕分けたリストを作ってから見積もりを頼むと、業者は「どこにどれだけ手をかけるか」を提案しやすくなります。仕分けが曖昧なまま「全部きれいにしてください」と頼むと、残したかった枝まで詰められたり、逆に手放すつもりの木に費用がかかったりします。写真に番号を振って渡すだけでも行き違いは大きく減ります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・庭の状況で変わります。果樹は枝が横に広がるものが多く、切った枝の量が見た目以上になることがあるため、処分費・出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されます。",
  },
  {
    t: "③ 留守宅の作業は「入り方・立ち会い・報告」を先に決める",
    b: "住む人のいない家の庭を頼むときは、門や裏口の開け方、現地で水道や電気が使えるか、作業日の連絡方法、作業後の報告手段を最初に取り決めておきましょう。近隣への声かけが必要かどうかも、あらかじめ業者と相談しておくと当日の混乱がありません。写真付きの報告書が出るサービスなら、現地に行かなくても仕上がりと庭の変化を確認できます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "和歌山で庭の柑橘や果樹の剪定も頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。ただし、庭の果樹は「実を採るための仕立て」と「大きくしないための整枝」で切り方の狙いが変わります。実を楽しみたいのか、樹形を小さく保ちたいのかを最初に伝えると、意図に沿った仕上がりになりやすくなります。果樹の扱いに慣れた職人かどうかは加盟店・出店者によって差があるため、依頼時に樹種を伝えて確認しましょう。",
  },
  {
    q: "実の付いている時期でも剪定してもらえますか？",
    a: "作業自体は可能なことが多いものの、木の状態や実の付き方によっては時期をずらす提案を受ける場合があります。強く切る作業は木に負担がかかるため、樹種ごとの適期に合わせるのが基本です。伸びすぎた枝が通路や隣地にかかっているなど、急いで対処したい枝だけを先に落とし、本格的な仕立て直しは適期に回す——という二段構えも現実的です。樹種ごとの適期の考え方は、当サイトの剪定の時期の解説記事でまとめています。",
  },
  {
    q: "住む人がいなくなった実家の庭は、年に何回くらい手を入れればよいですか？",
    a: "敷地の広さと木の本数によりますが、「草の伸びる時期に草刈り」「枝が伸びきる前に剪定」の年2回を基本の型にして、必要なら回数を足していく組み立てが分かりやすいでしょう。落ちた実や落ち葉が気になる庭では、その時期に1回足すことも検討します。まず1年やってみて、伸び具合や近隣からの見え方をもとに翌年の回数を調整するのが、無駄の少ない進め方です。",
  },
  {
    q: "誰も住んでいない家の庭木の実が落ちて、近所に迷惑をかけないか心配です。",
    a: "落ちた実は放置すると傷んで虫が集まりやすく、路面に落ちれば滑る原因にもなります。人が住んでいない家ほど気づくのが遅れるため、実の付く木は「収穫しないなら実を付けさせない方向で整える」「敷地の外へ張り出した枝は先に落とす」といった予防的な対処が有効です。枝が隣地や道路にかかっている場合の考え方は、当サイトの枝の越境の解説記事でまとめています。",
  },
  {
    q: "遠方に住んでいますが、立ち会わずに依頼して支払いまでできますか？",
    a: "立ち会いの要否・支払い方法はサービスや加盟店により異なります。不在での作業を受けてもらえる場合でも、敷地への入り方や鍵の扱い、作業前後の連絡方法は事前の取り決めが必要です。smileガーデンは作業後に写真付きの作業報告書が受け取れるため、現地に行けない依頼でも仕上がりを確認できます。予約前に条件を確認したい場合は、メッセージで相談できるくらしのマーケットも使いやすい選択肢です。",
  },
  {
    q: "切った枝や収穫しなかった実は、処分までお願いできますか？",
    a: "処分まで対応する業者が一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。伐採110番は伐採後の木材処分まで一括対応をうたっています。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。実や生ごみの扱いは枝とルールが異なることがある点にも注意してください。",
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

export default function AreaWakayamaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】和歌山の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "和歌山で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-19T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "和歌山の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#wakayama5",
      label: "1｜和歌山で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "和歌山の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kaju-shiwake", label: "2｜庭の果樹は「実を採る木」と「眺める木」に分けて頼む" },
    { href: "#rakka", label: "3｜住む人のいない家の果樹は「落ちる実」と「張り出す枝」が先に問題になる" },
    { href: "#nen2kai", label: "4｜遠方から実家の庭を管理するなら「年2回の型」を先に決める" },
    { href: "#shukusho", label: "5｜引き継げない果樹は「小さくする」か「手放す」かを決める" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜和歌山の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">和歌山の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】和歌山の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["和歌山", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="和歌山の剪定・伐採・草刈り業者の比較"
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
              「庭の柑橘や果樹に手が回らなくなってきた」「実家に誰も住まなくなったが、庭の木だけが毎年伸びていく」——和歌山で庭業者を探す相談には、こうした「果樹のある庭を、これからどう扱うか」という悩みがよく関わってきます。果樹は花木や常緑樹と違い、実が付くこと自体が手入れの理由にも、放置したときの困りごとにもなる木です。収穫する人がいなくなった庭では、その性質がそのまま管理の負担に変わっていきます。
            </p>
            <p>
              本記事では、和歌山市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「実を採る木と眺める木を分けて頼む考え方」「住む人のいない家で先に問題になる落果と枝の張り出し」「遠方から年2回の型で回す管理」「引き継げない果樹を小さくするか手放すかの判断」といった、果樹のある庭ならではの依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="wakayama5" num="1">和歌山で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            和歌山市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月19日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            和歌山の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月19日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、和歌山での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜果樹の仕分け */}
          <H2 id="kaju-shiwake" num="2">庭の果樹は「実を採る木」と「眺める木」に分けて頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭に植えられた果樹の手入れが難しいのは、<Hl>目的によって切り方の狙いが変わる</Hl>からです。実を採りたい木なら、日当たりと風通しを確保して枝を更新していく仕立てが必要になります。一方、実は特に採らず緑や花を眺めたいだけの木なら、狙いは「大きくしないこと」に絞られ、手入れはずっと簡単になります。同じ庭に両方があるのに「全部お願いします」とだけ伝えると、業者はどちらの狙いで切るべきか判断できません。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            そこでおすすめなのが、依頼前に<Hl>木を一本ずつ「実を採る／眺めるだけ／手放す」に仕分けておく</Hl>ことです。実を採る木は数を絞り、それ以外は樹形を小さく保つ管理に切り替えれば、庭全体の手間と費用は目に見えて軽くなります。1本単位で頼める剪定110番のようなサービスなら、この仕分けに沿って「今年はこの木だけ」という頼み方もできます。庭木と食べられる植物の付き合い方は
            <Link href="/kateisaien-niwaki/" className="text-[#2D7F3E] underline">家庭菜園と庭木の解説記事</Link>
            、花や実を楽しむ木の手入れの時期は
            <Link href="/kaboku-kaika-teire/" className="text-[#2D7F3E] underline">花木の開花と手入れの解説記事</Link>
            が参考になります。
          </p>

          {/* 3｜落果と越境 */}
          <H2 id="rakka" num="3">住む人のいない家の果樹は「落ちる実」と「張り出す枝」が先に問題になる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            人が住まなくなった家の庭で、最初に近隣の困りごとになりやすいのが<Hl>収穫されずに落ちた実</Hl>です。地面に落ちた実は傷んで虫が集まりやすく、道路や隣地に転がれば滑って転ぶ原因にもなります。日常的に人の目が入らない庭ほど、こうした変化に気づくのが遅れます。収穫する予定がないのなら、実を楽しむための手入れではなく、<Hl>実の負担を減らし、落ちても片付けやすい状態にしておく手入れ</Hl>へ切り替えるのが現実的です。足元の草を刈っておくだけでも、落ちた実の回収はずいぶん楽になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            もう一つが、敷地の外へ伸びた枝です。果樹は横に広がる樹形になりやすく、放っておくと道路や隣家の側へ張り出します。<Hl>枝や落ち葉が隣地に入ることは、費用よりも先に人間関係の問題になりがち</Hl>なので、越境しそうな方向の枝は早めに落としておきましょう。考え方は
            <Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境トラブルの解説記事</Link>
            で、住む人のいない家の庭全般の管理は
            <Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の解説記事</Link>
            でまとめています。
          </p>

          {/* 4｜年2回の型 */}
          <H2 id="nen2kai" num="4">遠方から実家の庭を管理するなら「年2回の型」を先に決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            離れて暮らす家の庭を、そのつど気づいたときに手配しようとすると、たいてい後手に回ります。<Hl>「草の伸びる時期に草刈り1回」「枝が伸びきる前に剪定1回」という年2回を基本の型にして、先に予定として押さえてしまう</Hl>ほうが、費用も手間も読めるようになります。実の落ちる時期に片付けを1回足す、庭の一部だけ範囲を広げるといった調整は、この型ができてからで十分です。草刈り110番の定期メンテナンスプランや、smileガーデンの定額制の年間管理プランは、こうした「型」を業者側の段取りに乗せる使い方に向いています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            遠方からの依頼で欠かせないのが、<Hl>現地を見ずに状況を把握できる仕組み</Hl>です。写真付きの作業報告書が受け取れるサービスなら、作業のたびに庭の変化を確認でき、翌年の回数を決める材料にもなります。敷地への入り方、鍵や門の扱い、作業日の連絡方法は最初に取り決めて、メールなど記録の残る形にしておきましょう。一年の庭仕事の全体像は
            <Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュールの解説記事</Link>
            、依頼前の準備は
            <Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">剪定を依頼する前の準備の解説記事</Link>
            が参考になります。
          </p>

          {/* 5｜縮小 */}
          <H2 id="shukusho" num="5">引き継げない果樹は「小さくする」か「手放す」かを決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            世代が変わって庭の手入れを引き継ぐとき、いちばん判断を先送りにされやすいのが果樹です。「植えた人の思い入れがある」「切るのは忍びない」という気持ちは自然なものですが、<Hl>手が入らないまま年々大きくなる木は、数年後にもっと大きな費用と危険になって返ってきます</Hl>。残すなら手の届く高さまで下げて維持する、手放すなら早いうちに切る——この二択を、木ごとに決めておきましょう。高い木の作業がなぜ危険で高くつくのかは
            <Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>
            でまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            手放すと決めた木は、伐採110番のように<Hl>伐採から抜根・木材処分まで一括で相談できる</Hl>サービスなら段取りが一度で済みます。切り株を残すと虫や腐朽の温床になることがあるため、抜根までの見積もりもあわせて取っておくと安心です（
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            へ）。跡地は砂利や防草シートで覆えば草の管理も軽くなります（
            <Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの解説記事</Link>
            へ）。庭全体の管理を段階的に縮めていく進め方は
            <Link href="/niwajimai/" className="text-[#2D7F3E] underline">庭じまいの解説記事</Link>
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
          <H2 id="faq" num="7">和歌山の庭業者でよくある質問</H2>
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
            和歌山で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。残すと決めた果樹を1本単位で整えるなら剪定110番、引き継げない木を根元から片付けるなら処分まで一括の伐採110番、実家の敷地の草を決まったペースで抑えるなら面積単価の草刈り110番、遠方の庭を定額で任せて報告書で確認するならsmileガーデン、留守宅の事情を予約前に相談して選ぶならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            果樹のある庭は、実が付くことが手入れの理由にも、放置したときの困りごとにもなります。木を「実を採る／眺めるだけ／手放す」に仕分けること、収穫しないなら落果と枝の張り出しに先手を打つこと、遠方からの管理は年2回の型を先に決めること、引き継げない木は小さくするか手放すかを早めに決めること、処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["和歌山", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/kochi/", label: "高知の庭業者おすすめ5選" },
                { href: "/area/saga/", label: "佐賀の庭業者おすすめ5選" },
                { href: "/area/aomori/", label: "青森の庭業者おすすめ5選" },
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
                { href: "/agents/smile-garden/", label: "smileガーデンの口コミ・評判" },
                { href: "/akiya-niwa-kanri/", label: "空き家の庭の管理" },
                { href: "/kaboku-kaika-teire/", label: "花木の開花と手入れ" },
                { href: "/eda-ekkyo/", label: "枝の越境トラブル" },
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
