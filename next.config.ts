
import type {NextConfig} from 'next';
import path from 'path'; // Ensure path module is imported

const nextConfig: NextConfig = {
  /* config options here */
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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log('>>> [SkySeeker Debug] WEBPACK CONFIG FUNCTION EXECUTING <<<');
    console.log('>>> [SkySeeker Debug] __dirname:', __dirname);
    console.log('>>> [SkySeeker Debug] Initial config.resolve.alias:', JSON.stringify(config.resolve.alias, null, 2));

    const newAliases = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/types': path.resolve(__dirname, './src/types'),
    };

    config.resolve.alias = newAliases;

    console.log('>>> [SkySeeker Debug] Aliases set to:', JSON.stringify(config.resolve.alias, null, 2));
    console.log('>>> [SkySeeker Debug] Resolved @/components path:', path.resolve(__dirname, './src/components'));
    
    return config;
  },
};

export default nextConfig;
