import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/shibafu-3gatsu-teire/";
const A = "text-[#2D7F3E] underline";
const SAITAMA5 = "https://www.pref.saitama.lg.jp/documents/4745/shibamanual20206.pdf";
const YOKOHAMA_KISETSU = "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/midori-koen/midori_up/3ryokuka/hoikuentouryokuka.files/0017_20240206.pdf";
const SHIZUOKA = "https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/016/967/turfmaintenancemanual.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "芝生の3月の手入れ｜まだ休眠期。冬の雑草取りと乾いたときの散水だけ。下旬の芽出しからは踏むのを控える｜お庭のミカタ",
  },
  description:
    "夏芝の3月の手入れを、埼玉県・横浜市・静岡県の芝生管理マニュアルをもとに整理しました。3月にすること（冬の雑草取り・乾燥時の散水）と、芽出しが始まる下旬に控えること、4月に向けた準備をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "芝生の3月の手入れ",
    description:
      "埼玉県のマニュアルでは、2〜3月の芝生は休眠状態で、芝刈りや施肥は必要なく、散水は乾燥したら月1回行う程度としています。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; item: string; value: string }[] = [
  { src: "埼玉県（年間スケジュール・夏芝の目安）", item: "3月の作業", value: "2〜3月は芝生は休眠状態で枯葉色。生長しない。作業は12〜1月と同様で、ほとんどない（芝刈りや施肥は必要ない・散水は冬場、乾燥したら月1回行う程度・表面の枯葉などを除く・エアレーションなどの更新作業は行わない）。降り積もった雪は長時間放置しない" },
  { src: "埼玉県（同・年間スケジュールの表）", item: "冬の除草", value: "除草の行に「冬の雑草を取り除く」" },
  { src: "横浜市（春の管理の目安）", item: "芽出しの時期", value: "ティフトン419は一日の最高気温が3〜4日連続して15℃を超える頃（横浜の平年では3月下旬）に、冬の休眠から目覚め新しい芽を出し始める" },
  { src: "横浜市（同）", item: "3月下旬の使い方", value: "スムーズに新芽を出させるために、3月下旬頃には一日の利用時間を普段の半分程度に控えるのが効果的。更新作業を行う場合は、この時期から準備を始める" },
  { src: "横浜市（同）", item: "散水", value: "3〜4月は定期的に雨が降るので散水の必要がない場合が多い" },
  { src: "静岡県（バミューダグラスの管理）", item: "芽出し時期の養生", value: "芽出したばかりの芝生は擦り切れなどに弱いため、芽出し始めてからの2〜3週間の利用は控えめにした方が良い" },
  { src: "静岡県（同）", item: "最初の肥料・冬の散水", value: "施肥は芽出しし、葉が緑になりだした2週間後ぐらいから。3月下旬〜4月上旬頃が1回目。冬に降雨が10日〜2週間ない場合は、芝生表面を濡らす程度の軽い散水" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">資料</th>
          <th className="border px-2 py-2 text-left">項目</th>
          <th className="border px-2 py-2 text-left">記載</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src + r.item}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.item}</td>
            <td className="border px-2 py-2">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月28日に、埼玉県「芝生化マニュアル」第5章（維持管理の年間スケジュールと月ごとの作業内容）、横浜市「校庭・園庭芝生管理マニュアル」季節ごとの管理の目安、静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」を開き、3月にかかわる記載を当サイトで並べました。いずれも校庭・園庭の夏芝（ティフトン・バミューダグラスなど）向けの資料です。高麗芝・野芝なども夏芝ですが、芽出しの時期は地域と芝の種類で前後します。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "shibafu-3gatsu-teire",
  published: "2026-11-28",
  updatedLabel: "2026年11月28日",
  h1: "芝生の3月の手入れ｜まだ休眠期。冬の雑草取りと乾いたときの散水だけ。下旬の芽出しからは踏むのを控える",
  breadcrumbLabel: "芝生の3月の手入れ",
  tagChips: ["芝生", "3月", "休眠期", "芽出し", "冬の雑草"],
  ldHeadline: "芝生の3月の手入れ｜まだ休眠期。冬の雑草取りと乾いたときの散水だけ。下旬の芽出しからは踏むのを控える",
  ldDescription:
    "夏芝の3月の手入れを、埼玉県・横浜市・静岡県の芝生管理マニュアルをもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        夏芝の3月は、まだ<Hl>休眠期</Hl>です。埼玉県のマニュアルは、2〜3月の芝生は休眠状態で生長せず、作業は12〜1月と同様で<Hl>ほとんどない</Hl>としています。芝刈りや施肥は必要なく、<Hl>散水は乾燥したら月1回行う程度</Hl>、年間スケジュールの除草の行には<Hl>冬の雑草を取り除く</Hl>とあります（出典：<a href={SAITAMA5} className={A} target="_blank" rel="noopener noreferrer">埼玉県 芝生化マニュアル 第5章 維持管理をしよう（PDF）</a>、2026年11月28日確認）。
      </p>
      <p>
        変わり目は<Hl>3月下旬</Hl>です。横浜市のマニュアルは、ティフトン419が最高気温15℃超の日が3〜4日続く頃（横浜の平年で3月下旬）に新しい芽を出し始め、その頃は<Hl>一日の利用時間を普段の半分程度に控える</Hl>のが効果的としています（出典：<a href={YOKOHAMA_KISETSU} className={A} target="_blank" rel="noopener noreferrer">横浜市「校庭・園庭芝生管理マニュアル」季節ごとの管理の目安（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "3月の芝生は、冬の雑草を抜き、雨が続かず乾いたときだけ水をやります。下旬に芽が動き出したら踏む回数を減らし、緑になり始めてから2週間ほどで4月の肥料・芝刈りに移ります。",
  conclusionBody: (
    <>
      <p>3つの資料の、3月にかかわる記載を並べると、次のとおりです。</p>
      {table}
      <p className="mt-4">
        3つの資料に共通するのは、<Hl>3月は「何かを足す」より「芽出しを邪魔しない」月</Hl>だという点です（当サイトの整理）。肥料は、静岡県が葉が緑になりだした2週間後ぐらい（3月下旬〜4月上旬頃）を1回目としており、3月上旬の休眠中に急いで与える必要はありません。
      </p>
    </>
  ),
  basicsHeading: "3月の芝生について知っておきたい4つのこと",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "ポイント",
  basics: [
    {
      title: "3月はまだ休眠期",
      desc: "埼玉県は、2〜3月の芝生は休眠状態で枯葉色、生長しないとし、作業は12〜1月と同様でほとんどないとしています。",
    },
    {
      title: "芽出しは気温で決まる",
      desc: "横浜市は、ティフトン419が最高気温15℃超の日が3〜4日続く頃に新しい芽を出し始めるとしています。横浜の平年では3月下旬です。",
    },
    {
      title: "芽出し直後は擦り切れに弱い",
      desc: "静岡県は、芽出したばかりの芝生は擦り切れなどに弱いため、芽出し始めてから2〜3週間の利用は控えめにした方が良いとしています。",
    },
    {
      title: "3月は雨で足りることが多い",
      desc: "横浜市は、3〜4月は定期的に雨が降るので散水の必要がない場合が多いとしています。静岡県は、冬に雨が10日〜2週間ない場合に、表面を濡らす程度の軽い散水をするとしています。",
    },
  ],
  stepsHeading: "芝生の3月の手入れ4つの手順",
  stepsIntro: <p>埼玉県・横浜市・静岡県の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "冬の雑草を抜く",
      desc: "埼玉県の年間スケジュールは、冬の除草を「冬の雑草を取り除く」としています。芝が茶色いうちは緑の雑草が見つけやすい時期です。",
    },
    {
      title: "雨が続かないときだけ水をやる",
      desc: "埼玉県は、冬場の散水を乾燥したら月1回行う程度としています。静岡県の目安は、雨が10日〜2週間ないときに表面を濡らす程度です。",
    },
    {
      title: "下旬、芽が動き出したら踏む回数を減らす",
      desc: "横浜市は3月下旬頃に利用時間を普段の半分程度に、静岡県は芽出しから2〜3週間の利用を控えめにとしています。",
    },
    {
      title: "4月の作業の準備をする",
      desc: "横浜市は、更新作業を行う場合はこの時期から準備を始めるとしています。静岡県は、1回目の肥料を3月下旬〜4月上旬頃としています。芝刈り機や肥料をそろえておきます。",
    },
  ],
  ngHeading: "芝生の3月の手入れで避けたいこと",
  ngs: [
    {
      title: "休眠中に芝刈りや施肥を始めることは避けます",
      desc: "埼玉県は、休眠中は芝刈りや施肥は必要ないとし、エアレーションなどの更新作業も芝を傷つけるので行わないとしています。",
    },
    {
      title: "芽出し直後に強く踏み込むことは避けます",
      desc: "静岡県は、芽出したばかりの芝生は擦り切れなどに弱いとしています。",
    },
    {
      title: "雨が降っているのに毎日水をやることは避けます",
      desc: "横浜市は、3〜4月は散水の必要がない場合が多いとしています。土の乾き具合を見てから判断します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>冬の間に雑草が広がった芝生、春から張り替えや補修をしたい芝生</Hl>は、3月のうちに業者に相談しておくと、芽出し後の作業に間に合わせやすくなります。埼玉県のマニュアルは、芝張り・張り替え・補修を芝生が活動を始める4〜5月から行うとしています（<a href={SAITAMA5} className={A} target="_blank" rel="noopener noreferrer">埼玉県 芝生化マニュアル 第5章（PDF）</a>）。芽出しと養生は<a href={YOKOHAMA_KISETSU} className={A} target="_blank" rel="noopener noreferrer">横浜市のマニュアル（PDF）</a>と<a href={SHIZUOKA} className={A} target="_blank" rel="noopener noreferrer">静岡県「誰にでもできるバミューダグラスによる園庭・校庭の芝生管理マニュアル」（PDF）</a>によります（いずれも2026年11月28日確認）。
    </p>,
    <p key="2">
      4月からの作業は<Link href="/shibafu-4gatsu-teire/" className={A}>芝生の4月の手入れ</Link>、1年の流れは<Link href="/shibafu-teire/" className={A}>芝生の手入れの基本</Link>、芝生の雑草は<Link href="/shibafu-zasso/" className={A}>芝生に雑草が増える</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "芝生の手入れを業者に相談する",
  ctaText: "冬の雑草取りや、春の張り替え・補修は、業者に任せると芽出しに合わせて進められます。",
  faqHeading: "芝生の3月の手入れでよくある質問",
  faqs: [
    {
      q: "3月に芝刈りは必要ですか？",
      a: "埼玉県のマニュアルでは、2〜3月の芝生は休眠状態で生長せず、芝刈りは必要ないとしています。芝刈りは芝が伸び始める4月からです。",
    },
    {
      q: "3月に肥料を与えてもよいですか？",
      a: "静岡県のマニュアルは、葉が緑になりだした2週間後ぐらいから施肥を始め、3月下旬〜4月上旬頃を1回目としています。休眠中の3月上旬に与える必要はありません。",
    },
    {
      q: "3月に水やりは必要ですか？",
      a: "横浜市は3〜4月は散水の必要がない場合が多いとしています。埼玉県は冬場の散水を乾燥したら月1回、静岡県は雨が10日〜2週間ないときに表面を濡らす程度としています。",
    },
    {
      q: "芝生が緑になり始めるのはいつですか？",
      a: "横浜市のマニュアルでは、ティフトン419は最高気温15℃超の日が3〜4日続く頃（横浜の平年で3月下旬）に新しい芽を出し始めるとしています。地域や芝の種類で前後します。",
    },
  ],
  related: [
    { href: "/shibafu-4gatsu-teire/", label: "芝生の4月の手入れ", desc: "芝刈り・肥料・除草の始まり" },
    { href: "/shibafu-teire/", label: "芝生の手入れの基本", desc: "1年の流れ" },
    { href: "/shibafu-aki-fuyu-teire/", label: "芝生の秋冬の手入れ", desc: "冬の踏圧と落ち葉" },
    { href: "/shibafu-zasso/", label: "芝生に雑草が増える", desc: "手取りと除草剤の判断" },
    { href: "/haru-niwa-checklist/", label: "春の庭仕事チェックリスト", desc: "冬明けの作業" },
  ],
};

export default function Shibafu3gatsuTeirePage() {
  return <KnowArticle data={data} />;
}
