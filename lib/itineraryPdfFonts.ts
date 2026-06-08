import { Font } from "@react-pdf/renderer";
import { FONT_400, FONT_700 } from "@/lib/itineraryPdfFontData";

let fontsRegistered = false;

export function registerItineraryPdfFonts() {
  if (fontsRegistered) return;

  Font.register({
    family: "NotoSansHebrew",
    fonts: [
      { src: FONT_400, fontWeight: 400 },
      { src: FONT_700, fontWeight: 700 },
    ],
  });

  fontsRegistered = true;
}
