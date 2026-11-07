import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/soka/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.soka.saitama.jp/cont/s1702/010/020/010/03.html";
const SRC_T = "家庭ごみの分け方・出し方～分別等のルールを守ったごみの出し方にご協力をお願いします～ - 草加市役所";
const SRC2 = "https://www.city.soka.saitama.jp/cont/s1702/010/020/010/PAGE000000000000062714.html";
const SRC2_T = "堆肥の販売、枝・草の搬入について - 草加市役所";

export const metadata: Metadata = {
  title: {
    absolute:
      "草加市の剪定枝の出し方｜小枝は長さ50cm・直径10cm以下で可燃ごみ、1回2〜3束まで｜お庭のミカタ",
  },
  description:
    "草加市では、小枝（長さ50cm・直径10cm以下）は可燃ごみです。1回に2束から3束までとし、量が多い場合は数回に分けるか許可業者に依頼します。" +
    "家庭の剪定枝は東埼玉資源環境組合の堆肥化施設へ個人搬入もできます。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "草加市の剪定枝の出し方｜小枝は長さ50cm・直径10cm以下で可燃ごみ（1回2〜3束まで）",
    description:
      "草加市の小枝は長さ50cm・直径10cm以下で可燃ごみ。量が多いときは数回に分けるか許可業者へ。東埼玉資源環境組合の堆肥化施設への個人搬入も案内されています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/soka/senteieda",
  published: "2026-11-07",
  updatedLabel: "2026年11月7日",
  parent: { href: "/area/soka/", label: "草加の庭業者" },
  badge: "草加市の地域情報",
  h1: "草加市の剪定枝の出し方｜小枝は長さ50cm・直径10cm以下で可燃ごみ、1回2〜3束まで",
  breadcrumbLabel: "草加市の剪定枝の出し方",
  tagChips: ["草加市", "剪定枝", "可燃ごみ", "東埼玉資源環境組合", "個人搬入"],
  ldHeadline: "草加市の剪定枝の出し方｜小枝は長さ50cm・直径10cm以下で可燃ごみ、1回2〜3束まで",
  ldDescription:
    "草加市で庭木の小枝を可燃ごみに出すときの大きさ、1回に出せる量、収集日の出し方、量が多いときの許可業者と堆肥化施設への個人搬入を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        草加市では、
        <Hl>小枝（長さ50センチメートル、直径10センチメートル以下）は可燃ごみ</Hl>
        です。可燃ごみは週2回の収集で、透明・半透明の袋に入れて出します（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
        、2026年11月7日確認）。
      </p>
      <p>
        本記事では、小枝の大きさと量の決まり、収集日の出し方、量が多いときの選択肢を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle:
    "小枝は長さ50cm・直径10cm以下で可燃ごみ、1回2〜3束まで。多いときは数回に分けるか許可業者へ依頼します。",
  conclusionBody: (
    <p>
      市は、
      <Hl>小枝は1回に2束から3束までとし、量が多い場合は数回に分けて出すか、市が許可した収集運搬許可業者に依頼（有料）</Hl>
      するよう案内しています。ごみは収集日の朝、明るくなってから8時までに出します（出典：
      <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{SRC_T}</a>
      、2026年11月7日確認）。
    </p>
  ),
  basicsHeading: "草加市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "小枝は長さ50cm・直径10cm以下",
      desc: "この大きさの小枝が可燃ごみとして案内されています。",
    },
    {
      title: "1回に2束から3束まで",
      desc: "量が多い場合は数回に分けて出します。",
    },
    {
      title: "収集日の朝、明るくなってから8時まで",
      desc: "地域ごとに決められた収集日に出します。",
    },
    {
      title: "家庭から出たものに限る",
      desc: "事業所から出る事業系ごみは家庭用の集積所に出せません。",
    },
    {
      title: "堆肥化施設への個人搬入もできる",
      desc: "東埼玉資源環境組合の第一工場堆肥化施設で、家庭のせん定枝・刈草を受け付けています。",
    },
  ],
  stepsHeading: "草加市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "長さと太さをそろえる",
      desc: "小枝は長さ50cm、直径10cm以下にします。",
    },
    {
      title: "束にまとめる",
      desc: "1回に出すのは2束から3束までです。",
    },
    {
      title: "残りは次の収集日に回す",
      desc: "量が多い場合は数回に分けて出します。",
    },
    {
      title: "収集日の朝8時までに出す",
      desc: "明るくなってから8時までに、決められた集積所へ出します。",
    },
  ],
  ngHeading: "草加市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "一度に大量の枝を集積所に出しません",
      desc: "小枝は1回に2束から3束までとされています。",
    },
    {
      title: "事業で出た枝を家庭用の集積所に出しません",
      desc: "事業系ごみは市では収集できません。堆肥化施設への個人搬入も事業者は対象外です。",
    },
    {
      title: "せん定枝と刈草を混ぜて搬入しません",
      desc: "堆肥化施設への個人搬入では、せん定枝と刈草を分別していることが条件です。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      東埼玉資源環境組合第一工場堆肥化施設（越谷市増林）では、5市1町（越谷市・草加市・八潮市・三郷市・吉川市・松伏町）に住む人が、家庭から出たせん定枝・刈草を自ら搬入できます。せん定枝は直径15cm以下・長さ100cm以下、搬入量は1日1件200キログラムまでです。内容が変わる場合があるため、組合のホームページで事前に確認するよう案内されています（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{SRC2_T}</a>
      、2026年11月7日確認）。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月7日確認）。草加で依頼できる庭業者の比較は
      <Link href="/area/soka/" className={A}>草加の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "搬入の手間をかけられないなら、処分込みの見積もりで比べる",
  ctaText:
    "枝が多いと、数回に分けて出すか搬入する手間がかかります。業者に頼む場合は、見積もりで処分の有無をそろえて比べてください。",
  faqHeading: "草加市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "草加市で剪定した枝は何ごみですか？",
      a: "小枝（長さ50センチメートル、直径10センチメートル以下）は可燃ごみです。",
    },
    {
      q: "1回に何束まで出せますか？",
      a: "小枝は1回に2束から3束までです。量が多い場合は数回に分けて出すか、市が許可した収集運搬許可業者に依頼（有料）します。",
    },
    {
      q: "何時までに出せばよいですか？",
      a: "地域ごとに決められた収集日の朝、明るくなってから8時までに出します。",
    },
    {
      q: "自分で施設に持ち込めますか？",
      a: "東埼玉資源環境組合第一工場堆肥化施設で、家庭から出たせん定枝・刈草の個人搬入を受け付けています。せん定枝は直径15cm以下・長さ100cm以下、1日1件200キログラムまでです。事前に組合のホームページで確認してください。",
    },
  ],
  related: [
    { href: "/area/soka/", label: "草加の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/koshigaya/senteieda/", label: "越谷市の剪定枝の出し方", desc: "同じ組合の堆肥化施設を使う隣接市" },
    { href: "/area/kawaguchi/senteieda/", label: "川口市の剪定枝の出し方", desc: "隣接する市の分別ルール" },
    { href: "/kirikabu-hochi/", label: "切り株を放置するとどうなるか", desc: "根を残した場合の注意点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function SokaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
