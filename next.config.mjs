/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                hostname: "png.pngtree.com"
            },
            {
                hostname: "images.unsplash.com"
            },
            {
                hostname: "cdn.dribbble.com"
            }
        ],
    },
};

export default nextConfig;
