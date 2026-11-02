import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/hachinohe/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_MOYASERU = "https://www.city.hachinohe.aomori.jp/soshikikarasagasu/kankyoseisakuka/gomi_kankyo_pet/1/1/4316.html";
const SRC_TAIRYO = "https://www.city.hachinohe.aomori.jp/soshikikarasagasu/kankyoseisakuka/gomi_kankyo_pet/1/1/2079.html";

export const metadata: Metadata = {
  title: {
    absolute: "八戸市の剪定枝の出し方｜燃やせるごみは直径10cm・長さ50cm以下、1回2袋まで｜お庭のミカタ",
  },
  description:
    "八戸市では枝木・剪定枝は燃やせるごみで、直径10センチメートル以下・長さ50センチメートル以下に切って出します。枝木に限り袋の口が結べなくてもひもで袋ごと結べば出せます。1回2袋まで。大量のときは八戸清掃工場へ持ち込めます。市の公式ページ（2026年11月2日確認）をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "八戸市の剪定枝の出し方｜直径10cm・長さ50cm以下、大量なら清掃工場へ",
    description:
      "八戸市の剪定枝は燃やせるごみ。直径10cm・長さ50cm以下に切り、集積所には1回2袋まで。大量の枝木・草類は八戸清掃工場へ持ち込めます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/hachinohe/senteieda",
  published: "2026-11-02",
  updatedLabel: "2026年11月2日",
  parent: { href: "/area/hachinohe/", label: "八戸の庭業者" },
  badge: "八戸市の地域情報",
  h1: "八戸市の剪定枝の出し方｜燃やせるごみは直径10cm・長さ50cm以下、1回2袋まで",
  breadcrumbLabel: "八戸市の剪定枝の出し方",
  tagChips: ["八戸市", "剪定枝", "燃やせるごみ", "八戸清掃工場", "大量ごみ"],
  ldHeadline: "八戸市の剪定枝の出し方｜直径10cm・長さ50cm以下、大量なら清掃工場へ",
  ldDescription:
    "八戸市で枝木・剪定枝を燃やせるごみとして出すときの大きさ・袋の扱い・量、大量に出たときの八戸清掃工場への持ち込みの決まりを、市の公式ページをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        八戸市では、<Hl>枝木・剪定枝は「燃やせるごみ」</Hl>の植物類（草木類）に含まれ、
        <Hl>直径10センチメートル以下、長さ50センチメートル以下に切ってから出す</Hl>よう案内されています（出典：
        <a href={SRC_MOYASERU} className={A} target="_blank" rel="noopener noreferrer">燃やせるごみ(家庭から出るもの)／八戸市</a>
        、2026年11月2日確認）。
      </p>
      <p>
        本記事では、集積所に出すときの決まりと、量が多いときの八戸清掃工場への持ち込み、サイズに切れない枝の相談先を、市の公式ページの記載に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "枝は直径10センチメートル以下・長さ50センチメートル以下に切り、燃やせるごみの日に1世帯2袋までで出します。",
  conclusionBody: (
    <p>
      <Hl>枝木に限り、袋の口が結べなくても紐で袋ごと結んで出すことができます</Hl>。大量に処理しなければならない場合は、
      45リットル以下の中身の見える（半）透明な袋に入れて<Hl>八戸清掃工場へ持ち込めます</Hl>（出典：
      <a href={SRC_TAIRYO} className={A} target="_blank" rel="noopener noreferrer">引っ越しごみ・大量に出るごみ／八戸市</a>
      、2026年11月2日確認）。
    </p>
  ),
  basicsHeading: "八戸市の剪定枝で押さえる5つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "枝木・剪定枝は燃やせるごみ。直径10cm以下・長さ50cm以下",
      desc: "草花・刈り草・落ち葉とあわせて、燃やせるごみの植物類（草木類）に含まれます。",
    },
    {
      title: "枝木は袋の口が結べなくても、ひもで袋ごと結べば出せる",
      desc: "枝木に限り、袋の口が結べなくても紐で袋ごと結んで出すことができると案内されています。",
    },
    {
      title: "集積所に出せるのは1世帯2袋まで",
      desc: "一回の収集に出すことのできる量は1世帯につき2袋までです。",
    },
    {
      title: "収集日当日の朝8時までに出す",
      desc: "収集は週2回で、地区によって曜日が決まっています。一部の早朝収集地区は朝6時30分までに出します。",
    },
    {
      title: "大量の枝木・草類は八戸清掃工場へ持ち込める",
      desc: "45リットル以下の中身の見える（半）透明な袋に入れ、その袋のみを10袋まで持ち込む場合に限り無料で受け入れると案内されています。持ち込む場合も枝木は直径10cm以下・長さ50cm以下に裁断します。",
    },
  ],
  stepsHeading: "八戸市で剪定枝を出すまでの手順（4つの手順）",
  steps: [
    {
      title: "枝を直径10cm以下・長さ50cm以下に切る",
      desc: "根についている土は落とし、できる限り乾燥させます。",
    },
    {
      title: "燃やせるごみの袋に入れる",
      desc: "枝木に限り、袋の口が結べない場合は紐で袋ごと結んで散らばらないようにします。",
    },
    {
      title: "収集日の朝8時までに2袋まで出す",
      desc: "地区ごとの収集曜日を確認し、自分の住んでいる場所の集積所に出します。",
    },
    {
      title: "量が多いときは八戸清掃工場へ持ち込む",
      desc: "45リットル以下の中身の見える袋に入れて持ち込みます。八戸市指定ごみ袋を使う必要はありません。",
    },
  ],
  ngHeading: "八戸市で剪定枝を出すときに避けたいこと",
  ngs: [
    {
      title: "集積所に大量のごみを出しません",
      desc: "集積所に出すことのできるごみは1回の収集日につき2袋までです。市は大量のごみを集積所に出さないよう強く求めています。",
    },
    {
      title: "他の地区の集積所に出しません",
      desc: "集積所は町内会（自治会）が管理しています。自分の住んでいる場所の集積所に出します。",
    },
    {
      title: "サイズに切れない枝をそのまま持ち込みません",
      desc: "直径10cm以下・長さ50cm以下に加工できない場合は、環境政策課（0178-43-9362）に問い合わせると、枝木を取り扱う民間事業者が紹介されます。",
    },
  ],
  proHeading: "業者に頼む場合は、枝の処分方法を確認する",
  proParas: [
    <p key="1">
      太い幹や長い枝が出る伐採・大きな剪定では、市の基準どおりに切りそろえる手間がかかります。業者に頼む場合は、<Hl>枝の処分が見積もりに含まれるか</Hl>を確認してください。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月2日確認）。八戸で依頼できる庭業者の比較は
      <Link href="/area/hachinohe/" className={A}>八戸の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "量が多い剪定は、処分込みの見積もりで比べる",
  ctaText:
    "生垣の刈り込みや伐採で枝が多く出る場合は、処分まで含めて依頼すると手間が少なく済みます。見積もりでは処分費の有無をそろえて比べてください。",
  faqHeading: "八戸市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "八戸市で剪定した枝は何ごみですか？",
      a: "燃やせるごみです。直径10センチメートル以下、長さ50センチメートル以下に切ってから出します。",
    },
    {
      q: "枝が袋からはみ出して口が結べません。",
      a: "枝木に限り、袋の口が結べなくても紐で袋ごと結んで出すことができます。",
    },
    {
      q: "大量に出た枝はどうすればよいですか？",
      a: "八戸清掃工場へ持ち込めます。45リットル以下の中身の見える（半）透明な袋に入れ、その袋のみを10袋まで持ち込む場合に限り無料で受け入れると案内されています。",
    },
    {
      q: "太すぎて切れない枝はどうしますか？",
      a: "環境政策課（0178-43-9362）に問い合わせると、枝木を取り扱う民間事業者を紹介すると案内されています。",
    },
  ],
  related: [
    { href: "/area/hachinohe/", label: "八戸の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/fuyugakoi-yukigakoi/", label: "庭木の冬囲い・雪囲い", desc: "雪の前に行う庭木の備え" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function HachinoheSenteiedaPage() {
  return <KnowArticle data={data} />;
}
