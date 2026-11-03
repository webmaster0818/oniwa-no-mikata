import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/toyonaka/ikegaki-josei/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.toyonaka.osaka.jp/machi/kouen_midori/shizen/ikegaki.html";
const HOGO = "https://www.city.toyonaka.osaka.jp/machi/kouen_midori/shizen/fuutihogojyumatsuku.html";

export const metadata: Metadata = {
  title: {
    absolute: "豊中市の生垣緑化助成金｜設置費用の5分の4（上限10万円）、保護樹の助成と松くい虫で枯れた松の伐採助成｜お庭のミカタ",
  },
  description:
    "豊中市は道路に面した延長2m以上の生垣の設置費用の5分の4（沿道緑化と併せて上限10万円）を助成しています。設置前の申込が必要です。保護樹の助成、松くい虫で枯れた松の伐採助成もあわせて整理します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "豊中市の生垣緑化助成金｜設置費用の5分の4・上限10万円",
    description:
      "豊中市の生垣緑化・沿道緑化助成金の対象基準と助成額、保護樹の助成、松くい虫防除事業助成を市の公式ページをもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/toyonaka/ikegaki-josei",
  published: "2026-11-03",
  updatedLabel: "2026年11月3日",
  parent: { href: "/area/toyonaka/", label: "豊中の庭業者" },
  badge: "豊中市の地域情報",
  h1: "豊中市の生垣緑化助成金｜設置費用の5分の4（上限10万円）、保護樹の助成と松くい虫で枯れた松の伐採助成",
  breadcrumbLabel: "豊中市の生垣緑化助成金",
  tagChips: ["豊中市", "生垣", "助成金", "保護樹", "松くい虫"],
  ldHeadline: "豊中市の生垣緑化助成金｜設置費用の5分の4・上限10万円",
  ldDescription:
    "豊中市の生垣緑化・沿道緑化助成金の対象基準・助成額・申込の注意点と、保護樹・保護樹林の助成、松くい虫防除事業助成を、市の公式ページをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        豊中市は、地域の身近な緑を創出するため、生垣の設置や沿道に樹木を植える市民に費用の一部を助成する「生垣緑化・沿道緑化助成金交付制度」を設けています。
        助成額は<Hl>生垣が設置費用の5分の4、沿道緑化が設置費用の2分の1で、生垣と沿道緑化を併せて上限10万円</Hl>です
        （出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">豊中市「生垣緑化・沿道緑化助成金について」</a>、更新日 2023年12月19日、2026年11月3日確認）。
      </p>
      <p>
        市は保護樹・保護樹林の指定と助成、松くい虫で枯れた松の伐採への助成も行っています。本記事では、生垣をつくる場合と、大きな木や松を守る・切る場合に分けて整理します。
      </p>
    </>
  ),
  conclusionTitle: "道路に面した延長2m以上の生垣は、設置費用の5分の4（上限10万円）が助成されます。必ず設置する前に申し込みます。",
  conclusionBody: (
    <p>
      対象者は、基準に全て該当する生垣を設置しようとする、その土地に居住又は事業を営む方です（国・地方公共団体などの公的機関、宅地建物の分譲を業とする者は除く）。
      申込には<Hl>工事場所見取図、植栽計画平面図、見積書など工事金額の概算の根拠となる資料、設置前の写真</Hl>が必要で、オンラインによる電子申込もできます。
    </p>
  ),
  basicsHeading: "対象となる生垣の6つの基準",
  basicsLabel: "基準",
  basics: [
    { title: "市内の民有地につくる", desc: "本市区域内の住宅用地、または事業所用地等の民有地につくられる生垣が対象です。" },
    { title: "道路に面して外から見える", desc: "道路に面した部分で、外部から眺望のできることが条件です。" },
    { title: "延長2m以上", desc: "生垣の延長が2m以上あることが条件です。" },
    { title: "高さは原則1m以上", desc: "樹木の高さは原則1m以上です。" },
    { title: "1m当たり概ね3本程度", desc: "1m当たり概ね3本程度植樹することが基準です。" },
    { title: "5年以上保存する", desc: "5年以上保存、育成管理できるものが対象です。" },
  ],
  stepsHeading: "生垣緑化助成金を受けるまでの手順（3つの手順）",
  steps: [
    { title: "業者に見積もりと図面を依頼する", desc: "植栽計画平面図と、工事金額の概算の根拠となる見積書などを用意します。" },
    { title: "設置する前に申し込む", desc: "工事場所見取図、植栽計画平面図、見積書など、植栽場所がわかる設置前の写真を添えて申し込みます。電子申込もできます。" },
    { title: "詳しい手続きは交付要領で確認する", desc: "市のページに案内チラシと「生垣緑化・沿道緑化助成金交付要領」（PDF）が掲載されています。申込書等も同ページから案内されています。" },
  ],
  ngHeading: "生垣緑化助成金で避けたいこと",
  ngs: [
    { title: "設置してから申し込みません", desc: "市のページでは、必ず生垣等を設置される前に申し込むよう案内されています。" },
    { title: "道路から見えない場所に植えません", desc: "道路に面した部分で外部から眺望のできることが条件です。" },
    { title: "設置前の写真を撮り忘れません", desc: "植栽場所がわかる設置前の写真が申込に必要です。" },
  ],
  proHeading: "保護樹の助成と、松くい虫で枯れた松の伐採助成",
  proParas: [
    <p key="1">
      豊中市は、1.5mの高さの幹の周囲が1.5m以上、高さが15m以上などの樹木を保護樹に指定し、<Hl>保護樹1本につき毎年10,000円（初年度は5,000円、所有者ごとに50,000円が上限）</Hl>を助成しています。
      延長30m以上の生垣も助成の対象で、30m以上100m未満は20,000円、100m以上は40,000円です
      （出典：<a href={HOGO} className={A} target="_blank" rel="noopener noreferrer">豊中市「保護樹・松くい虫防除制度のご案内」</a>、更新日 2026年8月31日、2026年11月3日確認）。
    </p>,
    <p key="2">
      同じページでは、枯死した松をカミキリムシが飛び出す前に伐採するための<Hl>松くい虫防除事業助成</Hl>も案内されています。
      伐採する松の目通り周囲が50cm未満は1本2,000円、50cm以上70cm未満は3,000円、70cm以上100cm未満は4,000円、100cm以上120cm未満は5,000円、120cm以上は6,000円です。
      松くい虫の予防と枯れた松の扱いは<Link href="/matsukuimushi-yobo/" className={A}>庭の松の松くい虫対策</Link>にまとめています。
    </p>,
    <p key="3">
      生垣の手入れは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、豊中で依頼できる庭業者は
      <Link href="/area/toyonaka/" className={A}>豊中の庭業者おすすめ</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "見積もりと図面を揃えてから、設置前に申し込む",
  ctaText:
    "生垣の助成は設置前の申込が必要です。延長・本数・高さが分かる植栽計画平面図と見積書を業者に用意してもらい、設置前の写真を撮ってから申し込んでください。",
  faqHeading: "豊中市の生垣緑化助成金に関するよくある質問",
  faqs: [
    { q: "助成額はいくらですか？", a: "生垣は設置費用の5分の4、沿道緑化は設置費用の2分の1で、生垣と沿道緑化を併せて上限10万円です。" },
    { q: "どのくらいの長さから対象ですか？", a: "生垣の延長が2m以上あることが基準です。道路に面した部分で、外部から眺望できることも条件です。" },
    { q: "申込はいつまでですか？", a: "市のページに受付期間の記載はありません。必ず設置する前に申し込むよう案内されています。詳しくは公園みどり推進課にお問い合わせください。" },
    { q: "松くい虫で枯れた松を切る費用は助成されますか？", a: "松くい虫防除事業助成があり、伐採する松の目通り周囲に応じて1本2,000円〜6,000円です。" },
  ],
  related: [
    { href: "/area/toyonaka/", label: "豊中の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/matsukuimushi-yobo/", label: "庭の松の松くい虫対策", desc: "樹幹注入の時期と枯れた松の扱い" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込み", desc: "生け垣の形を保つ手入れ" },
    { href: "/area/takatsuki/ikegaki-josei/", label: "高槻市の生け垣設置工事助成金", desc: "近隣の市の生垣の助成制度" },
  ],
};

export default function ToyonakaIkegakiJoseiPage() {
  return <KnowArticle data={data} />;
}
