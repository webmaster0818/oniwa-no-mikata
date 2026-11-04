import { TASK_ICONS, iconInner } from "./marks";

/** 作業・お悩み別アイコン（系統B：太線＋シルエットを TOP に採用） */
export default function TaskIcon({ name, size = 96, variant = "bold", className = "" }: { name: string; size?: number; variant?: "line" | "bold"; className?: string }) {
  const def = TASK_ICONS.find((d) => d.key === name);
  if (!def) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconInner(def, variant) }} />
  );
}
