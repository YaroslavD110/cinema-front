const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = withCSS(
  withSass({
    poweredByHeader: false,
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]",
      url: false
    },
    webpack: (config, options) => {
      const { isServer } = options;

      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|webp)$/,
        use: [
          {
            loader: require.resolve("file-loader"),
            options: {
              limit: 8192,
              publicPath: `/_next/static/images/`,
              outputPath: `${isServer ? "../" : ""}static/images/`,
              name: "[name].[ext]"
            }
          }
        ]
      });

      return config;
    }
  })
);
