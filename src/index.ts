import { LoadContext, OptionValidationContext } from '@docusaurus/types';
import path from 'path';

import { getUser, getRepos } from './api';
import { repoOptions } from './types';

export interface PluginOptions {
  username: string;
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

    async loadContent() {
      let { username, repoOptions } = options;
      repoOptions = repoOptions ? repoOptions : {};

      const user = await getUser(username);
      const repos = await getRepos(username, repoOptions);
      return { user: user, repos: repos };
    },

    async contentLoaded({ content: userData, actions }) {
      if (!userData) {
        return;
      }
    },
  };
}
