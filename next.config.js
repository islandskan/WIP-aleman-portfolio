/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.ctfassets.net',
            'assets.ctfassets.net',
            'images.unsplash.com',
        ],
    },
};

export default nextConfig;