import path from "node:path";
import { Font } from "@react-pdf/renderer";

let fontsRegistered = false;

export function registerItineraryPdfFonts() {
  if (fontsRegistered) return;

  const fontsDir = path.join(
    process.cwd(),
    "node_modules/@fontsource/noto-sans-hebrew/files"
  );

  Font.register({
    family: "NotoSansHebrew",
    fonts: [
      {
        src: path.join(fontsDir, "noto-sans-hebrew-hebrew-400-normal.woff"),
        fontWeight: 400,
      },
      {
        src: path.join(fontsDir, "noto-sans-hebrew-hebrew-700-normal.woff"),
        fontWeight: 700,
      },
    ],
  });

  fontsRegistered = true;
}
