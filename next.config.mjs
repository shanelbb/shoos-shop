/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["krwzqpaj7utmeydl.public.blob.vercel-storage.com"],
  },
};

export default nextConfig;
