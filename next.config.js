const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const config = {

}

module.exports = withPlugins(
    [
        [withImages, {}],
    ],
    config
)