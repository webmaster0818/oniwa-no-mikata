import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/kurashi-no-market-bassai-110ban-chigai/";
const A = "text-[#2D7F3E] underline";
const CURAMA_ABOUT = "https://curama.jp/about/";
const CURAMA_TREE = "https://curama.jp/tree-felling/";
const CURAMA_GUARANTEE = "https://curama.jp/guarantee/";
const MINMA = "https://minma.jp/";
const BASSAI = "https://www.sharing-tech.co.jp/baxtusai/";
const BASSAI_PRICE = "https://www.sharing-tech.co.jp/baxtusai/price/";
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

export const metadata: Metadata = {
  title: {
    absolute: "くらしのマーケットと伐採110番の違い｜申し込み方・料金の決まり方・補償で比べる｜お庭のミカタ",
  },
  description:
    "庭木の伐採・抜根を頼むときの、くらしのマーケットと伐採110番の違いを両社の公式ページ（2026年11月8日確認）で比べました。店舗を自分で選んで予約する仕組みと、電話で相談して提携業者を紹介してもらう仕組みの違い、料金が決まるタイミング、補償・保険の記載をまとめています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "くらしのマーケットと伐採110番の違い｜申し込み方・料金の決まり方・補償",
    description:
      "店舗を料金と口コミで選んで予約するくらしのマーケットと、電話で相談して提携業者の現地調査・見積もりを受ける伐採110番。両社の公式ページの記載で違いを整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const data: KnowArticleData = {
  slug: "kurashi-no-market-bassai-110ban-chigai",
  published: "2026-11-08",
  updatedLabel: "2026年11月8日",
  h1: "くらしのマーケットと伐採110番の違い｜申し込み方・料金の決まり方・補償で比べる",
  breadcrumbLabel: "くらしのマーケットと伐採110番の違い",
  tagChips: ["くらしのマーケット", "伐採110番", "伐採・抜根", "業者選び"],
  ldHeadline: "くらしのマーケットと伐採110番の違い｜申し込み方・料金の決まり方・補償",
  ldDescription:
    "庭木の伐採・抜根の依頼先として、くらしのマーケットと伐採110番の申し込みの仕組み、料金が決まるまでの流れ、補償・保険の記載を、両社の公式ページ（2026年11月8日確認）にもとづいて比べた記事です。",
  lead: (
    <>
      <p className="mb-4">
        庭木の伐採・抜根を頼む先として、くらしのマーケットと伐採110番はどちらも全国から申し込めます。ただし、<Hl>くらしのマーケットは自分で店舗を選んで予約する仕組み</Hl>、<Hl>伐採110番は電話などで相談し、対応可能な提携業者を紹介してもらう仕組み</Hl>で、申し込みから料金が決まるまでの流れが違います。
      </p>
      <p>
        本記事では、両社の公式ページを2026年11月8日に開いて確認した記載だけをもとに、違いを整理します。料金の目安の見方は、それぞれの個別記事（
        <Link href="/kurashi-no-market-bassai-bakkon/" className={A}>くらしのマーケットで伐採・抜根を頼む</Link>・
        <Link href="/bassai-110ban-bassai-bakkon/" className={A}>伐採110番の伐採・抜根料金の見方</Link>
        ）にまとめています。
      </p>
    </>
  ),
  conclusionTitle: "依頼する人を自分で比べて選びたいならくらしのマーケット、まず電話で相談して現地で見積もりを受けたいなら伐採110番が向いています。",
  conclusionBody: (
    <>
      <p className="mb-3">
        くらしのマーケットは、店舗ごとの料金・口コミ・顔写真などを見て選び、予約リクエストを送り、店舗が受け付けると予約成立です（出典：
        <a href={CURAMA_ABOUT} className={A} {...EXT}>くらしのマーケット「はじめての方へ」</a>）。
      </p>
      <p>
        伐採110番は、相談窓口に電話するかお問合せフォームで申し込み、現地調査の後に見積もりが出て、了承した後に作業日が決まります（出典：
        <a href={BASSAI} className={A} {...EXT}>伐採110番 公式トップ「ご利用の流れ」</a>）。どちらも、木の高さ・本数・根の扱い・周りの状況で金額が変わる点は同じです。
      </p>
    </>
  ),
  basicsHeading: "くらしのマーケットと伐採110番の違い（公式ページの記載）",
  basicsIntro: (
    <>
      <p className="mb-4">両社の公式ページの記載を並べると、次のとおりです（2026年11月8日確認）。</p>
      <div className="overflow-x-auto mb-2">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-green-50">
              <th className="border border-gray-200 p-2 text-left">項目</th>
              <th className="border border-gray-200 p-2 text-left">くらしのマーケット</th>
              <th className="border border-gray-200 p-2 text-left">伐採110番</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2">運営</td>
              <td className="border border-gray-200 p-2">みんなのマーケット株式会社</td>
              <td className="border border-gray-200 p-2">シェアリングテクノロジー株式会社</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">仕組み</td>
              <td className="border border-gray-200 p-2">出店している店舗のサービスを料金や口コミで比べて予約する</td>
              <td className="border border-gray-200 p-2">相談を受け、対応可能な提携業者を紹介する</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">申し込み</td>
              <td className="border border-gray-200 p-2">サイトで店舗に予約リクエスト。予約前にメッセージで質問・写真送付ができる</td>
              <td className="border border-gray-200 p-2">相談窓口への電話またはお問合せフォーム。24時間365日受付</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">料金が決まる流れ</td>
              <td className="border border-gray-200 p-2">店舗ごとに料金を掲載。表示料金は伐採・抜根カテゴリ共通の作業内容を含む</td>
              <td className="border border-gray-200 p-2">現地調査の後に見積もり。高さ・幹の太さ・作業難易度を考慮して算出</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">補償・保険の記載</td>
              <td className="border border-gray-200 p-2">くらしのマーケット経由の予約が対象の損害賠償補償制度</td>
              <td className="border border-gray-200 p-2">請負賠償保険に加入</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
  basicsLabel: "違い",
  basics: [
    {
      title: "くらしのマーケット：店舗を自分で比べて選ぶ",
      desc: "「はじめての方へ」では、顔写真や文章、口コミで人柄が分かり、料金や口コミで比較して選べると説明されています。利用の流れは、サービスを選ぶ、予約リクエスト、メッセージで打ち合わせ、予約成立、訪問日当日、口コミ投稿の順です。「庭木の伐採・抜根」カテゴリには、2026年11月8日時点で1,293件のサービスが表示されていました。",
    },
    {
      title: "くらしのマーケット：カテゴリ共通の作業内容がある",
      desc: "「庭木の伐採・抜根」カテゴリでは、すべてのサービス共通の作業内容として「庭木の伐採・抜根 / 隣家への配慮 / 作業後の簡易清掃 / ゴミ回収を受ける場合は伐採・抜根作業で発生したすべてのゴミを回収」が示され、表示されている料金はこの作業内容を含むとされています。「はじめての方へ」では見積もりなしで料金が決定するとしつつ、一部例外カテゴリありと注記しています。",
    },
    {
      title: "伐採110番：電話で相談し、提携業者が現地で見積もる",
      desc: "公式トップでは、対応可能な提携業者を紹介する仕組みであること、受付は24時間365日であること、無料の現地調査で見積もりを出すことが説明されています。対応エリア・加盟店・現場状況により、事前に確認したうえで調査・見積もりに費用がかかる場合があるとも注記されています。",
    },
    {
      title: "伐採110番：1本から・立会いなしにも対応と記載",
      desc: "公式トップでは、1本からの伐採・抜根に対応すること、立会いが難しい場合でも作業は可能であること（エリア・加盟店により保証に対応できない場合あり）が挙げられています。料金ページでは、見積もり後のキャンセルが可能で、見積もり確定後の追加料金は発生しないと記載されています。",
    },
  ],
  stepsHeading: "どちらに頼むかを決める手順（4つの手順）",
  stepsIntro: (
    <p>
      伐採だけでなく根まで抜くかどうかで、伝える内容が変わります。判断の基準は<Link href="/bassai-bakkon-chigai/" className={A}>伐採と抜根の違い</Link>で整理しています。
    </p>
  ),
  steps: [
    {
      title: "木の高さ・本数・根の扱いを決めておく",
      desc: "どちらに頼む場合も、木の高さと本数、根を抜くか残すか、切った木の回収が必要かを先に決めておきます。伐採110番の料金ページでは、重機が必要な場合や残った木の根の抜根が必要な場合などが、伐採の基本料金に含まれない場合として挙げられています。",
    },
    {
      title: "自分で選びたいか、相談から始めたいかを決める",
      desc: "店舗の料金や口コミを自分で見比べて選びたい場合はくらしのマーケット、何をどう頼めばよいか分からず、まず電話で相談したい場合は伐採110番が合います。伐採110番は24時間365日受付と公式トップに記載されています。",
    },
    {
      title: "写真を送るか、現地調査で金額を確かめる",
      desc: "くらしのマーケットは、予約前にメッセージで依頼内容を伝え、写真も送るとスムーズと案内しています。伐採110番は現地調査の後に見積もりを出す流れです。どちらも、木の周りの建物・電線・道路との距離が金額に関わるため、全体が分かる情報を伝えます。",
    },
    {
      title: "支払いの時期と、もしものときの補償を確認する",
      desc: "伐採110番は、対応加盟店によって作業前に料金の支払いを求める場合があると記載しています。くらしのマーケットの損害賠償補償制度は、保険の申請は店舗の判断になり、補償の可否は保険会社の審査で決まるとされています。予約・依頼の前に、支払い方法と補償の扱いを確認してください。",
    },
  ],
  ngHeading: "比べるときに避けたいこと",
  ngs: [
    {
      title: "表示の金額どうしをそのまま比べません",
      desc: "くらしのマーケットの表示料金はカテゴリ共通の作業内容を含む店舗ごとの金額、伐採110番の料金ページの単価は現地調査で見積もる前の最低額の目安で、数え方の前提が違います。根の扱い・回収・重機の有無をそろえたうえで、最終的な総額で比べてください。",
    },
    {
      title: "補償があることを理由に確認を省きません",
      desc: "くらしのマーケットの損害賠償補償制度には、店舗の作業が原因ではない事故など、補償が適用されないケースが示されています。伐採110番の請負賠償保険も、適用の範囲は依頼時に確認が必要です。隣家や塀が近い場合は、作業方法と養生を事前に確認します。",
    },
    {
      title: "1社だけで決めません",
      desc: "伐採110番の料金ページは他社との相見積もりを歓迎すると記載しています。くらしのマーケットでも複数の店舗に質問できます。金額と作業内容を2社以上で比べると、条件の違いに気づきやすくなります。",
    },
  ],
  proHeading: "出典にした公式ページ",
  proParas: [
    <p key="1">
      くらしのマーケット：
      <a href={CURAMA_ABOUT} className={A} {...EXT}>「はじめての方へ」</a>・
      <a href={CURAMA_TREE} className={A} {...EXT}>「庭木の伐採・抜根を料金と口コミで比較！おすすめ事業者ランキング」</a>・
      <a href={CURAMA_GUARANTEE} className={A} {...EXT}>「損害賠償補償」</a>・
      <a href={MINMA} className={A} {...EXT}>運営会社 みんなのマーケット株式会社</a>
      （いずれも2026年11月8日確認）。
    </p>,
    <p key="2">
      伐採110番：
      <a href={BASSAI} className={A} {...EXT}>公式トップ「伐採110番 | 庭木の伐採、剪定・間伐などお庭周りのお困りごとに日本全国、24時間365日受付対応！」</a>・
      <a href={BASSAI_PRICE} className={A} {...EXT}>「伐採の料金表｜伐採110番」</a>
      （いずれも2026年11月8日確認）。
    </p>,
    <p key="3">
      剪定・草刈りも含めた同じ運営会社の3サービスの頼み分けは<Link href="/sentei-110ban-kusakari-bassai-tsukaiwake/" className={A}>剪定110番・草刈り110番・伐採110番の使い分け</Link>、見積書の確認点は<Link href="/niwa-mitsumori-mikata/" className={A}>剪定・伐採の見積もりの見方</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "高さ・本数・根の扱いをそろえて、2社以上で金額を確かめる",
  ctaText:
    "どちらに頼む場合も、木の高さと本数、根を抜くか、切った木の回収が必要かで金額が変わります。条件をそろえて伝えると、総額を比べやすくなります。",
  faqHeading: "くらしのマーケットと伐採110番のよくある質問",
  faqs: [
    {
      q: "くらしのマーケットと伐採110番は同じ会社ですか？",
      a: "違います。くらしのマーケットはみんなのマーケット株式会社、伐採110番はシェアリングテクノロジー株式会社の運営です（2026年11月8日確認）。",
    },
    {
      q: "見積もりを取ってから断ることはできますか？",
      a: "伐採110番の料金ページには、見積もり後のキャンセルも可能と記載されています。くらしのマーケットは予約リクエストを店舗が受け付けると予約成立となるため、予約前にメッセージで内容と金額を確認し、変更・キャンセルの条件は各店舗のページで確かめてください。",
    },
    {
      q: "立ち会えない空き家の木も頼めますか？",
      a: "伐採110番の公式トップには、立会いが難しい場合でも作業は可能と記載されています（エリア・加盟店により保証に対応できない場合あり）。くらしのマーケットでは店舗ごとに対応が異なるため、予約前にメッセージで確認してください。",
    },
    {
      q: "作業中に塀や家を傷つけられた場合はどうなりますか？",
      a: "くらしのマーケットには、くらしのマーケット経由の予約が対象の損害賠償補償制度があり、補償の可否は保険会社の審査で決まるとされています。伐採110番は請負賠償保険に加入していると記載しています。いずれも依頼前に補償の範囲を確認してください。",
    },
  ],
  related: [
    {
      href: "/kurashi-no-market-bassai-bakkon/",
      label: "くらしのマーケットで伐採・抜根を頼む",
      desc: "高さ別・幹周り別の相場と共通の作業内容",
    },
    {
      href: "/bassai-110ban-bassai-bakkon/",
      label: "伐採110番の伐採・抜根料金の見方",
      desc: "料金ページの単価と基本料金に含まれない場合",
    },
    {
      href: "/sentei-110ban-kusakari-bassai-tsukaiwake/",
      label: "剪定110番・草刈り110番・伐採110番の使い分け",
      desc: "同じ運営会社の3サービスの頼み分け",
    },
    {
      href: "/bassai-bakkon-chigai/",
      label: "伐採と抜根の違い",
      desc: "木を切る・根を抜くの判断基準",
    },
    {
      href: "/niwa-mitsumori-mikata/",
      label: "剪定・伐採の見積もりの見方",
      desc: "総額・処分費・追加条件の確認",
    },
  ],
};

export default function KurashiNoMarketBassai110banChigaiPage() {
  return <KnowArticle data={data} />;
}
