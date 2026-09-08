import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/takasaki/";
const UPDATED = "2026年9月8日";
const UPDATED_ISO = "2026-09-08";

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
      "【2026年最新】高崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "高崎で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、冬の乾いた強風への飛ぶ物・倒れる物・乾く株元の備え、風で葉が傷んだ木の見極め、立ち会えない日の作業後の確認方法、春と秋に庭を見る日を決める段取りまで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】高崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "高崎で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。冬の乾いた強風に飛ぶ物・倒れる物・乾く株元の三つで備える考え方、風で葉が傷んだ木を枯れたと決めつけず春まで見る見極め、通勤で平日に庭を見られない家庭が作業後に何を確認するかを決めてから頼む段取り、春と秋に庭を見る日を決めて頼む時期をぶらさない方法も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、高崎市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。帰宅の遅い平日の夜でも申し込みができ、風を受けやすい常緑樹の枝を透かす作業も1本から相談できます。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "風を受けやすい常緑樹の枝を透かしたい人",
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
        のが特徴です。強い風で傾いた木や、春になっても芽吹かず枯れが確定した木の整理もまとめて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "強い風で傾いた木を早めに片付けたい人",
      "枯れが確定した木を根元から処分したい人",
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
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>面積で費用の見当がつく</Hl>
        ため、平日に庭を見られない家庭でも、範囲を決めて定期的に頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "平日に庭を見られず草を伸ばしがちな人",
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
        で剪定・消毒・施肥をセットで任せられます。立ち会えない日の作業でも、作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れるため、帰宅後に仕上がりを確かめる手がかりになります。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "立ち会えない作業の仕上がりを写真で確かめたい人",
      "一年を通して庭の手入れを定額で任せたい人",
      "剪定・消毒・施肥をセットでまとめたい人",
      "頼む時期を決めて毎年同じ形で回したい人",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。高崎市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、立ち会えないことと作業後の連絡方法を先に伝えたうえで予約する、といった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで立ち会いの有無と連絡方法を決めたい人",
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
    t: "① 風の当たり方と、立ち会えるかどうかを最初に伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭のどちら側から風が当たり、落ち葉や鉢がどこに寄るのかを写真で伝えましょう。風上側だけ葉が傷んでいる木があれば、その様子も写しておくと相談がしやすくなります。平日に立ち会えない場合はその旨を先に伝え、鍵や門の扱い、作業後の連絡方法まで見積もりの段階で決めておくと、当日の行き違いが減ります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 作業後に「何を・いつ・どうやって」確認するかを決めておく",
    b: "立ち会えない作業では、終わったあとに何を見るかを決めておかないと、仕上がりへの不満や行き違いが残ります。見積書の本数と実際に手入れされた木を照らし合わせる、切り口や残した高さを見る、枝葉や刈り草が残っていないかを見る、隣地側や道路側に落ちた枝葉がないかを見る、といった確認の項目と、気になった点をいつまでに誰へ連絡するかを先に決めておきましょう。なお、隣地との境界がはっきりしない場合は土地家屋調査士などの専門家、庭の照明や電源にかかわる工事は電気工事士、塀や擁壁の補修は専門業者の範囲で、庭業者に頼める作業とは分けて考える必要があります。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "高崎で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。風を受けやすい常緑樹の枝を1本だけ透かしたい、といった依頼もできます。樹種や高さによって手間が変わるため、最低価格ではなく出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "冬の強い風で鉢が倒れたり、落ち葉が吹きだまったりします。庭でできる備えはありますか？",
    a: "備えは「飛ぶ物・倒れる物・乾く株元」の三つに分けて考えると整理しやすくなります。飛ぶ物は、軽い鉢やバケツ、空のプランターなどを風の当たらない場所へまとめるか、使わない物は処分します。倒れる物は、鉢を壁ぎわに寄せてまとめる、植えて間もない木には支柱を立てる、といった対策が基本です。乾く株元は、地面を覆って乾きを和らげます。落ち葉は風下の隅にたまるため、たまる場所を決めて掃除しやすくしておくと片付けの手間が減ります。",
  },
  {
    q: "冬の間に生垣の葉が茶色くなりました。枯れてしまったのでしょうか？",
    a: "乾いた寒風に当たると、常緑樹や生垣の葉が茶色くなったり縮れたりすることがありますが、葉が傷んでいても木が枯れているとは限りません。枝を少し曲げてみて弾力があるか、幹や枝の内側に生きた色が残っているかを見て、春の芽吹きまで待ってから判断するのがおすすめです。冬のうちに慌てて強く切ると回復の力を削ぐことがあります。当サイトの庭木が枯れたかどうかの見分け方の記事に、休眠との違いをまとめています。",
  },
  {
    q: "平日は朝早く家を出て夜遅く帰るため、作業に立ち会えません。それでも頼めますか？",
    a: "立ち会えない作業は珍しくなく、多くの業者が対応します。大切なのは、鍵や門の扱いと作業後の連絡方法を見積もりの段階で決めておくことと、終わったあとに何を確認するかを先に決めておくことです。見積書の本数と実際に手入れされた木を照らし合わせる、切り口や残した高さを見る、枝葉が残っていないかを見る、隣地側に落ちた枝葉がないかを見る、といった項目を確認し、気になる点は早めに連絡しましょう。smileガーデンは写真付きの作業報告書を提供しており、くらしのマーケットなら予約前のメッセージで連絡方法を決めてから頼めます。",
  },
  {
    q: "週末しか庭を見られず、気づくと木も草も伸びきっています。どう頼めばよいですか？",
    a: "春の芽吹き前後と秋の落葉前に「庭を見る日」を決めておき、その日に見た状態をもとに頼む内容を決める形にすると、頼む時期がぶれにくくなります。見る日には、木の高さ、隣地や道路への張り出し、草の伸び、支柱の緩み、落ち葉の吹きだまりを確かめます。草は草刈り110番の定期メンテナンスプラン、木はsmileガーデンの年間管理プランのように、回数と時期を決めて任せる方法もあります。当サイトの春と秋の庭仕事チェックリストの記事も参考にしてください。",
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

export default function AreaTakasakiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】高崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "高崎で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "高崎の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#takasaki5",
      label: "1｜高崎で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "高崎の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#sec2", label: "2｜冬の乾いた強風は「飛ぶ物・倒れる物・乾く株元」の三つで備える" },
    { href: "#sec3", label: "3｜風で葉が傷んだ木は「枯れた」と決めつけず、春の芽吹きまで見てから判断する" },
    { href: "#sec4", label: "4｜平日は庭を見る時間がない家庭は「作業後に何を確認するか」を決めてから頼む" },
    { href: "#sec5", label: "5｜春と秋に「庭を見る日」を決めておくと、頼む時期がぶれない" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜高崎の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">高崎の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】高崎の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["高崎", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="高崎の剪定・伐採・草刈り業者の比較"
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
              「冬になると、どこからともなく落ち葉が庭に吹きだまる」「朝、プランターが倒れて土がこぼれていた」「通勤で家を出るのが早く帰りも遅いので、平日は庭を見る余裕がない」——高崎で庭業者を探すきっかけには、山から吹き下ろす冬の乾いた強風と、鉄道や高速道路が集まる交通の要所ならではの暮らし方が絡むことがあります。
            </p>
            <p>
              本記事では、高崎市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「冬の乾いた強風に飛ぶ物・倒れる物・乾く株元の三つで備える考え方」「風で葉が傷んだ木を枯れたと決めつけず春まで見る見極め」「平日に庭を見られない家庭が作業後に何を確認するかを決めてから頼む段取り」「春と秋に庭を見る日を決めて頼む時期をぶらさない方法」といった、高崎で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="takasaki5" num="1">高崎で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            高崎市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月8日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            高崎の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月8日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、高崎での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="sec2" num="2">冬の乾いた強風は「飛ぶ物・倒れる物・乾く株元」の三つで備える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            高崎の冬は晴れて乾いた日が続き、山から吹き下ろす強い風が名物になっています。雪の心配は少ない土地ですが、<Hl>乾いた強風は、落ち葉やごみを吹きだまらせ、軽い鉢を倒し、株元の土を乾かします</Hl>。雪国の冬支度とは違い、重さではなく風と乾きへの備えが軸になるのが、この土地の庭の特徴です。備えは「飛ぶ物」「倒れる物」「乾く株元」の三つに分けて考えると、何から手をつければよいかが見えてきます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            飛ぶ物でまず見直したいのは、<Hl>庭に置きっぱなしになっている軽い物</Hl>です。空のプランター、バケツ、ほうき、自転車のカバー、置き型のガーデンライトなどは、風で動いて隣地や道路へ出てしまうことがあります。使っていない鉢やプランターが増えているなら、この機会に減らしておくと風の日の心配が一つ減ります。手放し方は<Link href="/uekibachi-planter-shobun/" className="text-[#2D7F3E] underline">植木鉢・プランターの処分の考え方</Link>を、置き型の照明の扱いは<Link href="/garden-light-chui/" className="text-[#2D7F3E] underline">ガーデンライトと配線の注意点</Link>を参考にしてください。落ち葉は風下の隅に吹きだまるため、<Hl>たまる場所を決めて、そこを掃除しやすくしておく</Hl>と片付けの手間が減ります。集め方と処分は<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策と掃除の基本</Link>にまとめています。自転車置き場のまわりに落ち葉がたまりやすい家は<Link href="/jitensha-okiba-dosen/" className="text-[#2D7F3E] underline">自転車置き場と庭の動線</Link>も参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            倒れる物の代表は鉢植えと、植えて間もない木です。鉢は風の当たらない壁ぎわに寄せてまとめると倒れにくくなり、大きな鉢は庭に下ろしてしまう選択肢もあります。手順は<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えから地植えへの植え替え</Link>をご覧ください。植えて間もない木は根が張るまで風で揺すられやすく、<Hl>支柱を立てて根元を安定させる</Hl>のが基本です。立て方と外す時期は<Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の立て方の基本</Link>にまとめています。冬でも葉の多い常緑樹は風を受けやすいため、枝を透かして風を抜けさせる剪定が備えになります。剪定110番は庭木1本から依頼でき、剪定1本2,890円〜（出張費3,000円別途）の掲載料金で、現地調査・見積もりは無料です。乾く株元は、地面を覆って乾きを和らげるのが基本で、年末に向けた庭の整え方は<Link href="/nenmatsu-niwa-shitaku/" className="text-[#2D7F3E] underline">正月前の庭の整え方</Link>を参考にしてください。
          </p>

          {/* 3 */}
          <H2 id="sec3" num="3">風で葉が傷んだ木は「枯れた」と決めつけず、春の芽吹きまで見てから判断する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            乾いた寒風に当たり続けると、常緑樹や生垣の葉が茶色くなったり、縮れたり、風上側だけ葉が落ちたりすることがあります。見た目には枯れたように見えますが、<Hl>葉が傷んでいることと、木が枯れていることは別</Hl>です。冬の間は木が休んでいる時期でもあり、葉の傷みだけを見て慌てて切ったり抜いたりすると、春に芽吹くはずだった木を失うことになります。休眠との違いや見分けの手順は<Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">庭木が枯れたかどうかの見分け方</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見分けの基本は、<Hl>枝を少し曲げてみて弾力があるか、枝の内側に生きた色が残っているか</Hl>を確かめることです。傷んだ葉は春になれば新しい葉に入れ替わることが多く、強く切り戻すのは芽吹きを見てからでも遅くありません。切る時期の考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">剪定時期の基礎知識</Link>をご覧ください。乾いた風が続く冬は、雨が少ないぶん土が乾きやすく、冬でも水やりが必要になる場面があります。季節ごとの考え方は<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            生垣は風上側だけが傷みやすく、<Hl>片側だけ薄くなった生垣は、春の刈り込みで形を整え直す</Hl>ことで回復を待つのが基本です。手順と時期は<Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの基礎知識</Link>を参考にしてください。風よけの役割を持たせている生垣や目隠しの木は、傷みを繰り返すなら、風に強い木へ入れ替えるか、フェンスと組み合わせるかを考える時期かもしれません。判断の目安は<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの違いと選び方</Link>と<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>にまとめています。春になっても芽吹かず枯れが確定した木や、風で傾いた木は、伐採110番のように伐採後の木材処分まで一括対応をうたうサービスに、現地を見てもらったうえで相談しましょう。
          </p>

          {/* 4 */}
          <H2 id="sec4" num="4">平日は庭を見る時間がない家庭は「作業後に何を確認するか」を決めてから頼む</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            高崎は新幹線や在来線、高速道路が集まる交通の要所で、市外へ通勤する人も多いまちです。朝早く家を出て夜遅く帰る平日には、庭業者の作業に立ち会えないことがよくあります。立ち会えないこと自体は珍しくなく、多くの業者が対応しますが、<Hl>「終わったあとに何を見るか」を決めておかないと、仕上がりへの不満や行き違いがそのまま残ってしまいます</Hl>。頼む前に、作業後の確認の項目と、気になった点をいつまでに誰へ伝えるかを決めておくのが、この頼み方の要です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            作業後に見ておきたい項目は、次のようなものです。<Hl>見積書に書かれた本数と、実際に手入れされた木が合っているか。切り口や残した高さが、頼んだとおりか。枝葉や刈り草が庭に残っていないか。処分まで頼んだなら、持ち帰られているか。隣地側や道路側に落ちた枝葉がないか。塀・壁・車に傷がついていないか。</Hl>これらは、頼む前に庭の写真を撮っておくと、帰宅後に見比べるだけで確かめられます。依頼前の写真の撮り方と希望の伝え方は<Link href="/sentei-irai-junbi/" className="text-[#2D7F3E] underline">庭木の剪定を頼む前の準備</Link>、見積書のどこを見るかは<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>にまとめています。隣地側に落ちた枝葉の扱いは<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>も参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            確認して気になる点があったら、<Hl>時間をおかずに写真を添えて連絡する</Hl>のが基本です。日がたつほど、作業のせいなのか後から起きたことなのかが分かりにくくなります。smileガーデンは写真付きの作業報告書を提供しており、帰宅後に報告書と庭を見比べる形で確認できます。くらしのマーケットなら、予約前のメッセージで立ち会えないことと作業後の連絡方法を決めてから頼めます。剪定110番は見積もり後の追加料金がない仕組みで、24時間365日の受付のため、帰宅の遅い平日の夜でも申し込みや相談ができます。処分まで含めて頼む場合の考え方は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>を、複数社に同じ条件で見積もりを頼む方法は<Link href="/aimitsumori-torikata/" className="text-[#2D7F3E] underline">庭工事の相見積もりの取り方</Link>をご覧ください。
          </p>

          {/* 5 */}
          <H2 id="sec5" num="5">春と秋に「庭を見る日」を決めておくと、頼む時期がぶれない</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            週末しか庭を見られない家庭では、気づいたときには木も草も伸びきっていて、慌てて頼むことになりがちです。慌てて頼むと業者の繁忙期と重なって日程が取りにくく、費用の比較もできません。おすすめしたいのは、<Hl>春の芽吹き前後と秋の落葉前に「庭を見る日」を決めておき、その日に見た状態をもとに頼む内容を決める</Hl>形です。見るべき項目は季節ごとにまとまっており、<Link href="/haru-niwa-checklist/" className="text-[#2D7F3E] underline">春の庭仕事チェックリスト</Link>と<Link href="/aki-niwa-checklist/" className="text-[#2D7F3E] underline">秋の庭仕事チェックリスト</Link>を手元に置いておくと、短い時間でも見落としが減ります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見る日に確かめたいのは、<Hl>木の高さ、隣地や道路への張り出し、草の伸び、支柱の緩み、落ち葉の吹きだまり</Hl>です。春は冬の風で傷んだ木や緩んだ支柱を見て、伸びる前に整える剪定を頼む時期を決めます。秋は落葉前に、風で飛ばされやすい落ち葉を減らす剪定や、冬の風に備えた鉢や支柱の見直しを頼みます。一年の作業の並べ方は<Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュール</Link>、木ごとの切る時期は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">剪定時期の基礎知識</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            毎年同じ形で回すなら、<Hl>回数と時期を決めて任せる定期の仕組み</Hl>が向いています。草は草刈り110番のように1平米600円〜の掲載料金で範囲を決めて頼め、定期メンテナンスプランも用意されています。木はsmileガーデンの定額制の年間管理プランのように、剪定・消毒・施肥をセットにして時期を決めて任せる方法があり、立ち会えない日の作業でも写真付きの作業報告書で仕上がりを確認できます。毎年の落ち葉が負担なら、木を入れ替える機会に<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>を、草取りの手間そのものを減らすなら<Link href="/groundcover-erabikata/" className="text-[#2D7F3E] underline">グランドカバープランツの選び方</Link>を参考にしてください。
          </p>

          {/* 6｜選び方 */}
          <H2 id="erabikata" num="6">失敗しない庭業者の選び方4ステップ</H2>
          <p className="leading-loose mb-6 text-[#4a5443]">
            庭業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。「平日は時間がないから」と最初の1社に即決する前に、数分の確認でトラブルの多くは防げます。
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
          <H2 id="faq" num="7">高崎の庭業者でよくある質問</H2>
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
            高崎で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。風を受けやすい常緑樹の枝を1本単位で透かすなら樹種別の目安がある剪定110番、風で傾いた木や枯れが確定した木の整理なら処分まで一括の伐採110番、平日に見られず伸ばしがちな草を範囲を決めて定期的に片付けるなら面積単価が分かりやすい草刈り110番、立ち会えない作業の仕上がりを写真付きの報告書で確かめるならsmileガーデン、立ち会いの有無と連絡方法を先に決めて口コミと料金を見比べるならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            乾いた冬の風と、通勤で家を空ける時間の長さが特徴の高崎の庭では、飛ぶ物・倒れる物・乾く株元の三つで冬に備えること、風で葉が傷んだ木は春の芽吹きまで見てから判断すること、立ち会えない作業は終わったあとに何を確認するかを決めてから頼むこと、春と秋に庭を見る日を決めて頼む時期をぶらさないこと、境界や電気や塀にかかわる作業は専門家に切り分けること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["高崎", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/niwaki-kareta/", label: "庭木が枯れたかどうかの見分け方" },
                { href: "/sentei-irai-junbi/", label: "庭木の剪定を頼む前の準備" },
                { href: "/haru-niwa-checklist/", label: "春の庭仕事チェックリスト" },
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
