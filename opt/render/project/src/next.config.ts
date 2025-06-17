
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
  // Removing custom webpack for now to simplify
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Add path aliases
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     '@': path.resolve(__dirname, './src'),
  //     '@/components': path.resolve(__dirname, './src/components'),
  //     '@/lib': path.resolve(__dirname, './src/lib'),
  //     '@/hooks': path.resolve(__dirname, './src/hooks'),
  //     '@/types': path.resolve(__dirname, './src/types'),
  //   };
  //   return config;
  // },
};

export default nextConfig;
