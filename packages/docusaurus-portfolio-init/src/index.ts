import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import { execSync } from 'child_process';
import prompts from 'prompts';

async function updateConfig(configPath: string, username: string) {
  const file = await fs.readFile(configPath, 'utf-8');
  const newfile = file.replace(/<GITHUB-USERNAME>/, username);
  await fs.outputFile(configPath, newfile);
  return;
}

export default async function init(
  siteName?: string,
  template?: string,
  username?: string,
): Promise<void> {
  // Start initialization.
  console.log(chalk.cyan('running docusaurus init'));

  // Prompt if siteName is not passed from CLI.
  if (!siteName) {
    const prompt = await prompts({
      type: 'text',
      name: 'name',
      message: 'What should we name this site?',
      initial: 'website',
    });
    siteName = prompt.name;
  }
  if (!siteName) {
    throw Error(chalk.red('A site name is required'));
  }

  // Run @docusaurus/init.
  try {
    execSync(
      `npx @docusaurus/init@latest init --use-npm ${siteName} classic `,
      { stdio: 'inherit' },
    );
  } catch (error) {
    throw Error(chalk.red('docusarus init failed'));
  }

  // Install plugin
  console.log(chalk.cyan('Installing docusaurus-portfolio'));
  try {
    execSync(
      `cd ${siteName} && npm install --save docusaurus-portfolio-plugin docusaurus-portfolio-theme`,
      { stdio: 'inherit' },
    );
  } catch (err) {
    throw Error(chalk.red('Installation of plugin failed.'));
  }

  // Prompt if usename is not passed from CLI.
  if (!username) {
    const prompt = await prompts({
      type: 'text',
      name: 'username',
      message: 'What is your GitHub UserName?',
      initial: 'example',
    });
    username = prompt.username;
  }
  if (!username) {
    throw Error(chalk.red('A username is required'));
  }

  console.log(chalk.cyan('adding portfolio config...'));

  // Copy template files to project
  fs.copyFileSync(
    path.resolve(__dirname, `../templates/${template}/docusaurus.config.js`),
    `${siteName}/docusaurus.config.js`,
  );

  // Update docusaurus.config.js info.
  try {
    await updateConfig(path.join(siteName, 'docusaurus.config.js'), username);
  } catch (err) {
    throw Error(chalk.red('Failed to update configuration file.'));
  }

  console.log();
  console.log(chalk.green('Configuration successful!'));
  console.log('We recommend that you begin by typing:');
  console.log();
  console.log(chalk.cyan('  cd'), siteName);
  console.log(`  ${chalk.cyan(`yarn start / npm run start`)}`);
}
