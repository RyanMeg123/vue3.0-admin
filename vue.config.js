const path = require("path");

module.exports = {
  lintOnSave: false,
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      stylus: {
        import: "~@/styles/mixin.styl"
        // import: ["~@/assets/variable.styl", "~@/assets/variable2.styl"]
      }
    }
  }
};
