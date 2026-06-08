import { renderToBuffer } from "@react-pdf/renderer";
import { ItineraryPdfDocument } from "@/lib/itineraryPdfDocument";
import { registerItineraryPdfFonts } from "@/lib/itineraryPdfFonts";

export async function generateItineraryPdfBuffer() {
  registerItineraryPdfFonts();
  return renderToBuffer(<ItineraryPdfDocument />);
}
