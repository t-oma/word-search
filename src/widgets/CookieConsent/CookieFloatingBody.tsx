import type { CookieBodyProps } from "./CookieConsent";

export function CookieFloatingBody({
  handleDecline,
  handleAcceptAll,
  handleShowSettings,
}: CookieBodyProps) {
  return (
    <div className="absolute right-4 bottom-4 flex max-w-md flex-col gap-4 rounded-md bg-white p-4 shadow-md md:max-w-lg lg:max-w-xl">
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

      <div className="flex shrink-0 justify-end gap-2">
        <button
          type="button"
          onClick={handleShowSettings}
          className="cursor-pointer rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          Manage
        </button>
        <button
          type="button"
          onClick={handleDecline}
          className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Essential only
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
  );
}
