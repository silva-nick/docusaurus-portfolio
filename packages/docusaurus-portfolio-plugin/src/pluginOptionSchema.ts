import { Joi } from '@docusaurus/utils-validation';

export const DEFAULT_OPTIONS = {
  path: 'me',
  routeBasePath: 'me',
  pageTitle: 'About Me',
  pageDescription: 'Github Repos',
  portfolioPageComponent: '@theme/PortfolioPage',
  //username: string,
  userOptions: {},
  repoOptions: {},
  pageOptions: {
    title: 'my page',
    description: 'write me to improve seo',
  },
};

export const PluginOptionSchema = Joi.object({
  path: Joi.string().default(DEFAULT_OPTIONS.path),
  routeBasePath: Joi.string().default(DEFAULT_OPTIONS.routeBasePath),
  pageTitle: Joi.string().allow('').default(DEFAULT_OPTIONS.pageTitle),
  pageDescription: Joi.string()
    .allow('')
    .default(DEFAULT_OPTIONS.pageDescription),
  portfolioPageComponent: Joi.string().default(
    DEFAULT_OPTIONS.portfolioPageComponent,
  ),
  username: Joi.string().required(),
  userOptions: Joi.object({
    fullname: Joi.string().optional(),
    links: Joi.array().items(Joi.string()).optional(),
  }),
  repoOptions: Joi.object({
    type: Joi.string()
      .optional()
      .equal(
        'all',
        'public',
        'private',
        'forks',
        'sources',
        'member',
        'internal',
      ),
    sort: Joi.string()
      .optional()
      .equal(
        'created',
        'updated',
        'pushed',
        'full_name',
        'size',
        'stargazers_count',
        'watchers_count',
        'forks_count',
      ),
    direction: Joi.string().optional().equal('asc', 'desc'),
    numRepos: Joi.number().optional(), // Default is all
  }),
});
