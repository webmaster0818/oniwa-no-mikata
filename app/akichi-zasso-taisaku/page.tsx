import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/akichi-zasso-taisaku/";
const A = "text-[#2D7F3E] underline";
const KANAZAWA = "https://www4.city.kanazawa.lg.jp/material/files/group/67/akiti.pdf";
const SAKAI = "https://www.city.sakai.lg.jp/kurashi/gomi/gomi_recy/torikumi/akichikannri.html";
const OTA = "https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/kankyou/kogai_hunso/akichinozasso.html";
const ICHINOMIYA = "https://www.city.ichinomiya.aichi.jp/_res/projects/default_project/_page_/001/039/374/jourei.pdf";
const IZUMISANO = "https://www.city.izumisano.lg.jp/material/files/group/3/akichi.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "空き地の雑草対策｜管理は所有者の責任、除草は年2回以上が目安。放置すると市の指導・勧告の対象に｜お庭のミカタ",
  },
  description:
    "空き地の雑草は所有者等が管理するものとされ、金沢市・堺市は年2回以上の除草を求めています。大田区・一宮市・泉佐野市の条例や案内をもとに、除草の回数、遠方の場合の頼み先、放置したときの流れをまとめました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "空き地の雑草対策",
    description:
      "空き地の雑草対策を、所有者が求められていること（年2回以上の除草・見回り・不法投棄対策）と、放置したときの市の指導・勧告の流れから整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  {
    src: "金沢市",
    item: "除草の回数",
    note: "雑草は5月に成長が始まり、梅雨に勢いが増し、10月頃まで成長を続けるため年1回では不十分。年2回以上の除草を求める",
  },
  {
    src: "堺市",
    item: "除草の回数",
    note: "梅雨の時期から成長が早くなり10月頃まで伸び続けるため、年2回以上の除草等を求める。柵・フェンス等で囲むなどの不法投棄対策も",
  },
  {
    src: "大田区",
    item: "管理の方法",
    note: "定期的に見回り、雑草が長く伸びないうちに刈り取る。不法投棄防止の看板や柵。対策が難しい場合は防草シートも有効な対策の一つ",
  },
  {
    src: "大田区",
    item: "自分でできないとき",
    note: "専門の業者やシルバー人材センターへの依頼などを検討。区のシルバー人材センターは原則として所有者等の立会いが必要",
  },
  {
    src: "一宮市（条例）",
    item: "放置したとき",
    note: "立入調査・報告 → 指導・助言 → 勧告 → 措置命令 → 公表",
  },
  {
    src: "泉佐野市（条例）",
    item: "放置したとき",
    note: "助言・指導 → 勧告 → 命令・公表 → 代執行。命令に違反した者は5万円以下の過料",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.item}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月25日に、金沢市の「空き地管理について」（PDF）、堺市の「空き地等の適正な管理」、大田区の「空き地の雑草について」、一宮市空き地の不良状態の解消に関する条例（PDF）、泉佐野市空き地の雑草等の除去に関する条例（PDF）を開き、当サイトで要点を並べました。条例の有無・内容は市区町村ごとに異なります。お持ちの空き地がある市区町村の案内を確かめてください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "akichi-zasso-taisaku",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "空き地の雑草対策｜管理は所有者の責任、除草は年2回以上が目安。放置すると市の指導・勧告の対象に",
  breadcrumbLabel: "空き地の雑草対策",
  tagChips: ["空き地", "雑草対策", "草刈り", "条例", "土地の管理"],
  ldHeadline: "空き地の雑草対策｜管理は所有者の責任、除草は年2回以上が目安。放置すると市の指導・勧告の対象に",
  ldDescription:
    "空き地の雑草対策を、金沢市・堺市・大田区の案内と一宮市・泉佐野市の条例をもとに、所有者が求められる管理と放置したときの流れから解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        空き地の雑草は、<Hl>その土地の所有者（管理者）が管理するもの</Hl>とされ、<Hl>除草は年2回以上</Hl>が自治体の目安です。金沢市は「雑草は5月に入ると成長が始まり、梅雨の時期にその勢いが加速し、10月頃まで成長を続けます。このため年1回の除草では十分ではありません」として、年2回以上の除草を求めています（出典：<a href={KANAZAWA} className={A} target="_blank" rel="noopener noreferrer">金沢市 空き地管理について（PDF）</a>、2026年11月25日確認）。
      </p>
      <p>
        堺市も同じく年2回以上の除草等を求め、「個人所有土地の樹木及び雑草等を市で切ることはできません」としています（出典：<a href={SAKAI} className={A} target="_blank" rel="noopener noreferrer">堺市 空き地等の適正な管理</a>、同日確認）。本記事では、空き地を持つ方が求められていることと、放置したときにどうなるかを、自治体の案内と条例から整理します。
      </p>
    </>
  ),
  conclusionTitle: "空き地は5〜10月の間に年2回以上刈り、見回りと不法投棄対策をします。自分で行けない場合は業者やシルバー人材センターに頼みます。",
  conclusionBody: (
    <>
      <p>
        大田区は、空き地は定期的に見回り、雑草が長く伸びないうちに刈り取り、不法投棄防止の看板や柵を設置するよう求めています。対策が難しい場合は防草シートも有効な対策の一つとしています（出典：<a href={OTA} className={A} target="_blank" rel="noopener noreferrer">大田区 空き地の雑草について</a>、同日確認）。放置した場合の流れは条例で定める市があります（<a href={ICHINOMIYA} className={A} target="_blank" rel="noopener noreferrer">一宮市の条例（PDF）</a>・<a href={IZUMISANO} className={A} target="_blank" rel="noopener noreferrer">泉佐野市の条例（PDF）</a>、同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "空き地の雑草管理に関する4つの基本",
  basicsIntro: <p>以下は、各自治体の案内と条例に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "管理するのは所有者・管理者",
      desc: "金沢市は「空き地は、その所有者が管理しなければなりません」としています。一宮市・泉佐野市の条例も、所有者・占有者・管理者に適正な管理を求めています。",
    },
    {
      title: "年1回では足りない",
      desc: "金沢市・堺市とも、雑草は10月頃まで伸び続けるため、年2回以上の除草を求めています。",
    },
    {
      title: "雑草は不法投棄や害虫の原因になる",
      desc: "大田区は、害虫の発生、アレルギーの誘発、ごみの不法投棄、不審火などの問題を招くとしています。金沢市は、投棄されたごみは土地の所有者が処分しなければならないとしています。",
    },
    {
      title: "市が代わりに刈るとは限らない",
      desc: "堺市は、個人所有の土地の樹木や雑草等を市で切ることはできないとしています。大田区は、所有者を調べて管理を依頼するが、日数がかかることがあるとしています。",
    },
  ],
  stepsHeading: "空き地の雑草対策の4つの手順",
  stepsIntro: <p>金沢市・堺市・大田区の案内にもとづく流れです。</p>,
  steps: [
    {
      title: "5〜6月に1回目の草刈りをする",
      desc: "金沢市は、雑草は5月に成長が始まり梅雨に勢いが増すとしています。伸びきる前に刈ると作業が軽くなります。",
    },
    {
      title: "夏から秋にもう一度刈る",
      desc: "雑草は10月頃まで伸び続けるため、年2回以上が目安です。草の種類や伸び方に応じて回数を増やします。",
    },
    {
      title: "見回りと不法投棄の対策をする",
      desc: "大田区・金沢市は定期的な見回りを、堺市・大田区は柵・フェンスや看板の設置を挙げています。",
    },
    {
      title: "刈った後は防草シートも検討する",
      desc: "大田区は、対策が難しい場合は防草シートを敷くことも有効な対策の一つとしています。刈り取った草の処分方法は、市区町村の清掃担当に確かめてください。",
    },
  ],
  ngHeading: "空き地の雑草対策で避けたいこと",
  ngs: [
    {
      title: "年1回だけの除草で済ませることは避けます",
      desc: "金沢市は、雑草は10月頃まで成長を続けるため、年1回の除草では十分ではないとしています。",
    },
    {
      title: "市の指導を放置することは避けます",
      desc: "一宮市の条例は指導・助言、勧告、措置命令、公表の順に定めています。泉佐野市の条例は代執行と、命令に違反した場合の5万円以下の過料も定めています。",
    },
    {
      title: "投棄されたごみを放置することは避けます",
      desc: "金沢市は、放置すると次々にごみが投棄され、投棄されたごみは所有者が管理責任として処分しなければならないとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>空き地から離れて住んでいる、面積が広い、草が背丈ほどに伸びている</Hl>場合は、業者に任せることを考えてください。金沢市は、自分で除草できない場合は専門の業者などへの委託を、大田区は業者やシルバー人材センターへの依頼を挙げています。依頼するときは、土地の面積、草の高さ、刈った草の処分を含めるか、年何回来てもらうかを伝えると見積もりを比べやすくなります。
    </p>,
    <p key="2">
      シルバー人材センターへの依頼は<Link href="/kusakari-silver-jinzai/" className={A}>草刈りをシルバー人材センターに頼む</Link>、草刈りの時期は<Link href="/kusakari-jiki/" className={A}>草刈りの時期</Link>、防草シートは<Link href="/bousou-sheet/" className={A}>防草シート</Link>、方法の比べ方は<Link href="/zasso-taisaku/" className={A}>雑草対策の方法比較</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "空き地の草刈りを業者に相談する",
  ctaText: "遠方の空き地や広い土地の草刈り、刈った草の処分までまとめて頼みたいときは、業者に任せると安心です。",
  faqHeading: "空き地の雑草対策でよくある質問",
  faqs: [
    {
      q: "空き地の草刈りは年に何回必要ですか？",
      a: "金沢市・堺市は、雑草は10月頃まで伸び続けるため年2回以上の除草を求めています。草の種類や伸び方によって回数は変わります。",
    },
    {
      q: "空き地の雑草を放置するとどうなりますか？",
      a: "条例を定めている市では、指導・助言、勧告、命令、公表と進むことがあります。泉佐野市の条例は代執行と、命令に違反した者への5万円以下の過料も定めています。内容は市区町村ごとに異なります。",
    },
    {
      q: "遠方に住んでいて自分で草刈りができません。",
      a: "金沢市は専門の業者などへの委託を、大田区は専門の業者やシルバー人材センターへの依頼を挙げています。大田区のシルバー人材センターの除草は、原則として所有者等の立会いが必要とされています。",
    },
    {
      q: "隣の空き地の雑草に困っています。市が刈ってくれますか？",
      a: "堺市は、個人所有土地の樹木及び雑草等を市で切ることはできないとし、まずは当事者同士の話し合いを求めています。所有者は法務局で登記事項証明書を取ると確かめられます。大田区は、状況によって区が所有者を調べて管理を依頼するとしています。",
    },
  ],
  related: [
    { href: "/kusakari-silver-jinzai/", label: "草刈りをシルバー人材センターに頼む", desc: "料金の出し方と頼み方" },
    { href: "/kusakari-jiki/", label: "草刈りの時期", desc: "年1回では足りない理由" },
    { href: "/bousou-sheet/", label: "防草シート", desc: "刈った後に生やさない" },
    { href: "/zasso-taisaku/", label: "雑草対策の方法比較", desc: "手取り・除草剤・シート・砂利" },
  ],
};

export default function AkichiZassoTaisakuPage() {
  return <KnowArticle data={data} />;
}
