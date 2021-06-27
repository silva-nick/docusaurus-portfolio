import {
  LoadContext,
  OptionValidationContext,
  ValidationResult,
} from '@docusaurus/types';
import { PluginOptions } from './types';

import { PluginOptionSchema } from './pluginOptionSchema';
import { getUser, getRepos } from './api';

export function validateOptions({
  validate,
  options,
}: OptionValidationContext<PluginOptions>): ValidationResult<PluginOptions> {
  const validatedOptions = validate(PluginOptionSchema, options);
  return validatedOptions;
}

function addLeadingSlash(str: string): string {
  return str.startsWith('/') ? str : `/${str}`;
}

export default function plugin(context: LoadContext, options: PluginOptions) {
  return {
    name: 'docusaurus-portfolio-plugin',

    // Uses ./api to fetch data from the Github api
    async loadContent() {
      let { username, userOptions, repoOptions } = options;
      userOptions = userOptions ?? {};
      repoOptions = repoOptions ?? {};

      const user = await getUser(username);
      const repos = await getRepos(username, repoOptions);
      return { user: { ...user, ...userOptions, username }, repos };
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
      const pageDataPath = await createData(
        'pageData.json',
        JSON.stringify({ pageTitle, pageDescription }),
      );

      addRoute({
        path: addLeadingSlash(sitePath),
        component: portfolioPageComponent,
        modules: {
          userProps: userPath,
          repoProps: repoPath,
          pageProps: pageDataPath,
        },
        exact: true,
      });
    },
  };
}
