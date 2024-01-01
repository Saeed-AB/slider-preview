import type { Meta, StoryObj } from "@storybook/react";

import SliderPreview, { SliderPreviewProps } from "./SliderPreview";
import SliderTopHeader from "./components/SliderTopHeader";

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
const IconComponent = (props: { label: string }) => {
  const { label } = props;

  return (
    <div className="text-slate-300 text-base cursor-pointer hover:bg-slate-500 w-12 h-12 rounded-full flex justify-center items-center">
      {label}
    </div>
  );
};

export const Slider: Story = {
  args: {
    sliderContent: (
      <div>
        <h1 className="flex justify-center items-center text-lg w-[300px] h-[300px] rounded-lg bg-slate-200">
          Slider Content
        </h1>
      </div>
    ),
    prevIcon: <IconComponent label="Prev" />,
    nextIcon: <IconComponent label="Next" />,
    sliderHeader: <SliderTopHeader />,
  },
};
