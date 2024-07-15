/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
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
