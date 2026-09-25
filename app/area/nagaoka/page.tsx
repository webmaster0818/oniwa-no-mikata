import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/nagaoka/";
const UPDATED = "2026年9月17日";
const UPDATED_ISO = "2026-09-17";

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
      "【2026年最新】長岡の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "長岡で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・草刈り110番（1平米600円〜）・伐採110番・smileガーデン・くらしのマーケットの料金と特徴、電線や引込線のそばまで伸びた枝の相談先の確かめ方、屋根と雨どいに落ちる葉を枝の張り出しから減らす考え方、花壇と鉢の手間の分け方、敷石・飛び石のずれと沈みの見方まで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】長岡の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "長岡で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。電線や引込線のそばまで伸びた枝は自分で切らずにどこが誰の管理かを先に確かめること、屋根と雨どいに落ちる葉は庭木の高さと張り出しを見直す合図であること、花壇と鉢は毎年植え替える場所と植えっぱなしでよい場所に分けること、敷石・縁石・飛び石のずれと沈みの見方も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、長岡市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        で、現地調査・見積もりは無料。見積もり後の追加料金がない点と、
        <Hl>24時間365日の受付</Hl>
        で庭木1本から相談できる点が特徴です。電線や屋根に近づいてきた木を1本だけ小さく整えたい、という依頼にも向いています。請負賠償保険にも加入しています。
      </>
    ),
    recommend: [
      "電線や屋根に近づいてきた木を1本単位で小さく整えたい人",
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
        ため、雪が解けた後にまとめて伸びる敷地の外周など、範囲を決めて頼みやすいサービスです。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        や、定期メンテナンスプランも用意されています。
      </>
    ),
    recommend: [
      "雪解け後にまとめて伸びる敷地の外周の草を範囲を決めて片付けたい人",
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
        のが特徴です。雪の重みで傷んだ木を根元から整理する場合の伐採や、庭を作り替えるための抜根も、切り分けて運び出す方法を含めて相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "雪の重みで傷んだ木を根元から整理したい人",
      "建物や電線に近い木を搬出方法から相談したい人",
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
        で剪定・消毒・施肥をセットで任せられます。雪が多い地域で、冬の前と後にやることが毎年決まっている庭では、回数と時期を決めて任せる形が向いています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "冬の前と後の手入れを毎年の決まりごとにしたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。長岡市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        され、予約前に業者とメッセージで相談できるため、ずれてきた敷石や沈んだ通路の写真を送って対応できるか聞いてから予約するといった使い方もしやすい仕組みです。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "口コミを見て自分で地域の業者を選びたい人",
      "料金を比較してから依頼したい人",
      "予約前にメッセージで足元の傷み具合を相談してから頼みたい人",
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
    t: "① 庭の写真に「頭上」と「足元」の両方を写し込んで伝える",
    b: "「剪定」「伐採」「草刈り」のどれを頼みたいのかに加えて、木の上のほうがどこまで届いているかと、通り道の足元がどうなっているかを写真で伝えましょう。頭上は、屋根の高さと枝の位置関係、線が近くを通っているかどうかが分かる角度で撮ります。足元は、段差やぐらつきのある場所を近くから一枚と、通り道全体が入る一枚を分けて撮ると伝わりやすくなります。雪が多い地域では作業できる時期が限られるため、いつ頃までに終えたいかもあわせて伝えておくと日程を組みやすくなります。",
  },
  {
    t: "② 処分費・出張費を含めた総額の見積もりを取る",
    b: "「1本◯◯円〜」「1平米◯◯円〜」という表示は最低価格で、実際は樹種・高さ・本数・面積・庭の状況で変わります。屋根より高い枝を扱う作業は、高い場所での作業が加わるぶん金額が上がりやすく、出てくる枝の量も多くなります。石を外したり据え直したりする作業は、重さと運び出しの経路で手間が変わります。剪定枝や刈り草の処分費、出張費まで含めた総額を必ず作業前に確認しましょう。剪定110番・伐採110番・smileガーデンはいずれも見積もり無料、くらしのマーケットは出店者ごとに料金が事前明示されるため、金額を見てから判断できます。",
  },
  {
    t: "③ 「自分の判断で手を入れてよい範囲」を先に確かめる",
    b: "電線や、家に引き込まれている線に近い枝は、作業を頼む前に、契約している電力会社や通信の会社へ状況を伝えて進め方を確認しましょう。歩道の街路樹や植樹帯は道路を管理する自治体の担当で、庭業者に頼んで切ることはできません。隣家との境界がはっきりしない場所の木や、塀の所有関係が分からない場合は、土地家屋調査士などの専門家に相談する範囲です。分譲地の入口や区画の間にある共用の緑地は、管理組合や自治会の管轄になっていることがあります。敷地の高低差を支える擁壁そのものの傷みは土木・建築の業者の範囲で、庭業者に頼めるのはその上に生えた草木の手入れまでです。庭業者に頼む前に、手を入れてよい範囲と相談先を切り分けておくと、後からのトラブルを避けられます。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。屋根より高い木の作業に慣れているか、石やレンガの据え直しまで受けてくれるか、雪が多い地域の段取りに合わせて日程を組んでくれるかは、業者ごとに差が出やすい点です。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・処分費の扱いを比較するのがおすすめです。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "長岡で庭木1本だけの剪定でも頼めますか？",
    a: "頼めます。剪定110番は庭木1本からの依頼に対応しており、剪定1本2,890円〜（出張費3,000円別途）です。電線や屋根に近づいてきた木を1本だけ小さく整えたいという依頼でも相談できます。最低価格は樹種・高さにより変わるため、出張費を含めた総額を見積もりで確認しましょう。現地調査・見積もりは無料です。",
  },
  {
    q: "電線に触れそうな枝は、庭業者に切ってもらえますか？",
    a: "自分で切るのは避けてください。まず、その線が道路沿いのものか、自分の家へ引き込まれているものかを確かめ、契約している電力会社や通信の会社へ状況を伝えて進め方を確認しましょう。そのうえで、線から距離を取った状態を保つための剪定を庭業者に頼むのが安全な進め方です。高い木を自分で切ることの危険は、当サイトの高木剪定の解説記事にまとめています。",
  },
  {
    q: "雪が多い地域では、庭木の手入れをいつ頼むのがよいですか？",
    a: "作業できる時期が限られるぶん、依頼が重なりやすいのが特徴です。「いつまでに終わっていればよいか」から逆算して、余裕を持って相談を始めるのが確実です。雪の重みに備える冬囲いなどの作業に対応できるかどうかは業者によって異なるため、依頼時に確認しましょう。剪定110番は24時間365日受付、伐採110番も24時間受付のため、予定が決まった時点で日程の相談を始められます。",
  },
  {
    q: "雨どいに落ち葉がたまります。庭木の手入れで減らせますか？",
    a: "屋根の上に張り出している枝を減らすことで、屋根に載る葉の量は減らせます。木全体を小さくするのか、屋根側の枝だけを抜くのかで作業量が変わるため、「屋根の上に枝を出さない状態にしたい」という目的を見積もりのときに伝えましょう。あわせて、雨どいから落ちた水が集まる場所の排水桝が葉でふさがっていないかも見ておくと安心です。落ち葉の出にくい木への入れ替えは、当サイトの落ち葉が少ない庭木の解説記事が参考になります。",
  },
  {
    q: "飛び石や敷石がずれてきました。庭業者に直してもらえますか？",
    a: "並べ直しや下地の整え方まで対応できるかは業者によって異なります。まず、段差の大きさ、石がぐらつくかどうか、周りに水がたまっているかどうかを確かめ、写真を添えて相談しましょう。ぐらつく石は下の土が流れていることがあり、並べ直すだけではまた動きます。木の根が下から押し上げている場合は、根の扱いから考える必要があります。くらしのマーケットなら、予約前にメッセージで足元の写真を送って対応できるかを聞いてから予約できます。",
  },
  {
    q: "切った枝や刈った草の処分もお願いできますか？",
    a: "伐採110番は伐採後の木材処分まで一括対応をうたっています。その他の業者でも処分まで含めて対応してもらえることが一般的ですが、処分費が料金に含まれるかどうかはサービス・加盟店により異なるため、見積もり時に必ず確認しましょう。自分で家庭ごみとして出す場合は、お住まいの市区町村のルール（長さ・束ね方・量の制限など）の確認が必要です。屋根より高い枝を落とした後は量が多くなりやすいため、処分込みの総額で確認しておくと安心です。",
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

export default function AreaNagaokaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】長岡の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "長岡で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-09-17T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "長岡の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#nagaoka5",
      label: "1｜長岡で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "長岡の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#densen", label: "2｜電線や引込線のそばまで伸びた枝は、自分で切らずに「どこが誰の管理か」を先に確かめる" },
    { href: "#yane", label: "3｜屋根と雨どいに落ちる葉は、庭木の「高さと張り出し」を見直す合図" },
    { href: "#kadan", label: "4｜花壇と鉢は「毎年植え替える場所」と「植えっぱなしでよい場所」に分けると手間が減る" },
    { href: "#shikiishi", label: "5｜敷石・縁石・飛び石のずれと沈みは、放っておくと「歩けない庭」になる" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜長岡の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">長岡の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】長岡の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["長岡", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="長岡の剪定・伐採・草刈り業者の比較"
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
              「雪が解けたら枝が垂れ下がっていて、線の近くまで届いていた」「屋根と雨どいに落ち葉がたまり、毎年掃除に上がるのが怖い」「花壇の植え替えが年々おっくうになってきた」「飛び石がずれて、通るたびにつまずきそうになる」——長岡で庭業者を探すきっかけには、雪が多い地域の庭ならではの、「頭上」と「足元」に関わる困りごとが絡むことがあります。
            </p>
            <p>
              本記事では、長岡市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「電線や引込線のそばまで伸びた枝は自分で切らずにどこが誰の管理かを先に確かめること」「屋根と雨どいに落ちる葉は庭木の高さと張り出しを見直す合図であること」「花壇と鉢は毎年植え替える場所と植えっぱなしでよい場所に分けると手間が減ること」「敷石・縁石・飛び石のずれと沈みは放っておくと歩けない庭になること」といった、長岡で特に確認しておきたい依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="nagaoka5" num="1">長岡で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            長岡市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年9月17日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            長岡の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年9月17日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。お庭マスターは関東エリア中心のサービスのため、長岡での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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
          <H2 id="densen" num="2">電線や引込線のそばまで伸びた枝は、自分で切らずに「どこが誰の管理か」を先に確かめる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭木が家の高さを越えてくると、枝が電線や、家へ引き込まれている線の近くまで届くことがあります。雪が多い地域では、枝に雪が乗って垂れ下がり、いつもより線に近づくこともあります。ここで大切なのは、<Hl>線の近くの枝は、見た目や高さの問題ではなく安全の問題として扱うこと</Hl>です。脚立や高枝切りばさみで届きそうに見えても、自分で切ろうとするのは避けてください。高い木を自分で切ることの危険は<Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険と業者に頼む判断</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            次に確かめたいのは、<Hl>その線が何の線で、手入れの相談をどこにすればよいか</Hl>です。道路沿いの電柱や電線に関わる相談先と、自分の家に引き込まれている線の相談先は同じとは限りません。線に触れそうな枝がある場合は、作業を頼む前に、契約している電力会社や通信の会社へ状況を伝え、どう進めればよいかを確認しておくのが安全です。あわせて、歩道の街路樹や植樹帯は道路を管理する自治体の担当で、庭業者に頼んで切ることはできません。境界のあたりに立つ木で、どちらの敷地かがはっきりしない場合は、土地家屋調査士などの専門家に相談する範囲で、<Link href="/shikichi-kyokai-hei/" className="text-[#2D7F3E] underline">敷地境界と塀の基礎知識</Link>を参考にしてください。隣家側へ出た枝の扱いは<Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">隣家への枝の越境と対処の基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            相談先がはっきりしたら、庭業者に頼むのは<Hl>「線から距離を取った状態を保つ」ための剪定</Hl>です。一度切っても枝はまた伸びるため、何年かに一度ではなく、線に近づく前に整える間隔を決めておくと安心です。剪定110番は剪定1本2,890円〜（出張費3,000円別途）の掲載料金で庭木1本からの依頼に対応し、現地調査・見積もりは無料です。木を残さず根元から整理する判断に傾いたときは、伐採110番が抜根と処分まで一括で相談でき、見積もりは無料です。残すか手放すかの考え方は<Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違い</Link>、切り株を残した場合の注意は<Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株を放置するとどうなるか</Link>も参考になります。
          </p>

          {/* 3 */}
          <H2 id="yane" num="3">屋根と雨どいに落ちる葉は、庭木の「高さと張り出し」を見直す合図</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            雨どいの詰まりは掃除の手間の問題に見えて、実は<Hl>庭木の高さと張り出しが家に追いついてしまったサイン</Hl>です。屋根より高い枝から落ちた葉はそのまま屋根に載り、雨に流されて雨どいへ集まります。雪が多い地域では屋根に上がって作業できる時期が限られるため、詰まってから直すより、落ちる葉の量そのものを減らしておくほうが現実的です。落ち葉の片付け方は<Link href="/ochiba-taisaku/" className="text-[#2D7F3E] underline">落ち葉対策と掃除の基本</Link>、集めた葉の使い道は<Link href="/ochiba-taihi-compost/" className="text-[#2D7F3E] underline">落ち葉堆肥・コンポストの基本</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            業者に頼むときは、<Hl>「屋根の上に枝を出さない」という目的をそのまま伝える</Hl>のが早道です。木全体を小さくするのか、屋根側の枝だけを抜くのかで、作業量も仕上がりも変わります。屋根に近い枝は切る位置を誤ると翌年そこから勢いよく伸び返すことがあるため、目的を共有したうえで任せましょう。落ち葉の出にくい木への入れ替えを考えるなら<Link href="/ochiba-sukunai-niwaki/" className="text-[#2D7F3E] underline">落ち葉が少ない庭木の選び方</Link>と<Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の選び方</Link>、切る時期の考え方は<Link href="/sentei-jiki/" className="text-[#2D7F3E] underline">庭木の剪定時期の基本</Link>をご覧ください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            地面側の備えも忘れないでください。<Hl>雨どいから落ちた水が集まる場所と、庭の低い場所は、落ち葉がたまりやすく水も抜けにくい</Hl>ところです。排水桝が葉でふさがっていないかは季節の変わり目に見ておきたい点で、点検の目安は<Link href="/haisuimasu-tenken/" className="text-[#2D7F3E] underline">排水桝の点検の基本</Link>、地面の水の抜け方の考え方は<Link href="/niwa-mizuhake/" className="text-[#2D7F3E] underline">庭の水はけ改善の考え方</Link>にまとめています。高い場所の作業と地面の片付けをまとめて頼めば、来てもらう回数を減らせます。smileガーデンは定額制の年間管理プランで回数と時期を決めて任せられ、作業後に写真付きの作業報告書を受け取れます。
          </p>

          {/* 4 */}
          <H2 id="kadan" num="4">花壇と鉢は「毎年植え替える場所」と「植えっぱなしでよい場所」に分けると手間が減る</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭に花を植える楽しみは、続けるうちに手間の積み重ねにもなります。特に、毎年苗を買って植え替える花壇と、いくつも並んだ鉢は、季節ごとに必ず手が要る場所です。負担を減らすとき、まず考えたいのは量を減らすことではなく、<Hl>「毎年植え替える場所」と「植えっぱなしでよい場所」を分けること</Hl>です。毎年替える花は玄関先や道路から見える一角に集め、それ以外は手のかからない植物に置き換える、という分け方が基本になります。毎年芽を出す植物と一年で終わる植物の違いは<Link href="/shukkonso-ichinenso/" className="text-[#2D7F3E] underline">宿根草と一年草の使い分け</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            植えっぱなしでよい場所に向くのは、地面を覆って広がる植物や、毎年同じ場所から芽を出す植物です。<Hl>雪が多い地域では、冬の間に地上部が見えなくなる植物のほうが、片付けの手間が少なく済む</Hl>という利点もあります。地面を覆う植物の選び方は<Link href="/groundcover-erabikata/" className="text-[#2D7F3E] underline">グラウンドカバーの選び方</Link>、球根で毎年出てくる植物の扱いは<Link href="/kyukon-shokubutsu-kanri/" className="text-[#2D7F3E] underline">球根植物の管理の基本</Link>、土の整え方は<Link href="/kadan-tsuchizukuri/" className="text-[#2D7F3E] underline">花壇の土づくりの基本</Link>を参考にしてください。日当たりが弱い場所は無理に花を増やさず、<Link href="/hikage-niwa-shokusai/" className="text-[#2D7F3E] underline">北向き・日陰の庭の植栽の考え方</Link>に沿って選ぶほうが長続きします。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            鉢とプランターは、数が増えるほど置き場所と水やりの負担が増します。<Hl>使わなくなった鉢をそのままにしておくと、水がたまって虫のわく原因にもなる</Hl>ため、減らすと決めたら処分まで含めて片付けましょう。処分の考え方は<Link href="/uekibachi-planter-shobun/" className="text-[#2D7F3E] underline">植木鉢・プランターの処分の考え方</Link>、鉢から地面へ移す場合は<Link href="/hachiue-jiue-uekae/" className="text-[#2D7F3E] underline">鉢植えから地植えへの植え替え</Link>にまとめています。花壇まわりの草が増えて手に負えなくなっているなら、草刈り110番は1平米600円〜という面積単価で範囲を決めて頼め、草刈り後の防草シート施工も相談できます。覆い方の選択肢は<Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの基礎知識</Link>と<Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの基本</Link>をご覧ください。
          </p>

          {/* 5 */}
          <H2 id="shikiishi" num="5">敷石・縁石・飛び石のずれと沈みは、放っておくと「歩けない庭」になる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭の足元に据えた石やレンガは、置いたときのままでいるように見えて、年月とともに少しずつ動きます。土が締まって沈む、水の流れで下の砂が抜ける、根が下から持ち上げる——原因はいくつもあり、<Hl>雪が多い地域では、地面が繰り返し凍って緩むことも動きの一因</Hl>になります。数ミリのずれは気になりませんが、積み重なると段差になり、つまずきの原因になります。飛び石まわりの扱いは<Link href="/tobiishi-zasso/" className="text-[#2D7F3E] underline">飛び石まわりの雑草の解説記事</Link>、レンガや枕木の傷み方は<Link href="/renga-makuragi-rekka/" className="text-[#2D7F3E] underline">レンガ・枕木の劣化と交換の判断</Link>にまとめています。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            見ておきたいのは三つです。<Hl>ひとつは段差の大きさ、ふたつめは石がぐらつくかどうか、みっつめは周りに水がたまっているかどうか</Hl>です。ぐらつく石は下の土が流れている可能性があり、並べ直すだけでなく下地から直さないとまた動きます。水がたまる場所の石は、動きやすいうえに滑りやすくもなります。木の根が下から押し上げている場合は、石だけを直しても繰り返すため、根の扱いから考える必要があり、<Link href="/niwaki-neagari-hoso/" className="text-[#2D7F3E] underline">庭木の根上がりと舗装への影響</Link>が参考になります。石の表面に苔が広がって滑りやすい場合は<Link href="/niwa-koke-taisaku/" className="text-[#2D7F3E] underline">庭の苔対策の基本</Link>もご覧ください。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            直し方を決めるときは、<Hl>その通り道を今後も使い続けるかどうか</Hl>から考えると迷いません。使い続けるなら並べ直しや下地の作り直し、あまり通らないなら石を外して覆ってしまうほうが手間が減ります。歩きやすさを優先するなら<Link href="/niwa-barrier-free/" className="text-[#2D7F3E] underline">庭のバリアフリーの考え方</Link>、夜の足元が不安なら<Link href="/niwa-shomei-keikaku/" className="text-[#2D7F3E] underline">庭の照明計画の基本</Link>と<Link href="/garden-light-chui/" className="text-[#2D7F3E] underline">ガーデンライトと配線の注意点</Link>もご覧ください。石や灯篭そのものを外す場合は重量があり運び出しに手間がかかるため、<Link href="/niwaishi-toro-tekkyo/" className="text-[#2D7F3E] underline">庭石・灯篭の撤去の基礎知識</Link>を確認したうえで業者に相談しましょう。くらしのマーケットなら、足元の写真を送って対応できるかどうかをメッセージで聞いてから予約できます。
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
          <H2 id="faq" num="7">長岡の庭業者でよくある質問</H2>
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
            長岡で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。電線や屋根に近づいてきた木を1本単位で小さく整えるなら樹種別の目安がある剪定110番、雪解け後にまとめて伸びる敷地の外周の草を範囲を決めて片付けるなら面積単価が分かりやすい草刈り110番、雪の重みで傷んだ木を根元から整理するなら処分まで一括の伐採110番、冬の前と後の手入れを毎年の決まりごとにするならsmileガーデン、足元の傷み具合を写真で相談してから頼むならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            雪が多い地域の庭では、「頭上」と「足元」を分けて見ることが依頼の出発点になります。線に近い枝は自分で切らず相談先を先に確かめること、屋根と雨どいに落ちる葉は枝の張り出しから減らすこと、花壇と鉢は毎年植え替える場所と植えっぱなしでよい場所に分けること、敷石や飛び石のずれは段差とぐらつきと水のたまり方から原因を見ること、そして処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["長岡", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/takagi-sentei-kiken/", label: "高木剪定の危険と業者に頼む判断" },
                { href: "/ochiba-taisaku/", label: "落ち葉対策と掃除の基本" },
                { href: "/niwa-barrier-free/", label: "庭のバリアフリーの考え方" },
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
