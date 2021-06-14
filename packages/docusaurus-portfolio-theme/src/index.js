import path from 'path';
import { validateThemeConfig } from './validateThemeConfig';

theme.validateThemeConfig = validateThemeConfig;

const swizzleAllowedComponents = ['UserCard', 'RepoCard', 'ContentFrame'];

export default function theme(context, options) {
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
