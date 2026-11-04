// お庭のミカタ TOP 用のロゴマーク・作業アイコン（すべて自作の SVG。48×48 のグリッド）。
// 2系統：line（細線）と bold（太線＋一部を塗り）。塗る部分は solid: true。
// 色は currentColor の単色。ロゴだけ2色（--ow-green / --ow-bark）を使う。

export type Shape = {
  d: string; // path の d
  solid?: boolean; // bold 系統で塗りつぶす部分
  thin?: boolean; // bold 系統でも細めに描く補助線
};

export type IconDef = { key: string; label: string; shapes: Shape[] };

export const TASK_ICONS: IconDef[] = [
  {
    key: "sentei",
    label: "剪定",
    shapes: [
      { d: "M4 19C12 18 20 15 30 9" },
      { d: "M10 18C8 13 10.5 9 15.5 7.5C17 12.5 15 16 10 18Z", solid: true },
      { d: "M24 24C27 17 33 11 40.5 7.5C37.5 15 31.5 21 24 24Z", solid: true },
      { d: "M24 24C30 19.5 36 16 43.5 15C38.5 21 31.5 24.5 24 24Z", solid: true },
      { d: "M24 24C20 28 15 33 9.5 37.5" },
      { d: "M24 24C23.5 30 20 36 15 41.5" },
      { d: "M9.5 37.5L6 41M15 41.5L12.5 45" },
    ],
  },
  {
    key: "bassai",
    label: "伐採・抜根",
    shapes: [
      { d: "M13 25V36.5M35 25V36.5" },
      { d: "M13 25C13 22.2 18 20.5 24 20.5C30 20.5 35 22.2 35 25C35 27.8 30 29.5 24 29.5C18 29.5 13 27.8 13 25Z", solid: true },
      { d: "M19.5 25C19.5 24 21.5 23.4 24 23.4C26.5 23.4 28.5 24 28.5 25C28.5 26 26.5 26.6 24 26.6C21.5 26.6 19.5 26 19.5 25Z", thin: true },
      { d: "M13 36.5C10.5 38 8.5 39.5 6 42M35 36.5C37.5 38 39.5 39.5 42 42M20 37.5L18.5 42M28 37.5L29.5 42" },
      { d: "M4 42H44", thin: true },
    ],
  },
  {
    key: "kusakari",
    label: "草刈り",
    shapes: [
      { d: "M7 42C8 35 7.5 29 5 24M11.5 42C11.5 34 13.5 28 17 23M16 42C16.5 36 15.5 31 13 27.5M20 42C21 37 23 33.5 26 31" },
      { d: "M4 42H30", thin: true },
      { d: "M33 43L27.5 15.5" },
      { d: "M27.5 15.5C31.5 9 39.5 8.5 43.5 13.5C44.5 15 44.5 17 44 18.5C40.5 15 34.5 14.5 29 17.5Z", solid: true },
    ],
  },
  {
    key: "shibafu",
    label: "芝生",
    shapes: [
      { d: "M4 31H44V40H4Z", solid: true },
      { d: "M6 31L8 23L10 31M12.5 31L14.5 21.5L16.5 31M19 31L21 23L23 31M25.5 31L27.5 21.5L29.5 31M32 31L34 23L36 31M38.5 31L40.5 21.5L42.5 31" },
      { d: "M4 44H44", thin: true },
    ],
  },
  {
    key: "shodoku",
    label: "庭木の消毒",
    shapes: [
      { d: "M10 20.5C10 18.5 11.5 17.5 13.5 17.5H21.5C23.5 17.5 25 18.5 25 20.5V39C25 41 23.5 42 21.5 42H13.5C11.5 42 10 41 10 39Z", solid: true },
      { d: "M17.5 17.5V11.5M13 11.5H22" },
      { d: "M25 25C31 25 33.5 23 35 18" },
      { d: "M35 18L39.5 12.5" },
      { d: "M42 9.5H42.2M44 13.5H44.2M40 7H40.2M44.5 9H44.7", thin: true },
    ],
  },
  {
    key: "bousou",
    label: "防草シート",
    shapes: [
      { d: "M4 36L13 25H36L27 36Z", solid: true },
      { d: "M41 30.5C41 27.5 38.5 25 35.5 25C32.5 25 30 27.5 30 30.5C30 33.5 32.5 36 35.5 36C38.5 36 41 33.5 41 30.5Z" },
      { d: "M38 30.5C38 29.1 36.9 28 35.5 28C34.1 28 33 29.1 33 30.5", thin: true },
      { d: "M4 41H44", thin: true },
      { d: "M8 21C8 17 9.5 14 12 12M12 21C12.5 18 14 16 16 15", thin: true },
    ],
  },
  {
    key: "take",
    label: "竹・笹",
    shapes: [
      { d: "M14 6H20V43H14Z", solid: true },
      { d: "M14 16H20M14 27H20M14 37H20", thin: true },
      { d: "M27 13H33V43H27Z", solid: true },
      { d: "M27 22H33M27 32H33", thin: true },
      { d: "M20 16C25 15 29 12.5 31 8.5C26 9 22 11.5 20 16Z", solid: true },
      { d: "M33 22C38 22.5 42 21 45 17.5C40 16.8 36 18.5 33 22Z", solid: true },
      { d: "M14 27C9.5 26 6 23.5 4 20C8.5 20 12 22.5 14 27Z", solid: true },
    ],
  },
  {
    key: "koke",
    label: "苔",
    shapes: [
      { d: "M5 40C5 34.5 9 31 13.5 31C16.5 31 18.5 32.5 19.5 34.5C21 30.5 25 28 30 28C36.5 28 41.5 32.5 43 40Z", solid: true },
      { d: "M13.5 31V24.5M24.5 29V20.5M33 28.5V22.5", thin: true },
      { d: "M13.5 23.5H13.7M24.5 19.5H24.7M33 21.5H33.2" },
      { d: "M3 42H45", thin: true },
    ],
  },
];

