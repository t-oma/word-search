import { useEffect, useMemo, useState } from "react";

import { analytics, marketing } from "~/shared/lib";
import { COOKIE_KEY, DEFAULT_PREFERENCES, OPEN_SETTINGS_EVENT } from "./const";
import type { CookiePreferences } from "./types";

export type CookiePersistance = {
  save: (prefs: CookiePreferences) => void;
  get: () => CookiePreferences | null;
  clear: () => void;
};

export interface UseCookieConsentProps {
  initialPreferences?: CookiePreferences | null;
  persistance?: CookiePersistance;
}

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

function savePreferencesToLocalStorage(prefs: CookiePreferences): void {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

function clearPreferencesFromLocalStorage(): void {
  localStorage.removeItem(COOKIE_KEY);
}

export function useCookieConsent({
  initialPreferences,
  persistance = {
    save: savePreferencesToLocalStorage,
    get: getPreferencesFromLocalStorage,
    clear: clearPreferencesFromLocalStorage,
  },
}: UseCookieConsentProps = {}) {
  const [showBanner, setShowBanner] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);

  const { save, get, clear } = useMemo(() => persistance, [persistance]);

  useEffect(() => {
    if (initialPreferences) {
      setPreferences(initialPreferences); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setShowBanner(false); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      return;
    }

    const stored = get();
    if (stored) {
      setPreferences(stored); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setShowBanner(false); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    } else {
      setShowBanner(true); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    }
  }, [initialPreferences, get]);

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
    save(prefs);

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
    clear();
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
