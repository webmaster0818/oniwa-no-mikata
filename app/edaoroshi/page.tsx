import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/edaoroshi/";
const A = "text-[#2D7F3E] underline";
const KUMAMOTO = "https://www.city.kumamoto.jp/kiji00350660/5_50660_362740_up_KSOTQ8RX.pdf";
const SAITAMA = "https://www.pref.saitama.lg.jp/documents/4144/gairozyusenntei1.pdf";
const ASHIYA = "https://www.city.ashiya.lg.jp/gairoju/documents/gairojyu_kihonsyo.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "枝下ろしとは｜太い枝を付け根から切り落とす剪定。二段切りで裂けを防ぐ｜お庭のミカタ",
  },
  description:
    "枝下ろし（枝おろし剪定）の意味と手順を、熊本市の樹木管理ガイドラインと埼玉県の街路樹剪定マニュアルをもとに整理しました。透かし剪定との関係、切る位置、二段切り、ぶつ切りとの違いをまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "枝下ろしとは",
    description:
      "熊本市のガイドラインは、剪定鋏では切れない太い枝を付け根から大きく切り落とす場合を「枝下ろし」としています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { item: string; kumamoto: string; saitama: string }[] = [
  { item: "呼び方", kumamoto: "枝下ろし", saitama: "枝おろし剪定" },
  { item: "意味", kumamoto: "剪定鋏では切れない太い枝を付け根から大きく切り落とすこと", saitama: "密度の高い混み枝や建築限界にかかる下枝などを、主枝を主幹の付根部分から切り取る剪定" },
  { item: "使う道具", kumamoto: "鋸", saitama: "剪定鋸など" },
  { item: "剪定の中での位置づけ", kumamoto: "枝抜き剪定（透かし剪定）の手順の最初。枝下ろし→大透かし→中透かし→小透かし", saitama: "枝透かし剪定は、幹に近い部分から枝おろし・大透かし・中透かし・小透かしに分けられる" },
  { item: "切る位置", kumamoto: "記載なし", saitama: "ブランチカラー（枝の付け根の膨らみ）を傷つけず、それに近い枝の組織で切る" },
  { item: "太い枝の切り方", kumamoto: "記載なし", saitama: "「二段切り」：先に切断位置の上部で短く切って枝を軽くし、その後に適切な位置で切り戻す" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">熊本市 ガイドライン</th>
          <th className="border px-2 py-2 text-left">埼玉県 街路樹剪定マニュアル</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.item}>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.kumamoto}</td>
            <td className="border px-2 py-2">{r.saitama}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、熊本市の公共施設樹木の維持管理ガイドライン（2.3.5 剪定の方法「枝抜き剪定」、枝透かし剪定の手順）と、埼玉県「街路樹剪定マニュアル」（県土整備部道路環境課、令和2年12月。剪定手法の「枝おろし剪定」「枝透かし剪定」と、切断位置・切り口の裂けの回避の項）を開き、当サイトで項目ごとに整理しました。「記載なし」はその資料に書かれていないという意味です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "edaoroshi",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "枝下ろしとは｜太い枝を付け根から切り落とす剪定。二段切りで裂けを防ぐ",
  breadcrumbLabel: "枝下ろしとは",
  tagChips: ["枝下ろし", "枝おろし剪定", "太い枝", "透かし剪定", "二段切り"],
  ldHeadline: "枝下ろしとは｜太い枝を付け根から切り落とす剪定。二段切りで裂けを防ぐ",
  ldDescription:
    "枝下ろし（枝おろし剪定）の意味、透かし剪定の中での位置づけ、切る位置と二段切りを、熊本市・埼玉県・芦屋市の公的資料をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        枝下ろしは、<Hl>剪定鋏では切れない太い枝を、付け根から大きく切り落とす剪定</Hl>です。熊本市のガイドラインは、剪定鋏では切れない太い枝を付け根から大きく切り落とす場合を「枝下ろし」とし、鋸で枝下ろしを行ってから大透かし・中透かし・小透かしへ進む手順を示しています（出典：<a href={KUMAMOTO} className={A} target="_blank" rel="noopener noreferrer">熊本市 公共施設樹木の維持管理ガイドライン（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        埼玉県の街路樹剪定マニュアルは「枝おろし剪定」を、密度の高い混み枝や建築限界にかかる下枝などを<Hl>「主枝を主幹の付根部分から切り取る剪定」</Hl>と説明し、邪魔になる下枝や枯れ枝を剪定鋸などで切るときに行うとしています（出典：<a href={SAITAMA} className={A} target="_blank" rel="noopener noreferrer">埼玉県「街路樹剪定マニュアル」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "枝下ろしは、太い枝を幹との付け根で切る作業です。付け根の膨らみを残し、二段に分けて切ります。",
  conclusionBody: (
    <>
      <p>2つの資料の記載を当サイトで項目ごとに並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        2つの資料はいずれも、枝下ろしを<Hl>透かし剪定の最初に行う、もっとも太い枝を対象にした作業</Hl>として扱っています。切る位置と二段切りについて具体的に書いているのは埼玉県のマニュアルです。
      </p>
    </>
  ),
  basicsHeading: "枝下ろしを知るための4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "太い枝を付け根から切る",
      desc: "熊本市は、剪定鋏では切れない太い枝を付け根から大きく切り落とす場合を「枝下ろし」としています。",
    },
    {
      title: "透かし剪定の最初の段階",
      desc: "埼玉県のマニュアルでは、枝透かし剪定は幹に近い部分から「枝おろし」「大透かし」「中透かし」「小透かし」に分けられます。",
    },
    {
      title: "付け根の膨らみを残す",
      desc: "埼玉県のマニュアルは、枝の付け根のブランチカラーを傷つけない位置で切るとしています。幹に接して切る「フラッシュカット」は、腐朽菌の侵入を容易にするとしています。",
    },
    {
      title: "ぶつ切りとは違う",
      desc: "芦屋市の基本書は、太い枝や幹の途中で切ることを「ぶつ切り」とし、傷口が大きく材質腐朽病菌が侵入しやすいため基本的に採用しないとしています。",
    },
  ],
  stepsHeading: "枝下ろしの4つの手順",
  stepsIntro: <p>熊本市・埼玉県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "最初に、切る太い枝を決める",
      desc: "埼玉県のマニュアルは、はじめに除去する太枝を決めてカットするとしています。熊本市も、枝下ろしを透かし剪定の最初の手順にしています。",
    },
    {
      title: "切断位置の上で一度切って枝を軽くする",
      desc: "埼玉県のマニュアルは、大枝を一回で切ると枝の重さで付け根の下側が裂けるため、先に切断位置の上部で短く切って枝を軽くする「二段切り」を励行するとしています。",
    },
    {
      title: "付け根の膨らみの外側で切り戻す",
      desc: "残った部分を、ブランチカラーを傷つけない位置で切り落とします。人の腕より太い枝やサクラなど腐朽しやすい樹種は、フラッシュカットは適さないとしています。",
    },
    {
      title: "残りの枝を大透かし・中透かし・小透かしで整える",
      desc: "熊本市の手順では、枝下ろしの後に鋸で大透かし、剪定鋏で中透かし、必要に応じて小透かしや葉先の切り詰めを行います。",
    },
  ],
  ngHeading: "枝下ろしで避けたいこと",
  ngs: [
    {
      title: "太い枝を一度で切り落とすことは避けます",
      desc: "埼玉県のマニュアルは、大枝を一回で切り取ろうとすると、枝の重さで幹の付け根の下方部が裂けてしまうとしています。",
    },
    {
      title: "幹に沿って深く切り込むことは避けます",
      desc: "埼玉県のマニュアルは、幹の付根から幹に接して切る「フラッシュカット」は、切り口をふさぐ防御組織を壊し、腐朽菌の侵入を容易にするとしています。",
    },
    {
      title: "太い枝の途中で切って終わらせることは避けます",
      desc: "芦屋市の基本書は、太い枝などの途中で切る「ぶつ切り」は傷口が大きく、腐朽すると枝折れや倒木の原因になるとしています。やむを得ない場合は段階的に切り、切断面をなめらかにして防菌癒合剤を塗るとしています。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      枝下ろしは鋸で太い枝を落とす作業です。<Hl>脚立や木に登らないと届かない枝、落ちた枝が屋根や塀・電線に当たるおそれがある枝</Hl>は、剪定業者に相談してください。「付け根の膨らみを残して二段切りで落としてほしい」と伝えると、作業の内容を共有しやすくなります。ぶつ切りの扱いは<a href={ASHIYA} className={A} target="_blank" rel="noopener noreferrer">芦屋市「街路樹等維持管理基本書」（PDF）</a>（2026年11月27日確認）によります。
    </p>,
    <p key="2">
      切った後の切り口の処理は<Link href="/sentei-kirikuchi-yugozai/" className={A}>木を切った後の切り口の処理</Link>、透かし・切り詰め・切り返しの違いは<Link href="/sentei-towa/" className={A}>剪定とは</Link>、高い位置の作業の危険は<Link href="/takagi-sentei-kiken/" className={A}>高い木の剪定を自分で行う危険性</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "太い枝の枝下ろしを業者に相談する",
  ctaText: "鋸を使う太い枝の切り落としや、高い位置の枝の作業は、業者に任せると安心です。",
  faqHeading: "枝下ろしでよくある質問",
  faqs: [
    {
      q: "枝下ろしとは何ですか？",
      a: "熊本市のガイドラインは、剪定鋏では切れない太い枝を付け根から大きく切り落とす場合を「枝下ろし」としています。埼玉県のマニュアルは「主枝を主幹の付根部分から切り取る剪定」と説明しています。",
    },
    {
      q: "枝下ろしと透かし剪定の違いは何ですか？",
      a: "埼玉県のマニュアルでは、枝おろし剪定は大枝を幹の付け根から切り透かす剪定で、枝透かし剪定は主枝の一部・副主枝・側枝を分枝部分から切り透かす剪定です。熊本市は、枝下ろしの後に大透かし・中透かし・小透かしを行う手順を示しています。",
    },
    {
      q: "太い枝はどこで切ればよいですか？",
      a: "埼玉県のマニュアルは、枝の付け根のブランチカラーを傷つけず、それに近い枝の組織で切るとしています。幹に接して切るフラッシュカットは避けるとしています。",
    },
    {
      q: "二段切りとは何ですか？",
      a: "埼玉県のマニュアルでは、大枝を切るときに、先に切断位置の上部で短く切って枝を軽くし、その後に適切な切断位置で切り戻す方法です。枝の重さで付け根が裂けるのを避けるために行います。",
    },
  ],
  related: [
    { href: "/sentei-kirikuchi-yugozai/", label: "木を切った後の切り口の処理", desc: "付け根の膨らみと癒合剤" },
    { href: "/sentei-towa/", label: "剪定とは", desc: "透かし・切り詰め・切り返しの違い" },
    { href: "/imieda/", label: "忌み枝とは", desc: "剪定で取り除く不要枝" },
    { href: "/edauchi/", label: "枝打ちとは", desc: "スギ・ヒノキの生枝を落とす作業" },
  ],
};

export default function EdaoroshiPage() {
  return <KnowArticle data={data} />;
}
