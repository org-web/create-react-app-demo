/**
 * 覆盖配置
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config.resolve.alias = {
    // 配置别名-使用@来表示'src'的绝对路径了
    "@": resolve("src")
  };
  return config;
};
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    // style: "css" // change importing css to less
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
