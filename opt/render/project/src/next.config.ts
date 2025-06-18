import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Recommended for Docker/serverless environments
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
