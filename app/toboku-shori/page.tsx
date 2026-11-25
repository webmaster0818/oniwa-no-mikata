import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/toboku-shori/";
const A = "text-[#2D7F3E] underline";
const MLIT = "https://www.thr.mlit.go.jp/iwate/michi/pdf/bassai.pdf";
const TEPCO = "https://www.tepco.co.jp/disaster/taifu_kousetu.html";
const SHIROI = "https://www.city.shiroi.chiba.jp/material/files/group/1/0608ecocivic.pdf";
const EGOV = "https://laws.e-gov.go.jp/law/129AC0000000089";

export const metadata: Metadata = {
  title: {
    absolute: "倒木の処理｜電線にかかっていたら近づかず電力会社へ。庭の木は所有者が片付け、道路に出たら道路管理者へ｜お庭のミカタ",
  },
  description:
    "庭木や敷地の木が倒れたときの処理の順番を、倒れた先（電線・道路・隣地・自分の敷地）ごとに整理しました。東京電力、国土交通省の出張所、白井市の資料と民法の条文を確認しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "倒木の処理",
    description:
      "倒木は、倒れた先によって連絡先が変わります。電線にかかっていれば電力会社、道路に出ていれば道路管理者、自分の敷地の中なら所有者が片付けます。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { place: string; first: string; src: string }[] = [
  { place: "電線にかかっている・電線が切れている", first: "近づかず、触らずに電力会社へ連絡する", src: "東京電力・白井市" },
  { place: "道路（歩道・車道）に出ている", first: "道路管理者（国道なら国の出張所、県道・市道は県・市）へ連絡。片付けの作業前にも連絡する", src: "国土交通省 岩手河川国道事務所" },
  { place: "隣の家・車などに被害が出た", first: "木の所有者・占有者が責任を問われる場合がある。被害の写真を残し、相手と保険会社に連絡する", src: "民法第717条・国土交通省" },
  { place: "自分の敷地の中だけ", first: "所有者が片付ける。太い幹・かかり木は無理をせず業者へ。枝は市のルールで処分する", src: "当サイトの整理" },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">倒れた先</th>
          <th className="border px-2 py-2 text-left">最初にすること</th>
          <th className="border px-2 py-2 text-left">根拠</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.place}>
            <td className="border px-2 py-2">{r.place}</td>
            <td className="border px-2 py-2">{r.first}</td>
            <td className="border px-2 py-2">{r.src}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月25日に、東京電力ホールディングス「台風・降雪のときは？」、国土交通省 東北地方整備局 岩手河川国道事務所「道路まではみ出している樹木等の伐採のお願い」、白井市の公開資料「電線に伸びた庭木について」（令和6年度8月分）、e-Gov法令検索の民法（第717条）を開き、倒れた先ごとの対応を当サイトで整理しました。連絡先の窓口名は地域・道路の種類によって異なります。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "toboku-shori",
  published: "2026-11-25",
  updatedLabel: "2026年11月25日",
  h1: "倒木の処理｜電線にかかっていたら近づかず電力会社へ。庭の木は所有者が片付け、道路に出たら道路管理者へ",
  breadcrumbLabel: "倒木の処理",
  tagChips: ["倒木", "台風", "電線", "所有者の責任", "伐採"],
  ldHeadline: "倒木の処理｜電線にかかっていたら近づかず電力会社へ。庭の木は所有者が片付け、道路に出たら道路管理者へ",
  ldDescription:
    "庭木や敷地の木が倒れたときの処理の順番を、倒れた先ごとに、電力会社・国土交通省・白井市の資料と民法の条文をもとに整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        木が倒れたら、まず<Hl>電線にかかっていないか</Hl>を確かめます。東京電力は、樹木などが電線を傷つけ断線する場合があるとし、「切れてたれ下がっている電線には、絶対に手を触れないでください」「電線に樹木や看板、アンテナなどが接触している場合もたいへん危険です」として、見つけたら近づかずに連絡するよう呼びかけています（出典：<a href={TEPCO} className={A} target="_blank" rel="noopener noreferrer">東京電力ホールディングス「台風・降雪のときは？」</a>、2026年11月25日確認）。
      </p>
      <p>
        道路に倒れた場合は、道路管理者への連絡が先です。国土交通省 岩手河川国道事務所は、民有地からはみ出した樹木や倒木で道路に被害が発生した場合は、<Hl>樹木の所有者が損害賠償等の責任に問われる場合がある</Hl>としています（出典：<a href={MLIT} className={A} target="_blank" rel="noopener noreferrer">国土交通省 東北地方整備局 岩手河川国道事務所「道路まではみ出している樹木等の伐採のお願い」（PDF）</a>、同日確認）。
      </p>
    </>
  ),
  conclusionTitle: "倒木は、倒れた先で連絡先が変わります。電線なら電力会社、道路なら道路管理者、自分の敷地の中だけなら所有者が片付けます。",
  conclusionBody: (
    <>
      <p>
        倒れた先ごとに、最初にすることを並べると次のとおりです。どの場合も、太い幹や他の木にかかった木を無理に動かさないことが前提です。
      </p>
      {table}
      <p className="mt-4">
        民法第717条第2項は、土地の工作物の占有者・所有者の責任の規定を「竹木の栽植又は支持に瑕疵がある場合について準用する」としています（出典：<a href={EGOV} className={A} target="_blank" rel="noopener noreferrer">e-Gov法令検索「民法」</a>、同日確認）。倒れた木が他人に損害を与えたときは、木の管理の状態が問われることがあります。
      </p>
    </>
  ),
  basicsHeading: "倒木の処理に関する4つの基本",
  basicsIntro: <p>以下は、4つの資料に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "電線に触れている木には近づかない",
      desc: "白井市の資料は、電線や電話線に樹木等が接触してしまっている場合は、感電等の危険があるため、近づかず、電力事業者等へ連絡する必要があるとしています。",
    },
    {
      title: "道路での作業は事前に連絡",
      desc: "岩手河川国道事務所は、作業時に交通規制や落石の防護処置が必要な場合があるため、出張所に連絡したうえで作業するよう求めています。",
    },
    {
      title: "木の所有者が責任を問われることがある",
      desc: "民法第717条第2項は、竹木の栽植・支持に瑕疵がある場合に、工作物の占有者・所有者の責任の規定を準用するとしています。",
    },
    {
      title: "傾いた木・枯れた木は倒れやすい",
      desc: "岩手河川国道事務所は、樹木が枯れていたり傾いている場合も、風や雪で倒れるおそれがあるとしています。",
    },
  ],
  stepsHeading: "倒木を処理する4つの手順",
  stepsIntro: <p>4つの資料の記載にもとづく流れです。</p>,
  steps: [
    {
      title: "電線・道路にかかっていないか確かめる",
      desc: "電線にかかっていれば近づかずに電力会社へ、道路に出ていれば道路管理者や警察へ連絡します。",
    },
    {
      title: "被害の状況を写真に残す",
      desc: "倒れた向き・根元・被害を受けた物を、離れた位置から撮っておくと、保険会社や相手方への説明に使えます。",
    },
    {
      title: "かかり木・太い幹は業者に頼む",
      desc: "他の木に引っかかった木や、太い幹の切断は危険が大きい作業です。無理に動かさず、伐採業者に相談します。",
    },
    {
      title: "切った枝・幹を市のルールで処分する",
      desc: "剪定枝として出せる太さ・長さは市ごとに違います。出せない大きさは、処理施設への持ち込みや業者の引き取りを検討します。",
    },
  ],
  ngHeading: "倒木の処理で避けたいこと",
  ngs: [
    {
      title: "電線にかかった木を自分で外すことは避けます",
      desc: "東京電力は、電線に樹木などが接触している場合もたいへん危険だとしています。近づかずに連絡します。",
    },
    {
      title: "連絡せずに道路上で作業することは避けます",
      desc: "岩手河川国道事務所は、交通規制や防護処置が必要な場合があるため、出張所に連絡したうえで作業するよう求めています。",
    },
    {
      title: "傾いた木を倒れるまで放置することは避けます",
      desc: "岩手河川国道事務所は、枯れた木や傾いた木は風や雪で倒れるおそれがあるとしています。倒れる前に伐採や支柱を検討します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>幹が太い、他の木にかかっている、建物や塀の上に倒れている</Hl>ときは、伐採業者に相談してください。「電線にはかかっていない」「倒れた先の状況」「幹のおおよその太さ」を伝えると、見積もりが早くなります。
    </p>,
    <p key="2">
      他の木にかかった木の扱いは<Link href="/kakarigi/" className={A}>かかり木とは</Link>、台風の前後の備えは<Link href="/taifu-niwaki-taisaku/" className={A}>台風前後の庭木対策</Link>、切った枝の出し方は<Link href="/senteieda-shobun/" className={A}>剪定枝の処分方法</Link>、伐採業者の料金の出し方は<Link href="/bassai-110ban-bassai-bakkon/" className={A}>伐採110番の伐採・抜根</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "倒木の処理を業者に相談する",
  ctaText: "太い幹の切断や、かかり木・建物の上に倒れた木の撤去は、業者に任せると安心です。",
  faqHeading: "倒木の処理でよくある質問",
  faqs: [
    {
      q: "倒木が電線にかかっています。どうすればよいですか？",
      a: "近づかず、触らずに電力会社へ連絡してください。東京電力は、切れてたれ下がっている電線には絶対に手を触れないこと、電線に樹木などが接触している場合もたいへん危険であることを呼びかけています。",
    },
    {
      q: "自分の庭の木が道路に倒れました。",
      a: "道路管理者（国道は国の出張所、県道・市道は県・市）に連絡してください。岩手河川国道事務所は、民有地からはみ出した樹木や倒木で道路に被害が発生した場合は、樹木の所有者が損害賠償等の責任に問われる場合があるとしています。",
    },
    {
      q: "隣の家の木が自分の敷地に倒れてきました。",
      a: "まず木の所有者に連絡してください。民法第717条第2項は、竹木の栽植・支持に瑕疵がある場合に、占有者・所有者の責任の規定を準用するとしています。責任の有無は個別の事情によるため、争いになるときは市の法律相談などを利用してください。",
    },
    {
      q: "倒れた木は粗大ごみで出せますか？",
      a: "剪定枝として出せる太さ・長さは市ごとに決まっています。当サイトの剪定枝の処分方法のページで、市区町村ごとのルールを確認できます。",
    },
  ],
  related: [
    { href: "/shishoboku/", label: "支障木とは", desc: "倒れるおそれのある木の扱い" },
    { href: "/kakarigi/", label: "かかり木とは", desc: "他の木に引っかかった木" },
    { href: "/taifu-niwaki-taisaku/", label: "台風前後の庭木対策", desc: "倒木・枝折れを防ぐ" },
    { href: "/niwaki-katamuki/", label: "庭木が傾いた", desc: "倒れる前の対処" },
    { href: "/senteieda-shobun/", label: "剪定枝の処分方法", desc: "市区町村ごとのルール" },
  ],
};

export default function TobokuShoriPage() {
  return <KnowArticle data={data} />;
}
