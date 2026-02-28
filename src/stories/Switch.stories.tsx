import { Switch } from "~/shared/ui/Switch";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOn: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "onClick" },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {
  args: {
    isOn: false,
    disabled: false,
    onClick: () => {},
  },
};

export const On: Story = {
  args: {
    isOn: true,
    disabled: false,
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    isOn: false,
    disabled: true,
    onClick: () => {},
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <label htmlFor="analytics" className="text-sm font-medium">
        Enable analytics
      </label>
      <Switch id="analytics" {...args} />
    </div>
  ),
  args: {
    isOn: false,
    disabled: false,
    onClick: () => {},
  },
};
