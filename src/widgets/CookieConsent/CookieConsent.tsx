import { Switch } from "~/shared/ui";
import { AppModal } from "../AppModal";
import { CookieConsentBody } from "./CookieConsentBody";
import {
  CookieSettingsFooter,
  CookieSettingsHeader,
  CookieSettingsSection,
} from "./CookieSettings";
import { FloatingButton } from "./FloatingButton";
import { useCookieConsent } from "./useCookieConsent";
import type { ReactNode } from "react";
import type { CookiePreferences } from "./types";
import type { CookiePersistance } from "./useCookieConsent";

export type CookieConsentBodyVariant = "floating" | "banner";

export type CookieConsentProps = {
  children: ReactNode;
  initialPreferences?: CookiePreferences | null;
  variant?: CookieConsentBodyVariant;
  renderBody?: (props: CookieBodyProps) => ReactNode;
  persistance?: CookiePersistance;
};

export type CookieBodyProps = {
  handleDecline: () => void;
  handleAcceptAll: () => void;
  handleShowSettings: () => void;
};

export function CookieConsent({
  children,
  initialPreferences,
  variant = "banner",
  renderBody,
  persistance,
}: CookieConsentProps) {
  const { showBanner, showSettings, hasConsent, preferences, actions } =
    useCookieConsent({ initialPreferences, persistance });

  return (
    <>
      {children}
      {renderBody &&
        showBanner &&
        renderBody({
          handleDecline: actions.decline,
          handleAcceptAll: actions.acceptAll,
          handleShowSettings: actions.showSettings,
        })}

      <CookieConsentBody
        visible={showBanner && !renderBody}
        variant={variant}
        handleDecline={actions.decline}
        handleAcceptAll={actions.acceptAll}
        handleShowSettings={actions.showSettings}
      />

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
            <Switch
              onClick={actions.toggleAnalytics}
              isOn={preferences.analytics}
            />
          </CookieSettingsSection>

          <CookieSettingsSection
            type="Marketing"
            description="Personalize advertisements and measure their performance"
          >
            <Switch
              onClick={actions.toggleMarketing}
              isOn={preferences.marketing}
            />
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
