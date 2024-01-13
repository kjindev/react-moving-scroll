import type { Meta, StoryObj } from "@storybook/react";
import CodeBox from "./CodeBox";

const meta: Meta = {
  title: "Components/CodeBox",
  component: CodeBox,
  parameters: {
    // controls: { exclude: ["children", "type"] },
    layout: "centered",
    componentSubtitle:
      "CodeBox는 사용자와의 상호작용을 유도하고, 특정 액션을 트리거하기 위해 사용하는 컴포넌트입니다.",
  },
  argTypes: {
    // size: {
    //   description: "CodeBox의 크기를 결정합니다.",
    //   table: {
    //     defaultValue: { summary: "medium" },
    //   },
    //   defaultValue: "medium",
    // },
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
