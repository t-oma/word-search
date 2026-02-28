type FloatingButtonProps = {
  handleOpenSettings: () => void;
};

function FloatingButton({ handleOpenSettings }: FloatingButtonProps) {
  return (
    <button
      type="button"
      onClick={handleOpenSettings}
      className="fixed right-4 bottom-4 z-40 flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg transition-colors hover:bg-gray-50"
      aria-label="Open cookie settings"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
        <path d="M11 17v.01" />
        <path d="M7 14v.01" />
      </svg>
      Cookie Settings
    </button>
  );
}

export { FloatingButton };
