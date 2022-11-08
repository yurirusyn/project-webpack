module.exports = {
  plugins: [
    // eslint-disable-next-line global-require
    require("postcss-preset-env")({
      browsers: "last 2 versions",
    }),
    // eslint-disable-next-line global-require
    require("autoprefixer"),
  ],
};
