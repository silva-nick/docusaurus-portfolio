import { Joi } from '@docusaurus/utils-validation';

const DEFAULT_CONFIG = {
  exampleOption: 'example',
};
exports.DEFAULT_CONFIG = DEFAULT_CONFIG;

const Schema = Joi.object({
  portfolio: Joi.object({
    exampleOption: Joi.string().default(DEFAULT_CONFIG).optional(),
  }),
});
exports.Schema = Schema;

export function validateThemeConfig({ themeConfig, validate }) {
  return validate(Schema, themeConfig);
}
