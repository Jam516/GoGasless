import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['tspekraxapsoevhxjafh.supabase.co'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/leaderboard/all',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;