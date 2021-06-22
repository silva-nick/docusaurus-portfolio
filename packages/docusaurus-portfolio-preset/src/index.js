function preset(context, options = {}) {
  return {
    themes: [[require.resolve('docusaurus-portfolio-theme'), options.theme]],
    plugins: [
      options.plugin !== false && [
        (require.resolve('docusaurus-portfolio-plugin'), options.plugin),
      ],
    ],
  };
}

module.exports = preset;
