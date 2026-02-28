import { CookieBannerBody } from "./CookieBannerBody";
import { CookieFloatingBody } from "./CookieFloatingBody";
import type {
  CookieBodyProps,
  CookieConsentBodyVariant,
} from "./CookieConsent";

export type CookieConsentBodyProps = CookieBodyProps & {
  variant: CookieConsentBodyVariant;
  visible: boolean;
};

export function CookieConsentBody({
  variant,
  visible,
  handleDecline,
  handleAcceptAll,
  handleShowSettings,
}: CookieConsentBodyProps) {
  if (!visible) return null;

  if (variant === "floating") {
    return (
      <CookieFloatingBody
        handleDecline={handleDecline}
        handleAcceptAll={handleAcceptAll}
        handleShowSettings={handleShowSettings}
      />
    );
  }

  return (
    <CookieBannerBody
      handleDecline={handleDecline}
      handleAcceptAll={handleAcceptAll}
      handleShowSettings={handleShowSettings}
    />
  );
}
