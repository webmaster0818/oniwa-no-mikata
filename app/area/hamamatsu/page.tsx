import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/hamamatsu/";
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
      "【2026年最新】浜松の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "浜松で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・くらしのマーケットの料金と特徴、冬の乾いた強い風に備える木と生垣の仕立て方、落ち葉・刈り草が風で飛ぶ前提の片付け、市街地と中山間部で違う手入れの間隔、車を汚さない植栽と配置まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】浜松の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "浜松で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。冬の乾いた強い風が吹く土地では風を防ぐより抜けさせる仕立てで木と生垣を守ること、落ち葉・刈り草は風で飛ぶ前提で片付けて作業日を決めること、市街地と中山間部では伸びる勢いが違うので手入れの間隔を場所ごとに決めること、車を複数台停める家の庭は車を汚さない植栽と配置で考えることも解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、浜松市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。風の強い季節の前に枝を透かしておきたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "風の強い季節の前に木の枝を透かしておきたい人",
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
        ため、駐車場のまわりや山あいの敷地の外周など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "駐車場のまわりや敷地の外周の草を範囲を決めて片付けたい人",
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
        のが特徴です。風で傾いたまま残っている木や、駐車場の上に大きく張り出した木の整理もまとめて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "風で傾いたり裂けたりした木を根元から整理したい人",
      "駐車場の上に張り出した大きな木を整理したい人",
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
        で剪定・消毒・施肥をセットで任せられます。風の強い季節の前の枝透かしと、伸びる季節の刈り込みを毎年の決まりごとにしたい庭では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "風の季節前の枝透かしと伸びる季節の刈り込みを毎年セットで任せたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。浜松市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、山あいの住所まで来てもらえるかを聞いてから予約するといった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで対応エリアや作業範囲を確認したい人",
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
    t: "① 「風の当たり方」と「落ち葉の行き先」が分かる写真とセットで希望を伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、庭のどの方向から風が当たるのか、落ち葉や刈り草がどちらへ飛びやすいのかを伝えると、切る場所と量の相談がしやすくなります。風で揺れる木、傾いた木、車の上に張り出した枝があれば、その部分の写真も添えましょう。隣家の窓や道路との位置関係が写っていると、飛散への配慮も含めた見積もりになります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。山あいの住所では出張費の扱いや対応できる範囲が加盟店によって変わることがあるため、その点も先に確認しましょう。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認してください。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 風の強い時期を避けた日程と、飛散を防ぐ養生を最初に相談する",
    b: "風の強い日の作業は、刈った草や枝葉が隣家や道路に飛び散りやすく、高い場所の作業は危険も増します。見積もりの段階で、風の弱い時期や時間帯に作業できるか、飛散を防ぐシートや養生をどこまで行うか、集めたものをその日のうちに持ち帰ってもらえるかを確認しておきましょう。カーポートや外構の設置は庭業者ではなく外構工事の業者、庭の照明の配線は電気工事士の範囲なので、庭の作業とは分けて考えてください。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。風の強い土地での枝透かしに慣れているか、山あいまで出張できるか、駐車場まわりの作業で車への養生に配慮してくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "浜松で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。風で揺れやすい木の枝を1本だけ透かしておきたい、といった依頼もできます。樹種や高さによって手間が変わるため、最低価格ではなく出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "冬の強い風で木が傾いてきました。倒れる前にできることはありますか？",
    a: "傾きが進んでいる木は、まず枝を減らして風を受ける面積を小さくし、必要なら支柱で支えるのが基本の備えです。ただし、根元の土が持ち上がっている、幹に裂けがある、傾きが年々進んでいるといった状態は、剪定では戻らないことがあり、根元から整理する判断が必要になります。自分で判断がつかないときは、写真を添えて業者に相談してください。当サイトの台風前の庭木対策の記事に、風への備えの考え方をまとめています。",
  },
  {
    q: "落ち葉が風で隣の家に飛んでいって困っています。",
    a: "風の強い土地では、落ち葉を集めても袋に入れる前に飛んでしまいがちです。集めたその日のうちに袋に入れる、風の弱い時間帯に片付ける、落ち葉がたまりやすい隅を作って一か所に集まるようにする、といった工夫が基本です。根本的に減らすなら、隣家側に張り出した枝を戻す剪定や、落ち葉の少ない木への入れ替えも選択肢です。当サイトの落ち葉対策と掃除の基本の記事と、落ち葉が少ない庭木の選び方の記事が参考になります。",
  },
  {
    q: "山あいの地区に住んでいます。それでも来てもらえますか？",
    a: "多くのサービスは浜松市内に対応していますが、加盟店やフランチャイズ型のサービスでは、実際に来られる範囲や出張費の扱いが加盟店によって変わることがあります。見積もりを頼むときに、住所と道路の状況（車が入れるか、駐車できる場所があるか）を先に伝えて、対応の可否と出張費を確認しましょう。くらしのマーケットは出店者ごとに対応エリアが決まっているため、予約前にメッセージで確かめる使い方ができます。剪定と草刈りと処分をまとめて一度に頼むと、出張の回数を減らせます。",
  },
  {
    q: "駐車場の上に木の枝が張り出していて、車が汚れます。",
    a: "車の上に張り出した枝からは、樹液・花・実・落ち葉・鳥のフン・毛虫が落ちてきます。まずは駐車場の上に出ている枝を戻す剪定で様子を見て、それでも毎年困るなら、木を小さく仕立て直す、駐車場から離れた場所の木に役割を移す、といった配置の見直しを考えましょう。根が舗装を持ち上げている場合は、舗装側の工事は外構の業者の範囲です。当サイトのカーポートまわりの植栽の記事と、庭木の根上がりと舗装への影響の記事にまとめています。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。風の強い土地では、集めた枝葉を庭に置いたままにせず、その日のうちに持ち帰ってもらえるかも確認しておくと安心です。",
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

export default function AreaHamamatsuPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】浜松の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "浜松で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "浜松の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#hamamatsu5",
      label: "1｜浜松で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "浜松の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kaze", label: "2｜冬の乾いた強い風が吹く土地の庭は「風を防ぐ」より「風を抜けさせる」で木と生垣を仕立てる" },
    { href: "#tobu", label: "3｜落ち葉・刈り草は「風で飛ぶ」前提で片付ける——作業日の決め方まで" },
    { href: "#chusankan", label: "4｜市街地と中山間部では「伸びる勢い」が違う——手入れの間隔は場所ごとに決める" },
    { href: "#kuruma", label: "5｜車を複数台停める家の庭は「車を汚さない」植栽と配置で考える" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜浜松の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">浜松の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】浜松の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["浜松", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="浜松の剪定・伐採・草刈り業者の比較"
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
              「冬の風で木が揺さぶられて傾いてきた」「集めた落ち葉が袋に入れる前に隣へ飛んでいく」「山あいの実家の庭は、市街地の家と同じ間隔で手入れしても追いつかない」「駐車場の上の木から落ちるもので車が汚れる」——浜松で庭業者を探すきっかけには、冬に乾いた強い風が吹く土地柄と、海側の市街地から山あいまで広がる市域、そして車での移動が暮らしの中心にあることに関わる事情が絡むことがあります。
            </p>
            <p>
              本記事では、浜松市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「冬の乾いた強い風が吹く土地では風を防ぐより抜けさせる仕立てで木と生垣を守ること」「落ち葉・刈り草は風で飛ぶ前提で片付けて作業日を決めること」「市街地と中山間部では伸びる勢いが違うので手入れの間隔を場所ごとに決めること」「車を複数台停める家の庭は車を汚さない植栽と配置で考えること」といった、浜松で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="hamamatsu5" num="1">浜松で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            浜松市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月8日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            浜松の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月8日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、浜松での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="kaze" num="2">冬の乾いた強い風が吹く土地の庭は「風を防ぐ」より「風を抜けさせる」で木と生垣を仕立てる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            浜松は、冬に乾いた強い風が吹く日が続く土地として知られています。この風は夏の台風のように一度に大きな被害を出すものではなく、<Hl>同じ方向から何日も吹き続けて、木を少しずつ揺さぶり、傾け、乾かしていく</Hl>のが特徴です。葉を茂らせたまま冬を迎える常緑樹や、厚く仕立てた生垣は、風を正面から受け止める面が大きく、根元がゆるんで傾いたり、枝が裂けたりしやすくなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            考え方の基本は、<Hl>風を止めようとするのではなく、枝の間を風が抜けるように仕立てること</Hl>です。混み合った枝を間引いて木の内側に空間を作ると、風を受ける面が減り、揺さぶられ方が穏やかになります。強く切り詰めるのではなく透かすのが要点で、時期の考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>にまとめています。風への備え全般は夏の台風対策と共通する部分が多く、<Link href="/taifu-niwaki-taisaku/" className="text-[#2D7F3E] underline">台風前の庭木対策</Link>が参考になります。若い木や植え替えたばかりの木は根がまだ浅く、風で動きやすいため、支柱の添え方を<Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の立て方の基本</Link>で確認してください。風の季節の前に枝を透かしておくなら、剪定110番は庭木1本から依頼でき、剪定1本2,890円〜（出張費3,000円別途）の掲載料金で、現地調査・見積もりは無料です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            生垣や目隠しの木に風よけの役割を持たせたい場合も、<Hl>背を高く厚くするほど風を受けて傷みやすくなる</Hl>ため、低めで締まった仕立てのほうが長持ちします。目隠しの高さを確保したいなら、木だけで受け止めるのではなくフェンスと組み合わせる考え方もあります。判断材料は<Link href="/mekakushi-niwaki/" className="text-[#2D7F3E] underline">目隠しになる庭木の選び方</Link>、<Link href="/ikegaki-karikomi/" className="text-[#2D7F3E] underline">生垣の刈り込みの基礎知識</Link>、<Link href="/ikegaki-fence-hikaku/" className="text-[#2D7F3E] underline">生垣とフェンスの比較</Link>にまとめました。風は木だけでなく土も乾かします。株元の土がむき出しだと乾きが早いため、地面を覆う工夫は<Link href="/groundcover-erabikata/" className="text-[#2D7F3E] underline">グラウンドカバーの選び方</Link>を、乾いた季節の水やりは<Link href="/niwaki-mizuyari/" className="text-[#2D7F3E] underline">庭木の水やりの基本</Link>を参考にしてください。
          </p>

          {/* 3 */}
          <H2 id="tobu" num="3">落ち葉・刈り草は「風で飛ぶ」前提で片付ける——作業日の決め方まで</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            風の強い土地では、落ち葉の悩みが「たまる」ことより「飛ぶ」ことに変わります。<Hl>自分の庭の落ち葉が隣家や道路へ運ばれ、逆によその落ち葉が自分の庭に吹きだまる</Hl>ため、誰の落ち葉かを問うより、飛ばない片付け方を身につけるほうが現実的です。集めた落ち葉を山にしたまま置いておくと、翌朝には元に戻っています。集めたその日のうちに袋に入れる、風の弱い時間帯に片付ける、庭の隅に落ち葉が集まる場所を作って一か所で受ける、といった工夫が基本になります。片付けの基本は<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策と掃除の基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者に頼むときは、<Hl>作業日の風と、飛散を防ぐ養生、集めたものの持ち帰り</Hl>が確認事項になります。風の強い日の草刈りは、刈った草が隣家や道路に飛び散りやすく、高い場所の剪定は危険も増します。見積もりの段階で、風の弱い時期や時間帯に合わせられるか、隣家側や道路側にシートなどの養生をどこまで行うか、刈り草や剪定枝をその日のうちに持ち帰ってもらえるかを相談しておきましょう。隣家との考え方は<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>、処分の選択肢は<Link href="/senteieda-shobun/" className="text-[#2D7F3E] underline">剪定枝・刈り草の処分方法</Link>を参考にしてください。伐採110番は伐採後の木材処分まで一括対応をうたっており、草刈り110番は1平米600円〜の掲載料金で範囲を決めて頼めます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            毎年の落ち葉が隣家に飛んで気まずい思いをしているなら、<Hl>飛ぶ葉そのものを減らす</Hl>方向で考える方法もあります。隣家側に張り出した枝を戻す剪定、落ち葉の多い木を落ち葉の少ない木に入れ替える、庭の中で枝を細かくして量を減らす、といった選択肢です。木の入れ替えは<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>、枝の量を減らす道具は<Link href="/garden-shredder-katsuyo/" className="text-[#2D7F3E] underline">ガーデンシュレッダーの活用</Link>にまとめています。風の季節前の枝透かしと、伸びる季節の刈り込みを毎年の決まりごとにしたい場合は、smileガーデンの定額制の年間管理プランのように回数と時期を決めて任せる方法があり、作業後に写真付きの報告書が受け取れます。
          </p>

          {/* 4 */}
          <H2 id="chusankan" num="4">市街地と中山間部では「伸びる勢い」が違う——手入れの間隔は場所ごとに決める</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            浜松の市域は、海側の市街地から山あいの集落まで広がっています。同じ市内でも、<Hl>市街地の庭と中山間部の庭では、草や木の伸びる勢いと、外から入ってくるものの量がまったく違います</Hl>。市街地の庭は隣家との距離が近く、伸びた分を隣に迷惑をかけない範囲で整えることが手入れの中心です。中山間部の庭は、裏山からの落ち葉と枝、竹とつるの侵入、畑跡の草の勢いが加わり、市街地と同じ間隔で手入れしても追いつかないことがあります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            考え方としては、<Hl>「年に何回」を庭全体でひとつに決めるのではなく、場所ごとに間隔を変える</Hl>ことです。竹やつるが入ってくる境目は伸びる季節に短い間隔で、家のまわりの草は目につく前に、裏手の斜面は年に一度まとめて、というように分けると、無駄な回数を減らせます。竹の止め方は<Link href="/take-taisaku/" className="text-[#2D7F3E] underline">竹の対策の基本</Link>、つるの管理は<Link href="/tsuru-shokubutsu-kanri/" className="text-[#2D7F3E] underline">つる植物の管理の基本</Link>、雑草全般の考え方は<Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">庭の雑草対策の基本</Link>にまとめています。刈る回数を減らしたい場所は、刈り続けるより覆うほうが楽になることがあり、<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの基礎知識</Link>が参考になります。庭に獣が寄りつくようになった場合、獣そのものへの対応は自治体の窓口が担当で、庭業者に頼めるのは隠れ場所を減らすといった庭側の作業までです。考え方は<Link href="/niwa-gaiju-higai/" className="text-[#2D7F3E] underline">庭の獣害の基本</Link>をご覧ください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            住んでいない実家の庭が中山間部にある場合は、<Hl>帰るたびに追いつかない状態になる前に、間隔を決めて任せる</Hl>形に切り替えるのが現実的です。家を空けがちな庭の考え方は<Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の基本</Link>にまとめています。山あいの住所では、業者が実際に来られる範囲や出張費の扱いが加盟店によって変わることがあるため、見積もりを頼むときに住所と道路の状況を先に伝えましょう。くらしのマーケットは出店者ごとに対応エリアが決まっており、予約前にメッセージで確かめる使い方ができます。剪定と草刈りと処分を一度にまとめて頼むと、出張の回数を減らせます。見積もりの読み方は<Link href="/niwa-mitsumori-mikata/" className="text-[#2D7F3E] underline">剪定・伐採の見積もりの見方</Link>を参考にしてください。
          </p>

          {/* 5 */}
          <H2 id="kuruma" num="5">車を複数台停める家の庭は「車を汚さない」植栽と配置で考える</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            車での移動が暮らしの中心にある土地では、家の敷地の中で駐車場が大きな面積を占め、庭と駐車場が隣り合う配置が多くなります。そこで起きるのが、<Hl>庭木から落ちるもので車が汚れる</Hl>という悩みです。樹液、花びら、実、落ち葉、鳥のフン、毛虫は、車の上に張り出した枝からそのまま落ちてきます。風の強い土地では、少し離れた木の落ち葉も車の上に吹き寄せられます。庭の手入れを考えるとき、駐車場との位置関係を最初に見ておくと、頼む内容がはっきりします。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            対策の順番は、<Hl>まず駐車場の上に張り出した枝を戻す剪定、それでも毎年困るなら木の役割と配置の見直し</Hl>です。車の上に張り出す枝を減らすだけで、落ちてくるものはかなり減ります。木そのものを小さく仕立て直す、実のなる木や樹液の多い木は駐車場から離れた場所に役割を移す、駐車場に近い場所には落ち葉の少ない木や低木を選ぶ、といった見直しは<Link href="/carport-mawari-shokusai/" className="text-[#2D7F3E] underline">カーポートまわりの植栽の考え方</Link>と<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>にまとめています。毛虫がつきやすい木が車の上にある場合の注意は<Link href="/kemushi-chui/" className="text-[#2D7F3E] underline">庭の毛虫の注意点</Link>をご覧ください。駐車場の上に大きく育った木を根元から整理するなら、伐採110番は木材処分まで一括で相談でき、見積もりは無料です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            駐車場と庭が隣り合う家では、<Hl>車の出入りの動線と視界</Hl>も植栽の条件になります。出入り口の脇の低木が育ちすぎると左右の見通しが悪くなり、自転車や物置との取り合いも生まれます。動線の考え方は<Link href="/jitensha-okiba-dosen/" className="text-[#2D7F3E] underline">自転車置き場と庭の動線</Link>を参考にしてください。木の根が駐車場の舗装を持ち上げている場合は、根の処理は庭業者、舗装の直しは外構工事の業者と担当が分かれます。考え方は<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>にまとめました。カーポートの設置や庭の照明の配線は、それぞれ外構工事の業者と電気工事士の範囲で、庭の作業とは分けて頼む必要があります。手入れの手間を減らす方向で木を入れ替えるなら、<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>もあわせてご覧ください。
          </p>

          {/* 6｜選び方 */}
          <H2 id="erabikata" num="6">失敗しない庭業者の選び方4ステップ</H2>
          <p className="leading-loose mb-6 text-[#4a5443]">
            庭業者選びで後悔しないためには、次の4つのステップを踏むことが大切です。「風の季節が来る前に早く済ませたいから」と最初の1社に即決する前に、数分の確認でトラブルの多くは防げます。
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
          <H2 id="faq" num="7">浜松の庭業者でよくある質問</H2>
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
            浜松で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。風の季節の前に木の枝を透かしておくなら樹種別の目安がある剪定110番、駐車場のまわりや敷地の外周の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、風で傾いた木や駐車場の上に張り出した木の整理なら処分まで一括の伐採110番、風の季節前の枝透かしと伸びる季節の刈り込みを毎年セットで任せるならsmileガーデン、山あいまで来てもらえるかを予約前に確かめてから頼むならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            冬に乾いた強い風が吹き、市街地から山あいまで市域が広がり、車での移動が暮らしの中心にある浜松の庭では、木と生垣は風を防ぐより抜けさせる仕立てで守ること、落ち葉と刈り草は風で飛ぶ前提で片付けて作業日と養生を相談すること、手入れの間隔は市街地と中山間部で分けて場所ごとに決めること、駐車場の上に張り出した枝を戻して車を汚さない配置に見直すこと、外構や電気の工事は担当が分かれる領域だと切り分けること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["浜松", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/taifu-niwaki-taisaku/", label: "台風前の庭木対策" },
                { href: "/ochiba-taisaku/", label: "落ち葉対策と掃除の基本" },
                { href: "/carport-mawari-shokusai/", label: "カーポートまわりの植栽の考え方" },
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
