import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/hiba-sentei/";
const A = "text-[#2D7F3E] underline";
const RINYA = "https://www.rinya.maff.go.jp/tohoku/sidou/jumoku/shubetu/hiba.html";
const SETAGAYA_KANRI = "https://www.city.setagaya.lg.jp/documents/4728/29589_5.pdf";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ヒバの剪定｜手入れは6〜7月上旬と冬。生育が遅く、葉の青い部分を残して切る｜お庭のミカタ",
  },
  description:
    "ヒバ（アスナロ）の剪定の時期と方法を、林野庁東北森林管理局の樹木図鑑、世田谷区の植栽ガイドブック、大和市の園芸相談の事例をもとにまとめました。生垣のヒバが赤くなる・枯れるときの見方も整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ヒバの剪定",
    description:
      "ヒバ（アスナロ）の手入れの時期、生垣の刈り込み、葉が赤くなる・枯れるときの見方を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; tree: string; time: string; note: string }[] = [
  {
    src: "世田谷区 植栽ガイドブック 掲載樹種特性表",
    tree: "アスナロ（ヒノキ科・常緑高木）",
    time: "手入時期 6〜7月上旬、11〜3月",
    note: "生育は遅い。移植難易は「△」、都市適応性は「△」",
  },
  {
    src: "同 特性表（参考）",
    tree: "サワラ（ヒノキ科・常緑高木）",
    time: "手入時期 6・9月、11〜3月",
    note: "幹は直立、刈り込みに耐える",
  },
  {
    src: "大和市 園芸相談の事例",
    tree: "ヒノキの垣根",
    time: "普通の刈込みは古葉が落ちる11月頃。大きく切りつめるには春",
    note: "垣根が伸び過ぎたときの相談への回答",
  },
  {
    src: "大和市 園芸相談の事例",
    tree: "イトヒバ",
    time: "まず枯枝を切り、春になってから整枝",
    note: "5月に剪定した後、ボサボサで枯枝が増えた木への回答",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">樹種</th>
          <th className="border px-2 py-2 text-left">手入れ・剪定の時期</th>
          <th className="border px-2 py-2 text-left">記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.tree}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.tree}</td>
            <td className="border px-2 py-2">{r.time}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に世田谷区の特性表と大和市の園芸相談の事例を開き、アスナロと、庭で「ヒバ」と同じように扱われることの多いヒノキ科の木の行を当サイトで並べました。庭木の「ヒバ」は呼び名の幅が広いため、植えてある木の正式な樹種が分かる場合は、その樹種の行を参考にしてください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "hiba-sentei",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "ヒバの剪定｜手入れは6〜7月上旬と冬。生育が遅く、葉の青い部分を残して切る",
  breadcrumbLabel: "ヒバの剪定",
  tagChips: ["ヒバ", "アスナロ", "生垣", "針葉樹", "刈り込み"],
  ldHeadline: "ヒバの剪定｜手入れは6〜7月上旬と冬。生育が遅く、葉の青い部分を残して切る",
  ldDescription:
    "ヒバ（アスナロ）の剪定の時期と方法、生垣のヒバが赤くなる・枯れるときの見方を、林野庁・世田谷区・大和市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        林野庁東北森林管理局の樹木図鑑では、<Hl>アスナロは変種ヒノキアスナロを含めて古くから（林業では）ヒバと呼ばれている</Hl>としています（出典：<a href={RINYA} className={A} target="_blank" rel="noopener noreferrer">林野庁 東北森林管理局「管内の樹木図鑑 ヒバ」</a>、2026年11月23日確認）。世田谷区の植栽ガイドブックの特性表では、アスナロの手入時期を<Hl>6〜7月上旬と11〜3月</Hl>とし、<Hl>生育は遅い</Hl>としています。
      </p>
      <p>
        本記事では、これらの資料と大和市の園芸相談の事例を照合し、庭のヒバの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "ヒバは生育が遅いため、初夏と冬の手入れで伸びた分を整える程度にとどめます。葉の青い部分がなくなるまで切り込まないことが大切です。",
  conclusionBody: (
    <>
      <p>
        大和市の園芸相談の事例では、移植後に葉が枯れてきたヒバについて<Hl>ヒバは葉に青い所がなければ枯れてしまっている。修復の可能性はない</Hl>と回答しています（出典：<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、2026年11月23日確認）。世田谷区の特性表（<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">掲載樹種特性表（PDF）</a>、同日確認）とあわせて、ヒバとヒノキ科の木の記載を並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ヒバの剪定に関する4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "「ヒバ」はアスナロの呼び名",
      desc: "林野庁東北森林管理局の樹木図鑑では、アスナロは変種ヒノキアスナロを含めてヒバと呼ばれているとし、青森のヒバ林を日本三大美林のひとつとしています。",
    },
    {
      title: "生育が遅い",
      desc: "世田谷区の特性表では、アスナロを「生育は遅い」としています。一度に大きく切ると、元に戻るまで時間がかかります。",
    },
    {
      title: "手入れは初夏と冬",
      desc: "世田谷区の特性表では、アスナロの手入時期を6〜7月上旬と11〜3月としています。",
    },
    {
      title: "葉の青い部分を残す",
      desc: "大和市の事例では、葉に青い所がなければ枯れてしまっており修復の可能性はないとしています。緑の葉が残る位置で切ります。",
    },
  ],
  stepsHeading: "ヒバの生垣を整える4つの手順",
  stepsIntro: <p>世田谷区のガイドブックの剪定・刈り込みの方法と、各資料の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "枯れ枝・折れ枝を先に取り除く",
      desc: "世田谷区のガイドブックの維持・管理の章では、最初に除去する枝は枯れ枝、折れ枝、病気の枝としています。大和市の事例でも、イトヒバはまず枯枝を切るとしています。",
    },
    {
      title: "6〜7月上旬に伸びた分を刈る",
      desc: "世田谷区のガイドブックでは、刈り込みを年1回行う場合は6〜7月に行い、ほとんどの樹種はこの時期に行って差し支えないとしています。",
    },
    {
      title: "上を強く、裾を弱く刈る",
      desc: "世田谷区のガイドブックでは、生垣は上部の枝を強く、下部の枝を弱く刈り込むと、裾のラインを美しく保てるとしています。",
    },
    {
      title: "大きく低くしたいときは春に行う",
      desc: "大和市の事例では、伸び過ぎたヒノキの垣根を大きく切りつめるには春が良く、普通の刈込みは古葉が落ちる11月頃が良いとしています。",
    },
  ],
  ngHeading: "ヒバの剪定で避けたいこと",
  ngs: [
    {
      title: "緑の葉がなくなるまで切り込むことは避けます",
      desc: "大和市の事例では、ヒバは葉に青い所がなければ枯れてしまっているとしています。枝の途中で緑の葉が残るように切ります。",
    },
    {
      title: "成長した木を気軽に移植することは避けます",
      desc: "世田谷区の特性表では、アスナロの移植難易を「△」としています。大和市の事例でも、移植後に葉が枯れたヒバについて修復の可能性はないと回答しています。",
    },
    {
      title: "一部が赤くなった木を放置することは避けます",
      desc: "大和市の事例では、生垣のヒバが4本だけ赤くなったという相談に、生育状態が悪いものと思われるとし、少し肥料を施して様子をみるとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣が長い、背丈を大きく下げたい、一部が赤茶色になって原因が分からない</Hl>といった場合は、庭木の剪定業者に相談すると作業がまとまります。依頼するときは、木の高さと本数、赤くなっている位置、希望の高さを伝えてください。
    </p>,
    <p key="2">
      洋風の針葉樹の手入れは<Link href="/conifer-teire/" className={A}>コニファーの剪定・手入れ</Link>、生垣の刈り込みの基本は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、裾が透けてきたときの見方は<Link href="/ikegaki-shitaeda-kare/" className={A}>生垣の下枝が枯れる原因</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。刈り込みの方法の出典は<a href={SETAGAYA_KANRI} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」維持・管理（PDF）</a>（2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "木の高さと葉の色の変化を伝えて相談する",
  ctaText:
    "ヒバは生育が遅く、切り過ぎると戻りにくい木です。背丈を大きく下げたいときや、葉が赤茶色に変わったときは、業者と相談すると安心です。",
  faqHeading: "ヒバの剪定のよくある質問",
  faqs: [
    {
      q: "ヒバの剪定はいつがよいですか？",
      a: "世田谷区の植栽ガイドブックの特性表では、アスナロの手入時期を6〜7月上旬と11〜3月としています。大和市の園芸相談の事例では、ヒノキの垣根の普通の刈込みは古葉が落ちる11月頃、大きく切りつめるには春が良いとしています。",
    },
    {
      q: "ヒバとアスナロは同じ木ですか？",
      a: "林野庁東北森林管理局の樹木図鑑では、アスナロは変種ヒノキアスナロを含めて古くから（林業では）ヒバと呼ばれているとしています。庭木の名前としては、ほかのヒノキ科の木にも「ヒバ」が付くことがあります。",
    },
    {
      q: "生垣のヒバの一部だけが赤くなりました。",
      a: "大和市の園芸相談の事例では、生垣のヒバが4本だけ赤くなったという相談に、生育状態が悪いものと思われるとし、少し肥料を施して様子をみるとしています。",
    },
    {
      q: "茶色くなったヒバの枝は元に戻りますか？",
      a: "大和市の園芸相談の事例では、ヒバは葉に青い所がなければ枯れてしまっており、修復の可能性はないとしています。緑の葉が残っている枝を生かして形を整えます。",
    },
  ],
  related: [
    {
      href: "/conifer-teire/",
      label: "コニファーの剪定・手入れ",
      desc: "茶色く枯れ込む原因",
    },
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込み",
      desc: "時期と刈り方の基本",
    },
    {
      href: "/ikegaki-shurui/",
      label: "生垣に向く木の種類",
      desc: "4市の資料に共通する樹種",
    },
    {
      href: "/inutsuge-sentei/",
      label: "イヌツゲの剪定",
      desc: "生垣に多い常緑樹",
    },
  ],
};

export default function HibaSenteiPage() {
  return <KnowArticle data={data} />;
}
