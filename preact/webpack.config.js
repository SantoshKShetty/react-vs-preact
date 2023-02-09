const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // the output bundle won't be optimized for production but suitable for development
    mode: 'development',
    // the app entry point is /src/index.js
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        // the output of the webpack build will be in /dist directory
        path: path.resolve(__dirname, 'build'),
        // the filename of the JS bundle will be bundle.js
        // filename: 'bundle.js',
        filename: 'static/js/' + (
            '[name].bundle.js'
        ),
        chunkFilename: 'static/js/' + (
            '[name].chunk.js'
        ),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                // for any file with a suffix of js or jsx
                test: /\.jsx?$/,
                // ignore transpiling JavaScript from node_modules as it should be that state
                exclude: /node_modules/,
                // use the babel-loader for transpiling JavaScript to a suitable format
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // add a custom index.html as the template
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new WebpackBundleAnalyzer({
            analyzerMode: 'server',
            analyzerHost: 'localhost',
            openAnalyzer: true
        })
    ]
};