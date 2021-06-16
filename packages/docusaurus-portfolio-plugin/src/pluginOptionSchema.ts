import { Joi } from '@docusaurus/utils-validation';

export const DEFAULT_OPTIONS = {
  path: './me',
  routeBasePath: '/',
  pageTitle: 'About Me',
  pageDescription: 'Github Repos',
  repoCardComponent: '@theme/RepoCard',
  userCardComponent: '@theme/UserCard',
  contentFrameComponent: '@theme/ContentFrame',
  //username: string,
  userOptions: {},
  repoOptions: {},
};

export const PluginOptionSchema = Joi.object({
  path: Joi.string().default(DEFAULT_OPTIONS.path),
  routeBasePath: Joi.string().default(DEFAULT_OPTIONS.routeBasePath),
  pageTitle: Joi.string().allow('').default(DEFAULT_OPTIONS.pageTitle),
  pageDescription: Joi.string()
    .allow('')
    .default(DEFAULT_OPTIONS.pageDescription),
  repoCardComponent: Joi.string().default(DEFAULT_OPTIONS.repoCardComponent),
  userCardComponent: Joi.string().default(DEFAULT_OPTIONS.userCardComponent),
  contentFrameComponent: Joi.string().default(
    DEFAULT_OPTIONS.contentFrameComponent,
  ),
  username: Joi.string().required(),
  userOptions: {}, //TODO: create an internal joi object
  repoOptions: {},
});
