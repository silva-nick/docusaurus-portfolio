# docusaurus-portfolio

A [Docusaurus v2](https://github.com/facebook/docusaurus) plugin that generates a portfolio page from Github.

---

> More documentation to come ( /example)

## Introduction

`docusaurus-portfolio` is a set of packages designed for Docusaurus that allow users to display a stripped-down version of their Github page on their documentation website...

![image](https://user-images.githubusercontent.com/39960606/122971865-23b9eb80-d355-11eb-8b6b-a4f72b969e88.png)

## Usage

Currently, the best way to create a project using `docusaurus-portfolio` is to first initialize the project with `@docusaurus/init` (more information available at [this link](https://docusaurus.io/docs/next/installation)).

Then, install both `docusaurus-portfolio-theme` and `docusaurus-portfolio-plugin` from NPM.

```sh
yarn add docusaurus-portfolio-theme docusaurus-portfolio-plugin
```

Finally, add the theme and plugin to `docusaurus.config.js`. More information about configuration options are available in the documentation pages for each package. Here is an example configuration.

```javascript
  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: '<GITHUB-USERNAME>',
        userOptions: {
          fullname: '<YOUR-NAME>',
          ...
        },
        ...                                         // More configuration in /packages/docusaurus-portfolio-plugin/README.md
      },
    ],
  ],
```

The fastest way to get started with `docusaurus-portfolio` is to initialize a package through `docusaurus-portfolio-init`. To run the generator simply use the command:

```sh
npx docusaurus-portfolio-init init
```
*Note: `docusaurus-portfolio-init` is in alpha an may behave unexpectedly.

## Packages

This project uses [Lerna](https://lerna.js.org/) to manage all packages. Each package has specific documentation in its respective directory.

#### [`docusaurus-portfolio-init`](https://github.com/silva-nick/docusaurus-portfolio/tree/main/packages/docusaurus-portfolio-init)

Docusaurus website generator built off of `@docusaurus/init`. 

#### [`docusaurus-portfolio-plugin`](https://github.com/silva-nick/docusaurus-portfolio/tree/main/packages/docusaurus-portfolio-plugin)

Docusaurus portfolio main

#### [`docusaurus-portfolio-theme`](https://github.com/silva-nick/docusaurus-portfolio/tree/main/packages/docusaurus-portfolio-theme)

The React.js components that drive `docusaurus-portfolio`. 

## Contributing

Contributions are always welcome!

**Ways to contribute:**

- Found a bug or want to request a new feature: _Open an Issue_
- Is the documentation confusing: _Open a pull request on the documentation site or README.md_
- Want to add any code: _Open a PR_
- Looking for other ways: _Try adding docusaurus-portfolio to your website_
