const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.output.filename("[name].[hash].js").end();
    }
  },
  configureWebpack: {
    optimization: {
      nodeEnv: process.env.NODE_ENV === "development" ? "development" : "production",
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
                    unsafe: true
                  },
                  mangle: {
                    toplevel: true
                  },
                  output: {
                    comments: false
                  }
                }
              })
            ]
          : [],
      splitChunks: {
        chunks: "all",
        minSize: 30000,
        maxSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  productionSourceMap: false
};
