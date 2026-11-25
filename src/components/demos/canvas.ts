/** Size a canvas to its CSS box at device pixel ratio and return a context drawing in CSS pixels. */
export function fitCanvas(canvas: HTMLCanvasElement, cssHeight: number) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = canvas.clientWidth || 600;
  const height = cssHeight;
  if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
  }
  const ctx2d = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx2d, width, height };
}

const toHex = (value: string, fallback: string) => {
  const v = value.trim();
  return /^#[0-9a-f]{6}$/i.test(v) ? v : fallback;
};

/** The project's theme colours as 6-digit hex, so demos match the page they sit on. */
export function readThemeColors(element: Element) {
  const style = getComputedStyle(element);
  return {
    accent: toHex(style.getPropertyValue("--theme-accent-primary"), "#93acd3"),
    accent2: toHex(style.getPropertyValue("--theme-accent-secondary"), "#d3dff1"),
    fg: toHex(style.getPropertyValue("--theme-text-primary"), "#e6e8ec"),
    muted: toHex(style.getPropertyValue("--theme-text-muted"), "#737c8b")
  };
}

/** `#rrggbb` plus an alpha in 0..1, clamped so canvas never gets an invalid colour. */
export function withAlpha(hex: string, alpha: number) {
  const a = Math.round(Math.min(1, Math.max(0, alpha)) * 255);
  return `${hex}${a.toString(16).padStart(2, "0")}`;
}
