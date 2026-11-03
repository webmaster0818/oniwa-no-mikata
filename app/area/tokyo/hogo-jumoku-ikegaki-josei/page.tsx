import type { Metadata } from "next";
import Link from "next/link";
import KnowArticle, { Hl, SITE, type KnowArticleData } from "../../../components/KnowArticle";

const PATH = "/area/tokyo/hogo-jumoku-ikegaki-josei/";
const A = "text-[#2D7F3E] underline";
const SRC = "https://www.tokyogreenery.metro.tokyo.lg.jp/green-system/system.html";

export const metadata: Metadata = {
  title: {
    absolute: "東京都の区市町村の保護樹木・生垣の助成制度一覧｜44区市の樹木保護と17区市町の生垣助成｜お庭のミカタ",
  },
  description:
    "東京都「緑を保全・創出するための助成制度」に掲載された区市町村の制度を一覧にしました。保護樹木・樹林の指定や管理費の助成は44区市、生垣の造成・設置の助成は17区市町。申請前の確認点もまとめます。",
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: "東京都の区市町村の保護樹木・生垣の助成制度一覧",
    description:
      "東京都の一覧に載っている区市町村の保護樹木・樹林の制度と生垣の助成を、各自治体のページへのリンクつきでまとめました。",
    url: `${SITE}${PATH}`,
    type: "article",
    images: ["/images/kv-top.jpg"],
  },
};

type Row = { city: string; name: string; url: string };

