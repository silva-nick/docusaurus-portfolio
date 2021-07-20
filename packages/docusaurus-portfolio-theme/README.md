## Docusaurus Portfolio Theme

This package contains the React components that serve as the frontend for `docusaurus-portfolio`.

---

#### Installation:

```sh
yarn add docusaurus-portfolio-theme
```

**Note:** this plugin will currently not function without also installing and configuring its brother package, `docusaurus-portfolio-plugin`. However, if you're just interested in using the components specified, feel free to just use this theme.

#### Configuration:

To configure the plugin, add or update your configuration options in `docusaurus.config.json`.

```javascript
    themes: ['docusaurus-portfolio-theme', ...],
```

#### Components:

**`ContentFrame`**

This component renders at the top of the GitHub repository section of the about me page. It is by default **unimplemented**. This component is meant to be a holder for a user designed images, three.js renderings, or more information sections. To customize this component, run `yarn swizzle ContentFrame --force`. For an example of a custom content frame, refer to [`/packages/docusaurus-portfolio-init/templates/portfolio-classic`](../docusaurus-portfolio-init/templates/portfolio-classic).

**`Links`**

The link component generates a container full of links to a user's social media accounts. All links must be in the form `https://<platform>.*/*`. Platform logos are available in `static/img/nucleo-social-icons`. For an example of a this component being used, refer to [`/packages/docusaurus-portfolio-init/templates/portfolio-classic/docs/about`](../docusaurus-portfolio-init/templates/portfolio-classic/docs/about).

**`PortfolioPage`**

The main about me page.

**`RepoCard`**

Infima-based card that holds the information for a single repository. To customize this component, run `yarn swizzle RepoCard --force`.

**`Skills`**

Technical skills pills for resume websites. Skills must be passed to the component props as a list of strings. For an example of this component being used, refer to [`/packages/docusaurus-portfolio-init/templates/portfolio-classic/docs/resume`](../docusaurus-portfolio-init/templates/portfolio-classic/docs/resume).

**`Timeline`**

User information timeline for personal or project websites. This component renders a list of cards that form a timeline. For an example of this component being used, refer to [`/packages/docusaurus-portfolio-init/templates/portfolio-classic/docs/timeline`](../docusaurus-portfolio-init/templates/portfolio-classic/docs/timeline).

**`TrophyOverlay`**

Custom overlays used to bring additional information to the emoji trophy case at the bottom of user's cards.

**`UserCard`**

The main user component in the about me section of a `docusaurus-portfolio` website. It renders using data queried from GitHub. It can be customized by running `yarn swizzle UserCard --force`.
