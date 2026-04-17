// Shared font + style options for OG image generation.
// Build-time fonts are loaded over HTTPS by astro-og-canvas.
import type { OGImageOptions } from "astro-og-canvas/dist/types";

const FONT_FRAUNCES =
  "https://cdn.jsdelivr.net/fontsource/fonts/fraunces:vf@latest/latin-wght-normal.woff2";
const FONT_INTER =
  "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2";

export function buildOGOptions(
  title: string,
  description: string,
  titleSize: 72 | 84 = 72
): OGImageOptions {
  return {
    title,
    description,
    bgGradient: [[11, 11, 12]],
    border: { color: [200, 155, 60], width: 4, side: "inline-start" },
    padding: 80,
    fonts: [FONT_FRAUNCES, FONT_INTER],
    font: {
      title: {
        size: titleSize,
        families: ["Fraunces"],
        weight: "SemiBold",
        color: [234, 234, 236],
      },
      description: {
        size: 32,
        families: ["Inter"],
        weight: "Normal",
        color: [154, 154, 163],
        lineHeight: 1.4,
      },
    },
  };
}