const TREE_ROWS: Row[] = [
  { city: "中央区", name: "樹木の保護育成事業助成", url: "https://www.city.chuo.lg.jp/a0037/machizukuri/kouenryokka/ryokka/minkan/ryokkajyosei.html" },
  { city: "港区", name: "保護樹木・樹林の指定", url: "https://www.city.minato.tokyo.jp/ryokukasuishin/kankyo-machi/kankyo/ryokuka/suishin/jumoku.html" },
  { city: "新宿区", name: "みどりの文化財（保護樹木等）", url: "https://www.city.shinjuku.lg.jp/seikatsu/file14_06_00001.html" },
  { city: "新宿区", name: "保護樹木移植助成制度", url: "https://www.city.shinjuku.lg.jp/seikatsu/midori05_000105.html" },
  { city: "文京区", name: "保護樹木・樹林の制度", url: "https://www.city.bunkyo.lg.jp/b036/p004924.html" },
  { city: "台東区", name: "保護樹木制度", url: "https://www.city.taito.lg.jp/kenchiku/hanamidori/ryokukasuishin/hogojumoku-seido.html" },
  { city: "墨田区", name: "特別保全樹木等補助金", url: "https://www.city.sumida.lg.jp/kurashi/kankyou_hozen/midori/josei/jumokujosei.html" },
  { city: "江東区", name: "保護樹木・樹林助成", url: "" },
  { city: "品川区", name: "樹木の保存事業", url: "https://www.city.shinagawa.tokyo.jp/kankyo/koenryokka/1004591/1004596.html" },
  { city: "目黒区", name: "保存樹木等助成", url: "https://www.city.meguro.tokyo.jp/midori/shigoto/kouen/jyumoku.html" },
  { city: "大田区", name: "保護樹木・樹林への助成", url: "https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/kankyou/ryoka/juki.html" },
  { city: "世田谷区", name: "保存樹木等管理助成", url: "https://www.city.setagaya.lg.jp/02074/4703.html" },
  { city: "渋谷区", name: "保存樹木制度", url: "https://www.city.shibuya.tokyo.jp/kankyo/kankyo/midori-plan/midori_hozon_josei.html" },
  { city: "中野区", name: "樹木・樹林・生垣の保護指定制度", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/kankyo/ondankataisaku/ryokka/jyumoku-hogo.html" },
  { city: "杉並区", name: "保護樹木等指定制度", url: "https://www.city.suginami.tokyo.jp/s100/1657.html" },
  { city: "豊島区", name: "保護樹木の助成", url: "https://www.city.toshima.lg.jp/339/machizukuri/shizen/ryokuka/000875.html" },
  { city: "北区", name: "保護樹木等の維持管理助成", url: "https://www.city.kita.lg.jp/dev-environment/parks-greenspaces/1010058/1010075.html" },
  { city: "荒川区", name: "保護樹木等の維持管理費用助成", url: "https://www.city.arakawa.tokyo.jp/a043/koen/hana/hogositeijumoku.html" },
  { city: "板橋区", name: "保存樹木制度", url: "https://www.city.itabashi.tokyo.jp/bousai/ryokuka/josei/1006667.html" },
  { city: "練馬区", name: "保護樹木・樹林の管理費用助成制度", url: "https://www.city.nerima.tokyo.jp/kurashi/shigoto/midori/midorimachinami/senteihojo.html" },
  { city: "足立区", name: "保存樹木・樹林の維持管理費の助成", url: "https://www.city.adachi.tokyo.jp/midori/machi/midori/hozonju.html" },
  { city: "葛飾区", name: "保存樹木・樹林の維持費用の補助", url: "https://www.city.katsushika.lg.jp/kurashi/1000062/1030174/1004023.html" },
  { city: "江戸川区", name: "保護樹の助成", url: "" },
  { city: "八王子市", name: "斜面緑地保全区域（市街化区域）", url: "https://www.city.hachioji.tokyo.jp/kurashi/life/004/green/mijika/p006982.html" },
  { city: "八王子市", name: "緑地保護地区（市街化調整区域）", url: "" },
  { city: "立川市", name: "保存樹木・保護樹林地等指定制度", url: "https://www.city.tachikawa.lg.jp/kurashi/seikatsu/1001871/1001891.html" },
  { city: "武蔵野市", name: "保存樹林等に対する助成", url: "https://www.city.musashino.lg.jp/gomi_kankyo/midori_koen/shisaku/1005019.html" },
  { city: "三鷹市", name: "保存樹木、保存樹林を保全するための助成事業", url: "https://www.city.mitaka.lg.jp/c_service/046/046416.html" },
  { city: "府中市", name: "指定樹木の奨励金制度", url: "https://www.city.fuchu.tokyo.jp/kurashi/sekatu/shizenhogo_seibutsutayousei/shiteijumoku.html" },
  { city: "昭島市", name: "保存樹木樹林補助金", url: "" },
  { city: "調布市", name: "保全地区・保存樹木・保存生垣補助金", url: "https://www.city.chofu.lg.jp/070020/p040025.html" },
  { city: "調布市", name: "保存樹木等せん定補助金", url: "" },
  { city: "小金井市", name: "保全緑地への助成", url: "https://www.city.koganei.lg.jp/kurashi/479/ryokutihozen/hozenryokuchishinsei.html" },
  { city: "小平市", name: "保存樹木・樹林などの補助", url: "" },
  { city: "日野市", name: "みどりの保護育成に関する補助金制度", url: "" },
  { city: "東村山市", name: "保存樹木維持管理費補助金", url: "" },
  { city: "国分寺市", name: "保存樹木、保存樹林奨励金", url: "" },
  { city: "国立市", name: "保存樹木等の補助制度", url: "https://www.city.kunitachi.tokyo.jp/soshiki/Dept05/Div02/Sec02/gyomu/0451/0452/0453/1461065733954.html" },
  { city: "福生市", name: "保存樹林地等奨励金制度", url: "https://www.city.fussa.tokyo.jp/life/environment/environment/1011136.html" },
  { city: "狛江市", name: "保存樹木等の奨励金、管理費助成金", url: "https://www.city.komae.tokyo.jp/index.cfm/41,4598,313,3465,html" },
  { city: "清瀬市", name: "保存樹木助成金", url: "" },
  { city: "東久留米市", name: "保存樹木等補助金", url: "https://www.city.higashikurume.lg.jp/kurashi/kankyo/shizen/midori/1004178/index.html" },
  { city: "武蔵村山市", name: "保護樹木等への奨励金", url: "" },
  { city: "多摩市", name: "保存植物等補助金制度", url: "https://www.city.tama.lg.jp/kurashi/kouen/midori/1002554.html" },
  { city: "稲城市", name: "保存樹木補助金", url: "" },
  { city: "稲城市", name: "自然環境保全地域補助金", url: "" },
  { city: "あきる野市", name: "保存緑地の補助", url: "https://www.city.akiruno.tokyo.jp/0000000129.html" },
  { city: "西東京市", name: "保存樹等補助", url: "https://www.city.nishitokyo.lg.jp/kurasi/koen/hozonzyumoku.html" },
];

const HEDGE_ROWS: Row[] = [
  { city: "文京区", name: "生垣造成補助金", url: "https://www.city.bunkyo.lg.jp/b036/p004925.html" },
  { city: "品川区", name: "緑豊かな街なみづくり助成（生垣助成）", url: "https://www.city.shinagawa.tokyo.jp/kankyo/koenryokka/1004592/1004593.html" },
  { city: "大田区", name: "生垣造成助成制度", url: "https://www.city.ota.tokyo.jp/seikatsu/sumaimachinami/kankyou/ryoka/josei.html" },
  { city: "世田谷区", name: "生垣・植栽帯・シンボルツリー，屋上・壁面緑化助成", url: "https://www.city.setagaya.lg.jp/02074/4705.html" },
  { city: "中野区", name: "生垣設置の助成制度", url: "https://www.city.tokyo-nakano.lg.jp/kurashi/kankyo/ondankataisaku/ryokka/ikegaki-jyosei.html" },
  { city: "北区", name: "生垣造成助成制度", url: "https://www.city.kita.lg.jp/dev-environment/parks-greenspaces/1010058/1010076.html" },
  { city: "荒川区", name: "生けがき造成助成", url: "https://www.city.arakawa.tokyo.jp/a043/machizukuridoboku/machizukuri/ikegaki.html" },
  { city: "葛飾区", name: "生垣造成の補助", url: "https://www.city.katsushika.lg.jp/kurashi/1000062/1030174/1004016.html" },
  { city: "青梅市", name: "生け垣設置費補助制度", url: "https://www.city.ome.tokyo.jp/soshiki/24/35359.html" },
  { city: "調布市", name: "生垣設置費補助制度", url: "https://www.city.chofu.lg.jp/070020/p040023.html" },
  { city: "小金井市", name: "生け垣造成奨励金交付制度", url: "" },
  { city: "小平市", name: "生垣造成補助制度", url: "" },
  { city: "国分寺市", name: "生垣造成費の補助", url: "" },
  { city: "国立市", name: "生垣新設の補助金制度", url: "https://www.city.kunitachi.tokyo.jp/kurashi/kankyo/5689.html" },
  { city: "福生市", name: "新規の生垣設置費用補助", url: "https://www.city.fussa.tokyo.jp/life/environment/environment/1011136.html" },
  { city: "稲城市", name: "生垣造成補助金制度", url: "" },
  { city: "瑞穂町", name: "生垣設置費用の助成", url: "https://www.town.mizuho.tokyo.jp/kankyo/003/002/p001494.html" },
];

function RowTable({ rows, label }: { rows: Row[]; label: string }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <caption className="text-left text-xs text-[#6b7563] mb-2">{label}</caption>
        <thead>
          <tr className="bg-[#f1f9ee]">
            <th className="border border-[#d8e6d2] px-3 py-2 text-left whitespace-nowrap">自治体</th>
            <th className="border border-[#d8e6d2] px-3 py-2 text-left">制度の名称（東京都の一覧の表記）</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={`${r.city}-${r.name}`}>
              <td className="border border-[#d8e6d2] px-3 py-2 whitespace-nowrap">{r.city}</td>
              <td className="border border-[#d8e6d2] px-3 py-2">
                {r.url ? (
                  <a href={r.url} className={A} target="_blank" rel="noopener noreferrer">{r.name}</a>
                ) : (
                  r.name
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const data: KnowArticleData = {
  slug: "area/tokyo/hogo-jumoku-ikegaki-josei",
  published: "2026-11-03",
  updatedLabel: "2026年11月3日",
  parent: { href: "/area/tokyo/", label: "東京の庭業者" },
  badge: "東京都の地域情報",
  h1: "東京都の区市町村の保護樹木・生垣の助成制度一覧｜44区市の樹木保護と17区市町の生垣助成",
  breadcrumbLabel: "東京都の保護樹木・生垣の助成制度一覧",
  tagChips: ["東京都", "保護樹木", "保存樹木", "生垣", "助成金"],
  ldHeadline: "東京都の区市町村の保護樹木・生垣の助成制度一覧",
  ldDescription:
    "東京都「緑を保全・創出するための助成制度」に掲載された区市町村の保護樹木・樹林の制度（44区市）と生垣の造成・設置の助成（17区市町）を、各自治体のページへのリンクつきで一覧にし、申請前の確認点を整理した記事です。",
  lead: (
    <>
      <p className="mb-4">
        東京都は、区市町村が設けている緑の助成制度を「緑を保全・創出するための助成制度」として一覧にしています。
        このうち「保護樹木・樹林・生垣」の表には<Hl>44区市の48制度</Hl>、「屋上・壁面・接道部緑化」の表には
        <Hl>生垣の造成・設置を対象とする17区市町の制度</Hl>が載っています
        （出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">東京都「緑を保全・創出するための助成制度 | 緑関連制度 | 東京の緑」</a>、2026年11月3日確認）。
      </p>
      <p>
        庭の大きな木の剪定や、塀を生垣に替える工事を業者に頼む前に、お住まいの区市町村に制度があるかをこの一覧で確かめてください。
        制度の金額や条件は自治体ごとに異なるため、本記事では名称と各自治体のページへのリンクだけを載せています。
      </p>
    </>
  ),
  conclusionTitle: "保護樹木の制度は「指定を受けた木」の管理費、生垣の助成は「これからつくる生垣」の工事費が主な対象です。どちらも自治体のページで条件を確認してから業者に見積もりを頼みます。",
  conclusionBody: (
    <p>
      保護樹木・保存樹木の制度は、自治体が指定した樹木や樹林について、剪定などの管理費を助成したり奨励金を出したりするものが中心です。
      一方、生垣の助成は、道路沿いなどに新しく生垣をつくる工事費の一部を補助するものが中心です。
      東京都の一覧に載っているリンク先のうち、<Hl>2026年11月3日に開けなかったページは名称だけを載せています</Hl>。
      制度が変わっている可能性があるため、その自治体には直接お問い合わせください。
    </p>
  ),
  basicsHeading: "東京都の一覧に載っている区市町村の制度",
  basicsIntro: (
    <>
      <p className="mb-2">
        次の2つの表は、東京都のページの表をそのまま区市町村ごとに並べたものです（表記は東京都のページのとおり）。
      </p>
      <RowTable rows={TREE_ROWS} label="保護樹木・樹林・生垣の制度（44区市・48制度）" />
      <RowTable rows={HEDGE_ROWS} label="生垣の造成・設置の助成（屋上・壁面・接道部緑化の表から、名称に生垣を含む17区市町）" />
      <p className="text-xs text-[#6b7563]">
        出典：<a href={SRC} className={A} target="_blank" rel="noopener noreferrer">東京都「緑を保全・創出するための助成制度 | 緑関連制度 | 東京の緑」</a>（2026年11月3日確認）。
        リンクは同日に開けたページのみ。開けなかった制度・東京都の表にリンクがない制度は名称のみです。
      </p>
    </>
  ),
  basicsLabel: "制度の種類",
  basics: [
    {
      title: "保護樹木・保存樹木の指定",
      desc: "一定の大きさの樹木や樹林を自治体が指定する制度です。表の名称には「指定」「指定制度」を含むものが多く見られます。指定の基準は自治体のページで確認します。",
    },
    {
      title: "指定した木の管理費の助成",
      desc: "「維持管理助成」「管理費用助成」「せん定補助金」など、指定を受けた木の手入れの費用を助成する制度です。",
    },
    {
      title: "奨励金",
      desc: "府中市「指定樹木の奨励金制度」、国分寺市「保存樹木、保存樹林奨励金」など、指定を受けた所有者に奨励金を出す制度です。",
    },
    {
      title: "生垣の造成・設置の助成",
      desc: "文京区「生垣造成補助金」、調布市「生垣設置費補助制度」など、新しく生垣をつくる工事費を補助する制度です。",
    },
  ],
  stepsHeading: "制度を使って業者に頼むまでの手順（4つの手順）",
  steps: [
    {
      title: "お住まいの自治体の行を探す",
      desc: "上の表で区市町村名を探し、リンク先のページで対象・金額・申請期限を確認します。",
    },
    {
      title: "指定や申請の条件を担当課に確認する",
      desc: "保護樹木の制度は、指定を受けた木だけが対象になるのが一般的です。自宅の木が指定を受けているかは担当課に確認します。",
    },
    {
      title: "申請に使える形で見積もりを取る",
      desc: "多くの助成で見積書が申請書類になります。作業内容ごと（剪定・消毒・生垣の延長や本数など）に分けた見積書を業者に作ってもらいます。",
    },
    {
      title: "決定を受けてから作業を始める",
      desc: "工事や作業の前に申請するよう定めている制度があります。着手の時期は、申請の手順を確かめてから業者と決めます。",
    },
  ],
  ngHeading: "制度を使うときに避けたいこと",
  ngs: [
    {
      title: "先に作業を済ませてから申請しません",
      desc: "事前の申請を条件にしている制度では、作業後の申請は対象外になることがあります。",
    },
    {
      title: "一覧の名称だけで判断しません",
      desc: "名称が同じでも対象や金額は自治体ごとに違います。必ずリンク先か担当課で内容を確かめます。",
    },
    {
      title: "指定された木を無断で切りません",
      desc: "指定を受けた木の伐採や移植には届出などの手続きが必要な場合があります。伐採の前に担当課に相談します。",
    },
  ],
  proHeading: "業者に頼む場合の確認点",
  proParas: [
    <p key="1">
      保護樹木は大木が多く、高所作業や道路の使用が必要になることがあります。見積もりの際は、制度を使う予定であることを伝え、
      <Hl>作業ごとの金額と、申請に必要な写真を誰が撮るか</Hl>を確認しておくと手続きが進めやすくなります。
    </p>,
    <p key="2">
      生垣の刈り込みは<Link href="/ikegaki-karikomi/" className={A}>生垣の刈り込み</Link>、大きな木の伐採前の確認は
      <Link href="/niwaki-bassai-kyoka/" className={A}>庭木の伐採に許可が要る場合</Link>、東京で依頼できる庭業者は
      <Link href="/area/tokyo/" className={A}>東京の庭業者おすすめ</Link>にまとめています。
    </p>,
  ],
  ctaHeading: "制度を確かめてから、見積もりを取る",
  ctaText:
    "保護樹木の管理費や生垣の工事費が助成される場合があります。お住まいの区市町村の制度を確認し、申請に使える形の見積書を業者に依頼してください。",
  faqHeading: "東京都の保護樹木・生垣の助成に関するよくある質問",
  faqs: [
    {
      q: "東京都が直接助成しているのですか？",
      a: "本記事の一覧は、東京都のページに掲載された区市町村の制度です。申請先は各区市町村です。",
    },
    {
      q: "一覧に自分の自治体がない場合は？",
      a: "東京都の一覧に載っていない制度がある可能性もあります。区市町村の緑化や公園の担当課に直接お問い合わせください。",
    },
    {
      q: "普通の庭木の剪定にも使えますか？",
      a: "保護樹木・保存樹木の制度は、自治体が指定した木を対象とするものが中心です。対象になるかは各自治体のページで確認してください。",
    },
    {
      q: "リンクがない制度はどうすればよいですか？",
      a: "東京都の表にリンクがない制度や、2026年11月3日に開けなかったページは名称のみ載せています。各自治体にお問い合わせください。",
    },
  ],
  related: [
    { href: "/area/tokyo/", label: "東京の庭業者おすすめ", desc: "剪定・伐採・草刈りを依頼できる業者の比較" },
    { href: "/ikegaki-karikomi/", label: "生垣の刈り込み", desc: "生垣の形を保つ手入れ" },
    { href: "/niwaki-bassai-kyoka/", label: "庭木の伐採に許可が要る場合", desc: "保存樹・風致地区など切る前の確認" },
    { href: "/area/kawagoe/hozon-jumoku/", label: "川越市の保存樹木・保存樹林", desc: "他の市の保存樹木の制度" },
  ],
};

export default function TokyoHogoJumokuIkegakiJoseiPage() {
  return <KnowArticle data={data} />;
}
