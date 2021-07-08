const path = require("path");
// O path tem uma utilidade muito grande pois dependendo do SO o dirname pode ser indexado por '/'-mac ou por '\'-windows, dai com o path agt nao precisa especificar qual a barra correta, o __dirname com as ',' ja dao conta do recado!
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    //   Configura como a aplicação deve se comportar quando importar cada um dos tipos de arquivos
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
        // o babel-loader faz a integração entre o webpack e o babel
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
