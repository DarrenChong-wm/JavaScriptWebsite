module.exports = {
  chainWebpack: config => {
    // Add the TypeScript loader rule
    config.module
      .rule('typescript')
      .test(/\.tsx?$/)
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        appendTsSuffixTo: [/\.vue$/],
      })
      .end();

    // Configure the Vue loader

    
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: tag => tag.startsWith('-ion'),
        },
      }));

    // Other configuration options...
  },
};