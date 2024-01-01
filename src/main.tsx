import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SliderPreview from "@/atoms/SliderPreview";
import SliderTopHeader from "@/atoms/SliderPreview/components/SliderTopHeader";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SliderPreview
      sliderHeader={<SliderTopHeader />}
      sliderContent={
        <div>
          <h1 className="flex justify-center items-center text-lg w-[300px] h-[300px] rounded-lg bg-slate-200">
            Slider Content
          </h1>
        </div>
      }
    />
  </React.StrictMode>
);
