import { FC, ReactNode } from "react";

const SliderFooter: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  return (
    <div
      className="bottom-0 left-0 absolute w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default SliderFooter;
