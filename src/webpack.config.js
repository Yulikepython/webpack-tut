const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        message: "./src/Message.js",
    },
    output: {
        filename: "[name].main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}