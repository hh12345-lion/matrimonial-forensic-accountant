import type { NextConfig } from "next";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/expert-witness",
        destination: "/services/expert-witness",
        permanent: true,
      },
      {
        source: "/investigations",
        destination: "/services/hidden-assets",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
