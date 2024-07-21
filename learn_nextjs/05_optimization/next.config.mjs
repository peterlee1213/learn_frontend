const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tppic.chinaz.net"
            }
        ]
    }
};

module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig;
