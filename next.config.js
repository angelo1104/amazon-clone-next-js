const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const config = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = withPlugins([[withImages, {}]], config);
