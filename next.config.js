/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config
  },
  reactStrictMode: true,
  images: {
    domains: [
      'dev-danae-v2-plateform-files.s3.us-west-2.amazonaws.com',
      's7.gifyu.com',
      'prod-danae-plateform-files.s3.us-west-2.amazonaws.com',
    ],
  },
}
