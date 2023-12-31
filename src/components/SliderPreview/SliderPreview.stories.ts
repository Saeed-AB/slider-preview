import type { Meta, StoryObj } from "@storybook/react";

import SliderPreview, { SliderPreviewProps } from "./SliderPreview";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/SliderPreview",
  component: SliderPreview,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<SliderPreviewProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Slider: Story = {
  // args: {
  //   primary: true,
  //   label: "Button",
  // },
};
