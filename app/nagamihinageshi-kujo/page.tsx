import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../components/KnowArticle";

const PATH = "/nagamihinageshi-kujo/";
const A = "text-[#2D7F3E] underline";
const SAKAI = "https://www.city.sakai.lg.jp/kurashi/gomi/kankyo_hozen/gairai/75634320240426145252688.html";
const SHIMANE = "https://www.pref.shimane.lg.jp/infra/nature/shizen/yasei/gairai/nagamihinageshi.html";
const KOTO = "https://www.city.koto.lg.jp/380300/images/nagamihinageshi.html";
const FUJISAWA = "https://www.city.fujisawa.kanagawa.jp/documents/28962/nagamihinagesi.pdf";
const KAMAKURA = "https://www.city.kamakura.kanagawa.jp/kan-hozen/documents/nagamihinageshi2026.pdf";
const OITA = "https://www.city.oita.oita.jp/o141/machizukuri/kankyo/documents/nagamihinageshi22.pdf";

export const metadata: Metadata = {
  title: {
    absolute: "ナガミヒナゲシの駆除｜実ができる前に手袋をして根から抜き、袋を閉じて可燃ごみへ｜お庭のミカタ",
  },
  description:
    "庭や道ばたに増えるナガミヒナゲシの駆除の時期・抜き方・捨て方を、堺市・江東区・藤沢市・鎌倉市・大分市・島根県の案内をもとにまとめました。かぶれへの注意と、自治体ごとの時期の書き方の違いも整理しています。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "ナガミヒナゲシの駆除",
    description:
      "ナガミヒナゲシを駆除する時期（冬のロゼット〜実ができる前）、手袋の着用、根からの抜き取り、袋を閉じて可燃ごみに出す方法を6自治体の案内で整理しました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

const ROWS: { src: string; when: string; dispose: string }[] = [
  {
    src: "堺市",
    when: "実ができる前に抜き取る（花は4月から5月）",
    dispose: "ビニール袋などに密封してごみの日に出す",
  },
  {
    src: "江東区",
    when: "実ができる前に駆除する（花は4月頃から6月頃）",
    dispose: "新聞紙等で包んで袋に入れ、可燃ごみ",
  },
  {
    src: "藤沢市",
    when: "実を結ぶ前（花が咲いている4月ころまで）",
    dispose: "一般の可燃ごみ",
  },
  {
    src: "鎌倉市",
    when: "花が咲き実が未熟な時期の4月頃まで",
    dispose: "ビニール袋に入れ口をしばり、燃やすごみの日に出す",
  },
  {
    src: "大分市",
    when: "最適な防除時期は冬期（ロゼット状の葉が目印）。冬に駆除できなかった場合は開花後の結実前",
    dispose: "すぐにビニール袋に入れ、袋の口を閉じる",
  },
  {
    src: "島根県",
    when: "可能な限り、実ができる前に抜き取る（花は4〜6月頃）",
    dispose: "ビニール袋などに密封して可燃ごみ",
  },
];

const table = (
  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#f3f7f1]">
          <th className="border px-2 py-2 text-left">自治体</th>
          <th className="border px-2 py-2 text-left">駆除の時期</th>
          <th className="border px-2 py-2 text-left">抜いた後の出し方</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.src}>
            <td className="border px-2 py-2">{r.src}</td>
            <td className="border px-2 py-2">{r.when}</td>
            <td className="border px-2 py-2">{r.dispose}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-xs mt-2 text-gray-600">
      2026年11月23日に堺市・江東区・島根県の案内ページと、藤沢市・鎌倉市・大分市の案内（PDF）を開き、駆除の時期と抜いた後の出し方の記載を当サイトで並べました。開花期の書き方は「4月から5月」（堺市）、「4月頃から6月頃」（江東区）、「4〜6月頃」（島根県）と自治体によって幅があります。ごみの分け方は、お住まいの市区町村の分別に従ってください。
    </p>
  </div>
);

