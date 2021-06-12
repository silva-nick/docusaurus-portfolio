import { LoadContext, OptionValidationContext } from '@docusaurus/types';
import { getPluginI18nPath } from '@docusaurus/utils';
import { ContentPaths } from '@docusaurus/utils/lib/markdownLinks';
import { PluginOptions} from './types';

import path from 'path';

export function validateOptions({
  options,
  validate,
}: OptionValidationContext<PluginOptions>) {
  return options;
}

export default function plugin(context: LoadContext, options: PluginOptions) {
  const {
    siteDir,
    generatedFilesDir,
    i18n: { currentLocale },
  } = context;

  const contentPaths: ContentPaths = {
    contentPath: path.resolve(siteDir, options.path),
    contentPathLocalized: getPluginI18nPath({
      siteDir,
      locale: currentLocale,
      pluginName: 'docusaurus-portfolio',
    }),
  };

  const dataDir = path.join(generatedFilesDir, 'docusaurus-portfolio');

  return {
    name: 'docusaurus-portfolio-theme',
    getThemePath() {
      return path.resolve(__dirname, '..', 'lib', 'theme');
    },
    getTypeScriptThemePath() {
      return path.resolve(__dirname, './theme');
    },
    getClientModules() {
      return [require.resolve('bootstrap/dist/css/bootstrap.min.css')];
    },
  };
}
