import { regions, tokyo, allAreaSlugs, type AreaLink } from "@/data/areaRegions";

const Chevron = () => (
  <svg className="ow-chev h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function Tiles({ items }: { items: AreaLink[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((x) => (
        <li key={x.slug}>
          <a
            href={`/area/${x.slug}/`}
            className="flex min-h-[48px] items-center justify-between gap-2 rounded-[4px] border border-[color:var(--ow-border)] bg-white px-3.5 text-[14px] font-bold text-[color:var(--ow-ink)] transition-colors hover:border-[color:var(--ow-green)] hover:bg-[color:var(--ow-wash)]"
          >
            <span>{x.label}</span>
            <svg className="h-3.5 w-3.5 shrink-0 text-[color:var(--ow-leaf)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><polyline points="9 6 15 12 9 18" /></svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

const summaryCls =
  "flex min-h-[60px] items-center justify-between gap-3 px-4 md:px-5";

/** TOP「エリアから探す」。東京都は最上部の別枠、地方は都道府県ごと。すべて折りたたみ（JS 不要の details）。 */
export default function AreaFinder() {
  const prefCount = 1 + regions.reduce((n, r) => n + r.prefectures.length, 0);
  return (
    <div>
      <p className="mb-5 text-[14px] text-[color:var(--ow-muted)]">
        {prefCount}都道府県・{allAreaSlugs.length}市の庭業者まとめがあります。地域名を押すと市の一覧が開きます。
      </p>

      <details className="ow-acc group mb-4 overflow-hidden rounded-[4px] border-2 border-[color:var(--ow-green)] bg-white" data-reveal="0">
        <summary className={`${summaryCls} bg-[color:var(--ow-green)] text-white`}>
          <span className="flex items-baseline gap-3">
            <span className="text-[18px] font-bold tracking-[0.06em]">東京都</span>
            <span className="text-[12px] text-white/80">東京都全体・多摩地域</span>
          </span>
          <span className="flex items-center gap-2 text-[12px] font-bold text-white/85">
            {1 + tokyo.cities.length}ページ
            <Chevron />
          </span>
        </summary>
        <div className="grid gap-5 p-4 md:p-6">
          <a href={`/area/${tokyo.top.slug}/`} className="ow-btn w-full sm:w-fit">
            東京都全体の庭業者まとめを見る
          </a>
          <div>
            <p className="mb-2.5 text-[13px] font-bold text-[color:var(--ow-muted)]">多摩地域の市</p>
            <Tiles items={tokyo.cities} />
          </div>
          <ul className="grid gap-1 text-[14px]">
            {tokyo.extra.map((x) => (
              <li key={x.href}>
                <a href={x.href} className="inline-flex min-h-[44px] items-center font-bold text-[color:var(--ow-green)] underline decoration-[color:var(--ow-border-strong)] underline-offset-4 hover:decoration-[color:var(--ow-green)]">
                  {x.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[12px] leading-relaxed text-[color:var(--ow-muted)]">23区ごとのページは、現在ありません。区内の方は東京都全体のまとめをご覧ください。</p>
        </div>
      </details>

      <div className="grid gap-3">
        {regions.map((r, i) => {
          const n = r.prefectures.reduce((m, p) => m + p.areas.length, 0);
          return (
            <details key={r.name} className="ow-acc group overflow-hidden rounded-[4px] border border-[color:var(--ow-border-strong)] bg-white" data-reveal={String(i + 1)}>
              <summary className={`${summaryCls} bg-white group-open:border-b group-open:border-[color:var(--ow-border)]`}>
                <span className="text-[16px] font-bold tracking-[0.04em] text-[color:var(--ow-green-dark)]">{r.name}</span>
                <span className="flex items-center gap-2 text-[12px] font-bold text-[color:var(--ow-muted)]">
                  {n}市
                  <span className="text-[color:var(--ow-green)]"><Chevron /></span>
                </span>
              </summary>
              <div className="divide-y divide-[color:var(--ow-border)] bg-[color:var(--ow-paper)]">
                {r.prefectures.map((p) => (
                  <div key={p.name} className="px-4 py-4 md:grid md:grid-cols-[120px_minmax(0,1fr)] md:items-start md:gap-4 md:px-6">
                    <p className="mb-2.5 text-[14px] font-bold md:mb-0 md:flex md:min-h-[48px] md:items-center">{p.name}</p>
                    <Tiles items={p.areas} />
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
