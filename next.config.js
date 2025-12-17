/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // 🔥 REMOVE any X-Frame-Options
          {
            key: "X-Frame-Options",
            value: "",
          },
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
