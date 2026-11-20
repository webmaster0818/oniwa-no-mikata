import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/tsutsuji-satsuki-chigai/";
const A = "text-[#2D7F3E] underline";
const MIE = "https://www.pref.mie.lg.jp/fukyuc/hp/30823029675.htm";
const AKITA = "https://www.city.akita.lg.jp/kurashi/doro-koen/1003685/1007159/1009757/1009903/1007238.html";
const CHIBA = "https://www.city.chiba.jp/toshi/koenryokuchi/kanri/midori/tutujisatuki2025.html";
const YAMATO = "https://www.city.yamato.lg.jp/material/files/group/26/000050757.pdf";
const MINATO = "https://www.city.minato.tokyo.jp/documents/175962/20260213161310.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ツツジとサツキの違い｜咲く時期は約1か月ずれる・剪定の期限も違う｜お庭のミカタ",
  },
  description:
    "ツツジとサツキの違いを、千葉市 昭和の森の2025年の開花記録、三重県中央農業改良普及センター、秋田市、大和市の公的な資料で照合しました。サツキはツツジより約1か月遅く咲き、剪定の期限もずれます。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ツツジとサツキの違い｜咲く時期と剪定の期限",
    description:
      "ツツジとサツキの開花時期・剪定の期限の違いを、自治体の資料と公園の開花記録で照合しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; tsutsuji: string; satsuki: string; src: string }[] = [
  {
    item: "千葉市 昭和の森の開花（2025年）",
    tsutsuji: "4月17日 開花し始め → 5月1日 見頃後半 → 5月8日 見頃過ぎ",
    satsuki: "5月15日 開花し始め → 5月29日 見頃 → 6月5日 見頃過ぎ",
    src: "千葉市",
  },
  {
    item: "開花期間（資料の記載）",
    tsutsuji: "ヒラドツツジ 4月中旬〜5月中旬、クルメツツジ 4月初旬〜5月上旬",
    satsuki: "ほかのツツジ類に比べて開花時期が少し遅い",
    src: "三重県・秋田市",
  },
  {
    item: "剪定の期限・適期",
    tsutsuji: "ヒラドツツジは7月中旬まで、クルメツツジは7月上旬までに剪定すれば翌年も咲く",
    satsuki: "梅雨明けまでが剪定の適期。夏の間は徒長枝を切る程度、10〜11月に軽く手直しする程度",
    src: "三重県・大和市",
  },
  {
    item: "分類",
    tsutsuji: "ツツジ科ツツジ属の仲間（ヒラドツツジ・クルメツツジなど）",
    satsuki: "ツツジ科ツツジ属。学名 R. indicum。川岸の岩肌などに野生",
    src: "三重県・秋田市",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">ツツジ</th>
          <th className="border px-2 py-2 text-left">サツキ</th>
          <th className="border px-2 py-2 text-left">出典</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.tsutsuji}</td>
            <td className="border px-2 py-2">{r.satsuki}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月20日に5つの資料を開き、当サイトで項目ごとに整理しました。千葉市の行は、千葉市が公開している昭和の森の「ツツジ・サツキ2025」の更新記録（4月17日〜6月5日）から日付を抜き出したもので、場所や年によって前後します。千葉市のページは「ツツジ」と表記しており、品種は書かれていません。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "tsutsuji-satsuki-chigai",
  published: "2026-11-20",
  updatedLabel: "2026年11月20日",
  h1: "ツツジとサツキの違い｜咲く時期は約1か月ずれる・剪定の期限も違う",
  breadcrumbLabel: "ツツジとサツキの違い",
  tagChips: ["ツツジ", "サツキ", "皐月", "開花時期", "剪定時期"],
  ldHeadline: "ツツジとサツキの違い｜咲く時期は約1か月ずれる・剪定の期限も違う",
  ldDescription:
    "ツツジとサツキの違いを、千葉市 昭和の森の2025年の開花記録、三重県中央農業改良普及センター、秋田市、大和市、港区の公的な資料で照合し、開花時期と剪定の期限の違いを解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ツツジとサツキのいちばん分かりやすい違いは<Hl>咲く時期</Hl>です。千葉市が公開している昭和の森の開花の記録（2025年）では、ツツジは<Hl>4月17日に開花し始め、5月8日には見頃を過ぎ</Hl>、サツキは<Hl>5月15日に開花し始め、5月29日に見頃</Hl>になりました。同じ公園で、およそ1か月ずれて咲いています（出典：<a href={CHIBA} className={A} target="_blank" rel="noopener noreferrer">千葉市「ツツジ・サツキ2025」</a>、2026年11月20日確認）。
      </p>
      <p className="mb-4">
        秋田市の「千秋公園の樹木サツキツツジ」も、サツキは<Hl>ほかのツツジ類に比べて開花時期が少し遅い</Hl>としています（出典：<a href={AKITA} className={A} target="_blank" rel="noopener noreferrer">秋田市「千秋公園の樹木サツキツツジ」</a>、2026年11月20日確認）。
      </p>
      <p>
        咲く時期がずれるため、花が終わった後に行う剪定の時期もずれます。本記事では、公的な資料と公園の開花記録を当サイトで照合し、庭で見分けるときと手入れするときの違いを整理します。
      </p>
    </>
  ),
  conclusionTitle: "サツキはツツジより約1か月遅く咲きます。どちらも花の後に剪定しますが、サツキは梅雨明けまで、ツツジは種類により7月上旬〜中旬までが目安です。",
  conclusionBody: (
    <>
      <p>
        港区の樹木管理マニュアルは、ツツジ類について、花後に伸びる新しい枝に5月中旬〜9月頃にかけて花芽ができるため、<Hl>花の終わった直後に剪定する</Hl>としています（出典：<a href={MINATO} className={A} target="_blank" rel="noopener noreferrer">港区「樹木管理マニュアル」（令和5年4月・PDF）</a>、2026年11月20日確認）。以下は、当サイトで5つの資料を照合した結果です。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ツツジとサツキを見分ける・扱い分ける4つの点",
  basicsIntro: (
    <p>
      ツツジ・サツキは園芸品種が多く、花の色や形だけで見分けるのは難しい場合があります。ここでは、資料で確かめられる点に絞って整理しました。
    </p>
  ),
  basicsLabel: "違い",
  basics: [
    {
      title: "咲く時期がおよそ1か月ずれる",
      desc: "千葉市 昭和の森の2025年の記録では、ツツジの見頃が過ぎた5月8日の1週間後、5月15日にサツキが咲き始めています。庭の株がどちらか分からないときは、咲いた時期を記録しておくと手がかりになります。",
    },
    {
      title: "ツツジの中でも種類によって時期が違う",
      desc: "三重県の資料では、ヒラドツツジは4月中旬〜5月中旬、クルメツツジは4月初旬〜5月上旬に咲くとしています。",
    },
    {
      title: "剪定の期限もずれる",
      desc: "三重県の資料ではヒラドツツジは7月中旬まで、クルメツツジは7月上旬までに剪定すれば翌年も花が咲くとし、大和市の園芸相談ではサツキは梅雨明けまでが剪定の適期としています。",
    },
    {
      title: "どちらもツツジ科ツツジ属",
      desc: "秋田市の資料では、サツキはツツジ科ツツジ属（学名 R. indicum）で、川岸の岩肌などに野生し、庭木・公園樹・街路樹として広く栽培され、多数の園芸種があるとしています。",
    },
  ],
  stepsHeading: "庭の株を見分けて手入れする4つの手順",
  stepsIntro: (
    <p>
      品種名が分からない株は、次の順番で確かめると、剪定の時期を決めやすくなります。
    </p>
  ),
  steps: [
    {
      title: "咲き始めた日と、咲き終わった日を記録する",
      desc: "4月〜5月上旬に咲けばツツジ、5月中旬以降に咲けばサツキの可能性が高くなります。年や場所で前後するため、近くの公園の開花情報もあわせて見ると判断しやすくなります。",
    },
    {
      title: "花が終わったら、なるべく早く剪定する",
      desc: "港区のマニュアルは、ツツジ類は花の終わった直後に剪定するとしています。花後に伸びる枝に翌年の花芽ができるためです。",
    },
    {
      title: "ツツジは7月上旬〜中旬、サツキは梅雨明けまでに終える",
      desc: "三重県の資料と大和市の回答をもとにした目安です。これ以降に刈り込むと、できた花芽を切り落とすおそれがあります。",
    },
    {
      title: "夏以降は徒長枝を切る程度にとどめる",
      desc: "大和市の回答では、サツキは夏の間は徒長枝を切る程度、10〜11月に軽く手直しする程度としています。",
    },
  ],
  ngHeading: "ツツジ・サツキの手入れで避けたいこと",
  ngs: [
    {
      title: "ツツジとサツキを同じ日に刈り込むことは避けます",
      desc: "咲く時期がおよそ1か月ずれるため、同じ日に刈り込むと、どちらかは花後すぐの剪定になりません。",
    },
    {
      title: "夏以降の強い刈り込みは避けます",
      desc: "花後に伸びた枝に花芽ができるため、期限を過ぎて強く刈り込むと翌年の花が減ります。大和市の園芸相談にも、垣根のサツキを剪定したら翌年花が咲かなかったという相談があります。",
    },
    {
      title: "花の色や形だけで決めつけることは避けます",
      desc: "どちらも園芸品種が多いため、咲いた時期とあわせて判断します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>ツツジとサツキが混ざった植え込みや垣根が長い、株が大きくなって花が減っている、品種が分からず剪定の時期を決めにくい</Hl>といった場合は、業者に相談すると作業がまとまります。依頼するときは「花を残したい」ことと、株ごとの咲いた時期を伝えると、作業日を合わせてもらいやすくなります。
    </p>,
    <p key="2">
      剪定の手順と夏以降に切ると咲かない理由は<Link href="/tsutsuji-satsuki-teire/" className={A}>ツツジ・サツキの剪定時期</Link>、花木全般は<Link href="/kaboku-kaika-teire/" className={A}>花木の開花を良くする手入れ</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "花後の剪定時期に合わせて相談する",
  ctaText:
    "ツツジとサツキは咲く時期がずれるため、剪定の適期もずれます。植え込みが大きい場合は、株ごとの時期に合わせた剪定を業者と相談すると安心です。",
  faqHeading: "ツツジとサツキの違いのよくある質問",
  faqs: [
    {
      q: "ツツジとサツキはどちらが先に咲きますか？",
      a: "ツツジが先です。千葉市 昭和の森の2025年の記録では、ツツジは4月17日に開花し始めて5月8日に見頃を過ぎ、サツキは5月15日に開花し始めて5月29日に見頃になりました。",
    },
    {
      q: "サツキの剪定はいつまでにすればよいですか？",
      a: "大和市の園芸相談の回答では、梅雨明けまでが剪定の適期とし、夏の間は徒長枝を切る程度、10〜11月に軽く手直しする程度としています。",
    },
    {
      q: "ツツジの剪定はいつまでにすればよいですか？",
      a: "三重県中央農業改良普及センターの資料では、ヒラドツツジは7月中旬まで、クルメツツジは7月上旬までに剪定すれば翌年も花が咲くとしています。",
    },
    {
      q: "サツキはツツジの仲間ですか？",
      a: "はい。秋田市の資料では、サツキはツツジ科ツツジ属（学名 R. indicum）としています。庭木・公園樹・街路樹として広く栽培され、多数の園芸種があるとしています。",
    },
  ],
  related: [
    {
      href: "/tsutsuji-satsuki-teire/",
      label: "ツツジ・サツキの剪定時期",
      desc: "花が終わった直後が基本",
    },
    {
      href: "/kaboku-kaika-teire/",
      label: "花木の開花を良くする手入れ",
      desc: "花が咲かない原因と剪定・施肥",
    },
    {
      href: "/ikegaki-karikomi/",
      label: "生垣の刈り込み",
      desc: "刈り込みの時期と高さの目安",
    },
    {
      href: "/sentei-jiki/",
      label: "庭木の剪定時期の基本",
      desc: "季節ごとの考え方と樹種の違い",
    },
  ],
};

export default function TsutsujiSatsukiChigaiPage() {
  return <KnowArticle data={data} />;
}
