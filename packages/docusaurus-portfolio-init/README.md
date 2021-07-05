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

Using all options, your command might look like: `npx docusaurus-portfolio-init init my-site porfolio-classic my-github`.

Finally, start the project by navigating into the new directory and running.

```sh
cd <siteName>
yarn start
```

#### Templates

Currently this packages support two website templates.

**`portfolio-classic`** A robust portfolio website template that includes:

- An introduction page with GitHub user and repository data.
- An about me section with auto generated social-media icons.
- A resume template with custom technical skills pills.
- A simple timeline page for more detailed personal information.
- And full blog support from `docusaurus-blog`.

Check out an example [here](https://github.io/silva-nick/porfolio).

**`authored-classic`** Generates a standard classic themed site using `@docusaurus/init` but adds an additional about me page.

#### Contributing:

More templates can be simply be added by adding a template directory in `docusaurus-portfolio-init/templates` and then updating the CLI (`src/index.ts`).
