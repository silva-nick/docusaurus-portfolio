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
    name: 'docusaurus-portfolio',

    async loadContent() {},

    async contentLoaded() {},
  };
}
