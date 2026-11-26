import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/konara-niwaki/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SETAGAYA_6 = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const SAITAMA_NARA = "https://www.pref.saitama.lg.jp/a0905/kasnaga.html";
const RINYA_NARA = "https://www.rinya.maff.go.jp/j/hogo/higai/naragare.html";
const FUKUOKA = "https://www.pref.fukuoka.lg.jp/uploaded/life/805964_62798281_misc.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "コナラを庭木にするときの注意｜樹高10〜15mになる落葉高木。剪定は冬に枝抜き程度、ナラ枯れに注意｜お庭のミカタ",
  },
  description:
    "コナラを庭木として植えるときの注意点を、熊本市の樹木管理ガイドライン、世田谷区の植栽ガイドブック、芦屋市の街路樹等維持管理基本書、埼玉県・林野庁のナラ枯れの案内をもとに整理しました。育つ大きさ、剪定と移植の時期、ナラ枯れの見分け方をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "コナラを庭木にするときの注意",
    description:
      "芦屋市の基本書では、コナラは樹高10〜15mの落葉広葉樹です。剪定は冬に枝抜き程度、根元の木くず（フラス）はナラ枯れの目印です。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "芦屋市", item: "基本特性", note: "ブナ科の落葉広葉樹。樹高10〜15m。観賞のポイントは葉・実・紅葉。剪定の適否は△、移植容易度は△、日当たりは陽〜中庸" },
  { src: "熊本市", item: "主要樹種の特徴", note: "樹形は卵形。日当たりは陽、耐寒性は強、生長は早、移植は難の欄に印。雑木林風に植栽し、自然らしさを演出するのに適している" },
  { src: "熊本市", item: "剪定の時期（落葉樹）", note: "骨格剪定の時期は12月〜2月（表の着色）" },
  { src: "世田谷区", item: "樹木一覧", note: "ブナ科の落葉高木。鑑賞時期は新緑4月・紅葉11〜12月上旬。移植時期は2月中旬〜3月と11〜12月上旬、移植難易は○（時期や方法に注意が必要）。手入時期は11〜3月。整枝は枝抜き程度に" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">表</th>
          <th className="border px-2 py-2 text-left">コナラの記載</th>
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
      2026年11月27日に、芦屋市の街路樹等維持管理基本書（参考資料「主な高木一覧」）、熊本市の公共施設樹木の維持管理ガイドライン（「熊本平野部の主要樹種の特徴」の表、「主要樹木の剪定の時期（落葉樹）」の表）、世田谷区「建築にともなう緑化のための植栽ガイドブック」樹木一覧（コナラの行）を開き、当サイトで項目ごとに整理しました。記号の意味は世田谷区の凡例によります。芦屋市の○・△の段階の説明は資料に記載がないため、記号のまま掲載しています。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "konara-niwaki",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "コナラを庭木にするときの注意｜樹高10〜15mになる落葉高木。剪定は冬に枝抜き程度、ナラ枯れに注意",
  breadcrumbLabel: "コナラを庭木にするときの注意",
  tagChips: ["コナラ", "庭木", "雑木の庭", "ナラ枯れ", "落葉高木"],
  ldHeadline: "コナラを庭木にするときの注意｜樹高10〜15mになる落葉高木。剪定は冬に枝抜き程度、ナラ枯れに注意",
  ldDescription:
    "コナラを庭木にするときの大きさ、剪定・移植の時期、ナラ枯れの見分け方を、芦屋市・熊本市・世田谷区・埼玉県・林野庁の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        コナラは、<Hl>樹高10〜15mになるブナ科の落葉高木</Hl>です（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市 街路樹等維持管理基本書（PDF）</a>、2026年11月27日確認）。熊本市のガイドラインは、雑木林風に植栽し、自然らしさを演出するのに適している木としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、同日確認）。
      </p>
      <p>
        庭木にする場合は、<Hl>大きくなる前提で場所を選び、冬に枝抜き程度の剪定で大きさを保つ</Hl>のが基本です。あわせて、根元に木くず（フラス）が出るナラ枯れに注意します。埼玉県は、カシノナガキクイムシが主にコナラやミズナラ、カシ類に穿孔して樹木を枯らすとしています（出典：<a href={SAITAMA_NARA} className={A} target="_blank" rel="noopener noreferrer">埼玉県「「カシノナガキクイムシ」によるナラ枯れ被害が拡大しています。」</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "コナラは大きく育つ雑木です。広い場所に植え、剪定は冬に枝抜き程度。根元の木くずと夏の急な枯れに気をつけます。",
  conclusionBody: (
    <>
      <p>3つの資料のコナラの記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        剪定の時期は、熊本市が12月〜2月、世田谷区が手入時期11〜3月で、いずれも<Hl>葉が落ちている冬</Hl>です。世田谷区は「整枝は枝抜き程度に」としています。熊本市の表で移植が「難」、芦屋市で移植容易度が△であるため、植えた後に場所を変えにくい木として扱います。
      </p>
    </>
  ),
  basicsHeading: "コナラを庭木にするときの4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "樹高10〜15mになる",
      desc: "芦屋市の基本書では、コナラの樹高は10〜15mです。熊本市の表では生長は「早」の欄に印があります。",
    },
    {
      title: "日当たりのよい場所を好む",
      desc: "熊本市の表では日当たりは陽、世田谷区の樹木一覧では日照は◎（日照を好む）、芦屋市は陽〜中庸としています。",
    },
    {
      title: "新緑と紅葉を楽しむ木",
      desc: "世田谷区の樹木一覧では、鑑賞時期は新緑4月・紅葉11〜12月上旬で、新緑と秋の紅（黄）葉がよいとしています。",
    },
    {
      title: "植え替えはしにくい",
      desc: "熊本市の表では移植は「難」、芦屋市は移植容易度を△、世田谷区は移植難易を○（時期や方法に注意が必要）としています。",
    },
  ],
  stepsHeading: "コナラを庭で育てる4つの手順",
  stepsIntro: <p>世田谷区・熊本市・埼玉県・林野庁の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "大きさを見込んで植える場所を決める",
      desc: "樹高10〜15m（芦屋市）になることを前提に、建物や隣地から離れた日当たりのよい場所を選びます。",
    },
    {
      title: "植え付けは2月中旬〜3月か11〜12月上旬",
      desc: "世田谷区の樹木一覧の移植時期です。移植は難しい木のため、植え付けの時期を守ります。",
    },
    {
      title: "冬に枝抜き程度の剪定をする",
      desc: "熊本市の骨格剪定の時期は12月〜2月、世田谷区の手入時期は11〜3月です。世田谷区は「整枝は枝抜き程度に」としています。",
    },
    {
      title: "夏に葉の色と根元を確認する",
      desc: "林野庁は、ナラ枯れの被害木は7〜8月頃に急速に枯れ、大量のフラス（木くずや糞）が見られるとしています。",
    },
  ],
  ngHeading: "コナラを庭木にするときに避けたいこと",
  ngs: [
    {
      title: "狭い場所に植えて、強く切り詰め続けることは避けます",
      desc: "芦屋市の基本書は、コナラの剪定の適否を△としています。大きくなる木を強い剪定で小さく保つ前提の植え方は避けます（当サイトの整理）。",
    },
    {
      title: "根元の木くずを見過ごすことは避けます",
      desc: "埼玉県は、ナラ枯れの被害木は根元にフラスと呼ばれる木くずが見られるのが特徴とし、疑われる状況を見つけたら市町村役場などに通報するよう求めています。",
    },
    {
      title: "毛虫の群れを素手で払うことは避けます",
      desc: "福岡県の資料は、チャドクガは異常発生するとコナラなども食害し、成虫・幼虫・マユ・卵塊とも毒刺毛を持つとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>高さが2階に届くほどになったコナラ、根元に木くずが出て枯れが進んだコナラ</Hl>は、剪定業者や伐採業者に相談してください。ナラ枯れの防除は、林野庁の案内で予防（粘着剤の塗布・ビニールシートの被覆・殺菌剤の樹幹注入）と伐倒駆除（くん蒸・焼却）が示されています（出典：<a href={RINYA_NARA} className={A} target="_blank" rel="noopener noreferrer">林野庁「ナラ枯れ被害」</a>、2026年11月27日確認）。チャドクガの記載は<a href={FUKUOKA} className={A} target="_blank" rel="noopener noreferrer">福岡県【花き花木】病害虫・雑草の発生生態と防除（PDF）</a>、樹木一覧は<a href={SETAGAYA_6} className={A} target="_blank" rel="noopener noreferrer">世田谷区 植栽ガイドブック 樹木一覧（PDF）</a>によります（同日確認）。
    </p>,
    <p key="2">
      雑木を含む落葉樹の剪定時期は<Link href="/sentei-jiki/" className={A}>庭木の剪定時期の基本</Link>、毛虫の注意は<Link href="/kemushi-chui/" className={A}>庭木の毛虫の注意</Link>、枯れた木の扱いは<Link href="/niwaki-kareta/" className={A}>庭木が枯れたとき</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "大きくなったコナラの剪定・伐採を業者に相談する",
  ctaText: "高くなったコナラの剪定や、ナラ枯れで枯れた木の伐採は、業者に任せると安心です。",
  faqHeading: "コナラの庭木でよくある質問",
  faqs: [
    {
      q: "コナラはどのくらいの大きさになりますか？",
      a: "芦屋市の街路樹等維持管理基本書では、コナラの樹高は10〜15mです。",
    },
    {
      q: "コナラの剪定はいつ行えばよいですか？",
      a: "熊本市のガイドラインでは骨格剪定の時期は12月〜2月、世田谷区の植栽ガイドブックでは手入時期は11〜3月です。世田谷区は整枝は枝抜き程度にとしています。",
    },
    {
      q: "コナラの植え付け時期はいつですか？",
      a: "世田谷区の樹木一覧では、移植時期は2月中旬〜3月と11〜12月上旬です。",
    },
    {
      q: "コナラの根元に木くずが出ているのは何ですか？",
      a: "ナラ枯れの可能性があります。埼玉県は、カシノナガキクイムシが主にコナラなどに穿孔し、被害木の根元にはフラスと呼ばれる木くずが見られるとしています。疑われる場合は市町村役場などに連絡するよう求めています。",
    },
  ],
  related: [
    { href: "/sentei-jiki/", label: "庭木の剪定時期の基本", desc: "落葉樹と常緑樹の時期の違い" },
    { href: "/niwaki-kikuzu-ana/", label: "庭木の幹に穴と木くず", desc: "穴をあける虫の見分け方" },
    { href: "/kemushi-chui/", label: "庭木の毛虫の注意", desc: "毒のある毛虫と対処" },
    { href: "/kashi-teire/", label: "カシの手入れ", desc: "同じブナ科の常緑樹" },
  ],
};

export default function KonaraNiwakiPage() {
  return <KnowArticle data={data} />;
}
