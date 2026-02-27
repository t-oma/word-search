# Analytics

The analytics module provides tracking for page views and custom events.

## Usage

```typescript
import { trackEvent, trackPageView } from "~/shared/lib/analytics";
```

## Functions

### trackPageView()

Tracks a page view. Automatically called when analytics is enabled.

```typescript
trackPageView();
```

### trackEvent()

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
trackEvent("word_found", "game", "horizontal", 10);
```

## Enabling Analytics

Analytics is automatically enabled when the user accepts cookies via the consent banner.

```typescript
// The cookie banner automatically calls:
// - analytics.enable() when consent is given
// - analytics.disable() when consent is revoked
```

## Console Output

When analytics is enabled, events are logged to the console:

```
[Analytics] Enabled
[Analytics] Page view: /games/easy
[Analytics] Event: { action: 'game_start', category: 'game', label: 'easy_mode' }
```

When analytics is disabled, events are blocked:

```
[Analytics] Blocked event: { action: 'game_start', category: 'game' }
```
