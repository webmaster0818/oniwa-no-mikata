import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/fujisawa/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_SENTEI = "https://www.city.fujisawa.kanagawa.jp/kankyo-j/kurashi/gomi/wakekata/dasikata/h30sentei.html";
const SRC_KUSAHA = "https://www.city.fujisawa.kanagawa.jp/kankyo-j/kurashi/gomi/wakekata/dasikata/kusaha.html";
const SRC_MOCHIKOMI = "https://www.city.fujisawa.kanagawa.jp/ishinaza/20161129.html";
const SRC_SHIGENKA = "https://www.city.fujisawa.kanagawa.jp/kankyou-s/kurashi/gomi/recycle/recycle/senteeda.html";

export const metadata: Metadata = {
  title: {
    absolute: "藤沢市の剪定枝の出し方｜太さ1cm以上は予約制の無料戸別収集、長さ1.5m未満｜お庭のミカタ",
  },
  description:
    "藤沢市の剪定枝の出し方を市の公式ページ（2026年11月1日確認）をもとに整理しました。太さ1cm以上の枝・幹・根は予約制で無料の各戸収集（長さ1.5m未満・束の直径35cm未満）、太さ1cm未満の枝と草葉は可燃ごみの日に1回10袋以内。竹やシュロの出し方、リサイクルプラザ藤沢への持ち込みも解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "藤沢市の剪定枝の出し方｜予約制の無料戸別収集と、草葉の出し方",
    description:
      "藤沢市では太さ1cm以上の剪定枝は予約制・無料の各戸収集、太さ1cm未満の枝と草葉は可燃ごみの日に出します。基準と予約先を市の公式ページをもとに整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/fujisawa/senteieda",
  published: "2026-11-01",
  updatedLabel: "2026年11月1日",
  parent: { href: "/area/fujisawa/", label: "藤沢の庭業者" },
  badge: "藤沢市の地域情報",
  h1: "藤沢市の剪定枝の出し方｜太さ1cm以上は予約制の無料戸別収集、長さ1.5m未満",
  breadcrumbLabel: "藤沢市の剪定枝の出し方",
  tagChips: ["藤沢市", "剪定枝", "予約制収集", "草葉", "リサイクルプラザ藤沢"],
  ldHeadline: "藤沢市の剪定枝の出し方｜予約制の無料戸別収集と、草葉の出し方",
  ldDescription:
    "藤沢市の剪定枝（太さ1cm以上）の予約制・無料の各戸収集の基準と予約先、太さ1cm未満の枝と草葉の出し方、竹・シュロなど剪定枝として出せないもの、リサイクルプラザ藤沢への持ち込みを市の公式ページをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        藤沢市では、庭木を切った枝の出し方が<Hl>枝の太さ1cmを境に分かれます</Hl>。太さ1cm以上の枝や幹、根は「剪定枝」として予約制・無料の各戸収集、太さ1cm未満の枝と草葉は「草葉・枝」として可燃ごみの収集日に出します（出典：<a href={SRC_SENTEI} className={A} target="_blank" rel="noopener noreferrer">藤沢市「剪定枝の出し方」</a>・<a href={SRC_KUSAHA} className={A} target="_blank" rel="noopener noreferrer">藤沢市「草葉・枝（太さ1cm未満のもの）の出し方」</a>、2026年11月1日確認）。
      </p>
      <p>
        本記事では、剪定枝として出せる枝・根・幹の基準と束ね方、予約の方法、草葉と細い枝の出し方、剪定枝として出せないもの、量が多いときの持ち込み先を、市の公式ページの記載に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "太さ1cm以上の枝は長さ1.5m未満に切り、直径35cm未満に束ねて予約制の無料戸別収集へ。太さ1cm未満の枝と草葉は可燃ごみの日に出します。",
  conclusionBody: (
    <p>
      剪定枝は<Hl>収集の予約をして、指定された日時・場所に出す</Hl>方式で、料金は無料です。予約は株式会社藤沢市興業公社が受け付けており、電話（0466-23-5301、平日8時30分から12時00分・13時00分から17時00分）またはインターネット受付システムで申し込みます。枝は<Hl>長さ1.5m未満</Hl>に切り、余分な枝葉をはらって方向をそろえ、<Hl>直径35cm未満</Hl>に束ねます（出典：<a href={SRC_SENTEI} className={A} target="_blank" rel="noopener noreferrer">藤沢市「剪定枝の出し方」</a>、2026年11月1日確認）。
    </p>
  ),
  basicsHeading: "藤沢市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定枝は太さ1cm以上・長さ1.5m未満の枝",
      desc: "剪定枝として出せるのは、一般家庭から出る植木の枝や幹で、枝の太さが1cm以上・長さが1.5m未満のもの（長いものは1.5m未満に切る）です。あわせて、太さ20cm未満の木の根（大きなものは20cm未満に割る）、太さ50cm未満で長さ60cm未満の幹（太さ50cm以上のものは半分に割る）も出せます。",
    },
    {
      title: "束は直径35cm未満、大人一人で運べる重さに",
      desc: "枝は余分な枝葉をはらって方向をそろえ、直径35cm未満に束ねます。大人一人で運搬できる重さにまとめ、金属類などの不純物が混入しないよう注意し、針金などでは束ねません。木の根は太さ20cm未満に割り、土や砂を取り除きます。",
    },
    {
      title: "収集は予約制・無料の各戸収集",
      desc: "剪定枝の収集は予約制の各戸収集で、収集の予約をして指定された日時・場所に出します。予約・問い合わせ先と収集業務の担当は株式会社藤沢市興業公社で、電話とインターネット受付システムで受け付けています。",
    },
    {
      title: "太さ1cm未満の枝と草葉は可燃ごみの日に1回10袋以内",
      desc: "草葉は透明・半透明袋による収集で、1回の排出量は10袋以内です。太さ1cm未満の枝は長さ50cm以下に切り、束ねて出します。枝や葉にトゲがある場合は「トゲあり」と貼り紙をし、原則として可燃ごみ収集日の朝8時までに出します。戸建て住宅は道路に面した自宅敷地内が出す場所です。",
    },
    {
      title: "竹・シュロ・キョウチクトウ・つる性樹木は可燃ごみ",
      desc: "竹、シュロ、キョウチクトウ、つる性樹木は剪定枝としては出せません。長さ50cm未満にして可燃ごみに出します。",
    },
  ],
  stepsHeading: "藤沢市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝を太さ1cmで仕分ける",
      desc: "太さ1cm以上の枝・幹・根は予約制の剪定枝、太さ1cm未満の枝と草葉は可燃ごみの日の「草葉・枝」に分けます。竹やシュロ、キョウチクトウ、つる性樹木は可燃ごみです。",
    },
    {
      title: "藤沢市興業公社に収集を予約する",
      desc: "電話またはインターネット受付システムで予約し、指定された収集日時と出す場所を確認します。電話の受付は平日のみで、土・日・祝日は休業です。",
    },
    {
      title: "長さ1.5m未満に切り、直径35cm未満に束ねる",
      desc: "余分な枝葉をはらって方向をそろえ、ひもで束ねます。針金は使わず、大人一人で運べる重さにします。幹は太さ50cm未満・長さ60cm未満、根は太さ20cm未満にそろえます。",
    },
    {
      title: "指定された日時・場所に出す",
      desc: "予約で案内された日時に、指定された場所へ出します。細い枝と草葉は、可燃ごみ収集日の朝8時までに別に出します。",
    },
  ],
  ngHeading: "藤沢市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "予約せずに太い枝を可燃ごみの日に出しません",
      desc: "太さ1cm以上の枝は予約制の剪定枝の収集です。可燃ごみの日に出せるのは太さ1cm未満の枝と草葉です。",
    },
    {
      title: "針金で束ねません",
      desc: "金属類などの不純物が混入しないよう、針金などでは束ねないよう市は案内しています。",
    },
    {
      title: "草葉を11袋以上まとめて出しません",
      desc: "草葉の1回の排出量は10袋以内です。草刈りで量が多いときは、収集日を分けて出します。",
    },
    {
      title: "業者が出した枝を家庭の剪定枝として予約しません",
      desc: "予約制の収集は一般家庭から出る植木の枝や幹が対象です。事業所等から発生した剪定枝は民間事業者での処理をお願いすると市は案内しています。業者に頼む場合は処分を見積もりに含めてもらいます。",
    },
  ],
  proHeading: "業者に頼む場合の確認点と、持ち込み・資源化の情報",
  proParas: [
    <p key="1">
      高い木の剪定や生垣の刈り込みを業者に頼むときは、<Hl>刈った枝葉の処分が料金に含まれるか</Hl>を必ず確認してください。剪定110番は料金ページで「剪定 4,000円~(税込)」と示し、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：<a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>、2026年11月1日確認）。
    </p>,
    <p key="2">
      剪定枝は原則として予約制の各戸収集ですが、緊急時や一時的に多量発生した場合に限り持ち込めます。持ち込み先は2025年4月1日から<Hl>リサイクルプラザ藤沢（桐原町）</Hl>に変わり、2025年9月4日に発生した火災の影響で停止していた市民の持ち込み受け入れは、2026年5月1日から再開しています（出典：<a href={SRC_MOCHIKOMI} className={A} target="_blank" rel="noopener noreferrer">藤沢市「市民の方の剪定枝の持ち込みについて」</a>、2026年11月1日確認）。
    </p>,
    <p key="3">
      各戸収集した剪定枝は、市外の民間事業者で破砕され、発電燃料や堆肥化原料などとして資源化されています（出典：<a href={SRC_SHIGENKA} className={A} target="_blank" rel="noopener noreferrer">藤沢市「剪定枝の資源化」</a>、2026年11月1日確認）。藤沢で依頼できる庭業者の比較は<Link href="/area/fujisawa/" className={A}>藤沢の庭業者おすすめ</Link>、処分方法の全体像は<Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "枝の量が多いときは、処分込みで見積もりを取る",
  ctaText:
    "伐採で太い幹が出る作業や、何十束にもなる刈り込みは、処分まで含めて依頼すると手間が少なく済みます。見積もりでは、処分費が含まれるかどうかを確認してから依頼先を決めてください。",
  faqHeading: "藤沢市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "藤沢市の剪定枝の収集は有料ですか？",
      a: "太さ1cm以上の剪定枝は予約制で、無料の各戸収集です。予約は株式会社藤沢市興業公社が電話とインターネットで受け付けています。",
    },
    {
      q: "細い枝も予約が必要ですか？",
      a: "太さ1cm未満の枝は予約不要で、長さ50cm以下に切って束ね、可燃ごみの収集日に出します。草葉は透明・半透明袋で1回10袋以内です。",
    },
    {
      q: "木の根や幹も出せますか？",
      a: "出せます。木の根は太さ20cm未満（大きなものは割る）、幹は太さ50cm未満・長さ60cm未満（太さ50cm以上は半分に割る）が基準です。",
    },
    {
      q: "竹は剪定枝として出せますか？",
      a: "出せません。竹・シュロ・キョウチクトウ・つる性樹木は長さ50cm未満にして可燃ごみに出します。",
    },
  ],
  related: [
    { href: "/area/fujisawa/", label: "藤沢の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/take-taisaku/", label: "竹・笹の対策", desc: "庭に広がる竹を止める方法" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込み", desc: "刈り込みの時期と仕上がりをそろえるコツ" },
  ],
};

export default function FujisawaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
