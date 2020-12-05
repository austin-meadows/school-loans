const TerserPlugin = require("terser-webpack-plugin");

const mode =
  process.env.NODE_ENV === "development" ? "development" : "production";

module.exports = {
  configureWebpack: {
    mode,
    optimization: {
      nodeEnv: mode,
      minimize: true,
      minimizer:
        process.env.NODE_ENV !== "development"
          ? [
              new TerserPlugin({
                parallel: 4,
                terserOptions: {
                  compress: {
                    arguments: true,
                    drop_console: true,
                    hoist_funs: true,
                    module: true,
                    passes: 2,
                    toplevel: true,
                    unsafe: true,
                  },
                  mangle: {
                    toplevel: true,
                  },
                  output: {
                    comments: false,
                  },
                },
              }),
            ]
          : [],
      moduleIds: "hashed",
      runtimeChunk: "single",
      concatenateModules: true,
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  },
  productionSourceMap: false,
};
