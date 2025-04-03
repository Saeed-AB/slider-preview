import { FC, ReactNode } from "react";
import BackArrowIcon from "../icons/back-arrow.svg?react";

type SliderTopHeaderProps = {
  backText: ReactNode;
  currentIndex?: number;
  totalIndex?: number;
};

const SliderTopHeader: FC<SliderTopHeaderProps> = (props) => {
  const { backText, currentIndex, totalIndex } = props;

  return (
    <div
      className="flex top-0 left-0 absolute justify-between items-center w-full box-border px-7 py-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex gap-2 items-center">
        {/* <img src={BackArrowIcon} /> */}
        <BackArrowIcon />
        <p className="text-white text-base">{backText}</p>
      </div>
      {!!totalIndex && (
        <p className="text-lg text-white">
          {currentIndex ?? 0}/{totalIndex}
        </p>
      )}
      <div />
    </div>
  );
};

export default SliderTopHeader;
