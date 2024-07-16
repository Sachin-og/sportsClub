/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/singhal_sports_club/' : '',
    images: {
        domains:['images.unsplash.com'],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      
    }
};

export default nextConfig;
