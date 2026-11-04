import type { Metadata } from "next";
import { agents } from "./agents/agentsData";
import { allAreaSlugs, regions } from "@/data/areaRegions";
import OwLogo from "./components/top/OwLogo";
import TaskIcon from "./components/top/TaskIcon";
import AreaFinder from "./components/top/AreaFinder";
import ScrollReveal from "./components/top/ScrollReveal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "お庭のミカタ｜剪定・草刈り・伐採の業者比較【2026年最新】",
  description:
    "剪定・草刈り・伐採・造園の業者のうち、全国に対応する7社を、公式サイトの情報にもとづいて比較する専門ガイドです。料金・サービス内容を掲載しています。各社とも見積もりは無料です。",
};

// 2026-11-04 TOP デザイン刷新サンプル（redesign-20261104）。本文・料金・業者情報・リンク先は変えず、見せ方だけを変えている。

const ArrowRight = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const NAV = [
  { href: "#task", label: "作業から探す" },
  { href: "#area", label: "エリアから探す" },
  { href: "#ranking", label: "おすすめ業者" },
  { href: "#guide", label: "選び方ガイド" },
  { href: "#calendar", label: "時期カレンダー" },
  { href: "#faq", label: "よくある質問" },
];

/* ─── Header ─── */
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--ow-border)] bg-white/95 backdrop-blur">
      <div className="ow-container flex h-16 items-center justify-between gap-4 md:h-[76px]">
        <OwLogo />
        <nav aria-label="ページ内の案内" className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[14px] font-bold tracking-[0.04em] text-[color:var(--ow-ink)] transition-colors hover:text-[color:var(--ow-green)]">
              {n.label}
            </a>
          ))}
          <a href="#ranking" className="ow-btn !min-h-[44px] !px-5 !py-2 text-[14px]">
            無料見積もり
          </a>
        </nav>
        <details className="ow-acc relative lg:hidden">
          <summary className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-[color:var(--ow-border-strong)] text-[color:var(--ow-green)]" aria-label="メニューを開く">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <nav aria-label="メニュー" className="absolute right-0 top-[52px] w-[min(86vw,320px)] overflow-hidden rounded-[4px] border border-[color:var(--ow-border-strong)] bg-white">
            <ul className="divide-y divide-[color:var(--ow-border)]">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="flex min-h-[52px] items-center justify-between px-5 text-[15px] font-bold">
                    {n.label}
                    <span className="text-[color:var(--ow-green)]"><ArrowRight /></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4">
              <a href="#ranking" className="ow-btn w-full">無料見積もり</a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
const PinIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

function HeroButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-2.5 sm:grid-cols-2 ${className}`}>
      <a href="#task" className="ow-btn ow-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <TaskIcon name="sentei" size={30} className="text-white" />
          作業・お悩みから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
      <a href="#area" className="ow-btn ow-btn--lg justify-between">
        <span className="flex items-center gap-3">
          <PinIcon />
          エリアから探す
        </span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const HERO_LINKS: [string, string][] = [
  ["おすすめ業者を見る", "#ranking"],
  ["サービスと料金の目安", "#services"],
  ["剪定の時期", "/sentei-jiki/"],
  ["剪定枝の処分", "/senteieda-shobun/"],
];

function Hero() {
  return (
    <section className="relative border-b border-[color:var(--ow-border)] bg-[color:var(--ow-paper)]">
      <div className="md:grid md:min-h-[600px] md:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:min-h-[640px]">
        {/* 左：見出しと主導線 */}
        <div className="relative z-10 flex flex-col justify-center px-4 pb-6 pt-7 md:py-14 md:pl-[max(24px,calc((100vw-1160px)/2+24px))] md:pr-0">
          <p className="text-[13px] font-bold tracking-[0.06em] text-[color:var(--ow-green)] md:text-[14px]">
            厳選7社を比較・全国対応・無料見積もり
          </p>
          <h1 className="mt-3 text-[32px] font-bold leading-[1.32] tracking-[0.04em] text-[color:var(--ow-ink)] md:mt-4 md:text-[46px] lg:text-[54px]">
            剪定・草刈り・伐採
            <br />
            <span className="text-[color:var(--ow-green)]">専門業者</span>の比較
          </h1>

          {/* PC：見出しの直後に主導線。右の写真に少し重ねる */}
          <div className="relative mt-8 hidden md:block md:mr-[-110px] lg:mr-[-190px]">
            <div className="border border-[color:var(--ow-border-strong)] bg-white p-3">
              <HeroButtons />
            </div>
          </div>

          <p className="mt-6 hidden max-w-[34em] text-[15px] leading-[1.9] text-[color:var(--ow-muted)] md:block">
            「庭木が伸びすぎた」「雑草が手に負えない」「大きな木を切りたい」といったお悩みに対応する業者を、料金・サービス内容で比較できます。
          </p>
          <ul className="mt-5 hidden flex-wrap gap-2 md:flex">
            {HERO_LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="inline-flex min-h-[40px] items-center gap-1 rounded-[4px] border border-[color:var(--ow-border-strong)] bg-white px-3.5 text-[13px] font-bold text-[color:var(--ow-green-dark)] hover:border-[color:var(--ow-green)]">
                  {label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 右（PC）：写真を見出しの下まで広げ、左から背景色のグラデーションを重ねる */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64%] md:block lg:w-[62%]" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-niwashi-pc.jpg" alt="" width={1400} height={1750} className="absolute inset-0 h-full w-full object-cover object-[50%_40%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ow-paper)_0%,var(--ow-paper)_6%,color-mix(in_srgb,var(--ow-paper)_82%,transparent)_24%,color-mix(in_srgb,var(--ow-paper)_35%,transparent)_42%,transparent_58%)]" />
          <p className="absolute bottom-3 right-3 bg-black/45 px-2 py-1 text-[11px] text-white">写真はイメージです</p>
        </div>
        <div className="hidden md:block" />

        {/* スマホ：写真の中に主導線 */}
        <div className="relative md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fv-niwashi-sp.jpg" alt="はしごに上って松の木を剪定する庭師" width={1200} height={900} className="block h-[350px] w-full object-cover object-[50%_18%]" fetchPriority="high" />
          <p className="absolute right-2 top-2 bg-black/45 px-2 py-0.5 text-[10px] text-white">写真はイメージです</p>
          <div className="absolute inset-x-3 bottom-3">
            <HeroButtons />
          </div>
        </div>
        <div className="px-4 pb-6 pt-5 md:hidden">
          <p className="text-[14px] leading-[1.85] text-[color:var(--ow-muted)]">
            「庭木が伸びすぎた」「雑草が手に負えない」「大きな木を切りたい」といったお悩みに対応する業者を、料金・サービス内容で比較できます。
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {HERO_LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="inline-flex min-h-[40px] items-center gap-1 rounded-[4px] border border-[color:var(--ow-border-strong)] bg-white px-3 text-[13px] font-bold text-[color:var(--ow-green-dark)]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Badges（数値はサイト内のデータから数えた値） ─── */
function TrustBadges() {
  const prefCount = 1 + regions.reduce((n, r) => n + r.prefectures.length, 0);
  const badges: { k: string; v: string; u: string; desc: string }[] = [
    { k: "掲載業者", v: String(agents.length), u: "社", desc: "実績のある業者を掲載" },
    { k: "エリア別まとめ", v: String(allAreaSlugs.length), u: "市", desc: `${prefCount}都道府県の市のページ` },
    { k: "全国対応", v: "47", u: "都道府県", desc: "47都道府県をカバー" },
    { k: "見積もり", v: "無料", u: "", desc: "比較・見積もりは無料" },
  ];
  return (
    <section className="border-b border-[color:var(--ow-border)] bg-white">
      <div className="ow-container">
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {badges.map((b, i) => (
            <div
              key={b.k}
              className={`px-3 py-5 md:px-6 md:py-7 ${i % 2 === 0 ? "border-r border-[color:var(--ow-border)]" : "md:border-r md:border-[color:var(--ow-border)]"} ${i < 2 ? "border-b border-[color:var(--ow-border)] md:border-b-0" : ""} ${i === 3 ? "md:border-r-0" : ""}`}
            >
              <dt className="text-[12px] font-bold tracking-[0.06em] text-[color:var(--ow-muted)] md:text-[13px]">{b.k}</dt>
              <dd className="mt-1.5">
                <span className="text-[30px] font-bold leading-none text-[color:var(--ow-green)] md:text-[38px]">{b.v}</span>
                <span className="ml-1 text-[13px] font-bold md:text-[15px]">{b.u}</span>
                <span className="mt-1.5 block text-[12px] text-[color:var(--ow-muted)] md:text-[13px]">{b.desc}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="ow-container pb-3 text-[11px] leading-relaxed text-[color:var(--ow-muted)]">
        ※ 掲載業者数とエリア別まとめの数は、当サイトの掲載ページを数えた値です（2026年11月4日時点）。写真はイメージです（Unsplash・撮影 Falco Negenman）。当サイトは業者ではなく、依頼前の比較に使う情報サイトです。
      </p>
    </section>
  );
}

/* ─── 作業・お悩みから探す ─── */
const TASKS = [
  { icon: "sentei", title: "剪定", desc: "剪定の時期と考え方", href: "/sentei-jiki/" },
  { icon: "bassai", title: "伐採・抜根", desc: "伐採と抜根の違い", href: "/bassai-bakkon-chigai/" },
  { icon: "kusakari", title: "草刈り・雑草", desc: "雑草対策の方法比較", href: "/zasso-taisaku/" },
  { icon: "shibafu", title: "芝生", desc: "芝刈り・年間管理", href: "/shibafu-teire/" },
  { icon: "shodoku", title: "庭木の消毒", desc: "消毒の時期と目的", href: "/niwaki-shodoku/" },
  { icon: "bousou", title: "防草シート", desc: "仕組み・寿命・敷き方", href: "/bousou-sheet/" },
  { icon: "take", title: "竹・笹", desc: "広がりを止める方法", href: "/take-taisaku/" },
  { icon: "koke", title: "苔", desc: "原因と除去・予防", href: "/niwa-koke-taisaku/" },
];
const TASK_MORE: [string, string][] = [
  ["生垣の刈り込み", "/ikegaki-karikomi/"],
  ["庭木の病害虫", "/niwaki-byogaichu/"],
  ["剪定枝・刈り草の処分", "/senteieda-shobun/"],
  ["見積もりの取り方", "/aimitsumori-torikata/"],
];

function TaskFinder() {
  return (
    <section id="task" className="ow-section scroll-mt-20">
      <div className="ow-container">
        <h2 className="ow-h2">作業・お悩みから探す</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {TASKS.map((t, i) => (
            <li key={t.href} data-reveal={String(i % 4)}>
              <a href={t.href} className="ow-card ow-card-link group flex h-full flex-col items-center px-3 pb-4 pt-6 text-center md:pb-6 md:pt-8">
                <TaskIcon name={t.icon} size={96} className="h-[76px] w-[76px] text-[color:var(--ow-green)] md:h-[104px] md:w-[104px]" />
                <span className="mt-3 text-[16px] font-bold tracking-[0.04em] md:mt-4 md:text-[18px]">{t.title}</span>
                <span className="mt-1 text-[12px] leading-snug text-[color:var(--ow-muted)] md:text-[13px]">{t.desc}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-[color:var(--ow-green)] md:text-[13px]">
                  ガイドを見る
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 md:mt-4 md:grid-cols-4 md:gap-4" data-reveal="1">
          {TASK_MORE.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="ow-card ow-card-link flex min-h-[52px] items-center justify-between px-4 text-[14px] font-bold">
                {label}
                <span className="text-[color:var(--ow-green)]"><ArrowRight /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── エリアから探す ─── */
function AreaSection() {
  return (
    <section id="area" className="ow-section ow-band scroll-mt-20">
      <div className="ow-container">
        <h2 className="ow-h2">エリアから探す</h2>
        <AreaFinder />
      </div>
    </section>
  );
}

/* ─── サービスと料金の目安（旧「サービスから探す」の内容をそのまま表にした） ─── */
function ServiceCategories() {
  const services = [
    {
      icon: "sentei",
      name: "剪定",
      desc: "庭木の形を整え、樹木の健康を保ちます。見た目と日当たりの改善に役立ちます。",
      price: "1本 4,000円〜（税込・剪定110番）",
    },
    {
      icon: "kusakari",
      name: "草刈り",
      desc: "雑草の刈り取りから防草対策まで対応します。定期的な手入れで庭をきれいに保てます。",
      price: "1㎡ 163円〜（税込・草刈り110番）",
    },
    {
      icon: "bassai",
      name: "伐採",
      desc: "大木・高木を安全に伐採します。抜根や木材の処分までまとめて対応します。",
      price: "1本 8,200円〜（税込・伐採110番）",
    },
    {
      icon: "",
      name: "造園",
      desc: "庭のデザインから施工まで対応します。植栽・外構・ガーデニングを総合的に支援します。",
      price: "要見積もり",
    },
  ];
  return (
    <section id="services" className="ow-section scroll-mt-20">
      <div className="ow-container">
        <h2 className="ow-h2">サービスと料金の目安</h2>
        <ul className="ow-card divide-y divide-[color:var(--ow-border)]">
          {services.map((s, i) => (
            <li key={s.name} className="grid gap-2 px-4 py-5 md:grid-cols-[200px_minmax(0,1fr)_300px] md:items-center md:gap-6 md:px-6" data-reveal={String(i)}>
              <p className="flex items-center gap-3 text-[18px] font-bold">
                {s.icon ? (
                  <TaskIcon name={s.icon} size={40} className="h-10 w-10 text-[color:var(--ow-green)]" />
                ) : (
                  <span className="inline-block h-10 w-10" aria-hidden="true" />
                )}
                {s.name}
              </p>
              <p className="text-[14px] leading-relaxed text-[color:var(--ow-muted)]">{s.desc}</p>
              <p className="text-[15px] font-bold text-[color:var(--ow-green-dark)] md:text-right">{s.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── Top 3 Ranking ─── */
function TopRanking() {
  const companies = [
    {
      rank: 1,
      name: "剪定110番",
      slug: "sentei-110ban",
      officialUrl: "https://www.sharing-tech.co.jp/sentei/",
      badge: "木1本から依頼可",
      tagline: "24時間365日対応の剪定専門サービス",
      features: [
        "24時間365日受付",
        "1本4,000円〜（税込）の明朗会計",
        "見積もり後の追加料金なし",
      ],
      pros: [
        "深夜・早朝でも電話受付可能",
        "少量の依頼にも対応",
        "料金体系が明確",
      ],
      cons: [] as string[],
      recommend:
        "初めて業者に依頼する方や、1本から剪定を依頼したい方におすすめです。料金体系が明確で、対応が早い点が特長です。",
    },
    {
      rank: 2,
      name: "くらしのマーケット",
      slug: "kurashi-no-market",
      officialUrl: "https://curama.jp/",
      badge: "口コミ充実",
      tagline: "口コミで選べる地域密着型プラットフォーム",
      features: [
        "口コミ・評価で業者を比較",
        "料金が事前に明確",
        "オンラインで予約完結",
        "多数の登録業者から選択可能",
      ],
      pros: [
        "実際の利用者の口コミが参考になる",
        "事前に業者の情報を確認できる",
        "料金を比較しやすい",
      ],
      cons: [] as string[],
      recommend:
        "口コミを確認したうえで業者を選びたい方におすすめです。地域の職人を直接比較し、指名できる点が特長です。",
    },
    {
      rank: 3,
      name: "ダスキン",
      slug: "duskin",
      officialUrl: "https://www.duskin.co.jp/",
      badge: "大手の安心感",
      tagline: "大手企業による庭の総合管理サービス",
      features: [
        "年間管理プランで一括管理",
        "芝生・庭木・花壇のトータルケア",
        "資格を持った専門スタッフ",
        "全国約600拠点のネットワーク",
      ],
      pros: [
        "大手企業の信頼性と安定品質",
        "研修を受けた専門スタッフが担当",
        "アフターフォローが充実",
      ],
      cons: [] as string[],
      recommend:
        "年間を通して庭の管理を任せたい方におすすめです。大手企業による安定したサービスと、手厚いサポート体制が特長です。",
    },
  ];

  return (
    <section id="ranking" className="ow-section ow-band scroll-mt-20">
      <div className="ow-container">
        <h2 className="ow-h2">
          おすすめ業者ランキング TOP3
        </h2>
        <p className="-mt-3 mb-6 text-[14px] leading-relaxed text-[color:var(--ow-muted)] md:-mt-5 md:mb-8">
          料金・サービス内容・対応力を総合的に評価し、おすすめの3社を選定しました。
        </p>
        <ol className="grid gap-5 md:gap-6">
          {companies.map((c) => (
            <li key={c.name} className={`ow-card overflow-hidden ${c.rank === 1 ? "border-2 border-[color:var(--ow-green)]" : ""}`} data-reveal="0">
              <div className="grid md:grid-cols-[320px_minmax(0,1fr)]">
                {/* 左：社名の札（3社とも同じ大きさ・同じ構成） */}
                <div className="flex flex-col border-b border-[color:var(--ow-border)] bg-[color:var(--ow-wash)] p-5 md:border-b-0 md:border-r md:p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[34px] font-bold leading-none text-[color:var(--ow-green)]">
                      {c.rank}
                      <span className="ml-0.5 text-[15px]">位</span>
                    </span>
                    <span className="rounded-[3px] border border-[color:var(--ow-green)] bg-white px-2 py-0.5 text-[12px] font-bold text-[color:var(--ow-green)]">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[24px] font-bold tracking-[0.03em]">{c.name}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[color:var(--ow-muted)]">{c.tagline}</p>
                  <div className="mt-5 grid gap-2 md:mt-auto md:pt-6">
                    {c.officialUrl ? (
                      <a href={c.officialUrl} target="_blank" rel="noopener noreferrer nofollow" className="ow-btn w-full text-[15px]">
                        公式サイトで見積もりを依頼
                      </a>
                    ) : null}
                    <a href={`/agents/${c.slug}/`} className="ow-btn ow-btn--ghost w-full !min-h-[46px] text-[14px]">
                      料金・対応を詳しく見る
                    </a>
                  </div>
                </div>
                {/* 右：特徴・メリット・コメント */}
                <div className="p-5 md:p-7">
                  <p className="mb-2 text-[13px] font-bold text-[color:var(--ow-muted)]">特徴</p>
                  <ul className="mb-5 flex flex-wrap gap-2">
                    {c.features.map((f) => (
                      <li key={f} className="rounded-[3px] border border-[color:var(--ow-border-strong)] px-2.5 py-1 text-[13px] font-medium">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[13px] font-bold text-[color:var(--ow-muted)]">メリット</p>
                      <ul className="space-y-1.5 text-[14px]">
                        {c.pros.map((p) => (
                          <li key={p} className="ow-dot">{p}</li>
                        ))}
                      </ul>
                    </div>
                    {c.cons.length > 0 && (
                      <div>
                        <p className="mb-2 text-[13px] font-bold text-[color:var(--ow-muted)]">デメリット</p>
                        <ul className="space-y-1.5 text-[14px]">
                          {c.cons.map((con) => (
                            <li key={con} className="ow-dot">{con}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="border-l-[3px] border-[color:var(--ow-green)] bg-[color:var(--ow-paper)] px-4 py-3">
                    <p className="text-[14px] leading-relaxed">
                      <span className="font-bold text-[color:var(--ow-green-dark)]">編集部のコメント：</span>
                      {c.recommend}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <a href="/agents/" className="ow-btn ow-btn--ghost w-full sm:w-auto">
            掲載7社の料金・対応を比較する
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── How to Choose Guide ─── */
function HowToChoose() {
  const points = [
    {
      num: "01",
      title: "料金体系が明確か確認する",
      desc: "見積もり時に内訳が提示されるか、追加料金が発生するかを事前にご確認ください。「1本〇円〜」のように料金体系が明確な業者をおすすめします。出張費やゴミ処分費が別途かかる場合もあるため、総額で比較することが重要です。",
    },
    {
      num: "02",
      title: "実績と口コミを確認する",
      desc: "施工実績の写真や利用者の口コミは、業者選びの重要な判断材料です。くらしのマーケットなど、口コミが充実したプラットフォームを活用する方法も有効です。作業前後の写真を公開している業者は、技術力を判断する参考になります。",
    },
    {
      num: "03",
      title: "対応エリアと対応スピードを確認する",
      desc: "お住まいの地域が対応エリアに含まれるか、依頼から作業までにどの程度の期間がかかるかを事前にご確認ください。台風後などに緊急の対応が必要な場合は、24時間受付の業者が便利です。繁忙期（春・秋）は早めの予約をおすすめします。",
    },
    {
      num: "04",
      title: "資格・保険の有無を確認する",
      desc: "造園技能士や樹木医などの資格を持つスタッフが在籍しているかをご確認ください。また、作業中の事故に備え、賠償責任保険に加入している業者を選ぶことをおすすめします。万が一物損が発生した場合にも、保険による補償を受けられます。",
    },
    {
      num: "05",
      title: "複数社の見積もりを比較する",
      desc: "2〜3社以上から見積もりを取り、比較することをおすすめします。料金だけでなく、作業内容・処分費・保証の有無などを含めて総合的に判断することが重要です。無料見積もりの際に現地調査を依頼すると、より正確な金額を確認できます。",
    },
  ];
  return (
    <section id="guide" className="ow-section scroll-mt-20">
      <div className="ow-container">
        <h2 className="ow-h2">
          業者の選び方<small>5つのポイント</small>
        </h2>
        <p className="-mt-3 mb-6 text-[14px] leading-relaxed text-[color:var(--ow-muted)] md:-mt-5 md:mb-8">
          庭木の手入れ業者を初めて選ぶ方は、次の5つのポイントを確認することをおすすめします。
        </p>
        <ol className="grid gap-3 md:grid-cols-2 md:gap-4">
          {points.map((p, i) => (
            <li key={p.num} className={`ow-card flex gap-4 p-5 md:p-6 ${i === points.length - 1 ? "md:col-span-2" : ""}`} data-reveal={String(i % 2)}>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[color:var(--ow-green)] text-[17px] font-bold text-white">
                {p.num}
              </span>
              <div>
                <h3 className="mb-1.5 text-[17px] font-bold leading-snug">{p.title}</h3>
                <p className="text-[14px] leading-[1.85] text-[color:var(--ow-muted)]">{p.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Seasonal Calendar ─── */
function SeasonalCalendar() {
  const seasons = [
    {
      season: "春（3〜5月）",
      tasks: [
        "落葉樹の軽剪定",
        "芝生の手入れ開始",
        "春の植栽・植え替え",
        "害虫予防の消毒",
      ],
      tip: "新芽が出る前の3月は、剪定に適した時期です。春先に消毒を行うと、害虫の被害を予防できます。",
    },
    {
      season: "夏（6〜8月）",
      tasks: [
        "生垣の刈り込み",
        "雑草の草刈り",
        "害虫駆除",
        "水やり管理",
      ],
      tip: "夏は雑草が最も伸びる時期のため、梅雨明けの草刈りが効果的です。猛暑日の強剪定は樹木を傷めるため、避けてください。",
    },
    {
      season: "秋（9〜11月）",
      tasks: [
        "常緑樹の剪定",
        "落ち葉の清掃",
        "秋の植栽",
        "冬支度の施肥",
      ],
      tip: "台風シーズンの前に、危険な枝を剪定しておくことをおすすめします。10〜11月は剪定の依頼が集中するため、早めに予約してください。",
    },
    {
      season: "冬（12〜2月）",
      tasks: [
        "落葉樹の強剪定",
        "伐採・抜根作業",
        "雪囲い・冬囲い",
        "剪定の計画立案",
      ],
      tip: "葉が落ちた冬は樹形を確認しやすく、強い剪定に適した時期です。業者の予約も比較的取りやすく、料金の相談がしやすい時期でもあります。",
    },
  ];
  return (
    <section id="calendar" className="ow-section ow-band scroll-mt-20">
      <div className="ow-container">
        <h2 className="ow-h2">季節別の手入れカレンダー</h2>
        <p className="-mt-3 mb-6 text-[14px] leading-relaxed text-[color:var(--ow-muted)] md:-mt-5 md:mb-8">
          庭木の手入れは時期が重要です。季節ごとに適した作業を把握し、計画的に庭を管理することをおすすめします。
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {seasons.map((s, i) => (
            <div key={s.season} className="ow-card flex flex-col overflow-hidden" data-reveal={String(i)}>
              <h3 className="border-b border-[color:var(--ow-border)] bg-[color:var(--ow-wash)] px-5 py-3.5 text-[17px] font-bold text-[color:var(--ow-green-dark)]">
                {s.season}
              </h3>
              <ul className="space-y-2 px-5 pt-4 text-[14px]">
                {s.tasks.map((t) => (
                  <li key={t} className="ow-dot">{t}</li>
                ))}
              </ul>
              <p className="mx-5 mb-5 mt-4 border-t border-dashed border-[color:var(--ow-border-strong)] pt-3 text-[13px] leading-relaxed text-[color:var(--ow-muted)]">
                {s.tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const faqs = [
    {
      q: "剪定・草刈り・伐採の費用相場はどのくらいですか？",
      a: "公式サイトの掲載料金（2026年10月20日確認・税込）では、剪定110番が剪定1本4,000円〜、草刈り110番が1㎡あたり163円〜、伐採110番が伐採1本8,200円〜です。いずれも最低価格です。ただし、木の高さ・太さ・作業難易度・ゴミ処分費によって大きく変動します。正確な金額を知るには、2〜3社から無料見積もりを取ることをおすすめします。",
    },
    {
      q: "見積もりは本当に無料ですか？",
      a: "当サイトで紹介している業者は、いずれも見積もりが無料です。現地調査を無料で行う業者も多くあります。見積もり後にキャンセルしても費用は発生しません。複数社への見積もり依頼をおすすめします。",
    },
    {
      q: "庭木の剪定に最適な時期はいつですか？",
      a: "樹種によって適した時期は異なりますが、一般的に落葉樹は冬（12〜2月）、常緑樹は春先（3〜4月）または秋（9〜10月）が適しています。真夏の強剪定は樹木を弱らせるため、避けてください。詳しくは、上記の季節別カレンダーをご覧ください。",
    },
    {
      q: "作業後に出たゴミ（枝葉）の処分はどうなりますか？",
      a: "多くの業者が剪定枝や伐採木の処分まで対応しています。ただし、処分費が見積もりに含まれているか別途かかるかは業者によって異なります。見積もりの際に、処分費が含まれているかを必ずご確認ください。",
    },
    {
      q: "マンションのベランダや小さな庭でも依頼できますか？",
      a: "はい。多くの業者が庭木1本から対応しています。マンションの植栽やベランダの鉢植えの手入れに対応している業者もあります。剪定110番やくらしのマーケットでは、少量の依頼も相談できます。",
    },
  ];
  return (
    <section id="faq" className="ow-section scroll-mt-20">
      <div className="ow-container max-w-[920px]">
        <h2 className="ow-h2">よくある質問</h2>
        <p className="-mt-3 mb-6 text-[14px] text-[color:var(--ow-muted)] md:-mt-5 md:mb-8">
          庭木の手入れ業者選びでよくいただく質問にお答えします。
        </p>
        <div className="grid gap-3">
          {faqs.map((faq, i) => (
            <details key={i} className="ow-acc ow-card group" data-reveal="0">
              <summary className="flex min-h-[60px] items-start gap-3 px-4 py-4 text-[15px] font-bold leading-relaxed md:px-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[color:var(--ow-green)] text-[13px] text-white">Q</span>
                <span className="flex-1 pt-0.5">{faq.q}</span>
                <span className="mt-1 shrink-0 text-[color:var(--ow-green)]">
                  <svg className="ow-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
                </span>
              </summary>
              <div className="flex gap-3 border-t border-[color:var(--ow-border)] px-4 py-4 text-[14px] leading-[1.9] text-[color:var(--ow-muted)] md:px-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[color:var(--ow-green)] text-[13px] font-bold text-[color:var(--ow-green)]">A</span>
                <p className="flex-1">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="border-t border-[color:var(--ow-border)] bg-[color:var(--ow-wash)] py-14 md:py-20">
      <div className="ow-container max-w-[920px]">
        <div className="ow-card border-2 border-[color:var(--ow-green)] px-5 py-8 text-center md:px-10 md:py-12" data-reveal="0">
          <h2 className="text-[22px] font-bold tracking-[0.04em] md:text-[28px]">
            庭の手入れに関するご相談について
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.9] text-[color:var(--ow-muted)]">
            無料見積もりで料金を比較できます。最短即日対応の業者も掲載しています。
            <br className="hidden md:block" />
            ご利用前に、公式サイトにて最新情報をご確認ください。
          </p>
          <div className="mt-7 flex justify-center">
            <a href="#ranking" className="ow-btn ow-btn--lg w-full sm:w-auto sm:px-12">
              おすすめ業者を見る
            </a>
          </div>
          <p className="mt-5 text-[12px] text-[color:var(--ow-muted)]">
            ※見積もりの依頼は無料です。キャンセル料はかかりません。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const link = "transition-colors hover:text-white";
  return (
    <footer className="bg-[color:var(--ow-green-dark)] text-white/75">
      <div className="ow-container py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4">
              <OwLogo tone="light" />
            </div>
            <p className="text-sm leading-relaxed">
              剪定・草刈り・伐採・造園の業者を、公式サイトの情報にもとづいて比較する専門ガイドです。
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-white">サービスから探す</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/agents/" className={link}>剪定業者を比較</a></li>
              <li><a href="/agents/" className={link}>草刈り業者を比較</a></li>
              <li><a href="/agents/" className={link}>伐採業者を比較</a></li>
              <li><a href="/agents/" className={link}>造園業者を比較</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-white">お役立ち情報</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#guide" className={link}>業者の選び方ガイド</a></li>
              <li><a href="#calendar" className={link}>季節別の手入れカレンダー</a></li>
              <li><a href="#faq" className={link}>よくある質問</a></li>
              <li><span>料金相場ガイド</span></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold text-white">運営情報</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/terms/" className={link}>利用規約</a></li>
              <li><a href="/privacy/" className={link}>プライバシーポリシー</a></li>
              <li><a href="/content-policy/" className={link}>コンテンツ制作ポリシー</a></li>
              <li><a href="/about/" className={link}>運営者情報</a></li>
              <li><a href="/about/" className={link}>お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div className="mb-6 border-t border-white/15 pt-6">
          <p className="text-xs leading-relaxed text-white/60">
            ※当サイトはアフィリエイトプログラムに参加しています。当サイト経由でサービスにお申し込みいただいた場合、提携企業から報酬を受け取ることがあります。ただし、ランキングや評価はサービスの品質・料金を元に編集部が独自に作成しており、報酬の有無が順位に影響することはありません。
          </p>
        </div>
        <div className="text-center text-xs text-white/55">
          <p>運営: 株式会社MediaX</p>
          <p className="mt-1">&copy; 2026 お庭のミカタ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="ow-page">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <TaskFinder />
        <AreaSection />
        <ServiceCategories />
        <TopRanking />
        <HowToChoose />
        <SeasonalCalendar />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
