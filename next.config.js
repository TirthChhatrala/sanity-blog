/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
           {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://*.sanity.io https://studio.sanity.io https://*.vercel.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
