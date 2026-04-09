// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source', // built-in Webpack 5 raw loader — no extra package needed
    });
    return config;
  },
};

export default nextConfig;