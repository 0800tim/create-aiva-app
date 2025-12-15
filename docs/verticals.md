# Industry Verticals

Verticals customize your template with industry-specific features, terminology, and UI elements.

## Generic (Default)

**Vertical ID:** `generic`

Standard subscription commerce features without industry-specific customization.

- Standard customer profile fields
- Generic subscription terminology
- Neutral color scheme

---

## Pet Food

**Vertical ID:** `pet-food`

Customized for pet food and pet supply subscription businesses.

### Profile Fields

- Pet name
- Pet type (dog, cat, etc.)
- Breed
- Age/birthday
- Weight
- Dietary restrictions
- Health conditions

### UI Customizations

- Pet-friendly imagery placeholders
- "Fur baby" friendly terminology
- Pet birthday reminders
- Feeding schedule suggestions

### Example Businesses

- Dog food subscriptions
- Cat treat boxes
- Pet vitamin subscriptions

### Usage

```bash
npx create-aiva-app my-app --template customer-portal --vertical pet-food
```

---

## Coffee

**Vertical ID:** `coffee`

Customized for coffee subscription businesses.

### Profile Fields

- Roast preference (light, medium, dark)
- Brewing method (drip, espresso, French press, etc.)
- Grind preference
- Flavor notes preferences
- Caffeine preference

### UI Customizations

- Coffee-themed color palette
- Roast level indicators
- Brewing guides
- Tasting notes display

### Example Businesses

- Coffee bean subscriptions
- Single-origin clubs
- Coffee equipment bundles

### Usage

```bash
npx create-aiva-app my-app --template customer-portal --vertical coffee
```

---

## Wine

**Vertical ID:** `wine`

Customized for wine subscription businesses.

### Profile Fields

- Wine preferences (red, white, rosé, sparkling)
- Sweetness preference
- Region preferences
- Price range
- Cellar inventory

### UI Customizations

- Elegant, sophisticated styling
- Wine rating display
- Pairing suggestions
- Cellar tracking feature

### Example Businesses

- Wine clubs
- Natural wine subscriptions
- Wine education memberships

### Usage

```bash
npx create-aiva-app my-app --template customer-portal --vertical wine
```

---

## Beauty

**Vertical ID:** `beauty`

Customized for beauty and skincare subscription businesses.

### Profile Fields

- Skin type
- Skin concerns
- Hair type
- Color preferences
- Allergies/sensitivities
- Beauty goals

### UI Customizations

- Clean, minimalist aesthetic
- Shade matching features
- Routine builder
- Product ingredient highlights

### Example Businesses

- Beauty boxes
- Skincare subscriptions
- Makeup replenishment

### Usage

```bash
npx create-aiva-app my-app --template customer-portal --vertical beauty
```

---

## Supplements

**Vertical ID:** `supplements`

Customized for vitamin and supplement subscription businesses.

### Profile Fields

- Health goals
- Current supplements
- Dietary restrictions (vegan, gluten-free)
- Medical conditions
- Age group
- Activity level

### UI Customizations

- Health-focused design
- Dosage tracking
- Reminder features
- Health goal progress

### Example Businesses

- Vitamin subscriptions
- Protein powder clubs
- Wellness boxes

### Usage

```bash
npx create-aiva-app my-app --template customer-portal --vertical supplements
```

---

## Vertical Comparison

| Feature | Pet Food | Coffee | Wine | Beauty | Supplements |
|---------|----------|--------|------|--------|-------------|
| Profile Complexity | High | Medium | Medium | High | High |
| Age Verification | No | No | Yes | No | No |
| Tracking Features | Feeding | Brewing | Cellar | Routine | Dosage |
| Recommendations | Diet-based | Taste-based | Preference | Skin-based | Goal-based |

## Creating Custom Verticals

To create a custom vertical:

1. Fork the base template
2. Modify `src/config/vertical.ts`:

```typescript
export const VERTICAL = {
  name: 'Your Vertical',
  profileFields: ['field1', 'field2'],
  terminology: {
    subscription: 'membership',
    delivery: 'shipment',
  },
  theme: {
    primaryColor: '#your-color',
  },
};
```

3. Add custom profile components
4. Update dashboard widgets as needed
