import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";
import { buildItineraryPrintHtml } from "@/lib/itineraryPrintHtml";

const CHROMIUM_VERSION = "149.0.0";

function getChromiumPackUrl() {
  if (process.env.CHROMIUM_REMOTE_EXEC_PATH) {
    return process.env.CHROMIUM_REMOTE_EXEC_PATH;
  }

  const arch = process.arch === "arm64" ? "arm64" : "x64";
  return `https://github.com/Sparticuz/chromium/releases/download/v${CHROMIUM_VERSION}/chromium-v${CHROMIUM_VERSION}-pack.${arch}.tar`;
}

function isVercelRuntime() {
  return Boolean(process.env.VERCEL || process.env.VERCEL_ENV);
}

async function resolveExecutablePath() {
  if (isVercelRuntime()) {
    chromium.setGraphicsMode = false;
    return chromium.executablePath(getChromiumPackUrl());
  }

  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].filter(Boolean) as string[];

  for (const candidate of candidates) {
    const fs = await import("node:fs");
    if (fs.existsSync(candidate)) return candidate;
  }

  throw new Error("Chrome/Chromium not found for PDF generation");
}

export async function generateItineraryPdfBuffer() {
  const html = buildItineraryPrintHtml();
  const executablePath = await resolveExecutablePath();
  const onVercel = isVercelRuntime();

  const browser = await puppeteer.launch({
    args: onVercel
      ? [...chromium.args, "--disable-dev-shm-usage", "--disable-gpu"]
      : ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 794, height: 1123 },
    executablePath,
    headless: onVercel ? "shell" : true,
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load", timeout: 30_000 });
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
