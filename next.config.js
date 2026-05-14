/** @type {import('next').NextConfig} */
const nextConfig = {

  // ✅ FIX: Externe Bild-Domain für next/image freischalten
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'le-cdn.website-editor.net',
        pathname: '/s/**',
      },
    ],
  },

  // ✅ FIX: Content-Security-Policy — blockierte Inline-Scripts erlauben
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://le-cdn.website-editor.net https:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https:",
              "frame-ancestors 'none'",
            ].join('; '),
          },
          // ✅ BONUS: Sicherheits-Header
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
