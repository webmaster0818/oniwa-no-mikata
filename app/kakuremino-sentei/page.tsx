import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kakuremino-sentei/";
const A = "text-[#2D7F3E] underline";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "カクレミノの剪定｜枝が密生しにくいので枝抜き程度、時期は5〜6月が目安｜お庭のミカタ",
  },
  description:
    "カクレミノの剪定の時期と切り方を、熊本市の公共施設樹木の維持管理ガイドライン、世田谷区の植栽ガイドブックの樹種特性表、芦屋市の街路樹等維持管理基本書をもとにまとめました。日陰に強い性質と、資料ごとの違いも並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "カクレミノの剪定",
    description:
      "カクレミノの剪定の時期、枝抜きの考え方、日陰の庭に植えるときの注意を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kumamoto: string; setagaya: string; ashiya: string }[] = [
  {
    item: "樹木の性質",
    kumamoto: "常緑の中木。樹形は広楕円形",
    setagaya: "ウコギ科の常緑高木。若木は葉が3〜5裂する",
    ashiya: "ウコギ科の常緑広葉樹。樹高8〜10m。観賞のポイントは樹姿と葉",
  },
  {
    item: "剪定の時期",
    kumamoto: "5〜6月",
    setagaya: "手入時期は3月、6月中旬〜7月上旬",
    ashiya: "記載なし",
  },
  {
    item: "剪定の方法・可否",
    kumamoto: "枝が密生しないため、枝抜き程度でよい",
    setagaya: "記載なし",
    ashiya: "剪定の適否は「○」",
  },
  {
    item: "生長の速さ",
    kumamoto: "生長は早いほう",
    setagaya: "生育遅い",
    ashiya: "記載なし",
  },
  {
    item: "日当たり",
    kumamoto: "記載なし",
    setagaya: "日照は「△」（日影を好む）。陰地の植栽によい",
    ashiya: "日当たりは「極陰」",
  },
  {
    item: "植え付け（移植）",
    kumamoto: "記載なし",
    setagaya: "3月下旬〜5月上旬、9月下旬〜10月。移植難易は「○〜△」",
    ashiya: "移植容易度は「○」",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">熊本市 公共施設樹木の維持管理ガイドライン</th>
          <th className="border px-2 py-2 text-left">世田谷区 植栽ガイドブック 掲載樹種特性表</th>
          <th className="border px-2 py-2 text-left">芦屋市 街路樹等維持管理基本書 主な高木一覧</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.kumamoto}</td>
            <td className="border px-2 py-2">{r.setagaya}</td>
            <td className="border px-2 py-2">{r.ashiya}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月22日に3つの資料を開き、カクレミノの行を当サイトで項目ごとに照合しました（熊本市の表では「カクレノミ」と表記されています）。「記載なし」はその資料に書かれていないという意味です。記号の意味は、それぞれの表の凡例によります。生長の速さは、熊本市の表が「早いほう」、世田谷区の特性表が「生育遅い」と異なります。熊本市の表は熊本平野部の樹種の特徴として作成されたもので、地域の気候によって育ち方や適した時期は前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kakuremino-sentei",
  published: "2026-11-22",
  updatedLabel: "2026年11月22日",
  h1: "カクレミノの剪定｜枝が密生しにくいので枝抜き程度、時期は5〜6月が目安",
  breadcrumbLabel: "カクレミノの剪定",
  tagChips: ["カクレミノ", "常緑樹", "日陰", "枝抜き", "剪定時期"],
  ldHeadline: "カクレミノの剪定｜枝が密生しにくいので枝抜き程度、時期は5〜6月が目安",
  ldDescription:
    "カクレミノの剪定の時期と方法を、熊本市・世田谷区・芦屋市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        熊本市の公共施設樹木の維持管理ガイドラインにある主要樹種の表では、カクレミノの剪定時期を<Hl>5〜6月</Hl>とし、<Hl>生長は早いほうで、枝が密生しないため、枝抜き程度でよい</Hl>としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」巻末資料 熊本平野部の主要樹種の特徴（PDF）</a>、2026年11月22日確認）。
      </p>
      <p>
        本記事では、この表と、世田谷区の植栽ガイドブックの樹種特性表、芦屋市の街路樹等維持管理基本書の高木一覧を照合し、庭のカクレミノの剪定を整理します。
      </p>
    </>
  ),
  conclusionTitle: "カクレミノは枝が密生しにくい木のため、刈り込みではなく、混んだ枝や伸びすぎた枝を元から抜く剪定が基本です。日陰に強い性質があります。",
  conclusionBody: (
    <>
      <p>
        世田谷区の掲載樹種特性表では、カクレミノを<Hl>「生育遅い。陰地の植栽によい。若木は3〜5裂葉」</Hl>とし、日照の欄は「△」（日影を好む）としています（出典：<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」掲載樹種特性表（PDF）</a>、2026年11月22日確認）。芦屋市の高木一覧でも、日当たりの欄を「極陰」としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」参考資料 主な高木一覧（PDF）</a>、2026年11月22日確認）。3つの資料を当サイトで項目ごとに並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "カクレミノの剪定に関する4つの基本",
  basicsIntro: <p>以下は、3つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "剪定は枝抜き程度",
      desc: "熊本市の表では、カクレミノは枝が密生しないため、枝抜き程度でよいとしています。",
    },
    {
      title: "時期は初夏が中心",
      desc: "熊本市の表では5〜6月、世田谷区の特性表では手入時期を3月と6月中旬〜7月上旬としています。",
    },
    {
      title: "日陰に強い",
      desc: "世田谷区の特性表では陰地の植栽によいとし、芦屋市の一覧では日当たりを「極陰」としています。",
    },
    {
      title: "高さは8〜10mになる",
      desc: "芦屋市の一覧では、カクレミノの樹高を8〜10mとしています。庭では、大きくなる前から高さを決めて管理します。",
    },
  ],
  stepsHeading: "カクレミノを剪定する4つの手順",
  stepsIntro: <p>熊本市の表の「枝抜き程度」と、各資料の時期にもとづく流れです。</p>,
  steps: [
    {
      title: "5〜6月ごろに作業日を決める",
      desc: "熊本市の表では5〜6月、世田谷区の特性表では6月中旬〜7月上旬も手入時期に挙げています。お住まいの地域の気候に合わせて選びます。",
    },
    {
      title: "混み合った枝・内向きの枝を元から抜く",
      desc: "熊本市の表では枝抜き程度でよいとしています。枝の途中で切り詰めるより、付け根から抜いて枝数を減らします。",
    },
    {
      title: "高さを抑えたい場合は、上に伸びる枝を分かれ目で抜く",
      desc: "芦屋市の一覧では樹高8〜10mとしています。目標の高さを決め、それを超える枝を分かれ目で抜いていきます。",
    },
    {
      title: "切った枝葉を片付ける",
      desc: "剪定枝の出し方は市区町村によって異なります。お住まいの市区町村の案内を確認してください。",
    },
  ],
  ngHeading: "カクレミノの剪定で避けたいこと",
  ngs: [
    {
      title: "生垣のように外側を刈り込み続けることは避けます",
      desc: "熊本市の表では、カクレミノは枝が密生しないため、枝抜き程度でよいとしています。",
    },
    {
      title: "日当たりの強い場所に植えることは控えます",
      desc: "世田谷区の特性表では日影を好む樹種とし、陰地の植栽によいとしています。植える場所を選ぶ際の参考にしてください。",
    },
    {
      title: "大きくなってから一度に高さを下げることは避けます",
      desc: "芦屋市の一覧では樹高8〜10mとしています。高くなった木を一度に切り下げると作業も危険になるため、早めに高さを決めて管理します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>脚立が必要な高さになった、建物や塀に枝が近い、高さを下げたい</Hl>といった場合は、庭木の剪定業者に相談すると作業がまとまります。依頼するときは、カクレミノであること、残したい高さ、刈り込みではなく枝抜きで整えたいことを伝えてください。
    </p>,
    <p key="2">
      日陰の庭に向く植物は<Link href="/hikage-niwa-shokusai/" className={A}>日陰の庭の植栽</Link>、木を低くする考え方は<Link href="/niwaki-hikuku-suru/" className={A}>庭木を低くする方法</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "残したい高さと、枝抜きで整えたいことを伝えて相談する",
  ctaText:
    "カクレミノは枝が密生しにくく、枝抜き程度の剪定で整える木です。高くなった木は業者と相談すると安心です。",
  faqHeading: "カクレミノの剪定のよくある質問",
  faqs: [
    {
      q: "カクレミノの剪定はいつがよいですか？",
      a: "熊本市の公共施設樹木の維持管理ガイドラインの表では5〜6月としています。世田谷区の植栽ガイドブックの特性表では、手入時期を3月と6月中旬〜7月上旬としています。",
    },
    {
      q: "カクレミノは刈り込んで形を作れますか？",
      a: "熊本市の表では、カクレミノは枝が密生しないため、枝抜き程度でよいとしています。刈り込みで面をつくるより、枝を元から抜いて整える方法が基本です。",
    },
    {
      q: "日陰の庭に植えても育ちますか？",
      a: "世田谷区の特性表では、カクレミノを日影を好む樹種とし、陰地の植栽によいとしています。芦屋市の一覧でも日当たりを「極陰」としています。",
    },
    {
      q: "カクレミノはどのくらい大きくなりますか？",
      a: "芦屋市の街路樹等維持管理基本書の高木一覧では、樹高を8〜10mとしています。庭では剪定で高さを保ちます。",
    },
  ],
  related: [
    {
      href: "/hikage-niwa-shokusai/",
      label: "日陰の庭の植栽",
      desc: "日当たりの少ない庭に向く植物",
    },
    {
      href: "/niwaki-hikuku-suru/",
      label: "庭木を低くする方法",
      desc: "高くなりすぎた木の下げ方",
    },
    {
      href: "/sentei-towa/",
      label: "剪定とは",
      desc: "透かし・切り詰め・切り返しの違い",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "季節ごとの考え方と樹種の違い",
    },
  ],
};

export default function KakureminoSenteiPage() {
  return <KnowArticle data={data} />;
}
