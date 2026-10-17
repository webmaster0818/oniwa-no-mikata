import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const SITE = "https://oniwa-no-mikata.com";
const PATH = "/area/akita/";
const UPDATED = "2026年8月21日";
const UPDATED_ISO = "2026-08-21";

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
      "【2026年最新】秋田の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較｜お庭のミカタ",
  },
  description:
    "秋田で剪定・伐採・草刈りを依頼できる庭業者を比較。剪定110番（1本2,890円〜）・伐採110番・草刈り110番（1平米600円〜）・smileガーデン・くらしのマーケットの料金と特徴、冬囲いで守る木を絞る考え方、庭の管理を段階的に縮める進め方を編集部が中立の立場でまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title:
      "【2026年最新】秋田の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "秋田で剪定・伐採・草刈りを依頼できる庭業者5社を料金・特徴で比較します。冬囲いの対象とする木を絞る考え方、体力に合わせた作業量の見直し、庭木を減らす・低くする判断、離れて暮らす家族と分担する際の依頼方法も解説します。",
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
    officialUrl: "",
    image: "/images/sentei-110ban-features.png",
    intro: (
      <>
        剪定110番は、シェアリングテクノロジー株式会社が運営する剪定専門のマッチングサービスです。
        <Hl>全国4,000社以上の加盟店ネットワーク</Hl>
        から依頼者の近くのプロを手配する仕組みで、秋田市内の依頼でも近隣の加盟店が対応します。料金が
        <Hl>剪定1本2,890円〜という本数単位</Hl>
        で示されるため、「今年はこの3本だけ」というように
        <Hl>手を入れる木を年ごとに絞って費用を調整する</Hl>
        使い方がしやすいのが特徴です。庭の管理を少しずつ軽くしていきたい方にとって、金額の見通しを立てやすい料金体系です。現地調査・見積もりは無料で、24時間365日受け付けています。
      </>
    ),
    recommend: [
      "今年手を入れる木を絞って費用を調整したい方",
      "自分では登れなくなった木だけを依頼したい方",
      "見積もり後の追加料金なしの明朗会計を重視する方",
      "剪定と合わせて伐採・草刈り・消毒も相談したい方",
    ],
    table: [
      { k: "剪定（1本あたり）", v: "2,890円〜", note: "樹種・高さで変動。カシ2,300円／モミジ3,000円などの樹種別目安あり" },
      { k: "出張費", v: "3,000円", note: "別途必要" },
      { k: "受付時間", v: "24時間365日" },
      { k: "見積もり", v: "現地調査・見積もり無料・追加料金なし" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "当サイトの各社紹介ページ作成時の調査で、剪定1本2,890円〜・出張費3,000円別途・24時間365日受付・請負賠償保険加入を確認しています。冬囲いのように地域性のある作業に対応できるかは加盟店により異なるため、依頼時に作業内容を伝えてご確認ください。加盟店紹介型のため、対応品質は実際に作業する加盟店により差が出ることがあります。正確な金額は無料の現地調査・見積もりで確定します。",
  },
  {
    slug: "bassai-110ban",
    num: "1-2",
    catch: "伐採・抜根専門・処分まで一括",
    name: "伐採110番",
    officialUrl: "",
    image: "/images/bassai-110ban-features.png",
    intro: (
      <>
        伐採110番は、伐採・抜根に特化した専門サービスです。庭木の伐採から
        <Hl>大木・高木・危険木の特殊伐採</Hl>
        、重機を使った大規模作業まで対応し、
        <Hl>伐採後の木材処分まで一括で任せられる</Hl>
        のが特徴です。毎年の冬支度が体力的に負担になっている木や、屋根まで届いて雪下ろしの妨げになる木など、
        <Hl>「持ち続けること自体が負担になった木」を整理する</Hl>
        相談先として利用できます。24時間受付で、見積もりは無料です。
      </>
    ),
    recommend: [
      "毎年の冬支度が負担になっている木を整理したい方",
      "屋根まわりに近づきすぎた木を減らしたい方",
      "伐採した木材の処分まで一括で依頼したい方",
      "抜根して手のかからない庭に作り替えたい方",
    ],
    table: [
      { k: "伐採費用", v: "木の高さ・本数で変動", note: "現地調査で確定" },
      { k: "伐採後の処分", v: "一括対応可能" },
      { k: "受付時間", v: "24時間受付" },
      { k: "見積もり", v: "無料" },
      { k: "運営会社", v: "シェアリングテクノロジー株式会社" },
    ],
    memo:
      "伐採・抜根・特殊伐採・木材処分に対応し、見積もり無料・24時間受付であることを当サイトの各社紹介ページ作成時に確認しています。大規模・特殊な伐採は高額になる場合があるため、作業前に必ず総額の見積もりを確認してください。雪の残る時期は作業できる日が限られることがあるため、日程には余裕を持ってご相談ください。",
  },
  {
    slug: "smile-garden",
    num: "1-3",
    catch: "定額制の年間管理・写真付き報告書",
    name: "smileガーデン",
    officialUrl: "https://www.smile-garden1128.com/",
    image: "/images/smile-garden-features.png",
    intro: (
      <>
        smileガーデンは、全国展開のフランチャイズ型お庭メンテナンスサービスです。公式掲載の実績値として
        <Hl>年間3万件・リピート95%以上・満足度4.1</Hl>
        を掲げ、<Hl>定額制の年間管理プラン</Hl>
        で剪定・消毒・施肥をセットで任せられます。毎回自分で業者を探して日程を調整する作業は、それ自体が負担になりがちです。
        <Hl>一年分の段取りを契約にまとめることで、業者を探す手間も含めて任せられる</Hl>
        点で、庭の管理の負担を減らしたい方に適しています。作業後には
        <Hl>写真付きの作業報告書</Hl>
        が受け取れるため、離れて暮らす家族とも仕上がりを共有できます。見積もり・出張は無料です。
      </>
    ),
    recommend: [
      "毎回の業者探しと日程調整をやめたい方",
      "一年を通して庭の手入れを定額で任せたい方",
      "離れて暮らす家族と作業内容を共有したい方",
      "剪定・消毒・施肥をセットでまとめたい方",
    ],
    table: [
      { k: "草刈りの相場", v: "2〜3万円台", note: "面積・状態で変動" },
      { k: "剪定・伐採の相場", v: "3〜4万円台", note: "本数・大きさで変動" },
      { k: "年間管理プラン", v: "定額制プランあり" },
      { k: "見積もり・出張費", v: "無料", note: "写真付き作業報告書" },
      { k: "対応エリア", v: "全国対応（FC加盟店エリア）", note: "お住まいの地域の対応可否は要確認" },
    ],
    memo:
      "定額制の年間管理プラン・写真付き作業報告書・見積もり出張無料と、年間3万件・満足度4.1という公式掲載の実績値を当サイトの各社紹介ページ作成時に確認しています。フランチャイズ型のため、実際の対応は地域の加盟店によります。冬囲いなどの作業がプランに含まれるかは地域によって異なるため、秋田市内の対応可否とプラン内容は見積もり時に確認してください。",
  },
  {
    slug: "kusakari-110ban",
    num: "1-4",
    catch: "1平米600円〜・防草対策まで対応",
    name: "草刈り110番",
    officialUrl: "",
    image: "/images/kusakari-110ban-features.png",
    intro: (
      <>
        草刈り110番は、草刈り・除草に特化したサービスです。
        <Hl>1平米600円〜の低価格</Hl>
        で、庭の雑草から空き地・駐車場の除草まで幅広く対応します。草刈りは体力の負担が大きく、
        <Hl>庭仕事のなかでも早い段階で業者に任せたい作業</Hl>
        でもあります。刈った後の
        <Hl>防草シート施工や除草剤散布</Hl>
        まで依頼できるため、その年の草刈りだけでなく、翌年以降に雑草を生えにくくする対策も進められます。
        <Hl>定期メンテナンスプラン</Hl>
        で回数と時期を決めておけば、そのつどの手配も不要になります。
      </>
    ),
    recommend: [
      "草刈りだけは業者に任せたいと考えている方",
      "刈るだけでなく、雑草が生えにくい状態にしたい方",
      "庭や空き地の雑草を低価格で処理したい方",
      "定期契約で草刈りのたびの手配を不要にしたい方",
    ],
    table: [
      { k: "草刈り", v: "1平米あたり600円〜", note: "面積・草の状態で変動" },
      { k: "防草シート施工・除草剤散布", v: "別途対応", note: "草刈り後の防草対策" },
      { k: "定期メンテナンスプラン", v: "あり", note: "プランにより設定" },
      { k: "受付時間", v: "公式サイトでは確認できず", note: "依頼時にご確認ください" },
    ],
    memo:
      "1平米600円〜の料金と防草シート施工・除草剤散布・定期メンテナンスプランの提供を当サイトの各社紹介ページ作成時に確認しています。表示は最低単価であり、草丈が伸びすぎている場合や障害物が多い場所では単価が変わることがあります。機械作業が中心のため狭い場所には対応しにくい場合があり、繁忙期は予約が混み合います。面積と草の状態で総額が変わるため、見積もりでご確認ください。",
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
        され、予約前にメッセージで相談できるため、冬囲いのような地域性のある作業を扱っているか、少ない本数でも引き受けてもらえるかを
        <Hl>予約前に確かめてから決められる</Hl>
        のが利点です。<Hl>トラブル時の費用補償制度</Hl>
        も用意されています。
      </>
    ),
    recommend: [
      "冬囲いに対応できる出店者を探したい方",
      "少ない本数・小さな範囲でも対応できる業者を探したい方",
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
      "口コミ・評価で業者を比較できること、料金が出店者ごとに事前明示されること、トラブル時の費用補償制度があることを当サイトの各社紹介ページ作成時に確認しています。出店者ごとに対応できる作業内容や最低受注の条件は異なるため、少量の依頼や冬囲いの取り扱いは、予約前にメッセージで確認することをおすすめします。",
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
    slug: "smile-garden",
    name: "smileガーデン",
    type: "フランチャイズ型",
    price: "草刈り2〜3万円台・剪定3〜4万円台（相場）",
    point: "定額制の年間管理プラン・写真付き作業報告書",
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
    t: "① 今年の作業範囲を絞り込み、書き出してから相談する",
    b: "庭の手入れを業者に依頼する際は、「去年までと同じ状態に戻す」ことを前提にしがちです。しかし、手をかけられる量が変わってきた場合は、手入れの範囲そのものを見直すほうが現実的です。庭を見回し、必ず手を入れたい場所、できれば整えたい場所、当面はこのままでよい場所の三つに分けて書き出してください。この分類を業者に伝えれば、限られた予算をどこに使うかの相談をすぐに始められます。すべてを依頼する前提で見積もりを取ると、金額を見てから作業を削ることになり、相談をやり直す手間が生じます。",
  },
  {
    t: "② 資材費・処分費・出張費まで含めた総額を作業前に確認する",
    b: "冬囲いのように資材を使う作業では、作業費のほかに縄や支柱などの費用がかかります。資材を業者が用意するのか自分で用意するのか、去年の資材を再利用できるのかで金額が変わるため、内訳を確認してください。剪定もあわせて依頼する場合は、切った枝の処分費と出張費まで含めた総額を確認します。「1本いくら」の表示は木の大きさや樹種で変わる目安のため、見積書に記載された金額と、そこに含まれない費用の両方を確認することをおすすめします。",
  },
  {
    t: "③ 作業した内容を記録に残し、翌年の判断材料にする",
    b: "毎年少しずつ庭の管理を軽くしていく場合は、その年に何をどこまで行ったかを記録しておくことが役立ちます。見積書と作業後の写真を一か所にまとめておけば、翌年は「去年はここまで行ったので、今年はこの作業を減らせるか」という具体的な相談ができます。作業報告書を提出する業者であれば、そのまま記録として活用できます。離れて暮らす家族が手配を引き継ぐ場合にも、この記録の有無で話の進み方が大きく変わります。",
  },
  {
    t: "④ 急ぎでなければ複数社を比較し、断る選択肢も持っておく",
    b: "同じ庭でも、業者によって得意分野や料金体系は異なります。時間に余裕があれば2〜3社から見積もりを取り、総額・作業範囲・資材や処分費の扱いを比較してください。訪問見積もりを受けると断りにくく感じるものですが、その場で契約する義務はありません。金額や説明に納得できない場合は、「家族と相談してから連絡します」と伝えて一度持ち帰ることをおすすめします。強く契約を迫る業者は、それだけで見送る理由になります。",
  },
];

