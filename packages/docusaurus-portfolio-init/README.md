## Docusaurus Portfolio Init

---

This is a Docusaurus website generator that provides support for `docusaurus-portfolio` on top of `@docusaurus/init`.

#### Usage

This package generates a website based on a default configuration specified in `/templates`.

To run the generator simply use the command:

```sh
npx docusaurus-portfolio-init init
```

**Note:** The CLI has three optional variables:

1.  siteName: the site name and directory of the project
1.  username: your GitHub username
1.  template: the template to be used

Finally, start the project by navigating into the new directory and running.

```sh
cd <siteName>
yarn start
```

#### Templates

Currently this packages supports one website template, `portfolio-classic`. More templates can be simply be added by adding a template directory in `docusaurus-portfolio-init/templates` and then updating the CLI (`src/index.ts`).