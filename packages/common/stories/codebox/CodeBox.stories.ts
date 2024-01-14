import type { Meta, StoryObj } from "@storybook/react";
import CodeBox from "./CodeBox";

const meta: Meta = {
  title: "Components/CodeBox",
  component: CodeBox,
  parameters: {
    // controls: { exclude: ["children", "type"] },
    layout: "centered",
    componentSubtitle:
      "CodeBox는 코드의 형식을 보존하고 시각적으로 강조할 수 있도록 돕는 컴포넌트입니다.",
  },
  argTypes: {
    children: {
      description: "Label의 내용입니다.",
    },
    className: {
      description: "className을 결정합니다.",
      defaultValue: "",
    },
  },
  args: {
    // size: "medium",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CodeBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "npm install react",
  },
};
