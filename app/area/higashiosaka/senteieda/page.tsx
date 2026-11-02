import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/higashiosaka/senteieda/";
const A = "text-[#2D7F3E] underline";
const SRC_EDA = "https://www.city.higashiosaka.lg.jp/module/garbage.php?mode=detail&id=409&page=9";
const SRC_HA = "https://www.city.higashiosaka.lg.jp/module/garbage.php?mode=detail&id=408&page=9";

export const metadata: Metadata = {
  title: {
    absolute: "東大阪市の剪定枝の出し方｜枝は大型ごみ（直径10cm・長さ50cm以下）、葉はもえる物｜お庭のミカタ",
  },
  description:
    "東大阪市では剪定ごみの枝は大型ごみで、直径10cm以下・長さ50cm以下に切り、大型ごみ受付センターへの電話申込みと大型ごみ処理券が必要です。刈り葉・落ち葉は家庭ごみ（もえる物）で2袋まで。市のごみ分別検索（2026年11月2日確認）をもとに整理しました。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "東大阪市の剪定枝の出し方｜枝は大型ごみ、刈り葉・落ち葉はもえる物",
    description:
      "東大阪市の剪定ごみ（枝）は大型ごみ。直径10cm以下・長さ50cm以下に切り、電話で申込み。刈り葉・落ち葉はもえる物で2袋まで。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "area/higashiosaka/senteieda",
  published: "2026-11-02",
  updatedLabel: "2026年11月2日",
  parent: { href: "/area/higashiosaka/", label: "東大阪の庭業者" },
  badge: "東大阪市の地域情報",
  h1: "東大阪市の剪定枝の出し方｜枝は大型ごみ（直径10cm・長さ50cm以下）、葉はもえる物",
  breadcrumbLabel: "東大阪市の剪定枝の出し方",
  tagChips: ["東大阪市", "剪定枝", "大型ごみ", "落ち葉", "もえる物"],
  ldHeadline: "東大阪市の剪定枝の出し方｜枝は大型ごみ、刈り葉・落ち葉はもえる物",
  ldDescription:
    "東大阪市で剪定ごみ（枝）を大型ごみとして出すときの大きさ・申込み・処理券、刈り葉・落ち葉を家庭ごみ（もえる物）として出すときの曜日・袋・量を、市のごみ分別検索をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        東大阪市のごみ分別検索では、<Hl>剪定ごみ(枝)は「大型ごみ」</Hl>に分類され、<Hl>直径10cm以下、長さ50cm以下に切る</Hl>よう案内されています（出典：
        <a href={SRC_EDA} className={A} target="_blank" rel="noopener noreferrer">ごみ分別検索：剪定ごみ(枝) | 東大阪市</a>
        、2026年11月2日確認）。
      </p>
      <p>
        枝と葉で出し方が分かれる点が東大阪市の特徴です。本記事では、枝を大型ごみとして出す手順と、刈り葉・落ち葉の出し方を市の公式情報に沿って整理します。
      </p>
    </>
  ),
  conclusionTitle: "枝は直径10cm以下・長さ50cm以下に切って大型ごみとして申し込みます。刈り葉・落ち葉は家庭ごみ（もえる物）で、週の後半の収集日に2袋までです。",
  conclusionBody: (
    <p>
      大型ごみは、<Hl>大型ごみ受付センター（072-962-5374）への電話申込み</Hl>と、市内の指定コンビニエンスストアで購入する「大型ごみ処理券」が必要です。
      刈り葉・落ち葉は<Hl>透明・半透明（無色）のごみ袋（45リットル）</Hl>に入れて出します（出典：
      <a href={SRC_HA} className={A} target="_blank" rel="noopener noreferrer">ごみ分別検索：剪定ごみ(刈り葉、落ち葉) | 東大阪市</a>
      、2026年11月2日確認）。
    </p>
  ),
  basicsHeading: "東大阪市の剪定ごみで押さえる4つのルール",
  basicsLabel: "ルール",
  basics: [
    {
      title: "剪定ごみ(枝)は大型ごみ",
      desc: "ごみ分別検索で剪定ごみ(枝)は大型ごみに分類されています。直径10cm以下、長さ50cm以下に切ってから出します。",
    },
    {
      title: "大型ごみは電話申込みと処理券が必要",
      desc: "大型ごみ受付センター（072-962-5374）に電話で申し込み、取扱店舗で「大型ごみ処理券」を購入します。取扱店舗は市内の指定のコンビニエンスストア（ファミリーマート、ミニストップ、ローソン、セブンイレブン）です。",
    },
    {
      title: "刈り葉・落ち葉は家庭ごみ（もえる物）",
      desc: "週の後半の収集日（木曜日か金曜日）に出します。備考として「2袋まで」と案内されています。",
    },
    {
      title: "収集日の午前9時までに出す",
      desc: "大型ごみ・家庭ごみ（もえる物）とも、収集日の午前9時までに決められた場所に出します。",
    },
  ],
  stepsHeading: "東大阪市で剪定枝を大型ごみに出す手順（4つの手順）",
  steps: [
    {
      title: "枝を直径10cm以下・長さ50cm以下に切る",
      desc: "これより太い枝や長い枝は、そのままでは出せません。",
    },
    {
      title: "大きさを測って電話で申し込む",
      desc: "大型ごみの大きさは3辺（幅・奥行き・高さ）の長さの合計です。大型ごみ受付センター（072-962-5374）に電話で申し込みます。",
    },
    {
      title: "指定のコンビニで大型ごみ処理券を購入する",
      desc: "取扱店舗は東大阪市内の指定のコンビニエンスストアです。",
    },
    {
      title: "収集日の午前9時までに指定場所へ出す",
      desc: "申込み時に案内された収集日と場所に出します。葉は枝と分けて、もえる物の日に袋で出します。",
    },
  ],
  ngHeading: "東大阪市で剪定ごみを出すときに避けたいこと",
  ngs: [
    {
      title: "枝をもえる物の袋に入れて出しません",
      desc: "ごみ分別検索で剪定ごみ(枝)は大型ごみに分類されています。葉と枝は出し方が異なります。",
    },
    {
      title: "刈り葉・落ち葉を一度に多く出しません",
      desc: "刈り葉・落ち葉は週の後半の収集日に2袋までと案内されています。",
    },
    {
      title: "申込みや処理券なしで大型ごみを出しません",
      desc: "大型ごみは電話申込みと大型ごみ処理券が必要です。",
    },
  ],
  proHeading: "業者に頼む場合は、枝の処分方法を確認する",
  proParas: [
    <p key="1">
      東大阪市では、枝を出すたびに大型ごみの申込みと処理券が必要です。<Hl>生垣の刈り込みや伐採で枝が多く出る場合</Hl>は、業者に処分まで含めて頼むかどうかを、見積もりの段階で検討してください。
    </p>,
    <p key="2">
      剪定110番は料金ページで、処分が必要な場合などは別途料金が発生する場合があること、地域によって別途出張費用がかかる場合があることを記載しています（出典：
      <a href="https://www.sharing-tech.co.jp/sentei/price/" className={A} target="_blank" rel="noopener noreferrer">剪定110番「料金」</a>
      、2026年11月2日確認）。東大阪で依頼できる庭業者の比較は
      <Link href="/area/higashiosaka/" className={A}>東大阪の庭業者おすすめ</Link>、処分方法の全体像は
      <Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "量が多い剪定は、処分込みの見積もりで比べる",
  ctaText:
    "枝の量が多いと大型ごみの申込みや切りそろえの手間が増えます。業者に依頼する場合は、処分費の有無をそろえて見積もりを比べてください。",
  faqHeading: "東大阪市の剪定枝に関するよくある質問",
  faqs: [
    {
      q: "東大阪市で剪定した枝は何ごみですか？",
      a: "ごみ分別検索では、剪定ごみ(枝)は大型ごみです。直径10cm以下、長さ50cm以下に切り、大型ごみ受付センターに電話で申し込みます。",
    },
    {
      q: "落ち葉や刈った葉はどう出しますか？",
      a: "家庭ごみ（もえる物）です。週の後半の収集日（木曜日か金曜日）に、透明・半透明（無色）のごみ袋（45リットル）に入れて、2袋まで出せます。",
    },
    {
      q: "大型ごみ処理券はどこで買えますか？",
      a: "東大阪市内の指定のコンビニエンスストア（ファミリーマート、ミニストップ、ローソン、セブンイレブン）が取扱店舗です。",
    },
    {
      q: "何時までに出せばよいですか？",
      a: "大型ごみ・家庭ごみ（もえる物）とも、収集日の午前9時までに決められた場所に出します。",
    },
  ],
  related: [
    { href: "/area/higashiosaka/", label: "東大阪の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "ごみ収集・持ち込み・業者処分の比べ方" },
    { href: "/ochiba-taisaku/", label: "庭の落ち葉対策", desc: "落ち葉の量を減らす工夫と片付け方" },
    { href: "/sentei-110ban-sentei-ryokin/", label: "剪定110番の剪定料金", desc: "料金ページの表示と処分費の確認点" },
    { href: "/garden-shredder-katsuyo/", label: "ガーデンシュレッダーの活用", desc: "枝を細かくして量を減らす方法" },
  ],
};

export default function HigashiosakaSenteiedaPage() {
  return <KnowArticle data={data} />;
}
