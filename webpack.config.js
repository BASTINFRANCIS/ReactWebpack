const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack");
const {resolve} = require("path");
const path = require("path");

module.exports = {
    // entry: path.join(__dirname, "src", "index.js"),
    // output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },

    devtool: "source-map",
    entry: {
        app: resolve(__dirname, "src/index.js")
    },
    output: {
        path: resolve(__dirname, 'dist/'),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
        //publicPath: process.env.NODE_ENV === 'development' ? "/dist/" : "/react-webpack-lazy-loading/dist/"
        publicPath: "/dist/" 
    },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
    //devServer: { contentBase: path.join(__dirname, "src") },
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, "src")
        },

        hot: true,
        historyApiFallback: { index: "index.html" }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            }
        ],
    },
    resolve: {
        modules: ['node_modules', resolve('src'),]
      },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, "src", "index.html"),
        // }),
        new DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify("development")
            }
          })
    ],
};