/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply headers to ALL routes (pages + API)
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://*.sanity.io https://studio.sanity.io;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
