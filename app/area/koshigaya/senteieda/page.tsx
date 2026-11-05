import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/koshigaya/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/gomi_recycle/gomicalendar/files/R8-01.pdf";
const T_SRC = "越谷市 第1地区のごみ収集カレンダー（PDF）20ページ「家庭から出る刈り草・せん定枝」";
const SRC2 = "https://www.city.koshigaya.saitama.jp/kurashi_shisei/kurashi/gomi_recycle/oshirase/senteiedataihihanbai.html";
const T_SRC2 = "せん定枝等の個人搬入・堆肥販売について　越谷市公式ホームページ";

export const metadata: Metadata = {
  title: {
    absolute: "越谷市の剪定枝の出し方｜長さ50cm未満・直径10cm以下で燃えるごみ、多い日は東埼玉資源環境組合へ搬入｜お庭のミカタ",
  },
  description:
    "越谷市では、家庭の枝は長さ50cm未満・直径10cm以下に切り、透明か半透明の袋に入れて燃えるごみへ。自分で剪定した枝と刈り草は、電話予約のうえ東埼玉資源環境組合の第一工場へ1日1件200kgまで搬入できます。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "越谷市の剪定枝の出し方｜長さ50cm未満・直径10cm以下で燃えるごみ",
    description:
      "越谷市の枝は長さ50cm未満・直径10cm以下で袋に入れて燃えるごみ。自分で剪定した枝・刈り草は東埼玉資源環境組合へ予約搬入（1日1件200kgまで）。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/koshigaya/senteieda",
  published: "2026-11-05",
  updatedLabel: "2026年11月5日",
  parent: { href: "/area/koshigaya/", label: "越谷の庭業者" },
  badge: "越谷市の地域情報",
  h1: "越谷市の剪定枝の出し方｜長さ50cm未満・直径10cm以下で燃えるごみ、多い日は東埼玉資源環境組合へ搬入",
  breadcrumbLabel: "越谷市の剪定枝の出し方",
  tagChips: ["越谷市", "剪定枝", "燃えるごみ", "刈り草", "個人搬入"],
  ldHeadline: "越谷市の剪定枝の出し方｜長さ50cm未満・直径10cm以下で燃えるごみ、多い日は東埼玉資源環境組合へ搬入",
  ldDescription:
    "越谷市で家庭の剪定枝と刈り草をごみ集積所に出すときの大きさと袋、東埼玉資源環境組合第一工場への個人搬入の条件と申し込み方法を、市の公式情報をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        越谷市のごみ収集カレンダーでは、家庭から出るせん定枝は
        <Hl>長さ50cm未満・直径10cm以下に切り、透明又は半透明の袋に入れて燃えるごみ</Hl>
        として出すよう案内されています。刈り草も同じく袋に入れて燃えるごみです（出典：
        <a href={SRC} className={A} target="_blank" rel="noopener noreferrer">{T_SRC}</a>
        、2026年11月5日確認）。
      </p>
      <p>
        本記事では、集積所に出すときの基準と、量が多いときに使える東埼玉資源環境組合への個人搬入を、市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "少量なら長さ50cm未満・直径10cm以下で袋に入れて燃えるごみ。自分で剪定した枝が多いときは、電話予約のうえ東埼玉資源環境組合へ搬入できます。",
  conclusionBody: (
    <p>
      個人搬入の対象は、居住する敷地から出たせん定枝と刈り草で、<Hl>自ら剪定などを行い自ら搬入するもの（1日1件、200kgまで）</Hl>に限られます。
      搬入の前日までに東埼玉資源環境組合第一工場業務課リサイクル担当へ電話で申し込み、当日は運転免許証などで本人確認があります（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{T_SRC2}</a>
      、2026年11月5日確認）。
    </p>
  ),
  basicsHeading: "越谷市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "枝は長さ50cm未満・直径10cm以下",
      desc: "この大きさに切ってから集積所に出します。",
    },
    {
      title: "透明又は半透明の袋に入れて燃えるごみ",
      desc: "刈り草も同じく袋に入れて燃えるごみです。",
    },
    {
      title: "個人搬入は1日1件200kgまで",
      desc: "居住する敷地から出た枝・刈り草を、自分で剪定して自分で運ぶ場合に限られます。",
    },
    {
      title: "搬入できる枝は直径15cm以下・長さ100cm以下",
      desc: "枝と草は分けて持ち込みます。",
    },
    {
      title: "搬入の前日までに電話で申し込む",
      desc: "受付は東埼玉資源環境組合第一工場業務課リサイクル担当です。",
    },
  ],
  stepsHeading: "越谷市で剪定枝を処分するまでの手順（4つの手順）",
  steps: [
    {
      title: "量を見て、集積所か搬入かを決める",
      desc: "集積所に出せない量や大きさなら、東埼玉資源環境組合への個人搬入を検討します。",
    },
    {
      title: "集積所なら長さ50cm未満・直径10cm以下に切る",
      desc: "透明又は半透明の袋に入れ、燃えるごみの日に出します。",
    },
    {
      title: "搬入なら前日までに電話で申し込む",
      desc: "電話受付は月曜日から金曜日（祝日・年末年始を除く）の8時30分〜12時・13時〜17時です。",
    },
    {
      title: "身分証明書を持って搬入する",
      desc: "搬入は月曜日から金曜日の9時〜11時30分・13時〜15時30分（月曜日は午後のみ）です。",
    },
  ],
  ngHeading: "越谷市で剪定枝を搬入するときに避けたいこと",
  ngs: [
    {
      title: "竹・シュロ・笹などを持ち込みません",
      desc: "竹、シュロ、笹、そてつ、きょうちくとう、柳、よし、根のついた草木、枯れた草木は搬入できません。",
    },
    {
      title: "土や金属が混ざった草木を持ち込みません",
      desc: "農作物、土石、金属、ビニールなどを含む草木も搬入できないものとされています。",
    },
    {
      title: "業者が剪定した枝を個人搬入に回しません",
      desc: "個人搬入は、自ら剪定などを行い自ら搬入するものに限られます。",
    },
  ],
  proHeading: "量が多いときの選択肢と、業者に頼む場合の確認",
  proParas: [
    <p key="1">
      搬入場所は東埼玉資源環境組合 第一工場 堆肥化施設 原料ヤード（越谷市増林三丁目2番地1）です。
      祝日の関係で堆肥の販売が火曜日になる場合、搬入の受け入れは午後のみになると案内されています（出典：
      <a href={SRC2} className={A} target="_blank" rel="noopener noreferrer">{T_SRC2}</a>
      、2026年11月5日確認）。
    </p>,
    <p key="2">
      業者に剪定を頼むと、個人搬入の対象から外れます。剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月5日確認）。越谷で依頼できる庭業者の比較は
      <Link href="/area/koshigaya/" className={A}>越谷の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "業者に剪定を頼むなら、処分込みの見積もりで比べる",
  ctaText:
    "業者が剪定した枝は個人搬入の対象外です。依頼する場合は、見積もりで枝の処分が含まれるかをそろえて比べてください。",
  faqHeading: "越谷市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "越谷市で剪定した枝は何ごみですか？",
      a: "長さ50cm未満・直径10cm以下に切り、透明又は半透明の袋に入れて燃えるごみとして出します。",
    },
    {
      q: "たくさん出たときはどうしますか？",
      a: "自分で剪定した枝と刈り草は、前日までに電話で申し込み、東埼玉資源環境組合第一工場へ1日1件200kgまで搬入できます。",
    },
    {
      q: "持ち込める枝の大きさは？",
      a: "直径15cm以下・長さ100cm以下です。枝と草は分けて持ち込みます。",
    },
    {
      q: "持ち込めないものはありますか？",
      a: "竹、シュロ、笹、そてつ、きょうちくとう、柳、よし、根のついた草木、枯れた草木、土石や金属などを含む草木は搬入できません。",
    },
  ],
  related: [
    { href: "/area/koshigaya/", label: "越谷の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/area/kasukabe/senteieda/", label: "春日部市の剪定枝の出し方", desc: "隣接する市の分別ルール" },
    { href: "/zasso-taisaku/", label: "庭の雑草対策", desc: "草刈りの頻度と抜き方・防ぎ方" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function KoshigayaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
