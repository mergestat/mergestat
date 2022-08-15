const path = require('path')
const withTM = require('next-transpile-modules')([
  '@mergestat/blocks',
  '@mergestat/icons',
])

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withTM({
    webpack: (config, options) => {
      if (options.isServer) {
        config.externals = ['react', ...config.externals]
      }

      const n = 'node_modules'
      config.resolve.alias = {
        ...config.resolve.alias,
        react: path.resolve(__dirname, '.', n, 'react'),
        'react-dom': path.resolve(__dirname, '.', n, 'react-dom'),
        'styled-components': path.resolve(
          __dirname,
          '.',
          n,
          'styled-components'
        ),
      }

      return config
    },
    images: {
      domains: [
        's.gravatar.com',
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com',
        'github.com',
        'www.w3schools.com',
      ],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/repos',
          permanent: false,
        },
      ]
    },
    swcMinify: true,
    reactStrictMode: false,
    env: {
      POSTGRAPHILE_API: process.env.POSTGRAPHILE_API,
    },
    eslint: {
      ignoreDuringBuilds: false, // Warning: If it is 'true' This allows production builds to successfully complete even if your project has ESLint errors.
      dirs: ['lib', 'src'], // Only run ESLint on these directories during production builds (next build)
    },
    output: 'standalone'
  })
)
