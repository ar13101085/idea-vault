/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Ideas and user avatars use arbitrary external image URLs, so allow any https host.
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};

export default nextConfig;
