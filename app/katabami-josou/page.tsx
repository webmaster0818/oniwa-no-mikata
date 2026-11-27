import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/katabami-josou/";
const A = "text-[#2D7F3E] underline";
const TOKYO = "https://www.kyoiku.metro.tokyo.lg.jp/documents/d/kyoiku/manual06";
const SAITAMA5 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20206.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "カタバミの除草｜地下の球根と肥大した根を残すと再生する。花が咲く5月から、種をつける前に根ごと掘り取る｜お庭のミカタ",
  },
  description:
    "庭や芝生に広がるカタバミの除草を、東京都教育委員会と埼玉県の芝生管理マニュアルをもとに整理しました。多年草で生育期間は通年、花期は5月〜11月。基部の地下にある球根と根を取り除かないと再生します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "カタバミの除草",
    description:
      "カタバミは、基部の地下に球根と肥大した根がある多年草です。球根などを取り除かないと再生します。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; note: string }[] = [
  { src: "東京都教育委員会", item: "カタバミの特徴", note: "多年草・双子葉植物。生育期間は通年、花期は5月〜11月。ほふくして広がる" },
  { src: "東京都教育委員会", item: "再生のしかた", note: "基部の地下に球根と肥大した根がある。球根などを取り除かないと再生する" },
  { src: "東京都教育委員会", item: "多年草の除草のポイント", note: "芝刈りで種子を結実させない。植物本体は確実に除草する必要がある" },
  { src: "東京都教育委員会", item: "双子葉植物の除草のポイント", note: "主根をなるべく深く取り除く" },
  { src: "埼玉県", item: "除草のポイント", note: "発生初期に根っこから除草するのが効果的。芝刈り回数が多いほど芝生が密になり、雑草が生えにくくなる" },
  { src: "埼玉県", item: "除草フォーク", note: "雑草を根から取り除くことができる。抜いたあとの穴は目砂で埋めるとよい" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載の要点</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.item}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月27日に、東京都教育委員会「芝生の異常──こんな時は？」（園庭・校庭における芝生維持管理マニュアル「主な雑草と特徴」「除草のための基礎知識とポイント」）と、埼玉県 芝生化マニュアル 第5章 維持管理をしよう（除草）を開き、カタバミと除草の方法に関する記載を当サイトで並べました。埼玉県の資料はカタバミを名指ししておらず、芝生の雑草全般についての記載です。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "katabami-josou",
  published: "2026-11-27",
  updatedLabel: "2026年11月27日",
  h1: "カタバミの除草｜地下の球根と肥大した根を残すと再生する。花が咲く5月から、種をつける前に根ごと掘り取る",
  breadcrumbLabel: "カタバミの除草",
  tagChips: ["カタバミ", "雑草", "除草", "多年草", "芝生の雑草"],
  ldHeadline: "カタバミの除草｜地下の球根と肥大した根を残すと再生する。花が咲く5月から、種をつける前に根ごと掘り取る",
  ldDescription:
    "庭や芝生に広がるカタバミの除草を、東京都教育委員会と埼玉県の芝生管理マニュアルをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        カタバミは、<Hl>基部の地下に球根と肥大した根がある多年草</Hl>です。東京都教育委員会のマニュアルは、カタバミの生育期間を通年、花期を5月〜11月とし、「球根などを取り除かないと再生する」としています（出典：<a href={TOKYO} className={A} target="_blank" rel="noopener noreferrer">東京都教育委員会「芝生の異常──こんな時は？」（PDF）</a>、2026年11月27日確認）。
      </p>
      <p>
        地上の葉や茎をちぎるだけでは、地下の球根からまた生えてきます。<Hl>除草フォークや移植ごてで株の下の土ごと起こし、球根と根まで取り出す</Hl>のが基本です。埼玉県の芝生化マニュアルは、発生初期に根っこから除草するのが効果的としています（出典：<a href={SAITAMA5} className={A} target="_blank" rel="noopener noreferrer">埼玉県 芝生化マニュアル 第5章 維持管理をしよう（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "カタバミは、小さいうちに株の下の球根と根まで掘り取り、花が咲いている間は種をつけさせない。芝生は刈り込みで密にして入り込ませない。",
  conclusionBody: (
    <>
      <p>2つのマニュアルの記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        花期が5月〜11月と長いため、<Hl>春から秋まで、花を見つけたらそのつど抜く</Hl>ことになります。一度で終わらせようとせず、生え始めを見つけて根ごと取ることを続けるのが、資料から読める進め方です（当サイトの整理）。
      </p>
    </>
  ),
  basicsHeading: "カタバミの除草で知っておきたい4つの性質",
  basicsIntro: <p>以下は、2つのマニュアルに書かれている内容を整理したものです。</p>,
  basicsLabel: "性質",
  basics: [
    {
      title: "一年中葉がある多年草",
      desc: "東京都教育委員会は、カタバミを多年草・双子葉植物とし、生育期間を通年としています。",
    },
    {
      title: "地下に球根と肥大した根",
      desc: "東京都教育委員会は、基部の地下に球根と肥大した根があり、球根などを取り除かないと再生するとしています。",
    },
    {
      title: "地面をはって広がる",
      desc: "東京都教育委員会は、カタバミは「ほふくして広がる」としています。芝生のすき間や花壇の縁に入り込みます。",
    },
    {
      title: "花は5月〜11月",
      desc: "東京都教育委員会は、花期を5月〜11月としています。多年草でも種子で増えるため、芝刈りで種子を結実させないことを除草のポイントに挙げています。",
    },
  ],
  stepsHeading: "カタバミを除草する4つの手順",
  stepsIntro: <p>2つのマニュアルの記載にもとづく流れです。</p>,
  steps: [
    {
      title: "生え始めの小さい株を探す",
      desc: "埼玉県は、発生初期に根っこから除草するのが効果的としています。広がる前の株ほど、球根まで取り出しやすくなります。",
    },
    {
      title: "株の下の土ごと起こす",
      desc: "埼玉県は、雑草を根から取り除ける道具として除草フォークを紹介しています。株の根元に差し込み、土を持ち上げます。",
    },
    {
      title: "球根と根を取り出す",
      desc: "東京都教育委員会は、球根などを取り除かないと再生する、双子葉植物は主根をなるべく深く取り除くとしています。土の中に残っていないか確かめます。",
    },
    {
      title: "穴を埋め、芝生はこまめに刈る",
      desc: "埼玉県は、抜いたあとの穴は目砂で埋めるとよいとし、芝刈り回数が多いほど芝生が密になり雑草が生えにくくなるとしています。",
    },
  ],
  ngHeading: "カタバミの除草で避けたいこと",
  ngs: [
    {
      title: "葉と茎だけをちぎることは避けます",
      desc: "東京都教育委員会は、球根などを取り除かないと再生するとしています。",
    },
    {
      title: "花が咲いたまま放置することは避けます",
      desc: "東京都教育委員会は、多年草も芝刈りで種子を結実させないことを除草のポイントに挙げています。花期は5月〜11月です。",
    },
    {
      title: "芝生全体に除草剤をまくことは避けます",
      desc: "除草剤は、ラベルの適用場所（芝など）と適用雑草を確かめて使います。芝生に使えない製品をまくと芝も枯れます。選び方は「庭で除草剤を安全に使うには」にまとめています（当サイトの注意）。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>芝生や庭の広い範囲にカタバミが広がり、手で掘り取りきれない</Hl>ときは、草刈り・除草の業者に相談してください。「地上部の刈り取りか、根まで取るのか」「芝生の張り替えも含めるのか」で作業の範囲と費用が変わります。業者には範囲を先に伝えて見積もりを取ります（当サイトの整理）。
    </p>,
    <p key="2">
      除草剤の選び方は<Link href="/josozai-anzen/" className={A}>庭で除草剤を安全に使うには</Link>、同じくほふくして広がる雑草は<Link href="/clover-zasso-taisaku/" className={A}>クローバー（シロツメクサ）の雑草対策</Link>、芝生の雑草全般は<Link href="/shibafu-zasso/" className={A}>芝生に雑草が増える</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "カタバミの除草を業者に相談する",
  ctaText: "広い範囲に広がったカタバミや、芝生ごと立て直したいときは、業者に任せると安心です。",
  faqHeading: "カタバミの除草でよくある質問",
  faqs: [
    {
      q: "カタバミは抜いてもまた生えてくるのはなぜですか？",
      a: "東京都教育委員会のマニュアルは、カタバミは基部の地下に球根と肥大した根があり、球根などを取り除かないと再生するとしています。",
    },
    {
      q: "カタバミはいつ除草すればよいですか？",
      a: "埼玉県のマニュアルは、発生初期に根っこから除草するのが効果的としています。東京都教育委員会の資料では花期は5月〜11月なので、花が咲く前、咲いたら種をつける前に抜きます。",
    },
    {
      q: "どんな道具で抜けばよいですか？",
      a: "埼玉県のマニュアルは、雑草を根から取り除ける道具として除草フォークを紹介しています。抜いたあとの穴は目砂で埋めるとよいとしています。",
    },
    {
      q: "芝生のカタバミを減らすにはどうすればよいですか？",
      a: "根ごと抜くことに加え、芝生を密にします。埼玉県は、芝刈り回数が多いほど芝生が密になり、雑草が生えにくくなるとしています。",
    },
  ],
  related: [
    { href: "/clover-zasso-taisaku/", label: "クローバー（シロツメクサ）の雑草対策", desc: "同じくほふくして広がる多年草" },
    { href: "/shibafu-zasso/", label: "芝生に雑草が増える", desc: "増える理由と対処" },
    { href: "/josozai-anzen/", label: "庭で除草剤を安全に使うには", desc: "登録表示とラベルの確認" },
    { href: "/5gatsu-zasso/", label: "5月の雑草", desc: "5月に目立つ雑草と草取り" },
  ],
};

export default function KatabamiJosouPage() {
  return <KnowArticle data={data} />;
}
