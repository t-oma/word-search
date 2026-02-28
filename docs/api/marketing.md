# Marketing

The marketing module provides tracking for campaigns, conversions, and ad impressions.

## Usage

```typescript
import {
  trackAdImpression,
  trackCampaign,
  trackConversion,
} from "~/shared/lib/marketing";
```

## Functions

### trackCampaign()

Tracks marketing campaign attribution.

```typescript
trackCampaign(
  id: string,        // Campaign ID
  name: string,     // Campaign name
  source?: string,  // Traffic source (e.g., "google", "facebook")
  medium?: string   // Marketing medium (e.g., "cpc", "email")
);

// Example
trackCampaign("spring_sale", "Spring Sale 2024", "google", "cpc");
```

### trackConversion()

Tracks conversion events.

```typescript
trackConversion(
  type: string,   // Conversion type (e.g., "signup", "purchase")
  value?: number  // Optional conversion value
);

// Example
trackConversion("signup");
trackConversion("purchase", 29.99);
```

### trackAdImpression()

Tracks ad impressions.

```typescript
trackAdImpression(
  adId: string,   // Ad identifier
  adName: string  // Ad name
);

// Example
trackAdImpression("banner_300x250", "Homepage Banner");
```

## Enabling Marketing

Marketing tracking is automatically enabled when the user accepts marketing cookies via the consent banner.

```typescript
// The cookie banner automatically calls:
// - marketing.enable() when consent is given
// - marketing.disable() when consent is revoked
```

## Console Output

When marketing is enabled:

```
[Marketing] Enabled
[Marketing] Campaign: { id: 'spring_sale', name: 'Spring Sale', source: 'google', medium: 'cpc' }
[Marketing] Conversion: signup
[Marketing] Ad impression: banner_300x250 Homepage Banner
```

When marketing is disabled:

```
[Marketing] Blocked campaign: { id: 'spring_sale', name: 'Spring Sale' }
[Marketing] Blocked conversion: signup
[Marketing] Blocked ad impression: banner_300x250 Homepage Banner
```
