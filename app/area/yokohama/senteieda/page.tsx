import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/yokohama/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_JITEN = "https://cgi.city.yokohama.lg.jp/shigen/bunbetsu/list_a.html";
const SRC_FAQ = "https://www.sodai-faq.city.yokohama.lg.jp/faq/show/75?category_id=13&site_domain=default";

export const metadata: Metadata = {
  title: {
    absolute: "横浜市の剪定枝の出し方｜50cm未満は燃やすごみ、50cm以上は粗大ごみ｜お庭のミカタ",
  },
  description:
    "横浜市では剪定後の枝は燃やすごみで、長さ50cm未満にして出します。50cm以上は粗大ごみです。1回の目安は両手で抱えられる束が2〜3束程度。造園業者に剪定を委託した枝は事業系ごみになります。市の分別辞典とFAQ（2026年11月2日確認）をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "横浜市の剪定枝の出し方｜燃やすごみは50cm未満、1回2〜3束が目安",
    description:
      "横浜市の剪定枝は燃やすごみ（50cm未満）。50cm以上は粗大ごみ、業者に頼んだ剪定の枝は事業系ごみです。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/yokohama/senteieda",
  published: "2026-11-02",
  updatedLabel: "2026年11月2日",
  parent: { href: "/area/yokohama/", label: "横浜の庭業者" },
  badge: "横浜市の地域情報",
  h1: "横浜市の剪定枝の出し方｜50cm未満は燃やすごみ、50cm以上は粗大ごみ",
  breadcrumbLabel: "横浜市の剪定枝の出し方",
  tagChips: ["横浜市", "剪定枝", "燃やすごみ", "粗大ごみ", "事業系ごみ"],
  ldHeadline: "横浜市の剪定枝の出し方｜燃やすごみは50cm未満、1回2〜3束が目安",
  ldDescription:
    "横浜市で剪定後の枝・落ち葉・枯れ草を出すときの区分、長さの基準、1回に出す量の目安、造園業者に委託した場合の扱いを、市の分別辞典と粗大ごみFAQをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        横浜市のごみ分別辞典では、<Hl>「枝(せん定後の枝)」は燃やすごみ</Hl>で、
        <Hl>50cm未満にする。50cm以上のものは粗大ごみへ</Hl>と案内されています（出典：
        <a href={SRC_JITEN} className={A} target="_blank" rel="noopener noreferrer">横浜市ごみ分別辞典「MIctionary（ミクショナリー）」 | ごみと資源物の出し方一覧表</a>
        、2026年11月2日確認）。
      </p>
      <p>
        本記事では、自分で剪定した枝の出し方と量の目安、粗大ごみになる大きさ、造園業者に剪定を頼んだときの扱いを、市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "枝は50cm未満に切って燃やすごみへ。1回の目安は、両手で抱えられる束が2〜3束程度です。",
  conclusionBody: (
    <p>
      市の粗大ごみFAQでは、自分で剪定した枝のうち粗大ごみに該当しない大きさのものは家庭ごみとして出し、
      <Hl>多量の場合は小分けにして該当する収集日に出す</Hl>よう案内しています。一方、
      <Hl>造園業者に委託して剪定した場合は事業活動に伴うごみ</Hl>となり、粗大ごみとして出すことはできません（出典：
      <a href={SRC_FAQ} className={A} target="_blank" rel="noopener noreferrer">自宅の庭の木を剪定した。大量の枝等を粗大ごみで出したい。 | 粗大ごみよくあるご質問（FAQ）　横浜市</a>
      、2026年11月2日確認）。
    </p>
  ),
  basicsHeading: "横浜市の剪定枝で押さえる4つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定後の枝は燃やすごみ。長さは50cm未満",
      desc: "分別辞典では「枝(せん定後の枝)」「木の枝」はいずれも燃やすごみで、50cm未満にするよう案内されています。",
    },
    {
      title: "50cm以上の枝は粗大ごみ",
      desc: "50cm以上のものは粗大ごみです。粗大ごみとして出す場合は、粗大ごみ受付センターに問い合わせます。",
    },
    {
      title: "1回の目安は両手で抱えられる束が2〜3束程度",
      desc: "粗大ごみFAQでは、枝の長さは50cm未満で、1回の排出の目安は両手で抱えられるくらいの束が2〜3束程度とされています。多い場合は小分けにして収集日ごとに出します。",
    },
    {
      title: "落ち葉・枯れ草も燃やすごみ。大量なら収集事務所に相談",
      desc: "分別辞典では落ち葉・枯れ草は燃やすごみで、大量の場合は収集事務所に相談するよう案内されています。",
    },
  ],
  stepsHeading: "横浜市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝を50cm未満に切りそろえる",
      desc: "剪定ばさみやのこぎりで長さを50cm未満にします。50cm以上のまま出す場合は粗大ごみの扱いになります。",
    },
    {
      title: "両手で抱えられる大きさの束にする",
      desc: "1回の目安は、両手で抱えられるくらいの束が2〜3束程度です。",
    },
    {
      title: "燃やすごみの収集日に出す",
      desc: "収集日は地域ごとに異なります。多量の場合は一度に出さず、小分けにして収集日ごとに出します。",
    },
    {
      title: "落ち葉や枯れ草が大量なら収集事務所に相談する",
      desc: "落ち葉・枯れ草が大量に出る場合は、お住まいの地域の収集事務所に相談するよう案内されています。",
    },
  ],
  ngHeading: "横浜市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "50cm以上の枝を燃やすごみに混ぜません",
      desc: "50cm以上のものは粗大ごみの扱いです。切ってから燃やすごみに出すか、粗大ごみ受付センターに問い合わせます。",
    },
    {
      title: "大量の枝を一度に集積場所へ出しません",
      desc: "1回の目安は2〜3束程度です。多量の場合は小分けにして収集日ごとに出します。",
    },
    {
      title: "業者が剪定した枝を粗大ごみで出しません",
      desc: "造園業者に委託して剪定した枝は事業活動に伴うごみとなり、粗大ごみとして出せません。事業系ごみとしての処理になります。",
    },
  ],
  proHeading: "業者に頼む場合は、枝の処分方法を確認する",
  proParas: [
    <p key="1">
      横浜市は、造園業者に委託して剪定した場合の枝を<Hl>事業系ごみ</Hl>として扱い、粗大ごみとしては出せないと案内しています。
      業者に剪定を頼む場合は、<Hl>枝の処分が見積もりに含まれるか</Hl>を確認してください。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月2日確認）。横浜で依頼できる庭業者の比較は
      <Link href="/area/yokohama/" className={A}>横浜の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "量が多い剪定は、処分込みの見積もりで比べる",
  ctaText:
    "生垣の刈り込みや高木の剪定で枝が多く出る場合は、処分まで含めて依頼すると手間が少なく済みます。見積もりでは処分費の有無をそろえて比べてください。",
  faqHeading: "横浜市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "横浜市で剪定した枝は何ごみですか？",
      a: "燃やすごみです。50cm未満にして出します。50cm以上のものは粗大ごみです。",
    },
    {
      q: "一度にどのくらい出せますか？",
      a: "市の粗大ごみFAQでは、1回の排出の目安は両手で抱えられるくらいの束が2〜3束程度とされています。多量の場合は小分けにして、該当する収集日に出します。",
    },
    {
      q: "落ち葉が大量に出たときはどうしますか？",
      a: "落ち葉・枯れ草は燃やすごみです。大量の場合は収集事務所に相談するよう案内されています。",
    },
    {
      q: "業者に剪定してもらった枝は粗大ごみで出せますか？",
      a: "出せません。造園業者に委託して剪定した場合は事業活動に伴うごみとなり、事業系ごみとして出すよう案内されています。",
    },
  ],
  related: [
    { href: "/area/yokohama/", label: "横浜の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/ochiba-taisaku/", label: "庭の落ち葉対策", desc: "落ち葉の量を減らす工夫と片付け方" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function YokohamaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
