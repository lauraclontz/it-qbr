import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  /* config options here */
};

// Makes the Cloudflare bindings (D1 `DB`, etc.) available to getCloudflareContext()
// during `next dev`. No-op in the production Webflow Cloud build.
initOpenNextCloudflareForDev();

export default nextConfig;
