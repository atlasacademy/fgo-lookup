/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/drop-lookup",
    assetPrefix: "/drop-lookup",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.atlasacademy.io",
                port: "",
                pathname: "**",
            },
        ],
        unoptimized: true,
    },
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
