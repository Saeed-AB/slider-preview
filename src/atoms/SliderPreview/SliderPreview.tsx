import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

export type SliderPreviewProps = {
  sliderHeader?: ReactNode;
  sliderContent: ReactNode;
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
  onClose: () => void;
};

const SliderPreview: FC<SliderPreviewProps> = (props) => {
  const { sliderHeader, sliderContent, prevIcon, nextIcon } = props;

  return createPortal(
    <div
      className="flex fixed inset-0 h-full w-full z-50 justify-center items-center bg-[#313131eb]"
      onClick={props.onClose}
    >
      {sliderHeader && (
        <div onClick={(e) => e.stopPropagation()}>{sliderHeader}</div>
      )}

      {prevIcon && <div className="absolute left-32">{prevIcon}</div>}
      <div onClick={(e) => e.stopPropagation()}>{sliderContent}</div>
      {nextIcon && <div className="absolute right-32">{nextIcon}</div>}
    </div>,
    document.body
  );
};

export default SliderPreview;
