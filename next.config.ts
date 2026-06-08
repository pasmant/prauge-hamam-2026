import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@sparticuz/chromium-min", "puppeteer-core"],
  outputFileTracingIncludes: {
    "/api/itinerary-pdf": ["./node_modules/@sparticuz/chromium-min/**"],
  },
};

export default nextConfig;
