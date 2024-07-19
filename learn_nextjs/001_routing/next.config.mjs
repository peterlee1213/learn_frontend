/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/02_pages_and_layouts/test_next_config_redirect",
                destination: "/02_pages_and_layouts/test_redirect2",
                permanent: true
            }
        ]
    }
};

export default nextConfig;
