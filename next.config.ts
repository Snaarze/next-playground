import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        // things that are defined are for security purposes which allow us to prevent
        // end users to modify the endpoint of the images
        protocol: "https",
        hostname: "bit.ly",
      },
    ],
  },
};

export default nextConfig;
