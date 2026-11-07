import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/toyota/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.toyota.aichi.jp/_res/projects/default_project/_page_/001/024/063/r0806/01.pdf";
const SRC_T = "豊田市「資源・ごみの分け方、出し方「ごみガイドブック」日本語」（PDF）";
const SRC2 = "https://www.city.toyota.aichi.jp/faq/1073668/gomirecycle/1006808/1007151.html";
const SRC2_T = "燃やすごみ、金属ごみ、埋めるごみを直接処理場へ持ち込みたいのですが、どこへ持ち込めばいいですか。｜豊田市";
const SRC3 = "https://www.city.toyota.aichi.jp/shisei/shisetsu/gomishori/midorirecycle/index.html";
const SRC3_T = "緑のリサイクルセンター｜豊田市";

export const metadata: Metadata = {
  title: {
    absolute:
      "豊田市の剪定枝の出し方｜せん定枝・刈草は指定ごみ袋で燃やすごみ、多量なら緑のリサイクルセンターへ｜お庭のミカタ",
  },
  description:
    "豊田市では、せん定枝・刈草は指定ごみ袋に入れて燃やすごみとして分別ごみステーションに出します。" +
    "袋に入らないもの、多量に出たものは緑のリサイクルセンター（枝下町）へ持ち込みます。木の枝・幹・根は袋に入らなければ粗大ごみです。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "豊田市の剪定枝の出し方｜指定ごみ袋で燃やすごみ、多量なら緑のリサイクルセンターへ",
    description:
      "豊田市のせん定枝・刈草は指定ごみ袋に入れて燃やすごみへ。袋に入らないもの・多量のものは緑のリサイクルセンターへ持ち込みます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/toyota/senteieda",
  published: "2026-11-07",
  updatedLabel: "2026年11月7日",
  parent: { href: "/area/toyota/", label: "豊田の庭業者" },
  badge: "豊田市の地域情報",
  h1: "豊田市の剪定枝の出し方｜せん定枝・刈草は指定ごみ袋で燃やすごみ、多量なら緑のリサイクルセンターへ",
  breadcrumbLabel: "豊田市の剪定枝の出し方",
  tagChips: ["豊田市", "剪定枝", "燃やすごみ", "緑のリサイクルセンター", "直接搬入"],
  ldHeadline: "豊田市の剪定枝の出し方｜せん定枝・刈草は指定ごみ袋で燃やすごみ、多量なら緑のリサイクルセンターへ",
  ldDescription:
    "豊田市で庭木のせん定枝・刈草を出すときのごみ区分、袋に入らない枝や多量の枝の持ち込み先、処理施設ごとに搬入できない大きさを、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        豊田市のごみガイドブックでは、
        <Hl>せん定枝・刈草は燃やすごみで、指定ごみ袋に入れて</Hl>
        分別ごみステーションに出すと案内されています。袋に入らないもの、多量に発生した場合は緑のリサイクルセンターへ持ち込みます（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月7日確認）。
      </p>
      <p>
        本記事では、袋に入る量の出し方と、袋に入らない枝や多量の枝の持ち込み先を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle:
    "せん定枝・刈草は指定ごみ袋に入れて燃やすごみへ。袋に入らないもの・多量のものは緑のリサイクルセンターへ持ち込みます。",
  conclusionBody: (
    <p>
      ごみガイドブックの分別一覧では、木の枝・幹・根は粗大ごみで、
      <Hl>袋に入れば燃やすごみ、大量に出た場合は直接搬入</Hl>
      の案内に従うとされています（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月7日確認）。直接処理場へ持ち込む場合、刈草・剪定枝は緑のリサイクルセンター（豊田市枝下町）が受け入れ先です（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月7日確認）。
    </p>
  ),
  basicsHeading: "豊田市の剪定枝で押さえる4つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "せん定枝・刈草は燃やすごみ",
      desc: "指定ごみ袋に入れて、分別ごみステーションに出します。",
    },
    {
      title: "袋に入らないもの・多量のものは持ち込み",
      desc: "緑のリサイクルセンターへの持ち込みが案内されています。",
    },
    {
      title: "木の枝・幹・根は袋に入らなければ粗大ごみ",
      desc: "袋に入れば燃やすごみとして出せます。",
    },
    {
      title: "施設ごとに搬入できない大きさがある",
      desc: "渡刈クリーンセンターは長さ2mまたは直径30cm以上、藤岡プラントは長さ2mまたは直径10cm以上のものを受け入れていません（切れば搬入できます）。",
    },
  ],
  stepsHeading: "豊田市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "量を見て出し方を決める",
      desc: "指定ごみ袋に入る量ならステーションへ、多量なら持ち込みにします。",
    },
    {
      title: "枝を袋に入る大きさに切る",
      desc: "袋に入れば燃やすごみとして出せます。",
    },
    {
      title: "指定ごみ袋に入れる",
      desc: "せん定枝・刈草は指定ごみ袋に入れて出します。",
    },
    {
      title: "多量の枝は緑のリサイクルセンターへ",
      desc: "受け入れの日時は市の自己搬入の案内で確認してから持ち込みます。",
    },
  ],
  ngHeading: "豊田市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "袋に入らない枝をそのままステーションに出しません",
      desc: "袋に入らないもの・多量のものは緑のリサイクルセンターへの持ち込みが案内されています。",
    },
    {
      title: "長い枝を切らずに処理施設へ運びません",
      desc: "渡刈クリーンセンター・藤岡プラントには搬入できない長さ・太さがあります。",
    },
    {
      title: "指定ごみ袋以外の袋で出しません",
      desc: "燃やすごみは指定ごみ袋で出します。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      緑のリサイクルセンターは、市内で発生した刈草、せん定枝及び食品残渣等を使用して、土壌改良堆肥「ecoグリーン」を製造・販売しています（出典：
      <a href={SRC3} className={A} target="_blank" rel="noopener noreferrer">{SRC3_T}</a>
      、2026年11月7日確認）。運搬の手段がない場合は、処分まで含めて業者に相談する方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月7日確認）。豊田で依頼できる庭業者の比較は
      <Link href="/area/toyota/" className={A}>豊田の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "持ち込みの手間をかけられないなら、処分込みの見積もりで比べる",
  ctaText:
    "多量の枝は自分で施設に運ぶ必要があります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "豊田市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "豊田市で剪定した枝は何ごみですか？",
      a: "せん定枝・刈草は燃やすごみです。指定ごみ袋に入れて分別ごみステーションに出します。",
    },
    {
      q: "袋に入らない枝はどうしますか？",
      a: "袋に入らないもの、多量に発生した場合は、緑のリサイクルセンター（豊田市枝下町）へ持ち込みます。",
    },
    {
      q: "渡刈クリーンセンターに枝を持ち込めますか？",
      a: "刈草・剪定枝の持ち込み先は緑のリサイクルセンターと案内されています。渡刈クリーンセンターは長さ2mまたは直径30cm以上のものは搬入できません（切れば搬入できます）。",
    },
    {
      q: "木の根や幹はどう出しますか？",
      a: "木の枝・幹・根は粗大ごみで、袋に入れば燃やすごみです。大量に出た場合は直接搬入の案内に従います。",
    },
  ],
  related: [
    { href: "/area/toyota/", label: "豊田の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/nagoya/senteieda/", label: "名古屋市の剪定枝の出し方", desc: "近隣の市の分別ルール" },
    { href: "/area/ichinomiya/senteieda/", label: "一宮市の剪定枝の出し方", desc: "県内の市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function ToyotaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
