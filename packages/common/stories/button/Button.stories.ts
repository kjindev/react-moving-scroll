import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    controls: { exclude: ["children", "type"] },
    layout: "centered",
    componentSubtitle:
      "Button은 사용자와의 상호작용을 유도하고, 특정 액션을 트리거하기 위해 사용하는 컴포넌트입니다.",
  },
  argTypes: {
    size: {
      description: "Button의 크기를 결정합니다.",
      table: {
        defaultValue: { summary: "medium" },
      },
      defaultValue: "medium",
    },
  },
  args: {
    size: "medium",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    type: "WithIcon",
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    type: "IconOnly",
  },
};
