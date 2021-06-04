import { LoadContext, OptionValidationContext } from '@docusaurus/types';
import path from 'path';

import { getUser, getRepos } from './api';
import { userOptions, repoOptions, repoData } from './types';

export interface PluginOptions {
  username: string;
  userOptions?: userOptions;
  repoOptions?: repoOptions;
}

export function validateOptions({
  options,
  validate,
}: OptionValidationContext<PluginOptions>) {
  const username = options.username;

  if (!username) {
    throw new Error('Expected a valid Github username.');
  }

  return options;
}

export default function plugin(context: LoadContext, options: PluginOptions) {
  return {
    name: 'docusaurus-portfolio',

    // Uses ./api to fetch data from the Github api
    async loadContent() {
      let { username, userOptions, repoOptions } = options;
      repoOptions = repoOptions ? repoOptions : {};

      const user = await getUser(username);
      const repos = await getRepos(username, repoOptions);
      return { user: { ...user, ...userOptions }, repos };
    },

    // Uses rendered data to generate react components
    async contentLoaded({ content: userData, actions }) {
      if (!userData) {
        return;
      }

      const { addRoute, createData } = actions;
      const { user, repos } = userData;

      await Promise.all(repos.map(async (repo) => {}));
    },
  };
}
