const crypto = require("crypto");

module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Needed to avoid removing symbol tag and Ids from spritemap
          // see: https://github.com/svg/svgo/issues/1962
          removeHiddenElems: false,
          removeUselessDefs: false,

          removeViewBox: false,
        },
      },
    },

    // Remove width and height from <svg> tag
    "removeDimensions",
  ],
};
