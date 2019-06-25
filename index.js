module.exports = api => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.module.rules.delete("md");

    webpackConfig.module
      .rule("md")
      .test(/\.md$/)

      .use("html")
      .loader("html-loader")
      .end()
      .use("markdown")
      .loader("markdown-loader")
      .end();
  });
};
