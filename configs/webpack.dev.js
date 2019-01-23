const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const package = require("../package.json");

module.exports = merge(commonConfig, {
    mode: "development",
    entry: "./example/example.tsx",
    output: {
        path: path.resolve(__dirname, "../../build")
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `${package.name} [${package.version}]`,
            template: "./example/index.html"
        })
    ],
    devtool: "eval-source-map", // "cheap-module-eval-source-map"
    devServer: {
        port: 3000
    }
});
