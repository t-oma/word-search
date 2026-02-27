import type { CookiePreferences } from "./types";

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: "",
};

export const COOKIE_KEY = "cookie_consent_preferences";
export const OPEN_SETTINGS_EVENT = "cookie-consent:open-settings";
