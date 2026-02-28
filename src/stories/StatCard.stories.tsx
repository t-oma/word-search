import { StatCard } from "~/entities/stats/ui/StatCard";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    value: { control: "text" },
    description: { control: "text" },
    icon: { control: "text" },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Games Played",
    value: 42,
  },
};

export const WithDescription: Story = {
  args: {
    title: "Best Score",
    value: 95,
    description: "Highest score achieved",
  },
};

export const WithIcon: Story = {
  args: {
    title: "Words Found",
    value: 156,
    icon: "🎯",
  },
};

export const Full: Story = {
  args: {
    title: "Average Time",
    value: "2:35",
    description: "Minutes:Seconds",
    icon: "⏱️",
  },
};
