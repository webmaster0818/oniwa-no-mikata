import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kuzu-kujo/";
const A = "text-[#2D7F3E] underline";
const TOTTORI_CARD = "https://www.pref.tottori.lg.jp/secure/1018341/card2015-2.pdf";
const TOTTORI = "https://www.pref.tottori.lg.jp/secure/1019291/53f02.pdf";
const JSRT = "https://www.jstage.jst.go.jp/article/jjsrt/44/4/44_596/_article/-char/ja/";

export const metadata: Metadata = {
  title: {
    absolute: "葛（クズ）の駆除｜刈るだけでは再生する。根を抜くか、秋に根まで枯らす｜お庭のミカタ",
  },
  description:
    "庭や空き地にはびこる葛（クズ）の駆除方法を、鳥取県農業試験場の試験成果と日本緑化工学会誌の研究をもとに整理しました。刈り取りだけで再生する理由、除草剤が効きやすい時期、引き抜きの効果を解説します。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "葛（クズ）の駆除",
    description:
      "クズは夏に刈っても再生します。鳥取県の試験成果と法面での3年間の試験から、駆除の時期と方法を整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { method: string; result: string; src: string }[] = [
  {
    method: "7月上旬の刈り取り（フレールモア）のみ",
    result: "クズは迅速に再生し、9月上旬の繁茂量は無処理区と同等",
    src: "鳥取県農業試験場",
  },
  {
    method: "9月の刈り取り＋10月の除草剤（グリホサート系）散布",
    result: "クズは概ね枯死し、翌年の耕耘が可能に。7月にも処理した区では翌年の再生は皆無",
    src: "鳥取県農業試験場",
  },
  {
    method: "夏までのグリホサート系除草剤の使用",
    result: "秋の処理と比べてクズへの効果が極端に低く、使用は奨めない",
    src: "鳥取県農業試験場",
  },
  {
    method: "引き抜き（切土法面・3年間）",
    result: "クズを根絶。約1年は裸地になったが、その後は植生が回復",
    src: "日本緑化工学会誌",
  },
  {
    method: "年2回の刈り取り・薬剤の注入（同）",
    result: "密度は下がったが、根絶には至らなかった",
    src: "日本緑化工学会誌",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">方法</th>
          <th className="border px-2 py-2 text-left">試験の結果</th>
          <th className="border px-2 py-2 text-left">資料</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.method}>
            <td className="border px-2 py-2">{r.method}</td>
            <td className="border px-2 py-2">{r.result}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に鳥取県農業試験場の成果情報（耕作放棄歴約20年の畑での2014年の試験）と、日本緑化工学会誌44巻4号の論文（切土法面での3年間の試験）を開き、方法ごとの結果を当サイトで並べました。いずれも庭での試験ではないため、庭の広さや周囲の植物によって結果は異なります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "kuzu-kujo",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "葛（クズ）の駆除｜刈るだけでは再生する。根を抜くか、秋に根まで枯らす",
  breadcrumbLabel: "葛（クズ）の駆除",
  tagChips: ["クズ", "葛", "つる性雑草", "除草剤", "空き地"],
  ldHeadline: "葛（クズ）の駆除｜刈るだけでは再生する。根を抜くか、秋に根まで枯らす",
  ldDescription:
    "葛（クズ）の駆除の時期と方法を、鳥取県農業試験場の試験成果と日本緑化工学会誌の研究をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        鳥取県農業試験場の成果情報では、クズは<Hl>5月中旬頃から発生し始め、梅雨時期に生育が旺盛となり、9〜10月に蔓延する</Hl>とし、7月上旬に刈り取っただけでは<Hl>迅速に再生し9月上旬の繁茂量は無処理区と同等</Hl>だったとしています（出典：<a href={TOTTORI_CARD} className={A} target="_blank" rel="noopener noreferrer">鳥取県農業試験場成果情報 2015-03「耕作放棄地に蔓延したクズの効率的な体系処理方法」（PDF）</a>、2026年11月23日確認）。
      </p>
      <p>
        本記事では、この試験成果と法面での研究を照合し、庭や空き地のクズを駆除する方法を整理します。
      </p>
    </>
  ),
  conclusionTitle: "クズは地上部を刈るだけでは再生します。株が小さいうちは根ごと抜き、広がった場所は刈り取りと秋の除草剤を組み合わせます。",
  conclusionBody: (
    <>
      <p>
        日本緑化工学会誌に掲載された研究では、切土法面で3年間、5つの方法を比べたところ、<Hl>引き抜きと遮光の処理でクズが根絶</Hl>し、その他の方法は密度を下げたものの根絶には至らなかったとしています（出典：<a href={JSRT} className={A} target="_blank" rel="noopener noreferrer">日本緑化工学会誌 44巻4号「切土法面植生に配慮した強害雑草クズの根絶手法の探索」（J-STAGE）</a>、2026年11月23日確認）。鳥取県の試験とあわせて方法ごとの結果を並べると、次のとおりです。
      </p>
      {table}
    </>
  ),
  basicsHeading: "クズの駆除で押さえたい4つの基本",
  basicsIntro: <p>以下は、各資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "夏に刈っても秋までに戻る",
      desc: "鳥取県の試験では、7月上旬に刈り取った区も9月上旬の繁茂量は無処理区と同等でした。刈り取りは、それだけで終わらせず次の処理につなげます。",
    },
    {
      title: "根まで枯らすなら9〜10月",
      desc: "鳥取県の資料では、除草剤でクズなどの宿根草を根まで枯らす場合、養分転流期である9〜10月頃が効果的な散布時期であると言われているとしています。",
    },
    {
      title: "引き抜きは根絶につながる",
      desc: "法面での研究では、引き抜きでクズが根絶し、初回の処理の後に植生も回復しました。株が少ないうちに抜くことが有効です。",
    },
    {
      title: "早めに手を付けるほど楽になる",
      desc: "鳥取県の成果情報では、効率的にクズを処理するためには秋からの処理では遅く、夏までに処理を始めることが望ましいとしています。",
    },
  ],
  stepsHeading: "庭や空き地のクズを駆除する4つの手順",
  stepsIntro: <p>各資料の結果をもとに、作業の流れを整理したものです。</p>,
  steps: [
    {
      title: "株元を探し、小さい株は根ごと抜く",
      desc: "つるをたどって地面から出ている株元を探します。法面の研究では引き抜きで根絶できたとしています。",
    },
    {
      title: "夏までに一度刈り取る",
      desc: "鳥取県の試験では、7月上旬の処理をしておいた区で、秋の処理の翌年にクズの再生が皆無でした。庭木やフェンスに絡んだつるも切っておきます。",
    },
    {
      title: "9月に刈り取り、再生を待つ",
      desc: "鳥取県の試験では9月上旬に刈り取り、その約1か月後に除草剤を散布しています。刈ってから1か月より早く散布すると、その後に再生してくる個体もあるとしています。",
    },
    {
      title: "10月上旬に、再生した葉へ除草剤を散布する",
      desc: "鳥取県の資料では、気温が冷え込まず除草剤が吸収移行しやすい10月上旬が適するとしています。家庭で使う場合は、クズに登録のある製品を選び、ラベルの使用方法を守ります。",
    },
  ],
  ngHeading: "クズの駆除で避けたいこと",
  ngs: [
    {
      title: "夏に除草剤だけで済ませることは避けます",
      desc: "鳥取県の成果情報では、夏までの処理でのグリホサート系除草剤の使用は、秋の処理と比較するとクズへの効果が極端に低いので、その使用を奨めないとしています。",
    },
    {
      title: "試験の濃度をそのまま家庭で使うことは避けます",
      desc: "鳥取県の試験は耕作放棄地で行ったもので、農業用の濃度・散布量です。庭木や芝生の近くでは、製品ラベルの使用方法と対象を確認してください。",
    },
    {
      title: "一度刈っただけで終わりにすることは避けます",
      desc: "法面の研究では、年2回の刈り取りは密度を下げたものの根絶には至りませんでした。翌年も株元から再生していないかを確かめます。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>空き地や斜面一面にクズが広がっている、庭木や電線にまで絡んでいる、除草剤を自分で扱いたくない</Hl>といった場合は、草刈り・除草の業者に相談すると作業がまとまります。依頼するときは、広さ、斜面かどうか、近くに残したい庭木や畑があるかを伝えてください。
    </p>,
    <p key="2">
      つる植物全般の管理は<Link href="/tsuru-shokubutsu-kanri/" className={A}>ツル植物の管理の基本</Link>、除草剤の選び方と注意は<Link href="/josozai-anzen/" className={A}>庭で除草剤を安全に使うには</Link>、斜面の草刈りは<Link href="/kusakari-shamen/" className={A}>斜面の草刈り</Link>、業者ごとの料金の出し方は<Link href="/agents/" className={A}>庭業者の一覧・比較</Link>にまとめています。試験の詳細は<a href={TOTTORI} className={A} target="_blank" rel="noopener noreferrer">鳥取県 研究成果「耕作放棄地に蔓延したクズの効率的な体系処理方法」（PDF）</a>（2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "広さと周りの植物を伝えて相談する",
  ctaText:
    "クズは刈るだけでは再生するため、根を抜くか、秋に根まで枯らす処理が必要です。広い範囲や斜面は、業者と相談すると安心です。",
  faqHeading: "葛（クズ）の駆除のよくある質問",
  faqs: [
    {
      q: "クズを刈っても、すぐにまた伸びてきます。",
      a: "鳥取県農業試験場の試験では、7月上旬に刈り取った区も、9月上旬にはクズの繁茂量が無処理区と同等に戻っていました。刈り取りだけでは根が残るため、引き抜きや秋の除草剤と組み合わせます。",
    },
    {
      q: "除草剤はいつ散布すると効きますか？",
      a: "鳥取県の資料では、宿根草を根まで枯らす場合は養分転流期である9〜10月頃が効果的と言われているとし、試験では10月上旬の散布が適すると考えられるとしています。夏までのグリホサート系除草剤の使用は効果が極端に低いため奨めないとしています。",
    },
    {
      q: "除草剤を使わずに駆除できますか？",
      a: "日本緑化工学会誌の研究では、切土法面での3年間の試験で、引き抜きと遮光の処理でクズが根絶したとしています。引き抜きは、その後の植生の回復も見られたとしています。",
    },
    {
      q: "クズはいつごろから伸び始めますか？",
      a: "鳥取県農業試験場の成果情報では、クズは5月中旬頃から発生し始め、梅雨時期に生育が旺盛となり、9〜10月に蔓延するとしています。",
    },
  ],
  related: [
    {
      href: "/tsuru-shokubutsu-kanri/",
      label: "ツル植物の管理の基本",
      desc: "フェンス・壁面の誘引と繁茂対策",
    },
    {
      href: "/josozai-anzen/",
      label: "庭で除草剤を安全に使うには",
      desc: "選び方と使うときの注意",
    },
    {
      href: "/seitakaawadachiso-kujo/",
      label: "セイタカアワダチソウの駆除",
      desc: "根で広がる雑草の対処",
    },
    {
      href: "/akiya-niwa-kanri/",
      label: "空き家の庭の管理",
      desc: "放置された庭の手入れ",
    },
  ],
};

export default function KuzuKujoPage() {
  return <KnowArticle data={data} />;
}
