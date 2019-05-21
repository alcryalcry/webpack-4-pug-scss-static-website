const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const fs = require('fs');

const isNeedSourceMap = true; // source map

// just html pages transfer
function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    });
  });
}
// just html pages transfer
const htmlPlugins = generateHtmlPlugins('./src/pages');

module.exports = (env, argv) => {
  return {
    entry: ['babel-polyfill', './src/common/js/main.js'],
    output: {
      filename: './assets/js/main.min.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: {
            loader: 'babel-loader',
            options: {
              'presets': ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: path.resolve(__dirname, 'src/'),
          options: {
            configFile: path.resolve(__dirname, '.eslintrc')
          }
        },
        {
          test: /\.pug$/,
          exclude: /node_modules/,
          use: ['html-loader?attrs=false', 'pug-html-loader']
        },
        {
          test: /\.(sass|scss)$/,
          // include: path.resolve(__dirname, 'src/static/scss'),
          exclude: [/node_modules/],
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: argv.mode === 'production' ? true : false,
                  url: false
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    autoprefixer({
                      browsers: ['ie >= 10', 'last 4 version']
                    })
                  ]
                }
              },
              {
                loader: 'sass-loader',
              }
            ]
          })
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/pages/index.pug',
        inject: false
      }),
      new ExtractTextPlugin(
        {
          filename: './assets/css/style.min.css',
          allChunks: true,
        }
      ),
      new CopyWebpackPlugin(
        [
          {
            from: './src/static/fonts',
            to: './assets/fonts'
          },
          {
            from: './src/static/img',
            to: './assets/img'
          },
        ]
      ),
      new BrowserSyncPlugin({
        server: {
          baseDir: 'dist',
          index: 'index.html'
        },
        online: true,
        tunnel: false,
        host: '192.168.1.14', // need PC local address (for mobile access)
        port: 3000,
        files: ['dist/*.html']
      })
    // ],
    ].concat(htmlPlugins),
    stats: {
      assets: false,
      builtAt: false,
      children: false,
      entrypoints: false,
      hash: false,
      modules: true,
      version: false,
      errors: true
    },
    devtool: isNeedSourceMap ? 'source-map' : false,
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  };
};
