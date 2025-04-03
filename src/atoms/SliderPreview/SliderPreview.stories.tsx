import { useState } from "react";
import type { StoryFn } from "@storybook/react";

import SliderPreview from ".";
import SliderTopHeader from "./components/SliderTopHeader";
import { SliderPreviewProps } from "./SliderPreview";
import PreviousIcon from "./components/PreviousIcon";
import NextIcon from "./components/NextIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Atoms/SliderPreview",
  component: SliderPreview,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const IconComponent = (
  props: { label: string } & React.HTMLAttributes<HTMLDivElement>
) => {
  const { label, ...rest } = props;

  return (
    <div
      {...rest}
      className="text-slate-300 text-base cursor-pointer hover:bg-slate-500 w-12 h-12 rounded-full flex justify-center items-center"
    >
      {label}
    </div>
  );
};

const slidersCount = Array.from({ length: 5 });

export const SliderTemplate: StoryFn<SliderPreviewProps> = () => {
  const [sliderArgs, setSliderArgs] = useState({
    isOpen: false,
    activeSlide: 0,
  });

  const onSlide = (page: number) => {
    setSliderArgs((prev) => ({
      ...prev,
      activeSlide: prev.activeSlide + page,
    }));
  };

  return (
    <div>
      {sliderArgs.isOpen && (
        <SliderPreview
          onClose={() => setSliderArgs({ isOpen: false, activeSlide: 0 })}
        >
          <div>
            {sliderArgs.activeSlide > 0 && (
              <PreviousIcon>
                <IconComponent label="Prev" onClick={() => onSlide(-1)} />
              </PreviousIcon>
            )}

            {sliderArgs.activeSlide + 1 < slidersCount.length && (
              <NextIcon>
                <IconComponent label="Next" onClick={() => onSlide(1)} />
              </NextIcon>
            )}

            <SliderPreview.Header>
              <SliderTopHeader
                backText="Close Popover"
                currentIndex={sliderArgs.activeSlide + 1}
                totalIndex={slidersCount.length}
              />
            </SliderPreview.Header>

            {slidersCount.map((_, index) =>
              index === sliderArgs.activeSlide ? (
                <h1
                  key={index}
                  className="flex justify-center items-center text-lg w-[300px] h-[300px] rounded-lg"
                  style={{
                    backgroundColor: `#${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}`,
                  }}
                >
                  Slider Content {index + 1}
                </h1>
              ) : null
            )}
          </div>
        </SliderPreview>
      )}

      <button onClick={() => setSliderArgs({ isOpen: true, activeSlide: 0 })}>
        Toggle Slider
      </button>
    </div>
  );
};
