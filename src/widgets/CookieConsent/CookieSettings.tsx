import type { ReactNode } from "react";

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

type CookieSettingsSectionProps = {
  type: string;
  description: string;
  children?: ReactNode;
};

function CookieSettingsSection({
  type,
  description,
  children,
}: Readonly<CookieSettingsSectionProps>) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
      <div className="flex-1">
        <p className="font-medium text-gray-900">{type}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {children}
    </div>
  );
}

type CookieSettingsFooterProps = {
  hasConsent: boolean;
  handleClear: () => void;
  handleDecline: () => void;
  handleAccept: () => void;
};

function CookieSettingsFooter({
  hasConsent,
  handleClear,
  handleDecline,
  handleAccept,
}: CookieSettingsFooterProps) {
  return (
    <div className="flex justify-end gap-2">
      {hasConsent && (
        <>
          <button
            type="button"
            onClick={handleClear}
            className="mr-auto cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
          >
            Clear Preferences
          </button>
        </>
      )}
      <button
        type="button"
        onClick={handleDecline}
        className="cursor-pointer rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={handleAccept}
        className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Save Preferences
      </button>
    </div>
  );
}

export { CookieSettingsHeader, CookieSettingsSection, CookieSettingsFooter };
