import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@react-pdf/renderer"],
  outputFileTracingIncludes: {
    "/api/itinerary-pdf": ["./public/fonts/**/*"],
  },
};

export default nextConfig;
