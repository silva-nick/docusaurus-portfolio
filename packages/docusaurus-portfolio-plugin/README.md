## Docusaurus Portfolio Plugin
____
#### Configuration options:
To configure the plugin, add or update your configuration options in `docusaurus.config.json`. Listed below are the default options and descriptions of each field.
```javascript
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: '<GITHUB-USERNAME>',
        path: 'me',
        routeBasePath: 'me',
        pageTitle: 'About Me',
        pageDescription: 'My GitHub Repos',
        portfolioPageComponent: '@theme/PortfolioPage',
        userOptions: {
          fullname: '',                                     // Name to be displayed in usercard
          links: [],                                        // UNIMPLEMENTED: Links to be displayed in usercard
        },
        repoOptions: {
            type: '',                                       // Type of repos to be queried
                                                            // ['all','public','private','forks','sources','member','internal']
            sort: '',                                       // Field to sort repos using
                                                            // ['created','updated','pushed',]
            direction: '',                                  // Direction repos will be sorted in
                                                            // ['asc','desc']
            numRepos: Number.MAX_VALUE
        }
      },
    ],
  ],
```
**Important:** if otherwise not configured, options will be left to GitHub API defaults.