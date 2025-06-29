/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'api.microlink.io', // ✅ added this line
    ],
  },
};

export default nextConfig;
