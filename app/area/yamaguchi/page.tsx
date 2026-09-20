import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/yamaguchi/";
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
      "【2026年最新】山口の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "山口で剪定・伐採・草刈りを頼める庭業者を比較。草刈り110番（1平米600円〜）・伐採110番・剪定110番（1本2,890円〜）・smileガーデン・くらしのマーケットの料金と特徴、山あいの住宅地で獣を寄せつけない庭の整え方、隣の竹林からの侵入を止める考え方、山際・畑跡・家まわりで違う草刈りの目的まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】山口の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "山口で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。山あいの住宅地の庭で獣が寄りつく理由を庭側から減らす考え方、竹林と隣り合う庭で入ってくる前に境目をつくる方法、山際・畑跡・家まわりで草刈りの目的を分ける優先順位、獣害・竹・境界・法面で相談先が分かれる範囲の整理も解説します。",
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
    slug: "kusakari-110ban",
    num: "1-1",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "https://www.kusakari110.com/",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。<Hl>空き地や広い敷地にも対応</Hl>
        しており、家まわりだけ、山際だけ、といったように範囲を区切って頼みやすいのが特徴です。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        もあわせて依頼でき、定期メンテナンスプランで回数と時期を決めておくこともできます。
      </>
    ),
    recommend: [
      "山際や畑跡など広い範囲の草を面積で頼みたい人",
      "刈るだけでなく地面を覆う対策まで相談したい人",
      "定期契約で草刈りの手配をなくしたい人",
      "面積で費用の見当をつけたい人",
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
        のが特徴です。手入れが止まって大きくなった庭木や、敷地の隅で茂った木立をまとめて整理したいときに相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "敷地の隅で大きくなりすぎた木を整理したい人",
      "獣や虫の隠れ場所になっている茂みを根元から片付けたい人",
      "伐採した木材の処分まで一括で頼みたい人",
      "抜根して庭や畑跡を作り替えたい人",
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
    slug: "sentei-110ban",
    num: "1-3",
    catch: "1本2,890円〜・24時間365日受付",
    name: "剪定110番",
    officialUrl: "https://www.sentei110.com/",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国4,000社以上の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、山口市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "実のなる木や茂った木を透かして見通しをよくしたい人",
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
        で剪定・消毒・施肥をセットで任せられます。伸びるたびに手を入れる必要がある庭では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "一年を通して庭の手入れを定額で任せたい人",
      "剪定・消毒・施肥をセットでまとめたい人",
      "留守中の作業でも報告書で仕上がりを確認したい人",
      "離れて暮らす実家の庭を定期的に見てもらいたい人",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。山口市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、山際の草刈りや竹の処理に対応できるかを先に確かめてから予約するといった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで竹や山際の作業に対応できるか確認したい人",
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
    slug: "sentei-110ban",
    name: "剪定110番",
    type: "マッチング型",
    price: "剪定1本2,890円〜（出張費3,000円別途）",
    point: "24時間365日受付・見積もり後の追加料金なし",
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
    t: "① 敷地の「どこからどこまで」を写真と一緒に伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、敷地のどの範囲を対象にするのかを伝えましょう。山あいの住宅地では、家のまわりの庭と、裏手の山際や使わなくなった畑跡とで、草の質も作業の難しさも違います。敷地全体を引きで撮った写真と、気になる場所を寄りで撮った写真があると、範囲の線引きと見積もりの精度が上がります。竹が入ってきている場所があれば、その様子も写しておきましょう。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。広い範囲の草刈りや竹の処理は出る量が多くなりがちなので、刈り草・剪定枝・竹の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 庭業者に頼める範囲と、別の相談先に回す範囲を切り分ける",
    b: "獣の被害そのものは自治体の鳥獣担当に相談する範囲で、庭業者に頼めるのは庭の側を整えることまでです。隣地との境界がはっきりしない場所の竹や木は、土地家屋調査士などの専門家に相談する範囲が絡みます。法面や擁壁そのものに関わる工事は土木や建築の専門業者の領域です。最初に切り分けておくと、話が二度手間になりません。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。広い面積の草刈りや竹の処理に慣れているかどうかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "山口で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。実のなる木1本だけ低くしたい、といった依頼もできます。樹種や高さによって手間が変わるため、最低価格ではなく出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "庭にイノシシやシカが入ってくるのですが、庭業者に相談できますか？",
    a: "獣そのものへの対処は庭業者の範囲ではなく、お住まいの自治体の鳥獣担当の窓口に相談する内容です。庭業者に頼めるのは、庭の側を整えることまでです。落ちた実を放置しない、身を隠せる茂みを減らす、山際の草を刈って見通しをよくする、といった作業は、獣が寄りつく理由を減らすことにつながります。柵や電気柵の設置については、方法や補助の有無も含めて自治体に確認してください。庭で見つかるサインの見分け方は当サイトの庭の害獣被害の基礎知識の記事にまとめています。",
  },
  {
    q: "隣の竹林から竹が庭に入ってきました。どうすればよいですか？",
    a: "竹は地下茎で広がるため、庭に出てきた竹だけを切っても翌年また出てきます。対処の基本は、出てきた竹を早いうちに処理することと、地下茎が入ってくる境目に対策を入れることの2段構えです。境目の対策は掘る作業が伴うため、業者に相談する範囲になることが多いです。隣地の竹林そのものの管理は隣地の所有者の判断によるため、まずは話し合いから始めましょう。境界の位置がはっきりしない場合は、土地家屋調査士などの専門家に相談する範囲です。当サイトの竹・笹の対策の基礎知識の記事に、広がる仕組みと止め方をまとめています。",
  },
  {
    q: "敷地が広くて全部は刈りきれません。どこから頼めばよいですか？",
    a: "全面を同じ頻度で刈る必要はありません。家のまわりは見た目と虫の対策として、山際は見通しを保って獣や虫が寄りつきにくくするために、畑跡は荒れすぎて手がつけられなくなる前に、というように、場所ごとに目的が違います。目的ごとに優先順位をつけて、頻度の高い場所と年に一度で済む場所を分けると、費用も手間も読みやすくなります。草刈り110番は1平米600円〜の面積単価で、空き地や広い敷地にも対応しています。",
  },
  {
    q: "除草剤を山際や畑跡に使っても大丈夫ですか？",
    a: "使う場合は、必ず製品ラベルに記載された使用できる場所・方法・量に従ってください。畑として再び使う予定がある場所や、隣地の畑・水路に近い場所では、影響が及ぶ可能性があります。判断に迷う場合は、刈り取りや防草シートなどで覆う方法に切り替えるほうが確実です。方法ごとの向き不向きは当サイトの雑草対策の方法比較の記事にまとめています。",
  },
  {
    q: "切った枝や刈った草、竹の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。竹は長さや量によって扱いが変わることがあります。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。",
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

export default function AreaYamaguchiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】山口の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "山口で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "山口の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#yamaguchi5",
      label: "1｜山口で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "山口の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kemono", label: "2｜山あいの住宅地の庭は「獣が寄りつく理由」を庭側から減らす" },
    { href: "#take", label: "3｜竹林と隣り合う庭は「入ってくる前」に境目をつくる" },
    { href: "#mokuteki", label: "4｜山際・畑跡・家まわりでは草刈りの「目的」が違う" },
    { href: "#sodansaki", label: "5｜獣害・竹・境界・法面は相談先が分かれる——庭業者に頼める範囲" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜山口の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">山口の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】山口の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["山口", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="山口の剪定・伐採・草刈り業者の比較"
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
              「裏の山からイノシシが下りてきて庭を掘り返していく」「隣の竹林から竹が庭に出てくるようになった」「敷地が広くて、家のまわりを刈るだけで手いっぱい」——山口で庭業者を探すきっかけには、山と暮らしが隣り合う住宅地ならではの困りごとが絡むことがあります。
            </p>
            <p>
              本記事では、山口市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「獣が寄りつく理由を庭側から減らす考え方」「竹林と隣り合う庭で入ってくる前に境目をつくる方法」「山際・畑跡・家まわりで草刈りの目的を分ける優先順位」「獣害・竹・境界・法面で相談先が分かれる範囲の整理」といった、山口で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="yamaguchi5" num="1">山口で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            山口市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月8日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            山口の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月8日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、山口での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="kemono" num="2">山あいの住宅地の庭は「獣が寄りつく理由」を庭側から減らす</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            山口の住宅地には、裏手がそのまま山や雑木林につながっている家や、田畑と隣り合う家が多くあります。そうした庭では、庭が掘り返されている、植えたものが食べられている、夜に物音がするといった困りごとが起きることがあります。まず押さえておきたいのは、<Hl>獣そのものへの対処は庭業者の仕事ではなく、自治体の鳥獣担当の窓口に相談する内容</Hl>だという点です。庭業者に頼めるのは、庭の側を整えて、獣が寄りつく理由を減らすことまでです。庭で見つかるサインの見分け方と相談先の考え方は<Link href="/niwa-gaiju-higai/" className="text-[#2D7F3E] underline">庭の害獣被害の基礎知識</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            獣が庭に寄りつく理由は、大きく分けて<Hl>「食べるものがある」「身を隠せる場所がある」</Hl>の2つです。落ちたまま放置された果実、収穫されない野菜、生ごみや堆肥の置き場は、食べものの側の理由になります。茂りすぎた植え込みや、山際で伸び放題になった草むら、積み上げた剪定枝の山は、隠れ場所の側の理由になります。庭の側でできるのは、この2つを減らすことです。実のなる木があるなら、採りきれる量と高さに整え、落ちた実は放置しないようにしましょう。果樹を含む庭木の手入れの考え方は<Link href="/kaboku-kaika-teire/" className="text-[#2D7F3E] underline">花木の開花を良くする手入れ</Link>や<Link href="/kateisaien-niwaki/" className="text-[#2D7F3E] underline">家庭菜園スペースと庭木の両立</Link>も参考になります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            隠れ場所を減らす作業は、庭業者に頼みやすい範囲です。山際の草を刈って見通しをよくし、地面まで枝が垂れた木は下枝を上げて足元を見えるようにし、使わない茂みは根元から片付ける、という順番で考えます。剪定110番は庭木1本から依頼でき、剪定1本2,890円〜（出張費3,000円別途）の掲載料金で、現地調査・見積もりは無料です。茂みごと片付けたい場合は、伐採110番のように伐採後の木材処分まで一括対応をうたうサービスに相談できます。なお、<Hl>庭を整えても獣が来なくなるとは限りません</Hl>。柵や電気柵といった設備の設置は、方法や補助の有無も含めて自治体の窓口に確認してください。庭にできた穴や掘り返された跡は、獣以外の原因のこともあるため、決めつけずに観察することも大切です。
          </p>

          {/* 3 */}
          <H2 id="take" num="3">竹林と隣り合う庭は「入ってくる前」に境目をつくる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            山口では、住宅地のすぐ裏に竹林が広がっている場所が多くあります。隣地の竹林が手入れされなくなると、<Hl>竹は地下茎を伸ばして、塀や境界とは関係なく庭の中に出てきます</Hl>。地上に出てきた竹を切っても、地下茎が生きている限り翌年また別の場所から出てくるため、切るだけの対処では終わりません。広がる仕組みと止め方の全体像は<Link href="/take-taisaku/" className="text-[#2D7F3E] underline">竹・笹の対策の基礎知識</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            対処は2段構えで考えます。ひとつは、<Hl>庭に出てきた竹を早いうちに処理すること</Hl>です。出たばかりの竹は柔らかく処理しやすい一方、放っておくと固く高くなり、切るのも運び出すのも手間が増えます。もうひとつは、<Hl>地下茎が入ってくる境目に対策を入れること</Hl>です。境目を掘って地下茎を断ち、広がりを止める資材を入れる方法があり、掘る作業が伴うため業者に相談する範囲になることが多いです。すでに庭の中に定着してしまった竹を根元から片付けたい場合は、伐採110番のように抜根まで対応するサービスに、範囲と処分を含めて相談しましょう。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            隣地の竹林そのものをどうするかは、隣地の所有者の判断によります。<Hl>まずは話し合いから始めるのが基本</Hl>で、境界の位置がはっきりしない場合は、土地家屋調査士などの専門家に相談する範囲が絡みます。話し合いの進め方や考え方は<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>、境界標の見方は<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>にまとめています。竹の侵入を気にしなくてよい庭にしたいなら、境目に沿って地面を覆い、出てきたらすぐ気づけるようにしておく方法もあります。覆い方の基本は<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの基礎知識</Link>を参考にしてください。くらしのマーケットなら、予約前のメッセージで竹の処理に対応できる出店者かどうかを確かめてから予約できます。
          </p>

          {/* 4 */}
          <H2 id="mokuteki" num="4">山際・畑跡・家まわりでは草刈りの「目的」が違う——優先順位のつけ方</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            山あいの住宅地の敷地は、庭と呼べる部分のほかに、裏手の山際、使わなくなった畑や田の跡、家のまわりの通路など、性質の違う場所が混ざっていることが多いものです。これを<Hl>「敷地全体をどれくらいの頻度で刈るか」とひとまとめに考えると、量が多すぎて手が回らなくなります</Hl>。場所ごとに、なぜ刈るのかという目的を分けて考えると、優先順位と頻度が自然に決まります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            家まわりの草は、見た目と、虫や蛇が近づきにくい状態を保つことが目的で、<Hl>頻度は高めでも面積は小さい</Hl>場所です。山際の草は、獣や虫が身を隠す場所を減らし、境目の見通しを保つことが目的で、伸びきる前に一度刈っておけば済むことも多い場所です。畑跡は、荒れすぎて手がつけられなくなるのを防ぐことが目的で、年に決まった回数でよい場所です。こうして分けると、「家まわりは自分で、山際と畑跡は業者に」といった分担も考えやすくなります。自分でやる範囲の道具の考え方は<Link href="/niwa-dogu-erabikata/" className="text-[#2D7F3E] underline">庭仕事の道具の選び方と手入れ</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者に頼むときは、<Hl>刈る場所の目的を伝えると、仕上げの粗さや頻度の提案が変わります</Hl>。山際は見通しが立てばよいのか、畑跡は再び使う予定があるのか、といった情報があると、業者側も無駄のない段取りを組めます。草刈り110番は1平米600円〜の面積単価で、空き地や広い敷地にも対応しており、定期メンテナンスプランで回数と時期を決めておくこともできます。刈る回数そのものを減らしたいなら、頻度の高い場所から地面を覆う対策を入れる方法があります。方法ごとの向き不向きは<Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の方法比較</Link>、覆う設計の考え方は<Link href="/zasso-haenikui-niwa/" className="text-[#2D7F3E] underline">雑草が生えにくい庭のつくり方</Link>をご覧ください。刈り草の処分は量が多くなりがちなので、<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>を参考に、処分費を含めた総額で確認しましょう。
          </p>

          {/* 5 */}
          <H2 id="sodansaki" num="5">獣害・竹・境界・法面は相談先が分かれる——庭業者に頼める範囲を整理する</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            山と隣り合う庭の困りごとは、ひとつの業者ですべて解決できるとは限りません。<Hl>庭業者に頼めるのは、木を切る・草を刈る・茂みを片付ける・地面を覆うといった、庭の側の作業</Hl>です。それ以外は、それぞれ担当が分かれます。最初に切り分けておくと、依頼の話が二度手間になりませんし、庭業者に頼めない範囲を頼んでしまって断られる、ということも避けられます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            具体的には、次のように分かれます。獣の被害そのものと、柵や電気柵といった設備の相談は<Hl>自治体の鳥獣担当の窓口</Hl>です。隣地との境界がはっきりしない場所の木や竹は、<Hl>土地家屋調査士などの専門家</Hl>に相談する範囲が絡み、話し合いがこじれた場合は弁護士の領域になります。裏山との境目にある法面や擁壁、石積みそのものに関わる工事は、<Hl>土木や建築の専門業者</Hl>の領域で、庭業者が行うのはその手前の草刈りや木の整理までです。法面の草と根が構造物に与える影響が心配な場合は、変化の有無を専門業者に見てもらいましょう。除草剤を使う場合は、必ず製品ラベルに記載された使用できる場所・方法・量に従ってください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭の側の作業についても、頼み先は目的で変わります。木を減らして見通しをよくするなら剪定110番、茂みや定着した竹を根元から片付けるなら伐採110番、山際や畑跡の草を面積で頼むなら草刈り110番が候補です。年間を通して庭全体を見てもらいたい場合は、smileガーデンの定額制の年間管理プランのような形もあります。造園工事と庭の手入れのどちらに当たるのか迷う作業は、<Link href="/zoen-uekiya-chigai/" className="text-[#2D7F3E] underline">造園業者と植木屋の違い</Link>と<Link href="/niwa-reform-gaiko-chigai/" className="text-[#2D7F3E] underline">庭のリフォームと外構工事の違い</Link>を参考に整理してください。離れて暮らす実家の庭で、これらの困りごとをまとめて把握したい場合は<Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家・遠方の実家の庭管理</Link>もあわせてご覧ください。
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
          <H2 id="faq" num="7">山口の庭業者でよくある質問</H2>
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
            山口で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。山際や畑跡の草を面積で頼むなら空き地や広い敷地にも対応する草刈り110番、茂みや定着した竹を根元から片付けるなら処分まで一括の伐採110番、実のなる木や茂った木を透かすなら樹種別の目安がある剪定110番、一年を通して定期的に見てもらうならsmileガーデン、竹や山際の作業に対応できるかを先に確かめて口コミと料金を見比べるならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            山と隣り合う庭では、庭業者に頼める範囲と、別の相談先に回す範囲を分けることが出発点になります。獣が寄りつく理由を庭側から減らし、獣そのものは自治体に相談すること、竹は出てきた竹の処理と境目の対策を2段構えで考えること、草刈りは場所ごとの目的で優先順位をつけること、境界・法面・除草剤はそれぞれの専門家と製品ラベルに従うこと、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、敷地の状況に合った業者を選んでください。
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
              {["山口", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/agents/kusakari-110ban/", label: "草刈り110番の口コミ・評判" },
                { href: "/agents/bassai-110ban/", label: "伐採110番の口コミ・評判" },
                { href: "/niwa-gaiju-higai/", label: "庭の害獣被害の基礎知識" },
                { href: "/take-taisaku/", label: "竹・笹の対策の基礎知識" },
                { href: "/zasso-taisaku/", label: "雑草対策の方法比較" },
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
