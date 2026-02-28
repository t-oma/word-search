# Cookie Consent

The cookie consent component provides GDPR-compliant banner for managing user consent.

## Component

The cookie consent banner is automatically rendered in the app via providers.

```typescript
// src/app/providers.tsx
import { CookieConsent } from "~/widgets";

function Providers({ children }) {
  return (
    <GameSettingsProvider>
      <CookieConsent>{children}</CookieConsent>
    </GameSettingsProvider>
  );
}
```

## Hook: useCookieConsent

Access consent preferences from any component.

```typescript
import { useCookieConsent } from "~/widgets/CookieConsent";

function MyComponent() {
  const { hasAnalyticsConsent, hasMarketingConsent, hasConsent, openSettings } =
    useCookiePreferences();

  // ...
}
```

## Consent Categories

| Category    | Description                             | Default        |
| ----------- | --------------------------------------- | -------------- |
| `necessary` | Essential for the website to function   | Always enabled |
| `analytics` | Help understand how visitors interact   | Disabled       |
| `marketing` | Personalize ads and measure performance | Disabled       |

## User Interactions

### Accept All

Enables all cookie categories.

### Essential Only

Disables analytics and marketing cookies.

### Manage Preferences

Opens a modal where users can toggle each category individually.

### Floating Button

After making a choice, a floating button appears in the bottom-right corner to reopen settings.

## Storage

Consent preferences are stored in `localStorage`:

```javascript
{
  necessary: true,
  analytics: true,
  marketing: false,
  timestamp: "2024-01-15T10:30:00.000Z"
}
```

## GDPR Compliance

The cookie consent banner provides:

- ✅ Granular consent for each category
- ✅ Clear explanation of what each cookie type does
- ✅ Easy way to withdraw consent (floating button)
- ✅ Link to Privacy Policy
- ✅ No cookies set before explicit consent
