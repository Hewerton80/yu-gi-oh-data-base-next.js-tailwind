module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    loader: 'imgix',
    path: '',
  },
}
