/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "uploadthing.com",
            },
            {
                hostname: "utfs.io",
            },
        ]
    }
}

module.exports = nextConfig
