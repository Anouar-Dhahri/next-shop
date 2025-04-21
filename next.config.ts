import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "files.stripe.com",
      protocol: "https",
      pathname: '**',
    }],
  },
};

export default nextConfig;
