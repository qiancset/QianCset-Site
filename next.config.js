/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        allowMiddlewareResponseBody: true,
      },
    async rewrites() {
        if (process.env.VERCEL_ENV === 'production') {
          const { middleware } = await import('./middleware');
          return [
            {
              source: '/welcome',
              destination: '/api/middleware',
            },
          ];
        } else {
          return [];
        }
      },

}


module.exports = nextConfig