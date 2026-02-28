type CookieBannerProps = {
  handleDecline: () => void;
  handleAcceptAll: () => void;
  handleShowSettings: () => void;
};

function CookieBanner({
  handleDecline,
  handleAcceptAll,
  handleShowSettings,
}: CookieBannerProps) {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="flex-1 text-sm text-gray-700">
          We use cookies to enhance your browsing experience, serve personalized
          content, and analyze our traffic.{" "}
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
            className="cursor-pointer rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
          >
            Manage Preferences
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

export { CookieBanner };