// ロゴマーク3案（2026-11-04 提案）。fillA = 主色、fillB = 副色。
export type LogoDef = { key: string; name: string; note: string; svg: (a: string, b: string) => string };

export const LOGO_MARKS: LogoDef[] = [
  {
    key: "tamazukuri",
    name: "案1 玉づくりの庭木",
    note: "二段に刈り込んだ庭木のシルエット。剪定した庭木だと一目で分かる形",
    svg: (a, b) =>
      `<path d="M20.5 45.5C20.8 40 19.2 35.5 20.6 29.5M20.4 34C25.5 31.5 29 25 29.8 16.5" fill="none" stroke="${b}" stroke-width="3.6" stroke-linecap="round"/>` +
      `<path d="M3.6 30.2C2.2 26 5.6 22.4 9.6 22.9C11.1 18.8 16.8 17.6 19.9 20.7C23 17.7 28.9 18.8 30.4 22.9C34.5 22.7 37.2 26.6 35.2 30.2C33.8 32.7 29.4 33.4 24.4 33H11.6C7.8 33.4 4.6 32.8 3.6 30.2Z" fill="${a}"/>` +
      `<path d="M19.4 15.8C18 11.9 21.3 8.9 25 9.4C26.4 5.9 31.8 4.9 34.4 7.9C37.4 5.5 42.8 6.9 43.9 10.9C46.9 11.9 46.9 16.4 43.9 17.4C40.4 18.4 36.4 18.1 31.4 18.1H24.4C21.9 18.4 20 17.7 19.4 15.8Z" fill="${a}"/>`,
  },
  {
    key: "kiriha",
    name: "案2 切り葉",
    note: "一枚の葉に剪定の切り口を斜めに入れた形。単色で小さくても潰れにくい",
    svg: (a) =>
      `<path d="M6 42C6 20 19 6 42 6C42 28 28 42 6 42Z" fill="${a}"/>` +
      `<path d="M9.5 38.5L38.5 9.5" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/>`,
  },
  {
    key: "niwame",
    name: "案3 庭の区画と芽",
    note: "四角い区画（庭）の中から芽が伸びる形。枠で囲うので背景を選ばない",
    svg: (a, b) =>
      `<rect x="5" y="5" width="38" height="38" rx="3" fill="none" stroke="${a}" stroke-width="3.6"/>` +
      `<path d="M24 37V24" stroke="${a}" stroke-width="3.4" stroke-linecap="round"/>` +
      `<path d="M24 26C24 18.5 29.5 13.5 36.5 13.5C36.5 21 31 26 24 26Z" fill="${b}"/>` +
      `<path d="M24 30.5C24 24.5 19 20.5 12 21C12.5 27 17.5 30.5 24 30.5Z" fill="${b}"/>`,
  },
];

export const LOGO_GREEN = "#23583A";
export const LOGO_BARK = "#7A5634";
export const LOGO_LEAF = "#4E8A4F";

/** アイコン1つ分の SVG 内側（<svg> 要素の中身）を返す */
export function iconInner(def: IconDef, variant: "line" | "bold"): string {
  const sw = variant === "line" ? 1.7 : 3;
  const thinSw = variant === "line" ? 1.4 : 2;
  return def.shapes
    .map((s) => {
      const fill = variant === "bold" && s.solid ? "currentColor" : "none";
      const w = s.thin ? thinSw : sw;
      return `<path d="${s.d}" fill="${fill}" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
    })
    .join("");
}
