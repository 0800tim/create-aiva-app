# Configuration

After creating your app, follow these steps to configure it.

## Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

### Required Variables

| Variable | Description |
|----------|-------------|
| `AIVA_API_KEY` | Your AIVA API key from the dashboard |
| `NEXT_PUBLIC_APP_URL` | Your app's URL (e.g., `http://localhost:3000`) |
| `JWT_SECRET` | Secret for signing session tokens |

### Generating JWT_SECRET

```bash
openssl rand -hex 32
```

### Optional Variables

| Variable | Description |
|----------|-------------|
| `SHOPIFY_STORE` | Direct Shopify store URL (if not using AIVA proxy) |
| `SHOPIFY_ACCESS_TOKEN` | Shopify Admin API token |

## MCP Configuration

The template includes a pre-configured `mcp.json` file:

```json
{
  "mcpServers": {
    "aiva": {
      "command": "npx",
      "args": ["-y", "@aiva/mcp"],
      "env": {
        "AIVA_API_KEY": "${AIVA_API_KEY}"
      }
    }
  }
}
```

This enables AI-assisted development with tools like Claude Code and Cursor.

## Customization

### Branding

Update `tailwind.config.js` to match your brand:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#your-lightest',
          500: '#your-primary',
          900: '#your-darkest',
        },
      },
    },
  },
};
```

### Logo

Replace the logo in:
- `public/logo.svg` - Main logo
- `public/favicon.ico` - Browser favicon
- `public/apple-touch-icon.png` - iOS icon

### Metadata

Update `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Brand Portal',
  description: 'Manage your subscription',
};
```

## Vertical Configuration

Edit `src/config/vertical.ts` to customize for your business:

```typescript
export const VERTICAL = {
  name: 'Pet Food',

  // Custom profile fields
  profileFields: [
    'petName',
    'breed',
    'dietaryRestrictions',
  ],

  // Custom terminology
  terminology: {
    subscription: 'subscription',
    delivery: 'delivery',
    skip: 'skip this delivery',
  },

  // Feature flags
  features: {
    rewards: true,
    referrals: true,
    productSwap: true,
  },
};
```

## Authentication

### Magic Link Setup

Magic link authentication is configured by default. Ensure:

1. `NEXT_PUBLIC_APP_URL` is set correctly
2. Your AIVA account has email sending configured
3. The callback URL is registered: `${APP_URL}/api/auth/callback`

### Custom Auth Provider

To use a different auth provider, modify:
- `src/lib/auth.ts` - Authentication logic
- `src/app/api/auth/` - Auth API routes
- `src/app/(auth)/` - Auth UI pages

## Deployment

### Vercel (Recommended)

```bash
vercel
```

Set environment variables in Vercel dashboard.

### Other Platforms

Build and start:

```bash
npm run build
npm start
```

Required environment variables must be set on your hosting platform.

### Environment-Specific Config

Create environment-specific files:
- `.env.local` - Local development
- `.env.production` - Production values

## Testing Your Configuration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`

3. Try the login flow with a test email

4. Verify AIVA connection by checking the dashboard loads data

## Troubleshooting

### API Key Not Working

- Verify the key is correct in `.env.local`
- Check the key has required permissions in AIVA dashboard
- Ensure no extra whitespace around the key

### Magic Link Not Arriving

- Check spam folder
- Verify email is registered in AIVA
- Check AIVA dashboard for email sending status

### Data Not Loading

- Check browser console for errors
- Verify AIVA API key permissions
- Check network tab for API responses
