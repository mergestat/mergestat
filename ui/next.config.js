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
    env: {
      POSTGRAPHILE_API: process.env.POSTGRAPHILE_API,
    },
    output: 'standalone'
  })
)
