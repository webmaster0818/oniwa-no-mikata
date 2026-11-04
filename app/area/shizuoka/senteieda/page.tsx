import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/shizuoka/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_SENTEI = "https://www.city.shizuoka.lg.jp/gomi/hinmoku/02186.html";
const SRC_NIWAKI = "https://www.city.shizuoka.lg.jp/gomi/hinmoku/00959.html";
const SRC_MOCHIKOMI = "https://www.city.shizuoka.lg.jp/gomi/s000671.html";
const T_SENTEI = "剪定枝／静岡市公式ホームページ";
const T_NIWAKI = "木（庭木）の枝・幹・根／静岡市公式ホームページ";
const T_MOCHIKOMI = "清掃工場等への家庭ごみの持ち込み／静岡市公式ホームページ";

export const metadata: Metadata = {
  title: {
    absolute: "静岡市の剪定枝の出し方｜太さ20cm・長さ1m以内にして袋か束で可燃ごみ｜お庭のミカタ",
  },
  description:
    "静岡市では、剪定枝は葵区・駿河区・清水区とも可燃ごみで、太さ20cm以内・長さ1m以内にして袋に入れるか束ねて出します。一度に11袋以上になる多量の可燃ごみは、西ケ谷・沼上清掃工場へ持ち込めます。市のごみ分け方早見表をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "静岡市の剪定枝の出し方｜太さ20cm・長さ1m以内で可燃ごみ",
    description:
      "静岡市の剪定枝は3区とも可燃ごみ。太さ20cm以内・長さ1m以内にして袋か束で。多量（概ね11袋以上）は清掃工場へ持ち込み。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/shizuoka/senteieda",
  published: "2026-11-04",
  updatedLabel: "2026年11月4日",
  parent: { href: "/area/shizuoka/", label: "静岡の庭業者" },
  badge: "静岡市の地域情報",
  h1: "静岡市の剪定枝の出し方｜太さ20cm・長さ1m以内にして袋か束で可燃ごみ",
  breadcrumbLabel: "静岡市の剪定枝の出し方",
  tagChips: ["静岡市", "剪定枝", "可燃ごみ", "清掃工場", "持ち込み"],
  ldHeadline: "静岡市の剪定枝の出し方｜太さ20cm・長さ1m以内にして袋か束で可燃ごみ",
  ldDescription:
    "静岡市で剪定枝・庭木の枝や幹を可燃ごみとして出すときの太さ・長さ、多量に出たときの清掃工場への持ち込みの条件と受付時間を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        静岡市のごみの分け方早見表では、剪定枝は<Hl>葵区・駿河区・清水区のいずれも可燃ごみ</Hl>で、
        <Hl>太さ20cm以内、長さ1m以内にして、袋に入れるか束ねて出す</Hl>と案内されています（出典：
        <a href={SRC_SENTEI} className={A} target="_blank" rel="noopener noreferrer">{T_SENTEI}</a>
        、2026年11月4日確認）。
      </p>
      <p>
        本記事では、早見表の基準と、剪定で量が多く出たときの清掃工場への持ち込みを市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "太さ20cm以内・長さ1m以内にして、袋か束で可燃ごみへ。一度に概ね11袋以上になるときは清掃工場へ持ち込めます。",
  conclusionBody: (
    <p>
      庭木の枝・幹・根も同じく、太さ20cm以内、長さ1m以内にして袋に入れるか束ねて出す可燃ごみです（出典：
      <a href={SRC_NIWAKI} className={A} target="_blank" rel="noopener noreferrer">{T_NIWAKI}</a>
      、2026年11月4日確認）。可燃ごみで<Hl>一度に出す点数が11袋以上の場合</Hl>は、清掃工場に持ち込みができるごみの種類に当たります。
    </p>
  ),
  basicsHeading: "静岡市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定枝は3区とも可燃ごみ",
      desc: "葵区・駿河区・清水区のいずれも可燃ごみです。",
    },
    {
      title: "太さ20cm以内・長さ1m以内にする",
      desc: "袋に入れるか、束ねて出します。庭木の枝・幹・根も同じ基準です。",
    },
    {
      title: "可燃ごみは週2回集積所へ",
      desc: "清掃工場の案内では、可燃ごみは週2回集積所に出すよう案内されています。",
    },
    {
      title: "一時的に多量に出たごみは清掃工場へ持ち込める",
      desc: "多量可燃ごみ（概ねごみ袋11袋以上）は、西ケ谷清掃工場・沼上清掃工場に持ち込めます。",
    },
    {
      title: "市外で出たごみ・事業ごみは扱いが異なる",
      desc: "静岡市外で発生したごみは持ち込めません。事業活動に伴うごみは、家庭ごみとは取扱いが異なります。",
    },
  ],
  stepsHeading: "静岡市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "太さと長さを確かめる",
      desc: "太さ20cm以内、長さ1m以内に切りそろえます。",
    },
    {
      title: "袋に入れるか束ねる",
      desc: "早見表の案内どおり、袋に入れるか束ねて出します。",
    },
    {
      title: "量を数える",
      desc: "一度に概ね11袋以上になる場合は、集積所ではなく清掃工場への持ち込みを検討します。",
    },
    {
      title: "持ち込む場合は受付時間を確認する",
      desc: "西ケ谷・沼上清掃工場は月曜日〜金曜日（祝日含む）8時30分〜12時・13時〜16時、土曜日（祝日含む）8時30分〜12時で、日曜日は定休日です。",
    },
  ],
  ngHeading: "静岡市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "太さ20cm・長さ1mを超えたまま出しません",
      desc: "早見表の基準に合わせて切ってから出します。",
    },
    {
      title: "少量のごみを清掃工場に持ち込みません",
      desc: "市は、原則として通常の収集を利用するよう案内しています。",
    },
    {
      title: "本人以外に持ち込みを任せません",
      desc: "持ち込み時は身分証等による本人確認があり、排出する方が自ら持ち込むよう案内されています。荷下ろしも本人が行います。",
    },
  ],
  proHeading: "清掃工場へ持ち込む前と、業者に頼む前の確認",
  proParas: [
    <p key="1">
      清掃工場への家庭ごみの持ち込みでは、持ち込んだ方自身がごみを分別する「セルフ分別」が実施されています。
      西ケ谷清掃工場（葵区西ケ谷553番地）と沼上清掃工場（葵区南沼上1224番地）が多量可燃ごみを受け入れており、
      施設の定期点検等で受付ができない場合もあります（出典：
      <a href={SRC_MOCHIKOMI} className={A} target="_blank" rel="noopener noreferrer">{T_MOCHIKOMI}</a>
      、2026年11月4日確認）。持ち込む前に施設へ確認してください。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月4日確認）。静岡で依頼できる庭業者の比較は
      <Link href="/area/shizuoka/" className={A}>静岡の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "自分で運べない量なら、処分込みの見積もりで比べる",
  ctaText:
    "清掃工場への持ち込みは本人が運び、荷下ろしも行います。運搬が難しい量の剪定は、業者の見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "静岡市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "静岡市で剪定した枝は何ごみですか？",
      a: "可燃ごみです。葵区・駿河区・清水区とも、太さ20cm以内・長さ1m以内にして袋に入れるか束ねて出します。",
    },
    {
      q: "庭木の幹や根も出せますか？",
      a: "早見表の「木（庭木）の枝・幹・根」も可燃ごみで、太さ20cm以内・長さ1m以内にして袋に入れるか束ねて出すと案内されています。",
    },
    {
      q: "剪定で大量に出た枝は持ち込めますか？",
      a: "可燃ごみで一度に出す点数が11袋以上の場合などは、西ケ谷清掃工場・沼上清掃工場に持ち込めます。日曜日は定休日です。",
    },
    {
      q: "清水区の清水ごみ受付センターに枝を持ち込めますか？",
      a: "市の案内では、清水ごみ受付センターで持ち込みできるのは資源ごみと不燃・粗大ごみで、多量に出たごみは西ケ谷・沼上清掃工場へ問い合わせのうえ持ち込むよう案内されています。",
    },
  ],
  related: [
    { href: "/area/shizuoka/", label: "静岡の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/bassai-110ban-bassai-bakkon/", label: "伐採110番の伐採・抜根", desc: "幹や根が出る作業を頼むとき" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function ShizuokaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