const data: KnowArticleData = {
  slug: "nagamihinageshi-kujo",
  published: "2026-11-23",
  updatedLabel: "2026年11月23日",
  h1: "ナガミヒナゲシの駆除｜実ができる前に手袋をして根から抜き、袋を閉じて可燃ごみへ",
  breadcrumbLabel: "ナガミヒナゲシの駆除",
  tagChips: ["ナガミヒナゲシ", "外来植物", "雑草", "駆除", "かぶれ"],
  ldHeadline: "ナガミヒナゲシの駆除｜実ができる前に手袋をして根から抜き、袋を閉じて可燃ごみへ",
  ldDescription:
    "ナガミヒナゲシの駆除の時期・抜き方・捨て方とかぶれへの注意を、堺市・江東区・藤沢市・鎌倉市・大分市・島根県の案内をもとに解説した記事です。",
  lead: (
    <>
      <p className="mb-4">
        ナガミヒナゲシは、<Hl>実ができる前に、手袋をして根から抜き取り、袋に密封して可燃ごみに出す</Hl>のが各自治体の案内に共通する駆除の方法です。江東区は、1株に約100個の実がなり、1個の実の中に約1600個もの種子が入っているとしています（出典：<a href={KOTO} className={A} target="_blank" rel="noopener noreferrer">江東区「ナガミヒナゲシにご注意ください」</a>、2026年11月23日確認）。
      </p>
      <p>
        同じ案内で江東区は、外来生物法の特定外来生物の指定はされておらず規制の対象にはなっていないとしています。庭や家の前で見つけたときに、自分で抜く手順を6つの自治体の案内から整理します。
      </p>
    </>
  ),
  conclusionTitle: "花が終わって細長い実ができる前に抜きます。冬のロゼット（地面に広がる葉）の時期に抜けばさらに確実です。素手では触らず、根から抜いてすぐ袋の口を閉じます。",
  conclusionBody: (
    <>
      <p>
        大分市は、最適な防除時期を冬期とし、地面近くに放射線状に生えているロゼット状の葉が目印になるとしています（出典：<a href={OITA} className={A} target="_blank" rel="noopener noreferrer">大分市「外来生物「ナガミヒナゲシ」の防除」（PDF）</a>、2026年11月23日確認）。6つの自治体の記載を並べると、次のとおりです（堺市は<a href={SAKAI} className={A} target="_blank" rel="noopener noreferrer">外来植物「ナガミヒナゲシ」にご注意ください</a>、島根県は<a href={SHIMANE} className={A} target="_blank" rel="noopener noreferrer">ナガミヒナゲシ</a>、いずれも同日確認）。
      </p>
      {table}
    </>
  ),
  basicsHeading: "ナガミヒナゲシの駆除に関する4つの基本",
  basicsIntro: <p>以下は、各自治体の案内に書かれている内容を整理したものです。</p>,
  basicsLabel: "基本",
  basics: [
    {
      title: "種がとても多い",
      desc: "江東区・藤沢市は1株に約100個の実、1個の実に約1600個の種としています。堺市は一個体から最大で15万粒の種ができるとしています。",
    },
    {
      title: "ほかの植物の生育を妨げる",
      desc: "江東区は、他の植物の生育を抑制する物質を放出するアレロパシーという作用を強く持っているとしています。堺市・鎌倉市・島根県も同じ趣旨を記載しています。",
    },
    {
      title: "茎の液でかぶれることがある",
      desc: "堺市・江東区はアルカロイド性の有毒成分を含むとし、島根県は傷つけたときに出す液に触れるとかぶれることがあるとしています。",
    },
    {
      title: "実ができてから抜くと種が散らばる",
      desc: "藤沢市は、実を結んでから駆除すると周辺に種が散らばり、かえって繁殖を促す恐れがあるとしています。",
    },
  ],
  stepsHeading: "庭のナガミヒナゲシを抜く4つの手順",
  stepsIntro: <p>大分市・鎌倉市・江東区の案内にもとづく流れです。</p>,
  steps: [
    {
      title: "冬のロゼットか、花のうちに見つける",
      desc: "大分市は冬期を最適な防除時期とし、冬に駆除できなかった場合は開花後の結実前としています。鎌倉市は、冬期はタンポポのように地面に這いつくばり葉を広げると説明しています。",
    },
    {
      title: "手袋と長袖を着ける",
      desc: "鎌倉市は、折れた茎から出る液で皮膚がかぶれることがあるので、長袖と作業手袋を着用するとしています。江東区は軍手やゴム手袋を挙げています。",
    },
    {
      title: "できるだけ手作業で根から抜く",
      desc: "大分市は、できるだけ手作業で根から引き抜くことで大量の種子の飛散を抑える効果があるとしています。",
    },
    {
      title: "すぐ袋に入れて口を閉じ、可燃ごみに出す",
      desc: "大分市は運搬時の種子の拡散を防ぐため、すぐにビニール袋に入れ口を閉じるとしています。各自治体とも可燃ごみ（燃やすごみ）として出す案内です。",
    },
  ],
  ngHeading: "ナガミヒナゲシの駆除で避けたいこと",
  ngs: [
    {
      title: "素手で茎や葉を折ることは避けます",
      desc: "江東区は、皮膚の弱い人が素手で茎や葉を触ったり折ったりすると、かぶれやただれを起こす恐れがあるとしています。",
    },
    {
      title: "実が熟してから草刈り機でまとめて刈ることは避けます",
      desc: "鎌倉市は、完熟した実のふたがめくれ、その隙間からケシ粒状の種がこぼれ落ち、車のタイヤや靴底等に付着して広がると説明しています。実ができた後は、種が飛ばないよう実の部分から袋に入れます。",
    },
    {
      title: "抜いた株を庭に積んでおくことは避けます",
      desc: "島根県・堺市は、ビニール袋などに密封して処分するよう案内しています。堆肥にせず、袋を閉じて出します。",
    },
  ],
  proHeading: "業者に頼む目安と依頼のポイント",
  proParas: [
    <p key="1">
      <Hl>空き地や広い敷地一面に広がっている、ほかの雑草と一緒にまとめて片付けたい、かぶれが心配で自分では触りたくない</Hl>といった場合は、除草に対応する業者やシルバー人材センターに相談する方法があります。依頼するときは、ナガミヒナゲシが混じっていること、実ができているかどうかを伝え、抜いた草を袋に密封して処分してもらえるかを確かめてください。
    </p>,
    <p key="2">
      雑草全般の対策は<Link href="/zasso-taisaku/" className={A}>雑草対策</Link>、草刈りの時期は<Link href="/kusakari-jiki/" className={A}>草刈りの時期</Link>、シルバー人材センターへの依頼は<Link href="/kusakari-silver-jinzai/" className={A}>草刈りをシルバー人材センターに頼む</Link>にまとめています。藤沢市の案内は<a href={FUJISAWA} className={A} target="_blank" rel="noopener noreferrer">藤沢市「ナガミヒナゲシ」（PDF）</a>、鎌倉市の案内は<a href={KAMAKURA} className={A} target="_blank" rel="noopener noreferrer">鎌倉市「ナガミヒナゲシ」（PDF）</a>（いずれも2026年11月23日確認）です。
    </p>,
  ],
  ctaHeading: "広がっている範囲と実の有無を伝えて相談する",
  ctaText:
    "ナガミヒナゲシは種が多く、実ができてからの作業では散らばりやすい草です。広い範囲に広がっている場合は、早めに相談すると安心です。",
  faqHeading: "ナガミヒナゲシの駆除のよくある質問",
  faqs: [
    {
      q: "ナガミヒナゲシはいつ駆除すればよいですか？",
      a: "各自治体とも実ができる前としています。藤沢市・鎌倉市は花が咲いている4月頃まで、大分市は最適な時期を冬期（ロゼット状の葉が目印）としています。",
    },
    {
      q: "ナガミヒナゲシは素手で触っても大丈夫ですか？",
      a: "堺市・江東区はアルカロイド性の有毒成分を含むとし、素手で触るとかぶれるおそれがあるとしています。ゴム手袋や園芸用手袋を着けて作業してください。",
    },
    {
      q: "抜いたナガミヒナゲシはどう捨てますか？",
      a: "堺市・島根県はビニール袋などに密封して可燃ごみ（ごみの日）に、江東区は新聞紙等で包んで袋に入れ可燃ごみに、としています。分別はお住まいの市区町村の案内に従ってください。",
    },
    {
      q: "ナガミヒナゲシは法律で駆除が義務づけられていますか？",
      a: "江東区は、外来生物法の特定外来生物の指定はされておらず規制の対象にはなっていないとしています。そのうえで、繁殖力が強く生態系に影響を及ぼす恐れがあるため駆除を呼びかけています。",
    },
  ],
  related: [
    {
      href: "/zasso-taisaku/",
      label: "雑草対策",
      desc: "庭の雑草を増やさない方法",
    },
    {
      href: "/seitakaawadachiso-kujo/",
      label: "セイタカアワダチソウの駆除",
      desc: "外来の雑草の対処",
    },
    {
      href: "/kuzu-kujo/",
      label: "葛（クズ）の駆除",
      desc: "つる性の雑草の対処",
    },
    {
      href: "/dokudami-sugina-taisaku/",
      label: "ドクダミ・スギナ対策",
      desc: "しつこい雑草の対処",
    },
  ],
};

export default function NagamihinageshiKujoPage() {
  return <KnowArticle data={data} />;
}
