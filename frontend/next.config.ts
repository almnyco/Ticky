import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  webpack(config) {
    // Important: return the modified config

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
