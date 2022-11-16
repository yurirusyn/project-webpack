/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

module.exports = {
  plugins: [
    require("postcss-preset-env")({
      browsers: "last 2 versions",
    }),
    require("autoprefixer"),
  ],
};
