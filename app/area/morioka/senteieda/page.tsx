import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/morioka/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_MORIOKA = "https://www.city.morioka.iwate.jp/kurashi/gomi_recycle/gomidashikata/1001153.html";
const SRC_TONAN = "https://www.city.morioka.iwate.jp/kurashi/gomi_recycle/gomidashikata/1001158.html";
const SRC_TAMAYAMA = "https://www.city.morioka.iwate.jp/kurashi/gomi_recycle/gomidashikata/1001163.html";
const SRC_CC = "https://www.city.morioka.iwate.jp/faq/1036934/gomi/clean/1013644.html";

export const metadata: Metadata = {
  title: {
    absolute: "盛岡市の剪定枝の出し方｜木くずは長さ50cm・太さ5cm以内で可燃ごみ（地域で基準が違う）｜お庭のミカタ",
  },
  description:
    "盛岡市の盛岡地域・都南地域では、木くずは長さ50センチ以内・1本の太さ5センチ以内で燃やせるごみです。玉山地域は庭木の枝（直径10センチ以内）を乾燥させ長さ50センチ以内にして束ねます。地域ごとの基準とクリーンセンターへの持ち込みを、市の公式ページ（2026年11月2日確認）をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "盛岡市の剪定枝の出し方｜盛岡・都南・玉山の3地域で基準が違う",
    description:
      "盛岡地域・都南地域は木くず長さ50cm・太さ5cm以内で燃やせるごみ。玉山地域は庭木の枝直径10cm以内を長さ50cm以内で束ねる。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/morioka/senteieda",
  published: "2026-11-02",
  updatedLabel: "2026年11月2日",
  parent: { href: "/area/morioka/", label: "盛岡の庭業者" },
  badge: "盛岡市の地域情報",
  h1: "盛岡市の剪定枝の出し方｜木くずは長さ50cm・太さ5cm以内で可燃ごみ（地域で基準が違う）",
  breadcrumbLabel: "盛岡市の剪定枝の出し方",
  tagChips: ["盛岡市", "剪定枝", "木くず", "燃やせるごみ", "クリーンセンター"],
  ldHeadline: "盛岡市の剪定枝の出し方｜盛岡・都南・玉山の3地域で基準が違う",
  ldDescription:
    "盛岡市で庭木の枝（木くず）を燃やせるごみとして出すときの長さ・太さの基準を盛岡地域・都南地域・玉山地域ごとに整理し、一時多量ごみやクリーンセンターへの持ち込みの扱いを市の公式ページをもとにまとめた記事です。",
  lead: (
    <>
      <p className="mb-4">
        盛岡市のごみの出し方は、<Hl>盛岡地域・都南地域・玉山地域で別々に案内</Hl>されています。盛岡地域では、燃やせるごみの一つとして
        <Hl>木くず(長さ50センチ以内、1本の太さ5センチ以内)</Hl>が挙げられています（出典：
        <a href={SRC_MORIOKA} className={A} target="_blank" rel="noopener noreferrer">ごみの分け方・出し方(盛岡地域)｜盛岡市公式ホームページ</a>
        、2026年11月2日確認）。
      </p>
      <p>
        本記事では、3地域それぞれの枝の基準と、量が多いときの持ち込み・許可業者への依頼を、市の公式ページの記載に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "盛岡地域・都南地域は長さ50センチ以内・太さ5センチ以内、玉山地域は直径10センチ以内の枝を乾燥させて長さ50センチ以内で束ねます。",
  conclusionBody: (
    <p>
      都南地域は「木くずは一本の長さが50センチメートル以下、太さ5センチメートル以下のものに限ります」（出典：
      <a href={SRC_TONAN} className={A} target="_blank" rel="noopener noreferrer">ごみの分けかた・出しかた(都南地域)｜盛岡市公式ホームページ</a>
      ）、玉山地域は<Hl>「庭木の枝(直径10センチメートル以内)などは、乾燥させて長さ50センチメートル以内にして束ねてください」</Hl>と案内されています（出典：
      <a href={SRC_TAMAYAMA} className={A} target="_blank" rel="noopener noreferrer">ごみの分けかた・出しかた(玉山地域)｜盛岡市公式ホームページ</a>
      、いずれも2026年11月2日確認）。
    </p>
  ),
  basicsHeading: "盛岡市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "盛岡地域：木くずは長さ50センチ以内・1本の太さ5センチ以内",
      desc: "燃やせるごみとして、透明・半透明の袋に入れて出します。",
    },
    {
      title: "都南地域：木くずは長さ50センチメートル以下・太さ5センチメートル以下",
      desc: "都南地域のページでは、この大きさのものに限ると案内されています。",
    },
    {
      title: "玉山地域：直径10センチメートル以内の枝を乾燥させ、長さ50センチメートル以内で束ねる",
      desc: "玉山地域は庭木の枝について、乾燥させてから束ねるよう案内されています。",
    },
    {
      title: "盛岡地域は収集日当日の朝8時30分までに出す",
      desc: "盛岡地域のページでは、ごみは収集日当日、朝8時30分までにごみ集積場所に出すよう案内されています。",
    },
    {
      title: "引っ越しなどの一時多量ごみは集積場所に出さない",
      desc: "盛岡地域では、燃やせるごみはクリーンセンター（電話：019-663-7153）に自分で搬入するか、許可業者に依頼するよう案内されています。",
    },
  ],
  stepsHeading: "盛岡市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "お住まいが盛岡・都南・玉山のどの地域かを確認する",
      desc: "地域ごとに枝の基準や搬入できる施設が異なります。",
    },
    {
      title: "地域の基準に合わせて枝を切る",
      desc: "盛岡地域・都南地域は長さ50センチ以内・太さ5センチ以内、玉山地域は直径10センチメートル以内の枝を長さ50センチメートル以内にします。",
    },
    {
      title: "燃やせるごみの日に出す",
      desc: "収集日は地区別の日程で確認します。盛岡地域は透明・半透明の袋に入れ、朝8時30分までに出します。",
    },
    {
      title: "量が多いときは搬入か許可業者への依頼を検討する",
      desc: "クリーンセンターに持ち込めるのは盛岡地域（都南地域・玉山地域を除く）の家庭や事業所のごみです。都南・玉山地域の方は、それぞれ指定の施設に搬入します。",
    },
  ],
  ngHeading: "盛岡市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "地域の基準を確かめずに出しません",
      desc: "盛岡地域・都南地域と玉山地域では、枝の太さの基準が異なります。",
    },
    {
      title: "大量の枝を一度に集積場所へ出しません",
      desc: "一時多量のごみは、クリーンセンターへの搬入か許可業者への依頼が案内されています。",
    },
    {
      title: "都南・玉山地域のごみを盛岡地域の施設に運びません",
      desc: "クリーンセンター・リサイクルセンターに搬入できるのは盛岡地域に住んでいる人だけと案内されています。",
    },
  ],
  proHeading: "業者に頼む場合は、枝の処分方法を確認する",
  proParas: [
    <p key="1">
      盛岡市クリーンセンターのごみの受け入れ時間は<Hl>月曜から土曜日までの9時から16時まで</Hl>で、祝日や年末年始などで休みとなる場合があります（出典：
      <a href={SRC_CC} className={A} target="_blank" rel="noopener noreferrer">よくある質問　クリーンセンターに直接ごみを持ち込めますか。｜盛岡市公式ホームページ</a>
      、2026年11月2日確認）。持ち込みが難しい場合は、許可業者への依頼か、剪定を頼む業者に処分まで任せる方法があります。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月2日確認）。盛岡で依頼できる庭業者の比較は
      <Link href="/area/morioka/" className={A}>盛岡の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "量が多い剪定は、処分込みの見積もりで比べる",
  ctaText:
    "太さ5センチを超える枝が多い剪定や伐採では、処分まで含めて依頼すると手間が少なく済みます。見積もりでは処分費の有無をそろえて比べてください。",
  faqHeading: "盛岡市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "盛岡市で剪定した枝は何ごみですか？",
      a: "燃やせるごみ（木くず）です。盛岡地域は長さ50センチ以内・1本の太さ5センチ以内、都南地域は長さ50センチメートル以下・太さ5センチメートル以下が基準です。",
    },
    {
      q: "玉山地域の基準は違いますか？",
      a: "玉山地域は、庭木の枝（直径10センチメートル以内）などを乾燥させて長さ50センチメートル以内にして束ねるよう案内されています。",
    },
    {
      q: "枝が大量に出たときはどうしますか？",
      a: "盛岡地域では、一時多量の燃やせるごみはクリーンセンターに自分で搬入するか、許可業者に依頼するよう案内されています。",
    },
    {
      q: "クリーンセンターは何時に開いていますか？",
      a: "ごみの受け入れ時間は月曜から土曜日までの9時から16時までです。祝日、年末年始などで休みとなる場合があります。",
    },
  ],
  related: [
    { href: "/area/morioka/", label: "盛岡の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/fuyugakoi-yukigakoi/", label: "庭木の冬囲い・雪囲い", desc: "雪の前に行う庭木の備え" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function MoriokaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
