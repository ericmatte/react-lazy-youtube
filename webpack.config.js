const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "example/example.tsx"),
    output: {
        path: path.resolve(__dirname, "./build")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loaders: ["babel-loader", "awesome-typescript-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "sass-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
                ]
            }
        ]
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ? "warning" : false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "example/index.html")
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    devtool: "eval-source-map",
    devServer: {
        port: 3000
    }
};
