const path = require("path");

module.exports = {
    context: path.resolve(__dirname, ".."),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
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
    }
};
