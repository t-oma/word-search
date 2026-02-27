interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class AnalyticsTracker {
  private isEnabled = false;
  private events: AnalyticsEvent[] = [];

  enable() {
    this.isEnabled = true;
    console.log("[Analytics] Enabled");
    this.trackPageView();
  }

  disable() {
    this.isEnabled = false;
    console.log("[Analytics] Disabled");
  }

  trackPageView() {
    if (!this.isEnabled) return;
    console.log(
      "[Analytics] Page view:",
      window.location.pathname + window.location.search
    );
    this.events.push({ action: "page_view", category: "navigation" });
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.isEnabled) {
      console.log("[Analytics] Blocked event:", event);
      return;
    }
    console.log("[Analytics] Event:", event);
    this.events.push(event);
  }

  getEvents() {
    return this.events;
  }

  clear() {
    this.events = [];
  }
}

export const analytics = new AnalyticsTracker();

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  analytics.trackEvent({ action, category, label, value });
}

export function trackPageView() {
  analytics.trackPageView();
}
