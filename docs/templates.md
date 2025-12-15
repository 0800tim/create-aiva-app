# Available Templates

## Customer Portal

**Template ID:** `customer-portal`

A production-ready customer-facing portal for subscription businesses.

### Features

- Magic link authentication
- Subscription management (pause, resume, skip, cancel)
- Order history and tracking
- Profile management
- Rewards/loyalty page
- Mobile-responsive with bottom navigation
- AIVA MCP pre-configured

### Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- SWR for data fetching

### Use Cases

- Subscription box customer portal
- DTC brand account management
- Membership site dashboard

### Usage

```bash
npx create-aiva-app my-portal --template customer-portal
```

---

## Merchant Dashboard

**Template ID:** `merchant-dashboard`

Admin dashboard for managing subscriptions and customers.

### Features

- Customer search and management
- Subscription overview and actions
- Order management
- Analytics dashboards
- RFM segmentation views
- Churn risk monitoring

### Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Chart.js for visualizations

### Use Cases

- Internal admin tool
- Customer service dashboard
- Business analytics portal

### Usage

```bash
npx create-aiva-app my-dashboard --template merchant-dashboard
```

---

## Liquid Widgets

**Template ID:** `liquid-widgets`

Shopify theme components for subscription features.

### Features

- Subscription widget for PDPs
- Customer account portal sections
- Upcoming order management
- Quick actions (skip, swap, cancel)

### Tech Stack

- Shopify Liquid
- Vanilla JavaScript
- Shopify Theme API

### Use Cases

- Enhance existing Shopify themes
- Add subscription UI to storefronts
- Custom account page sections

### Usage

```bash
npx create-aiva-app my-widgets --template liquid-widgets
```

---

## Template Comparison

| Feature | Customer Portal | Merchant Dashboard | Liquid Widgets |
|---------|----------------|-------------------|----------------|
| Framework | Next.js 14 | Next.js 14 | Shopify Liquid |
| Auth | Magic Link | Admin Auth | Shopify Customer |
| Hosting | Vercel/Any | Vercel/Any | Shopify Theme |
| MCP Ready | Yes | Yes | N/A |
| PWA Support | Yes | No | No |

## Creating Custom Templates

Templates are Git repositories that get cloned via `degit`. To create your own:

1. Fork an existing template
2. Customize to your needs
3. Use with `--template` flag pointing to your repo:

```bash
npx create-aiva-app my-app --template github:yourusername/your-template
```
