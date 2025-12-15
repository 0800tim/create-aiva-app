# @getaiva/create-app

[![npm version](https://badge.fury.io/js/@getaiva%2Fcreate-app.svg)](https://www.npmjs.com/package/@getaiva/create-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Scaffold AIVA-powered subscription commerce apps in seconds.**

Create production-ready Next.js PWAs with AIVA MCP pre-configured. Perfect for customer portals, merchant dashboards, and subscription management apps.

## Quick Start

```bash
npx @getaiva/create-app my-portal
```

This creates a new directory called `my-portal` with everything you need:

- Next.js 14 with App Router
- PWA support (installable, offline-capable)
- AIVA MCP pre-configured
- Magic link authentication
- Push notifications ready
- Tailwind CSS styling
- CLAUDE.md for AI-assisted development

## Usage

### Interactive Mode

```bash
npx @getaiva/create-app
```

You'll be prompted to:
1. Enter your project name
2. Choose a template (Customer Portal, Merchant Dashboard, etc.)
3. Select your vertical (Pet Food, Coffee, Wine, etc.)

### Direct Template

```bash
# Customer portal with pet food vertical
npx @getaiva/create-app my-portal --template customer-portal --vertical pet-food

# Merchant dashboard
npx @getaiva/create-app my-dashboard --template merchant-dashboard

# Generic customer portal
npx @getaiva/create-app my-app --template customer-portal
```

## Available Templates

| Template | Description |
|----------|-------------|
| `customer-portal` | Customer-facing subscription management portal |
| `merchant-dashboard` | Admin dashboard with analytics and operations |
| `liquid-widgets` | Shopify Liquid theme components |

## Available Verticals

When using `customer-portal`, you can specify a vertical for pre-built components:

| Vertical | Description |
|----------|-------------|
| `pet-food` | Pet profiles, dietary preferences, breed selector |
| `coffee` | Roast preferences, grind settings, tasting notes |
| `wine` | Wine cellar, ratings, pairing suggestions |
| `beauty` | Skin profile quiz, routine builder |
| `supplements` | Dosage tracking, reminders, wellness goals |
| `generic` | Basic subscription portal (default) |

## What's Included

Every project includes:

### Project Structure

```
my-portal/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Authentication routes
│   │   ├── dashboard/          # Main dashboard
│   │   └── api/                # API routes
│   ├── components/             # React components
│   │   ├── ui/                 # Base UI components
│   │   └── subscription/       # Subscription-specific
│   ├── lib/                    # Utilities
│   │   ├── aiva.ts             # AIVA client
│   │   └── auth.ts             # Auth helpers
│   └── hooks/                  # Custom hooks
├── public/
│   └── manifest.json           # PWA manifest
├── CLAUDE.md                   # AI context file
├── .env.example                # Environment template
└── mcp.json                    # MCP configuration
```

### Key Features

- **PWA Ready**: Service worker, manifest, offline support
- **Magic Link Auth**: Passwordless authentication flow
- **Push Notifications**: Web push with permission UI
- **AIVA Integration**: Pre-configured MCP and API client
- **Tailwind Styling**: Modern, responsive design
- **TypeScript**: Full type safety

### AI Development Ready

The `CLAUDE.md` file contains:
- Project architecture overview
- Coding conventions
- AIVA API patterns
- Component guidelines
- Common customization tasks

Open the project in Cursor, Claude Code, or any MCP-compatible tool and start building with AI assistance.

## After Creating

1. **Install dependencies**:
   ```bash
   cd my-portal
   npm install
   ```

2. **Configure environment**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your AIVA API key
   ```

3. **Start development**:
   ```bash
   npm run dev
   ```

4. **Open in your AI tool** (Cursor, Claude Code, etc.) and start customizing!

## Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `AIVA_API_KEY` | Yes | Your AIVA API key |
| `NEXT_PUBLIC_APP_URL` | Yes | Your app URL (for auth callbacks) |
| `SHOPIFY_STORE` | No | Shopify store domain (if direct access needed) |
| `SHOPIFY_ACCESS_TOKEN` | No | Shopify Admin API token |

### MCP Configuration

The `mcp.json` file is pre-configured for AIVA MCP. Just add your API key to `.env.local`.

## Customization

### Branding

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  primary: {
    // Your brand colors
  }
}
```

### Vertical-Specific Components

When using a vertical template, you get pre-built components. Customize them in:
- `src/components/profile/` - Customer profile components
- `src/components/subscription/` - Subscription management

### Adding Features

Use the prompt library at [appspurt.com/prompts](https://appspurt.com/prompts) for AI-ready prompts to add new features.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The app is a standard Next.js application and deploys to any Node.js host:
- Netlify
- Railway
- Render
- AWS Amplify

## Related Packages

- [`@getaiva/mcp`](https://github.com/0800tim/aiva-mcp) - AIVA MCP server
- [Starter Kits](https://appspurt.com/starter-kits) - Browse all templates

## License

MIT - see [LICENSE](LICENSE) for details.

## Support

- [Documentation](https://docs.aiva.io)
- [GitHub Issues](https://github.com/0800tim/create-aiva-app/issues)
- [Discord Community](https://discord.gg/aiva)
