/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/highlights",
        destination: "https://web-dev.dev.kimo.ai/v1/highlights",
      },
      {
        source: "/categories",
        destination: "https://web-dev.dev.kimo.ai/v1/categories",
      },
      {
        source: "/acivity",
        destination:
          "https://web-dev.dev.kimo.ai/v1/activities/{activity_type}",
      },
    ];
  };
  return {
    rewrites,
  };
};
