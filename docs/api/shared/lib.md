# Lib

Third-party library integrations for analytics and marketing.

## Analytics

The analytics module provides tracking for page views and custom events.

```typescript
import { trackEvent, trackPageView } from "~/shared/lib/analytics";
```

### Functions

#### trackPageView()

Tracks a page view.

```typescript
trackPageView();
```

#### trackEvent()

Tracks a custom event.

```typescript
trackEvent(
  action: string,    // Event action (e.g., "click", "start")
  category: string,  // Event category (e.g., "game", "ui")
  label?: string,   // Optional event label
  value?: number    // Optional numeric value
);

// Example
trackEvent("game_start", "game", "easy_mode");
```

## Marketing

The marketing module provides tracking for campaigns, conversions, and ad impressions.

```typescript
import {
  trackAdImpression,
  trackCampaign,
  trackConversion,
} from "~/shared/lib/marketing";
```

### Functions

#### trackCampaign()

Tracks marketing campaign attribution.

```typescript
trackCampaign(
  id: string,        // Campaign ID
  name: string,     // Campaign name
  source?: string,  // Traffic source
  medium?: string   // Marketing medium
);

// Example
trackCampaign("spring_sale", "Spring Sale 2024", "google", "cpc");
```

#### trackConversion()

Tracks conversion events.

```typescript
trackConversion(
  type: string,   // Conversion type
  value?: number  // Optional value
);

// Example
trackConversion("signup");
trackConversion("purchase", 29.99);
```

#### trackAdImpression()

Tracks ad impressions.

```typescript
trackAdImpression(
  adId: string,   // Ad identifier
  adName: string  // Ad name
);

// Example
trackAdImpression("banner_300x250", "Homepage Banner");
```

## Integration with Cookie Consent

Both analytics and marketing are automatically enabled/disabled based on user cookie consent preferences. See [Cookie Consent API](../../api/cookie-consent) for more details.
