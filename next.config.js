/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'open.cruip.com',
      'ucarecdn.com',
      'www.svgrepo.com',
      'images.unsplash.com',
      'res.cloudinary.com',
    ],
  },
  webpack(config) {
    // --- ✅ Prevent double handling of SVGs by Next Image loader ---
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // --- ✅ Add SVGR loader for React SVG imports ---
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
