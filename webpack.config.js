const path = require('path');
const tsNameof = require('ts-nameof');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    clean: true,
  },
  resolve: {
    alias: {
      entities: path.resolve(__dirname, 'src/entities'),
      features: path.resolve(__dirname, 'src/features'),
      shared: path.resolve(__dirname, 'src/shared'),
      widgets: path.resolve(__dirname, 'src/widgets'),
      restApi: path.resolve(__dirname, 'src/shared/api/'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: {
    react: 'react',
    antd: 'antd',
    '@ant-design/icons': '@ant-design/icons',
    axios: 'axios',
    classnames: 'classnames',
    dotenv: 'dotenv',
    effector: 'effector',
    'effector-react': 'react',
    history: 'history',
    patronum: 'patronum',
    'react-promise-tracker': 'react-promise-tracker',
    'react-router-dom': 'react-router-dom',
    'react-scripts': 'react-scripts',
    uuid: 'uuid',
    'web-vitals': 'web-vitals',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [tsNameof] }),
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(less)$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentHashSalt: process.env.CSS_HASH_SALT,
                localIdentName: '[name]__[local]--[hash:base64:7]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
