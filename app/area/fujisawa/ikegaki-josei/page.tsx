import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/fujisawa/ikegaki-josei/";
const A = "text-[#2D7F3E] underline";
const NAEGI = "https://nagakubokouen.jp/green/?sec=sapling";
const NAEGI_CITY = "https://www.city.fujisawa.kanagawa.jp/midori/ikegaki.html";
const HOZON = "https://www.city.fujisawa.kanagawa.jp/midori/machizukuri/kankyo/shizenhogo/hozonjurin.html";
const SHOREI = "https://www.city.fujisawa.kanagawa.jp/midori/machizukuri/kankyo/shizenhogo/midorinohozensyoreikin.html";

export const metadata: Metadata = {
  title: {
    absolute: "藤沢市の生垣用苗木の無償交付と保存生垣・保存樹木の奨励金｜1mにつき3本・最長20m、受付は年3回｜お庭のミカタ",
  },
  description:
    "藤沢市は道路に面した新しい生垣に苗木を無償で交付しています（1mにつき3本、最長20mで60本まで、受付は年3回）。長さ10m以上の保存生垣や保存樹木には奨励金があります。条件と申請の流れを整理します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "藤沢市の生垣用苗木の無償交付と保存生垣・保存樹木の奨励金",
    description:
      "藤沢市の生垣設置用苗木交付制度（1mにつき3本・最長20m）と、保存生垣・保存樹木の緑の保全奨励金を市の公式情報をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/fujisawa/ikegaki-josei",
  published: "2026-11-03",
  updatedLabel: "2026年11月3日",
  parent: { href: "/area/fujisawa/", label: "藤沢の庭業者" },
  badge: "藤沢市の地域情報",
  h1: "藤沢市の生垣用苗木の無償交付と保存生垣・保存樹木の奨励金｜1mにつき3本・最長20m、受付は年3回",
  breadcrumbLabel: "藤沢市の生垣用苗木の交付と保存生垣の奨励金",
  tagChips: ["藤沢市", "生垣", "苗木", "保存樹木", "奨励金"],
  ldHeadline: "藤沢市の生垣用苗木の無償交付と保存生垣・保存樹木の奨励金",
  ldDescription:
    "藤沢市の生垣設置用苗木交付制度の交付条件・交付内容・受付時期と、保存樹木・保存生垣の指定条件と緑の保全奨励金の額を、市と長久保公園の公式ページをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        藤沢市は、生垣の設置に協力する方を応援するため、<Hl>年に3回受付を行ったうえで、生垣用の苗木を無償で交付</Hl>しています
        （出典：<a href={NAEGI_CITY} className={A} target="_blank" rel="noopener noreferrer">藤沢市「生垣設置用苗木交付制度のご案内」</a>、2026年11月3日確認）。
        詳細は藤沢市長久保公園都市緑化植物園のページで案内されています。
      </p>
      <p>
        また、長さ10m以上の生垣や一定の大きさの樹木は「保存生垣」「保存樹木」に指定でき、指定されると奨励金が交付されます。
        本記事では、新しく生垣をつくる場合と、すでにある生垣・大きな木を保存する場合に分けて、公式ページの記載を整理します。
      </p>
    </>
  ),
  conclusionTitle: "新しく道路沿いに生垣をつくるなら苗木の無償交付（1mにつき3本・最長20m）、長さ10m以上の生垣を保つなら保存生垣の奨励金が使えます。",
  conclusionBody: (
    <p>
      苗木の交付条件は、<Hl>自己居住用の専用住宅の敷地内で、道路に面した箇所（または道路に面した駐車場の周囲）に、連続して3m以上（最高20m）植えること</Hl>などです。
      交付は1mにつき3本、最長20mで60本までで、運搬・植え付けは申請者が行います。
      申請の受付は毎年、1月下旬〜2月上旬、5月、9月の年3回です
      （出典：<a href={NAEGI} className={A} target="_blank" rel="noopener noreferrer">藤沢市長久保公園 都市緑化植物園「記念樹事業」</a>、2026年11月3日確認）。
    </p>
  ),
  basicsHeading: "苗木の交付を受けるための7つの条件",
  basicsLabel: "条件",
  basics: [
    { title: "新たに設ける生け垣", desc: "藤沢市内に新たに設ける生け垣であることが条件です。補植する場合は対象外です。" },
    { title: "自己居住用の専用住宅", desc: "自己居住用の専用住宅の敷地内に設置するものであることが条件です。" },
    { title: "道路に面した場所", desc: "道路に面した箇所、または道路に面した駐車場の周囲に植栽するものであることが条件です。" },
    { title: "連続して3m以上", desc: "植える場所が連続して3m以上あることが条件です（最高20m）。" },
    { title: "他の外柵と併用しない", desc: "他の外柵との併用でないことが条件です（フェンス等簡易なものを除く）。" },
    { title: "5年以上保存できる", desc: "5年以上保存できることが条件です。" },
    { title: "初めての交付", desc: "以前にこの制度により交付を受けていないことが条件です。" },
  ],
  stepsHeading: "苗木を受け取って植えるまでの手順（4つの手順）",
  steps: [
    {
      title: "植える延長を測っておく",
      desc: "申込の際に簡単な図面を書くため、おおよその植栽延長を調べてから長久保公園に行きます。申込は印鑑を持参します。",
    },
    {
      title: "受付期間に申し込む",
      desc: "受付は1月下旬〜2月上旬、5月、9月の年3回で、各回2週間程度です。詳しい期間はホームページのトピックスや広報ふじさわで案内されます。申込の後に現場調査等が行われます。",
    },
    {
      title: "交付日に苗木を受け取る",
      desc: "交付日は交付決定後に通知され、原則として3月末・6月末・10月末の土曜日・日曜日です。交付場所は長久保公園都市緑化植物園です。",
    },
    {
      title: "1か月以内に完了届を出す",
      desc: "運搬・植え付けは申請者が行い、交付後1か月以内に完了届と植え付け後の写真を提出します。",
    },
  ],
  ngHeading: "苗木の交付で避けたいこと",
  ngs: [
    { title: "既存の生垣の補植には使いません", desc: "対象は新たに設ける生け垣で、補植する場合は対象外です。" },
    { title: "ブロック塀など他の外柵と組み合わせません", desc: "他の外柵との併用は対象外です（フェンス等簡易なものを除く）。" },
    { title: "受付期間を逃しません", desc: "受付は年3回、各回2週間程度です。植えたい時期から逆算して申し込みます。" },
  ],
  proHeading: "保存生垣・保存樹木の奨励金と、業者に頼む場合の確認点",
  proParas: [
    <p key="1">
      藤沢市は、<Hl>生垣の長さが10m以上</Hl>で枝葉が密に繁茂し常に刈り込みなど手入れがされているものを保存生垣に、
      幹の周囲が1m以上または高さが10m以上などの樹木を保存樹木に指定しています（いずれも原則として10年以上の保存指定）
      （出典：<a href={HOZON} className={A} target="_blank" rel="noopener noreferrer">藤沢市「保存樹木・保存樹林・保存生垣」</a>、2026年11月3日確認）。
    </p>,
    <p key="2">
      緑の保全奨励金は、保存生垣が<Hl>10m以上20m未満で5,000円、20m以上30m未満で10,000円、30m以上で15,000円</Hl>、
      保存樹木は1本目が2,000円で1本増すごとに1,000円を加算（限度額は1人30,000円）です。申請書は自宅に郵送され、写真を添えて提出します
      （出典：<a href={SHOREI} className={A} target="_blank" rel="noopener noreferrer">藤沢市「緑の保全奨励金」</a>、2026年11月3日確認）。
    </p>,
    <p key="3">
      苗木の植え付けは申請者が行う制度ですが、植え付けを業者に頼む場合は、交付日（土曜日・日曜日）に合わせて日程を組めるか、
      完了届に使う写真を撮ってもらえるかを確認します。生垣の手入れは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、
      藤沢で依頼できる庭業者は<Link href="/area/fujisawa/" className={A}>藤沢の庭業者おすすめ</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "受付期間に合わせて、植える延長と樹種を決めておく",
  ctaText:
    "苗木の交付は年3回の受付です。植える延長（3m以上・最高20m）と、交付樹種から選ぶ1種類を決めてから申し込むと手続きが進めやすくなります。",
  faqHeading: "藤沢市の生垣用苗木・保存生垣に関するよくある質問",
  faqs: [
    { q: "苗木は何本もらえますか？", a: "1mにつき3本、最長20mで60本までです。苗は高さ約1.0m前後、葉張り30cm前後とされています。" },
    { q: "どの樹種を選べますか？", a: "長久保公園のページでは、イヌツゲ、サザンカ、ヒイラギモクセイ、ウバメガシ、ドウダンツツジ、ベニバナトキワマンサクから1種類を選ぶ形で紹介されています。" },
    { q: "申込はいつですか？", a: "毎年、1月下旬〜2月上旬、5月、9月の年3回です。各回2週間程度で、詳しい期間は長久保公園のトピックスや広報ふじさわで案内されます。" },
    { q: "保存生垣の奨励金はいくらですか？", a: "長さにより、10m以上20m未満は5,000円、20m以上30m未満は10,000円、30m以上は15,000円です。" },
  ],
  related: [
    { href: "/area/fujisawa/", label: "藤沢の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/area/fujisawa/senteieda/", label: "藤沢市の剪定枝の出し方", desc: "刈り込んだ枝の処分" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込み", desc: "生け垣の形を保つ手入れ" },
    { href: "/area/sagamihara/ikegaki-josei/", label: "相模原市の生垣設置奨励金", desc: "他の市の生垣の助成制度" },
  ],
};

export default function FujisawaIkegakiJoseiPage() {
  return <KnowArticle data={data} />;
}
