/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/swc-wasm-nodejs': false,
      '@next/swc-linux-x64-gnu': false,
      '@next/swc-linux-x64-musl': false,
    };
    return config;
  },
};

export default nextConfig;