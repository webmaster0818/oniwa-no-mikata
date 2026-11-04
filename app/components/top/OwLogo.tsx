import { LOGO_MARKS, LOGO_GREEN, LOGO_BARK } from "./marks";

// ロゴマーク＝案1「玉づくりの庭木」（2026-11-04 サンプル。okina 選定前のおすすめ）。ファビコンも同じ形。
const MARK = LOGO_MARKS[0];

export function OwMark({ size = 40, tone = "dark" }: { size?: number; tone?: "dark" | "light" }) {
  const a = tone === "light" ? "#FFFFFF" : LOGO_GREEN;
  const b = tone === "light" ? "#C9B08F" : LOGO_BARK;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MARK.svg(a, b) }} />
  );
}

export default function OwLogo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const name = tone === "light" ? "text-white" : "text-[color:var(--ow-green-dark)]";
  const sub = tone === "light" ? "text-white/65" : "text-[color:var(--ow-muted)]";
  return (
    <a href="/" className="inline-flex items-center gap-2.5" aria-label="お庭のミカタ トップページ">
      <OwMark size={40} tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`text-[20px] font-bold tracking-[0.08em] md:text-[22px] ${name}`}>お庭のミカタ</span>
        <span className={`mt-1.5 text-[10.5px] font-medium tracking-[0.12em] ${sub}`}>剪定・草刈り・伐採の業者比較</span>
      </span>
    </a>
  );
}
