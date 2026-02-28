import { AppModal } from "../AppModal";
import { CookieBanner } from "./CookieBanner";
import {
  CookieSettingsFooter,
  CookieSettingsHeader,
  CookieSettingsSection,
} from "./CookieSettings";
import { FloatingButton } from "./FloatingButton";
import { useCookieConsent } from "./useCookieConsent";
import type { ReactNode } from "react";

interface CookieConsentProps {
  children: ReactNode;
}

export function CookieConsent({ children }: CookieConsentProps) {
  const { showBanner, showSettings, hasConsent, preferences, actions } =
    useCookieConsent();

  return (
    <>
      {children}
      {showBanner && (
        <CookieBanner
          handleDecline={actions.decline}
          handleAcceptAll={actions.acceptAll}
          handleShowSettings={actions.showSettings}
        />
      )}
      {!showBanner && hasConsent && (
        <FloatingButton handleOpenSettings={actions.showSettings} />
      )}

      <AppModal open={showSettings} onClose={actions.hideSettings}>
        <CookieSettingsHeader />

        <div className="mb-6 space-y-4">
          <CookieSettingsSection
            type="Essential"
            description="Required for the website to function properly"
          >
            <span className="text-sm font-medium text-green-600">
              Always On
            </span>
          </CookieSettingsSection>
          <CookieSettingsSection
            type="Analytics"
            description="Help us understand how visitors interact with our website"
          >
            <button
              type="button"
              onClick={actions.toggleAnalytics}
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
          </CookieSettingsSection>

          <CookieSettingsSection
            type="Marketing"
            description="Personalize advertisements and measure their performance"
          >
            <button
              type="button"
              onClick={actions.toggleMarketing}
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
          </CookieSettingsSection>
        </div>

        <CookieSettingsFooter
          hasConsent={hasConsent}
          handleClear={actions.clearPreferences}
          handleDecline={actions.hideSettings}
          handleAccept={actions.savePreferences}
        />
      </AppModal>
    </>
  );
}
