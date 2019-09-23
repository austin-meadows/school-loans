const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new WorkboxPlugin.GenerateSW({
        exclude: [/\.(?:png|jpg|jpeg|svg)$/],
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
            handler: 'CacheFirst',

            options: {
              cacheName: 'images',
            },
          },
          {
            urlPattern: /.*/,
            handler: 'CacheFirst',
          },
        ],
      }),
    ],
    optimization: {
      nodeEnv: 'production',
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              arguments: true,
              drop_console: true,
              hoist_funs: true,
              module: true,
              passes: 1,
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
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
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
