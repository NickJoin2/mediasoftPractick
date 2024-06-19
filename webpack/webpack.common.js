const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {HotModuleReplacementPlugin} = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, '..', './src/app/appEntry.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, '..', './src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'  // Можете указать другую папку для сохранения SVG файлов
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ],
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: '[name].[hash].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
            chunks: ['vendors.bundle', 'main'],
        }),
        new HotModuleReplacementPlugin(),
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors.bundle',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                }
            }
        }
    },
    devServer: {
        compress: true,
        hot: true,
    },
    stats: 'errors-only',
}