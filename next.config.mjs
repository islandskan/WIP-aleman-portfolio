/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // domains: [
        //     'images.ctfassets.net',
        //     'assets.ctfassets.net',
        // ],
        remotePatterns: [
            {
                hostname: 'images.ctfassets.net',
            },
        ],
    },
};

export default nextConfig;
