module.exports = function override(config, env) {
  // do stuff with the webpack config...
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
