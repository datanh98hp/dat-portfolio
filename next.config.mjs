/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                hostname:"png.pngtree.com"
            }
        ],
    },
};

export default nextConfig;
