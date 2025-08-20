import type { NextConfig } from "next";

const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://leegukgeon.github.io'
    : '';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: prefix,
};

export default nextConfig;
