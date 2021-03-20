const webapck = require('webpack');
module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    const path = require('path');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'source-map',
        watch: !isProduction,
        entry: ['./src/scss/style.scss', './src/index.js'

        ],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 
                     'resolve-url-loader','sass-loader'

                ]
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/i,
                use: [ { loader: 'file-loader' }],
               
            }, 
           
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ]
    }
    return config;
}