import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/koshigaya/";
const UPDATED = "2026年9月25日";
const UPDATED_ISO = "2026-09-25";

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
      "【2026年最新】越谷の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "越谷で剪定・伐採・草刈りを依頼できる庭業者5社を比較。剪定110番（1本4,000円〜・税込）・草刈り110番（1平米163円〜・税込）などの料金と特徴、写真のみで出す概算の限界、落葉期にのみ確認できる点、日程を変更できない日から逆算する依頼方法、見積もりの有効範囲を編集部が中立的な立場で解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】越谷の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "越谷で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。写真のみで出す概算と現地調査が必要な金額の違い、落葉期にのみ確認できる枝の込み具合や枯れ枝、法事や来客など変更できない日から逆算する二段階の依頼方法、季節をまたぐと同じ庭でも見積もりが変わることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、越谷市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本4,000円〜（税込）の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。24時間受け付けているため、思い立った日に下見の予定のみを入れておくこともできます。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "思い立った日に、下見の予定のみを先に入れておきたい方",
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
    image: "/images/kusakari-110ban-features-v2.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米163円〜（税込）の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>面積で費用の見当がつく</Hl>
        ため、範囲を決めて依頼しやすいサービスです。料金が面積で決まるため、草の状態が変わる前に概算を把握しやすい作業です。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "草の状態が変わる前に概算を把握しておきたい方",
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
    image: "/images/bassai-110ban-features-v2.png",
    intro: (
      <>
        伐採110番は、伐採・抜根に特化した専門サービスです。庭木の伐採から
        <Hl>大木・高木・危険木の特殊伐採</Hl>
        、重機を使った大規模作業まで対応し、
        <Hl>伐採後の木材処分まで一括で任せられる</Hl>
        のが特徴です。伐採は、現地調査を経ないと金額が確定しない作業の代表例です。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "現地調査を受けてから金額を確定したい方",
      "大きくなりすぎた木を搬出方法から相談したい方",
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
        で剪定・消毒・施肥をまとめて任せられます。時期ごとの作業を一つの契約にまとめると、毎回の日程調整が不要になります。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "時期ごとの作業をまとめて、日程調整の手間を省きたい方",
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
      "年間管理プラン、見積もり・出張費無料、年間実績3万件・リピート率95%以上という実績値、料金表の目安単価は、2026年10月19日に公式サイトで確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。越谷市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できます。日程の候補を予約前に調整できるため、変更できない日がある依頼に適しています。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "日程の候補を予約前に調整したい方",
      "料金を比較してから依頼したい方",
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
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトの各社紹介ページ作成時に確認しています。出店者ごとにサービス品質は異なるため、口コミ・実績をよく確認し、予約前にメッセージで作業内容を相談することをおすすめします。",
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
    t: "① 下見の日と作業日を分けて考える",
    b: "下見に適した時期と、作業に適した時期は同じとは限りません。落葉期は枝の骨組みが見えるため、必要な作業を洗い出すのに適しています。一方、木の種類によって剪定に適した時期は異なり、花を楽しむ木は時期を誤ると翌年の花が減ります。下見で全体を洗い出し、木ごとに適した時期に作業日を割り振る依頼方法が可能かどうか、業者にご相談ください。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。写真のみで出す概算は相場の把握に役立ちますが、作業車を停められるか、道具を運ぶ経路に段差がないかといった条件は写真から読み取れません。概算を受け取ったら、現地調査で変わる可能性があるかを必ずご確認ください。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されます。",
  },
  {
    t: "③ 変更できない日がある場合は、その日と理由を最初に伝える",
    b: "法事、親族の集まり、家の撮影、引き渡しなど、期日までに庭を整えておきたい予定がある場合は、見積もりの最初に伝えてください。多少早くても問題のない作業を前倒しで済ませ、直前に行う必要がある作業を目標日の数日前に入れるという二段階に分ければ、後半の作業が雨で延期になっても見栄えを保てます。雨で延期になった場合に、予備日を確保するのか、前倒しにするのか、その作業を見送るのかも事前に決めておいてください。",
  },
  {
    t: "④ 見積もりの有効範囲を確認し、急ぎでない場合は複数社を比較する",
    b: "見積書を受け取ってから時間がたつと、草や枝が伸び、庭の状態が変わります。有効期限を確認し、しばらく検討する場合は「◯月に依頼する場合もこの見積もりのままでよいか」を事前に確認してください。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較することをおすすめします。金額や説明に納得できない場合は、その場で契約せずにお断りいただくこともできます。",
  },
];

