import { CookieConsent } from "~/widgets/CookieConsent";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CookiePreferences } from "~/widgets/CookieConsent";

const meta = {
  title: "Components/CookieConsent",
  component: CookieConsent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    initialPreferences: {
      control: "object",
      defaultValue: null,
    },
    variant: {
      control: "radio",
      options: ["banner", "floating"],
      defaultValue: "banner",
    },
  },
  args: {
    initialPreferences: null,
    persistance: {
      save: (prefs: CookiePreferences) => console.log("save", prefs),
      get: () => console.log("get"),
      clear: () => console.log("clear"),
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: {
    variant: "banner",
    children: (
      <div className="min-h-56 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Your App</h1>
      </div>
    ),
  },
};

export const Floating: Story = {
  args: {
    variant: "floating",
    children: (
      <div className="min-h-56 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Your App</h1>
      </div>
    ),
  },
};

export const Accepted: Story = {
  args: {
    variant: "banner",
    initialPreferences: {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    },
    children: (
      <div className="min-h-56 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Your App</h1>
      </div>
    ),
  },
};

export const CustomBody: Story = {
  args: {
    variant: "banner",
    renderBody: ({ handleDecline, handleAcceptAll, handleShowSettings }) => (
      <div className="fixed bottom-0 mx-8 flex items-center gap-2 rounded bg-cyan-200 p-4">
        <h2 className="text-lg font-bold">Custom Body</h2>
        <button
          type="button"
          onClick={handleDecline}
          className="px-4 py-2 transition-colors hover:bg-emerald-100"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={handleAcceptAll}
          className="px-4 py-2 transition-colors hover:bg-blue-500"
        >
          Accept All
        </button>
        <button
          type="button"
          onClick={handleShowSettings}
          className="px-4 py-2 transition-colors hover:bg-gray-100"
        >
          Manage
        </button>
      </div>
    ),
    children: (
      <div className="min-h-56 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Your App</h1>
      </div>
    ),
  },
};

export const Persistance: Story = {
  args: {
    variant: "banner",
    persistance: {
      save: (prefs: CookiePreferences) => {
        console.log("custom save logic", prefs);
      },
      get: () => {
        console.log("custom get logic");
        return null;
      },
      clear: () => {
        console.log("custom clear logic");
      },
    },
    children: (
      <div className="min-h-56 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Your App</h1>
        <p>Check console to see custom persistance logic in work</p>
      </div>
    ),
  },
};
