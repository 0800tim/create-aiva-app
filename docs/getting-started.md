# Getting Started with @getaiva/create-app

Create production-ready AIVA applications with a single command.

## Quick Start

```bash
npx @getaiva/create-app my-app
```

Follow the interactive prompts to select your template and options.

## Requirements

- Node.js 18 or higher
- npm 7+ or yarn 1.22+
- Git (for cloning templates)

## Installation Options

### Using npx (Recommended)

```bash
npx @getaiva/create-app my-app
```

### Global Installation

```bash
npm install -g @getaiva/create-app
create-aiva-app my-app
```

### Using yarn

```bash
yarn create aiva-app my-app
```

## Interactive Mode

When you run @getaiva/create-app, you'll be prompted to choose:

1. **Project name** - Directory name for your project
2. **Template** - The type of application to create
3. **Vertical** - Industry-specific customization (optional)

## Command Line Options

Skip the prompts with command line flags:

```bash
# Specify template
npx @getaiva/create-app my-app --template customer-portal

# Specify vertical
npx @getaiva/create-app my-app --template customer-portal --vertical pet-food

# Skip git initialization
npx @getaiva/create-app my-app --no-git

# Use a specific package manager
npx @getaiva/create-app my-app --use-npm
npx @getaiva/create-app my-app --use-yarn
npx @getaiva/create-app my-app --use-pnpm
```

## After Creation

```bash
cd my-app
cp .env.example .env.local
# Add your AIVA_API_KEY
npm run dev
```

Your app will be running at `http://localhost:3000`.

## Next Steps

- [Templates](./templates.md) - Available project templates
- [Verticals](./verticals.md) - Industry customizations
- [Configuration](./configuration.md) - Post-setup configuration
