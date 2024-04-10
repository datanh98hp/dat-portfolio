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
            }
        ],
    },
};

export default nextConfig;
