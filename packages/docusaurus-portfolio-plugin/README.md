## Docusaurus Portfolio Plugin

---

#### Installation:

```sh
yarn add docusaurus-portfolio-plugin
```

**Note:** this plugin will currently not function without also installing and configuring its sister package, `docusaurus-portfolio-theme`.

#### Configuration options:

To configure the plugin, add or update your configuration options in `docusaurus.config.json`. Listed below are the default options and descriptions of each field.

```javascript
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: '<GITHUB-USERNAME>',                  // User's GitHub username
        path: 'me',                                     // Path in site where page will be served
        routeBasePath: 'me',
        pageTitle: 'About Me',
        pageDescription: 'My GitHub Repos',
        portfolioPageComponent: '@theme/PortfolioPage',
        userOptions: {
          fullname: '',                                 // Name to be displayed in usercard
          links: [],                                    // UNIMPLEMENTED: Links to be displayed in usercard
        },
        repoOptions: {
            type: '',                                   // Type of repos to be queried
                                                        // ['all','public','private','forks','sources','member','internal']
            sort: '',                                   // Field to sort repos using
                                                        // ['created','updated','pushed','full_name','size','stargazers_count','watchers_count','forks_count',]
            direction: '',                              // Direction repos will be sorted in
                                                        // ['asc','desc']
            numRepos: Number.MAX_VALUE                  // Number of repos. Default: all.
        }
      },
    ],
  ],
```

**Important:** if otherwise not configured, options will be left to GitHub API defaults.

## Docusaurus Portfolio Theme

This package contains the React components that serve as the frontend for `docusaurus-portfolio`.

---

#### Installation:

```sh
yarn add docusaurus-portfolio-theme
```

**Note:** this plugin will currently not function without also installing and configuring its brother package, `docusaurus-portfolio-plugin`.

#### Configuration:

To configure the plugin, add or update your configuration options in `docusaurus.config.json`.

```javascript
    themes: ['docusaurus-portfolio-theme'],
```

**Notice:** A lot of this code should be refactored to work better with Infima styling. Also, this package can and should be combined with the plugin.
