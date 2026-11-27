import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/dodantsutsuji-ikegaki/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";
const SETAGAYA_LIST = "https://www.city.setagaya.lg.jp/documents/4728/29589_6.pdf";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const CHIBA = "https://www.city.chiba.jp/toshi/koenryokuchi/kanri/documents/r7kouen-kannrino-tebiki.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ドウダンツツジの生垣｜刈り込みは花後の5〜6月、8月ごろには翌春の花芽ができる｜お庭のミカタ",
  },
  description:
    "ドウダンツツジの生垣の刈り込み時期と回数を、熊本市・芦屋市・世田谷区・大和市・千葉市の公的な資料をもとにまとめました。花芽ができる時期と、資料ごとの刈り込み時期の違いを並べています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ドウダンツツジの生垣",
    description:
      "ドウダンツツジの生垣を刈り込む時期、枝を密にする刈り方、花芽を落とさない注意点を公的な資料をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; time: string; note: string }[] = [
  {
    src: "熊本市 公共施設樹木の維持管理ガイドライン（主要樹種の特徴）",
    time: "5〜6月",
    note: "枝を密生させるには、刈込み回数を少し多めに行うとよい",
  },
  {
    src: "熊本市 同ガイドライン（花芽分化と剪定の時期）",
    time: "5月〜6月",
    note: "花芽分化期は8月〜9月、花芽の位置は頂芽・側芽、開花時期は5月",
  },
  {
    src: "芦屋市 街路樹等維持管理基本書（低木の刈込み）",
    time: "6月・年1回",
    note: "花芽分化期は8月上旬〜8月中旬、花芽の位置は頂芽・側芽、開花期は3月下旬〜5月上旬",
  },
  {
    src: "世田谷区 植栽ガイドブック（掲載樹種特性表）",
    time: "手入時期は3〜4月、7〜8月",
    note: "生育遅い。刈り込みに耐える。花は白色、秋紅葉する",
  },
  {
    src: "大和市 園芸相談の事例《庭木》",
    time: "6月と10月",
    note: "花の咲くものは、10月の剪定は軽く徒長枝を除くのみ",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">剪定・刈り込みの時期</th>
          <th className="border px-2 py-2 text-left">ドウダンツツジに関する記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.time}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月22日に5つの資料を開き、ドウダンツツジの行・回答を当サイトで並べました。4つの資料が5〜6月ごろ（花の後）を挙げています。世田谷区の特性表は手入時期に7〜8月を含みますが、熊本市・芦屋市の表では花芽ができる時期を8月ごろとしているため、夏の刈り込みは花芽ができる前に済ませるのが安全です。各資料は作成した地域の気候にもとづくもので、地域によって時期は前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "dodantsutsuji-ikegaki",
  published: "2026-11-22",
  updatedLabel: "2026年11月22日",
  h1: "ドウダンツツジの生垣｜刈り込みは花後の5〜6月、8月ごろには翌春の花芽ができる",
  breadcrumbLabel: "ドウダンツツジの生垣",
  tagChips: ["ドウダンツツジ", "落葉樹", "生垣", "刈り込み", "花芽"],
  ldHeadline: "ドウダンツツジの生垣｜刈り込みは花後の5〜6月、8月ごろには翌春の花芽ができる",
  ldDescription:
    "ドウダンツツジの生垣の刈り込み時期と方法を、熊本市・芦屋市・世田谷区・大和市・千葉市の公的な資料をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        熊本市の公共施設樹木の維持管理ガイドラインでは、ドウダンツツジの剪定時期を<Hl>5〜6月</Hl>とし、<Hl>枝を密生させるには、刈込み回数を少し多めに行うとよい</Hl>としています。同じガイドラインの「花芽分化と剪定の時期」の表では、花芽分化期を<Hl>8月〜9月</Hl>、花芽の位置を頂芽・側芽としています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市「公共施設樹木の維持管理ガイドライン」（PDF）</a>、2026年11月22日確認）。
      </p>
      <p>
        本記事では、このガイドラインと芦屋市・世田谷区・大和市・千葉市の資料を照合し、ドウダンツツジの生垣の刈り込みを整理します。
      </p>
    </>
  ),
  conclusionTitle: "ドウダンツツジの生垣は、花が終わった5〜6月に刈り込みます。夏の終わりには翌春の花芽ができるため、秋以降の深い刈り込みは避けます。",
  conclusionBody: (
    <>
      <p>
        芦屋市の街路樹等維持管理基本書では、低木の刈込みの表でドウダンツツジを<Hl>6月・年1回</Hl>とし、花芽分化期を<Hl>8月上旬〜8月中旬</Hl>としています（出典：<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>、2026年11月22日確認）。千葉市の公園の管理のてびきでも、ドウダンツツジを「新しく伸びた枝につくられた花芽が、翌年の春に咲くタイプ」に分類しています（出典：<a href={CHIBA} className={A} target="_blank" rel="noopener noreferrer">千葉市「公園の管理のてびき」（PDF）</a>、2026年11月22日確認）。5つの資料を当サイトで並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ドウダンツツジの生垣に関する4つの基本",
  basicsIntro: <p>以下は、5つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "刈り込みは花の後",
      desc: "熊本市の表は5〜6月、芦屋市の表は6月、大和市の園芸相談は6月を挙げています。ドウダンツツジの開花は春（熊本市の表では5月、芦屋市の表では3月下旬〜5月上旬）です。",
    },
    {
      title: "花芽は夏の終わりにできる",
      desc: "熊本市の表では花芽分化期を8月〜9月、芦屋市の表では8月上旬〜8月中旬としています。花芽の位置はどちらも頂芽・側芽です。",
    },
    {
      title: "刈り込みに耐え、枝を密にできる",
      desc: "世田谷区の特性表では「刈り込みに耐える」とし、熊本市の表では枝を密生させるには刈込み回数を少し多めに行うとよいとしています。",
    },
    {
      title: "生育はゆっくり",
      desc: "世田谷区の特性表では、ドウダンツツジを生育が遅い樹種としています。一度に深く刈ると、元の大きさに戻るまで時間がかかります。",
    },
  ],
  stepsHeading: "ドウダンツツジの生垣を刈り込む4つの手順",
  stepsIntro: <p>各資料の時期と注意点にもとづく流れです。</p>,
  steps: [
    {
      title: "花が終わったら、5〜6月に刈り込む",
      desc: "熊本市の表では5〜6月、芦屋市・大和市の資料では6月としています。花の終わりを確かめてから作業します。",
    },
    {
      title: "枝を密にしたい場合は、回数を少し増やす",
      desc: "熊本市の表では、枝を密生させるには刈込み回数を少し多めに行うとよいとしています。花芽ができる8月ごろより前に済ませます。",
    },
    {
      title: "秋は伸びすぎた枝を抜く程度にする",
      desc: "大和市の園芸相談では、花の咲くものは10月の剪定は軽く徒長枝を除くのみとしています。千葉市のてびきでも、秋は強い刈り込みや大きな剪定は樹木に負担を与えるとしています。",
    },
    {
      title: "紅葉と冬の枝ぶりを楽しむ",
      desc: "世田谷区の特性表では、ドウダンツツジを秋に紅葉する樹種としています。秋から冬は形を大きく変えず、翌年の花後に整えます。",
    },
  ],
  ngHeading: "ドウダンツツジの生垣で避けたいこと",
  ngs: [
    {
      title: "秋から冬に深く刈り込むことは避けます",
      desc: "熊本市・芦屋市の表では8月ごろに花芽ができるとしています。千葉市のてびきでも、早春や初夏に花を楽しむ樹木は花芽ができ上がっているため、秋は枝先をそのままにしておくとしています。",
    },
    {
      title: "夏の遅い時期の刈り込みは避けます",
      desc: "世田谷区の特性表は手入時期に7〜8月を含みますが、熊本市・芦屋市の表では花芽分化期を8月ごろとしています。花を楽しみたい場合は、夏の刈り込みを早めに済ませます。",
    },
    {
      title: "一度に大きく小さくすることは避けます",
      desc: "世田谷区の特性表では、ドウダンツツジを生育が遅い樹種としています。大きさを抑えたい場合は、毎年の刈り込みで少しずつ整えます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>生垣が長い、高さがそろわなくなった、何年も刈っておらず形を戻したい</Hl>といった場合は、庭木の剪定業者に相談すると作業がまとまります。依頼するときは、ドウダンツツジの生垣であること、花を残したいこと、希望の高さを伝え、花後の5〜6月に作業日を決めてください。
    </p>,
    <p key="2">
      生垣の刈り込みの基本は<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、ツツジ類の花後の剪定は<Link href="/tsutsuji-satsuki-teire/" className={A}>ツツジ・サツキの剪定時期</Link>、生垣に向く木の比較は<Link href="/ikegaki-shurui/" className={A}>生垣に向く木の種類</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。大和市の回答の出典は<a href={YAMATO} className={A} target="_blank" rel="noopener noreferrer">大和市 園芸相談の事例《庭木》（PDF）</a>、特性表の出典は<a href={SETAGAYA_LIST} className={A} target="_blank" rel="noopener noreferrer">世田谷区「建築にともなう緑化のための植栽ガイドブック」掲載樹種特性表（PDF）</a>（いずれも2026年11月22日確認）です。
    </p>,
  ],
  ctaHeading: "花を残したいことと希望の高さを伝え、花後に作業日を決める",
  ctaText:
    "ドウダンツツジの生垣は、花後の5〜6月に刈り込み、夏の終わりからは深く切らないことが基本です。長い生垣は業者と相談すると安心です。",
  faqHeading: "ドウダンツツジの生垣のよくある質問",
  faqs: [
    {
      q: "ドウダンツツジの生垣はいつ刈り込めばよいですか？",
      a: "熊本市の公共施設樹木の維持管理ガイドラインでは5〜6月、芦屋市の街路樹等維持管理基本書では6月・年1回、大和市の園芸相談では6月と10月（10月は軽く徒長枝を除くのみ）としています。",
    },
    {
      q: "秋に刈り込むと花は咲きませんか？",
      a: "熊本市の表では花芽分化期を8月〜9月、芦屋市の表では8月上旬〜8月中旬とし、花芽の位置を頂芽・側芽としています。秋に深く刈り込むと、できた花芽を切り落とすことになります。",
    },
    {
      q: "生垣の枝を密にするにはどうすればよいですか？",
      a: "熊本市の表では、枝を密生させるには刈込み回数を少し多めに行うとよいとしています。花芽ができる8月ごろより前に回数を分けて刈り込みます。",
    },
    {
      q: "ドウダンツツジは日当たりが必要ですか？",
      a: "世田谷区の植栽ガイドブックの特性表では、ドウダンツツジの日照の欄を「◎」（日照を好む）としています。",
    },
  ],
  related: [
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込み",
      desc: "時期と刈り方の基本",
    },
    {
      href: "/tsutsuji-satsuki-teire/",
      label: "ツツジ・サツキの剪定時期",
      desc: "花後に剪定するツツジ類",
    },
    {
      href: "/ikegaki-shurui/",
      label: "生垣に向く木の種類",
      desc: "4市の資料に共通する樹種",
    },
    {
      href: "/kaboku-kaika-teire/",
      label: "花木の開花を良くする手入れ",
      desc: "花芽と剪定時期の考え方",
    },
    { href: "/hakuchouge-ikegaki/", label: "ハクチョウゲの生垣と刈り込み", desc: "同じ低い生垣に使う常緑低木" },
  ],
};

export default function DodantsutsujiIkegakiPage() {
  return <KnowArticle data={data} />;
}
