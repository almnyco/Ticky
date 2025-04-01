import type { NextConfig } from "next";

const nextConfig: NextConfig =
{
  webpack(config) {
    // Important: return the modified config

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
};

export default nextConfig;