const faqs = [
  {
    q: "越谷で庭木1本のみの剪定でも依頼できますか？",
    a: "依頼できます。剪定110番は庭木1本からの依頼に対応しており、剪定1本4,000円〜（税込・出張費は地域により別途の場合あり）です。24時間365日受け付けているため、思い立った日に下見の予定のみを先に入れておくこともできます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりでご確認ください。現地調査・見積もりは無料です。",
  },
  {
    q: "写真を送るだけで見積もりを出してもらえますか？",
    a: "概算を出してもらえる場合はありますが、写真で分かることには限りがあります。木の本数やおおよその高さ、草の広がりは伝わる一方、作業車を停められるか、庭まで道具を運ぶ経路に段差や狭い通路がないか、切った枝をどこから搬出するかは読み取れません。これらは金額に影響する条件です。庭だけでなく、家の前の道路、門から庭までの通路、通路の幅が分かる写真を添えると、概算の精度が上がります。概算が現地調査で変わる可能性があるかは必ずご確認ください。",
  },
  {
    q: "葉が落ちている時期に見てもらうのは意味がありますか？",
    a: "意味があります。枝の込み具合、枯れ枝、鳥の巣や虫が越冬した跡は、葉がある間は確認しにくく、落葉後に見えるようになります。ただし、確認できる時期と作業に適した時期は同じとは限りません。剪定に適した時期は木の種類によって異なるため、下見で必要な作業を洗い出し、木ごとに適した時期に作業日を割り振る進め方をおすすめします。",
  },
  {
    q: "法事の日までに庭を整えたいのですが、いつ依頼すればよいですか？",
    a: "目標の日と、その日の予定を最初に伝えてください。そのうえで、多少早くても問題のない作業（枝の剪定、生垣の整枝、不要な物の片付け）を前倒しで済ませ、直前に行う必要がある作業（草刈り、落ち葉の清掃、玄関まわりの仕上げ）を数日前に入れる二段階の進め方をおすすめします。庭の作業は天候によって日程が変わるため、雨で延期になった場合に予備日を確保するのか、前倒しにするのかも事前に決めておいてください。",
  },
  {
    q: "以前に取った見積もりで、今から依頼することはできますか？",
    a: "時間がたつと草も枝も伸びるため、同じ金額のままとは限りません。見積書に有効期限が記載されていればそれに従い、記載がなければ業者にご確認ください。しばらく検討する場合は、「◯月に依頼する場合もこの見積もりのままでよいか」を事前に確認しておくのが確実です。太い枝の切除、切り株の抜根、庭石の撤去といった作業は、状態が変わりにくいため、時間がたっても金額が変わりにくい作業です。",
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

export default function AreaKoshigayaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】越谷の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "越谷で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-25T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "越谷の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#koshigaya5",
      label: "1｜越谷で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "越谷の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#shashinmitsumori", label: "2｜写真のみで出す概算と、現地調査が必要な金額の違い" },
    { href: "#rakuyoki", label: "3｜落葉期にのみ確認できる枝の込み具合・枯れ枝・巣" },
    { href: "#ugokasenai", label: "4｜法事や来客など変更できない日がある依頼は、その日から逆算して二段階で依頼します" },
    { href: "#yukogen", label: "5｜見積もりの有効範囲と、季節による金額の変化" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
    { href: "#faq", label: "7｜越谷の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">越谷の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】越谷の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              {["越谷", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="越谷の剪定・伐採・草刈り業者の比較"
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
              越谷で庭業者を探す際には、「写真を送れば見積もりが出ると言われたが、その金額で依頼できるのか分からない」「秋に出してもらった見積もりで、春に依頼してよいか迷っている」「法事の前に庭を整えたいが、いつ依頼すれば間に合うのか」など、依頼内容と同様に、下見と作業の時期について迷う場面があります。
            </p>
            <p>
              本記事では、越谷市内から依頼できる主要な庭業者を、当サイト編集部が各社の紹介ページ作成時に調査した料金・サービス内容で比較しました。あわせて、写真のみで出す概算の限界、落葉期にのみ確認できる点、変更できない日から逆算する依頼方法、見積もりの有効範囲など、越谷で依頼する際の確認事項もまとめています。業者選びの参考としてご活用ください。
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
          <H2 id="koshigaya5" num="1">越谷で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            越谷市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社の紹介ページ作成時に公式サイト等を調査した掲載値です（2026年9月25日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスター（現：お庭レスキュープロ）は全国47都道府県を対応エリアとしています（公式表記）。本ページではカード紹介に含めず、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            越谷の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年9月25日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、越谷での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="shashinmitsumori" num="2">写真のみで出す概算と、現地調査が必要な金額の違い</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            最近は、<Hl>庭の写真を送ると概算を提示してもらえる</Hl>サービスが増えています。手軽で、相場の把握に役立ちます。ただし、<Hl>写真で分かることと分からないことの違い</Hl>を理解しないまま概算を受け取ると、現地調査のあとで金額が変わった際に、想定と異なると感じることがあります。見積書の読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">庭の見積もりの見方の解説記事</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            写真で伝わるのは、<Hl>木の本数、おおよその高さ、葉の茂り方、草の広がり</Hl>などです。一方で伝わりにくいのは、<Hl>作業車を停められるか</Hl>、<Hl>庭まで道具を運ぶ経路に段差や狭い通路がないか</Hl>、<Hl>地面が固いか柔らかいか</Hl>、<Hl>切ったものを出すときにどこを通るか</Hl>といった条件です。これらは金額に大きく影響することがあり、写真からは読み取れません。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            そのため、写真で概算を取る際は、<Hl>庭だけでなく、道路から庭までの経路も撮影しておく</Hl>と精度が上がります。家の前の道路、門から庭までの通路、通路の幅が分かる写真の三枚を加えるだけで、概算と実際の金額の差は大きく縮まります。そのうえで、<Hl>この概算は現地調査で変わる可能性があるか</Hl>を必ずご確認ください。剪定110番は現地調査・見積もりが無料で追加料金なしを掲げており、くらしのマーケットは予約前に業者とメッセージで相談できます。依頼前の準備は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">剪定を依頼する前の準備の解説記事</Link>を参考にしてください。
          </p>

          {/* 3 */}
          <H2 id="rakuyoki" num="3">落葉期にのみ確認できる枝の込み具合・枯れ枝・巣</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            葉が茂っている間、木は<Hl>緑のかたまりとして見えます</Hl>。形の乱れも、枝の込み合いも、傷んだ枝も、葉に隠れて分かりません。一方、葉が落ちると<Hl>枝の骨組みがそのまま見えるようになります</Hl>。この時期にしか確認できないことがいくつかあります。冬場の庭仕事は<Link href="/fuyu-niwa-checklist/" className="text-[#2D7F3E] underline">冬の庭のチェックリスト</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認できるようになるのは三点です。一つ目は<Hl>枝の込み具合</Hl>で、内側で交差している枝や、内向きに伸びた枝がはっきり分かります。二つ目は<Hl>枯れ枝</Hl>で、葉がある時期は生きている枝と見分けにくいものも、この時期であれば容易に判別できます。三つ目は<Hl>鳥の巣や虫が越冬している跡</Hl>で、葉の陰に隠れていたものが見えるようになります。枯れているかどうかの見分け方は<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方の解説記事</Link>、病害虫の兆候は<Link href="/niwaki-byogaichu/" className="text-[#2D7F3E] underline">庭木の病害虫の解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            ただし、<Hl>確認できる時期と、作業に適した時期は同じとは限りません</Hl>。剪定に適した時期は木の種類によって異なります。花を楽しむ木は、翌年の花になる芽ができたあとに切ると、翌年の花が減ります。そのため、<Hl>下見の日と作業日を分ける</Hl>という考え方が有効です。落葉期に現地を確認してもらい、必要な作業を洗い出したうえで、木ごとに適した時期に作業日を割り振る進め方です。時期の考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">剪定の時期の解説記事</Link>、花木は<Link href="/kaboku-kaika-teire/" className="text-[#2D7F3E] underline">花木の開花と手入れの解説記事</Link>にまとめています。
          </p>

          {/* 4 */}
          <H2 id="ugokasenai" num="4">法事や来客など変更できない日がある依頼は、その日から逆算して二段階で依頼します</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭の作業は、<Hl>天候によって日程が変わります</Hl>。雨が降れば作業できない日があり、前の現場が長引けば日程がずれることもあります。通常はそれで問題ありませんが、<Hl>期日までに庭を整えておきたい</Hl>場合は事情が異なります。法事、親族の集まり、家の撮影、引き渡しなど、日程を変更できない予定は年に何度かあります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            このような場合に有効なのが、<Hl>作業を二段階に分ける</Hl>進め方です。まず、<Hl>多少早くても問題のない作業</Hl>（枝の剪定、伸びた生垣の整枝、不要な物の片付け）を、目標日より十分前に済ませておきます。次に、<Hl>直前に行う必要がある作業</Hl>（草刈り、落ち葉の清掃、玄関まわりの仕上げ）を、目標日の数日前に入れます。こうしておくと、後半の作業が雨で延期になっても、前半の作業が済んでいるため見栄えを保てます。年間の段取りは<Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭仕事の年間スケジュールの解説記事</Link>を参考にしてください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者に依頼する際は、<Hl>目標の日を最初に伝える</Hl>ことが最も大切です。「この日までに」とだけ伝えるのではなく、「この日に来客があるため、前日までに終えてほしい」と理由まで伝えると、優先度と仕上げ方が業者に伝わります。あわせて、<Hl>雨で延期になった場合の対応</Hl>を事前に決めておいてください。予備日を確保するか、前倒しにするか、その作業を見送るかを決めておけば、当日に慌てずに済みます。年末に向けた庭の支度は<Link href="/nenmatsu-niwa-shitaku/" className="text-[#2D7F3E] underline">年末の庭支度の解説記事</Link>にまとめています。
          </p>

          {/* 5 */}
          <H2 id="yukogen" num="5">見積もりの有効範囲と、季節による金額の変化</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見積書を受け取ってから、<Hl>家族と相談しているうちに数か月たってしまう</Hl>ことがあります。いざ依頼しようとしたら金額が変わっていたという例は少なくありません。理由は、<Hl>庭が同じ状態のままではないため</Hl>です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            変わるものは主に二つあります。一つは<Hl>庭そのもの</Hl>で、草や枝が伸び、落ち葉が積もります。春に出してもらった草刈りの見積もりは、夏を越えた庭には当てはまりません。もう一つは<Hl>業者側の混み具合</Hl>で、依頼が集中する時期には日程が取りにくくなります。金額そのものが変わらなくても、<Hl>希望の日に入れるかどうかは季節で変わります</Hl>。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            そのため、見積書を受け取ったら<Hl>有効期限</Hl>を確認してください。期限が記載されていればそれに従い、記載がなければ口頭でも確認しておきます。しばらく検討する場合は、<Hl>「◯月に依頼する場合も、この見積もりのままでよいか」を事前に確認しておく</Hl>のが確実です。一方、太い枝の切除、切り株の抜根、庭石の撤去など、状態が変わりにくい作業は、時間がたっても金額が変わりにくい傾向があります。相見積もりの取り方は<Link href="/aimitsumori-torikata/" className="text-[#2D7F3E] underline">相見積もりの取り方の解説記事</Link>、庭石の撤去は<Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯篭の撤去の解説記事</Link>を参考にしてください。
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
          <H2 id="faq" num="7">越谷の庭業者でよくある質問</H2>
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
            越谷で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。思い立った日に下見の予定を入れておきたい場合は24時間受付の剪定110番、草の状態が変わる前に概算を把握したい場合は面積単価の草刈り110番、現地調査を受けてから金額を確定したい場合は伐採110番、時期ごとの作業をまとめて日程調整の手間を省きたい場合は年間管理プランのsmileガーデン、日程の候補を予約前に調整したい場合はくらしのマーケットというように、目的によって適したサービスは異なります。大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            庭の作業は、依頼内容だけでなく、下見と作業の時期によっても結果が変わります。写真による概算には読み取れない条件があること、落葉期にのみ確認できる点があること、下見の日と作業日は分けて考えられること、変更できない日がある場合は二段階に分けて逆算すること、時間がたつと庭の状態が変わり見積もりも変わることが、共通して押さえておくべき点です。本記事の比較を参考に、庭の状況に合った業者をお選びください。
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
              {["越谷", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/niwa-mitsumori-mikata/", label: "庭の見積もりの見方" },
                { href: "/sentei-irai-junbi/", label: "剪定を依頼する前の準備" },
                { href: "/teire-raku-niwaki/", label: "手入れが楽な庭木" },
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
