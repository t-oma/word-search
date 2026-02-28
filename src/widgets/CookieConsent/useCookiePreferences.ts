import { useState } from "react";

import { DEFAULT_PREFERENCES, OPEN_SETTINGS_EVENT } from "./const";
import { getPreferencesFromLocalStorage } from "./useCookieConsent";
import type { CookiePreferences } from "./types";

function useCookiePreferences() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    return getPreferencesFromLocalStorage() || DEFAULT_PREFERENCES;
  });

  const hasAnalyticsConsent = preferences.analytics;
  const hasMarketingConsent = preferences.marketing;
  const hasConsent = preferences.timestamp !== "";

  const openSettings = () => {
    window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
  };

  return {
    preferences,
    hasAnalyticsConsent,
    hasMarketingConsent,
    hasConsent,
    openSettings,
  };
}

export { useCookiePreferences };
