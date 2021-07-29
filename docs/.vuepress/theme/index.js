const { path } = require("@vuepress/utils");

module.exports = {
  name: "my-theme",
  extends: "@vuepress/theme-default",
  // override layouts of parent theme
  layouts: {
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
  },
};
