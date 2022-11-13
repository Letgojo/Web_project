module.exports = {
    entry: ["./src/index.js"],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg)$/,
          use: ["file-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: "./dist"
    }
  };