
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

// module.exports = {
//   assetPrefix: ghPages ? '/KhalidElgamous.github.io/' : ''
// }

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // generates the static site in /out
  images: { unoptimized: true }, // required for next/image with static export
  trailingSlash: true,           // optional, avoids 404s on page refresh
  assetPrefix: ghPages ? '/KhalidElgamous.github.io/' : '',
};

export default nextConfig;
