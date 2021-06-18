const path = require('path');
const { validateThemeConfig } = require('./validateThemeConfig');

const swizzleAllowedComponents = ['UserCard', 'RepoCard', 'ContentFrame'];

function theme(context, options) {
  return {
    name: 'docusaurus-portfolio-theme',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getSwizzleComponentList() {
      return swizzleAllowedComponents;
    },
  };
}

theme.validateThemeConfig = validateThemeConfig;

module.exports = theme