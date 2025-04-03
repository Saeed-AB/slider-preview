import { FC, ReactNode } from "react";

const SliderHeader: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  return (
    <div
      className="top-0 left-0 absolute w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default SliderHeader;
