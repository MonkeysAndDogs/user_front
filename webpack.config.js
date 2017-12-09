const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const assets = require("./webpack-assets.json");
// webpack config
const config = {
    entry: {
        app:'./src/app.js',
    },
    output: {
        path:path.resolve(__dirname, './dist'),
        filename    : 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src'),
            'assets':path.resolve(__dirname, './src/assets')
        },
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                include: path.resolve(__dirname, './src'),
                loader: 'vue-loader'
            },
            {
                test:/\.js$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, './src')
            },
            {
                test: /\.(css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)(\?\S*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    publicPath:'/',
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options:{
                    publicPath:'/',
                    name: 'css/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.join(__dirname, 'vendor_dev-manifest.json'),
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin("css/[name].css"),
        // html模板的处理
        new HtmlWebpackPlugin({
            template : './src/index.html',
            title : '首页',
            inject : true,
            hash : true,
            assets: assets,
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port:'9999',
        open: true,
        openPage: '#index'
    }
};


module.exports = config;