const merge = require("webpack-merge");
const path = require("path");
const package = require("../package.json");

const commonConfig = require("./webpack.common");

function DtsBundlePlugin() {}
DtsBundlePlugin.prototype.apply = function(compiler) {
    compiler.plugin("done", function() {
        var dts = require("dts-bundle");

        dts.bundle({
            name: package.name,
            main: "./dist/**/*.d.ts",
            out: "./index.d.ts",
            removeSource: true,
            outputAsModuleFolder: true
        });
    });
};

module.exports = merge(commonConfig, {
    mode: "production",
    devtool: "hidden-source-map",
    entry: {
        app: "./src/index.ts"
    },
    output: {
        path: path.resolve("./dist"),
        filename: "[name].bundle.js"
    },
    plugins: [new DtsBundlePlugin()]
});
