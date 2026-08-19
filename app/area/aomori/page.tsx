import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/aomori/";
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
      "【2026年最新】青森の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較｜お庭のミカタ",
  },
  description:
    "青森で剪定・伐採・草刈りを頼める庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、果樹を含む庭木の雪囲い・冬囲いの頼み方、雪解け後の傷みの手当てまで編集部が中立にまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】青森の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "青森で剪定・伐採・草刈りを頼める庭業者5社を料金・特徴で比較。庭に果樹がある家の冬支度、雪囲いの「囲う・縛る・吊る」の使い分け、雪解け後の折れ・裂けの手当て、秋と春をセットで段取りする頼み方も解説します。",
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
        から依頼者の近くのプロを手配する仕組みで、青森市内の依頼でも近隣の加盟店が対応します。
        <Hl>剪定1本2,890円〜の明朗会計</Hl>
        という本数単位の料金体系のため、雪の重みを受けやすい木だけを選んで冬前に整えるといった、
        <Hl>対象を絞った頼み方</Hl>
        がしやすいのが特徴です。現地調査・見積もりは無料で、24時間365日受け付けています。
      </>
    ),
    recommend: [
      "雪の重みを受けやすい木だけを冬前に整えたい人",
      "庭の果樹を1本単位で見てもらいたい人",
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
      "当サイトのレビュー記事作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。雪囲いなど冬支度の作業に対応できるかは加盟店により異なるため、依頼時に作業内容を伝えて確認しましょう。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "smile-garden",
    num: "1-2",
    catch: "定額制の年間管理・写真付き報告書",
    name: "smileガーデン",
    officialUrl: "https://www.smile-garden.jp/",
    image: "/images/smile-garden-features.png",
    intro: (
      <>
        smileガーデンは、全国展開のフランチャイズ型お庭メンテナンスサービスです。公式掲載の実績値として
        <Hl>年間3万件・リピート95%以上・満足度4.1</Hl>
        をうたい、<Hl>定額制の年間管理プラン</Hl>
        で剪定・消毒・施肥をセットで任せられます。作業のできる季節が限られる地域では、秋と春の予定を早めに押さえておくことが何より大切なため、
        <Hl>年間の段取りをまとめて任せられる契約</Hl>
        との相性があります。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "秋と春の作業予定を毎年押さえておきたい人",
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
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトのレビュー記事作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。雪囲いなど冬支度の作業がプランに含まれるかは地域によって異なるため、青森市内の対応可否とプラン内容は見積もり時に確認してください。",
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
        のが特徴です。毎年の冬支度が負担になっている木や、雪の重みで大きく裂けてしまった木の整理を相談できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "毎年の冬支度が負担になっている木を整理したい人",
      "雪の重みで大きく傷んだ木の処理を任せたい人",
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
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトのレビュー記事作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。積雪期は作業ができる時期が限られることがあるため、日程は早めに相談しましょう。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-4",
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
        もあわせて依頼でき、草の伸びる期間に作業が集中する地域でも、
        <Hl>定期メンテナンスプラン</Hl>
        で回数と時期を決めておけば手配の手間を減らせます。
      </>
    ),
    recommend: [
      "限られた期間に伸びる草をまとめて片付けたい人",
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
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトのレビュー記事作成時に確認しています。機械作業が中心のため狭い場所は苦手な場合があり、繁忙期は混み合います。面積と草の状態で総額が変わるため、見積もりで確認しましょう。",
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
        され、予約前にメッセージで相談できるため、雪囲いのような地域性のある作業に対応できるか、資材の用意はどちらが行うのかを確かめてから予約できます。
        <Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "雪囲いに対応できる出店者を探したい人",
      "口コミを見て自分で地域の業者を選びたい人",
      "資材の用意や作業範囲を予約前に相談したい人",
      "万が一の補償制度を重視する人",
    ],
    table: [
      { k: "料金の特徴", v: "出店者ごとに事前明示", note: "口コミ・実績と合わせて比較" },
      { k: "予約", v: "オンラインで完結", note: "業者と直接メッセージ可" },
      { k: "補償", v: "トラブル時の費用補償制度あり" },
      { k: "運営会社", v: "みんなのマーケット株式会社" },
    ],
    memo:
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトのレビュー記事作成時に確認しています。出店者ごとに対応できる作業内容は異なり、雪囲いの取り扱いの有無も異なるため、予約前にメッセージで確認するのがおすすめです。",
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
    slug: "smile-garden",
    name: "smileガーデン",
    type: "フランチャイズ型",
    price: "草刈り2〜3万円台・剪定3〜4万円台（相場）",
    point: "定額制の年間管理プラン・写真付き作業報告書",
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
    t: "① 冬支度が必要な木を書き出し、早い時期に予定を押さえる",
    b: "雪囲いや冬前の剪定は、依頼が特定の時期に集中します。寒くなってから探し始めると、希望の日程が取れないまま雪の季節に入ってしまうこともあります。庭のどの木に冬支度が必要か、どんな形で守りたいかを夏のうちに書き出し、早めに見積もりと日程の相談をしておきましょう。翌年以降も同じ業者に頼むつもりなら、作業の終わったその場で次の年の話をしておくのが確実です。",
  },
  {
    t: "② 資材費・処分費・出張費を含めた総額の見積もりを取る",
    b: "冬支度の作業では、作業費のほかに縄や支柱などの資材の費用が関わります。資材を業者が用意するのか自分で用意するのか、前年の資材を再利用できるのかによって金額が変わるため、内訳を確認しましょう。剪定を同時に頼む場合は、切った枝の処分費・出張費まで含めた総額を作業前に確かめておくことが大切です。",
  },
  {
    t: "③ 春の撤去まで含めて依頼するか、最初に決める",
    b: "冬囲いは、付ける作業と外す作業がセットです。撤去まで頼むのか自分でやるのかで年間の費用が変わりますし、外す時期の判断も必要になります。契約の段階で「撤去は誰が・いつ頃行うのか」「資材はどこに保管するのか」を決めておけば、春先に慌てて連絡することがなくなります。撤去の際に木の状態を見てもらえるよう頼んでおくと、傷みの発見も早くなります。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較する",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・資材や処分費の扱いを比較するのがおすすめです。特に冬支度は地域性のある作業のため、その地域での作業に慣れているかどうかも確認しておきたい点です。金額や説明に納得できない場合は、その場で契約せず一度断る選択肢もあります。",
  },
];

