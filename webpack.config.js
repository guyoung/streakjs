var webpack = require("webpack");

module.exports = {
    entry: {
        "wezrender": "./src/index.js",
        "wezrender.min": "./src/index.js",
    },
    devtool: "source-map",
    output: {
        path: "./dist",
        filename: "[name].js",
        libraryTarget: "commonjs"
    },
    module: {
        loaders: [

        ]
    },
    plugins: [

        new webpack.optimize.UglifyJsPlugin({
            compress: { 
                warnings: false 
            },
            include: /\.min\.js$/,
            minimize: true
        })

    ]
};