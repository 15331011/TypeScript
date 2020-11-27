// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// const miniCssExtractPlugin = require("mini-css-extract-plugin");

const resolve = dir => {
  return path.join(__dirname, dir);
};

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === "production" ? "./" : "./";
console.log(BASE_URL)
module.exports = {
  publicPath: BASE_URL,
  outputDir: "dist", // 打包生成的生产环境构建文件的目录
  assetsDir: "", // 放置生成的静态资源路径，默认在outputDir
  indexPath: "index.html", // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  configureWebpack: config => {
    // 解决chunk 0 [mini-css-extract-plugin]报错（css文件顺序不一致引起的）
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    if (process.env.NODE_ENV === "production") {
      config.devtool = "#source-map";
      config.optimization.splitChunks = {
        cacheGroups: {
        }
      };
      config.output.chunkFilename = "js/[name].[chunkhash:8].js";
      // console.log(config.plugins["MiniCssExtractPlugin"]);
      const miniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === "MiniCssExtractPlugin"
      );
      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true;
      }
    } else {
      config.devtool = "cheap-module-eval-source-map";
    }
  },
  css: {
    requireModuleExtension: true, // 启用 CSS requireModuleExtension  目前好像没用
    extract: false, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {} // css预设器配置项
  },
  devServer: {
    // target: 'http://42.192.223.81',//应为内网网址，代理到内网服务器
    port: 3000, // 端口
    host: '42.192.223.81'
  },
};
