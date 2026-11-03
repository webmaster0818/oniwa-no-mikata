import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/matsudo/ikegaki-josei/";
const A = "text-[#2D7F3E] underline";
const KIKIN = "https://midori-kikin.jp/subsidy/";
const PDF = "https://midori-kikin.jp/images/subsidyPDF02-202505.pdf";
const HOGO = "https://www.city.matsudo.chiba.jp/shisei/toshiseubi/midori/hozenjyurinchiku.html";

export const metadata: Metadata = {
  title: {
    absolute: "松戸市の生け垣づくり助成金｜経費の2分の1（1m1万円・1件10万円まで）、延長5m以上・幅員4m以上の道路沿い｜お庭のミカタ",
  },
  description:
    "松戸市では松戸みどりと花の基金が、新しく生け垣をつくる・ブロック塀から改修する方に経費の2分の1（1mにつき1万円、1件10万円まで）を助成しています。申請前に連絡が必要です。保護樹木の助成も整理します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "松戸市の生け垣づくり助成金｜経費の2分の1・1件10万円まで",
    description:
      "松戸みどりと花の基金の生け垣づくり助成金の要件と助成額、松戸市の保護樹木の助成を公式情報をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/matsudo/ikegaki-josei",
  published: "2026-11-03",
  updatedLabel: "2026年11月3日",
  parent: { href: "/area/matsudo/", label: "松戸の庭業者" },
  badge: "松戸市の地域情報",
  h1: "松戸市の生け垣づくり助成金｜経費の2分の1（1m1万円・1件10万円まで）、延長5m以上・幅員4m以上の道路沿い",
  breadcrumbLabel: "松戸市の生け垣づくり助成金",
  tagChips: ["松戸市", "生け垣", "助成金", "ブロック塀", "保護樹木"],
  ldHeadline: "松戸市の生け垣づくり助成金｜経費の2分の1・1件10万円まで",
  ldDescription:
    "公益財団法人松戸みどりと花の基金の生け垣づくり助成金の要件・助成額・申請前の連絡と、松戸市の保護樹木の助成を、公式ページとPDFをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        公益財団法人松戸みどりと花の基金は、<Hl>市内で新たに生け垣を設置する、またはブロック塀から生け垣に改修をする方</Hl>に、経費の一部を助成しています
        （出典：<a href={KIKIN} className={A} target="_blank" rel="noopener noreferrer">松戸みどりと花の基金「支援事業」</a>、2026年11月3日確認）。
      </p>
      <p>
        助成額は、生け垣の設置費・設置に係る既存構造物の撤去費・既存生け垣の改修費の<Hl>2分の1に相当する額で、延長1mにつき10,000円、申請1件当たり100,000円が限度</Hl>です
        （出典：<a href={PDF} className={A} target="_blank" rel="noopener noreferrer">松戸みどりと花の基金「助成の採否の基準及び助成額」（PDF）</a>、2026年11月3日確認）。
      </p>
    </>
  ),
  conclusionTitle: "幅員4m以上の道路に面した延長5m以上の生け垣は、経費の2分の1（1m1万円・1件10万円まで）が助成されます。申請の前に必ず基金へ連絡します。",
  conclusionBody: (
    <p>
      基金のページでは、助成金の交付申請には要件を全て満たす必要があり、<Hl>基金の職員が現地確認を行うため、申請の前に必ず連絡する</Hl>よう案内されています。
      問い合わせ先の電話番号は基金のページに記載されています（047-710-2851）。
    </p>
  ),
  basicsHeading: "助成を受けるための主な要件",
  basicsLabel: "要件",
  basics: [
    { title: "市内で新たに設置・改修する", desc: "市内に住所を有する個人、又は市内に事務所を有する法人が、市の区域において新たに設置または改修するものが対象です。" },
    { title: "幅員4m以上の道路に面する", desc: "幅員4メートル以上の道路に面しているか、同道路に接する敷地境界に面し、同道路から容易に目視可能であることが要件です。" },
    { title: "延長5m以上", desc: "設置または改修する生け垣の延長が5メートル以上であることが要件です。" },
    { title: "1m当たり2本以上の列植", desc: "1メートル当たり2本以上の列植で、健全な樹木または苗木を使います。" },
    { title: "びゃくしん類の規制に注意", desc: "松戸市なし赤星病防止条例に基づく、びゃくしん類の植栽規制に抵触しない樹木を使います。" },
    { title: "5年間は撤去・移設しない", desc: "助成を受けて設置または改修した生け垣は、植栽から5年間経過するまで撤去、移設等を行わないことが要件です。" },
  ],
  stepsHeading: "生け垣づくり助成金を受けるまでの手順（3つの手順）",
  steps: [
    { title: "基金に連絡する", desc: "職員が現地確認を行うため、申請の前に必ず基金に連絡します。" },
    { title: "業者に見積もりを依頼する", desc: "生け垣の設置費、既存構造物の撤去費、既存生け垣の改修費を分けた見積もりにしてもらいます。" },
    { title: "交付申請書（生垣用）を提出する", desc: "基金のページに助成金交付要綱、助成の採否の基準及び助成額、助成金交付に関する内規、交付申請書（生垣用）と記載例が掲載されています。" },
  ],
  ngHeading: "生け垣づくり助成金で避けたいこと",
  ngs: [
    { title: "連絡せずに申請・着工しません", desc: "現地確認があるため、申請の前に必ず基金へ連絡します。" },
    { title: "背の高い塀の内側に植えません", desc: "ブロック塀など通風の悪い構造物の内側に設置する場合は、構造物の高さが50cm以下で、生け垣がそれより1m以上高いことが要件です。" },
    { title: "改修は設置から5年未満の生け垣で申請しません", desc: "既存生け垣の改修に係る助成は、既存の生け垣が設置から5年以上経過していることが要件です。" },
  ],
  proHeading: "保護樹木の助成と、業者に頼む場合の確認点",
  proParas: [
    <p key="1">
      松戸市は、地域で親しまれているシンボルとなる樹木を条例に基づく「保護樹木」に指定し、<Hl>1本につき年額2,000円</Hl>を助成しています。
      対象は樹形が優れているもの、幹周囲が1m以上・高さ10m以上などで、指定期間は3年以上（3年毎に更新）です
      （出典：<a href={HOGO} className={A} target="_blank" rel="noopener noreferrer">松戸市「助成制度（保護樹木・保全樹林地区・特別保全樹林地区）」</a>、更新日 2024年10月31日、2026年11月3日確認）。
    </p>,
    <p key="2">
      生け垣を業者に頼む場合は、<Hl>延長（5m以上）と植える本数（1mあたり2本以上）、樹種</Hl>が見積書で分かるようにしてもらうと、要件の確認が進めやすくなります。
      生垣の手入れは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、松戸で依頼できる庭業者は
      <Link href="/area/matsudo/" className={A}>松戸の庭業者おすすめ</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "申請の前に、基金へ連絡して現地確認を受ける",
  ctaText:
    "松戸みどりと花の基金の生け垣づくり助成金は、職員の現地確認があります。延長・本数・樹種が分かる見積もりを用意し、申請の前に基金へ連絡してください。",
  faqHeading: "松戸市の生け垣づくり助成金に関するよくある質問",
  faqs: [
    { q: "助成額はいくらですか？", a: "設置費などの2分の1に相当する額で、延長1mにつき10,000円、申請1件当たり100,000円が限度です。" },
    { q: "ブロック塀を生け垣に替える場合も対象ですか？", a: "基金のページでは、ブロック塀から生け垣に改修をする方も対象とされ、設置に係る既存構造物の撤去費も助成の対象経費に含まれています。" },
    { q: "申請先はどこですか？", a: "公益財団法人松戸みどりと花の基金です。申請の前に必ず連絡するよう案内されています。" },
    { q: "保護樹木の助成はいくらですか？", a: "松戸市の保護樹木は、1本につき年額2,000円が助成されます。" },
  ],
  related: [
    { href: "/area/matsudo/", label: "松戸の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/area/matsudo/senteieda/", label: "松戸市の剪定枝の出し方", desc: "刈り込んだ枝の処分" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込み", desc: "生け垣の形を保つ手入れ" },
    { href: "/area/ichikawa/ikegaki-josei/", label: "市川市の生垣助成", desc: "近隣の市の生垣の助成制度" },
  ],
};

export default function MatsudoIkegakiJoseiPage() {
  return <KnowArticle data={data} />;
}
