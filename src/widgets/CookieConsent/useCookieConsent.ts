import { useEffect, useState } from "react";

import { analytics, marketing } from "~/shared/lib";
import { COOKIE_KEY, DEFAULT_PREFERENCES, OPEN_SETTINGS_EVENT } from "./const";
import type { CookiePreferences } from "./types";

export function getPreferencesFromLocalStorage(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(COOKIE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function savePreferencesToLocalStorage(prefs: CookiePreferences): void {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

export function clearPreferencesFromLocalStorage(): void {
  localStorage.removeItem(COOKIE_KEY);
}

function useCookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = getPreferencesFromLocalStorage();
    if (stored) {
      setPreferences(stored); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setShowBanner(false); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    } else {
      setShowBanner(true); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    }
  }, []);

  useEffect(() => {
    const handleOpenSettings = () => {
      setShowSettings(true);
    };

    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
    };
  }, []);

  useEffect(() => {
    if (preferences.analytics) {
      analytics.enable();
    } else {
      analytics.disable();
    }

    if (preferences.marketing) {
      marketing.enable();
    } else {
      marketing.disable();
    }
  }, [preferences.analytics, preferences.marketing]);

  const applyPreferences = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    savePreferencesToLocalStorage(prefs);

    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const newPrefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    applyPreferences(newPrefs);
  };

  const decline = () => {
    const newPrefs: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    applyPreferences(newPrefs);
  };

  const savePreferences = () => {
    const newPrefs: CookiePreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    applyPreferences(newPrefs);
  };

  const clearPreferences = () => {
    setPreferences(DEFAULT_PREFERENCES);
    setShowBanner(true);
    setShowSettings(false);
    clearPreferencesFromLocalStorage();
  };

  return {
    showBanner,
    showSettings,
    preferences,
    hasConsent: preferences.timestamp !== "",
    actions: {
      acceptAll,
      decline,
      savePreferences,
      clearPreferences,
      toggleAnalytics: () =>
        setPreferences({ ...preferences, analytics: !preferences.analytics }),
      toggleMarketing: () =>
        setPreferences({ ...preferences, marketing: !preferences.marketing }),
      showBanner: () => setShowBanner(true),
      hideBanner: () => setShowBanner(false),
      showSettings: () => setShowSettings(true),
      hideSettings: () => setShowSettings(false),
    },
  };
}

export { useCookieConsent };
