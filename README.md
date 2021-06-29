# docusaurus-portfolio

A [Docusaurus v2](https://github.com/facebook/docusaurus) plugin that generates a portfolio page from Github.

---

> More documentation to come

## Introduction

`docusaurus-portfolio` is a set of packages designed for Docusaurus that allow users to display a stripped-down version of their Github page on their documentation website. It also includes includes an initialization script that generates a full portfolio website with an about me, resume page, timeline, and blog.

![image](https://user-images.githubusercontent.com/39960606/123738850-39ef0c80-d86b-11eb-8be7-6e6dcd473dd6.png)

## Usage

The fastest way to get started with `docusaurus-portfolio` is to initialize a package through `docusaurus-portfolio-init`. To run the generator simply replace the blanks and run the command:

```sh
npx docusaurus-portfolio-init init <SITE-NAME> portfolio-classic <GITHUB-USERNAME>
```

Then, to start your app run

```sh
cd <SITE-NAME>
yarn start
```

For more information on generating a website with `docusaurus-portfolio-init` check out its [documentation page](https://github.com/silva-nick/docusaurus-portfolio/tree/main/packages/docusaurus-portfolio-init).

## Packages

This project uses [Lerna](https://lerna.js.org/) to manage all packages. Each package has specific documentation in its respective directory.

#### [`docusaurus-portfolio-init`](https://github.com/silva-nick/docusaurus-portfolio/tree/main/packages/docusaurus-portfolio-init)

Docusaurus website generator built off of `@docusaurus/init`. 

#### [`docusaurus-portfolio-plugin`](https://github.com/silva-nick/docusaurus-portfolio/tree/main/packages/docusaurus-portfolio-plugin)

Docusaurus portfolio main plugin that manages the GitHub API requests.

#### [`docusaurus-portfolio-theme`](https://github.com/silva-nick/docusaurus-portfolio/tree/main/packages/docusaurus-portfolio-theme)

The React.js components that drive `docusaurus-portfolio`. 

## Contributing

Contributions are always welcome!

**Ways to contribute:**

- Found a bug or want to request a new feature: _Open an Issue_
- Is the documentation confusing: _Open a pull request on the documentation site or README.md_
- Want to add any code: _Open a PR_
- Looking for other ways: _Try adding docusaurus-portfolio to your website_
