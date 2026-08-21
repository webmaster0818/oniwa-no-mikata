import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/kochi/";
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
      "【2026年最新】高知の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "高知で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、台風や大雨のあとに庭を点検する順番、危険な木から先に手配する優先順位の付け方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】高知の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "高知で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。大雨・強風のあとの庭の点検の順番、倒れかけた木や引っかかった枝に自分で触らない理由、水に浸かった庭の土と根の見方、依頼が集中する時期の頼み方と記録の残し方も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、高知市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。<Hl>24時間365日の受付</Hl>
        のため、荒天のあとに気になる枝を見つけたその場で相談を入れておける点も、備えとして役立ちます。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "折れ残った枝など、気になる1本だけを頼みたい人",
      "荒天のあと、時間を気にせずまず相談を入れておきたい人",
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
      "当サイトのレビュー記事作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。24時間受付は「受付の時間帯」であり、作業日程がすぐに取れることを保証するものではありません。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
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
        のが特徴です。強風で傾いた木や、根元がぐらついたまま残っている木のように、自分では手を出せない状態の整理を相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "傾いた木・根元がぐらつく木の処理を任せたい人",
      "倒れかけて隣地や道路側に迫っている木がある人",
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
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトのレビュー記事作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。倒木が電線・道路・隣地に関わる場合は、まず該当する管理者や自治体への連絡が先になることがあります。",
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
        もあわせて依頼でき、雨の多い時期に一気に伸びた草を、
        <Hl>定期メンテナンスプラン</Hl>
        で伸びきる前に抑える使い方にも向いています。
      </>
    ),
    recommend: [
      "雨のあとに一気に伸びた草をまとめて片付けたい人",
      "庭や空き地の雑草を低価格で処理したい人",
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
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトのレビュー記事作成時に確認しています。機械作業が中心のため狭い場所は苦手な場合があり、夏場の繁忙期は混み合います。泥をかぶった草地は刈り取りの手間が変わることがあるため、状況を伝えたうえで見積もりを取りましょう。",
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
        で剪定・消毒・施肥をセットで任せられます。荒天のたびに慌てて手配するのではなく、庭に定期的に人の目が入る状態を作っておきたい場合に向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れるため、庭の状態の変化を記録として残せます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "庭に定期的にプロの目が入る状態を作りたい人",
      "一年を通して庭の手入れを定額で任せたい人",
      "剪定・消毒・施肥をセットでまとめたい人",
      "作業ごとの記録を報告書で残しておきたい人",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。高知市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、荒れた庭の状況を写真で送って、対応できる内容か・いつ頃来られるかを確かめてから予約できます。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "庭の状況を写真で送って対応可否を確かめたい人",
      "口コミを見て自分で地域の業者を選びたい人",
      "予約前に日程感をメッセージで確認したい人",
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
    t: "① 危険の度合いで順番を付けてから相談する",
    b: "荒天のあとの庭は、直したい場所がいくつも同時に出てきます。すべてを一度に頼もうとすると見積もりも日程も膨らむため、「人や車が通る場所に迫っているもの」「建物や塀に触れているもの」「見た目が気になるだけのもの」の三段階に分けて、上から順に相談しましょう。業者にも順番を伝えておけば、限られた日程の中で危険な作業を先に組んでもらいやすくなります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・庭の状況で変わります。荒天後は折れた枝や倒れた木の量が読みにくく、処分の費用が総額を左右しやすいため、処分費・出張費・運び出しの扱いまで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されます。",
  },
  {
    t: "③ 被害の状況は「手を付ける前」に写真で残す",
    b: "片付けを始める前に、庭の状態を複数の角度から撮っておきましょう。折れた枝がどこにどう掛かっていたか、木がどちら向きに傾いたかが分かる写真は、業者への説明を速くしますし、保険の相談や隣地との話し合いが必要になったときの材料にもなります。日付の分かる形で保存し、作業後の写真もセットで残しておくと、状態の変化を後から説明しやすくなります。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。ただし、倒れかけた木のように放置が危険な作業は比較よりも早さを優先すべき場面もあります。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "台風や大雨のあと、庭はどこから点検すればよいですか？",
    a: "まず、人や車の通る場所に迫っているものから見てください。道路や隣地の側に傾いた木、電線や屋根に触れている枝、いつ落ちてもおかしくない折れ枝が最優先です。次に、建物・塀・カーポートに当たっているものを確認し、最後に景観として気になる部分を見ます。地面がぬかるんでいる間は足元が不安定で、見上げながらの歩行は特に危険なので、無理に木の下へ入らず、離れた場所から全体を見渡す形で確認しましょう。",
  },
  {
    q: "折れた枝が木に引っかかったままです。自分で下ろしてもよいですか？",
    a: "引っかかったままの枝は、いつどの向きに落ちるか読めないため、自分で下ろすのは避けてください。はしごや脚立の上での作業は、落ちてくる枝を避けられず特に危険です。伐採110番は大木・高木・危険木の特殊伐採に対応しており、見積もりは無料なので、まず状況を伝えて相談しましょう。周囲に人が入らないよう、下に物を置かない・通らないようにしておくことも当面の対処になります。",
  },
  {
    q: "庭が水に浸かりました。木や植栽はすぐに手入れした方がよいですか？",
    a: "水が引いた直後は土が緩んでおり、根も傷んでいる可能性があるため、踏み固めたり強く切り込んだりするのは避けましょう。まずは幹の傾き、根元の浮き上がり、幹や枝の裂けといった構造的な異常を確認し、葉の変色などはしばらく様子を見る形が安全です。庭の水はけ自体に問題があると同じことを繰り返すため、落ち着いたら排水の見直しも検討してください。考え方は当サイトの庭の水はけの解説記事でまとめています。",
  },
  {
    q: "荒天のあとは業者に頼みにくいと聞きます。どう頼めばよいですか？",
    a: "被害の出た直後は依頼が集中し、日程が先になることがあります。だからこそ、電話やメッセージでは「危険な状態かどうか」を最初に伝えるのが大切です。傾いた木が道路側に迫っているのか、単に枝が散らかっているのかで、業者側の優先順位は変わります。あわせて、複数の作業をまとめて1回で来てもらう形にすると、出張の回数が減り費用も抑えやすくなります。剪定110番は24時間受付のため、時間帯を気にせず相談を入れておけます。",
  },
  {
    q: "倒れた木や折れた枝が大量に出ました。処分まで頼めますか？",
    a: "処分まで対応する業者が一般的で、伐採110番は伐採後の木材処分まで一括対応をうたっています。ただし量が多いと処分費が総額に大きく影響するため、見積もりの段階で「処分込みか」を必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要で、被害が広範囲に及んだ際は自治体が特別な受け入れ方法を案内することもあります。",
  },
  {
    q: "同じ被害を繰り返さないために、庭でできる備えはありますか？",
    a: "風で枝が折れやすい木は、枝を透かして風の抜ける樹形にしておくと負担が減ります。また、高くなりすぎた木ほど倒れたときの被害が大きくなるため、手の届く高さに保つ管理へ切り替えるのが有効です。支柱の緩みや根元のぐらつきは平時のうちに点検し、必要なら業者に見てもらいましょう。備えの具体的な内容は当サイトの台風と庭木の対策の解説記事、支柱の考え方は庭木の支柱の解説記事でまとめています。",
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

export default function AreaKochiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】高知の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "高知で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "高知の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#kochi5",
      label: "1｜高知で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "高知の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#tenken-junban", label: "2｜大雨・強風のあとは「危険なもの」から順に片付ける" },
    { href: "#sawaranai", label: "3｜倒れかけた木・引っかかった枝には自分で触らない" },
    { href: "#tsuchi-ne", label: "4｜水に浸かった庭は「土と根」の状態を見てから手を入れる" },
    { href: "#kiroku", label: "5｜依頼が集中する時期の頼み方と、記録の残し方" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜高知の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">高知の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】高知の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["高知", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="高知の剪定・伐採・草刈り業者の比較"
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
              「風が過ぎたあとの庭を見たら、どこから手を付ければいいのか分からない」「折れた枝が木に引っかかったままで、下を通るのが怖い」——高知で庭業者を探す相談には、こうした「荒天のあとの庭をどう立て直すか」という悩みがよく関わってきます。備えの話は事前に読む機会があっても、実際に被害が出たあとの動き方はまとまった情報が少なく、慌てて手を出して危ない思いをする人も少なくありません。
            </p>
            <p>
              本記事では、高知市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「危険なものから順に片付ける点検の順番」「自分で触ってはいけない木と枝の見分け」「水に浸かった庭で土と根をどう見るか」「依頼が集中する時期の頼み方と記録の残し方」といった、被害が出たあとの動き方を中心にまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="kochi5" num="1">高知で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            高知市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月19日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            高知の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月19日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、高知での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜点検の順番 */}
          <H2 id="tenken-junban" num="2">大雨・強風のあとは「危険なもの」から順に片付ける</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            荒天が過ぎたあとの庭は、散らかった葉、折れた枝、倒れた鉢、傾いた木と、直したい場所が一度に目に入ります。ここで大切なのは、目についた順ではなく<Hl>危険の度合いで順番を付ける</Hl>ことです。優先すべきは、人や車が通る場所に迫っているもの。次に建物・塀・カーポートなど、放置すると被害が広がるもの。落ち葉の掃除や見た目の乱れは、いちばん後で構いません。順番を先に決めておくと、限られた時間と予算を危険の大きいところに集中させられます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            点検そのものも安全第一です。地面がぬかるんでいる間は足元が滑りやすく、見上げながら歩くとバランスを崩しやすくなります。<Hl>木の真下に入らず、離れた位置から全体を見る</Hl>ようにしましょう。幹の傾き、根元の土の浮き上がり、幹や太い枝の裂けは、その場で対処せず写真に記録して業者に伝える対象です。木が弱っているのか一時的な傷みなのかの見極めは
            <Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">枯れたように見える庭木の解説記事</Link>
            が参考になります。
          </p>

          {/* 3｜触らない */}
          <H2 id="sawaranai" num="3">倒れかけた木・引っかかった枝には自分で触らない</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            荒天後の庭仕事でいちばん事故が起きやすいのが、<Hl>宙に浮いたまま止まっている枝と、傾いたまま倒れきっていない木</Hl>です。どちらも力の掛かり方が不安定で、少し触れただけで一気に落ちたり倒れたりします。特に、はしごや脚立に登った状態では落下してくるものを避けられません。「あと少しで下ろせそう」に見える枝ほど危険だと考えて、離れて業者に任せてください。高い場所の作業がなぜ危険なのかは
            <Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>
            でまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者が来るまでの間は、<Hl>その下に人が入らないようにする</Hl>ことが最善の対処です。自転車や物を置かない、洗濯物を干さない、子どもやペットを近づけないといった段取りを家族で共有しておきましょう。木が隣地や道路の側へ倒れかけている場合は、状況によって隣家や道路の管理者への連絡が先になることもあります。伐採110番は大木・高木・危険木の特殊伐採に対応し、見積もりは無料なので、まず状況を伝えて相談するのが現実的です。倒れた木を片付けたあとの切り株の扱いは
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            を参考にしてください。
          </p>

          {/* 4｜土と根 */}
          <H2 id="tsuchi-ne" num="4">水に浸かった庭は「土と根」の状態を見てから手を入れる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭が水に浸かったあとは、見えている葉や花より先に<Hl>足元の土と根の状態</Hl>を気にかけてください。水を含んだ土は緩んでおり、そこを何度も踏むと固く締まって根が呼吸しづらい状態になります。水が引いた直後は必要以上に歩き回らず、片付けも通り道を決めて動くのが基本です。木が傾いていたり根元の土が盛り上がっていたりする場合は、根が持ち上がっている可能性があるため、自分で押し戻そうとせず業者に見てもらいましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            この時期に<Hl>強い剪定をかけるのは避けたほうが無難</Hl>です。根が傷んでいるところに大きく枝を落とすと、木の回復にさらに負担がかかります。折れた枝や裂けた部分の手当てなど必要な処置に絞り、樹形を整える作業は木が落ち着いてからにしましょう。同じ場所が繰り返し水に浸かるなら、庭の排水そのものを見直す価値があります（
            <Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけの解説記事</Link>
            へ）。湿った時期に増える病害虫のサインは
            <Link href="/niwaki-byogaichu/" className="text-[#2D7F3E] underline">庭木の病害虫の解説記事</Link>
            でまとめています。
          </p>

          {/* 5｜記録と頼み方 */}
          <H2 id="kiroku" num="5">依頼が集中する時期の頼み方と、記録の残し方</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            広い範囲で被害が出たあとは、どの業者にも依頼が集まり、日程がすぐには取れないことがあります。このとき効くのが、<Hl>連絡の最初に「危険な状態かどうか」を伝える</Hl>ことです。「枝が散らかっている」と「傾いた木が道路側に迫っている」では、業者が組む順番はまったく変わります。あわせて、庭の中の作業をできるだけ<Hl>1回の訪問にまとめる</Hl>と、出張の回数が減って費用も抑えやすくなります。剪定110番は24時間365日受付のため、気づいた時間帯にかかわらず相談を入れておけます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            そしてもう一つ大切なのが記録です。<Hl>片付けに手を付ける前に、被害の状態を複数の角度から撮っておく</Hl>と、業者への説明が速くなるだけでなく、保険の相談や隣地との話し合いが必要になったときの材料にもなります。作業後の写真もセットで残しておきましょう。写真付きの作業報告書が受け取れるサービスを定期で使っていれば、平時から庭の状態が記録として積み上がっていきます。日ごろの点検を習慣にする考え方は
            <Link href="/aki-niwa-checklist/" className="text-[#2D7F3E] underline">秋の庭のチェックリストの解説記事</Link>
            、見積もりの読み方は
            <Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">庭の見積もりの見方の解説記事</Link>
            が参考になります。
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
          <H2 id="faq" num="7">高知の庭業者でよくある質問</H2>
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
            高知で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。折れ残った枝を1本だけ整えるなら剪定110番、傾いた木や倒れかけた木の処理なら特殊伐採と処分まで一括の伐採110番、雨のあとに一気に伸びた草なら面積単価の草刈り110番、庭に定期的にプロの目が入る状態を作るなら定額制のsmileガーデン、庭の状況を写真で送って対応可否と日程感を確かめるならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            荒天のあとの庭は、焦って手を出すほど危険が増します。危険の度合いで順番を付けること、宙に浮いた枝と傾いた木には触らないこと、水に浸かった庭は土と根が落ち着くのを待つこと、依頼が集中する時期こそ状況を的確に伝えて1回にまとめること、片付ける前に写真で記録を残すこと、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["高知", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/bassai-110ban/", label: "伐採110番の口コミ・評判" },
                { href: "/agents/sentei-110ban/", label: "剪定110番の口コミ・評判" },
                { href: "/taifu-niwaki-taisaku/", label: "台風に備える庭木の対策" },
                { href: "/niwaki-shichu/", label: "庭木の支柱の立て方" },
                { href: "/niwa-mizuhake/", label: "庭の水はけの改善" },
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
