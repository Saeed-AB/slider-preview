import { ReactNode } from "react";
import { createPortal } from "react-dom";
import SliderHeader from "./components/SliderHeader";
import SliderFooter from "./components/SliderFooter";

export type SliderPreviewProps = {
  children?: ReactNode;
  onClose: () => void;
};

const SliderPreview = (props: SliderPreviewProps) => {
  const { children } = props;

  return createPortal(
    <div
      className="flex fixed inset-0 h-full w-full z-50 justify-center items-center bg-[#313131eb] hover:bg-[#414141eb]"
      onClick={props.onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.body
  );
};

SliderPreview.Header = SliderHeader;
SliderPreview.Footer = SliderFooter;

SliderPreview.displayName = "SliderPreview";
export default SliderPreview;
