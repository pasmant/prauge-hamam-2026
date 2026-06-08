import fs from "node:fs";
import path from "node:path";
import { Font } from "@react-pdf/renderer";

let fontsRegistered = false;

function resolveFontPath(filename: string) {
  const candidates = [
    path.join(process.cwd(), "public/fonts", filename),
    path.join(
      process.cwd(),
      "node_modules/@fontsource/noto-sans-hebrew/files",
      filename
    ),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }

  throw new Error(`Hebrew font not found: ${filename}`);
}

export function registerItineraryPdfFonts() {
  if (fontsRegistered) return;

  Font.register({
    family: "NotoSansHebrew",
    fonts: [
      {
        src: resolveFontPath("noto-sans-hebrew-hebrew-400-normal.woff"),
        fontWeight: 400,
      },
      {
        src: resolveFontPath("noto-sans-hebrew-hebrew-700-normal.woff"),
        fontWeight: 700,
      },
    ],
  });

  fontsRegistered = true;
}