const faqs = [
  {
    q: "青森で庭木の雪囲い・冬囲いだけを頼むことはできますか？",
    a: "対応する業者はありますが、すべてのサービスが扱っているわけではありません。全国型のマッチングサービスやプラットフォームでは、地域性のある作業の取り扱いが加盟店・出店者によって分かれるため、依頼時に「雪囲いに対応できるか」「資材はどちらが用意するか」を最初に確認しましょう。くらしのマーケットのように予約前にメッセージで相談できる仕組みなら、対応可否を確かめてから予約できます。",
  },
  {
    q: "庭にりんごなどの果樹があります。冬支度で気をつけることはありますか？",
    a: "果樹は枝が横に広がりやすく、その形のまま雪を受けると付け根から裂けることがあります。冬前に伸びすぎた枝を整理して雪の乗る面を減らす、枝を寄せて縛って支えるといった備えが基本です。ただし、収穫を目的とする木では切り方の狙いが変わるため、「実を採りたいのか」「木を守ることを優先するのか」を業者に伝えたうえで内容を決めましょう。果樹の扱いに慣れているかは業者により差があります。",
  },
  {
    q: "雪囲いにはどんな方法がありますか？費用はどう変わりますか？",
    a: "大きく分けて、木の周囲を囲って雪や風から守る方法、枝を幹に寄せて縛る方法、上から吊って枝を支える方法があります。木の大きさ・形・置かれている場所によって向き不向きがあり、必要な資材と手間が違うため費用も変わります。すべての木に同じ方法を使う必要はなく、守りたい度合いに応じて使い分けるのが現実的です。具体的な方法は、庭の木を見てもらったうえで提案を受けるのが確実です。",
  },
  {
    q: "雪解け後、庭で最初に確認すべきことは何ですか？",
    a: "枝の折れ、幹や枝の付け根の裂け、樹皮の傷、支柱や囲いの資材の破損を確認してください。特に付け根の裂けは見落とされやすく、放っておくと傷が広がったり、そこから傷みが進んだりすることがあります。折れた枝が中途半端に残っている場合は、切り口を整えてもらうと回復しやすくなります。自分で判断が付かない傷みは、写真を撮って業者に相談しましょう。",
  },
  {
    q: "冬囲いは春に自分で外してもよいですか？",
    a: "外す作業自体は可能なことが多いですが、外す時期が早すぎると急な寒さや遅い雪で枝を傷めることがあり、遅すぎると芽の動きを妨げることがあります。判断に迷う場合は、契約時に撤去まで含めて頼んでおくと安心です。外すときに縄や支柱を傷めないよう扱えば翌年も使えるため、保管場所も含めて業者と決めておきましょう。撤去とあわせて木の状態を見てもらえるよう頼んでおくのがおすすめです。",
  },
  {
    q: "作業できる季節が限られるので、依頼のタイミングが分かりません。",
    a: "作業のできる期間が限られる地域では、「思い立ったときに探す」ではなく「毎年決まった時期に予定として押さえる」進め方が向いています。冬支度は寒くなる前、撤去と点検は雪解け後、草刈りは草の伸びる時期——というように、一年の作業を先に並べて業者と共有しておきましょう。年間管理の契約にまとめれば、日程の調整そのものを業者側の段取りに乗せられます。一年の流れは当サイトの庭仕事の年間スケジュールの解説記事が参考になります。",
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

export default function AreaAomoriPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】青森の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較",
    description:
      "青森で剪定・伐採・草刈りを頼める庭業者5社を、料金・特徴で比較した記事です。",
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
      { "@type": "ListItem", position: 2, name: "青森の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#aomori5",
      label: "1｜青森で頼れるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "青森の庭業者を一覧表で徹底比較" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#kaju-fuyu", label: "2｜庭に果樹がある家の冬支度は「枝を折らせない」ことが最優先" },
    { href: "#kakoi", label: "3｜雪囲いは「囲う・縛る・吊る」の使い分けで手間と費用が変わる" },
    { href: "#yukidoke", label: "4｜雪解け後は「折れ・裂け・樹皮の傷」を早いうちに手当てする" },
    { href: "#aki-haru", label: "5｜毎年頼むなら「秋と春のセット」で段取りする" },
    { href: "#erabikata", label: "6｜失敗しない庭業者の選び方4ステップ" },
    { href: "#faq", label: "7｜青森の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">青森の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】青森の庭業者おすすめ5選！剪定・伐採・草刈りの料金を徹底比較
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
              {["青森", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="青森の剪定・伐採・草刈り業者の比較"
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
              「毎年の雪囲いが年々きつくなってきた」「庭の果樹の枝が、雪の重みで裂けてしまった」——青森で庭業者を探す相談には、こうした「冬をどう越させるか」という悩みがよく関わってきます。庭木の冬支度は、放っておくと一冬で木の形が変わってしまうこともある作業です。特に、実を楽しむために植えた果樹は枝が横に広がりやすく、その形のまま雪を受けると付け根から裂けやすいという性質があります。
            </p>
            <p>
              本記事では、青森市内から依頼できる主要な庭業者を、当サイト編集部が各社レビュー記事の作成時に調査した料金・サービス内容で比較しました。あわせて、「果樹を含む庭木の冬支度で優先すべきこと」「雪囲いの方法の使い分けと費用への影響」「雪解け後の傷みの手当て」「秋と春をセットで段取りする頼み方」といった、雪のある地域ならではの依頼の考え方もまとめています。ぜひ業者選びの参考にしてください。
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
          <H2 id="aomori5" num="1">青森で頼れるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            青森市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社のレビュー記事作成時に公式サイト等を調査した掲載値です（2026年8月19日時点の掲載内容）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。雪囲いなど地域性のある作業の対応可否も、依頼時にあわせてご確認ください。なお、お庭マスターは関東エリア中心のサービスのため、本ページのカード紹介からは除外し、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            青森の庭業者を一覧表で徹底比較
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
            ※料金は当サイト各社レビュー記事の調査時掲載値（最低価格・相場の目安）です。2026年8月19日時点の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。雪囲いなど地域性のある作業の料金・対応可否は各社の掲載値に含まれないため、見積もり時にご確認ください。お庭マスターは関東エリア中心のサービスのため、青森での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜果樹の冬支度 */}
          <H2 id="kaju-fuyu" num="2">庭に果樹がある家の冬支度は「枝を折らせない」ことが最優先</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭に果樹を植えている家の冬支度で、まず考えたいのは<Hl>枝を折らせない・裂けさせない</Hl>ことです。果樹は実を採りやすいように横へ枝を広げた形になりやすく、その形のまま雪を受けると、水平に伸びた枝ほど大きな重みがかかります。付け根が裂けてしまうと、その枝は元に戻せません。景観の木であれば形が崩れる程度で済むところが、果樹では収穫そのものに関わってきます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            対策の基本は、<Hl>冬前に伸びすぎた枝を整理して雪の乗る面を減らすこと</Hl>と、<Hl>広がった枝を寄せて支えること</Hl>の二つです。ただし、果樹の剪定は「実を採るための切り方」と「木を守るための切り方」で狙いが変わるため、どちらを優先するのかを業者に伝えたうえで内容を決めましょう。1本単位で頼める剪定110番のようなサービスなら、対象の木を絞って相談できます。実を楽しむ木の手入れの考え方は
            <Link href="/kaboku-kaika-teire/" className="text-[#2D7F3E] underline">花木の開花と手入れの解説記事</Link>
            、庭で食べられる植物を育てる際の付き合い方は
            <Link href="/kateisaien-niwaki/" className="text-[#2D7F3E] underline">家庭菜園と庭木の解説記事</Link>
            が参考になります。
          </p>

          {/* 3｜雪囲いの使い分け */}
          <H2 id="kakoi" num="3">雪囲いは「囲う・縛る・吊る」の使い分けで手間と費用が変わる</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            冬囲いと一口に言っても、やり方はいくつかあります。<Hl>木の周囲を板や資材で囲って雪や風から守る方法</Hl>、<Hl>枝を幹に寄せて縛り、雪の乗る面を小さくする方法</Hl>、<Hl>支柱を立てて枝を上から吊り、重みを分散させる方法</Hl>——それぞれ必要な資材と手間が違い、そのまま費用の差になります。低木を丸ごと守りたいのか、広がった枝を支えたいのかで適した方法は変わるため、庭のすべての木に同じやり方をあてはめる必要はありません。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            費用を抑えたいなら、<Hl>木ごとに「どこまで守るか」の優先順位を決める</Hl>のが有効です。玄関先の目立つ木や大切にしている果樹は手をかけ、傷んでも仕立て直せる木は簡単な処置にとどめる、という配分です。あわせて、屋根からの落雪が当たる位置に木があると、どんな囲いをしても負担が大きくなります。植え場所そのものを見直したほうがよい場合もあるので、業者に相談してみましょう（
            <Link href="/niwaki-ishoku/" className="text-[#2D7F3E] underline">庭木の移植の解説記事</Link>
            へ）。支柱の考え方は
            <Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の解説記事</Link>
            、低木の扱いは
            <Link href="/teiboku-kanri/" className="text-[#2D7F3E] underline">低木の管理の解説記事</Link>
            でまとめています。
          </p>

          {/* 4｜雪解け後 */}
          <H2 id="yukidoke" num="4">雪解け後は「折れ・裂け・樹皮の傷」を早いうちに手当てする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            雪が消えた庭では、囲いを外して終わりにせず、<Hl>木の状態を一本ずつ確かめる</Hl>時間を取りましょう。見るべきは、折れた枝、幹や太い枝の付け根の裂け、樹皮がこすれたり剥がれたりしている箇所です。特に付け根の裂けは葉のない時期には目立ちにくく、そのままにしておくと傷が広がることがあります。折れた枝が中途半端に残っている場合は、切り口を整えてもらうほうが木にとって負担が少なくなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            傷んだ木を見て「枯れてしまったのでは」と心配になることもありますが、<Hl>葉が出る時期を待たないと判断できない場合も多い</Hl>ものです。慌てて切ってしまう前に、状態を写真に残して業者に相談しましょう。見極めの目安は
            <Link href="/niwaki-kareta/" className="text-[#2D7F3E] underline">枯れたように見える庭木の解説記事</Link>
            でまとめています。回復が見込めないほど大きく裂けた木や、毎年の冬支度が負担になっている木は、この機会に整理を検討するのも一つの判断です。伐採110番なら伐採から抜根・処分まで一括で相談でき、見積もりは無料です。跡地の始末は
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            を参考にしてください。
          </p>

          {/* 5｜秋と春のセット */}
          <H2 id="aki-haru" num="5">毎年頼むなら「秋と春のセット」で段取りする</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            冬囲いは、<Hl>付ける作業と外す作業がセットで一つの仕事</Hl>です。ところが依頼するときは秋のことだけを考えがちで、春先になって「誰に外してもらうか」で慌てるケースが少なくありません。契約の段階で、撤去は誰がいつ頃行うのか、資材はどこに保管するのか、翌年も同じ資材を使えるのかまで決めておきましょう。撤去の際に木の状態を見てもらうよう頼んでおけば、傷みの発見も早くなります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            さらに、作業のできる期間が限られる地域では<Hl>予定を先に押さえる</Hl>ことが何よりも効きます。冬支度の依頼は寒くなる前に集中し、雪解け後の作業も同じ時期に重なります。年間管理の契約にまとめれば、この日程調整そのものを業者側の段取りに移せます。smileガーデンの定額制の年間管理プランのようなサービスは、こうした使い方に向いています。一年の作業を並べて考える方法は
            <Link href="/niwa-soji-nenkan/" className="text-[#2D7F3E] underline">庭掃除・庭仕事の年間スケジュールの解説記事</Link>
            、冬に入る前の点検項目は
            <Link href="/nenmatsu-niwa-shitaku/" className="text-[#2D7F3E] underline">年末の庭支度の解説記事</Link>
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
          <H2 id="faq" num="7">青森の庭業者でよくある質問</H2>
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
            青森で剪定・伐採・草刈りを頼める主要な庭業者を比較しました。雪の重みを受けやすい木や庭の果樹を1本単位で整えるなら剪定110番、秋と春の作業を毎年の段取りに乗せるなら定額制のsmileガーデン、冬支度が負担になった木や大きく裂けた木の整理なら処分まで一括の伐採110番、草の伸びる時期の作業をまとめるなら面積単価の草刈り110番、雪囲いに対応できる出店者を予約前に確かめて選ぶならくらしのマーケット、というように、目的によって向いているサービスは変わります。大手直営の安心感を重視する方はダスキンも選択肢です。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            雪のある庭では、冬支度の出来がそのまま翌年の庭の姿になります。果樹を含む庭木は枝を折らせないことを最優先にすること、囲い方は木ごとに使い分けて優先順位を付けること、雪解け後は折れ・裂け・樹皮の傷を早めに手当てすること、付ける作業と外す作業をセットで段取りして予定を先に押さえること、資材費・処分費・出張費を含めた総額を作業前に確認することが、失敗しないための共通ルールです。本記事の比較を出発点に、庭の状況に合った業者を選んでください。
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
              {["青森", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/kochi/", label: "高知の庭業者おすすめ5選" },
                { href: "/area/saga/", label: "佐賀の庭業者おすすめ5選" },
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
                { href: "/nenmatsu-niwa-shitaku/", label: "年末の庭支度" },
                { href: "/niwaki-shichu/", label: "庭木の支柱の立て方" },
                { href: "/niwaki-kareta/", label: "枯れたように見える庭木" },
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
