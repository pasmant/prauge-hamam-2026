import { generateItineraryPdfBuffer } from "@/lib/generateItineraryPdf";

export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const buffer = await generateItineraryPdfBuffer();

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="prague-hamam-2026-itinerary.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("itinerary-pdf generation failed:", error);
    return Response.json(
      { error: "Failed to generate itinerary PDF" },
      { status: 500 }
    );
  }
}
