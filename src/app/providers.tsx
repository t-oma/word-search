import { GameSettingsProvider } from "~/features/game-settings";
import { CookieConsent } from "~/widgets";

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <GameSettingsProvider>
      <CookieConsent>{children}</CookieConsent>
    </GameSettingsProvider>
  );
}

export { Providers };
