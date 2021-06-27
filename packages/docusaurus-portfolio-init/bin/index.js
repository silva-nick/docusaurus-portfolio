#!/usr/bin/env node

/*
    Original source: https://github.com/facebook/docusaurus/blob/master/packages/docusaurus-init/bin/index.js
*/

const chalk = require('chalk');
const program = require('commander');
const { default: init } = require('../dist');

function wrapCommand(fn) {
  return (...args) =>
    fn(...args).catch((err) => {
      console.error(chalk.red(err.stack));
      process.exitCode = 1;
    });
}

program
  .version(require('../package.json').version)
  .usage('<command> [options]');

program
  .command('init [siteName] [template] [username]')
  .description('Initialize website with docusaurus-portfolio.')
  .action((siteName = 'my-site', template = 'portfolio-classic', username) => {
    wrapCommand(init)(siteName, template, username);
  });

program.arguments('<command>').action((cmd) => {
  program.outputHelp();
  console.log(`  ${chalk.red(`\n  Unknown command ${chalk.yellow(cmd)}.`)}`);
  console.log();
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
