#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import degit from 'degit';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const TEMPLATES = {
  'customer-portal': {
    repo: '0800tim/customer-portal-starter',
    description: 'Customer-facing subscription management portal',
  },
  'merchant-dashboard': {
    repo: '0800tim/merchant-dashboard-starter',
    description: 'Admin dashboard with analytics and operations',
  },
  'liquid-widgets': {
    repo: '0800tim/liquid-widgets-starter',
    description: 'Shopify Liquid theme components',
  },
};

const VERTICALS = {
  'generic': 'Generic subscription portal',
  'pet-food': 'Pet food subscriptions (pet profiles, dietary preferences)',
  'coffee': 'Coffee subscriptions (roast, grind, tasting notes)',
  'wine': 'Wine club (cellar, ratings, pairings)',
  'beauty': 'Beauty box (skin profile, routine builder)',
  'supplements': 'Supplements (dosage tracking, reminders)',
};

interface Options {
  template?: string;
  vertical?: string;
  skipInstall?: boolean;
}

async function main() {
  const program = new Command();

  program
    .name('create-aiva-app')
    .description('Scaffold AIVA-powered subscription commerce apps')
    .version('0.1.0')
    .argument('[project-name]', 'Name of the project')
    .option('-t, --template <template>', 'Template to use')
    .option('-v, --vertical <vertical>', 'Vertical for customer-portal template')
    .option('--skip-install', 'Skip npm install')
    .action(async (projectName: string | undefined, options: Options) => {
      console.log(chalk.bold.cyan('\n  create-aiva-app\n'));
      console.log(chalk.gray('  Scaffold AIVA-powered subscription apps\n'));

      // Get project name
      if (!projectName) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectName',
            message: 'Project name:',
            default: 'my-aiva-app',
            validate: (input: string) => {
              if (!input.trim()) return 'Project name is required';
              if (fs.existsSync(input)) return 'Directory already exists';
              return true;
            },
          },
        ]);
        projectName = answers.projectName;
      }

      // Validate project name
      if (fs.existsSync(projectName)) {
        console.error(chalk.red(`\n  Error: Directory "${projectName}" already exists\n`));
        process.exit(1);
      }

      // Get template
      let template = options.template;
      if (!template) {
        const answers = await inquirer.prompt([
          {
            type: 'list',
            name: 'template',
            message: 'Select a template:',
            choices: Object.entries(TEMPLATES).map(([key, value]) => ({
              name: `${chalk.bold(key)} - ${value.description}`,
              value: key,
            })),
          },
        ]);
        template = answers.template;
      }

      if (!TEMPLATES[template as keyof typeof TEMPLATES]) {
        console.error(chalk.red(`\n  Error: Unknown template "${template}"\n`));
        process.exit(1);
      }

      // Get vertical for customer-portal
      let vertical = options.vertical;
      if (template === 'customer-portal' && !vertical) {
        const answers = await inquirer.prompt([
          {
            type: 'list',
            name: 'vertical',
            message: 'Select a vertical (pre-built components):',
            choices: Object.entries(VERTICALS).map(([key, value]) => ({
              name: `${chalk.bold(key)} - ${value}`,
              value: key,
            })),
          },
        ]);
        vertical = answers.vertical;
      }

      // Clone template
      const spinner = ora('Downloading template...').start();

      try {
        const templateInfo = TEMPLATES[template as keyof typeof TEMPLATES];
        const emitter = degit(templateInfo.repo, {
          cache: false,
          force: true,
          verbose: false,
        });

        await emitter.clone(projectName);
        spinner.succeed('Template downloaded');

        // Apply vertical customization
        if (vertical && vertical !== 'generic') {
          spinner.start(`Applying ${vertical} vertical...`);

          // Read and update package.json
          const pkgPath = path.join(projectName, 'package.json');
          if (fs.existsSync(pkgPath)) {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
            pkg.name = projectName;
            pkg.aiva = { vertical };
            fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
          }

          spinner.succeed(`Applied ${vertical} vertical`);
        } else {
          // Just update package name
          const pkgPath = path.join(projectName, 'package.json');
          if (fs.existsSync(pkgPath)) {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
            pkg.name = projectName;
            fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
          }
        }

        // Install dependencies
        if (!options.skipInstall) {
          spinner.start('Installing dependencies...');
          execSync('npm install', {
            cwd: projectName,
            stdio: 'pipe',
          });
          spinner.succeed('Dependencies installed');
        }

        // Success message
        console.log(chalk.green('\n  Success! Created ' + projectName + '\n'));
        console.log('  Next steps:\n');
        console.log(chalk.cyan(`    cd ${projectName}`));
        console.log(chalk.cyan('    cp .env.example .env.local'));
        console.log(chalk.gray('    # Add your AIVA_API_KEY to .env.local'));
        console.log(chalk.cyan('    npm run dev'));
        console.log();
        console.log(chalk.gray('  Open in Cursor or Claude Code for AI-assisted development.'));
        console.log(chalk.gray('  See CLAUDE.md for project context.\n'));

      } catch (error) {
        spinner.fail('Failed to create project');
        console.error(chalk.red('\n  Error:'), error);
        process.exit(1);
      }
    });

  program.parse();
}

main().catch(console.error);
