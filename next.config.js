/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/data_sdi",
        destination: "https://sikondang.serangkota.go.id/api/data_sdi",
      },
    ];
  },
};

module.exports = nextConfig;
