/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/sportsClub',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sportsClub/' : '',
    images: {
        unoptimized: true,
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
