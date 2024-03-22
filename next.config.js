/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'pbs.twimg.com',
      'kajabi-storefronts-production.kajabi-cdn.com',
      'i.insider.com',
      'upload.wikimedia.org',
      'pbs.twimg.com',
      'yt3.ggpht.com',
      'yt3.googleusercontent.com',
      'picsum.photos',
      'avatars.dicebear.com',
      'upcdn.io',
      'avatars.githubusercontent.com',
      'cdn.discordapp.com',
      'images.unsplash.com',
      'i.ytimg.com',
      'res.cloudinary.com',
      'unsplash.com',
      'www.galvanizeaction.org',
      'th.bing.com',
      'compote.slate.com',
      't3.ftcdn.net',
      'api.dicebear.com',
      "plus.unsplash.com",
      'thumbs.dreamstime.com',
      'miro.medium.com',
      'cdni.iconscout.com',
      'www.freeiconspng.com',
      'www.crystalknows.com',
      'cdn.profoto.com',
      "ichef.bbci.co.uk",
      "www.pngall.com",
      'png.pngtree.com'
    ],
  },
}

module.exports = nextConfig
