import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import { execSync } from 'child_process';
import prompts from 'prompts';

async function updateConfig(configPath: string, username: string) {
  const file = await fs.readFile(configPath, 'utf-8');
  const newfile = file.replace(/<GITHUB-USERNAME>/g, username);
  await fs.outputFile(configPath, newfile);
  return;
}

export default async function init(
  siteName?: string,
  template?: string,
  username?: string,
): Promise<void> {
  // Start initialization.
  console.log(chalk.cyan('running docusaurus-portfolio-init'));
  console.log();

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

  // Prompt if template is not passed from CLI.
  if (!template) {
    const prompt = await prompts({
      type: 'text',
      name: 'name',
      message:
        'Which template do you want to use (portfolio-classic / authored-classic)?',
      initial: 'portfolio-classic',
    });
    template = prompt.name;
  }
  if (!template) {
    throw Error(chalk.red('A template is required.'));
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
    throw Error(chalk.red('A username is required.'));
  }

  console.log();
  console.log(chalk.cyan('adding portfolio config...'));

  // Delete default main page for portfolio site.
  if (template === 'portfolio-classic') {
    try {
      await fs.rmdir(`${siteName}/src`, {
        recursive: true,
      });
      await fs.rmdir(`${siteName}/blog`, {
        recursive: true,
      });
      await fs.rmdir(`${siteName}/docs`, {
        recursive: true,
      });
    } catch (error) {
      console.log(chalk.red('Deleting files failed.'));
      throw error;
    }
  }

  // Copy template files to project
  if (
    (template && template === 'portfolio-classic') ||
    template === 'authored-classic'
  ) {
    try {
      await fs.copy(
        path.resolve(__dirname, `../templates/${template}/`),
        `${siteName}/`,
      );
    } catch (error) {
      console.log(
        `Copying Docusaurus template ${chalk.cyan(template)} failed!`,
      );
      throw error;
    }

    // Update about me page references
    try {
      await updateConfig(path.join(siteName, 'docs/about-me.mdx'), username);
    } catch (err) {
      throw Error(chalk.red('Failed to update about me file.'));
    }
  } else {
    throw Error(chalk.red('A valid template is required.'));
  }

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
