const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// webpack --config webpack.dll.config.js

const vendors = [
        'jquery',
        'vue',
        'element-ui',
        'vue-router',
        'moment'
];

module.exports = {
    entry: {
        vendor_dev: vendors,
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[chunkhash].dll.js',
        library: '[name]_library',
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]_library',
            path: path.join(__dirname, '[name]-manifest.json'),
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new AssetsPlugin()
    ],
};