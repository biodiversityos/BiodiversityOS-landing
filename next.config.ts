import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent stale-cache "Failed to find Server Action" errors after redeployment.
  // HTML pages are never cached by browsers/CDN — they always get the fresh bundle.
  async headers() {
    return [
      {
        source: "/((?!_next/static|_next/image|favicon|icon).*)",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
