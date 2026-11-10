import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/fuchu/shitei-jumoku/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.fuchu.tokyo.jp/kurashi/sekatu/shizenhogo_seibutsutayousei/shiteijumoku.html";
const YOKO = "https://www.city.fuchu.tokyo.jp/kurashi/sekatu/shizenhogo_seibutsutayousei/shiteijumoku.files/youkou.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "府中市（東京都）の指定樹木奨励金｜1本年額4,000円、住居の敷地内の個人所有の大木が対象｜お庭のミカタ",
  },
  description:
    "東京都府中市は、幹周り1.5m以上または高さ10m以上の樹木を指定樹木とし、所有者に1本につき年額4,000円の奨励金を交付しています（1人30本まで）。対象の条件と所有者の届出を市の公式ページと交付要綱をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "府中市（東京都）の指定樹木奨励金｜対象の条件と奨励金の額",
    description:
      "東京都府中市の指定樹木奨励金（1本年額4,000円）の対象、指定の手続き、所有者の届出を市の公式ページと交付要綱をもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/fuchu/shitei-jumoku",
  published: "2026-11-10",
  updatedLabel: "2026年11月10日",
  parent: { href: "/area/fuchu/", label: "府中の庭業者" },
  badge: "府中市（東京都）の地域情報",
  h1: "府中市（東京都）の指定樹木奨励金｜1本年額4,000円、住居の敷地内の個人所有の大木が対象",
  breadcrumbLabel: "府中市の指定樹木奨励金",
  tagChips: ["府中市", "東京都", "指定樹木", "奨励金", "環境政策課"],
  ldHeadline: "府中市（東京都）の指定樹木奨励金｜対象の条件と奨励金の額",
  ldDescription:
    "東京都府中市の指定樹木奨励金制度について、対象（幹周り1.5m以上または高さ10m以上、所有者の住居の敷地内、個人所有）、1人30本までの指定、1本年額4,000円の奨励金、所有者の義務を市の公式ページと府中市指定樹木奨励金交付要綱をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        東京都府中市は、緑を保存していくために指定樹木の奨励金制度を設けています。指定樹木の所有者には、<Hl>1本につき年額4,000円</Hl>の奨励金が交付されます
        （出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">府中市「指定樹木の奨励金制度」</a>、最終更新日 2019年4月1日、2026年11月10日確認）。
      </p>
      <p>
        自宅の庭に大きな木がある場合、剪定や伐採を考える前に、指定の対象になるかを確かめておくと判断しやすくなります。本記事では、対象の条件、指定の手続き、所有者の義務を、市の公式ページと交付要綱の記載に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "幹周り1.5m以上または高さ10m以上で、住居の敷地内にある個人所有の樹木が対象。奨励金は1本年額4,000円（1人30本まで）です。",
  conclusionBody: (
    <p>
      対象は、<Hl>健全で樹容が美観上特に優れ、1.5メートルの高さにおける幹の周囲が1.5メートル以上、または高さが10メートル以上</Hl>の樹木で、管理が適正に行われ、<Hl>所有者の住居の敷地内にあり、個人の所有物（共有物を除く）</Hl>であることが条件です。指定は所有者の申請によって行われ、申請を行う者1人につき30本が限度です（出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">府中市「指定樹木の奨励金制度」</a>、<a href={YOKO} className={A} target="_blank" rel="noopener noreferrer">府中市指定樹木奨励金交付要綱</a>）。
    </p>
  ),
  basicsHeading: "府中市の指定樹木奨励金で押さえる4つのポイント",
  basicsLabel: "ポイント",
  basics: [
    {
      title: "幹周り1.5m以上または高さ10m以上",
      desc: "健全で樹容が美観上特に優れていて、1.5メートルの高さにおける幹の周囲が1.5メートル以上、または高さが10メートル以上のいずれかに該当する樹木が対象です。",
    },
    {
      title: "住居の敷地内にある個人所有の木",
      desc: "所有者の住居の敷地内にあり、個人の所有物（共有物を除く）であることが条件です。国・地方公共団体・法人その他の団体が所有している樹木や、営業の用に供されるものは指定されません。",
    },
    {
      title: "奨励金は1本年額4,000円・1人30本まで",
      desc: "指定樹木1本につき年額4,000円の奨励金が交付されます。指定する本数は、申請を行う者1人につき30本が限度です。",
    },
    {
      title: "標識の取り付けと届出",
      desc: "所有者は市が交付する標識を指定樹木に取り付け、適切な管理に努めます。滅失・枯死したときや所有者が変わったときは、届出書で市に届け出ます。",
    },
  ],
  stepsHeading: "府中市で大きな木の指定や手入れを考えるときの手順（3つの手順）",
  steps: [
    {
      title: "幹周りと高さを測る",
      desc: "1.5メートルの高さで幹の周囲を測り、1.5メートル以上あるか、または高さが10メートル以上あるかを確かめます。",
    },
    {
      title: "環境政策課に申請・問い合わせる",
      desc: "指定は所有者からの申請によって行われます。担当は生活環境部 環境政策課です（市役所代表 042-364-4111）。",
    },
    {
      title: "奨励金を申請し、手入れの計画を立てる",
      desc: "奨励金の交付を受けるには、市が別に定める日までに申請書で申請します。残す木の手入れ方法や時期は業者と相談します。",
    },
  ],
  ngHeading: "府中市で指定樹木を手入れするときに避けたいこと",
  ngs: [
    {
      title: "滅失や枯死を届け出ずにおきません",
      desc: "指定樹木が滅失し、または枯死したときは、速やかに届出書で市に届け出ることが要綱で定められています。",
    },
    {
      title: "奨励金を手入れ費用の全額と考えません",
      desc: "奨励金は1本につき年額4,000円です。剪定などの費用は別に見込んでおきます。",
    },
    {
      title: "共有や法人所有の木を対象と考えません",
      desc: "対象は個人の所有物（共有物を除く）で、所有者の住居の敷地内にある樹木です。",
    },
  ],
  proHeading: "業者に頼む場合の確認点",
  proParas: [
    <p key="1">
      幹周り1.5m・高さ10m級の木の手入れは、高所作業や大量の枝の処分を伴います。依頼するときは<Hl>作業範囲と枝の処分が見積もりに含まれるか</Hl>を確かめてください。指定樹木を伐採する場合は、伐採後に滅失の届出が必要になることも踏まえて計画します。
    </p>,
    <p key="2">
      剪定で出た枝の出し方は<Link href="/area/fuchu/senteieda/" className={A}>府中市の剪定枝の出し方</Link>、東京都内の区市町村の制度の一覧は<Link href="/area/tokyo/hogo-jumoku-ikegaki-josei/" className={A}>東京都の区市町村の生垣・保護樹木の助成一覧</Link>、府中で依頼できる庭業者は<Link href="/area/fuchu/" className={A}>府中の庭業者おすすめ</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "大木の手入れは、作業範囲と処分を確かめて見積もりを取る",
  ctaText:
    "高木の剪定は、足場や高所作業、処分の量で総額が変わります。指定の有無を確かめたうえで、作業範囲と処分が含まれる見積もりを比べてください。",
  faqHeading: "府中市の指定樹木奨励金に関するよくある質問",
  faqs: [
    {
      q: "府中市の指定樹木の奨励金はいくらですか？",
      a: "指定樹木1本につき年額4,000円です。",
    },
    {
      q: "何本まで指定できますか？",
      a: "申請を行う者1人につき30本が限度です。",
    },
    {
      q: "どんな木が対象になりますか？",
      a: "健全で樹容が美観上特に優れ、1.5メートルの高さの幹の周囲が1.5メートル以上、または高さ10メートル以上の樹木で、所有者の住居の敷地内にある個人所有（共有物を除く）のものです。",
    },
    {
      q: "担当はどこですか？",
      a: "府中市 生活環境部 環境政策課です（市役所代表 042-364-4111）。",
    },
  ],
  related: [
    { href: "/area/fuchu/", label: "府中の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/area/fuchu/senteieda/", label: "府中市の剪定枝の出し方", desc: "剪定枝の分別と出し方" },
    { href: "/area/soka/hozon-jumoku/", label: "草加市の保存樹木・保存生垣", desc: "他の市の保存樹木の補助" },
    { href: "/niwaki-bassai-kyoka/", label: "庭木の伐採に許可・届出は必要か", desc: "伐採前に確認したい届出と許可" },
  ],
};

export default function FuchuShiteiJumokuPage() {
  return <KnowArticle data={data} />;
}
