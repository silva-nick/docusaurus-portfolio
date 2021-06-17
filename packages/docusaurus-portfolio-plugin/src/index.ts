import {
  LoadContext,
  OptionValidationContext,
  ValidationResult,
} from '@docusaurus/types';
import { getPluginI18nPath } from '@docusaurus/utils';
import { ContentPaths } from '@docusaurus/utils/lib/markdownLinks';
import { PluginOptions, UserOptions, RepoOptions, RepoData } from './types';

import path from 'path';

import { PluginOptionSchema } from './pluginOptionSchema';
import { getUser, getRepos } from './api';

export function validateOptions({
  validate,
  options,
}: OptionValidationContext<PluginOptions>): ValidationResult<PluginOptions> {
  const validatedOptions = validate(PluginOptionSchema, options);
  return validatedOptions;
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
      pluginName: 'docusaurus-portfolio-plugin',
    }),
  };

  const dataDir = path.join(generatedFilesDir, 'docusaurus-portfolio-plugin');

  return {
    name: 'docusaurus-portfolio-plugin',

    // Uses ./api to fetch data from the Github api
    async loadContent() {
      let { username, userOptions, repoOptions } = options;
      userOptions = userOptions ?? {};
      repoOptions = repoOptions ?? {};

      const user = await getUser(username);
      const repos = await getRepos(username, repoOptions);
      return { user: { ...user, ...userOptions }, repos };
    },

    // Uses rendered data to generate react components
    async contentLoaded({ content: portfolioData, actions }) {
      if (!portfolioData) {
        return;
      }

      const {
        path: sitePath,
        pageTitle,
        pageDescription,
        portfolioPageComponent,
      } = options;

      const { addRoute, createData } = actions;
      const { user, repos } = portfolioData;

      const userPath = await createData('user.json', JSON.stringify(user));
      const repoPath = await createData(
        'repos.json',
        JSON.stringify({ repos }),
      );

      addRoute({
        path: sitePath,
        components: portfolioPageComponent,
        modules: {
          userProps: userPath,
          repoProps: repoPath,
          pageTitle,
          pageDescription,
        },
        exact: true,
      });
    },
  };
}
