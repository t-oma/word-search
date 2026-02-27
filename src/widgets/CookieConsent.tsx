import { useEffect, useState } from "react";

import type { ReactNode } from "react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

interface CookieConsentProps {
  children: ReactNode;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: "",
};

const COOKIE_KEY = "cookie_consent_preferences";

function getPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(COOKIE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

function savePreferences(prefs: CookiePreferences): void {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

export function CookieConsent({ children }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = getPreferences();
    if (stored) {
      setPreferences(stored); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setShowBanner(false); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    } else {
      setShowBanner(true); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    }
  }, []);

  const handleAcceptAll = () => {
    const newPrefs: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    setPreferences(newPrefs);
    savePreferences(newPrefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleDecline = () => {
    const newPrefs: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    setPreferences(newPrefs);
    savePreferences(newPrefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const newPrefs: CookiePreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    setPreferences(newPrefs);
    savePreferences(newPrefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  if (!showBanner) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      {showBanner && !showSettings && (
        <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="flex-1 text-sm text-gray-700">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic.{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Privacy Policy
              </a>
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={handleShowSettings}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                Manage Preferences
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      <CookieSettings show={showSettings}>
        <CookieSettingsHeader />

        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <div>
              <p className="font-medium text-gray-900">Essential</p>
              <p className="text-sm text-gray-500">
                Required for the website to function properly
              </p>
            </div>
            <span className="text-sm font-medium text-green-600">
              Always On
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <div className="flex-1">
              <p className="font-medium text-gray-900">Analytics</p>
              <p className="text-sm text-pretty text-gray-500">
                Help us understand how visitors interact with our website
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setPreferences((p) => ({ ...p, analytics: !p.analytics }))
              }
              className={`relative h-6 w-11 rounded-full transition-colors ${
                preferences.analytics ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  preferences.analytics ? "translate-x-full" : ""
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <div className="flex-1">
              <p className="font-medium text-gray-900">Marketing</p>
              <p className="text-sm text-pretty text-gray-500">
                Personalize advertisements and measure their performance
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setPreferences((p) => ({ ...p, marketing: !p.marketing }))
              }
              className={`relative h-6 w-11 rounded-full transition-colors ${
                preferences.marketing ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                  preferences.marketing ? "translate-x-full" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <CookieSettingsFooter
          handleDecline={() => setShowSettings(false)}
          handleAccept={handleSavePreferences}
        />
      </CookieSettings>
    </>
  );
}

type CookieSettingsProps = {
  show: boolean;
  children: ReactNode;
};

function CookieSettings({ show, children }: CookieSettingsProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        {children}
      </div>
    </div>
  );
}

function CookieSettingsHeader() {
  return (
    <>
      <h2 className="mb-2 text-xl font-semibold text-gray-900">
        Cookie Preferences
      </h2>
      <p className="mb-6 text-sm text-gray-600">
        Manage your cookie preferences. Essential cookies are always enabled as
        they are necessary for the website to function properly.
      </p>
    </>
  );
}

type CookieSettingsFooterProps = {
  handleDecline: () => void;
  handleAccept: () => void;
};

function CookieSettingsFooter({
  handleDecline,
  handleAccept: handleSavePreferences,
}: CookieSettingsFooterProps) {
  return (
    <div className="flex justify-end gap-2">
      <button
        type="button"
        onClick={handleDecline}
        className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={handleSavePreferences}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Save Preferences
      </button>
    </div>
  );
}

export function useCookieConsent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    return getPreferences() || DEFAULT_PREFERENCES;
  });

  const hasAnalyticsConsent = preferences.analytics;
  const hasMarketingConsent = preferences.marketing;
  const hasConsent = preferences.timestamp !== "";

  const openSettings = () => {
    window.location.reload();
  };

  return {
    preferences,
    hasAnalyticsConsent,
    hasMarketingConsent,
    hasConsent,
    openSettings,
  };
}
