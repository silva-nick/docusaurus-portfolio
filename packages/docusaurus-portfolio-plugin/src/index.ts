import { LoadContext, OptionValidationContext } from '@docusaurus/types';
import { getPluginI18nPath } from '@docusaurus/utils';
import { ContentPaths } from '@docusaurus/utils/lib/markdownLinks';
import { PluginOptions, UserOptions, RepoOptions, RepoData } from './types';

import path from 'path';

import { getUser, getRepos } from './api';

export function validateOptions({
  options,
  validate,
}: OptionValidationContext<PluginOptions>) {
  const { path, username } = options;

  if (!path) {
    throw new Error('Expected a target directory.');
  }
  if (!username) {
    throw new Error('Expected a valid Github username.');
  }
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
    name: 'docusaurus-portfolio',

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

      //const { addRoute, createData } = actions;
      const { user, repos } = portfolioData;

      await Promise.all(repos.map(async (repo) => {}));
    },
  };
}