const faqs = [
  {
    q: "秋田で庭木の冬囲いだけを依頼することはできますか？資材は誰が用意しますか？",
    a: "冬囲いに対応する業者はありますが、すべてのサービスが扱っているわけではありません。全国型のマッチングサービスやプラットフォームでは、地域性のある作業の取り扱いが加盟店・出店者によって異なります。依頼時には「冬囲いに対応できるか」「縄や支柱などの資材はどちらが用意するか」「去年の資材を再利用できるか」の三点を最初にご確認ください。資材の扱いによって金額が変わるため、この点が曖昧なままでは総額を把握できません。くらしのマーケットのように予約前にメッセージで相談できる仕組みであれば、対応可否を確認してから予約できます。",
  },
  {
    q: "年齢とともに庭の手入れがつらくなってきました。どこから業者に任せればよいですか？",
    a: "優先して任せるべきなのは、脚立に登る作業と重いものを運ぶ作業です。高所の剪定や、刈った草・切った枝の運び出しはけがにつながりやすく、ご自身で続ける必要性が低い作業です。一方、地面に立ったままできる草取りや水やりは、無理のない範囲で続けても差し支えありません。まずは「登る作業」と「運ぶ作業」を業者に任せ、「立ったままできる作業」をご自身で行うという線引きから始めることをおすすめします。高所作業の危険性は当サイトの高木剪定の危険性の解説記事、自分で行うか業者に依頼するかの判断は剪定のDIYと業者依頼の比較記事でまとめています。",
  },
  {
    q: "庭木を減らすことに抵抗があります。どのくらい減らせば管理が楽になりますか？",
    a: "決まった本数の目安はありません。判断の基準になるのは本数よりも、「その木に毎年どのような作業が必要か」です。脚立が必要な木、冬囲いが必要な木、落ち葉の片付けが必要な木など、作業が重なる木は1本だけでも負担が大きくなります。反対に、手を入れなくても形が乱れにくい木であれば、本数が多くても手間は増えません。すべてを減らすのではなく、手のかかる木から順に検討することをおすすめします。木を減らす以外に、高さを抑えて手の届く範囲に収める方法もあります。管理の総量を段階的に縮める進め方は、当サイトの庭じまいの解説記事が参考になります。",
  },
  {
    q: "冬囲いを外す作業も依頼できますか？自分で外してもよいですか？",
    a: "外す作業を引き受ける業者は多く、契約時にまとめて依頼しておくと確実です。ご自身で外すことも可能ですが、時期が早すぎると遅い雪や急な冷え込みで枝を傷めることがあり、遅すぎると芽の生育を妨げます。判断に迷う場合は、取り付けと取り外しをセットで契約しておくことをおすすめします。また、取り外しの際は高い位置の縄をほどく必要があることも多く、脚立作業になりがちです。この点からも、撤去まで依頼しておくほうが安全です。取り外しの際に木の状態を確認してもらうよう依頼しておくと、傷みを早期に発見できます。",
  },
  {
    q: "冬の間に折れた枝は、いつ手を入れればよいですか？",
    a: "折れた枝が中途半端にぶら下がっている状態は落下の危険があり、切り口が裂けたままでは木にも負担が残ります。危険なものは気づいた時点で業者に相談し、そうでないものは雪が落ち着いてから枝の状態をまとめて確認してもらうことをおすすめします。枯れたように見えても、葉が出る時期まで判断できない場合があります。慌てて切らずに状態を写真に残し、業者に見せてください。見極めの目安は当サイトの枯れたように見える庭木の解説記事でまとめています。",
  },
  {
    q: "毎年同じ業者に依頼したいのですが、どのように進めればよいですか？",
    a: "確実なのは、作業が終わった時点で次回の相談をしておくことです。「来年も同じ時期に依頼したい」と伝え、連絡の時期と方法を決めておけば、翌年に一から業者を探し直す手間がなくなります。さらに年間管理の契約にまとめれば、日程調整そのものを業者側に任せられます。smileガーデンの定額制の年間管理プランのようなサービスは、この使い方に適しています。一年の作業をまとめて計画する方法は、当サイトの庭仕事の年間スケジュールの解説記事が参考になります。",
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

export default function AreaAkitaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】秋田の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較",
    description:
      "秋田で剪定・伐採・草刈りを依頼できる庭業者5社を、料金・特徴で比較した記事です。",
    image: `${SITE}/images/kv-top.jpg`,
    datePublished: "2026-08-21T00:00:00+09:00",
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
      { "@type": "ListItem", position: 2, name: "秋田の庭業者おすすめ5選", item: `${SITE}${PATH}` },
    ],
  };

  const toc: { href: string; label: string; sub?: { href: string; label: string }[] }[] = [
    {
      href: "#akita5",
      label: "1｜秋田で依頼できるおすすめの庭業者5選",
      sub: [
        { href: "#hikaku", label: "秋田の庭業者の比較一覧" },
        ...companies.map((c) => ({ href: `#${c.slug}`, label: `${c.num}｜【${c.catch}】${c.name}` })),
      ],
    },
    { href: "#mamoru-ki", label: "2｜冬囲いの対象とする木を絞る考え方" },
    { href: "#sagyoryo", label: "3｜手をかけられる量に応じた庭の作業量の見直し" },
    { href: "#herasu", label: "4｜庭木を減らす・低くするという設計変更" },
    { href: "#kazoku", label: "5｜離れて暮らす家族と分担する場合の記録の残し方" },
    { href: "#erabikata", label: "6｜庭業者の選び方（4つの手順）" },
    { href: "#faq", label: "7｜秋田の庭業者でよくある質問" },
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
              <li className="text-[#33402f]">秋田の庭業者おすすめ5選</li>
            </ol>
          </nav>

          {/* h1・更新日・タグchips */}
          <header className="grid gap-4">
            <h1 className="text-2xl md:text-[32px] font-bold leading-normal tracking-wide text-[#33402f]">
              【2026年最新】秋田の庭業者おすすめ5選｜剪定・伐採・草刈りの料金を比較
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
              {["秋田", "剪定", "伐採", "草刈り", "業者比較"].map((t) => (
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
                alt="秋田の剪定・伐採・草刈り業者の比較"
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
              「毎年の冬囲いを続けてきたが、脚立に登るのが怖くなってきた」「親が住む実家の庭を、どこまで手入れすればよいのか分からない」といった、雪への備えと庭を管理する側の事情の変化が同時に関わる相談は、秋田では少なくありません。雪の重みは庭木の枝を折り、樹形を崩します。一方で、その備えを毎年続けるには相応の体力と時間が必要です。この二つを両立させようとして、どこから手をつけるかを決められないまま季節が過ぎてしまうことが、この地域の庭仕事で起こりやすい課題です。
            </p>
            <p>
              本記事では、秋田市内から依頼できる主要な庭業者を、当サイト編集部が各社の紹介ページ作成時に調査した料金・サービス内容をもとに比較しています。あわせて、「守る木を絞って冬囲いを続けやすくする考え方」「手をかけられる量が変わったときの見直し方」「庭木を減らす・低くするという設計変更」「離れて暮らす家族と分担するための記録の残し方」など、管理の負担を減らしていくための依頼の考え方もまとめています。業者選びの参考としてご活用ください。
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
          <H2 id="akita5" num="1">秋田で依頼できるおすすめの庭業者5選</H2>
          <p className="leading-loose mb-2 text-[#4a5443]">
            秋田市内から依頼できる主要な庭業者5社を紹介します。掲載している料金・サービス内容は、当サイト編集部が各社の紹介ページ作成時に公式サイト等を調査した掲載値です（2026年8月21日時点・公式サイト確認）。実際の総額は樹種・本数・庭の状況で変わるため、必ず作業前に見積もりで確認してください。冬囲いなど地域性のある作業の対応可否も、依頼時にあわせてご確認ください。なお、お庭マスター（現：お庭レスキュープロ）は全国47都道府県を対応エリアとしています（公式表記）。本ページではカード紹介に含めず、比較表のみに掲載しています。
          </p>

          <h3
            id="hikaku"
            className="scroll-mt-20 relative pb-3 mt-8 mb-5 border-b-4 border-[#EFF7EC] text-lg md:text-[22px] font-bold text-[#33402f]"
          >
            秋田の庭業者の比較一覧
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
            ※料金は当サイトの各社紹介ページ作成時に確認した掲載値（最低価格・相場の目安）です。2026年8月21日時点・公式サイト確認の掲載内容であり、樹種・本数・面積・庭の状況により総額は変動します。冬囲いなど地域性のある作業の料金・対応可否は各社の掲載値に含まれないため、見積もり時にご確認ください。お庭マスターは全国47都道府県を対応エリアとする加盟店方式のサービス（公式表記）のため、秋田での対応可否は公式サイト・見積もり時にご確認ください。最新の料金は各社公式サイト・見積もりでご確認ください。
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

          {/* 2｜守る木を絞る */}
          <H2 id="mamoru-ki" num="2">冬囲いの対象とする木を絞る考え方</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            雪の重みは枝を押し下げ、支えきれなくなった枝を付け根から裂きます。そのため冬囲いが必要になりますが、庭にあるすべての木に同じ手間をかけようとすると費用も作業日数も膨らみ、何年も続けることが難しくなります。長く続けるために有効なのは、
            <Hl>庭の木を「必ず守る木」と「傷んでも仕立て直せる木」に分けること</Hl>
            です。玄関先の目に入る木、家族が大切にしてきた木、代わりの利かない木には手をかけ、丈夫で回復の早い木や、多少形が崩れても気にならない木は簡単な処置にとどめます。この配分を見直すだけで、毎年の負担は大きく変わります。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            あわせて確認が必要なのが、<Hl>屋根からの落雪が当たる位置に木がないか</Hl>です。落雪は上から一気に荷重がかかるため、どのような囲い方をしても負担が大きくなります。毎年同じ木の枝が折れている場合は、囲い方を工夫するより植え場所を見直すほうが根本的な解決になることがあります（
            <Link href="/niwaki-ishoku/" className="text-[#2D7F3E] underline">庭木の移植の解説記事</Link>
            をご参照ください）。枝を支える道具の考え方は
            <Link href="/niwaki-shichu/" className="text-[#2D7F3E] underline">庭木の支柱の解説記事</Link>
            、背の低い木の扱いは
            <Link href="/teiboku-kanri/" className="text-[#2D7F3E] underline">低木の管理の解説記事</Link>
            でまとめています。1本単位で依頼できる剪定110番のようなサービスであれば、守る木だけを選んで相談できます。
          </p>

          {/* 3｜作業量の見直し */}
          <H2 id="sagyoryo" num="3">手をかけられる量に応じた庭の作業量の見直し</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭仕事の負担が大きくなってきたとき、多くの方はまず業者への依頼を検討します。それも適切な判断ですが、あわせて見直すべきなのが
            <Hl>庭そのものが求めてくる作業の量</Hl>
            です。手入れの必要な木が10本ある庭では、誰が作業しても10本分の作業が発生します。人手を借りるだけでは、費用という形で負担が残り続けます。作業量を減らす対策も並行して進めると、依頼にかかる費用そのものを年々抑えられます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            具体的には、<Hl>草の生える面積を減らす</Hl>ことと、<Hl>手のかかる木を手のかからない木に置き換える</Hl>ことの二つが柱になります。通路や物置まわりなど、植栽である必要のない場所を砂利や防草シートで覆えば、その区画は毎年の草刈りの対象から外れます。初期費用はかかりますが、数年単位で見れば作業と費用の両方を減らすための投資です。方法ごとの費用と向き不向きは
            <Link href="/zasso-taisaku/" className="text-[#2D7F3E] underline">雑草対策の比較記事</Link>
            と
            <Link href="/bousou-sheet/" className="text-[#2D7F3E] underline">防草シートの解説記事</Link>
            、砂利敷きの進め方は
            <Link href="/jarishiki/" className="text-[#2D7F3E] underline">砂利敷きの解説記事</Link>
            でまとめています。手のかかりにくい木への植え替えは
            <Link href="/teire-raku-niwaki/" className="text-[#2D7F3E] underline">手入れが楽な庭木の解説記事</Link>
            が参考になります。
          </p>

          {/* 4｜減らす・低くする */}
          <H2 id="herasu" num="4">庭木を減らす・低くするという設計変更</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            長年育ててきた木を切ることには抵抗があるものです。ただ、大きくなりすぎた木は剪定に脚立や高所作業が必要になり、冬囲いも難しくなり、雪や風で折れたときの危険も増していきます。
            <Hl>「手が届く高さに収める」「本数を減らす」ことは、庭を維持し続けるための設計変更</Hl>
            であり、手入れをあきらめることとは異なります。残す木に手をかけられるようになるという意味では、むしろ庭を守るための判断です。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            進め方としては、一度にすべてを決めず、<Hl>負担の大きい木から順に、年をまたいで手を入れる</Hl>ことをおすすめします。たとえば、今年は高くなりすぎた1本を低く仕立て直し、来年は毎年冬囲いに手間のかかっている木を検討するという進め方です。高所作業をご自身で行う危険性は
            <Link href="/takagi-sentei-kiken/" className="text-[#2D7F3E] underline">高木剪定の危険性の解説記事</Link>
            、自分で行うか業者に依頼するかの線引きは
            <Link href="/sentei-diy-gyosha/" className="text-[#2D7F3E] underline">剪定のDIYと業者依頼の比較記事</Link>
            でまとめています。伐採と抜根の違いや跡地の始末は
            <Link href="/bassai-bakkon-chigai/" className="text-[#2D7F3E] underline">伐採と抜根の違いの解説記事</Link>
            と
            <Link href="/kirikabu-hochi/" className="text-[#2D7F3E] underline">切り株の放置リスクの解説記事</Link>
            を参考にしてください。伐採110番では伐採から抜根・処分まで一括で相談でき、見積もりは無料です。
          </p>

          {/* 5｜家族と分担 */}
          <H2 id="kazoku" num="5">離れて暮らす家族と分担する場合の記録の残し方</H2>
          <p className="leading-loose mb-4 text-[#4a5443]">
            庭の管理を、住んでいる本人と離れて暮らす家族で分担するケースは珍しくありません。この場合に問題になりやすいのが、
            <Hl>「何をどこまで行ったか」を誰も把握できなくなること</Hl>
            です。電話での口頭のやり取りだけで進めると、支払った金額と作業内容が結び付かず、翌年の相談も一から始めることになります。見積書と作業後の写真を一か所にまとめておくだけで、この問題の多くは防げます。
          </p>
          <p className="leading-loose mb-4 text-[#4a5443]">
            <Hl>作業報告書を提出する業者を選ぶ</Hl>ことも有効です。smileガーデンは写真付きの作業報告書を提供しており、立ち会えなかった家族も仕上がりを確認できます。家族が手配を担当する場合は、支払い方法と連絡窓口をどちらが担うかも最初に決めておいてください。訪問販売や飛び込み営業への対応方針を家族で共有しておくことも、あわせて検討しておくべき点です。人が住まなくなった家の庭の扱いは
            <Link href="/akiya-niwa-kanri/" className="text-[#2D7F3E] underline">空き家の庭の管理の解説記事</Link>
            、隣家との境界まわりの注意点は
            <Link href="/eda-ekkyo/" className="text-[#2D7F3E] underline">枝の越境の解説記事</Link>
            でまとめています。
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
          <H2 id="faq" num="7">秋田の庭業者でよくある質問</H2>
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
            秋田で剪定・伐採・草刈りを依頼できる主要な庭業者を比較しました。守る木を選んで1本単位で依頼する場合は剪定110番、負担になった木を整理して作業量そのものを減らす場合は処分まで一括で対応する伐採110番、毎回の業者探しと日程調整をやめて記録も残したい場合は定額制で報告書のあるsmileガーデン、体力の要る草刈りを任せて雑草が生えにくい状態にしたい場合は面積単価の草刈り110番、冬囲いへの対応や少量の依頼を予約前に確認して選びたい場合はくらしのマーケットが適しており、目的によって向いているサービスは異なります。大手直営のサービスを希望する方は、ダスキンも選択肢となります。
          </p>
          <p className="leading-loose mb-8 text-[#4a5443]">
            雪のある地域で庭を長く維持するうえで大切なのは、「去年と同じ作業を毎年続ける」という前提を一度見直すことです。守る木を絞って冬囲いを続けやすくすること、人手を借りると同時に庭の作業量そのものを減らしていくこと、大きくなりすぎた木は手の届く高さに戻すか本数を減らすかを検討すること、見積書と写真を残して翌年の判断材料にすること、資材費・処分費・出張費を含めた総額を作業前に確認することが、業者選びにおける共通の注意点です。本記事の比較を参考に、庭と暮らしの状況に合った業者をお選びください。
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
              {["秋田", "剪定", "伐採", "草刈り", "業者比較", "エリア別"].map((t) => (
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
                { href: "/area/koshigaya/", label: "越谷の庭業者おすすめ5選" },
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
                { href: "/niwajimai/", label: "庭じまいの進め方" },
                { href: "/teire-raku-niwaki/", label: "手入れが楽な庭木" },
                { href: "/takagi-sentei-kiken/", label: "高木剪定の危険性" },
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
