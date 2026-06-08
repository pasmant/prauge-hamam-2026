import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";
import { buildItineraryPrintHtml } from "@/lib/itineraryPrintHtml";

async function resolveExecutablePath() {
  if (process.env.VERCEL) {
    return chromium.executablePath();
  }

  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].filter(Boolean) as string[];

  for (const candidate of candidates) {
    try {
      const fs = await import("node:fs");
      if (fs.existsSync(candidate)) return candidate;
    } catch {
      // continue
    }
  }

  throw new Error("Chrome/Chromium not found for PDF generation");
}

export async function generateItineraryPdfBuffer() {
  const html = buildItineraryPrintHtml();
  const executablePath = await resolveExecutablePath();
  const browser = await puppeteer.launch({
    args: process.env.VERCEL ? chromium.args : ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 794, height: 1123 },
    executablePath,
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    await page.evaluateHandle("document.fonts.ready");
    const buffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
    return Buffer.from(buffer);
  } finally {
    await browser.close();
  }
}
