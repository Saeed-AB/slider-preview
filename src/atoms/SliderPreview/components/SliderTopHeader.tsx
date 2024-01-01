import { FC } from "react";
import BackArrowIcon from "../icons/back-arrow.svg?react";

type SliderTopHeaderProps = {
  options: [];
};

const SliderTopHeader: FC<SliderTopHeaderProps> = (props) => {
  const { options } = props;

  return (
    <div
      className="flex top-0 left-0 absolute justify-between items-center w-full box-border px-7 py-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex gap-2 items-center">
        {/* <img src={BackArrowIcon} /> */}
        <BackArrowIcon />
        <p className="text-white text-base">Header Content</p>
      </div>
      <p className="text-lg text-white">1/5</p>
      <div></div>
    </div>
  );
};

export default SliderTopHeader;
